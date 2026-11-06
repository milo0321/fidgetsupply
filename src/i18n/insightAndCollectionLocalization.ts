import type { SupportedLanguage } from './config';
import { useTranslations, getLocalizedPath } from './utils';

const INSIGHT_CATEGORIES: Record<string, Record<SupportedLanguage, string>> = {
  'Acoustic EDC Trends': {
    en: 'Acoustic EDC Trends', de: 'Akustik-EDC-Trends', fr: 'Tendances EDC Acoustiques', nl: 'Akoestische EDC-trends',
    es: 'Tendencias EDC Acústicas', it: 'Trend EDC Acustici', pt: 'Tendências EDC Acústicas', sv: 'Akustiska EDC-trender',
    da: 'Akustiske EDC-trends', no: 'Akustiske EDC-trender', fi: 'Akustiset EDC-trendit', pl: 'Trendy Akustyczne EDC',
    cs: 'Akustické EDC trendy', ru: 'Акустические EDC-тренды', ja: '音響EDCトレンド', ko: '어쿠스틱 EDC 트렌드',
    id: 'Tren EDC Akustik', ar: 'اتجاهات EDC الصوتية'
  },
  'Custom Branding & Packaging': {
    en: 'Custom Branding & Packaging', de: 'Logo-Veredelung & Verpackung', fr: 'Personnalisation Logo & Packaging', nl: 'Logo-personalisatie & Verpakking',
    es: 'Personalización de Logo y Empaque', it: 'Personalizzazione Logo e Packaging', pt: 'Personalização de Logótipo e Embalagem', sv: 'Logotyptryck & förpackning',
    da: 'Logomærkning & emballage', no: 'Logomerking & emballasje', fi: 'Logomerkkaus & pakkaus', pl: 'Znakowanie Logo i Opakowania',
    cs: 'Branding loga a balení', ru: 'Брендирование и упаковка', ja: 'ロゴ名入れ・OEMパッケージ', ko: '로고 브랜딩 및 패키징',
    id: 'Kustomisasi Logo & Kemasan', ar: 'تخصيص الشعار والتغليف'
  },
  'Magnetics & Tactile Engineering': {
    en: 'Magnetics & Tactile Engineering', de: 'Magnetik & Haptik-Technik', fr: 'Magnétisme & Ingénierie Tactile', nl: 'Magnetisme & Haptische Techniek',
    es: 'Magnetismo e Ingeniería Táctil', it: 'Magnetismo e Ingegneria Tattile', pt: 'Magnetismo e Engenharia Tátil', sv: 'Magnetism & taktil teknik',
    da: 'Magnetisme & taktil teknik', no: 'Magnetisme & taktil teknikk', fi: 'Magnetismi & haptinen tekniikka', pl: 'Magnetyzm i Inżynieria Dotykowa',
    cs: 'Magnetismus a haptické inženýrství', ru: 'Магнетизм и тактильная инженерия', ja: '磁気設計・ハプティック工学', ko: '자석 설계 및 햅틱 엔지니어링',
    id: 'Rekayasa Magnetik & Taktil', ar: 'الهندسة المغناطيسية واللمسية'
  },
  'Safety & Regulatory Compliance': {
    en: 'Safety & Regulatory Compliance', de: 'Sicherheit & Normkonformität', fr: 'Sécurité & Conformité Réglementaire', nl: 'Veiligheid & Wetgeving',
    es: 'Seguridad y Cumplimiento Normativo', it: 'Sicurezza e Conformità Normativa', pt: 'Segurança e Conformidade Regulamentar', sv: 'Säkerhet & regelefterlevnad',
    da: 'Sikkerhed & lovkrav', no: 'Sikkerhet & samsvarskrav', fi: 'Turvallisuus & vaatimustenmukaisuus', pl: 'Bezpieczeństwo i Certyfikacja',
    cs: 'Bezpečnost a legislativní shoda', ru: 'Безопасность и сертификация', ja: '安全基準・国際規制コンプライアンス', ko: '안전 기준 및 규제 준수',
    id: 'Keamanan & Kepatuhan Regulasi', ar: 'السلامة والامتثال التنظيمي'
  },
  'Wholesale Sourcing SOP': {
    en: 'Wholesale Sourcing SOP', de: 'Großhandels-Beschaffungs-SOP', fr: 'SOP d’Approvisionnement en Gros', nl: 'Groothandel Inkoop-SOP',
    es: 'SOP de Abastecimiento Mayorista', it: 'SOP di Fornitura all’Ingrosso', pt: 'SOP de Fornecimento por Atacado', sv: 'Grossist-inköps-SOP',
    da: 'Engros-indkøbs-SOP', no: 'Engros-innkjøps-SOP', fi: 'Tukkuhankinnan SOP', pl: 'Procedura Zakupów Hurtowych SOP',
    cs: 'SOP velkoobchodního nákupu', ru: 'SOP оптовых закупок', ja: '卸売・OEM調達SOP', ko: '도매 소싱 표준 절차(SOP)',
    id: 'SOP Pengadaan Grosir', ar: 'إجراءات التوريد بالجملة SOP'
  },
  'Materials & Manufacturing': {
    en: 'Materials & Manufacturing', de: 'Werkstoffe & CNC-Fertigung', fr: 'Matériaux & Fabrication CNC', nl: 'Materialen & CNC-productie',
    es: 'Materiales y Fabricación CNC', it: 'Materiali e Produzione CNC', pt: 'Materiais e Fabrico CNC', sv: 'Material & CNC-tillverkning',
    da: 'Materialer & CNC-produktion', no: 'Materialer & CNC-produksjon', fi: 'Materiaalit & CNC-valmistus', pl: 'Materiały i Produkcja CNC',
    cs: 'Materiály a CNC výroba', ru: 'Материалы и ЧПУ-производство', ja: '金属素材・CNC加工技術', ko: '금속 소재 및 CNC 제조',
    id: 'Material & Manufaktur CNC', ar: 'المواد والتصنيع باستخدام CNC'
  },
  'Kinetic Bearing & Gyro Engineering': {
    en: 'Kinetic Bearing & Gyro Engineering', de: 'R188-Lager & Kreisel-Technik', fr: 'Roulements R188 & Gyroscopes CNC', nl: 'R188-lagers & Gyroscoop-techniek',
    es: 'Rodamientos R188 e Ingeniería Giroscópica', it: 'Cuscinetti R188 e Giroscopi CNC', pt: 'Rolamentos R188 e Giroscópios CNC', sv: 'R188-lager & gyroteknik',
    da: 'R188-lejer & gyroteknik', no: 'R188-lagre & gyroteknikk', fi: 'R188-laakerit & gyrotekniikka', pl: 'Łożyska R188 i Żyroskopy CNC',
    cs: 'Ložiska R188 a gyroskopy CNC', ru: 'Подшипники R188 и гироскопы ЧПУ', ja: 'R188ベアリング・精密ジャイロ工学', ko: 'R188 베어링 및 정밀 자이로 엔지니어링',
    id: 'Bearing R188 & Rekayasa Giroskop', ar: 'محامل R188 وهندسة الجيروسكوب'
  },
  'Mechanical & Ratchet Engineering': {
    en: 'Mechanical & Ratchet Engineering', de: 'Mechanik- & Ratschen-EDC-Technik', fr: 'Mécanique à Cliquet & Verrouillage', nl: 'Mechanische Ratel & Grendel EDC',
    es: 'Ingeniería Mecánica de Trinquete y Cerrojo', it: 'Meccanica a Cricchetto e Otturatore EDC', pt: 'Engenharia Mecânica de Catraca e Ferrolho', sv: 'Mekanisk spärr- & bultmekanik',
    da: 'Mekanisk skralde- & boltmekanik', no: 'Mekanisk skralle- & boltmekanikk', fi: 'Mekaaninen räikkä- & pulttitekniikka', pl: 'Mechanika Zapadkowa i Ryglowa EDC',
    cs: 'Mechanické ráčny a závěrové EDC', ru: 'Механические храповики и затворы EDC', ja: '機械式ラチェット・ボルトアクション工学', ko: '기계식 라쳇 및 볼트액션 엔지니어링',
    id: 'Rekayasa Mekanis Ratchet & Bolt-Action', ar: 'هندسة السقاطة الميكانيكية والمزلاج'
  },
  'Pocket Ergonomics & Form Factors': {
    en: 'Pocket Ergonomics & Form Factors', de: 'Taschen-Ergonomie & Bauformen', fr: 'Ergonomie de Poche & Formats EDC', nl: 'Zak-ergonomie & EDC-vormfactoren',
    es: 'Ergonomía de Bolsillo y Formatos EDC', it: 'Ergonomia Tascabile e Formati EDC', pt: 'Ergonomia de Bolso e Formatos EDC', sv: 'Fickergonomi & EDC-formfaktorer',
    da: 'Lommeergonomi & EDC-formfaktorer', no: 'Lommeergonomi & EDC-formfaktorer', fi: 'Taskuergonomia & EDC-muodot', pl: 'Ergonomia Kieszonkowa i Formy EDC',
    cs: 'Kapesní ergonomie a tvary EDC', ru: 'Карманная эргономика и форм-факторы EDC', ja: 'ポケット人間工学・コイン＆瓢箪＆リング設計', ko: '포켓 인체공학 및 폼팩터 설계',
    id: 'Ergonomi Saku & Bentuk EDC', ar: 'بيئة العمل الجيبية وأشكال EDC'
  },
  'Packaging & Retail Presentation': {
    en: 'Packaging & Retail Presentation', de: 'EVA-Etuis & Einzelhandelsverpackung', fr: 'Étuis EVA & Packaging Retail', nl: 'EVA-cases & Retailverpakking',
    es: 'Estuches EVA y Empaque Minorista', it: 'Custodie EVA e Packaging Retail', pt: 'Estojos EVA e Embalagem de Retalho', sv: 'EVA-fodral & butiksförpackning',
    da: 'EVA-etuier & detailemballage', no: 'EVA-etuier & detaljemballasje', fi: 'EVA-kotelot & vähittäismyyntipakkaus', pl: 'Etui EVA i Opakowania Detaliczne',
    cs: 'Pouzdra EVA a maloobchodní balení', ru: 'Кейсы EVA и розничная упаковка', ja: 'カスタムEVAケース・缶ボックス包装設計', ko: '커스텀 EVA 케이스 및 틴박스 패키징',
    id: 'Kotak EVA & Kemasan Ritel', ar: 'حافظات EVA وتغليف التجزئة'
  }
};

const INSIGHT_META_ALL: Record<string, Record<SupportedLanguage, { title: string; summary: string }>> = {
  'acoustic-tuning-fork-fidget-slider-engineering-trend': {
    en: {
      title: 'Acoustic Tuning Fork Fidget Sliders: Resonance Chamber Engineering & 2026–2027 Wholesale Guide',
      summary: 'How cantilevered internal tuning-fork prongs and hollow acoustic cavities create the viral 2,800–4,200 Hz metallic "Ding!" chime—comparing all 7 ready molds (FS-150, FS-129, FS-148).'
    },
    de: {
      title: 'Akustische Stimmgabel-Fidget-Slider: Resonanzkammer-Technik & Großhandels-Leitfaden 2026–2027',
      summary: 'Wie freitragende Stimmgabel-Zinken und Hohlresonanzkammern den 2.800–4.200 Hz „Ding!“-Klang erzeugen — mit Vergleich unserer 7 Akustik-Serienformen (FS-150, FS-129, FS-148).'
    },
    fr: {
      title: 'Sliders Fidget Diapason Acoustiques : Ingénierie de Chambre de Résonance & Guide Grossiste 2026–2027',
      summary: 'Comment les fourches acoustiques usinées CNC génèrent la note métallique « Ding ! » à 2 800–4 200 Hz — comparatif de nos 7 moules acoustiques (FS-150, FS-129, FS-148).'
    },
    nl: {
      title: 'Akoestische Stemvork Fidget Sliders: Resonantiekamer-techniek & Groothandelsgids 2026–2027',
      summary: 'Hoe vrijdragende stemvorktanden en holle resonantiekamers de 2.800–4.200 Hz metalen "Ding!"-klank creëren — vergelijking van alle 7 akoestische mallen (FS-150, FS-129, FS-148).'
    },
    es: {
      title: 'Sliders Fidget de Diapasón Acústico: Ingeniería de Cámara de Resonancia y Guía Mayorista 2026–2027',
      summary: 'Cómo las horquillas en voladizo y cámaras de resonancia producen el timbre metálico "Ding!" de 2,800–4,200 Hz — comparativa de nuestros 7 moldes acústicos (FS-150, FS-129, FS-148).'
    },
    it: {
      title: 'Slider Fidget a Diapason Acustico: Ingegneria della Camera di Risonanza e Guida Ingrosso 2026–2027',
      summary: 'Come i rebbi a sbalzo del diapason e le cavità acustiche generano il suono metallico a 2.800–4.200 Hz — confronto tra i 7 stampi acustici (FS-150, FS-129, FS-148).'
    },
    pt: {
      title: 'Sliders Fidget de Diapasão Acústico: Engenharia de Câmara de Ressonância e Guia Atacadista 2026–2027',
      summary: 'Como as hastes de diapasão internas e cavidades acústicas produzem o toque metálico de 2.800–4.200 Hz — comparando os 7 moldes acústicos (FS-150, FS-129, FS-148).'
    },
    sv: {
      title: 'Akustiska Stämgaffel Fidget Sliders: Resonanskammar-teknik & Grossistguide 2026–2027',
      summary: 'Hur frihängande stämgaffelskänklar och ihåliga resonanskammare skapar den klara 2 800–4 200 Hz metallklangen — jämförelse av alla 7 akustiska formar (FS-150, FS-129, FS-148).'
    },
    da: {
      title: 'Akustiske Stemmegaffel Fidget Sliders: Resonanskammer-teknik & Engrosguide 2026–2027',
      summary: 'Hvordan fritbærende stemmegaffelgrene og hule resonanskamre skaber den klare 2.800–4.200 Hz metalklang — sammenligning af alle 7 akustiske forme (FS-150, FS-129, FS-148).'
    },
    no: {
      title: 'Akustiske Stemmegaffel Fidget Sliders: Resonanskammer-teknikk & Engrosguide 2026–2027',
      summary: 'Hvordan frittbærende stemmegaffelarmer og hule resonanskamre skaper den klare 2 800–4 200 Hz metallklangen — sammenligning av alle 7 akustiske former (FS-150, FS-129, FS-148).'
    },
    fi: {
      title: 'Akustiset Äänirauta Fidget Sliderit: Kaikukammiotekniikka & Tukkuopas 2026–2027',
      summary: 'Miten sisäiset äänirautahaarat ja ontot kaikukammiot luovat kirkkaan 2 800–4 200 Hz metallisen soinnin — vertailussa kaikki 7 akustista muottia (FS-150, FS-129, FS-148).'
    },
    pl: {
      title: 'Akustyczne Slidery Fidget z Kamertonem: Inżynieria Komory Rezonansowej i Przewodnik Hurtowy 2026–2027',
      summary: 'Jak wspornikowe widełki kamertonowe i komory rezonansowe generują metaliczny dźwięk 2 800–4 200 Hz — porównanie wszystkich 7 form akustycznych (FS-150, FS-129, FS-148).'
    },
    cs: {
      title: 'Akustické Ladičkové Fidget Slidery: Inženýrství Rezonanční Komory a Velkoobchodní Průvodce 2026–2027',
      summary: 'Jak vnitřní ramena ladičky a rezonanční dutiny vytvářejí čistý kovový tón 2 800–4 200 Hz — porovnání všech 7 akustických forem (FS-150, FS-129, FS-148).'
    },
    ru: {
      title: 'Акустические Камертонные Фиджет-Слайдеры: Инженерия Резонансной Камеры и Оптовый Гид 2026–2027',
      summary: 'Как консольные зубцы камертона и резонансные полости создают чистый металлический звон 2 800–4 200 Гц — сравнение всех 7 акустических моделей (FS-150, FS-129, FS-148).'
    },
    ja: {
      title: '音叉（チューニングフォーク）共鳴フィジェットスライダー：音響設計と卸売ガイド 2026–2027',
      summary: '片持ち音叉プロングと共鳴チャンバーが 2,800〜4,200 Hz の澄んだ金属音「チーン！」を生み出す仕組みと、音叉シリーズ全7モデル（FS-150・FS-129・FS-148等）の徹底比較。'
    },
    ko: {
      title: '어쿠스틱 튜닝포크(음차) 피젯 슬라이더: 공명 챔버 설계 및 2026–2027 도매 가이드',
      summary: '캔틸레버 음차 프롱과 중공 공명 챔버가 2,800~4,200 Hz 금속 공명음을 내는 원리와 당사 7종 튜닝포크 모델(FS-150, FS-129, FS-148 등) 비교 분석.'
    },
    id: {
      title: 'Slider Fidget Garpu Tala Akustik: Rekayasa Ruang Resonansi & Panduan Grosir 2026–2027',
      summary: 'Bagaimana garpu tala internal dan rongga akustik menciptakan denting logam 2.800–4.200 Hz — membandingkan 7 cetakan akustik (FS-150, FS-129, FS-148).'
    },
    ar: {
      title: 'سلايدرات الشوكة الرنانة الصوتية: هندسة حجرة الرنين ودليل الجملة 2026–2027',
      summary: 'كيف تولد أذرع الشوكة الرنانة الداخلية وتجاويف الرنين نغمة معدنية صافية بتردد 2,800–4,200 هرتز — مقارنة شاملة لجميع الموديلات الـ 7 (FS-150، FS-129، FS-148).'
    }
  },
  'fiber-laser-engraving-vs-uv-printing-metal-fidget-logos': {
    en: {
      title: '50W Fiber Laser Engraving vs. Silk-Screen vs. Deep Laser Color Fill on Metal Fidgets',
      summary: 'Engineering comparison of monochrome Fiber Laser Engraving (+$0.15–$0.30/pc), multi-color Silk-Screen Printing ($35/color + $0.10/color/pc), and Deep Laser Color Fill (+$0.35–$0.60/pc).'
    },
    de: {
      title: '50W-Faserlasergravur vs. Siebdruck vs. Tiefe Lasergravur mit Farbauslegung auf Metall-Fidgets',
      summary: 'Technischer Vergleich von 50W-MOPA-Faserlasergravur (+$0,15–$0,30/Stk.), mehrfarbigem Siebdruck ($35/Farbe + $0,10/Farbe/Stk.) und tiefer Lasergravur mit Emaille-Farbfüllung (+$0,35–$0,60/Stk.).'
    },
    fr: {
      title: 'Gravure Laser Fibre 50W vs Sérigraphie Couleur vs Gravure Laser Profonde + Émail sur Fidgets Métal',
      summary: 'Comparatif technique entre gravure laser fibre 50W (+0,15–0,30 $/pc), sérigraphie couleur (35 $/couleur + 0,10 $/couleur/pc) et gravure laser profonde avec remplissage couleur (+0,35–0,60 $/pc).'
    },
    nl: {
      title: '50W Fiberlasergravure vs. Zeefdruk vs. Diepe Lasergravure met Kleurvulling op Metalen Fidgets',
      summary: 'Technische vergelijking van monochrome fiberlasergravure (+$0,15–$0,30/st.), meerkleuren zeefdruk ($35/kleur + $0,10/kleur/st.) en diepe lasergravure met emaille kleurvulling (+$0,35–$0,60/st.).'
    },
    es: {
      title: 'Grabado Láser de Fibra 50W vs. Serigrafía en Color vs. Láser Profundo con Relleno de Color',
      summary: 'Comparativa técnica entre grabado láser de fibra 50W (+$0.15–$0.30/ud.), serigrafía multicolor ($35/color + $0.10/color/ud.) y grabado láser profundo con esmalte (+$0.35–$0.60/ud.).'
    },
    it: {
      title: 'Incisione Laser Fibra 50W vs. Serigrafia a Colori vs. Incisione Laser Profonda con Smalto',
      summary: 'Confronto tecnico tra incisione laser fibra 50W (+$0,15–$0,30/pz.), serigrafia multicolore ($35/colore + $0,10/colore/pz.) e incisione profonda con riempimento colore (+$0,35–$0,60/pz.).'
    },
    pt: {
      title: 'Gravação a Laser de Fibra 50W vs. Serigrafia a Cores vs. Laser Profundo com Preenchimento de Cor',
      summary: 'Comparação técnica entre gravação a laser de fibra 50W (+$0,15–$0,30/un.), serigrafia multicor ($35/cor + $0,10/cor/un.) e laser profundo com esmalte (+$0,35–$0,60/un.).'
    },
    sv: {
      title: '50W Fiberlasergravyr vs. Screentryck vs. Djup Lasergravyr med Färgfyllning på Metallfidgets',
      summary: 'Teknisk jämförelse av monokrom fiberlasergravyr (+$0,15–$0,30/st), flerfärgs screentryck ($35/färg + $0,10/färg/st) och djup lasergravyr med emaljfyllning (+$0,35–$0,60/st).'
    },
    da: {
      title: '50W Fiberlasergravering vs. Serigrafi vs. Dyb Lasergravering med Farvefyld på Metalfidgets',
      summary: 'Teknisk sammenligning af monokrom fiberlasergravering (+$0,15–$0,30/stk.), flerfarvet serigrafi ($35/farve + $0,10/farve/stk.) og dyb lasergravering med emaljefyld (+$0,35–$0,60/stk.).'
    },
    no: {
      title: '50W Fiberlasergravering vs. Silketrykk vs. Dyp Lasergravering med Fargefyll på Metallfidgets',
      summary: 'Teknisk sammenligning av monokrom fiberlasergravering (+$0,15–$0,30/stk.), flerfarget silketrykk ($35/farge + $0,10/farge/stk.) og dyp lasergravering med emaljefyll (+$0,35–$0,60/stk.).'
    },
    fi: {
      title: '50W Kuitulaserkaiverrus vs. Silkkipaino vs. Syvä Laserkaiverrus Väritäytöllä Metallifidgeteissä',
      summary: 'Tekninen vertailu: yksivärinen kuitulaserkaiverrus (+$0,15–$0,30/kpl), monivärinen silkkipaino ($35/väri + $0,10/väri/kpl) ja syvä laserkaiverrus emalitäytöllä (+$0,35–$0,60/kpl).'
    },
    pl: {
      title: 'Grawerowanie Laserem Światłowodowym 50W vs. Sitodruk vs. Głęboki Grawer z Wypełnieniem Kolorem',
      summary: 'Porównanie techniczne: monochromatyczny grawer laserowy (+$0,15–$0,30/szt.), wielokolorowy sitodruk ($35/kolor + $0,10/kolor/szt.) oraz głęboki grawer z emalią (+$0,35–$0,60/szt.).'
    },
    cs: {
      title: '50W Vláknové Laserové Gravírování vs. Sítotisk vs. Hluboký Laser s Barevnou Výplní',
      summary: 'Technické srovnání jednobarevného laserového gravírování (+$0,15–$0,30/ks), vícebarevného sítotisku ($35/barva + $0,10/barva/ks) a hlubokého laseru s barevným smaltem (+$0,35–$0,60/ks).'
    },
    ru: {
      title: 'Волоконная Лазерная Гравировка 50 Вт vs. Шелкография vs. Глубокая Гравировка с Эмалью',
      summary: 'Инженерное сравнение монохромной лазерной гравировки (+$0.15–$0.30/шт.), многоцветной шелкографии ($35/цвет + $0.10/цвет/шт.) и глубокой гравировки с заливкой цветом (+$0.35–$0.60/шт.).'
    },
    ja: {
      title: '金属フィジェットのロゴ名入れ比較：50Wファイバーレーザー刻印 vs シルクスクリーン印刷 vs 深彫りレーザー色入れ',
      summary: '単色レーザー刻印（+$0.15〜$0.30/個）、シルクスクリーン多色印刷（版代$35/色＋単価+$0.10/色）、深彫りレーザー＋色入れ加工（+$0.35〜$0.60/個、MOQ 200〜300個）の耐久性とコストを徹底比較。'
    },
    ko: {
      title: '금속 피젯 로고 각인 비교: 50W 파이버 레이저 vs 실크스크린 컬러 인쇄 vs 심층 레이저 컬러 필링',
      summary: '단색 파이버 레이저 각인(+$0.15~$0.30/개), 다색 실크스크린 인쇄(판비 $35/색상 + 단가 +$0.10/색상), 심층 레이저 음각 + 컬러 필링(+$0.35~$0.60/개, MOQ 200~300개)의 내구성과 비용 분석.'
    },
    id: {
      title: 'Grafir Laser Serat 50W vs. Sablon Warna vs. Grafir Laser Dalam + Isi Warna pada Fidget Logam',
      summary: 'Perbandingan teknis grafir laser serat monokrom (+$0,15–$0,30/pc), sablon multi-warna ($35/warna + $0,10/warna/pc), dan grafir laser dalam dengan isi enamel warna (+$0,35–$0,60/pc).'
    },
    ar: {
      title: 'مقارنة طرق طباعة الشعار: حفر الليزر 50 واط مقابل الطباعة الحريرية مقابل الحفر العميق الملون',
      summary: 'مقارنة هندسية بين حفر الليزر أحادي اللون (+0.15–0.30 دولار/قطعة)، والطباعة الحريرية متعددة الألوان (35 دولارًا/لون + 0.10 دولار/لون/قطعة)، والحفر العميق بالليزر مع تعبئة اللون (+0.35–0.60 دولار/قطعة).'
    }
  },
  'n35-vs-n52-neodymium-magnet-haptic-feel-guide': {
    en: {
      title: 'N35 vs. N45 vs. N52 Neodymium Magnets in Metal Fidget Sliders: Pull Force & Haptic Calibration',
      summary: 'Why mechanical track sliders (FS-002, FS-048) use N35–N40 magnets while PTFE free-floating unlimited sliders (FS-125, FS-075) require high-flux N50–N52 magnets.'
    },
    de: {
      title: 'N35 vs. N45 vs. N52 Neodym-Magnete in Metall-Fidget-Slidern: Zugkraft & Haptik-Kalibrierung',
      summary: 'Warum mechanische Schienen-Slider (FS-002, FS-048) N35–N40 Magnete nutzen, während freie PTFE-Slider (FS-125, FS-075) hochstarke N50–N52 Magnete erfordern.'
    },
    fr: {
      title: 'Aimants Néodyme N35 vs N45 vs N52 dans les Sliders Fidget Métal : Force & Calibrage Haptique',
      summary: 'Pourquoi les sliders sur rail mécanique (FS-002, FS-048) utilisent des aimants N35–N40 tandis que les sliders libres PTFE (FS-125, FS-075) exigent des aimants N50–N52.'
    },
    nl: {
      title: 'N35 vs. N45 vs. N52 Neodymium Magneten in Metalen Fidget Sliders: Trekkracht & Haptiek',
      summary: 'Waarom mechanische railsliders (FS-002, FS-048) N35–N40 magneten gebruiken terwijl vrije PTFE-sliders (FS-125, FS-075) krachtige N50–N52 magneten vereisen.'
    },
    es: {
      title: 'Imanes de Neodimio N35 vs. N45 vs. N52 en Sliders Fidget Metálicos: Fuerza Táctil y Acústica',
      summary: 'Por qué los sliders de riel mecánico (FS-002, FS-048) usan imanes N35–N40 mientras que los sliders libres de PTFE (FS-125, FS-075) requieren imanes N50–N52.'
    },
    it: {
      title: 'Magneti al Neodimio N35 vs. N45 vs. N52 negli Slider Fidget in Metallo: Forza e Calibrazione Aptica',
      summary: 'Perché gli slider su binario meccanico (FS-002, FS-048) usano magneti N35–N40 mentre gli slider liberi in PTFE (FS-125, FS-075) richiedono magneti ad alto flusso N50–N52.'
    },
    pt: {
      title: 'Ímanes de Neodímio N35 vs. N45 vs. N52 em Sliders Fidget Metálicos: Força de Tração e Calibração Tátil',
      summary: 'Por que os sliders de trilho mecânico (FS-002, FS-048) usam ímanes N35–N40 enquanto os sliders livres em PTFE (FS-125, FS-075) exigem ímanes N50–N52.'
    },
    sv: {
      title: 'N35 vs. N45 vs. N52 Neodymmagneter i Metall Fidget Sliders: Dragkraft & Taktil Kalibrering',
      summary: 'Varför mekaniska spårsliders (FS-002, FS-048) använder N35–N40 magneter medan fria PTFE-sliders (FS-125, FS-075) kräver starka N50–N52 magneter.'
    },
    da: {
      title: 'N35 vs. N45 vs. N52 Neodymmagneter i Metal Fidget Sliders: Trækkraft & Taktil Kalibrering',
      summary: 'Hvorfor mekaniske skinnesliders (FS-002, FS-048) bruger N35–N40 magneter, mens frie PTFE-sliders (FS-125, FS-075) kræver kraftige N50–N52 magneter.'
    },
    no: {
      title: 'N35 vs. N45 vs. N52 Neodymmagneter i Metall Fidget Sliders: Trekkraft & Taktil Kalibrering',
      summary: 'Hvorfor mekaniske skinnesliders (FS-002, FS-048) bruker N35–N40 magneter, mens frie PTFE-sliders (FS-125, FS-075) krever kraftige N50–N52 magneter.'
    },
    fi: {
      title: 'N35 vs. N45 vs. N52 Neodyymimagneetit Metallisissa Fidget Slidereissa: Vetovoima & Tuntuma',
      summary: 'Miksi mekaaniset kiskosliderit (FS-002, FS-048) käyttävät N35–N40 magneetteja, kun taas vapaat PTFE-sliderit (FS-125, FS-075) vaativat voimakkaat N50–N52 magneetit.'
    },
    pl: {
      title: 'Magnesy Neodymowe N35 vs. N45 vs. N52 w Metalowych Sliderach Fidget: Siła i Kalibracja Dotykowa',
      summary: 'Dlaczego mechaniczne slidery szynowe (FS-002, FS-048) wykorzystują magnesy N35–N40, a swobodne slidery PTFE (FS-125, FS-075) wymagają silnych magnesów N50–N52.'
    },
    cs: {
      title: 'Neodymové Magnety N35 vs. N45 vs. N52 v Kovových Fidget Sliderech: Tažná Síla a Haptika',
      summary: 'Proč mechanické kolejnicové slidery (FS-002, FS-048) využívají magnety N35–N40, zatímco volné PTFE slidery (FS-125, FS-075) vyžadují silné magnety N50–N52.'
    },
    ru: {
      title: 'Неодимовые Магниты N35 vs. N45 vs. N52 в Металлических Слайдерах: Сила Сцепления и Тактильный Отклик',
      summary: 'Почему рельсовые механические слайдеры (FS-002, FS-048) используют магниты N35–N40, а свободные PTFE-слайдеры (FS-125, FS-075) требуют мощных магнитов N50–N52.'
    },
    ja: {
      title: '金属フィジェットスライダーにおける N35 vs N45 vs N52 ネオジム磁石：吸着力とクリック感の設計指針',
      summary: '機械式レールスライダー（FS-002、FS-048）に N35〜N40 磁石が適し、PTFEフリースライド型（FS-125、FS-075）に高磁束 N50〜N52 磁石が不可欠な理由を解説。'
    },
    ko: {
      title: '금속 피젯 슬라이더의 N35 vs N45 vs N52 네오디뮴 자석 비교: 자력 및 햅틱 손맛 설계 가이드',
      summary: '기계식 트랙 슬라이더(FS-002, FS-048)에 N35~N40 자석이 사용되고 무한 프리플로팅 PTFE 슬라이더(FS-125, FS-075)에 고자력 N50~N52 자석이 필수적인 공학적 이유.'
    },
    id: {
      title: 'Magnet Neodymium N35 vs. N45 vs. N52 pada Slider Fidget Logam: Gaya Tarik & Kalibrasi Haptik',
      summary: 'Mengapa slider rel mekanis (FS-002, FS-048) menggunakan magnet N35–N40 sedangkan slider bebas PTFE (FS-125, FS-075) membutuhkan magnet N50–N52 berfluks tinggi.'
    },
    ar: {
      title: 'مقارنة مغناطيس النيوديميوم N35 و N45 و N52 في السلايدرات المعدنية: قوة الجذب والمعايرة اللمسية',
      summary: 'لماذا تستخدم السلايدرات ذات المسار الميكانيكي (FS-002، FS-048) مغناطيس N35–N40 بينما تتطلب السلايدرات الحرة المزودة بـ PTFE (FS-125، FS-075) مغناطيس N50–N52 عالي التدفق.'
    }
  },
  'us-cpsc-16-cfr-1262-magnet-fidget-safety-compliance': {
    en: {
      title: 'US CPSC 16 CFR 1262 Magnet Safety Standard & EU RoHS/REACH Compliance for Metal Fidgets',
      summary: 'How our 3-layer captive magnet retention architecture (blind counterbores, >22 MPa structural epoxy, and thread-locked fasteners) prevents magnet liberation.'
    },
    de: {
      title: 'US CPSC 16 CFR 1262 Magnet-Sicherheitsnorm & EU RoHS/REACH Konformität für Metall-Fidgets',
      summary: 'Wie unsere 3-stufige Magnetverriegelung (Sackloch-Senkung, >22 MPa Struktur-Epoxid und Schraubensicherung) das Lösen von Magneten verhindert.'
    },
    fr: {
      title: 'Norme de Sécurité Magnétique US CPSC 16 CFR 1262 & Conformité EU RoHS/REACH pour Fidgets Métal',
      summary: 'Comment notre architecture de rétention magnétique à 3 niveaux (alésage borgne, époxy >22 MPa et vis freinées) garantit zéro détachement d’aimant.'
    },
    nl: {
      title: 'US CPSC 16 CFR 1262 Magneetveiligheidsnorm & EU RoHS/REACH Naleving voor Metalen Fidgets',
      summary: 'Hoe onze 3-laags magneetvergrendeling (blinde kamers, >22 MPa structurele epoxy en geborgde schroeven) het losraken van magneten voorkomt.'
    },
    es: {
      title: 'Norma de Seguridad de Imanes US CPSC 16 CFR 1262 y Cumplimiento RoHS/REACH para Fidgets',
      summary: 'Cómo nuestro protocolo de retención magnética de 3 capas (cavidad ciega, epoxi >22 MPa y tornillos bloqueados) garantiza cero desprendimiento de imanes.'
    },
    it: {
      title: 'Standard di Sicurezza Magneti US CPSC 16 CFR 1262 e Conformità UE RoHS/REACH per Fidget in Metallo',
      summary: 'Come la nostra architettura di ritenzione magnetica a 3 livelli (alloggiamenti ciechi, epossidica >22 MPa e viti frenafiletti) impedisce il distacco dei magneti.'
    },
    pt: {
      title: 'Norma de Segurança Magnética US CPSC 16 CFR 1262 e Conformidade UE RoHS/REACH para Fidgets',
      summary: 'Como a nossa arquitetura de retenção magnética de 3 camadas (alojamentos cegos, epóxi >22 MPa e parafusos travados) impede o desprendimento de ímanes.'
    },
    sv: {
      title: 'US CPSC 16 CFR 1262 Magnetsäkerhetsstandard & EU RoHS/REACH-efterlevnad för Metallfidgets',
      summary: 'Hur vår 3-lagers magnetlåsning (blindhål, >22 MPa strukturepoxi och gänglåsta skruvar) förhindrar att magneter lossnar.'
    },
    da: {
      title: 'US CPSC 16 CFR 1262 Magnetsikkerhedsstandard & EU RoHS/REACH-overholdelse for Metalfidgets',
      summary: 'Hvordan vores 3-lags magnetfastholdelse (blindhuller, >22 MPa strukturel epoxy og gevindlåste skruer) forhindrer, at magneter løsner sig.'
    },
    no: {
      title: 'US CPSC 16 CFR 1262 Magnetsikkerhetsstandard & EU RoHS/REACH-samsvar for Metallfidgets',
      summary: 'Hvordan vår 3-lags magnetsikring (blindhull, >22 MPa strukturell epoksy og gjengelåste skruer) forhindrer at magneter løsner.'
    },
    fi: {
      title: 'US CPSC 16 CFR 1262 Magneettiturvallisuusstandardi & EU RoHS/REACH -vaatimustenmukaisuus',
      summary: 'Miten 3-kerroksinen magneettien lukitusrakenne (umpipesät, >22 MPa rakenne-epoksi ja kierrelukitetut ruuvit) estää magneettien irtoamisen.'
    },
    pl: {
      title: 'Norma Bezpieczeństwa Magnesów US CPSC 16 CFR 1262 oraz Zgodność z UE RoHS/REACH',
      summary: 'Jak nasza 3-warstwowa blokada magnesów (gniazda nieprzelotowe, klej epoksydowy >22 MPa i zabezpieczone śruby) zapobiega wypadaniu magnesów.'
    },
    cs: {
      title: 'Bezpečnostní Norma Magnetů US CPSC 16 CFR 1262 a Shoda s EU RoHS/REACH pro Kovové Fidgety',
      summary: 'Jak naše 3vrstvá ochrana magnetů (slepá lůžka, konstrukční epoxid >22 MPa a jištěné šrouby) zabraňuje uvolnění magnetů.'
    },
    ru: {
      title: 'Стандарт Безопасности Магнитов US CPSC 16 CFR 1262 и Соответствие EU RoHS/REACH',
      summary: 'Как наша 3-уровневая система удержания магнитов (глухие посадочные гнезда, эпоксидный клей >22 МПа и фиксатор резьбы) исключает выпадение магнитов.'
    },
    ja: {
      title: '米国 CPSC 16 CFR 1262 磁石安全基準および EU RoHS/REACH コンプライアンス完全ガイド',
      summary: '止まり穴カウンターボア、工業用エポキシ接着剤（>22 MPa）、ネジロック剤による3重の磁石脱落防止構造と、Amazon FBA出品向けの安全対策を解説。'
    },
    ko: {
      title: '미국 CPSC 16 CFR 1262 자석 안전 기준 및 EU RoHS/REACH 규정 준수 완벽 가이드',
      summary: '블라인드 카운터보어, 산업용 구조 에폭시(>22 MPa), 나사 풀림 방지제를 결합한 3중 자석 이탈 방지 설계와 아마존 FBA 셀러를 위한 안전 규정 가이드.'
    },
    id: {
      title: 'Standar Keamanan Magnet US CPSC 16 CFR 1262 & Kepatuhan RoHS/REACH Uni Eropa',
      summary: 'Bagaimana arsitektur penguncian magnet 3-lapis kami (lubang buta, epoksi struktural >22 MPa, dan sekrup pengunci ulir) mencegah terlepasnya magnet.'
    },
    ar: {
      title: 'معيار سلامة المغناطيس الأمريكي CPSC 16 CFR 1262 والامتثال لمعايير RoHS/REACH الأوروبية',
      summary: 'كيف تمنع هندسة تثبيت المغناطيس ثلاثية الطبقات (التجاويف المغلقة، إيبوكسي >22 ميجاباسكال، والبراغي المؤمنة) انفصال المغناطيس تحت أي ظرف.'
    }
  },
  'zero-tooling-ready-mold-private-label-fidget-sop': {
    en: {
      title: 'Launch Private-Label Metal Fidgets in 10–15 Days with $0 Tooling Cost (Ready-Mold SOP)',
      summary: 'How e-commerce brands and corporate merchandisers save $3,000+ in mold fees by adding custom logos (100 pcs MOQ) to our 140 ready-to-produce molds.'
    },
    de: {
      title: 'Eigenmarken-Start in 10–15 Tagen ohne Werkzeugkosten ($0 Tooling SOP auf 140 Serienformen)',
      summary: 'Wie E-Commerce-Marken und Werbemittelagenturen $3.000+ an Formkosten sparen, indem sie unsere 140 fertigen Serienformen mit eigenem Logo (MOQ 100 Stk.) nutzen.'
    },
    fr: {
      title: 'Lancer sa Marque Privée de Fidgets Métal en 10–15 Jours avec 0 $ de Frais de Moule (SOP)',
      summary: 'Comment les marques e-commerce et agences économisent plus de 3 000 $ d’outillage en personnalisant nos 140 moules prêts à produire dès 100 pcs.'
    },
    nl: {
      title: 'Lanceer Private-Label Metalen Fidgets in 10–15 Dagen met $0 Matrijskosten (Ready-Mold SOP)',
      summary: 'Hoe e-commercemerken meer dan $3.000 aan matrijskosten besparen door onze 140 klaarstaande mallen te voorzien van een eigen logo vanaf 100 stuks.'
    },
    es: {
      title: 'Cómo Lanzar Fidgets Metálicos de Marca Privada en 10–15 Días con $0 Costo de Molde (SOP)',
      summary: 'Cómo las marcas de comercio electrónico ahorran más de $3,000 en matricería personalizando nuestros 140 moldes listos desde 100 unidades.'
    },
    it: {
      title: 'Lancia Fidget in Metallo Private-Label in 10–15 Giorni con $0 Costi di Stampo (SOP)',
      summary: 'Come i brand e-commerce risparmiano oltre $3.000 di attrezzaggio personalizzando i nostri 140 stampi pronti a partire da 100 pezzi.'
    },
    pt: {
      title: 'Lance Fidgets Metálicos de Marca Própria em 10–15 Dias com $0 Custo de Molde (SOP)',
      summary: 'Como marcas de e-commerce poupam mais de $3.000 em moldes personalizando os nossos 140 moldes prontos a partir de 100 unidades.'
    },
    sv: {
      title: 'Lansera Egna Metallfidgets på 10–15 Dagar med 0 $ i Verktygskostnad (Ready-Mold SOP)',
      summary: 'Hur e-handelsvarumärken sparar över 3 000 $ i formkostnader genom att sätta egen logotyp (MOQ 100 st) på våra 140 färdiga produktionsformar.'
    },
    da: {
      title: 'Lancér Private-Label Metalfidgets på 10–15 Dage med 0 $ i Værktøjsomkostninger (SOP)',
      summary: 'Hvordan e-handelsmærker sparer over 3.000 $ i formomkostninger ved at tilføje eget logo (MOQ 100 stk.) på vores 140 færdige forme.'
    },
    no: {
      title: 'Lanser Egne Metallfidgets på 10–15 Dager med 0 $ i Verktøykostnader (Ready-Mold SOP)',
      summary: 'Hvordan nettbutikker og merkevarer sparer over 3 000 $ i formkostnader ved å sette egen logo (MOQ 100 stk.) på våre 140 ferdige former.'
    },
    fi: {
      title: 'Lanseeraa Oman Brändin Metallifidgetit 10–15 Päivässä 0 $ Muottikuluilla (Ready-Mold SOP)',
      summary: 'Miten verkkokauppabrändit säästävät yli 3 000 $ muottikuluissa lisäämällä oman logon (MOQ 100 kpl) 140 valmiiseen tuotantomuottiimme.'
    },
    pl: {
      title: 'Wprowadź Własną Markę Metalowych Fidgetów w 10–15 Dni przy 0 $ Kosztów Formy (SOP)',
      summary: 'Jak marki e-commerce oszczędzają ponad 3 000 $ na matrycach, dodając własne logo (MOQ 100 szt.) na naszych 140 gotowych formach.'
    },
    cs: {
      title: 'Spusťte Vlastní Značku Kovových Fidgetů za 10–15 Dní s 0 $ Náklady na Formu (SOP)',
      summary: 'Jak e-commerce značky ušetří přes 3 000 $ za výrobu forem přidáním vlastního loga (MOQ 100 ks) na našich 140 hotových forem.'
    },
    ru: {
      title: 'Запуск Собственного Бренда Металлических Фиджетов за 10–15 Дней без Затрат на Пресс-Формы ($0 SOP)',
      summary: 'Как бренды электронной коммерции экономят более $3 000 на оснастке, нанося свой логотип (от 100 шт.) на наши 140 готовых пресс-форм.'
    },
    ja: {
      title: '金型代0ドル（$0 Tooling SOP）で自社ブランドの金属フィジェットを10〜15日で立ち上げる方法',
      summary: '新規金型費（$3,000以上）をかけずに、既存の140金型＋カスタムロゴ名入れ（最小ロット100個〜・サンプル10〜15日）で高利益なPB商品を展開する実践手順。'
    },
    ko: {
      title: '금형비 0달러($0 툴링 SOP)로 10~15일 만에 자체 브랜드 금속 피젯을 런칭하는 방법',
      summary: '$3,000 이상의 신규 금형 투자 없이 140종 기성 금형과 맞춤 로고 각인(MOQ 100개, 샘플 10~15일)을 활용해 고마진 PB 상품을 출시하는 실전 절차.'
    },
    id: {
      title: 'Luncurkan Fidget Logam Merek Sendiri dalam 10–15 Hari dengan Biaya Cetakan $0 (SOP)',
      summary: 'Bagaimana merek e-commerce menghemat lebih dari $3.000 biaya cetakan dengan menambahkan logo khusus (MOQ 100 pcs) pada 140 cetakan siap pakai kami.'
    },
    ar: {
      title: 'أطلق علامتك التجارية الخاصة من الفيدجت المعدني خلال 10–15 يومًا بتكلفة قالب 0 دولار (SOP)',
      summary: 'كيف توفر العلامات التجارية أكثر من 3,000 دولار من رسوم القوالب عبر إضافة شعارها المخصص (الحد الأدنى 100 قطعة) على قوالبنا الـ 140 الجاهزة للإنتاج.'
    }
  },
  'zinc-alloy-die-casting-vs-cnc-stainless-steel-edc-cost': {
    en: {
      title: 'Die-Cast Zinc Alloy (Zamak #3) vs. 5-Axis CNC 304/316 Stainless Steel, PEI & Zirconium: Cost Breakdown',
      summary: 'Why the exact same EDC design costs $1.20–$6.00 in die-cast zinc alloy versus $15–$380+ in 5-axis CNC stainless steel, Amber PEI (Ultem), or Zr702 Zirconium.'
    },
    de: {
      title: 'Zinkdruckguss (Zamak #3) vs. 5-Achsen-CNC 304/316 Edelstahl, PEI & Zirkonium: Kostenanalyse',
      summary: 'Warum dasselbe EDC-Design im Zinkdruckguss $1,20–$6,00 und in 5-Achsen-CNC-Edelstahl, Bernstein-PEI (Ultem) oder Zr702-Zirkonium $15–$380+ kostet.'
    },
    fr: {
      title: 'Alliage de Zinc Moulé vs Acier Inox 304/316 CNC, PEI (Ultem) & Zirconium : Coûts & Marges',
      summary: 'Pourquoi un même design EDC coûte 1,20–6,00 $ en alliage de zinc moulé contre 15–380 $+ en acier inoxydable CNC 5 axes, PEI ambre ou zirconium Zr702.'
    },
    nl: {
      title: 'Spuitgiet Zinklegering vs. 5-Assig CNC 304/316 Roestvrij Staal, PEI & Zirkonium: Kostenanalyse',
      summary: 'Waarom exact hetzelfde EDC-ontwerp $1,20–$6,00 kost in zinklegering tegenover $15–$380+ in 5-assig CNC roestvrij staal, Amber PEI of Zr702 zirkonium.'
    },
    es: {
      title: 'Aleación de Zinc Fundido vs. Acero Inoxidable 304/316 CNC, PEI y Circonio: Costos y Márgenes',
      summary: 'Por qué un mismo diseño EDC cuesta $1.20–$6.00 en fundición de zinc frente a $15–$380+ en acero inoxidable CNC de 5 ejes, PEI ámbar o circonio Zr702.'
    },
    it: {
      title: 'Lega di Zinco Pressofusa vs. Acciaio Inox 304/316 CNC a 5 Assi, PEI e Zirconio: Analisi dei Costi',
      summary: 'Perché lo stesso design EDC costa $1,20–$6,00 in lega di zinco pressofusa contro $15–$380+ in acciaio inox CNC, PEI Ambra (Ultem) o Zirconio Zr702.'
    },
    pt: {
      title: 'Liga de Zinco Fundido vs. Aço Inoxidável 304/316 CNC de 5 Eixos, PEI e Zircónio: Análise de Custos',
      summary: 'Por que o mesmo design EDC custa $1,20–$6,00 em liga de zinco fundido contra $15–$380+ em aço inox CNC, PEI Âmbar (Ultem) ou Zircónio Zr702.'
    },
    sv: {
      title: 'Pressgjuten Zinklegering vs. 5-Axlig CNC 304/316 Rostfritt Stål, PEI & Zirkonium: Kostnadsanalys',
      summary: 'Varför samma EDC-design kostar $1,20–$6,00 i pressgjuten zinklegering jämfört med $15–$380+ i 5-axligt CNC rostfritt stål, PEI eller Zr702 zirkonium.'
    },
    da: {
      title: 'Trykstøbt Zinklegering vs. 5-Akset CNC 304/316 Rustfrit Stål, PEI & Zirkonium: Omkostningsanalyse',
      summary: 'Hvorfor det samme EDC-design koster $1,20–$6,00 i trykstøbt zinklegering mod $15–$380+ i 5-akset CNC rustfrit stål, PEI eller Zr702 zirkonium.'
    },
    no: {
      title: 'Pressstøpt Sinklegering vs. 5-Akset CNC 304/316 Rustfritt Stål, PEI & Zirkonium: Kostnadsanalyse',
      summary: 'Hvorfor det samme EDC-designet koster $1,20–$6,00 i pressstøpt sinklegering mot $15–$380+ i 5-akset CNC rustfritt stål, PEI eller Zr702 zirkonium.'
    },
    fi: {
      title: 'Painevalettu Sinkkiseos vs. 5-Akselinen CNC 304/316 Ruostumaton Teräs, PEI & Zirkonium: Kustannusvertailu',
      summary: 'Miksi sama EDC-malli maksaa $1,20–$6,00 sinkkipainevaluna ja $15–$380+ 5-akselisena CNC-teräksenä, PEI Ultemina tai Zr702-zirkoniumina.'
    },
    pl: {
      title: 'Odlew Ciśnieniowy Stopu Cynku vs. 5-Osiowe CNC ze Stali 304/316, PEI i Cyrkonu: Analiza Kosztów',
      summary: 'Dlaczego ten sam projekt EDC kosztuje $1,20–$6,00 w odlewie cynkowym wobec $15–$380+ w 5-osiowym CNC ze stali nierdzewnej, PEI lub cyrkonu Zr702.'
    },
    cs: {
      title: 'Tlakový Odlitek Slitiny Zinku vs. 5osé CNC z Nerezové Oceli 304/316, PEI a Zirkonia: Rozbor Nákladů',
      summary: 'Proč stejný EDC design stojí $1,20–$6,00 ze slitiny zinku oproti $15–$380+ při 5osém CNC obrábění nerezu, PEI Ultem nebo zirkonia Zr702.'
    },
    ru: {
      title: 'Литье из Цинкового Сплава vs. 5-Осевой ЧПУ из Стали 304/316, PEI и Циркония: Анализ Себестоимости',
      summary: 'Почему один и тот же дизайн EDC стоит $1.20–$6.00 в цинковом литье против $15–$380+ при 5-осевой обработке ЧПУ из нержавеющей стали, PEI или циркония Zr702.'
    },
    ja: {
      title: '亜鉛合金ダイカスト vs 5軸CNC 304/316ステンレス・アンバーPEI・ジルコニウム：製造原価と利益率の徹底比較',
      summary: '同じ金型デザインのフィジェットでも、亜鉛合金ダイカスト（$1.20〜$6.00）と5軸CNCステンレス・PEI（Ultem）・Zr702ジルコニウム（$15〜$380+）で価格が大きく異なる理由を解説。'
    },
    ko: {
      title: '아연 합금 다이캐스팅 vs 5축 CNC 304/316 스테인리스·PEI(울템)·지르코늄: 원가 및 마진 분석',
      summary: '동일한 디자인의 피젯이 아연 합금 다이캐스팅($1.20~$6.00)과 5축 CNC 스테인리스·앰버 PEI·Zr702 지르코늄($15~$380+)에서 원가와 소매 마진이 달라지는 이유.'
    },
    id: {
      title: 'Die-Cast Paduan Seng vs. CNC 5-Sumbu Baja Tahan Karat 304/316, PEI & Zirkonium: Rincian Biaya',
      summary: 'Mengapa desain EDC yang sama berbiaya $1,20–$6,00 dalam die-cast paduan seng dibandingkan $15–$380+ dalam CNC 5-sumbu baja tahan karat, PEI Amber, atau Zirkonium Zr702.'
    },
    ar: {
      title: 'مقارنة سبائك الزنك المصبوبة مقابل تصنيع CNC خماسي المحاور للفولاذ 304/316 وPEI والزركونيوم',
      summary: 'لماذا يكلف نفس تصميم EDC ما بين 1.20–6.00 دولار في سبائك الزنك المصبوبة مقابل 15–380+ دولار في التصنيع الرقمي CNC من الفولاذ المقاوم للصدأ أو PEI أو الزركونيوم.'
    }
  },
  'r188-bearing-metal-fidget-spinners-desktop-gyro-engineering-guide': {
    en: {
      title: 'R188 Bearing Physics & Multi-Axis Desktop Gyro Spinners: Complete Wholesale Engineering Guide',
      summary: 'A deep-dive engineering guide into 10-ball stainless and hybrid Si3N4 ceramic R188 bearings, rotational inertia, threaded retention caps, and multi-axis CNC gimbal gyros across 30+ kinetic metal spinner molds.'
    },
    de: {
      title: 'R188-Kugellager-Physik & Mehrachsige Tischkreisel-Spinner: Technischer Großhandels-Leitfaden',
      summary: 'Ingenieur-Leitfaden zu 10-Kugel-Edelstahl- und Si3N4-Hybridkeramik-R188-Lagern, Rotationsmassenträgheit, Schraubkappen und mehrachsigen CNC-Kardan-Kreiseln über 30+ Metall-Spinner-Formen.'
    },
    fr: {
      title: 'Physique des Roulements R188 & Gyroscopes de Bureau Multi-Axes : Guide d’Ingénierie Grossiste',
      summary: 'Comparatif technique des roulements R188 à 10 billes en acier inox 440C et céramique hybride Si3N4, inertie rotative et gyroscopes à cardan CNC sur plus de 30 moules.'
    },
    nl: {
      title: 'R188-kogellagerfysica & Meerassige Desktop Gyro Spinners: Technische Groothandelsgids',
      summary: 'Technische analyse van 10-kogel RVS en hybride Si3N4 keramische R188-lagers, rotatietraagheid en meerassige CNC-cardangyroscopen in 30+ metalen spinnermallen.'
    },
    es: {
      title: 'Física de Rodamientos R188 y Giroscopios de Escritorio Multieje: Guía de Ingeniería Mayorista',
      summary: 'Guía técnica de rodamientos R188 de 10 bolas de acero inoxidable y cerámica híbrida Si3N4, inercia rotacional y giroscopios cardán CNC en más de 30 moldes metálicos.'
    },
    it: {
      title: 'Fisica dei Cuscinetti R188 e Giroscopi da Scrivania Multi-Asse: Guida Tecnica all’Ingrosso',
      summary: 'Analisi ingegneristica dei cuscinetti R188 a 10 sfere in acciaio inox e ceramica ibrida Si3N4, inerzia rotazionale e giroscopi cardanici CNC su oltre 30 stampi.'
    },
    pt: {
      title: 'Física dos Rolamentos R188 e Giroscópios de Mesa Multieixo: Guia de Engenharia por Atacado',
      summary: 'Guia técnico de rolamentos R188 de 10 esferas em aço inox e cerâmica híbrida Si3N4, inércia rotacional e giroscópios cardan CNC em mais de 30 moldes metálicos.'
    },
    sv: {
      title: 'R188-kullagerfysik & Fleraxliga Skrivbordsgyron: Komplett Teknisk Grossistguide',
      summary: 'Teknisk genomgång av 10-kulors rostfria och Si3N4-hybridkeramiska R188-lager, rotationsinertie och fleraxliga CNC-kardangyron över 30+ metallformar.'
    },
    da: {
      title: 'R188-kuglelejefysik & Fleraksede Skrivebordsgyroer: Komplet Teknisk Engrosguide',
      summary: 'Teknisk guide til 10-kuglers rustfri og Si3N4-hybridkeramiske R188-lejer, rotationsinerti og fleraksede CNC-kardangyroer på tværs af 30+ metalforme.'
    },
    no: {
      title: 'R188-kulelagerfysikk & Fleraksede Skrivebordsgyroer: Komplett Teknisk Engrosguide',
      summary: 'Teknisk gjennomgang av 10-kulers rustfrie og Si3N4-hybridkeramiske R188-lagre, rotasjonsinerti og fleraksede CNC-kardangyroer over 30+ metallformer.'
    },
    fi: {
      title: 'R188-kuulalaakerifysiikka & Moniakseliset Pöytägyroskoopit: Tekninen Tukkuopas',
      summary: 'Insinööriopas 10-kuulaisiin ruostumattomiin ja Si3N4-hybridikeraamisiin R188-laakereihin, pyörimishitauteen ja CNC-kardaanigyroihin yli 30 metallimuotissa.'
    },
    pl: {
      title: 'Fizyka Łożysk R188 i Wieloosiowe Żyroskopy Biurkowe: Przewodnik Inżynieryjny Hurtowni',
      summary: 'Analiza 10-kulkowych łożysk R188 ze stali 440C i ceramiki hybrydowej Si3N4, bezwładności obrotowej oraz żyroskopów kardanowych CNC w ponad 30 formach.'
    },
    cs: {
      title: 'Fyzika Ložisek R188 a Víceosé Stolní Gyroskopy: Kompletní Velkoobchodní Technický Průvodce',
      summary: 'Inženýrský rozbor 10kuličkových nerezových a hybridních keramických Si3N4 ložisek R188, momentu setrvačnosti a CNC kardanových gyroskopů u 30+ forem.'
    },
    ru: {
      title: 'Физика Подшипников R188 и Многоосевые Настольные Гироскопы: Инженерный Оптовый Гид',
      summary: 'Инженерный разбор 10-шариковых стальных 440C и гибридных керамических Si3N4 подшипников R188, момента инерции и карданных ЧПУ-гироскопов в 30+ моделях.'
    },
    ja: {
      title: 'R188ベアリング物理と多軸CNCデスクトップジャイロ＆ハンドスピナー：卸売エンジニアリング完全ガイド',
      summary: '10ボール440CステンレスおよびSi3N4ハイブリッドセラミックR188ベアリング、慣性モーメント、ネジ式保持リング、多軸ジンバルジャイロ全30モデル以上を徹底解説。'
    },
    ko: {
      title: 'R188 베어링 물리학 및 다축 데스크탑 자이로 스피너: 도매 엔지니어링 완벽 가이드',
      summary: '10볼 440C 스테인리스 및 Si3N4 하이브리드 세라믹 R188 베어링, 회전 관성 모멘트, 나사식 리테이너 및 30종 이상의 CNC 짐벌 자이로 금형 기술 분석.'
    },
    id: {
      title: 'Fisika Bearing R188 & Spinner Giroskop Meja Multi-Sumbu: Panduan Rekayasa Grosir Lengkap',
      summary: 'Panduan teknis bearing R188 10-bola baja tahan karat dan keramik hibrida Si3N4, inersia rotasi, serta giroskop gimbal CNC di lebih dari 30 cetakan logam.'
    },
    ar: {
      title: 'فيزياء محامل R188 وجيروسكوبات المكتب متعددة المحاور: دليل الهندسة الشامل للجملة',
      summary: 'دليل هندسي لمحامل R188 ذات 10 كرات من الفولاذ المقاوم للصدأ والسيراميك الهجين Si3N4 وعزم القصور الذاتي والجيروسكوبات المحورية عبر أكثر من 30 قالباً معدنياً.'
    }
  },
  'multi-action-mechanical-ratchet-bolt-action-edc-fidget-guide': {
    en: {
      title: 'Multi-Action Mechanical EDC Fidgets: Spring Ratchets, Bolt-Action Breeches & Planetary Gear Engineering',
      summary: 'An engineering teardown of spring-loaded pawl ratchets, bolt-action breech locks, 8-spring arachnid linkages, and zirconia ceramic bead detents across 27+ multi-action mechanical EDC fidget molds.'
    },
    de: {
      title: 'Mechanische Multi-Action-EDC-Fidgets: Federratschen, Bolt-Action-Verschlüsse & Planetengetriebe',
      summary: 'Technische Analyse von federbelasteten Sperrklinken, Bolt-Action-Verschlüssen, 8-Feder-Mechaniken und Zirkonoxid-Keramikkugelrasten über 27+ mechanische EDC-Formen.'
    },
    fr: {
      title: 'Fidgets EDC Mécaniques Multi-Actions : Cliquets à Ressort, Verrous Bolt-Action & Engrenages Planétaires',
      summary: 'Analyse technique des cliquets à ressort, culasses bolt-action, glissières à 8 ressorts et billes de détente en céramique Zircone sur plus de 27 moules mécaniques.'
    },
    nl: {
      title: 'Multi-Action Mechanische EDC Fidgets: Veerratels, Bolt-Action Grendels & Planetaire Tandwielen',
      summary: 'Technische analyse van veergeladen ratels, bolt-action grendels, 8-veer sliders en zirkonia keramische detent-kogels in 27+ mechanische EDC-mallen.'
    },
    es: {
      title: 'Fidgets EDC Mecánicos Multiacción: Trinquetes de Resorte, Cerrojos Bolt-Action y Engranajes Planetarios',
      summary: 'Análisis de ingeniería de trinquetes por resorte, cerrojos tácticos bolt-action, enlaces de 8 resortes y esferas de circonio en más de 27 moldes mecánicos.'
    },
    it: {
      title: 'Fidget EDC Meccanici Multi-Azione: Cricchetti a Molla, Otturatori Bolt-Action e Ingranaggi Planetari',
      summary: 'Analisi tecnica di cricchetti a molla, otturatori bolt-action, slider a 8 molle e sfere di arresto in ceramica zirconia su oltre 27 stampi meccanici.'
    },
    pt: {
      title: 'Fidgets EDC Mecânicos Multiação: Catracas de Mola, Ferrolhos Bolt-Action e Engrenagens Planetárias',
      summary: 'Análise técnica de catracas por mola, ferrolhos bolt-action, cursores de 8 molas e esferas detentoras de zircónia em mais de 27 moldes mecânicos.'
    },
    sv: {
      title: 'Mekaniska Multi-Action EDC Fidgets: Fjäderspärrar, Bolt-Action-slutstycken & Planetväxlar',
      summary: 'Teknisk genomgång av fjäderbelastade spärrhakar, bolt-action-mekanismer, 8-fjädrars sliders och keramiska zirkoniakulor i 27+ mekaniska EDC-formar.'
    },
    da: {
      title: 'Mekaniske Multi-Action EDC Fidgets: Fjederskralder, Bolt-Action-låse & Planetgear',
      summary: 'Teknisk gennemgang af fjederbelastede skralder, bolt-action-mekanismer, 8-fjedres sliders og keramiske zirkoniakugler på tværs af 27+ mekaniske EDC-forme.'
    },
    no: {
      title: 'Mekaniske Multi-Action EDC Fidgets: Fjærskraller, Bolt-Action-låser & Planetgir',
      summary: 'Teknisk gjennomgang av fjærbelastede skraller, bolt-action-mekanismer, 8-fjærs slidere og keramiske zirkoniakuler over 27+ mekaniske EDC-former.'
    },
    fi: {
      title: 'Monitoimiset Mekaaniset EDC-Fidgetit: Jousiräikät, Pulttilukot & Planeettavaihteet',
      summary: 'Insinöörianalyysi jousikuormitteisista räikistä, bolt-action-lukoista, 8-jousisista liukusäätimistä ja keraamisista zirkoniakuulista yli 27 mekaanisessa muotissa.'
    },
    pl: {
      title: 'Wielofunkcyjne Mechaniczne Fidgety EDC: Zapadki Sprężynowe, Zamki Bolt-Action i Przekładnie Planetarne',
      summary: 'Analiza techniczna zapadek sprężynowych, zamków ryglowych bolt-action, 8-sprężynowych sliderów i kulek ceramicznych ZrO2 w ponad 27 formach mechanicznych.'
    },
    cs: {
      title: 'Víceúčelové Mechanické EDC Fidgety: Pružinové Ráčny, Závěry Bolt-Action a Planetové Převody',
      summary: 'Inženýrský rozbor pružinových ráčen, závěrových mechanismů bolt-action, 8pružinových sliderů a keramických kuliček ZrO2 u 27+ mechanických EDC forem.'
    },
    ru: {
      title: 'Многофункциональные Механические EDC-Фиджеты: Пружинные Храповики, Затворы Bolt-Action и Планетарные Шестерни',
      summary: 'Инженерный разбор пружинных храповиков, затворов bolt-action, 8-пружинных слайдеров и керамических фиксаторов ZrO2 в 27+ механических моделях.'
    },
    ja: {
      title: 'マルチアクション機械式EDCフィジェット：スプリングラチェット・ボルトアクション・遊星ギア工学ガイド',
      summary: 'SUS304スプリングラチェット、ボルトアクション機構、8スプリングスライダー、ジルコニアセラミックデテントボールを採用した機械式EDC全27モデル以上を解説。'
    },
    ko: {
      title: '멀티액션 기계식 EDC 피젯: 스프링 라쳇, 볼트액션 및 유성 기어 엔지니어링 가이드',
      summary: 'SUS304 스프링 폴 라쳇, 볼트액션 브리치, 8-스프링 아라크니드 링크 및 지르코니아 세라믹 볼 디텐트를 적용한 27종 이상의 기계식 EDC 금형 분석.'
    },
    id: {
      title: 'Fidget EDC Mekanis Multi-Aksi: Ratchet Pegas, Gerendel Bolt-Action & Rekayasa Roda Gigi Planet',
      summary: 'Analisis rekayasa ratchet pegas, kunci bolt-action, slider 8-pegas, dan bola detent keramik zirkonia di lebih dari 27 cetakan EDC mekanis.'
    },
    ar: {
      title: 'أدوات الفيدجت الميكانيكية متعددة الحركات: السقاطات الزنبركية ومزلاج Bolt-Action والتروس الكوكبية',
      summary: 'تحليل هندسي للسقاطات المحملة بزنبرك ومزلاج الترباس التكتيكي وكرات السيراميك الزركونيا عبر أكثر من 27 قالباً ميكانيكياً.'
    }
  },
  'haptic-fidget-coins-edc-gourds-magnetic-spinner-rings-guide': {
    en: {
      title: 'Haptic Fidget Coins, Baoding EDC Gourds & Magnetic Spinner Rings: Pocket Ergonomics & Sourcing Guide',
      summary: 'A comparative product engineering and merchandising guide to circular 12-magnet haptic coins, modern CNC Baoding gourds/capsules, and wearable 16-magnet spinner rings across 27+ specialized factory molds.'
    },
    de: {
      title: 'Haptische Fidget-Münzen, CNC-EDC-Kalebassen & Magnet-Spinner-Ringe: Ergonomie- & Einkaufsleitfaden',
      summary: 'Vergleich von 12-Magnet-Haptikmünzen, 5-Achsen-CNC-Kalebassen/Kapseln (inkl. PEI Ultem) und tragbaren 16-Magnet-Spinner-Ringen über 27+ Spezialformen.'
    },
    fr: {
      title: 'Pièces Haptiques, Calebasses EDC CNC & Bagues Spinner Magnétiques : Guide d’Ergonomie & Sourcing',
      summary: 'Guide comparatif des pièces haptiques rotatives à 12 aimants, calebasses CNC (dont PEI Ultem) et bagues magnétiques à 16 aimants sur plus de 27 moules.'
    },
    nl: {
      title: 'Haptische Fidget-munten, CNC EDC-kalebassen & Magnetische Spinner-ringen: Ergonomie & Inkoopgids',
      summary: 'Vergelijkende gids voor 12-magneet haptische munten, CNC Baoding-kalebassen (incl. PEI Ultem) en draagbare 16-magneet spinner-ringen in 27+ mallen.'
    },
    es: {
      title: 'Monedas Hápticas, Calabazas EDC CNC y Anillos Giratorios Magnéticos: Guía de Ergonomía y Compras',
      summary: 'Guía comparativa de monedas hápticas rotativas de 12 imanes, calabazas CNC (incl. PEI Ultem) y anillos magnéticos de 16 imanes en más de 27 moldes.'
    },
    it: {
      title: 'Monete Aptiche, Zucche EDC CNC e Anelli Spinner Magnetici: Guida Ergonomica e Fornitura all’Ingrosso',
      summary: 'Confronto tecnico tra monete aptiche a 12 magneti, zucche/capsule CNC (incluso PEI Ultem) e anelli spinner magnetici a 16 magneti su oltre 27 stampi.'
    },
    pt: {
      title: 'Moedas Hápticas, Cabaças EDC CNC e Anéis Giratórios Magnéticos: Guia de Ergonomia e Atacado',
      summary: 'Guia comparativo de moedas hápticas de 12 ímanes, cabaças/cápsulas CNC (incluindo PEI Ultem) e anéis magnéticos de 16 ímanes em mais de 27 moldes.'
    },
    sv: {
      title: 'Haptiska Fidget-mynt, CNC EDC-kalebasser & Magnetiska Spinner-ringar: Ergonomi- & Inköpsguide',
      summary: 'Jämförande guide till 12-magnets haptiska mynt, CNC-frästa kalebasser/kapslar (inkl. PEI Ultem) och bärbara 16-magnets spinnerringar i 27+ formar.'
    },
    da: {
      title: 'Haptiske Fidget-mønter, CNC EDC-kalabasser & Magnetiske Spinner-ringe: Ergonomi- & Indkøbsguide',
      summary: 'Sammenlignende guide til 12-magnets haptiske mønter, CNC-drejede kalabasser (inkl. PEI Ultem) og bærbare 16-magnets spinnerringe i 27+ forme.'
    },
    no: {
      title: 'Haptiske Fidget-mynter, CNC EDC-kalebasser & Magnetiske Spinner-ringer: Ergonomi- & Innkjøpsguide',
      summary: 'Sammenlignende guide til 12-magnets haptiske mynter, CNC-dreide kalebasser (inkl. PEI Ultem) og bærbare 16-magnets spinnerringer i 27+ former.'
    },
    fi: {
      title: 'Haptiset Fidget-kolikot, CNC EDC-kurpitsat & Magneettiset Spinner-sormukset: Ergonomia- & Tukkuopas',
      summary: 'Vertaileva opas 12 magneetin haptisiin kolikoihin, CNC-koneistettuihin kämmenkappaleisiin (ml. PEI Ultem) ja 16 magneetin sormuksiin yli 27 muotissa.'
    },
    pl: {
      title: 'Monety Haptyczne, Tykwy EDC CNC i Magnetyczne Pierścienie: Przewodnik Ergonomii i Zakupów Hurtowych',
      summary: 'Porównanie 12-magnesowych monet haptycznych, toczonych CNC tykw/kapsuł (w tym PEI Ultem) oraz 16-magnesowych pierścieni obrotowych w ponad 27 formach.'
    },
    cs: {
      title: 'Haptické Fidget Mince, CNC Kalabasy EDC a Magnetické Prsteny: Průvodce Ergonomií a Velkoobchodem',
      summary: 'Srovnávací průvodce 12magnetovými haptickými mincemi, CNC kalabasami/kapslemi (vč. PEI Ultem) a 16magnetovými prsteny napříč 27+ formami.'
    },
    ru: {
      title: 'Тактильные Монеты, ЧПУ-Тыквы (Хулу) и Магнитные Кольца-Спиннеры: Гид по Эргономике и Оптовым Закупкам',
      summary: 'Сравнительный обзор 12-магнитных тактильных монет, точеных ЧПУ-тыкв/капсул (включая янтарный PEI Ultem) и 16-магнитных колец в 27+ моделях.'
    },
    ja: {
      title: 'ハプティックコイン・CNC瓢箪（ひょうたん）ハンドピース・磁気スピナーリング：人間工学＆卸売ガイド',
      summary: '360度回転12磁石ハプティックコイン、5軸CNC瓢箪・カプセル（アンバーPEI Ultem含む）、16磁石スピナーリング全27モデル以上の設計と名入れ仕様を比較。'
    },
    ko: {
      title: '햅틱 피젯 코인, CNC 조롱박 핸드피스 및 마그네틱 스피너 링: 포켓 인체공학 및 도매 소싱 가이드',
      summary: '12자석 회전식 햅틱 코인, 5축 CNC 조롱박/캡슐(앰버 PEI 울템 포함) 및 16자석 웨어러블 스피너 링 등 27종 이상의 특수 금형 비교 가이드.'
    },
    id: {
      title: 'Koin Fidget Haptik, Labu EDC CNC & Cincin Spinner Magnetik: Panduan Ergonomi Saku & Grosir',
      summary: 'Panduan perbandingan koin haptik putar 12-magnet, labu/kapsul CNC (termasuk PEI Ultem), dan cincin spinner 16-magnet di lebih dari 27 cetakan pabrik.'
    },
    ar: {
      title: 'عملات الفيدجت اللمسية وقرع اليد CNC وخواتم السبينر المغناطيسية: دليل بيئة العمل والتوريد بالجملة',
      summary: 'دليل مقارن للعملات اللمسية الدوارة بـ 12 مغناطيساً وقطع اليد المخروطة CNC (بما فيها PEI Ultem) والخواتم المغناطيسية بـ 16 مغناطيساً عبر أكثر من 27 قالباً.'
    }
  },
  'custom-eva-zipper-cases-tin-boxes-metal-fidget-packaging-guide': {
    en: {
      title: 'Custom EVA Zipper Cases, Windowed Tin Boxes & Collector Gift Packaging for Wholesale Metal Fidgets',
      summary: 'A complete packaging engineering guide for wholesale metal EDC fidgets—comparing 75-Shore-C EVA foam inserts, hard-shell PU/nylon zipper cases, matte tin presentation boxes, Amazon FNSKU barcoding, and magnetic air-freight shielding.'
    },
    de: {
      title: 'Individuelle EVA-Reißverschlussetuis, Sichtfenster-Blechdosen & Sammler-Geschenkboxen für Metall-Fidgets',
      summary: 'Verpackungs-Leitfaden für Metall-EDC-Fidgets: 75-Shore-C-EVA-Schaumeinlagen, Hartschalen-Reißverschlussetuis, Metalldosen, Amazon-FNSKU-Etikettierung und IATA-PI-953-Magnetabschirmung.'
    },
    fr: {
      title: 'Étuis Zippés EVA sur Mesure, Boîtes en Fer-Blanc à Fenêtre & Coffrets Collector pour Fidgets Métal',
      summary: 'Guide complet du packaging EDC : inserts en mousse EVA haute densité, étuis rigides EVA zippés, boîtes métalliques, codes-barres Amazon FNSKU et blindage magnétique aérien IATA PI-953.'
    },
    nl: {
      title: 'Bedrukte EVA-ritsetuis, Blikken Doosjes met Venster & Collector-geschenkdozen voor Metalen Fidgets',
      summary: 'Verpakkingsgids voor metalen EDC-fidgets: 75-Shore-C EVA-schuiminlays, hard-shell ritsetuis, matte blikken dozen, Amazon FNSKU-barcodes en IATA PI-953 magnetische luchtvaartafscherming.'
    },
    es: {
      title: 'Estuches EVA con Cremallera, Cajas Metálicas con Ventana y Cajas de Regalo para Fidgets de Metal',
      summary: 'Guía de ingeniería de empaque mayorista: espuma EVA de alta densidad, estuches rígidos EVA, cajas de hojalata, códigos Amazon FNSKU y blindaje magnético aéreo IATA PI-953.'
    },
    it: {
      title: 'Custodie EVA con Zip, Scatole in Latta Finestrata e Cofanetti Regalo Collector per Fidget in Metallo',
      summary: 'Guida completa al packaging EDC: inserti in schiuma EVA ad alta densità, custodie rigide con zip, scatole in latta, codici Amazon FNSKU e schermatura magnetica aerea IATA PI-953.'
    },
    pt: {
      title: 'Estojos EVA com Fecho, Caixas de Lata com Janela e Caixas de Presente Collector para Fidgets de Metal',
      summary: 'Guia completo de embalagem por atacado: espuma EVA de alta densidade, estojos rígidos EVA, caixas metálicas, etiquetas Amazon FNSKU e blindagem magnética aérea IATA PI-953.'
    },
    sv: {
      title: 'Anpassade EVA-dragkedjefodral, Plåtaskar med Fönster & Samlarpresentaskar för Metallfidgets',
      summary: 'Förpackningsguide för metall-EDC: högdensitets EVA-skuminsatser, hårda dragkedjefodral, matta plåtaskar, Amazon FNSKU-streckkoder och IATA PI-953 magnetisk flygskärmning.'
    },
    da: {
      title: 'Specialfremstillede EVA-lynlåsetuier, Metalæsker med Vindue & Samlergaveæsker til Metalfidgets',
      summary: 'Emballageguide til metal-EDC: højdensitets EVA-skumindsatser, hard-shell lynlåsetuier, matte metalæsker, Amazon FNSKU-stregkoder og IATA PI-953 magnetisk luftfragtsskærmning.'
    },
    no: {
      title: 'Spesialtilpassede EVA-glidelåsetuier, Metallbokser med Vindu & Samlergaveesker for Metallfidgets',
      summary: 'Emballasjeguide for metall-EDC: høydensitets EVA-skuminnsatser, hard-shell glidelåsetuier, matte metallbokser, Amazon FNSKU-strekkoder og IATA PI-953 magnetisk flyfraktskjerming.'
    },
    fi: {
      title: 'Räätälöidyt EVA-vetoketjukotelot, Ikkunalliset Peltirasiat & Keräilylahjapakkaukset Metallifidgeteille',
      summary: 'Pakkausopas metallisille EDC-fidgeteille: tiheät EVA-vaahtomuovisisäkkeet, kovat vetoketjukotelot, peltirasiat, Amazon FNSKU -viivakoodit ja IATA PI-953 -magneettisuojaus.'
    },
    pl: {
      title: 'Etui EVA na Zamek, Puszki z Okienkiem i Pudełka Prezentowe Collector dla Metalowych Fidgetów',
      summary: 'Przewodnik po opakowaniach hurtowych: wkładki z pianki EVA o wysokiej gęstości, twarde etui EVA, puszki stalowe, kody Amazon FNSKU oraz ekranowanie magnetyczne IATA PI-953.'
    },
    cs: {
      title: 'Zakázková Pouzdra EVA na Zip, Plechové Krabičky s Okénkem a Sběratelské Dárkové Boxy pro Kovové Fidgety',
      summary: 'Průvodce velkoobchodním balením: výplně z husté pěny EVA, skořepinová pouzdra na zip, plechové krabičky, štítky Amazon FNSKU a magnetické stínění IATA PI-953.'
    },
    ru: {
      title: 'Брендированные Кейсы EVA на Молнии, Жестяные Коробки с Окном и Подарочная Упаковка для Металлических Фиджетов',
      summary: 'Инженерный гид по оптовой упаковке: ложементы из плотной пены EVA, жесткие чехлы на молнии, жестяные коробки, штрихкоды Amazon FNSKU и магнитное экранирование IATA PI-953.'
    },
    ja: {
      title: 'カスタムEVAジッパーケース・窓付きブリキ缶・コレクター向け磁気ギフトボックス：金属フィジェット包装完全ガイド',
      summary: '高密度クローズドセルEVAフォーム中敷き、ハードシェルEVAケース、マット缶ボックス、Amazon FNSKUラベル貼付、IATA PI-953航空磁気シールド梱包を徹底解説。'
    },
    ko: {
      title: '커스텀 EVA 지퍼 케이스, 윈도우 틴박스 및 컬렉터 기프트 박스: 금속 피젯 도매 패키징 완벽 가이드',
      summary: '고밀도 EVA 폼 인서트, 하드쉘 EVA 지퍼 케이스, 무광 틴박스, 아마존 FNSKU 바코드 부착 및 IATA PI-953 항공 마그네틱 차폐 포장 엔지니어링 가이드.'
    },
    id: {
      title: 'Kotak Resleting EVA Kustom, Kotak Kaleng Jendela & Kemasan Hadiah Kolektor untuk Fidget Logam',
      summary: 'Panduan rekayasa kemasan grosir: busa EVA kepadatan tinggi, kotak resleting EVA keras, kotak kaleng matte, barcode Amazon FNSKU, dan pelindung magnetik udara IATA PI-953.'
    },
    ar: {
      title: 'حافظات EVA بسحاب مخصصة وعلب معدنية بنافذة وصناديق هدايا فاخرة لأدوات الفيدجت المعدنية بالجملة',
      summary: 'دليل هندسة التغليف بالجملة: حشوات إسفنج EVA عالي الكثافة، حافظات صلبة بسحاب، علب صفيح غير لامعة، ملصقات Amazon FNSKU، والعزل المغناطيسي للشحن الجوي IATA PI-953.'
    }
  }
};

export function localizeInsightMeta(guideData: any, lang: SupportedLanguage) {
  const t = useTranslations(lang);
  const mins = parseInt(String(guideData.readTime || '12'), 10) || 12;
  const readTime = lang === 'en' ? (guideData.readTime || `${mins} min read`) : `${mins} ${t('unit.minRead')}`;
  if (lang === 'en') {
    return {
      title: guideData.title,
      summary: guideData.summary,
      category: guideData.category,
      readTime,
      author: guideData.author
    };
  }
  const cat = INSIGHT_CATEGORIES[guideData.category]?.[lang] || guideData.category;
  const hit = INSIGHT_META_ALL[guideData.slug]?.[lang];
  return {
    title: hit ? hit.title : guideData.title,
    summary: hit ? hit.summary : guideData.summary,
    category: cat,
    readTime,
    author: t('guide.authorName')
  };
}

export function localizeCollectionContent(col: any, lang: SupportedLanguage) {
  const t = useTranslations(lang);
  if (lang === 'en') {
    return {
      heroSubtitle: col.heroSubtitle,
      geoDirectAnswer: col.geoDirectAnswer,
      engineeringHighlights: col.engineeringHighlights,
      moq: col.moq,
      leadTime: col.leadTime,
      faqs: col.faqs
    };
  }
  const name = t(`col.${col.slug}.name` as any);
  const shortName = t(`col.${col.slug}.short` as any);
  const pcs = t('unit.pcs');
  const moq = `50 ${pcs} / 100 ${pcs}`;
  const leadTime = `3–7d / 10–15d`;

  const heroSubtitle = `${name} (${col.skuCount} ${t('nav.modelsCount')} · ${col.priceRangeUsd}). ${t('pdp.declQuote')}`;
  const geoDirectAnswer = `${name} (${col.skuCount} SKUs, ${col.priceRangeUsd}): ${t('pdp.declQuote')} ${t('brand.geoAnswer')}`;

  const engineeringHighlights = [
    `${t('pdp.noMoldFee')} — ${col.skuCount} ${t('nav.modelsCount')} (${col.priceRangeUsd})`,
    `${t('pdp.opt1Title')}: ${t('pdp.opt1Desc')}`,
    `${t('pdp.opt2Title')} & ${t('pdp.opt3Title')}`,
    `${t('pdp.trust1')} · ${t('pdp.trust2')}`
  ];

  const faqs = [
    {
      question: `${shortName} — ${t('pdp.blankMoq')} & ${t('pdp.logoMoq')}?`,
      answer: `${t('pdp.opt1Title')}: ${t('pdp.opt1Desc')}. ${t('pdp.opt2Title')}: ${t('pdp.opt2Desc')}. ${t('pdp.opt3Title')}: ${t('pdp.opt3Desc')}.`
    },
    {
      question: `${shortName} (${col.skuCount} ${t('nav.modelsCount')}) — ${t('pdp.pricingTitle')}?`,
      answer: `${col.priceRangeUsd} (${t('pdp.noMoldFee')}). ${t('pdp.declQuote')}`
    },
    {
      question: `${t('brand.compTitle')}?`,
      answer: t('brand.geoAnswer')
    },
    {
      question: `${t('comp.heroTitle')}?`,
      answer: t('comp.geoAnswer')
    },
    {
      question: `${t('pkg.heroTitle')}?`,
      answer: `${t('pkg.geoAnswer')} (${t('pkg.card1Title')} / ${t('pkg.card2Title')} / ${t('pkg.card3Title')}).`
    },
    {
      question: `${t('pdp.orderSample')} — ${shortName}?`,
      answer: `${t('footer.trust3Sub')}. ${t('contact.subtitle')}`
    },
    {
      question: `${t('catalog.materialLabel')} — ${shortName}?`,
      answer: `${t('catalog.matZinc')} · ${t('catalog.matAluminum')} · ${t('catalog.matStainless')} · ${t('catalog.matExotic')}.`
    },
    {
      question: `${t('footer.trust4Title')} (DDP / FOB / EXW)?`,
      answer: `${t('footer.trust4Sub')} (${t('contact.hubVal')}).`
    },
    {
      question: `Amazon FNSKU & CPSC 14+ — ${shortName}?`,
      answer: `${t('pdp.trust1')} · ${t('pdp.trust2')} · ${t('pdp.trust3')}.`
    },
    {
      question: `${t('contact.title')} (${shortName})?`,
      answer: `${t('contact.formDesc')} WhatsApp: +86 187 5012 6315 · sales@fidgetsupply.com.`
    }
  ];

  return {
    heroSubtitle,
    geoDirectAnswer,
    engineeringHighlights,
    moq,
    leadTime,
    faqs
  };
}

export function localizeInsightFaqs(slug: string, defaultFaqs: { question: string; answer: string }[], lang: SupportedLanguage) {
  if (lang === 'en') return defaultFaqs;
  const t = useTranslations(lang);
  const meta = INSIGHT_META_ALL[slug]?.[lang];
  const topic = meta ? meta.title.split(':')[0] : slug;
  return [
    {
      question: `${topic} — ${t('geo.defaultTitle')}?`,
      answer: `${meta ? meta.summary : ''} ${t('pdp.declQuote')}`
    },
    {
      question: `${t('pdp.blankMoq')} & ${t('pdp.logoMoq')}?`,
      answer: `${t('pdp.opt1Title')}: ${t('pdp.opt1Desc')}. ${t('pdp.opt2Title')}: ${t('pdp.opt2Desc')}.`
    },
    {
      question: `${t('brand.compTitle')}?`,
      answer: t('brand.geoAnswer')
    },
    {
      question: `${t('pdp.orderSample')}?`,
      answer: `${t('footer.trust3Sub')}. ${t('contact.subtitle')}`
    },
    {
      question: `${t('catalog.materialLabel')} (Zamak #3 / 6063 Al / 304 SS / PEI / Zr702)?`,
      answer: `${t('catalog.matZinc')}, ${t('catalog.matAluminum')}, ${t('catalog.matStainless')}, ${t('catalog.matExotic')}.`
    },
    {
      question: `${t('comp.heroTitle')}?`,
      answer: t('comp.geoAnswer')
    },
    {
      question: `${t('pkg.heroTitle')}?`,
      answer: `${t('pkg.card1Title')} (+$0.75/${t('unit.pc')}), ${t('pkg.card2Title')} (+$0.85/${t('unit.pc')}), ${t('pkg.card3Title')} (+$1.10/${t('unit.pc')}).`
    },
    {
      question: `${t('nav.tuningFork')} (2,800–4,200 Hz)?`,
      answer: `${t('home.section4.title')}: ${t('home.section4.sub')} (FS-150, FS-129, FS-148, FS-107, FS-112, FS-086, FS-091, FS-045).`
    },
    {
      question: `${t('footer.trust4Title')}?`,
      answer: `${t('footer.trust4Sub')} (${t('contact.hubVal')}).`
    },
    {
      question: `${t('contact.title')}?`,
      answer: `${t('contact.formDesc')} WhatsApp: +86 187 5012 6315 · sales@fidgetsupply.com.`
    }
  ];
}

export function localizeInsightHtml(rawHtml: string, guideData: any, lang: SupportedLanguage): string {
  if (lang === 'en') return rawHtml;
  const t = useTranslations(lang);
  const meta = localizeInsightMeta(guideData, lang);

  // Extract figures and internal mesh links from original HTML so visual diagrams and cross-links remain intact
  const figures = rawHtml.match(/<figure[\s\S]*?<\/figure>/g) || [];
  const fig1 = figures[0] || '';
  const fig2 = figures[1] || '';

  const seenHrefs = new Set<string>();
  const meshLinks: string[] = [];
  for (const m of rawHtml.matchAll(/<a\s+href="(\/(?:products|collections|insights)\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
    const href = m[1];
    const label = m[2].replace(/<[^>]+>/g, '').trim();
    if (!seenHrefs.has(href) && label) {
      seenHrefs.add(href);
      meshLinks.push(`<li><a href="${href}">${label}</a></li>`);
    }
  }
  const meshLinksHtml = meshLinks.length > 0 ? `<ul class="localized-mesh-links">${meshLinks.slice(0, 18).join('')}</ul>` : '';

  const productsUrl = getLocalizedPath('/products', lang);
  const brandingUrl = getLocalizedPath('/custom-branding', lang);
  const packagingUrl = getLocalizedPath('/custom-packaging', lang);
  const complianceUrl = getLocalizedPath('/compliance-safety', lang);
  const contactUrl = getLocalizedPath('/contact', lang);

  return `
<h2 id="section-1">1. ${meta.title}</h2>
<p>${meta.summary}</p>
<p>${t('home.geo.answer')}</p>

<table>
  <thead>
    <tr>
      <th>${t('pdp.specColParam')}</th>
      <th>${t('pdp.specColVal')}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>${t('geo.metricTooling')}</strong></td>
      <td>${t('geo.metricToolingVal')} (FS-001 – FS-150 · $0.00)</td>
    </tr>
    <tr>
      <td><strong>${t('pdp.blankMoq')}</strong></td>
      <td>${t('pdp.opt1Desc')}</td>
    </tr>
    <tr>
      <td><strong>${t('pdp.logoMoq')}</strong></td>
      <td>${t('pdp.opt2Desc')} / ${t('pdp.opt3Desc')}</td>
    </tr>
    <tr>
      <td><strong>${t('pdp.orderSample')}</strong></td>
      <td>${t('footer.trust3Sub')}</td>
    </tr>
    <tr>
      <td><strong>${t('geo.metricSafety')}</strong></td>
      <td>${t('pdp.trust1')} · ${t('pdp.trust2')}</td>
    </tr>
  </tbody>
</table>

${fig1}

<h2 id="section-2">2. ${t('brand.compTitle')}</h2>
<p>${t('brand.geoAnswer')}</p>

<table>
  <thead>
    <tr>
      <th>${t('contact.brandingMode')}</th>
      <th>MOQ</th>
      <th>${t('pdp.pricingTitle')}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>${t('pdp.opt1Title')}</strong></td>
      <td>50 ${t('unit.pcs')}</td>
      <td>${t('pdp.opt1Desc')}</td>
    </tr>
    <tr>
      <td><strong>${t('pdp.opt2Title')}</strong></td>
      <td>100 ${t('unit.pcs')}</td>
      <td>${t('pdp.opt2Desc')}</td>
    </tr>
    <tr>
      <td><strong>${t('pdp.opt3Title')}</strong></td>
      <td>100 – 300 ${t('unit.pcs')}</td>
      <td>${t('pdp.opt3Desc')}</td>
    </tr>
    <tr>
      <td><strong>${t('pdp.opt4Title')}</strong></td>
      <td>100 ${t('unit.pcs')}</td>
      <td>${t('pdp.opt4Desc')}</td>
    </tr>
  </tbody>
</table>

<h2 id="section-3">3. ${t('home.section5.title')}</h2>
<p>${t('home.section5.sub')}</p>
<ul>
  <li><strong>${t('catalog.matZinc')}</strong>: FS-001, FS-009, FS-026, FS-125, FS-128 ($0.75 – $9.00)</li>
  <li><strong>${t('catalog.matAluminum')}</strong>: FS-047, FS-064, FS-096, FS-105 ($3.50 – $15.00)</li>
  <li><strong>${t('catalog.matStainless')}</strong>: FS-013, FS-075, FS-086, FS-148 ($10.00 – $65.00)</li>
  <li><strong>${t('catalog.matExotic')}</strong>: FS-099 (PEI Ultem), FS-106, FS-107, FS-114 (Zr702)</li>
</ul>

${fig2}

<h2 id="section-4">4. ${t('comp.heroTitle')} &amp; ${t('pkg.heroTitle')}</h2>
<p>${t('comp.geoAnswer')}</p>
<p>${t('pkg.geoAnswer')}</p>
${meshLinksHtml}
<ul>
  <li><a href="${productsUrl}">${t('nav.allCatalog')} (FS-001 – FS-150)</a></li>
  <li><a href="${brandingUrl}">${t('brand.heroTitle')}</a></li>
  <li><a href="${packagingUrl}">${t('pkg.heroTitle')}</a></li>
  <li><a href="${complianceUrl}">${t('comp.heroTitle')}</a></li>
</ul>

<div class="sourcing-cta-box">
  <h3>${t('home.cta.title')}</h3>
  <p>${t('home.cta.desc')}</p>
  <a href="${contactUrl}" class="btn btn-primary">${t('nav.requestQuote')}</a>
</div>
`;
}
