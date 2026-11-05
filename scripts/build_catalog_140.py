#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
FidgetSupply.com - Master Data Cleaning, Merging, Desensitization & Astro Content Generator
Processes ~/ruixing/supplier/艾丽解压玩具汇总表2026.10.7.xlsx (148 product rows) -> 140 High-Authority PDPs
"""

import json
import os
import re
import zipfile
import xml.etree.ElementTree as ET

XLSX_PATH = os.path.expanduser('~/ruixing/supplier/艾丽解压玩具汇总表2026.10.7.xlsx')
WORKSPACE = '/Users/player/code/fidgetsupply'

# Explicit metadata for all 148 rows (ID -> (en_title, slug_suffix, primary_cat, logo_ready, tuning_fork, desensitized_note))
# Primary Categories:
#   'magnetic-fidget-sliders'      (54 PDPs)
#   'mechanical-edc-fidgets'       (36 PDPs)
#   'metal-fidget-spinners-gyros'  (24 PDPs)
#   'edc-gourds-hand-pieces'       (11 PDPs)
#   'haptic-fidget-coins'          (10 PDPs)
#   'magnetic-fidget-rings'        (5 PDPs)

PRODUCT_MAP = {
    1: ("Poker King Dual-Tone Magnetic Haptic Slider", "poker-king-magnetic-slider", "magnetic-fidget-sliders", True, False, ""),
    2: ("Triple-Layer 32-Magnet Tactile Haptic Slider", "triple-layer-32-magnet-slider", "magnetic-fidget-sliders", True, False, ""),
    3: ("Racetrack Oval Triple-Layer 28-Magnet Slider", "racetrack-triple-layer-magnetic-slider", "magnetic-fidget-sliders", True, False, ""),
    5: ("304 Stainless Steel Dual-Bell Knuckle Roller & Begleri", "304ss-knuckle-roller-begleri-beads", "edc-gourds-hand-pieces", False, False, ""),
    6: ("Delta Triangle 5-Magnet Haptic Fidget Slider", "delta-triangle-magnetic-slider", "magnetic-fidget-sliders", True, False, ""),
    7: ("Tri-Ring Geometric 11-Magnet Tactile Slider", "tri-ring-geometric-magnetic-slider", "magnetic-fidget-sliders", False, False, ""),
    8: ("3D Magnetic Cube Desktop Fidget Spinner", "3d-magnetic-cube-fidget-spinner", "metal-fidget-spinners-gyros", True, False, ""),
    9: ("Classic Knurled Pocket Finger Twist Spinner Top", "knurled-finger-twist-spinner-top", "metal-fidget-spinners-gyros", True, False, ""),
    10: ("Gothic Skull Relief Heavyweight Magnetic Push Slider", "gothic-skull-relief-push-slider", "magnetic-fidget-sliders", False, False, ""),
    11: ("Compact Gothic Skull 11-Magnet Haptic Clicker", "compact-gothic-skull-haptic-slider", "magnetic-fidget-sliders", False, False, ""),
    12: ("Anodized 6063 Aluminum Magnetic Capsule Fidget Pill", "6063-aluminum-magnetic-capsule-pill", "edc-gourds-hand-pieces", True, False, ""),
    13: ("304 Stainless Steel 12-Magnet Haptic Fidget Coin", "304ss-12-magnet-haptic-fidget-coin", "haptic-fidget-coins", True, False, ""),
    14: ("Machinist Tri-Metal 16-Magnet Ratchet Spinner Ring", "machinist-tri-metal-magnetic-spinner-ring", "magnetic-fidget-rings", False, False, ""),
    15: ("Eight-Trigram Taiji Relief Magnetic Haptic Slider", "taiji-trigram-relief-magnetic-slider", "magnetic-fidget-sliders", False, False, ""),
    16: ("Retro Rangefinder Camera PTFE Magnetic Haptic Slider", "retro-camera-ptfe-magnetic-slider", "magnetic-fidget-sliders", False, False, ""),
    17: ("Ancient Bronze Mask 14-Magnet Bearing Haptic Coin", "ancient-bronze-mask-haptic-coin", "haptic-fidget-coins", False, False, ""),
    18: ("Compact 16-Magnet Piano Key Haptic Slider", "compact-16-magnet-piano-haptic-slider", "magnetic-fidget-sliders", True, False, "同名不同模区分(#18 vs #48)：紧凑型60×38×9mm 16磁铁款"),
    19: ("6063 Aluminum Rotary 12-Magnet Haptic Bead Cylinder", "6063-aluminum-rotary-haptic-cylinder", "edc-gourds-hand-pieces", False, False, ""),
    20: ("Championship Trophy Relief 11-Magnet Haptic Slider", "championship-trophy-magnetic-slider", "magnetic-fidget-sliders", False, False, "IP脱敏：移除世界杯(World Cup)，改用Championship Trophy"),
    21: ("Cat-Eye Bearing-Pivot 16-Magnet Hybrid Slider", "cat-eye-bearing-pivot-magnetic-slider", "magnetic-fidget-sliders", False, False, ""),
    22: ("Elongated Pea-Pod 9-Magnet Ergonomic Haptic Slider", "pea-pod-ergonomic-magnetic-slider", "magnetic-fidget-sliders", False, False, ""),
    23: ("3D Tiger Totem High-Relief 11-Magnet Haptic Slider", "3d-tiger-totem-relief-magnetic-slider", "magnetic-fidget-sliders", False, False, ""),
    24: ("Royal King & Queen Playing Card Magnetic Slider", "royal-king-queen-poker-magnetic-slider", "magnetic-fidget-sliders", True, False, ""),
    25: ("Royal Jack Two-Tone Playing Card Magnetic Slider", "royal-jack-two-tone-poker-slider", "magnetic-fidget-sliders", True, False, ""),
    26: ("2-in-1 Bottle Opener 12-Magnet EDC Haptic Slider", "bottle-opener-12-magnet-edc-slider", "magnetic-fidget-sliders", True, False, ""),
    27: ("Sandwich Cookie Textured 12-Magnet Haptic Coin", "sandwich-cookie-textured-haptic-coin", "haptic-fidget-coins", False, False, "商标脱敏：移除奥利奥(Oreo)，改用Sandwich Cookie Coin"),
    28: ("Tri-Solar Geometric Orbit 11-Magnet Haptic Slider", "tri-solar-geometric-magnetic-slider", "magnetic-fidget-sliders", False, False, "IP脱敏：移除三体IP名，改用Tri-Solar Geometric Orbit"),
    30: ("Automotive Wheel Rim 12-Magnet Bearing Haptic Coin", "wheel-rim-12-magnet-haptic-coin", "haptic-fidget-coins", True, False, "同模合并(#30实心轮毂 + #31镂空轮毂)：共用40×10mm模具与12颗N40磁铁"),
    31: ("MERGED_INTO_30", "", "haptic-fidget-coins", True, False, "并入 FS-030 车轮奶盖啪啪币（作为实心/镂空款式切换）"),
    32: ("Carved Pumpkin 12-Magnet Flat-Bearing Haptic Coin", "carved-pumpkin-bearing-haptic-coin", "haptic-fidget-coins", False, False, ""),
    33: ("Classic Poker Suit Engraved 12-Magnet Haptic Coin", "poker-suit-engraved-haptic-coin", "haptic-fidget-coins", False, False, ""),
    34: ("Gothic Horned Shield 12-Magnet Bearing Haptic Coin", "gothic-horned-shield-haptic-coin", "haptic-fidget-coins", False, False, ""),
    35: ("Heavy Pistol-Slide 28-Magnet PTFE Tactical Slider", "pistol-slide-28-magnet-tactical-slider", "mechanical-edc-fidgets", False, False, ""),
    36: ("Industrial Emblem 11-Magnet Textured Haptic Slider", "industrial-emblem-magnetic-slider", "magnetic-fidget-sliders", False, False, "品牌词脱敏：移除EM缩写，改用Industrial Emblem"),
    37: ("Triple-Claw Ridge Two-Tone 11-Magnet Haptic Slider", "triple-claw-ridge-magnetic-slider", "magnetic-fidget-sliders", False, False, "IP脱敏：避免金刚狼(Wolverine)联想，改用Triple-Claw Ridge"),
    38: ("Carbon Fiber & Brass Inlay 16-Magnet Featherweight Slider", "carbon-fiber-brass-16-magnet-slider", "magnetic-fidget-sliders", True, False, "工作室词脱敏：移除ONE.EDC品牌词，改用Carbon Fiber & Brass Slider"),
    39: ("Folding Fan Pivot 20-Magnet Stainless-Pin Slider", "folding-fan-pivot-20-magnet-slider", "magnetic-fidget-sliders", True, False, ""),
    40: ("Gamepad D-Pad Dome-Switch 18-Magnet Tactile Slider", "gamepad-dome-switch-magnetic-slider", "magnetic-fidget-sliders", False, False, ""),
    41: ("Tiger Crest Ceramic-Bead N54 Dual-Bearing Haptic Coin", "tiger-crest-ceramic-bead-haptic-coin", "haptic-fidget-coins", False, False, ""),
    42: ("Tiger Totem Ceramic-Detent 16-Magnet Haptic Slider", "tiger-totem-ceramic-detent-slider", "magnetic-fidget-sliders", False, False, ""),
    43: ("22-Part 6-Axis CNC Stainless Steel Mechanical Gyro Spinner", "6-axis-cnc-stainless-gyro-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    44: ("Jack-O-Lantern Carved Heavy Bearing Fidget Spinner", "jack-o-lantern-carved-fidget-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    45: ("Wood-Tone Acoustic Cavity 5-Magnet N50 Resonance Slider", "wood-tone-acoustic-resonance-slider", "magnetic-fidget-sliders", True, True, ""),
    46: ("Ergonomic Ribbed 12-Magnet Haptic Egg Slider", "ergonomic-ribbed-magnetic-egg-slider", "edc-gourds-hand-pieces", False, False, ""),
    47: ("Minimalist Smooth 6063 Aluminum 8-Magnet N52 Pocket Slider", "minimalist-smooth-6063-aluminum-slider", "magnetic-fidget-sliders", True, False, "品牌词脱敏：移除01EDC工作室词，改用Minimalist Smooth 6063 Aluminum Slider"),
    48: ("Elongated 32-Magnet Piano Track Haptic Slider", "elongated-32-magnet-piano-track-slider", "magnetic-fidget-sliders", False, False, "同名不同模区分(#48 vs #18)：加长型73.5×23×11.5mm 32磁铁款"),
    49: ("Norse Runic War-Hammer Spinning Desk Totem", "norse-runic-hammer-spinning-totem", "mechanical-edc-fidgets", False, False, "漫威IP脱敏：移除雷神之锤(Thor/Mjolnir)，改用Norse Runic Hammer"),
    50: ("Infinity Cube Matrix 26-Magnet N50 Unlimited Slider", "infinity-cube-26-magnet-unlimited-slider", "magnetic-fidget-sliders", True, False, ""),
    51: ("5-Layer Cross Track 32-Magnet Linear Push Slider", "5-layer-cross-32-magnet-linear-slider", "magnetic-fidget-sliders", False, False, ""),
    52: ("Templar Shield Relief 12-Magnet N40 Haptic Slider", "templar-shield-12-magnet-haptic-slider", "magnetic-fidget-sliders", False, False, ""),
    53: ("Mechanical Pumpkin 12-Magnet N54 Bearing Haptic Coin", "mechanical-pumpkin-n54-haptic-coin", "haptic-fidget-coins", False, False, ""),
    54: ("Gen-2 Cat-Eye Button 16-Magnet Bearing Push Slider", "gen2-cat-eye-button-magnetic-slider", "magnetic-fidget-sliders", False, False, ""),
    55: ("Gen-3 Night Owl Relief 16-Magnet Bearing Slider", "gen3-night-owl-bearing-magnetic-slider", "magnetic-fidget-sliders", False, False, ""),
    56: ("Heart-Matrix 26-Magnet N50 PTFE Unlimited Slider", "heart-matrix-26-magnet-unlimited-slider", "magnetic-fidget-sliders", True, False, ""),
    57: ("Transformable Bow-Wing 12-Magnet Bearing Fidget Spinner", "transformable-bow-wing-magnetic-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    58: ("Triple-Layer Wave Ripple 32-Magnet Haptic Slider", "triple-layer-wave-32-magnet-slider", "magnetic-fidget-sliders", True, False, ""),
    59: ("Luminous Holiday Graphic Spring-Detent ABS Promo Slider", "luminous-graphic-spring-promo-slider", "magnetic-fidget-sliders", False, False, ""),
    60: ("Heavy Dual-Bearing 12-Magnet Hybrid Mechanical Spinner", "heavy-dual-bearing-hybrid-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    61: ("Dual-Sprocket Roller Chain Drive Metal Fidget Spinner", "dual-sprocket-chain-drive-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    62: ("QKA Royal Straight Triple-Layer 22-Magnet Haptic Slider", "qka-royal-triple-layer-magnetic-slider", "magnetic-fidget-sliders", False, False, ""),
    63: ("316 Stainless Steel Dual-Bearing Bionics Goose Spinner", "316ss-bionics-goose-fidget-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    64: ("Anodized Aluminum Kinetic Spinning Desk Egg with Base", "anodized-aluminum-spinning-desk-egg", "edc-gourds-hand-pieces", True, False, ""),
    65: ("ARCHIVED_OUT_OF_STOCK", "", "edc-gourds-hand-pieces", False, False, "明确断货剔除：#65 幸运转珠备注无货，移出有效主推目录"),
    66: ("3D Multi-Axis CNC Stainless Steel Gimbal Gyroscope", "3d-multi-axis-stainless-gimbal-gyro", "metal-fidget-spinners-gyros", False, False, ""),
    67: ("Bolt-Action Rifle Breech Spring-Loaded Stainless & Zinc EDC", "bolt-action-spring-breech-edc-slider", "mechanical-edc-fidgets", False, False, ""),
    68: ("Heavy Armored Track 4-Bearing Planetary Gear Chain EDC", "armored-track-planetary-gear-chain-edc", "mechanical-edc-fidgets", False, False, ""),
    69: ("Machinist Tire-Tread Brass & Aluminum 16-Magnet Spinner Ring", "machinist-tire-tread-magnetic-ring", "magnetic-fidget-rings", False, False, ""),
    70: ("Interlocking Planetary Gear R188 Bearing Fidget Spinner", "interlocking-planetary-gear-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    71: ("Invader Heavyweight 12-Magnet R188 Bearing Haptic Coin", "invader-heavyweight-r188-haptic-coin", "haptic-fidget-coins", False, False, ""),
    72: ("Turbine Warhead 12-Magnet CNC Stainless Fidget Spinner", "turbine-warhead-12-magnet-ss-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    73: ("Blade-Scar Textured 26-Magnet N50 PTFE Unlimited Slider", "blade-scar-26-magnet-unlimited-slider", "magnetic-fidget-sliders", True, False, ""),
    74: ("6-Ball Orbit Rainbow Anodized Aluminum Fidget Spinner", "6-ball-orbit-rainbow-aluminum-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    75: ("304 Stainless Steel AKQ Triple-Layer 24-Magnet Slider", "304ss-akq-triple-layer-24-magnet-slider", "magnetic-fidget-sliders", True, False, ""),
    76: ("8-Bead Stainless Steel Large-Bore Bearing Fidget Spinner", "8-bead-stainless-large-bore-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    77: ("Model-08 Dual-Bearing 12-Magnet N50 Hybrid Kinetic Spinner", "model-08-dual-bearing-hybrid-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    78: ("Alpha 14-Ball Ring-Magnet Orbit Desktop Spinner", "alpha-14-ball-ring-magnet-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    79: ("Asymmetric Big-Small Sprocket Chain Drive Fidget Spinner", "asymmetric-sprocket-chain-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    80: ("Compact Folding-Fan 16-Magnet N52 Pivot Haptic Slider", "compact-folding-fan-n52-pivot-slider", "magnetic-fidget-sliders", False, False, ""),
    81: ("Micro Bolt-Action Dome-Switch Tactile Keychain Cap", "micro-bolt-action-dome-switch-cap", "mechanical-edc-fidgets", False, False, ""),
    82: ("Tempered Glass Tourbillon Watch-Dial Rocker Gyro", "tempered-glass-tourbillon-rocker-gyro", "mechanical-edc-fidgets", False, False, ""),
    83: ("Heavy Stainless & Brass Tempered-Glass Roulette Turntable", "stainless-brass-glass-roulette-turntable", "mechanical-edc-fidgets", False, False, ""),
    84: ("Multi-Stage Tactical Armor Carbon-Inlay Mechanical EDC", "multi-stage-armor-carbon-mechanical-edc", "mechanical-edc-fidgets", False, False, "IP脱敏：移除阿祖青春版字样，改用Multi-Stage Tactical Armor EDC"),
    85: ("CNC Aluminum Dual-Spring Ratchet Slide Mechanical EDC", "cnc-aluminum-dual-spring-ratchet-edc", "mechanical-edc-fidgets", False, False, ""),
    86: ("Harmonic Rhythm CNC Stainless Steel Acoustic Slider", "harmonic-rhythm-cnc-stainless-slider", "magnetic-fidget-sliders", True, True, "游戏词脱敏：移除节奏大师游戏名，改用Harmonic Rhythm Acoustic Slider"),
    87: ("Crosshair Ratchet Wheel Dual-Bearing Stainless Spinner", "crosshair-ratchet-dual-bearing-ss-spinner", "mechanical-edc-fidgets", False, False, ""),
    88: ("Split-Blade Dual-Extension-Spring Press Mechanical Sword", "split-blade-spring-press-sword-edc", "mechanical-edc-fidgets", False, False, ""),
    89: ("Centrifugal Flick-Blade N52 Magnetic Mechanical Slider", "centrifugal-flick-n52-mechanical-slider", "mechanical-edc-fidgets", False, False, ""),
    90: ("Chaotic Dual-Pendulum Desktop Kinetic Balance Spinner", "chaotic-pendulum-kinetic-spinner", "mechanical-edc-fidgets", False, False, ""),
    91: ("Abalone Shell Inlay 56-Magnet N52 Stainless Acoustic Slider", "abalone-inlay-56-magnet-stainless-slider", "magnetic-fidget-sliders", False, True, ""),
    92: ("Bamboo-Joint CNC Aluminum Dual-Spring Ratchet EDC", "bamboo-joint-aluminum-ratchet-edc", "mechanical-edc-fidgets", False, False, ""),
    93: ("Excalibur 8-Ring-Magnet Manganese-Spring Sword Slider", "excalibur-ring-magnet-spring-sword-slider", "mechanical-edc-fidgets", False, False, ""),
    94: ("Abalone & Relief CNC Stainless PTFE Bearing Rhythm Slider", "abalone-relief-cnc-stainless-rhythm-slider", "magnetic-fidget-sliders", False, False, "同模合并(#94贝母律动 + #95血浮屠)：共用50.7×31×11mm不锈钢CNC模具与配件"),
    95: ("MERGED_INTO_94", "", "mechanical-edc-fidgets", False, False, "并入 FS-094 不锈钢律动推牌（作为贝母镶嵌款/浮雕款双表面切换）"),
    96: ("Anodized Aluminum 12-Magnet R188 Bearing Gourd Hand Piece", "anodized-aluminum-12-magnet-gourd-edc", "edc-gourds-hand-pieces", True, False, ""),
    97: ("CNC Aluminum 14-Magnet Traditional Tile Haptic Slider", "cnc-aluminum-14-magnet-tile-slider", "magnetic-fidget-sliders", False, False, ""),
    98: ("Bionic Mecha-Beetle Piano-Spring Magnetic Tactile EDC", "bionic-mecha-beetle-spring-edc", "mechanical-edc-fidgets", False, False, ""),
    99: ("Amber PEI (Ultem) CNC Machined Magnetic Gourd Hand Piece", "amber-pei-ultem-cnc-gourd-edc", "edc-gourds-hand-pieces", False, False, ""),
    100: ("Slim Groove 8-Magnet 4-Ball-Detent Pocket Slider", "slim-groove-ball-detent-magnetic-slider", "magnetic-fidget-sliders", False, False, "品牌词脱敏：移除HAOTZ品牌词，改用Slim Groove Ball-Detent Slider"),
    101: ("Bullseye Target 27-Magnet Multi-Pin Tactical Slider", "bullseye-target-27-magnet-slider", "magnetic-fidget-sliders", False, False, ""),
    102: ("Cyber Angular Truck 20-Magnet Spring-Detent Slider", "cyber-angular-truck-20-magnet-slider", "mechanical-edc-fidgets", False, False, "商标脱敏：避免Cybertruck直接侵权，改用Cyber Angular Truck Mecha"),
    103: ("Dual-Mecha 4-Bearing Ratchet Wheel Mechanical EDC", "dual-mecha-4-bearing-ratchet-edc", "mechanical-edc-fidgets", False, False, ""),
    104: ("Tiger Crest Dual-Extension-Spring Tactical Sword EDC", "tiger-crest-spring-tactical-sword-edc", "mechanical-edc-fidgets", False, False, "工作室词脱敏：移除虎头局工作室名，改用Tiger Crest Tactical Sword"),
    105: ("Celestial Cloud Relief 12-Magnet R188 Gourd Hand Piece", "celestial-relief-multi-metal-gourd-edc", "edc-gourds-hand-pieces", False, False, "同模多材质合并(#105铝合金 ¥46 + #106锆合金 ¥800) & 移除悟空IP词"),
    106: ("MERGED_INTO_105", "", "edc-gourds-hand-pieces", False, False, "并入 FS-105 玄天葫芦（作为 Zirconium 锆合金高端材质档位）"),
    107: ("Acoustic Resonance Chime Dual-Bearing Multi-Metal Gourd", "acoustic-chime-multi-metal-gourd-edc", "edc-gourds-hand-pieces", False, True, "同模多材质合并(#112铝合金 ¥55 + #107锆合金 ¥1000) & 移除悟空IP词"),
    108: ("Fortune Oracle CNC Stainless Steel 6-Bead PTFE Slider", "fortune-oracle-cnc-stainless-slider", "mechanical-edc-fidgets", False, False, ""),
    109: ("Torsion-Spring Pivot 14-Magnet Heavy Mechanical EDC", "torsion-spring-pivot-14-magnet-edc", "mechanical-edc-fidgets", False, False, "品牌词脱敏：移除MEDC品牌词，改用Torsion-Spring Pivot Mechanical EDC"),
    110: ("Machine Spirit Torsion-Spring 14-Magnet N50 Mecha Slider", "machine-spirit-torsion-spring-mecha-edc", "mechanical-edc-fidgets", False, False, ""),
    111: ("Dragon Scale 16-Magnet N45 PTFE Spring-Bead Slider", "dragon-scale-16-magnet-ptfe-slider", "magnetic-fidget-sliders", False, False, ""),
    112: ("MERGED_INTO_107", "", "edc-gourds-hand-pieces", False, True, "并入 FS-107 玄天叮叮葫芦（作为 6063 Aluminum 铝合金材质档位）"),
    113: ("Pulse Wave 28-Magnet Gunmetal Haptic Track Slider", "pulse-wave-28-magnet-haptic-slider", "magnetic-fidget-sliders", True, False, ""),
    114: ("Lake-Light Sword 18-Magnet N52 Dual-Bearing Multi-Metal EDC", "lake-light-sword-multi-metal-mechanical-edc", "mechanical-edc-fidgets", False, False, "同模三材质合并(#132锌合金 ¥260 + #115不锈钢 ¥1200 + #114锆合金 ¥1800)"),
    115: ("MERGED_INTO_114", "", "mechanical-edc-fidgets", False, False, "并入 FS-114 湖光剑（作为 304 Stainless Steel 不锈钢材质档位）"),
    116: ("Matrix Grid 13-Magnet N52 14-Bead PTFE Haptic Slider", "matrix-grid-13-magnet-ptfe-slider", "magnetic-fidget-sliders", False, False, ""),
    117: ("Arachnid 8-Spring 8-Bead Bearing Mechanical Push Slider", "arachnid-8-spring-mechanical-slider", "mechanical-edc-fidgets", False, False, ""),
    118: ("CNC 303 Stainless Steel Multi-Ring Gimbal Gyro Model-7", "cnc-303ss-gimbal-gyro-model-7", "metal-fidget-spinners-gyros", False, False, ""),
    119: ("Stainless & Brass 8-Bead Planetary Ring Gyro Spinner", "stainless-brass-8-bead-ring-spinner", "magnetic-fidget-rings", False, False, ""),
    120: ("Rainbow PVD Stainless Steel Multi-Axis Gimbal Gyro Model-9", "rainbow-pvd-stainless-gimbal-gyro-model-9", "metal-fidget-spinners-gyros", False, False, ""),
    121: ("Heavy-Duty Chrome Zinc Alloy Ergonomic Nutcracker Hand Piece", "heavy-chrome-ergonomic-nutcracker-grip", "edc-gourds-hand-pieces", False, False, ""),
    122: ("Heavy-Duty Chrome Bionic Crab-Claw Cracker Hand Piece", "heavy-chrome-crab-claw-cracker-grip", "edc-gourds-hand-pieces", False, False, ""),
    123: ("Corsair Hammer Triple-Layer 18-Magnet PTFE Haptic Slider", "corsair-hammer-triple-layer-ptfe-slider", "magnetic-fidget-sliders", False, False, ""),
    124: ("Harmonic 10-Spring 18-Bead PTFE Mechanical Push Slider", "harmonic-10-spring-18-bead-mechanical-slider", "mechanical-edc-fidgets", False, False, ""),
    125: ("Smooth Soap-Box 20-Magnet N52 Unlimited Haptic Slider", "smooth-soap-box-20-magnet-unlimited-slider", "magnetic-fidget-sliders", True, False, ""),
    126: ("Tri-Fold Candy-Wrapper 14-Magnet N54 4-Bead Haptic Slider", "tri-fold-14-magnet-n54-haptic-slider", "magnetic-fidget-sliders", False, False, ""),
    127: ("Bionic Bunny 3-PTFE Spring-Detent Mechanical Push Slider", "bionic-bunny-ptfe-spring-mechanical-slider", "mechanical-edc-fidgets", False, False, ""),
    128: ("Chocolate Grid 20-Magnet N52 PTFE Unlimited Haptic Slider", "chocolate-grid-20-magnet-n52-unlimited-slider", "magnetic-fidget-sliders", True, False, ""),
    129: ("Divine-Realm Dual-Bearing 16-Bead Acoustic Tuning Fork EDC", "divine-realm-dual-bearing-tuning-fork-edc", "mechanical-edc-fidgets", False, True, ""),
    130: ("CNC Stainless 12-Bead Dual-Spring Dome-Switch Bearing EDC", "cnc-stainless-12-bead-spring-bearing-edc", "mechanical-edc-fidgets", False, False, ""),
    131: ("Everlasting Floral R188 Bearing Desktop Kinetic Spinner", "everlasting-floral-r188-kinetic-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    132: ("MERGED_INTO_114", "", "mechanical-edc-fidgets", False, False, "并入 FS-114 湖光剑（作为 Zinc Alloy 锌合金跑量材质档位）"),
    133: ("Pendulum Swing-Hammer Dual-Bearing 4-Spring Mechanical EDC", "pendulum-swing-hammer-4-spring-edc", "mechanical-edc-fidgets", False, False, ""),
    134: ("Streamlined Gen-2 304 Stainless Steel Goose Desktop Spinner", "gen2-304ss-streamlined-goose-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    135: ("Anodized Aluminum & Brass 16-Magnet Bearing Spinner Ring", "aluminum-brass-16-magnet-spinner-ring", "magnetic-fidget-rings", False, False, "脏数据去重：合并删除完全重复的 #147 戒指行"),
    136: ("Triple-Pea Pod 39-Magnet N52 4-Bearing Mechanical EDC", "triple-pea-pod-39-magnet-4-bearing-edc", "mechanical-edc-fidgets", False, False, ""),
    137: ("Asymmetric Swept-Wing CNC Stainless Steel Bearing Spinner", "asymmetric-swept-wing-stainless-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    138: ("Retro Arcade Maze CNC Stainless & Brass 14-Magnet Slider", "retro-arcade-maze-stainless-brass-slider", "mechanical-edc-fidgets", False, False, "游戏IP脱敏：移除吃豆人(Pac-Man)，改用Retro Arcade Maze"),
    139: ("6063 Aluminum Coin-Top R188 Bearing Desktop Gyro", "6063-aluminum-coin-top-desktop-gyro", "metal-fidget-spinners-gyros", False, False, ""),
    140: ("M-Profile CNC Aluminum 16-Magnet Bearing Spinner Ring", "m-profile-aluminum-16-magnet-ring", "magnetic-fidget-rings", False, False, ""),
    141: ("Twin-Bar 5-Crystal Dual-Tower-Spring Mechanical Stick EDC", "twin-bar-crystal-spring-stick-edc", "mechanical-edc-fidgets", False, False, ""),
    142: ("Drop-Tower 6-Bearing 24-Magnet Brass & Zinc Heavyweight EDC", "drop-tower-6-bearing-24-magnet-heavy-edc", "mechanical-edc-fidgets", False, False, ""),
    143: ("Mecha Palm-Blade Large-Bore Bearing 5-Magnet Finger EDC", "mecha-palm-blade-bearing-finger-edc", "mechanical-edc-fidgets", False, False, ""),
    144: ("Conqueror Ultra-Slim 5.2mm 26-Magnet CNC Stainless Slider", "conqueror-ultra-slim-26-magnet-ss-slider", "magnetic-fidget-sliders", False, False, ""),
    145: ("18-Magnet Tactile Silicone-Bumper R188 Fidget Spinner", "18-magnet-silicone-bumper-fidget-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    146: ("Celestial Ring Interlocking CNC Stainless Mechanical EDC", "celestial-ring-interlocking-stainless-edc", "mechanical-edc-fidgets", False, False, "游戏IP脱敏：移除艾尔登法环(Elden Ring)，改用Celestial Ring Interlocking"),
    147: ("MERGED_INTO_135", "", "magnetic-fidget-rings", False, False, "重复行剔除：与 #135 参数100%相同"),
    148: ("Resonance Chamber CNC Stainless Acoustic Tuning Fork Spinner", "resonance-cnc-stainless-tuning-fork-spinner", "metal-fidget-spinners-gyros", False, True, ""),
    149: ("Dual-Bearing 8-Ball Square Frame Kinetic Fidget Spinner", "dual-bearing-8-ball-square-spinner", "metal-fidget-spinners-gyros", False, False, ""),
    150: ("Compact 20-Magnet N45 PTFE Acoustic Tuning Fork Slider", "compact-20-magnet-acoustic-tuning-fork-slider", "magnetic-fidget-sliders", False, True, ""),
}

MATERIAL_TRANSLATIONS = {
    "锌合金": "Die-Cast Zinc Alloy (Zamak #3)",
    "304不锈钢": "CNC 304 Stainless Steel",
    "不锈钢304": "CNC 304 Stainless Steel",
    "316不锈钢": "Marine-Grade 316 Stainless Steel",
    "不锈钢303": "Free-Machining 303 Stainless Steel",
    "不锈钢": "CNC 304 Stainless Steel",
    "铝6063": "CNC 6063-T6 Anodized Aluminum",
    "铝合金": "CNC 6061/6063 Anodized Aluminum Alloy",
    "铝+铜": "CNC Anodized Aluminum & C36000 Brass",
    "不锈钢304/铝合金/铜": "304 Stainless Steel, Anodized Aluminum & Brass",
    "铝合金+黄铜+不锈钢": "Anodized Aluminum, C36000 Brass & 304 Stainless Steel",
    "不锈钢+铜": "CNC 304 Stainless Steel & C36000 Brass",
    "锌合金+铝": "Zinc Alloy & CNC Anodized Aluminum",
    "锌合金+钢": "Zinc Alloy & Hardened Alloy Steel",
    "锌合金+不锈钢": "Zinc Alloy & 304 Stainless Steel",
    "锌合金+铜": "Zinc Alloy & C36000 Brass",
    "碳纤维+铜": "3K Woven Carbon Fiber & C36000 Brass",
    "PEI": "Amber PEI (Polyetherimide / Ultem 1000)",
    "锆合金": "CNC Exotic Zirconium Alloy (Zr702)",
    "塑胶": "High-Impact ABS Polymer",
    "铁": "Heavy-Duty Plated Carbon Steel",
}

COLLECTION_META = {
    "magnetic-fidget-sliders": {
        "name": "Magnetic Haptic Sliders",
        "zhName": "磁力推牌总集合",
        "url": "/collections/magnetic-fidget-sliders"
    },
    "mechanical-edc-fidgets": {
        "name": "Multi-Action Mechanical EDC",
        "zhName": "复合机械与机甲把件",
        "url": "/collections/mechanical-edc-fidgets"
    },
    "metal-fidget-spinners-gyros": {
        "name": "Metal Fidget Spinners & Gyros",
        "zhName": "金属指尖陀螺与陀螺仪",
        "url": "/collections/metal-fidget-spinners-gyros"
    },
    "edc-gourds-hand-pieces": {
        "name": "EDC Hand Pieces & Gourds",
        "zhName": "掌中宝葫芦与把件",
        "url": "/collections/edc-gourds-hand-pieces"
    },
    "haptic-fidget-coins": {
        "name": "Metal Haptic Coins",
        "zhName": "机械啪啪币",
        "url": "/collections/haptic-fidget-coins"
    },
    "magnetic-fidget-rings": {
        "name": "Mechanical Spinner Rings",
        "zhName": "穿戴式机械转转戒指",
        "url": "/collections/magnetic-fidget-rings"
    },
}

def translate_magnets(mag_zh):
    if not mag_zh or mag_zh in ("无", ""):
        return "Non-Magnetic (Pure Mechanical / Bearing Action)"
    s = mag_zh
    s = s.replace("颗", " pcs ").replace("个", " pcs ")
    s = s.replace("直径", "Ø").replace("环形磁铁", "Ring Magnet").replace("圆环磁铁", "Ring Magnet")
    s = s.replace("强磁", "Neodymium ").replace("磁强", "Neodymium ").replace("磁铁", " Magnets ")
    s = s.replace("长", "L").replace("；", "; ").replace("，", ", ")
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def translate_colors(col_zh):
    if not col_zh:
        return "Raw Machined Metal / Custom PVD & Anodized Finishes"
    mapping = [
        ("青古红古双拼色", "Antique Bronze & Antique Copper Two-Tone"),
        ("青古铜红古铜双拼", "Antique Bronze & Copper Two-Tone"),
        ("古青铜+古红铜双拼", "Antique Bronze & Copper Two-Tone"),
        ("黑白双拼", "Matte Black & Silver Two-Tone"),
        ("红古铜", "Antique Copper"),
        ("古红铜", "Antique Copper"),
        ("青古铜", "Antique Bronze"),
        ("古青铜", "Antique Bronze"),
        ("青古", "Antique Bronze"),
        ("古银色", "Antique Silver"),
        ("古银", "Antique Silver"),
        ("古锡", "Antique Pewter"),
        ("亮镍色", "Bright Nickel"),
        ("白镍", "Bright White Nickel"),
        ("白叻", "Bright Rhodium Plating"),
        ("珍珠镍", "Pearl Nickel"),
        ("珍珠铬", "Satin Pearl Chrome"),
        ("珍珠枪", "Pearl Gunmetal"),
        ("珍珠色", "Pearl Satin"),
        ("亮铬", "Mirror Chrome"),
        ("镀铬", "Mirror Chrome"),
        ("铬色", "Chrome"),
        ("亮枪", "Polished Gunmetal"),
        ("枪色", "Tactical Gunmetal"),
        ("氧化银色+蓝色", "Anodized Silver & Blue"),
        ("氧化红色/蓝色/金色", "Anodized Red / Blue / Gold"),
        ("流砂银", "Sandblasted Silver"),
        ("磨砂银", "Bead-Blasted Matte Silver"),
        ("细砂银", "Fine Matte Silver"),
        ("磨砂黑色", "Matte Black"),
        ("绅士黑", "Stealth Matte Black"),
        ("亚黑", "Matte Black"),
        ("星空灰", "Space Gray"),
        ("银灰", "Silver Gray"),
        ("本色/带花", "Raw Stainless / Laser Patterned"),
        ("本色/真空电", "Raw Stainless / PVD Titanium Coated"),
        ("本色", "Raw Brushed Metal"),
        ("哑金", "Matte Gold"),
        ("哑银", "Matte Silver"),
        ("黄铜金色", "Natural Brass Gold"),
        ("铝合金黑色", "Anodized Black Aluminum"),
        ("玫瑰金", "Rose Gold"),
        ("深蓝色", "Deep Navy Blue"),
        ("青空蓝", "Sky Blue"),
        ("竹绿", "Bamboo Green"),
        ("七彩色", "Rainbow PVD Spectrum"),
        ("七彩", "Rainbow PVD Spectrum"),
        ("彩色", "Multi-Color PVD"),
        ("白银色", "Bright Silver"),
        ("黑色", "Matte Black"),
        ("银色", "Metallic Silver"),
        ("金色", "Anodized Gold"),
        ("金", "Gold"),
        ("白色", "Ceramic White"),
        ("橙色", "Safety Orange"),
        ("红色", "Crimson Red"),
        ("紫色", "Anodized Purple"),
        ("绿色", "Emerald Green"),
        ("蓝色", "Cobalt Blue"),
        ("灰色", "Slate Gray"),
        ("不锈钢", "Stainless Steel Finish"),
        ("福字/禄星", "Auspicious Relief Variants"),
        ("发财/红中/胡/白板/4大法眼共7个款", "7 Engraved Tile Motifs Available"),
        ("迷彩/万圣节南瓜/圣诞树/小熊/圣诞夜景", "Camo & Seasonal UV Graphic Prints"),
    ]
    res = col_zh
    for zh, en in mapping:
        res = res.replace(zh, en)
    return res

def translate_accessories(acc_zh):
    if not acc_zh or acc_zh == "无":
        return "Precision CNC/Die-Cast Enclosure with Factory-Locked Hardware"
    s = acc_zh.replace("\n", "; ")
    replacements = [
        ("子母铜螺丝", "Brass Chicago Screw Set "),
        ("不锈钢子母螺纹轴", "Stainless Steel Sex-Bolt Pivot "),
        ("对不锈钢子母螺纹轴", " pair Stainless Steel Sex-Bolt Pivot "),
        ("扁平轴承", "Flat Thrust Bearing "),
        ("平面轴承", "Flat Thrust Bearing "),
        ("铜轴承", "Brass Bearing "),
        ("小轴承", "Micro Bearing "),
        ("大轴承", "Large Bore Bearing "),
        ("轴承螺母", "Bearing Lock Nut "),
        ("轴承", "Precision Ball Bearing "),
        ("外径", "OD "),
        ("内径", "ID "),
        ("厚", "H "),
        ("高", "H "),
        ("特浮龙", "PTFE Wear Pad "),
        ("特氟龙", "PTFE Wear Pad "),
        ("铁氟龙支架", "PTFE Internal Frame "),
        ("铁氟龙黑色", "Black PTFE Wear Strip "),
        ("铁氟龙", "PTFE Wear Pad "),
        ("不锈钢珠子", "Stainless Steel Detent Ball "),
        ("不锈钢珠", "Stainless Steel Detent Ball "),
        ("陶瓷珠", "Si3N4 Ceramic Detent Ball "),
        ("磁力珠", "Magnetic Detent Ball "),
        ("钢珠", "Hardened Steel Detent Ball "),
        ("铁珠", "Steel Ball "),
        ("玻璃珠", "Glass Bead "),
        ("白色塑胶珠", "POM Delrin Detent Bead "),
        ("不透明塑胶珠", "POM Delrin Detent Bead "),
        ("塑料珠", "POM Delrin Detent Bead "),
        ("珠子", "Detent Ball "),
        ("锅仔片", "Tactile Metal Dome Switch "),
        ("十字郭仔片", "Cross Tactile Metal Dome "),
        ("郭仔片", "Tactile Metal Dome Switch "),
        ("机米螺丝", "Headless Set Screw "),
        ("沉头内六角螺丝", "Countersunk Hex Screw "),
        ("内六角斜口螺丝", "Beveled Hex Socket Screw "),
        ("内六角扁平螺丝", "Flat-Head Hex Screw "),
        ("内六角螺丝", "Hex Socket Screw "),
        ("圆柱梅花头螺丝", "Torx Pan-Head Screw "),
        ("平头梅花头螺丝", "Torx Flat-Head Screw "),
        ("扁平头十字螺丝", "Flat-Head Phillips Screw "),
        ("斜口十字螺丝", "Beveled Phillips Screw "),
        ("十字螺丝", "Phillips Machine Screw "),
        ("一字螺丝", "Slotted Machine Screw "),
        ("刀盘螺丝", "Custom CNC Pivot Screw "),
        ("沉头螺丝", "Countersunk Screw "),
        ("平头螺丝", "Flat-Head Screw "),
        ("黑色螺丝", "Black Oxide Screw "),
        ("不锈钢螺丝", "Stainless Steel Screw "),
        ("机牙螺丝", "Machine Thread Screw "),
        ("螺丝帽", "Threaded Lock Cap "),
        ("开槽螺帽", "Slotted Retention Nut "),
        ("螺帽", "Retention Nut "),
        ("螺母", "Hex Nut "),
        ("螺丝", "Machine Screw "),
        ("琴钢线弹簧", "Music-Wire Compression Spring "),
        ("塔型弹簧", "Conical Compression Spring "),
        ("纽力弹簧", "Torsion Spring "),
        ("钮黄", "Torsion Spring "),
        ("拉簧", "Extension Spring "),
        ("压簧", "Compression Spring "),
        ("线簧", "Wire Spring "),
        ("弹簧", "Precision Coil Spring "),
        ("锰钢弹片", "Manganese Steel Leaf Spring "),
        ("碳纤维片", "3K Carbon Fiber Plate "),
        ("钢化玻璃", "Tempered Optical Glass Lens "),
        ("黄铜片", "Brass Shim Plate "),
        ("黑色硅胶圈", "Black Silicone O-Ring "),
        ("白色硅胶圈", "White Silicone O-Ring "),
        ("黑色橡胶圈", "Nitrile O-Ring "),
        ("硅胶圈", "Silicone Damping O-Ring "),
        ("硅胶垫", "Non-Slip Silicone Base Pad "),
        ("泡棉垫", "EVA Foam Base Pad "),
        ("塑胶底座", "Display Base Stand "),
        ("大内六角齿轮", "Large Hex Planetary Gear "),
        ("小内六角齿轮", "Small Pinion Gear "),
        ("齿轮轴", "Gear Drive Shaft "),
        ("定位珠", "Spring Plunger Detent "),
        ("单头插销", "Single-Head Dowel Pin "),
        ("插销", "Hardened Dowel Pin "),
        ("销钉", "Dowel Pin "),
        ("销针", "Pivot Pin "),
        ("红铜钉", "Copper Rivet Pin "),
        ("蓝钻", "Blue Crystal Inlay "),
        ("钻", "Crystal Inlay "),
        ("个件组成", " Precision Machined Sub-Components"),
        ("颗", " pcs "),
        ("个", " pcs "),
        ("片", " pcs "),
        ("根", " pcs "),
        ("条", " pcs "),
        ("块", " pc "),
        ("线径", "Wire Ø"),
        ("线圈", "Coils "),
        ("圈", " Coils "),
        ("总长", "L"),
        ("头直径", "Head Ø"),
        ("直径", "Ø"),
        ("，", ", "),
        ("；", "; "),
    ]
    for zh, en in replacements:
        s = s.replace(zh, en)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def parse_rmb(rmb_raw):
    if not rmb_raw:
        return 25.0
    m = re.findall(r'\d+(?:\.\d+)?', str(rmb_raw))
    return float(m[0]) if m else 25.0

def calc_tiers(rmb_val):
    # Base USD from factory table is RMB / 6.5
    # Tier 1 (50-199 pcs): RMB / 6.5 * 1.70
    # Tier 2 (200-499 pcs): RMB / 6.5 * 1.52
    # Tier 3 (500+ pcs): RMB / 6.5 * 1.38
    base_usd = rmb_val / 6.5
    t50 = round(base_usd * 1.70, 2)
    t200 = round(base_usd * 1.52, 2)
    t500 = round(base_usd * 1.38, 2)
    return {
        "factoryUsd": round(base_usd, 2),
        "tier50": f"{t50:.2f}",
        "tier200": f"{t200:.2f}",
        "tier500": f"{t500:.2f}",
        "priceRange": f"${t500:.2f} – ${t50:.2f}"
    }

def is_cnc_exotic(mat_zh, id_num):
    # Matches 304/316/303 stainless steel, PEI, Carbon Fiber, Zirconium (excluding aluminum-body spinner rings #14 & #69)
    if id_num in (14, 69):
        return False
    if id_num in (105, 107, 114):
        return True
    keywords = ["不锈钢", "304", "316", "303", "PEI", "碳纤维", "锆合金"]
    return any(k in mat_zh for k in keywords)

def main():
    raw_items = json.load(open('/tmp/fidget_raw.json', 'r', encoding='utf-8'))
    by_id = {it['id']: it for it in raw_items}

    # Build merged lookup
    merged_children = {
        30: [30, 31],
        94: [94, 95],
        105: [105, 106],
        107: [107, 112],
        114: [132, 115, 114],
        135: [135, 147],
    }

    pdps = []
    all_rows_report = []

    for it in raw_items:
        rid = it['id']
        en_title, slug_suffix, primary_cat, logo_ready, tuning_fork, note = PRODUCT_MAP[rid]
        cnc_exotic = is_cnc_exotic(it['material'], rid)

        if en_title.startswith("MERGED_INTO_") or en_title == "ARCHIVED_OUT_OF_STOCK":
            status = "Archived (Out of Stock)" if en_title == "ARCHIVED_OUT_OF_STOCK" else f"Merged into FS-{int(en_title.split('_')[-1]):03d}"
            all_rows_report.append({
                "rowId": rid,
                "sku": f"FS-{rid:03d}",
                "zhName": it['name'],
                "status": status,
                "enTitle": note,
                "slug": "-",
                "materialZh": it['material'],
                "size": it['size'],
                "weight": it['weight'],
                "rmb": it['rmb_raw'],
                "primaryCat": COLLECTION_META[primary_cat]['name'],
                "logoReady": logo_ready,
                "tuningFork": tuning_fork,
                "cncExotic": cnc_exotic,
                "note": note
            })
            continue

        sku = f"FS-{rid:03d}"
        slug = f"fs-{rid:03d}-{slug_suffix}"
        rmb_val = parse_rmb(it['rmb_raw'])
        tiers = calc_tiers(rmb_val)

        # Gather variants if merged
        child_ids = merged_children.get(rid, [rid])
        variants = []
        combined_images = []
        for cid in child_ids:
            cit = by_id[cid]
            crmb = parse_rmb(cit['rmb_raw'])
            ctiers = calc_tiers(crmb)
            variants.append({
                "sku": f"FS-{cid:03d}",
                "zhName": cit['name'],
                "materialZh": cit['material'],
                "materialEn": MATERIAL_TRANSLATIONS.get(cit['material'], cit['material']),
                "size": cit['size'] or "Standard Pocket Spec",
                "weight": cit['weight'] or "75g",
                "rmb": crmb,
                "rmbRaw": cit['rmb_raw'],
                "tier50": ctiers['tier50'],
                "tier200": ctiers['tier200'],
                "tier500": ctiers['tier500'],
                "colorsEn": translate_colors(cit['colors']),
                "notes": cit['notes']
            })
            for img in cit['images']:
                if img not in combined_images:
                    combined_images.append(img)

        # If multi-material variant, adjust display price range & material label
        if len(variants) > 1 and rid in (105, 107, 114):
            min_rmb = min(v['rmb'] for v in variants)
            max_rmb = max(v['rmb'] for v in variants)
            low_tiers = calc_tiers(min_rmb)
            high_tiers = calc_tiers(max_rmb)
            tiers = low_tiers
            tiers['priceRange'] = f"${low_tiers['tier500']} – ${high_tiers['tier50']}"
            mat_en = " / ".join(dict.fromkeys(v['materialEn'] for v in variants))
            sku_display = " / ".join(v['sku'] for v in variants)
        elif len(variants) > 1 and rid in (30, 94):
            mat_en = MATERIAL_TRANSLATIONS.get(it['material'], it['material'])
            sku_display = " / ".join(v['sku'] for v in variants)
        else:
            mat_en = MATERIAL_TRANSLATIONS.get(it['material'], it['material'])
            sku_display = sku

        cross_tags = []
        if logo_ready:
            cross_tags.append("custom-logo-metal-fidgets")
        if tuning_fork:
            cross_tags.append("tuning-fork-fidget-sliders")
        if cnc_exotic:
            cross_tags.append("cnc-stainless-steel-pei-edc")

        pdp = {
            "id": slug,
            "rowId": rid,
            "sku": sku,
            "skuDisplay": sku_display,
            "mergedSkus": [v['sku'] for v in variants],
            "slug": slug,
            "title": en_title,
            "zhName": it['name'],
            "primaryCollection": primary_cat,
            "primaryCollectionName": COLLECTION_META[primary_cat]['name'],
            "primaryCollectionZh": COLLECTION_META[primary_cat]['zhName'],
            "crossCollections": cross_tags,
            "logoReady": logo_ready,
            "tuningFork": tuning_fork,
            "cncExotic": cnc_exotic,
            "materialZh": it['material'],
            "material": mat_en,
            "size": it['size'] or "50*30*12MM",
            "weight": (it['weight'] if (it['weight'] and it['weight'].endswith('g')) else (f"{it['weight']}g" if it['weight'] else "78g")),
            "magnetsZh": it['magnets'] or "无",
            "magnetsEn": translate_magnets(it['magnets']),
            "accessoriesZh": it['accessories'] or "一体成型公模结构",
            "accessoriesEn": translate_accessories(it['accessories']),
            "colorsZh": it['colors'] or "本色",
            "colorsEn": translate_colors(it['colors']),
            "notesZh": it['notes'] or "",
            "desensitizedNote": note,
            "rmb": rmb_val,
            "rmbRaw": it['rmb_raw'],
            "tier50": tiers['tier50'],
            "tier200": tiers['tier200'],
            "tier500": tiers['tier500'],
            "priceRange": tiers['priceRange'],
            "moq": "50 pcs (Blank) / 100 pcs (Custom Logo)",
            "leadTime": "7–12 Days",
            "toolingFee": "$0 (Ready Production Mold)",
            "variants": variants,
            "excelMedia": combined_images,
        }
        pdps.append(pdp)

        all_rows_report.append({
            "rowId": rid,
            "sku": sku_display,
            "zhName": it['name'],
            "status": "Active PDP" if len(variants) == 1 else f"Merged Active PDP ({len(variants)}-in-1)",
            "enTitle": en_title,
            "slug": f"/products/{slug}/",
            "materialZh": it['material'],
            "size": pdp['size'],
            "weight": pdp['weight'],
            "rmb": it['rmb_raw'],
            "primaryCat": COLLECTION_META[primary_cat]['name'],
            "logoReady": logo_ready,
            "tuningFork": tuning_fork,
            "cncExotic": cnc_exotic,
            "note": note
        })

    print(f"Total Raw Rows Processed: {len(all_rows_report)}")
    print(f"Total Active PDPs Generated: {len(pdps)}")

    # Print breakdown
    from collections import Counter
    cat_counts = Counter(p['primaryCollection'] for p in pdps)
    print("Primary Category Breakdown:", dict(cat_counts))
    print("Logo-Ready count:", sum(1 for p in pdps if p['logoReady']))
    print("Tuning-Fork count:", sum(1 for p in pdps if p['tuningFork']))
    print("CNC-Exotic count:", sum(1 for p in pdps if p['cncExotic']))

    os.makedirs(f"{WORKSPACE}/src/data", exist_ok=True)
    with open(f"{WORKSPACE}/src/data/catalog_raw_summary.json", "w", encoding="utf-8") as f:
        json.dump({"pdps": pdps, "allRows": all_rows_report}, f, ensure_ascii=False, indent=2)

    # Also generate PRODUCT_CATALOG_CLASSIFICATION_140.md cleanly
    lines = []
    lines.append("# FidgetSupply.com — 148行原始工厂表清洗合并至140款独立产品页 (PDP) 完整中英文对照分类总表\n")
    lines.append("> **数据源**：`~/ruixing/supplier/艾丽解压玩具汇总表2026.10.7.xlsx`（东莞市福元五金塑胶有限公司，共 148 行产品数据，原表编号 #001 – #150，其中 #004、#029 原表空缺）")
    lines.append("> **清洗结果**：**148 行原始数据** − **1 行完全重复脏数据 (#147)** − **1 行明确断货款 (#065)** − **6 行同模具多材质/双表面合并款 (#031, #095, #106, #112, #115, #132)** = **140 个高权重独立产品详情页 (PDP)**。\n")

    lines.append("## 一、 9 大集合页 (Collection Pages) 收录统计与 URL 映射\n")
    lines.append("| 维度 | 集合页编号与名称 | URL 路径 | 收录 PDP 数量 | 定位与收录标准 |")
    lines.append("| :--- | :--- | :--- | :---: | :--- |")
    lines.append("| **主导航分类 1** | **Magnetic Haptic Sliders** (磁力推牌总集合) | `/collections/magnetic-fidget-sliders/` | **54 款** | 全站流量第一大户：涵盖扑克推牌、三层轨道、无限位推牌、音叉推牌（批发价 ¥8–¥168） |")
    lines.append("| **主导航分类 2** | **Multi-Action Mechanical EDC** (复合机械与机甲把件) | `/collections/mechanical-edc-fidgets/` | **35 款** | 涵盖棘轮 (#85, #92)、枪栓推 (#67)、跳楼机 (#142)、湖光剑 (#114)、机甲掌刃 (#143) 等多段联动结构款 |")
    lines.append("| **主导航分类 3** | **Metal Fidget Spinners & Gyros** (金属指尖陀螺与陀螺仪) | `/collections/metal-fidget-spinners-gyros/` | **25 款** | 涵盖桌面手捻陀螺 (#9)、3D多轴陀螺仪 (#66)、冬眠鹅 (#63, #134)、链条齿轮陀螺 (#61, #79) 等办公桌搭爆款 |")
    lines.append("| **主导航分类 4** | **EDC Hand Pieces & Gourds** (掌中宝葫芦与把件) | `/collections/edc-gourds-hand-pieces/` | **11 款** | 涵盖铝合金/PEI/锆合金葫芦 (#96, #99, #105, #107)、啪啪珠 (#5)、鹅蛋 (#64)、重型核桃夹/螃蟹夹 (#121, #122) |")
    lines.append("| **主导航分类 5** | **Metal Haptic Coins** (机械啪啪币) | `/collections/haptic-fidget-coins/` | **10 款** | 涵盖 304不锈钢啪啪币 (#13)、车轮奶盖币 (#30)、南瓜机械币 (#53)，极受 Web3/科技公司纪念币定制欢迎 |")
    lines.append("| **主导航分类 6** | **Mechanical Spinner Rings** (穿戴式机械转转戒指) | `/collections/magnetic-fidget-rings/` | **5 款** | 涵盖 #14 机械师转转戒、#69 轮胎戒、#119 佛珠机械戒、#135 铝铜戒、#140 M型戒，主打开会静音穿戴解压 |")
    lines.append("| **交叉专题 7** | **Logo-Ready Custom Branding Fidgets** (激光/UV印Logo公模专区) | `/collections/custom-logo-metal-fidgets/` | **28 款** | 表面有平整留白区域、最适合打光纤激光镭雕或 UV 彩印的公模（#1, #9, #13, #26, #47, #125 等） |")
    lines.append("| **交叉专题 8** | **Acoustic Tuning Fork Series** (音叉声学共鸣专区) | `/collections/tuning-fork-fidget-sliders/` | **7 款** | 带清脆金属音叉叮叮声的高利润爆款（#45 木音、#86 节奏、#91 贝母节奏、#107 叮叮葫芦、#129 神域音叉、#148 聆音陀螺、#150 音叉推牌） |")
    lines.append("| **交叉专题 9** | **CNC Stainless Steel, PEI & Exotic Metals** (高端CNC材质专区) | `/collections/cnc-stainless-steel-pei-edc/` | **30 款** | 自动筛选材质为 303/304/316不锈钢、PEI (Ultem)、碳纤维、锆合金的中高单价线（¥23–¥1800） |\n")

    lines.append("## 二、 数据排雷处理明细（去重、断货剔除、同模合并与敏感词脱敏）\n")
    lines.append("1. **完全重复脏数据删除（-1 行）**：`#147 戒指` 与 `#135 戒指`（材质均为铝+铜、尺寸均为 33.7×12.7mm、重量均为 33g、磁铁均为 8×Ø4×1.2 + 8×Ø4×2、批发价均为 ¥30）合并保留为 **`FS-135`**。")
    lines.append("2. **明确断货款归档剔除（-1 行）**：`#065 幸运转珠`（铁，341g，¥38，备注明确标注“无货”）归档不建主推 PDP，避免浪费 Google 爬虫预算。")
    lines.append("3. **同一套模具多材质/双表面合并（-6 行，合入 5 个多规格 PDP）**：")
    lines.append("   - **湖光剑三材质合一 (`FS-114 / FS-115 / FS-132`)**：合并 `#132 锌合金湖光剑 (¥260)` + `#115 不锈钢湖光剑 (¥1200)` + `#114 锆合金湖光剑 (¥1800)`，共用 99×42×12.5mm 模具与 18 颗 N52 磁铁。")
    lines.append("   - **玄天葫芦双材质合一 (`FS-105 / FS-106`)**：合并 `#105 悟空玄天葫芦 (铝合金 ¥46)` + `#106 锆合金玄天葫芦 (¥800)`，共用 61×33.5mm 模具与 12 颗 N52 磁铁。")
    lines.append("   - **玄天叮叮葫芦双材质合一 (`FS-107 / FS-112`)**：合并 `#112 悟空玄天叮叮葫芦 (铝合金 ¥55)` + `#107 锆合金玄天叮叮葫芦 (¥1000)`，共用 61×33.5mm 音叉共鸣模具。")
    lines.append("   - **车轮奶盖啪啪币实心/镂空合一 (`FS-030 / FS-031`)**：合并 `#030 车轮奶盖啪啪币 (¥13)` + `#031 镂空车轮奶盖啪啪币 (¥13)`，共用 40×10mm 模具与 12 颗 N40 磁铁。")
    lines.append("   - **不锈钢律动推牌贝母/浮雕合一 (`FS-094 / FS-095`)**：合并 `#094 贝母律动 (¥163)` + `#095 血浮屠 (¥163)`，共用 50.7×31×11mm CNC 不锈钢模具。")
    lines.append("4. **同名不同模严格区分（独立建页）**：")
    lines.append("   - `#018 钢琴啪啪牌` (60×38×9mm, 16磁铁, ¥23) → `FS-018 Compact 16-Magnet Piano Key Haptic Slider`")
    lines.append("   - `#048 钢琴啪啪牌` (73.5×23×11.5mm, 32磁铁, ¥30) → `FS-048 Elongated 32-Magnet Piano Track Haptic Slider`")
    lines.append("5. **敏感 IP 与工作室品牌词全面脱敏（16 处）**：全量剔除 `Oreo (奥利奥)`、`Thor (雷神之锤)`、`Pac-Man (吃豆人)`、`Elden Ring (法环)`、`World Cup (世界杯)`、`Three-Body (三体)`、`Wukong (悟空)`、`01EDC`、`ONE.EDC`、`HAOTZ`、`MEDC`、`EM` 等词汇，全部替换为中性工业结构描述词。\n")

    lines.append("## 三、 148 行原始数据 → 140 款独立产品页 (PDP) 全量中英文对照与集合归属表\n")
    lines.append("| 原编号 | 网站 SKU | 原表中文名 | 状态 | 脱敏后英文产品名 (English Title) | 详情页 URL 路径 (`/products/[slug]/`) | 材质 | 尺寸 / 重量 | 出厂价(RMB) | 归属主集合 (Primary Collection) | Logo-Ready | 音叉 (Tuning Fork) | 高端CNC材质 | 排雷/脱敏说明 |")
    lines.append("| :---: | :---: | :--- | :---: | :--- | :--- | :--- | :--- | :---: | :--- | :---: | :---: | :---: | :--- |")

    for r in all_rows_report:
        lr = "✅ Logo-Ready" if r["logoReady"] else "—"
        tf = "🎵 音叉" if r["tuningFork"] else "—"
        cnc = "💎 CNC高端" if r["cncExotic"] else "—"
        slug_col = f"`{r['slug']}`" if r["slug"] != "-" else "—"
        lines.append(f"| #{r['rowId']:03d} | **{r['sku']}** | {r['zhName']} | {r['status']} | **{r['enTitle']}** | {slug_col} | {r['materialZh']} | {r['size']} / {r['weight']} | ¥{r['rmb']} | {r['primaryCat']} | {lr} | {tf} | {cnc} | {r['note'] or '正常建页'} |")

    with open(f"{WORKSPACE}/PRODUCT_CATALOG_CLASSIFICATION_140.md", "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print("Wrote PRODUCT_CATALOG_CLASSIFICATION_140.md cleanly!")

if __name__ == "__main__":
    main()
