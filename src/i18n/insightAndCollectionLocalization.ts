import type { SupportedLanguage } from './config';
import { useTranslations } from './utils';

const INSIGHT_CATEGORIES: Record<string, Partial<Record<SupportedLanguage, string>>> = {
  'Acoustic EDC Trends': {
    de: 'Akustik-EDC-Trends', fr: 'Tendances EDC Acoustiques', nl: 'Akoestische EDC-trends', es: 'Tendencias EDC Acústicas',
    it: 'Trend EDC Acustici', pt: 'Tendências EDC Acústicas', sv: 'Akustiska EDC-trender', da: 'Akustiske EDC-trends',
    no: 'Akustiske EDC-trender', fi: 'Akustiset EDC-trendit', pl: 'Trendy Akustyczne EDC', cs: 'Akustické EDC trendy',
    ru: 'Акустические EDC-тренды', ja: '音響EDCトレンド', ko: '어쿠스틱 EDC 트렌드', id: 'Tren EDC Akustik', ar: 'اتجاهات EDC الصوتية'
  },
  'Custom Branding & Packaging': {
    de: 'Logo-Veredelung & Verpackung', fr: 'Personnalisation Logo & Packaging', nl: 'Logo-personalisatie & Verpakking', es: 'Personalización de Logo y Empaque',
    it: 'Personalizzazione Logo e Packaging', pt: 'Personalização de Logótipo e Embalagem', sv: 'Logotyptryck & förpackning', da: 'Logomærkning & emballage',
    no: 'Logomerking & emballasje', fi: 'Logomerkkaus & pakkaus', pl: 'Znakowanie Logo i Opakowania', cs: 'Branding loga a balení',
    ru: 'Брендирование и упаковка', ja: 'ロゴ名入れ・OEMパッケージ', ko: '로고 브랜딩 및 패키징', id: 'Kustomisasi Logo & Kemasan', ar: 'تخصيص الشعار والتغليف'
  },
  'Magnetics & Tactile Engineering': {
    de: 'Magnetik & Haptik-Technik', fr: 'Magnétisme & Ingénierie Tactile', nl: 'Magnetisme & Haptische Techniek', es: 'Magnetismo e Ingeniería Táctil',
    it: 'Magnetismo e Ingegneria Tattile', pt: 'Magnetismo e Engenharia Tátil', sv: 'Magnetism & taktil teknik', da: 'Magnetisme & taktil teknik',
    no: 'Magnetisme & taktil teknikk', fi: 'Magnetismi & haptinen tekniikka', pl: 'Magnetyzm i Inżynieria Dotykowa', cs: 'Magnetismus a haptické inženýrství',
    ru: 'Магнетизм и тактильная инженерия', ja: '磁気設計・ハプティック工学', ko: '자석 설계 및 햅틱 엔지니어링', id: 'Rekayasa Magnetik & Taktil', ar: 'الهندسة المغناطيسية واللمسية'
  },
  'Safety & Regulatory Compliance': {
    de: 'Sicherheit & Normkonformität', fr: 'Sécurité & Conformité Réglementaire', nl: 'Veiligheid & Wetgeving', es: 'Seguridad y Cumplimiento Normativo',
    it: 'Sicurezza e Conformità Normativa', pt: 'Segurança e Conformidade Regulamentar', sv: 'Säkerhet & regelefterlevnad', da: 'Sikkerhed & lovkrav',
    no: 'Sikkerhet & samsvarskrav', fi: 'Turvallisuus & vaatimustenmukaisuus', pl: 'Bezpieczeństwo i Certyfikacja', cs: 'Bezpečnost a legislativní shoda',
    ru: 'Безопасность и сертификация', ja: '安全基準・国際規制コンプライアンス', ko: '안전 기준 및 규제 준수', id: 'Keamanan & Kepatuhan Regulasi', ar: 'السلامة والامتثال التنظيمي'
  },
  'Wholesale Sourcing SOP': {
    de: 'Großhandels-Beschaffungs-SOP', fr: 'SOP d’Approvisionnement en Gros', nl: 'Groothandel Inkoop-SOP', es: 'SOP de Abastecimiento Mayorista',
    it: 'SOP di Fornitura all’Ingrosso', pt: 'SOP de Fornecimento por Atacado', sv: 'Grossist-inköps-SOP', da: 'Engros-indkøbs-SOP',
    no: 'Engros-innkjøps-SOP', fi: 'Tukkuhankinnan SOP', pl: 'Procedura Zakupów Hurtowych SOP', cs: 'SOP velkoobchodního nákupu',
    ru: 'SOP оптовых закупок', ja: '卸売・OEM調達SOP', ko: '도매 소싱 표준 절차(SOP)', id: 'SOP Pengadaan Grosir', ar: 'إجراءات التوريد بالجملة SOP'
  },
  'Materials & Manufacturing': {
    de: 'Werkstoffe & CNC-Fertigung', fr: 'Matériaux & Fabrication CNC', nl: 'Materialen & CNC-productie', es: 'Materiales y Fabricación CNC',
    it: 'Materiali e Produzione CNC', pt: 'Materiais e Fabrico CNC', sv: 'Material & CNC-tillverkning', da: 'Materialer & CNC-produktion',
    no: 'Materialer & CNC-produksjon', fi: 'Materiaalit & CNC-valmistus', pl: 'Materiały i Produkcja CNC', cs: 'Materiály a CNC výroba',
    ru: 'Материалы и ЧПУ-производство', ja: '金属素材・CNC加工技術', ko: '금속 소재 및 CNC 제조', id: 'Material & Manufaktur CNC', ar: 'المواد والتصنيع باستخدام CNC'
  }
};

const INSIGHT_TITLES: Record<string, Partial<Record<SupportedLanguage, { title: string; summary: string }>>> = {
  'acoustic-tuning-fork-fidget-slider-engineering-trend': {
    de: {
      title: 'Akustische Stimmgabel-Fidget-Slider: Resonanzkammer-Technik & Großhandels-Leitfaden 2026–2027',
      summary: 'Wie freitragende Stimmgabel-Zinken und Hohlresonanzkammern den 2.800–4.200 Hz „Ding!“-Klang erzeugen — mit Vergleich unserer 7 Akustik-Serienformen (FS-150, FS-129, FS-148).'
    },
    fr: {
      title: 'Sliders Fidget Diapason Acoustiques : Ingénierie de Chambre de Résonance & Guide Grossiste 2026–2027',
      summary: 'Comment les fourches acoustiques usinées CNC génèrent la note métallique « Ding ! » à 2 800–4 200 Hz — comparatif de nos 7 moules acoustiques (FS-150, FS-129, FS-148).'
    },
    es: {
      title: 'Sliders Fidget de Diapasón Acústico: Ingeniería de Cámara de Resonancia y Guía Mayorista 2026–2027',
      summary: 'Cómo las horquillas en voladizo y cámaras de resonancia producen el timbre metálico "Ding!" de 2,800–4,200 Hz — comparativa de nuestros 7 moldes acústicos (FS-150, FS-129, FS-148).'
    },
    ja: {
      title: '音叉（チューニングフォーク）共鳴フィジェットスライダー：音響設計と卸売ガイド 2026–2027',
      summary: '片持ち音叉プロングと共鳴チャンバーが 2,800〜4,200 Hz の澄んだ金属音「チーン！」を生み出す仕組みと、音叉シリーズ全7モデル（FS-150・FS-129・FS-148等）の徹底比較。'
    },
    ko: {
      title: '어쿠스틱 튜닝포크(음차) 피젯 슬라이더: 공명 챔버 설계 및 2026–2027 도매 가이드',
      summary: '캔틸레버 음차 프롱과 중공 공명 챔버가 2,800~4,200 Hz 금속 공명음을 내는 원리와 당사 7종 튜닝포크 모델(FS-150, FS-129, FS-148 등) 비교 분석.'
    }
  },
  'fiber-laser-engraving-vs-uv-printing-metal-fidget-logos': {
    de: {
      title: '50W-Faserlasergravur vs. Siebdruck vs. Tiefe Lasergravur mit Farbauslegung auf Metall-Fidgets',
      summary: 'Technischer Vergleich von 50W-MOPA-Faserlasergravur (+$0,15–$0,30/Stk.), mehrfarbigem Siebdruck ($35/Farbe + $0,10/Farbe/Stk.) und tiefer Lasergravur mit Emaille-Farbfüllung (+$0,35–$0,60/Stk.).'
    },
    fr: {
      title: 'Gravure Laser Fibre 50W vs Sérigraphie Couleur vs Gravure Laser Profonde + Émail sur Fidgets Métal',
      summary: 'Comparatif technique entre gravure laser fibre 50W (+0,15–0,30 $/pc), sérigraphie couleur (35 $/couleur + 0,10 $/couleur/pc) et gravure laser profonde avec remplissage couleur (+0,35–0,60 $/pc).'
    },
    es: {
      title: 'Grabado Láser de Fibra 50W vs. Serigrafía en Color vs. Láser Profundo con Relleno de Color',
      summary: 'Comparativa técnica entre grabado láser de fibra 50W (+$0.15–$0.30/ud.), serigrafía multicolor ($35/color + $0.10/color/ud.) y grabado láser profundo con esmalte (+$0.35–$0.60/ud.).'
    },
    ja: {
      title: '金属フィジェットのロゴ名入れ比較：50Wファイバーレーザー刻印 vs シルクスクリーン印刷 vs 深彫りレーザー色入れ',
      summary: '単色レーザー刻印（+$0.15〜$0.30/個）、シルクスクリーン多色印刷（版代$35/色＋単価+$0.10/色）、深彫りレーザー＋色入れ加工（+$0.35〜$0.60/個、MOQ 200〜300個）の耐久性とコストを徹底比較。'
    },
    ko: {
      title: '금속 피젯 로고 각인 비교: 50W 파이버 레이저 vs 실크스크린 컬러 인쇄 vs 심층 레이저 컬러 필링',
      summary: '단색 파이버 레이저 각인(+$0.15~$0.30/개), 다색 실크스크린 인쇄(판비 $35/색상 + 단가 +$0.10/색상), 심층 레이저 음각 + 컬러 필링(+$0.35~$0.60/개, MOQ 200~300개)의 내구성과 비용 분석.'
    }
  },
  'n35-vs-n52-neodymium-magnet-haptic-feel-guide': {
    de: {
      title: 'N35 vs. N45 vs. N52 Neodym-Magnete in Metall-Fidget-Slidern: Zugkraft & Haptik-Kalibrierung',
      summary: 'Warum mechanische Schienen-Slider (FS-002, FS-048) N35–N40 Magnete nutzen, während freie PTFE-Slider (FS-125, FS-075) hochstarke N50–N52 Magnete erfordern.'
    },
    fr: {
      title: 'Aimants Néodyme N35 vs N45 vs N52 dans les Sliders Fidget Métal : Force & Calibrage Haptique',
      summary: 'Pourquoi les sliders sur rail mécanique (FS-002, FS-048) utilisent des aimants N35–N40 tandis que les sliders libres PTFE (FS-125, FS-075) exigent des aimants N50–N52.'
    },
    es: {
      title: 'Imanes de Neodimio N35 vs. N45 vs. N52 en Sliders Fidget Metálicos: Fuerza Táctil y Acústica',
      summary: 'Por qué los sliders de riel mecánico (FS-002, FS-048) usan imanes N35–N40 mientras que los sliders libres de PTFE (FS-125, FS-075) requieren imanes N50–N52.'
    },
    ja: {
      title: '金属フィジェットスライダーにおける N35 vs N45 vs N52 ネオジム磁石：吸着力とクリック感の設計指針',
      summary: '機械式レールスライダー（FS-002、FS-048）に N35〜N40 磁石が適し、PTFEフリースライド型（FS-125、FS-075）に高磁束 N50〜N52 磁石が不可欠な理由を解説。'
    },
    ko: {
      title: '금속 피젯 슬라이더의 N35 vs N45 vs N52 네오디뮴 자석 비교: 자력 및 햅틱 손맛 설계 가이드',
      summary: '기계식 트랙 슬라이더(FS-002, FS-048)에 N35~N40 자석이 사용되고 무한 프리플로팅 PTFE 슬라이더(FS-125, FS-075)에 고자력 N50~N52 자석이 필수적인 공학적 이유.'
    }
  },
  'us-cpsc-16-cfr-1262-magnet-fidget-safety-compliance': {
    de: {
      title: 'US CPSC 16 CFR 1262 Magnet-Sicherheitsnorm & EU RoHS/REACH Konformität für Metall-Fidgets',
      summary: 'Wie unsere 3-stufige Magnetverriegelung (Sackloch-Senkung, >22 MPa Struktur-Epoxid und Schraubensicherung) das Lösen von Magneten verhindert.'
    },
    fr: {
      title: 'Norme de Sécurité Magnétique US CPSC 16 CFR 1262 & Conformité EU RoHS/REACH pour Fidgets Métal',
      summary: 'Comment notre architecture de rétention magnétique à 3 niveaux (alésage borgne, époxy >22 MPa et vis freinées) garantit zéro détachement d’aimant.'
    },
    es: {
      title: 'Norma de Seguridad de Imanes US CPSC 16 CFR 1262 y Cumplimiento RoHS/REACH para Fidgets',
      summary: 'Cómo nuestro protocolo de retención magnética de 3 capas (cavidad ciega, epoxi >22 MPa y tornillos bloqueados) garantiza cero desprendimiento de imanes.'
    },
    ja: {
      title: '米国 CPSC 16 CFR 1262 磁石安全基準および EU RoHS/REACH コンプライアンス完全ガイド',
      summary: '止まり穴カウンターボア、工業用エポキシ接着剤（>22 MPa）、ネジロック剤による3重の磁石脱落防止構造と、Amazon FBA出品向けの安全対策を解説。'
    },
    ko: {
      title: '미국 CPSC 16 CFR 1262 자석 안전 기준 및 EU RoHS/REACH 규정 준수 완벽 가이드',
      summary: '블라인드 카운터보어, 산업용 구조 에폭시(>22 MPa), 나사 풀림 방지제를 결합한 3중 자석 이탈 방지 설계와 아마존 FBA 셀러를 위한 안전 규정 가이드.'
    }
  },
  'zero-tooling-ready-mold-private-label-fidget-sop': {
    de: {
      title: 'Eigenmarken-Start in 10–15 Tagen ohne Werkzeugkosten ($0 Tooling SOP auf 140 Serienformen)',
      summary: 'Wie E-Commerce-Marken und Werbemittelagenturen $3.000+ an Formkosten sparen, indem sie unsere 140 fertigen Serienformen mit eigenem Logo (MOQ 100 Stk.) nutzen.'
    },
    fr: {
      title: 'Lancer sa Marque Privée de Fidgets Métal en 10–15 Jours avec 0 $ de Frais de Moule (SOP)',
      summary: 'Comment les marques e-commerce et agences économisent plus de 3 000 $ d’outillage en personnalisant nos 140 moules prêts à produire dès 100 pcs.'
    },
    es: {
      title: 'Cómo Lanzar Fidgets Metálicos de Marca Privada en 10–15 Días con $0 Costo de Molde (SOP)',
      summary: 'Cómo las marcas de comercio electrónico ahorran más de $3,000 en matricería personalizando nuestros 140 moldes listos desde 100 unidades.'
    },
    ja: {
      title: '金型代0ドル（$0 Tooling SOP）で自社ブランドの金属フィジェットを10〜15日で立ち上げる方法',
      summary: '新規金型費（$3,000以上）をかけずに、既存の140金型＋カスタムロゴ名入れ（最小ロット100個〜・サンプル10〜15日）で高利益なPB商品を展開する実践手順。'
    },
    ko: {
      title: '금형비 0달러($0 툴링 SOP)로 10~15일 만에 자체 브랜드 금속 피젯을 런칭하는 방법',
      summary: '$3,000 이상의 신규 금형 투자 없이 140종 기성 금형과 맞춤 로고 각인(MOQ 100개, 샘플 10~15일)을 활용해 고마진 PB 상품을 출시하는 실전 절차.'
    }
  },
  'zinc-alloy-die-casting-vs-cnc-stainless-steel-edc-cost': {
    de: {
      title: 'Zinkdruckguss (Zamak #3) vs. 5-Achsen-CNC 304/316 Edelstahl, PEI & Zirkonium: Kostenanalyse',
      summary: 'Warum dasselbe EDC-Design im Zinkdruckguss $1,20–$6,00 und in 5-Achsen-CNC-Edelstahl, Bernstein-PEI (Ultem) oder Zr702-Zirkonium $15–$380+ kostet.'
    },
    fr: {
      title: 'Alliage de Zinc Moulé vs Acier Inox 304/316 CNC, PEI (Ultem) & Zirconium : Coûts & Marges',
      summary: 'Pourquoi un même design EDC coûte 1,20–6,00 $ en alliage de zinc moulé contre 15–380 $+ en acier inoxydable CNC 5 axes, PEI ambre ou zirconium Zr702.'
    },
    es: {
      title: 'Aleación de Zinc Fundido vs. Acero Inoxidable 304/316 CNC, PEI y Circonio: Costos y Márgenes',
      summary: 'Por qué un mismo diseño EDC cuesta $1.20–$6.00 en fundición de zinc frente a $15–$380+ en acero inoxidable CNC de 5 ejes, PEI ámbar o circonio Zr702.'
    },
    ja: {
      title: '亜鉛合金ダイカスト vs 5軸CNC 304/316ステンレス・アンバーPEI・ジルコニウム：製造原価と利益率の徹底比較',
      summary: '同じ金型デザインのフィジェットでも、亜鉛合金ダイカスト（$1.20〜$6.00）と5軸CNCステンレス・PEI（Ultem）・Zr702ジルコニウム（$15〜$380+）で価格が大きく異なる理由を解説。'
    },
    ko: {
      title: '아연 합금 다이캐스팅 vs 5축 CNC 304/316 스테인리스·PEI(울템)·지르코늄: 원가 및 마진 분석',
      summary: '동일한 디자인의 피젯이 아연 합금 다이캐스팅($1.20~$6.00)과 5축 CNC 스테인리스·앰버 PEI·Zr702 지르코늄($15~$380+)에서 원가와 소매 마진이 달라지는 이유.'
    }
  }
};

export function localizeInsightMeta(guideData: any, lang: SupportedLanguage) {
  if (lang === 'en') {
    return {
      title: guideData.title,
      summary: guideData.summary,
      category: guideData.category
    };
  }
  const cat = INSIGHT_CATEGORIES[guideData.category]?.[lang] || guideData.category;
  const hit = INSIGHT_TITLES[guideData.slug]?.[lang];
  if (hit) {
    return {
      title: hit.title,
      summary: hit.summary,
      category: cat
    };
  }
  return {
    title: guideData.title,
    summary: guideData.summary,
    category: cat
  };
}

export function localizeCollectionContent(col: any, lang: SupportedLanguage) {
  const t = useTranslations(lang);
  if (lang === 'en') {
    return {
      heroSubtitle: col.heroSubtitle,
      geoDirectAnswer: col.geoDirectAnswer,
      engineeringHighlights: col.engineeringHighlights,
      faqs: col.faqs
    };
  }
  const desc = t(`col.${col.slug}.desc` as any);
  const shortName = t(`col.${col.slug}.short` as any);
  return {
    heroSubtitle: desc,
    geoDirectAnswer: `${shortName} (${col.skuCount} SKUs, ${col.priceRangeUsd}) — ${desc} MOQ: ${col.moq} · ${col.leadTime}.`,
    engineeringHighlights: [
      `${t('pdp.noMoldFee')} (${col.skuCount} SKUs · ${col.priceRangeUsd})`,
      `${t('pdp.opt2Title')} & ${t('pdp.opt3Title')} (MOQ 100 pcs)`,
      `US CPSC 16 CFR 1262 & EU RoHS / REACH`,
      `${t('pdp.trust1')} · ${t('pdp.trust2')}`
    ],
    faqs: col.faqs
  };
}
