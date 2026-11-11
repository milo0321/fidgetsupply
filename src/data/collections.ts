export interface CollectionMeta {
  slug: string;
  number: number;
  group: 'primary' | 'cross';
  name: string;
  shortName: string;
  zhName: string;
  badge: string;
  skuCount: number;
  priceRangeRmb: string;
  priceRangeUsd: string;
  moq: string;
  leadTime: string;
  targetKeywords: string;
  heroSubtitle: string;
  geoDirectAnswer: string;
  engineeringHighlights: string[];
  faqs: { question: string; answer: string }[];
}

export const COLLECTIONS: CollectionMeta[] = [
  {
    slug: 'magnetic-fidget-sliders',
    number: 1,
    group: 'primary',
    name: 'Magnetic Textured Fidget Sliders & Haptic Sliders',
    shortName: 'Magnetic Fidget Sliders',
    zhName: 'Dual-Layer, Triple-Layer & Unlimited PTFE Sliders',
    badge: 'Primary Category #1 · 54 Ready Molds',
    skuCount: 54,
    priceRangeRmb: '¥8 – ¥168',
    priceRangeUsd: '$1.70 – $43.90',
    moq: '50 pcs (Blank) / 100 pcs (Logo)',
    leadTime: '7–12 Days',
    targetKeywords: 'haptic sliders, magnetic textured fidget sliders, micro dual-strength brass magnetic slider, haptic sliders wholesale, magnetic fidget slider bulk, poker magnetic slider manufacturer, unlimited track fidget slider OEM',
    heroSubtitle: 'Our highest-volume Wholesale category covering 54 ready-to-produce molds: Haptic Sliders, Magnetic Textured Fidget Sliders, Micro Dual-Strength Brass & Carbon Fiber Sliders (FS-038), Dual-Layer Poker Haptic Sliders, Triple-Layer 32-Magnet Track Sliders, and PTFE Unlimited Sliders ($0 Tooling Cost).',
    geoDirectAnswer: 'FidgetSupply manufactures 54 ready-mold Haptic Sliders and Magnetic Textured Fidget Sliders (FS-001 through FS-150) using Zamak #3 Zinc Alloy, Brass & Carbon Fiber (FS-038), 6063-T6 Anodized Aluminum, and 304 Stainless Steel. Featuring 5 to 56 precision-embedded N35–N54 neodymium magnets with PTFE wear pads, all models carry a $0 tooling fee with a 50 pcs blank MOQ and 100 pcs custom 50W Fiber Laser / Deep Laser Color-Fill logo MOQ.',
    engineeringHighlights: [
      'Magnet Matrix Options: 2×5 (10-magnet), 2×8 (16-magnet), 3-layer 32-magnet linear track, and 20-to-26-magnet N52 free-floating unlimited PTFE arrays.',
      'Zero Mold Investment: Choose from 54 proven geometries including Poker Cards (FS-001, FS-024, FS-075), Smooth Soap-Box (FS-125), Minimalist 6063 Aluminum (FS-047), and Piano Track Sliders (FS-018, FS-048).',
      'CPSC 16 CFR 1262 Compliant Retention: Precision counterbored magnet pockets sealed under CNC plates or structural epoxy lock.'
    ],
    faqs: [
      {
        question: 'What is the difference between a Track Slider and an Unlimited Magnetic Slider?',
        answer: 'Track Sliders (such as FS-002 and FS-048) constrain movement along a precision linear or pivot guide rail using steel/ceramic detent balls, while Unlimited Sliders (such as FS-050, FS-056, FS-125, and FS-128) use PTFE wear pads over a dense 20-to-26 N50/N52 magnet matrix allowing 360-degree multi-directional sliding and rotation.'
      },
      {
        question: 'Which magnetic sliders are best for custom corporate Fiber Laser or Deep Laser + Color Fill logo branding?',
        answer: 'FS-125 (Smooth Soap-Box), FS-047 (Minimalist 6063 Aluminum), FS-001 (Poker King), FS-026 (Bottle Opener Slider), and FS-128 (Chocolate Grid) provide wide, flat exterior faces ideal for high-contrast 50W Fiber Laser Engraving (+$0.15–$0.30/pc) or Deep Laser Engraving + Color Fill (+$0.35–$0.60/pc) at 100 pcs MOQ.'
      },
      {
        question: 'Can we mix multiple slider colors or finishes within the 50 pcs blank MOQ?',
        answer: 'Yes. For in-stock finishes such as Antique Bronze, Antique Silver, Satin Pearl Chrome, and Tactical Gunmetal, wholesale buyers can assort finishes in increments of 25 pcs per color.'
      },
      {
        question: 'What is the difference between the two Piano Haptic Sliders (FS-018 vs. FS-048)?',
        answer: 'FS-018 is the Compact 16-Magnet Dual-Layer Piano Slider (60×38×9mm, 108g, 16×Ø5×2mm magnets), while FS-048 is the Elongated 32-Magnet Multi-Key Piano Track Slider (73.5×23×11.5mm, 98g, 32×Ø4×2mm magnets) with a longer linear stroke.'
      },
      {
        question: 'How do PTFE (Teflon) wear pads protect unlimited magnetic sliders?',
        answer: 'Unlimited free-floating sliders experience direct sliding contact between upper and lower magnet plates. Our self-lubricating PTFE wear pads prevent metal-on-metal scratching, lower sliding friction, and allow buyers to tune acoustic volume from crisp metallic snaps to quiet office clicks.'
      },
      {
        question: 'Do your magnetic sliders pass US CPSC 16 CFR 1262 magnet retention regulations?',
        answer: 'Yes. Every magnetic slider utilizes precision counterbored magnet cavities secured by CNC cover plates with Loctite thread-locked M2 fasteners or industrial two-part structural epoxy (>22 MPa shear strength), preventing magnet detachment during drop and torque abuse tests.'
      },
      {
        question: 'What magnet grades (N35 to N54) are used across the 54 slider molds?',
        answer: 'Entry-level track sliders use N35/N38/N40 magnets for smooth, effortless sliding, whereas unlimited free-floating sliders (such as FS-056, FS-075, FS-125, and FS-128) utilize high-flux N50, N52, and N54 neodymium magnets so the two halves stay strongly locked together during one-handed tricks.'
      },
      {
        question: 'What is the production lead time for 100 to 1,000 custom-branded magnetic sliders?',
        answer: 'Blank stock orders (50+ pcs) dispatch in 3–5 business days. Custom Fiber Laser Engraved (+$0.15–$0.30/pc) or Deep Laser + Color Fill (+$0.35–$0.60/pc) orders (100–1,000 pcs) complete production and QC inspection within 10–15 business days (paid custom logo sampling takes 10–15 days: $50 for standard laser, $80–$150 for deep laser + color fill).'
      },
      {
        question: 'How are magnetic fidget sliders packaged for Amazon FBA and retail distribution?',
        answer: 'Each slider is individually sealed in a scratch-proof polybag nested inside a shock-absorbent black EVA zipper case (65×65×25mm or 90×65×28mm). We apply Amazon FNSKU barcodes directly to the outer pouch or gift box at no extra handling labor cost.'
      },
      {
        question: 'How are magnetic sliders shipped internationally by air courier (DHL/FedEx/UPS)?',
        answer: 'Because neodymium sliders contain permanent magnets, our Fuzhou Export Logistics Hub packs bulk cartons with steel-sheet magnetic shielding liners and provides IATA DGR PI-953 Stray Magnetic Field Test certificates (<0.00525 gauss at 4.6m) for seamless air express customs clearance.'
      }
    ]
  },
  {
    slug: 'mechanical-edc-fidgets',
    number: 2,
    group: 'primary',
    name: 'Multi-Action Mechanical EDC Fidgets',
    shortName: 'Mechanical EDC',
    zhName: 'Spring Ratchets, Bolt-Action & Multi-Bearing Linkages',
    badge: 'Primary Category #2 · 35 Ready Molds',
    skuCount: 35,
    priceRangeRmb: '¥11 – ¥1800',
    priceRangeUsd: '$2.30 – $470.00',
    moq: '50 pcs (Blank) / 100 pcs (Logo)',
    leadTime: '8–14 Days',
    targetKeywords: 'mechanical fidget toy, mechanical edc fidget wholesale, ratchet fidget toy manufacturer, bolt action edc slider bulk, multi-action metal fidget OEM',
    heroSubtitle: '35 complex Mechanical Fidget Toys and EDC assemblies integrating coil springs, torsion springs, Si3N4 ceramic detent balls, planetary gears, and R188 bearings—including CNC Aluminum Ratchet Sliders (FS-085, FS-092), Bolt-Action Breech Sliders (FS-067), and Sword Sliders.',
    geoDirectAnswer: 'Our Multi-Action Mechanical EDC Fidget Toy collection spans 35 multi-part assemblies engineered with music-wire compression springs, torsion springs, stainless detent balls, and multi-bearing linkages. Key flagship mechanical fidget toys include the CNC Aluminum Ratchet Series (FS-085, FS-092), Bolt-Action Breech Slider (FS-067), Drop-Tower 6-Bearing EDC (FS-142), and the 3-Material Lake-Light Sword (FS-114/115/132).',
    engineeringHighlights: [
      'Multi-Mechanism Tactile Feedback: Combines spring-loaded ball detents, gear ratchets, centrifugal flick blades, and tactile metal dome switches.',
      'Tiered Material Architecture: Available in cost-effective Zamak #3 Zinc Alloy (FS-132 Lake-Light Sword at $40 base) up to CNC 304 Stainless Steel (FS-115) and Exotic Zirconium (FS-114).',
      'Full Hardware BOM Transparency: Every PDP lists exact screw thread sizes (M2/M2.5), bearing dimensions, and spring wire gauges for effortless Wholesale quality auditing.'
    ],
    faqs: [
      {
        question: 'Do mechanical ratchet fidgets contain magnets or pure spring-detent mechanisms?',
        answer: 'We offer both pure mechanical spring-detent models (such as FS-085 CNC Aluminum Ratchet, FS-092 Bamboo Ratchet, and FS-067 Bolt-Action Slider) which are 100% magnet-free for air-cargo and magnet-restricted environments, as well as hybrid magnet-plus-spring mecha models (such as FS-084 and FS-114).'
      },
      {
        question: 'Why are FS-114, FS-115, and FS-132 merged into a single Lake-Light Sword product page?',
        answer: 'All three share the exact 99×42×12.5mm mold geometry, 18-piece N52 magnet array, and dual-bearing mechanism, differing only in metallurgy: Die-Cast Zinc Alloy (FS-132), CNC 304 Stainless Steel (FS-115), and CNC Zirconium Alloy (FS-114). Merging them allows wholesale buyers to compare all 3 price tiers side-by-side.'
      },
      {
        question: 'Do you supply spare springs, PTFE pads, and detent beads with bulk mechanical EDC orders?',
        answer: 'Yes. Every wholesale shipment of multi-action mechanical EDC fidgets includes a complimentary 3% spare hardware kit (PTFE wear pads, stainless/ceramic detent balls, and hex screws) or individual retail accessory packs.'
      },
      {
        question: 'What is the fatigue cycle lifespan of your mechanical coil and torsion springs?',
        answer: 'All compression springs, torsion springs, and 8.4mm tactile dome switches are wound from SUS304 stainless spring steel or high-carbon piano wire rated for >100,000 actuation cycles without permanent compression set.'
      },
      {
        question: 'Are sword-shaped or bolt-action mechanical fidgets safe for Amazon and customs clearance?',
        answer: 'Yes. Models such as FS-114/132 (Lake-Light Sword), FS-143 (Mecha Palm Slider), and FS-067 (Bolt-Action Slider) have non-sharpened, rounded 2.5mm+ safety edges, non-locking kinetic mechanisms, and are classified under HS Code 9503.00.0000 as adult kinetic desk toys.'
      },
      {
        question: 'What is the difference between stainless steel detent balls and Si3N4 ceramic detent balls?',
        answer: 'Hardened 440C stainless steel detent balls offer classic metallic ratchet feedback, while Silicon Nitride (Si3N4) black ceramic balls (used in premium CNC models) provide extreme Vickers hardness (1500 HV), zero galling against stainless tracks, and silkier dry-run operation.'
      },
      {
        question: 'Can buyers customize the anodizing or PVD colors on multi-part mechanical EDC models?',
        answer: 'Yes. Because multi-part mechanical models are assembled from modular CNC or die-cast sub-components, you can specify two-tone color combinations (e.g., matte black chassis with gold/red anodized ratchet triggers) at a 200 pcs MOQ.'
      },
      {
        question: 'Which mechanical EDC models offer the highest number of play modes in one unit?',
        answer: 'FS-142 (Drop-Tower 6-Bearing Mechanical Slider), FS-084 (Multi-Action Mecha Armour), and FS-114/132 (Lake-Light Sword) combine 3 to 5 distinct kinetic actions—linear sliding, gear ratcheting, bearing spinning, and tactile clicking—in a single chassis.'
      },
      {
        question: 'How do you prevent small M1.6 and M2 screws from loosening during heavy mechanical clicking?',
        answer: 'During assembly, every structural M1.6, M2, and M2.5 machine screw is torqued with medium-strength anaerobic threadlocker (Loctite 243 equivalent) so the chassis stays rock-solid while still allowing collector maintenance with a Torx/Hex driver.'
      },
      {
        question: 'What is the wholesale MOQ and lead time for complex multi-bearing mechanical models?',
        answer: 'Standard blank MOQ is 50 pcs (3–5 days for in-stock models) and 100 pcs for custom laser-engraved logos (8–14 days lead time including multi-point manual mechanical calibration).'
      }
    ]
  },
  {
    slug: 'metal-fidget-spinners-gyros',
    number: 3,
    group: 'primary',
    name: 'Stainless Steel Spinning Tops, Spinners & Gyros',
    shortName: 'Spinners & Spinning Tops',
    zhName: 'R188 Bearing Spinners, Chain Sprockets & 6-Axis Gyros',
    badge: 'Primary Category #3 · 25 Ready Molds',
    skuCount: 25,
    priceRangeRmb: '¥3.5 – ¥200',
    priceRangeUsd: '$0.75 – $52.30',
    moq: '50 pcs (Blank) / 100 pcs (Logo)',
    leadTime: '7–12 Days',
    targetKeywords: 'stainless steel spinning tops, metal fidget spinner wholesale, desktop gyroscope toy bulk, R188 bearing spinner manufacturer, stainless steel gyro OEM',
    heroSubtitle: '25 precision-balanced stainless steel spinning tops, R188 metal fidget spinners, and desktop gyros—ranging from $0.90 Knurled Finger Twist Spinning Tops (FS-009) and 3D Magnetic Cube Spinners (FS-008) to 6-Axis CNC Stainless Gimbal Gyros (FS-043, FS-066).',
    geoDirectAnswer: 'FidgetSupply produces 25 Metal Fidget Spinners and Multi-Axis Desktop Gyroscopes utilizing high-precision R188 bearings (Ø12.7×Ø6.35×4.75mm) and dual-bore planetary bearings. From ultra-affordable promotional twist tops (FS-009, 20g) to 316 Stainless Steel Bionics Goose Spinners (FS-063) and Acoustic Tuning Fork Spinners (FS-148), all 25 molds require $0 tooling fees.',
    engineeringHighlights: [
      'High-RPM R188 & Dual-Bearing Assemblies: Removable slotted retention nuts and precision stainless steel/ceramic hybrid bearings achieving 3–6 minute spin times.',
      'Multi-Axis & Chain-Drive Kinematics: Includes 22-part 6-Axis Gyros (FS-043), 3D Multi-Ring Gimbal Gyros (FS-066, FS-118, FS-120), and Roller Chain Sprocket Spinners (FS-061, FS-079).',
      'Executive Desk Totem Appeal: High-retention center caps on FS-008, FS-009, FS-064, and FS-139 offer prime real estate for laser-engraved corporate logos.'
    ],
    faqs: [
      {
        question: 'What bearing standard is used across your metal fidget spinners?',
        answer: 'Over 85% of our rotational spinners utilize the industry-standard R188 bearing (OD 12.6–12.75mm × ID 6.35–6.4mm × H 4.7–4.75mm) secured by a threaded brass or stainless retention cap for easy maintenance and silent operation.'
      },
      {
        question: 'What is the difference between FS-063 and FS-134 Bionics Goose Spinners?',
        answer: 'FS-063 is machined from marine-grade 316 Stainless Steel (84.8g) with a dual-bearing setup and M3.87 set screws, while FS-134 is the streamlined Gen-2 304 Stainless Steel edition (79g) with a single R188 bearing.'
      },
      {
        question: 'Which spinner model has the lowest unit cost for high-volume event giveaways?',
        answer: 'FS-009 (Classic Knurled Pocket Finger Twist Spinner Top, 20g Zinc Alloy) starts at $0.75–$0.92 in bulk quantities and features a smooth top cap ideal for rapid fiber laser logo branding.'
      },
      {
        question: 'What is the average free-spin duration of your R188 metal spinners?',
        answer: 'Depending on rotor mass and perimeter weight distribution, our dry-degreased 10-ball R188 stainless bearings achieve 2.5 to 5.5 minutes of continuous horizontal table spin with <35 dB acoustic noise.'
      },
      {
        question: 'Can we upgrade standard stainless R188 bearings to hybrid Si3N4 ceramic bearings?',
        answer: 'Yes. For premium private-label lines, we offer an optional upgrade to hybrid Silicon Nitride (Si3N4) ceramic-ball R188 bearings (+$0.85/unit at 100+ pcs), boosting spin times by 30–45% and eliminating bearing rust in humid climates.'
      },
      {
        question: 'How do multi-axis gimbal gyroscopes like FS-043 and FS-066 work?',
        answer: 'Multi-axis gimbal gyros nest concentric CNC stainless steel or brass rings linked by perpendicular pivot pins or miniature bearings, allowing the inner core to spin independently across 3 to 6 rotational axes simultaneously.'
      },
      {
        question: 'Where is the custom logo engraved on a metal fidget spinner or desktop gyro?',
        answer: 'On classic spinners and twist tops (FS-008, FS-009, FS-015, FS-139), logos are 50W fiber-laser engraved (+$0.15–$0.30/pc) or deep-laser engraved with enamel color fill (+$0.35–$0.60/pc) directly on the flat Ø16mm–Ø22mm center finger cap. On gimbal gyros (FS-066), logos are etched along the outer equatorial ring.'
      },
      {
        question: 'How do you balance spinner rotors to eliminate wobble and vibration?',
        answer: 'Every spinner mold undergoes dynamic rotational balance verification. CNC stainless models are machined in a single concentric setup within ±0.02mm runout tolerance, ensuring zero lateral wobble at high RPM.'
      },
      {
        question: 'Are the bearings lubricated or dry-degreased when shipped from the factory?',
        answer: 'By default, R188 bearings are ultrasonically cleaned and dry-degreased for maximum spin duration. If your brand prioritizes ultra-silent office operation over spin time, we can apply a micro-drop of synthetic instrument oil upon request.'
      },
      {
        question: 'Do your metal spinners and sprocket chain fidgets contain magnets?',
        answer: 'Pure rotational models (such as FS-009, FS-043, FS-061, FS-063, FS-066, and FS-079) are 100% non-magnetic, making them exempt from air-freight magnetic shielding inspections, while hybrid magnetic-spinner models (such as FS-008 and FS-148) combine R188 rotation with magnetic feedback.'
      }
    ]
  },
  {
    slug: 'edc-gourds-hand-pieces',
    number: 4,
    group: 'primary',
    name: 'EDC Hand Pieces, Gourds & Baoding Rollers',
    shortName: 'Gourds & Hand Pieces',
    zhName: 'CNC Palm Gourds, Knuckle Rollers & Kinetic Desk Eggs',
    badge: 'Primary Category #4 · 11 Ready Molds',
    skuCount: 11,
    priceRangeRmb: '¥12 – ¥1000',
    priceRangeUsd: '$2.55 – $261.50',
    moq: '50 pcs (Blank) / 100 pcs (Logo)',
    leadTime: '7–12 Days',
    targetKeywords: 'edc gourd fidget wholesale, metal knuckle roller begleri bulk, PEI ultem edc hand piece, desk fidget egg manufacturer',
    heroSubtitle: '11 ergonomic palm-sized tactile objects combining Eastern gourd/roller aesthetics with modern R188 bearings, N52 magnetic ratchets, and acoustic chime chambers—crafted in 6063 Aluminum, Amber PEI (Ultem), 304 Stainless, and Zirconium.',
    geoDirectAnswer: 'Our EDC Hand Pieces & Gourds collection features 11 tactile palm fidgets including Multi-Material Magnetic Gourds (FS-096, FS-099 in PEI Ultem, FS-105/106 in Aluminum/Zirconium), Acoustic Chime Gourds (FS-107/112), 304 Stainless Knuckle Rollers (FS-005), Kinetic Desk Eggs (FS-064), and Heavy-Duty 250g+ Chrome Cracker Grips (FS-121, FS-122).',
    engineeringHighlights: [
      'Full Metallurgy Ladder on One Mold: Compare 6063 Anodized Aluminum ($12–$15), Amber PEI Ultem ($29–$35), and Exotic Zirconium ($170–$260) on identical 61×33.5mm gourd tooling.',
      'Multi-Sensory Gourd Engineering: Integrates 12×Ø4×2mm N52 magnets, R188 bearings, 8.4mm tactile dome switches, and dual-bearing acoustic ring magnets (FS-107/112).',
      'Executive Desk & Gift Box Ready: Popular with luxury corporate gifting agencies, tea/spirits brands, and collector EDC subscription boxes.'
    ],
    faqs: [
      {
        question: 'How are the 6 gourd rows in the factory sheet organized on FidgetSupply.com?',
        answer: 'To prevent duplicate-content cannibalization, the 6 gourd rows (all sharing the 61×33.5mm form factor) are consolidated into 4 distinct product pages: FS-096 (Smooth Anodized Aluminum Gourd), FS-099 (Amber PEI Ultem Gourd), FS-105 (Celestial Relief Gourd with Aluminum FS-105 & Zirconium FS-106 selector), and FS-107 (Acoustic Chime Gourd with Aluminum FS-112 & Zirconium FS-107 selector).'
      },
      {
        question: 'Why is FS-065 Lucky Bead Roller not listed in this collection?',
        answer: 'Factory row #65 (Iron Lucky Bead Roller, 341g) is marked Out of Stock in our production schedule and has been archived to ensure 100% immediate supply reliability across all active PDPs.'
      },
      {
        question: 'Can we laser engrave logos onto the curved surface of FS-064 Desk Egg or FS-096 Gourd?',
        answer: 'Yes. We utilize a rotary-axis chuck on our 50W fiber laser engraving machines to etch distortion-free logos around cylindrical and curved anodized aluminum surfaces.'
      },
      {
        question: 'How many kinetic play mechanisms are hidden inside the 61×33.5mm EDC Gourd series?',
        answer: 'Each EDC Gourd integrates 3 distinct mechanisms: (1) a top stem clicker powered by an 8.4mm tactile metal dome switch, (2) a middle waist ring rotating on a precision R188 bearing, and (3) a bottom magnetic ratchet or dual-bearing acoustic chime chamber.'
      },
      {
        question: 'What is the weight difference between Aluminum, PEI (Ultem), and Zirconium Gourds?',
        answer: 'On the identical 61×33.5mm geometry, the Amber PEI Ultem Gourd (FS-099) weighs a nimble 46g, the 6063 Anodized Aluminum Gourd (FS-096 / FS-105) weighs 65g–73g, and the solid Zr702 Zirconium Gourd (FS-106 / FS-107) weighs a substantial 126g–132g.'
      },
      {
        question: 'What is the difference between the Standard Gourd (FS-105/106) and the Acoustic Chime Gourd (FS-107/112)?',
        answer: 'FS-105/106 uses 12×Ø4×2mm N52 magnets for crisp tactile ratchet rotation, whereas FS-107/112 replaces the standard base with a dual-bearing (R188 + Ø12.7×9.525×3.96mm) and Ø22×16×2.5mm ring-magnet acoustic chamber that emits a clear "Ding-Ding" chime.'
      },
      {
        question: 'Can the EDC Gourds be worn as a lanyard pendant or attached to a carabiner?',
        answer: 'Yes. Every gourd model includes a precision-drilled lanyard eyelet through the top stem cap and can be supplied with paracord lanyards, titanium keyrings, or leather belt holsters.'
      },
      {
        question: 'What are FS-121 and FS-122 Heavy-Duty Cracker Hand Pieces used for?',
        answer: 'FS-121 (255g) and FS-122 (270g) are heavy-weight electroplated zinc-alloy palm exercisers and functional nut/shell crackers that double as sculptural executive paperweights and grip-strength desk toys.'
      },
      {
        question: 'What is FS-005 304 Stainless Steel Knuckle Roller and who is the target buyer?',
        answer: 'FS-005 is a CNC-turned 304 stainless steel dumbbell knuckle bone (55×20mm, 62g) designed to be twirled effortlessly between the fingers—a staple SKU for skill-toy stores, ADHD focus kits, and everyday carry boutiques.'
      },
      {
        question: 'Can we order custom silk-lined rigid gift boxes for high-end Gourd corporate gifts?',
        answer: 'Yes. At a 200 pcs MOQ, we supply custom gold-foil-stamped rigid magnetic book boxes with die-cut high-density EVA foam inserts tailored to the 61×33.5mm gourd profile.'
      }
    ]
  },
  {
    slug: 'haptic-fidget-coins',
    number: 5,
    group: 'primary',
    name: 'Haptic Coin & Metal Clicker Fidget Coins Wholesale',
    shortName: 'Haptic Coins',
    zhName: 'Concentric Thrust-Bearing & N52/N54 Ratchet Clicker Coins',
    badge: 'Primary Category #5 · 10 Ready Molds',
    skuCount: 10,
    priceRangeRmb: '¥13 – ¥42',
    priceRangeUsd: '$2.75 – $10.98',
    moq: '50 pcs (Blank) / 100 pcs (Logo)',
    leadTime: '7–10 Days',
    targetKeywords: 'haptic coin, haptic fidget coin wholesale, custom metal challenge coin spinner, magnetic clicker coin bulk, 304 stainless haptic coin OEM',
    heroSubtitle: '10 circular magnetic-ratchet haptic coins combining thrust bearings (Ø34.6×20mm or R188) with 12-to-14 neodymium magnets (N40–N54). A top seller for Web3 communities, gaming studios, fintech brands, and commemorative challenge coins ($0 Mold Fee).',
    geoDirectAnswer: 'FidgetSupply offers 10 ready-mold Metal Haptic Fidget Coins (36.8mm to 47.4mm diameter, 42g to 91g) engineered with flat thrust bearings and 12–14 concentric N40/N52/N54 magnets. Flagship models include the 304 Stainless Steel Haptic Coin (FS-013), Automotive Wheel Rim Coin (FS-030/031), Sandwich Cookie Coin (FS-027), and Ceramic-Bead N54 Tiger Coin (FS-041).',
    engineeringHighlights: [
      'Concentric Magnetic Ratchet Action: 12 radially indexed N40–N54 magnets paired with a Ø34.6×20mm flat thrust bearing deliver crisp, bidirectional rotational clicks.',
      'Desensitized & Commercially Safe Naming: Former IP nicknames are replaced with clean industrial descriptors (e.g., FS-027 Sandwich Cookie Textured Haptic Coin) safe for Amazon and global retail.',
      'Web3 & Corporate Commemorative Favorite: Custom 50W fiber-laser engraved center medallions (+$0.15–$0.30/pc) or deep-laser enamel color-fill crests (+$0.35–$0.60/pc) turn existing coin molds into interactive challenge coins with $0 mold cost.'
    ],
    faqs: [
      {
        question: 'Why are FS-030 and FS-031 combined into a single Haptic Coin page?',
        answer: 'Both FS-030 (Solid Wheel Rim Coin) and FS-031 (Skeleton Spoke Wheel Rim Coin) share the exact Ø40×10mm chassis, 58g weight, Ø34.6×20mm thrust bearing, 12×Ø4×2mm N40 magnet array, and $2.75–$3.40 factory price. Combining them gives buyers a convenient Solid vs. Skeleton style toggle.'
      },
      {
        question: 'Can we customize a corporate emblem on FS-013 304 Stainless Steel Haptic Coin?',
        answer: 'Yes. Note that the blank smooth-face variant of FS-013 is currently reserved for custom runs while the laser-patterned 304 stainless stock is ready for immediate dispatch and center-cap or reverse-bevel branding.'
      },
      {
        question: 'What grade of magnets is used in your highest-tactility haptic coins?',
        answer: 'FS-013 utilizes 12 pcs of N52 magnets, while FS-041 and FS-053 upgrade to 12 pcs of ultra-strong N54 magnets paired with Si3N4 ceramic detent beads for maximum acoustic snap.'
      },
      {
        question: 'How does a Haptic Fidget Coin differ from a traditional static challenge coin?',
        answer: 'Traditional challenge coins are static stamped brass medallions. A Haptic Fidget Coin consists of two counter-rotating metal shells riding on an internal thrust bearing with 12–14 opposing neodymium magnets, turning a commemorative coin into an addictive kinetic desk toy.'
      },
      {
        question: 'Have third-party trademarked nicknames (like Oreo or Pac-Man) been sanitized across this coin collection?',
        answer: 'Yes. To protect Amazon FBA sellers and corporate distributors from IP infringement flags, all models use generic industrial descriptors such as FS-027 (Sandwich Cookie Textured Haptic Coin) and FS-138 (Retro Arcade Maze Haptic Coin) and carry zero unauthorized logos.'
      },
      {
        question: 'What is the diameter and thickness range of your 10 haptic coin molds?',
        answer: 'Our haptic coins range from compact Ø36.8×10.8mm (FS-013 304 Stainless Coin, 61.5g) and Ø40×10mm (FS-030 Wheel Coin, 58g) up to oversized Ø47.4×14mm (FS-041 N54 Tiger Relief Coin, 91g).'
      },
      {
        question: 'Can the two halves of a haptic coin be pulled apart during normal use?',
        answer: 'No. Unlike free-floating sliders, haptic coins are mechanically captured around a central retention post or captive Ø34.6×20mm thrust bearing raceway so the two shells rotate concentrically without separating.'
      },
      {
        question: 'What is the MOQ and tooling fee for customizing our brand crest onto your haptic coins?',
        answer: 'We focus exclusively on Ready-Mold Light Customization across our 10 existing haptic coin molds ($0.00 mold tooling fee, eliminating custom die-casting mold expenses). Blank stock MOQ is 50 pcs, and custom logo MOQ is 100 pcs via 50W MOPA Fiber Laser Engraving (+$0.15–$0.30/pc, $50 sample) or Deep Laser Engraving + Enamel Color Fill (+$0.35–$0.60/pc, $80–$150 sample).'
      },
      {
        question: 'What display packaging options work best for commemorative haptic coins?',
        answer: 'Beyond our standard black EVA zipper case, we offer transparent 70×70mm silicone-membrane floating display frames (+$0.55/unit) and velvet-lined magnetic coin presentation boxes (+$1.40/unit).'
      },
      {
        question: 'What is the production lead time for 200 to 1,000 custom-branded haptic coins?',
        answer: 'Custom 50W fiber-laser engraved or deep-laser enamel color-fill orders on ready coin molds ship within 10–15 business days after digital proof approval.'
      }
    ]
  },
  {
    slug: 'magnetic-fidget-rings',
    number: 6,
    group: 'primary',
    name: 'Mechanical & Magnetic Spinner Rings',
    shortName: 'Spinner Rings',
    zhName: 'Thin-Section Bearing & 16-Magnet Wearable EDC Rings',
    badge: 'Primary Category #6 · 5 Ready Molds',
    skuCount: 5,
    priceRangeRmb: '¥30 – ¥45',
    priceRangeUsd: '$6.35 – $11.75',
    moq: '50 pcs (Blank) / 100 pcs (Logo)',
    leadTime: '7–10 Days',
    targetKeywords: 'magnetic fidget spinner ring wholesale, mechanical edc ring bulk, tactile ratchet spinner ring manufacturer, silent meeting fidget ring',
    heroSubtitle: '5 wearable multi-metal mechanical spinner rings (FS-014, FS-069, FS-119, FS-135, FS-140) engineered with thin-section bearings (Ø27×4mm) and 16 micro neodymium magnets for silent, one-handed stress relief during executive meetings.',
    geoDirectAnswer: 'Our Mechanical Spinner Rings collection comprises 5 deduplicated ready molds (after merging duplicate factory row #147 into FS-135): Machinist Tri-Metal Ring (FS-014), Tire-Tread Brass/Aluminum Ring (FS-069), 8-Bead Planetary Ring (FS-119), Aluminum-Brass Bearing Ring (FS-135), and M-Profile Aluminum Ring (FS-140). Each features a precision thin-wall bearing and 16 micro magnets.',
    engineeringHighlights: [
      'Thin-Section Bearing Architecture: Built around custom Ø27×Ø19.95×4mm and Ø23×Ø17×4mm thin-wall ball bearings for smooth finger-worn or knuckle-spun rotation.',
      'Dual-Ring 16-Magnet Tactile Indexing: Opposing arrays of 8×Ø4×1.2mm + 8×Ø4×1.5mm/2mm N40/N45 magnets create soft, quiet haptic micro-clicks suitable for office meetings.',
      'Tri-Metal CNC Contrasts: Combines 304 Stainless Steel, C36000 Brass, and Anodized Aluminum in two-tone gold/black and silver/brass aesthetics.'
    ],
    faqs: [
      {
        question: 'Why are there 5 rings listed instead of 6 from the raw factory spreadsheet?',
        answer: 'During our catalog engineering audit, factory rows #135 and #147 were identified as 100% identical duplicates (both Aluminum + Brass, 33.7×12.7mm, 33g, 8×Ø4×1.2 + 8×Ø4×2 magnets, $6.35–$7.85). We eliminated row #147 and consolidated it into FS-135 to prevent SEO duplicate-content penalties.'
      },
      {
        question: 'Are these mechanical spinner rings worn on the finger or spun on the index knuckle?',
        answer: 'With outer diameters of 33.7mm to 41mm and inner bearing bores of ~17mm to 20mm (US Ring Size 7 to 10), they function as index/thumb EDC knuckle spinner rings as well as desktop haptic rings.'
      },
      {
        question: 'Can we laser engrave a brand name inside the inner ring bore or outer bezel?',
        answer: 'Yes. Our rotary fiber laser fixture can engrave serial numbers or brand wordmarks along the inner bore or outer chamfered rim at 100 pcs MOQ.'
      },
      {
        question: 'How loud are the magnetic clicks on these spinner rings during office meetings?',
        answer: 'Because the 16 micro magnets (Ø4×1.2mm to Ø4×2mm) are enclosed inside a CNC aluminum/brass housing riding on a thin-section ball bearing, acoustic output stays below 35 dB—providing tactile finger feedback that is virtually inaudible across a conference table.'
      },
      {
        question: 'What is the difference between the magnetic spinner rings (FS-014, FS-069, FS-135, FS-140) and the planetary bead ring (FS-119)?',
        answer: 'FS-014, FS-069, FS-135, and FS-140 use 16 opposing neodymium magnets plus a thin-wall bearing for magnetic ratchet clicks, whereas FS-119 (Planetary 8-Bead Ring) uses 8 exposed Ø8mm hardened steel balls in an open cage that functions as a massage roller and planetary bearing spinner.'
      },
      {
        question: 'Do the brass and aluminum ring surfaces tarnish or stain fingers?',
        answer: 'No. The inner finger-contact ring is machined from passivated 304 stainless steel or hard-anodized 6063 aluminum, preventing direct skin contact with raw brass and ensuring hypoallergenic, RoHS/REACH-compliant wear.'
      },
      {
        question: 'Can the magnetic ratchet resistance be adjusted on FS-014 or FS-135?',
        answer: 'Yes. Threaded retention rings allow advanced EDC users to remove or flip magnet pairs inside the 8+8 magnet pockets to customize click stiffness or switch to free-spinning bearing mode.'
      },
      {
        question: 'What are the exact thin-section bearing dimensions inside these rings?',
        answer: 'FS-014, FS-069, and FS-135 utilize a precision Ø27×Ø19.95×4mm thin-section ball bearing (~19.95mm inner finger bore, US Size 10), while FS-140 uses a compact Ø23×Ø17×4mm bearing (~17mm inner bore, US Size 6.5–7).'
      },
      {
        question: 'Can we bundle a leather lanyard or necklace cord with mechanical spinner rings?',
        answer: 'Yes. Many EDC buyers wear oversized knuckle rings on a braided leather or titanium bead necklace cord when not spinning them; we can include a waxed cord necklace in each EVA pouch for +$0.25/unit.'
      },
      {
        question: 'Can we mix all 5 ring styles to meet a 100 pcs wholesale order?',
        answer: 'Yes! You can combine any of the 5 ring models in increments of 20 pcs per SKU to build a 100-piece assorted mechanical ring order.'
      }
    ]
  },
  {
    slug: 'custom-logo-metal-fidgets',
    number: 7,
    group: 'cross',
    name: 'Logo-Ready Custom Branding Metal Fidgets',
    shortName: '★ Logo-Ready Molds (28)',
    zhName: 'Unobstructed Flat-Surface Molds for Fiber Laser & Deep Laser Color Fill',
    badge: '★ Cross-Tag Collection #7 · 28 Logo-Ready Molds',
    skuCount: 28,
    priceRangeRmb: '¥3.5 – ¥82',
    priceRangeUsd: '$0.75 – $21.45',
    moq: '100 pcs (Custom Logo) / 50 pcs (Blank)',
    leadTime: '10–15 Days (With Logo)',
    targetKeywords: 'laser engraved fidget spinner, custom logo metal fidget toys, promotional edc slider with logo, laser engraved fidget spinner bulk, private label amazon fidget supplier',
    heroSubtitle: 'Hand-picked from our 140 molds: 28 flat-surface Laser Engraved Fidget Spinners, Magnetic Sliders, and Haptic Coins specifically engineered for permanent 50W Fiber Laser Engraving (+$0.15–$0.30/pc) and Deep Laser Engraving + Color Fill (+$0.35–$0.60/pc)—$0 mold fee, 100 pcs custom logo MOQ.',
    geoDirectAnswer: 'The Logo-Ready Custom Branding collection aggregates 28 existing metal molds—including laser engraved fidget spinners, flat-bezel magnetic sliders, and stainless haptic coins—with unobstructed branding zones (18×18mm to 45×28mm). Because smooth metal is chemically inert and surface silk-screen/UV ink peels off due to low adhesion, our factory recommends 50W Fiber Laser Engraving ($50 sample) or Deep Laser Engraving + Color Fill (+$0.35–$0.60/pc, $80–$150 sample).',
    engineeringHighlights: [
      'Zero Tooling Modification Needed: Lock in our "Keep Ready Mold + Laser Brand Custom Logo" strategy—save $3,000+ in custom die-casting molds and launch in 10–15 days.',
      'Why We Recommend Laser Over Silk-Screen: Smooth metal surfaces are chemically inert so surface silk-screen/UV ink lacks adhesion and peels off. We recommend 50W Fiber Laser Engraving (+$0.15–$0.30/pc, $50 sample) or Deep Laser Engraving + Color Fill (+$0.35–$0.60/pc, $80–$150 sample).',
      'Pre-Packaged in Custom EVA Cases: Pair any of these 28 Logo-Ready fidgets with a custom-branded black EVA zipper pouch and FNSKU barcode sticker.'
    ],
    faqs: [
      {
        question: 'Which 5 models are the #1 best-sellers for corporate logo engraving and Amazon private labeling?',
        answer: 'Our top 5 Logo-Ready models are: (1) FS-125 Smooth Soap-Box N52 Slider (wide 45×28mm flat face), (2) FS-047 Minimalist 6063 Anodized Aluminum Slider (contrasting white laser mark on red/blue/gold anodized aluminum), (3) FS-026 2-in-1 Bottle Opener Slider, (4) FS-013 304 Stainless Haptic Coin, and (5) FS-009 Knurled Twist Top ($0.75+ giveaway staple).'
      },
      {
        question: 'Why does the factory NOT recommend Silk-Screen or UV surface printing on metal fidgets?',
        answer: 'Polished, electroplated, anodized, and PVD-coated metal surfaces are ultra-smooth and chemically inert. Surface-applied silk-screen or UV ink lacks mechanical adhesion ("bite") on smooth metal and easily peels off under continuous thumb friction. Therefore, our factory recommends 50W Fiber Laser Engraving for monochrome logos and Deep Laser Engraving + Color Fill for colored logos.'
      },
      {
        question: 'What is the custom logo pre-production sample fee and sample lead time?',
        answer: 'Custom pre-production logo sampling is paid and takes 10 to 15 days: Standard Fiber Laser Engraving sample fee is $50 USD, and Deep Laser Engraving + Color Fill sample fee is $80 to $150 USD depending on color complexity and SKU. A free 1:1 digital placement proof is provided within 12 hours prior to sampling.'
      },
      {
        question: 'How does Deep Laser Engraving + Color Fill work for colored logos and what does it cost?',
        answer: 'When your logo requires color, our 50W fiber laser first deep-carves a recessed cavity (0.15–0.25mm deep) into the metal shell, and technicians then fill the recessed cavity with thermally cured colored enamel. Because the color sits below the metal friction plane, it never peels off. Unit cost is +$0.35 to $0.60 USD per piece (MOQ 100–200 pcs).'
      },
      {
        question: 'Is there any setup charge or plate fee for custom laser logo orders at 100 pcs MOQ?',
        answer: 'For both 50W Fiber Laser Engraving (+$0.15–$0.30/pc) and Deep Laser Engraving + Color Fill (+$0.35–$0.60/pc) on orders of 100+ pcs per SKU, laser setup and fixture programming are $0.00.'
      },
      {
        question: 'Can you engrave individual serial numbers (e.g., 001/500) or personalized VIP names on each unit?',
        answer: 'Yes! Our EZCAD Galvo fiber laser system supports automated variable-data serialization (e.g., Limited Edition 001/250 to 250/250) or individual employee names from a CSV spreadsheet for only +$0.20/unit.'
      },
      {
        question: 'What is the maximum logo engraving area across these 28 Logo-Ready molds?',
        answer: 'Flat rectangular sliders like FS-125, FS-047, and FS-001 support engraving areas up to 42×26mm; circular coins (FS-013, FS-030) support Ø22mm–Ø34mm medallions; and compact spinners (FS-008, FS-009) support Ø14mm–Ø18mm center-cap logos.'
      },
      {
        question: 'What vector artwork file format is required for Fiber Laser or Deep Laser Color Fill?',
        answer: 'Please provide vector artwork in .AI, .EPS, .PDF, or .SVG format with outlined fonts and Pantone (PMS) color callouts if choosing Deep Laser + Color Fill.'
      },
      {
        question: 'Can we brand both the metal fidget and the outer EVA zipper case?',
        answer: 'Yes. Dual branding (permanent laser engraving on the metal fidget + custom logo on the lid of the black EVA zipper case) is our most popular turnkey package for Amazon private-label brands.'
      },
      {
        question: 'How fast can you deliver 500 custom laser-engraved fidgets for an upcoming trade show?',
        answer: 'Because we keep blank shells in stock for our top 28 Logo-Ready molds, we can laser-engrave, pack, and dispatch 500 units within 10–15 business days.'
      }
    ]
  },
  {
    slug: 'tuning-fork-fidget-sliders',
    number: 8,
    group: 'cross',
    name: 'Acoustic Tuning Fork Fidget Sliders & Gyros',
    shortName: '🎵 Tuning Fork Series (7)',
    zhName: 'Cantilevered Tine & Cavity Acoustic Chime Series',
    badge: '🎵 Cross-Tag Collection #8 · 7 Acoustic Models',
    skuCount: 7,
    priceRangeRmb: '¥26 – ¥1000',
    priceRangeUsd: '$5.50 – $261.50',
    moq: '50 pcs (Blank) / 100 pcs (Logo)',
    leadTime: '7–12 Days',
    targetKeywords: 'tuning fork fidget slider wholesale, acoustic resonance edc slider, ding ding fidget toy manufacturer, harmonic metal fidget bulk',
    heroSubtitle: 'The highest-margin 2026–2027 viral EDC trend on TikTok and YouTube Shorts: 7 precision-machined acoustic chamber sliders, spinners, and gourds engineered with cantilevered tuning-fork tines that emit a crystal-clear metallic chime ("Ding!") on every stroke.',
    geoDirectAnswer: 'Our Acoustic Tuning Fork Series aggregates all 7 sound-resonance models from the factory catalog: FS-150 Compact Tuning Fork Slider, FS-129 Divine-Realm Dual-Bearing Tuning Fork EDC, FS-148 Resonance Chamber Stainless Tuning Fork Spinner, FS-107/112 Acoustic Chime Gourd, FS-086 Harmonic Rhythm Stainless Slider, FS-091 Abalone 56-Magnet Stainless Acoustic Slider, and FS-045 Wood-Tone Acoustic Slider.',
    engineeringHighlights: [
      'Cantilevered Tine & Cavity Resonance: Internal U-shaped tuning-fork prongs vibrate freely when struck by N45/N52 magnet snap or 8mm hardened steel balls, producing a sustained 2,800–4,200 Hz metallic ring.',
      'High Retail Markup Potential: Acoustic tuning-fork EDC pieces command $45–$180 retail prices on independent Shopify stores and TikTok Shop due to their unmistakable ASMR audio signature.',
      'Available in Zinc Alloy, 304 Stainless, 6063 Aluminum & Zirconium: Covers entry-level $6–$10 wholesale sliders (FS-045, FS-150) up to collector-grade CNC Stainless & Zirconium (FS-091, FS-148, FS-107).'
    ],
    faqs: [
      {
        question: 'How does a Tuning Fork Fidget Slider generate its signature metallic "Ding" sound?',
        answer: 'Unlike solid-body sliders that dampen vibration, tuning-fork models (such as FS-150, FS-129, and FS-148) feature CNC-slotted cantilever tines and hollow acoustic chambers. When the N45/N52 magnets snap into alignment or steel balls strike the tine bridge, kinetic energy converts into a pure harmonic chime.'
      },
      {
        question: 'Which tuning fork model has the best price-to-performance ratio for TikTok Shop sellers?',
        answer: 'FS-150 (Compact 20-Magnet N45 PTFE Acoustic Tuning Fork Slider, $10.15–$12.55 wholesale) and FS-045 (Wood-Tone Acoustic Cavity Slider, $5.50–$6.80 wholesale) deliver loud, crisp acoustic resonance at mass-market price points.'
      },
      {
        question: 'Can the acoustic chime be muted for quiet office use?',
        answer: 'Yes. Placing a finger lightly against the side of the tuning-fork slot dampens the tine vibration immediately, converting the piece into a low-decibel tactile clicker.'
      },
      {
        question: 'How does metallurgy (Zinc Alloy vs. 304 Stainless Steel vs. Zirconium) change the tuning fork pitch?',
        answer: '304 Stainless Steel (FS-086, FS-091, FS-148) has a high elastic modulus and low internal damping, yielding the longest, brightest high-frequency sustain (~3,800 Hz). 6063 Aluminum and Zinc Alloy (FS-112, FS-150) produce a crisp mid-range bell chime, while Zr702 Zirconium (FS-107) delivers a warm, deep harmonic ring.'
      },
      {
        question: 'What is unique about FS-091 56-Magnet Abalone Inlaid Stainless Acoustic Slider?',
        answer: 'FS-091 houses 56 micro neodymium magnets (28×Ø4×2mm + 28×Ø3×2mm) inside a CNC 304 stainless steel chassis inlaid with natural iridescent abalone shell, producing rapid multi-note harmonic arpeggios on every push.'
      },
      {
        question: 'How does FS-148 Resonance Chamber Tuning Fork Spinner produce sound while spinning?',
        answer: 'FS-148 combines an R188 central spinner bearing with 16 opposing N45 magnets and precision-milled tuning fork prongs. As the rotor spins past the magnetic poles, the magnetic impulse plucks the tuning fork tines without physical friction, creating a rhythmic "Ding-Ding-Ding" chime.'
      },
      {
        question: 'Do tuning fork tines ever crack or lose their pitch over time?',
        answer: 'No. Because the tines are excited by magnetic snap or rounded steel detent balls well below 5% of the metal yield strength, the cantilevered forks maintain their exact acoustic frequency indefinitely.'
      },
      {
        question: 'Can we request sample units of Acoustic Tuning Fork models before placing a bulk order?',
        answer: 'Yes. Visit our /contact page and list the acoustic SKU codes you would like to evaluate, or message our team via WhatsApp.'
      },
      {
        question: 'Does laser engraving a logo on a tuning fork slider affect its acoustic resonance?',
        answer: 'No. Fiber laser marking etches only 0.02mm–0.05mm into the outer casing surface, leaving the internal tuning fork tine mass and resonant frequency completely unchanged.'
      },
      {
        question: 'Do you provide raw studio ASMR video clips of the tuning fork chime for our product listings?',
        answer: 'Yes. Confirmed wholesale buyers ordering 100+ units receive unwatermarked 4K 60fps macro video clips with uncompressed condenser-microphone audio of each tuning fork model for TikTok, Reels, and Amazon video ads.'
      }
    ]
  },
  {
    slug: 'cnc-stainless-steel-pei-edc',
    number: 9,
    group: 'cross',
    name: 'CNC Stainless Steel, PEI (Ultem) & Exotic Metals',
    shortName: '💎 CNC Exotic Metals (30)',
    zhName: '5-Axis Bar-Stock 304/316 Stainless, Amber PEI & Zirconium',
    badge: '💎 Cross-Tag Collection #9 · 30 CNC Exotic Models',
    skuCount: 30,
    priceRangeRmb: '¥23 – ¥1800',
    priceRangeUsd: '$4.88 – $470.75',
    moq: '50 pcs (Blank) / 100 pcs (Logo)',
    leadTime: '10–15 Days',
    targetKeywords: 'cnc stainless steel fidget wholesale, PEI ultem edc slider manufacturer, zirconium fidget toy OEM, 316 stainless steel edc bulk',
    heroSubtitle: 'Dedicated to premium EDC brands and collector boutiques: 30 precision CNC-machined models crafted from 303/304/316 Stainless Steel, Amber PEI (Polyetherimide / Ultem 1000), 3K Woven Carbon Fiber, C36000 Brass, and Exotic Zirconium Alloy (Zr702).',
    geoDirectAnswer: 'The CNC Stainless Steel, PEI & Exotic Metals collection filters all 30 high-grade models machined from solid bar stock rather than die-cast zinc alloy. Materials include 304 & Marine-Grade 316 Stainless Steel (FS-013, FS-063, FS-066, FS-075, FS-086, FS-091, FS-094, FS-144, FS-148), Amber PEI Ultem (FS-099), 3K Carbon Fiber + Brass (FS-038), and CNC Zirconium Alloy (FS-105/106, FS-107/112, FS-114).',
    engineeringHighlights: [
      '5-Axis CNC Bar-Stock Machining: Tight ±0.02mm dimensional tolerances, crisp chamfers, stonewashed/PVD titanium finishes, and zero die-casting porosity.',
      'Exotic Aerospace & Medical Polymers: Features authentic Amber PEI (Ultem 1000) with high thermal stability and translucent golden amber aesthetics (FS-099) plus 28g featherweight 3K Carbon Fiber (FS-038).',
      'Collector-Grade Zirconium & Abalone Inlays: Includes hand-inlaid natural abalone shell sliders (FS-091, FS-094) and Zr702 Zirconium editions (FS-105, FS-107, FS-114).'
    ],
    faqs: [
      {
        question: 'What is the cost and quality difference between Die-Cast Zinc Alloy and CNC 304/316 Stainless Steel?',
        answer: 'Die-Cast Zinc Alloy (Zamak #3) uses high-speed injection molds ideal for $1.50–$9.00 promotional and mass-retail fidgets. CNC 304/316 Stainless Steel is milled from solid bar stock, offering 3× higher surface hardness, superior heirloom heft, corrosion immunity, and sharper acoustic resonance for $10–$60+ premium EDC lines.'
      },
      {
        question: 'What is PEI (Ultem) and why is it popular in high-end EDC fidgets like FS-099?',
        answer: 'PEI (Polyetherimide, commercially known as Ultem) is an amorphous aerospace engineering thermoplastic that is naturally translucent amber, flame-retardant, chemical-resistant, and 50% lighter than aluminum while delivering a warm, resonant tactile click.'
      },
      {
        question: 'Can we order lower MOQs (e.g., 20–30 pcs) on ultra-high-end Zirconium models like FS-114 or FS-107?',
        answer: 'Yes. For CNC Zirconium (Zr702) and Abalone-inlaid Stainless Steel models priced above $150/unit, we support flexible boutique MOQs starting at 10–25 pcs.'
      },
      {
        question: 'What is the difference between 304 Stainless Steel and 316 Marine-Grade Stainless Steel in your catalog?',
        answer: '304 Stainless Steel (18% Cr, 8% Ni) is the EDC standard for high corrosion resistance and acoustic resonance (used in FS-013, FS-075, FS-086, FS-148). 316 Stainless Steel adds 2–3% Molybdenum for surgical/marine-grade pitting immunity against salty sweat and coastal humidity (used in FS-063 Bionics Goose Spinner).'
      },
      {
        question: 'How is Zr702 Zirconium finished to achieve its dark obsidian-gray appearance?',
        answer: 'After 5-axis CNC milling and fine stonewashing or polishing, Zr702 Zirconium components (FS-106, FS-107, FS-114) undergo controlled thermal oxidation (heat-flaming), growing a dense, Ceramic-like black/charcoal Zirconia (ZrO2) oxide layer that is extremely scratch-resistant.'
      },
      {
        question: 'Why is FS-038 3K Woven Carbon Fiber & Brass Slider so popular with everyday carry users?',
        answer: 'At just 28g (50×30×11mm), FS-038 pairs genuine autoclave-cured 3K twill carbon fiber plates with a precision C36000 brass inlay and 16 N38 magnets, offering featherweight pocketability without sacrificing crisp magnetic clicks.'
      },
      {
        question: 'Why are FS-094 and FS-095 combined into a single CNC 304 Stainless Steel Slider page?',
        answer: 'FS-094 (Natural Abalone Shell Inlaid 304 Stainless Slider) and FS-095 (Classic Brushed 304 Stainless Slider) share the exact 50×34.5×12.6mm CNC chassis, 117g weight, and 16×Ø5×2mm N52 magnet layout. Consolidating them lets buyers toggle between Plain Stainless ($13.50+) and Abalone Inlay ($17.80+) on one page.'
      },
      {
        question: 'What CNC tolerances and surface finishes are standard across these 30 exotic models?',
        answer: 'All bar-stock CNC models are held to ±0.02mm dimensional tolerances with deburred 45° micro-chamfers, available in Fine Bead-Blasted Matte, Ceramic Tumbled Stonewash, Hairline Brushed Satin, and Vacuum PVD Titanium coatings.'
      },
      {
        question: 'Can you provide Mill Test Certificates (MTC) verifying 304/316 Stainless Steel and Zr702 Zirconium composition?',
        answer: 'Yes. We provide XRF (X-Ray Fluorescence) alloy verification reports and raw material Mill Test Certificates confirming authentic SUS304, SUS316, C36000 Brass, 6063-T6 Aluminum, and Zr702 Zirconium grades.'
      },
      {
        question: 'Can we request samples of CNC Stainless Steel, PEI, or Carbon Fiber models before ordering in bulk?',
        answer: 'Yes. Visit our /contact page to request sample units of our CNC 304/316 Stainless Steel, Amber PEI Ultem, 3K Carbon Fiber, or Acoustic Tuning Fork models to inspect the materials and machining quality firsthand.'
      }
    ]
  }
];

export const COLLECTION_BY_SLUG = Object.fromEntries(
  COLLECTIONS.map((c) => [c.slug, c])
);
