import type { SupportedLanguage } from '../config';
import type { FaqItem } from './privateLabelOem';

export interface CalculatorRuntimeCopy {
  bracket50: string;
  bracket200: string;
  bracket500: string;
  grossWord: string;
  pcWord: string;
  pcsWord: string;
  moqNoticePrefix: string;
  requiresMoq: string;
  tierLabels: { promo: string; slider: string; cnc: string; acoustic: string };
  brandLabels: { blank: string; laser: string; enamel: string };
  brandSamples: { blank: string; laser: string; enamel: string };
  brandDays: { blank: string; laser: string; enamel: string };
  pkgLabels: { vacuum: string; eva: string; rigid: string; tin: string };
}

export interface CalculatorCopy {
  bcParent: string;
  bcCurrent: string;
  badge1: string;
  badge2: string;
  kpis: { label: string; val: string }[];
  showcasePill: string;
  showcaseMeta: [string, string, string];
  geoTitle: string;
  geoAnswer: string;
  wsBadge: string;
  wsTitle: string;
  labels: {
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
  };
  tierOptions: { promo: string; slider: string; cnc: string; acoustic: string };
  brandOptions: { blank: string; laser: string; enamel: string };
  pkgOptions: { vacuum: string; eva: string; rigid: string; tin: string };
  summary: {
    badge: string;
    moldPill: string;
    unitCostLabel: string;
    batchTotalLabel: string;
    tierBreakLabel: string;
    addonLabel: string;
    marginLabel: string;
    sampleRefLabel: string;
    leadTimeLabel: string;
    disclaimer: string;
    formSubtext: string;
  };
  runtime: CalculatorRuntimeCopy;
  faqBadge: string;
  faqTitle: string;
  faqs: FaqItem[];
  appName: string;
  appDesc: string;
}

const COPY: Record<SupportedLanguage, CalculatorCopy> = {
  en: {
    bcParent: 'Wholesale Matrix',
    bcCurrent: 'Cost Calculator',
    badge1: 'INTERACTIVE OEM ESTIMATOR',
    badge2: '140 Molds · Real 3-Tier Packaging',
    kpis: [
      { label: 'Tooling Capex', val: '$0.00 Mold Fee' },
      { label: 'Laser Markup', val: '+$0.15 / +$0.35+' },
      { label: 'Packaging Tiers', val: '50 / 100 / 500+' },
      { label: 'Lead Time', val: '5–15 Bus. Days' }
    ],
    showcasePill: 'LIVE BATCH PRICING ENGINE',
    showcaseMeta: ['EXW Fuzhou Tiers', 'Gross Margin Check', 'MOQ Validator'],
    geoTitle: 'Direct Answer: Estimating Wholesale Unit Cost, Logo Branding & Packaging MOQ',
    geoAnswer: 'FidgetSupply’s interactive calculator combines factory EXW volume tiers (50–199, 200–499, and 500+ pcs with $0.00 mold fees), permanent metal logo options (50W fiber laser at +$0.15–$0.30/pc or recessed Pantone enamel fill at +$0.35–$0.60/pc, MOQ 100), and real 3-tier packaging (included vacuum pouch MOQ 50, stock EVA zipper case +$0.75+ MOQ 100, rigid gift box +$1.45+ MOQ 500, or tin box 1,000+ MTO) to output batch EXW cost and target retail gross margin.',
    wsBadge: 'BUILD YOUR BATCH ESTIMATE',
    wsTitle: 'Configure Product Grade, Volume, Laser Branding & Packaging',
    labels: {
      step1: '1. Select Ready-Mold Hardware Grade',
      step2: '2. Order Quantity (Units per SKU)',
      step3: '3. Permanent Metal Branding Mode (No UV / Silk-Screen)',
      step4: '4. Factory 3-Tier Packaging Option',
      step5: '5. Target Retail Selling Price (MSRP USD / pc)'
    },
    tierOptions: {
      promo: 'Entry Promo Zinc Spinner / Slider (FS-009 / FS-006 — $0.74–$0.92 base)',
      slider: 'Core Signature Magnetic Slider (FS-001 / FS-047 — $3.18–$3.92 base)',
      cnc: 'CNC 304 Stainless Coin / Slider (FS-013 / FS-075 — $7.43–$9.15 base)',
      acoustic: 'Acoustic Tuning Fork / Multi-Layer (FS-150 / FS-148 — $14.50–$17.80 base)'
    },
    brandOptions: {
      blank: 'Blank Unbranded Stock (+$0.00/pc · MOQ 50)',
      laser: '50W MOPA Fiber Laser Engraving (+$0.20/pc avg · MOQ 100 · $50 Sample)',
      enamel: 'Deep Laser + Pantone Enamel Color Fill (+$0.45/pc avg · MOQ 100–200 · $80–$150 Sample)'
    },
    pkgOptions: {
      vacuum: 'Individual Anti-Oxidation Vacuum Pouch ($0.00 included · MOQ 50)',
      eva: 'Stock-Mold Black EVA Zipper Case (+$0.75/pc · MOQ 100)',
      rigid: 'Custom Rigid Gift Presentation Box (+$1.45/pc · MOQ 500)',
      tin: 'Windowed Matte Metal Tin Box MTO (+$1.15/pc · MOQ 1,000+)'
    },
    summary: {
      badge: 'EXW FUZHOU ESTIMATE',
      moldPill: '$0.00 Tooling Fee',
      unitCostLabel: 'Estimated Factory Unit Cost (EXW)',
      batchTotalLabel: 'Estimated Total Batch (EXW)',
      tierBreakLabel: 'Hardware Tier Breakdown',
      addonLabel: 'Logo + Packaging Add-On',
      marginLabel: 'Est. Gross Profit / Margin vs. MSRP',
      sampleRefLabel: 'Paid Sample Fee Reference',
      leadTimeLabel: 'In-House Factory Lead Time',
      disclaimer: '* Paid 1-pc blank evaluation samples & international courier freight (DHL/FedEx/UPS/DDP) are buyer-paid & non-refundable. Carrier transit speed depends on courier & destination customs.',
      formSubtext: 'Locks your exact scenario above into a formal Fuzhou EXW & freight quote.'
    },
    runtime: {
      bracket50: '50–199 bracket',
      bracket200: '200–499 bracket',
      bracket500: '500+ bracket',
      grossWord: 'gross',
      pcWord: 'pc',
      pcsWord: 'pcs',
      moqNoticePrefix: '⚠ MOQ Notice: ',
      requiresMoq: 'requires MOQ',
      tierLabels: { promo: 'Entry Promo Zinc', slider: 'Core Magnetic Slider', cnc: 'CNC 304SS Coin/Slider', acoustic: 'Acoustic / Multi-Layer' },
      brandLabels: { blank: 'Blank Stock', laser: '50W Laser', enamel: 'Deep Laser + Color' },
      brandSamples: {
        blank: '1-Pc Unit Cost + Buyer Courier (Non-Refundable)',
        laser: '$50 Laser Setup + Buyer Courier',
        enamel: '$80–$150 Color-Fill Setup + Courier'
      },
      brandDays: {
        blank: '5–7 Business Days (Excl. Courier)',
        laser: '10–15 Business Days (Excl. Courier)',
        enamel: '10–15 Business Days (Excl. Courier)'
      },
      pkgLabels: { vacuum: 'Vacuum Pouch', eva: 'Stock EVA Case', rigid: 'Rigid Gift Box', tin: 'Window Tin MTO' }
    },
    faqBadge: 'CALCULATOR & QUOTE FAQ',
    faqTitle: 'Pricing Tiers, MOQ Thresholds & Freight Questions',
    appName: 'FidgetSupply Wholesale & Custom Logo Cost Calculator',
    appDesc: 'Interactive factory EXW cost, permanent 50W fiber laser branding, packaging MOQ, and retail gross margin estimator for 140 ready-mold metal fidgets.',
    faqs: [
      { question: 'Are there any hidden mold or laser setup fees omitted from this wholesale calculator?', answer: 'No. Across all 140 active ready molds (FS-001 through FS-150), new mold/tooling fees are $0.00 USD and bulk 50W fiber laser setup fees are $0.00 at MOQ 100+. Only physical pre-production custom logo sampling incurs an explicit charge ($50 for 50W laser, or $80–$150 for deep laser color fill).' },
      { question: 'How does order quantity affect unit price in the FidgetSupply tiered matrix?', answer: 'Every SKU uses transparent three-tier EXW volume brackets: 50–199 pieces (Tier 1), 200–499 pieces (Tier 2), and 500+ pieces (Tier 3). Larger 1,000+ container batches receive customized Fuzhou factory quotes.' },
      { question: 'Why does custom logo branding require at least 100 pieces per SKU?', answer: 'Blank stock orders ship from 50 pieces because finished inventory is ready in vacuum pouches. Custom 50W Fiber Laser (+$0.15–$0.30/pc) or Deep Laser + Enamel Color Fill (+$0.35–$0.60/pc) require jig alignment and first-article QC calibrated for 100+ unit runs.' },
      { question: 'Why are UV and silk-screen logo options excluded from the calculator?', answer: 'Smooth anodized, plated, and brushed metal surfaces are chemically inert, so surface-printed inks peel under daily thumb friction. We strictly specify permanent 50W fiber laser or recessed enamel color fill.' },
      { question: 'What is the real MOQ difference across the 3 packaging tiers?', answer: 'Anti-oxidation vacuum pouches are included ($0.00) from MOQ 50 pcs. Stock-mold Black EVA Zipper Cases (+$0.75+/pc) require MOQ 100 pcs. Custom Rigid Gift Boxes (+$1.45+/pc) start at MOQ 500 pcs, and bespoke Window Metal Tin Boxes require MOQ 1,000+ pcs MTO.' },
      { question: 'Does this EXW estimate include international air or sea courier shipping?', answer: 'No. This tool computes factory EXW unit and batch production cost in Fuzhou. Submit your configuration below with your destination postal code to receive an exact courier (DHL/FedEx/UPS) or DDP air/sea freight quote.' },
      { question: 'How should I factor paid sample costs into my launch budget?', answer: 'Paid 1-piece blank evaluation samples charge the 1-pc unit fee plus buyer-paid international courier shipping (non-refundable). Custom laser samples add $50 USD ($80–$150 USD for deep color fill) plus courier shipping.' },
      { question: 'Do magnetic orders require extra IATA PI-953 export carton handling?', answer: 'Our Fuzhou Export Logistics Hub packs multi-unit neodymium fidget master cartons with ferromagnetic shielding liners compliant with IATA PI-953.' },
      { question: 'What retail gross margin is realistic for metal EDC sliders and coins?', answer: 'Wholesale buyers retailing CNC 304 stainless steel or acoustic tuning-fork sliders at $29.99–$59.99 typically achieve 65%–78% gross product margin before ad spend and shipping; sub-$2.00 promo spinners serve corporate event budgets rather than DTC resale.' },
      { question: 'How do I lock in my calculator scenario for an official proforma quote?', answer: 'Adjust the 5 controls below to match your target product grade, quantity, laser option, and packaging tier, enter your work email into the form inside the Live Summary card, and our export desk replies within 12 hours.' }
    ]
  },
  de: {
    bcParent: 'Großhandelsmatrix',
    bcCurrent: 'Kostenrechner',
    badge1: 'INTERAKTIVER OEM-PREISRECHNER',
    badge2: '140 Formen · 3 Verpackungsstufen',
    kpis: [
      { label: 'Formenkosten', val: '$0.00 Formgebühr' },
      { label: 'Laser-Aufpreis', val: '+$0.15 / +$0.35+' },
      { label: 'Verpackungs-MOQ', val: '50 / 100 / 500+' },
      { label: 'Werkszeit', val: '5–15 Werktage' }
    ],
    showcasePill: 'LIVE-KALKULATIONS-ENGINE',
    showcaseMeta: ['EXW Fuzhou Staffeln', 'Rohertrag-Check', 'MOQ-Prüfung'],
    geoTitle: 'Direktantwort: Großhandels-Stückpreis, Lasergravur & Verpackungs-MOQ berechnen',
    geoAnswer: 'Unser Rechner verknüpft reale EXW-Staffelpreise (50–199, 200–499, 500+ Stk. bei $0 Formkosten), 50W-Lasergravur (+$0.15–$0.30/Stk.) bzw. Tiefenlaser+Emaille (+$0.35–$0.60/Stk., MOQ 100) und Verpackungen (Vakuumbeutel $0 ab 50 Stk., EVA-Etui +$0.75+ ab 100, Hartbox +$1.45+ ab 500, Dose 1.000+) zur exakten Margenkalkulation.',
    wsBadge: 'CHARGEN-KALKULATION ERSTELLEN',
    wsTitle: 'Metallqualität, Stückzahl, Laser-Logo & Verpackung konfigurieren',
    labels: {
      step1: '1. Serienformen-Qualitätsstufe wählen',
      step2: '2. Bestellmenge (Stück pro SKU)',
      step3: '3. Dauerhafte Metallgravur (Kein UV-/Siebdruck)',
      step4: '4. Werks-Verpackungsstufe wählen',
      step5: '5. Geplanter Verkaufspreis (UVP USD / Stk.)'
    },
    tierOptions: {
      promo: 'Einstiegs-Promo Zink-Spinner/Slider (FS-009 / FS-006 — $0.74–$0.92 Basis)',
      slider: 'Signatur-Magnetslider Zamak/Alu (FS-001 / FS-047 — $3.18–$3.92 Basis)',
      cnc: 'CNC 304 Edelstahl-Münze/Slider (FS-013 / FS-075 — $7.43–$9.15 Basis)',
      acoustic: 'Stimmgabel- & Mehrlagen-Slider (FS-150 / FS-148 — $14.50–$17.80 Basis)'
    },
    brandOptions: {
      blank: 'Blanko ohne Logo (+$0.00/Stk. · MOQ 50)',
      laser: '50W MOPA Faserlaser (+$0.20/Stk. Ø · MOQ 100 · $50 Muster)',
      enamel: 'Tiefenlaser + Pantone-Farbfüllung (+$0.45/Stk. Ø · MOQ 100–200 · $80–$150 Muster)'
    },
    pkgOptions: {
      vacuum: 'Einzel-Vakuum-Schutzbeutel ($0.00 inkl. · MOQ 50)',
      eva: 'Lager-EVA-Reißverschlussetui (+$0.75/Stk. · MOQ 100)',
      rigid: 'Individuelle Hartkarton-Geschenkbox (+$1.45/Stk. · MOQ 500)',
      tin: 'Sichtfenster-Metalldose auf Auftrag (+$1.15/Stk. · MOQ 1.000+)'
    },
    summary: {
      badge: 'EXW FUZHOU KALKULATION',
      moldPill: '$0.00 Formgebühr',
      unitCostLabel: 'Geschätzter Werksstückpreis (EXW)',
      batchTotalLabel: 'Geschätzter Chargenwert (EXW)',
      tierBreakLabel: 'Hardware-Preisstaffel',
      addonLabel: 'Aufpreis Logo + Verpackung',
      marginLabel: 'Rohertrag / Marge ggü. UVP',
      sampleRefLabel: 'Bezahltes Muster (Richtwert)',
      leadTimeLabel: 'Werksfertigungszeit',
      disclaimer: '* Bezahlte 1-Stück-Blankomuster & internationale Fracht (DHL/FedEx/UPS/DDP) trägt der Käufer (nicht erstattungsfähig). Laufzeiten hängen vom Kurier und Zoll ab.',
      formSubtext: 'Sichert exakt diese Konfiguration als formelles EXW- & Frachtangebot.'
    },
    runtime: {
      bracket50: 'Staffel 50–199',
      bracket200: 'Staffel 200–499',
      bracket500: 'Staffel 500+',
      grossWord: 'Rohertrag',
      pcWord: 'Stk.',
      pcsWord: 'Stk.',
      moqNoticePrefix: '⚠ MOQ-Hinweis: ',
      requiresMoq: 'erfordert MOQ',
      tierLabels: { promo: 'Promo Zink-Basis', slider: 'Kern-Magnetslider', cnc: 'CNC 304SS', acoustic: 'Stimmgabel/Multi' },
      brandLabels: { blank: 'Blanko', laser: '50W Laser', enamel: 'Tiefenlaser + Farbe' },
      brandSamples: {
        blank: '1-Stk.-Preis + Kurier (nicht erstattungsfähig)',
        laser: '$50 Laser-Muster + Kurier',
        enamel: '$80–$150 Farbfüll-Muster + Kurier'
      },
      brandDays: { blank: '5–7 Werktage (zzgl. Fracht)', laser: '10–15 Werktage (zzgl. Fracht)', enamel: '10–15 Werktage (zzgl. Fracht)' },
      pkgLabels: { vacuum: 'Vakuumbeutel', eva: 'Lager-EVA-Etui', rigid: 'Hartbox', tin: 'Metalldose' }
    },
    faqBadge: 'KALKULATOR & ANGEBOTS-FAQ',
    faqTitle: 'Staffelpreise, Mindestmengen & Frachtfragen',
    appName: 'FidgetSupply Großhandels- & Logo-Kostenrechner',
    appDesc: 'Interaktiver EXW-Werkspreis-, 50W-Laser-, Verpackungs-MOQ- und Margenrechner für 140 Serienformen.',
    faqs: [
      { question: 'Gibt es versteckte Form- oder Einrichtungskosten im Rechner?', answer: 'Nein. Für alle 140 Serienformen betragen die Werkzeugkosten $0.00 und für 50W-Laser ab MOQ 100 ebenfalls $0.00; nur physische Logomuster werden separat berechnet ($50 / $80–$150).' },
      { question: 'Wie beeinflusst die Stückzahl den EXW-Stückpreis?', answer: 'Jede SKU nutzt transparente Staffeln für 50–199, 200–499 und 500+ Stk.; ab 1.000 Stk. erstellen wir ein Projektangebot.' },
      { question: 'Warum gilt für Logogravur ein MOQ von 100 Stück?', answer: 'Blankoware liegt ab 50 Stk. versiegelt vor; 50W-Laser und Erstmusterprüfung sind wirtschaftlich ab 100 Stk./SKU eingerichtet.' },
      { question: 'Warum werden UV- und Siebdruck hier nicht angeboten?', answer: 'Auf glatten Metallflächen löst sich Oberflächenfarbe durch Daumenreibung ab. Wir gravieren ausschließlich dauerhaft per 50W-Laser oder Tiefen-Emaille.' },
      { question: 'Worin unterscheiden sich die MOQs der 3 Verpackungsstufen?', answer: 'Vakuumbeutel ($0) ab MOQ 50, Lager-EVA-Etui (+$0.75+) ab MOQ 100, Hartkarton-Box (+$1.45+) ab MOQ 500, Fenster-Metalldose ab MOQ 1.000+.' },
      { question: 'Enthält dieser EXW-Wert bereits Luft- oder Seefracht?', answer: 'Nein, ausgewiesen werden reine EXW-Werkskosten ab Fuzhou. Senden Sie die Konfiguration mit PLZ für die exakte DHL/FedEx/DDP-Frachtquote.' },
      { question: 'Wie kalkuliere ich bezahlte Muster ein?', answer: '1-Stück-Blankomuster kosten Einzelpreis + Kurier (nicht erstattungsfähig); Logomuster kosten $50 bzw. $80–$150 + Kurier.' },
      { question: 'Fallen bei Magnetware IATA-PI-953-Schutzkosten an?', answer: 'Wir kleiden Umkartons fachgerecht nach IATA PI-953 mit magnetischen Stahl-Abschirmfolien aus.' },
      { question: 'Welche Bruttomarge ist bei Metall-EDC realistisch?', answer: 'Beim Einzelhandelspreis von $29.99–$59.99 erzielen Käufer typischerweise 65%–78% Produktrohertrag vor Marketing und Versand.' },
      { question: 'Wie sichere ich genau diese Kalkulation als Angebot?', answer: 'Konfigurieren Sie alle 5 Felder, tragen Sie Ihre Arbeits-E-Mail im Zusammenfassungsfeld ein und wir antworten binnen 12 Stunden.' }
    ]
  },
  fr: {
    bcParent: 'Matrice Grossiste',
    bcCurrent: 'Calculateur de Coût',
    badge1: 'ESTIMATEUR OEM INTERACTIF',
    badge2: '140 Moules · 3 Niveaux Emballage',
    kpis: [
      { label: 'Frais de moule', val: '$0.00 Outillage' },
      { label: 'Supplément laser', val: '+$0.15 / +$0.35+' },
      { label: 'Paliers emballage', val: '50 / 100 / 500+' },
      { label: 'Délai usine', val: '5–15 Jours ouvrés' }
    ],
    showcasePill: 'MOTEUR DE TARIFICATION EN DIRECT',
    showcaseMeta: ['Paliers EXW Fuzhou', 'Marge brute', 'Contrôle MOQ'],
    geoTitle: 'Réponse directe : Estimer le coût unitaire grossiste, gravure laser et MOQ d’emballage',
    geoAnswer: 'Ce calculateur combine nos paliers EXW réels (50–199, 200–499, 500+ pcs à $0 d’outillage), le marquage laser 50W (+$0.15–$0.30/pce) ou émail (+$0.35–$0.60/pce, MOQ 100) et les emballages (sachet vide $0 dès 50, étui EVA +$0.75+ dès 100, coffret rigide +$1.45+ dès 500, boîte métal 1 000+) pour calculer votre marge.',
    wsBadge: 'CONFIGURER VOTRE LOT',
    wsTitle: 'Choisir la gamme métal, quantité, gravure laser et emballage',
    labels: {
      step1: '1. Gamme matérielle sur moule prêt',
      step2: '2. Quantité par SKU',
      step3: '3. Mode de marquage métal permanent (Sans UV)',
      step4: '4. Option d’emballage usine',
      step5: '5. Prix de revente cible (PPC USD / pce)'
    },
    tierOptions: {
      promo: 'Entrée de gamme Zinc Promo (FS-009 / FS-006 — base $0.74–$0.92)',
      slider: 'Slider Magnétique Signature (FS-001 / FS-047 — base $3.18–$3.92)',
      cnc: 'Pièce / Slider CNC Inox 304 (FS-013 / FS-075 — base $7.43–$9.15)',
      acoustic: 'Slider Diapason / Multicouche (FS-150 / FS-148 — base $14.50–$17.80)'
    },
    brandOptions: {
      blank: 'Stock vierge sans logo (+$0.00/pce · MOQ 50)',
      laser: 'Gravure Laser Fibre 50W (+$0.20/pce moy. · MOQ 100 · Éch. $50)',
      enamel: 'Gravure Profonde + Émail Pantone (+$0.45/pce moy. · MOQ 100–200 · Éch. $80–$150)'
    },
    pkgOptions: {
      vacuum: 'Sachet individuel sous vide anti-oxydation ($0.00 inclus · MOQ 50)',
      eva: 'Étui zippé EVA noir en stock (+$0.75/pce · MOQ 100)',
      rigid: 'Coffret cadeau rigide sur mesure (+$1.45/pce · MOQ 500)',
      tin: 'Boîte métal à fenêtre MTO (+$1.15/pce · MOQ 1 000+)'
    },
    summary: {
      badge: 'ESTIMATION EXW FUZHOU',
      moldPill: '$0.00 Frais moule',
      unitCostLabel: 'Coût unitaire estimé usine (EXW)',
      batchTotalLabel: 'Total estimé du lot (EXW)',
      tierBreakLabel: 'Palier matériel appliqué',
      addonLabel: 'Supplément Logo + Emballage',
      marginLabel: 'Marge brute estimée vs PPC',
      sampleRefLabel: 'Référence échantillon payant',
      leadTimeLabel: 'Délai fabrication usine',
      disclaimer: '* Les échantillons 1 pièce et le fret international (DHL/FedEx/UPS/DDP) sont payants et non remboursables. Le délai de transit dépend du transporteur.',
      formSubtext: 'Enregistre exactement ce scénario pour un devis officiel EXW & fret.'
    },
    runtime: {
      bracket50: 'palier 50–199',
      bracket200: 'palier 200–499',
      bracket500: 'palier 500+',
      grossWord: 'marge brute',
      pcWord: 'pce',
      pcsWord: 'pcs',
      moqNoticePrefix: '⚠ Avis MOQ : ',
      requiresMoq: 'exige un MOQ de',
      tierLabels: { promo: 'Zinc Promo', slider: 'Slider Magnétique', cnc: 'Inox CNC 304', acoustic: 'Diapason/Multi' },
      brandLabels: { blank: 'Vierge', laser: 'Laser 50W', enamel: 'Laser + Émail' },
      brandSamples: {
        blank: 'Prix 1 pce + Port acheteur (non remboursable)',
        laser: 'Prototype laser $50 + Port',
        enamel: 'Prototype émail $80–$150 + Port'
      },
      brandDays: { blank: '5–7 jours ouvrés (hors transit)', laser: '10–15 jours ouvrés (hors transit)', enamel: '10–15 jours ouvrés (hors transit)' },
      pkgLabels: { vacuum: 'Sachet vide', eva: 'Étui EVA', rigid: 'Coffret rigide', tin: 'Boîte métal' }
    },
    faqBadge: 'FAQ CALCULATEUR & DEVIS',
    faqTitle: 'Paliers de prix, seuils MOQ et expédition',
    appName: 'Calculateur de Coût FidgetSupply Grossiste & Logo',
    appDesc: 'Estimateur EXW usine, gravure laser 50W, MOQ emballage et marge brute sur 140 moules prêts.',
    faqs: [
      { question: 'Y a-t-il des frais cachés de moule ou de réglage laser ?', answer: 'Non. Sur nos 140 moules actifs, l’outillage est à $0.00 et le réglage laser de série à $0.00 dès 100 pcs ; seuls les prototypes physiques avec logo coûtent $50 ou $80–$150.' },
      { question: 'Comment la quantité influence-t-elle le prix unitaire ?', answer: 'Trois paliers EXW transparents : 50–199, 200–499 et 500+ pièces, avec devis dédié à partir de 1 000+.' },
      { question: 'Pourquoi un minimum de 100 pièces pour la gravure logo ?', answer: 'Le stock vierge part dès 50 pcs, tandis que le calage laser 50W et le contrôle premier article demandent au moins 100 unités par SKU.' },
      { question: 'Pourquoi l’impression UV et la sérigraphie sont-elles absentes ?', answer: 'Sur métal lisse, l’encre de surface se décolle à l’usage ; seuls le laser 50W et l’émail en creux garantissent une tenue permanente.' },
      { question: 'Quels sont les MOQ des 3 niveaux d’emballage ?', answer: 'Sachet vide ($0) dès 50 pcs, étui EVA noir (+$0.75+) dès 100 pcs, coffret rigide (+$1.45+) dès 500 pcs, boîte métal dès 1 000+ pcs.' },
      { question: 'L’estimation EXW inclut-elle le fret aérien ou maritime ?', answer: 'Non, il s’agit du coût sortie usine Fuzhou. Soumettez votre scénario avec code postal pour recevoir le tarif DHL/FedEx/DDP exact.' },
      { question: 'Comment budgéter les échantillons payants ?', answer: 'Échantillon 1 pièce vierge + port non remboursables ; prototype laser $50 ou émail $80–$150 + port.' },
      { question: 'Les colis magnétiques nécessitent-ils un blindage IATA PI-953 ?', answer: 'Oui, nos cartons maîtres sont blindés avec tôles d’acier pour passer la sûreté aérienne IATA PI-953.' },
      { question: 'Quelle marge brute viser sur l’EDC inox ou acoustique ?', answer: 'En revente entre $29.99 et $59.99, la marge brute produit atteint généralement 65 % à 78 % avant publicité et livraison.' },
      { question: 'Comment bloquer cette simulation dans un devis officiel ?', answer: 'Réglez les 5 paramètres, saisissez votre e-mail professionnel dans le bloc récapitulatif et recevez l’offre sous 12 heures.' }
    ]
  },
  nl: {
    bcParent: 'Groothandelsmatrix',
    bcCurrent: 'Kostencalculator',
    badge1: 'INTERACTIEVE OEM-CALCULATOR',
    badge2: '140 Mallen · 3 Verpakkingen',
    kpis: [
      { label: 'Matrijskosten', val: '$0.00 Matrijs' },
      { label: 'Laseropslag', val: '+$0.15 / +$0.35+' },
      { label: 'Verpakking MOQ', val: '50 / 100 / 500+' },
      { label: 'Productietijd', val: '5–15 Werkdagen' }
    ],
    showcasePill: 'LIVE STAFFELCALCULATOR',
    showcaseMeta: ['EXW Fuzhou Staffels', 'Brutomarge Check', 'MOQ Controle'],
    geoTitle: 'Direct antwoord: Groothandelsprijs, laserlogo & verpakkings-MOQ berekenen',
    geoAnswer: 'De FidgetSupply-calculator combineert EXW-volumestaffels (50–199, 200–499, 500+ st. met $0 matrijskosten), permanente 50W fiberlaser (+$0.15–$0.30/st.) of dieplaser+emaille (+$0.35–$0.60/st., MOQ 100) en verpakkingsopties (vacuümzak $0 vanaf 50, EVA-case +$0.75+ vanaf 100, giftbox +$1.45+ vanaf 500) tot uw directe margeraming.',
    wsBadge: 'BEREKEN UW PRODUCTIERUN',
    wsTitle: 'Kies materiaalniveau, aantal, laserlogo en verpakking',
    labels: {
      step1: '1. Selecteer hardware-niveau op bestaande matrijs',
      step2: '2. Aantal per SKU',
      step3: '3. Permanente metaalgravure (Geen UV / zeefdruk)',
      step4: '4. Fabrieksverpakking (3 niveaus)',
      step5: '5. Doelverkoopprijs consument (USD / st.)'
    },
    tierOptions: {
      promo: 'Instap Promo Zink Spinner/Slider (FS-009 / FS-006 — $0.74–$0.92 basis)',
      slider: 'Core Magnetische Slider (FS-001 / FS-047 — $3.18–$3.92 basis)',
      cnc: 'CNC 304 RVS Munt/Slider (FS-013 / FS-075 — $7.43–$9.15 basis)',
      acoustic: 'Akoestische Stemvork / Multi-Layer (FS-150 / FS-148 — $14.50–$17.80 basis)'
    },
    brandOptions: {
      blank: 'Blanco zonder logo (+$0.00/st. · MOQ 50)',
      laser: '50W MOPA Fiberlaser (+$0.20/st. gem. · MOQ 100 · $50 Monster)',
      enamel: 'Dieplaser + Pantone Emaille (+$0.45/st. gem. · MOQ 100–200 · $80–$150 Monster)'
    },
    pkgOptions: {
      vacuum: 'Individuele anti-oxidatie vacuümzak ($0.00 inbegrepen · MOQ 50)',
      eva: 'Zwart EVA-etui uit voorraadmal (+$0.75/st. · MOQ 100)',
      rigid: 'Luxe hardkartonnen giftbox op maat (+$1.45/st. · MOQ 500)',
      tin: 'Mat metalen blik met venster MTO (+$1.15/st. · MOQ 1.000+)'
    },
    summary: {
      badge: 'EXW FUZHOU RAMING',
      moldPill: '$0.00 Matrijs',
      unitCostLabel: 'Geschatte stuksprijs fabriek (EXW)',
      batchTotalLabel: 'Geschatte batchwaarde (EXW)',
      tierBreakLabel: 'Toegepaste staffel',
      addonLabel: 'Opslag Logo + Verpakking',
      marginLabel: 'Geschatte brutowinst / marge vs. adviesprijs',
      sampleRefLabel: 'Richtprijs betaald monster',
      leadTimeLabel: 'Productiedoorlooptijd fabriek',
      disclaimer: '* Betaalde 1-stuk blanco monsters en internationale vracht (DHL/FedEx/UPS/DDP) worden door de koper betaald (niet-restitueerbaar).',
      formSubtext: 'Vergrendelt exact dit scenario in een officiële EXW- & vrachtofferte.'
    },
    runtime: {
      bracket50: 'staffel 50–199',
      bracket200: 'staffel 200–499',
      bracket500: 'staffel 500+',
      grossWord: 'bruto',
      pcWord: 'st.',
      pcsWord: 'st.',
      moqNoticePrefix: '⚠ MOQ-melding: ',
      requiresMoq: 'vereist MOQ',
      tierLabels: { promo: 'Promo Zink', slider: 'Core Slider', cnc: 'CNC 304 RVS', acoustic: 'Stemvork/Multi' },
      brandLabels: { blank: 'Blanco', laser: '50W Laser', enamel: 'Dieplaser + Kleur' },
      brandSamples: {
        blank: '1-st. prijs + koerier (niet-restitueerbaar)',
        laser: '$50 Laseropstart + koerier',
        enamel: '$80–$150 Emaille-opstart + koerier'
      },
      brandDays: { blank: '5–7 werkdagen (excl. vracht)', laser: '10–15 werkdagen (excl. vracht)', enamel: '10–15 werkdagen (excl. vracht)' },
      pkgLabels: { vacuum: 'Vacuümzak', eva: 'EVA-etui', rigid: 'Giftbox', tin: 'Metalen blik' }
    },
    faqBadge: 'FAQ CALCULATOR & OFFERTE',
    faqTitle: 'Staffelprijzen, MOQ-drempels en transportvragen',
    appName: 'FidgetSupply Groothandel & Logo Kostencalculator',
    appDesc: 'Interactieve EXW-kostprijs-, 50W-laser-, verpakkings-MOQ- en brutomargecalculator voor 140 mallen.',
    faqs: [
      { question: 'Zijn er verborgen matrijs- of instelkosten buiten deze calculator?', answer: 'Nee. Voor alle 140 bestaande mallen gelden $0.00 matrijskosten en vanaf MOQ 100 geen laserinstelkosten; alleen fysieke logomonsters kosten $50 of $80–$150.' },
      { question: 'Hoe beïnvloedt het bestelvolume de stuksprijs?', answer: 'Elke SKU hanteert drie EXW-staffels: 50–199, 200–499 en 500+ stuks.' },
      { question: 'Waarom geldt voor eigen logo’s een minimum van 100 stuks?', answer: 'Blanco voorraad verzenden wij vanaf 50 stuks; lasergravure vereist opspanmallen en kwaliteitsvrijgave vanaf 100 stuks.' },
      { question: 'Waarom ontbreken UV-druk en zeefdruk in de calculator?', answer: 'Op glad metaal bladderen inkten af door vingerfrictie; permanente 50W laser en verzonken emaille voorkomen klachten.' },
      { question: 'Wat zijn de MOQ-verschillen tussen de verpakkingsopties?', answer: 'Vacuümzak ($0) vanaf 50 st., EVA-etui (+$0.75+) vanaf 100 st., giftbox (+$1.45+) vanaf 500 st., blik vanaf 1.000+ st.' },
      { question: 'Is internationale lucht- of zeevracht inbegrepen?', answer: 'Nee, dit is de EXW-fabrieksprijs. Vul hieronder uw zakelijke e-mail in met postcode voor exacte vrachtkosten.' },
      { question: 'Hoe verwerk ik proefmonsters in mijn startbudget?', answer: 'Blanco 1-stuk monsters kosten eenheidsprijs + koerier; logomonsters kosten $50 of $80–$150 + koerier.' },
      { question: 'Vereisen magneetorders extra IATA PI-953 bescherming?', answer: 'Ja, exportdozen krijgen stalen magnetische afscherming conform IATA PI-953.' },
      { question: 'Welke brutomarge is realistisch voor metalen EDC?', answer: 'Bij verkoopprijzen van $29.99–$59.99 bedraagt de productbrutomarge doorgaans 65%–78%.' },
      { question: 'Hoe leg ik deze exacte berekening vast voor een offerte?', answer: 'Vul uw werke-mail in het rechterpaneel in en u ontvangt binnen 12 uur bijpassende SKU-prijslijsten.' }
    ]
  },
  es: {
    bcParent: 'Matriz Mayorista',
    bcCurrent: 'Calculadora de Costos',
    badge1: 'ESTIMADOR OEM INTERACTIVO',
    badge2: '140 Moldes · 3 Niveles de Empaque',
    kpis: [
      { label: 'Costo de molde', val: '$0.00 Herramental' },
      { label: 'Adicional láser', val: '+$0.15 / +$0.35+' },
      { label: 'Empaques MOQ', val: '50 / 100 / 500+' },
      { label: 'Plazo fábrica', val: '5–15 Días hábiles' }
    ],
    showcasePill: 'MOTOR DE PRECIOS EN VIVO',
    showcaseMeta: ['Escalas EXW Fuzhou', 'Margen bruto', 'Validador MOQ'],
    geoTitle: 'Respuesta directa: Calcular costo mayorista EXW, grabado láser y MOQ de empaque',
    geoAnswer: 'Esta calculadora combina escalas EXW de fábrica (50–199, 200–499 y 500+ uds. con $0 de molde), láser fibra 50W (+$0.15–$0.30/ud.) o esmalte (+$0.35–$0.60/ud., MOQ 100) y empaques (bolsa vacío $0 desde 50, estuche EVA +$0.75+ desde 100, caja rígida +$1.45+ desde 500) para estimar tu costo y margen.',
    wsBadge: 'ARMA TU COTIZACIÓN DE LOTE',
    wsTitle: 'Configura nivel de metal, cantidad, grabado láser y empaque',
    labels: {
      step1: '1. Nivel de hardware en molde listo',
      step2: '2. Cantidad del pedido (por SKU)',
      step3: '3. Grabado permanente en metal (Sin UV / Serigrafía)',
      step4: '4. Opción de empaque de fábrica',
      step5: '5. Precio de venta al público estimado (PVP USD / ud.)'
    },
    tierOptions: {
      promo: 'Entrada Promo Zinc Spinner / Slider (FS-009 / FS-006 — base $0.74–$0.92)',
      slider: 'Slider Magnético Insignia (FS-001 / FS-047 — base $3.18–$3.92)',
      cnc: 'Moneda / Slider CNC Acero 304 (FS-013 / FS-075 — base $7.43–$9.15)',
      acoustic: 'Diapasón Acústico / Multicapa (FS-150 / FS-148 — base $14.50–$17.80)'
    },
    brandOptions: {
      blank: 'Estándar sin logotipo (+$0.00/ud. · MOQ 50)',
      laser: 'Láser Fibra MOPA 50W (+$0.20/ud. prom. · MOQ 100 · Muestra $50)',
      enamel: 'Láser Profundo + Esmalte Pantone (+$0.45/ud. prom. · MOQ 100–200 · Muestra $80–$150)'
    },
    pkgOptions: {
      vacuum: 'Bolsa individual al vacío antioxidante ($0.00 incluida · MOQ 50)',
      eva: 'Estuche EVA negro con cremallera (+$0.75/ud. · MOQ 100)',
      rigid: 'Caja de regalo rígida personalizada (+$1.45/ud. · MOQ 500)',
      tin: 'Lata metálica mate con ventana MTO (+$1.15/ud. · MOQ 1,000+)'
    },
    summary: {
      badge: 'ESTIMACIÓN EXW FUZHOU',
      moldPill: '$0.00 Molde',
      unitCostLabel: 'Costo unitario estimado EXW',
      batchTotalLabel: 'Total estimado del lote (EXW)',
      tierBreakLabel: 'Desglose escala de volumen',
      addonLabel: 'Extra Logo + Empaque',
      marginLabel: 'Margen bruto estimado vs PVP',
      sampleRefLabel: 'Referencia muestra pagada',
      leadTimeLabel: 'Tiempo de producción en fábrica',
      disclaimer: '* Muestras pagadas de 1 pieza y flete courier internacional (DHL/FedEx/UPS/DDP) corren por cuenta del comprador (no reembolsables).',
      formSubtext: 'Bloquea este escenario exacto para recibir tu cotización EXW y flete.'
    },
    runtime: {
      bracket50: 'escala 50–199',
      bracket200: 'escala 200–499',
      bracket500: 'escala 500+',
      grossWord: 'bruto',
      pcWord: 'ud.',
      pcsWord: 'uds.',
      moqNoticePrefix: '⚠ Aviso MOQ: ',
      requiresMoq: 'requiere MOQ',
      tierLabels: { promo: 'Zinc Promo', slider: 'Slider Clave', cnc: 'CNC 304SS', acoustic: 'Diapasón/Multi' },
      brandLabels: { blank: 'Sin logo', laser: 'Láser 50W', enamel: 'Láser + Color' },
      brandSamples: {
        blank: 'Costo 1 ud. + Courier comprador (no reembolsable)',
        laser: 'Muestra láser $50 + Courier',
        enamel: 'Muestra esmalte $80–$150 + Courier'
      },
      brandDays: { blank: '5–7 días hábiles (sin tránsito)', laser: '10–15 días hábiles (sin tránsito)', enamel: '10–15 días hábiles (sin tránsito)' },
      pkgLabels: { vacuum: 'Bolsa vacío', eva: 'Estuche EVA', rigid: 'Caja rígida', tin: 'Lata metálica' }
    },
    faqBadge: 'FAQ CALCULADORA Y COTIZACIÓN',
    faqTitle: 'Escalas de precios, mínimos MOQ y envíos',
    appName: 'Calculadora de Costos Mayoristas y Logo FidgetSupply',
    appDesc: 'Estimador interactivo de precio EXW, láser 50W, MOQ de empaque y margen bruto sobre 140 moldes.',
    faqs: [
      { question: '¿Hay cargos ocultos de molde o configuración láser?', answer: 'No. Los 140 moldes tienen $0.00 de herramental y $0.00 de ajuste láser desde 100 uds.; solo las muestras físicas con logo cuestan $50 o $80–$150.' },
      { question: '¿Cómo reduce la cantidad el precio por unidad?', answer: 'Tres escalas EXW claras: 50–199, 200–499 y 500+ unidades; pedidos de 1,000+ reciben cotización directa de fábrica.' },
      { question: '¿Por qué el grabado de logo pide mínimo 100 unidades?', answer: 'El stock estándar sale desde 50 piezas; el grabado láser y control de primera pieza requieren lotes desde 100 piezas por SKU.' },
      { question: '¿Por qué no incluyen serigrafía ni impresión UV?', answer: 'Sobre metal liso las tintas superficiales se pelan al frotar. Solo usamos láser 50W o esmalte bajo relieve permanente.' },
      { question: '¿Cuál es el MOQ real de los 3 tipos de empaque?', answer: 'Bolsa vacío ($0) desde 50 uds., estuche EVA (+$0.75+) desde 100 uds., caja rígida (+$1.45+) desde 500 uds., lata desde 1,000+.' },
      { question: '¿El cálculo EXW incluye envío aéreo o marítimo?', answer: 'No, muestra costo de fábrica en Fuzhou. Envía tu correo abajo con código postal para cotizar DHL/FedEx/DDP.' },
      { question: '¿Cómo considero el costo de muestras en mi presupuesto?', answer: 'Muestra 1 pieza estándar cobra unidad + flete no reembolsable; muestra con logo agrega $50 u $80–$150 + flete.' },
      { question: '¿Los pedidos magnéticos requieren blindaje IATA PI-953?', answer: 'Sí, forramos las cajas máster con acero de blindaje magnético conforme a IATA PI-953.' },
      { question: '¿Qué margen bruto es realista al vender EDC metálicos?', answer: 'Con PVP de $29.99–$59.99, el margen bruto suele situarse entre 65% y 78% antes de publicidad y envío.' },
      { question: '¿Cómo solicito proforma formal de mi escenario calculado?', answer: 'Introduce tu correo corporativo en la tarjeta derecha y te respondemos en 12 horas.' }
    ]
  },
  it: {
    bcParent: 'Listino Ingrosso',
    bcCurrent: 'Calcolatore Costi',
    badge1: 'STIMATORE OEM INTERATTIVO',
    badge2: '140 Stampi · 3 Livelli Packaging',
    kpis: [
      { label: 'Costo stampo', val: '$0.00 Attrezzatura' },
      { label: 'Supplemento laser', val: '+$0.15 / +$0.35+' },
      { label: 'Soglie packaging', val: '50 / 100 / 500+' },
      { label: 'Tempi fabbrica', val: '5–15 Giorni lav.' }
    ],
    showcasePill: 'MOTORE PREZZI IN TEMPO REALE',
    showcaseMeta: ['Scaglioni EXW Fuzhou', 'Margine lordo', 'Controllo MOQ'],
    geoTitle: 'Risposta diretta: Calcolare costo unitario all’ingrosso, laser e MOQ packaging',
    geoAnswer: 'Il calcolatore unisce gli scaglioni EXW reali (50–199, 200–499, 500+ pz con $0 stampo), laser fibra 50W (+$0.15–$0.30/pz) o smalto (+$0.35–$0.60/pz, MOQ 100) e packaging (sottovuoto $0 da 50, custodia EVA +$0.75+ da 100, cofanetto rigido +$1.45+ da 500) per stimare costo lotto e margine.',
    wsBadge: 'CONFIGURA IL TUO LOTTO',
    wsTitle: 'Seleziona fascia metallo, quantità, incisione laser e packaging',
    labels: {
      step1: '1. Fascia materiale su stampo pronto',
      step2: '2. Quantità ordine (unità per SKU)',
      step3: '3. Marcatura permanente su metallo (No UV)',
      step4: '4. Opzione packaging di fabbrica',
      step5: '5. Prezzo di vendita al pubblico (RRP USD / pz)'
    },
    tierOptions: {
      promo: 'Entry Promo Zinco Spinner/Slider (FS-009 / FS-006 — base $0.74–$0.92)',
      slider: 'Core Magnetic Slider (FS-001 / FS-047 — base $3.18–$3.92)',
      cnc: 'Moneta / Slider CNC Inox 304 (FS-013 / FS-075 — base $7.43–$9.15)',
      acoustic: 'Diapason Acustico / Multistrato (FS-150 / FS-148 — base $14.50–$17.80)'
    },
    brandOptions: {
      blank: 'Neutro senza logo (+$0.00/pz · MOQ 50)',
      laser: 'Incisione Laser Fibra 50W (+$0.20/pz media · MOQ 100 · Camp. $50)',
      enamel: 'Laser Profondo + Smalto Pantone (+$0.45/pz media · MOQ 100–200 · Camp. $80–$150)'
    },
    pkgOptions: {
      vacuum: 'Bustina individuale sottovuoto anti-ossidazione ($0.00 incl. · MOQ 50)',
      eva: 'Custodia EVA nera con cerniera (+$0.75/pz · MOQ 100)',
      rigid: 'Cofanetto regalo rigido personalizzato (+$1.45/pz · MOQ 500)',
      tin: 'Scatola in latta opaca con finestra MTO (+$1.15/pz · MOQ 1.000+)'
    },
    summary: {
      badge: 'STIMA EXW FUZHOU',
      moldPill: '$0.00 Stampo',
      unitCostLabel: 'Costo unitario stimato (EXW)',
      batchTotalLabel: 'Totale stimato lotto (EXW)',
      tierBreakLabel: 'Scaglione applicato',
      addonLabel: 'Extra Logo + Packaging',
      marginLabel: 'Margine lordo stimato vs RRP',
      sampleRefLabel: 'Riferimento campione pagato',
      leadTimeLabel: 'Tempo produzione fabbrica',
      disclaimer: '* Campioni da 1 pz e trasporto internazionale (DHL/FedEx/UPS/DDP) sono a carico dell’acquirente e non rimborsabili.',
      formSubtext: 'Blocca esattamente questo scenario per un preventivo formale EXW e spedizione.'
    },
    runtime: {
      bracket50: 'fascia 50–199',
      bracket200: 'fascia 200–499',
      bracket500: 'fascia 500+',
      grossWord: 'lordo',
      pcWord: 'pz',
      pcsWord: 'pz',
      moqNoticePrefix: '⚠ Avviso MOQ: ',
      requiresMoq: 'richiede MOQ',
      tierLabels: { promo: 'Promo Zinco', slider: 'Slider Magnetico', cnc: 'CNC 304SS', acoustic: 'Diapason/Multi' },
      brandLabels: { blank: 'Neutro', laser: 'Laser 50W', enamel: 'Laser + Smalto' },
      brandSamples: {
        blank: 'Prezzo 1 pz + Corriere acquirente (non rimb.)',
        laser: 'Setup laser $50 + Corriere',
        enamel: 'Setup smalto $80–$150 + Corriere'
      },
      brandDays: { blank: '5–7 giorni lavorativi (escl. corriere)', laser: '10–15 giorni lavorativi (escl. corriere)', enamel: '10–15 giorni lavorativi (escl. corriere)' },
      pkgLabels: { vacuum: 'Sottovuoto', eva: 'Custodia EVA', rigid: 'Box rigido', tin: 'Latta MTO' }
    },
    faqBadge: 'FAQ CALCOLATORE & PREVENTIVI',
    faqTitle: 'Scaglioni di prezzo, soglie MOQ e spedizione',
    appName: 'Calcolatore Costi Ingrosso & Logo FidgetSupply',
    appDesc: 'Stimatore interattivo EXW, laser 50W, MOQ packaging e margine lordo su 140 stampi pronti.',
    faqs: [
      { question: 'Ci sono costi nascosti per stampi o impianto laser?', answer: 'No. Tutti i 140 stampi hanno $0.00 di attrezzatura e $0.00 di impianto laser in serie da 100 pz.; solo i campioni fisici con logo costano $50 o $80–$150.' },
      { question: 'Come influisce la quantità sul prezzo unitario?', answer: 'Tre fasce EXW chiare: 50–199, 200–499 e 500+ pz., con quotazioni su misura oltre 1.000 pz.' },
      { question: 'Perché la personalizzazione logo parte da 100 pezzi?', answer: 'Lo stock neutro parte da 50 pz.; dime di centraggio laser e controllo qualità primo pezzo richiedono almeno 100 unità per SKU.' },
      { question: 'Perché stampa UV e tampografia sono escluse?', answer: 'Sul metallo liscio gli inchiostri superficiali si scrostano; laser 50W e smalto incassato sono indelebili.' },
      { question: 'Quali sono le differenze MOQ tra i 3 imballaggi?', answer: 'Sottovuoto ($0) MOQ 50, custodia EVA (+$0.75+) MOQ 100, cofanetto rigido (+$1.45+) MOQ 500, latta MOQ 1.000+.' },
      { question: 'La stima EXW include spedizione aerea o marittima?', answer: 'No, calcola il costo franco fabbrica a Fuzhou. Invia la configurazione via e-mail sotto con il CAP per la quota DHL/FedEx/DDP.' },
      { question: 'Come inserire il costo dei campioni nel budget?', answer: '1 pz neutro costa prezzo singolo + corriere; campione laser $50 o smalto $80–$150 + corriere.' },
      { question: 'Gli articoli magnetici richiedono imballo IATA PI-953?', answer: 'Sì, schermiamo i cartoni master con lamine d’acciaio conformi IATA PI-953.' },
      { question: 'Qual è il margine lordo realistico su EDC in metallo?', answer: 'Con vendita al pubblico tra $29.99 e $59.99, il margine lordo prodotto si attesta spesso tra 65% e 78%.' },
      { question: 'Come blocco questo scenario per una fattura proforma?', answer: 'Inserisci l’e-mail aziendale nella scheda riepilogativa e risponderemo entro 12 ore.' }
    ]
  },
  pt: {
    bcParent: 'Matriz Atacado',
    bcCurrent: 'Calculadora de Custo',
    badge1: 'CALCULADORA OEM INTERATIVA',
    badge2: '140 Moldes · 3 Níveis de Embalagem',
    kpis: [
      { label: 'Taxa de molde', val: '$0.00 Ferramental' },
      { label: 'Adicional laser', val: '+$0.15 / +$0.35+' },
      { label: 'Embalagens MOQ', val: '50 / 100 / 500+' },
      { label: 'Prazo fábrica', val: '5–15 Dias úteis' }
    ],
    showcasePill: 'MOTOR DE PREÇOS AO VIVO',
    showcaseMeta: ['Faixas EXW Fuzhou', 'Margem bruta', 'Validador MOQ'],
    geoTitle: 'Resposta direta: Calcular custo unitário atacado, gravação a laser e MOQ de embalagem',
    geoAnswer: 'Esta calculadora combina faixas EXW de fábrica (50–199, 200–499 e 500+ un. com $0 de molde), gravação laser 50W (+$0.15–$0.30/un.) ou esmalte (+$0.35–$0.60/un., MOQ 100) e embalagens (vácuo $0 a partir de 50, estojo EVA +$0.75+ a partir de 100, caixa rígida +$1.45+ a partir de 500) para projetar sua margem.',
    wsBadge: 'MONTE SUA ESTIMATIVA DE LOTE',
    wsTitle: 'Configure nível metálico, volume, gravação laser e embalagem',
    labels: {
      step1: '1. Categoria de metal em molde pronto',
      step2: '2. Quantidade do pedido (por SKU)',
      step3: '3. Gravação permanente no metal (Sem UV)',
      step4: '4. Nível de embalagem de fábrica',
      step5: '5. Preço de venda sugerido (MSRP USD / un.)'
    },
    tierOptions: {
      promo: 'Entrada Promo Zinco Spinner/Slider (FS-009 / FS-006 — base $0.74–$0.92)',
      slider: 'Slider Magnético Principal (FS-001 / FS-047 — base $3.18–$3.92)',
      cnc: 'Moeda / Slider CNC Aço 304 (FS-013 / FS-075 — base $7.43–$9.15)',
      acoustic: 'Diapasão Acústico / Multicamada (FS-150 / FS-148 — base $14.50–$17.80)'
    },
    brandOptions: {
      blank: 'Estoque liso sem logotipo (+$0.00/un. · MOQ 50)',
      laser: 'Laser Fibra MOPA 50W (+$0.20/un. méd. · MOQ 100 · Amostra $50)',
      enamel: 'Laser Profundo + Esmalte Pantone (+$0.45/un. méd. · MOQ 100–200 · $80–$150)'
    },
    pkgOptions: {
      vacuum: 'Saco individual a vácuo antioxidante ($0.00 incluso · MOQ 50)',
      eva: 'Estojo EVA preto de molde pronto (+$0.75/un. · MOQ 100)',
      rigid: 'Caixa rígida de presente personalizada (+$1.45/un. · MOQ 500)',
      tin: 'Lata metálica com visor MTO (+$1.15/un. · MOQ 1.000+)'
    },
    summary: {
      badge: 'ESTIMATIVA EXW FUZHOU',
      moldPill: '$0.00 Molde',
      unitCostLabel: 'Custo unitário estimado (EXW)',
      batchTotalLabel: 'Total estimado do lote (EXW)',
      tierBreakLabel: 'Faixa aplicada',
      addonLabel: 'Adicional Logo + Embalagem',
      marginLabel: 'Lucro bruto / margem vs MSRP',
      sampleRefLabel: 'Referência de amostra paga',
      leadTimeLabel: 'Prazo de fabricação',
      disclaimer: '* Amostras pagas de 1 unidade e frete internacional (DHL/FedEx/UPS/DDP) são pagos pelo comprador (não reembolsáveis).',
      formSubtext: 'Trava exatamente esta configuração em uma cotação oficial EXW e frete.'
    },
    runtime: {
      bracket50: 'faixa 50–199',
      bracket200: 'faixa 200–499',
      bracket500: 'faixa 500+',
      grossWord: 'bruto',
      pcWord: 'un.',
      pcsWord: 'un.',
      moqNoticePrefix: '⚠ Aviso MOQ: ',
      requiresMoq: 'exige MOQ',
      tierLabels: { promo: 'Promo Zinco', slider: 'Slider Principal', cnc: 'CNC 304SS', acoustic: 'Diapasão/Multi' },
      brandLabels: { blank: 'Liso', laser: 'Laser 50W', enamel: 'Laser + Cor' },
      brandSamples: {
        blank: 'Custo 1 un. + Frete comprador (não reembolsável)',
        laser: 'Setup laser $50 + Frete',
        enamel: 'Setup esmalte $80–$150 + Frete'
      },
      brandDays: { blank: '5–7 dias úteis (excl. frete)', laser: '10–15 dias úteis (excl. frete)', enamel: '10–15 dias úteis (excl. frete)' },
      pkgLabels: { vacuum: 'Saco vácuo', eva: 'Estojo EVA', rigid: 'Caixa rígida', tin: 'Lata MTO' }
    },
    faqBadge: 'FAQ CALCULADORA & COTAÇÃO',
    faqTitle: 'Faixas de preço, limites de MOQ e frete',
    appName: 'Calculadora de Custo Atacado & Logo FidgetSupply',
    appDesc: 'Estimador interativo EXW, laser 50W, MOQ de embalagem e margem bruta em 140 moldes.',
    faqs: [
      { question: 'Há taxas ocultas de molde ou setup fora da calculadora?', answer: 'Não. Todos os 140 moldes têm $0.00 de ferramental e $0.00 de setup de laser em série a partir de 100 un.; apenas amostras físicas custam $50 ou $80–$150.' },
      { question: 'Como o volume altera o valor unitário?', answer: 'Três faixas EXW claras: 50–199, 200–499 e 500+ unidades.' },
      { question: 'Por que a personalização exige mínimo de 100 unidades?', answer: 'Estoque liso parte de 50 un., enquanto gabaritos de laser 50W exigem lotes de 100+ por SKU.' },
      { question: 'Por que serigrafia e UV estão fora das opções?', answer: 'No metal liso tintas descascam facilmente; laser 50W e esmalte em baixo-relevo garantem fixação vitalícia.' },
      { question: 'Qual a diferença de MOQ nas 3 embalagens?', answer: 'Vácuo ($0) MOQ 50, estojo EVA (+$0.75+) MOQ 100, caixa rígida (+$1.45+) MOQ 500, lata MOQ 1.000+.' },
      { question: 'A estimativa EXW já inclui frete aéreo ou marítimo?', answer: 'Não. Envie seu e-mail com CEP abaixo para calcular DHL/FedEx/DDP.' },
      { question: 'Como incluir amostras no orçamento inicial?', answer: 'Amostra 1 un. lisa cobra preço unitário + frete não reembolsável; amostra com logo soma $50 ou $80–$150 + frete.' },
      { question: 'Pedidos magnéticos precisam de blindagem IATA PI-953?', answer: 'Sim, revestimos caixas máster com blindagem de aço conforme IATA PI-953.' },
      { question: 'Qual margem bruta é comum no varejo de EDC metálico?', answer: 'Entre $29.99 e $59.99 de preço final, a margem bruta fica tipicamente entre 65% e 78%.' },
      { question: 'Como fixo esta simulação para pedir proforma?', answer: 'Insira seu e-mail corporativo no cartão ao lado e responderemos em até 12 horas.' }
    ]
  },
  sv: {
    bcParent: 'Grossistmatris',
    bcCurrent: 'Kostnadskalkylator',
    badge1: 'INTERAKTIV OEM-KALKYLATOR',
    badge2: '140 Formar · 3 Förpackningssteg',
    kpis: [
      { label: 'Verktygskostnad', val: '$0.00 Form' },
      { label: 'Lasertillägg', val: '+$0.15 / +$0.35+' },
      { label: 'Förpackning MOQ', val: '50 / 100 / 500+' },
      { label: 'Tillverkningstid', val: '5–15 Arbetsdagar' }
    ],
    showcasePill: 'LIVE PRISSÄTTNINGSMOTOR',
    showcaseMeta: ['EXW Fuzhou-steg', 'Bruttomarginal', 'MOQ-kontroll'],
    geoTitle: 'Direktsvar: Beräkna styckkostnad, logogravyr & förpacknings-MOQ',
    geoAnswer: 'Kalkylatorn kombinerar EXW-volymsteg (50–199, 200–499, 500+ st med $0 formkostnad), 50W fiberlaser (+$0.15–$0.30/st) eller emalj (+$0.35–$0.60/st, MOQ 100) och förpackningar (vakuumpåse $0 vid 50, EVA-fodral +$0.75+ vid 100, presentask +$1.45+ vid 500) för direkt marginalanalys.',
    wsBadge: 'BYGG DIN BATCHKALKYL',
    wsTitle: 'Välj materialklass, antal, laserlogotyp och förpackning',
    labels: {
      step1: '1. Välj hårdvaruklass på färdig form',
      step2: '2. Orderantal (st per SKU)',
      step3: '3. Permanent metallgravyr (Ej UV / screentryck)',
      step4: '4. Fabriksförpackning (3 nivåer)',
      step5: '5. Målpris i detaljhandel (USD / st)'
    },
    tierOptions: {
      promo: 'Insteg Promo Zink Spinner/Slider (FS-009 / FS-006 — $0.74–$0.92 bas)',
      slider: 'Core Magnetslider (FS-001 / FS-047 — $3.18–$3.92 bas)',
      cnc: 'CNC 304 Rostfritt Mynt/Slider (FS-013 / FS-075 — $7.43–$9.15 bas)',
      acoustic: 'Akustisk Stämgaffel / Flerlager (FS-150 / FS-148 — $14.50–$17.80 bas)'
    },
    brandOptions: {
      blank: 'Neutral utan logo (+$0.00/st · MOQ 50)',
      laser: '50W MOPA Fiberlaser (+$0.20/st snitt · MOQ 100 · $50 Prov)',
      enamel: 'Djuplaser + Pantone Emalj (+$0.45/st snitt · MOQ 100–200 · $80–$150 Prov)'
    },
    pkgOptions: {
      vacuum: 'Enskild vakuumpåse ($0.00 ingår · MOQ 50)',
      eva: 'Svart EVA-fodral med dragkedja (+$0.75/st · MOQ 100)',
      rigid: 'Specialanpassad hård presentask (+$1.45/st · MOQ 500)',
      tin: 'Matt plåtask med fönster MTO (+$1.15/st · MOQ 1 000+)'
    },
    summary: {
      badge: 'EXW FUZHOU BERÄKNING',
      moldPill: '$0.00 Formavgift',
      unitCostLabel: 'Beräknad styckkostnad (EXW)',
      batchTotalLabel: 'Beräknad totalsumma (EXW)',
      tierBreakLabel: 'Tillämpat volymsteg',
      addonLabel: 'Tillägg Logo + Förpackning',
      marginLabel: 'Beräknad bruttovinst / marginal',
      sampleRefLabel: 'Riktpris betalt prov',
      leadTimeLabel: 'Produktionstid i fabrik',
      disclaimer: '* Betalda 1-st prover & internationell kurirfrakt (DHL/FedEx/UPS/DDP) betalas av köparen och återbetalas ej.',
      formSubtext: 'Låser exakt ovanstående scenario i en formell EXW- & fraktoffert.'
    },
    runtime: {
      bracket50: 'steg 50–199',
      bracket200: 'steg 200–499',
      bracket500: 'steg 500+',
      grossWord: 'brutto',
      pcWord: 'st',
      pcsWord: 'st',
      moqNoticePrefix: '⚠ MOQ-info: ',
      requiresMoq: 'kräver MOQ',
      tierLabels: { promo: 'Promo Zink', slider: 'Core Slider', cnc: 'CNC 304SS', acoustic: 'Stämgaffel/Multi' },
      brandLabels: { blank: 'Neutral', laser: '50W Laser', enamel: 'Djuplaser + Färg' },
      brandSamples: {
        blank: '1-st pris + Köparfrakt (ej återbetalningsbar)',
        laser: '$50 Laserprov + Frakt',
        enamel: '$80–$150 Emaljprov + Frakt'
      },
      brandDays: { blank: '5–7 arbetsdagar (exkl. frakt)', laser: '10–15 arbetsdagar (exkl. frakt)', enamel: '10–15 arbetsdagar (exkl. frakt)' },
      pkgLabels: { vacuum: 'Vakuumpåse', eva: 'EVA-fodral', rigid: 'Presentask', tin: 'Plåtask' }
    },
    faqBadge: 'FAQ KALKYLATOR & OFFERT',
    faqTitle: 'Volympriser, MOQ-gränser & fraktfrågor',
    appName: 'FidgetSupply Grossist- & Logokalkylator',
    appDesc: 'Interaktiv EXW-kostnads-, 50W-laser-, förpacknings-MOQ- och marginalkalkylator för 140 formar.',
    faqs: [
      { question: 'Tillkommer dolda form- eller laserinställningsavgifter?', answer: 'Nej. Alla 140 formar har $0.00 i formkostnad och $0.00 i serieinställning vid MOQ 100+; endast fysiska logoprover kostar $50 eller $80–$150.' },
      { question: 'Hur påverkar volymen enhetspriset?', answer: 'Tre tydliga EXW-steg: 50–199, 200–499 och 500+ st.' },
      { question: 'Varför krävs minst 100 st för egen logotyp?', answer: 'Neutralt lager säljs från 50 st; fixturer för 50W-laser kräver serier om 100+ per SKU.' },
      { question: 'Varför saknas UV- och screentryck?', answer: 'Ytfärg lossnar lätt från blank metall; permanent laser och emalj håller.' },
      { question: 'Vilka MOQ gäller för de 3 förpackningarna?', answer: 'Vakuumpåse ($0) MOQ 50, EVA-fodral (+$0.75+) MOQ 100, presentask (+$1.45+) MOQ 500, plåtask MOQ 1 000+.' },
      { question: 'Ingår flyg- eller sjöfrakt i EXW-siffran?', answer: 'Nej, ange din e-post nedan med postnummer för exakt DHL/FedEx/DDP-frakt.' },
      { question: 'Hur räknar jag med prover i budgeten?', answer: '1-st neutralt prov kostar enhetspris + frakt; logoprov $50 eller $80–$150 + frakt.' },
      { question: 'Kräver magnetordrar extra IATA PI-953-hantering?', answer: 'Vi klär exportkartongerna med stålskärmar enligt IATA PI-953.' },
      { question: 'Vilken bruttomarginal ger metall-EDC i retail?', answer: 'Vid $29.99–$59.99 utpris ligger bruttomarginalen oftast på 65%–78%.' },
      { question: 'Hur låser jag kalkylen till en officiell offert?', answer: 'Fyll i företags-e-post i höger kort så återkommer vi inom 12 timmar.' }
    ]
  },
  da: {
    bcParent: 'Engrosmatrice',
    bcCurrent: 'Prisberegner',
    badge1: 'INTERAKTIV OEM-BEREGNER',
    badge2: '140 Forme · 3 Emballageniveauer',
    kpis: [
      { label: 'Formgebyr', val: '$0.00 Værktøj' },
      { label: 'Laser-tillæg', val: '+$0.15 / +$0.35+' },
      { label: 'Emballage MOQ', val: '50 / 100 / 500+' },
      { label: 'Fabrikstid', val: '5–15 Hverdage' }
    ],
    showcasePill: 'LIVE PRISMOTOR',
    showcaseMeta: ['EXW Fuzhou-trin', 'Bruttoavance', 'MOQ-tjek'],
    geoTitle: 'Direkte svar: Beregn engrospris, laserlogo & emballage-MOQ',
    geoAnswer: 'Beregneren kombinerer EXW-trapper (50–199, 200–499, 500+ stk. med $0 formgebyr), 50W fiberlaser (+$0.15–$0.30/stk.) eller emalje (+$0.35–$0.60/stk., MOQ 100) samt emballage (vakuumpose $0 ved 50, EVA-etui +$0.75+ ved 100, gaveæske +$1.45+ ved 500) til straks-beregning af avance.',
    wsBadge: 'BYG DIN PRISBEREGNING',
    wsTitle: 'Vælg metalkvalitet, antal, laserlogo og emballage',
    labels: {
      step1: '1. Vælg hardware-klasse på klar form',
      step2: '2. Ordreantal (stk. pr. SKU)',
      step3: '3. Permanent metalgravering (Ingen UV / serigrafi)',
      step4: '4. Fabriks-emballage (3 niveauer)',
      step5: '5. Mål-udsalgspris (USD / stk.)'
    },
    tierOptions: {
      promo: 'Basis Promo Zink Spinner/Slider (FS-009 / FS-006 — $0.74–$0.92 base)',
      slider: 'Core Magnetslider (FS-001 / FS-047 — $3.18–$3.92 base)',
      cnc: 'CNC 304 Rustfrit Stål Mønt/Slider (FS-013 / FS-075 — $7.43–$9.15 base)',
      acoustic: 'Akustisk Stemmegaffel / Flerlags (FS-150 / FS-148 — $14.50–$17.80 base)'
    },
    brandOptions: {
      blank: 'Neutral uden logo (+$0.00/stk. · MOQ 50)',
      laser: '50W MOPA Fiberlaser (+$0.20/stk. gns. · MOQ 100 · $50 Prøve)',
      enamel: 'Dyblaser + Pantone Emalje (+$0.45/stk. gns. · MOQ 100–200 · $80–$150)'
    },
    pkgOptions: {
      vacuum: 'Individuel vakuumpose ($0.00 inkl. · MOQ 50)',
      eva: 'Sort EVA-lynlåsetui fra lagerform (+$0.75/stk. · MOQ 100)',
      rigid: 'Specialfremstillet hård gaveæske (+$1.45/stk. · MOQ 500)',
      tin: 'Mat metaldåse med rude MTO (+$1.15/stk. · MOQ 1.000+)'
    },
    summary: {
      badge: 'EXW FUZHOU OVERSLAG',
      moldPill: '$0.00 Formgebyr',
      unitCostLabel: 'Anslået fabrikspris pr. stk. (EXW)',
      batchTotalLabel: 'Anslået totalordre (EXW)',
      tierBreakLabel: 'Anvendt mængdetrin',
      addonLabel: 'Tillæg Logo + Emballage',
      marginLabel: 'Anslået bruttoavance vs. udsalgspris',
      sampleRefLabel: 'Betalt vareprøve (reference)',
      leadTimeLabel: 'Produktionstid på fabrik',
      disclaimer: '* Betalte 1-stk prøver & international fragt (DHL/FedEx/UPS/DDP) betales af køber og refunderes ikke.',
      formSubtext: 'Låser præcis dette scenarie til et officielt EXW- & fragttilbud.'
    },
    runtime: {
      bracket50: 'trin 50–199',
      bracket200: 'trin 200–499',
      bracket500: 'trin 500+',
      grossWord: 'brutto',
      pcWord: 'stk.',
      pcsWord: 'stk.',
      moqNoticePrefix: '⚠ MOQ-besked: ',
      requiresMoq: 'kræver MOQ',
      tierLabels: { promo: 'Promo Zink', slider: 'Core Slider', cnc: 'CNC 304SS', acoustic: 'Stemmegaffel/Multi' },
      brandLabels: { blank: 'Neutral', laser: '50W Laser', enamel: 'Dyblaser + Farve' },
      brandSamples: {
        blank: '1-stk pris + Fragt (ikke-refunderbar)',
        laser: '$50 Laserprøve + Fragt',
        enamel: '$80–$150 Emaljeprøve + Fragt'
      },
      brandDays: { blank: '5–7 hverdage (ekskl. fragt)', laser: '10–15 hverdage (ekskl. fragt)', enamel: '10–15 hverdage (ekskl. fragt)' },
      pkgLabels: { vacuum: 'Vakuumpose', eva: 'EVA-etui', rigid: 'Gaveæske', tin: 'Metaldåse' }
    },
    faqBadge: 'FAQ BEREGNER & TILBUD',
    faqTitle: 'Mængderabatter, MOQ-grænser og fragt',
    appName: 'FidgetSupply Engros- & Logoprisberegner',
    appDesc: 'Interaktiv EXW-kostpris-, 50W-laser-, emballage-MOQ- og avanceberegner for 140 forme.',
    faqs: [
      { question: 'Er der skjulte form- eller opstartsgebyrer?', answer: 'Nej. Alle 140 forme har $0.00 i værktøjsgebyr og $0.00 opstart for serielaser fra 100 stk.; kun fysiske logoprøver koster $50 eller $80–$150.' },
      { question: 'Hvordan påvirker antal stykprisen?', answer: 'Tre klare EXW-trin: 50–199, 200–499 og 500+ stk.' },
      { question: 'Hvorfor kræver eget logo mindst 100 stk.?', answer: 'Neutralt lager sendes fra 50 stk., mens laserfikstur og stikprøve kræver 100+ stk. pr. SKU.' },
      { question: 'Hvorfor tilbydes UV-tryk ikke i beregneren?', answer: 'Overfladeblæk skaller af glat metal; permanent 50W laser eller emalje holder.' },
      { question: 'Hvad er MOQ-forskellen på de 3 emballagetyper?', answer: 'Vakuumpose ($0) MOQ 50, EVA-etui (+$0.75+) MOQ 100, gaveæske (+$1.45+) MOQ 500, dåse MOQ 1.000+.' },
      { question: 'Er luft- eller søfragt inkluderet i EXW-tallet?', answer: 'Nej, indsend din e-mail nedenfor med postnummer for nøjagtig DHL/FedEx/DDP-fragt.' },
      { question: 'Hvordan indregner jeg prøveomkostninger?', answer: '1-stk neutral prøve koster stykpris + fragt; logoprøve koster $50 eller $80–$150 + fragt.' },
      { question: 'Kræver magnetordrer IATA PI-953 afskærmning?', answer: 'Vi forer eksportkasser med stålskærme efter IATA PI-953.' },
      { question: 'Hvilken bruttoavance opnås typisk på metal-EDC?', answer: 'Ved $29.99–$59.99 udsalgspris ligger bruttoavancen normalt på 65%–78%.' },
      { question: 'Hvordan låser jeg denne beregning til et officielt tilbud?', answer: 'Indtast din arbejds-mail i kortet og få svar inden for 12 timer.' }
    ]
  },
  no: {
    bcParent: 'Engrosmatrise',
    bcCurrent: 'Kostnadskalkulator',
    badge1: 'INTERAKTIV OEM-KALKULATOR',
    badge2: '140 Former · 3 Emballasjenivåer',
    kpis: [
      { label: 'Formkostnad', val: '$0.00 Verktøy' },
      { label: 'Lasertillegg', val: '+$0.15 / +$0.35+' },
      { label: 'Emballasje MOQ', val: '50 / 100 / 500+' },
      { label: 'Fabrikktid', val: '5–15 Virkedager' }
    ],
    showcasePill: 'LIVE PRISMOTOR',
    showcaseMeta: ['EXW Fuzhou-trinn', 'Bruttomargin', 'MOQ-sjekk'],
    geoTitle: 'Direkte svar: Beregne enhetspris, lasergravering og emballasje-MOQ',
    geoAnswer: 'Kalkulatoren kombinerer EXW-volumtrinn (50–199, 200–499, 500+ stk. med $0 formkostnad), 50W fiberlaser (+$0.15–$0.30/stk.) eller emalje (+$0.35–$0.60/stk., MOQ 100) og emballasje (vakuumpose $0 ved 50, EVA-etui +$0.75+ ved 100, gaveeske +$1.45+ ved 500) for direkte marginberegning.',
    wsBadge: 'SETT OPP PARTIKALKYLEN',
    wsTitle: 'Velg metallklasse, antall, laserlogo og emballasje',
    labels: {
      step1: '1. Velg maskinvareklasse på ferdig form',
      step2: '2. Ordreantall (stk. per SKU)',
      step3: '3. Permanent metallgravering (Ingen UV / silketrykk)',
      step4: '4. Fabrikkemballasje (3 nivåer)',
      step5: '5. Mål utsalgspris (USD / stk.)'
    },
    tierOptions: {
      promo: 'Inngang Promo Sink Spinner/Slider (FS-009 / FS-006 — $0.74–$0.92 base)',
      slider: 'Core Magnetslider (FS-001 / FS-047 — $3.18–$3.92 base)',
      cnc: 'CNC 304 Rustfritt Stål Mynt/Slider (FS-013 / FS-075 — $7.43–$9.15 base)',
      acoustic: 'Akustisk Stemmegaffel / Flerlags (FS-150 / FS-148 — $14.50–$17.80 base)'
    },
    brandOptions: {
      blank: 'Nøytral uten logo (+$0.00/stk. · MOQ 50)',
      laser: '50W MOPA Fiberlaser (+$0.20/stk. snitt · MOQ 100 · $50 Prøve)',
      enamel: 'Dyplaser + Pantone Emalje (+$0.45/stk. snitt · MOQ 100–200 · $80–$150)'
    },
    pkgOptions: {
      vacuum: 'Individuell vakuumpose ($0.00 inkl. · MOQ 50)',
      eva: 'Sort EVA-etui med glidelås (+$0.75/stk. · MOQ 100)',
      rigid: 'Egendefinert stiv gaveeske (+$1.45/stk. · MOQ 500)',
      tin: 'Matt metallboks med vindu MTO (+$1.15/stk. · MOQ 1 000+)'
    },
    summary: {
      badge: 'EXW FUZHOU ESTIMAT',
      moldPill: '$0.00 Formgebyr',
      unitCostLabel: 'Estimert fabrikkpris per stk. (EXW)',
      batchTotalLabel: 'Estimert totalordre (EXW)',
      tierBreakLabel: 'Anvendt volumtrinn',
      addonLabel: 'Tillegg Logo + Emballasje',
      marginLabel: 'Estimert bruttomargin vs. utsalgspris',
      sampleRefLabel: 'Referanse betalt prøve',
      leadTimeLabel: 'Produksjonstid i fabrikk',
      disclaimer: '* Betalte 1-stk prøver & internasjonal frakt (DHL/FedEx/UPS/DDP) betales av kjøper og refunderes ikke.',
      formSubtext: 'Låser dette scenariet inn i et formelt EXW- og frakttilbud.'
    },
    runtime: {
      bracket50: 'trinn 50–199',
      bracket200: 'trinn 200–499',
      bracket500: 'trinn 500+',
      grossWord: 'brutto',
      pcWord: 'stk',
      pcsWord: 'stk',
      moqNoticePrefix: '⚠ MOQ-varsel: ',
      requiresMoq: 'krever MOQ',
      tierLabels: { promo: 'Promo Sink', slider: 'Core Slider', cnc: 'CNC 304SS', acoustic: 'Stemmegaffel/Multi' },
      brandLabels: { blank: 'Nøytral', laser: '50W Laser', enamel: 'Dyplaser + Farge' },
      brandSamples: {
        blank: '1-stk pris + Frakt (ikke-refunderbar)',
        laser: '$50 Laserprøve + Frakt',
        enamel: '$80–$150 Emaljeprøve + Frakt'
      },
      brandDays: { blank: '5–7 virkedager (ekskl. frakt)', laser: '10–15 virkedager (ekskl. frakt)', enamel: '10–15 virkedager (ekskl. frakt)' },
      pkgLabels: { vacuum: 'Vakuumpose', eva: 'EVA-etui', rigid: 'Gaveeske', tin: 'Metallboks' }
    },
    faqBadge: 'FAQ KALKULATOR & TILBUD',
    faqTitle: 'Volumtrinn, MOQ-grenser og fraktspørsmål',
    appName: 'FidgetSupply Engros- & Logokalkulator',
    appDesc: 'Interaktiv EXW-kostnads-, 50W-laser-, emballasje-MOQ- og marginkalkulator for 140 former.',
    faqs: [
      { question: 'Finnes det skjulte form- eller oppsettgebyrer?', answer: 'Nei. Alle 140 former har $0.00 verktøygebyr og $0.00 serieoppsett for laser ved 100+ stk.; kun fysiske logoprøver koster $50 eller $80–$150.' },
      { question: 'Hvordan påvirker antall stykkprisen?', answer: 'Tre klare EXW-trinn: 50–199, 200–499 og 500+ stk.' },
      { question: 'Hvorfor krever egen logo minst 100 stk.?', answer: 'Nøytralt lager sendes fra 50 stk., mens laseroppspenning krever 100+ stk. per SKU.' },
      { question: 'Hvorfor er UV- og silketrykk utelatt?', answer: 'Trykkfarge flasser av glatt metall; permanent 50W laser eller emalje varer.' },
      { question: 'Hva er MOQ-forskjellen på de 3 emballasjene?', answer: 'Vakuumpose ($0) MOQ 50, EVA-etui (+$0.75+) MOQ 100, gaveeske (+$1.45+) MOQ 500, metallboks MOQ 1 000+.' },
      { question: 'Er fly- eller sjøfrakt inkludert i EXW-tallet?', answer: 'Nei, legg inn arbeids-e-post med postnummer under for eksakt DHL/FedEx/DDP-frakt.' },
      { question: 'Hvordan regner jeg inn prøvekostnader?', answer: '1-stk nøytral prøve koster stykkpris + frakt; logoprøve $50 eller $80–$150 + frakt.' },
      { question: 'Krever magnetordrer ekstra IATA PI-953-skjerming?', answer: 'Vi fôrer eksportkartonger med stålplater etter IATA PI-953.' },
      { question: 'Hvilken bruttomargin er vanlig i detaljhandelen?', answer: 'Ved $29.99–$59.99 utsalgspris ligger produktmarginen typisk på 65%–78%.' },
      { question: 'Hvordan låser jeg denne kalkulasjonen for tilbud?', answer: 'Fyll inn firma-e-post i sammendragskortet så svarer vi innen 12 timer.' }
    ]
  },
  fi: {
    bcParent: 'Tukkumatriisi',
    bcCurrent: 'Kustannuslaskuri',
    badge1: 'INTERAKTIIVINEN OEM-LASKURI',
    badge2: '140 Muottia · 3 Pakkaustasoa',
    kpis: [
      { label: 'Muottikulu', val: '$0.00 Muotti' },
      { label: 'Laserlisä', val: '+$0.15 / +$0.35+' },
      { label: 'Pakkaus MOQ', val: '50 / 100 / 500+' },
      { label: 'Tuotantoaika', val: '5–15 Arkipäivää' }
    ],
    showcasePill: 'REAALIAIKAINEN HINTALASKURI',
    showcaseMeta: ['EXW Fuzhou-portaat', 'Myyntikate', 'MOQ-tarkistus'],
    geoTitle: 'Suora vastaus: Tukkuyksikköhinnan, laserkaiverruksen & pakkaus-MOQ:n laskeminen',
    geoAnswer: 'Laskuri yhdistää EXW-määräportaat (50–199, 200–499, 500+ kpl $0 muottikululla), 50W kuitulaserin (+$0.15–$0.30/kpl) tai emalin (+$0.35–$0.60/kpl, MOQ 100) sekä pakkaukset (tyhjiöpussi $0 alkaen 50, EVA-kotelo +$0.75+ alkaen 100, lahjarasia +$1.45+ alkaen 500) katteen arvioimiseksi.',
    wsBadge: 'MUODOSTA ERÄARVIO',
    wsTitle: 'Valitse materiaalitaso, määrä, laserkaiverrus ja pakkaus',
    labels: {
      step1: '1. Valitse valmismuotin materiaaliluokka',
      step2: '2. Tilausmäärä (kpl per SKU)',
      step3: '3. Pysyvä metallimerkintä (Ei UV- / silkkipainoa)',
      step4: '4. Tehtaan pakkausvaihtoehto (3 tasoa)',
      step5: '5. Tavoitejälleenmyyntihinta (USD / kpl)'
    },
    tierOptions: {
      promo: 'Promo Sinkki Spinner/Slider (FS-009 / FS-006 — $0.74–$0.92 pohja)',
      slider: 'Core Magneettislider (FS-001 / FS-047 — $3.18–$3.92 pohja)',
      cnc: 'CNC 304 Ruostumaton Kolikko/Slider (FS-013 / FS-075 — $7.43–$9.15 pohja)',
      acoustic: 'Akustinen Äänirauta / Monikerros (FS-150 / FS-148 — $14.50–$17.80 pohja)'
    },
    brandOptions: {
      blank: 'Merkitsemätön varasto (+$0.00/kpl · MOQ 50)',
      laser: '50W MOPA Kuitulaser (+$0.20/kpl ka. · MOQ 100 · $50 Näyte)',
      enamel: 'Syvälaskenta + Pantone Emali (+$0.45/kpl ka. · MOQ 100–200 · $80–$150)'
    },
    pkgOptions: {
      vacuum: 'Yksittäinen tyhjiöpussi ($0.00 sisältyy · MOQ 50)',
      eva: 'Musta EVA-vetoketjukotelo (+$0.75/kpl · MOQ 100)',
      rigid: 'Mittatilausjäykkä lahjarasia (+$1.45/kpl · MOQ 500)',
      tin: 'Ikkunallinen matta peltirasia MTO (+$1.15/kpl · MOQ 1 000+)'
    },
    summary: {
      badge: 'EXW FUZHOU ARVIO',
      moldPill: '$0.00 Muotti',
      unitCostLabel: 'Arvioitu yksikkökustannus (EXW)',
      batchTotalLabel: 'Arvioitu erähinta yhteensä (EXW)',
      tierBreakLabel: 'Käytetty hintaporras',
      addonLabel: 'Lisä Logo + Pakkaus',
      marginLabel: 'Arvioitu bruttokate vs. SVH',
      sampleRefLabel: 'Maksullinen näyte (viite)',
      leadTimeLabel: 'Tehtaan tuotantoaika',
      disclaimer: '* Maksulliset 1 kpl näytteet ja kansainvälinen rahti (DHL/FedEx/UPS/DDP) jäävät ostajalle (ei palauteta).',
      formSubtext: 'Lukitsee täsmälleen tämän kokoonpanon viralliseksi EXW- ja rahtitarjoukseksi.'
    },
    runtime: {
      bracket50: 'porras 50–199',
      bracket200: 'porras 200–499',
      bracket500: 'porras 500+',
      grossWord: 'kate',
      pcWord: 'kpl',
      pcsWord: 'kpl',
      moqNoticePrefix: '⚠ MOQ-huomautus: ',
      requiresMoq: 'vaatii MOQ',
      tierLabels: { promo: 'Promo Sinkki', slider: 'Core Slider', cnc: 'CNC 304SS', acoustic: 'Äänirauta/Multi' },
      brandLabels: { blank: 'Merkitsemätön', laser: '50W Laser', enamel: 'Syvä + Väri' },
      brandSamples: {
        blank: '1 kpl hinta + Rahti (ei palauteta)',
        laser: '$50 Lasernäyte + Rahti',
        enamel: '$80–$150 Emalinäyte + Rahti'
      },
      brandDays: { blank: '5–7 arkipäivää (ei rahtia)', laser: '10–15 arkipäivää (ei rahtia)', enamel: '10–15 arkipäivää (ei rahtia)' },
      pkgLabels: { vacuum: 'Tyhjiöpussi', eva: 'EVA-kotelo', rigid: 'Lahjarasia', tin: 'Peltirasia' }
    },
    faqBadge: 'FAQ LASKURI & TARJOUS',
    faqTitle: 'Hintaportaat, MOQ-rajat ja rahtikysymykset',
    appName: 'FidgetSupply Tukku- & Logokustannuslaskuri',
    appDesc: 'Interaktiivinen EXW-kustannus-, 50W-laser-, pakkaus-MOQ- ja katelaskuri 140 muotille.',
    faqs: [
      { question: 'Sisältyykö laskurin ulkopuolelle piilotettuja muotti- tai laserasetuskuluja?', answer: 'Ei. Kaikissa 140 muotissa muottikulu on $0.00 ja sarjalaserin asetus $0.00 (100+ kpl); vain fyysiset logonäytteet maksavat $50 tai $80–$150.' },
      { question: 'Miten määrä vaikuttaa yksikköhintaan?', answer: 'Kolme läpinäkyvää EXW-porrasta: 50–199, 200–499 ja 500+ kpl.' },
      { question: 'Miksi logomerkintä edellyttää vähintään 100 kpl/SKU?', answer: 'Vakiovarasto toimitetaan 50 kpl alkaen, kun taas laserjigit vaativat vähintään 100 kpl.' },
      { question: 'Miksi UV- ja silkkipaino puuttuvat valikosta?', answer: 'Sileältä metallilta pintamuste irtoaa käytössä; pysyvä laser ja upotettu emali kestävät.' },
      { question: 'Miten 3 pakkaustason MOQ-rajat eroavat?', answer: 'Tyhjiöpussi ($0) MOQ 50, EVA-kotelo (+$0.75+) MOQ 100, lahjarasia (+$1.45+) MOQ 500, peltirasia MOQ 1 000+.' },
      { question: 'Sisältääkö EXW-arvio lento- tai merirahdin?', answer: 'Ei, jätä työsähköpostisi ja postinumerosi alle tarkan DHL/FedEx/DDP-rahtitarjouksen saamiseksi.' },
      { question: 'Miten näytekulut huomioidaan budjetissa?', answer: '1 kpl vakionäyte maksaa kappalehinnan + rahdin; logonäyte $50 tai $80–$150 + rahti.' },
      { question: 'Vaatiko magneettilähetys IATA PI-953 -suojauksen?', answer: 'Kyllä, vuoraamme vientilaatikot terässuojalevyillä IATA PI-953 mukaisesti.' },
      { question: 'Millainen myyntikate metallisilla EDC-malleilla on tyypillisesti?', answer: 'Vähittäishinnoilla $29.99–$59.99 bruttomyyntikate on yleensä 65%–78%.' },
      { question: 'Miten lukitsen tämän laskelman viralliseen tarjoukseen?', answer: 'Syötä työsähköpostisi yhteenvetolaatikkoon niin vastaamme 12 tunnissa.' }
    ]
  },
  pl: {
    bcParent: 'Matryca Hurtowa',
    bcCurrent: 'Kalkulator Kosztów',
    badge1: 'INTERAKTYWNY KALKULATOR OEM',
    badge2: '140 Form · 3 Poziomy Opakowań',
    kpis: [
      { label: 'Koszt formy', val: '$0.00 Forma' },
      { label: 'Dopłata laser', val: '+$0.15 / +$0.35+' },
      { label: 'Opakowania MOQ', val: '50 / 100 / 500+' },
      { label: 'Czas fabryczny', val: '5–15 Dni rob.' }
    ],
    showcasePill: 'KALKULATOR PARTII NA ŻYWO',
    showcaseMeta: ['Progi EXW Fuzhou', 'Marża brutto', 'Walidator MOQ'],
    geoTitle: 'Bezpośrednia odpowiedź: Kalkulacja kosztu hurtowego EXW, graweru i MOQ opakowań',
    geoAnswer: 'Kalkulator łączy progi ilościowe EXW (50–199, 200–499, 500+ szt. przy $0 za formę), laser 50W (+$0.15–$0.30/szt.) lub emalię (+$0.35–$0.60/szt., MOQ 100) oraz opakowania (worek $0 od 50, etui EVA +$0.75+ od 100, pudełko sztywne +$1.45+ od 500), obliczając koszt partii i marżę brutto.',
    wsBadge: 'SKONFIGURUJ KOSZTORYS PARTII',
    wsTitle: 'Dobierz klasę metalu, wolumen, grawer i opakowanie',
    labels: {
      step1: '1. Wybierz klasę materiału na gotowej formie',
      step2: '2. Wolumen zamówienia (szt. na SKU)',
      step3: '3. Trwałe znakowanie metalu (Bez UV / sitodruku)',
      step4: '4. Opcja opakowania fabrycznego',
      step5: '5. Docelowa cena detaliczna (MSRP USD / szt.)'
    },
    tierOptions: {
      promo: 'Promo Stop Cynku Spinner/Slider (FS-009 / FS-006 — $0.74–$0.92 baza)',
      slider: 'Core Magnetyczny Slider (FS-001 / FS-047 — $3.18–$3.92 baza)',
      cnc: 'Moneta / Slider CNC Stal 304 (FS-013 / FS-075 — $7.43–$9.15 baza)',
      acoustic: 'Kamerton Akustyczny / Wielowarstwowy (FS-150 / FS-148 — $14.50–$17.80 baza)'
    },
    brandOptions: {
      blank: 'Wersja czysta bez logo (+$0.00/szt. · MOQ 50)',
      laser: 'Grawer Laserowy 50W MOPA (+$0.20/szt. śr. · MOQ 100 · $50 Próbka)',
      enamel: 'Głęboki Laser + Emalia Pantone (+$0.45/szt. śr. · MOQ 100–200 · $80–$150)'
    },
    pkgOptions: {
      vacuum: 'Indywidualny woreczek próżniowy ($0.00 w cenie · MOQ 50)',
      eva: 'Czarne etui EVA z gotowej formy (+$0.75/szt. · MOQ 100)',
      rigid: 'Sztywne pudełko prezentowe z logo (+$1.45/szt. · MOQ 500)',
      tin: 'Matowa puszka z okienkiem MTO (+$1.15/szt. · MOQ 1000+)'
    },
    summary: {
      badge: 'SZACUNEK EXW FUZHOU',
      moldPill: '$0.00 Forma',
      unitCostLabel: 'Szacowany koszt jednostkowy (EXW)',
      batchTotalLabel: 'Szacowana wartość partii (EXW)',
      tierBreakLabel: 'Zastosowany próg cenowy',
      addonLabel: 'Dopłata Logo + Opakowanie',
      marginLabel: 'Szac. zysk / marża brutto vs MSRP',
      sampleRefLabel: 'Płatna próbka (odniesienie)',
      leadTimeLabel: 'Czas produkcji w fabryce',
      disclaimer: '* Płatne próbki 1 szt. i fracht międzynarodowy (DHL/FedEx/UPS/DDP) opłaca kupujący (bezzwrotne).',
      formSubtext: 'Zapisuje tę konfigurację do oficjalnej wyceny EXW i frachtu.'
    },
    runtime: {
      bracket50: 'próg 50–199',
      bracket200: 'próg 200–499',
      bracket500: 'próg 500+',
      grossWord: 'brutto',
      pcWord: 'szt.',
      pcsWord: 'szt.',
      moqNoticePrefix: '⚠ Uwaga MOQ: ',
      requiresMoq: 'wymaga MOQ',
      tierLabels: { promo: 'Promo Cynk', slider: 'Core Slider', cnc: 'CNC 304SS', acoustic: 'Kamerton/Multi' },
      brandLabels: { blank: 'Bez logo', laser: 'Laser 50W', enamel: 'Głęboki + Emalia' },
      brandSamples: {
        blank: 'Cena 1 szt. + Kurier kupującego (bezzwrotne)',
        laser: 'Próba laser $50 + Kurier',
        enamel: 'Próba emalia $80–$150 + Kurier'
      },
      brandDays: { blank: '5–7 dni rob. (bez transportu)', laser: '10–15 dni rob. (bez transportu)', enamel: '10–15 dni rob. (bez transportu)' },
      pkgLabels: { vacuum: 'Worek próżn.', eva: 'Etui EVA', rigid: 'Pudełko sztywne', tin: 'Puszka MTO' }
    },
    faqBadge: 'FAQ KALKULATOR & WYCENA',
    faqTitle: 'Progi cenowe, limity MOQ i transport',
    appName: 'Kalkulator Kosztów Hurtowych i Logo FidgetSupply',
    appDesc: 'Interaktywny kalkulator EXW, lasera 50W, MOQ opakowań i marży na 140 gotowych formach.',
    faqs: [
      { question: 'Czy poza kalkulatorem są ukryte koszty formy lub lasera?', answer: 'Nie. Dla wszystkich 140 form opłata za formę to $0.00, a ustawienie lasera seryjnego przy 100+ szt. również $0.00; płatne są jedynie fizyczne próbki logo ($50 lub $80–$150).' },
      { question: 'Jak ilość wpływa na cenę jednostkową?', answer: 'Trzy przejrzyste progi EXW: 50–199, 200–499 i 500+ szt.' },
      { question: 'Dlaczego własne logo wymaga minimum 100 sztuk?', answer: 'Towar bez logo wysyłamy od 50 szt.; oprzyrządowanie laserowe i pierwsza sztuka kontrolna wymagają serii 100+ na SKU.' },
      { question: 'Dlaczego w kalkulatorze nie ma nadruku UV i sitodruku?', answer: 'Na gładkim metalu farba szybko schodzi pod palcem; stosujemy wyłącznie trwały laser 50W lub wgłębną emalię.' },
      { question: 'Czym różnią się MOQ 3 rodzajów opakowań?', answer: 'Worek próżniowy ($0) MOQ 50, etui EVA (+$0.75+) MOQ 100, pudełko (+$1.45+) MOQ 500, puszka MOQ 1000+.' },
      { question: 'Czy wyliczenie EXW zawiera fracht lotniczy lub morski?', answer: 'Nie. Podaj poniżej e-mail służbowy z kodem pocztowym, aby otrzymać dokładną stawkę DHL/FedEx/DDP.' },
      { question: 'Jak ująć próbki w budżecie startowym?', answer: 'Próbka 1 szt. bez logo kosztuje cenę sztuki + kurier; próbka z logo to $50 lub $80–$150 + kurier.' },
      { question: 'Czy zamówienia z magnesami wymagają ekranowania IATA PI-953?', answer: 'Tak, wykładamy kartony stalowymi osłonami magnetycznymi zgodnie z IATA PI-953.' },
      { question: 'Jaka marża brutto jest realna w sprzedaży detalicznej EDC?', answer: 'Przy cenie detalicznej $29.99–$59.99 marża brutto produktu wynosi zwykle 65%–78%.' },
      { question: 'Jak zatwierdzić ten wariant do oficjalnej oferty proforma?', answer: 'Wpisz e-mail firmowy w panelu podsumowania, a odpowiemy w ciągu 12 godzin.' }
    ]
  },
  cs: {
    bcParent: 'Velkoobchodní Matice',
    bcCurrent: 'Kalkulačka Nákladů',
    badge1: 'INTERAKTIVNÍ OEM KALKULAČKA',
    badge2: '140 Forem · 3 Stupně Balení',
    kpis: [
      { label: 'Náklady na formu', val: '$0.00 Forma' },
      { label: 'Příplatek za laser', val: '+$0.15 / +$0.35+' },
      { label: 'Stupně balení MOQ', val: '50 / 100 / 500+' },
      { label: 'Výrobní doba', val: '5–15 Prac. dnů' }
    ],
    showcasePill: 'ŽIVÁ CENOVÁ KALKULAČKA',
    showcaseMeta: ['EXW stupně Fuzhou', 'Hrubá marže', 'Kontrola MOQ'],
    geoTitle: 'Přímá odpověď: Výpočet velkoobchodní ceny EXW, laserového loga a MOQ balení',
    geoAnswer: 'Interaktivní kalkulačka spojuje reálné objemové stupně EXW (50–199, 200–499 a 500+ ks s $0 poplatkem za formu), trvalý 50W vláknový laser (+$0.15–$0.30/ks) či hluboký laser se smaltem (+$0.35–$0.60/ks, MOQ 100) a 3 úrovně balení (vakuový sáček $0 od 50 ks, EVA pouzdro +$0.75+ od 100 ks, dárkový box +$1.45+ od 500 ks) pro okamžitý výpočet marže.',
    wsBadge: 'SESTAVTE SI ODHAD SÉRIE',
    wsTitle: 'Nastavte třídu kovu, množství, laserové logo a balení',
    labels: {
      step1: '1. Vyberte třídu materiálu na hotové formě',
      step2: '2. Objednané množství (ks na SKU)',
      step3: '3. Trvalé značení kovu (Bez UV / sítotisku)',
      step4: '4. Tovární úroveň balení',
      step5: '5. Cílová maloobchodní cena (DMOC USD / ks)'
    },
    tierOptions: {
      promo: 'Základní Promo Zinek Spinner/Slider (FS-009 / FS-006 — $0.74–$0.92 základ)',
      slider: 'Core Magnetický Slider (FS-001 / FS-047 — $3.18–$3.92 základ)',
      cnc: 'CNC 304 Nerezová Mince / Slider (FS-013 / FS-075 — $7.43–$9.15 základ)',
      acoustic: 'Akustická Ladička / Vícevrstvý (FS-150 / FS-148 — $14.50–$17.80 základ)'
    },
    brandOptions: {
      blank: 'Čisté zboží bez loga (+$0.00/ks · MOQ 50)',
      laser: '50W MOPA Vláknový laser (+$0.20/ks prům. · MOQ 100 · $50 Vzorek)',
      enamel: 'Hluboký laser + Pantone Smalt (+$0.45/ks prům. · MOQ 100–200 · $80–$150)'
    },
    pkgOptions: {
      vacuum: 'Samostatný vakuový antioxidační sáček ($0.00 zahrnuto · MOQ 50)',
      eva: 'Černé zipové EVA pouzdro z hotové formy (+$0.75/ks · MOQ 100)',
      rigid: 'Zakázkový pevný dárkový box (+$1.45/ks · MOQ 500)',
      tin: 'Matná plechová dóza s okénkem MTO (+$1.15/ks · MOQ 1 000+)'
    },
    summary: {
      badge: 'ODHAD EXW FUZHOU',
      moldPill: '$0.00 Forma',
      unitCostLabel: 'Odhadovaná tovární cena / ks (EXW)',
      batchTotalLabel: 'Odhadovaná cena série (EXW)',
      tierBreakLabel: 'Použité množstevní pásmo',
      addonLabel: 'Příplatek Logo + Balení',
      marginLabel: 'Odhad hrubého zisku / marže vs DMOC',
      sampleRefLabel: 'Reference placeného vzorku',
      leadTimeLabel: 'Tovární doba výroby',
      disclaimer: '* Placené 1 ks čisté vzorky a mezinárodní přepravu (DHL/FedEx/UPS/DDP) hradí kupující (nevratné). Rychlost dodání určuje dopravce a celnice.',
      formSubtext: 'Uzamkne přesně tuto konfiguraci pro oficiální EXW a přepravní nabídku.'
    },
    runtime: {
      bracket50: 'pásmo 50–199',
      bracket200: 'pásmo 200–499',
      bracket500: 'pásmo 500+',
      grossWord: 'hrubý zisk',
      pcWord: 'ks',
      pcsWord: 'ks',
      moqNoticePrefix: '⚠ Upozornění MOQ: ',
      requiresMoq: 'vyžaduje MOQ',
      tierLabels: { promo: 'Promo Zinek', slider: 'Core Slider', cnc: 'CNC 304SS', acoustic: 'Ladička/Multi' },
      brandLabels: { blank: 'Bez loga', laser: '50W Laser', enamel: 'Hluboký + Smalt' },
      brandSamples: {
        blank: 'Cena 1 ks + Kurýr kupujícího (nevratné)',
        laser: '$50 Laser vzorek + Kurýr',
        enamel: '$80–$150 Smalt vzorek + Kurýr'
      },
      brandDays: { blank: '5–7 prac. dnů (bez dopravy)', laser: '10–15 prac. dnů (bez dopravy)', enamel: '10–15 prac. dnů (bez dopravy)' },
      pkgLabels: { vacuum: 'Vakuový sáček', eva: 'EVA pouzdro', rigid: 'Dárkový box', tin: 'Plechová dóza' }
    },
    faqBadge: 'FAQ KALKULAČKA & NABÍDKA',
    faqTitle: 'Cenová pásma, MOQ limity a doprava',
    appName: 'FidgetSupply Velkoobchodní & Logo Kalkulačka Nákladů',
    appDesc: 'Interaktivní odhad EXW ceny, 50W laseru, MOQ balení a hrubé marže na 140 hotových formách.',
    faqs: [
      { question: 'Jsou zde nějaké skryté poplatky za formu nebo nastavení laseru?', answer: 'Ne. Všech 140 forem má $0.00 za formu a při 100+ ks nulové nastavení sériového laseru; zpoplatněny jsou pouze fyzické vzorky s logem ($50 nebo $80–$150).' },
      { question: 'Jak množství ovlivňuje cenu za kus?', answer: 'Každý SKU používá tři přehledná pásma EXW: 50–199, 200–499 a 500+ ks.' },
      { question: 'Proč vlastní logo vyžaduje alespoň 100 ks na SKU?', answer: 'Čisté zboží posíláme od 50 ks; přípravky pro 50W laser a kontrola prvního kusu vyžadují sérii 100+ ks.' },
      { question: 'Proč kalkulačka nenabízí UV potisk ani sítotisk?', answer: 'Na hladkém kovu se povrchové barvy pod prstem brzy loupou; používáme jen trvalý 50W laser nebo smalt v prohlubni.' },
      { question: 'Jak se liší MOQ u 3 stupňů balení?', answer: 'Vakuový sáček ($0) MOQ 50 ks, EVA pouzdro (+$0.75+) MOQ 100 ks, pevný box (+$1.45+) MOQ 500 ks, plechová dóza MOQ 1 000+ ks.' },
      { question: 'Zahrnuje tento odhad leteckou nebo námořní přepravu?', answer: 'Ne, počítá tovární náklady EXW Fuzhou. Odešlete pracovní e-mail níže i s PSČ pro přesnou kalkulaci DHL/FedEx/DDP.' },
      { question: 'Jak započítat náklady na vzorky do startovního rozpočtu?', answer: 'Čistý 1 ks vzorek stojí cenu kusu + kurýra (nevratné); vzorek s logem stojí $50 nebo $80–$150 + kurýra.' },
      { question: 'Vyžadují magnetické objednávky speciální stínění IATA PI-953?', answer: 'Ano, exportní kartony vystýláme ocelovými stínicími plechy v souladu s IATA PI-953.' },
      { question: 'Jaká maloobchodní hrubá marže je reálná u kovového EDC?', answer: 'Při koncové ceně $29.99–$59.99 dosahuje hrubá produktová marže obvykle 65%–78%.' },
      { question: 'Jak si tuto konfiguraci zajistím pro oficiální proformu?', answer: 'Zadejte firemní e-mail do souhrnného bloku vpravo a ozveme se do 12 hodin s nabídkou.' }
    ]
  },
  ru: {
    bcParent: 'Матрица опта',
    bcCurrent: 'Калькулятор стоимости',
    badge1: 'ИНТЕРАКТИВНЫЙ ОЕМ-КАЛЬКУЛЯТОР',
    badge2: '140 форм · 3 типа упаковки',
    kpis: [
      { label: 'Плата за форму', val: '$0.00 Оснастка' },
      { label: 'Наценка лазера', val: '+$0.15 / +$0.35+' },
      { label: 'Упаковка MOQ', val: '50 / 100 / 500+' },
      { label: 'Срок цеха', val: '5–15 Раб. дней' }
    ],
    showcasePill: 'РАСЧЕТ ПАРТИИ ОНЛАЙН',
    showcaseMeta: ['Уровни EXW Фучжоу', 'Валовая маржа', 'Проверка MOQ'],
    geoTitle: 'Прямой ответ: Расчет оптовой цены EXW, лазерного логотипа и MOQ упаковки',
    geoAnswer: 'Калькулятор объединяет оптовые пороги EXW (50–199, 200–499 и 500+ шт. при $0 за форму), лазер 50 Вт (+$0.15–$0.30/шт.) или эмаль (+$0.35–$0.60/шт., MOQ 100) и упаковку (вакуум-пакет $0 от 50 шт., кейс EVA +$0.75+ от 100 шт., коробка +$1.45+ от 500 шт.) для расчета маржи.',
    wsBadge: 'СОБЕРИТЕ СМЕТУ ПАРТИИ',
    wsTitle: 'Выберите класс металла, объем, лазерное лого и упаковку',
    labels: {
      step1: '1. Выберите класс изделия на готовой форме',
      step2: '2. Количество заказа (шт. на SKU)',
      step3: '3. Стойкое брендирование металла (Без УФ/шелкографии)',
      step4: '4. Вариант фабричной упаковки',
      step5: '5. Целевая розничная цена (MSRP USD / шт.)'
    },
    tierOptions: {
      promo: 'Промо Цинк Спиннер/Слайдер (FS-009 / FS-006 — база $0.74–$0.92)',
      slider: 'Базовый Магнитный Слайдер (FS-001 / FS-047 — база $3.18–$3.92)',
      cnc: 'Монета / Слайдер CNC Сталь 304 (FS-013 / FS-075 — база $7.43–$9.15)',
      acoustic: 'Акустический Камертон / Многослойный (FS-150 / FS-148 — база $14.50–$17.80)'
    },
    brandOptions: {
      blank: 'Без логотипа (+$0.00/шт. · MOQ 50)',
      laser: 'Волоконный лазер 50 Вт MOPA (+$0.20/шт. ср. · MOQ 100 · $50 Образец)',
      enamel: 'Глубокий лазер + Эмаль Pantone (+$0.45/шт. ср. · MOQ 100–200 · $80–$150)'
    },
    pkgOptions: {
      vacuum: 'Индивидуальный вакуум-пакет ($0.00 включено · MOQ 50)',
      eva: 'Черный кейс EVA на молнии (+$0.75/шт. · MOQ 100)',
      rigid: 'Индивидуальная жесткая коробка (+$1.45/шт. · MOQ 500)',
      tin: 'Матовая металлическая банка MTO (+$1.15/шт. · MOQ 1000+)'
    },
    summary: {
      badge: 'СМЕТА EXW ФУЧЖОУ',
      moldPill: '$0.00 Форма',
      unitCostLabel: 'Оценка цены за единицу (EXW)',
      batchTotalLabel: 'Итоговая сумма партии (EXW)',
      tierBreakLabel: 'Объемный порог',
      addonLabel: 'Надбавка Лого + Упаковка',
      marginLabel: 'Валовая прибыль / маржа от MSRP',
      sampleRefLabel: 'Платный образец (ориентир)',
      leadTimeLabel: 'Срок изготовления в цехе',
      disclaimer: '* Платные образцы 1 шт. и международная доставка (DHL/FedEx/UPS/DDP) оплачиваются покупателем и не возвращаются.',
      formSubtext: 'Фиксирует именно эту конфигурацию для официального расчета EXW и доставки.'
    },
    runtime: {
      bracket50: 'порог 50–199',
      bracket200: 'порог 200–499',
      bracket500: 'порог 500+',
      grossWord: 'валовая',
      pcWord: 'шт.',
      pcsWord: 'шт.',
      moqNoticePrefix: '⚠ Уведомление MOQ: ',
      requiresMoq: 'требует MOQ',
      tierLabels: { promo: 'Промо Цинк', slider: 'Магнитный слайдер', cnc: 'CNC 304SS', acoustic: 'Камертон/Мульти' },
      brandLabels: { blank: 'Без лого', laser: 'Лазер 50 Вт', enamel: 'Глубокий + Эмаль' },
      brandSamples: {
        blank: 'Цена 1 шт. + Курьер покупателя (без возврата)',
        laser: 'Образец лазер $50 + Курьер',
        enamel: 'Образец эмаль $80–$150 + Курьер'
      },
      brandDays: { blank: '5–7 раб. дней (без доставки)', laser: '10–15 раб. дней (без доставки)', enamel: '10–15 раб. дней (без доставки)' },
      pkgLabels: { vacuum: 'Вакуум-пакет', eva: 'Кейс EVA', rigid: 'Жесткая коробка', tin: 'Жесть MTO' }
    },
    faqBadge: 'FAQ КАЛЬКУЛЯТОР И РАСЧЕТ',
    faqTitle: 'Объемные пороги, лимиты MOQ и доставка',
    appName: 'Калькулятор стоимости опта и логотипа FidgetSupply',
    appDesc: 'Интерактивный расчет себестоимости EXW, лазера 50 Вт, MOQ упаковки и валовой маржи на 140 формах.',
    faqs: [
      { question: 'Есть ли скрытые сборы за формы или настройку лазера?', answer: 'Нет. Все 140 форм имеют $0.00 за оснастку и $0.00 за настройку серийного лазера при 100+ шт.; оплачиваются только физические образцы с лого ($50 или $80–$150).' },
      { question: 'Как количество влияет на цену единицы?', answer: 'Действуют три понятных уровня EXW: 50–199, 200–499 и 500+ штук.' },
      { question: 'Почему нанесение логотипа требует от 100 шт. на артикул?', answer: 'Товар без лого отгружается от 50 шт., тогда как оснастка под 50W лазер рассчитана минимум на 100 шт.' },
      { question: 'Почему здесь нет УФ-печати и шелкографии?', answer: 'На гладком металле краска быстро слезает; мы ставим только вечный 50W лазер или углубленную эмаль.' },
      { question: 'В чем разница MOQ у трех уровней упаковки?', answer: 'Вакуум-пакет ($0) MOQ 50, кейс EVA (+$0.75+) MOQ 100, коробка (+$1.45+) MOQ 500, жестяная банка MOQ 1000+.' },
      { question: 'Включена ли в EXW авиа- или морская доставка?', answer: 'Нет, указана цена на фабрике в Фучжоу. Укажите почту и индекс в форме для точной ставки DHL/FedEx/DDP.' },
      { question: 'Как заложить стоимость образцов в бюджет?', answer: '1 шт. без лого стоит цену изделия + доставку; образец с лого стоит $50 или $80–$150 + курьер.' },
      { question: 'Нужно ли экранирование IATA PI-953 для магнитных грузов?', answer: 'Да, мы выстилаем мастер-короба стальными экранами по нормам IATA PI-953.' },
      { question: 'Какая валовая маржа реальна в рознице для металлических EDC?', answer: 'При розничной цене $29.99–$59.99 валовая маржа товара обычно составляет 65%–78%.' },
      { question: 'Как зафиксировать этот расчет для выставления счета?', answer: 'Введите рабочий email в правой карточке, и мы ответим в течение 12 часов.' }
    ]
  },
  ja: {
    bcParent: '卸売マトリクス',
    bcCurrent: 'コスト試算ツール',
    badge1: '対話型OEM見積シミュレーター',
    badge2: '140金型 · 3段階パッケージ対応',
    kpis: [
      { label: '新規金型費', val: '$0.00 無料' },
      { label: 'レーザー追加費', val: '+$0.15 / +$0.35+' },
      { label: '包装ロット基準', val: '50 / 100 / 500+' },
      { label: '工場製作期間', val: '5〜15営業日' }
    ],
    showcasePill: 'リアルタイム単価試算エンジン',
    showcaseMeta: ['福州EXW単価', '粗利率シミュレーション', 'MOQ自動チェック'],
    geoTitle: '結論：卸売単価・レーザー刻印・3段階包装MOQを即時計算する方法',
    geoAnswer: 'この対話型ツールでは、工場EXW数量帯（50–199／200–499／500個〜、金型代$0）、50Wファイバーレーザー（+$0.15–$0.30/個）や凹部エナメル（+$0.35–$0.60/個、MOQ 100）、包装3段階（真空袋$0・EVA+$0.75〜・化粧箱+$1.45〜）を組み合わせて総原価と想定粗利率を算出します。',
    wsBadge: 'バッチ見積もりを構成',
    wsTitle: 'グレード・数量・レーザー刻印・パッケージを選択してください',
    labels: {
      step1: '1. 既存金型ハードウェアグレードを選択',
      step2: '2. 発注数量（1SKUあたり個数）',
      step3: '3. 恒久メタル名入れ方式（UV・シルク印刷不可）',
      step4: '4. 工場3段階パッケージオプション',
      step5: '5. 想定小売販売価格（MSRP USD / 個）'
    },
    tierOptions: {
      promo: 'エントリー販促亜鉛スピナー/スライダー（FS-009 / FS-006 — $0.74–$0.92基準）',
      slider: '定番シグネチャー磁気スライダー（FS-001 / FS-047 — $3.18–$3.92基準）',
      cnc: 'CNC 304ステンレスコイン/スライダー（FS-013 / FS-075 — $7.43–$9.15基準）',
      acoustic: '音響音叉/多層フラッグシップ（FS-150 / FS-148 — $14.50–$17.80基準）'
    },
    brandOptions: {
      blank: '無地（ロゴ刻印なし · +$0.00/個 · MOQ 50）',
      laser: '50W MOPAファイバーレーザー刻印（平均+$0.20/個 · MOQ 100 · 試作$50）',
      enamel: '深彫りレーザー＋Pantoneエナメル色入れ（平均+$0.45/個 · MOQ 100–200 · $80–$150）'
    },
    pkgOptions: {
      vacuum: '個別防錆真空パック（$0.00 標準込み · MOQ 50）',
      eva: '既存型ブラックEVAジッパーケース（+$0.75/個 · MOQ 100）',
      rigid: 'カスタムハードギフト化粧箱（+$1.45/個 · MOQ 500）',
      tin: '受注生産ウィンドウ金属缶 MTO（+$1.15/個 · MOQ 1,000+）'
    },
    summary: {
      badge: '福州EXW工場試算',
      moldPill: '$0.00 金型代',
      unitCostLabel: '想定工場出荷単価（EXW）',
      batchTotalLabel: '想定バッチ合計金額（EXW）',
      tierBreakLabel: '適用数量単価帯',
      addonLabel: '名入れ＋包装加算額',
      marginLabel: '想定粗利額／粗利率（対MSRP）',
      sampleRefLabel: '有償サンプル参考費用',
      leadTimeLabel: '工場内製造リードタイム',
      disclaimer: '※有償1個サンプルおよび国際宅配送料（DHL/FedEx/UPS/DDP）は買い手負担・返金不可です。配送日数は運送会社・通関状況に依存します。',
      formSubtext: '上記の試算条件そのままを福州EXW・送料見積もりに引き継ぎます。'
    },
    runtime: {
      bracket50: '50–199個価格帯',
      bracket200: '200–499個価格帯',
      bracket500: '500個以上価格帯',
      grossWord: '粗利',
      pcWord: '個',
      pcsWord: '個',
      moqNoticePrefix: '⚠ MOQ注意: ',
      requiresMoq: '最小ロット条件:',
      tierLabels: { promo: '販促亜鉛グレード', slider: '定番磁気スライダー', cnc: 'CNC 304SS', acoustic: '音叉/多層' },
      brandLabels: { blank: '無地', laser: '50Wレーザー', enamel: '深彫り＋色入れ' },
      brandSamples: {
        blank: '1個単価＋国際送料（返金不可）',
        laser: 'レーザー試作$50＋送料',
        enamel: '色入れ試作$80–$150＋送料'
      },
      brandDays: { blank: '5〜7営業日（輸送日数別）', laser: '10〜15営業日（輸送日数別）', enamel: '10〜15営業日（輸送日数別）' },
      pkgLabels: { vacuum: '真空パック', eva: 'EVAケース', rigid: 'ハード化粧箱', tin: '金属缶MTO' }
    },
    faqBadge: '試算ツール＆お見積りFAQ',
    faqTitle: '価格帯・MOQ条件・国際輸送に関する質問',
    appName: 'FidgetSupply 卸売・レーザー刻印・包装コスト計算ツール',
    appDesc: '既存140金型向けのEXW単価、50Wレーザー名入れ、包装MOQ、小売粗利率をリアルタイムに試算。',
    faqs: [
      { question: 'この計算結果以外に隠れた金型費や版代はかかりますか？', answer: 'いいえ。140金型すべて金型代$0.00、100個以上の量産レーザー設定費$0.00です。有償なのは事前のロゴ入り試作サンプル（$50または$80–$150）のみです。' },
      { question: '数量によってEXW単価はどう変わりますか？', answer: '全SKUが50–199個、200–499個、500個以上の3段階EXW価格表を採用しています。1,000個以上は個別にお見積りします。' },
      { question: 'なぜ名入れロゴには最低100個が必要なのですか？', answer: '無地在庫は50個から出荷できますが、50Wレーザーは治具セッティングと初品検査のため1SKU 100個以上を最小ロットとしています。' },
      { question: 'なぜUV印刷やシルク印刷が選択肢にないのですか？', answer: '滑らかな金属面ではインクが指の摩擦で剥がれやすいため、金属自体を彫る50Wレーザーか凹部エナメル着色のみを採用しています。' },
      { question: '3段階パッケージの最小ロット（MOQ）の違いは何ですか？', answer: '防錆真空袋（$0）は50個〜、黒EVAケース（+$0.75〜）は100個〜、貼り化粧箱（+$1.45〜）は500個〜、金属缶は1,000個〜です。' },
      { question: '表示されるEXW概算に国際航空便や海上運賃は含まれますか？', answer: 'いいえ、福州工場EXW製造コストです。下のフォームにメールアドレスをご入力の上、郵便番号をお知らせいただければ正確な運賃をご案内します。' },
      { question: '有償サンプル費はどのように予算化すべきですか？', answer: '1個無地サンプルは商品単価＋国際送料（返金不可）、名入れ試作は$50または$80–$150＋送料です。' },
      { question: '磁石内蔵製品の輸送にはIATA PI-953対策費用がかかりますか？', answer: '福州拠点にて輸出外箱へ磁気遮蔽用スチール板を実装し、IATA PI-953基準に適合させて発送します。' },
      { question: '金属EDCスライダーの小売粗利率はどの程度見込めますか？', answer: 'CNC 304ステンレスや音叉モデルを$29.99–$59.99で販売する場合、広告費・送料前で通常65%〜78%の製品粗利率が見込めます。' },
      { question: 'この計算結果のまま正式な見積書を請求するには？', answer: '右側のサマリーカード内のフォームに法人メールアドレスをご入力いただければ、12時間以内に該当SKUシートをお送りします。' }
    ]
  },
  ko: {
    bcParent: '도매 매트릭스',
    bcCurrent: '단가 계산기',
    badge1: '실시간 OEM 견적 계산기',
    badge2: '140 금형 · 3단계 패키징',
    kpis: [
      { label: '신규 금형비', val: '$0.00 무료' },
      { label: '레이저 추가비', val: '+$0.15 / +$0.35+' },
      { label: '패키징 MOQ', val: '50 / 100 / 500+' },
      { label: '공장 리드타임', val: '5–15 영업일' }
    ],
    showcasePill: '실시간 배치 가격 엔진',
    showcaseMeta: ['푸저우 EXW 구간', '매출총이익 체크', 'MOQ 자동 검증'],
    geoTitle: '핵심 답변: 도매 단가 · 로고 각인 · 패키징 MOQ 실시간 산출 방법',
    geoAnswer: '본 계산기는 공장 EXW 수량 구간(50–199, 200–499, 500개 이상, 금형비 $0), 영구 50W 파이버 레이저(+$0.15–$0.30/개) 또는 음각 에나멜(+$0.35–$0.60/개, MOQ 100) 및 3단계 패키징(진공팩 $0 / EVA +$0.75+ / 하드박스 +$1.45+)을 결합해 총생산원가와 예상 마진을 계산합니다.',
    wsBadge: '발주 예상 비용 구성하기',
    wsTitle: '제품 등급, 발주 수량, 레이저 각인 및 패키징 선택',
    labels: {
      step1: '1. 기성 금형 하드웨어 등급 선택',
      step2: '2. 발주 수량 (SKU당 개당 수량)',
      step3: '3. 영구 메탈 로고 각인 방식 (UV·실크인쇄 제외)',
      step4: '4. 공장 3단계 패키징 옵션',
      step5: '5. 목표 소비자가 (MSRP USD / 개)'
    },
    tierOptions: {
      promo: '엔트리 판촉 아연 스피너/슬라이더 (FS-009 / FS-006 — $0.74–$0.92 기준)',
      slider: '시그니처 자석 슬라이더 (FS-001 / FS-047 — $3.18–$3.92 기준)',
      cnc: 'CNC 304 스틸 코인/슬라이더 (FS-013 / FS-075 — $7.43–$9.15 기준)',
      acoustic: '어쿠스틱 튜닝포크/다층 모델 (FS-150 / FS-148 — $14.50–$17.80 기준)'
    },
    brandOptions: {
      blank: '무지 재고 로고 없음 (+$0.00/개 · MOQ 50)',
      laser: '50W MOPA 파이버 레이저 각인 (평균 +$0.20/개 · MOQ 100 · $50 샘플)',
      enamel: '깊은 레이저 + 팬톤 에나멜 채색 (평균 +$0.45/개 · MOQ 100–200 · $80–$150)'
    },
    pkgOptions: {
      vacuum: '개별 산화방지 진공 파우치 ($0.00 기본 포함 · MOQ 50)',
      eva: '기성형 블랙 EVA 지퍼 케이스 (+$0.75/개 · MOQ 100)',
      rigid: '맞춤형 고급 하드 선물 박스 (+$1.45/개 · MOQ 500)',
      tin: '주문제작 윈도우 무광 틴케이스 MTO (+$1.15/개 · MOQ 1,000+)'
    },
    summary: {
      badge: '푸저우 EXW 견적 산출',
      moldPill: '$0.00 금형비',
      unitCostLabel: '예상 공장 출고 단가 (EXW)',
      batchTotalLabel: '예상 총 발주 금액 (EXW)',
      tierBreakLabel: '적용 단가 구간',
      addonLabel: '로고 + 패키징 추가액',
      marginLabel: '예상 총이익 / 마진율 (대 MSRP)',
      sampleRefLabel: '유상 샘플 참고 비용',
      leadTimeLabel: '공장 제작 리드타임',
      disclaimer: '* 유상 1개 샘플 및 국제 특송비(DHL/FedEx/UPS/DDP)는 구매자 부담이며 환불되지 않습니다. 배송 소요일은 운송사 및 통관에 따릅니다.',
      formSubtext: '위 설정 그대로 공식 EXW 및 국제 운임 견적으로 전달합니다.'
    },
    runtime: {
      bracket50: '50–199개 구간',
      bracket200: '200–499개 구간',
      bracket500: '500개 이상 구간',
      grossWord: '총이익',
      pcWord: '개',
      pcsWord: '개',
      moqNoticePrefix: '⚠ MOQ 안내: ',
      requiresMoq: '최소 수량 조건:',
      tierLabels: { promo: '판촉 아연 합금', slider: '주력 자석 슬라이더', cnc: 'CNC 304SS', acoustic: '튜닝포크/다층' },
      brandLabels: { blank: '무지', laser: '50W 레이저', enamel: '깊은 각인+채색' },
      brandSamples: {
        blank: '1개 단가 + 국제운임(환불 불가)',
        laser: '레이저 시제품 $50 + 운임',
        enamel: '컬러 채색 시제품 $80–$150 + 운임'
      },
      brandDays: { blank: '5–7영업일 (운송 별도)', laser: '10–15영업일 (운송 별도)', enamel: '10–15영업일 (운송 별도)' },
      pkgLabels: { vacuum: '진공 파우치', eva: 'EVA 케이스', rigid: '하드박스', tin: '틴케이스 MTO' }
    },
    faqBadge: '계산기 & 견적 FAQ',
    faqTitle: '수량 구간, MOQ 기준 및 국제 배송 질문',
    appName: 'FidgetSupply 도매 · 로고 각인 · 패키징 원가 계산기',
    appDesc: '140종 기성 금형 EXW 단가, 50W 레이저 각인, 패키징 MOQ 및 소매 마진 실시간 계산기.',
    faqs: [
      { question: '계산기에 빠진 숨겨진 금형비나 레이저 세팅비가 있나요?', answer: '아니요. 140종 전 모델 신규 금형비는 $0.00이며, MOQ 100개 이상 대량 생산 시 레이저 세팅비도 $0.00입니다. 사전 제작 커스텀 샘플만 유상($50 또는 $80–$150)입니다.' },
      { question: '주문 수량에 따라 단가는 어떻게 변하나요?', answer: '모든 SKU가 50–199개, 200–499개, 500개+ 3단계 투명 EXW 구간을 따르며 1,000개 이상은 별도 공장가를 제공합니다.' },
      { question: '왜 커스텀 로고 각인은 SKU당 100개 이상부터인가요?', answer: '무지 재고는 50개부터 출고되지만, 50W 레이저 지그 정렬 및 초도품 검수 공정은 100개 이상 생산에 맞춰져 있습니다.' },
      { question: 'UV 인쇄나 실크스크린이 옵션에 없는 이유는 무엇인가요?', answer: '매끄러운 금속 표면에서는 손마찰에 잉크가 쉽게 벗겨지므로 영구 50W 레이저와 음각 에나멜 채색만 취급합니다.' },
      { question: '3가지 패키징 옵션별 MOQ 차이는 어떻게 되나요?', answer: '진공 파우치($0) 50개, 블랙 EVA 케이스(+$0.75+) 100개, 하드 선물박스(+$1.45+) 500개, 틴케이스 1,000개 이상입니다.' },
      { question: 'EXW 예상 금액에 국제 항공·해상 운임이 포함되나요?', answer: '아니요, 푸저우 공장 EXW 원가입니다. 우측 폼에 업무용 이메일과 우편번호를 남기시면 DHL/FedEx/DDP 정확한 운임을 안내해 드립니다.' },
      { question: '초기 예산에 샘플 비용을 어떻게 반영해야 하나요?', answer: '1개 무지 샘플은 단가+국제특송비(환불 불가), 로고 시제품은 $50 또는 $80–$150+운임이 청구됩니다.' },
      { question: '자석 제품 항공 발송 시 IATA PI-953 차폐 작업이 들어가나요?', answer: '네, 푸저우 허브에서 마스터 박스 내부에 철제 자기 차폐판을 덧대어 규정을 준수해 발송합니다.' },
      { question: '메탈 EDC 슬라이더의 현실적인 소매 마진율은 얼마인가요?', answer: 'CNC 304 스틸이나 튜닝포크 모델을 $29.99–$59.99에 판매 시 광고·물류비 제외 약 65%–78%의 제품 매출총이익이 발생합니다.' },
      { question: '계산한 조건 그대로 공식 견적서를 받으려면 어떻게 하나요?', answer: '요약 카드 안의 이메일 입력란에 회사 메일을 넣으시면 12시간 이내에 매칭 SKU 견적서를 보내드립니다.' }
    ]
  },
  id: {
    bcParent: 'Matriks Grosir',
    bcCurrent: 'Kalkulator Biaya',
    badge1: 'ESTIMATOR OEM INTERAKTIF',
    badge2: '140 Cetakan · 3 Tingkat Kemasan',
    kpis: [
      { label: 'Biaya Cetakan', val: '$0.00 Cetakan' },
      { label: 'Tambahan Laser', val: '+$0.15 / +$0.35+' },
      { label: 'MOQ Kemasan', val: '50 / 100 / 500+' },
      { label: 'Waktu Produksi', val: '5–15 Hari Kerja' }
    ],
    showcasePill: 'MESIN HARGA BATCH LANGSUNG',
    showcaseMeta: ['Harga EXW Fuzhou', 'Cek Margin Kotor', 'Validator MOQ'],
    geoTitle: 'Jawaban Langsung: Menghitung Biaya Unit Grosir, Laser Logo & MOQ Kemasan',
    geoAnswer: 'Kalkulator interaktif ini menggabungkan tingkat harga EXW pabrik (50–199, 200–499, 500+ pcs dengan $0 biaya cetakan), laser serat 50W (+$0.15–$0.30/pcs) atau isi enamel (+$0.35–$0.60/pcs, MOQ 100), dan 3 opsi kemasan (vakum $0 di 50 pcs, kotak EVA +$0.75+ di 100 pcs, boks kado +$1.45+ di 500 pcs) untuk menghitung total biaya & margin.',
    wsBadge: 'SUSUN ESTIMASI BATCH ANDA',
    wsTitle: 'Pilih Kelas Material, Jumlah, Laser Logo & Kemasan',
    labels: {
      step1: '1. Pilih Kelas Material Cetakan Siap',
      step2: '2. Jumlah Pesanan (Unit per SKU)',
      step3: '3. Mode Branding Logam Permanen (Tanpa UV / Sablon)',
      step4: '4. Opsi Kemasan Pabrik 3 Tingkat',
      step5: '5. Target Harga Jual Ritel (MSRP USD / pcs)'
    },
    tierOptions: {
      promo: 'Promo Zinc Spinner/Slider Dasar (FS-009 / FS-006 — dasar $0.74–$0.92)',
      slider: 'Core Magnetic Slider Utama (FS-001 / FS-047 — dasar $3.18–$3.92)',
      cnc: 'Koin / Slider CNC Baja 304 (FS-013 / FS-075 — dasar $7.43–$9.15)',
      acoustic: 'Garpu Tala Akustik / Multi-Lapis (FS-150 / FS-148 — dasar $14.50–$17.80)'
    },
    brandOptions: {
      blank: 'Stok Polos Tanpa Logo (+$0.00/pcs · MOQ 50)',
      laser: 'Laser Serat 50W MOPA (+$0.20/pcs rata-rata · MOQ 100 · Sampel $50)',
      enamel: 'Laser Dalam + Isi Warna Enamel (+$0.45/pcs · MOQ 100–200 · $80–$150)'
    },
    pkgOptions: {
      vacuum: 'Kantong Vakum Anti-Oksidasi Individual ($0.00 termasuk · MOQ 50)',
      eva: 'Kotak Ritsleting EVA Hitam Cetakan Siap (+$0.75/pcs · MOQ 100)',
      rigid: 'Boks Kado Kaku Kustom (+$1.45/pcs · MOQ 500)',
      tin: 'Kaleng Logam Doff Berjendela MTO (+$1.15/pcs · MOQ 1.000+)'
    },
    summary: {
      badge: 'ESTIMASI EXW FUZHOU',
      moldPill: '$0.00 Biaya Cetakan',
      unitCostLabel: 'Estimasi Biaya Unit Pabrik (EXW)',
      batchTotalLabel: 'Estimasi Total Batch (EXW)',
      tierBreakLabel: 'Rincian Tingkat Harga',
      addonLabel: 'Tambahan Logo + Kemasan',
      marginLabel: 'Est. Laba / Margin Kotor vs MSRP',
      sampleRefLabel: 'Referensi Biaya Sampel Berbayar',
      leadTimeLabel: 'Waktu Produksi Internal Pabrik',
      disclaimer: '* Sampel evaluasi 1 pcs berbayar & ongkos kurir internasional (DHL/FedEx/UPS/DDP) dibayar pembeli & tidak dapat dikembalikan.',
      formSubtext: 'Mengunci skenario persis di atas ke dalam penawaran resmi EXW & ongkir.'
    },
    runtime: {
      bracket50: 'tingkat 50–199',
      bracket200: 'tingkat 200–499',
      bracket500: 'tingkat 500+',
      grossWord: 'laba kotor',
      pcWord: 'pcs',
      pcsWord: 'pcs',
      moqNoticePrefix: '⚠ Catatan MOQ: ',
      requiresMoq: 'memerlukan MOQ',
      tierLabels: { promo: 'Promo Zinc', slider: 'Core Slider', cnc: 'CNC 304SS', acoustic: 'Garpu Tala/Multi' },
      brandLabels: { blank: 'Polos', laser: 'Laser 50W', enamel: 'Laser Dalam + Warna' },
      brandSamples: {
        blank: 'Harga 1 Pcs + Kurir Pembeli (Non-Refundable)',
        laser: 'Setup Laser $50 + Kurir',
        enamel: 'Setup Enamel $80–$150 + Kurir'
      },
      brandDays: { blank: '5–7 Hari Kerja (Di luar kurir)', laser: '10–15 Hari Kerja (Di luar kurir)', enamel: '10–15 Hari Kerja (Di luar kurir)' },
      pkgLabels: { vacuum: 'Kantong Vakum', eva: 'Kotak EVA', rigid: 'Boks Kado', tin: 'Kaleng MTO' }
    },
    faqBadge: 'FAQ KALKULATOR & PENAWARAN',
    faqTitle: 'Tingkat Harga, Ambang MOQ & Pertanyaan Ongkos Kirim',
    appName: 'Kalkulator Biaya Grosir & Logo FidgetSupply',
    appDesc: 'Estimator interaktif harga EXW, laser 50W, MOQ kemasan & margin kotor ritel untuk 140 cetakan siap.',
    faqs: [
      { question: 'Apakah ada biaya cetakan atau setup laser tersembunyi di luar kalkulator ini?', answer: 'Tidak. Pada semua 140 cetakan aktif, biaya cetakan $0.00 dan biaya setup laser massal (MOQ 100+) juga $0.00; hanya sampel fisik berlogo yang dikenakan $50 atau $80–$150.' },
      { question: 'Bagaimana jumlah pesanan memengaruhi harga per unit?', answer: 'Setiap SKU memakai 3 tingkat harga EXW transparan: 50–199, 200–499, dan 500+ pcs.' },
      { question: 'Mengapa logo kustom mensyaratkan minimal 100 pcs per SKU?', answer: 'Stok polos mulai 50 pcs karena sudah siap dalam kemasan vakum; penyetelan jig laser 50W membutuhkan minimal 100 unit per SKU.' },
      { question: 'Mengapa opsi sablon dan cetak UV tidak disediakan?', answer: 'Di permukaan logam licin tinta mudah terkelupas; kami hanya memakai laser 50W permanen dan isi enamel cekung.' },
      { question: 'Apa perbedaan MOQ dari 3 tingkat kemasan pabrik?', answer: 'Kantong vakum ($0) MOQ 50 pcs, kotak EVA (+$0.75+) MOQ 100 pcs, boks kado kaku (+$1.45+) MOQ 500 pcs, kaleng jendela MOQ 1.000+ pcs.' },
      { question: 'Apakah estimasi EXW ini sudah termasuk ongkos kirim udara/laut?', answer: 'Belum. Masukkan email kerja Anda dengan kode pos tujuan untuk mendapat kutipan kurir DHL/FedEx/DDP akurat.' },
      { question: 'Bagaimana cara menghitung biaya sampel ke anggaran awal?', answer: 'Sampel 1 pcs polos dikenakan biaya unit + ongkir (non-refundable); sampel logo $50 atau $80–$150 + ongkir.' },
      { question: 'Apakah pesanan bermagnet butuh penanganan karton IATA PI-953?', answer: 'Ya, karton induk dilapisi lembaran baja pelindung sesuai standar IATA PI-953.' },
      { question: 'Berapa margin kotor ritel yang realistis untuk EDC logam?', answer: 'Menjual slider baja 304 CNC pada harga $29.99–$59.99 lazim menghasilkan 65%–78% margin kotor produk sebelum iklan & kirim.' },
      { question: 'Bagaimana cara mengunci skenario ini menjadi proforma resmi?', answer: 'Masukkan email kantor pada formulir di kartu ringkasan kanan dan tim kami membalas dalam 12 jam.' }
    ]
  },
  ar: {
    bcParent: 'مصفوفة الجملة',
    bcCurrent: 'حاسبة التكلفة',
    badge1: 'أداة تقدير OEM التفاعلية',
    badge2: '140 قالباً · 3 مستويات تغليف',
    kpis: [
      { label: 'تكلفة القالب', val: '$0.00 مجاناً' },
      { label: 'رسوم الليزر', val: '+$0.15 / +$0.35+' },
      { label: 'الحد للتغليف', val: '50 / 100 / 500+' },
      { label: 'مدة المصنع', val: '5–15 يوم عمل' }
    ],
    showcasePill: 'محرك تسعير الدفعات المباشر',
    showcaseMeta: ['شرائح EXW فوتشو', 'فحص هامش الربح', 'مدقق الحد الأدنى'],
    geoTitle: 'إجابة مباشرة: حساب تكلفة الجملة والليزر والحد الأدنى للتغليف',
    geoAnswer: 'تدمج الحاسبة التفاعلية شرائح أسعار المصنع EXW (50–199 و200–499 و500+ قطعة برسوم قالب $0.00)، وخيارات الشعار الدائم بليزر الألياف 50W (+$0.15–$0.30/قطعة) أو المينا (+$0.35–$0.60/قطعة، MOQ 100)، والتغليف ثلاثي المستويات لحساب التكلفة وهامش الربح.',
    wsBadge: 'أنشئ تقدير دفعتك الآن',
    wsTitle: 'اختر الفئة المعدنية والكمية والنقش بالليزر ونوع التغليف',
    labels: {
      step1: '1. اختر فئة المعدن من القوالب الجاهزة',
      step2: '2. كمية الطلب (قطعة لكل SKU)',
      step3: '3. وضع الشعار الدائم (بدون طباعة UV / حرير)',
      step4: '4. خيار التغليف من المصنع (3 مستويات)',
      step5: '5. سعر البيع بالتجزئة المستهدف (دولار / قطعة)'
    },
    tierOptions: {
      promo: 'فئة الترويج من الزنك (FS-009 / FS-006 — أساسي $0.74–$0.92)',
      slider: 'السلايدر المغناطيسي الأساسي (FS-001 / FS-047 — أساسي $3.18–$3.92)',
      cnc: 'عملة / سلايدر ستانلس 304 CNC (FS-013 / FS-075 — أساسي $7.43–$9.15)',
      acoustic: 'شوكة رنانة / متعدد الطبقات (FS-150 / FS-148 — أساسي $14.50–$17.80)'
    },
    brandOptions: {
      blank: 'مخزون سادة بدون شعار (+$0.00/قطعة · MOQ 50)',
      laser: 'حفر ليزر ألياف 50W (+$0.20 متوسط · MOQ 100 · عينة $50)',
      enamel: 'حفر عميق + مينا بانتون (+$0.45 متوسط · MOQ 100–200 · $80–$150)'
    },
    pkgOptions: {
      vacuum: 'كيس تفريغ فردي مضاد للأكسدة ($0.00 مشمول · MOQ 50)',
      eva: 'حافظة EVA سوداء بسحاب ($0.75+/قطعة · MOQ 100)',
      rigid: 'علبة هدايا فاخرة صلبة ($1.45+/قطعة · MOQ 500)',
      tin: 'علبة صفيح بنافذة حسب الطلب MTO ($1.15+/قطعة · MOQ 1,000+)'
    },
    summary: {
      badge: 'تقدير EXW فوتشو',
      moldPill: '$0.00 رسوم قالب',
      unitCostLabel: 'تكلفة القطعة المقدرة من المصنع (EXW)',
      batchTotalLabel: 'إجمالي الدفعة المقدر (EXW)',
      tierBreakLabel: 'شريحة الكمية المطبقة',
      addonLabel: 'إضافة الشعار + التغليف',
      marginLabel: 'الربح / الهامش الإجمالي التقديري',
      sampleRefLabel: 'مرجع العينة المدفوعة',
      leadTimeLabel: 'مدة التصنيع بالمصنع',
      disclaimer: '* العينات المدفوعة بقطعة واحدة والشحن الدولي (DHL/FedEx/UPS/DDP) يدفعها المشتري ولا تُرد.',
      formSubtext: 'يثبت هذه الإعدادات كما هي للحصول على عرض EXW وشحن رسمي.'
    },
    runtime: {
      bracket50: 'شريحة 50–199',
      bracket200: 'شريحة 200–499',
      bracket500: 'شريحة 500+',
      grossWord: 'إجمالي الربح',
      pcWord: 'قطعة',
      pcsWord: 'قطعة',
      moqNoticePrefix: '⚠ تنبيه MOQ: ',
      requiresMoq: 'يتطلب حداً أدنى',
      tierLabels: { promo: 'زنك ترويجي', slider: 'سلايدر أساسي', cnc: 'ستانلس 304 CNC', acoustic: 'شوكة رنانة/متعدد' },
      brandLabels: { blank: 'سادة', laser: 'ليزر 50W', enamel: 'ليزر عميق + لون' },
      brandSamples: {
        blank: 'سعر قطعة + الشحن (غير مستردة)',
        laser: 'تجهيز عينة ليزر $50 + الشحن',
        enamel: 'تجهيز عينة مينا $80–$150 + الشحن'
      },
      brandDays: { blank: '5–7 أيام عمل (بدون الشحن)', laser: '10–15 يوم عمل (بدون الشحن)', enamel: '10–15 يوم عمل (بدون الشحن)' },
      pkgLabels: { vacuum: 'كيس مفرغ', eva: 'حافظة EVA', rigid: 'علبة صلبة', tin: 'صفيح MTO' }
    },
    faqBadge: 'الأسئلة الشائعة للحاسبة',
    faqTitle: 'شرائح الأسعار، حدود MOQ والشحن الدولي',
    appName: 'حاسبة تكلفة الجملة والليزر FidgetSupply',
    appDesc: 'حاسبة تفاعلية لسعر المصنع EXW، ليزر 50W، حدود التغليف وهامش الربح لـ 140 قالباً.',
    faqs: [
      { question: 'هل توجد رسوم خفية للقوالب أو إعداد الليزر خارج الحاسبة؟', answer: 'لا. جميع الـ 140 قالباً برسوم $0.00 وإعداد الليزر للإنتاج التجاري $0.00 عند 100+ قطعة؛ فقط عينات الشعار الفعلية تكلف $50 أو $80–$150.' },
      { question: 'كيف تؤثر الكمية على سعر القطعة الواحدة؟', answer: 'تتبع كل قطعة 3 شرائح EXW واضحة: 50–199 و200–499 و500+ قطعة.' },
      { question: 'لماذا يتطلب الشعار المخصص 100 قطعة كحد أدنى؟', answer: 'يُشحن المخزون السادة من 50 قطعة، بينما يتطلب تثبيت الليزر وفحص أول قطعة 100+ قطعة لكل SKU.' },
      { question: 'لماذا لا تتوفر طباعة UV أو الحرير في الحاسبة؟', answer: 'الأحبار السطحية تتقشر على المعدن الأملس؛ نستخدم ليزر 50W والمينا الغائرة الدائمة فقط.' },
      { question: 'ما الفارق في MOQ بين مستويات التغليف الثلاثة؟', answer: 'الكيس المفرغ ($0) MOQ 50، حافظة EVA (+$0.75+) MOQ 100، العلبة الصلبة (+$1.45+) MOQ 500، الصفيح +1,000.' },
      { question: 'هل يشمل تقدير EXW الشحن الجوي أو البحري؟', answer: 'لا، هذه تكلفة المصنع في فوتشو. أرسل بريدك الإلكتروني أدناه مع الرمز البريدي للحصول على تسعيرة DHL/FedEx/DDP.' },
      { question: 'كيف أحسب تكلفة العينات ضمن الميزانية المبدئية؟', answer: 'العينة الفردية السادة تكلف سعر القطعة + الشحن؛ وعينة الشعار تضيف $50 أو $80–$150 + الشحن.' },
      { question: 'هل تتطلب الشحنات المغناطيسية تغليف IATA PI-953؟', answer: 'نعم، نبطّن كراتين التصدير بألواح فولاذية عازلة وفق معيار IATA PI-953.' },
      { question: 'ما هامش الربح الواقعي لبيع أدوات EDC المعدنية بالتجزئة؟', answer: 'عند البيع بسعر $29.99–$59.99 يتراوح هامش الربح الإجمالي للمنتج غالباً بين 65% و78%.' },
      { question: 'كيف أثبت هذا السيناريو للحصول على عرض رسمي؟', answer: 'أدخل بريد العمل في بطاقة الملخص اليمنى وسنرد عليك خلال 12 ساعة.' }
    ]
  }
};

export function getCalculatorCopy(lang: SupportedLanguage): CalculatorCopy {
  return COPY[lang] || COPY.en;
}
