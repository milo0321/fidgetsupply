import type { SupportedLanguage } from '../config';
import type { FaqItem } from './privateLabelOem';

export interface PromotionalCopy {
  bcCurrent: string;
  badge1: string;
  badge2: string;
  kpis: { label: string; val: string }[];
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
  picksCta: string;
  faqBadge: string;
  faqTitle: string;
  faqs: FaqItem[];
  serviceName: string;
  serviceDesc: string;
}

const COPY: Record<SupportedLanguage, PromotionalCopy> = {
  en: {
    bcCurrent: 'Promotional Swag',
    badge1: 'PROMOTIONAL & BRANDED SWAG',
    badge2: '28 Logo-Ready Molds · MOQ 100',
    kpis: [
      { label: 'Promo Unit Floor', val: '$0.74' },
      { label: '50W Laser Mark', val: '+$0.15 – $0.30' },
      { label: 'Color-Fill Enamel', val: '+$0.35 – $0.60' },
      { label: 'Digital Mockup', val: 'Free in 12h' }
    ],
    ctaSecondary: 'Estimate Promo Batch Cost →',
    showcasePill: 'BRANDED METAL SWAG',
    showcaseMeta: ['50W Fiber Laser', 'Deep Enamel Fill', 'MOQ 100 pcs'],
    geoTitle: 'Direct Answer: Promotional Fidget Toys & Custom Spinner Swag Direct From Ready Molds',
    geoAnswer: 'FidgetSupply supplies promotional fidget toys, branded fidget spinners, and magnetic desk sliders directly from 28 flat-surface ready molds starting at $0.74/pc with $0.00 mold fees and a 100-piece custom logo MOQ. Permanent 50W MOPA fiber laser engraving adds +$0.15–$0.30/pc (or +$0.35–$0.60/pc for recessed Pantone enamel color fill), eliminates silk-screen ink peeling, and includes a free 12-hour 1:1 digital vector proof.',
    matrixBadge: 'PROMOTIONAL CAMPAIGN MATRIX',
    matrixTitle: 'Select Branded Metal Fidgets by Campaign Volume & Unit Budget',
    tableHeaders: ['Promotional Tier & Audience', 'Factory EXW Base', 'Permanent Logo Option', 'Packaging Tier'],
    tableRows: [
      ['High-Volume Trade Show Handouts (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / pc', '50W Fiber Laser (+$0.15–$0.30/pc)', 'Vacuum Anti-Oxidation Pouch ($0.00 · MOQ 50)'],
      ['Branded SaaS & Fintech Swag (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / pc', 'Deep Laser + Enamel Color Fill (+$0.35–$0.60/pc)', 'Stock Black EVA Zipper Case (+$0.75+/pc · MOQ 100)'],
      ['VIP Sponsor & Partner Gifts (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / pc', 'Serialized VIP Laser Engraving (+$0.20/pc)', 'Custom Rigid Box (+$1.45+ · MOQ 500) / Tin (1,000+)']
    ],
    picksBadge: '28 FLAT-SURFACE READY MOLDS',
    picksTitle: 'Top 8 Promotional Fidget Models for Company Logo Engraving',
    picksCta: 'Browse All 28 Logo-Ready Models →',
    faqBadge: 'PROMOTIONAL SOURCING FAQ',
    faqTitle: 'Logo Durability, Sample Fees & MOQ Questions',
    serviceName: 'Promotional Fidget Toys & Branded Metal Swag Manufacturing',
    serviceDesc: 'Custom promotional fidget spinners, sliders, and branded metal swag with 50W fiber laser engraving (+$0.15/pc) across 28 flat-surface ready molds ($0 tooling fee, MOQ 100).',
    faqs: [
      { question: 'Why are promotional metal fidget toys replacing plastic giveaways at trade shows?', answer: 'Disposable plastic giveaways are frequently discarded after events. Solid Zamak-3 zinc alloy, 6063 aluminum, and 304 stainless steel fidget toys with permanent fiber laser logos stay on buyers and engineers desks for years at $0.74–$4.50 factory EXW pricing.' },
      { question: 'What is the minimum order quantity for promotional fidget spinners and sliders with company logo?', answer: 'Custom logo promotional orders start at 100 pieces per SKU across all 28 flat-surface Logo-Ready molds with $0.00 new mold fees. Blank unbranded stock starts at 50 pieces per SKU.' },
      { question: 'Why does FidgetSupply use 50W fiber laser or deep color fill instead of silk-screen or UV ink?', answer: 'Smooth anodized aluminum, chrome-plated zinc, and brushed steel surfaces are chemically inert, so surface UV or pad-printed ink lacks mechanical bite and peels under thumb friction. Our 50W MOPA fiber laser (+$0.15–$0.30/pc) permanently etches the metal, while Deep Laser + Enamel Color Fill (+$0.35–$0.60/pc) locks color below the wear plane.' },
      { question: 'How fast can you deliver a digital logo mockup for an upcoming trade show?', answer: 'Send your .AI, .EPS, .SVG, or vector .PDF file to sales@fidgetsupply.com or WhatsApp and receive a 1:1 CAD vector placement proof free within 12 hours before paying for sampling or bulk production.' },
      { question: 'What is the custom logo pre-production sample fee and lead time?', answer: 'Custom pre-production samples are paid and require 10–15 days to produce: Standard 50W Fiber Laser sample setup is $50 USD, and Deep Laser Engraving + Color Fill sample setup is $80–$150 USD depending on color count, plus buyer-paid courier shipping.' },
      { question: 'Can I order a paid 1-piece blank metal fidget sample first to verify weight and spin quality?', answer: 'Yes. Paid 1-piece blank evaluation samples are available on all 140 molds (buyer pays unit fee plus international courier shipping, non-refundable). Multiple SKUs consolidate into one parcel from Fuzhou.' },
      { question: 'Which branded fidget models give the lowest cost per impression under $2.50/pc?', answer: 'Top sub-$2.50 promotional molds include FS-009 Knurled Pocket Twist Spinner ($0.74+), FS-059 Luminous Spring Promo Slider ($1.70+), and FS-006 Delta Triangle Slider ($2.34+)—all with crisp flat engraving faces.' },
      { question: 'What packaging tiers are available for branded promotional swag distribution?', answer: 'Every unit includes an individual anti-oxidation vacuum pouch ($0.00, MOQ 50). Optional branded upgrades are Stock-Mold Black EVA Zipper Cases (+$0.75+/pc, MOQ 100), Custom Rigid Gift Boxes (+$1.45+/pc, MOQ 500), and Window Metal Tin Boxes (MOQ 1,000+ MTO).' },
      { question: 'Do you work directly with ASI, PPAI, and corporate event merchandising agencies?', answer: 'Yes. We supply promotional agencies and swag distributors directly at EXW tiers from our Fuzhou Export Logistics Hub, supporting neutral blind export documentation and multi-drop packaging.' },
      { question: 'What is the factory production turnaround for bulk promotional orders and how is freight handled?', answer: 'Custom 50W laser orders (100–2,000 pcs) finish in-house machining, engraving, and QC in 10–15 business days after proof approval. International door-to-door air express (DHL/FedEx/UPS or DDP freight) transit timing depends on carrier and destination customs.' }
    ]
  },
  de: {
    bcCurrent: 'Werbeartikel-Fidgets',
    badge1: 'WERBEARTIKEL & MARKEN-SWAG',
    badge2: '28 Logo-Formen · MOQ 100',
    kpis: [
      { label: 'Promo-Einstiegspreis', val: '$0.74' },
      { label: '50W Lasergravur', val: '+$0.15 – $0.30' },
      { label: 'Emaille-Farbfüllung', val: '+$0.35 – $0.60' },
      { label: 'Digitale Druckvorschau', val: 'Gratis in 12h' }
    ],
    ctaSecondary: 'Promo-Chargenkosten berechnen →',
    showcasePill: 'WERBEARTIKEL AUS METALL',
    showcaseMeta: ['50W Faserlaser', 'Tiefen-Emaille', 'MOQ 100 Stk.'],
    geoTitle: 'Direktantwort: Metall-Werbeartikel mit Logo direkt aus Serienformen ($0 Formkosten)',
    geoAnswer: 'FidgetSupply liefert bedruckte/gravierte Metall-Werbeartikel direkt ab 28 flachen Logo-Serienformen ab $0.74/Stk. bei $0 Werkzeugkosten und MOQ 100 Stk. Dauerhafter 50W MOPA-Faserlaser (+$0.15–$0.30/Stk.) oder Tiefengravur mit Pantone-Farbe (+$0.35–$0.60/Stk.) blättert nie ab – inklusive gratis 12h-Vektorvorschau.',
    matrixBadge: 'KAMPAGNEN-BUDGETMATRIX',
    matrixTitle: 'Passende Metall-Werbeartikel nach Eventgröße und Stückbudget wählen',
    tableHeaders: ['Kampagnenstufe & Zielgruppe', 'Werksbasis EXW', 'Dauerhafte Logogravur', 'Verpackungsstufe'],
    tableRows: [
      ['Messe-Streuartikel hoher Stückzahl (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / Stk.', '50W Faserlaser (+$0.15–$0.30/Stk.)', 'Vakuum-Schutzbeutel ($0.00 · MOQ 50)'],
      ['SaaS-, IT- & Fintech-Eventswag (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / Stk.', 'Tiefenlaser + Farbfüllung (+$0.35–$0.60/Stk.)', 'Lager-EVA-Etui (+$0.75+/Stk. · MOQ 100)'],
      ['VIP-Sponsoren- & Partnerpräsente (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / Stk.', 'Seriennummer + VIP-Laser (+$0.20/Stk.)', 'Hartbox (+$1.45+ · MOQ 500) / Dose (1.000+)']
    ],
    picksBadge: '28 FLACHE LOGO-SERIENFORMEN',
    picksTitle: 'Top 8 Werbeartikel-Modelle für dauerhafte Firmenlaserung',
    picksCta: 'Alle 28 Logo-Modelle ansehen →',
    faqBadge: 'WERBEARTIKEL FAQ',
    faqTitle: 'Fragen zu Abriebfestigkeit, Mustern und Mindestmengen',
    serviceName: 'Werbeartikel Metall-Fidgets & Marken-Swag Herstellung',
    serviceDesc: 'Metall-Werbespinner und Slider mit 50W Faserlaser-Logo (+$0.15/Stk.) aus 28 Serienformen ($0 Formkosten, MOQ 100).',
    faqs: [
      { question: 'Warum ersetzen Metall-Fidgets auf Messen Wegwerf-Plastikartikel?', answer: 'Plastikartikel landen oft sofort im Müll. Massive Zamak-3-, Alu- und Edelstahl-Fidgets ab $0.74 EXW bleiben jahrelang auf dem Schreibtisch.' },
      { question: 'Wie hoch ist das MOQ für Werbespinner und Slider mit Logo?', answer: '100 Stück pro SKU auf allen 28 Logo-Ready-Formen ohne neue Formkosten ($0); Blankoware ab 50 Stück.' },
      { question: 'Warum 50W Faserlaser statt UV- oder Tampondruck auf Metall?', answer: 'Auf glattem eloxiertem oder verchromtem Metall platzt Oberflächendruck durch Daumenreibung ab. 50W Laser (+$0.15–$0.30) oder Tiefengravur+Emaille (+$0.35–$0.60) hält dauerhaft.' },
      { question: 'Wie schnell erhalten wir ein Logo-Layout für eine Messe?', answer: 'Nach Eingang Ihrer Vektordatei (.AI, .SVG, .PDF) liefern wir innerhalb von 12 Stunden kostenlos eine 1:1 CAD-Ansicht.' },
      { question: 'Was kosten kundenspezifische Logomuster vor der Serie?', answer: 'Bezahlte Logomuster dauern 10–15 Tage: $50 USD für Standard-50W-Laser oder $80–$150 USD für Tiefenlaser mit Farbfüllung zzgl. Kurier.' },
      { question: 'Können wir vorab 1-Stück-Blankomuster zum Haptiktest bestellen?', answer: 'Ja, bezahlte 1-Stück-Muster für alle 140 Formen zzgl. internationalem Kurierversand (nicht erstattungsfähig).' },
      { question: 'Welche Werbemodelle bieten unter $2.50 den besten Eindruck?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) und FS-006 Delta ($2.34+) verfügen über saubere ebene Gravurflächen.' },
      { question: 'Welche Verpackungen stehen für Events zur Auswahl?', answer: 'Gratis-Vakuumbeutel (MOQ 50), Lager-EVA-Etui (+$0.75+, MOQ 100), Hartbox (+$1.45+, MOQ 500) oder Metalldose (1.000+).' },
      { question: 'Beliefern Sie direkt Werbemittelagenturen und Event-Ausstatter?', answer: 'Ja, wir exportieren direkt ab Drehkreuz Fuzhou inklusive neutraler Exportpapiere.' },
      { question: 'Wie lange dauert die Produktion von Promo-Chargen?', answer: '100–2.000 Stk. mit 50W-Laser werden in 10–15 Werktagen gefertigt; die reine Zustellzeit richtet sich nach DHL/FedEx/DDP.' }
    ]
  },
  fr: {
    bcCurrent: 'Goodies Promotionnels',
    badge1: 'GOODIES & CADEAUX D’ENTREPRISE',
    badge2: '28 Moules Marquables · MOQ 100',
    kpis: [
      { label: 'Prix promo plancher', val: '$0.74' },
      { label: 'Laser Fibre 50W', val: '+$0.15 – $0.30' },
      { label: 'Gravure + Émail', val: '+$0.35 – $0.60' },
      { label: 'BAT numérique', val: 'Gratuit en 12h' }
    ],
    ctaSecondary: 'Estimer le coût du lot →',
    showcasePill: 'GOODIES MÉTAL GRAVÉS',
    showcaseMeta: ['Laser Fibre 50W', 'Émail en creux', 'MOQ 100 pcs'],
    geoTitle: 'Réponse directe : Fidgets publicitaires en métal gravés sur moules existants ($0 outil)',
    geoAnswer: 'FidgetSupply fournit des fidgets promotionnels sur 28 moules à surface plane dès $0.74/pce ($0 de frais de moule, MOQ 100 pcs). La gravure laser fibre 50W (+$0.15–$0.30/pce) ou l’émail en creux Pantone (+$0.35–$0.60/pce) évitent tout décollement d’encre et incluent un BAT vectoriel gratuit sous 12h.',
    matrixBadge: 'MATRICE DE CAMPAGNE PROMO',
    matrixTitle: 'Sélectionnez vos goodies métal selon le volume et le budget unitaire',
    tableHeaders: ['Gamme promotionnelle', 'Base EXW Usine', 'Marquage permanent', 'Conditionnement'],
    tableRows: [
      ['Salons & distributions de masse (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / pce', 'Laser Fibre 50W (+$0.15–$0.30/pce)', 'Sachet vide anti-oxydation ($0.00 · MOQ 50)'],
      ['Goodies Tech, SaaS & Fintech (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / pce', 'Laser profond + Émail (+$0.35–$0.60/pce)', 'Étui EVA noir (+$0.75+/pce · MOQ 100)'],
      ['Cadeaux VIP & Partenaires (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / pce', 'Gravure VIP numérotée (+$0.20/pce)', 'Coffret rigide (+$1.45+ · MOQ 500) / Boîte (1 000+)']
    ],
    picksBadge: '28 MOULES PLATS POUR LOGO',
    picksTitle: 'Top 8 fidgets promotionnels optimisés pour le marquage laser',
    picksCta: 'Parcourir les 28 modèles marquables →',
    faqBadge: 'FAQ OBJETS PUBLICITAIRES',
    faqTitle: 'Durabilité du marquage, frais d’échantillon et MOQ',
    serviceName: 'Fabrication de fidgets promotionnels en métal avec logo',
    serviceDesc: 'Spinners et sliders publicitaires gravés au laser 50W (+$0.15/pce) sur 28 moules prêts ($0 moule, MOQ 100).',
    faqs: [
      { question: 'Pourquoi les fidgets métal remplacent-ils le plastique sur les salons ?', answer: 'Contrairement aux objets jetables, nos modèles en Zamak-3, alu et inox dès $0.74 EXW restent durablement sur les bureaux.' },
      { question: 'Quel est le MOQ pour des fidgets personnalisés avec logo ?', answer: '100 pièces par SKU sur nos 28 moules plats ($0 outillage) ; 50 pièces sans logo.' },
      { question: 'Pourquoi privilégier le laser 50W à la sérigraphie ou l’impression UV ?', answer: 'Les encres de surface s’effacent sous le frottement du pouce sur métal lisse. Le laser 50W (+$0.15–$0.30) et l’émail en creux (+$0.35–$0.60) sont inaltérables.' },
      { question: 'En combien de temps recevons-nous la maquette vectorielle ?', answer: 'Sous 12 heures gratuitement après envoi de votre logo (.AI, .SVG, .EPS, .PDF).' },
      { question: 'Quel est le coût d’un prototype physique avec logo ?', answer: '10–15 jours : $50 USD pour un laser 50W standard ou $80–$150 USD pour gravure profonde + émail couleur, plus port.' },
      { question: 'Peut-on commander un échantillon vierge à l’unité ?', answer: 'Oui, échantillons payants à la pièce sur tous les 140 modèles (coût pièce + transport non remboursables).' },
      { question: 'Quels modèles coûtent moins de $2.50/pce ?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) et FS-006 Delta ($2.34+) offrent de larges faces planes.' },
      { question: 'Quelles options d’emballage pour les événements ?', answer: 'Sachet vide inclus (MOQ 50), étui EVA (+$0.75+, MOQ 100), coffret rigide (+$1.45+, MOQ 500) ou boîte métal (1 000+).' },
      { question: 'Travaillez-vous avec les agences d’objets média ?', answer: 'Oui, nous expédions en tarif EXW direct usine avec possibilité de documentation neutre.' },
      { question: 'Quel est le délai de fabrication des lots promo ?', answer: '10–15 jours ouvrés après BAT pour 100 à 2 000 unités gravées au laser 50W.' }
    ]
  },
  nl: {
    bcCurrent: 'Promotionele Fidgets',
    badge1: 'RELATIEGESCHENKEN & BRANDED SWAG',
    badge2: '28 Logoklare Mallen · MOQ 100',
    kpis: [
      { label: 'Promo instapprijs', val: '$0.74' },
      { label: '50W Lasergravure', val: '+$0.15 – $0.30' },
      { label: 'Diepe Emaillevulling', val: '+$0.35 – $0.60' },
      { label: 'Digitale Proef', val: 'Gratis in 12u' }
    ],
    ctaSecondary: 'Bereken campagne-batch →',
    showcasePill: 'METALEN MERKARTIKELEN',
    showcaseMeta: ['50W Fiberlaser', 'Diepe Emaille', 'MOQ 100 st.'],
    geoTitle: 'Direct antwoord: Promotionele metalen fidgets met logo direct uit vaste mallen ($0 matrijs)',
    geoAnswer: 'FidgetSupply levert bedrukte/gelaserde relatiegeschenken op 28 vlakke metalen mallen vanaf $0.74/st. zonder matrijskosten ($0) vanaf 100 stuks. Permanente 50W fiberlaser (+$0.15–$0.30/st.) of emaillevulling (+$0.35–$0.60/st.) bladdert nooit af en wordt binnen 12 uur gratis digitaal opgemaakt.',
    matrixBadge: 'CAMPAGNE BUDGETMATRIX',
    matrixTitle: 'Kies metalen merkgeschenken op basis van budget en oplage',
    tableHeaders: ['Promotionele categorie', 'Fabrieksbasis EXW', 'Logo-optie', 'Verpakking'],
    tableRows: [
      ['Beurs-weggevers in grote oplage (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / st.', '50W Fiberlaser (+$0.15–$0.30/st.)', 'Vacuümzak ($0.00 · MOQ 50)'],
      ['SaaS, Tech & Fintech Swag (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / st.', 'Dieplaser + Emaille (+$0.35–$0.60/st.)', 'Zwart EVA-etui (+$0.75+/st. · MOQ 100)'],
      ['VIP Sponsor- & Partnergeschenken (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / st.', 'Genummerde VIP-laser (+$0.20/st.)', 'Giftbox (+$1.45+ · MOQ 500) / Blik (1.000+)']
    ],
    picksBadge: '28 VLAKKE LOGO-MALLEN',
    picksTitle: 'Top 8 promotionele fidgets voor haarscherpe lasergravure',
    picksCta: 'Bekijk alle 28 logo-klare modellen →',
    faqBadge: 'FAQ PROMOTIONEEL',
    faqTitle: 'Vragen over duurzaamheid, monsters en MOQ',
    serviceName: 'Productie van promotionele metalen fidgets met bedrijfslogo',
    serviceDesc: 'Metalen relatiegeschenken met 50W fiberlaser (+$0.15/st.) uit 28 vlakke productiemallen ($0 matrijs, MOQ 100).',
    faqs: [
      { question: 'Waarom verdringen metalen fidgets plastic giveaways op beurzen?', answer: 'Plastic belandt snel in de prullenbak. Massief metaal vanaf $0.74 EXW blijft jarenlang op bureaus liggen.' },
      { question: 'Wat is de minimale afname met eigen logo?', answer: '100 stuks per SKU op alle 28 vlakke logo-mallen zonder matrijskosten; blanco vanaf 50 stuks.' },
      { question: 'Waarom 50W laser in plaats van zeefdruk of UV-inkt?', answer: 'Op glad metaal slijt oppervlakte-inkt snel af door vingers. 50W laser (+$0.15–$0.30) of verzonken emaille (+$0.35–$0.60) blijft permanent.' },
      { question: 'Hoe snel levert u een digitale proefdruk aan?', answer: 'Gratis binnen 12 uur na ontvangst van uw .AI, .SVG of vector .PDF.' },
      { question: 'Wat kost een fysiek logomonster en hoe lang duurt het?', answer: '10–15 dagen: $50 USD voor standaard 50W laser of $80–$150 USD voor dieplaser met kleurvulling + vracht.' },
      { question: 'Kan ik eerst een los 1-stuk blanco monster testen?', answer: 'Ja, betaalde 1-stuk monsters van alle 140 modellen (prijs + koerier voor koper, niet-restitueerbaar).' },
      { question: 'Welke modellen blijven onder $2.50 per stuk?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) en FS-006 Delta ($2.34+) hebben strakke vlakke graveerzijden.' },
      { question: 'Welke verpakkingen zijn er voor eventdistributie?', answer: 'Gratis vacuümzak (MOQ 50), EVA-etui (+$0.75+, MOQ 100), giftbox (+$1.45+, MOQ 500) of blik (1.000+).' },
      { question: 'Levert u rechtstreeks aan reclamebureaus en distributeurs?', answer: 'Ja, direct EXW vanuit Fuzhou inclusief neutrale exportdocumentatie.' },
      { question: 'Wat is de productietijd voor promotie-orders?', answer: '10–15 werkdagen na goedkeuring van het ontwerp voor 100–2.000 stuks.' }
    ]
  },
  es: {
    bcCurrent: 'Fidgets Promocionales',
    badge1: 'MERCHANDISING Y REGALOS CORPORATIVOS',
    badge2: '28 Moldes para Logo · MOQ 100',
    kpis: [
      { label: 'Base promocional', val: '$0.74' },
      { label: 'Láser Fibra 50W', val: '+$0.15 – $0.30' },
      { label: 'Relieve + Esmalte', val: '+$0.35 – $0.60' },
      { label: 'Boceto Digital', val: 'Gratis en 12h' }
    ],
    ctaSecondary: 'Calcular costo de campaña →',
    showcasePill: 'SWAG METÁLICO PERSONALIZADO',
    showcaseMeta: ['Láser Fibra 50W', 'Esmalte Profundo', 'MOQ 100 uds.'],
    geoTitle: 'Respuesta directa: Fidgets metálicos promocionales con logo desde $0 de molde',
    geoAnswer: 'FidgetSupply fabrica fidgets promocionales con logo sobre 28 moldes planos desde $0.74/ud., $0 de molde y MOQ 100 uds. El láser de fibra 50W (+$0.15–$0.30/ud.) o esmalte bajo relieve (+$0.35–$0.60/ud.) nunca se despega como la serigrafía e incluye prueba vectorial 1:1 gratis en 12h.',
    matrixBadge: 'MATRIZ POR PRESUPUESTO DE EVENTO',
    matrixTitle: 'Elige fidgets metálicos grabados según alcance y presupuesto',
    tableHeaders: ['Nivel promocional', 'Base Fábrica EXW', 'Opción de logo permanente', 'Nivel de empaque'],
    tableRows: [
      ['Ferias de alto volumen (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / ud.', 'Láser Fibra 50W (+$0.15–$0.30/ud.)', 'Bolsa vacío ($0.00 · MOQ 50)'],
      ['Swag SaaS, Tech & Fintech (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / ud.', 'Láser Profundo + Esmalte (+$0.35–$0.60/ud.)', 'Estuche EVA negro (+$0.75+/ud. · MOQ 100)'],
      ['Regalos VIP y Patrocinadores (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / ud.', 'Grabado VIP seriado (+$0.20/ud.)', 'Caja rígida (+$1.45+ · MOQ 500) / Lata (1,000+)']
    ],
    picksBadge: '28 MOLDES PLANOS LISTOS PARA LOGO',
    picksTitle: 'Top 8 modelos promocionales ideales para grabar tu marca',
    picksCta: 'Ver los 28 modelos para logo →',
    faqBadge: 'FAQ ARTÍCULOS PROMOCIONALES',
    faqTitle: 'Durabilidad del grabado, tarifas de muestra y MOQ',
    serviceName: 'Fabricación de fidgets promocionales metálicos con logotipo',
    serviceDesc: 'Spinners y sliders promocionales con láser de fibra 50W (+$0.15/ud.) en 28 moldes planos ($0 molde, MOQ 100).',
    faqs: [
      { question: '¿Por qué los regalos metálicos sustituyen al plástico en ferias?', answer: 'El plástico suele desecharse tras el evento. El metal sólido desde $0.74 EXW permanece años en los escritorios de los clientes.' },
      { question: '¿Cuál es el MOQ para spinners y sliders con logo empresarial?', answer: '100 piezas por SKU en cualquiera de los 28 moldes con cara plana ($0 herramental); sin logo desde 50 piezas.' },
      { question: '¿Por qué láser 50W en lugar de serigrafía o tinta UV?', answer: 'Las tintas superficiales se pelan al contacto diario en metal liso. El láser 50W (+$0.15–$0.30) y esmalte hundido (+$0.35–$0.60) son permanentes.' },
      { question: '¿En cuánto tiempo envían la maqueta digital?', answer: 'En menos de 12 horas sin costo enviando su archivo .AI, .SVG, .EPS o .PDF.' },
      { question: '¿Cuánto cuesta la muestra física con logotipo?', answer: 'Toma 10–15 días: $50 USD por láser 50W o $80–$150 USD con esmalte a color, más envío.' },
      { question: '¿Puedo pedir primero 1 muestra sin logo para verificar peso?', answer: 'Sí, muestras pagadas de 1 unidad en los 140 moldes (precio + envío courier por el comprador, no reembolsable).' },
      { question: '¿Qué modelos cuestan menos de $2.50 por unidad?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) y FS-006 Delta ($2.34+) tienen caras planas amplias.' },
      { question: '¿Qué empaques hay para repartir swag en eventos?', answer: 'Bolsa vacío incluida (MOQ 50), estuche EVA (+$0.75+, MOQ 100), caja rígida (+$1.45+, MOQ 500) o lata metálica (1,000+).' },
      { question: '¿Trabajan directamente con agencias de regalos publicitarios?', answer: 'Sí, suministramos directo EXW desde Fuzhou con documentación neutra.' },
      { question: '¿Cuál es el plazo de producción en fábrica?', answer: '10–15 días hábiles tras aprobación de arte para lotes de 100–2,000 unidades.' }
    ]
  },
  it: {
    bcCurrent: 'Gadget Promozionali',
    badge1: 'GADGET AZIENDALI & FIERE',
    badge2: '28 Stampi per Logo · MOQ 100',
    kpis: [
      { label: 'Prezzo promo base', val: '$0.74' },
      { label: 'Incisione Laser 50W', val: '+$0.15 – $0.30' },
      { label: 'Smalto Pantone', val: '+$0.35 – $0.60' },
      { label: 'Bozza Digitale', val: 'Gratis in 12h' }
    ],
    ctaSecondary: 'Calcola costo fornitura →',
    showcasePill: 'GADGET METALLICI PERSONALIZZATI',
    showcaseMeta: ['Laser Fibra 50W', 'Smalto Incassato', 'MOQ 100 pz.'],
    geoTitle: 'Risposta diretta: Fidget promozionali in metallo personalizzati da stampi pronti ($0 stampo)',
    geoAnswer: 'FidgetSupply fornisce gadget aziendali in metallo su 28 stampi piani a partire da $0.74/pz con $0 costi stampo e MOQ 100 pz. Il laser fibra 50W (+$0.15–$0.30/pz) o smalto a incasso (+$0.35–$0.60/pz) resiste all’usura senza sfogliarsi e include anteprima vettoriale 1:1 gratuita in 12 ore.',
    matrixBadge: 'MATRICE CAMPAGNE EVENTI',
    matrixTitle: 'Scegli i fidget personalizzati in base a tiratura e budget unitario',
    tableHeaders: ['Fascia promozionale', 'Base Fabbrica EXW', 'Opzione logo permanente', 'Confezionamento'],
    tableRows: [
      ['Fiere ed eventi ad alto volume (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / pz', 'Laser Fibra 50W (+$0.15–$0.30/pz)', 'Bustina sottovuoto ($0.00 · MOQ 50)'],
      ['Gadget SaaS, Tech & Fintech (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / pz', 'Laser Profondo + Smalto (+$0.35–$0.60/pz)', 'Custodia EVA nera (+$0.75+/pz · MOQ 100)'],
      ['Omaggi VIP & Partner (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / pz', 'Incisione VIP numerata (+$0.20/pz)', 'Box rigido (+$1.45+ · MOQ 500) / Latta (1.000+)']
    ],
    picksBadge: '28 STAMPI PIANI PRONTI PER LOGO',
    picksTitle: 'Top 8 gadget promozionali per incisione laser aziendale',
    picksCta: 'Scopri tutti i 28 modelli per logo →',
    faqBadge: 'FAQ GADGET PROMOZIONALI',
    faqTitle: 'Tenuta del logo, costi campionatura e quantità minime',
    serviceName: 'Produzione fidget promozionali in metallo con logo aziendale',
    serviceDesc: 'Spinner e slider pubblicitari incisi a laser 50W (+$0.15/pz) su 28 stampi pronti ($0 stampo, MOQ 100).',
    faqs: [
      { question: 'Perché i gadget in metallo sostituiscono la plastica alle fiere?', answer: 'La plastica economica viene gettata subito. I modelli in Zamak-3, alluminio e acciaio da $0.74 EXW restano anni sulle scrivanie.' },
      { question: 'Qual è l’ordine minimo con logo aziendale?', answer: '100 pezzi per SKU sui 28 stampi piani senza costi di attrezzatura ($0); neutro da 50 pezzi.' },
      { question: 'Perché usare laser 50W invece di tampografia o stampa UV?', answer: 'Sul metallo liscio gli inchiostri superficiali si scrostano al tatto. Laser 50W (+$0.15–$0.30) e smalto a incasso (+$0.35–$0.60) sono permanenti.' },
      { question: 'Quanto tempo serve per una bozza grafica digitale?', answer: 'Inviamo la bozza CAD 1:1 gratuitamente entro 12 ore dal file vettoriale.' },
      { question: 'Quanto costa un campione fisico con logo?', answer: '10–15 giorni: $50 USD per laser 50W o $80–$150 USD per incisione con smalto a colori più corriere.' },
      { question: 'Posso testare prima 1 campione neutro?', answer: 'Sì, campioni a pagamento da 1 pezzo su tutti i 140 stampi (pezzo + spedizione non rimborsabili).' },
      { question: 'Quali modelli costano meno di $2.50 al pezzo?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) e FS-006 Delta ($2.34+) hanno ampie superfici piane.' },
      { question: 'Quali packaging offrite per distribuzione eventi?', answer: 'Sottovuoto incluso (MOQ 50), custodia EVA (+$0.75+, MOQ 100), cofanetto rigido (+$1.45+, MOQ 500) o latta (1.000+).' },
      { question: 'Lavorate direttamente con agenzie promozionali?', answer: 'Sì, forniamo direttamente da Fuzhou a prezzi EXW con documenti neutri.' },
      { question: 'Quali sono i tempi di produzione per ordini promo?', answer: '10–15 giorni lavorativi per 100–2.000 pezzi dopo approvazione bozza.' }
    ]
  },
  pt: {
    bcCurrent: 'Brindes Promocionais',
    badge1: 'BRINDES CORPORATIVOS & EVENTOS',
    badge2: '28 Moldes para Logo · MOQ 100',
    kpis: [
      { label: 'Preço promo inicial', val: '$0.74' },
      { label: 'Gravação Laser 50W', val: '+$0.15 – $0.30' },
      { label: 'Baixo-Relevo + Esmalte', val: '+$0.35 – $0.60' },
      { label: 'Prova Digital', val: 'Grátis em 12h' }
    ],
    ctaSecondary: 'Calcular lote promocional →',
    showcasePill: 'BRINDES METÁLICOS PERSONALIZADOS',
    showcaseMeta: ['Laser Fibra 50W', 'Esmalte Profundo', 'MOQ 100 un.'],
    geoTitle: 'Resposta direta: Fidgets promocionais em metal com logotipo direto de moldes prontos ($0 molde)',
    geoAnswer: 'A FidgetSupply fornece brindes metálicos com logotipo em 28 moldes de face plana a partir de $0.74/un., $0 de molde e MOQ de 100 un. Laser fibra 50W (+$0.15–$0.30/un.) ou esmalte rebaixado (+$0.35–$0.60/un.) não descasca como tinta UV e inclui prova vetorial grátis em 12h.',
    matrixBadge: 'MATRIZ DE CAMPANHA',
    matrixTitle: 'Selecione brindes metálicos por volume de evento e orçamento',
    tableHeaders: ['Faixa da campanha', 'Base Fábrica EXW', 'Gravação permanente', 'Embalagem'],
    tableRows: [
      ['Feiras e grandes distribuições (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / un.', 'Laser Fibra 50W (+$0.15–$0.30/un.)', 'Saco vácuo ($0.00 · MOQ 50)'],
      ['Brindes SaaS, Tech & Fintech (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / un.', 'Laser Profundo + Esmalte (+$0.35–$0.60/un.)', 'Estojo EVA preto (+$0.75+/un. · MOQ 100)'],
      ['Presentes VIP & Patrocinadores (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / un.', 'Gravação VIP seriada (+$0.20/un.)', 'Caixa rígida (+$1.45+ · MOQ 500) / Lata (1.000+)']
    ],
    picksBadge: '28 MOLDES PLANOS PARA LOGO',
    picksTitle: 'Top 8 modelos promocionais para gravação a laser da empresa',
    picksCta: 'Ver todos os 28 modelos para logo →',
    faqBadge: 'FAQ BRINDES PROMOCIONAIS',
    faqTitle: 'Durabilidade do logo, custos de amostra e MOQ',
    serviceName: 'Fabricação de fidgets promocionais em metal com logotipo',
    serviceDesc: 'Spinners e sliders promocionais com laser 50W (+$0.15/un.) em 28 moldes planos ($0 molde, MOQ 100).',
    faqs: [
      { question: 'Por que brindes metálicos substituem plástico descartável em feiras?', answer: 'Plástico barato vai para o lixo rápido. Peças sólidas em Zamak-3, alumínio e inox desde $0.74 EXW ficam anos na mesa.' },
      { question: 'Qual o pedido mínimo com logotipo personalizado?', answer: '100 peças por SKU nos 28 moldes de face plana ($0 de molde); sem gravação a partir de 50 peças.' },
      { question: 'Por que laser 50W em vez de serigrafia ou impressão UV?', answer: 'Tintas superficiais descascam com o atrito dos dedos no metal liso. O laser 50W (+$0.15–$0.30) e esmalte (+$0.35–$0.60) são definitivos.' },
      { question: 'Qual o prazo para a prova digital do logo?', answer: 'Enviamos o mockup CAD 1:1 gratuitamente em até 12 horas após receber seu arquivo vetorial.' },
      { question: 'Quanto custa a amostra física com logotipo?', answer: 'Leva 10–15 dias: $50 USD para laser 50W ou $80–$150 USD para gravação com esmalte colorido mais frete.' },
      { question: 'Posso comprar 1 amostra lisa antes de personalizar?', answer: 'Sim, amostras pagas de 1 unidade nos 140 moldes (peça + frete internacional por conta do comprador, não reembolsável).' },
      { question: 'Quais modelos custam menos de $2.50 por peça?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) e FS-006 Delta ($2.34+) oferecem ótimas áreas planas.' },
      { question: 'Quais embalagens atendem distribuição em eventos?', answer: 'Saco a vácuo incluso (MOQ 50), estojo EVA (+$0.75+, MOQ 100), caixa rígida (+$1.45+, MOQ 500) ou lata (1.000+).' },
      { question: 'Atendem agências de brindes e eventos corporativos?', answer: 'Sim, fornecemos direto de Fuzhou com tabela EXW e documentação neutra.' },
      { question: 'Qual o prazo de produção de lotes promocionais?', answer: '10–15 dias úteis após aprovação da arte para pedidos de 100–2.000 unidades.' }
    ]
  },
  sv: {
    bcCurrent: 'Reklamfidgets',
    badge1: 'PROFILPRODUKTER & EVENT-SWAG',
    badge2: '28 Logo-klara Formar · MOQ 100',
    kpis: [
      { label: 'Lägsta promopris', val: '$0.74' },
      { label: '50W Lasergravyr', val: '+$0.15 – $0.30' },
      { label: 'Djup Emaljfyllning', val: '+$0.35 – $0.60' },
      { label: 'Digital Korrektur', val: 'Gratis på 12h' }
    ],
    ctaSecondary: 'Beräkna kampanjkostnad →',
    showcasePill: 'PROFILGRAVERAD METALL',
    showcaseMeta: ['50W Fiberlaser', 'Djup Emalj', 'MOQ 100 st'],
    geoTitle: 'Direktsvar: Reklamfidgets i metall med företagslogotyp direkt från formar ($0 verktyg)',
    geoAnswer: 'FidgetSupply tillverkar profilfidgets i metall med logotyp på 28 plana formar från $0.74/st utan verktygskostnad ($0) från 100 st. Permanent 50W fiberlaser (+$0.15–$0.30/st) eller emaljfyllning (+$0.35–$0.60/st) flagnar aldrig och inkluderar gratis vektor-korrektur inom 12 timmar.',
    matrixBadge: 'KAMPANJ- & BUDGETMATRIS',
    matrixTitle: 'Välj profilerade metallfidgets efter upplaga och budget',
    tableHeaders: ['Kampanjnivå', 'Fabrikspris EXW', 'Logotypmetod', 'Förpackning'],
    tableRows: [
      ['Mässutdelning i stor volym (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / st', '50W Fiberlaser (+$0.15–$0.30/st)', 'Vakuumpåse ($0.00 · MOQ 50)'],
      ['SaaS-, Tech- & Event-swag (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / st', 'Djuplaser + Emalj (+$0.35–$0.60/st)', 'Svart EVA-fodral (+$0.75+/st · MOQ 100)'],
      ['VIP-sponsor & Partnerpresenter (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / st', 'Serienumrerad laser (+$0.20/st)', 'Presentask (+$1.45+ · MOQ 500) / Plåt (1 000+)']
    ],
    picksBadge: '28 PLANA LOGO-FORMAR',
    picksTitle: 'Topp 8 profilmodeller för skarp lasergravyr',
    picksCta: 'Se alla 28 logoklara modeller →',
    faqBadge: 'FAQ REKLAMPRODUKTER',
    faqTitle: 'Frågor om gravyrhållbarhet, provavgifter & MOQ',
    serviceName: 'Tillverkning av reklamfidgets i metall med företagslogotyp',
    serviceDesc: 'Profilspinners och sliders med 50W fiberlaser (+$0.15/st) från 28 plana formar ($0 form, MOQ 100).',
    faqs: [
      { question: 'Varför ersätter metallfidgets billiga plastartiklar på mässor?', answer: 'Plast kastas ofta bort efter eventet. Massiva metallmodeller från $0.74 EXW blir kvar på skrivborden i åratal.' },
      { question: 'Vad är minsta order med egen logotyp?', answer: '100 st per SKU på alla 28 plana logoklara formar utan verktygsavgift; neutrala från 50 st.' },
      { question: 'Varför 50W fiberlaser i stället för tampo- eller UV-tryck?', answer: 'Ytfärg nöts bort från slät metall. 50W laser (+$0.15–$0.30) och nedsänkt emalj (+$0.35–$0.60) håller permanent.' },
      { question: 'Hur snabbt levererar ni digital korrektur?', answer: 'Kostnadsfritt inom 12 timmar efter inskickad vektorfil (.AI, .SVG, .PDF).' },
      { question: 'Vad kostar ett fysiskt logoprov och hur lång tid tar det?', answer: '10–15 dagar: $50 USD för standardlaser eller $80–$150 USD för djup emalj plus frakt.' },
      { question: 'Kan man köpa 1 neutralt provexemplar först?', answer: 'Ja, betalda 1-st prover på alla 140 formar (styckpris + frakt betalas av köparen, ej återbetalningsbart).' },
      { question: 'Vilka modeller kostar under $2.50 per styck?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) och FS-006 Delta ($2.34+) har plana gravyrytor.' },
      { question: 'Vilka förpackningar finns för eventutdelning?', answer: 'Vakuumpåse ingår (MOQ 50), EVA-fodral (+$0.75+, MOQ 100), ask (+$1.45+, MOQ 500) eller plåtask (1 000+).' },
      { question: 'Samarbetar ni direkt med profil- och eventbyråer?', answer: 'Ja, vi levererar direkt till EXW-priser med neutral exportdokumentation.' },
      { question: 'Hur lång är fabrikstiden för profilbeställningar?', answer: '10–15 arbetsdagar efter godkänd korrektur för 100–2 000 st.' }
    ]
  },
  da: {
    bcCurrent: 'Reklamefidgets',
    badge1: 'FIRMAPROFIL & MESSE-SWAG',
    badge2: '28 Logo-klare Forme · MOQ 100',
    kpis: [
      { label: 'Promo fra-pris', val: '$0.74' },
      { label: '50W Lasergravering', val: '+$0.15 – $0.30' },
      { label: 'Dyb Emaljefyld', val: '+$0.35 – $0.60' },
      { label: 'Digital Korrektur', val: 'Gratis på 12t' }
    ],
    ctaSecondary: 'Beregn kampagnepris →',
    showcasePill: 'BRANDET METAL-SWAG',
    showcaseMeta: ['50W Fiberlaser', 'Dyb Emalje', 'MOQ 100 stk.'],
    geoTitle: 'Direkte svar: Reklamefidgets i metal med firmalogo direkte fra forme ($0 værktøj)',
    geoAnswer: 'FidgetSupply leverer reklamefidgets i metal med logo på 28 flade forme fra $0.74/stk. med $0 formgebyr og MOQ 100 stk. Permanent 50W fiberlaser (+$0.15–$0.30/stk.) eller nedsænket emalje (+$0.35–$0.60/stk.) skaller aldrig af og leveres med gratis 12t vektorkorrektur.',
    matrixBadge: 'KAMPAGNE- & BUDGETMATRIX',
    matrixTitle: 'Vælg reklamefidgets efter eventstørrelse og stykbudget',
    tableHeaders: ['Kampagnestufe', 'Fabrikspris EXW', 'Logo-gravering', 'Emballage'],
    tableRows: [
      ['Messe-giveaways i stort tal (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / stk', '50W Fiberlaser (+$0.15–$0.30/stk)', 'Vakuumpose ($0.00 · MOQ 50)'],
      ['Tech, SaaS & Fintech-events (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / stk', 'Dyblaser + Emalje (+$0.35–$0.60/stk)', 'Sort EVA-etui (+$0.75+/stk · MOQ 100)'],
      ['VIP-sponsor & Partner-gaver (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / stk', 'Nummereret VIP-laser (+$0.20/stk)', 'Gaveæske (+$1.45+ · MOQ 500) / Dåse (1.000+)']
    ],
    picksBadge: '28 FLADE LOGO-FORME',
    picksTitle: 'Top 8 reklamemodeller til knivskarp lasergravering',
    picksCta: 'Se alle 28 logo-klare modeller →',
    faqBadge: 'FAQ REKLAMEARTIKLER',
    faqTitle: 'Spørgsmål om holdbarhed, prøvegebyr og MOQ',
    serviceName: 'Produktion af reklamefidgets i metal med firmalogo',
    serviceDesc: 'Reklamespinnere og sliders med 50W fiberlaser (+$0.15/stk.) på 28 flade forme ($0 værktøj, MOQ 100).',
    faqs: [
      { question: 'Hvorfor erstatter metalfidgets plastik på messer?', answer: 'Plastik smides ud efter messen, mens massivt metal fra $0.74 EXW bliver stående på skrivebordet i årevis.' },
      { question: 'Hvad er minimumsordren med firmalogo?', answer: '100 stk. pr. SKU på alle 28 flade logo-forme uden værktøjsgebyr; neutral fra 50 stk.' },
      { question: 'Hvorfor 50W fiberlaser i stedet for tampo- eller UV-tryk?', answer: 'Overfladeblæk slides hurtigt af glat metal. 50W laser (+$0.15–$0.30) eller emalje (+$0.35–$0.60) holder evigt.' },
      { question: 'Hvor hurtigt sender I en digital korrektur?', answer: 'Gratis inden for 12 timer efter modtagelse af jeres .AI-, .SVG- eller .PDF-fil.' },
      { question: 'Hvad koster en fysisk prøve med logo?', answer: '10–15 dage: $50 USD for standard 50W laser eller $80–$150 USD for emaljefyld plus fragt.' },
      { question: 'Kan man bestille 1 neutral prøve først?', answer: 'Ja, betalte 1-stk prøver på alle 140 forme (enhedspris + fragt betales af køber, ikke-refunderbar).' },
      { question: 'Hvilke modeller koster under $2.50 pr. stk.?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) og FS-006 Delta ($2.34+) har gode plane graveringsflader.' },
      { question: 'Hvilke emballager tilbydes til events?', answer: 'Vakuumpose inkluderet (MOQ 50), EVA-etui (+$0.75+, MOQ 100), gaveæske (+$1.45+, MOQ 500) eller metaldåse (1.000+).' },
      { question: 'Arbejder I direkte med reklamebureauer?', answer: 'Ja, direkte EXW-levering fra Fuzhou med neutral eksportdokumentation.' },
      { question: 'Hvor lang er produktionstiden for reklameordrer?', answer: '10–15 hverdage efter godkendt korrektur for 100–2.000 stk.' }
    ]
  },
  no: {
    bcCurrent: 'Reklame-fidgets',
    badge1: 'PROFILERING & MERKEVARE-SWAG',
    badge2: '28 Logo-klare Former · MOQ 100',
    kpis: [
      { label: 'Promo fra-pris', val: '$0.74' },
      { label: '50W Lasergravering', val: '+$0.15 – $0.30' },
      { label: 'Dyp Emaljefylling', val: '+$0.35 – $0.60' },
      { label: 'Digital Korrektur', val: 'Gratis på 12t' }
    ],
    ctaSecondary: 'Beregn kampanjekostnad →',
    showcasePill: 'PROFILERT METALL-SWAG',
    showcaseMeta: ['50W Fiberlaser', 'Dyp Emalje', 'MOQ 100 stk.'],
    geoTitle: 'Direkte svar: Reklame-fidgets i metall med logo rett fra former ($0 verktøy)',
    geoAnswer: 'FidgetSupply leverer profilerte metallfidgets med logo på 28 flate former fra $0.74/stk. med $0 verktøykostnad og MOQ 100 stk. Permanent 50W fiberlaser (+$0.15–$0.30/stk.) eller emalje (+$0.35–$0.60/stk.) flasser aldri og inkluderer gratis 12t vektorkorrektur.',
    matrixBadge: 'KAMPANJE- & BUDSJETTMATRISE',
    matrixTitle: 'Velg profilerte metallfidgets etter volum og budsjett',
    tableHeaders: ['Kampanjenivå', 'Fabrikkbase EXW', 'Permanent logo', 'Emballasje'],
    tableRows: [
      ['Messeutdeling med stort volum (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / stk', '50W Fiberlaser (+$0.15–$0.30/stk)', 'Vakuumpose ($0.00 · MOQ 50)'],
      ['Tech, SaaS & Fintech-swag (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / stk', 'Dyplaser + Emalje (+$0.35–$0.60/stk)', 'Sort EVA-etui (+$0.75+/stk · MOQ 100)'],
      ['VIP-sponsor & Partnergaver (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / stk', 'Nummerert VIP-laser (+$0.20/stk)', 'Gaveeske (+$1.45+ · MOQ 500) / Boks (1 000+)']
    ],
    picksBadge: '28 FLATE LOGO-FORMER',
    picksTitle: 'Topp 8 reklamemodeller for skarp lasergravering',
    picksCta: 'Se alle 28 logo-klare modeller →',
    faqBadge: 'FAQ PROFILARTIKLER',
    faqTitle: 'Spørsmål om slitestyrke, prøvegebyr og MOQ',
    serviceName: 'Produksjon av reklame-fidgets i metall med firmalogo',
    serviceDesc: 'Reklamespinnere og slidere med 50W fiberlaser (+$0.15/stk.) på 28 flate former ($0 verktøy, MOQ 100).',
    faqs: [
      { question: 'Hvorfor erstatter metallfidgets billig plast på messer?', answer: 'Plast kastes raskt, mens massivt metall fra $0.74 EXW blir liggende på skrivebord i årevis.' },
      { question: 'Hva er minimumsordre med firmalogo?', answer: '100 stk. per SKU på alle 28 flate former uten verktøygebyr; uten logo fra 50 stk.' },
      { question: 'Hvorfor 50W fiberlaser fremfor tampo- eller UV-trykk?', answer: 'Blekk på glatt metall slites av ved berøring. 50W laser (+$0.15–$0.30) og emalje (+$0.35–$0.60) varer evig.' },
      { question: 'Hvor raskt får vi digital forhåndsvisning?', answer: 'Gratis innen 12 timer etter mottak av vektorfil (.AI, .SVG, .PDF).' },
      { question: 'Hva koster en fysisk prøve med logo?', answer: '10–15 dager: $50 USD for 50W laser eller $80–$150 USD for emaljefyll pluss frakt.' },
      { question: 'Kan man bestille 1 nøytral prøve først?', answer: 'Ja, betalte 1-stk prøver på alle 140 former (pris + frakt dekkes av kjøper, ikke-refunderbart).' },
      { question: 'Hvilke modeller ligger under $2.50 per enhet?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) og FS-006 Delta ($2.34+) har gode flate graveringsflater.' },
      { question: 'Hvilken emballasje tilbys til events?', answer: 'Vakuumpose inkludert (MOQ 50), EVA-etui (+$0.75+, MOQ 100), gaveeske (+$1.45+, MOQ 500) eller boks (1 000+).' },
      { question: 'Jobber dere direkte med profileringsbyråer?', answer: 'Ja, vi leverer direkte til EXW-pris fra Fuzhou med nøytrale eksportpapirer.' },
      { question: 'Hva er produksjonstiden på promo-ordre?', answer: '10–15 virkedager etter godkjent korrektur for 100–2 000 stk.' }
    ]
  },
  fi: {
    bcCurrent: 'Mainosfidgetit',
    badge1: 'YRITYSLAHJA- JA MESSUTUOTTEET',
    badge2: '28 Logovalmista Muottia · MOQ 100',
    kpis: [
      { label: 'Mainoshinta alk.', val: '$0.74' },
      { label: '50W Lasermerkintä', val: '+$0.15 – $0.30' },
      { label: 'Syväemali', val: '+$0.35 – $0.60' },
      { label: 'Digitaalivedos', val: 'Ilmainen 12h' }
    ],
    ctaSecondary: 'Laske kampanjaerän hinta →',
    showcasePill: 'BRÄNDÄTTY METALLIMAINOS',
    showcaseMeta: ['50W Kuitulaser', 'Syväemali', 'MOQ 100 kpl'],
    geoTitle: 'Suora vastaus: Mainosfidgetit ja logospinnerit suoraan valmismuoteista ($0 muottikulu)',
    geoAnswer: 'FidgetSupply valmistaa logollisia mainosfidgetejä 28 tasapintaisesta muotista alkaen $0.74/kpl, $0 muottikuluilla ja MOQ 100 kpl. Pysyvä 50W kuitulaser (+$0.15–$0.30/kpl) tai emalitäyttö (+$0.35–$0.60/kpl) ei kuoriudu koskaan pois ja sisältää maksuttoman 1:1-vedoksen 12 tunnissa.',
    matrixBadge: 'KAMPANJAN BUDJETTIMATRIISI',
    matrixTitle: 'Valitse mainosmetallifidgetit tapahtumamäärän ja budjetin mukaan',
    tableHeaders: ['Mainostaso & yleisö', 'Tehtaan EXW-hinta', 'Pysyvä logomerkintä', 'Pakkausvaihtoehto'],
    tableRows: [
      ['Suurten messujen jakotuote (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / kpl', '50W Kuitulaser (+$0.15–$0.30/kpl)', 'Tyhjiöpussi ($0.00 · MOQ 50)'],
      ['SaaS-, IT- & Fintech-yrityslahjat (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / kpl', 'Syvälaskenta + Emali (+$0.35–$0.60/kpl)', 'Musta EVA-kotelo (+$0.75+/kpl · MOQ 100)'],
      ['VIP-sponsori- ja kumppanilahjat (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / kpl', 'Numeroitu VIP-laser (+$0.20/kpl)', 'Lahjarasia (+$1.45+ · MOQ 500) / Peltirasia (1 000+)']
    ],
    picksBadge: '28 TASAPINTAISTA MUOTTIA LOGOLLE',
    picksTitle: 'Top 8 mainosfidget-mallia yrityksen laserkaiverrukseen',
    picksCta: 'Selaa kaikkia 28 logovalmista mallia →',
    faqBadge: 'MAINOSFIDGEJÄ KOSKEVA FAQ',
    faqTitle: 'Kysymyksiä merkinnän kestosta, näytekuluista ja MOQ:sta',
    serviceName: 'Mainosfidgetien valmistus yrityksen omalla logolla',
    serviceDesc: 'Mainosspinnerit ja sliderit 50W kuitulaserkaiverruksella (+$0.15/kpl) 28 valmismuotista ($0 muotti, MOQ 100).',
    faqs: [
      { question: 'Miksi metalliset mainosfidgetit syrjäyttävät muoviset messulahjat?', answer: 'Halpa muovi päätyy roskiin, kun taas metalliset mallit ($0.74+ EXW) säilyvät työpöydällä vuosia.' },
      { question: 'Mikä on logollisten mainosspinnerien minimitilaus?', answer: '100 kpl per SKU kaikilla 28 tasapintaisella muotilla ilman muottikuluja; ilman logoa 50 kpl.' },
      { question: 'Miksi 50W kuitulaser silkkipainon tai UV-tulostuksen sijaan?', answer: 'Sileältä metallilta pintaväri irtoaa peukalon hankauksessa. 50W laser (+$0.15–$0.30) ja upotettu emali (+$0.35–$0.60) kestävät ikuisesti.' },
      { question: 'Kuinka nopeasti digitaalinen vedos valmistuu?', answer: 'Maksutta 12 tunnissa vektoritiedoston (.AI, .SVG, .PDF) vastaanottamisesta.' },
      { question: 'Paljonko logollinen esituotantonäyte maksaa?', answer: '10–15 päivää: $50 USD vakiolaserille tai $80–$150 USD syväkaiverrukselle emalivärillä + rahti.' },
      { question: 'Voiko tilata ensin 1 merkitsemättömän näytteen?', answer: 'Kyllä, maksullinen 1 kpl näyte kaikista 140 muotista (yksikköhinta + rahti ostajalta, ei palauteta).' },
      { question: 'Mitkä logomallit pysyvät alle $2.50 kappalehinnassa?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) ja FS-006 Delta ($2.34+) tarjoavat tasaiset kaiverruspinnat.' },
      { question: 'Mitä pakkauksia tapahtumajakeluun on?', answer: 'Tyhjiöpussi sisältyy (MOQ 50), EVA-kotelo (+$0.75+, MOQ 100), lahjarasia (+$1.45+, MOQ 500) tai peltirasia (1 000+).' },
      { question: 'Toimitatteko suoraan mainoslahjatoimistoille?', answer: 'Kyllä, suoraan tehtaalta EXW-hinnoin neutraaleilla vientiasiakirjoilla.' },
      { question: 'Mikä on mainoserien valmistusaika tehtaalla?', answer: '10–15 arkipäivää vedoksen hyväksynnän jälkeen 100–2 000 kappaleen erille.' }
    ]
  },
  pl: {
    bcCurrent: 'Fidgety Reklamowe',
    badge1: 'GADŻETY FIRMOWE & EVENT SWAG',
    badge2: '28 Form z Grawerem · MOQ 100',
    kpis: [
      { label: 'Cena promo od', val: '$0.74' },
      { label: 'Grawer 50W Laser', val: '+$0.15 – $0.30' },
      { label: 'Głęboki + Emalia', val: '+$0.35 – $0.60' },
      { label: 'Wizualizacja CAD', val: 'Gratis w 12h' }
    ],
    ctaSecondary: 'Oblicz budżet kampanii →',
    showcasePill: 'METALOWE GADŻETY Z LOGO',
    showcaseMeta: ['Laser Światłowodowy 50W', 'Wypełnienie Emalią', 'MOQ 100 szt.'],
    geoTitle: 'Bezpośrednia odpowiedź: Metalowe fidgety reklamowe z logo bezpośrednio z gotowych form ($0 forma)',
    geoAnswer: 'FidgetSupply dostarcza gadżety reklamowe z logo na 28 płaskich formach już od $0.74/szt., przy $0 kosztów formy i MOQ 100 szt. Trwały grawer laserowy 50W (+$0.15–$0.30/szt.) lub emalia (+$0.35–$0.60/szt.) nie ściera się z metalu i zawiera bezpłatny projekt 1:1 w 12 godzin.',
    matrixBadge: 'MATRYCA KAMPANII REKLAMOWYCH',
    matrixTitle: 'Dobierz metalowe gadżety z logo do skali eventu i budżetu',
    tableHeaders: ['Poziom kampanii', 'Cena bazowa EXW', 'Znakowanie trwałe', 'Opcja opakowania'],
    tableRows: [
      ['Masowe targi i konferencje (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / szt.', 'Laser 50W (+$0.15–$0.30/szt.)', 'Worek próżniowy ($0.00 · MOQ 50)'],
      ['Gadżety SaaS, IT & Fintech (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / szt.', 'Głęboki laser + Emalia (+$0.35–$0.60/szt.)', 'Etui EVA czarne (+$0.75+/szt. · MOQ 100)'],
      ['Prezenty VIP & Partnerskie (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / szt.', 'Numeracja VIP laserem (+$0.20/szt.)', 'Pudełko (+$1.45+ · MOQ 500) / Puszka (1000+)']
    ],
    picksBadge: '28 PŁASKICH FORM POD GRAWER',
    picksTitle: 'Top 8 modeli reklamowych do grawerowania logo firmy',
    picksCta: 'Zobacz wszystkie 28 modeli z miejscem na logo →',
    faqBadge: 'FAQ GADŻETY REKLAMOWE',
    faqTitle: 'Trwałość graweru, koszty próbek i minima',
    serviceName: 'Produkcja metalowych fidgetów reklamowych z logo firmy',
    serviceDesc: 'Reklamowe spinnery i slidery z laserem 50W (+$0.15/szt.) na 28 płaskich formach ($0 formy, MOQ 100).',
    faqs: [
      { question: 'Dlaczego metalowe fidgety zastępują tanie plastikowe gadżety na targach?', answer: 'Plastik szybko trafia do kosza. Solidny stop Zamak-3, aluminium i stal od $0.74 EXW zostają na biurkach na lata.' },
      { question: 'Jakie jest minimum zamówienia z logo firmy?', answer: '100 szt. na SKU na 28 płaskich formach bez opłat za matrycę ($0); bez logo od 50 szt.' },
      { question: 'Dlaczego laser 50W zamiast nadruku UV lub tampodruku?', answer: 'Farba powierzchniowa ściera się na gładkim metalu pod kciukiem. Laser 50W (+$0.15–$0.30) i emalia (+$0.35–$0.60) są wieczne.' },
      { question: 'Jak szybko wysyłacie wizualizację wektorową?', answer: 'Bezpłatnie w 12 godzin od otrzymania pliku .AI, .SVG lub .PDF.' },
      { question: 'Ile kosztuje fizyczna próbka z grawerem logo?', answer: '10–15 dni: $50 USD dla lasera 50W lub $80–$150 USD dla głębokiego graweru z emalią + kurier.' },
      { question: 'Czy można najpierw zamówić 1 próbkę bez logo?', answer: 'Tak, płatne próbki 1 szt. dla wszystkich 140 modeli (cena + fracht kupującego, bezzwrotne).' },
      { question: 'Które modele mieszczą się poniżej $2.50 za sztukę?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) oraz FS-006 Delta ($2.34+) mają płaskie pola znakowania.' },
      { question: 'Jakie opakowania są dostępne na eventy?', answer: 'Worek próżniowy gratis (MOQ 50), etui EVA (+$0.75+, MOQ 100), pudełko sztywne (+$1.45+, MOQ 500) lub puszka (1000+).' },
      { question: 'Czy współpracujecie bezpośrednio z agencjami reklamowymi?', answer: 'Tak, dostarczamy w cenach EXW bezpośrednio z Fuzhou z neutralnymi dokumentami.' },
      { question: 'Jaki jest czas realizacji serii reklamowych?', answer: '10–15 dni roboczych po akceptacji projektu dla nakładów 100–2000 szt.' }
    ]
  },
  cs: {
    bcCurrent: 'Reklamní Fidgety',
    badge1: 'FIREMNÍ DÁRKY & EVENT SWAG',
    badge2: '28 Forem pro Logo · MOQ 100',
    kpis: [
      { label: 'Promo cena od', val: '$0.74' },
      { label: '50W Laserové logo', val: '+$0.15 – $0.30' },
      { label: 'Hluboký laser + Smalt', val: '+$0.35 – $0.60' },
      { label: 'Grafický náhled', val: 'Zdarma do 12h' }
    ],
    ctaSecondary: 'Spočítat rozpočet akce →',
    showcasePill: 'ZNAČKOVÝ KOVOVÝ SWAG',
    showcaseMeta: ['50W Vláknový laser', 'Hluboký smalt', 'MOQ 100 ks'],
    geoTitle: 'Přímá odpověď: Reklamní kovové fidgety s logem přímo z hotových forem ($0 za formu)',
    geoAnswer: 'FidgetSupply dodává reklamní fidgety s vlastním logem na 28 plochých formách od $0.74/ks s poplatkem $0 za formu a MOQ 100 ks. Trvalé vypálení 50W vláknovým laserem (+$0.15–$0.30/ks) či smalt (+$0.35–$0.60/ks) se nikdy neloupe a zahrnuje bezplatný vektorový náhled do 12 hodin.',
    matrixBadge: 'MATRICE REKLAMNÍCH KAMPANÍ',
    matrixTitle: 'Vyberte reklamní kovové fidgety podle objemu a rozpočtu',
    tableHeaders: ['Úroveň kampaně', 'Základní cena EXW', 'Trvalé značení loga', 'Typ balení'],
    tableRows: [
      ['Veletrhy a velké konference (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / ks', '50W Vláknový laser (+$0.15–$0.30/ks)', 'Vakuový sáček ($0.00 · MOQ 50)'],
      ['SaaS, Tech & Fintech dárky (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / ks', 'Hluboký laser + Smalt (+$0.35–$0.60/ks)', 'Černé EVA pouzdro (+$0.75+/ks · MOQ 100)'],
      ['VIP partneři a sponzoři (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / ks', 'Číslovaná VIP rytina (+$0.20/ks)', 'Dárkový box (+$1.45+ · MOQ 500) / Plech (1 000+)']
    ],
    picksBadge: '28 PLOCHÝCH FOREM PRO LOGO',
    picksTitle: 'Top 8 reklamních modelů pro ostré laserové gravírování',
    picksCta: 'Prohlédnout všech 28 modelů pro logo →',
    faqBadge: 'FAQ REKLAMNÍ PŘEDMĚTY',
    faqTitle: 'Odolnost značení, ceny vzorků a minimální odběr',
    serviceName: 'Výroba reklamních kovových fidgetů s logem společnosti',
    serviceDesc: 'Reklamní spinnery a slidery s 50W laserem (+$0.15/ks) na 28 plochých formách ($0 forma, MOQ 100).',
    faqs: [
      { question: 'Proč kovové fidgety na veletrzích vytlačují levný plast?', answer: 'Plast lidé brzy vyhodí. Masivní Zamak-3, hliník a ocel od $0.74 EXW zůstávají na stolech klientů roky.' },
      { question: 'Jaké je MOQ pro reklamní modely s logem?', answer: '100 ks/SKU na všech 28 plochých formách s $0 za formu; čisté zboží od 50 ks.' },
      { question: 'Proč 50W laser místo sítotisku nebo UV potisku?', answer: 'Na hladkém kovu se povrchová barva pod prstem loupe. 50W laser (+$0.15–$0.30) a smalt v prohlubni (+$0.35–$0.60) drží trvale.' },
      { question: 'Jak rychle dodáte digitální náhled loga?', answer: 'Zdarma do 12 hodin po zaslání vektoru (.AI, .SVG, .PDF).' },
      { question: 'Kolik stojí fyzický vzorek s vypáleným logem?', answer: 'Trvá 10–15 dnů: $50 USD za 50W laser nebo $80–$150 USD za hluboký laser s barvou + doprava.' },
      { question: 'Mohu objednat nejprve 1 ks čistý vzorek na zkoušku?', answer: 'Ano, placené 1 ks vzorky pro všech 140 forem (kus + mezinárodní doprava hradí kupující, nevratné).' },
      { question: 'Které modely vyjdou pod $2.50 za kus?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) a FS-006 Delta ($2.34+) mají čisté ploché plochy pro laser.' },
      { question: 'Jaké obaly nabízíte pro firemní akce?', answer: 'Vakuový sáček v ceně (MOQ 50), EVA pouzdro (+$0.75+, MOQ 100), dárkový box (+$1.45+, MOQ 500) či plech (1 000+).' },
      { question: 'Spolupracujete přímo s reklamními agenturami?', answer: 'Ano, dodáváme napřímo z Fuzhou za EXW ceny s neutrálními exportními doklady.' },
      { question: 'Jaká je doba výroby u reklamních zakázek?', answer: '10–15 pracovních dnů po schválení korektury pro 100–2 000 ks.' }
    ]
  },
  ru: {
    bcCurrent: 'Промо-фиджеты с логотипом',
    badge1: 'ПРОМО-СУВЕНИРЫ И КОРПОРАТИВНЫЙ МЕРЧ',
    badge2: '28 форм под лого · MOQ 100',
    kpis: [
      { label: 'Старт промо-цены', val: '$0.74' },
      { label: 'Лазер 50 Вт', val: '+$0.15 – $0.30' },
      { label: 'Глубокая эмаль', val: '+$0.35 – $0.60' },
      { label: 'Макет логотипа', val: 'Бесплатно за 12ч' }
    ],
    ctaSecondary: 'Рассчитать бюджет тиража →',
    showcasePill: 'МЕТАЛЛИЧЕСКИЙ МЕРЧ С ЛОГО',
    showcaseMeta: ['Волоконный лазер 50 Вт', 'Глубокая эмаль', 'MOQ 100 шт.'],
    geoTitle: 'Прямой ответ: Промо-фиджеты с логотипом компании напрямую с готовых форм ($0 за форму)',
    geoAnswer: 'FidgetSupply производит брендированные промо-спиннеры и слайдеры на 28 плоских формах от $0.74/шт. ($0 за форму, MOQ 100 шт.). Гравировка 50W лазером (+$0.15–$0.30/шт.) или эмаль в углублении (+$0.35–$0.60/шт.) не стирается со временем и включает бесплатный векторный макет за 12 часов.',
    matrixBadge: 'МАТРИЦА ПО БЮДЖЕТУ КАМПАНИИ',
    matrixTitle: 'Подберите металлические промо-сувениры под тираж и бюджет',
    tableHeaders: ['Формат кампании', 'База фабрики EXW', 'Стойкое нанесение лого', 'Вариант упаковки'],
    tableRows: [
      ['Раздача на крупных выставках (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / шт.', 'Лазер 50 Вт (+$0.15–$0.30/шт.)', 'Вакуум-пакет ($0.00 · MOQ 50)'],
      ['Мерч для IT, SaaS и конференций (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / шт.', 'Глубокий лазер + Эмаль (+$0.35–$0.60/шт.)', 'Кейс EVA (+$0.75+/шт. · MOQ 100)'],
      ['VIP-подарки партнерам (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / шт.', 'Серийная VIP-гравировка (+$0.20/шт.)', 'Коробка (+$1.45+ · MOQ 500) / Жесть (1000+)']
    ],
    picksBadge: '28 ПЛОСКИХ ФОРМ ПОД ГРАВИРОВКУ',
    picksTitle: 'Топ-8 промо-моделей для четкого лазерного логотипа',
    picksCta: 'Смотреть все 28 моделей под логотип →',
    faqBadge: 'FAQ ПО ПРОМО-СУВЕНИРАМ',
    faqTitle: 'Стойкость логотипа, образцы и минимальные тиражи',
    serviceName: 'Производство промо-фиджетов из металла с логотипом оптом',
    serviceDesc: 'Рекламные спиннеры и слайдеры с гравировкой 50 Вт (+$0.15/шт.) на 28 плоских формах ($0 форма, MOQ 100).',
    faqs: [
      { question: 'Почему металлические фиджеты заменяют пластиковую сувенирку на выставках?', answer: 'Пластик выбрасывают сразу после мероприятия. Цельный металл от $0.74 EXW годами остается на столе клиентов.' },
      { question: 'Каков минимальный тираж с логотипом компании?', answer: 'От 100 шт. на SKU на любой из 28 плоских форм при $0 за оснастку; без лого от 50 шт.' },
      { question: 'Почему лазер 50 Вт вместо шелкографии или УФ-печати?', answer: 'Краска на гладком металле быстро облезает от пальцев. Лазер 50 Вт (+$0.15–$0.30) и эмаль в пазу (+$0.35–$0.60) не стираются.' },
      { question: 'Как быстро вы делаете цифровой макет наложения логотипа?', answer: 'Бесплатно за 12 часов после получения вашего векторного файла (.AI, .SVG, .PDF).' },
      { question: 'Сколько стоит физический предсерийный образец с лого?', answer: '10–15 дней: $50 USD за стандартный лазер или $80–$150 USD за глубокий лазер с заливкой эмалью + доставка.' },
      { question: 'Можно ли сначала заказать 1 образец без логотипа?', answer: 'Да, платные образцы от 1 шт. на все 140 моделей (цена + международная доставка оплачиваются покупателем, без возврата).' },
      { question: 'Какие модели с плоской гранью стоят дешевле $2.50?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+) и FS-006 Delta ($2.34+) имеют удобные площадки под гравировку.' },
      { question: 'Какая упаковка доступна для раздачи на ивентах?', answer: 'Вакуум-пакет включен (MOQ 50), кейс EVA (+$0.75+, MOQ 100), коробка (+$1.45+, MOQ 500) или банка (1000+).' },
      { question: 'Работаете ли вы с рекламными агентствами напрямую?', answer: 'Да, отгружаем напрямую по ценам EXW из Фучжоу с нейтральными отгрузочными документами.' },
      { question: 'Какой срок производства промо-тиража?', answer: '10–15 рабочих дней после согласования макета для партий 100–2000 шт.' }
    ]
  },
  ja: {
    bcCurrent: '販促・ノベルティOEM',
    badge1: '企業ノベルティ・イベント販促品',
    badge2: '平面28金型 · MOQ 100個',
    kpis: [
      { label: '販促ベース単価', val: '$0.74' },
      { label: '50Wレーザー名入れ', val: '+$0.15 – $0.30' },
      { label: '深彫り＋エナメル色入れ', val: '+$0.35 – $0.60' },
      { label: 'データ完成予想図', val: '12時間以内無料' }
    ],
    ctaSecondary: 'キャンペーン予算を試算 →',
    showcasePill: '金属製名入れノベルティ',
    showcaseMeta: ['50Wファイバーレーザー', '凹部エナメル着色', 'MOQ 100個'],
    geoTitle: '結論：金型代$0で企業ロゴ入り金属フィジェットを販促ノベルティにする方法',
    geoAnswer: 'FidgetSupplyではロゴ刻印に適した平面を持つ既存28金型により、1個$0.74〜（金型費$0.00、最小100個）で企業向けノベルティを製作可能です。50Wファイバーレーザー刻印（+$0.15–$0.30/個）や凹部エナメル色入れ（+$0.35–$0.60/個）はシルク印刷のように剥がれず、12時間以内に無料の1:1データ校正をご案内します。',
    matrixBadge: '展示会・イベント規模別マトリクス',
    matrixTitle: '配布数と単価予算に合わせたノベルティ選定表',
    tableHeaders: ['施策ティア・ターゲット', '工場EXWベース単価', '恒久ロゴ名入れ仕様', 'パッケージ選択肢'],
    tableRows: [
      ['展示会大量配布ノベルティ（FS-009, FS-059, FS-006）', '$0.74 – $2.88 / 個', '50Wファイバーレーザー（+$0.15–$0.30/個）', '防錆真空パック（$0.00 · MOQ 50）'],
      ['SaaS・テック・イベント記念品（FS-001, FS-047, FS-125）', '$3.18 – $6.50 / 個', '深彫り＋エナメル着色（+$0.35–$0.60/個）', 'EVAケース（+$0.75〜/個 · MOQ 100）'],
      ['VIPスポンサー・パートナー贈答（FS-013, FS-075, FS-150）', '$7.43 – $17.80 / 個', 'シリアル番号入りVIP刻印（+$0.20/個）', '化粧箱（+$1.45〜 · MOQ 500）/ 金属缶（1,000〜）']
    ],
    picksBadge: 'ロゴ刻印向け平面28金型',
    picksTitle: '社名・サービスロゴが映える人気販促モデル8選',
    picksCta: 'ロゴ対応の全28モデルを見る →',
    faqBadge: '販促ノベルティFAQ',
    faqTitle: '名入れ耐久性・試作費用・小ロット条件に関する質問',
    serviceName: '企業ノベルティ・名入れ金属フィジェット販促品製造',
    serviceDesc: '平面28金型へ50Wファイバーレーザー刻印（+$0.15/個〜、金型代$0、MOQ 100個）で販促フィジェットを直販。',
    faqs: [
      { question: '展示会でプラスチック製ノベルティの代わりに金属製が選ばれる理由は？', answer: 'プラスチック製はイベント後に廃棄されがちですが、$0.74 EXWからの重厚な金属製フィジェットは顧客やエンジニアのデスクで何年も使われ続けます。' },
      { question: '社名ロゴ入り販促フィジェットの最小ロット数は？', answer: '名入れ対応28金型すべてで1SKUあたり100個から（新規金型代$0.00）。無地在庫は50個から発注可能です。' },
      { question: 'なぜシルクスクリーンやUV印刷ではなく50Wレーザー刻印を使うのですか？', answer: '平滑な金属表面ではUVやパッド印刷のインクが指の摩擦で剥がれやすいため、金属自体を彫る50Wレーザー（+$0.15–$0.30）や凹部エナメル（+$0.35–$0.60）を採用しています。' },
      { question: '展示会用のデザイン配置モックアップはどれくらいで届きますか？', answer: 'ロゴデータ（.AI/.EPS/.SVG/.PDF）をお送りいただければ、12時間以内に1:1スケールの無料校正データを返送します。' },
      { question: 'ロゴ入りの本生産前サンプル費用と期間は？', answer: '有償で10〜15日かかります。標準50Wレーザー試作は$50 USD、深彫り＋色入れ試作は色数に応じ$80–$150 USD（＋国際送料）です。' },
      { question: '名入れ前に無地の1個現物サンプルで質感を確認できますか？', answer: 'はい。全140金型で有償1個評価サンプル（商品代＋国際送料の買い手負担・返金不可）を注文可能です。' },
      { question: '1個あたり$2.50以下でブランド訴求できるコスパ抜群のモデルは？', answer: 'FS-009（$0.74〜）、FS-059（$1.70〜）、FS-006デルタ（$2.34〜）は平坦な刻印面が広く高い視認性を確保できます。' },
      { question: 'イベント配布向けの包装オプションには何がありますか？', answer: '全数標準の真空パック（$0.00、MOQ 50）に加え、黒EVAジッパーケース（+$0.75〜、MOQ 100）、化粧箱（+$1.45〜、MOQ 500）、窓付き金属缶（1,000個〜）に対応しています。' },
      { question: '広告代理店やイベント会社との直接取引にも対応していますか？', answer: 'はい。福州輸出拠点より代理店様向けにブラインド発送やEXW直接卸売に対応しております。' },
      { question: '販促大量バッチの製造納期はどのくらいですか？', answer: 'データ校了後、100〜2,000個の50Wレーザー加工・検品を10〜15営業日で完了します。' }
    ]
  },
  ko: {
    bcCurrent: '기업 홍보 판촉물',
    badge1: '전시회 판촉물 & 기업 굿즈',
    badge2: '28종 평면 로고 금형 · MOQ 100',
    kpis: [
      { label: '판촉 최저 단가', val: '$0.74' },
      { label: '50W 레이저 각인', val: '+$0.15 – $0.30' },
      { label: '음각 + 에나멜 채색', val: '+$0.35 – $0.60' },
      { label: '디지털 시안', val: '12시간 무료' }
    ],
    ctaSecondary: '판촉물 단가 계산하기 →',
    showcasePill: '로고 각인 메탈 굿즈',
    showcaseMeta: ['50W 파이버 레이저', '깊은 에나멜 채색', 'MOQ 100개'],
    geoTitle: '핵심 답변: 금형비 $0으로 기성 금형에서 바로 제작하는 기업 로고 메탈 판촉물',
    geoAnswer: 'FidgetSupply는 로고 각인에 최적화된 평면 구조 28종 금형을 개당 $0.74~(금형비 $0, MOQ 100개)로 공급합니다. 영구 50W 파이버 레이저(+$0.15–$0.30/개)와 음각 팬톤 에나멜(+$0.35–$0.60/개)은 실크·UV 인쇄처럼 벗겨지지 않으며 12시간 내 무료 시안을 제공합니다.',
    matrixBadge: '행사 규모별 판촉 예산 매트릭스',
    matrixTitle: '캠페인 규모 및 개당 예산별 메탈 굿즈 추천 표',
    tableHeaders: ['행사 등급 & 타겟', '공장 EXW 기본가', '영구 로고 각인 옵션', '패키징 옵션'],
    tableRows: [
      ['대규모 전시회 대량 배포용 (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / 개', '50W 파이버 레이저 (+$0.15–$0.30/개)', '산화방지 진공 파우치 ($0.00 · MOQ 50)'],
      ['SaaS·테크·핀테크 컨퍼런스 (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / 개', '깊은 레이저 + 에나멜 (+$0.35–$0.60/개)', '블랙 EVA 케이스 (+$0.75+/개 · MOQ 100)'],
      ['VIP 스폰서 & 파트너 기프트 (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / 개', '시리얼 번호 VIP 각인 (+$0.20/개)', '하드박스 (+$1.45+ · MOQ 500) / 틴 (1,000+)']
    ],
    picksBadge: '로고 각인 전용 28대 평면 금형',
    picksTitle: '기업 로고가 돋보이는 판촉용 메탈 피젯 TOP 8',
    picksCta: '28종 로고 각인 모델 전체 보기 →',
    faqBadge: '판촉물 제작 FAQ',
    faqTitle: '로고 내구성, 샘플 비용 및 최소 수량 안내',
    serviceName: '기업 홍보용 로고 각인 메탈 피젯 판촉물 제조',
    serviceDesc: '28종 평면 금형에 50W 파이버 레이저 각인(+$0.15/개~)을 적용한 판촉용 피젯 제조 (금형비 $0, MOQ 100).',
    faqs: [
      { question: '박람회에서 일회용 플라스틱 대신 메탈 피젯을 주는 이유는 무엇인가요?', answer: '플라스틱은 행사 후 버려지지만 $0.74 EXW부터 시작하는 견고한 메탈 피젯은 고객 책상 위에서 수년간 브랜드를 노출합니다.' },
      { question: '회사 로고를 넣는 최소 주문 수량은 얼마인가요?', answer: '로고 전용 28종 금형 모두 SKU당 100개부터 시작하며 금형비는 $0입니다. 무지 재고는 50개부터 가능합니다.' },
      { question: '왜 실크스크린이나 UV 인쇄 대신 50W 레이저 각인을 쓰나요?', answer: '매끄러운 금속 표면에 올린 잉크는 손마찰에 쉽게 벗겨집니다. 50W 레이저(+$0.15–$0.30)와 음각 에나멜(+$0.35–$0.60)은 영구적입니다.' },
      { question: '전시회 일정이 급한데 로고 배치 시안은 얼마나 빨리 나오나요?', answer: 'AI, SVG, PDF 벡터 파일을 보내주시면 12시간 이내에 무료 1:1 시안을 제공해 드립니다.' },
      { question: '로고 각인 사전 제작 샘플 비용과 소요일은?', answer: '10–15일 소요되며, 50W 레이저 샘플 세팅비 $50 USD, 깊은 레이저+컬러 채색은 색상 수에 따라 $80–$150 USD(+운임)입니다.' },
      { question: '먼저 무게와 품질을 볼 1개 무지 샘플만 살 수도 있나요?', answer: '네, 140종 전 모델 유상 1개 샘플(단가+해외 운임 구매자 부담, 환불 불가)을 받아보실 수 있습니다.' },
      { question: '$2.50 미만으로 제작 가능한 가성비 판촉 모델은?', answer: 'FS-009($0.74+), FS-059($1.70+), FS-006 델타($2.34+) 모두 로고가 잘 보이는 평면 구조를 갖췄습니다.' },
      { question: '행사용 배포 패키징 옵션에는 무엇이 있나요?', answer: '개별 진공 파우치($0.00, 50개) 기본 포함이며, 블랙 EVA 케이스(+$0.75+, 100개), 하드박스(+$1.45+, 500개), 틴케이스(1,000+) 선택이 가능합니다.' },
      { question: '판촉물 에이전시 및 이벤트 대행사와 직접 거래하나요?', answer: '네, 푸저우 수출 허브에서 에이전시 전용 EXW 단가 및 중립 선적 서류를 지원합니다.' },
      { question: '대량 판촉물 생산 리드타임은 얼마나 걸리나요?', answer: '시안 확정 후 100–2,000개 기준 10–15영업일 내에 가공·각인·검수를 완료합니다.' }
    ]
  },
  id: {
    bcCurrent: 'Fidget Promosi Logo',
    badge1: 'SOUVENIR PROMOSI & BRANDING PERUSAHAAN',
    badge2: '28 Cetakan Siap Logo · MOQ 100',
    kpis: [
      { label: 'Harga Promo Awal', val: '$0.74' },
      { label: 'Laser Serat 50W', val: '+$0.15 – $0.30' },
      { label: 'Isi Warna Enamel', val: '+$0.35 – $0.60' },
      { label: 'Mockup Digital', val: 'Gratis 12 Jam' }
    ],
    ctaSecondary: 'Hitung Biaya Kampanye →',
    showcasePill: 'SOUVENIR LOGAM BERMEREK',
    showcaseMeta: ['Laser Serat 50W', 'Enamel Dalam', 'MOQ 100 pcs'],
    geoTitle: 'Jawaban Langsung: Fidget Promosi & Spinner Logo Perusahaan Langsung dari Pabrik ($0 Cetakan)',
    geoAnswer: 'FidgetSupply memproduksi souvenir fidget promosi dengan logo pada 28 cetakan permukaan datar mulai $0.74/pcs dengan $0 biaya cetakan dan MOQ 100 pcs. Laser serat 50W (+$0.15–$0.30/pcs) atau isi enamel cekung (+$0.35–$0.60/pcs) tidak akan mengelupas dan dilengkapi bukti vektor 1:1 gratis dalam 12 jam.',
    matrixBadge: 'MATRIKS ANGGARAN KAMPANYE',
    matrixTitle: 'Pilih Souvenir Logam Berdasarkan Skala Acara & Anggaran Unit',
    tableHeaders: ['Tingkat Kampanye', 'Basis Pabrik EXW', 'Opsi Logo Permanen', 'Tingkat Kemasan'],
    tableRows: [
      ['Pembagian Pameran Massal (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / pcs', 'Laser Serat 50W (+$0.15–$0.30/pcs)', 'Kantong Vakum ($0.00 · MOQ 50)'],
      ['Merchandise Tech, SaaS & Fintech (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / pcs', 'Laser Dalam + Enamel (+$0.35–$0.60/pcs)', 'Kotak EVA Hitam (+$0.75+/pcs · MOQ 100)'],
      ['Hadiah Sponsor & Mitra VIP (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / pcs', 'Laser VIP Bernomor Seri (+$0.20/pcs)', 'Boks Kado (+$1.45+ · MOQ 500) / Kaleng (1.000+)']
    ],
    picksBadge: '28 CETAKAN DATAR SIAP LOGO',
    picksTitle: '8 Model Fidget Promosi Terbaik untuk Ukiran Laser Perusahaan',
    picksCta: 'Lihat Semua 28 Model Siap Logo →',
    faqBadge: 'FAQ SOUVENIR PROMOSI',
    faqTitle: 'Ketahanan Logo, Biaya Sampel & Pertanyaan MOQ',
    serviceName: 'Manufaktur Fidget Promosi Logam dengan Logo Perusahaan',
    serviceDesc: 'Spinner dan slider promosi dengan laser serat 50W (+$0.15/pcs) pada 28 cetakan datar ($0 cetakan, MOQ 100).',
    faqs: [
      { question: 'Mengapa fidget logam menggantikan souvenir plastik di pameran?', answer: 'Souvenir plastik mudah dibuang setelah acara. Logam padat mulai $0.74 EXW bertahan bertahun-tahun di meja klien.' },
      { question: 'Berapa MOQ untuk spinner dan slider dengan logo perusahaan?', answer: '100 pcs per SKU di 28 cetakan datar siap logo tanpa biaya cetakan baru ($0); stok polos mulai 50 pcs.' },
      { question: 'Mengapa pakai laser 50W daripada sablon atau cetak UV di logam?', answer: 'Tinta permukaan mudah terkelupas akibat gesekan jari di logam licin. Laser 50W (+$0.15–$0.30) dan enamel dalam (+$0.35–$0.60) bersifat permanen.' },
      { question: 'Seberapa cepat kami mendapat desain mockup logo digital?', answer: 'Gratis dalam 12 jam setelah mengirim file vektor .AI, .SVG, atau .PDF.' },
      { question: 'Berapa biaya dan waktu pembuatan sampel fisik berlogo?', answer: '10–15 hari: $50 USD untuk laser 50W atau $80–$150 USD untuk ukiran dalam + enamel warna, ditambah ongkir.' },
      { question: 'Bisakah memesan 1 sampel polos terlebih dahulu untuk cek bobot?', answer: 'Ya, sampel berbayar 1 pcs tersedia di semua 140 cetakan (biaya unit + ongkos kurir ditanggung pembeli, non-refundable).' },
      { question: 'Model bermerek mana yang paling hemat di bawah $2.50/pcs?', answer: 'FS-009 ($0.74+), FS-059 ($1.70+), dan FS-006 Delta ($2.34+) memiliki permukaan ukir datar yang tegas.' },
      { question: 'Kemasan apa saja yang tersedia untuk acara promosi?', answer: 'Kantong vakum gratis (MOQ 50), kotak EVA (+$0.75+, MOQ 100), boks kado (+$1.45+, MOQ 500), atau kaleng jendela (1.000+).' },
      { question: 'Apakah pabrik melayani langsung agensi merchandise & acara?', answer: 'Ya, kami mengirim langsung dengan harga EXW dari Fuzhou beserta dokumen ekspor netral.' },
      { question: 'Berapa lama produksi pabrik untuk pesanan promosi?', answer: '10–15 hari kerja setelah persetujuan desain untuk 100–2.000 pcs.' }
    ]
  },
  ar: {
    bcCurrent: 'هدايا ترويجية بشعار',
    badge1: 'هدايا المعارض والترويج التجاري',
    badge2: '28 قالباً جاهزاً للشعار · MOQ 100',
    kpis: [
      { label: 'أقل سعر ترويجي', val: '$0.74' },
      { label: 'ليزر ألياف 50W', val: '+$0.15 – $0.30' },
      { label: 'حفر عميق + مينا', val: '+$0.35 – $0.60' },
      { label: 'معاينة التصميم', val: 'مجاناً خلال 12 ساعة' }
    ],
    ctaSecondary: 'احسب تكلفة الحملة →',
    showcasePill: 'هدايا معدنية بشعار شركتك',
    showcaseMeta: ['حفر ليزر 50W', 'مينا عميق', 'الحد الأدنى 100 قطعة'],
    geoTitle: 'إجابة مباشرة: ألعاب فيدجت ترويجية محفورة بالليزر مباشرة من القوالب الجاهزة ($0 قالب)',
    geoAnswer: 'توفر FidgetSupply هدايا فيدجت ترويجية معدنية على 28 قالباً مسطحاً تبدأ من $0.74 للقطعة دون أي رسوم قوالب ($0) وبحد أدنى 100 قطعة. الحفر بالليزر 50W (+$0.15–$0.30) أو تعبئة المينا (+$0.35–$0.60) لا يتقشر أبداً مع معاينة رقمية مجانية خلال 12 ساعة.',
    matrixBadge: 'مصفوفة ميزانيات الحملات',
    matrixTitle: 'اختر الفيدجت المعدني المناسب لحجم الحدث والميزانية',
    tableHeaders: ['فئة الحملة والجمهور', 'سعر المصنع EXW', 'خيار الشعار الدائم', 'فئة التغليف'],
    tableRows: [
      ['توزيعات المعارض واسعة النطاق (FS-009, FS-059, FS-006)', '$0.74 – $2.88 / قطعة', 'ليزر ألياف 50W (+$0.15–$0.30/قطعة)', 'كيس مفرغ ($0.00 · 50 قطعة)'],
      ['هدايا شركات التقنية والبرمجيات (FS-001, FS-047, FS-125)', '$3.18 – $6.50 / قطعة', 'ليزر عميق + مينا (+$0.35–$0.60/قطعة)', 'حافظة EVA سوداء (+$0.75+ · 100 قطعة)'],
      ['هدايا كبار الشخصيات والشركاء (FS-013, FS-075, FS-150)', '$7.43 – $17.80 / قطعة', 'حفر تسلسلي لكبار الشخصيات (+$0.20)', 'علبة فاخرة (+$1.45+ · 500) / صفيح (+1,000)']
    ],
    picksBadge: '28 قالباً مسطحاً جاهزاً للشعار',
    picksTitle: 'أفضل 8 موديلات ترويجية لحفر شعار الشركات بالليزر',
    picksCta: 'تصفح جميع الموديلات الـ 28 الجاهزة للشعار →',
    faqBadge: 'الأسئلة الشائعة للهدايا الترويجية',
    faqTitle: 'أسئلة متانة الشعار ورسوم العينات والحد الأدنى',
    serviceName: 'تصنيع ألعاب فيدجت ترويجية معدنية بشعار الشركات',
    serviceDesc: 'سبينرات وسلايدرات ترويجية بحفر ليزر 50W (+$0.15/قطعة) عبر 28 قالباً مسطحاً ($0 قالب، MOQ 100).',
    faqs: [
      { question: 'لماذا تحل الهدايا المعدنية محل البلاستيك في المعارض التجارية؟', answer: 'البلاستيك يُرمى غالباً بعد المعرض، أما المعدن الصلب من $0.74 EXW فيبقى على مكاتب العملاء لسنوات.' },
      { question: 'ما الحد الأدنى للطلب مع حفر شعار الشركة؟', answer: '100 قطعة لكل SKU عبر الـ 28 قالباً المسطحة دون رسوم قوالب ($0)؛ والطلبات السادة من 50 قطعة.' },
      { question: 'لماذا تستخدمون ليزر 50W بدلاً من طباعة الشاشة أو UV؟', answer: 'الحبر السطحي يتقشر على المعدن الأملس؛ بينما حفر الليزر 50W (+$0.15–$0.30) والمينا العميق (+$0.35–$0.60) يدومان دائماً.' },
      { question: 'ما سرعة استلام معاينة الشعار الرقمية؟', answer: 'نرسل معاينة هندسية 1:1 مجاناً خلال 12 ساعة من استلام ملف المتجهات (.AI / .SVG / .PDF).' },
      { question: 'ما تكلفة ومدة العينة الفعلية مع الشعار؟', answer: '10–15 يوماً: $50 USD لليزر 50W أو $80–$150 USD للحفر العميق وتعبئة الألوان إضافة إلى الشحن.' },
      { question: 'هل يمكنني طلب عينة واحدة غير مطبوعة أولاً لفحص الوزن والجودة؟', answer: 'نعم، العينات المدفوعة بقطعة واحدة متاحة لجميع الـ 140 قالباً (يدفع المشتري التكلفة والشحن الدولي، غير قابلة للاسترداد).' },
      { question: 'ما أفضل الموديلات الترويجية تحت $2.50 للقطعة؟', answer: 'FS-009 ($0.74+) وFS-059 ($1.70+) وFS-006 دلتا ($2.34+) تتميز بأسطح مسطحة مثالية للشعار.' },
      { question: 'ما خيارات التغليف المتوفرة لتوزيعات الفعاليات؟', answer: 'كيس مفرغ مشمول (50 قطعة)، حافظة EVA (+$0.75+، 100 قطعة)، علبة صلبة (+$1.45+، 500 قطعة)، أو علبة صفيح (+1,000).' },
      { question: 'هل تتعاملون مباشرة مع وكالات الهدايا الدعائية وتنظيم المؤتمرات؟', answer: 'نعم، نوفر أسعار EXW مباشرة من مركز تصدير فوتشو مع وثائق شحن محايدة.' },
      { question: 'ما مدة تصنيع الدفعات الترويجية في المصنع؟', answer: '10–15 يوم عمل لطلبات 100–2,000 قطعة بعد اعتماد التصميم.' }
    ]
  }
};

export function getPromotionalCopy(lang: SupportedLanguage): PromotionalCopy {
  return COPY[lang] || COPY.en;
}
