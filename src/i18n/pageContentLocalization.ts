import type { SupportedLanguage } from './config';
import { useTranslations } from './utils';

export function getLocalizedPageFaqs(
  pageKey: 'home' | 'catalog' | 'branding' | 'packaging' | 'compliance' | 'about' | 'contact' | 'insights',
  defaultFaqs: { question: string; answer: string }[],
  lang: SupportedLanguage
): { question: string; answer: string }[] {
  if (lang === 'en') return defaultFaqs;
  const t = useTranslations(lang);
  const pcs = t('unit.pcs');
  const pc = t('unit.pc');

  return [
    {
      question: `1. ${t('pdp.declTitle')} — ${t('pdp.noMoldFee')} (FS-001 – FS-150)?`,
      answer: `${t('pdp.declQuote')} (${t('geo.metricToolingVal')} · $0.00).`
    },
    {
      question: `2. ${t('pdp.blankMoq')} & ${t('pdp.logoMoq')}?`,
      answer: `${t('pdp.opt1Title')}: ${t('pdp.opt1Desc')}. ${t('pdp.opt2Title')}: ${t('pdp.opt2Desc')}. ${t('pdp.opt3Title')}: ${t('pdp.opt3Desc')}.`
    },
    {
      question: `3. ${t('brand.compTitle')}?`,
      answer: t('brand.geoAnswer')
    },
    {
      question: `4. ${t('pdp.orderSample')} (10–15d · $80–$150 USD)?`,
      answer: `${t('footer.trust3Sub')}. ${t('contact.subtitle')}`
    },
    {
      question: `5. ${t('catalog.materialLabel')} (Zamak #3 / 6063 Al / 304 SS / PEI Ultem / Zr702)?`,
      answer: `${t('catalog.matZinc')} ($0.75–$9.00/${pc}) · ${t('catalog.matAluminum')} ($3.50–$15.00/${pc}) · ${t('catalog.matStainless')} ($10.00–$65.00/${pc}) · ${t('catalog.matExotic')} ($25.00–$382.00/${pc}).`
    },
    {
      question: `6. ${t('comp.heroTitle')}?`,
      answer: `${t('comp.geoAnswer')} (${t('pdp.trust1')} · ${t('pdp.trust2')}).`
    },
    {
      question: `7. ${t('pkg.heroTitle')} & Amazon FNSKU?`,
      answer: `${t('pkg.card1Title')} (+$0.75/${pc}, MOQ 100 ${pcs}) · ${t('pkg.card2Title')} (+$0.85/${pc}, MOQ 200 ${pcs}) · ${t('pkg.card3Title')} (+$1.10/${pc}, MOQ 300 ${pcs}) · ${t('pdp.trust3')}.`
    },
    {
      question: `8. ${t('home.section4.title')} (2,800–4,200 Hz)?`,
      answer: `${t('home.section4.sub')} (FS-150, FS-129, FS-148, FS-107, FS-112, FS-086, FS-091, FS-045).`
    },
    {
      question: `9. ${t('footer.trust4Title')} (${t('contact.hubLabel')})?`,
      answer: `${t('about.geoAnswer')} (${t('contact.hubVal')} · DDP / FOB / EXW).`
    },
    {
      question: `10. ${t('contact.title')} (${pageKey.toUpperCase()})?`,
      answer: `${t('contact.formDesc')} WhatsApp: +86 187 5012 6315 · sales@fidgetsupply.com.`
    }
  ];
}

export function getBrandingTableData(lang: SupportedLanguage) {
  const t = useTranslations(lang);
  const pcs = t('unit.pcs');
  const pc = t('unit.pc');
  if (lang === 'en') {
    return {
      headers: [
        'Branding Parameter',
        '1. Fiber Laser Engraving (Monochrome)',
        '2. Silk-Screen Printing (Standard Colored Logo)',
        '3. Deep Laser + Color Fill (Recessed Enamel)'
      ],
      rows: [
        ['Minimum Order Quantity (MOQ)', '100 pcs per SKU', '100 pcs per SKU', '200 – 300 pcs per SKU'],
        ['Screen / Setup Fee', '$0.00 (Free Digital Setup)', '$35 / color (1 color = $35, 2 colors = 2×$35 = $70, 3 colors = 3×$35 = $105)', '$0.00 Laser Setup'],
        ['Unit Logo Add-On Cost', '+$0.15 – $0.30 / pc', '+$0.10 / color / pc (1 color = +$0.10/pc, 5 colors = +$0.50/pc)', '+$0.35 – $0.60 / pc (Deep laser etch + hand color fill)'],
        ['Custom Logo Sample Fee & Time', '$80 – $150 USD · 10 – 15 Days', '$80 – $150 USD · 10 – 15 Days', '$80 – $150 USD · 10 – 15 Days'],
        ['Process & Visual Effect', 'Crisp permanent metallic/white contrast laser mark', 'Vibrant multi-color spot ink printed across smooth flat faces', 'Deep-engraved recessed metal cavity filled with cured color enamel'],
        ['Wear & Sweat Durability', '10/10 Permanent micron-level ablation (Never fades)', '8.5/10 Kiln-baked industrial screen ink', '9.5/10 Recessed cavity protects color fill from thumb friction'],
        ['Recommended Ready Molds', 'FS-047, FS-013, FS-009, FS-012, FS-064, FS-075, FS-086, FS-096', 'FS-125, FS-128, FS-001, FS-024, FS-026, FS-050, FS-056', 'FS-013, FS-047, FS-075, FS-086, FS-125, FS-148']
      ]
    };
  }
  return {
    headers: [
      t('pdp.specColParam'),
      t('pdp.opt2Title'),
      `2. ${t('pdp.opt3Title').replace(/^3\.\s*/, '').split('(')[0].trim()} (Silk-Screen)`,
      `3. Deep Laser + Color Fill`
    ],
    rows: [
      [t('pdp.logoMoq'), `100 ${pcs} / SKU`, `100 ${pcs} / SKU`, `200 – 300 ${pcs} / SKU`],
      [t('geo.metricTooling'), '$0.00', '$35 / color (1 = $35, 2 = $70, 3 = $105)', '$0.00'],
      [t('pdp.pricingTitle'), `+$0.15 – $0.30 / ${pc}`, `+$0.10 / color / ${pc} (5 = +$0.50/${pc})`, `+$0.35 – $0.60 / ${pc}`],
      [t('pdp.orderSample'), t('footer.trust3Sub'), t('footer.trust3Sub'), t('footer.trust3Sub')],
      [t('contact.brandingMode'), t('pdp.opt2Desc'), t('pdp.opt3Desc'), `200–300 ${pcs} · +$0.35–$0.60/${pc}`],
      [t('geo.metricSafety'), '10/10 (50W MOPA Fiber Laser)', '8.5/10 (Pantone Silk-Screen)', '9.5/10 (Deep Laser + Enamel)'],
      ['SKU', 'FS-047, FS-013, FS-009, FS-012, FS-064, FS-075, FS-086, FS-096', 'FS-125, FS-128, FS-001, FS-024, FS-026, FS-050, FS-056', 'FS-013, FS-047, FS-075, FS-086, FS-125, FS-148']
    ]
  };
}

export function getPackagingBullets(lang: SupportedLanguage) {
  const t = useTranslations(lang);
  const pc = t('unit.pc');
  const pcs = t('unit.pcs');
  if (lang === 'en') {
    return {
      price1: '+$0.75 / pc · MOQ 100',
      bullets1: ['✓ 95 × 65 × 32 mm', '✓ Silicone / Silk-Screen Logo', '✓ FNSKU & CPSC 14+ Ready'],
      price2: '+$0.85 / pc · MOQ 200',
      bullets2: ['✓ 110 × 80 × 28 mm', '✓ Fiber Laser / UV Lid Logo', '✓ Custom CNC Foam Cavity'],
      price3: '+$1.10 / pc · MOQ 300',
      bullets3: ['✓ 125 × 90 × 38 mm', '✓ Gold / Silver Hot Foil Stamping', '✓ Velvet-Flocked EVA Interior']
    };
  }
  return {
    price1: `+$0.75 / ${pc} · MOQ 100 ${pcs}`,
    bullets1: ['✓ 95 × 65 × 32 mm', `✓ ${t('footer.cert3')}`, `✓ ${t('pdp.trust3')}`],
    price2: `+$0.85 / ${pc} · MOQ 200 ${pcs}`,
    bullets2: ['✓ 110 × 80 × 28 mm', `✓ ${t('pdp.opt2Title')}`, `✓ CNC EVA (FS-001 – FS-150)`],
    price3: `+$1.10 / ${pc} · MOQ 300 ${pcs}`,
    bullets3: ['✓ 125 × 90 × 38 mm', `✓ 1200g/m² VIP Gift Box`, `✓ ${t('pdp.trust1')}`]
  };
}

export function getComplianceTableData(lang: SupportedLanguage) {
  const t = useTranslations(lang);
  if (lang === 'en') {
    return {
      headers: ['Engineering Layer', 'Factory Process Specification', 'QC Verification Test', 'Applicable Product Lines'],
      rows: [
        [
          '1. Captive Mechanical Plate Enclosure',
          'Magnets are seated in internal blind pockets sealed beneath a PTFE wear plate or CNC stainless top plate fastened by 2–8 M2/M2.5 machine screws or Chicago sex-bolts.',
          'Zero physical exit path even if adhesive bond is thermally cycled',
          'FS-001, FS-016, FS-035, FS-094, FS-114, FS-125, FS-128, FS-150'
        ],
        [
          '2. Two-Part Structural Acrylic/Epoxy Bonding',
          'Automated pneumatic dispensing of industrial structural adhesive (shear strength >22 MPa, operating range -40°C to +120°C) into precision-chamfered magnet wells.',
          '48-hour thermal shock (-20°C to +80°C) + 10-drop 1.5m steel plate impact test',
          'All Magnetic Sliders, Coins, Gourds & Rings'
        ],
        [
          '3. Anaerobic Thread-Locked Fasteners',
          'All M2, M2.5, M3 hex socket screws and bearing retention caps are torqued with medium/high-strength anaerobic threadlocker.',
          'ASTM F963 / 16 CFR 1500.53 Torque (0.45 Nm) & Tension (70 N) clamp test',
          'Multi-Action Mechanical EDC & Multi-Axis Gyros'
        ],
        [
          '4. RoHS 3 & REACH Metallurgy Control',
          'Virgin Zamak #3 zinc alloy, 6063-T6 aluminum, 304/316 stainless steel, C36000 lead-free brass, and nickel-release compliant PVD/electroplating.',
          'XRF spectrometer screening on every incoming metal ingot batch',
          '100% of Catalog (FS-001 to FS-150)'
        ]
      ]
    };
  }
  return {
    headers: [t('pdp.specColParam'), t('pdp.specColVal'), t('geo.metricSafety'), t('nav.products')],
    rows: [
      [
        `1. ${t('pdp.trust1')}`,
        t('comp.geoAnswer'),
        'US CPSC 16 CFR 1262 (Flux >= 50 kG²mm²)',
        'FS-001, FS-016, FS-035, FS-094, FS-114, FS-125, FS-128, FS-150'
      ],
      [
        '2. >22 MPa Structural Epoxy (-40°C – +120°C)',
        `${t('about.card2Title')}: ${t('about.card2Desc')}`,
        '48h (-20°C – +80°C) + 10× 1.5m Drop Test',
        `${t('col.magnetic-fidget-sliders.short')} · ${t('col.haptic-fidget-coins.short')} · ${t('col.magnetic-fidget-rings.short')}`
      ],
      [
        '3. M2 / M2.5 / M3 Thread-Lock (0.45 Nm / 70 N)',
        `${t('about.card1Title')}: ${t('about.card1Desc')}`,
        'ASTM F963 / 16 CFR 1500.53 (0.45 Nm & 70 N)',
        `${t('col.mechanical-edc-fidgets.short')} · ${t('col.metal-fidget-spinners-gyros.short')}`
      ],
      [
        `4. ${t('pdp.trust2')} (XRF RoHS 3 & REACH)`,
        `${t('catalog.matZinc')} · ${t('catalog.matAluminum')} · ${t('catalog.matStainless')} · ${t('catalog.matExotic')}`,
        'EU 2015/863 RoHS 3 & EN 1811 XRF',
        'FS-001 – FS-150 (100%)'
      ]
    ]
  };
}

export function getAboutTableData(lang: SupportedLanguage) {
  const t = useTranslations(lang);
  if (lang === 'en') {
    return {
      col1: 'Platform Dimension',
      col2: 'Operations & Export Coordination',
      row1Label: 'Platform Positioning',
      row1Val: "Your integrated sourcing & supply chain platform for China's metal EDC fidget & kinetic desk toy industry",
      row2Label: 'Manufacturing Capabilities',
      row2Val: 'Zinc Alloy Die-Casting, CNC Machining (Stainless Steel / Aluminum / Brass / PEI / Zirconium), Surface Plating & Anodizing'
    };
  }
  return {
    col1: t('pdp.specColParam'),
    col2: t('pdp.specColVal'),
    row1Label: t('about.heroBadge'),
    row1Val: t('about.heroDesc'),
    row2Label: t('about.card1Title').replace(/^1\.\s*/, ''),
    row2Val: `${t('catalog.matZinc')} · ${t('catalog.matAluminum')} · ${t('catalog.matStainless')} · ${t('catalog.matExotic')}`
  };
}
