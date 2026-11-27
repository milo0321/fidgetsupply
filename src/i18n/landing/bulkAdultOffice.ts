import type { SupportedLanguage } from '../config';
import type { FaqItem } from './privateLabelOem';

export interface BulkAdultCopy {
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
  matrixBadge: string;
  matrixTitle: string;
  tableHeaders: [string, string, string, string];
  tableRows: [string, string, string, string][];
  picksBadge: string;
  picksTitle: string;
  faqBadge: string;
  faqTitle: string;
  faqs: FaqItem[];
  serviceName: string;
  serviceDesc: string;
}

const COPY: Record<SupportedLanguage, BulkAdultCopy> = {
  en: {
    bcCurrent: 'Adult & Office Bulk',
    badge1: 'ADULT SENSORY & OFFICE EDC',
    badge2: '<35 dBA Silent & Heavyweight Tiers',
    kpis: [
      { label: 'Office Decibel Floor', val: '<35 dBA Silent' },
      { label: 'Bulk Unit Range', val: '$0.74 – $21.45' },
      { label: 'Blank Bulk MOQ', val: '50' },
      { label: 'Non-Magnetic Option', val: '30+ Molds' }
    ],
    ctaPrimary: 'Request Bulk Adult Catalog →',
    ctaSecondary: 'Open Cost Calculator →',
    showcasePill: 'QUIET OFFICE CALIBRATED',
    showcaseMeta: ['PTFE Whisper Glide', '6063 Al / 304 SS', '1-Pc Sample OK'],
    geoTitle: 'Direct Answer: Choosing Bulk Metal Fidget Toys for Adults & Office Teams',
    geoAnswer: 'Searching for the best metal fidget toys for adults in corporate offices, ADHD neurodiversity programs, and adult retail? FidgetSupply classifies 140 metal fidget toys and stainless steel fidget toys by sound output: Silent <35 dBA PTFE Sliders & Rings (FS-125, FS-047, FS-135) plus adult metal fidget spinner options (FS-009, FS-043, FS-064); Soft Tactile Coins (FS-013, FS-027) at 35–50 dBA; and Tuning Fork Sliders (FS-150) for private focus. Blank wholesale starts at 50 pcs ($0.74+) with paid 1-pc samples.',
    matrixBadge: 'ACOUSTIC & SENSORY CALIBRATION',
    matrixTitle: 'Acoustic Decibel Matrix for Workplace, Therapy & Collector Tiers',
    tableHeaders: ['Acoustic Profile & Setting', 'Sound Output', 'Recommended Ready Molds', 'Wholesale Tier (EXW)'],
    tableRows: [
      ['Silent Open-Office & Call-Safe', '< 35 dBA (Whisper PTFE / R188)', 'FS-125 Smooth Slider, FS-047 Aluminum Slider, FS-135 Ring, FS-009 Top', '$0.74 – $12.90 / pc'],
      ['Soft Executive Desk Tactile', '35 – 50 dBA (Muted Detent)', 'FS-013 304SS Coin, FS-027 Cookie Coin, FS-064 Aluminum Desk Egg', '$2.76 – $11.50 / pc'],
      ['Crisp Acoustic & Mechanical Feedback', '55 – 68 dBA (2,800–4,200 Hz Ring)', 'FS-150 Tuning Fork Slider, FS-129 Divine Realm, FS-085 Ratchet EDC', '$10.19 – $21.45 / pc']
    ],
    picksBadge: 'ADULT FOCUS & OFFICE BESTSELLERS',
    picksTitle: 'Top 8 Metal Fidget Molds for Adult Bulk & Office Wellness',
    faqBadge: 'ADULT BULK SOURCING FAQ',
    faqTitle: 'Decibel Ratings, Magnet-Free Models & Volume Questions',
    serviceName: 'Bulk Adult & Silent Office Metal Fidget Toys Supply',
    serviceDesc: 'Wholesale bulk metal fidget toys for adults, silent <35 dBA PTFE office sliders, spinner rings, and sensory EDC tools directly from 140 ready molds ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Which bulk metal fidget toys are quietest (<35 dBA) for open offices and Zoom calls?', answer: 'Silent office leaders include FS-125 (Smooth Soap-Box PTFE Slider), FS-047 (6063 Anodized Aluminum Slider with PTFE pads), FS-135 (16-Magnet Bearing Ring), and FS-009 / FS-064 oil-free R188 desk spinners—all engineered to glide or spin below 35 dBA without disturbing coworkers.' },
      { question: 'Why do HR wellness buyers and therapists prefer solid metal fidgets for adult ADHD and anxiety?', answer: 'Unlike lightweight plastic trinkets, solid Zamak-3 (55–95g), aluminum, and CNC stainless steel (80–160g) tools deliver stronger proprioceptive tactile feedback, calibrated magnetic detents, and durable precision bearings suited for sustained adult focus.' },
      { question: 'What is the minimum order quantity for bulk adult fidget toys across mixed models?', answer: 'Blank stock starts at 50 pieces per SKU (with finish mixing available), or teams can bundle multiple SKUs into one Fuzhou export order to hit volume tier discounts.' },
      { question: 'Can we order 1-piece samples across silent vs. tactile models before buying in bulk?', answer: 'Yes. Paid 1-piece physical evaluation samples are available on all 140 molds (buyer pays unit cost + international courier shipping, non-refundable). Buyers often test an acoustic trio (e.g., FS-125 + FS-013 + FS-150) in one parcel.' },
      { question: 'How much do bulk adult metal fidget toys cost at 50, 200, and 500+ unit volumes?', answer: 'Factory EXW pricing spans $0.74–$0.92 for pocket twist spinners (FS-009), $3.18–$6.00 for signature Zamak/Aluminum magnetic sliders (FS-001, FS-047, FS-125), and $7.43–$21.45 for heavy CNC 304 stainless steel coins and multi-layer sliders.' },
      { question: 'Can we add our company wellness program logo onto silent office fidget sliders?', answer: 'Yes. At MOQ 100 pcs per SKU, permanent 50W fiber laser engraving adds +$0.15–$0.30/pc ($0 setup fee), or Deep Laser Engraving + Color Fill adds +$0.35–$0.60/pc with a free 12-hour digital proof.' },
      { question: 'What weight range works best for discreet everyday office desk use vs. heavy sensory grounding?', answer: 'For lightweight pocket carry without pulling trousers, 6063 Aluminum sliders (FS-047, ~35–48g) and spinner rings (FS-135) are ideal. For grounded desk sensory regulation, choose 60–115g Zamak-3 or 304 stainless steel models (FS-125, FS-013, FS-075).' },
      { question: 'Do any bulk adult fidget options avoid magnets completely for pacemaker or sensitive environments?', answer: 'Yes. Over 30 purely mechanical models—including oil-free R188 spinners (FS-009, FS-043, FS-064), dual-bearing ratchet bars (FS-085, FS-087), and sprocket chains (FS-079)—contain zero magnets.' },
      { question: 'What packaging comes standard on bulk office wellness orders?', answer: 'Every unit ships in an individual anti-oxidation vacuum pouch ($0.00 included at MOQ 50). Teams can upgrade to Stock Black EVA Zipper Cases (+$0.75+/pc, MOQ 100), Rigid Gift Boxes (+$1.45+/pc, MOQ 500), or Window Tin Boxes (MOQ 1,000+ MTO).' },
      { question: 'What is the production and dispatch lead time for bulk office wellness orders?', answer: 'Blank stock orders (50+ pcs) complete factory dispatch prep from Fuzhou in 5–7 business days; custom logo orders (100+ pcs) take 10–15 business days after proof approval. Door-to-door courier transit depends on DHL, FedEx, UPS, or DDP customs.' }
    ]
  },
  de: {
    bcCurrent: 'Erwachsenen- & Büro-Großhandel',
    badge1: 'ERWACHSENEN-EDC & BÜRO-FOKUS',
    badge2: '<35 dBA Leise & Massivmetall',
    kpis: [
      { label: 'Büro-Lautstärke', val: '<35 dBA Leise' },
      { label: 'Stückpreisspanne', val: '$0.74 – $21.45' },
      { label: 'Blanko-MOQ', val: '50' },
      { label: 'Ohne Magnete', val: '30+ Formen' }
    ],
    ctaPrimary: 'Erwachsenen-Katalog anfragen →',
    ctaSecondary: 'Kostenrechner öffnen →',
    showcasePill: 'LEISE BÜRO-KALIBRIERUNG',
    showcaseMeta: ['PTFE Flüstergleiten', '6063 Alu / 304 Edelstahl', '1-Stück-Muster OK'],
    geoTitle: 'Direktantwort: Metall-Fidgets für Erwachsene & leise Großraumbüros richtig auswählen',
    geoAnswer: 'FidgetSupply klassifiziert 140 Metall-Fidgets exakt nach Geräuschpegel für Büroteams, ADHS-Fokusprogramme und Fachhandel: Flüsterleise PTFE-Slider & Ringe unter 35 dBA (FS-125, FS-047, FS-135) sowie magnetfreie R188-Spinner (FS-009, FS-043, FS-064); dezente Taktil-Münzen (35–50 dBA: FS-013, FS-027); und Stimmgabel-Slider (FS-150). Blanko-Großhandel ab 50 Stk. ($0.74+).',
    matrixBadge: 'AKUSTIK- & SENSORIK-MATRIX',
    matrixTitle: 'Dezibel-Matrix für Büro, Therapie & anspruchsvolle Sammler',
    tableHeaders: ['Akustikprofil & Einsatzort', 'Schallpegel', 'Empfohlene Serienformen', 'Großhandel (EXW)'],
    tableRows: [
      ['Leises Großraumbüro & Calls', '< 35 dBA (PTFE / R188)', 'FS-125 Smooth Slider, FS-047 Alu Slider, FS-135 Ring, FS-009 Top', '$0.74 – $12.90 / Stk.'],
      ['Dezentes Chef-Schreibtisch-Feedback', '35 – 50 dBA (Gedämpft)', 'FS-013 304SS Münze, FS-027 Cookie Coin, FS-064 Alu-Kreisel', '$2.76 – $11.50 / Stk.'],
      ['Klares Resonanz- & Klicken', '55 – 68 dBA (2.800–4.200 Hz)', 'FS-150 Stimmgabel-Slider, FS-129, FS-085 Ratschen-EDC', '$10.19 – $21.45 / Stk.']
    ],
    picksBadge: 'BÜRO- & FOKUS-BESTSELLER',
    picksTitle: 'Top 8 Metall-Fidget-Formen für Erwachsene & Corporate Wellness',
    faqBadge: 'ERWACHSENEN-GROSSHANDEL FAQ',
    faqTitle: 'Fragen zu Dezibelwerten, magnetfreien Modellen & Mengen',
    serviceName: 'Metall-Fidgets für Erwachsene & leise Büro-EDC im Großhandel',
    serviceDesc: 'Großhandel für leise Metall-Fidget-Toys (<35 dBA), Spinnerringe und taktische Edelstahl-EDC direkt aus 140 Formen ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Welche Metall-Fidgets sind am leisesten (<35 dBA) für Großraumbüros?', answer: 'FS-125 (PTFE-Slider), FS-047 (6063 Alu-Slider), FS-135 (16-Magnet-Drehring) und ölfreie R188-Spinner wie FS-009/FS-064 arbeiten unter 35 dBA.' },
      { question: 'Warum bevorzugen HR-Teams und Therapeuten massives Metall bei ADHS-Fokus?', answer: 'Massiver Zamak-3-Guss (55–95 g) und CNC-Edelstahl (80–160 g) liefern tiefes propriozeptives Feedback und langlebige R188-Lager statt dünnem Plastik.' },
      { question: 'Wie hoch ist das MOQ für gemischte Erwachsenen-Bestellungen?', answer: 'Ab 50 Stück pro SKU in Blanko-Ausführung; mehrere Modelle lassen sich zu einer Sendung bündeln.' },
      { question: 'Können wir vorab 1-Stück-Muster von leisen und hörbaren Modellen vergleichen?', answer: 'Ja, bezahlte 1-Stück-Muster aller 140 Modelle sind erhältlich (Stückpreis + internationaler Kurierversand zulasten Käufer, nicht erstattungsfähig).' },
      { question: 'Wo liegen die Stückpreise bei 50, 200 und 500+ Stück?', answer: 'EXW-Preise starten bei $0.74–$0.92 (FS-009), $3.18–$6.00 (Alu-/Zamak-Slider FS-001, FS-047, FS-125) und $7.43–$21.45 für CNC-Edelstahl-Münzen.' },
      { question: 'Ist ein Firmenlogo für Corporate-Wellness-Kits möglich?', answer: 'Ja, ab 100 Stk./SKU per 50W-Faserlaser (+$0.15–$0.30/Stk.) oder Tiefenlaser+Farbfüllung (+$0.35–$0.60/Stk.).' },
      { question: 'Welches Gewicht eignet sich für Hosentasche vs. Schreibtisch?', answer: 'Für die Tasche 6063-Alu (35–48 g, FS-047) und Ringe (FS-135); für geerdeten Fokus am Schreibtisch 60–115 g Edelstahl/Zamak (FS-125, FS-013).' },
      { question: 'Gibt es völlig magnetfreie Optionen für sensible Bereiche?', answer: 'Ja, über 30 rein mechanische Modelle (FS-009, FS-043, FS-064, FS-085, FS-079) enthalten keinerlei Magnete.' },
      { question: 'Welche Verpackungen stehen für Firmen-Wellness-Pakete bereit?', answer: 'Standardmäßig Vakuumbeutel ($0, MOQ 50); optional Lager-EVA-Etui (+$0.75+, MOQ 100), Hartbox (MOQ 500) oder Metalldose (1.000+).' },
      { question: 'Wie lange dauert Versandvorbereitung und Fertigung?', answer: 'Blankoware (50+ Stk.) in 5–7 Werktagen; Logoware (100+ Stk.) in 10–15 Werktagen ab Werk Fuzhou.' }
    ]
  },
  fr: {
    bcCurrent: 'Vrac Adultes & Bureau',
    badge1: 'EDC ADULTE & BIEN-ÊTRE BUREAU',
    badge2: 'Silencieux <35 dBA & Poids Lourd',
    kpis: [
      { label: 'Seuil acoustique', val: '<35 dBA Silencieux' },
      { label: 'Fourchette EXW', val: '$0.74 – $21.45' },
      { label: 'MOQ Vierge', val: '50' },
      { label: 'Sans aimant', val: '30+ Moules' }
    ],
    ctaPrimary: 'Demander le catalogue Adulte →',
    ctaSecondary: 'Ouvrir le calculateur →',
    showcasePill: 'CALIBRÉ OPEN-SPACE',
    showcaseMeta: ['Glisse PTFE silence', 'Alu 6063 / Inox 304', 'Échantillon 1 pce OK'],
    geoTitle: 'Réponse directe : Choisir des fidgets métal en gros pour adultes et bureaux',
    geoAnswer: 'FidgetSupply classe ses 140 moules métalliques par niveau sonore pour les bureaux, programmes TDAH et boutiques adultes : modèles silencieux <35 dBA en PTFE et roulements R188 (FS-125, FS-047, FS-135, FS-009) ; pièces tactiles discrètes à 35–50 dBA (FS-013, FS-027) ; et sliders à diapason (FS-150). Vrac dès 50 pcs ($0.74+).',
    matrixBadge: 'CALIBRATION ACOUSTIQUE & TACTILE',
    matrixTitle: 'Matrice décibels pour bureaux, thérapie et collectionneurs',
    tableHeaders: ['Profil acoustique & usage', 'Niveau sonore', 'Moules recommandés', 'Tarif gros (EXW)'],
    tableRows: [
      ['Open-space silencieux & visio', '< 35 dBA (PTFE / R188)', 'FS-125 Slider lisse, FS-047 Alu, FS-135 Bague, FS-009 Toupie', '$0.74 – $12.90 / pce'],
      ['Tactile feutré de direction', '35 – 50 dBA (Clic doux)', 'FS-013 Pièce Inox, FS-027 Cookie, FS-064 Toupie Alu', '$2.76 – $11.50 / pce'],
      ['Acoustique nette & mécanique', '55 – 68 dBA (2 800–4 200 Hz)', 'FS-150 Diapason, FS-129, FS-085 Cliquet CNC', '$10.19 – $21.45 / pce']
    ],
    picksBadge: 'MEILLEURES VENTES BUREAU & ADULTE',
    picksTitle: 'Top 8 moules métal pour vrac adulte et bien-être au travail',
    faqBadge: 'FAQ VRAC ADULTE',
    faqTitle: 'Décibels, modèles sans aimant et remises sur volume',
    serviceName: 'Fourniture en gros de fidgets métal pour adultes et bureau silencieux',
    serviceDesc: 'Fidgets métal pour adultes en gros : sliders PTFE <35 dBA, bagues et EDC inox directement de 140 moules ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Quels fidgets métal sont les plus silencieux (<35 dBA) en open-space ?', answer: 'Les FS-125 (PTFE lisse), FS-047 (alu 6063), FS-135 (bague magnétique) et toupies R188 sans huile (FS-009/FS-064) opèrent sous 35 dBA.' },
      { question: 'Pourquoi les équipes RH choisissent-elles le métal massif pour la concentration adulte ?', answer: 'L’inertie du Zamak-3 (55–95 g) et de l’inox CNC (80–160 g) procure un retour proprioceptif supérieur au plastique léger.' },
      { question: 'Quel est le minimum par commande mixte adulte ?', answer: '50 pièces par SKU en version vierge avec possibilité de combiner plusieurs références.' },
      { question: 'Peut-on commander des échantillons 1 pièce silencieux et acoustiques ?', answer: 'Oui, échantillons payants à l’unité disponibles sur les 140 moules (pièce + port international payés par l’acheteur, non remboursables).' },
      { question: 'Quel budget prévoir pour 50, 200 et 500+ unités ?', answer: 'De $0.74–$0.92 (FS-009) à $3.18–$6.00 (sliders Zamak/Alu) et $7.43–$21.45 pour les modèles inox CNC.' },
      { question: 'Peut-on graver le logo d’un programme QVT sur ces modèles ?', answer: 'Oui, dès 100 pcs/SKU au laser fibre 50W (+$0.15–$0.30/pce) ou émail (+$0.35–$0.60/pce).' },
      { question: 'Quel poids convient en poche par rapport au bureau ?', answer: 'En poche : alu 6063 (35–48 g, FS-047) et bagues (FS-135). Sur bureau : 60–115 g (FS-125, FS-013, FS-075).' },
      { question: 'Proposez-vous des modèles garantis 100 % sans aimant ?', answer: 'Oui, plus de 30 modèles purement mécaniques (FS-009, FS-043, FS-064, FS-085, FS-079) sont sans aimant.' },
      { question: 'Quel conditionnement est inclus pour le vrac bureau ?', answer: 'Sachet sous vide individuel ($0.00, MOQ 50) de série, ou étui EVA (+$0.75+, MOQ 100) et coffret (MOQ 500).' },
      { question: 'Quels sont les délais de préparation en usine ?', answer: '5–7 jours ouvrés en stock vierge (50+ pcs) et 10–15 jours ouvrés avec logo laser (100+ pcs).' }
    ]
  },
  nl: {
    bcCurrent: 'Volwassenen & Kantoor Bulk',
    badge1: 'VOLWASSEN SENSORY & KANTOOR EDC',
    badge2: '<35 dBA Stil & Zwaar Metaal',
    kpis: [
      { label: 'Geluidsniveau', val: '<35 dBA Stil' },
      { label: 'Groothandelsprijs', val: '$0.74 – $21.45' },
      { label: 'Blanco MOQ', val: '50' },
      { label: 'Magneetvrij', val: '30+ Mallen' }
    ],
    ctaPrimary: 'Bulkcatalogus aanvragen →',
    ctaSecondary: 'Kostencalculator openen →',
    showcasePill: 'STIL OP KANTOOR GEKALIBREERD',
    showcaseMeta: ['Fluisterstil PTFE', '6063 Alu / 304 RVS', '1-st Monster OK'],
    geoTitle: 'Direct antwoord: Metalen fidgets voor volwassenen & stille kantoren inkopen',
    geoAnswer: 'FidgetSupply deelt 140 metalen fidgets in op geluidsniveau voor HR-welzijnsprogramma’s, ADHD-focus en retail: Fluisterstille <35 dBA PTFE-sliders & ringen (FS-125, FS-047, FS-135, FS-009); subtiele tactiele munten (35–50 dBA: FS-013, FS-027); en stemvork-sliders (FS-150). Blanco groothandel vanaf 50 st. ($0.74+).',
    matrixBadge: 'AKOESTISCHE & TACTIELE MATRIX',
    matrixTitle: 'Decibelmatrix voor werkplek, therapie en verzamelaars',
    tableHeaders: ['Akoestisch profiel', 'Geluidsoutput', 'Aanbevolen mallen', 'Groothandel (EXW)'],
    tableRows: [
      ['Stil open kantoor & videocalls', '< 35 dBA (PTFE / R188)', 'FS-125 Smooth Slider, FS-047 Alu, FS-135 Ring, FS-009 Top', '$0.74 – $12.90 / st.'],
      ['Subtiele bureau-feedback', '35 – 50 dBA (Gedempte klik)', 'FS-013 304 RVS Munt, FS-027 Cookie, FS-064 Alu Spinner', '$2.76 – $11.50 / st.'],
      ['Heldere akoestische klik', '55 – 68 dBA (2.800–4.200 Hz)', 'FS-150 Stemvork Slider, FS-129, FS-085 Ratel EDC', '$10.19 – $21.45 / st.']
    ],
    picksBadge: 'KANTOOR- & FOCUS-TOPSELLERS',
    picksTitle: 'Top 8 metalen fidget-mallen voor volwassenen in bulk',
    faqBadge: 'FAQ VOLWASSENEN BULK',
    faqTitle: 'Vragen over decibels, magneetvrije opties en staffels',
    serviceName: 'Bulk metalen fidgets voor volwassenen & stil kantoorgebruik',
    serviceDesc: 'Groothandel stille <35 dBA metalen fidgets voor volwassenen direct uit 140 productiemallen ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Welke metalen fidgets zijn het stilst (<35 dBA) voor open kantoren?', answer: 'FS-125, FS-047 (6063 alu), FS-135 spinnerring en olievrije R188-spinners (FS-009, FS-064) blijven onder 35 dBA.' },
      { question: 'Waarom kiezen HR-inkopers massief metaal voor volwassen focus?', answer: 'Massief Zamak-3 (55–95 g) en CNC RVS (80–160 g) bieden duurzame tactiele feedback en precies gewicht.' },
      { question: 'Wat is de minimale afname bij gemengde modellen?', answer: '50 stuks per SKU zonder gravure; u kunt meerdere modellen in één Fuzhou-exportorder combineren.' },
      { question: 'Kunnen we eerst 1-stuk proefmonsters bestellen?', answer: 'Ja, betaalde 1-stuk evaluatiemonsters op alle 140 mallen (stukprijs + internationale koerierskosten voor koper, niet-restitueerbaar).' },
      { question: 'Wat kosten bulkaantallen bij 50, 200 en 500+ stuks?', answer: 'Van $0.74–$0.92 (FS-009) tot $3.18–$6.00 voor sliders en $7.43–$21.45 voor zware CNC RVS-modellen.' },
      { question: 'Kunnen we een bedrijfslogo op stille sliders laten laseren?', answer: 'Ja, vanaf 100 st./SKU per 50W fiberlaser (+$0.15–$0.30/st.) of emaille vulling (+$0.35–$0.60/st.).' },
      { question: 'Welk gewicht werkt het best in de broekzak vs. op het bureau?', answer: 'Broekzak: 6063 aluminium (35–48 g, FS-047) en ringen. Bureau: 60–115 g Zamak-3/RVS (FS-125, FS-013).' },
      { question: 'Zijn er modellen helemaal zonder magneten?', answer: 'Ja, ruim 30 puur mechanische modellen (FS-009, FS-043, FS-064, FS-085, FS-079) zijn 100% magneetvrij.' },
      { question: 'Welke verpakking wordt standaard meegeleverd?', answer: 'Individuele anti-oxidatie vacuümzak ($0.00 bij MOQ 50); EVA-etui (+$0.75+, MOQ 100) en giftbox (MOQ 500) optioneel.' },
      { question: 'Wat is de levertijd vanuit de fabriek?', answer: 'Blanco voorraad (50+ st.) binnen 5–7 werkdagen verzendklaar; met logo (100+ st.) 10–15 werkdagen.' }
    ]
  },
  es: {
    bcCurrent: 'Mayorista Adultos y Oficina',
    badge1: 'EDC ADULTO Y OFICINA SILENCIOSA',
    badge2: '<35 dBA Silencio y Acero Sólido',
    kpis: [
      { label: 'Nivel acústico', val: '<35 dBA Silencioso' },
      { label: 'Rango EXW unidad', val: '$0.74 – $21.45' },
      { label: 'MOQ sin logo', val: '50' },
      { label: 'Sin imanes', val: '30+ Moldes' }
    ],
    ctaPrimary: 'Solicitar catálogo para adultos →',
    ctaSecondary: 'Abrir calculadora de costos →',
    showcasePill: 'CALIBRADO PARA OFICINA',
    showcaseMeta: ['Deslizamiento PTFE <35 dBA', 'Aluminio 6063 / Acero 304', 'Muestra 1 ud. OK'],
    geoTitle: 'Respuesta directa: Cómo elegir fidgets metálicos al por mayor para adultos y oficinas',
    geoAnswer: 'FidgetSupply clasifica 140 modelos metálicos por decibelios para oficinas corporativas y programas TDAH: silenciosos <35 dBA con PTFE o rodamientos R188 (FS-125, FS-047, FS-135, FS-009); monedas táctiles suaves de 35–50 dBA (FS-013, FS-027); y sliders de diapasón (FS-150). Mayorista desde 50 uds. ($0.74+).',
    matrixBadge: 'CALIBRACIÓN ACÚSTICA Y SENSORIAL',
    matrixTitle: 'Matriz de decibelios para oficina, terapia y coleccionistas',
    tableHeaders: ['Perfil acústico y entorno', 'Salida sonora', 'Moldes recomendados', 'Precio EXW'],
    tableRows: [
      ['Oficina abierta y videollamadas', '< 35 dBA (PTFE / R188)', 'FS-125 Smooth Slider, FS-047 Alu, FS-135 Anillo, FS-009 Top', '$0.74 – $12.90 / ud.'],
      ['Táctil suave de escritorio', '35 – 50 dBA (Clic sordo)', 'FS-013 Moneda 304SS, FS-027 Cookie, FS-064 Huevo Alu', '$2.76 – $11.50 / ud.'],
      ['Resonancia nítida y mecánica', '55 – 68 dBA (2,800–4,200 Hz)', 'FS-150 Diapasón, FS-129, FS-085 Trinquete EDC', '$10.19 – $21.45 / ud.']
    ],
    picksBadge: 'TOP VENTAS OFICINA Y ENFOQUE',
    picksTitle: 'Los 8 mejores moldes metálicos para bienestar laboral y adultos',
    faqBadge: 'FAQ MAYORISTA ADULTOS',
    faqTitle: 'Decibelios, modelos sin imanes y escalas de volumen',
    serviceName: 'Fidgets metálicos al por mayor para adultos y oficinas silenciosas',
    serviceDesc: 'Venta al por mayor de fidgets metálicos silenciosos (<35 dBA), anillos giratorios y sliders CNC desde 140 moldes ($0.74+, MOQ 50).',
    faqs: [
      { question: '¿Qué modelos metálicos son los más silenciosos (<35 dBA) para oficina?', answer: 'FS-125 (PTFE suave), FS-047 (aluminio 6063), FS-135 (anillo magnético) y los spinners R188 sin aceite FS-009/FS-064 operan bajo 35 dBA.' },
      { question: '¿Por qué prefieren las empresas metal sólido para enfoque adulto?', answer: 'El peso real de Zamak-3 (55–95 g) y acero inoxidable 304 (80–160 g) brinda mejor respuesta propioceptiva y durabilidad que el plástico.' },
      { question: '¿Cuál es el mínimo por pedido mixto para adultos?', answer: 'Desde 50 unidades por SKU en acabado estándar, combinando varios modelos en un solo envío.' },
      { question: '¿Podemos pedir muestras pagadas de 1 pieza antes del lote?', answer: 'Sí, muestras pagadas de 1 unidad en los 140 moldes (costo unitario + flete asumido por el comprador, no reembolsable).' },
      { question: '¿Cuánto cuestan a 50, 200 y 500+ unidades?', answer: 'Desde $0.74–$0.92 (FS-009), $3.18–$6.00 en sliders Zamak/Alu y $7.43–$21.45 en acero inoxidable CNC.' },
      { question: '¿Podemos grabar el logotipo de nuestra empresa en modelos silenciosos?', answer: 'Sí, desde 100 uds./SKU con láser fibra 50W (+$0.15–$0.30/ud.) o esmalte (+$0.35–$0.60/ud.).' },
      { question: '¿Qué peso conviene para bolsillo frente a escritorio?', answer: 'Para bolsillo: aluminio 6063 (35–48 g, FS-047). Para escritorio: 60–115 g en Zamak o acero (FS-125, FS-013).' },
      { question: '¿Hay opciones 100 % libres de imanes?', answer: 'Sí, más de 30 modelos mecánicos (FS-009, FS-043, FS-064, FS-085, FS-079) no contienen ningún imán.' },
      { question: '¿Qué empaque incluye cada unidad mayorista?', answer: 'Bolsa individual al vacío antioxidante ($0.00 en MOQ 50), con opción de estuche EVA (+$0.75+, MOQ 100) o caja rígida (MOQ 500).' },
      { question: '¿Cuál es el plazo de preparación y producción?', answer: 'Stock estándar (50+ uds.) en 5–7 días hábiles; producción con láser (100+ uds.) en 10–15 días hábiles.' }
    ]
  },
  it: {
    bcCurrent: 'Ingrosso Adulti & Ufficio',
    badge1: 'SENSORIALE ADULTO & EDC UFFICIO',
    badge2: '<35 dBA Silenziosi & Acciaio Pieno',
    kpis: [
      { label: 'Livello acustico', val: '<35 dBA Silenzioso' },
      { label: 'Fascia prezzo EXW', val: '$0.74 – $21.45' },
      { label: 'MOQ Neutro', val: '50' },
      { label: 'Senza magneti', val: '30+ Stampi' }
    ],
    ctaPrimary: 'Richiedi catalogo adulti →',
    ctaSecondary: 'Apri calcolatore costi →',
    showcasePill: 'CALIBRATO PER OPEN SPACE',
    showcaseMeta: ['Scorrimento PTFE <35 dBA', 'Alluminio 6063 / Inox 304', 'Campione 1 pz. OK'],
    geoTitle: 'Risposta diretta: Scegliere fidget in metallo all’ingrosso per adulti e uffici',
    geoAnswer: 'FidgetSupply classifica 140 stampi metallici per emissione acustica: modelli silenziosi <35 dBA con PTFE e cuscinetti R188 (FS-125, FS-047, FS-135, FS-009); monete tattili discrete da 35–50 dBA (FS-013, FS-027); e slider a diapason (FS-150). Ingrosso neutro da 50 pz. ($0.74+).',
    matrixBadge: 'CALIBRAZIONE ACUSTICA & SENSORIALE',
    matrixTitle: 'Matrice decibel per ufficio, terapia e collezionisti',
    tableHeaders: ['Profilo acustico & ambiente', 'Emissione sonora', 'Stampi consigliati', 'Listino EXW'],
    tableRows: [
      ['Open space & videocall', '< 35 dBA (PTFE / R188)', 'FS-125 Smooth Slider, FS-047 Alu, FS-135 Anello, FS-009 Top', '$0.74 – $12.90 / pz'],
      ['Tattile discreto da scrivania', '35 – 50 dBA (Scatto morbido)', 'FS-013 Moneta 304SS, FS-027 Cookie, FS-064 Uovo Alu', '$2.76 – $11.50 / pz'],
      ['Risonanza nitida & meccanica', '55 – 68 dBA (2.800–4.200 Hz)', 'FS-150 Diapason, FS-129, FS-085 Cricchetto CNC', '$10.19 – $21.45 / pz']
    ],
    picksBadge: 'BESTSELLER UFFICIO & FOCUS ADULTO',
    picksTitle: 'I migliori 8 stampi in metallo per benessere aziendale e adulti',
    faqBadge: 'FAQ INGROSSO ADULTI',
    faqTitle: 'Domande su decibel, modelli senza magneti e quantità',
    serviceName: 'Fornitura all’ingrosso di fidget in metallo per adulti e uffici silenziosi',
    serviceDesc: 'Ingrosso fidget metallo silenziosi (<35 dBA) per adulti e programmi benessere direttamente da 140 stampi ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Quali modelli sono più silenziosi (<35 dBA) in ufficio?', answer: 'FS-125, FS-047 in alluminio 6063, anello FS-135 e spinner R188 senza olio (FS-009, FS-064) operano sotto i 35 dBA.' },
      { question: 'Perché i team HR scelgono metallo pieno per il focus adulto?', answer: 'Il peso di Zamak-3 (55–95 g) e acciaio inox 304 (80–160 g) offre un feedback propriocettivo superiore rispetto alla plastica.' },
      { question: 'Qual è l’ordine minimo per assortimenti misti?', answer: '50 pezzi per SKU senza logo, con possibilità di combinare più modelli nello stesso ordine.' },
      { question: 'Si possono ordinare campioni da 1 pezzo prima del lotto?', answer: 'Sì, campioni a pagamento da 1 pz. su tutti i 140 stampi (costo unitario + corriere a carico dell’acquirente, non rimborsabili).' },
      { question: 'Quanto costano a 50, 200 e 500+ pezzi?', answer: 'Da $0.74–$0.92 (FS-009), $3.18–$6.00 per slider in lega e $7.43–$21.45 per modelli inox CNC.' },
      { question: 'È possibile incidere il logo aziendale sugli slider silenziosi?', answer: 'Sì, da 100 pz./SKU con laser fibra 50W (+$0.15–$0.30/pz) o smalto (+$0.35–$0.60/pz).' },
      { question: 'Quale peso scegliere per tasca rispetto alla scrivania?', answer: 'Tasca: alluminio 6063 (35–48 g, FS-047) e anelli. Scrivania: 60–115 g Zamak/Inox (FS-125, FS-013).' },
      { question: 'Avete modelli completamente privi di magneti?', answer: 'Sì, oltre 30 modelli puramente meccanici (FS-009, FS-043, FS-064, FS-085, FS-079) sono al 100% senza magneti.' },
      { question: 'Che imballaggio è incluso per ordini aziendali?', answer: 'Bustina sottovuoto individuale ($0.00, MOQ 50), con upgrade EVA (+$0.75+, MOQ 100) o box rigido (MOQ 500).' },
      { question: 'Quali sono i tempi di preparazione in fabbrica?', answer: '5–7 giorni lavorativi per stock neutro (50+ pz.) e 10–15 giorni lavorativi con incisione laser (100+ pz.).' }
    ]
  },
  pt: {
    bcCurrent: 'Atacado Adultos & Escritório',
    badge1: 'FOCO ADULTO & EDC ESCRITÓRIO',
    badge2: '<35 dBA Silenciosos & Aço Sólido',
    kpis: [
      { label: 'Nível sonoro', val: '<35 dBA Silencioso' },
      { label: 'Faixa EXW unidade', val: '$0.74 – $21.45' },
      { label: 'MOQ Liso', val: '50' },
      { label: 'Sem ímãs', val: '30+ Moldes' }
    ],
    ctaPrimary: 'Solicitar catálogo adulto →',
    ctaSecondary: 'Abrir calculadora de custos →',
    showcasePill: 'CALIBRADO PARA ESCRITÓRIO',
    showcaseMeta: ['Deslize PTFE <35 dBA', 'Alumínio 6063 / Inox 304', 'Amostra 1 un. OK'],
    geoTitle: 'Resposta direta: Como escolher fidgets metálicos em atacado para adultos e escritórios',
    geoAnswer: 'A FidgetSupply classifica 140 moldes metálicos por nível de ruído para escritórios e programas de foco TDAH: modelos silenciosos <35 dBA em PTFE e rolamentos R188 (FS-125, FS-047, FS-135, FS-009); moedas táteis discretas de 35–50 dBA (FS-013, FS-027); e sliders de diapasão (FS-150). Atacado liso a partir de 50 un. ($0.74+).',
    matrixBadge: 'CALIBRAÇÃO ACÚSTICA E SENSORIAL',
    matrixTitle: 'Matriz de decibéis para escritório, terapia e colecionadores',
    tableHeaders: ['Perfil acústico & uso', 'Saída de som', 'Moldes recomendados', 'Atacado (EXW)'],
    tableRows: [
      ['Escritório aberto e reuniões', '< 35 dBA (PTFE / R188)', 'FS-125 Slider Liso, FS-047 Alu, FS-135 Anel, FS-009 Top', '$0.74 – $12.90 / un.'],
      ['Tátil discreto executivo', '35 – 50 dBA (Clique suave)', 'FS-013 Moeda 304SS, FS-027 Cookie, FS-064 Ovo Alu', '$2.76 – $11.50 / un.'],
      ['Ressonância nítida e mecânica', '55 – 68 dBA (2.800–4.200 Hz)', 'FS-150 Diapasão, FS-129, FS-085 Catraca CNC', '$10.19 – $21.45 / un.']
    ],
    picksBadge: 'MAIS VENDIDOS ESCRITÓRIO & FOCO',
    picksTitle: 'Top 8 moldes metálicos para atacado adulto e bem-estar',
    faqBadge: 'FAQ ATACADO ADULTO',
    faqTitle: 'Perguntas sobre decibéis, modelos sem ímãs e volumes',
    serviceName: 'Fidgets metálicos em atacado para adultos e escritório silencioso',
    serviceDesc: 'Atacado de fidgets metálicos silenciosos (<35 dBA) para adultos diretamente de 140 moldes ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Quais modelos são mais silenciosos (<35 dBA) para escritório?', answer: 'FS-125, FS-047 em alumínio 6063, anel FS-135 e spinners R188 sem óleo FS-009/FS-064 operam abaixo de 35 dBA.' },
      { question: 'Por que equipes de RH preferem metal sólido para foco adulto?', answer: 'A massa do Zamak-3 (55–95 g) e aço inox 304 (80–160 g) entrega resposta tátil superior e maior durabilidade.' },
      { question: 'Qual o pedido mínimo para modelos variados?', answer: '50 peças por SKU em acabamento liso, podendo combinar diferentes SKU no mesmo pedido.' },
      { question: 'Posso pedir amostras pagas de 1 unidade antes da compra?', answer: 'Sim, em todos os 140 moldes (custo unitário + frete internacional pagos pelo comprador, não reembolsáveis).' },
      { question: 'Quanto custam nas faixas de 50, 200 e 500+ unidades?', answer: 'De $0.74–$0.92 (FS-009), $3.18–$6.00 nos sliders e $7.43–$21.45 nos modelos CNC em aço 304.' },
      { question: 'É possível gravar o logotipo da empresa nos modelos silenciosos?', answer: 'Sim, a partir de 100 un./SKU via laser 50W (+$0.15–$0.30/un.) ou esmalte (+$0.35–$0.60/un.).' },
      { question: 'Qual peso escolher para bolso vs. mesa?', answer: 'Bolso: alumínio 6063 (35–48 g, FS-047). Mesa: 60–115 g Zamak-3/Inox (FS-125, FS-013).' },
      { question: 'Existem opções 100% livres de ímãs?', answer: 'Sim, mais de 30 modelos puramente mecânicos (FS-009, FS-043, FS-064, FS-085, FS-079) não usam ímãs.' },
      { question: 'Qual embalagem acompanha os pedidos corporativos?', answer: 'Saco a vácuo individual ($0.00, MOQ 50), com estojo EVA (+$0.75+, MOQ 100) e caixa rígida (MOQ 500) opcionais.' },
      { question: 'Qual o prazo de preparo e produção na fábrica?', answer: '5–7 dias úteis para estoque liso (50+ un.) e 10–15 dias úteis para lotes gravados a laser (100+ un.).' }
    ]
  },
  sv: {
    bcCurrent: 'Bulk Vuxna & Kontor',
    badge1: 'VUXEN-FOKUS & TYST KONTOR-EDC',
    badge2: '<35 dBA Tyst & Tung Metall',
    kpis: [
      { label: 'Ljudnivå kontor', val: '<35 dBA Tyst' },
      { label: 'Prisintervall EXW', val: '$0.74 – $21.45' },
      { label: 'MOQ Utan logo', val: '50' },
      { label: 'Magnetfri', val: '30+ Formar' }
    ],
    ctaPrimary: 'Begär vuxenkatalog i bulk →',
    ctaSecondary: 'Öppna kostnadskalkylator →',
    showcasePill: 'KALIBRERAD FÖR KONTOR',
    showcaseMeta: ['Tyst PTFE-glid', '6063 Alu / 304 Rostfritt', '1-st Prov OK'],
    geoTitle: 'Direktsvar: Välja metallfidgets i bulk för vuxna och tysta kontor',
    geoAnswer: 'FidgetSupply klassificerar 140 metallformar efter ljudnivå för kontorsteam, ADHD-fokus och vuxenhandel: Tysta <35 dBA PTFE-sliders & ringar (FS-125, FS-047, FS-135, FS-009); dämpade mynt 35–50 dBA (FS-013, FS-027); samt stämgaffel-sliders (FS-150). Neutralt grossistpris från 50 st ($0.74+).',
    matrixBadge: 'AKUSTISK & TAKTIL KALIBRERING',
    matrixTitle: 'Decibelmatris för arbetsplats, terapi och samlare',
    tableHeaders: ['Akustisk profil & miljö', 'Ljudnivå', 'Rekommenderade formar', 'Grossistpris (EXW)'],
    tableRows: [
      ['Tyst kontorslandskap & möten', '< 35 dBA (PTFE / R188)', 'FS-125 Smooth Slider, FS-047 Alu, FS-135 Ring, FS-009 Top', '$0.74 – $12.90 / st'],
      ['Dämpad taktil skrivbordskänsla', '35 – 50 dBA (Mjuk klick)', 'FS-013 304SS Mynt, FS-027 Cookie, FS-064 Alu-snurra', '$2.76 – $11.50 / st'],
      ['Klar akustisk & mekanisk respons', '55 – 68 dBA (2 800–4 200 Hz)', 'FS-150 Stämgaffel, FS-129, FS-085 Spärr-EDC', '$10.19 – $21.45 / st']
    ],
    picksBadge: 'BÄSTSÄLJARE FÖR KONTOR & FOKUS',
    picksTitle: 'Topp 8 metallformar för vuxenfidgets & företagshälsa',
    faqBadge: 'FAQ VUXEN-BULK',
    faqTitle: 'Frågor om decibel, magnetfria modeller och volympriser',
    serviceName: 'Grossistförsäljning av metallfidgets för vuxna & tysta kontor',
    serviceDesc: 'Tysta (<35 dBA) metallfidgets för vuxna i bulk direkt från 140 formar ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Vilka metallfidgets är tystast (<35 dBA) för öppna kontor?', answer: 'FS-125, FS-047 (6063 alu), ringen FS-135 samt oljefria R188-spinners (FS-009, FS-064) arbetar under 35 dBA.' },
      { question: 'Varför föredrar HR och terapeuter massiv metall för vuxenfokus?', answer: 'Zamak-3 (55–95 g) och CNC rostfritt stål (80–160 g) ger distinkt proprioceptiv återkoppling och hållbarhet.' },
      { question: 'Vad är minsta order vid blandade modeller?', answer: '50 st per SKU i neutralt utförande, och olika SKU kan kombineras på samma exportorder.' },
      { question: 'Kan man beställa 1-st prover för ljudjämförelse före bulkorder?', answer: 'Ja, betalda 1-st prover finns på alla 140 formar (styckpris + frakt betalas av köparen, ej återbetalningsbart).' },
      { question: 'Vad kostar bulkorder vid 50, 200 och 500+ st?', answer: 'Från $0.74–$0.92 (FS-009), $3.18–$6.00 för sliders och $7.43–$21.45 för CNC 304SS.' },
      { question: 'Kan vi lasergravera företagslogotyp på tysta sliders?', answer: 'Ja, från 100 st/SKU med 50W fiberlaser (+$0.15–$0.30/st) eller emalj (+$0.35–$0.60/st).' },
      { question: 'Vilken vikt passar bäst i fickan kontra skrivbordet?', answer: 'Ficka: 6063 aluminium (35–48 g, FS-047). Skrivbord: 60–115 g Zamak-3 eller stål (FS-125, FS-013).' },
      { question: 'Finns det helt magnetfria alternativ?', answer: 'Ja, över 30 rent mekaniska modeller (FS-009, FS-043, FS-064, FS-085, FS-079) saknar magneter helt.' },
      { question: 'Vilken förpackning ingår för företagsleveranser?', answer: 'Enskild vakuumpåse ($0.00, MOQ 50) ingår; EVA-fodral (+$0.75+, MOQ 100) och ask (MOQ 500) som tillval.' },
      { question: 'Vad är produktionstiden från fabrik?', answer: '5–7 arbetsdagar för neutralt lager (50+ st) och 10–15 arbetsdagar med 50W-laser (100+ st).' }
    ]
  },
  da: {
    bcCurrent: 'Engros Voksne & Kontor',
    badge1: 'VOKSEN-FOKUS & STILLE KONTOR-EDC',
    badge2: '<35 dBA Støjsvag & Massivt Metal',
    kpis: [
      { label: 'Kontor-decibel', val: '<35 dBA Stille' },
      { label: 'Stykpris EXW', val: '$0.74 – $21.45' },
      { label: 'Blank MOQ', val: '50' },
      { label: 'Magnetfri', val: '30+ Forme' }
    ],
    ctaPrimary: 'Bestil voksenkatalog →',
    ctaSecondary: 'Åbn prisberegner →',
    showcasePill: 'STILLE KONTOR-KALIBRERET',
    showcaseMeta: ['Støjsvag PTFE-glid', '6063 Alu / 304 Stål', '1-stk Prøve OK'],
    geoTitle: 'Direkte svar: Valg af metalfidgets i bulk til voksne og stille kontorer',
    geoAnswer: 'FidgetSupply inddeler 140 metalforme efter lydniveau til kontorer og ADHD-fokus: Støjsvage <35 dBA PTFE-sliders & ringe (FS-125, FS-047, FS-135, FS-009); dæmpede mønter 35–50 dBA (FS-013, FS-027); og stemmegaffel-sliders (FS-150). Neutralt engros fra 50 stk. ($0.74+).',
    matrixBadge: 'AKUSTISK & SENSORISK MATRIX',
    matrixTitle: 'Decibel-matrix til arbejdsplads, terapi & samlere',
    tableHeaders: ['Akustisk profil', 'Lydniveau', 'Anbefalede forme', 'Engrospris (EXW)'],
    tableRows: [
      ['Stille storrumskontor & møder', '< 35 dBA (PTFE / R188)', 'FS-125 Smooth Slider, FS-047 Alu, FS-135 Ring, FS-009 Top', '$0.74 – $12.90 / stk'],
      ['Afdæmpet skrivebords-klik', '35 – 50 dBA (Blød klik)', 'FS-013 304SS Mønt, FS-027 Cookie, FS-064 Alu-æg', '$2.76 – $11.50 / stk'],
      ['Klar akustisk resonans', '55 – 68 dBA (2.800–4.200 Hz)', 'FS-150 Stemmegaffel, FS-129, FS-085 Skralde-EDC', '$10.19 – $21.45 / stk']
    ],
    picksBadge: 'BÆSTSÆLGERE TIL KONTOR & FOKUS',
    picksTitle: 'Top 8 metalforme til voksne og medarbejder-trivsel',
    faqBadge: 'FAQ VOKSEN ENGROS',
    faqTitle: 'Spørgsmål om decibel, magnetfri modeller & mængder',
    serviceName: 'Engros metalfidgets til voksne og stille kontorbrug',
    serviceDesc: 'Støjsvage (<35 dBA) metalfidgets til voksne direkte fra 140 forme ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Hvilke metalfidgets er mest støjsvage (<35 dBA) til kontor?', answer: 'FS-125, FS-047 (6063 alu), ringen FS-135 samt oliefri R188-spinnere (FS-009, FS-064) holder sig under 35 dBA.' },
      { question: 'Hvorfor foretrækker HR og terapeuter massivt metal til voksne?', answer: 'Zamak-3 (55–95 g) og CNC rustfrit stål (80–160 g) giver langt bedre taktil tyngde og holdbarhed end plastik.' },
      { question: 'Hvad er minimumsordren for blandede modeller?', answer: '50 stk. pr. SKU i neutral udgave; flere SKU kan samles på én forsendelse.' },
      { question: 'Kan man bestille 1-stk vareprøver først?', answer: 'Ja, betalte 1-stk prøver på alle 140 forme (enhedspris + fragt betales af køber, ikke-refunderbar).' },
      { question: 'Hvad koster større partier på 50, 200 og 500+ stk.?', answer: 'Fra $0.74–$0.92 (FS-009), $3.18–$6.00 for sliders og $7.43–$21.45 for CNC stålmodeller.' },
      { question: 'Kan firmalogo graveres på stille modeller?', answer: 'Ja, fra 100 stk./SKU med 50W fiberlaser (+$0.15–$0.30/stk) eller emalje (+$0.35–$0.60/stk).' },
      { question: 'Hvilken vægt passer i lommen kontra på skrivebordet?', answer: 'Lomme: 6063 alu (35–48 g, FS-047). Skrivebord: 60–115 g Zamak-3 eller stål (FS-125, FS-013).' },
      { question: 'Findes der helt magnetfri modeller?', answer: 'Ja, over 30 rent mekaniske modeller (FS-009, FS-043, FS-064, FS-085, FS-079) er helt uden magneter.' },
      { question: 'Hvilken emballage følger med som standard?', answer: 'Individuel vakuumpose ($0.00, MOQ 50) er inkluderet; EVA-etui (+$0.75+, MOQ 100) og æske (MOQ 500) kan tilkøbes.' },
      { question: 'Hvor lang er produktionstiden?', answer: '5–7 hverdage for neutralt lager (50+ stk.) og 10–15 hverdage med 50W laser (100+ stk.).' }
    ]
  },
  no: {
    bcCurrent: 'Engros Voksne & Kontor',
    badge1: 'VOKSEN-FOKUS & STILLE KONTOR-EDC',
    badge2: '<35 dBA Stillegående & Massivt Metall',
    kpis: [
      { label: 'Lydnivå kontor', val: '<35 dBA Stille' },
      { label: 'Prisintervall EXW', val: '$0.74 – $21.45' },
      { label: 'Blank MOQ', val: '50' },
      { label: 'Magnetfri', val: '30+ Former' }
    ],
    ctaPrimary: 'Be om voksenkatalog →',
    ctaSecondary: 'Åpne kostnadskalkulator →',
    showcasePill: 'KALIBRERT FOR KONTOR',
    showcaseMeta: ['Stille PTFE-glid', '6063 Alu / 304 Stål', '1-stk Prøve OK'],
    geoTitle: 'Direkte svar: Velge metallfidgets i bulk til voksne og stille kontorer',
    geoAnswer: 'FidgetSupply klassifiserer 140 metallformer etter lydnivå for kontorer og ADHD-fokus: Stillegående <35 dBA PTFE-slidere & ringer (FS-125, FS-047, FS-135, FS-009); dempede mynter på 35–50 dBA (FS-013, FS-027); og stemmegaffel-slidere (FS-150). Engros fra 50 stk. ($0.74+).',
    matrixBadge: 'AKUSTISK & TAKTIL MATRISE',
    matrixTitle: 'Desibelmatrise for arbeidsplass, terapi & samlere',
    tableHeaders: ['Akustisk profil', 'Lydutgang', 'Anbefalte former', 'Engrospris (EXW)'],
    tableRows: [
      ['Stille kontorlandskap & møter', '< 35 dBA (PTFE / R188)', 'FS-125 Smooth Slider, FS-047 Alu, FS-135 Ring, FS-009 Top', '$0.74 – $12.90 / stk'],
      ['Dempet skrivebords-klikk', '35 – 50 dBA (Myk klikk)', 'FS-013 304SS Mynt, FS-027 Cookie, FS-064 Alu-egg', '$2.76 – $11.50 / stk'],
      ['Klar akustisk resonans', '55 – 68 dBA (2 800–4 200 Hz)', 'FS-150 Stemmegaffel, FS-129, FS-085 Skralle-EDC', '$10.19 – $21.45 / stk']
    ],
    picksBadge: 'BESTSELGERE FOR KONTOR & FOKUS',
    picksTitle: 'Topp 8 metallformer for voksne og bedriftshelse',
    faqBadge: 'FAQ VOKSEN-BULK',
    faqTitle: 'Spørsmål om desibel, magnetfrie modeller & volum',
    serviceName: 'Engros metallfidgets til voksne og stille kontormiljø',
    serviceDesc: 'Stillegående (<35 dBA) metallfidgets for voksne rett fra 140 former ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Hvilke metallfidgets er stillest (<35 dBA) på åpent kontor?', answer: 'FS-125, FS-047 (6063 alu), ringen FS-135 og oljefrie R188-spinnere (FS-009, FS-064) holder seg under 35 dBA.' },
      { question: 'Hvorfor velger HR og terapeuter massivt metall for fokus?', answer: 'Zamak-3 (55–95 g) og CNC rustfritt stål (80–160 g) gir markant taktil tyngde og slitesterke lagre.' },
      { question: 'Hva er minimumsbestilling for blandede modeller?', answer: '50 stk. per SKU uten logo; flere modeller kan kombineres i én forsendelse.' },
      { question: 'Kan vi bestille 1-stk prøver før bulkbestilling?', answer: 'Ja, betalte 1-stk prøver på alle 140 former (enhetspris + kurerfrakt betalt av kjøper, ikke-refunderbart).' },
      { question: 'Hva koster partier på 50, 200 og 500+ stk.?', answer: 'Fra $0.74–$0.92 (FS-009), $3.18–$6.00 for slidere og $7.43–$21.45 for CNC stålmodeller.' },
      { question: 'Kan firmalogo lasergraveres på stille modeller?', answer: 'Ja, fra 100 stk./SKU med 50W fiberlaser (+$0.15–$0.30/stk) eller emalje (+$0.35–$0.60/stk).' },
      { question: 'Hvilken vekt passer best i lommen vs. på pulten?', answer: 'Lomme: 6063 alu (35–48 g, FS-047). Pult: 60–115 g Zamak-3 eller stål (FS-125, FS-013).' },
      { question: 'Finnes det helt magnetfrie modeller?', answer: 'Ja, over 30 mekaniske modeller (FS-009, FS-043, FS-064, FS-085, FS-079) er helt uten magneter.' },
      { question: 'Hvilken emballasje følger med som standard?', answer: 'Individuell vakuumpose ($0.00, MOQ 50) inngår; EVA-etui (+$0.75+, MOQ 100) og gaveeske (MOQ 500) valgfritt.' },
      { question: 'Hva er produksjonstid fra fabrikk?', answer: '5–7 virkedager for nøytralt lager (50+ stk.) og 10–15 virkedager med 50W-laser (100+ stk.).' }
    ]
  },
  fi: {
    bcCurrent: 'Aikuisten & Toimiston Tukku',
    badge1: 'AIKUISTEN KESKITTYMINEN & TOIMISTO',
    badge2: '<35 dBA Hiljainen & Täysmetalli',
    kpis: [
      { label: 'Toimiston melutaso', val: '<35 dBA Hiljainen' },
      { label: 'Tukkuhintahaarukka', val: '$0.74 – $21.45' },
      { label: 'Merkitsemätön MOQ', val: '50' },
      { label: 'Magneetiton', val: '30+ Muottia' }
    ],
    ctaPrimary: 'Pyydä aikuisten tukkukuvasto →',
    ctaSecondary: 'Avaa kustannuslaskuri →',
    showcasePill: 'TOIMISTOON KALIBROITU',
    showcaseMeta: ['Hiljainen PTFE-liuku', '6063 Alu / 304 Teräs', '1 kpl Näyte OK'],
    geoTitle: 'Suora vastaus: Metallisten fidgetien valinta aikuisille ja hiljaisiin toimistoihin',
    geoAnswer: 'FidgetSupply luokittelee 140 metallimallia äänitason mukaan toimistoille ja ADHD-keskittymiseen: Hiljaiset <35 dBA PTFE-sliderit & sormukset (FS-125, FS-047, FS-135, FS-009); vaimeat 35–50 dBA kolikot (FS-013, FS-027); sekä äänirauta-sliderit (FS-150). Tukkutilaukset alkaen 50 kpl ($0.74+).',
    matrixBadge: 'AKUSTINEN & TUNTUMAMATRIISI',
    matrixTitle: 'Desibelimatriisi työpaikoille, terapiaan & keräilijöille',
    tableHeaders: ['Akustinen profiili', 'Äänitaso', 'Suositellut valmismuotit', 'Tukkuhinta (EXW)'],
    tableRows: [
      ['Hiljainen avotoimisto & etäpalaveri', '< 35 dBA (PTFE / R188)', 'FS-125 Smooth Slider, FS-047 Alu, FS-135 Sormus, FS-009 Top', '$0.74 – $12.90 / kpl'],
      ['Hillitty työpöytätuntuma', '35 – 50 dBA (Vaimennettu)', 'FS-013 304SS Kolikko, FS-027 Cookie, FS-064 Alu-muna', '$2.76 – $11.50 / kpl'],
      ['Kirkas mekaaninen resonanssi', '55 – 68 dBA (2 800–4 200 Hz)', 'FS-150 Äänirauta, FS-129, FS-085 Räikkä-EDC', '$10.19 – $21.45 / kpl']
    ],
    picksBadge: 'TOIMISTON & KESKITTYMISEN SUOSIKIT',
    picksTitle: 'Top 8 metallimuottia aikuisten tukku- ja työhyvinvointikäyttöön',
    faqBadge: 'AIKUISTEN TUKKU FAQ',
    faqTitle: 'Kysymyksiä desibeleistä, magneetittomista malleista & eristä',
    serviceName: 'Aikuisten ja hiljaisten toimistojen metallifidgetien tukkutoimitus',
    serviceDesc: 'Hiljaiset (<35 dBA) metallifidgetit aikuisille suoraan 140 valmismuotista ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Mitkä metallimallit ovat hiljaisimpia (<35 dBA) avotoimistoon?', answer: 'FS-125, FS-047 (6063 alu), FS-135-sormus sekä öljyttömät R188-spinnerit (FS-009, FS-064) toimivat alle 35 dBA.' },
      { question: 'Miksi HR ja terapeutit suosivat täysmetallia aikuisten keskittymiseen?', answer: 'Zamak-3 (55–95 g) ja CNC-teräs (80–160 g) tarjoavat paremman painontunteen ja kestävät R188-laakerit muovia paremmin.' },
      { question: 'Mikä on minimitilaus useamman mallin yhdistelmässä?', answer: '50 kpl per SKU ilman logoa; eri malleja voidaan koota samaan vientitilaukseen.' },
      { question: 'Voiko 1 kpl näytteitä tilata äänitason vertailuun?', answer: 'Kyllä, maksulliset 1 kpl näytteet kaikista 140 muotista (yksikköhinta + rahti ostajalta, ei palauteta).' },
      { question: 'Paljonko erät maksavat 50, 200 ja 500+ kappaleessa?', answer: 'Alkaen $0.74–$0.92 (FS-009), $3.18–$6.00 slidereissa ja $7.43–$21.45 CNC-teräsmalleissa.' },
      { question: 'Voiko hiljaisiin slidereihin kaivertaa yrityksen logon?', answer: 'Kyllä, alkaen 100 kpl/SKU 50W kuitulaserilla (+$0.15–$0.30/kpl) tai emalilla (+$0.35–$0.60/kpl).' },
      { question: 'Mikä paino sopii taskuun vs. työpöydälle?', answer: 'Taskuun: 6063-alumiini (35–48 g, FS-047). Työpöydälle: 60–115 g Zamak-3/teräs (FS-125, FS-013).' },
      { question: 'Onko saatavilla täysin magneetittomia malleja?', answer: 'Kyllä, yli 30 puhtaasti mekaanista mallia (FS-009, FS-043, FS-064, FS-085, FS-079) ei sisällä magneetteja.' },
      { question: 'Miten yritystilaukset pakataan vakiona?', answer: 'Yksittäinen hapettumista estävä tyhjiöpussi ($0.00, MOQ 50); EVA-kotelo (+$0.75+, MOQ 100) ja rasia (MOQ 500) valinnaisina.' },
      { question: 'Mikä on tehtaan valmistus- ja käsittelyaika?', answer: '5–7 arkipäivää vakiovarastolle (50+ kpl) ja 10–15 arkipäivää 50W-lasererille (100+ kpl).' }
    ]
  },
  pl: {
    bcCurrent: 'Hurt Dorośli & Biuro',
    badge1: 'FOKUS DOROSŁYCH & EDC BIUROWE',
    badge2: '<35 dBA Ciche & Ciężki Metal',
    kpis: [
      { label: 'Głośność biurowa', val: '<35 dBA Cichy' },
      { label: 'Ceny hurtowe EXW', val: '$0.74 – $21.45' },
      { label: 'MOQ bez logo', val: '50' },
      { label: 'Bez magnesów', val: '30+ Form' }
    ],
    ctaPrimary: 'Poproś o katalog dla dorosłych →',
    ctaSecondary: 'Otwórz kalkulator kosztów →',
    showcasePill: 'KALIBRACJA DO BIURA',
    showcaseMeta: ['Cichy ślizg PTFE', 'Alu 6063 / Stal 304', 'Próbka 1 szt. OK'],
    geoTitle: 'Bezpośrednia odpowiedź: Jak wybrać metalowe fidgety w hurcie dla dorosłych i biur',
    geoAnswer: 'FidgetSupply dzieli 140 metalowych form według głośności do biur, terapii ADHD i sprzedaży detalicznej: ciche <35 dBA slidery PTFE i pierścienie (FS-125, FS-047, FS-135, FS-009); dyskretne monety 35–50 dBA (FS-013, FS-027); oraz akustyczne slidery kamertonowe (FS-150). Hurt bez logo od 50 szt. ($0.74+).',
    matrixBadge: 'MATRYCA AKUSTYCZNA I SENSORYCZNA',
    matrixTitle: 'Tabela decybeli dla biur, gabinetów i kolekcjonerów',
    tableHeaders: ['Profil akustyczny', 'Poziom dźwięku', 'Polecane formy', 'Stawka EXW'],
    tableRows: [
      ['Ciche biuro open-space i telekonferencje', '< 35 dBA (PTFE / R188)', 'FS-125 Smooth, FS-047 Alu, FS-135 Pierścień, FS-009 Top', '$0.74 – $12.90 / szt.'],
      ['Stłumiony klik biurkowy', '35 – 50 dBA (Miękki skok)', 'FS-013 Moneta 304SS, FS-027 Cookie, FS-064 Alu', '$2.76 – $11.50 / szt.'],
      ['Wyraźny rezonans mechaniczny', '55 – 68 dBA (2800–4200 Hz)', 'FS-150 Kamerton, FS-129, FS-085 Zapadka EDC', '$10.19 – $21.45 / szt.']
    ],
    picksBadge: 'BESTSELLERY BIURO & KONCENTRACJA',
    picksTitle: 'Top 8 metalowych form dla dorosłych i programów wellbeing',
    faqBadge: 'FAQ HURT DOROŚLI',
    faqTitle: 'Decybele, wersje bez magnesów i progi hurtowe',
    serviceName: 'Hurtowa dostawa metalowych fidgetów dla dorosłych i cichych biur',
    serviceDesc: 'Ciche (<35 dBA) metalowe fidgety dla dorosłych w hurcie bezpośrednio ze 140 form ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Które metalowe fidgety są najcichsze (<35 dBA) do otwartego biura?', answer: 'FS-125, FS-047 (alu 6063), pierścień FS-135 oraz spinnery R188 bez smaru (FS-009, FS-064) pracują poniżej 35 dBA.' },
      { question: 'Dlaczego działy HR wybierają lity metal dla koncentracji dorosłych?', answer: 'Masa stopu Zamak-3 (55–95 g) i stali CNC 304 (80–160 g) zapewnia wyraźną stymulację proprioceptywną i trwałość.' },
      { question: 'Jakie jest MOQ dla mieszanego zamówienia hurtowego?', answer: 'Od 50 sztuk na SKU bez logo, z możliwością łączenia kilku modeli na jednej fakturze.' },
      { question: 'Czy można zamówić próbki po 1 sztuce przed zakupem?', answer: 'Tak, płatne próbki po 1 szt. dla wszystkich 140 form (cena + kurier po stronie kupującego, bezzwrotne).' },
      { question: 'Ile wynoszą ceny przy 50, 200 i 500+ sztukach?', answer: 'Od $0.74–$0.92 (FS-009), $3.18–$6.00 za slidery i $7.43–$21.45 za ciężką stal CNC 304.' },
      { question: 'Czy na cichych sliderach można wygrawerować logo firmy?', answer: 'Tak, od 100 szt./SKU laserem 50W (+$0.15–$0.30/szt.) lub emalią (+$0.35–$0.60/szt.).' },
      { question: 'Jaka waga pasuje do kieszeni, a jaka na biurko?', answer: 'Do kieszeni: aluminium 6063 (35–48 g, FS-047). Na biurko: 60–115 g Zamak-3 lub stal (FS-125, FS-013).' },
      { question: 'Czy są modele całkowicie pozbawione magnesów?', answer: 'Tak, ponad 30 modeli czysto mechanicznych (FS-009, FS-043, FS-064, FS-085, FS-079) nie zawiera magnesów.' },
      { question: 'Jakie opakowanie jest wliczone w cenę hurtową?', answer: 'Indywidualny woreczek próżniowy ($0.00 przy MOQ 50); etui EVA (+$0.75+, MOQ 100) i pudełko (MOQ 500) opcjonalnie.' },
      { question: 'Ile trwa przygotowanie partii w fabryce?', answer: '5–7 dni roboczych dla towaru bez logo (50+ szt.) i 10–15 dni roboczych dla partii z laserem 50W (100+ szt.).' }
    ]
  },
  cs: {
    bcCurrent: 'Dospělí & Kancelář Velkoobchod',
    badge1: 'DOSPĚLÁ SENZORIKA & KANCELÁŘSKÉ EDC',
    badge2: '<35 dBA Tiché & Poctivý Kov',
    kpis: [
      { label: 'Hlučnost v kanceláři', val: '<35 dBA Tiché' },
      { label: 'Velkoobchodní rozpětí', val: '$0.74 – $21.45' },
      { label: 'MOQ bez loga', val: '50' },
      { label: 'Bez magnetů', val: '30+ Forem' }
    ],
    ctaPrimary: 'Poptat velkoobchodní katalog →',
    ctaSecondary: 'Otevřít kalkulačku nákladů →',
    showcasePill: 'KALIBROVÁNO PRO OPEN-SPACE',
    showcaseMeta: ['Tichý PTFE skluz', '6063 Alu / 304 Nerez', '1 ks Vzorek OK'],
    geoTitle: 'Přímá odpověď: Jak vybrat velkoobchodní kovové fidgety pro dospělé a tiché kanceláře',
    geoAnswer: 'FidgetSupply dělí 140 kovových forem podle hlučnosti pro firemní kanceláře, ADHD programy a retail: tiché <35 dBA PTFE slidery a prsteny (FS-125, FS-047, FS-135, FS-009); tlumené mince 35–50 dBA (FS-013, FS-027); a ladičkové slidery (FS-150). Velkoobchod bez loga od 50 ks ($0.74+).',
    matrixBadge: 'AKUSTICKÁ & HMATOVÁ MATICE',
    matrixTitle: 'Decibelová matice pro kancelář, terapii i náročné uživatele',
    tableHeaders: ['Akustický profil a prostředí', 'Hladina hluku', 'Doporučené hotové formy', 'Velkoobchodní cena (EXW)'],
    tableRows: [
      ['Tichý open-space & online porady', '< 35 dBA (PTFE / R188)', 'FS-125 Smooth, FS-047 Alu, FS-135 Prsten, FS-009 Top', '$0.74 – $12.90 / ks'],
      ['Tlumený kancelářský klik', '35 – 50 dBA (Měkký doraz)', 'FS-013 304SS Mince, FS-027 Cookie, FS-064 Alu', '$2.76 – $11.50 / ks'],
      ['Čistá mechanická rezonance', '55 – 68 dBA (2 800–4 200 Hz)', 'FS-150 Ladička, FS-129, FS-085 Ráčna EDC', '$10.19 – $21.45 / ks']
    ],
    picksBadge: 'BESTSELLERY PRO KANCELÁŘ & SOUSTŘEDĚNÍ',
    picksTitle: 'Top 8 kovových forem pro firemní wellbeing a dospělé',
    faqBadge: 'FAQ VELKOOBCHOD DOSPĚLÍ',
    faqTitle: 'Hladiny hluku (dBA), bezmagnetické modely a množstevní odběry',
    serviceName: 'Velkoobchodní dodávky kovových fidgetů pro dospělé a tiché kanceláře',
    serviceDesc: 'Tiché (<35 dBA) kovové fidgety pro dospělé velkoobchodně přímo ze 140 forem ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Které kovové fidgety jsou nejtišší (<35 dBA) pro otevřenou kancelář?', answer: 'FS-125 (PTFE skluz), FS-047 (hliník 6063), otočný prsten FS-135 a suchá ložiska R188 u FS-009/FS-064 pracují pod 35 dBA.' },
      { question: 'Proč HR a terapeuti preferují masivní kov před levným plastem?', answer: 'Slitina Zamak-3 (55–95 g) a CNC nerez 304 (80–160 g) dodávají dospělým výraznou proprioceptivní odezvu a dlouhou životnost.' },
      { question: 'Jaké je MOQ při kombinaci více modelů?', answer: 'Od 50 ks/SKU v čistém provedení; v rámci jedné zásilky lze zkombinovat více modelů.' },
      { question: 'Lze nejprve objednat 1 ks vzorky pro porovnání hlučnosti?', answer: 'Ano, placené 1 ks vzorky nabízíme u všech 140 forem (cena kusu + mezinárodní kurýr hradí kupující, nevratné).' },
      { question: 'Kolik stojí odběr při 50, 200 a 500+ kusech?', answer: 'Od $0.74–$0.92 (FS-009), $3.18–$6.00 u hliníkových/Zamak sliderů po $7.43–$21.45 u těžké CNC oceli 304.' },
      { question: 'Lze na tiché kancelářské slidery vypálit firemní logo?', answer: 'Ano, od 100 ks/SKU trvalým 50W vláknovým laserem (+$0.15–$0.30/ks) nebo smaltem (+$0.35–$0.60/ks).' },
      { question: 'Jaká hmotnost je vhodná do kapsy oproti stolu?', answer: 'Do kapsy: hliník 6063 (35–48 g, FS-047). Na stůl: 60–115 g Zamak-3 či nerez (FS-125, FS-013).' },
      { question: 'Existují i modely zcela bez magnetů?', answer: 'Ano, přes 30 čistě mechanických modelů (FS-009, FS-043, FS-064, FS-085, FS-079) neobsahuje žádné magnety.' },
      { question: 'Jaké balení je zahrnuto v ceně?', answer: 'Samostatný vakuový antioxidační sáček ($0.00 při MOQ 50); EVA pouzdro (+$0.75+, MOQ 100) a krabička (MOQ 500) volitelně.' },
      { question: 'Jaká je doba přípravy a výroby v továrně?', answer: '5–7 pracovních dnů u čistého zboží (50+ ks) a 10–15 pracovních dnů u zakázek s 50W laserem (100+ ks).' }
    ]
  },
  ru: {
    bcCurrent: 'Опт для взрослых и офиса',
    badge1: 'ДЛЯ ВЗРОСЛЫХ И ТИХОГО ОФИСА',
    badge2: '<35 дБА Тихие и цельный металл',
    kpis: [
      { label: 'Уровень шума', val: '<35 дБА Тихие' },
      { label: 'Опт EXW за шт.', val: '$0.74 – $21.45' },
      { label: 'MOQ без лого', val: '50' },
      { label: 'Без магнитов', val: '30+ форм' }
    ],
    ctaPrimary: 'Запросить каталог для взрослых →',
    ctaSecondary: 'Открыть калькулятор цены →',
    showcasePill: 'ОТКАЛИБРОВАНО ДЛЯ ОФИСА',
    showcaseMeta: ['Тихое скольжение PTFE', 'Алюминий 6063 / Сталь 304', 'Образец от 1 шт.'],
    geoTitle: 'Прямой ответ: Как подобрать металлические фиджеты оптом для взрослых и тихого офиса',
    geoAnswer: 'FidgetSupply делит 140 металлических моделей по громкости для корпоративных офисов, программ концентрации и розницы: бесшумные <35 дБА PTFE-слайдеры и кольца (FS-125, FS-047, FS-135, FS-009); мягкие тактильные монеты 35–50 дБА (FS-013, FS-027); и камертон-слайдеры (FS-150). Опт от 50 шт. ($0.74+).',
    matrixBadge: 'АКУСТИЧЕСКАЯ И ТАКТИЛЬНАЯ МАТРИЦА',
    matrixTitle: 'Таблица громкости для офиса, терапии и коллекционеров',
    tableHeaders: ['Акустический профиль', 'Уровень шума', 'Рекомендуемые формы', 'Опт EXW'],
    tableRows: [
      ['Тихий опенспейс и созвоны', '< 35 дБА (PTFE / R188)', 'FS-125 Smooth, FS-047 Alu, FS-135 Кольцо, FS-009 Топ', '$0.74 – $12.90 / шт.'],
      ['Мягкий клик на рабочем столе', '35 – 50 дБА (Приглушенный)', 'FS-013 Монета 304SS, FS-027 Cookie, FS-064 Alu', '$2.76 – $11.50 / шт.'],
      ['Звонкий камертон и механика', '55 – 68 дБА (2800–4200 Гц)', 'FS-150 Камертон, FS-129, FS-085 Трещотка CNC', '$10.19 – $21.45 / шт.']
    ],
    picksBadge: 'ХИТЫ ДЛЯ ОФИСА И КОНЦЕНТРАЦИИ',
    picksTitle: 'Топ-8 металлических форм для взрослых и корпоративного велнеса',
    faqBadge: 'FAQ ОПТ ДЛЯ ВЗРОСЛЫХ',
    faqTitle: 'Уровень дБА, безмагнитные модели и оптовые партии',
    serviceName: 'Оптовые поставки металлических фиджетов для взрослых и тихого офиса',
    serviceDesc: 'Бесшумные (<35 дБА) металлические фиджеты для взрослых оптом напрямую со 140 форм ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Какие модели самые тихие (<35 дБА) для открытого офиса?', answer: 'FS-125 (PTFE), FS-047 (алюминий 6063), кольцо FS-135 и сухие спиннеры R188 (FS-009, FS-064) работают тише 35 дБА.' },
      { question: 'Почему HR и специалисты выбирают цельный металл для фокусировки?', answer: 'Масса сплава Zamak-3 (55–95 г) и стали 304 (80–160 г) дает выраженный тактильный отклик и долговечность подшипников.' },
      { question: 'Каков минимальный заказ при миксе моделей?', answer: 'От 50 шт. на SKU без гравировки; разные артикулы можно объединить в одну поставку.' },
      { question: 'Можно ли заказать образцы по 1 шт. для сравнения звука?', answer: 'Да, платные образцы 1 шт. доступны на все 140 моделей (цена + международная доставка за счет покупателя, без возврата).' },
      { question: 'Сколько стоят партии от 50, 200 и 500+ штук?', answer: 'От $0.74–$0.92 (FS-009), $3.18–$6.00 за слайдеры и $7.43–$21.45 за тяжелую сталь CNC 304.' },
      { question: 'Можно ли нанести логотип компании на тихие слайдеры?', answer: 'Да, от 100 шт./SKU лазером 50 Вт (+$0.15–$0.30/шт.) или эмалью (+$0.35–$0.60/шт.).' },
      { question: 'Какой вес лучше для кармана, а какой для стола?', answer: 'В карман: алюминий 6063 (35–48 г, FS-047). На стол: 60–115 г Zamak-3 или сталь (FS-125, FS-013).' },
      { question: 'Есть ли модели совсем без магнитов?', answer: 'Да, более 30 полностью механических моделей (FS-009, FS-043, FS-064, FS-085, FS-079) не содержат магнитов.' },
      { question: 'Какая упаковка идет в стандарте?', answer: 'Индивидуальный вакуум-пакет ($0.00 при MOQ 50); опционально кейс EVA (+$0.75+, MOQ 100) и коробка (MOQ 500).' },
      { question: 'Каковы сроки подготовки и производства?', answer: '5–7 рабочих дней для товара без лого (50+ шт.) и 10–15 рабочих дней с лазером 50 Вт (100+ шт.).' }
    ]
  },
  ja: {
    bcCurrent: '大人・オフィス向け卸売',
    badge1: '大人の集中・オフィス用静音EDC',
    badge2: '35dBA以下静音＆重厚メタル',
    kpis: [
      { label: 'オフィス騒音基準', val: '<35 dBA 静音' },
      { label: 'EXW単価レンジ', val: '$0.74 – $21.45' },
      { label: '無地最小ロット', val: '50' },
      { label: '磁石なしモデル', val: '30金型以上' }
    ],
    ctaPrimary: '大人向けカタログを請求 →',
    ctaSecondary: 'コスト試算ツールを開く →',
    showcasePill: '静音オフィス設計済み',
    showcaseMeta: ['PTFE静音スライド', '6063アルミ / 304ステンレス', '1個サンプル可'],
    geoTitle: '結論：大人・オフィス向けの業務用静音メタルフィジェットの選び方',
    geoAnswer: 'FidgetSupplyは既存140金型を音量別に分類し、企業の福利厚生、集中支援プログラム、大人向け小売に最適な製品を提供します。会議中も気にならない35dBA以下のPTFEスライダー＆リング（FS-125、FS-047、FS-135、FS-009）、穏やかな35〜50dBAクリックコイン（FS-013、FS-027）、響きの良い音叉スライダー（FS-150）まで無地MOQ 50個（$0.74〜）から仕入れ可能です。',
    matrixBadge: '音響・触覚キャリブレーション',
    matrixTitle: '職場・セラピー・コレクター別 デシベル選定マトリクス',
    tableHeaders: ['音響プロファイル・用途', '作動音量', '推奨既存金型', '卸売EXW単価'],
    tableRows: [
      ['静音オフィス・Web会議対応', '35 dBA未満（PTFE / R188）', 'FS-125、FS-047 アルミ、FS-135 リング、FS-009', '$0.74 – $12.90 / 個'],
      ['落ち着いたデスク用触覚モデル', '35 – 50 dBA（抑制クリック）', 'FS-013 304SSコイン、FS-027、FS-064 アルミ', '$2.76 – $11.50 / 個'],
      ['明瞭な共鳴音・機械式クリック', '55 – 68 dBA（2,800–4,200 Hz）', 'FS-150 音叉スライダー、FS-129、FS-085 ラチェット', '$10.19 – $21.45 / 個']
    ],
    picksBadge: '大人・オフィス向け人気ベスト8',
    picksTitle: '企業ウェルネス・集中ツールとして選ばれる8つの金属金型',
    faqBadge: '大人向けバルクFAQ',
    faqTitle: '静音性能・磁石不使用モデル・ロット条件に関する質問',
    serviceName: '大人・静音オフィス向け金属フィジェット業務用卸売',
    serviceDesc: '35dBA以下の静音PTFEスライダーやリング、ステンレス製EDCを既存140金型からMOQ 50個（$0.74〜）で工場直販。',
    faqs: [
      { question: 'オープンオフィスやZoom会議でも静かな35dBA未満モデルはどれですか？', answer: 'FS-125（PTFEスライダー）、FS-047（6063アルミ）、FS-135（スピナーリング）、無給油R188搭載のFS-009・FS-064は35dBA未満で周囲に響きません。' },
      { question: '人事部や専門家が大人の集中用途に無垢金属製を選ぶ理由は？', answer: 'Zamak-3合金（55〜95g）やCNC 304ステンレス（80〜160g）はプラスチック玩具にない重厚な固有受容感覚と耐久性を提供します。' },
      { question: '複数モデルを混ぜて大人向けバルク発注する場合のMOQは？', answer: '無地在庫は1SKUあたり50個から対応しており、複数機種を1回の福州輸出便に混載可能です。' },
      { question: '静音モデルとクリックモデルの1個サンプルを事前比較できますか？', answer: 'はい。全140金型で有償1個評価サンプル（商品代＋国際送料の買い手負担・返金不可）に対応し、音の比較セットも同梱可能です。' },
      { question: '50個・200個・500個以上の参考卸売価格はいくらですか？', answer: 'EXW単価はFS-009が$0.74–$0.92、主力スライダーが$3.18–$6.00、重量級CNC 304ステンレスコイン等が$7.43–$21.45です。' },
      { question: '社内ウェルネス施策向けに静音スライダーへロゴ刻印できますか？', answer: 'はい。1SKU 100個以上で50Wファイバーレーザー刻印（+$0.15–$0.30/個）または深彫り色入れ（+$0.35–$0.60/個）が可能です。' },
      { question: '携帯用とデスク据え置き用で適切な重量帯は異なりますか？', answer: 'ポケット携帯には軽量な6063アルミ製（35〜48gのFS-047）やリング、デスクでの集中用途には60〜115g以上のモデルが最適です。' },
      { question: 'ペースメーカー等に配慮した完全磁石不使用モデルはありますか？', answer: 'はい。FS-009、FS-043、FS-064、FS-085、FS-079など30種以上の純機械式モデルは磁石を一切使用していません。' },
      { question: 'オフィス大量発注時の標準包装仕様はどうなっていますか？', answer: '全数個別の防錆真空パック（$0.00込み、MOQ 50）で出荷され、EVAケース（+$0.75〜、100個〜）や化粧箱（500個〜）への変更も可能です。' },
      { question: '無地および名入れ発注の工場出荷準備期間は？', answer: '無地在庫（50個〜）は5〜7営業日、ロゴ刻印あり（100個〜）はデザイン校了後10〜15営業日で出荷準備が完了します。' }
    ]
  },
  ko: {
    bcCurrent: '성인용 & 사무실 대량 도매',
    badge1: '성인 집중력 & 무소음 오피스 EDC',
    badge2: '<35 dBA 무소음 & 중량 메탈',
    kpis: [
      { label: '사무실 소음 기준', val: '<35 dBA 무소음' },
      { label: '도매 EXW 단가', val: '$0.74 – $21.45' },
      { label: '무지 최소 수량', val: '50' },
      { label: '무자석 모델', val: '30+ 금형' }
    ],
    ctaPrimary: '성인용 도매 카탈로그 요청 →',
    ctaSecondary: '단가 계산기 열기 →',
    showcasePill: '무소음 오피스 최적화',
    showcaseMeta: ['PTFE 무소음 슬라이드', '6063 알루미늄 / 304 스틸', '1개 샘플 가능'],
    geoTitle: '핵심 답변: 성인용 및 조용한 사무실용 대량 메탈 피젯 선택 가이드',
    geoAnswer: 'FidgetSupply는 기업 복지, ADHD 집중 프로그램 및 성인용 리테일을 위해 140종 금형을 소음 수준별로 분류합니다: 회의 중에도 방해 없는 35dBA 미만 PTFE 슬라이더·반지(FS-125, FS-047, FS-135, FS-009), 은은한 35–50dBA 코인(FS-013, FS-027), 튜닝포크 슬라이더(FS-150)까지 무지 MOQ 50개($0.74~)부터 공급합니다.',
    matrixBadge: '음향 & 촉각 정밀 매트릭스',
    matrixTitle: '사무실 · 집중 테라피 · 컬렉터별 데시벨 등급표',
    tableHeaders: ['음향 프로필 & 사용 환경', '소음 출력', '추천 기성 금형', '도매 단가 (EXW)'],
    tableRows: [
      ['조용한 개방형 사무실 & 화상회의', '< 35 dBA (PTFE / R188)', 'FS-125, FS-047 알루미늄, FS-135 반지, FS-009 탑', '$0.74 – $12.90 / 개'],
      ['부드러운 데스크 촉각 피드백', '35 – 50 dBA (저소음 클릭)', 'FS-013 304SS 코인, FS-027 쿠키, FS-064 알루미늄', '$2.76 – $11.50 / 개'],
      ['청명한 튜닝포크 & 기계식 클릭', '55 – 68 dBA (2,800–4,200 Hz)', 'FS-150 튜닝포크, FS-129, FS-085 래칫 EDC', '$10.19 – $21.45 / 개']
    ],
    picksBadge: '사무실 & 집중력 베스트셀러 8종',
    picksTitle: '기업 웰니스 및 성인용 대량 발주 TOP 8 메탈 금형',
    faqBadge: '성인용 대량 도매 FAQ',
    faqTitle: '데시벨 등급, 무자석 모델 및 수량 관련 질문',
    serviceName: '성인용 & 무소음 사무실용 메탈 피젯 대량 도매 공급',
    serviceDesc: '35dBA 미만 무소음 PTFE 슬라이더·스피너 링·스테인리스 EDC 140종 기성 금형 직공급 ($0.74+, MOQ 50).',
    faqs: [
      { question: '사무실이나 줌 회의 중 조용한 35dBA 미만 모델은 무엇인가요?', answer: 'FS-125(PTFE), FS-047(6063 알루미늄), FS-135 링, 무오일 R188 스피너(FS-009·FS-064)는 35dBA 이하로 소음 방해가 없습니다.' },
      { question: 'HR 담당자와 테라피스트가 성인 집중용으로 메탈을 선호하는 이유는?', answer: 'Zamak-3 합금(55–95g)과 CNC 304 스틸(80–160g)의 묵직한 촉감과 R188 정밀 베어링이 플라스틱과 다른 안정감을 줍니다.' },
      { question: '여러 모델을 섞어 주문할 때 최소 수량은 얼마인가요?', answer: '무지 재고 기준 SKU당 50개부터 시작하며 다양한 모델을 합포장 발송할 수 있습니다.' },
      { question: '대량 구매 전 소음 비교용 1개 샘플을 주문할 수 있나요?', answer: '네, 140종 전 모델 유상 1개 샘플(단가+국제 배송비 구매자 부담, 환불 불가)을 지원합니다.' },
      { question: '50, 200, 500개 이상 대량 도매 단가는 어느 정도인가요?', answer: 'EXW 기준 포켓 스피너 $0.74–$0.92, 주력 슬라이더 $3.18–$6.00, CNC 304 스틸 코인·슬라이더 $7.43–$21.45입니다.' },
      { question: '사내 웰니스 키트용으로 무소음 슬라이더에 로고 각인이 가능한가요?', answer: '네, SKU당 100개 이상부터 50W 파이버 레이저(+$0.15–$0.30/개) 또는 컬러 에나멜(+$0.35–$0.60/개)이 가능합니다.' },
      { question: '주머니 휴대용과 책상용으로 추천되는 무게는?', answer: '휴대용은 경량 알루미늄 6063(35–48g, FS-047)과 링, 책상용은 60–115g 이상 제품이 좋습니다.' },
      { question: '의료 환경 등을 위한 무자석(자석 제로) 모델도 있나요?', answer: '네, FS-009, FS-043, FS-064, FS-085, FS-079 등 30종 이상의 순수 기계식 무자석 모델이 있습니다.' },
      { question: '대량 오피스 주문 시 기본 포장은 어떻게 되나요?', answer: '개별 산화방지 진공 파우치($0.00, MOQ 50)가 기본이며 EVA 케이스(+$0.75+, 100개)와 박스(500개) 선택이 가능합니다.' },
      { question: '제작 및 출고 준비 기간은 얼마나 소요되나요?', answer: '무지 재고(50개+)는 5–7영업일, 로고 레이저(100개+)는 시안 확정 후 10–15영업일 소요됩니다.' }
    ]
  },
  id: {
    bcCurrent: 'Grosir Dewasa & Kantor',
    badge1: 'FOKUS DEWASA & EDC KANTOR SENYAP',
    badge2: '<35 dBA Senyap & Logam Padat',
    kpis: [
      { label: 'Kebisingan Kantor', val: '<35 dBA Senyap' },
      { label: 'Rentang Harga EXW', val: '$0.74 – $21.45' },
      { label: 'MOQ Polos', val: '50' },
      { label: 'Bebas Magnet', val: '30+ Cetakan' }
    ],
    ctaPrimary: 'Minta Katalog Dewasa →',
    ctaSecondary: 'Buka Kalkulator Biaya →',
    showcasePill: 'KALIBRASI RUANG KANTOR',
    showcaseMeta: ['Gesekan PTFE Senyap', 'Alu 6063 / Baja 304', 'Sampel 1 Pcs OK'],
    geoTitle: 'Jawaban Langsung: Memilih Fidget Logam Grosir untuk Dewasa & Kantor Senyap',
    geoAnswer: 'FidgetSupply mengelompokkan 140 cetakan logam berdasarkan tingkat desibel suara untuk kantor, terapi fokus ADHD, dan ritel dewasa: slider & cincin PTFE senyap <35 dBA (FS-125, FS-047, FS-135, FS-009); koin taktil lembut 35–50 dBA (FS-013, FS-027); serta slider garpu tala (FS-150). Grosir polos mulai 50 pcs ($0.74+).',
    matrixBadge: 'KALIBRASI AKUSTIK & SENSORIK',
    matrixTitle: 'Matriks Desibel untuk Ruang Kerja, Terapi & Kolektor',
    tableHeaders: ['Profil Akustik & Lokasi', 'Tingkat Suara', 'Cetakan Rekomendasi', 'Harga Grosir (EXW)'],
    tableRows: [
      ['Kantor terbuka & rapat Zoom', '< 35 dBA (PTFE / R188)', 'FS-125 Smooth, FS-047 Alu, FS-135 Cincin, FS-009 Top', '$0.74 – $12.90 / pcs'],
      ['Klik taktil meja kerja', '35 – 50 dBA (Lembut)', 'FS-013 Koin 304SS, FS-027 Cookie, FS-064 Alu', '$2.76 – $11.50 / pcs'],
      ['Resonansi akustik & mekanis', '55 – 68 dBA (2.800–4.200 Hz)', 'FS-150 Garpu Tala, FS-129, FS-085 Ratchet', '$10.19 – $21.45 / pcs']
    ],
    picksBadge: 'TERLARIS KANTOR & FOKUS DEWASA',
    picksTitle: '8 Cetakan Logam Terbaik untuk Grosir Dewasa & Program Kantor',
    faqBadge: 'FAQ GROSIR DEWASA',
    faqTitle: 'Pertanyaan Desibel, Model Bebas Magnet & Jumlah Pesanan',
    serviceName: 'Pasokan Grosir Fidget Logam untuk Dewasa & Kantor Senyap',
    serviceDesc: 'Fidget logam senyap (<35 dBA) untuk dewasa langsung dari 140 cetakan pabrik ($0.74+, MOQ 50).',
    faqs: [
      { question: 'Model fidget logam mana yang paling senyap (<35 dBA) di kantor?', answer: 'FS-125, FS-047 aluminium 6063, cincin FS-135, dan spinner R188 tanpa oli (FS-009, FS-064) beroperasi di bawah 35 dBA.' },
      { question: 'Mengapa tim HR dan terapis memilih logam padat untuk fokus dewasa?', answer: 'Bobot Zamak-3 (55–95g) dan CNC baja 304 (80–160g) memberi umpan balik proprioseptif yang lebih mantap dibanding plastik.' },
      { question: 'Berapa MOQ untuk pemesanan grosir model campuran?', answer: 'Mulai 50 pcs per SKU polos dan dapat menggabungkan beberapa model dalam satu pengiriman ekspor.' },
      { question: 'Bisakah memesan sampel 1 pcs untuk menguji tingkat suara?', answer: 'Ya, sampel evaluasi berbayar 1 pcs tersedia di 140 cetakan (harga satuan + ongkos kurir ditanggung pembeli, non-refundable).' },
      { question: 'Berapa kisaran harga grosir di 50, 200, dan 500+ unit?', answer: '$0.74–$0.92 (FS-009), $3.18–$6.00 untuk slider aluminium/Zamak, dan $7.43–$21.45 untuk baja CNC 304.' },
      { question: 'Bisakah menambahkan logo program kantor ke slider senyap?', answer: 'Ya, di MOQ 100 pcs/SKU dengan laser serat 50W (+$0.15–$0.30/pcs) atau isi warna enamel (+$0.35–$0.60/pcs).' },
      { question: 'Bobot mana yang ideal untuk saku dibanding meja kerja?', answer: 'Saku: aluminium 6063 (35–48g, FS-047). Meja kerja: 60–115g Zamak-3 atau baja tahan karat (FS-125, FS-013).' },
      { question: 'Apakah tersedia pilihan yang benar-benar bebas magnet?', answer: 'Ya, lebih dari 30 model mekanis murni (FS-009, FS-043, FS-064, FS-085, FS-079) tidak mengandung magnet.' },
      { question: 'Kemasan apa yang disertakan secara standar?', answer: 'Kantong vakum anti-oksidasi ($0.00, MOQ 50) termasuk; kotak EVA (+$0.75+, MOQ 100) atau boks kado (MOQ 500) opsional.' },
      { question: 'Berapa lama persiapan dan waktu produksi pabrik?', answer: '5–7 hari kerja untuk stok polos (50+ pcs) dan 10–15 hari kerja untuk logo laser 50W (100+ pcs).' }
    ]
  },
  ar: {
    bcCurrent: 'جملة الكبار والمكتب',
    badge1: 'أدوات تركيز الكبار والمكتب الصامتة',
    badge2: 'صامتة <35 ديسيبل ومعادن صلبة',
    kpis: [
      { label: 'مستوى الصوت المكتبي', val: '<35 dBA صامت' },
      { label: 'نطاق سعر الجملة EXW', val: '$0.74 – $21.45' },
      { label: 'الحد الأدنى سادة', val: '50' },
      { label: 'خالية من المغناطيس', val: '30+ قالباً' }
    ],
    ctaPrimary: 'اطلب كتالوج الكبار بالجملة →',
    ctaSecondary: 'افتح حاسبة التكلفة →',
    showcasePill: 'معايرة للعمل المكتبي الهادئ',
    showcaseMeta: ['انزلاق PTFE صامت', 'ألمنيوم 6063 / ستانلس 304', 'عينة قطعة متاحة'],
    geoTitle: 'إجابة مباشرة: اختيار أدوات الفيدجت المعدنية بالجملة للكبار والمكاتب الهادئة',
    geoAnswer: 'تصنّف FidgetSupply قوالبها الـ 140 حسب مستوى الصوت لتناسب المكاتب وبرامج التركيز: موديلات PTFE وخواتم صامتة تحت 35 ديسيبل (FS-125, FS-047, FS-135, FS-009)؛ عملات لمسية هادئة بين 35–50 ديسيبل (FS-013, FS-027)؛ وسلايدرات الشوكة الرنانة (FS-150). تبدأ طلبات الجملة السادة من 50 قطعة ($0.74+).',
    matrixBadge: 'مصفوفة الصوت والملمس الحسي',
    matrixTitle: 'مصفوفة الديسيبل لبيئة العمل والعلاج والمقتنين',
    tableHeaders: ['الملف الصوتي وبيئة الاستخدام', 'مستوى الصوت', 'القوالب الموصى بها', 'سعر الجملة (EXW)'],
    tableRows: [
      ['المكاتب المفتوحة واجتماعات الفيديو', '< 35 dBA (PTFE / R188)', 'FS-125، FS-047 ألمنيوم، خاتم FS-135، FS-009', '$0.74 – $12.90 / قطعة'],
      ['نقرات مكتبية خافتة ومكتومة', '35 – 50 dBA (نقرة ناعمة)', 'عملة FS-013 304SS، FS-027، FS-064 ألمنيوم', '$2.76 – $11.50 / قطعة'],
      ['رنين واضح وميكانيكي', '55 – 68 dBA (2,800–4,200 Hz)', 'FS-150 شوكة رنانة، FS-129، FS-085 ميكانيكي', '$10.19 – $21.45 / قطعة']
    ],
    picksBadge: 'الأكثر مبيعاً للمكاتب والتركيز',
    picksTitle: 'أفضل 8 قوالب معدنية لبرامج الشركات والكبار',
    faqBadge: 'الأسئلة الشائعة لجملة الكبار',
    faqTitle: 'أسئلة الديسيبل، الموديلات الخالية من المغناطيس والكميات',
    serviceName: 'توريد أدوات الفيدجت المعدنية بالجملة للكبار والمكاتب الصامتة',
    serviceDesc: 'أدوات فيدجت معدنية صامتة (<35 dBA) للكبار مباشرة من 140 قالباً جاهزاً ($0.74+، الحد الأدنى 50 قطعة).',
    faqs: [
      { question: 'أي أدوات الفيدجت المعدنية هي الأهدأ (<35 dBA) للمكاتب؟', answer: 'تعمل موديلات FS-125 وFS-047 وخاتم FS-135 وسبينرات R188 الجافة FS-009/FS-064 بصوت أقل من 35 ديسيبل.' },
      { question: 'لماذا يفضل مسؤولو الموارد البشرية المعدن الصلب لتركيز الكبار؟', answer: 'يمنح وزن سبائك Zamak-3 (55–95 جم) والستانلس ستيل 304 (80–160 جم) استجابة حسية ومتانة تفوق البلاستيك.' },
      { question: 'ما الحد الأدنى عند دمج عدة موديلات للكبار؟', answer: '50 قطعة لكل موديل سادة مع إمكانية تجميع عدة أصناف في شحنة تصدير واحدة.' },
      { question: 'هل يمكن طلب عينات بقطعة واحدة للمقارنة الصوتية؟', answer: 'نعم، العينات المدفوعة بقطعة واحدة متوفرة لجميع الـ 140 قالباً (يدفع المشتري سعر القطعة والشحن الدولي دون استرداد).' },
      { question: 'كم تبلغ الأسعار عند 50 و200 و500+ قطعة؟', answer: 'تبدأ من $0.74–$0.92 لسبينر الجيب، و$3.18–$6.00 للسلايدرات، و$7.43–$21.45 لموديلات ستانلس 304 CNC.' },
      { question: 'هل يمكن حفر شعار الشركة على الموديلات الصامتة؟', answer: 'نعم، بدءاً من 100 قطعة/SKU بليزر 50W (+$0.15–$0.30/قطعة) أو مينا (+$0.35–$0.60/قطعة).' },
      { question: 'ما الوزن الأنسب للجيب مقارنة بالمكتب؟', answer: 'للجيب: ألمنيوم 6063 الخفيف (35–48 جم). للمكتب: 60–115 جم من الزنك أو الستانلس.' },
      { question: 'هل توجد خيارات خالية تماماً من المغناطيس؟', answer: 'نعم، أكثر من 30 موديلاً ميكانيكياً خالياً تماماً من المغناطيس مثل FS-009 وFS-043 وFS-064 وFS-085.' },
      { question: 'ما التغليف القياسي المرفق بطلبات الجملة؟', answer: 'كيس تفريغ فردي مضاد للأكسدة ($0.00) مشمول، مع خيار حافظة EVA (+$0.75+، 100 قطعة) أو علبة هدايا (500 قطعة).' },
      { question: 'كم تستغرق مدة التجهيز والتصنيع في المصنع؟', answer: '5–7 أيام عمل للمخزون السادة (50+ قطعة) و10–15 يوم عمل لطلبات حفر الليزر (100+ قطعة).' }
    ]
  }
};

export function getBulkAdultCopy(lang: SupportedLanguage): BulkAdultCopy {
  return COPY[lang] || COPY.en;
}
