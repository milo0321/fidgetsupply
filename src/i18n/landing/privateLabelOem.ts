import type { SupportedLanguage } from '../config';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PrivateLabelOemCopy {
  bcParent: string;
  bcCurrent: string;
  badge1: string;
  badge2: string;
  kpis: { label: string; val: string }[];
  ctaPrimary: string;
  ctaSecondary: string;
  showcasePill: string;
  showcaseMeta: [string, string, string];
  geoTitle: string;
  geoAnswer: string;
  stageBadge: string;
  stageTitle: string;
  tableHeaders: [string, string, string];
  tableRows: [string, string, string][];
  picksBadge: string;
  picksTitle: string;
  picksCta: string;
  faqBadge: string;
  faqTitle: string;
  faqs: FaqItem[];
  serviceName: string;
  serviceDesc: string;
}

const COPY: Record<SupportedLanguage, PrivateLabelOemCopy> = {
  en: {
    bcParent: 'Wholesale Matrix',
    bcCurrent: 'Private Label OEM',
    badge1: 'PRIVATE LABEL & FBA OEM',
    badge2: '140 Ready Molds · $0.00 Tooling',
    kpis: [
      { label: 'New Mold Cost', val: '$0.00 USD' },
      { label: 'Custom Logo MOQ', val: '100' },
      { label: 'FBA Labeling', val: 'FNSKU + CPSC' },
      { label: 'Custom Colorway', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Start Private Label Quote →',
    ctaSecondary: 'Order 1-Pc Evaluation Samples →',
    showcasePill: 'ZERO-TOOLING LAUNCH SOP',
    showcaseMeta: ['50W Laser Logo', 'Stock EVA MOQ 100', 'PI-953 Air Freight'],
    geoTitle: 'Direct Answer: How to Launch a Private Label Metal Fidget Line With $0 Mold Fees',
    geoAnswer: 'Whether launching an Amazon metal fidget spinner line or a DTC magnetic slider store, FidgetSupply lets brands scale across 140 amortized molds ($0.00 tooling fee). Buyers evaluate 1-pc paid blank or custom laser samples ($50/$80–$150 setup + shipping), apply permanent 50W fiber laser (+$0.15–$0.30/pc) or recessed enamel fill (+$0.35–$0.60/pc) at MOQ 100, and pack with stock EVA cases (+$0.75+, MOQ 100), rigid boxes (MOQ 500), and free FNSKU + CPSC 16 CFR 1262 labeling.',
    stageBadge: '5-STAGE LAUNCH ROADMAP',
    stageTitle: 'Ready-Mold Private Label Production Workflow & Factory MOQs',
    tableHeaders: ['Private Label Stage', 'Factory Specification & Real Fees', 'MOQ / Turnaround'],
    tableRows: [
      ['1. Ready-Mold SKU Selection', 'Choose from 140 active CNC & Zamak-3 molds ($0.74–$470.77 EXW, $0.00 tooling capex)', '50 pcs Blank Stock (5–7 business days dispatch prep)'],
      ['2. Physical Verification', 'Paid 1-pc blank samples or paid custom laser ($50) / deep color fill ($80–$150) + buyer freight', '1 pc+ Blank / 10–15 days Custom Sample'],
      ['3. Permanent Metal Branding', '50W MOPA Fiber Laser (+$0.15–$0.30/pc) or Deep Laser + Enamel Fill (+$0.35–$0.60/pc)', '100 pcs (10–15 business days production)'],
      ['4. Retail Packaging & Barcodes', 'Vacuum Pouch ($0.00), Stock EVA (+$0.75+, MOQ 100), Rigid Box (+$1.45+, MOQ 500), Tin (1,000+)', 'Includes free FNSKU & CPSC 14+ labeling'],
      ['5. Compliance & Global Freight', 'US CPSC 16 CFR 1262 drop-tested retention, EU RoHS 3 & IATA PI-953 shielded cartons', 'DHL / FedEx / UPS / DDP Air & Sea']
    ],
    picksBadge: 'FLAGSHIP PRIVATE LABEL PICKS',
    picksTitle: '8 Proven Ready Molds Built for Branded DTC & Amazon FBA',
    picksCta: 'Review CPSC 16 CFR 1262 & IATA PI-953 Docs →',
    faqBadge: 'PRIVATE LABEL FAQ',
    faqTitle: 'Tooling, FNSKU Barcoding & Sampling Questions',
    serviceName: 'Private Label Metal Fidget OEM & Amazon FBA Manufacturing SOP',
    serviceDesc: 'Ready-mold private label metal fidget manufacturing ($0 tooling fee) for Amazon FBA and DTC EDC brands: 50W fiber laser OEM, custom EVA/gift packaging, FNSKU labeling, and CPSC compliance.',
    faqs: [
      { question: 'Does FidgetSupply build new custom molds from buyer 3D CAD drawings?', answer: 'No. FidgetSupply focuses 100% on Ready-Mold Light Customization across 140 existing active production molds (FS-001 through FS-150). That eliminates $3,000–$5,000 USD tooling capex and 45-day mold cutting delays so private label sellers launch faster.' },
      { question: 'What light customization options are available on existing metal fidget molds?', answer: 'We support 3 light-customization tiers: (1) Permanent logo engraving via 50W MOPA Fiber Laser (+$0.15–$0.30/pc, MOQ 100) or Deep Laser + Pantone Enamel Fill (+$0.35–$0.60/pc, MOQ 100–200); (2) Custom PVD, anodized, or stonewashed finishes (MOQ 300); (3) Branded Stock Black EVA Cases (MOQ 100), Rigid Gift Boxes (MOQ 500), or Window Tin Boxes (MOQ 1,000+).' },
      { question: 'How do Amazon FBA and Shopify sellers test quality before a private label bulk run?', answer: 'Sellers can order paid 1-piece blank evaluation samples across multiple SKUs (buyer pays unit fee + international shipping, non-refundable). For logo testing, paid custom pre-production samples take 10–15 days ($50 USD fiber laser / $80–$150 USD deep laser + color fill, plus shipping).' },
      { question: 'Do you apply Amazon FNSKU barcodes and small-parts / high-powered magnet warnings on Amazon metal fidget batches?', answer: 'Yes. For any private-label Amazon metal fidget spinner, stainless gyro, or magnetic slider order, we print and affix buyer-supplied Amazon FNSKU barcode stickers onto vacuum pouches, EVA zipper cases, or gift boxes alongside mandatory US CPSC 16 CFR Part 1262 magnet safety and 14+ age grading labels.' },
      { question: 'How are neodymium magnets secured for US CPSC 16 CFR Part 1262 FBA compliance?', answer: 'All magnetic models utilize precision blind counterbores, structural epoxy bonding, and mechanically fastened cover plates so magnets cannot liberate during accidental drops. We also stock 30+ 100% magnet-free mechanical fidgets.' },
      { question: 'What is the minimum order quantity to start a multi-SKU Amazon or DTC store?', answer: 'Blank stock starts at 50 pieces per SKU (with finish mixing supported), and private-label custom logo runs start at 100 pieces per SKU under one consolidated Fuzhou export invoice.' },
      { question: 'Can we customize surface coatings or colorways on existing ready molds?', answer: 'Yes. At MOQ 300 pieces per SKU, we customize existing-mold finishes including tactical matte black PVD, gunmetal, champagne gold, Type III hard anodizing (6063-T6 aluminum), and ceramic media stonewash.' },
      { question: 'Why are individual vacuum pouches included as standard on every SKU?', answer: 'Metal EDC alloys and precision R188 bearings are sensitive to ocean-transit humidity and salt air. Individual anti-oxidation vacuum pouches ($0.00 included at MOQ 50) protect surface PVD and steel bearings throughout warehousing and FBA storage.' },
      { question: 'What is the production lead time for private label OEM bulk batches?', answer: 'Blank unbranded stock (50+ pcs) completes factory dispatch prep from Fuzhou in 5–7 business days. Custom 50W fiber laser or deep color-fill OEM production (100+ pcs) completes in 10–15 business days after digital vector proof and sample confirmation.' },
      { question: 'How do magnetic air-freight shipments pass DHL/FedEx security under IATA PI-953?', answer: 'Master export cartons holding high-flux neodymium fidgets are lined with steel magnetic shielding sheets so surface stray magnetic flux measures below IATA PI-953 limits. Transit speed depends on carrier and destination customs.' }
    ]
  },
  de: {
    bcParent: 'Großhandelsmatrix',
    bcCurrent: 'Private Label OEM',
    badge1: 'PRIVATE LABEL & FBA OEM',
    badge2: '140 Serienformen · $0 Werkzeugkosten',
    kpis: [
      { label: 'Formenkosten', val: '$0.00 USD' },
      { label: 'Logo-MOQ', val: '100' },
      { label: 'FBA-Etiketten', val: 'FNSKU + CPSC' },
      { label: 'Wunschfarbe', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Private-Label-Angebot anfragen →',
    ctaSecondary: '1-Stück-Muster bestellen →',
    showcasePill: 'START OHNE FORMENBAU',
    showcaseMeta: ['50W Laserlogo', 'EVA-Etui MOQ 100', 'PI-953 Luftfracht'],
    geoTitle: 'Direktantwort: Metall-Fidget-Eigenmarke ohne Formkosten ($0) starten',
    geoAnswer: 'Mit FidgetSupply starten Amazon-FBA- und DTC-Marken über 140 bestehende Metallformen ($0 Werkzeugkosten): bezahlte 1-Stück-Blanko- oder 50W-Laser-Muster ($50 / $80–$150 zzgl. Versand) testen, ab 100 Stk. dauerhafte 50W-Lasergravur (+$0.15–$0.30/Stk.) oder Farbfüllung (+$0.35–$0.60/Stk.) wählen und mit Vakuumbeutel ($0), EVA-Etui (MOQ 100) oder Geschenkbox (MOQ 500) inklusive FNSKU- & CPSC-Etikett liefern lassen.',
    stageBadge: '5-PHASEN-LAUNCH-PLAN',
    stageTitle: 'Serienformen-OEM-Workflow & reale Werksmindestmengen',
    tableHeaders: ['Private-Label-Phase', 'Werksspezifikation & reale Kosten', 'MOQ / Vorlaufzeit'],
    tableRows: [
      ['1. Serienmodell-Auswahl', 'Aus 140 aktiven CNC- & Zamak-3-Formen wählen ($0.74–$470.77 EXW, $0 Formgebühr)', '50 Stk. Blankoware (5–7 Werktage Versandvorbereitung)'],
      ['2. Physische Musterprüfung', 'Bezahlte 1-Stück-Muster oder Custom-Laser ($50) / Tiefenlaser+Farbe ($80–$150) zzgl. Fracht', 'Ab 1 Stk. Blanko / 10–15 Tage Logomuster'],
      ['3. Dauerhafte Metallgravur', '50W MOPA-Faserlaser (+$0.15–$0.30/Stk.) oder Tiefenlaser+Emaille (+$0.35–$0.60/Stk.)', '100 Stk. (10–15 Werktage Werksfertigung)'],
      ['4. Verpackung & Barcodes', 'Vakuumbeutel ($0), Lager-EVA (+$0.75+, MOQ 100), Hartbox (+$1.45+, MOQ 500), Dose (1.000+)', 'Inklusive FNSKU- & CPSC-14+-Etikettierung'],
      ['5. Konformität & Export', 'CPSC 16 CFR 1262 Magnetsicherung, EU RoHS 3 & IATA PI-953 abgeschirmte Kartons', 'DHL / FedEx / UPS / DDP Luft & See']
    ],
    picksBadge: 'TOP PRIVATE-LABEL-MODELLE',
    picksTitle: '8 bewährte Serienformen für Eigenmarken & Amazon FBA',
    picksCta: 'CPSC 16 CFR 1262 & IATA PI-953 Prüfunterlagen →',
    faqBadge: 'PRIVATE LABEL FAQ',
    faqTitle: 'Häufige Fragen zu Formen, FNSKU-Etiketten & Mustern',
    serviceName: 'Private Label Metall-Fidget OEM & Amazon FBA Fertigung',
    serviceDesc: 'Serienformen-OEM für Eigenmarken ($0 Formkosten): 50W-Faserlaser, EVA- & Geschenkverpackung, FNSKU-Etiketten und CPSC-Konformität.',
    faqs: [
      { question: 'Fertigt FidgetSupply komplett neue Formen nach eigenen 3D-CAD-Zeichnungen?', answer: 'Nein. Wir konzentrieren uns zu 100 % auf die Veredelung bestehender 140 aktiver Serienformen (FS-001 bis FS-150). Dadurch entfallen $3.000–$5.000 Werkzeugkosten und 45 Tage Formenbau.' },
      { question: 'Welche Veredelungsstufen sind auf Serienformen möglich?', answer: 'Drei Stufen: 1) Dauerhafte 50W-Faserlaser-Gravur (+$0.15–$0.30/Stk., MOQ 100) oder Tiefenlaser mit Pantone-Farbfüllung (+$0.35–$0.60/Stk.); 2) Wunsch-PVD oder Eloxal ab 300 Stk.; 3) Lager-EVA-Etuis (MOQ 100), Hartboxen (MOQ 500) oder Sichtfenster-Metalldosen (MOQ 1.000+).' },
      { question: 'Wie testen FBA- und Shop-Betreiber die Qualität vor der Großbestellung?', answer: 'Über bezahlte 1-Stück-Blankomuster (Stückpreis + internationaler Kurierversand durch den Käufer, nicht erstattungsfähig). Individuelle Logomuster benötigen 10–15 Tage ($50 Standardlaser / $80–$150 Tiefenlaser + Farbe).' },
      { question: 'Bringen Sie Amazon-FNSKU-Barcodes und CPSC-Warnhinweise direkt ab Werk an?', answer: 'Ja. Wir drucken und verkleben Ihre Amazon-FNSKU-Etiketten sowie die erforderlichen CPSC-16-CFR-1262- und 14+-Alterskennzeichnungen auf Vakuumbeuteln, EVA-Etuis oder Boxen.' },
      { question: 'Wie werden Neodym-Magnete für US CPSC 16 CFR Part 1262 gesichert?', answer: 'Alle magnetischen Modelle nutzen Sackloch-Senkungen, Strukturkleber und mechanisch verschraubte Deckplatten; zusätzlich führen wir über 30 völlig magnetfreie Mechanikmodelle.' },
      { question: 'Welche Mindestbestellmenge gilt für den Mehr-SKU-Markenstart?', answer: 'Blankoware ab 50 Stück pro SKU (Farbmix möglich), individuelle Lasergravur ab 100 Stück pro SKU auf einer Sammelrechnung ab Exportdrehkreuz Fuzhou.' },
      { question: 'Sind individuelle Beschichtungen oder Farben auf Serienformen möglich?', answer: 'Ja, ab 300 Stück pro SKU fertigen wir mattschwarzes PVD, Gunmetal, Champagner-Gold, Typ-III-Harteloxal (6063 Alu) sowie Stonewash-Finishes.' },
      { question: 'Warum wird jeder Artikel serienmäßig im Vakuumbeutel versiegelt?', answer: 'Metalllegierungen und R188-Kugellager reagieren empfindlich auf Seeluft-Feuchtigkeit. Der kostenlose Oxidationsschutz-Vakuumbeutel schützt Finish und Lagerlauf während Transport und FBA-Einlagerung.' },
      { question: 'Wie lange dauert die Werksproduktion für Private-Label-Chargen?', answer: 'Blankoware (50+ Stk.) ist in 5–7 Werktagen versandbereit; kundenspezifische 50W-Laser-Chargen (100+ Stk.) benötigen 10–15 Werktage nach Vektor-Freigabe.' },
      { question: 'Wie bestehen magnetische Luftfrachtsendungen die IATA-PI-953-Prüfung?', answer: 'Export-Umkartons mit Neodym-Fidgets werden mit magnetischen Stahl-Abschirmfolien ausgekleidet, sodass die Außenstrahlung die IATA-PI-953-Grenzwerte unterschreitet.' }
    ]
  },
  fr: {
    bcParent: 'Matrice Grossiste',
    bcCurrent: 'OEM Marque Privée',
    badge1: 'MARQUE BLANCHE & FBA OEM',
    badge2: '140 Moules Prêts · $0 Outillage',
    kpis: [
      { label: 'Frais de moule', val: '$0.00 USD' },
      { label: 'MOQ Logo OEM', val: '100' },
      { label: 'Étiquetage FBA', val: 'FNSKU + CPSC' },
      { label: 'Finition perso', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Demander un devis OEM →',
    ctaSecondary: 'Commander un échantillon 1 pce →',
    showcasePill: 'LANCEMENT SANS MOULE',
    showcaseMeta: ['Laser 50W', 'Étui EVA MOQ 100', 'Fret PI-953'],
    geoTitle: 'Réponse directe : Lancer une gamme de fidgets métal en marque blanche à $0 de moule',
    geoAnswer: 'FidgetSupply permet aux marques Amazon FBA et DTC de personnaliser 140 moules prêts à l’emploi ($0 de frais d’outillage) : validez par échantillon payant 1 pièce vierge ou laser ($50/$80–$150 + port), gravez au laser fibre 50W (+$0.15–$0.30/pce) dès 100 unités et conditionnez en étui EVA (MOQ 100) ou coffret rigide (MOQ 500) avec étiquettes FNSKU & CPSC 16 CFR 1262.',
    stageBadge: 'FEUILLE DE ROUTE 5 ÉTAPES',
    stageTitle: 'Flux de production OEM sur moules existants & MOQ d’usine',
    tableHeaders: ['Étape Marque Privée', 'Spécification usine & tarifs réels', 'MOQ / Délai fabrication'],
    tableRows: [
      ['1. Sélection des SKU prêts', 'Choix parmi 140 moules CNC & Zamak-3 actifs ($0.74–$470.77 EXW, $0 moule)', '50 pcs vierges (préparation 5–7 jours ouvrés)'],
      ['2. Évaluation physique', 'Échantillon 1 pce payant ou prototype laser ($50) / émail ($80–$150) + fret acheteur', '1 pce vierge / 10–15 jours prototype logo'],
      ['3. Marquage métal permanent', 'Laser fibre MOPA 50W (+$0.15–$0.30/pce) ou gravure profonde + émail (+$0.35–$0.60/pce)', '100 pcs (10–15 jours ouvrés en usine)'],
      ['4. Emballage & Codes-barres', 'Sachet vide ($0), Étui EVA (+$0.75+, MOQ 100), Coffret (+$1.45+, MOQ 500), Boîte métal (1 000+)', 'Pose FNSKU & avertissements CPSC 14+ incluse'],
      ['5. Conformité & Expédition', 'Sécurité CPSC 16 CFR 1262, EU RoHS 3 & cartons blindés IATA PI-953', 'DHL / FedEx / UPS / DDP Air & Mer']
    ],
    picksBadge: 'MODÈLES PHARES OEM',
    picksTitle: '8 moules éprouvés conçus pour les marques DTC et Amazon FBA',
    picksCta: 'Consulter les certificats CPSC & IATA PI-953 →',
    faqBadge: 'FAQ MARQUE PRIVÉE',
    faqTitle: 'Questions sur l’outillage, les étiquettes FNSKU et les échantillons',
    serviceName: 'Fabrication OEM Fidgets Métal Marque Privée & Amazon FBA',
    serviceDesc: 'Production OEM sur 140 moules prêts ($0 outillage) : gravure laser 50W, étuis EVA/coffrets, étiquetage FNSKU et conformité CPSC.',
    faqs: [
      { question: 'Fabriquez-vous de nouveaux moules sur mesure à partir de plans 3D CAD ?', answer: 'Non. FidgetSupply se consacre à 100 % à la personnalisation sur nos 140 moules actifs (FS-001 à FS-150), évitant $3 000–$5 000 d’outillage et 45 jours d’attente.' },
      { question: 'Quelles options de personnalisation OEM sont proposées sur moules prêts ?', answer: 'Trois niveaux : gravure laser fibre 50W (+$0.15–$0.30/pce, MOQ 100) ou gravure profonde + émail Pantone (+$0.35–$0.60/pce) ; finitions PVD/anodisées dès 300 pcs ; étuis EVA (MOQ 100), coffrets rigides (MOQ 500) ou boîtes fer-blanc (MOQ 1 000+).' },
      { question: 'Comment tester la qualité avant un lot Amazon FBA ou Shopify ?', answer: 'Via des échantillons payants à l’unité (coût pièce + transport international à charge de l’acheteur, non remboursables). Un prototype laser personnalisé demande 10–15 jours ($50 laser standard / $80–$150 émail + port).' },
      { question: 'Posez-vous les codes-barres Amazon FNSKU et avertissements magnétiques ?', answer: 'Oui, nous imprimons et apposons vos étiquettes FNSKU ainsi que les mentions réglementaires CPSC 16 CFR 1262 et 14+ sur chaque sachet vide, étui EVA ou boîte.' },
      { question: 'Comment les aimants N52 sont-ils sécurisés selon CPSC 16 CFR 1262 ?', answer: 'Les logements borgnes fraisés, le collage époxy structurel et les capots vissés empêchent tout détachement lors des chutes ; plus de 30 modèles purement mécaniques sans aimant sont aussi disponibles.' },
      { question: 'Quel est le MOQ pour lancer une boutique multi-SKU ?', answer: 'Le stock vierge démarre à 50 pièces par SKU et la gravure laser personnalisée à 100 pièces par SKU sous une seule facture export Fuzhou.' },
      { question: 'Peut-on personnaliser les revêtements PVD ou coloris ?', answer: 'Oui, à partir de 300 pièces par SKU pour les finitions PVD noir mat, gunmetal, or champagne, anodisation dure Type III ou délavage céramique.' },
      { question: 'Pourquoi chaque pièce est-elle emballée sous vide par défaut ?', answer: 'Les alliages métalliques et roulements R188 craignent l’humidité maritime. Le sachet sous vide anti-oxydation ($0.00 dès MOQ 50) préserve le fini jusqu’aux entrepôts FBA.' },
      { question: 'Quel est le délai de production pour une commande OEM ?', answer: 'Préparation usine de 5–7 jours ouvrés en stock vierge (50+ pcs) et 10–15 jours ouvrés pour les lots gravés au laser 50W (100+ pcs) après validation BAT.' },
      { question: 'Comment les colis magnétiques passent-ils le contrôle aérien IATA PI-953 ?', answer: 'Les cartons maîtres d’export sont doublés de tôles d’acier de blindage magnétique maintenant le champ résiduel sous le seuil IATA PI-953.' }
    ]
  },
  nl: {
    bcParent: 'Groothandelsmatrix',
    bcCurrent: 'Private Label OEM',
    badge1: 'PRIVATE LABEL & FBA OEM',
    badge2: '140 Vaste Mallen · $0 Matrijskosten',
    kpis: [
      { label: 'Nieuwe matrijs', val: '$0.00 USD' },
      { label: 'Logo-MOQ', val: '100' },
      { label: 'FBA-labels', val: 'FNSKU + CPSC' },
      { label: 'Eigen kleur', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Private-label offerte aanvragen →',
    ctaSecondary: '1-stuk proefmonster bestellen →',
    showcasePill: 'START ZONDER MATRIJSKOSTEN',
    showcaseMeta: ['50W Laserlogo', 'EVA-etui MOQ 100', 'PI-953 Luchtvracht'],
    geoTitle: 'Direct antwoord: Een eigen metalen fidgetmerk starten zonder matrijskosten ($0)',
    geoAnswer: 'Via FidgetSupply lanceert u een eigen Amazon FBA- of webshopmerk met 140 bestaande productie-mallen ($0 matrijskosten): test eerst met een betaald 1-stuk blanco- of lasermonster ($50/$80–$150 + vracht), kies vanaf 100 stuks voor permanente 50W fiberlaser (+$0.15–$0.30/st.) en verpak in EVA-etuis (MOQ 100) of luxe doosjes (MOQ 500) met FNSKU- & CPSC-labels.',
    stageBadge: '5-STAPPEN LANCERINGSPLAN',
    stageTitle: 'Ready-Mold Private Label productieproces & fabrieks-MOQ',
    tableHeaders: ['Private-Label Fase', 'Fabrieksspecificatie & echte tarieven', 'MOQ / Doorlooptijd'],
    tableRows: [
      ['1. Selectie bestaande mallen', 'Kies uit 140 actieve CNC- & Zamak-3-modellen ($0.74–$470.77 EXW, $0 matrijs)', '50 st. blanco voorraad (5–7 werkdagen gereed)'],
      ['2. Fysieke monstercontrole', 'Betaald 1-stuk blanco monster of logomonster ($50 laser / $80–$150 kleur) + vracht', '1 st.+ blanco / 10–15 dagen logomonster'],
      ['3. Permanente metaalgravure', '50W MOPA fiberlaser (+$0.15–$0.30/st.) of dieplaser + emaille (+$0.35–$0.60/st.)', '100 st. (10–15 werkdagen productie)'],
      ['4. Verpakking & Barcodes', 'Vacuümzak ($0), EVA-case (+$0.75+, MOQ 100), Giftbox (+$1.45+, MOQ 500), Blik (1.000+)', 'Inclusief FNSKU & CPSC 14+ labeling'],
      ['5. Compliance & Verzending', 'CPSC 16 CFR 1262 magneetborging, EU RoHS 3 & IATA PI-953 afgeschermde dozen', 'DHL / FedEx / UPS / DDP Lucht & Zee']
    ],
    picksBadge: 'POPULAIRE PRIVATE-LABEL KEUZES',
    picksTitle: '8 bewezen OEM-mallen voor eigen merken & Amazon FBA',
    picksCta: 'Bekijk CPSC 16 CFR 1262 & IATA PI-953 documentatie →',
    faqBadge: 'PRIVATE LABEL FAQ',
    faqTitle: 'Vragen over mallen, FNSKU-barcodes en proefmonsters',
    serviceName: 'Private Label Metalen Fidget OEM & Amazon FBA Productie',
    serviceDesc: 'Productie op 140 bestaande metalen mallen ($0 matrijskosten) met 50W fiberlaser, EVA/geschenkverpakking, FNSKU-labeling en CPSC-compliance.',
    faqs: [
      { question: 'Bouwt FidgetSupply volledig nieuwe spuitgietmallen op basis van 3D CAD?', answer: 'Nee. Wij werken 100% op 140 bestaande productiemallen (FS-001 t/m FS-150), zodat u $3.000–$5.000 matrijskosten en 45 dagen ontwikkeltijd bespaart.' },
      { question: 'Welke lichte OEM-aanpassingen zijn mogelijk op bestaande mallen?', answer: '1) Permanente 50W fiberlaser (+$0.15–$0.30/st., MOQ 100) of dieplaser + Pantone-emaille (+$0.35–$0.60/st.); 2) Eigen PVD- of geanodiseerde afwerking (MOQ 300); 3) EVA-etuis (MOQ 100), giftboxen (MOQ 500) of blikken (MOQ 1.000+).' },
      { question: 'Hoe testen verkopers de kwaliteit vóór een bulkorder?', answer: 'Met betaalde 1-stuk evaluatiemonsters (stukprijs + internationale koerier voor rekening koper, niet-restitueerbaar). Logomonsters kosten 10–15 dagen ($50 laser / $80–$150 kleurvulling).' },
      { question: 'Plakken jullie Amazon FNSKU-barcodes en magneetwaarschuwingen?', answer: 'Ja, wij printen en bevestigen uw FNSKU-stickers samen met verplichte CPSC 16 CFR 1262 en 14+ waarschuwingen op elke verpakking.' },
      { question: 'Hoe zijn magneten geborgd volgens CPSC 16 CFR Part 1262?', answer: 'Door blinde uitsparingen, structurele epoxyhars en geschroefde afdekplaten; daarnaast hebben we ruim 30 volledig magneetvrije mechanische fidgets.' },
      { question: 'Wat is de minimale afname voor een multi-SKU winkelstart?', answer: 'Blanco voorraad start bij 50 stuks per SKU en eigen logo-productie bij 100 stuks per SKU.' },
      { question: 'Kunnen coatings of kleuren op bestaande mallen worden aangepast?', answer: 'Ja, vanaf 300 stuks per SKU leveren wij o.a. matzwart PVD, gunmetal, Type III hard anodiseren en stonewash.' },
      { question: 'Waarom is een vacuümzak standaard inbegrepen bij elk model?', answer: 'Legeringsoppervlakken en R188-lagers blijven door de anti-oxidatie vacuümzak ($0.00 bij MOQ 50) beschermd tegen zeelucht en opslagvocht.' },
      { question: 'Wat is de productietijd voor OEM bulkbatches?', answer: 'Blanco voorraad (50+ st.) is in 5–7 werkdagen verzendklaar; maatwerk 50W-laserorders (100+ st.) duren 10–15 werkdagen na proefdruk.' },
      { question: 'Hoe passeren magnetische zendingen de IATA PI-953 luchtvaartcontrole?', answer: 'Exportdozen worden gevoerd met stalen magnetische afschermplaten waardoor strooiveld onder de IATA PI-953-grens blijft.' }
    ]
  },
  es: {
    bcParent: 'Matriz Mayorista',
    bcCurrent: 'OEM Marca Blanca',
    badge1: 'MARCA BLANCA & FBA OEM',
    badge2: '140 Moldes Listos · $0 Molde',
    kpis: [
      { label: 'Costo de molde', val: '$0.00 USD' },
      { label: 'MOQ Logo OEM', val: '100' },
      { label: 'Etiquetado FBA', val: 'FNSKU + CPSC' },
      { label: 'Acabado propio', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Solicitar cotización OEM →',
    ctaSecondary: 'Pedir muestra de 1 unidad →',
    showcasePill: 'LANZAMIENTO SIN COSTO DE MOLDE',
    showcaseMeta: ['Láser 50W', 'Estuche EVA MOQ 100', 'Carga aérea PI-953'],
    geoTitle: 'Respuesta directa: Cómo lanzar tu marca de fidgets metálicos con $0 en moldes',
    geoAnswer: 'Con FidgetSupply puedes escalar tu marca en Amazon FBA o DTC usando 140 moldes amortizados ($0 de inversión en herramental): solicita muestras pagadas de 1 pieza ($50 láser / $80–$150 esmalte + envío), graba con láser de fibra 50W (+$0.15–$0.30/ud.) desde 100 unidades y empaca con estuches EVA (MOQ 100) o cajas rígidas (MOQ 500) con etiquetado FNSKU y CPSC.',
    stageBadge: 'HOJA DE RUTA EN 5 ETAPAS',
    stageTitle: 'Flujo OEM en moldes existentes y MOQ reales de fábrica',
    tableHeaders: ['Etapa de Marca Blanca', 'Especificación y tarifas de fábrica', 'MOQ / Tiempo producción'],
    tableRows: [
      ['1. Selección de SKU listo', 'Elige entre 140 moldes CNC y Zamak-3 ($0.74–$470.77 EXW, $0 en moldes)', '50 uds. stock sin logo (5–7 días hábiles prep.)'],
      ['2. Verificación física', 'Muestra pagada 1 ud. o muestra láser ($50) / esmalte ($80–$150) + flete comprador', '1 ud.+ estándar / 10–15 días muestra con logo'],
      ['3. Marcado metálico permanente', 'Láser fibra MOPA 50W (+$0.15–$0.30/ud.) o bajo relieve + esmalte (+$0.35–$0.60/ud.)', '100 uds. (10–15 días hábiles de fabricación)'],
      ['4. Empaque y códigos FBA', 'Bolsa vacío ($0), Estuche EVA (+$0.75+, MOQ 100), Caja rígida (+$1.45+, MOQ 500), Lata (1,000+)', 'Incluye pegado FNSKU y sello CPSC 14+'],
      ['5. Cumplimiento y logística', 'Retención CPSC 16 CFR 1262, EU RoHS 3 y cajas blindadas IATA PI-953', 'DHL / FedEx / UPS / DDP Aéreo y Marítimo']
    ],
    picksBadge: 'MODELOS ESTRELLA OEM',
    picksTitle: '8 moldes probados para marcas propias y Amazon FBA',
    picksCta: 'Consultar documentos CPSC 16 CFR 1262 e IATA PI-953 →',
    faqBadge: 'FAQ MARCA BLANCA',
    faqTitle: 'Preguntas sobre moldes, códigos FNSKU y muestras',
    serviceName: 'Fabricación OEM Fidgets Metálicos Marca Blanca y Amazon FBA',
    serviceDesc: 'Producción OEM sobre 140 moldes existentes ($0 herramental): láser 50W, empaques EVA/regalo, etiquetado FNSKU y cumplimiento CPSC.',
    faqs: [
      { question: '¿Fabrican moldes nuevos desde archivos 3D CAD del comprador?', answer: 'No. Nos especializamos 100 % en personalización sobre 140 moldes activos existentes (FS-001 a FS-150), evitando $3,000–$5,000 USD de inversión y 45 días de mecanizado.' },
      { question: '¿Qué opciones de personalización ligera existen sobre moldes listos?', answer: '1) Grabado láser fibra 50W (+$0.15–$0.30/ud., MOQ 100) o grabado profundo con esmalte Pantone (+$0.35–$0.60/ud.); 2) Acabados PVD o anodizados (MOQ 300); 3) Estuches EVA (MOQ 100), cajas rígidas (MOQ 500) o latas metálicas (MOQ 1,000+).' },
      { question: '¿Cómo verifican la calidad los vendedores FBA antes de comprar al por mayor?', answer: 'Pidiendo muestras físicas pagadas de 1 pieza (costo unitario + envío courier asumido por el comprador, no reembolsable). La muestra con logo toma 10–15 días ($50 láser / $80–$150 color + flete).' },
      { question: '¿Pegan etiquetas Amazon FNSKU y advertencias de imanes CPSC?', answer: 'Sí, imprimimos y colocamos sus códigos de barras FNSKU y las etiquetas obligatorias CPSC 16 CFR 1262 (14+) en bolsas al vacío, estuches o cajas.' },
      { question: '¿Cómo fijan los imanes para cumplir con US CPSC 16 CFR 1262?', answer: 'Mediante alojamientos ciegos CNC, resina epoxi estructural y tapas atornilladas; además ofrecemos más de 30 modelos 100 % libres de imanes.' },
      { question: '¿Cuál es el pedido mínimo para lanzar una tienda multi-SKU?', answer: 'Desde 50 unidades por SKU en acabado estándar y 100 unidades por SKU con logo personalizado en una factura consolidada desde Fuzhou.' },
      { question: '¿Se pueden personalizar colores PVD o anodizados?', answer: 'Sí, desde 300 unidades por SKU personalizamos PVD negro mate, gunmetal, oro champán, anodizado duro Tipo III y stonewash.' },
      { question: '¿Por qué todos los modelos incluyen bolsa sellada al vacío?', answer: 'Protege las aleaciones metálicas y los rodamientos R188 contra la humedad y oxidación durante el tránsito marítimo y almacenamiento FBA ($0.00 incluido).' },
      { question: '¿Cuál es el plazo de fabricación OEM?', answer: 'El stock estándar (50+ uds.) se prepara en 5–7 días hábiles y los lotes con láser 50W (100+ uds.) en 10–15 días hábiles tras aprobar el diseño.' },
      { question: '¿Cómo cumplen los envíos aéreos magnéticos con IATA PI-953?', answer: 'Las cajas máster de exportación llevan láminas de blindaje de acero para mantener el flujo magnético por debajo de los límites IATA PI-953.' }
    ]
  },
  it: {
    bcParent: 'Listino Ingrosso',
    bcCurrent: 'Private Label OEM',
    badge1: 'PRIVATE LABEL & FBA OEM',
    badge2: '140 Stampi Pronti · $0 Stampo',
    kpis: [
      { label: 'Costo stampo', val: '$0.00 USD' },
      { label: 'MOQ Logo OEM', val: '100' },
      { label: 'Etichette FBA', val: 'FNSKU + CPSC' },
      { label: 'Finitura custom', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Richiedi preventivo Private Label →',
    ctaSecondary: 'Ordina campione 1 pezzo →',
    showcasePill: 'LANCIO A COSTO STAMPO ZERO',
    showcaseMeta: ['Laser 50W', 'Custodia EVA MOQ 100', 'Spedizione PI-953'],
    geoTitle: 'Risposta diretta: Come lanciare un brand di fidget in metallo a $0 costi stampo',
    geoAnswer: 'Con FidgetSupply i brand Amazon FBA e DTC scalano su 140 stampi già ammortizzati ($0 costo attrezzatura): testa con campioni a pagamento da 1 pz o con logo laser ($50 / $80–$150 + spedizione), incidi con laser fibra 50W (+$0.15–$0.30/pz) da 100 pz e confeziona in custodie EVA (MOQ 100) o cofanetti rigidi (MOQ 500) con etichettatura FNSKU e CPSC 16 CFR 1262.',
    stageBadge: 'PIANO DI LANCIO IN 5 FASI',
    stageTitle: 'Flusso produttivo Private Label su stampi pronti e MOQ di fabbrica',
    tableHeaders: ['Fase Private Label', 'Specifiche di fabbrica e costi reali', 'MOQ / Tempi di produzione'],
    tableRows: [
      ['1. Scelta modelli pronti', 'Scegli tra 140 stampi CNC e Zamak-3 attivi ($0.74–$470.77 EXW, $0 stampo)', '50 pz. neutro (5–7 giorni lavorativi prep.)'],
      ['2. Verifica fisica campioni', 'Campione 1 pz. o campione laser ($50) / smalto ($80–$150) + corriere acquirente', '1 pz.+ neutro / 10–15 gg campione logo'],
      ['3. Marcatura laser permanente', 'Laser fibra MOPA 50W (+$0.15–$0.30/pz) o incisione profonda + smalto (+$0.35–$0.60/pz)', '100 pz. (10–15 giorni lavorativi)'],
      ['4. Packaging & FNSKU', 'Bustina sottovuoto ($0), EVA (+$0.75+, MOQ 100), Rigida (+$1.45+, MOQ 500), Latta (1.000+)', 'Include applicazione FNSKU & CPSC 14+'],
      ['5. Conformità & Trasporto', 'Ritenzione CPSC 16 CFR 1262, EU RoHS 3 & cartoni schermati IATA PI-953', 'DHL / FedEx / UPS / DDP Aereo & Mare']
    ],
    picksBadge: 'MODELLI DI PUNTA OEM',
    picksTitle: '8 stampi collaudati per brand proprietari e Amazon FBA',
    picksCta: 'Consulta certificati CPSC & IATA PI-953 →',
    faqBadge: 'FAQ PRIVATE LABEL',
    faqTitle: 'Domande su stampi, codici FNSKU e campionatura',
    serviceName: 'Produzione OEM Fidget in Metallo Private Label & Amazon FBA',
    serviceDesc: 'Manifattura Private Label su 140 stampi esistenti ($0 stampo): laser fibra 50W, packaging EVA/regalo, etichette FNSKU e conformità CPSC.',
    faqs: [
      { question: 'Realizzate nuovi stampi da zero partendo da file 3D CAD?', answer: 'No. Lavoriamo esclusivamente su 140 stampi pronti attivi (FS-001 – FS-150), eliminando $3.000–$5.000 di attrezzatura e 45 giorni di lavorazione.' },
      { question: 'Quali personalizzazioni OEM sono disponibili su stampi pronti?', answer: 'Laser fibra 50W (+$0.15–$0.30/pz, MOQ 100) o incisione profonda con smalto Pantone (+$0.35–$0.60/pz); finiture PVD/anodizzate da 300 pz; custodie EVA (MOQ 100), box rigidi (MOQ 500) o scatole metalliche (1.000+).' },
      { question: 'Come testare la qualità prima di un lotto Amazon FBA?', answer: 'Ordinando campioni fisici a pagamento da 1 pezzo (costo pezzo + corriere internazionale non rimborsabili). I campioni personalizzati richiedono 10–15 giorni ($50 laser / $80–$150 smalto).' },
      { question: 'Applicate codici a barre Amazon FNSKU e avvisi magneti CPSC?', answer: 'Sì, stampiamo e applichiamo le etichette FNSKU e le avvertenze CPSC 16 CFR 1262 (14+) su buste, custodie EVA o scatole.' },
      { question: 'Come vengono bloccati i magneti per la norma CPSC 16 CFR 1262?', answer: 'Con sedi cieche di precisione, resina epossidica strutturale e piastre avvitate; disponiamo inoltre di oltre 30 modelli meccanici privi di magneti.' },
      { question: 'Qual è la quantità minima per lanciare un assortimento multi-SKU?', answer: 'Stock neutro da 50 pezzi per SKU e lotti con logo personalizzato da 100 pezzi per SKU.' },
      { question: 'È possibile personalizzare i rivestimenti superficiali?', answer: 'Sì, da 300 pezzi per SKU personalizziamo PVD nero opaco, gunmetal, oro champagne, anodizzazione dura Tipo III e stonewash.' },
      { question: 'Perché ogni pezzo è sigillato sottovuoto di serie?', answer: 'Protegge leghe metalliche e cuscinetti R188 dall’umidità marina e dallo stoccaggio prolungato ($0.00 incluso).' },
      { question: 'Quali sono i tempi di produzione OEM?', answer: '5–7 giorni lavorativi per stock neutro (50+ pz) e 10–15 giorni lavorativi per incisione laser 50W (100+ pz) dopo approvazione bozza.' },
      { question: 'Come superano i controlli aerei IATA PI-953 gli articoli magnetici?', answer: 'I cartoni master da esportazione sono schermati internamente con lamine d’acciaio sotto la soglia IATA PI-953.' }
    ]
  },
  pt: {
    bcParent: 'Matriz Atacado',
    bcCurrent: 'OEM Marca Própria',
    badge1: 'MARCA PRÓPRIA & FBA OEM',
    badge2: '140 Moldes Prontos · $0 Molde',
    kpis: [
      { label: 'Taxa de molde', val: '$0.00 USD' },
      { label: 'MOQ Logo OEM', val: '100' },
      { label: 'Etiquetas FBA', val: 'FNSKU + CPSC' },
      { label: 'Acabamento próprio', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Solicitar cotação OEM →',
    ctaSecondary: 'Pedir amostra de 1 unidade →',
    showcasePill: 'LANÇAMENTO SEM CUSTO DE MOLDE',
    showcaseMeta: ['Laser 50W', 'Estojo EVA MOQ 100', 'Frete Aéreo PI-953'],
    geoTitle: 'Resposta direta: Como lançar marca própria de fidgets metálicos com $0 em moldes',
    geoAnswer: 'Com a FidgetSupply, marcas Amazon FBA e DTC escalam usando 140 moldes existentes ($0 de ferramental): teste amostras pagas de 1 unidade ($50 laser / $80–$150 esmalte + frete), grave a laser 50W (+$0.15–$0.30/un.) a partir de 100 un. e embale em estojos EVA (MOQ 100) ou caixas rígidas (MOQ 500) com etiquetas FNSKU e CPSC.',
    stageBadge: 'ROTEIRO DE 5 ETAPAS',
    stageTitle: 'Fluxo OEM em moldes prontos e MOQs reais de fábrica',
    tableHeaders: ['Etapa Marca Própria', 'Especificação e valores de fábrica', 'MOQ / Prazo de produção'],
    tableRows: [
      ['1. Seleção de moldes prontos', '140 moldes CNC e Zamak-3 ativos ($0.74–$470.77 EXW, $0 em ferramental)', '50 un. estoque liso (5–7 dias úteis prep.)'],
      ['2. Verificação física', 'Amostra paga 1 un. ou protótipo laser ($50) / esmalte ($80–$150) + frete comprador', '1 un.+ padrão / 10–15 dias amostra logo'],
      ['3. Gravação metálica permanente', 'Laser fibra MOPA 50W (+$0.15–$0.30/un.) ou gravação profunda + esmalte (+$0.35–$0.60/un.)', '100 un. (10–15 dias úteis de produção)'],
      ['4. Embalagem & Códigos FBA', 'Saco vácuo ($0), Estojo EVA (+$0.75+, MOQ 100), Caixa rígida (+$1.45+, MOQ 500), Lata (1.000+)', 'Inclui aplicação FNSKU e selo CPSC 14+'],
      ['5. Conformidade & Logística', 'Retenção CPSC 16 CFR 1262, EU RoHS 3 e caixas blindadas IATA PI-953', 'DHL / FedEx / UPS / DDP Aéreo e Marítimo']
    ],
    picksBadge: 'DESTAQUES MARCA PRÓPRIA',
    picksTitle: '8 moldes comprovados para marcas próprias e Amazon FBA',
    picksCta: 'Ver documentos CPSC 16 CFR 1262 e IATA PI-953 →',
    faqBadge: 'FAQ MARCA PRÓPRIA',
    faqTitle: 'Dúvidas sobre moldes, códigos FNSKU e amostras',
    serviceName: 'Fabricação OEM Fidgets Metálicos Marca Própria & FBA',
    serviceDesc: 'Produção OEM em 140 moldes prontos ($0 molde): laser 50W, estojos EVA e caixas, etiquetagem FNSKU e conformidade CPSC.',
    faqs: [
      { question: 'A FidgetSupply cria moldes exclusivos do zero via CAD 3D?', answer: 'Não. Operamos 100% com personalização leve em 140 moldes ativos (FS-001 a FS-150), eliminando $3.000–$5.000 de ferramental e 45 dias de espera.' },
      { question: 'Quais customizações OEM existem nos moldes prontos?', answer: 'Laser fibra 50W (+$0.15–$0.30/un., MOQ 100) ou baixo-relevo com esmalte Pantone (+$0.35–$0.60/un.); banhos PVD/anodizados a partir de 300 un.; estojos EVA (MOQ 100), caixas rígidas (MOQ 500) ou latas (MOQ 1.000+).' },
      { question: 'Como avaliar a qualidade antes de um lote FBA ou e-commerce?', answer: 'Via amostras pagas de 1 unidade (valor unitário + frete courier pagos pelo comprador, não reembolsáveis). Amostra personalizada leva 10–15 dias ($50 laser / $80–$150 cor).' },
      { question: 'Vocês aplicam etiquetas Amazon FNSKU e avisos de segurança?', answer: 'Sim, imprimimos e colamos seus códigos FNSKU e avisos CPSC 16 CFR 1262 (14+) nas embalagens individuais.' },
      { question: 'Como os ímãs são fixados para cumprir a CPSC 16 CFR 1262?', answer: 'Por alojamentos fresados cegos, epóxi estrutural e tampas parafusadas; também temos mais de 30 modelos mecânicos sem ímãs.' },
      { question: 'Qual o MOQ para iniciar uma loja multi-SKU?', answer: '50 peças por SKU sem gravação e 100 peças por SKU com logotipo personalizado na mesma fatura de exportação.' },
      { question: 'É possível personalizar cores PVD ou anodização?', answer: 'Sim, a partir de 300 peças por SKU para PVD preto fosco, gunmetal, champagne gold, anodização Tipo III e stonewash.' },
      { question: 'Por que o saco a vácuo acompanha todos os modelos?', answer: 'Evita oxidação de ligas metálicas e rolamentos R188 durante o transporte marítimo e armazenamento ($0.00 incluído).' },
      { question: 'Qual o prazo de produção OEM?', answer: '5–7 dias úteis para estoque liso (50+ un.) e 10–15 dias úteis para lotes gravados a laser 50W (100+ un.).' },
      { question: 'Como cargas magnéticas passam na triagem aérea IATA PI-953?', answer: 'As caixas máster recebem revestimento interno com chapas de blindagem magnética dentro do limite IATA PI-953.' }
    ]
  },
  sv: {
    bcParent: 'Grossistmatris',
    bcCurrent: 'Private Label OEM',
    badge1: 'PRIVATE LABEL & FBA OEM',
    badge2: '140 Färdiga Formar · $0 Verktyg',
    kpis: [
      { label: 'Ny formkostnad', val: '$0.00 USD' },
      { label: 'Logo-MOQ', val: '100' },
      { label: 'FBA-märkning', val: 'FNSKU + CPSC' },
      { label: 'Egen finish', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Begär Private Label-offert →',
    ctaSecondary: 'Beställ 1-st provexemplar →',
    showcasePill: 'STARTA UTAN VERKTYGSKOSTNAD',
    showcaseMeta: ['50W Laserlogo', 'EVA-fodral MOQ 100', 'PI-953 Flygfrakt'],
    geoTitle: 'Direktsvar: Starta eget metallfidget-varumärke med $0 formkostnad',
    geoAnswer: 'Med FidgetSupply lanserar varumärken och Amazon FBA-säljare via 140 befintliga formar ($0 verktygsavgift): beställ betalt 1-st prov eller laserprov ($50/$80–$150 + frakt), gravera med 50W fiberlaser (+$0.15–$0.30/st) från 100 st och leverera i EVA-fodral (MOQ 100) eller presentask (MOQ 500) med FNSKU- & CPSC-etiketter.',
    stageBadge: '5-STEGS LANSERINGSPLAN',
    stageTitle: 'OEM-arbetsflöde på färdiga formar & fabrikens MOQ-nivåer',
    tableHeaders: ['Private Label-fas', 'Fabriksspecifikation & riktiga priser', 'MOQ / Ledtid'],
    tableRows: [
      ['1. Val av färdig SKU-form', 'Välj bland 140 aktiva CNC- & Zamak-3-formar ($0.74–$470.77 EXW, $0 form)', '50 st neutral (5–7 arbetsdagar förberedelse)'],
      ['2. Fysisk provkontroll', 'Betalt 1-st neutralt prov eller laserprov ($50) / emalj ($80–$150) + frakt', '1 st+ neutral / 10–15 dagar logoprov'],
      ['3. Permanent metallgravyr', '50W MOPA fiberlaser (+$0.15–$0.30/st) eller djuplaser + emalj (+$0.35–$0.60/st)', '100 st (10–15 arbetsdagar produktion)'],
      ['4. Förpackning & streckkod', 'Vakuumpåse ($0), EVA-fodral (+$0.75+, MOQ 100), Ask (+$1.45+, MOQ 500), Plåt (1 000+)', 'Inkluderar FNSKU & CPSC 14+ märkning'],
      ['5. Efterlevnad & frakt', 'CPSC 16 CFR 1262-säkring, EU RoHS 3 & IATA PI-953 skärmade kartonger', 'DHL / FedEx / UPS / DDP Flyg & Sjö']
    ],
    picksBadge: 'UTVALDA OEM-MODELLER',
    picksTitle: '8 beprövade formar för egna varumärken och Amazon FBA',
    picksCta: 'Granska CPSC 16 CFR 1262 & IATA PI-953-intyg →',
    faqBadge: 'PRIVATE LABEL FAQ',
    faqTitle: 'Frågor om verktyg, FNSKU-etiketter och prover',
    serviceName: 'Private Label Metallfidget OEM & Amazon FBA Tillverkning',
    serviceDesc: 'OEM-produktion på 140 färdiga metallformar ($0 verktyg): 50W fiberlaser, EVA/presentförpackning, FNSKU och CPSC-efterlevnad.',
    faqs: [
      { question: 'Tillverkar ni helt nya formar från kundens 3D CAD-ritningar?', answer: 'Nej. FidgetSupply fokuserar 100 % på lätt anpassning av 140 befintliga produktionsformar (FS-001 till FS-150), vilket sparar $3 000–$5 000 i verktygskostnad och 45 dagar.' },
      { question: 'Vilka anpassningar finns på befintliga metallfidget-formar?', answer: '50W fiberlasergravyr (+$0.15–$0.30/st, MOQ 100) eller djuplaser + Pantone-emalj (+$0.35–$0.60/st); egen PVD/eloxering från 300 st; EVA-fodral (MOQ 100), presentaskar (MOQ 500) eller plåtaskar (MOQ 1 000+).' },
      { question: 'Hur testar säljare kvaliteten innan bulkorder?', answer: 'Via betalda 1-stycks utvärderingsprover (styckpris + internationell frakt betalas av köparen, ej återbetalningsbart). Logoprover tar 10–15 dagar ($50 laser / $80–$150 emalj).' },
      { question: 'Sätter ni på Amazon FNSKU-streckkoder och magnetvarningar?', answer: 'Ja, vi skriver ut och fäster era FNSKU-etiketter samt CPSC 16 CFR 1262 (14+) på påsar, EVA-fodral eller askar.' },
      { question: 'Hur säkras neodymmagneter enligt CPSC 16 CFR 1262?', answer: 'Med CNC-frästa blinda försänkningar, strukturepoxy och skruvade lock; vi har även över 30 helt magnetfria mekaniska modeller.' },
      { question: 'Vad är minsta order för en ny multi-SKU-lansering?', answer: '50 st per SKU utan logotyp och 100 st per SKU med permanent logogravyr.' },
      { question: 'Kan ytbeläggning eller färg anpassas?', answer: 'Ja, från 300 st per SKU erbjuder vi matt svart PVD, gunmetal, champagneguld, Typ III hårdanodisering och stonewash.' },
      { question: 'Varför ingår vakuumpåsar som standard på alla artiklar?', answer: 'Skyddar legeringar och R188-lager mot fukt och oxidation under sjöfrakt och lagerhållning ($0.00 ingår).' },
      { question: 'Hur lång är fabrikens produktionstid för OEM-batcher?', answer: '5–7 arbetsdagar för neutralt lager (50+ st) och 10–15 arbetsdagar för 50W-laserorder (100+ st).' },
      { question: 'Hur klarar magnetiska sändningar IATA PI-953 flygkontroll?', answer: 'Exportkartongerna fodras med magnetiskt skärmande stålplåtar som håller strålningsflödet under IATA PI-953-gränsen.' }
    ]
  },
  da: {
    bcParent: 'Engrosmatrice',
    bcCurrent: 'Private Label OEM',
    badge1: 'PRIVATE LABEL & FBA OEM',
    badge2: '140 Klare Forme · $0 Værktøj',
    kpis: [
      { label: 'Formgebyr', val: '$0.00 USD' },
      { label: 'Logo-MOQ', val: '100' },
      { label: 'FBA-mærkning', val: 'FNSKU + CPSC' },
      { label: 'Egen finish', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Få Private Label-tilbud →',
    ctaSecondary: 'Bestil 1-stk vareprøve →',
    showcasePill: 'OPSTART UDEN VÆRKTØJSOMKOSTNING',
    showcaseMeta: ['50W Laserlogo', 'EVA-etui MOQ 100', 'PI-953 Luftfragt'],
    geoTitle: 'Direkte svar: Start eget metalfidget-brand med $0 værktøjsgebyr',
    geoAnswer: 'Med FidgetSupply kan Amazon FBA- og webshopbrands skalere over 140 eksisterende forme ($0 formgebyr): test betalte 1-stk vareprøver eller laserprøver ($50/$80–$150 + fragt), gravér med 50W fiberlaser (+$0.15–$0.30/stk) fra 100 stk. og pak i EVA-etui (MOQ 100) eller gaveæske (MOQ 500) med FNSKU- & CPSC-etiketter.',
    stageBadge: '5-TRINS LANCERINGSPLAN',
    stageTitle: 'OEM-arbejdsgang på færdige forme & reelle fabriks-MOQ’er',
    tableHeaders: ['Private Label-trin', 'Fabriksspecifikation & priser', 'MOQ / Leveringstid'],
    tableRows: [
      ['1. Valg af klar SKU-form', 'Vælg blandt 140 aktive CNC- & Zamak-3-forme ($0.74–$470.77 EXW, $0 form)', '50 stk. neutral (5–7 hverdage klargøring)'],
      ['2. Fysisk kvalitetskontrol', 'Betalt 1-stk vareprøve eller laserprøve ($50) / emalje ($80–$150) + fragt', '1 stk.+ neutral / 10–15 dage logoprøve'],
      ['3. Permanent metalgravering', '50W MOPA fiberlaser (+$0.15–$0.30/stk) eller dyblaser + emalje (+$0.35–$0.60/stk)', '100 stk. (10–15 hverdages produktion)'],
      ['4. Emballage & Stregkoder', 'Vakuumpose ($0), EVA (+$0.75+, MOQ 100), Gaveæske (+$1.45+, MOQ 500), Dåse (1.000+)', 'Inklusiv FNSKU & CPSC 14+ mærkning'],
      ['5. Compliance & Eksport', 'CPSC 16 CFR 1262 sikring, EU RoHS 3 & IATA PI-953 afskærmede kasser', 'DHL / FedEx / UPS / DDP Luft & Sø']
    ],
    picksBadge: 'POPULÆRE OEM-MODELLER',
    picksTitle: '8 gennemtestede forme til egne brands & Amazon FBA',
    picksCta: 'Se CPSC 16 CFR 1262 & IATA PI-953 dokumentation →',
    faqBadge: 'PRIVATE LABEL FAQ',
    faqTitle: 'Spørgsmål om forme, FNSKU og prøver',
    serviceName: 'Private Label Metalfidget OEM & Amazon FBA Produktion',
    serviceDesc: 'OEM-produktion på 140 eksisterende metalforme ($0 værktøj): 50W fiberlaser, EVA- & gaveemballage, FNSKU-mærkning og CPSC-overholdelse.',
    faqs: [
      { question: 'Bygger FidgetSupply nye forme ud fra 3D CAD-tegninger?', answer: 'Nej. Vi fokuserer 100 % på let tilpasning af 140 eksisterende produktionsforme (FS-001 til FS-150), så du undgår $3.000–$5.000 i formgebyr og 45 dages ventetid.' },
      { question: 'Hvilke tilpasninger tilbydes på eksisterende forme?', answer: '50W fiberlaser (+$0.15–$0.30/stk, MOQ 100) eller dyblaser + Pantone-emalje (+$0.35–$0.60/stk); PVD/eloxering ved 300 stk.; EVA-etuier (MOQ 100), gaveæsker (MOQ 500) eller metaldåser (1.000+).' },
      { question: 'Hvordan tester sælgere kvaliteten før stor ordre?', answer: 'Via betalte 1-stk vareprøver (stykpris + kurerfragt betalt af køber, ikke-refunderbar). Tilpasset logoprøve tager 10–15 dage ($50 laser / $80–$150 emalje).' },
      { question: 'Påsætter I Amazon FNSKU-labels og magnetadvarsler?', answer: 'Ja, vi trykker og påsætter jeres FNSKU-stregkoder samt CPSC 16 CFR 1262 (14+) advarsler på poser, EVA-etuier eller æsker.' },
      { question: 'Hvordan sikres neodymmagneter efter CPSC 16 CFR 1262?', answer: 'Med blinde fræsninger, strukturel epoxy og skruede dækplader; vi har desuden over 30 helt magnetfri mekaniske modeller.' },
      { question: 'Hvad er minimumsordren for multi-SKU opstart?', answer: '50 stk. pr. SKU uden logo og 100 stk. pr. SKU med permanent laserlogo.' },
      { question: 'Kan overfladebehandling eller farver tilpasses?', answer: 'Ja, fra 300 stk. pr. SKU tilbyder vi matsort PVD, gunmetal, champagneguld, Type III hård eloxering og stonewash.' },
      { question: 'Hvorfor leveres alle enheder i vakuumpose som standard?', answer: 'Beskytter metallegeringer og R188-lejer mod fugt og iltning under søfragt og opbevaring ($0.00 inkluderet).' },
      { question: 'Hvad er produktionstiden for Private Label-partier?', answer: '5–7 hverdage for neutralt lager (50+ stk.) og 10–15 hverdage for 50W lasergravering (100+ stk.).' },
      { question: 'Hvordan godkendes magnetisk luftfragt under IATA PI-953?', answer: 'Eksportkasser fores indvendigt med magnetisk afskærmende stålplader under IATA PI-953 grænsen.' }
    ]
  },
  no: {
    bcParent: 'Engrosmatrise',
    bcCurrent: 'Private Label OEM',
    badge1: 'PRIVATE LABEL & FBA OEM',
    badge2: '140 Klare Former · $0 Verktøy',
    kpis: [
      { label: 'Formkostnad', val: '$0.00 USD' },
      { label: 'Logo-MOQ', val: '100' },
      { label: 'FBA-merking', val: 'FNSKU + CPSC' },
      { label: 'Egen finish', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Be om Private Label-tilbud →',
    ctaSecondary: 'Bestill 1-stk prøve →',
    showcasePill: 'LANSERING UTEN FORMKOSTNAD',
    showcaseMeta: ['50W Laserlogo', 'EVA-etui MOQ 100', 'PI-953 Flyfrakt'],
    geoTitle: 'Direkte svar: Start eget metallfidget-merke med $0 i formkostnad',
    geoAnswer: 'Med FidgetSupply kan Amazon FBA- og DTC-merker skalere på 140 eksisterende former ($0 verktøygebyr): test betalt 1-stk blank- eller laserprøve ($50/$80–$150 + frakt), graver med 50W fiberlaser (+$0.15–$0.30/stk) fra 100 stk. og pakk i EVA-etui (MOQ 100) eller gaveeske (MOQ 500) med FNSKU- & CPSC-merking.',
    stageBadge: '5-TRINNS LANSERINGSPLAN',
    stageTitle: 'OEM-produksjon på ferdige former & fabrikkens MOQ',
    tableHeaders: ['Private Label-trinn', 'Fabrikkspesifikasjon & faktiske priser', 'MOQ / Produksjonstid'],
    tableRows: [
      ['1. Valg av eksisterende SKU', 'Velg blant 140 aktive CNC- & Zamak-3-former ($0.74–$470.77 EXW, $0 form)', '50 stk. nøytral (5–7 virkedager klargjøring)'],
      ['2. Fysisk prøvesjekk', 'Betalt 1-stk blankprøve eller laserprøve ($50) / emalje ($80–$150) + frakt', '1 stk.+ standard / 10–15 dager logoprøve'],
      ['3. Permanent metallgravering', '50W MOPA fiberlaser (+$0.15–$0.30/stk) eller dyplaser + emalje (+$0.35–$0.60/stk)', '100 stk. (10–15 virkedager produksjon)'],
      ['4. Emballasje & Strekkoder', 'Vakuumpose ($0), EVA (+$0.75+, MOQ 100), Gaveeske (+$1.45+, MOQ 500), Boks (1 000+)', 'Inkluderer FNSKU & CPSC 14+ merking'],
      ['5. Samsvar & Eksportfrakt', 'CPSC 16 CFR 1262 sikring, EU RoHS 3 & IATA PI-953 skjermede esker', 'DHL / FedEx / UPS / DDP Fly & Sjø']
    ],
    picksBadge: 'UTVALGTE OEM-MODELLER',
    picksTitle: '8 utprøvde former for egne merkevarer & Amazon FBA',
    picksCta: 'Se CPSC 16 CFR 1262 & IATA PI-953 dokumentasjon →',
    faqBadge: 'PRIVATE LABEL FAQ',
    faqTitle: 'Spørsmål om former, FNSKU-merking og prøver',
    serviceName: 'Private Label Metallfidget OEM & Amazon FBA Produksjon',
    serviceDesc: 'OEM-produksjon på 140 ferdige metallformer ($0 verktøy): 50W fiberlaser, EVA/gaveemballasje, FNSKU-merking og CPSC-samsvar.',
    faqs: [
      { question: 'Lager FidgetSupply nye former fra kundens 3D CAD-filer?', answer: 'Nei. Vi fokuserer 100 % på lett tilpasning av 140 eksisterende produksjonsformer (FS-001 til FS-150), som sparer $3 000–$5 000 i verktøykostnad og 45 dager.' },
      { question: 'Hvilke OEM-tilpasninger kan gjøres på eksisterende former?', answer: '50W fiberlaser (+$0.15–$0.30/stk, MOQ 100) eller dyplaser + Pantone-emalje (+$0.35–$0.60/stk); PVD/anodisering fra 300 stk.; EVA-etuier (MOQ 100), gaveesker (MOQ 500) eller metallbokser (1 000+).' },
      { question: 'Hvordan tester selgere kvalitet før bulkbestilling?', answer: 'Ved å bestille betalte 1-stk evalueringsprøver (enhetspris + internasjonal kurerfrakt betalt av kjøper, ikke-refunderbart). Logoprøve tar 10–15 dager ($50 laser / $80–$150 emalje).' },
      { question: 'Setter dere på Amazon FNSKU-etiketter og magnetadvarsler?', answer: 'Ja, vi skriver ut og fester FNSKU-strekkoder og påkrevde CPSC 16 CFR 1262 (14+) etiketter på poser, etuier og esker.' },
      { question: 'Hvordan sikres neodymmagneter for CPSC 16 CFR 1262?', answer: 'Med blinde fresespor, strukturepoksy og skrudde dekkplater; vi har også over 30 helt magnetfrie mekaniske modeller.' },
      { question: 'Hva er minimumsordre for oppstart med flere SKU-er?', answer: '50 stk. per SKU uten logo og 100 stk. per SKU med lasergraverte logoer.' },
      { question: 'Kan overflatebelegg eller farger tilpasses?', answer: 'Ja, fra 300 stk. per SKU leverer vi mattsvart PVD, gunmetal, champagne-gull, Type III eloksering og stonewash.' },
      { question: 'Hvorfor følger vakuumpose med som standard på alle modeller?', answer: 'Beskytter metall og R188-kulelager mot sjøfuktighet og oksidasjon under transport og FBA-lagring ($0.00 inkludert).' },
      { question: 'Hva er produksjonstiden for OEM-partier?', answer: '5–7 virkedager for nøytralt lager (50+ stk.) og 10–15 virkedager for 50W-laserordre (100+ stk.).' },
      { question: 'Hvordan består magnetisk flyfrakt IATA PI-953-kontroll?', answer: 'Eksportkartonger fôres med magnetisk skjermende stålplater slik at feltstyrken holder seg under IATA PI-953-grensen.' }
    ]
  },
  fi: {
    bcParent: 'Tukkumatriisi',
    bcCurrent: 'Private Label OEM',
    badge1: 'PRIVATE LABEL & FBA OEM',
    badge2: '140 Valmista Muottia · $0 Muottikulu',
    kpis: [
      { label: 'Muottikulu', val: '$0.00 USD' },
      { label: 'Logo-MOQ', val: '100' },
      { label: 'FBA-merkintä', val: 'FNSKU + CPSC' },
      { label: 'Oma viimeistely', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Pyydä Private Label -tarjous →',
    ctaSecondary: 'Tilaa 1 kpl arviointinäyte →',
    showcasePill: 'ALOITUS ILMAN MUOTTIKULUJA',
    showcaseMeta: ['50W Laserlogo', 'EVA-kotelo MOQ 100', 'PI-953 Lentorahti'],
    geoTitle: 'Suora vastaus: Oman metallifidget-brändin käynnistäminen $0 muottikuluilla',
    geoAnswer: 'FidgetSupplyn avulla Amazon FBA- ja DTC-brändit skaalautuvat 140 valmiilla metallimuotilla ($0 muottimaksu): tilaa maksullinen 1 kpl näyte tai lasernäyte ($50/$80–$150 + rahti), merkitse pysyvällä 50W kuitulaserilla (+$0.15–$0.30/kpl) alkaen 100 kpl ja pakkaa EVA-koteloon (MOQ 100) tai lahjarasiaan (MOQ 500) FNSKU- & CPSC-tarroin.',
    stageBadge: '5-VAIHEINEN LANSERAUS',
    stageTitle: 'Valmismuottien Private Label -tuotantoprosessi & tehtaan MOQ-rajat',
    tableHeaders: ['Private Label -vaihe', 'Tehtaan määritys & todelliset hinnat', 'MOQ / Tuotantoaika'],
    tableRows: [
      ['1. Valmismuotin valinta', 'Valitse 140 aktiivisesta CNC- & Zamak-3-mallista ($0.74–$470.77 EXW, $0 muotti)', '50 kpl merkitsemätön (5–7 arkipäivää)'],
      ['2. Fyysinen näytetarkistus', 'Maksullinen 1 kpl näyte tai lasernäyte ($50) / emali ($80–$150) + ostajan rahti', '1 kpl+ vakio / 10–15 pv logonäyte'],
      ['3. Pysyvä metallikaiverrus', '50W MOPA-kuitulaser (+$0.15–$0.30/kpl) tai syväkaiverrus + emali (+$0.35–$0.60/kpl)', '100 kpl (10–15 arkipäivää valmistus)'],
      ['4. Pakkaus & viivakoodit', 'Tyhjiöpussi ($0), EVA (+$0.75+, MOQ 100), Lahjarasia (+$1.45+, MOQ 500), Peltirasia (1 000+)', 'Sisältää FNSKU- & CPSC 14+ -tarrat'],
      ['5. Vaatimustenmukaisuus & Rahti', 'CPSC 16 CFR 1262 lukitus, EU RoHS 3 & IATA PI-953 suojatut vientilaatikot', 'DHL / FedEx / UPS / DDP Lento & Meri']
    ],
    picksBadge: 'SUOSITUT OEM-MALLIT',
    picksTitle: '8 testattua valmismuottia omille brändeille & Amazon FBA:han',
    picksCta: 'Katso CPSC 16 CFR 1262 & IATA PI-953 -asiakirjat →',
    faqBadge: 'PRIVATE LABEL FAQ',
    faqTitle: 'Kysymyksiä muoteista, FNSKU-tarroista ja näytteistä',
    serviceName: 'Private Label Metallifidget OEM & Amazon FBA -valmistus',
    serviceDesc: 'OEM-valmistus 140 valmiilla muotilla ($0 muottikulu): 50W kuitulaser, EVA- ja lahjapakkaukset, FNSKU-merkintä ja CPSC-vaatimustenmukaisuus.',
    faqs: [
      { question: 'Rakentaako FidgetSupply kokonaan uusia muotteja 3D CAD -piirustuksista?', answer: 'Ei. Keskitymme 100 % 140 olemassa olevan tuotantomuotin (FS-001 – FS-150) räätälöintiin, mikä säästää $3 000–$5 000 muottikulut ja 45 päivän odotuksen.' },
      { question: 'Mitä OEM-muokkauksia valmiisiin metallimuotteihin saa?', answer: '50W kuitulaserkaiverrus (+$0.15–$0.30/kpl, MOQ 100) tai syväkaiverrus + Pantone-emali (+$0.35–$0.60/kpl); oma PVD/anodisointi 300 kpl alkaen; EVA-kotelot (MOQ 100), lahjarasiat (MOQ 500) ja peltirasiat (1 000+).' },
      { question: 'Miten FBA-myyjät testaavat laadun ennen tukkuerää?', answer: 'Maksullisilla 1 kpl näytteillä (yksikköhinta + kansainvälinen rahti ostajan kustannuksella, ei palauteta). Omalla logolla varustettu näyte kestää 10–15 pv ($50 laser / $80–$150 emali).' },
      { question: 'Kiinnitättekö Amazon FNSKU -viivakoodit ja magneettivaroitukset?', answer: 'Kyllä, tulostamme ja kiinnitämme FNSKU-tarrat sekä CPSC 16 CFR 1262 (14+) -varoitukset pusseihin, koteloihin tai rasioihin.' },
      { question: 'Miten magneetit varmistetaan CPSC 16 CFR 1262 mukaisesti?', answer: 'Tarkkuusupotuksilla, epoksiliimauksella ja ruuvatuilla kansilevyillä; saatavilla on myös yli 30 täysin magneetitonta mekaanista mallia.' },
      { question: 'Mikä on minimitilaus useamman SKU:n brändialoitukseen?', answer: '50 kpl per SKU ilman logoa ja 100 kpl per SKU laserkaiverretulla logolla.' },
      { question: 'Voiko pinnoitetta tai väriä mukauttaa valmismuoteissa?', answer: 'Kyllä, 300 kpl/SKU alkaen tarjoamme mm. mattamustan PVD:n, gunmetalin, Type III -kovanodisoinnin ja stonewashin.' },
      { question: 'Miksi tyhjiöpussi sisältyy vakiovarusteena jokaiseen tuotteeseen?', answer: 'Suojaa metalliseoksia ja R188-laakereita merikuljetuksen kosteudelta ja hapettumiselta ($0.00 sisältyy).' },
      { question: 'Mikä on OEM-tukkuerien valmistusaika?', answer: '5–7 arkipäivää vakiovarastolle (50+ kpl) ja 10–15 arkipäivää 50W lasererille (100+ kpl).' },
      { question: 'Miten magneettilähetykset läpäisevät IATA PI-953 -lentotarkastuksen?', answer: 'Vientilaatikot vuorataan teräksisillä magneettisuojalevyillä IATA PI-953 -raja-arvojen alittamiseksi.' }
    ]
  },
  pl: {
    bcParent: 'Matryca Hurtowa',
    bcCurrent: 'Private Label OEM',
    badge1: 'PRIVATE LABEL & FBA OEM',
    badge2: '140 Gotowych Form · $0 Forma',
    kpis: [
      { label: 'Koszt nowej formy', val: '$0.00 USD' },
      { label: 'MOQ Logo OEM', val: '100' },
      { label: 'Etykiety FBA', val: 'FNSKU + CPSC' },
      { label: 'Własny kolor', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Zamów wycenę Private Label →',
    ctaSecondary: 'Zamów próbkę 1 szt. →',
    showcasePill: 'START BEZ KOSZTÓW FORMY',
    showcaseMeta: ['Laser 50W', 'Etui EVA MOQ 100', 'Fracht PI-953'],
    geoTitle: 'Bezpośrednia odpowiedź: Jak uruchomić własną markę metalowych fidgetów bez kosztów formy ($0)',
    geoAnswer: 'Z FidgetSupply marki Amazon FBA i DTC skalują produkcję na 140 gotowych formach ($0 za narzędzia): przetestuj płatne próbki 1 szt. lub z logo ($50 / $80–$150 + wysyłka), oznacz trwałym laserem światłowodowym 50W (+$0.15–$0.30/szt.) od 100 szt. i zapakuj w etui EVA (MOQ 100) lub pudełka sztywne (MOQ 500) z etykietami FNSKU i CPSC.',
    stageBadge: '5-ETAPOWY PLAN WDROŻENIA',
    stageTitle: 'Proces OEM na gotowych formach & fabryczne progi MOQ',
    tableHeaders: ['Etap Private Label', 'Specyfikacja fabryczna i realne stawki', 'MOQ / Czas realizacji'],
    tableRows: [
      ['1. Wybór gotowych SKU', 'Wybierz ze 140 aktywnych form CNC i Zamak-3 ($0.74–$470.77 EXW, $0 forma)', '50 szt. bez logo (5–7 dni rob. przygotowania)'],
      ['2. Weryfikacja próbek', 'Płatna próbka 1 szt. lub próba laserowa ($50) / emalia ($80–$150) + kurier', '1 szt.+ standard / 10–15 dni próba z logo'],
      ['3. Trwałe znakowanie metalu', 'Laser MOPA 50W (+$0.15–$0.30/szt.) lub głęboki grawer + emalia (+$0.35–$0.60/szt.)', '100 szt. (10–15 dni roboczych produkcji)'],
      ['4. Opakowania i kody FBA', 'Worek próżniowy ($0), Etui EVA (+$0.75+, MOQ 100), Pudełko (+$1.45+, MOQ 500), Puszka (1000+)', 'W cenie etykietowanie FNSKU i CPSC 14+'],
      ['5. Zgodność i eksport', 'Zabezpieczenie CPSC 16 CFR 1262, EU RoHS 3 i ekranowane kartony IATA PI-953', 'DHL / FedEx / UPS / DDP Lotniczy & Morski']
    ],
    picksBadge: 'FLAGOWE MODELE OEM',
    picksTitle: '8 sprawdzonych gotowych form pod markę własną i Amazon FBA',
    picksCta: 'Sprawdź dokumentację CPSC 16 CFR 1262 i IATA PI-953 →',
    faqBadge: 'FAQ PRIVATE LABEL',
    faqTitle: 'Pytania o formy, kody FNSKU i próbki',
    serviceName: 'Produkcja OEM Metalowych Fidgetów Private Label & Amazon FBA',
    serviceDesc: 'Produkcja na 140 gotowych formach ($0 koszt formy): grawer laserowy 50W, etui EVA/pudełka prezentowe, etykiety FNSKU i zgodność CPSC.',
    faqs: [
      { question: 'Czy FidgetSupply wykonuje zupełnie nowe formy z plików 3D CAD?', answer: 'Nie. W 100 % specjalizujemy się w personalizacji 140 aktywnych form produkcyjnych (FS-001 – FS-150), co eliminuje wydatek $3 000–$5 000 na formę i 45 dni oczekiwania.' },
      { question: 'Jakie opcje personalizacji są dostępne na gotowych formach?', answer: 'Laser światłowodowy 50W (+$0.15–$0.30/szt., MOQ 100) lub głęboki grawer z emalią Pantone (+$0.35–$0.60/szt.); powłoki PVD/anodowane od 300 szt.; etui EVA (MOQ 100), pudełka sztywne (MOQ 500) lub metalowe puszki (1000+).' },
      { question: 'Jak sprzedawcy FBA sprawdzają jakość przed zamówieniem hurtowym?', answer: 'Zamawiając płatne próbki 1 szt. (koszt sztuki + fracht międzynarodowy po stronie kupującego, bezzwrotne). Próbki z logo wymagają 10–15 dni ($50 laser / $80–$150 emalia).' },
      { question: 'Czy naklejacie kody Amazon FNSKU i ostrzeżenia CPSC?', answer: 'Tak, drukujemy i naklejamy kody FNSKU oraz wymagane etykiety CPSC 16 CFR 1262 (14+) na woreczkach, etui EVA lub pudełkach.' },
      { question: 'Jak zabezpieczone są magnesy pod kątem US CPSC 16 CFR 1262?', answer: 'Precyzyjnymi gniazdami ślepymi CNC, żywicą epoksydową i przykręcanymi pokrywami; mamy też ponad 30 modeli całkowicie bez magnesów.' },
      { question: 'Jaki jest minimalny wolumen na start z kilkoma SKU?', answer: '50 szt./SKU dla wersji standard i 100 szt./SKU dla wersji z trwałym logo laserowym.' },
      { question: 'Czy można zmienić kolor powłoki na gotowej formie?', answer: 'Tak, od 300 szt./SKU wykonujemy czarny mat PVD, gunmetal, champagne gold, twarde anodowanie Typ III i stonewash.' },
      { question: 'Dlaczego każdy model jest pakowany próżniowo?', answer: 'Chroni stopy metali i łożyska R188 przed wilgocią morską i utlenianiem ($0.00 w cenie przy MOQ 50).' },
      { question: 'Ile trwa produkcja partii OEM?', answer: '5–7 dni roboczych dla towaru bez logo (50+ szt.) i 10–15 dni roboczych dla partii z laserem 50W (100+ szt.).' },
      { question: 'Jak przesyłki lotnicze przechodzą kontrolę IATA PI-953?', answer: 'Kartony zbiorcze są wyłożone stalowymi ekranami magnetycznymi ograniczającymi strumień poniżej normy IATA PI-953.' }
    ]
  },
  cs: {
    bcParent: 'Velkoobchodní Matice',
    bcCurrent: 'Private Label OEM',
    badge1: 'PRIVATE LABEL & FBA OEM',
    badge2: '140 Hotových Forem · $0 Za Formu',
    kpis: [
      { label: 'Cena nové formy', val: '$0.00 USD' },
      { label: 'Logo MOQ', val: '100' },
      { label: 'FBA štítky', val: 'FNSKU + CPSC' },
      { label: 'Vlastní barva', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Poptat Private Label OEM →',
    ctaSecondary: 'Objednat 1 ks vzorek →',
    showcasePill: 'START BEZ INVESTICE DO FORMY',
    showcaseMeta: ['50W Laser logo', 'EVA pouzdro MOQ 100', 'PI-953 Letecky'],
    geoTitle: 'Přímá odpověď: Jak spustit vlastní značku kovových fidgetů s poplatkem $0 za formu',
    geoAnswer: 'S FidgetSupply spustíte vlastní značku na Amazon FBA nebo DTC e-shopu na 140 stávajících formách ($0 poplatek za formu): otestujete placený 1 ks vzorek či laserový prototyp ($50 / $80–$150 + doprava), od 100 ks vypálíte trvalé logo 50W vláknovým laserem (+$0.15–$0.30/ks) a zabalíte do EVA pouzder (MOQ 100) nebo dárkových boxů (MOQ 500) včetně FNSKU a CPSC štítků.',
    stageBadge: '5FÁZOVÝ PLÁN SPUŠTĚNÍ',
    stageTitle: 'Výrobní postup Private Label na hotových formách a tovární MOQ',
    tableHeaders: ['Fáze Private Label', 'Tovární specifikace a reálné poplatky', 'MOQ / Doba výroby'],
    tableRows: [
      ['1. Výběr hotové formy (SKU)', 'Výběr ze 140 aktivních CNC & Zamak-3 forem ($0.74–$470.77 EXW, $0 forma)', '50 ks čisté zboží (5–7 prac. dnů příprava)'],
      ['2. Fyzické ověření vzorku', 'Placený 1 ks čistý vzorek nebo laser vzorek ($50) / smalt ($80–$150) + doprava', '1 ks+ standard / 10–15 dnů vzorek s logem'],
      ['3. Trvalé značení kovu', '50W MOPA vláknový laser (+$0.15–$0.30/ks) nebo hluboký laser + smalt (+$0.35–$0.60/ks)', '100 ks (10–15 pracovních dnů výroba)'],
      ['4. Balení a FBA čárové kódy', 'Vakuový sáček ($0), EVA (+$0.75+, MOQ 100), Dárkový box (+$1.45+, MOQ 500), Plech (1 000+)', 'Zahrnuje lepení FNSKU a CPSC 14+'],
      ['5. Normy a globální přeprava', 'Zajištění CPSC 16 CFR 1262, EU RoHS 3 & stíněné kartony IATA PI-953', 'DHL / FedEx / UPS / DDP Letecky & Po moři']
    ],
    picksBadge: 'TOP PRIVATE LABEL MODELY',
    picksTitle: '8 ověřených hotových forem pro vlastní značky a Amazon FBA',
    picksCta: 'Zobrazit dokumenty CPSC 16 CFR 1262 & IATA PI-953 →',
    faqBadge: 'PRIVATE LABEL FAQ',
    faqTitle: 'Otázky k formám, FNSKU štítkům a vzorkování',
    serviceName: 'Private Label Výroba Kovových Fidgetů OEM & Amazon FBA',
    serviceDesc: 'Zakázková výroba na 140 hotových formách ($0 nástroje): 50W vláknový laser, EVA a dárková balení, FNSKU značení a shoda CPSC.',
    faqs: [
      { question: 'Vyrábí FidgetSupply zcela nové formy podle 3D CAD výkresů?', answer: 'Ne. Plně se zaměřujeme na úpravy 140 aktivních sériových forem (FS-001 až FS-150), díky čemuž odpadá investice $3 000–$5 000 za formu a 45 dnů obrábění.' },
      { question: 'Jaké možnosti personalizace nabízíte na hotových formách?', answer: 'Tři úrovně: 50W vláknový laser (+$0.15–$0.30/ks, MOQ 100) nebo hluboký laser s Pantone smaltem (+$0.35–$0.60/ks); zakázkové PVD/eloxování od 300 ks; EVA pouzdra (MOQ 100), pevné dárkové krabičky (MOQ 500) nebo plechové dózy (1 000+).' },
      { question: 'Jak prodejci na Amazon FBA otestují kvalitu před velkou sérií?', answer: 'Objednáním placeného 1 ks zkušebního vzorku (cena kusu + mezinárodní kurýr hradí kupující, nevratné). Vzorek s vlastním logem trvá 10–15 dnů ($50 laser / $80–$150 smalt + doprava).' },
      { question: 'Aplikujete čárové kódy Amazon FNSKU a varování pro magnety CPSC?', answer: 'Ano, tiskneme a lepíme dodané štítky FNSKU i povinné štítky CPSC 16 CFR 1262 (14+) na vakuové sáčky, EVA pouzdra či krabičky.' },
      { question: 'Jak jsou neodymové magnety zajištěny pro normu CPSC 16 CFR 1262?', answer: 'Slepými frézovanými kapsami, konstrukčním epoxidem a šroubovanými kryty; navíc máme přes 30 čistě mechanických modelů zcela bez magnetů.' },
      { question: 'Jaké je MOQ pro spuštění obchodu s více modely?', answer: 'Čisté skladové modely od 50 ks/SKU (lze kombinovat povrchy) a zakázkové laserové logo od 100 ks/SKU na jedné sběrné exportní faktuře.' },
      { question: 'Lze na stávajících formách upravit barevnou úpravu povrchu?', answer: 'Ano, od 300 ks/SKU vyrábíme matně černé PVD, gunmetal, champagne gold, tvrdý elox Typ III i stonewash.' },
      { question: 'Proč je součástí každého modelu individuální vakuový sáček?', answer: 'Chrání kovové slitiny a ložiska R188 před vlhkostí při námořní přepravě a skladování ($0.00 zahrnuto při MOQ 50).' },
      { question: 'Jaká je doba výroby u OEM sérií?', answer: '5–7 pracovních dnů u čistého zboží (50+ ks) a 10–15 pracovních dnů u 50W laserových zakázek (100+ ks) po schválení náhledu.' },
      { question: 'Jak magnetické zásilky procházejí leteckou kontrolou IATA PI-953?', answer: 'Exportní kartony jsou vystlány ocelovým magnetickým stíněním tak, aby rozptylové pole nepřekročilo limity IATA PI-953.' }
    ]
  },
  ru: {
    bcParent: 'Матрица опта',
    bcCurrent: 'OEM под СТМ',
    badge1: 'PRIVATE LABEL & FBA OEM',
    badge2: '140 готовых форм · $0 оснастка',
    kpis: [
      { label: 'Плата за форму', val: '$0.00 USD' },
      { label: 'MOQ логотипа', val: '100' },
      { label: 'Маркировка FBA', val: 'FNSKU + CPSC' },
      { label: 'Свое покрытие', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Запросить расчет под СТМ →',
    ctaSecondary: 'Заказать 1 шт. образец →',
    showcasePill: 'ЗАПУСК БЕЗ ЗАТРАТ НА ФОРМУ',
    showcaseMeta: ['Лазер 50 Вт', 'Кейс EVA MOQ 100', 'Авиа PI-953'],
    geoTitle: 'Прямой ответ: Как запустить бренд металлических фиджетов (СТМ) с нулевой платой за форму ($0)',
    geoAnswer: 'FidgetSupply позволяет брендам Amazon FBA и онлайн-магазинам работать на 140 готовых пресс-формах ($0 за оснастку): закажите платный образец 1 шт. ($50 лазер / $80–$150 эмаль + доставка), нанесите вечный логотип 50W волоконным лазером (+$0.15–$0.30/шт.) от 100 шт. и упакуйте в кейсы EVA (MOQ 100) или коробки (MOQ 500) со стикерами FNSKU и CPSC.',
    stageBadge: '5 ЭТАПОВ ЗАПУСКА БРЕНДА',
    stageTitle: 'Производственный цикл СТМ на готовых формах и реальные MOQ фабрики',
    tableHeaders: ['Этап OEM / СТМ', 'Спецификация фабрики и реальные тарифы', 'MOQ / Срок изготовления'],
    tableRows: [
      ['1. Подбор готовых моделей', 'Выбор из 140 активных форм CNC и Zamak-3 ($0.74–$470.77 EXW, $0 за форму)', '50 шт. без лого (5–7 раб. дней отгрузка)'],
      ['2. Проверка физических образцов', 'Платный образец 1 шт. или тест лазера ($50) / эмали ($80–$150) + доставка', 'От 1 шт. без лого / 10–15 дн. с лого'],
      ['3. Стойкая гравировка металла', 'Волоконный лазер 50 Вт (+$0.15–$0.30/шт.) или глубокий лазер + эмаль (+$0.35–$0.60/шт.)', '100 шт. (10–15 рабочих дней в цехе)'],
      ['4. Упаковка и штрихкоды', 'Вакуум-пакет ($0), EVA (+$0.75+, MOQ 100), Коробка (+$1.45+, MOQ 500), Жесть (1000+)', 'Бесплатное нанесение FNSKU и CPSC 14+'],
      ['5. Сертификация и логистика', 'Фиксация магнитов CPSC 16 CFR 1262, EU RoHS 3 и экранированные короба IATA PI-953', 'DHL / FedEx / UPS / DDP Авиа и Море']
    ],
    picksBadge: 'ХИТЫ ДЛЯ ЗАПУСКА СТМ',
    picksTitle: '8 проверенных готовых форм для собственных брендов и Amazon FBA',
    picksCta: 'Смотреть документы CPSC 16 CFR 1262 и IATA PI-953 →',
    faqBadge: 'FAQ ПО ПРОИЗВОДСТВУ СТМ',
    faqTitle: 'Вопросы об оснастке, этикетках FNSKU и образцах',
    serviceName: 'OEM производство металлических фиджетов СТМ и Amazon FBA',
    serviceDesc: 'Контрактное производство на 140 готовых формах ($0 оснастка): лазер 50 Вт, кейсы EVA и коробки, маркировка FNSKU и нормы CPSC.',
    faqs: [
      { question: 'Изготавливает ли фабрика новые пресс-формы по 3D CAD чертежам?', answer: 'Нет. Мы на 100 % сфокусированы на кастомизации 140 действующих серийных форм (FS-001 – FS-150), что избавляет вас от $3 000–$5 000 за оснастку и 45 дней ожидания.' },
      { question: 'Какие виды брендирования доступны на готовых формах?', answer: 'Волоконный лазер 50 Вт (+$0.15–$0.30/шт., MOQ 100) или глубокая гравировка с эмалью Pantone (+$0.35–$0.60/шт.); спецпокрытия PVD/анодирование от 300 шт.; кейсы EVA (MOQ 100), коробки (MOQ 500) или банки (1000+).' },
      { question: 'Как проверить качество перед оптовым запуском на FBA?', answer: 'Через платные образцы от 1 шт. (цена изделия + международная доставка за счет покупателя, не возвращается). Образец с логотипом занимает 10–15 дней ($50 лазер / $80–$150 эмаль).' },
      { question: 'Клеите ли вы штрихкоды Amazon FNSKU и предупреждения CPSC?', answer: 'Да, мы печатаем и наклеиваем предоставленные FNSKU-стикеры и обязательную маркировку CPSC 16 CFR 1262 (14+) на пакеты, кейсы EVA или коробки.' },
      { question: 'Как закреплены магниты согласно US CPSC 16 CFR 1262?', answer: 'В глухих фрезерованных гнездах на конструкционной эпоксидке под винтовыми крышками; также в наличии более 30 моделей без магнитов.' },
      { question: 'Каков минимальный заказ для запуска нескольких артикулов?', answer: 'От 50 шт. на SKU без логотипа и от 100 шт. на SKU с лазерным логотипом в одном экспортном инвойсе из Фучжоу.' },
      { question: 'Можно ли заказать индивидуальное PVD-покрытие или цвет?', answer: 'Да, при заказе от 300 шт. на SKU доступно матовое черное PVD, gunmetal, шампань, твердое анодирование Тип III и галтовка.' },
      { question: 'Зачем каждый экземпляр запаян в вакуумный пакет?', answer: 'Для защиты сплавов и подшипников R188 от морской влаги и окисления при хранении ($0.00 включено).' },
      { question: 'Каковы сроки производства OEM-партий?', answer: '5–7 рабочих дней для товара без лого (50+ шт.) и 10–15 рабочих дней для партии с лазером 50 Вт (100+ шт.).' },
      { question: 'Как грузы с магнитами проходят авиаконтроль IATA PI-953?', answer: 'Мастер-короба выстилаются стальными экранами, удерживающими внешнее магнитное поле ниже порогов IATA PI-953.' }
    ]
  },
  ja: {
    bcParent: '卸売マトリクス',
    bcCurrent: 'OEM・PB製造',
    badge1: 'プライベートブランド＆FBA OEM',
    badge2: '既存140金型 · 金型代$0',
    kpis: [
      { label: '新規金型費', val: '$0.00 USD' },
      { label: 'ロゴ最小ロット', val: '100' },
      { label: 'FBAラベル貼付', val: 'FNSKU + CPSC' },
      { label: '特注表面色', val: 'MOQ 300' }
    ],
    ctaPrimary: 'OEM・PB見積もりを依頼 →',
    ctaSecondary: '1個テストサンプルを注文 →',
    showcasePill: '初期金型投資ゼロで開始',
    showcaseMeta: ['50Wレーザー刻印', 'EVAケース MOQ 100', 'PI-953航空対応'],
    geoTitle: '結論：金型代$0で金属フィジェットのPB・Amazon FBAブランドを立ち上げる方法',
    geoAnswer: 'FidgetSupplyでは既存の140金型（初期金型費$0.00）を活用し、有償の1個ブランクサンプルまたはレーザー試作（$50/$80–$150＋国際送料）で実物を確認後、最小100個から50Wファイバーレーザー刻印（+$0.15–$0.30/個）や凹部エナメル着色（+$0.35–$0.60/個）、EVAケース（MOQ 100）・化粧箱（MOQ 500）、FNSKU＆CPSCラベル貼付まで一括で対応可能です。',
    stageBadge: '5段階PB立ち上げ工程',
    stageTitle: '既存金型OEMの生産ワークフローと工場実ロット',
    tableHeaders: ['PB開発ステップ', '工場仕様および実費', '最小ロット / 製作期間'],
    tableRows: [
      ['1. 既存金型SKUの選定', '稼働中のCNC＆ザマック3金型140種から選択（EXW $0.74–$470.77、金型代$0）', '無地在庫 50個〜（出荷準備5〜7営業日）'],
      ['2. 実機サンプル検証', '有償1個無地サンプルまたはカスタムレーザー（$50）／色入れ（$80–$150）＋送料実費', '1個〜無地 / 試作10〜15日'],
      ['3. 恒久メタルロゴ刻印', '50W MOPAファイバーレーザー（+$0.15–$0.30/個）または深彫りエナメル（+$0.35–$0.60/個）', '100個〜（工場製造10〜15営業日）'],
      ['4. パッケージ＆バーコード', '防錆真空袋（$0）、EVAケース（+$0.75〜、100個〜）、化粧箱（+$1.45〜、500個〜）、缶（1,000〜）', 'FNSKU＆CPSC 14+ラベル貼付無料'],
      ['5. 安全規格＆国際輸送', 'US CPSC 16 CFR 1262磁石固定基準、EU RoHS 3、IATA PI-953磁気遮蔽梱包', 'DHL / FedEx / UPS / DDP航空・海上']
    ],
    picksBadge: 'PB・FBA向け定番セレクト',
    picksTitle: 'ブランド展開・Amazon FBA向けに選ばれている8つの既存金型',
    picksCta: 'CPSC 16 CFR 1262＆IATA PI-953適合資料を見る →',
    faqBadge: 'PB・OEMよくある質問',
    faqTitle: '金型費・FNSKUバーコード・有償サンプルに関するFAQ',
    serviceName: '金属フィジェットPB・Amazon FBA向けOEM製造SOP',
    serviceDesc: '既存140金型（金型代$0）を活用したOEM製造：50Wレーザー名入れ、3段階パッケージ、FNSKU貼付、CPSC規制対応。',
    faqs: [
      { question: '買い手の3D CAD図面から完全新規の金型を起こすことはできますか？', answer: 'いいえ。FidgetSupplyは稼働中の既存140金型（FS-001〜FS-150）をベースとしたライトOEMに特化しており、$3,000〜$5,000の金型費と45日の製作期間を省けます。' },
      { question: '既存金型に対してどのようなカスタムに対応していますか？', answer: '50Wファイバーレーザー刻印（+$0.15–$0.30/個、MOQ 100）や深彫り＋Pantone色入れ（+$0.35–$0.60/個）、特注PVD・アルマイト塗装（MOQ 300）、ロゴ入りEVAケース（MOQ 100）・貼り箱（MOQ 500）・窓付き金属缶（1,000個〜）に対応しています。' },
      { question: 'Amazon FBAや自社ECの本生産前にどうやって品質を確認しますか？', answer: '複数SKUを1個単位で発注できる有償サンプル（本体代＋国際送料の買い手負担・返金不可）をご利用いただけます。名入れ試作は10〜15日（標準レーザー$50／深彫り色入れ$80–$150＋送料）です。' },
      { question: 'Amazon FNSKUバーコードや高磁力磁石の警告ラベル貼付に対応していますか？', answer: 'はい。ご支給いただいたFNSKUラベルの印刷・貼付に加え、CPSC 16 CFR 1262準拠の磁石警告・対象年齢14歳以上ラベルを真空袋やケース、外箱に貼付して納品します。' },
      { question: 'US CPSC 16 CFR 1262に対する磁石の脱落防止構造はどうなっていますか？', answer: '精密止まり穴加工、構造用エポキシ樹脂、ネジ止めカバーの多重固定を採用しており、衝撃落下でも磁石が露出しません。磁石不使用の機械式モデルも30種以上ございます。' },
      { question: '複数SKUでECブランドを始める際の最小ロットは？', answer: '無地在庫は各SKU 50個から、ロゴ入りPB生産は各SKU 100個から、福州輸出拠点より一括インボイスで出荷できます。' },
      { question: '既存金型の表面処理やカラー変更は可能ですか？', answer: 'はい。各SKU 300個以上でマットブラックPVD、ガンメタル、シャンパンゴールド、硬質アルマイト、ストーンウォッシュ仕上げを指定可能です。' },
      { question: 'なぜ全製品が個別の真空防錆パックに入っているのですか？', answer: '海上輸送時の湿気や塩分による金属の酸化やR188ベアリングの錆を防ぐため、MOQ 50から標準（$0.00）で真空パック包装しています。' },
      { question: 'PB・OEM量産バッチの製造納期はどのくらいですか？', answer: '無地在庫（50個〜）は5〜7営業日で出荷準備完了、50Wレーザー刻印ありのOEM生産（100個〜）はデータ校了後10〜15営業日で完成します。' },
      { question: '磁石内蔵製品の航空便はIATA PI-953にどう対応していますか？', answer: '輸出用マスターカートン内部に磁気遮蔽用スチール板を配置し、IATA PI-953の漏洩磁束基準値を下回る状態で引き渡します。' }
    ]
  },
  ko: {
    bcParent: '도매 매트릭스',
    bcCurrent: '프라이빗 라벨 OEM',
    badge1: 'PB 브랜드 & 아마존 FBA OEM',
    badge2: '140종 기성 금형 · 금형비 $0',
    kpis: [
      { label: '신규 금형비', val: '$0.00 USD' },
      { label: '로고 MOQ', val: '100' },
      { label: 'FBA 라벨링', val: 'FNSKU + CPSC' },
      { label: '커스텀 도금', val: 'MOQ 300' }
    ],
    ctaPrimary: 'PB/OEM 견적 요청하기 →',
    ctaSecondary: '1개 평가 샘플 주문 →',
    showcasePill: '금형비 제로 런칭 SOP',
    showcaseMeta: ['50W 레이저 각인', 'EVA 케이스 MOQ 100', 'PI-953 항공 대응'],
    geoTitle: '핵심 답변: 금형비 $0으로 메탈 피젯 PB 브랜드 & 아마존 FBA 런칭하는 방법',
    geoAnswer: 'FidgetSupply는 140종 기성 금형(금형비 $0) 기반으로 유상 1개 무지 샘플 또는 로고 시제품($50/$80–$150+배송비)을 먼저 검증하고, 100개부터 영구 50W 파이버 레이저(+$0.15–$0.30/개) 또는 음각 에나멜 채색(+$0.35–$0.60/개)과 EVA 케이스(MOQ 100)·고급 박스(MOQ 500), FNSKU 및 CPSC 라벨링을 원스톱으로 제공합니다.',
    stageBadge: '5단계 PB 런칭 로드맵',
    stageTitle: '기성 금형 기반 OEM 생산 공정 및 공장 실제 MOQ',
    tableHeaders: ['PB 개발 단계', '공장 사양 및 실제 비용', 'MOQ / 제작 소요일'],
    tableRows: [
      ['1. 기성 금형 SKU 선정', '가동 중인 CNC & Zamak-3 금형 140종 선택 ($0.74–$470.77 EXW, 금형비 $0)', '무지 재고 50개 (출고 준비 5–7영업일)'],
      ['2. 실물 샘플 테스트', '유상 1개 무지 샘플 또는 커스텀 레이저($50) / 컬러 채색($80–$150) + 운송비', '무지 1개~ / 로고 시제품 10–15일'],
      ['3. 영구 메탈 로고 각인', '50W MOPA 파이버 레이저(+$0.15–$0.30/개) 또는 깊은 각인+에나멜(+$0.35–$0.60/개)', '100개 (공장 제작 10–15영업일)'],
      ['4. 리테일 패키징 & 바코드', '진공 파우치($0), EVA 케이스(+$0.75+, 100개), 하드박스(+$1.45+, 500개), 틴케이스(1,000+)', 'FNSKU & CPSC 14+ 라벨 부착 무료'],
      ['5. 안전 인증 & 글로벌 수출', '미국 CPSC 16 CFR 1262 자석 고정, EU RoHS 3 및 IATA PI-953 차폐 포장', 'DHL / FedEx / UPS / DDP 항공·해상']
    ],
    picksBadge: '주력 PB 추천 금형',
    picksTitle: '자체 브랜드 및 아마존 FBA용 검증된 8대 기성 금형',
    picksCta: 'CPSC 16 CFR 1262 & IATA PI-953 규정 문서 보기 →',
    faqBadge: 'PB / OEM 자주 묻는 질문',
    faqTitle: '금형비, FNSKU 바코드 및 샘플 제작 FAQ',
    serviceName: '메탈 피젯 프라이빗 라벨 OEM & 아마존 FBA 제조',
    serviceDesc: '140종 기성 금형(금형비 $0) 기반 OEM 제조: 50W 레이저 각인, EVA/선물용 패키징, FNSKU 라벨링 및 CPSC 준수.',
    faqs: [
      { question: '구매자 3D CAD 도면으로 완전히 새로운 금형을 제작하나요?', answer: '아니요. 당사는 기존 140종 활성 금형(FS-001~FS-150)의 라이트 커스터마이징에 100% 집중해 $3,000–$5,000 금형비와 45일 대기 기간을 없앴습니다.' },
      { question: '기성 금형에 어떤 커스텀 옵션을 적용할 수 있나요?', answer: '50W 파이버 레이저 각인(+$0.15–$0.30/개, MOQ 100) 또는 깊은 레이저+팬톤 에나멜(+$0.35–$0.60/개), PVD/아노다이징 컬러(MOQ 300), EVA 케이스(MOQ 100)·고급 박스(MOQ 500)·메탈 틴케이스(1,000+).' },
      { question: '대량 발주 전 아마존 셀러가 품질을 어떻게 테스트하나요?', answer: '유상 1개 평가 샘플(개당 단가+국제 특송비 구매자 부담, 환불 불가)을 주문할 수 있습니다. 로고 시제품은 10–15일 소요($50 레이저 / $80–$150 컬러 채색 + 운임).' },
      { question: '아마존 FNSKU 바코드와 CPSC 자석 경고 라벨을 부착해 주나요?', answer: '네, 전달해주신 FNSKU 바코드와 CPSC 16 CFR 1262 및 14세 이상 경고 라벨을 파우치·EVA·박스에 인쇄 부착해 드립니다.' },
      { question: 'US CPSC 16 CFR 1262 기준에 맞춰 자석은 어떻게 고정되나요?', answer: '정밀 블라인드 가공 홀, 구조용 에폭시 접착 및 볼트 체결 커버를 적용해 낙하 시에도 분리되지 않으며, 자석 없는 순수 기계식 모델도 30종 이상 보유하고 있습니다.' },
      { question: '다품종 소량으로 브랜드를 시작할 때 최소 수량은 얼마인가요?', answer: '무지 재고는 SKU당 50개, 로고 각인 PB는 SKU당 100개부터 통합 수출 인보이스로 진행 가능합니다.' },
      { question: '기성 금형의 표면 도금이나 색상을 변경할 수 있나요?', answer: '네, SKU당 300개 이상 시 무광 블랙 PVD, 건메탈, 샴페인 골드, Type III 경질 아노다이징, 스톤워시 등을 적용할 수 있습니다.' },
      { question: '모든 제품이 개별 진공 파우치에 포장되는 이유는 무엇인가요?', answer: '해상 운송 중 습기와 염분으로 인한 금속 산화 및 R188 베어링 부식을 방지하기 위해 기본($0.00) 포함됩니다.' },
      { question: 'PB 대량 생산 리드타임은 얼마나 걸리나요?', answer: '무지 재고(50개+)는 5–7영업일 내 출고 준비, 50W 레이저 OEM(100개+)은 시안 확정 후 10–15영업일 소요됩니다.' },
      { question: '자석 제품 항공 발송 시 IATA PI-953 심사를 어떻게 통과하나요?', answer: '수출용 마스터 박스 내부에 철제 자기 차폐판을 덧대어 IATA PI-953 기준치 이하로 출고합니다.' }
    ]
  },
  id: {
    bcParent: 'Matriks Grosir',
    bcCurrent: 'OEM Private Label',
    badge1: 'PRIVATE LABEL & FBA OEM',
    badge2: '140 Cetakan Siap · $0 Biaya Cetakan',
    kpis: [
      { label: 'Biaya cetakan', val: '$0.00 USD' },
      { label: 'MOQ Logo OEM', val: '100' },
      { label: 'Label FBA', val: 'FNSKU + CPSC' },
      { label: 'Warna kustom', val: 'MOQ 300' }
    ],
    ctaPrimary: 'Minta Penawaran Private Label →',
    ctaSecondary: 'Pesan Sampel 1 Pcs →',
    showcasePill: 'PELUNCURAN TANPA BIAYA CETAKAN',
    showcaseMeta: ['Laser 50W', 'Kotak EVA MOQ 100', 'Kargo Udara PI-953'],
    geoTitle: 'Jawaban Langsung: Cara Membangun Merek Fidget Logam Private Label dengan $0 Biaya Cetakan',
    geoAnswer: 'Bersama FidgetSupply, merek Amazon FBA dan toko online dapat memanfaatkan 140 cetakan aktif ($0 biaya pembuatan cetakan): uji sampel berbayar 1 pcs atau sampel laser ($50/$80–$150 + ongkir), aplikasikan laser serat 50W permanen (+$0.15–$0.30/pcs) mulai MOQ 100, serta kemas dengan kotak EVA (MOQ 100) atau boks kado (MOQ 500) berikut label FNSKU & CPSC 16 CFR 1262.',
    stageBadge: 'TAHAPAN PELUNCURAN 5 LANGKAH',
    stageTitle: 'Alur Produksi OEM Cetakan Siap & MOQ Resmi Pabrik',
    tableHeaders: ['Tahap Private Label', 'Spesifikasi & Biaya Riil Pabrik', 'MOQ / Waktu Produksi'],
    tableRows: [
      ['1. Pilih SKU Cetakan Siap', 'Pilih dari 140 cetakan CNC & Zamak-3 aktif ($0.74–$470.77 EXW, $0 cetakan)', '50 pcs polos (persiapan 5–7 hari kerja)'],
      ['2. Uji Fisik Sampel', 'Sampel berbayar 1 pcs atau sampel laser ($50) / enamel ($80–$150) + ongkir pembeli', '1 pcs+ polos / 10–15 hari sampel logo'],
      ['3. Penandaan Logam Permanen', 'Laser serat MOPA 50W (+$0.15–$0.30/pcs) atau ukiran dalam + enamel (+$0.35–$0.60/pcs)', '100 pcs (produksi 10–15 hari kerja)'],
      ['4. Kemasan & Barcode FBA', 'Kantong vakum ($0), EVA (+$0.75+, MOQ 100), Boks kado (+$1.45+, MOQ 500), Kaleng (1.000+)', 'Gratis tempel label FNSKU & CPSC 14+'],
      ['5. Kepatuhan & Ekspor Global', 'Penguncian magnet CPSC 16 CFR 1262, EU RoHS 3 & karton berpelindung IATA PI-953', 'DHL / FedEx / UPS / DDP Udara & Laut']
    ],
    picksBadge: 'PILIHAN UNGGULAN PRIVATE LABEL',
    picksTitle: '8 Cetakan Siap Terbukti untuk Merek Sendiri & Amazon FBA',
    picksCta: 'Tinjau Dokumen CPSC 16 CFR 1262 & IATA PI-953 →',
    faqBadge: 'FAQ PRIVATE LABEL',
    faqTitle: 'Pertanyaan Cetakan, Barcode FNSKU & Pemesanan Sampel',
    serviceName: 'Pabrik OEM Fidget Logam Private Label & Amazon FBA',
    serviceDesc: 'Manufaktur private label pada 140 cetakan siap ($0 biaya cetakan): laser serat 50W, kemasan EVA/boks kado, label FNSKU, dan kepatuhan CPSC.',
    faqs: [
      { question: 'Apakah FidgetSupply membuat cetakan baru dari file 3D CAD pembeli?', answer: 'Tidak. Kami berfokus 100% pada kustomisasi ringan di 140 cetakan produksi aktif (FS-001 hingga FS-150), menghilangkan biaya cetakan $3.000–$5.000 dan masa tunggu 45 hari.' },
      { question: 'Opsi kustomisasi apa saja yang tersedia pada cetakan siap pakai?', answer: 'Laser serat 50W (+$0.15–$0.30/pcs, MOQ 100) atau laser dalam + isi enamel Pantone (+$0.35–$0.60/pcs); finishing PVD/anodized pada MOQ 300; kotak EVA hitam (MOQ 100), boks kado kaku (MOQ 500), atau kaleng jendela (MOQ 1.000+).' },
      { question: 'Bagaimana penjual FBA mengecek kualitas sebelum produksi massal?', answer: 'Dengan memesan sampel evaluasi berbayar 1 pcs (harga satuan + ongkos kurir internasional ditanggung pembeli, tidak dapat dikembalikan). Sampel logo membutuhkan 10–15 hari ($50 laser / $80–$150 warna).' },
      { question: 'Apakah pabrik bisa menempelkan barcode FNSKU Amazon dan label CPSC?', answer: 'Ya, kami mencetak dan menempelkan stiker FNSKU serta peringatan magnet CPSC 16 CFR 1262 (14+) pada kantong vakum, kotak EVA, atau boks.' },
      { question: 'Bagaimana magnet diamankan sesuai US CPSC 16 CFR 1262?', answer: 'Menggunakan lubang bor buta presisi, epoksi struktural, dan pelat penutup bersekrup; kami juga menyediakan 30+ model mekanis tanpa magnet.' },
      { question: 'Berapa MOQ untuk memulai toko online multi-SKU?', answer: '50 pcs per SKU untuk stok polos dan 100 pcs per SKU untuk produksi dengan logo laser dalam satu faktur ekspor Fuzhou.' },
      { question: 'Bisakah mengubah warna lapisan PVD pada cetakan yang ada?', answer: 'Ya, mulai MOQ 300 pcs per SKU tersedia PVD hitam doff, gunmetal, champagne gold, anodisasi keras Tipe III, dan stonewash.' },
      { question: 'Mengapa kantong vakum selalu disertakan pada setiap SKU?', answer: 'Melindungi logam dan bearing R188 dari kelembapan kargo laut dan oksidasi gudang ($0.00 termasuk).' },
      { question: 'Berapa lama waktu produksi OEM?', answer: '5–7 hari kerja untuk stok polos (50+ pcs) dan 10–15 hari kerja untuk pesanan laser 50W (100+ pcs).' },
      { question: 'Bagaimana pengiriman udara bermagnet lolos pemeriksaan IATA PI-953?', answer: 'Karton induk dilapisi pelat baja pelindung medan magnet agar radiasi residu berada di bawah ambang batas IATA PI-953.' }
    ]
  },
  ar: {
    bcParent: 'مصفوفة الجملة',
    bcCurrent: 'تصنيع OEM بعلامة خاصة',
    badge1: 'علامة خاصة و Amazon FBA OEM',
    badge2: '140 قالباً جاهزاً · 0$ رسوم قالب',
    kpis: [
      { label: 'تكلفة القالب الجديد', val: '$0.00 USD' },
      { label: 'الحد الأدنى للشعار', val: '100' },
      { label: 'ملصقات FBA', val: 'FNSKU + CPSC' },
      { label: 'طلاء مخصص', val: 'MOQ 300' }
    ],
    ctaPrimary: 'اطلب عرض سعر للعلامة الخاصة →',
    ctaSecondary: 'اطلب عينة تقييم (1 قطعة) →',
    showcasePill: 'انطلاق دون تكلفة قالب',
    showcaseMeta: ['حفر ليزر 50W', 'حافظة EVA MOQ 100', 'شحن جوي PI-953'],
    geoTitle: 'إجابة مباشرة: كيف تطلق علامتك التجارية لألعاب الفيدجت المعدنية برسوم قالب 0$',
    geoAnswer: 'تتيح FidgetSupply لعلامات Amazon FBA والمتاجر التوسع عبر 140 قالباً جاهزاً (رسوم قالب $0.00): اختبر أولاً عينة مدفوعة بقطعة واحدة أو عينة ليزر ($50 / $80–$150 + الشحن)، واختر حفر ليزر 50W الدائم (+$0.15–$0.30/قطعة) بدءاً من 100 قطعة مع التغليف في حافظات EVA (MOQ 100) أو علب فاخرة (MOQ 500) شاملة ملصقات FNSKU وCPSC.',
    stageBadge: 'خارطة إطلاق من 5 مراحل',
    stageTitle: 'مسار إنتاج العلامة الخاصة على القوالب الجاهزة وحدود المصنع',
    tableHeaders: ['مرحلة العلامة الخاصة', 'مواصفات المصنع والرسوم الحقيقية', 'الحد الأدنى / مدة التصنيع'],
    tableRows: [
      ['1. اختيار القوالب الجاهزة', 'اختر من 140 قالباً نشطاً CNC وZamak-3 ($0.74–$470.77 EXW، قالب 0$)', '50 قطعة سادة (تجهيز 5–7 أيام عمل)'],
      ['2. الفحص الفيزيائي للعينات', 'عينة مدفوعة 1 قطعة أو عينة ليزر ($50) / مينا ($80–$150) + شحن المشتري', 'قطعة واحدة+ سادة / 10–15 يوماً للشعار'],
      ['3. النقش المعدني الدائم', 'ليزر ألياف 50W (+$0.15–$0.30/قطعة) أو حفر عميق + مينا (+$0.35–$0.60/قطعة)', '100 قطعة (تصنيع 10–15 يوم عمل)'],
      ['4. التغليف وباركود FBA', 'كيس مفرغ ($0)، حافظة EVA (+$0.75+، 100)، علبة صلبة (+$1.45+، 500)، صفيح (+1,000)', 'يشمل لصق FNSKU وتحذيرات CPSC 14+'],
      ['5. الامتثال والشحن الدولي', 'تثبيت مغناطيس CPSC 16 CFR 1262 وEU RoHS 3 وكراتين معزولة IATA PI-953', 'DHL / FedEx / UPS / شحن DDP جوي وبحري']
    ],
    picksBadge: 'أبرز القوالب للعلامات الخاصة',
    picksTitle: '8 قوالب جاهزة ومجربة لبناء علامتك التجارية وAmazon FBA',
    picksCta: 'مراجعة مستندات CPSC 16 CFR 1262 وIATA PI-953 →',
    faqBadge: 'الأسئلة الشائعة للعلامة الخاصة',
    faqTitle: 'أسئلة حول القوالب وملصقات FNSKU والعينات',
    serviceName: 'تصنيع OEM لأدوات الفيدجت المعدنية بعلامة خاصة وAmazon FBA',
    serviceDesc: 'تصنيع بعلامة خاصة عبر 140 قالباً جاهزاً ($0 رسوم قالب): حفر ليزر 50W، تغليف EVA وعلب هدايا، ملصقات FNSKU وامتثال CPSC.',
    faqs: [
      { question: 'هل تصنع FidgetSupply قوالب جديدة كلياً من رسومات 3D CAD؟', answer: 'لا. نركز 100% على التخصيص المرن عبر 140 قالباً إنتاجياً جاهزاً (FS-001 إلى FS-150)، مما يوفر $3,000–$5,000 من تكلفة القوالب و45 يوماً من التصنيع.' },
      { question: 'ما خيارات التخصيص المتاحة على القوالب المعدنية الجاهزة؟', answer: 'ليزر ألياف 50W الدائم (+$0.15–$0.30/قطعة، MOQ 100) أو حفر عميق مع مينا بانتون (+$0.35–$0.60/قطعة)؛ ألوان PVD أو أنودة بدءاً من 300 قطعة؛ حافظات EVA (100 قطعة) وعلب صلبة (500 قطعة) وعلب صفيح (+1,000).' },
      { question: 'كيف يتحقق البائعون من الجودة قبل الطلب التجاري الكبير؟', answer: 'عبر طلب عينات مدفوعة بقطعة واحدة (يدفع المشتري سعر القطعة والشحن الدولي، غير قابلة للاسترداد). تستغرق عينة الشعار المخصص 10–15 يوماً ($50 ليزر / $80–$150 مينا).' },
      { question: 'هل تضعون ملصقات Amazon FNSKU وتحذيرات المغناطيس؟', answer: 'نعم، نطبع ونلصق باركود FNSKU الخاص بكم وملصقات الأمان CPSC 16 CFR 1262 (14+) على الأكياس أو الحافظات أو العلب.' },
      { question: 'كيف تُؤمّن المغناطيسات وفق معيار CPSC 16 CFR 1262؟', answer: 'بتجاويف مغلقة دقيقة وإيبوكسي إنشائي وأغطية مثبتة بمسامير، مع توفر أكثر من 30 موديلاً ميكانيكياً خالياً تماماً من المغناطيس.' },
      { question: 'ما الحد الأدنى للطلب لإطلاق متجر متعدد الموديلات؟', answer: 'يبدأ المخزون السادة من 50 قطعة لكل SKU والشعار المخصص بالليزر من 100 قطعة لكل SKU ضمن فاتورة تصدير موحدة.' },
      { question: 'هل يمكن تخصيص الطلاء أو الألوان على القوالب الحالية؟', answer: 'نعم، بدءاً من 300 قطعة لكل موديل نوفر طلاء PVD الأسود المطفي، والرمادي المعدني، والأنودة الصلبة، وتشطيب Stonewash.' },
      { question: 'لماذا يأتي كل منتج في كيس مفرغ من الهواء بشكل قياسي؟', answer: 'لحماية السبائك المعدنية ومحامل R188 من الرطوبة البحرية والأكسدة أثناء الشحن والتخزين ($0.00 مشمول).' },
      { question: 'ما مدة تصنيع دفعات العلامة الخاصة OEM؟', answer: '5–7 أيام عمل للطلبات السادة (50+ قطعة) و10–15 يوم عمل لدفعات ليزر 50W (100+ قطعة) بعد اعتماد التصميم.' },
      { question: 'كيف تمر الشحنات المغناطيسية جواً وفق لوائح IATA PI-953؟', answer: 'تُبطن كراتين التصدير الرئيسية بألواح عزل مغناطيسي فولاذية تُبقي الفيض المغناطيسي الخارجي دون حدود IATA PI-953.' }
    ]
  }
};

export function getPrivateLabelOemCopy(lang: SupportedLanguage): PrivateLabelOemCopy {
  return COPY[lang] || COPY.en;
}
