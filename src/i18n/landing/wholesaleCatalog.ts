import type { SupportedLanguage } from '../config';
import type { FaqItem } from './privateLabelOem';

export interface WholesaleCatalogCopy {
  bcCurrent: string;
  badge1: string;
  badge2: string;
  moldUnit: string;
  kpis: { label: string }[];
  ctaPrimaryPrefix: string;
  ctaPrimarySuffix: string;
  ctaSecondary: string;
  showcasePill: string;
  showcaseAlt: string;
  showcaseMeta: [string, string, string];
  geoTitle: string;
  geoAnswer: string;
  matrixBadge: string;
  matrixTitle: string;
  skuUnit: string;
  tableHeaders: [string, string, string, string, string];
  bandMaterials: [string, string, string, string];
  bandChannels: [string, string, string, string];
  picksBadge: string;
  picksTitle: string;
  faqBadge: string;
  faqTitle: string;
  faqs: FaqItem[];
  catalogName: string;
}

const COPY: Record<SupportedLanguage, WholesaleCatalogCopy> = {
  en: {
    bcCurrent: '140-SKU Price List',
    badge1: 'FACTORY-DIRECT EXW MATRIX',
    badge2: '140 Active Molds · $0.00 Tooling',
    moldUnit: 'Molds',
    kpis: [
      { label: 'Entry Tier (≤$3.50)' },
      { label: 'Core Retail ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Exotic / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Browse All',
    ctaPrimarySuffix: 'SKUs →',
    ctaSecondary: '1-Pc Sample Program →',
    showcasePill: '3-TIER VOLUME PRICING',
    showcaseAlt: 'FidgetSupply 140-SKU wholesale metal fidget price list across zinc alloy, aluminum, stainless steel, and zirconium',
    showcaseMeta: ['MOQ 50 Blank', 'MOQ 100 Laser Logo', '50-Pc Mix-SKU OK'],
    geoTitle: 'Direct Answer: 140-SKU Wholesale Metal Fidget Price Tiers & MOQs',
    geoAnswer: 'FidgetSupply\'s wholesale catalog covers 140 ready-to-produce metal EDC molds (FS-001 to FS-150) organized into four factory price bands: Entry Promo ($0.74–$3.50), Core E-Commerce ($3.51–$10.00), Precision CNC Stainless & Brass ($10.01–$45.00), and Collector Zirconium/Exotic ($45.01–$470.77). Every SKU requires $0.00 mold fees, starts at 50 pcs blank (or Mix-SKU starter batch) and 100 pcs for 50W fiber laser engraving (+$0.15–$0.30/pc), with paid 1-piece physical evaluation samples available.',
    matrixBadge: 'FACTORY PRICE BAND ARCHITECTURE',
    matrixTitle: '140 Ready Molds Grouped by Wholesale EXW Price Band',
    skuUnit: 'SKUs',
    tableHeaders: ['Price Band (500-Pc EXW)', 'Active Molds', 'Primary Materials & Process', 'Best-Fit Buyer Channels', 'Typical Retail Range'],
    bandMaterials: [
      'Zamak-3 High-Pressure Die Casting, Electroplated / Antique Finish',
      'Zamak-3 Multi-Layer, 6063 Anodized Aluminum, Brass Hybrid, PTFE Sliders',
      '5-Axis CNC 304/316 Stainless Steel, Ceramic Detents, Acoustic Tuning Forks',
      'CNC Zirconium (Zr702), Titanium, Damascus, Abalone Inlay, Multi-Metal'
    ],
    bandChannels: [
      'Corporate trade-show giveaways, promotional swag, high-volume gift bundles',
      'Amazon FBA private label, short-video ASMR retail, Shopify EDC brands',
      'Boutique EDC stores, crowdfunding drops, VIP executive gifts',
      'Collector EDC clubs, limited serialized editions (001/100)'
    ],
    picksBadge: 'REPRESENTATIVE BENCHMARKS ACROSS ALL 4 TIERS',
    picksTitle: 'Flagship Models From $0.74 Entry to Collector CNC',
    faqBadge: 'WHOLESALE CATALOG FAQ',
    faqTitle: 'Pricing Tiers, MOQ & Factory Sourcing Questions',
    catalogName: 'FidgetSupply 140-SKU Wholesale Metal EDC Fidget Price List',
    faqs: [
      { question: 'What is the full EXW factory wholesale price range across FidgetSupply’s 140 ready molds?', answer: 'Across our 140 active molds (FS-001 to FS-150), 500-piece tier EXW prices span from $0.74/pc for compact Zamak-3 pocket spinners (FS-009) up to $470.77/pc for multi-metal CNC Zirconium & Titanium collector editions. Over 85 models fall in the high-velocity $1.70–$12.50 wholesale band.' },
      { question: 'How are volume price tiers structured (50 pcs vs. 200 pcs vs. 500+ pcs)?', answer: 'Every product page displays transparent 3-tier factory pricing: Tier 1 (50–199 pcs), Tier 2 (200–499 pcs), and Tier 3 (500+ pcs). Moving from 50 pcs to 500 pcs typically lowers unit factory cost by 15%–22%, with additional discounts available for 1,000+ piece runs.' },
      { question: 'Do we have to pay mold or tooling fees when sourcing from the 140-SKU wholesale catalog?', answer: 'No. All 140 catalog SKUs use existing hardened die-casting molds and CNC fixtures maintained across our partner workshops, so your mold tooling cost is $0.00.' },
      { question: 'Can we order a 50-piece Mix-SKU starter assortment instead of 50 pieces of one single model?', answer: 'Yes. For ready-stock blank models, we support Mix-SKU starter batches so retail shops, e-commerce sellers, and distributors can test 5 to 10 models in their first shipment before scaling winning SKUs.' },
      { question: 'What is the difference in wholesale cost between Zamak-3 zinc alloy, 6063 aluminum, and CNC 304 stainless steel?', answer: 'High-pressure die-cast Zamak-3 zinc alloy sits in the $0.74–$6.80 wholesale tier, CNC 6063 anodized aluminum ranges from $4.50–$12.55, and 5-axis CNC 304/316 stainless steel ranges from $8.49–$43.94.' },
      { question: 'How much does custom 50W fiber laser engraving or deep color-fill logo branding add to the catalog unit price?', answer: 'Standard monochrome 50W MOPA fiber laser engraving adds +$0.15 to $0.30/pc (MOQ 100 pcs, $0 setup fee), while Deep Laser Engraving + Pantone Enamel Color Fill adds +$0.35 to $0.60/pc (MOQ 100–200 pcs).' },
      { question: 'What packaging options are available and how much do they add per unit?', answer: 'Every unit includes an individual Vacuum Anti-Oxidation Pouch ($0.00, MOQ 50). Turnkey upgrades are Stock-Mold Black EVA Zipper Cases (+$0.75+/pc, MOQ 100), Custom Two-Piece Rigid Gift Boxes (+$1.45+/pc, MOQ 500), and Window Metal Tin Boxes (MOQ 1,000+ MTO).' },
      { question: 'Can I receive the complete 140-SKU catalog as a downloadable Excel / PDF price sheet?', answer: 'Yes. Enter your work email in the inline bar above (or message +86 187 5012 6315 on WhatsApp) and our Fuzhou export desk will send the complete 140-SKU spreadsheet with exact 50/200/500-pc EXW pricing, weights, dimensions, and magnet specs.' },
      { question: 'Can we order paid 1-piece samples from the catalog before placing a bulk order?', answer: 'Yes. Paid 1-piece evaluation samples are available across all 140 models; sample unit fees and international courier shipping are paid by the buyer and are non-refundable.' },
      { question: 'Do you handle IATA PI953 magnetic shielding and international freight logistics for bulk orders?', answer: 'Yes. Our Fuzhou Export Hub prepares blank orders in 5–7 business days and custom logo runs in 10–15 business days, packs magnetic cartons with ferromagnetic shielding under IATA DGR PI953, and hands off to EXW/FOB/DDP Air or Sea carriers.' }
    ]
  },
  de: {
    bcCurrent: '140-SKU Preisliste',
    badge1: 'DIREKTE EXW-PREISMATRIX',
    badge2: '140 Aktive Formen · $0 Werkzeugkosten',
    moldUnit: 'Formen',
    kpis: [
      { label: 'Einstieg (≤$3.50)' },
      { label: 'Core Retail ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Exoten / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Alle',
    ctaPrimarySuffix: 'SKUs ansehen →',
    ctaSecondary: '1-Stück-Musterprogramm →',
    showcasePill: '3-STUFIGE STAFFELPREISE',
    showcaseAlt: 'FidgetSupply 140-SKU Großhandel-Preisliste für Zink, Aluminium, Edelstahl und Zirkonium',
    showcaseMeta: ['MOQ 50 Blanko', 'MOQ 100 Laserlogo', '50-Stk. Mix-SKU OK'],
    geoTitle: 'Direktantwort: Preisbänder & MOQs für 140 Metall-Fidget-Serienformen',
    geoAnswer: 'Der Großhandelskatalog umfasst 140 fertige Metall-Serienformen (FS-001–FS-150) in vier EXW-Preisbändern: Promo-Einstieg ($0.74–$3.50), Core E-Commerce ($3.51–$10.00), CNC Edelstahl & Messing ($10.01–$45.00) und Sammler-Zirkonium ($45.01–$470.77). $0 Formkosten, MOQ 50 blanko (oder Mix-SKU), 100 mit 50W-Laser (+$0.15–$0.30) sowie bezahlte 1-Stück-Muster.',
    matrixBadge: 'WERKSPREIS-ARCHITEKTUR',
    matrixTitle: '140 Serienformen nach Großhandels-EXW-Preisklassen',
    skuUnit: 'SKUs',
    tableHeaders: ['Preisband (500-Stk. EXW)', 'Aktive Formen', 'Hauptmaterial & Verfahren', 'Zielkanäle', 'Typischer UVP'],
    bandMaterials: [
      'Zamak-3 Druckguss, Galvanik / Antik-Finish',
      'Zamak-3 Mehrlagen, 6063 Alu eloxiert, Messing-Hybrid, PTFE-Slider',
      '5-Achs-CNC 304/316 Edelstahl, Keramikkugeln, Akustik-Stimmgabeln',
      'CNC Zirkonium (Zr702), Titan, Damast, Abalone-Intarsien'
    ],
    bandChannels: [
      'Messe-Streuartikel, Werbegeschenke, Event-Bundles',
      'Amazon FBA Private Label, E-Commerce-Shops, EDC-Händler',
      'EDC-Boutiquen, Crowdfunding-Drops, VIP-Präsente',
      'Sammler-Editionen (001/100 limitiert)'
    ],
    picksBadge: 'BENCHMARKS AUS ALLEN 4 PREISKlassen',
    picksTitle: 'Schlüsselmodelle von $0.74 Einstieg bis CNC-Sammleredition',
    faqBadge: 'GROSSHANDELSKATALOG FAQ',
    faqTitle: 'Fragen zu Preisstaffeln, MOQ & Beschaffung',
    catalogName: 'FidgetSupply 140-SKU Großhandelspreisliste Metall-Fidgets',
    faqs: [
      { question: 'Wie groß ist die gesamte EXW-Preisspanne über alle 140 Formen?', answer: 'Bei 500 Stück reichen EXW-Preise von $0.74/Stk. (FS-009) bis $470.77/Stk. (CNC Zirkonium/Titan); über 85 Modelle liegen zwischen $1.70 und $12.50.' },
      { question: 'Wie sind die Mengenstaffeln (50 / 200 / 500+ Stk.) aufgebaut?', answer: 'Jede Produktseite zeigt 3 Stufen (50–199, 200–499, 500+); ab 500 Stk. sinkt der Stückpreis typisch um 15%–22%.' },
      { question: 'Fallen bei den 140 Katalogmodellen Werkzeugkosten an?', answer: 'Nein, alle 140 SKUs nutzen fertige gehärtete Serienformen zu $0.00 Werkzeugkosten.' },
      { question: 'Ist ein 50-Stück Mix-SKU Einstiegspaket möglich?', answer: 'Ja, bei vorrätigen Blankomodellen kombinieren Sie 5–10 SKUs in einer Starterlieferung.' },
      { question: 'Wie unterscheiden sich Zamak-3, 6063 Alu und CNC 304 Edelstahl preislich?', answer: 'Zamak-3 liegt bei $0.74–$6.80, CNC 6063 Alu bei $4.50–$12.55 und CNC Edelstahl bei $8.49–$43.94.' },
      { question: 'Was kostet 50W Faserlasergravur oder Tiefen-Emaille?', answer: '50W Faserlaser +$0.15–$0.30/Stk. (MOQ 100); Tiefenlaser + Pantone-Emaille +$0.35–$0.60/Stk. (MOQ 100–200).' },
      { question: 'Welche Verpackungsstufen gibt es ab Werk?', answer: 'Inklusive Vakuum-Schutzbeutel ($0.00, MOQ 50); Lager-EVA-Etui (+$0.75+/Stk., MOQ 100); Hartbox (+$1.45+/Stk., MOQ 500); Metalldose (MOQ 1.000+).' },
      { question: 'Kann ich die vollständige 140-SKU Excel-/PDF-Liste erhalten?', answer: 'Ja, tragen Sie Ihre Firmen-E-Mail im Inline-Feld ein oder schreiben Sie per WhatsApp an +86 187 5012 6315.' },
      { question: 'Können bezahlte 1-Stück-Muster vorab bestellt werden?', answer: 'Ja, auf alle 140 Modelle; Muster- und Kurierkosten trägt der Käufer ohne Rückerstattung.' },
      { question: 'Wie laufen Produktionszeit und IATA PI953 Luftfrachtschutz ab?', answer: 'Blanko-Versandvorbereitung 5–7 Werktage, Logoserien 10–15 Werktage; magnetische Kartons erhalten PI953-Abschirmung ab Fuzhou.' }
    ]
  },
  fr: {
    bcCurrent: 'Grille Tarifaire 140 SKU',
    badge1: 'TARIF DIRECT USINE EXW',
    badge2: '140 Moules Actifs · 0 $ Outillage',
    moldUnit: 'Moules',
    kpis: [
      { label: 'Entrée (≤$3.50)' },
      { label: 'Cœur Retail ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Exotique / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Parcourir les',
    ctaPrimarySuffix: 'SKU →',
    ctaSecondary: 'Programme Échantillon 1 Pce →',
    showcasePill: 'TARIFICATION EN 3 PALIERS',
    showcaseAlt: 'Catalogue grossiste 140 SKU FidgetSupply en alliage de zinc, aluminium, acier inoxydable et zirconium',
    showcaseMeta: ['MOQ 50 Neutres', 'MOQ 100 Logo Laser', 'Mix-SKU 50 Pcs OK'],
    geoTitle: 'Réponse Directe : Paliers de Prix & MOQ sur 140 Moules Métal',
    geoAnswer: 'Le catalogue grossiste couvre 140 moules EDC métal prêts (FS-001 à FS-150) en quatre segments EXW : Entrée Promo ($0.74–$3.50), Cœur E-Commerce ($3.51–$10.00), Inox/Laiton CNC ($10.01–$45.00) et Zirconium Collector ($45.01–$470.77). 0 $ d’outillage, MOQ 50 neutres (ou Mix-SKU), 100 avec laser 50W (+$0.15–$0.30/pce) et échantillons payants dès 1 pièce.',
    matrixBadge: 'ARCHITECTURE TARIFAIRE USINE',
    matrixTitle: '140 Moules Classés par Tranche de Prix EXW',
    skuUnit: 'SKU',
    tableHeaders: ['Tranche EXW (500 pcs)', 'Moules Actifs', 'Matériaux & Procédé', 'Canaux Adaptés', 'Prix Public Indicatif'],
    bandMaterials: [
      'Zamak-3 injection haute pression, finition électrolytique / antique',
      'Zamak-3 multicouche, Alu 6063 anodisé, Laiton, Sliders PTFE',
      'CNC 5 axes Inox 304/316, billes céramiques, diapasons acoustiques',
      'Zirconium Zr702 CNC, Titane, Damas, nacre d’ormeau'
    ],
    bandChannels: [
      'Salons professionnels, goodies d’entreprise, lots événementiels',
      'Amazon FBA marque privée, boutiques EDC e-commerce',
      'Boutiques spécialisées EDC, coffrets direction VIP',
      'Éditions limitées numérotées (001/100)'
    ],
    picksBadge: 'MODÈLES PHARES DES 4 GAMMES',
    picksTitle: 'Du Modèle d’Appel à $0.74 aux Pièces CNC Collector',
    faqBadge: 'FAQ CATALOGUE GROSSISTE',
    faqTitle: 'Questions sur Paliers, MOQ & Achat Direct Usine',
    catalogName: 'Catalogue Grossiste FidgetSupply 140 SKU Métal EDC',
    faqs: [
      { question: 'Quelle est la fourchette EXW sur les 140 moules prêts ?', answer: 'Au palier 500 pcs, les prix EXW vont de $0.74/pce (FS-009) à $470.77/pce (Zirconium/Titane), avec plus de 85 modèles entre $1.70 et $12.50.' },
      { question: 'Comment sont structurés les paliers 50 / 200 / 500+ pièces ?', answer: 'Le passage de 50 à 500 pcs réduit généralement le coût unitaire de 15 % à 22 %.' },
      { question: 'Y a-t-il des frais de moule sur ce catalogue 140 SKU ?', answer: 'Non, 0,00 $ grâce à nos moules et gabarits CNC déjà en production.' },
      { question: 'Puis-je commander un lot Mix-SKU de 50 pièces ?', answer: 'Oui sur nos modèles en stock neutre afin de tester 5 à 10 références.' },
      { question: 'Quelle différence de coût entre Zamak-3, Alu 6063 et Inox 304 CNC ?', answer: 'Zamak-3 : $0.74–$6.80 ; Alu 6063 CNC : $4.50–$12.55 ; Inox 304/316 CNC : $8.49–$43.94.' },
      { question: 'Quel supplément pour le laser 50W ou l’émail Pantone ?', answer: 'Laser fibre 50W +$0.15–$0.30/pce (MOQ 100) ; gravure profonde + émail +$0.35–$0.60/pce.' },
      { question: 'Quels conditionnements propose l’usine ?', answer: 'Pochette sous vide ($0.00, MOQ 50) incluse ; étui EVA stock (+$0.75+/pce, MOQ 100) ; coffret rigide (+$1.45+/pce, MOQ 500) ; boîte métal (MOQ 1 000+).' },
      { question: 'Comment télécharger la grille tarifaire complète 140 SKU ?', answer: 'Saisissez votre e-mail pro dans la barre ci-dessus ou contactez +86 187 5012 6315 sur WhatsApp.' },
      { question: 'Des échantillons payants à l’unité sont-ils disponibles ?', answer: 'Oui sur les 140 modèles ; unité et port international à la charge de l’acheteur sans remboursement.' },
      { question: 'Quels délais usine et blindage IATA PI953 ?', answer: '5–7 jours ouvrés pour stock neutre, 10–15 jours ouvrés avec logo, avec blindage PI953 depuis Fuzhou.' }
    ]
  },
  nl: {
    bcCurrent: '140-SKU Prijslijst',
    badge1: 'FABRIEKSDIRECTE EXW-MATRIX',
    badge2: '140 Actieve Mallen · $0 Matrijzen',
    moldUnit: 'Mallen',
    kpis: [
      { label: 'Instap (≤$3.50)' },
      { label: 'Core Retail ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Exotisch / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Bekijk Alle',
    ctaPrimarySuffix: 'SKU’s →',
    ctaSecondary: '1-Stuk Monsterprogramma →',
    showcasePill: '3-TRAPS STAFFELPRIJZEN',
    showcaseAlt: 'FidgetSupply 140-SKU groothandel prijslijst in zinklegering, aluminium, RVS en zirkonium',
    showcaseMeta: ['MOQ 50 Blanco', 'MOQ 100 Laserlogo', '50-St. Mix-SKU OK'],
    geoTitle: 'Direct Antwoord: Groothandel Prijsschijven & MOQ voor 140 Mallen',
    geoAnswer: 'De catalogus omvat 140 vaste metalen mallen (FS-001 t/m FS-150) in vier EXW-klassen: Instap ($0.74–$3.50), Core E-Commerce ($3.51–$10.00), CNC RVS & Messing ($10.01–$45.00) en Collector Zirkonium ($45.01–$470.77). $0 matrijskosten, MOQ 50 blanco (ook Mix-SKU), 100 met 50W fiberlaser (+$0.15–$0.30/st.), plus betaalde 1-stuk proefmonsters.',
    matrixBadge: 'FABRIEKSPRIJSBANDEN',
    matrixTitle: '140 Mallen Gegroepeerd per Groothandelsprijsband',
    skuUnit: 'SKU’s',
    tableHeaders: ['Prijsband (500-St. EXW)', 'Actieve Mallen', 'Materialen & Proces', 'Beste Verkoopkanalen', 'Richtprijs Retail'],
    bandMaterials: [
      'Zamak-3 hogedruk spuitgietwerk, gegalvaniseerd / antiek',
      'Zamak-3 meerlaags, 6063 geanodiseerd alu, messing, PTFE sliders',
      '5-assig CNC 304/316 RVS, keramische kogels, stemvork-akoestiek',
      'CNC Zirkonium (Zr702), Titanium, Damascus, Abalone inleg'
    ],
    bandChannels: [
      'Beurzen, relatiegeschenken, grote eventbundels',
      'Amazon FBA private label, e-commerce EDC merken',
      'Boutique EDC shops, VIP directiegeschenken',
      'Verzamelaarsclubs, genummerde edities (001/100)'
    ],
    picksBadge: 'BENCHMARKS UIT ALLE 4 KLASSEN',
    picksTitle: 'Topmodellen van $0.74 Instap tot Collector CNC',
    faqBadge: 'GROOTHANDEL CATALOGUS FAQ',
    faqTitle: 'Vragen over Prijsstaffels, MOQ & Inkoop',
    catalogName: 'FidgetSupply 140-SKU Groothandel Prijslijst Metalen Fidgets',
    faqs: [
      { question: 'Wat is de EXW-prijsbandbreedte over alle 140 mallen?', answer: 'Bij 500 stuks variëren EXW-prijzen van $0.74/st. (FS-009) tot $470.77/st. (Zirkonium/Titanium).' },
      { question: 'Hoe werken de staffels (50 / 200 / 500+ st.)?', answer: 'Bij 500 stuks daalt de stuksprijs gemiddeld 15%–22% ten opzichte van 50 stuks.' },
      { question: 'Zijn er matrijs- of instelkosten?', answer: 'Nee, $0.00 op alle 140 bestaande seriemallen.' },
      { question: 'Is een 50-stuk Mix-SKU proeforder mogelijk?', answer: 'Ja, voor voorraadmodellen kunt u 5 tot 10 SKU’s mixen.' },
      { question: 'Wat is het prijsverschil tussen Zamak-3, 6063 Alu en CNC RVS?', answer: 'Zamak-3: $0.74–$6.80; 6063 Alu: $4.50–$12.55; CNC RVS 304/316: $8.49–$43.94.' },
      { question: 'Wat kost 50W fiberlaser of diepe emaille-inleg?', answer: '50W laser +$0.15–$0.30/st. (MOQ 100); diepe laser + emaille +$0.35–$0.60/st.' },
      { question: 'Welke verpakkingen biedt de fabriek?', answer: 'Inclusief vacuüm anti-oxidatiezak ($0.00, MOQ 50); voorraad EVA-etui (+$0.75+/st., MOQ 100); luxe doos (+$1.45+/st., MOQ 500); blikken doos (1.000+).' },
      { question: 'Kan ik de volledige Excel-/PDF-prijslijst downloaden?', answer: 'Vul uw zakelijk e-mailadres in of app +86 187 5012 6315 op WhatsApp.' },
      { question: 'Kan ik eerst betaalde 1-stuk monsters bestellen?', answer: 'Ja, op alle 140 modellen; monster- en koerierskosten zijn voor rekening koper en niet restitueerbaar.' },
      { question: 'Hoe verloopt productie en IATA PI953 afscherming?', answer: 'Blanco verzendvoorbereiding in 5–7 werkdagen, logoproductie 10–15 werkdagen, inclusief PI953-afscherming vanuit Fuzhou.' }
    ]
  },
  es: {
    bcCurrent: 'Lista de Precios 140 SKU',
    badge1: 'MATRIZ EXW DIRECTA DE FÁBRICA',
    badge2: '140 Moldes Activos · $0 Utillaje',
    moldUnit: 'Moldes',
    kpis: [
      { label: 'Gama Entrada (≤$3.50)' },
      { label: 'Retail Core ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Exótico / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Ver los',
    ctaPrimarySuffix: 'SKUs →',
    ctaSecondary: 'Programa Muestra 1 Ud. →',
    showcasePill: 'PRECIOS EN 3 TRAMOS',
    showcaseAlt: 'Catálogo mayorista 140 SKU de FidgetSupply en zinc, aluminio, acero inoxidable y circonio',
    showcaseMeta: ['MOQ 50 Neutro', 'MOQ 100 Láser', 'Mix-SKU 50 Uds. OK'],
    geoTitle: 'Respuesta Directa: Bandas de Precio EXW y MOQs para 140 Moldes',
    geoAnswer: 'Nuestro catálogo mayorista abarca 140 moldes metálicos listos (FS-001 a FS-150) en cuatro franjas EXW: Promocional ($0.74–$3.50), Core E-Commerce ($3.51–$10.00), Inox/Latón CNC ($10.01–$45.00) y Circonio Colección ($45.01–$470.77). $0 en moldes, MOQ 50 sin logo (o Mix-SKU), 100 con láser 50W (+$0.15–$0.30/ud.) y muestras pagadas desde 1 unidad.',
    matrixBadge: 'ARQUITECTURA DE PRECIOS DE FÁBRICA',
    matrixTitle: '140 Moldes Agrupados por Banda de Precio Mayorista',
    skuUnit: 'SKUs',
    tableHeaders: ['Banda EXW (500 Uds.)', 'Moldes Activos', 'Materiales y Proceso', 'Canales Ideales', 'Rango PVP Habitual'],
    bandMaterials: [
      'Fundición Zamak-3 alta presión, galvanoplastia / acabado antiguo',
      'Zamak-3 multicapa, Aluminio 6063 anodizado, Latón, Sliders PTFE',
      'CNC 5 ejes Acero 304/316, bolas cerámicas, diapasones acústicos',
      'Circonio Zr702 CNC, Titanio, Damasco, nácar abulón'
    ],
    bandChannels: [
      'Ferias comerciales, regalos promocionales, grandes campañas',
      'Amazon FBA marca privada, tiendas online EDC',
      'Tiendas especializadas EDC, regalos ejecutivos VIP',
      'Ediciones limitadas seriadas para coleccionistas (001/100)'
    ],
    picksBadge: 'MODELOS REFERENCIA DE LAS 4 BANDAS',
    picksTitle: 'Desde Modelos Económicos de $0.74 hasta CNC de Colección',
    faqBadge: 'FAQ CATÁLOGO MAYORISTA',
    faqTitle: 'Preguntas sobre Escalas, MOQ y Compra en Fábrica',
    catalogName: 'Lista de Precios Mayorista FidgetSupply 140 SKU Metálicos',
    faqs: [
      { question: '¿Cuál es el rango EXW completo entre los 140 moldes?', answer: 'En el tramo de 500 uds. va desde $0.74/ud. (FS-009) hasta $470.77/ud. (Circonio/Titanio), con más de 85 SKUs entre $1.70 y $12.50.' },
      { question: '¿Cómo funcionan los tramos de 50, 200 y 500+ piezas?', answer: 'Al pasar de 50 a 500 piezas el coste unitario baja típicamente entre un 15% y 22%.' },
      { question: '¿Se cobran gastos de molde o utillaje?', answer: 'No, todos los 140 moldes son existentes con coste de utillaje $0.00.' },
      { question: '¿Puedo pedir un surtido Mix-SKU de 50 unidades?', answer: 'Sí, en stock neutro puede combinar 5 a 10 modelos.' },
      { question: '¿Qué diferencia de precio hay entre Zamak-3, Aluminio 6063 e Inox 304?', answer: 'Zamak-3: $0.74–$6.80; Aluminio 6063: $4.50–$12.55; Acero 304 CNC: $8.49–$43.94.' },
      { question: '¿Cuánto suma el láser 50W o el esmalte Pantone?', answer: 'Láser 50W +$0.15–$0.30/ud. (MOQ 100); grabado profundo + esmalte +$0.35–$0.60/ud.' },
      { question: '¿Qué opciones de empaque ofrecen?', answer: 'Bolsa al vacío ($0.00, MOQ 50) incluida; estuche EVA stock (+$0.75+/ud., MOQ 100); caja rígida (+$1.45+/ud., MOQ 500); lata metálica (MOQ 1.000+).' },
      { question: '¿Cómo solicito la hoja Excel/PDF de los 140 SKUs?', answer: 'Ingrese su correo en la barra superior o escríbanos por WhatsApp al +86 187 5012 6315.' },
      { question: '¿Se pueden pedir muestras pagadas de 1 unidad?', answer: 'Sí en los 140 moldes; muestra y flete corren por cuenta del comprador y no son reembolsables.' },
      { question: '¿Cómo gestionan tiempos de fábrica y blindaje IATA PI953?', answer: '5–7 días hábiles preparación sin logo, 10–15 días hábiles con logo, con blindaje ferromagnético PI953 desde Fuzhou.' }
    ]
  },
  it: {
    bcCurrent: 'Listino 140 SKU',
    badge1: 'MATRICE EXW DIRETTA DI FABBRICA',
    badge2: '140 Stampi Attivi · $0 Stampo',
    moldUnit: 'Stampi',
    kpis: [
      { label: 'Base (≤$3.50)' },
      { label: 'Core Retail ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Esotici / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Esplora Tutti i',
    ctaPrimarySuffix: 'SKU →',
    ctaSecondary: 'Programma Campione 1 Pz →',
    showcasePill: 'LISTINO A 3 FASCE',
    showcaseAlt: 'Listino ingrosso 140 SKU FidgetSupply in lega di zinco, alluminio, acciaio inox e zirconio',
    showcaseMeta: ['MOQ 50 Neutri', 'MOQ 100 Logo Laser', 'Mix-SKU 50 Pz OK'],
    geoTitle: 'Risposta Diretta: Fasce di Prezzo EXW & MOQ sui 140 Stampi',
    geoAnswer: 'Il catalogo ingrosso include 140 stampi in metallo pronti (FS-001–FS-150) in quattro fasce EXW: Promo ($0.74–$3.50), Core E-Commerce ($3.51–$10.00), Inox/Ottone CNC ($10.01–$45.00) e Zirconio Collezione ($45.01–$470.77). $0 spese stampo, MOQ 50 neutri (o Mix-SKU), 100 con laser 50W (+$0.15–$0.30/pz) e campioni a pagamento da 1 pezzo.',
    matrixBadge: 'STRUTTURA PREZZI DI FABBRICA',
    matrixTitle: '140 Stampi Suddivisi per Fascia di Prezzo EXW',
    skuUnit: 'SKU',
    tableHeaders: ['Fascia EXW (500 Pz)', 'Stampi Attivi', 'Materiali & Lavorazione', 'Canali Ideali', 'Prezzo Retail Tipico'],
    bandMaterials: [
      'Pressofusione Zamak-3, galvanica / finitura anticata',
      'Zamak-3 multistrato, Alluminio 6063 anodizzato, Ottone, Slider PTFE',
      'CNC 5 assi Acciaio 304/316, sfere ceramiche, diapason acustici',
      'Zirconio Zr702 CNC, Titanio, Damasco, inserti Abalone'
    ],
    bandChannels: [
      'Fiere, gadget promozionali, grandi campagne aziendali',
      'Amazon FBA private label, shop online EDC',
      'Negozi specializzati EDC, regali VIP dirigenti',
      'Edizioni limitate numerate da collezione (001/100)'
    ],
    picksBadge: 'MODELLI DI RIFERIMENTO DELLE 4 FASCE',
    picksTitle: 'Dal Modello Entry da $0.74 ai Pezzi CNC da Collezione',
    faqBadge: 'FAQ CATALOGO INGROSSO',
    faqTitle: 'Domande su Scaglioni, MOQ & Acquisto Diretto',
    catalogName: 'Listino Ingrosso FidgetSupply 140 SKU Metallo EDC',
    faqs: [
      { question: 'Qual è l’intera fascia di prezzo EXW sui 140 stampi?', answer: 'Sul lotto da 500 pz varia da $0.74/pz (FS-009) a $470.77/pz (Zirconio/Titanio), con oltre 85 SKU tra $1.70 e $12.50.' },
      { question: 'Come funzionano gli scaglioni da 50, 200 e 500+ pezzi?', answer: 'Passando da 50 a 500 pezzi il prezzo di fabbrica cala in media del 15%–22%.' },
      { question: 'Sono previsti costi di stampo o attrezzatura?', answer: 'No, $0.00 su tutti i 140 stampi di serie attivi.' },
      { question: 'È possibile ordinare un assortimento Mix-SKU da 50 pezzi?', answer: 'Sì, sui modelli neutri a stock potete combinare 5–10 referenze.' },
      { question: 'Che differenza c’è tra Zamak-3, Alluminio 6063 e Acciaio 304 CNC?', answer: 'Zamak-3: $0.74–$6.80; Alluminio 6063: $4.50–$12.55; Acciaio 304 CNC: $8.49–$43.94.' },
      { question: 'Quanto costa l’incisione laser 50W o lo smalto Pantone?', answer: 'Laser 50W +$0.15–$0.30/pz (MOQ 100); incisione profonda + smalto +$0.35–$0.60/pz.' },
      { question: 'Quali opzioni di confezionamento offrite?', answer: 'Bustina sottovuoto ($0.00, MOQ 50) inclusa; custodia EVA stock (+$0.75+/pz, MOQ 100); cofanetto rigido (+$1.45+/pz, MOQ 500); scatola metallo (1.000+).' },
      { question: 'Posso scaricare il file Excel / PDF completo dei 140 SKU?', answer: 'Inserisci la tua email aziendale nella barra sopra o scrivi su WhatsApp al +86 187 5012 6315.' },
      { question: 'Si possono ordinare campioni pagati da 1 pezzo?', answer: 'Sì per tutti i 140 stampi; campione e corriere sono a carico acquirente senza rimborso.' },
      { question: 'Come gestite tempi e schermatura aerea IATA PI953?', answer: '5–7 giorni lavorativi preparazione neutri, 10–15 giorni lavorativi con logo, con schermatura PI953 da Fuzhou.' }
    ]
  },
  pt: {
    bcCurrent: 'Tabela 140 SKU',
    badge1: 'MATRIZ EXW DIRETA DE FÁBRICA',
    badge2: '140 Moldes Ativos · $0 Molde',
    moldUnit: 'Moldes',
    kpis: [
      { label: 'Entrada (≤$3.50)' },
      { label: 'Varejo Core ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Exótico / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Ver Todos os',
    ctaPrimarySuffix: 'SKUs →',
    ctaSecondary: 'Programa Amostra 1 Un. →',
    showcasePill: 'PREÇOS EM 3 FAIXAS',
    showcaseAlt: 'Catálogo atacado 140 SKU FidgetSupply em liga de zinco, alumínio, aço inox e zircônio',
    showcaseMeta: ['MOQ 50 Lisos', 'MOQ 100 Laser Logo', 'Mix-SKU 50 Un. OK'],
    geoTitle: 'Resposta Direta: Faixas de Preço EXW & MOQs para 140 Moldes',
    geoAnswer: 'O catálogo de atacado cobre 140 moldes metálicos prontos (FS-001 a FS-150) em quatro bandas EXW: Promoção ($0.74–$3.50), Core E-Commerce ($3.51–$10.00), Inox/Latão CNC ($10.01–$45.00) e Zircônio Coleção ($45.01–$470.77). $0 em moldes, MOQ 50 lisos (ou Mix-SKU), 100 com laser 50W (+$0.15–$0.30/un.) e amostras pagas de 1 peça.',
    matrixBadge: 'ARQUITETURA DE PREÇOS DA FÁBRICA',
    matrixTitle: '140 Moldes Agrupados por Faixa de Preço EXW',
    skuUnit: 'SKUs',
    tableHeaders: ['Faixa EXW (500 Un.)', 'Moldes Ativos', 'Materiais & Processo', 'Canais Ideais', 'Preço Sugerido Varejo'],
    bandMaterials: [
      'Zamak-3 injeção sob pressão, galvanoplastia / envelhecido',
      'Zamak-3 multicamada, Alumínio 6063 anodizado, Latão, Sliders PTFE',
      'CNC 5 eixos Inox 304/316, esferas cerâmicas, diapasões acústicos',
      'Zircônio Zr702 CNC, Titânio, Damasco, madrepérola abalone'
    ],
    bandChannels: [
      'Feiras corporativas, brindes promocionais em grande volume',
      'Amazon FBA marca própria, lojas e-commerce EDC',
      'Boutiques EDC, presentes executivos VIP',
      'Clubes de colecionadores, séries numeradas (001/100)'
    ],
    picksBadge: 'BENCHMARKS DAS 4 FAIXAS',
    picksTitle: 'Modelos de $0.74 de Entrada até CNC de Colecionador',
    faqBadge: 'FAQ CATÁLOGO ATACADO',
    faqTitle: 'Dúvidas sobre Tabelas, MOQ e Compra Direta',
    catalogName: 'Tabela de Preços Atacado FidgetSupply 140 SKU Metálicos',
    faqs: [
      { question: 'Qual a faixa total de preços EXW nos 140 moldes?', answer: 'No lote de 500 un. vai de $0.74/un. (FS-009) a $470.77/un. (Zircônio/Titânio), com mais de 85 SKUs entre $1.70 e $12.50.' },
      { question: 'Como funcionam as faixas de 50, 200 e 500+ peças?', answer: 'Ao migrar de 50 para 500 un., o custo unitário cai em média 15%–22%.' },
      { question: 'Há taxa de molde nos 140 SKUs do catálogo?', answer: 'Não, todos usam moldes já prontos com custo $0.00.' },
      { question: 'Posso comprar 50 unidades no formato Mix-SKU?', answer: 'Sim, para modelos em estoque liso é possível combinar 5 a 10 SKUs.' },
      { question: 'Qual a diferença de preço entre Zamak-3, Alumínio 6063 e Inox 304 CNC?', answer: 'Zamak-3: $0.74–$6.80; Alumínio 6063: $4.50–$12.55; Inox 304 CNC: $8.49–$43.94.' },
      { question: 'Quanto custa gravação a laser 50W ou preenchimento Pantone?', answer: 'Laser 50W +$0.15–$0.30/un. (MOQ 100); gravação profunda + esmalte +$0.35–$0.60/un.' },
      { question: 'Quais embalagens a fábrica fornece?', answer: 'Saco a vácuo ($0.00, MOQ 50) incluso; estojo EVA estoque (+$0.75+/un., MOQ 100); caixa rígida (+$1.45+/un., MOQ 500); lata metálica (1.000+).' },
      { question: 'Como recebo a planilha completa dos 140 SKUs?', answer: 'Informe seu e-mail corporativo acima ou chame no WhatsApp +86 187 5012 6315.' },
      { question: 'Posso pedir amostras pagas de 1 unidade antes?', answer: 'Sim nos 140 modelos; valor da unidade e frete internacional ficam por conta do comprador sem reembolso.' },
      { question: 'Quais os prazos de fábrica e blindagem IATA PI953?', answer: '5–7 dias úteis preparo liso, 10–15 dias úteis com logo, com blindagem PI953 a partir de Fuzhou.' }
    ]
  },
  sv: {
    bcCurrent: '140-SKU Prislista',
    badge1: 'FABRIKSDIREKT EXW-MATRIS',
    badge2: '140 Aktiva Formar · $0 Verktyg',
    moldUnit: 'Formar',
    kpis: [
      { label: 'Insteg (≤$3.50)' },
      { label: 'Core Retail ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Exotiskt / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Bläddra Bland Alla',
    ctaPrimarySuffix: 'SKU:er →',
    ctaSecondary: '1-St Provprogram →',
    showcasePill: '3-NIVÅERS VOLYMPRISER',
    showcaseAlt: 'FidgetSupply 140-SKU grossistprislista för zink, aluminium, rostfritt stål och zirkonium',
    showcaseMeta: ['MOQ 50 Blanka', 'MOQ 100 Laserlogo', '50-St Mix-SKU OK'],
    geoTitle: 'Direktsvar: Grossistpriser & MOQ för 140 Metallfidget-Formar',
    geoAnswer: 'Grossistkatalogen omfattar 140 färdiga metallformar (FS-001–FS-150) i fyra EXW-band: Insteg ($0.74–$3.50), Core E-handel ($3.51–$10.00), CNC Rostfritt/Mässing ($10.01–$45.00) och Zirkonium ($45.01–$470.77). $0 verktygskostnad, MOQ 50 blanka (eller Mix-SKU), 100 med 50W fiberlaser (+$0.15–$0.30/st), samt betalda 1-stycksprover.',
    matrixBadge: 'FABRIKSPRISARKITEKTUR',
    matrixTitle: '140 Färdiga Formar Indelade Efter Grossistprisband',
    skuUnit: 'SKU:er',
    tableHeaders: ['Prisband (500-St EXW)', 'Aktiva Formar', 'Material & Process', 'Bästa Säljkanaler', 'Riktpris Retail'],
    bandMaterials: [
      'Zamak-3 högtrycksgjutning, elektropläterad / antik yta',
      'Zamak-3 flerlager, 6063 eloxerad alu, mässing, PTFE-sliders',
      '5-axlig CNC 304/316 rostfritt, keramikdetenter, stämgafflar',
      'CNC Zirkonium (Zr702), Titan, Damaskus, abaloneinlägg'
    ],
    bandChannels: [
      'Företagsmässor, profilprodukter, större eventpaket',
      'Amazon FBA private label, e-handel EDC-butiker',
      'Specialiserade EDC-butiker, VIP-chefsgåvor',
      'Samlarklubbar, numrerade limiterade serier (001/100)'
    ],
    picksBadge: 'RIKTMODELLER ÖVER ALLA 4 NIVÅER',
    picksTitle: 'Från $0.74 Instegsmodeller till CNC-Samlarexemplar',
    faqBadge: 'GROSSISTKATALOG FAQ',
    faqTitle: 'Frågor om Prisstaffling, MOQ & Fabriksinköp',
    catalogName: 'FidgetSupply 140-SKU Grossistprislista Metallfidgets',
    faqs: [
      { question: 'Vad är det fullständiga EXW-prisspannet för 140 formar?', answer: 'Vid 500 st ligger EXW från $0.74/st (FS-009) upp till $470.77/st (Zirkonium/Titan); över 85 modeller ligger mellan $1.70 och $12.50.' },
      { question: 'Hur fungerar volymstegen 50 / 200 / 500+ st?', answer: 'Från 50 till 500 st sjunker enhetspriset vanligtvis med 15%–22%.' },
      { question: 'Tillkommer form- eller verktygsavgifter?', answer: 'Nej, $0.00 på alla 140 befintliga serieformar.' },
      { question: 'Kan vi beställa 50 st som blandad Mix-SKU?', answer: 'Ja på blanka lagervaror för att testa 5–10 modeller.' },
      { question: 'Prisskillnad mellan Zamak-3, 6063 alu och CNC 304 stål?', answer: 'Zamak-3: $0.74–$6.80; 6063 alu: $4.50–$12.55; CNC 304 stål: $8.49–$43.94.' },
      { question: 'Vad kostar 50W fiberlaser eller djup emaljfärg?', answer: '50W laser +$0.15–$0.30/st (MOQ 100); djup laser + emalj +$0.35–$0.60/st.' },
      { question: 'Vilka förpackningar erbjuds?', answer: 'Vakuumpåse ($0.00, MOQ 50) ingår; lager-EVA-etui (+$0.75+/st, MOQ 100); hård presentask (+$1.45+/st, MOQ 500); metalldosa (1 000+).' },
      { question: 'Kan vi få hela 140-SKU prislistan i Excel / PDF?', answer: 'Fyll i arbetsmejlen ovan eller kontakta +86 187 5012 6315 på WhatsApp.' },
      { question: 'Går det att beställa betalda 1-stycksprover först?', answer: 'Ja för alla 140 modeller; prov och kurir betalas av köparen utan återbetalning.' },
      { question: 'Hur hanterar ni ledtid och IATA PI953-skärmning?', answer: '5–7 arbetsdagar för blank förberedelse, 10–15 arbetsdagar för logotryck, packat med PI953-skärmning från Fuzhou.' }
    ]
  },
  da: {
    bcCurrent: '140-SKU Prisliste',
    badge1: 'FABRIKSDIREKTE EXW-MATRIX',
    badge2: '140 Aktive Forme · $0 Værktøj',
    moldUnit: 'Forme',
    kpis: [
      { label: 'Basis (≤$3.50)' },
      { label: 'Core Retail ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Eksotisk / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Se Alle',
    ctaPrimarySuffix: 'SKU’er →',
    ctaSecondary: '1-Stk Prøveprogram →',
    showcasePill: '3-TRINS MÆNGDERABAT',
    showcaseAlt: 'FidgetSupply 140-SKU engrosprisliste på zink, aluminium, rustfrit stål og zirkonium',
    showcaseMeta: ['MOQ 50 Blanke', 'MOQ 100 Laserlogo', '50-Stk Mix-SKU OK'],
    geoTitle: 'Direkte Svar: Engrospriser & MOQ for 140 Metalfidget-Forme',
    geoAnswer: 'Engroskataloget dækker 140 færdige metalforme (FS-001 til FS-150) i fire EXW-bånd: Basis ($0.74–$3.50), Core E-handel ($3.51–$10.00), CNC Rustfrit/Messing ($10.01–$45.00) og Zirkonium ($45.01–$470.77). $0 værktøj, MOQ 50 blanke (eller Mix-SKU), 100 med 50W fiberlaser (+$0.15–$0.30/stk.), plus betalte 1-stk. prøver.',
    matrixBadge: 'FABRIKSPRIS-STRUKTUR',
    matrixTitle: '140 Forme Opdelt efter Engros EXW-Prisbånd',
    skuUnit: 'SKU’er',
    tableHeaders: ['Prisbånd (500-Stk. EXW)', 'Aktive Forme', 'Materialer & Proces', 'Ideelle Salgskanaler', 'Vejl. Detailpris'],
    bandMaterials: [
      'Zamak-3 trykstøbning, galvanisering / antik finish',
      'Zamak-3 flerlag, 6063 anodiseret alu, messing, PTFE-sliders',
      '5-akset CNC 304/316 rustfrit stål, keramik, stemmegafler',
      'CNC Zirkonium (Zr702), Titanium, Damaskus, abalone indlæg'
    ],
    bandChannels: [
      'Messer, reklamegaver, større kampagner',
      'Amazon FBA private label, e-handel EDC butikker',
      'EDC-specialforretninger, VIP-direktionsgaver',
      'Samlerklubber, nummererede serier (001/100)'
    ],
    picksBadge: 'BENCHMARKS FRA ALLE 4 NIVEAUER',
    picksTitle: 'Nøglemodeller fra $0.74 Basis til CNC Samlerudgave',
    faqBadge: 'ENGROSKATALOG FAQ',
    faqTitle: 'Spørgsmål om Priser, MOQ & Direkte Fabriksindkøb',
    catalogName: 'FidgetSupply 140-SKU Engrosprisliste Metalfidgets',
    faqs: [
      { question: 'Hvad er det fulde EXW-prisspænd på tværs af 140 forme?', answer: 'Ved 500 stk. spænder EXW fra $0.74/stk. (FS-009) til $470.77/stk. (Zirkonium/Titanium).' },
      { question: 'Hvordan virker rabattrinene 50 / 200 / 500+ stk.?', answer: 'Fra 50 til 500 stk. falder enhedsprisen typisk 15%–22%.' },
      { question: 'Er der værktøjs- eller støbeformsgebyr?', answer: 'Nej, $0.00 på alle 140 færdige forme.' },
      { question: 'Kan vi bestille et 50-stk. Mix-SKU prøvesortiment?', answer: 'Ja på blanke lagervarer kan 5–10 modeller kombineres.' },
      { question: 'Prisforskel mellem Zamak-3, 6063 alu og CNC 304 stål?', answer: 'Zamak-3: $0.74–$6.80; 6063 alu: $4.50–$12.55; CNC 304 stål: $8.49–$43.94.' },
      { question: 'Hvad koster 50W fiberlaser eller dyb emaljefarve?', answer: '50W laser +$0.15–$0.30/stk. (MOQ 100); dyb laser + emalje +$0.35–$0.60/stk.' },
      { question: 'Hvilke emballagetyper tilbydes?', answer: 'Vakuumpose ($0.00, MOQ 50) inkluderet; lager EVA-etui (+$0.75+/stk., MOQ 100); gaveæske (+$1.45+/stk., MOQ 500); metaldåse (1.000+).' },
      { question: 'Kan jeg få hele 140-SKU arket i Excel/PDF?', answer: 'Indtast arbejds-e-mail ovenfor eller skriv på WhatsApp +86 187 5012 6315.' },
      { question: 'Kan man bestille betalte 1-styks vareprøver først?', answer: 'Ja på alle 140 forme; prøve og kurer betales af køber uden refusion.' },
      { question: 'Hvordan håndteres klargøring og IATA PI953 afskærmning?', answer: '5–7 hverdage til blank klargøring, 10–15 hverdage med logo, pakket med PI953 fra Fuzhou.' }
    ]
  },
  no: {
    bcCurrent: '140-SKU Prisliste',
    badge1: 'FABRIKKDIREKTE EXW-MATRISE',
    badge2: '140 Aktive Former · $0 Verktøy',
    moldUnit: 'Former',
    kpis: [
      { label: 'Inngang (≤$3.50)' },
      { label: 'Kjernehandel ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Eksotisk / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Se Alle',
    ctaPrimarySuffix: 'SKU-er →',
    ctaSecondary: '1-Stk Prøveprogram →',
    showcasePill: '3-NIVÅ VOLUMPRISER',
    showcaseAlt: 'FidgetSupply 140-SKU engrosprisliste for sink, aluminium, rustfritt stål og zirkonium',
    showcaseMeta: ['MOQ 50 Blanke', 'MOQ 100 Laserlogo', '50-Stk Mix-SKU OK'],
    geoTitle: 'Direkte Svar: Engrospriser & MOQ på 140 Metallfidget-Former',
    geoAnswer: 'Katalogen dekker 140 klare metallformer (FS-001–FS-150) i fire EXW-bånd: Inngang ($0.74–$3.50), Netthandel ($3.51–$10.00), CNC Stål/Messing ($10.01–$45.00) og Zirkonium ($45.01–$470.77). $0 verktøygebyr, MOQ 50 blanke (eller Mix-SKU), 100 med 50W fiberlaser (+$0.15–$0.30/stk.), samt betalte 1-stykks prøver.',
    matrixBadge: 'FABRIKKPRISARKITEKTUR',
    matrixTitle: '140 Former Gruppert etter Engros EXW-Prisbånd',
    skuUnit: 'SKU-er',
    tableHeaders: ['Prisbånd (500-Stk EXW)', 'Aktive Former', 'Materialer & Prosess', 'Beste Kanaler', 'Veiledende Utpris'],
    bandMaterials: [
      'Zamak-3 trykkstøping, elektroplettering / antikk finish',
      'Zamak-3 flerlags, 6063 eloksert alu, messing, PTFE-slidere',
      '5-akset CNC 304/316 stål, keramiske kuler, stemmegafler',
      'CNC Zirkonium (Zr702), Titan, Damaskus, abalone'
    ],
    bandChannels: [
      'Messer, profileringsartikler, store kampanjer',
      'Amazon FBA private label, nettbutikker EDC',
      'EDC-faghandel, VIP-firmagaver',
      'Samlerklubber, nummererte utgaver (001/100)'
    ],
    picksBadge: 'MODELLER FRA ALLE 4 NIVÅER',
    picksTitle: 'Flaggskip fra $0.74 Inngang til CNC Samlerutgaver',
    faqBadge: 'ENGROSKATALOG FAQ',
    faqTitle: 'Spørsmål om Prisbånd, MOQ & Direkte Fabrikkjøp',
    catalogName: 'FidgetSupply 140-SKU Engrosprisliste Metallfidgets',
    faqs: [
      { question: 'Hva er hele EXW-prisspennet på 140 former?', answer: 'Ved 500 stk. går EXW fra $0.74/stk. (FS-009) til $470.77/stk. (Zirkonium/Titan).' },
      { question: 'Hvordan fungerer trinnene 50 / 200 / 500+ stk.?', answer: 'Fra 50 til 500 stk. synker stykkprisen typisk med 15%–22%.' },
      { question: 'Påløper det form- eller verktøygebyr?', answer: 'Nei, $0.00 på alle 140 eksisterende former.' },
      { question: 'Kan vi bestille 50 stk. som blandet Mix-SKU?', answer: 'Ja på blanke lagervarer for å teste 5–10 modeller.' },
      { question: 'Prisforskjell mellom Zamak-3, 6063 alu og CNC 304 stål?', answer: 'Zamak-3: $0.74–$6.80; 6063 alu: $4.50–$12.55; CNC 304 stål: $8.49–$43.94.' },
      { question: 'Hva koster 50W fiberlaser eller dyp emalje?', answer: '50W laser +$0.15–$0.30/stk. (MOQ 100); dyp laser + emalje +$0.35–$0.60/stk.' },
      { question: 'Hvilken emballasje tilbys fra fabrikk?', answer: 'Vakuumpose ($0.00, MOQ 50) inkludert; lager EVA-etui (+$0.75+/stk., MOQ 100); gaveeske (+$1.45+/stk., MOQ 500); metallboks (1 000+).' },
      { question: 'Kan jeg få hele 140-SKU prislisten i Excel / PDF?', answer: 'Legg inn jobb-e-post over eller skriv på WhatsApp +86 187 5012 6315.' },
      { question: 'Kan man bestille betalte 1-stykks prøver først?', answer: 'Ja på alle 140 modeller; prøve og kurér dekkes av kjøper uten refusjon.' },
      { question: 'Hvordan håndteres produksjonstid og IATA PI953-skjerming?', answer: '5–7 virkedager blank klargjøring, 10–15 virkedager med logo, pakket med PI953 fra Fuzhou.' }
    ]
  },
  fi: {
    bcCurrent: '140-SKU Hinnasto',
    badge1: 'TEHDASSUORA EXW-MATRIISI',
    badge2: '140 Valmista Muottia · $0 Muottikulu',
    moldUnit: 'Muottia',
    kpis: [
      { label: 'Edullinen (≤$3.50)' },
      { label: 'Verkkokauppa ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Eksoottinen / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Selaa Kaikkia',
    ctaPrimarySuffix: 'SKU:ta →',
    ctaSecondary: '1 Kpl Näyteohjelma →',
    showcasePill: '3-PORTAINEN TUKKUHINNOITTELU',
    showcaseAlt: 'FidgetSupply 140-SKU tukkuhinnasto sinkki-, alumiini-, teräs- ja zirkoniumfidgeteille',
    showcaseMeta: ['MOQ 50 Ilman Logo', 'MOQ 100 Laserlogo', '50 Kpl Mix-SKU OK'],
    geoTitle: 'Suora Vastaus: 140 Metallimuotin Tukkuhintaluokat & MOQ-rajat',
    geoAnswer: 'Tukkuluettelo kattaa 140 valmista metallimuottia (FS-001–FS-150) neljässä EXW-hintaluokassa: Edullinen ($0.74–$3.50), Core Verkkokauppa ($3.51–$10.00), CNC Teräs/Messinki ($10.01–$45.00) ja Keräily-Zirkonium ($45.01–$470.77). $0 muottikulu, MOQ 50 ilman logoa (myös Mix-SKU), 100 kpl 50W laserilla (+$0.15–$0.30/kpl) sekä maksulliset 1 kpl näytteet.',
    matrixBadge: 'TEHDASHINTOJEN RAKENNE',
    matrixTitle: '140 Valmista Muottia EXW-Tukkuhintaryhmittäin',
    skuUnit: 'SKU',
    tableHeaders: ['Hintaryhmä (500 Kpl EXW)', 'Aktiiviset Muotit', 'Materiaalit & Menetelmä', 'Parhaat Kanavat', 'Tyypillinen Jälleenmyynti'],
    bandMaterials: [
      'Zamak-3 painevalu, galvanointi / antiikkiviimeistely',
      'Zamak-3 monikerros, 6063 anodisoitu alumiini, messinki, PTFE-sliderit',
      '5-akselinen CNC 304/316 teräs, keraamiset kuulat, ääniraudat',
      'CNC Zirkonium (Zr702), Titaani, Damaskus, helmiäisupotus'
    ],
    bandChannels: [
      'Messujakotuotteet, mainoslahjat, volyymikampanjat',
      'Amazon FBA private label, EDC-verkkokaupat',
      'Erikoisliikkeet, VIP-johtolahjat',
      'Keräilijäkerhot, numeroidut rajoitetut sarjat (001/100)'
    ],
    picksBadge: 'KÄRKIMALLIT KAIKISTA 4 LUOKASTA',
    picksTitle: 'Lippulaivat $0.74 Alkaen Keräily-CNC:hen',
    faqBadge: 'TUKKULUETTELON FAQ',
    faqTitle: 'Kysymykset Hinta portaista, MOQ:sta & Tehtaalta Ostamisesta',
    catalogName: 'FidgetSupply 140-SKU Metallifidgetien Tukkuhinnasto',
    faqs: [
      { question: 'Mikä on koko EXW-hintaväli 140 muotin valikoimassa?', answer: '500 kpl tasolla hinnat alkavat $0.74/kpl (FS-009) ja ulottuvat $470.77/kpl (Zirkonium/Titaani).' },
      { question: 'Miten määräportaat 50 / 200 / 500+ kpl toimivat?', answer: 'Siirtyminen 50 kpl:sta 500 kpl:een laskee yksikköhintaa tyypillisesti 15%–22%.' },
      { question: 'Peritäänkö muotti- tai työkalumaksuja?', answer: 'Ei, $0.00 kaikissa 140 valmiissa sarjamuotissa.' },
      { question: 'Voiko 50 kpl tilata Mix-SKU-sekoituksena?', answer: 'Kyllä varastomalleilla voi yhdistää 5–10 eri mallia.' },
      { question: 'Zamak-3:n, 6063 alumiinin ja CNC 304 teräksen hintaero?', answer: 'Zamak-3: $0.74–$6.80; 6063 alu: $4.50–$12.55; CNC 304 teräs: $8.49–$43.94.' },
      { question: 'Paljonko 50W kuitulaser tai syvä emali maksaa?', answer: '50W laser +$0.15–$0.30/kpl (MOQ 100); syvä laser + emali +$0.35–$0.60/kpl.' },
      { question: 'Mitä pakkausvaihtoehtoja tarjotaan?', answer: 'Tyhjiösuojapussi ($0.00, MOQ 50) sisältyy; varasto EVA-kotelo (+$0.75+/kpl, MOQ 100); kova lahjarasia (+$1.45+/kpl, MOQ 500); peltirasia (1 000+).' },
      { question: 'Miten saan täyden 140-SKU Excel-/PDF-hinnaston?', answer: 'Syötä työsähköpostisi yllä tai laita WhatsApp +86 187 5012 6315.' },
      { question: 'Voiko tilata maksullisia 1 kpl arviointinäytteitä?', answer: 'Kyllä kaikista 140 mallista; näyte ja rahti ovat ostajan vastuulla ilman hyvitystä.' },
      { question: 'Miten toimitusvalmistelu ja IATA PI953 hoidetaan?', answer: '5–7 arkipäivää ilman logoa, 10–15 arkipäivää logolla, pakattuna PI953-suojauksella Fuzhousta.' }
    ]
  },
  pl: {
    bcCurrent: 'Cennik 140 SKU',
    badge1: 'FABRYCZNA MATRYCA EXW',
    badge2: '140 Aktywnych Form · $0 za Formę',
    moldUnit: 'Form',
    kpis: [
      { label: 'Baza (≤$3.50)' },
      { label: 'Retail Core ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Egzotyki / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Przeglądaj Wszystkie',
    ctaPrimarySuffix: 'SKU →',
    ctaSecondary: 'Program Próbek 1 Szt. →',
    showcasePill: '3 PROGI CENOWE',
    showcaseAlt: 'Cennik hurtowy 140 SKU FidgetSupply ze stopu cynku, aluminium, stali nierdzewnej i cyrkonu',
    showcaseMeta: ['MOQ 50 Bez Logo', 'MOQ 100 Laser', 'Mix-SKU 50 Szt. OK'],
    geoTitle: 'Bezpośrednia Odpowiedź: Progi Cenowe EXW i MOQ dla 140 Form',
    geoAnswer: 'Katalog hurtowy obejmuje 140 gotowych form metalowych (FS-001–FS-150) w czterech pasmach EXW: Promo ($0.74–$3.50), E-Commerce ($3.51–$10.00), CNC Stal/Mosiądz ($10.01–$45.00) i Cyrkon Kolekcjonerski ($45.01–$470.77). $0 opłat za formę, MOQ 50 bez logo (lub Mix-SKU), 100 z laserem 50W (+$0.15–$0.30/szt.) oraz płatne próbki 1 szt.',
    matrixBadge: 'STRUKTURA CEN FABRYCZNYCH',
    matrixTitle: '140 Gotowych Form Według Pasm Cenowych EXW',
    skuUnit: 'SKU',
    tableHeaders: ['Pasmo EXW (500 Szt.)', 'Aktywne Formy', 'Materiały i Proces', 'Najlepsze Kanały', 'Typowa Cena Detaliczna'],
    bandMaterials: [
      'Zamak-3 odlew ciśnieniowy, galwanizacja / postarzanie',
      'Zamak-3 wielowarstwowy, Aluminium 6063 anodowane, Mosiądz, Slidery PTFE',
      '5-osiowe CNC Stal 304/316, kulki ceramiczne, kamertony akustyczne',
      'Cyrkon Zr702 CNC, Tytan, Damast, inkrustacja Abalone'
    ],
    bandChannels: [
      'Targi branżowe, upominki reklamowe, duże pakiety eventowe',
      'Amazon FBA private label, sklepy e-commerce EDC',
      'Butiki EDC, prezenty VIP dla zarządu',
      'Kluby kolekcjonerskie, serie limitowane (001/100)'
    ],
    picksBadge: 'MODELE WZORCOWE Z 4 Pasm',
    picksTitle: 'Od Bazowych $0.74 po Kolekcjonerskie Modele CNC',
    faqBadge: 'FAQ KATALOGU HURTOWEGO',
    faqTitle: 'Pytania o Progi Cenowe, MOQ i Zakup z Fabryki',
    catalogName: 'Katalog Hurtowy FidgetSupply 140 SKU Metalowych',
    faqs: [
      { question: 'Jaki jest pełny zakres cen EXW na 140 formach?', answer: 'Przy 500 szt. ceny EXW wynoszą od $0.74/szt. (FS-009) do $470.77/szt. (Cyrkon/Tytan).' },
      { question: 'Jak działają progi 50 / 200 / 500+ szt.?', answer: 'Przejście z 50 na 500 szt. obniża koszt jednostkowy zwykle o 15%–22%.' },
      { question: 'Czy pobieracie opłaty za formę lub matrycę?', answer: 'Nie, $0.00 na wszystkie 140 gotowych form.' },
      { question: 'Czy można zamówić pakiet startowy 50 szt. Mix-SKU?', answer: 'Tak, dla towaru czystego na magazynie łączymy 5–10 modeli.' },
      { question: 'Różnica w cenie między Zamak-3, Alu 6063 a Stalą 304 CNC?', answer: 'Zamak-3: $0.74–$6.80; Alu 6063: $4.50–$12.55; Stal 304 CNC: $8.49–$43.94.' },
      { question: 'Ile kosztuje grawer laserowy 50W lub emalia Pantone?', answer: 'Laser 50W +$0.15–$0.30/szt. (MOQ 100); głęboki laser + emalia +$0.35–$0.60/szt.' },
      { question: 'Jakie opakowania są dostępne?', answer: 'Woreczek próżniowy ($0.00, MOQ 50) w cenie; etui EVA z zapasu (+$0.75+/szt., MOQ 100); sztywne pudełko (+$1.45+/szt., MOQ 500); puszka metalowa (1 000+).' },
      { question: 'Jak pobrać pełny arkusz Excel / PDF 140 SKU?', answer: 'Wpisz służbowy e-mail powyżej lub napisz na WhatsApp +86 187 5012 6315.' },
      { question: 'Czy można wcześniej zamówić płatne próbki od 1 szt.?', answer: 'Tak dla wszystkich 140 form; próbkę i kuriera opłaca kupujący bez zwrotu.' },
      { question: 'Jak wygląda czas realizacji i ekranowanie IATA PI953?', answer: '5–7 dni roboczych przygotowanie bez logo, 10–15 dni z logo, z ekranowaniem PI953 z Fuzhou.' }
    ]
  },
  cs: {
    bcCurrent: 'Ceník 140 SKU',
    badge1: 'TOVÁRNÍ EXW MATICE',
    badge2: '140 Aktivních Forem · $0 Za Formu',
    moldUnit: 'Forem',
    kpis: [
      { label: 'Základ (≤$3.50)' },
      { label: 'Core Retail ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Exotika / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Procházet Všech',
    ctaPrimarySuffix: 'SKU →',
    ctaSecondary: 'Program Vzorek 1 Ks →',
    showcasePill: '3 ÚROVNĚ MNOŽSTEVNÍCH CEN',
    showcaseAlt: 'Velkoobchodní ceník 140 SKU FidgetSupply ze slitiny zinku, hliníku, nerezu a zirkonia',
    showcaseMeta: ['MOQ 50 Bez Loga', 'MOQ 100 Laser', 'Mix-SKU 50 Ks OK'],
    geoTitle: 'Přímá Odpověď: Velkoobchodní Cenové Úrovně & MOQ 140 Forem',
    geoAnswer: 'Katalog zahrnuje 140 hotových kovových forem (FS-001–FS-150) ve čtyřech EXW pásmech: Promo ($0.74–$3.50), E-Commerce ($3.51–$10.00), CNC Nerez/Mosaz ($10.01–$45.00) a Zirkonium ($45.01–$470.77). $0 za formu, MOQ 50 ks čistých (nebo Mix-SKU), 100 ks s 50W laserem (+$0.15–$0.30/ks) a placené 1ks vzorky.',
    matrixBadge: 'STRUKTURA TOVÁRNÍCH CEN',
    matrixTitle: '140 Forem Dle Velkoobchodního EXW Pásma',
    skuUnit: 'SKU',
    tableHeaders: ['Pásmo EXW (500 Ks)', 'Aktivní Formy', 'Materiály & Proces', 'Nejlepší Kanály', 'Běžná Maloobchodní Cena'],
    bandMaterials: [
      'Zamak-3 tlakové lití, galvanizace / starožitný povrch',
      'Zamak-3 vícevrstvý, Eloxovaný hliník 6063, Mosaz, PTFE slidery',
      '5osé CNC Nerez 304/316, keramické kuličky, akustické ladičky',
      'CNC Zirkonium (Zr702), Titan, Damašek, perleť abalone'
    ],
    bandChannels: [
      'Veletrhy, reklamní dárky, velkoobjemové akce',
      'Amazon FBA privátní značka, e-shopy EDC',
      'Speciální EDC obchody, VIP manažerské dárky',
      'Sběratelské kluby, číslované série (001/100)'
    ],
    picksBadge: 'SROVNÁNÍ ZE VŠECH 4 PÁSEM',
    picksTitle: 'Vlajkové Modely od $0.74 po Sběratelské CNC',
    faqBadge: 'FAQ VELKOOBCHODNÍHO KATALOGU',
    faqTitle: 'Dotazy k Cenám, MOQ & Přímému Nákupu z Továrny',
    catalogName: 'Velkoobchodní Ceník FidgetSupply 140 SKU Kovových Fidgetů',
    faqs: [
      { question: 'Jaké je plné EXW rozpětí u 140 forem?', answer: 'Při 500 ks se ceny pohybují od $0.74/ks (FS-009) po $470.77/ks (Zirkonium/Titan).' },
      { question: 'Jak fungují úrovně 50 / 200 / 500+ ks?', answer: 'Při 500 ks klesá kusová cena typicky o 15 %–22 % oproti 50 ks.' },
      { question: 'Účtujete poplatek za formu?', answer: 'Ne, $0.00 u všech 140 hotových forem.' },
      { question: 'Lze objednat 50 ks jako Mix-SKU sadu?', answer: 'Ano, u skladového zboží bez loga lze zkombinovat 5–10 modelů.' },
      { question: 'Cenový rozdíl mezi Zamak-3, Hliníkem 6063 a Nerezem 304?', answer: 'Zamak-3: $0.74–$6.80; Hliník 6063: $4.50–$12.55; CNC Nerez 304: $8.49–$43.94.' },
      { question: 'Kolik přidá 50W laser nebo hluboký smalt?', answer: '50W laser +$0.15–$0.30/ks (MOQ 100); hluboký laser + smalt +$0.35–$0.60/ks.' },
      { question: 'Jaké možnosti balení nabízíte?', answer: 'Vakuový sáček ($0.00, MOQ 50) v ceně; skladové pouzdro EVA (+$0.75+/ks, MOQ 100); pevná krabička (+$1.45+/ks, MOQ 500); plechovka (1 000+).' },
      { question: 'Mohu získat celý ceník 140 SKU v Excelu / PDF?', answer: 'Zadejte firemní e-mail výše nebo napište na WhatsApp +86 187 5012 6315.' },
      { question: 'Lze objednat placené 1ks vzorky předem?', answer: 'Ano u všech 140 forem; vzorek a dopravu hradí kupující bez nároku na vrácení.' },
      { question: 'Jak probíhá výroba a stínění IATA PI953?', answer: '5–7 pracovních dnů příprava bez loga, 10–15 pracovních dnů s logem, se stíněním PI953 z Fuzhou.' }
    ]
  },
  ru: {
    bcCurrent: 'Прайс-лист 140 SKU',
    badge1: 'ЗАВОДСКАЯ МАТРИЦА EXW',
    badge2: '140 готовых форм · $0 за форму',
    moldUnit: 'форм',
    kpis: [
      { label: 'Промо (≤$3.50)' },
      { label: 'Ритейл ($3.51–$10)' },
      { label: 'ЧПУ Про ($10.01–$45)' },
      { label: 'Премиум / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Смотреть все',
    ctaPrimarySuffix: 'SKU →',
    ctaSecondary: 'Образец от 1 шт. →',
    showcasePill: '3 ЦЕНОВЫХ УРОВНЯ',
    showcaseAlt: 'Оптовый прайс-лист FidgetSupply 140 SKU из цинка, алюминия, стали и циркония',
    showcaseMeta: ['MOQ 50 без лого', 'MOQ 100 лазер', 'Микс-SKU 50 шт. OK'],
    geoTitle: 'Прямой ответ: Оптовые цены EXW и MOQ на 140 готовых форм',
    geoAnswer: 'Каталог включает 140 готовых металлических пресс-форм (FS-001 – FS-150) в четырёх ценовых сегментах EXW: Промо ($0.74–$3.50), Масс-маркет ($3.51–$10.00), ЧПУ Нержавейка/Латунь ($10.01–$45.00) и Коллекционный Цирконий ($45.01–$470.77). $0 за пресс-форму, MOQ 50 шт. без лого (возможен микс-SKU), 100 шт. с 50W лазером (+$0.15–$0.30/шт.), а также платные образцы от 1 шт.',
    matrixBadge: 'ЗАВОДСКАЯ СЕТКА ЦЕН',
    matrixTitle: '140 готовых форм по ценовым категориям EXW',
    skuUnit: 'SKU',
    tableHeaders: ['Диапазон EXW (500 шт.)', 'Активные формы', 'Материалы и обработка', 'Каналы сбыта', 'Розница в мире'],
    bandMaterials: [
      'Литьё под давлением Zamak-3, гальваника / антик',
      'Многослойный Zamak-3, Алюминий 6063, Латунь, PTFE слайдеры',
      '5-осевой ЧПУ сталь 304/316, керамические шары, камертоны',
      'ЧПУ Цирконий Zr702, Титан, Дамаск, перламутр'
    ],
    bandChannels: [
      'Выставки, корпоративные промо-раздачи, подарочные наборы',
      'Маркетплейсы (Amazon FBA / др.), онлайн-магазины EDC',
      'Спецмагазины EDC, VIP-подарки партнёрам',
      'Клубы коллекционеров, серийные выпуски (001/100)'
    ],
    picksBadge: 'ЭТАЛОННЫЕ МОДЕЛИ ИЗ 4 ГРУПП',
    picksTitle: 'Флагманы от бюджетных $0.74 до коллекционного ЧПУ',
    faqBadge: 'FAQ ПО ОПТОВОМУ КАТАЛОГУ',
    faqTitle: 'Вопросы по скидкам, MOQ и прямым закупкам с фабрики',
    catalogName: 'Оптовый прайс-лист FidgetSupply 140 SKU металлических фиджетов',
    faqs: [
      { question: 'Каков полный диапазон цен EXW на 140 форм?', answer: 'На тираже 500 шт. EXW варьируется от $0.74/шт. (FS-009) до $470.77/шт. (Цирконий/Титан); свыше 85 моделей стоят $1.70–$12.50.' },
      { question: 'Как устроены ступени скидок 50 / 200 / 500+ шт.?', answer: 'Переход от 50 к 500 шт. снижает цену на 15%–22%.' },
      { question: 'Взимается ли плата за пресс-форму?', answer: 'Нет, $0.00 на все 140 серийных форм.' },
      { question: 'Можно ли собрать стартовый микс-SKU из 50 шт.?', answer: 'Да, для складских позиций без логотипа можно объединить 5–10 моделей.' },
      { question: 'Разница в цене между Zamak-3, Алюминием 6063 и ЧПУ сталью 304?', answer: 'Zamak-3: $0.74–$6.80; Алюминий 6063: $4.50–$12.55; ЧПУ сталь 304: $8.49–$43.94.' },
      { question: 'Сколько стоит лазерная гравировка 50W или эмаль Pantone?', answer: 'Лазер 50W +$0.15–$0.30/шт. (MOQ 100); глубокий лазер + эмаль +$0.35–$0.60/шт.' },
      { question: 'Какие варианты упаковки доступны?', answer: 'Вакуумный антиокислительный пакет ($0.00, MOQ 50) включён; чехол EVA со склада (+$0.75+/шт., MOQ 100); жёсткая коробка (+$1.45+/шт., MOQ 500); жестяной бокс (1 000+).' },
      { question: 'Как скачать весь прайс 140 SKU в Excel / PDF?', answer: 'Укажите рабочий email в форме выше или напишите в WhatsApp +86 187 5012 6315.' },
      { question: 'Можно ли предварительно купить образцы от 1 шт.?', answer: 'Да, по всем 140 формам; образцы и курьер оплачиваются покупателем без возврата.' },
      { question: 'Каковы сроки подготовки и защита IATA PI953?', answer: '5–7 рабочих дней без лого, 10–15 рабочих дней с логотипом, экранирование PI953 при отгрузке из Фучжоу.' }
    ]
  },
  ja: {
    bcCurrent: '140品番価格表',
    badge1: '工場直販 EXW 価格マトリクス',
    badge2: '140稼働金型・金型代 $0',
    moldUnit: '型',
    kpis: [
      { label: 'エントリー (≤$3.50)' },
      { label: '主力EC帯 ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: '高級/Zr ($45+)' }
    ],
    ctaPrimaryPrefix: '全',
    ctaPrimarySuffix: '品番を見る →',
    ctaSecondary: '1個サンプル案内 →',
    showcasePill: '3段階ボリューム単価',
    showcaseAlt: 'FidgetSupply 140品番 亜鉛合金・アルミ・ステンレス・ジルコニウム卸売価格表',
    showcaseMeta: ['無地 MOQ 50', 'レーザー名入れ MOQ 100', '50個Mix-SKU対応'],
    geoTitle: '結論：既存140金型 金属フィジェット卸売単価とMOQ体系',
    geoAnswer: 'FidgetSupplyの卸売カタログは既存140金型（FS-001〜FS-150）を4つのEXW単価帯で提供しています：エントリー販促($0.74–$3.50)、EC主力($3.51–$10.00)、5軸CNCステンレス/真鍮($10.01–$45.00)、コレクター向けジルコニウム($45.01–$470.77)。全品金型費$0、無地MOQ 50個（Mix-SKU可）、50Wレーザー名入れMOQ 100個(+$0.15–$0.30)、1個有償評価サンプルにも対応します。',
    matrixBadge: '工場EXW価格帯構成',
    matrixTitle: 'EXW卸売価格帯別の140既存金型ラインナップ',
    skuUnit: '品番',
    tableHeaders: ['価格帯 (500個 EXW)', '稼働金型数', '主な素材・加工法', '適合販売チャネル', '想定小売レンジ'],
    bandMaterials: [
      'Zamak-3 高圧ダイカスト、電気めっき / アンティーク仕上げ',
      '多層Zamak-3、6063アルマイト、真鍮ハイブリッド、PTFEスライダー',
      '5軸CNC 304/316ステンレス、セラミックボール、音響音叉',
      'CNCジルコニウム(Zr702)、チタン、ダマスカス鋼、アワビ貝象嵌'
    ],
    bandChannels: [
      '展示会配布、法人ノベルティ、大量販促ギフト',
      'Amazon FBA OEMブランド、ECショップ、SNSトレンド販売',
      'EDCセレクトショップ、クラウドファンディング、VIP法人ギフト',
      'コレクター市場、シリアル刻印入り限定モデル(001/100)'
    ],
    picksBadge: '全4価格帯の代表ベンチマーク',
    picksTitle: '$0.74エントリーから最高峰CNCコレクター品まで',
    faqBadge: '卸売カタログ FAQ',
    faqTitle: 'ボリューム単価・MOQ・工場直取引に関する質問',
    catalogName: 'FidgetSupply 140品番 金属EDCフィジェット卸売価格表',
    faqs: [
      { question: '140金型全体のEXW卸売価格レンジはいくらですか？', answer: '500個ロット基準で$0.74/個（FS-009）から$470.77/個（ジルコニウム/チタン）まで。85品番以上が回転率の高い$1.70–$12.50帯です。' },
      { question: '50個・200個・500個以上の数量価格帯はどう分かれていますか？', answer: '全商品ページに3段階EXW価格を明示しており、50個から500個へ増やすと単価が約15%〜22%下がります。' },
      { question: '140品番カタログからの仕入れに金型代はかかりますか？', answer: 'いいえ。既存の生産金型・CNC治具を使用するため初期金型費用は$0.00です。' },
      { question: '1種類50個ではなく複数モデル合計50個のMix-SKUは可能ですか？', answer: 'はい、無地在庫品は5〜10モデルを混載した50個スターター発注に対応しています。' },
      { question: '亜鉛合金(Zamak-3)・6063アルミ・CNC 304ステンレスの単価差は？', answer: 'Zamak-3は$0.74–$6.80、CNC 6063アルミは$4.50–$12.55、5軸CNC 304ステンレスは$8.49–$43.94です。' },
      { question: '50Wファイバーレーザー名入れと深彫り色入れの追加費用は？', answer: '50Wレーザー単色は+$0.15–$0.30/個（MOQ 100個）、深彫り＋エポキシ色入れは+$0.35–$0.60/個です。' },
      { question: '利用可能なパッケージ仕様と単価加算を教えてください。', answer: '個別酸化防止真空パウチ($0.00・MOQ 50)が標準付属。既製ブラックEVAジッパーケース(+$0.75+/個・MOQ 100)、特注ハードギフト箱(+$1.45+/個・MOQ 500)、窓付きブリキ缶(MOQ 1,000個〜)を選択できます。' },
      { question: '140品番すべてのExcel/PDF詳細価格表をもらえますか？', answer: '上部フォームへ業務メールをご入力いただくか、WhatsApp (+86 187 5012 6315) までご連絡ください。' },
      { question: '量産前に1個有償サンプルで品質確認できますか？', answer: 'はい、全140品番で対応しています（サンプル代・国際送料は買い手様負担、返金不可）。' },
      { question: '量産時の出荷準備日数とIATA PI953磁気対策はどうなっていますか？', answer: '無地は5〜7営業日、ロゴ名入れは10〜15営業日で準備し、福州よりIATA PI953遮蔽梱包にて出荷します。' }
    ]
  },
  ko: {
    bcCurrent: '140종 공장 단가표',
    badge1: '공장 직판 EXW 단가 매트릭스',
    badge2: '140종 가동 금형 · 금형비 $0',
    moldUnit: '종',
    kpis: [
      { label: '입문/판촉 (≤$3.50)' },
      { label: '주력 리테일 ($3.51–$10)' },
      { label: 'CNC 프로 ($10.01–$45)' },
      { label: '지르코늄/특수 ($45+)' }
    ],
    ctaPrimaryPrefix: '전체',
    ctaPrimarySuffix: 'SKU 보기 →',
    ctaSecondary: '1개 유료 샘플 안내 →',
    showcasePill: '3단계 수량별 도매가',
    showcaseAlt: 'FidgetSupply 140종 아연 합금·알루미늄·스테인리스·지르코늄 공장 직판 도매 가격표',
    showcaseMeta: ['무지 MOQ 50', '레이저 로고 MOQ 100', '50개 믹스발주 OK'],
    geoTitle: '직접 답변: 140종 기성 금형 메탈 피젯 EXW 도매 단가 및 MOQ 구조',
    geoAnswer: 'FidgetSupply 도매 카탈로그는 140종 기성 금속 금형(FS-001~FS-150)을 4개 EXW 가격대로 제공합니다: 판촉 입문($0.74–$3.50), 이커머스 주력($3.51–$10.00), 5축 CNC 스틸/황동($10.01–$45.00), 하이엔드 지르코늄($45.01–$470.77). 전 품목 금형비 $0, 무지 MOQ 50개(믹스 가능), 50W 레이저 로고 100개(+$0.15–$0.30/개)이며 1개 유료 샘플 주문도 가능합니다.',
    matrixBadge: '공장 가격대 구조',
    matrixTitle: 'EXW 도매 단가 구간별 140종 금형 분류',
    skuUnit: 'SKU',
    tableHeaders: ['가격대 (500개 EXW)', '금형 수', '주요 소재 및 공정', '적합 판매 채널', '해외 리테일가'],
    bandMaterials: [
      'Zamak-3 고압 다이캐스팅, 전기도금 / 엔틱 마감',
      '다층 Zamak-3, 6063 아노다이징 알루미늄, 황동 하이브리드, PTFE 슬라이더',
      '5축 CNC 304/316 스테인리스, 세라믹 디텐트, 극성중공 소리굽쇠',
      'CNC 지르코늄(Zr702), 티타늄, 다마스쿠스, 자개(전복) 인레이'
    ],
    bandChannels: [
      '기업 전시회 판촉물, 대량 프로모션 사은품',
      '아마존 FBA PB 브랜드, 숏폼·스마트스토어/쇼피파이 EDC 셀러',
      'EDC 전문 편집샵, 크라우드펀딩, VIP 임원 기프트',
      '하이엔드 컬렉터 클럽, 일련번호 한정판 (001/100)'
    ],
    picksBadge: '4개 구간별 대표 벤치마크',
    picksTitle: '$0.74 입문형부터 컬렉터 CNC 라인업까지',
    faqBadge: '도매 카탈로그 FAQ',
    faqTitle: '수량별 단가, MOQ 및 공장 직거래 질문',
    catalogName: 'FidgetSupply 140종 메탈 피젯 공장 직판 도매 가격표',
    faqs: [
      { question: '140종 전체 기성 금형의 공장 직판 EXW 단가 범위는 어떻게 되나요?', answer: '500개 기준 FS-009 포켓 스피너($0.74/개)부터 지르코늄·티타늄 컬렉터 에디션($470.77/개)까지 구성되며, 85종 이상이 $1.70–$12.50 구간에 속합니다.' },
      { question: '50개 / 200개 / 500개 이상 수량별 할인 구조는 어떤가요?', answer: '모든 제품 상세 페이지에 3단계 EXW 단가가 공개되며, 50개에서 500개로 늘리면 단가가 평균 15%~22% 낮아집니다.' },
      { question: '140종 카탈로그 주문 시 별도 금형비가 발생하나요?', answer: '아니요, 이미 구축된 기성 양산 금형과 CNC 지그를 사용하므로 금형비는 $0.00입니다.' },
      { question: '단일 모델 50개 대신 여러 모델을 섞어 50개 Mix-SKU 주문이 가능한가요?', answer: '네, 무지 재고 모델은 5~10종을 합쳐 50개 스타트 묶음 주문이 가능합니다.' },
      { question: '아연 합금(Zamak-3), 6063 알루미늄, CNC 304 스틸 간 단가 차이는?', answer: 'Zamak-3은 $0.74–$6.80, CNC 6063 알루미늄은 $4.50–$12.55, CNC 304 스틸은 $8.49–$43.94 수준입니다.' },
      { question: '50W 파이버 레이저 각인이나 딥 레이저 컬러 각인 비용은 얼마인가요?', answer: '단색 50W 레이저 각인은 +$0.15–$0.30/개(MOQ 100개), 딥 레이저+에나멜 컬러 충진은 +$0.35–$0.60/개입니다.' },
      { question: '선택 가능한 포장 옵션과 추가 비용은 어떻게 되나요?', answer: '전 품목 산화방지 진공 파우치($0.00, MOQ 50)가 기본 포함됩니다. 기성 블랙 EVA 지퍼 케이스(+$0.75+/개, MOQ 100), 맞춤 하드 기프트 박스(+$1.45+/개, MOQ 500), 창문형 메탈 틴케이스(MOQ 1,000+)를 선택할 수 있습니다.' },
      { question: '140종 전체 엑셀/PDF 공장 단가표를 받을 수 있나요?', answer: '상단 이메일 입력창에 회사 메일을 남기시거나 WhatsApp(+86 187 5012 6315)으로 요청하시면 즉시 발송해 드립니다.' },
      { question: '양산 전 1개 유료 샘플을 먼저 주문해 볼 수 있나요?', answer: '네, 140종 모두 1개 단위 유료 샘플 주문이 가능합니다(샘플비 및 국제 특송비 구매자 부담·비환불).' },
      { question: '대량 주문 준비 기간 및 IATA PI953 자석 항공 포장은 어떻게 지원되나요?', answer: '무지 출고 준비 5~7영업일, 로고 생산 10~15영업일이 소요되며 푸저우 물류 허브에서 IATA PI953 강자성 차폐 포장을 적용해 발송합니다.' }
    ]
  },
  id: {
    bcCurrent: 'Daftar Harga 140 SKU',
    badge1: 'MATRIKS EXW LANGSUNG PABRIK',
    badge2: '140 Cetakan Aktif · $0 Biaya Cetakan',
    moldUnit: 'Cetakan',
    kpis: [
      { label: 'Ekonomis (≤$3.50)' },
      { label: 'Retail Utama ($3.51–$10)' },
      { label: 'CNC Pro ($10.01–$45)' },
      { label: 'Eksotis / Zr ($45+)' }
    ],
    ctaPrimaryPrefix: 'Lihat Semua',
    ctaPrimarySuffix: 'SKU →',
    ctaSecondary: 'Program Sampel 1 Pc →',
    showcasePill: 'HARGA GROSIR 3 TINGKAT',
    showcaseAlt: 'Daftar harga grosir 140 SKU FidgetSupply bahan zinc alloy, aluminium, stainless steel, dan zirkonium',
    showcaseMeta: ['MOQ 50 Polos', 'MOQ 100 Logo Laser', 'Campur 50 Pc OK'],
    geoTitle: 'Jawaban Langsung: Tingkat Harga EXW & MOQ 140 Cetakan Pabrik',
    geoAnswer: 'Katalog grosir mencakup 140 cetakan logam siap produksi (FS-001–FS-150) dalam empat kelas harga EXW: Promo ($0.74–$3.50), Core E-Commerce ($3.51–$10.00), CNC Stainless/Kuningan ($10.01–$45.00), dan Kolektor Zirkonium ($45.01–$470.77). Bebas biaya cetakan ($0), MOQ 50 pcs polos (bisa Mix-SKU), 100 pcs dengan laser 50W (+$0.15–$0.30/pc), serta tersedia sampel berbayar 1 pc.',
    matrixBadge: 'ARSITEKTUR HARGA PABRIK',
    matrixTitle: '140 Cetakan Dikelompokkan Berdasarkan Rentang Harga EXW',
    skuUnit: 'SKU',
    tableHeaders: ['Rentang EXW (500 Pcs)', 'Cetakan Aktif', 'Material & Proses', 'Saluran Penjualan Terbaik', 'Kisaran Harga Retail'],
    bandMaterials: [
      'Die casting Zamak-3 tekanan tinggi, elektroplating / antik',
      'Zamak-3 berlapis, Aluminium 6063 anodized, Kuningan, Slider PTFE',
      'CNC 5-sumbu Stainless 304/316, bola keramik, garpu tala akustik',
      'CNC Zirkonium (Zr702), Titanium, Damaskus, tatahan Abalone'
    ],
    bandChannels: [
      'Souvenir pameran dagang, merchandise promosi massal',
      'Brand private label Amazon/e-commerce, penjual konten ASMR',
      'Toko EDC butik, hadiah eksekutif VIP',
      'Komunitas kolektor, edisi bernomor seri (001/100)'
    ],
    picksBadge: 'BENCHMARK DARI 4 TINGKAT HARGA',
    picksTitle: 'Model Unggulan dari $0.74 hingga CNC Kolektor',
    faqBadge: 'FAQ KATALOG GROSIR',
    faqTitle: 'Pertanyaan Harga Bertingkat, MOQ & Pembelian Pabrik',
    catalogName: 'Daftar Harga Grosir Pabrik FidgetSupply 140 SKU Logam',
    faqs: [
      { question: 'Berapa kisaran lengkap harga EXW untuk 140 cetakan siap pakai?', answer: 'Pada tingkat 500 pcs, harga EXW mulai dari $0.74/pc (FS-009) hingga $470.77/pc (Zirkonium/Titanium), dengan lebih dari 85 model di kelas $1.70–$12.50.' },
      { question: 'Bagaimana struktur tingkatan volume 50 / 200 / 500+ pcs?', answer: 'Meningkatkan jumlah dari 50 ke 500 pcs umumnya menurunkan harga pabrik sebesar 15%–22%.' },
      { question: 'Apakah ada biaya pembuatan cetakan baru?', answer: 'Tidak, $0.00 untuk seluruh 140 cetakan siap pakai.' },
      { question: 'Bisakah memesan 50 pcs campur (Mix-SKU)?', answer: 'Ya, untuk stok polos dapat mencampur 5 hingga 10 SKU dalam satu pengiriman awal.' },
      { question: 'Perbedaan biaya antara Zamak-3, Aluminium 6063, dan Stainless 304 CNC?', answer: 'Zamak-3: $0.74–$6.80; Aluminium 6063: $4.50–$12.55; CNC Stainless 304: $8.49–$43.94.' },
      { question: 'Berapa biaya tambahan ukiran laser 50W atau isian enamel Pantone?', answer: 'Laser 50W +$0.15–$0.30/pc (MOQ 100); deep laser + enamel +$0.35–$0.60/pc.' },
      { question: 'Pilihan kemasan apa saja yang tersedia?', answer: 'Kantong vakum anti-oksidasi ($0.00, MOQ 50) sudah termasuk; tas ritsleting EVA stok (+$0.75+/pc, MOQ 100); kotak kaku (+$1.45+/pc, MOQ 500); kaleng logam (1.000+).' },
      { question: 'Bagaimana cara mendapatkan daftar harga Excel/PDF 140 SKU?', answer: 'Masukkan email kerja Anda di atas atau hubungi WhatsApp +86 187 5012 6315.' },
      { question: 'Bisakah memesan sampel berbayar 1 pc sebelum order besar?', answer: 'Ya pada semua 140 cetakan; biaya sampel & kurir internasional ditanggung pembeli dan non-refundable.' },
      { question: 'Bagaimana jadwal produksi & pelindung magnet IATA PI953?', answer: '5–7 hari kerja persiapan polos, 10–15 hari kerja pesanan logo, dengan perisai PI953 dari Fuzhou.' }
    ]
  },
  ar: {
    bcCurrent: 'قائمة أسعار 140 منتجاً',
    badge1: 'مصفوفة أسعار المصنع المباشرة EXW',
    badge2: '140 قالباً نشطاً · 0$ رسوم قوالب',
    moldUnit: 'قالب',
    kpis: [
      { label: 'الفئة الاقتصادية (≤$3.50)' },
      { label: 'التجارة الإلكترونية ($3.51–$10)' },
      { label: 'CNC الاحترافية ($10.01–$45)' },
      { label: 'النادرة / الزركونيوم ($45+)' }
    ],
    ctaPrimaryPrefix: 'تصفح جميع',
    ctaPrimarySuffix: 'منتجاً →',
    ctaSecondary: 'برنامج عينة 1 قطعة →',
    showcasePill: 'تسعير الجملة بـ 3 مستويات',
    showcaseAlt: 'قائمة أسعار الجملة من FidgetSupply لـ 140 منتجاً من الزنك والألومنيوم والفولاذ والزركونيوم',
    showcaseMeta: ['الحد الأدنى 50 سادة', 'الحد الأدنى 100 ليزر', 'تشكيل 50 قطعة مسموح'],
    geoTitle: 'إجابة مباشرة: مستويات أسعار المصنع والحد الأدنى لـ 140 قالباً',
    geoAnswer: 'يشمل كتالوج الجملة 140 قالباً معدنياً جاهزاً (FS-001–FS-150) في أربع فئات EXW: الترويجية ($0.74–$3.50)، التجارة الإلكترونية ($3.51–$10.00)، الفولاذ/النحاس CNC ($10.01–$45.00)، والزركونيوم النادر ($45.01–$470.77). 0$ رسوم قوالب، حد أدنى 50 قطعة سادة أو تشكيلة Mix-SKU، و100 قطعة لحفر ليزر 50W (+$0.15–$0.30) مع توفر عينات مدفوعة بقطعة واحدة.',
    matrixBadge: 'هيكل فئات أسعار المصنع',
    matrixTitle: 'توزيع الـ 140 قالباً الجاهزاً حسب النطاق السعري EXW',
    skuUnit: 'منتج',
    tableHeaders: ['الفئة السعرية (500 قطعة EXW)', 'عدد القوالب', 'الخامات والتصنيع', 'أفضل قنوات البيع', 'سعر التجزئة المعتاد'],
    bandMaterials: [
      'سبائك Zamak-3 بالحقن عالي الضغط، طلاء كهربائي / عتيق',
      'Zamak-3 متعدد الطبقات، ألومنيوم 6063 مؤكسد، نحاس، تفلون PTFE',
      'تصنيع CNC خماسي المحاور فولاذ 304/316، كرات سيراميك، شوكة رنانة',
      'زركونيوم Zr702 CNC، تيتانيوم، فولاذ دمشقي، تطعيم صدفي'
    ],
    bandChannels: [
      'معارض الشركات، الهدايا الدعائية، التوزيعات الكبرى',
      'متاجر أمازون FBA والعلامات الخاصة والتجارة الإلكترونية',
      'متاجر EDC المتخصصة، هدايا كبار الشخصيات',
      'مقتنيات هواة الجمع، إصدارات محدودة مرقمة (001/100)'
    ],
    picksBadge: 'نماذج مرجعية من الفئات الأربع',
    picksTitle: 'موديلات رائدة من $0.74 حتى إصدارات CNC الفاخرة',
    faqBadge: 'الأسئلة الشائعة لكتالوج الجملة',
    faqTitle: 'أسئلة شرائح الأسعار والحد الأدنى والشراء المباشر',
    catalogName: 'قائمة أسعار الجملة FidgetSupply لـ 140 منتجاً معدنياً',
    faqs: [
      { question: 'ما النطاق السعري الكامل EXW عبر الـ 140 قالباً؟', answer: 'عند 500 قطعة تتراوح الأسعار من $0.74/قطعة (FS-009) إلى $470.77/قطعة (زركونيوم/تيتانيوم)، مع أكثر من 85 موديلاً بين $1.70 و$12.50.' },
      { question: 'كيف تتدرج مستويات الكمية (50 / 200 / 500+ قطعة)؟', answer: 'الانتقال من 50 إلى 500 قطعة يخفض تكلفة المصنع للوحدة بنسبة 15% إلى 22% عادةً.' },
      { question: 'هل توجد أي رسوم قوالب على هذا الكتالوج؟', answer: 'لا، الرسوم $0.00 لأن القوالب الـ 140 جاهزة على خطوط الإنتاج.' },
      { question: 'هل يمكن طلب تشكيلة Mix-SKU من 50 قطعة في البداية؟', answer: 'نعم للموديلات الجاهزة السادة، حيث يمكنك مزج 5 إلى 10 موديلات في أول شحنة.' },
      { question: 'ما فرق التكلفة بين زنك Zamak-3 وألومنيوم 6063 وفولاذ 304 CNC؟', answer: 'Zamak-3 بين $0.74–$6.80، ألومنيوم 6063 بين $4.50–$12.55، وفولاذ 304 CNC بين $8.49–$43.94.' },
      { question: 'كم يضيف الحفر بالليزر 50W أو تعبئة المينا بانتون؟', answer: 'ليزر 50W أحادي اللون +$0.15–$0.30/قطعة (MOQ 100)، والحفر العميق + المينا +$0.35–$0.60/قطعة.' },
      { question: 'ما خيارات التغليف المتوفرة وتكلفتها؟', answer: 'كيس مفرغ مقاوم للأكسدة مشمول ($0.00، MOQ 50)؛ حافظة EVA متوفرة (+$0.75+/قطعة، MOQ 100)؛ علبة فاخرة صلبة (+$1.45+/قطعة، MOQ 500)؛ علبة صفيح معدنية (+1,000 قطعة).' },
      { question: 'كيف أحصل على ملف Excel / PDF الكامل لـ 140 منتجاً؟', answer: 'أدخل بريدك الإلكتروني أعلاه أو راسلنا على واتساب +86 187 5012 6315.' },
      { question: 'هل يمكن طلب عينات مدفوعة بقطعة واحدة أولاً؟', answer: 'نعم لجميع الـ 140 موديلاً، مع تحمل المشتري تكلفة العينة والشحن الدولي دون استرداد.' },
      { question: 'كيف تُدار أوقات التجهيز وعزل الشحن الجوي IATA PI953؟', answer: '5–7 أيام عمل لتجهيز السادة و10–15 يوم عمل لطلبات الشعار مع تغليف عازل مغناطيسي PI953 من فوتشو.' }
    ]
  }
};

export function getWholesaleCatalogCopy(lang: SupportedLanguage): WholesaleCatalogCopy {
  return COPY[lang] || COPY.en;
}
