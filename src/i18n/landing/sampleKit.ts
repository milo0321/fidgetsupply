import type { SupportedLanguage } from '../config';
import type { FaqItem } from './privateLabelOem';

export interface SampleKitCopy {
  bcCurrent: string;
  badge1: string;
  badge2: string;
  kpis: { label: string; val: string }[];
  ctaSecondary: string;
  showcasePill: string;
  showcaseMoldCount: string;
  showcaseAlt: string;
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

const COPY: Record<SupportedLanguage, SampleKitCopy> = {
  en: {
    bcCurrent: '1-Pc Sample Kit',
    badge1: '1-Pc Paid Evaluation Sample',
    badge2: '140 Ready Molds · Consolidated Parcel',
    kpis: [
      { label: 'Min Sample Qty', val: '1 Pc / SKU' },
      { label: 'Sample & Freight', val: 'Buyer-Paid (Net)' },
      { label: 'Parcel Packing', val: 'Multi-SKU Combined' },
      { label: 'Courier Handoff', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: '140-SKU Price Matrix →',
    showcasePill: 'PHYSICAL EVALUATION DESK',
    showcaseMoldCount: '140 Ready Molds',
    showcaseAlt: '1-piece metal fidget physical evaluation sample kit across zinc alloy, aluminum, and stainless steel',
    showcaseMeta: ['Paid Sample · No Hidden Terms', 'PI953 Shielded Parcel', 'Fuzhou Direct Dispatch'],
    geoTitle: 'Direct Answer: How 1-Pc Metal Fidget Sample Ordering Works',
    geoAnswer: 'Every one of FidgetSupply\'s 140 ready-mold metal fidgets (FS-001 to FS-150) can be ordered as a paid 1-piece physical evaluation sample before committing to 50-piece blank or 100-piece custom logo bulk orders. Because all items use existing production molds, sample unit fees and international courier shipping (DHL, FedEx, UPS, or air parcel) are paid by the buyer and are non-refundable. Multiple SKUs are consolidated into one magnetically shielded parcel from our Fuzhou Hub, and final transit speed is governed by the selected courier and destination customs.',
    matrixBadge: 'CURATED EVALUATION COMBINATIONS',
    matrixTitle: '3 Proven Sample Assortments to Test Before Bulk Ordering',
    tableHeaders: ['Evaluation Kit Theme', 'Recommended SKUs', 'What Your Team Evaluates', 'Sample & Shipping Terms'],
    tableRows: [
      ['1. Material & Weight Benchmark (5 Pcs)', 'FS-001 (Zamak-3), FS-047 (6063 Aluminum), FS-013 (304 Stainless), FS-043 (CNC Gyro), FS-135 (Brass/Alu Ring)', 'Compare die-cast alloy mass vs. CNC stainless steel tolerances, anodized vs. electroplated finish durability.', 'Buyer-paid units + consolidated courier shipping (DHL/FedEx/UPS).'],
      ['2. Corporate Swag & Logo Surface Pack (4 Pcs)', 'FS-009 ($0.74+ Pocket Spinner), FS-125 (42×26mm Flat Slider), FS-047 (Anodized Slider), FS-013 (Ø28mm Coin)', 'Verify flat engraving zones, desk presentation weight, and EVA zipper pouch fit prior to 100-pc logo runs.', 'Blank stock samples dispatched from Fuzhou; optional paid laser sample ($50 setup, 10–15 days).'],
      ['3. Viral Acoustic vs. Quiet Office Pack (4 Pcs)', 'FS-150 (Acoustic Tuning Fork), FS-129 (Dual-Bearing Tuning Fork), FS-125 (PTFE Silent Slider), FS-009 (Quiet R188)', 'Test metallic chime acoustics for short-video e-commerce vs. low-decibel office sliders for corporate gifting.', 'Packed with IATA PI953 magnetic shielding; carrier determines transit time.']
    ],
    picksBadge: 'TOP-SAMPLED READY MOLDS',
    picksTitle: 'Most Requested 1-Pc Evaluation Models',
    faqBadge: 'SAMPLE & LOGISTICS FAQ',
    faqTitle: 'Transparent Policies for Paid Evaluation Samples',
    serviceName: '1-Pc Ready-Mold Metal Fidget Physical Sample Evaluation Program',
    serviceDesc: 'Paid 1-piece evaluation samples across 140 ready-mold metal fidget sliders, spinners, haptic coins, and rings. Buyer pays sample unit fee and international courier shipping from Fuzhou.',
    faqs: [
      { question: 'Can I order just 1 piece of a ready-mold metal fidget before committing to a 50-piece wholesale order?', answer: 'Yes. Every one of our 140 ready-mold SKUs (FS-001 to FS-150) is available for paid 1-piece physical evaluation so you can test magnetic pull force, PTFE glide smoothness, acoustic chime resonance, and surface finish in hand before placing a bulk order.' },
      { question: 'Who pays for evaluation samples and international courier shipping, and are sample fees refundable?', answer: 'Because all 140 catalog items are ready-mold stock products rather than new custom tooling, evaluation samples are paid and non-refundable. Both the sample unit cost and international courier shipping (DHL, FedEx, UPS, or air parcel) are paid by the buyer.' },
      { question: 'Can I mix 3 to 10 different SKU models into a single sample shipment to save on international shipping?', answer: 'Yes. Consolidating 3 to 10 models (for example, 1 Zamak-3 slider, 1 6063 aluminum slider, 1 304 stainless steel coin, 1 acoustic tuning fork, and 1 pocket spinner) into one shielded parcel from our Fuzhou Export Hub significantly lowers the per-piece courier cost compared to shipping single units separately.' },
      { question: 'How fast do you dispatch evaluation samples, and how long does international delivery take?', answer: 'In-stock blank evaluation samples undergo 5–7 business days QC and PI953 magnetic shielding dispatch prep at our Fuzhou warehouse once payment is confirmed. Final door-to-door transit time is determined by the selected courier (DHL, FedEx, UPS, or air line) and destination customs clearance.' },
      { question: 'Do magnetic fidget sample parcels require special air-freight packaging?', answer: 'Yes. Even small parcels containing multiple high-flux N52/N54 neodymium fidgets can trigger airport magnetic screening under IATA PI953 (PI-953). Our Fuzhou logistics desk packs multi-unit magnetic samples with ferromagnetic shielding liners to help prevent carrier holds.' },
      { question: 'Can I request a custom laser-engraved sample with my company logo before ordering 100 pieces?', answer: 'Yes. Custom logo pre-production samples are paid and require 10–15 days to prepare: 50W fiber laser engraving sample setup is $50 USD, and Deep Laser Engraving + Pantone Enamel Color Fill sample setup is $80–$150 USD depending on color count, plus buyer-paid courier shipping. A 1:1 digital vector proof is provided free within 12 hours first.' },
      { question: 'Which sample models do you recommend for comparing entry-level zinc alloy vs. precision CNC stainless steel?', answer: 'We recommend pairing FS-001 (Zamak-3 Poker Slider) or FS-009 (Classic Pocket Twist Spinner, $0.74+ tier) with FS-047 (6063 Anodized Aluminum Slider) and FS-043 or FS-075 (CNC 304 Stainless Steel) so your team can feel the exact mass, tolerance, and finish differences.' },
      { question: 'Which sample models should we test if we want to compare loud acoustic tuning forks vs. quiet office fidgets?', answer: 'Compare FS-150 (Compact 20-Magnet Acoustic Tuning Fork Slider) for a crisp metallic ring against FS-125 (Smooth PTFE Unlimited Slider) or FS-009 (Silent R188 Pocket Spinner) for low-decibel executive desk use.' },
      { question: 'What payment methods are accepted for paid 1-piece sample orders?', answer: 'We accept PayPal, Wise, and corporate bank wire (T/T) for sample orders. Contact our Fuzhou export desk via the inline bar or WhatsApp with your SKU list and shipping postal code to get an exact sample + courier quote.' },
      { question: 'After testing samples, what packaging and minimum order quantity (MOQ) apply to our first bulk order?', answer: 'Blank stock starts at 50 pieces per SKU in individual Vacuum Anti-Oxidation Pouches ($0.00 included). Custom 50W fiber laser engraving or Stock Black EVA Zipper Cases (+$0.75+/pc) start at 100 pieces per SKU ($0.00 mold fee); Custom Rigid Boxes (+$1.45+/pc) start at 500 pcs, and Window Metal Tin Boxes start at 1,000+ pcs.' }
    ]
  },
  de: {
    bcCurrent: '1-Stück-Musterpaket',
    badge1: 'Kostenpflichtiges 1-Stück-Prüfmuster',
    badge2: '140 Serienformen · Sammelpaket',
    kpis: [
      { label: 'Min. Mustermenge', val: '1 Stk. / SKU' },
      { label: 'Muster & Fracht', val: 'Käufer trägt Kosten' },
      { label: 'Paketversand', val: 'Multi-SKU Kombiniert' },
      { label: 'Kurierübergabe', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: '140-SKU Preisliste →',
    showcasePill: 'MUSTER-EVALUIERUNG AB WERK',
    showcaseMoldCount: '140 Serienformen',
    showcaseAlt: '1-Stück Metall-Fidget-Prüfmuster aus Zinklegierung, Aluminium und Edelstahl',
    showcaseMeta: ['Bezahltes Muster · Transparente Konditionen', 'PI953 Abschirmung', 'Direktversand ab Fuzhou'],
    geoTitle: 'Direktantwort: So funktioniert die 1-Stück-Musterbestellung für Metall-Fidgets',
    geoAnswer: 'Jedes der 140 Serienformen-Modelle von FidgetSupply (FS-001 bis FS-150) kann als kostenpflichtiges 1-Stück-Muster bestellt werden, bevor Sie 50 Stück blanko oder 100 Stück mit Laserlogo ordern. Musterpreis und internationaler Kurierversand (DHL/FedEx/UPS) trägt der Käufer (nicht erstattungsfähig). Mehrere SKUs werden im magnetisch geschirmten Sammelpaket ab Fuzhou versendet; die Laufzeit bestimmt der Kurier und Zoll.',
    matrixBadge: 'BEWÄHRTE MUSTER-KOMBINATIONEN',
    matrixTitle: '3 praxiserprobte Testsets für den Vergleich vor der Großbestellung',
    tableHeaders: ['Testset-Schwerpunkt', 'Empfohlene SKUs', 'Was Ihr Team prüft', 'Muster- & Versandkonditionen'],
    tableRows: [
      ['1. Material- & Gewichtsvergleich (5 Stk.)', 'FS-001 (Zamak-3), FS-047 (Alu 6063), FS-013 (304 Edelstahl), FS-043 (CNC-Gyro), FS-135 (Ring)', 'Vergleich von Druckgussgewicht vs. CNC-Edelstahltoleranz und eloxierter Oberfläche.', 'Käufer trägt Musterstückpreis + gebündelten Kurierversand (DHL/FedEx/UPS).'],
      ['2. Werbeartikel- & Gravurflächen-Set (4 Stk.)', 'FS-009 ($0.74+ Pocket Spinner), FS-125 (Flach-Slider), FS-047 (Alu-Slider), FS-013 (Münze Ø28mm)', 'Prüfung der 50W-Laserflächen, Haptik auf dem Schreibtisch und Passform im EVA-Etui.', 'Ungravierte Lagermuster ab Fuzhou; optionales Lasermuster ($50 Setup, 10–15 Tage).'],
      ['3. Akustik-Stimmgabel vs. Leise Büro-Fidgets (4 Stk.)', 'FS-150 (Stimmgabel), FS-129 (Dual-Lager), FS-125 (PTFE Leise), FS-009 (R188 Leise)', 'Test des metallischen Klangs für E-Commerce vs. gedämpfte Büro-Fidgets für Firmenkunden.', 'Verpackt mit IATA PI953 Abschirmung; Laufzeit gemäß Kurierdienst.']
    ],
    picksBadge: 'MEISTGEWÄHLTE SERIENFORMEN',
    picksTitle: 'Beliebteste 1-Stück-Evaluierungsmodelle',
    faqBadge: 'MUSTER- & VERSAND-FAQ',
    faqTitle: 'Transparente Konditionen für bezahlte Evaluierungsmuster',
    serviceName: '1-Stück Metall-Fidget Prüfmuster-Programm ab Serienform',
    serviceDesc: 'Bezahlte 1-Stück-Evaluierungsmuster aus 140 Serienformen. Muster- und Kurierkosten trägt der Käufer ab Exportlager Fuzhou.',
    faqs: [
      { question: 'Kann ich nur 1 Stück einer Serienform bestellen, bevor ich 50 Stück bestelle?', answer: 'Ja. Alle 140 Serien-SKUs (FS-001 bis FS-150) sind als bezahltes 1-Stück-Prüfmuster erhältlich, um Magnetkraft, PTFE-Gleitgefühl, Akustik und Finish vorab zu testen.' },
      { question: 'Wer trägt die Kosten für Muster und internationalen Versand und werden sie erstattet?', answer: 'Da alle 140 Modelle fertige Serienformen nutzen, sind Muster kostenpflichtig und nicht erstattungsfähig. Musterstückpreis und Kurierversand (DHL/FedEx/UPS) trägt der Käufer.' },
      { question: 'Kann ich 3 bis 10 verschiedene SKUs in einer einzigen Sammel Sendung bündeln?', answer: 'Ja. Das Bündeln von 3 bis 10 Modellen in einem magnetisch geschirmten Paket ab Fuzhou senkt die Frachtkosten pro Stück deutlich.' },
      { question: 'Wie lange dauert die Versandvorbereitung und wie erfolgt die internationale Zustellung?', answer: 'Lagermuster durchlaufen nach Zahlungseingang 5–7 Werktage QC und PI953-Abschirmungsverpackung. Die internationale Laufzeit richtet sich nach Kurier (DHL/FedEx/UPS) und Zielzoll.' },
      { question: 'Benötigen magnetische Fidget-Musterpakete eine spezielle Luftfracht-Abschirmung?', answer: 'Ja. Starke N52-Neodymmagnete fallen unter IATA PI953; wir verpacken Mehrfachmuster ab Werk Fuzhou mit ferromagnetischer Abschirmung.' },
      { question: 'Kann ich vor einer 100-Stück-Bestellung ein individuelles Lasermuster mit Firmenlogo erhalten?', answer: 'Ja. Bezahlte Logomuster benötigen 10–15 Tage Produktion ($50 USD für 50W Faserlaser, $80–$150 USD für Tiefenlaser + Emaille-Farbfüllung zzgl. Kurierfracht); kostenlose 12h-Vektorvorschau vorab.' },
      { question: 'Welche Muster zeigen am besten den Unterschied zwischen Zinkdruckguss und CNC-Edelstahl?', answer: 'Kombinieren Sie FS-001 oder FS-009 ($0.74+) mit FS-047 (Alu 6063) sowie FS-043 oder FS-075 (CNC 304 Edelstahl).' },
      { question: 'Welche Modelle vergleichen laute Stimmgabel-Akustik mit leisen Büro-Fidgets?', answer: 'Testen Sie FS-150 (Klang-Stimmgabel) gegen FS-125 (PTFE-Slider) oder FS-009 (R188-Spinner).' },
      { question: 'Welche Zahlungsarten werden für Musterbestellungen akzeptiert?', answer: 'PayPal, Wise und Banküberweisung (T/T). Senden Sie SKU-Liste und Postleitzahl für ein exaktes Musterangebot.' },
      { question: 'Welche Verpackungen und Mindestmengen gelten für die spätere Serienbestellung?', answer: 'Blankoware ab 50 Stk. im Vakuum-Schutzbeutel ($0.00); 50W-Lasergravur oder Lager-EVA-Etui (+$0.75+/Stk.) ab 100 Stk.; Hartbox (+$1.45+/Stk.) ab 500 Stk.; Metalldose ab 1.000+ Stk.' }
    ]
  },
  fr: {
    bcCurrent: 'Échantillon 1 Pièce',
    badge1: 'Échantillon d’Évaluation Payant (1 Pce)',
    badge2: '140 Moules Prêts · Colis Groupé',
    kpis: [
      { label: 'Qté Min. Échantillon', val: '1 Pce / SKU' },
      { label: 'Échantillon & Port', val: 'À la Charge Acheteur' },
      { label: 'Colisage', val: 'Multi-SKU Groupé' },
      { label: 'Transporteurs', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: 'Grille Tarifaire 140 SKU →',
    showcasePill: 'BUREAU D’ÉVALUATION PHYSIQUE',
    showcaseMoldCount: '140 Moules Prêts',
    showcaseAlt: 'Kit d’échantillons fidget métal 1 pièce en alliage de zinc, aluminium et acier inoxydable',
    showcaseMeta: ['Échantillon Payant · Sans Clause Cachée', 'Blindage PI953', 'Expédition Directe Fuzhou'],
    geoTitle: 'Réponse Directe : Commander un Échantillon Métal Fidget dès 1 Pièce',
    geoAnswer: 'Chacun des 140 moules prêts FidgetSupply (FS-001 à FS-150) peut être commandé à l’unité en échantillon payant avant un lot de 50 pièces neutres ou 100 pièces gravées. Le coût de l’échantillon et le fret international (DHL/FedEx/UPS) sont à la charge de l’acheteur et non remboursables. Plusieurs SKU sont regroupés dans un colis blindé depuis Fuzhou ; le délai final dépend du transporteur et des douanes.',
    matrixBadge: 'COMBINAISONS DE TEST RECOMMANDÉES',
    matrixTitle: '3 Assortiments d’Évaluation Éprouvés Avant Commande en Volume',
    tableHeaders: ['Thème du Kit', 'SKU Recommandés', 'Points Évalués', 'Conditions Échantillon & Port'],
    tableRows: [
      ['1. Comparatif Matériaux & Poids (5 Pcs)', 'FS-001 (Zamak-3), FS-047 (Alu 6063), FS-013 (Inox 304), FS-043 (Gyro CNC), FS-135 (Bague)', 'Comparaison injection zinc vs usinage CNC inox et tenue des finitions anodisées.', 'Unités payées par l’acheteur + colis groupé DHL/FedEx/UPS.'],
      ['2. Pack Logo Entreprise & Surfaces (4 Pcs)', 'FS-009 ($0.74+ Pocket Spinner), FS-125 (Slider Plat), FS-047 (Alu), FS-013 (Pièce Ø28mm)', 'Validation des zones de gravure 50W et ergonomie en étui EVA avant 100 pcs.', 'Stock neutre expédié de Fuzhou ; prototype laser payant optionnel ($50, 10–15 jours).'],
      ['3. Pack Diapason Acoustique vs Bureau Calme (4 Pcs)', 'FS-150 (Diapason), FS-129 (Double Roulement), FS-125 (PTFE Silencieux), FS-009 (R188)', 'Test du timbre métallique pour e-commerce vs silence discret pour cadeaux VIP.', 'Emballage blindé IATA PI953 ; transit selon transporteur.']
    ],
    picksBadge: 'MOULES LES PLUS ÉCHANTILLONNÉS',
    picksTitle: 'Modèles 1 Pièce les Plus Demandés en Test',
    faqBadge: 'FAQ ÉCHANTILLONS & LOGISTIQUE',
    faqTitle: 'Politique Transparente des Échantillons Payants',
    serviceName: 'Programme d’Échantillons Physiques 1 Pièce sur 140 Moules Métal',
    serviceDesc: 'Échantillons payants dès 1 pièce sur 140 moules prêts de fidgets métal. Frais d’échantillon et port international à la charge de l’acheteur.',
    faqs: [
      { question: 'Puis-je commander 1 seule pièce d’un moule prêt avant de commander 50 pièces ?', answer: 'Oui. Les 140 modèles (FS-001 à FS-150) sont disponibles à l’unité en échantillon payant pour tester aimants, glisse PTFE et finitions.' },
      { question: 'Qui paie les échantillons et le port international, et sont-ils remboursables ?', answer: 'S’agissant de moules de série existants, les échantillons sont payants et non remboursables. Pièces et fret international (DHL/FedEx/UPS) sont réglés par l’acheteur.' },
      { question: 'Puis-je regrouper 3 à 10 modèles dans un seul colis d’échantillons ?', answer: 'Oui. Consolider 3 à 10 SKU depuis Fuzhou réduit fortement le coût du transport par pièce.' },
      { question: 'Quel est le délai de préparation et de livraison internationale ?', answer: 'Les échantillons en stock nécessitent 5–7 jours ouvrés de contrôle QC et blindage PI953 avant remise au transporteur ; le délai final dépend du transporteur et des douanes.' },
      { question: 'Les colis contenant des aimants néodymes exigent-ils un emballage aérien spécifique ?', answer: 'Oui, nous utilisons un blindage ferromagnétique conforme IATA PI953 sur les colis multi-unités.' },
      { question: 'Puis-je commander un prototype gravé avec notre logo avant 100 pièces ?', answer: 'Oui, en 10–15 jours : $50 USD pour laser 50W ou $80–$150 USD pour gravure profonde + émail Pantone (port en sus), précédé d’un BAT 12h gratuit.' },
      { question: 'Quels modèles comparer entre alliage de zinc et acier inoxydable CNC ?', answer: 'Associez FS-001 ou FS-009 ($0.74+) avec FS-047 (Alu) et FS-043 ou FS-075 (Inox 304 CNC).' },
      { question: 'Quels modèles comparer entre diapason sonore et bureau silencieux ?', answer: 'Comparez FS-150 (diapason acoustique) face à FS-125 (PTFE) ou FS-009 (R188 silencieux).' },
      { question: 'Quels modes de paiement acceptez-vous pour les échantillons ?', answer: 'PayPal, Wise et virement bancaire (T/T) avec devis précis incluant code postal.' },
      { question: 'Quels conditionnements et MOQ s’appliquent ensuite en série ?', answer: 'Neutre MOQ 50 pcs en pochette sous vide ($0.00) ; logo laser 50W ou étui EVA stock (+$0.75+/pce) dès 100 pcs ; coffret rigide (+$1.45+/pce) dès 500 pcs ; boîte métal dès 1 000+ pcs.' }
    ]
  },
  nl: {
    bcCurrent: '1-Stuk Monsterpakket',
    badge1: 'Betaald 1-Stuk Proefmonster',
    badge2: '140 Vaste Mallen · Gecombineerd Pakket',
    kpis: [
      { label: 'Min. Monsteraantal', val: '1 St. / SKU' },
      { label: 'Monster & Vracht', val: 'Kosten Koper (Netto)' },
      { label: 'Pakketindeling', val: 'Multi-SKU Bundel' },
      { label: 'Koerieroverdracht', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: '140-SKU Prijsmatrix →',
    showcasePill: 'FYSIEKE TESTDESK',
    showcaseMoldCount: '140 Vaste Mallen',
    showcaseAlt: '1-stuk metalen fidget proefmonster in zinklegering, aluminium en roestvrij staal',
    showcaseMeta: ['Betaald Monster · Transparant', 'PI953 Afscherming', 'Direct vanuit Fuzhou'],
    geoTitle: 'Direct Antwoord: Hoe 1-Stuk Metalen Fidget Monsters Bestellen Werkt',
    geoAnswer: 'Elk van FidgetSupply’s 140 vaste metalen mallen (FS-001 t/m FS-150) is als betaald 1-stuk proefmonster te bestellen vóór een blanco afname van 50 stuks of 100 stuks met logo. Monsterprijs en internationale koerierskosten (DHL/FedEx/UPS) zijn voor rekening van de koper en niet restitueerbaar. Meerdere SKU’s gaan gebundeld in één afgeschermd pakket uit Fuzhou; de transittijd wordt bepaald door vervoerder en douane.',
    matrixBadge: 'AANBEVOLEN TESTCOMBINATIES',
    matrixTitle: '3 Bewezen Proefpakketten vóór uw Groothandelorder',
    tableHeaders: ['Testset Thema', 'Aanbevolen SKU’s', 'Wat uw Team Beoordeelt', 'Monster- & Verzendvoorwaarden'],
    tableRows: [
      ['1. Materiaal- & Gewichtsbenchmark (5 St.)', 'FS-001 (Zamak-3), FS-047 (Alu 6063), FS-013 (RVS 304), FS-043 (CNC Gyro), FS-135 (Ring)', 'Vergelijk zinkspuitgietmassa met CNC-RVS toleranties en anodisatie.', 'Koper betaalt monsters + gebundelde koerier (DHL/FedEx/UPS).'],
      ['2. Bedrijfslogo & Oppervlaktepakket (4 St.)', 'FS-009 ($0.74+), FS-125 (Vlakke Slider), FS-047 (Alu Slider), FS-013 (Munt Ø28mm)', 'Controleer 50W fiberlaser-vlakken en pasvorm in EVA-etui voor 100-st. logo-orders.', 'Blanco voorraadmonsters uit Fuzhou; optioneel lasermonster ($50, 10–15 dagen).'],
      ['3. Akoestische Stemvork vs. Stil Kantoor (4 St.)', 'FS-150 (Stemvork), FS-129 (Dubbel Lager), FS-125 (Stil PTFE), FS-009 (Stille R188)', 'Test helder metaalgeluid voor e-commerce vs. stille zakelijke bureaufidgets.', 'Verpakt met IATA PI953 afscherming; vervoerder bepaalt levertijd.']
    ],
    picksBadge: 'MEEST AANGEVRAAGDE VASTE MALLEN',
    picksTitle: 'Populaire 1-Stuk Testmodellen',
    faqBadge: 'MONSTER- & LOGISTIEK FAQ',
    faqTitle: 'Duidelijke Regels voor Betaalde Proefmonsters',
    serviceName: '1-Stuk Metalen Fidget Evaluatiemonster Programma',
    serviceDesc: 'Betaalde 1-stuk monsters uit 140 metalen mallen; monster- en koerierskosten door koper betaald.',
    faqs: [
      { question: 'Kan ik slechts 1 stuk bestellen vóór een groothandelorder van 50 stuks?', answer: 'Ja, alle 140 modellen (FS-001 t/m FS-150) zijn als betaald 1-stuk proefmonster leverbaar.' },
      { question: 'Wie betaalt monsters en verzending en worden de kosten verrekend?', answer: 'Omdat het bestaande seriemallen betreft, zijn monsterprijs en koerier (DHL/FedEx/UPS) voor rekening van de koper en niet restitueerbaar.' },
      { question: 'Mag ik 3 tot 10 verschillende SKU’s combineren in één zending?', answer: 'Ja, wij bundelen meerdere SKU’s vanuit Fuzhou in één afgeschermde doos om vracht per stuk te verlagen.' },
      { question: 'Hoe verloopt de voorbereiding en internationale koerierstijd?', answer: 'Voorraadmonsters krijgen binnen 5–7 werkdagen QC-inspectie en PI953-verpakking; de vervoerder en douane bepalen de transittijd.' },
      { question: 'Hebben magnetische monsters speciale luchtvracht-afscherming nodig?', answer: 'Ja, ferromagnetische voering conform IATA PI953 voorkomt vertraging op luchthavens.' },
      { question: 'Kan ik een lasermonster met ons bedrijfslogo laten maken?', answer: 'Ja (10–15 dagen): $50 USD voor 50W fiberlaser of $80–$150 USD voor diepe laser + emaille plus vracht, voorafgegaan door een gratis 12u proefontwerp.' },
      { question: 'Welke modellen vergelijken instap-zink met CNC-RVS het best?', answer: 'Combineer FS-001 of FS-009 ($0.74+) met FS-047 (6063 alu) en FS-043 of FS-075 (CNC RVS).' },
      { question: 'Welke sets tonen akoestische stemvorken vs. stille kantoorfidgets?', answer: 'Vergelijk FS-150 met FS-125 PTFE-slider of FS-009 stille R188-spinner.' },
      { question: 'Welke betaalmethoden gelden voor proefmonsters?', answer: 'PayPal, Wise en zakelijke bankoverschrijving (T/T) na opgave van SKU’s en postcode.' },
      { question: 'Welke verpakkingen en MOQ’s gelden bij vervolgorders?', answer: 'Blanco MOQ 50 st. in vacuüm anti-oxidatiezak ($0.00); 50W laser of voorraad EVA-etui (+$0.75+/st.) vanaf 100 st.; luxe doos (+$1.45+/st.) vanaf 500 st.; blikken doos vanaf 1.000+ st.' }
    ]
  },
  es: {
    bcCurrent: 'Kit de Muestra 1 Ud.',
    badge1: 'Muestra de Evaluación Pagada (1 Ud.)',
    badge2: '140 Moldes Listos · Paquete Combinado',
    kpis: [
      { label: 'Muestra Mínima', val: '1 Ud. / SKU' },
      { label: 'Muestra y Flete', val: 'Pago Comprador (Neto)' },
      { label: 'Embalaje', val: 'Multi-SKU Combinado' },
      { label: 'Mensajería', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: 'Lista de Precios 140 SKU →',
    showcasePill: 'MESA DE EVALUACIÓN FÍSICA',
    showcaseMoldCount: '140 Moldes Listos',
    showcaseAlt: 'Kit de muestra metálico de 1 unidad en aleación de zinc, aluminio y acero inoxidable',
    showcaseMeta: ['Muestra Pagada · Sin Sorpresas', 'Blindaje PI953', 'Envío Directo Fuzhou'],
    geoTitle: 'Respuesta Directa: Cómo Pedir Muestras de 1 Unidad en Fidgets Metálicos',
    geoAnswer: 'Cada uno de los 140 moldes listos de FidgetSupply (FS-001 a FS-150) puede solicitarse como muestra física pagada de 1 unidad antes de confirmar 50 piezas sin logo o 100 piezas con grabado láser. Tanto el valor de la muestra como el envío internacional (DHL/FedEx/UPS) corren por cuenta del comprador y no son reembolsables. Consolidamos varios SKU en un solo paquete blindado desde Fuzhou; el tránsito final depende del courier y aduanas.',
    matrixBadge: 'COMBINACIONES DE PRUEBA RECOMENDADAS',
    matrixTitle: '3 Surtidos de Muestra Comprobados Antes del Pedido Mayorista',
    tableHeaders: ['Tema del Kit', 'SKUs Recomendados', 'Qué Evalúa su Equipo', 'Condiciones de Muestra y Envío'],
    tableRows: [
      ['1. Comparativa de Materiales y Peso (5 Uds.)', 'FS-001 (Zamak-3), FS-047 (Alu 6063), FS-013 (Inox 304), FS-043 (Gyro CNC), FS-135 (Anillo)', 'Comparar masa de fundición frente a precisión CNC inoxidable y acabados.', 'Unidades pagadas + envío consolidado DHL/FedEx/UPS por cuenta del comprador.'],
      ['2. Pack Regalo Corporativo y Grabado (4 Uds.)', 'FS-009 ($0.74+), FS-125 (Slider Plano), FS-047 (Alu), FS-013 (Moneda Ø28mm)', 'Validar zonas planas para láser 50W y ajuste en estuche EVA antes de 100 uds.', 'Muestras neutras desde Fuzhou; muestra láser opcional ($50 setup, 10–15 días).'],
      ['3. Diapasón Acústico vs. Oficina Silenciosa (4 Uds.)', 'FS-150 (Diapasón), FS-129 (Doble Rodamiento), FS-125 (PTFE Silencioso), FS-009 (R188)', 'Probar resonancia metálica para redes vs. sliders silenciosos de escritorio.', 'Con blindaje magnético IATA PI953; tránsito según transportista.']
    ],
    picksBadge: 'MOLDES MÁS SOLICITADOS EN MUESTRA',
    picksTitle: 'Modelos de Evaluación de 1 Unidad Más Pedidos',
    faqBadge: 'FAQ DE MUESTRAS Y ENVÍO',
    faqTitle: 'Políticas Claras para Muestras Pagadas',
    serviceName: 'Programa de Muestras Físicas de 1 Unidad en 140 Moldes Metálicos',
    serviceDesc: 'Muestras pagadas de 1 pieza en 140 moldes listos; el comprador cubre unidad y flete internacional desde Fuzhou.',
    faqs: [
      { question: '¿Puedo pedir solo 1 unidad antes de comprometerme a 50 piezas mayoristas?', answer: 'Sí. Los 140 moldes (FS-001 a FS-150) están disponibles por unidad para evaluar fuerza magnética, suavidad PTFE y acabado.' },
      { question: '¿Quién paga muestras y flete internacional, y son reembolsables?', answer: 'Al usar moldes de producción existentes, las muestras y el envío (DHL/FedEx/UPS) son pagados por el comprador y no reembolsables.' },
      { question: '¿Puedo mezclar de 3 a 10 SKUs en un solo envío?', answer: 'Sí. Consolidar varios modelos en una caja blindada desde Fuzhou reduce el coste por pieza.' },
      { question: '¿Cómo funciona la preparación de despacho y tránsito internacional?', answer: 'Las muestras neutras en stock pasan 5–7 días hábiles de control QC y blindaje PI953 en Fuzhou; la entrega final depende del courier y aduanas.' },
      { question: '¿Los envíos con imanes requieren embalaje aéreo especial?', answer: 'Sí, añadimos láminas ferromagnéticas según IATA PI953 para evitar retenciones aéreas.' },
      { question: '¿Puedo solicitar muestra previa con logotipo grabado antes de 100 uds.?', answer: 'Sí (10–15 días): $50 USD para láser 50W o $80–$150 USD para grabado profundo + esmalte más envío; incluye boceto vectorial gratis en 12h.' },
      { question: '¿Qué modelos comparar entre zinc económico y acero inoxidable CNC?', answer: 'Combine FS-001 o FS-009 ($0.74+) con FS-047 (Alu) y FS-043 o FS-075 (Inox 304).' },
      { question: '¿Qué probar para comparar diapasón acústico frente a oficina silenciosa?', answer: 'Compare FS-150 contra FS-125 PTFE o FS-009 R188.' },
      { question: '¿Qué métodos de pago aceptan para muestras?', answer: 'PayPal, Wise y transferencia bancaria (T/T) con cotización según su lista SKU y código postal.' },
      { question: '¿Qué empaques y MOQ aplican tras aprobar la muestra?', answer: 'Sin logo MOQ 50 uds. en bolsa al vacío ($0.00); láser 50W o estuche EVA stock (+$0.75+/ud.) desde 100 uds.; caja rígida (+$1.45+/ud.) desde 500 uds.; lata metálica desde 1.000+ uds.' }
    ]
  },
  it: {
    bcCurrent: 'Kit Campione 1 Pz',
    badge1: 'Campione di Valutazione a Pagamento',
    badge2: '140 Stampi Pronti · Pacco Unico',
    kpis: [
      { label: 'Qtà Min. Campione', val: '1 Pz / SKU' },
      { label: 'Campione & Nolo', val: 'A Carico Acquirente' },
      { label: 'Imballo', val: 'Multi-SKU Combinato' },
      { label: 'Corriere', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: 'Listino 140 SKU →',
    showcasePill: 'BANCO VALUTAZIONE FISICA',
    showcaseMoldCount: '140 Stampi Pronti',
    showcaseAlt: 'Kit campione fidget in metallo 1 pezzo in lega di zinco, alluminio e acciaio inox',
    showcaseMeta: ['Campione Pagato · Zero Sorprese', 'Schermatura PI953', 'Spedizione da Fuzhou'],
    geoTitle: 'Risposta Diretta: Come Ordinare Campioni da 1 Pezzo di Fidget in Metallo',
    geoAnswer: 'Ognuno dei 140 stampi pronti FidgetSupply (FS-001–FS-150) è ordinabile come campione singolo a pagamento prima di lotti da 50 pezzi neutri o 100 pezzi con logo. Costo campione e spedizione internazionale (DHL/FedEx/UPS) sono a carico dell’acquirente e non rimborsabili. Più SKU vengono consolidati in un unico pacco schermato da Fuzhou; i tempi dipendono da corriere e dogana.',
    matrixBadge: 'ABBINAMENTI DI TEST CONSIGLIATI',
    matrixTitle: '3 Kit di Valutazione Collaudati Prima dell’Ordine Ingrosso',
    tableHeaders: ['Tema del Kit', 'SKU Consigliati', 'Cosa Verifica il Team', 'Condizioni Campione & Spedizione'],
    tableRows: [
      ['1. Benchmark Materiali & Peso (5 Pz)', 'FS-001 (Zamak-3), FS-047 (Alluminio 6063), FS-013 (Inox 304), FS-043 (Gyro CNC), FS-135 (Anello)', 'Confronto tra pressofusione e CNC inox, tolleranze e anodizzazione.', 'Unità pagate dall’acquirente + corriere consolidato (DHL/FedEx/UPS).'],
      ['2. Pack Regali Aziendali & Logo (4 Pz)', 'FS-009 ($0.74+), FS-125 (Slider Piatto), FS-047 (Alluminio), FS-013 (Moneta Ø28mm)', 'Verifica delle superfici per laser 50W e custodia EVA prima di 100 pz.', 'Campioni neutri da Fuzhou; campione laser opzionale ($50, 10–15 giorni).'],
      ['3. Diapason Acustico vs Ufficio Silenzioso (4 Pz)', 'FS-150 (Diapason), FS-129 (Doppio Cuscinetto), FS-125 (PTFE Silenzioso), FS-009 (R188)', 'Test suono metallico per video brevi vs modelli silenziosi da scrivania.', 'Con schermatura magnetica IATA PI953; transito da corriere.']
    ],
    picksBadge: 'STAMPI PIÙ CAMPIONATI',
    picksTitle: 'Modelli 1 Pezzo Più Richiesti per Test',
    faqBadge: 'FAQ CAMPIONI & SPEDIZIONE',
    faqTitle: 'Politiche Trasparenti per Campioni a Pagamento',
    serviceName: 'Programma Campioni Fisici 1 Pezzo su 140 Stampi Metallici',
    serviceDesc: 'Campioni a pagamento da 1 pezzo su 140 stampi pronti; unità e corriere internazionale a carico dell’acquirente.',
    faqs: [
      { question: 'Posso ordinare 1 solo pezzo prima di impegnarmi su 50 pezzi all’ingrosso?', answer: 'Sì, tutti i 140 stampi (FS-001–FS-150) sono disponibili a singolo pezzo per testare magneti e finiture.' },
      { question: 'Chi paga campioni e corriere e sono rimborsabili?', answer: 'Essendo stampi di serie pronti, campioni e spedizione internazionale (DHL/FedEx/UPS) sono a carico dell’acquirente e non rimborsabili.' },
      { question: 'Posso combinare da 3 a 10 SKU diversi in una sola spedizione?', answer: 'Sì, consolidare più SKU in un pacco schermato da Fuzhou riduce il costo per unità.' },
      { question: 'Quali sono i tempi di preparazione e consegna internazionale?', answer: 'I campioni a stock richiedono 5–7 giorni lavorativi di QC e schermatura PI953; la consegna finale dipende da corriere e dogana.' },
      { question: 'Serve un imballo aereo speciale per i campioni magnetici?', answer: 'Sì, inseriamo schermatura ferromagnetica IATA PI953 sui pacchi multi-unità.' },
      { question: 'Posso avere un campione con logo laser prima di ordinare 100 pezzi?', answer: 'Sì (10–15 giorni): $50 USD per laser 50W o $80–$150 USD per incisione profonda + smalto più corriere, con bozza 12h gratuita.' },
      { question: 'Quali modelli confrontano meglio lega di zinco e acciaio inox CNC?', answer: 'Abbina FS-001 o FS-009 ($0.74+) a FS-047 (alluminio) e FS-043 o FS-075 (inox 304 CNC).' },
      { question: 'Come confrontare diapason acustici e fidget da ufficio silenziosi?', answer: 'Confronta FS-150 con FS-125 PTFE o FS-009 R188.' },
      { question: 'Quali pagamenti accettate per i campioni?', answer: 'PayPal, Wise e bonifico bancario (T/T) su preventivo con lista SKU e CAP.' },
      { question: 'Quali confezioni e MOQ si applicano in produzione?', answer: 'Neutri MOQ 50 pz in bustina sottovuoto ($0.00); laser 50W o custodia EVA (+$0.75+/pz) da 100 pz; cofanetto rigido (+$1.45+/pz) da 500 pz; scatola metallo da 1.000+ pz.' }
    ]
  },
  pt: {
    bcCurrent: 'Kit Amostra 1 Un.',
    badge1: 'Amostra Paga de Avaliação (1 Un.)',
    badge2: '140 Moldes Prontos · Envio Combinado',
    kpis: [
      { label: 'Amostra Mínima', val: '1 Un. / SKU' },
      { label: 'Amostra e Frete', val: 'Pago pelo Comprador' },
      { label: 'Embalagem', val: 'Multi-SKU Combinado' },
      { label: 'Transportadora', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: 'Tabela de Preços 140 SKU →',
    showcasePill: 'BANCADA DE AVALIAÇÃO FÍSICA',
    showcaseMoldCount: '140 Moldes Prontos',
    showcaseAlt: 'Kit de avaliação de 1 unidade de fidget metálico em liga de zinco, alumínio e aço inox',
    showcaseMeta: ['Amostra Paga · Termos Claros', 'Blindagem PI953', 'Envio Direto de Fuzhou'],
    geoTitle: 'Resposta Direta: Como Pedir Amostras de 1 Unidade de Fidget Metálico',
    geoAnswer: 'Todos os 140 moldes prontos da FidgetSupply (FS-001 a FS-150) podem ser pedidos como amostra física paga de 1 unidade antes de lotes de 50 peças lisas ou 100 com logotipo. O valor da amostra e o frete internacional (DHL/FedEx/UPS) são pagos pelo comprador e não reembolsáveis. Consolidamos vários SKUs em um pacote blindado de Fuzhou; o prazo de trânsito depende da transportadora e alfândega.',
    matrixBadge: 'COMBINAÇÕES DE AVALIAÇÃO',
    matrixTitle: '3 Kits de Amostra Recomendados Antes da Compra no Atacado',
    tableHeaders: ['Tema do Kit', 'SKUs Recomendados', 'O que sua Equipe Avalia', 'Termos de Amostra e Envio'],
    tableRows: [
      ['1. Comparativo de Materiais e Peso (5 Un.)', 'FS-001 (Zamak-3), FS-047 (Alu 6063), FS-013 (Inox 304), FS-043 (Gyro CNC), FS-135 (Anel)', 'Comparar peso fundido vs. precisão CNC em inox e acabamento anodizado.', 'Unidades pagas pelo comprador + frete consolidado DHL/FedEx/UPS.'],
      ['2. Pack Brindes Corporativos e Laser (4 Un.)', 'FS-009 ($0.74+), FS-125 (Slider Plano), FS-047 (Alu), FS-013 (Moeda Ø28mm)', 'Testar área plana de laser 50W e encaixe no estojo EVA antes de 100 un.', 'Amostras lisas de Fuzhou; amostra a laser opcional ($50 setup, 10–15 dias).'],
      ['3. Diapasão Acústico vs. Escritório Silencioso (4 Un.)', 'FS-150 (Diapasão), FS-129 (Duplo Rolamento), FS-125 (PTFE Silencioso), FS-009 (R188)', 'Avaliar som metálico para e-commerce vs. operação silenciosa corporativa.', 'Embalado com blindagem IATA PI953; prazo conforme transportadora.']
    ],
    picksBadge: 'MOLDES MAIS AMOSTRADOS',
    picksTitle: 'Modelos de Avaliação 1 Unidade Mais Pedidos',
    faqBadge: 'FAQ DE AMOSTRAS E FRETE',
    faqTitle: 'Políticas Transparentes para Amostras Pagas',
    serviceName: 'Programa de Amostras Físicas de 1 Unidade em 140 Moldes Metálicos',
    serviceDesc: 'Amostras pagas de 1 peça em 140 moldes prontos; unidade e frete internacional por conta do comprador.',
    faqs: [
      { question: 'Posso pedir apenas 1 unidade antes de um pedido de 50 peças no atacado?', answer: 'Sim, todos os 140 modelos (FS-001 a FS-150) aceitam pedido de amostra paga de 1 peça.' },
      { question: 'Quem paga a amostra e o frete internacional e há reembolso?', answer: 'Por serem moldes de produção prontos, amostras e frete (DHL/FedEx/UPS) são pagos pelo comprador e não reembolsáveis.' },
      { question: 'Posso misturar 3 a 10 SKUs em um único envio de amostra?', answer: 'Sim, consolidar múltiplos SKUs em um pacote de Fuzhou reduz o custo de frete por peça.' },
      { question: 'Como funcionam a preparação e o prazo de entrega internacional?', answer: 'Amostras em estoque passam por 5–7 dias úteis de QC e blindagem PI953 em Fuzhou; o trânsito final depende da transportadora e alfândega.' },
      { question: 'Pacotes magnéticos exigem blindagem aérea?', answer: 'Sim, aplicamos blindagem ferromagnética IATA PI953 em pacotes multi-unidade.' },
      { question: 'Posso pedir amostra com logo a laser antes de 100 unidades?', answer: 'Sim (10–15 dias): $50 USD laser 50W ou $80–$150 USD gravação profunda + esmalte mais frete; prova digital grátis em 12h.' },
      { question: 'Quais modelos comparam melhor liga de zinco vs. inox CNC?', answer: 'Compare FS-001 ou FS-009 ($0.74+) com FS-047 (Alu) e FS-043 ou FS-075 (Inox 304).' },
      { question: 'Quais modelos comparam diapasão acústico vs. escritório silencioso?', answer: 'Teste FS-150 contra FS-125 PTFE ou FS-009 R188.' },
      { question: 'Quais formas de pagamento aceitam para amostras?', answer: 'PayPal, Wise e transferência bancária (T/T) mediante lista de SKUs e CEP.' },
      { question: 'Quais embalagens e MOQ valem para pedidos em volume?', answer: 'Liso MOQ 50 un. em saco a vácuo ($0.00); laser 50W ou estojo EVA (+$0.75+/un.) a partir de 100 un.; caixa rígida (+$1.45+/un.) a partir de 500 un.; lata metálica a partir de 1.000+ un.' }
    ]
  },
  sv: {
    bcCurrent: '1-St Provpaket',
    badge1: 'Betalt 1-Stycks Utvärderingsprov',
    badge2: '140 Färdiga Formar · Samfraktspaket',
    kpis: [
      { label: 'Min. Provantal', val: '1 St / SKU' },
      { label: 'Prov & Frakt', val: 'Köparen Betalar' },
      { label: 'Paketering', val: 'Multi-SKU Samfrakt' },
      { label: 'Kurirleverans', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: '140-SKU Prislista →',
    showcasePill: 'FYSISK PROVUTVÄRDERING',
    showcaseMoldCount: '140 Färdiga Formar',
    showcaseAlt: '1-stycks metallfidget utvärderingsprov i zinklegering, aluminium och rostfritt stål',
    showcaseMeta: ['Betalt Prov · Tydliga Villkor', 'PI953 Magnetisk Skärmning', 'Direkt från Fuzhou'],
    geoTitle: 'Direktsvar: Så Beställer Ni 1-Stycksprov av Metallfidgets',
    geoAnswer: 'Alla 140 färdiga metallformar hos FidgetSupply (FS-001 till FS-150) kan beställas som betalda 1-stycksprover innan 50 st blanka eller 100 st logomärkta grossistorder. Provkostnad och internationell kurirfrakt (DHL/FedEx/UPS) betalas av köparen och återbetalas ej. Flera SKU:er samlastas i ett magnetiskt skärmat paket från Fuzhou; transittid styrs av fraktbolag och tull.',
    matrixBadge: 'UTVALDA PROVPAKET',
    matrixTitle: '3 Beprövade Testset Före Grossistbeställning',
    tableHeaders: ['Testpaketets Fokus', 'Rekommenderade SKU:er', 'Vad Teamet Utvärderar', 'Prov- & Fraktvillkor'],
    tableRows: [
      ['1. Material- & Viktjämförelse (5 St)', 'FS-001 (Zamak-3), FS-047 (Alu 6063), FS-013 (304 RFR), FS-043 (CNC Gyro), FS-135 (Ring)', 'Jämför gjuten zinkvikt mot CNC-stål och anodiserad ytfinish.', 'Köparen betalar prover + samfrakt med DHL/FedEx/UPS.'],
      ['2. Företagsprofil & Gravyrpaket (4 St)', 'FS-009 ($0.74+), FS-125 (Platt Slider), FS-047 (Alu), FS-013 (Mynt Ø28mm)', 'Kontrollera plana 50W laserytor och passform i EVA-fodral före 100 st.', 'Blanka lagerprover från Fuzhou; valfritt laserprov ($50, 10–15 dagar).'],
      ['3. Akustisk Stämgaffel vs Tyst Kontor (4 St)', 'FS-150 (Stämgaffel), FS-129 (Dubbellager), FS-125 (Tyst PTFE), FS-009 (Tyst R188)', 'Testa metallklang för e-handel mot lågmälda skrivbordsmodeller.', 'Packat med IATA PI953-skärmning; kurir styr leveranstid.']
    ],
    picksBadge: 'MEST BESTÄLLDA SERIEFORMAR',
    picksTitle: 'Populäraste 1-Stycks Utvärderingsmodellerna',
    faqBadge: 'VANLIGA FRÅGOR OM PROVER',
    faqTitle: 'Transparenta Villkor för Betalda Prover',
    serviceName: '1-Stycks Provprogram för 140 Färdiga Metallfidgets',
    serviceDesc: 'Betalda 1-st utvärderingsprover från 140 färdiga formar; prov- och kurirfrakt betalas av köparen.',
    faqs: [
      { question: 'Kan vi beställa endast 1 styck före en grossistorder på 50 st?', answer: 'Ja, alla 140 modeller (FS-001 till FS-150) finns som betalt 1-st prov.' },
      { question: 'Vem betalar prover och kurirfrakt, och återbetalas avgiften?', answer: 'Eftersom befintliga serieformar används betalas provpris och frakt (DHL/FedEx/UPS) av köparen och återbetalas ej.' },
      { question: 'Kan vi blanda 3–10 olika SKU:er i samma provpaket?', answer: 'Ja, samlastning från Fuzhou sänker fraktkostnaden per enhet avsevärt.' },
      { question: 'Hur lång är hanteringstiden och internationell leverans?', answer: 'Lagerprover får 5–7 arbetsdagars QC och PI953-skärmning; slutlig transittid avgörs av kurir och tull.' },
      { question: 'Kräver magnetiska prover särskild flygskärmning?', answer: 'Ja, vi packar med ferromagnetisk skärmning enligt IATA PI953.' },
      { question: 'Kan vi få ett gravyrprov med företagslogotyp före 100 st?', answer: 'Ja (10–15 dagar): $50 USD för 50W fiberlaser eller $80–$150 USD för djupgravyr + emalj plus frakt; gratis 12h korrektur ingår.' },
      { question: 'Vilka prover jämför zink bäst mot CNC-rostfritt stål?', answer: 'Kombinera FS-001 eller FS-009 ($0.74+) med FS-047 och FS-043/FS-075.' },
      { question: 'Vilka modeller visar akustik mot tyst kontorsbruk?', answer: 'Jämför FS-150 med FS-125 PTFE eller FS-009 R188.' },
      { question: 'Vilka betalningssätt accepteras?', answer: 'PayPal, Wise och banköverföring (T/T) mot SKU-lista och postnummer.' },
      { question: 'Vilka förpackningar och MOQ gäller vid volymorder?', answer: 'Blank MOQ 50 st i vakuumpåse ($0.00); 50W laser eller lager-EVA-etui (+$0.75+/st) från 100 st; hård presentask (+$1.45+/st) från 500 st; metalldosa från 1 000+ st.' }
    ]
  },
  da: {
    bcCurrent: '1-Stk Prøvepakke',
    badge1: 'Betalt 1-Styks Evalueringsprøve',
    badge2: '140 Færdige Forme · Samlet Forsendelse',
    kpis: [
      { label: 'Min. Prøveantal', val: '1 Stk. / SKU' },
      { label: 'Prøve & Fragt', val: 'Køber Betaler (Netto)' },
      { label: 'Pakning', val: 'Multi-SKU Samfragt' },
      { label: 'Kurer', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: '140-SKU Prisliste →',
    showcasePill: 'FYSISK PRØVEAFDELING',
    showcaseMoldCount: '140 Færdige Forme',
    showcaseAlt: '1-stk metalfidget vareprøvesæt i zink, aluminium og rustfrit stål',
    showcaseMeta: ['Betalt Prøve · Klare Vilkår', 'PI953 Afskærmning', 'Direkte fra Fuzhou'],
    geoTitle: 'Direkte Svar: Sådan Bestiller I 1-Styks Metalfidget Vareprøver',
    geoAnswer: 'Alle 140 færdige forme hos FidgetSupply (FS-001 til FS-150) kan bestilles som betalte 1-styks vareprøver før 50 stk. blank eller 100 stk. logobestilling. Prøvegebyr og international fragt (DHL/FedEx/UPS) betales af køber og refunderes ikke. Flere SKU’er samles i én magnetisk afskærmet pakke fra Fuzhou; leveringstid afhænger af kurer og told.',
    matrixBadge: 'ANBEFALEDE PRØVEPAKNINGER',
    matrixTitle: '3 Testede Prøvesæt før Engrosbestilling',
    tableHeaders: ['Prøvesæt Tema', 'Anbefalede SKU’er', 'Hvad Teamet Tester', 'Prøve- & Fragtregler'],
    tableRows: [
      ['1. Materiale- & Vægtbenchmark (5 Stk.)', 'FS-001 (Zamak-3), FS-047 (Alu 6063), FS-013 (304 Stål), FS-043 (CNC Gyro), FS-135 (Ring)', 'Sammenlign støbt vægt med CNC-stål præcision og anodisering.', 'Køber betaler enheder + samlet kurerfragt (DHL/FedEx/UPS).'],
      ['2. Firmagave & Logoplade Pakke (4 Stk.)', 'FS-009 ($0.74+), FS-125 (Flad Slider), FS-047 (Alu), FS-013 (Mønt Ø28mm)', 'Test 50W laserflader og EVA-etui pasform før 100 stk. logoordre.', 'Blanke lagerprøver fra Fuzhou; valgfrit laserprøve ($50, 10–15 dage).'],
      ['3. Akustisk Stemmegaffel vs. Stille Kontor (4 Stk.)', 'FS-150 (Stemmegaffel), FS-129 (Dobbelt Leje), FS-125 (Stille PTFE), FS-009 (R188)', 'Test klar metalklang til e-handel vs. støjsvage kontor-fidgets.', 'Pakket med IATA PI953 afskærmning; kurer afgør transittid.']
    ],
    picksBadge: 'MEST TESTEDE FORME',
    picksTitle: 'Mest Efterspurgte 1-Styks Testmodeller',
    faqBadge: 'PRØVE & LOGISTIK FAQ',
    faqTitle: 'Gennemskuelige Regler for Betalte Prøver',
    serviceName: '1-Styks Metalfidget Vareprøveprogram fra 140 Forme',
    serviceDesc: 'Betalte 1-stk vareprøver fra 140 metalforme; køber betaler prøve og international kurer.',
    faqs: [
      { question: 'Kan vi bestille kun 1 stk. før en 50-stk. engrosordre?', answer: 'Ja, alle 140 SKU’er (FS-001 til FS-150) fås som betalt 1-stk. evalueringsprøve.' },
      { question: 'Hvem betaler prøver og fragt, og refunderes beløbet?', answer: 'Da eksisterende serieforme bruges, betales prøve og kurer (DHL/FedEx/UPS) af køber og refunderes ikke.' },
      { question: 'Kan 3 til 10 SKU’er sendes samlet i én pakke?', answer: 'Ja, samlet afsendelse fra Fuzhou sænker fragten pr. enhed markant.' },
      { question: 'Hvor hurtigt klargøres prøver og hvor længe tager fragt?', answer: 'Lagerprøver klargøres med 5–7 hverdages QC og PI953-afskærmning; endelig transittid afhænger af kurer og told.' },
      { question: 'Kræver magnetiske prøver særlig luftfragtafskærmning?', answer: 'Ja, vi bruger ferromagnetisk afskærmning i henhold til IATA PI953.' },
      { question: 'Kan vi bestille logograveret prøve før 100 stk.?', answer: 'Ja (10–15 dage): $50 USD for 50W laser eller $80–$150 USD for dyb laser + emalje plus fragt; gratis 12t digital korrektur.' },
      { question: 'Hvilke modeller viser forskellen på zink og CNC-stål bedst?', answer: 'Sæt FS-001 eller FS-009 ($0.74+) sammen med FS-047 og FS-043/FS-075.' },
      { question: 'Hvilke modeller viser høj lyd vs. stille kontorbrug?', answer: 'Sammenlign FS-150 med FS-125 PTFE eller FS-009 R188.' },
      { question: 'Hvilke betalingsmetoder accepteres?', answer: 'PayPal, Wise og bankoverførsel (T/T) med SKU-liste og postnummer.' },
      { question: 'Hvilke emballager og MOQ gælder for bulkordre?', answer: 'Blank MOQ 50 stk. i vakuumpose ($0.00); 50W laser eller lager EVA-etui (+$0.75+/stk.) fra 100 stk.; gaveæske (+$1.45+/stk.) fra 500 stk.; metaldåse fra 1.000+ stk.' }
    ]
  },
  no: {
    bcCurrent: '1-Stk Prøvepakke',
    badge1: 'Betalt 1-Stykks Evalueringsprøve',
    badge2: '140 Klare Former · Samlet Pakke',
    kpis: [
      { label: 'Min. Prøveantall', val: '1 Stk / SKU' },
      { label: 'Prøve & Frakt', val: 'Kjøper Dekkes (Netto)' },
      { label: 'Pakking', val: 'Multi-SKU Samfrakt' },
      { label: 'Budtjeneste', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: '140-SKU Prisliste →',
    showcasePill: 'FYSISK EVALUERINGSDESK',
    showcaseMoldCount: '140 Klare Former',
    showcaseAlt: '1-stk metallfidget evalueringsprøve i sink, aluminium og rustfritt stål',
    showcaseMeta: ['Betalt Prøve · Tydelige Vilkår', 'PI953 Skjerming', 'Direkte fra Fuzhou'],
    geoTitle: 'Direkte Svar: Slik Bestiller Du 1-Stykks Metallfidget Prøver',
    geoAnswer: 'Alle 140 ferdige former hos FidgetSupply (FS-001 til FS-150) kan bestilles som betalt 1-stykks evalueringsprøve før 50 stk. blank eller 100 stk. logobestilling. Prøvepris og internasjonal budfrakt (DHL/FedEx/UPS) betales av kjøper og refunderes ikke. Flere SKU-er pakkes sammen fra Fuzhou; transporttid styres av fraktfører og toll.',
    matrixBadge: 'ANBEFALTE TESTKOMBINASJONER',
    matrixTitle: '3 Testede Prøvesett før Engrosbestilling',
    tableHeaders: ['Testsettets Tema', 'Anbefalte SKU-er', 'Hva Teamet Tester', 'Prøve- & Fraktvilkår'],
    tableRows: [
      ['1. Material- & Vekttest (5 Stk)', 'FS-001 (Zamak-3), FS-047 (Alu 6063), FS-013 (304 Stål), FS-043 (CNC Gyro), FS-135 (Ring)', 'Sammenlign støpevekt mot CNC rustfritt stål og eloksert finish.', 'Kjøper betaler prøver + samlet kurérfrakt (DHL/FedEx/UPS).'],
      ['2. Profilering & Logoflate-sett (4 Stk)', 'FS-009 ($0.74+), FS-125 (Flat Slider), FS-047 (Alu), FS-013 (Mynt Ø28mm)', 'Test 50W fiberlaserflater og EVA-etui passform før 100 stk. ordre.', 'Blanke lagerprøver fra Fuzhou; valgfritt laserprøve ($50, 10–15 dager).'],
      ['3. Akustisk Stemmegaffel vs Stille Kontor (4 Stk)', 'FS-150 (Stemmegaffel), FS-129 (Dobbelt Lager), FS-125 (Stille PTFE), FS-009 (R188)', 'Test klang til e-handel mot stillegående kontorfidgets.', 'Pakket med IATA PI953 magnetisk skjerming; bud bestemmer tid.']
    ],
    picksBadge: 'MEST TESTEDE FORMER',
    picksTitle: 'Mest Etterspurte 1-Stykks Prøvemodeller',
    faqBadge: 'PRØVE- & FRAKT-FAQ',
    faqTitle: 'Gjennomsiktige Vilkår for Betalte Prøver',
    serviceName: '1-Stykks Metallfidget Evalueringsprøveprogram',
    serviceDesc: 'Betalte 1-stk evalueringsprøver fra 140 former; kjøper dekker prøve og internasjonal frakt.',
    faqs: [
      { question: 'Kan vi bestille kun 1 stykk før en 50-stk. engrosordre?', answer: 'Ja, alle 140 SKU-er (FS-001 til FS-150) kan bestilles som 1-stk betalt evalueringsprøve.' },
      { question: 'Hvem betaler prøver og frakt, og refunderes det?', answer: 'Fordi eksisterende former brukes, betales prøve og frakt (DHL/FedEx/UPS) av kjøper uten refusjon.' },
      { question: 'Kan vi samle 3–10 ulike SKU-er i én pakke?', answer: 'Ja, samfrakt fra Fuzhou senker kostnaden per prøve betraktelig.' },
      { question: 'Hvordan fungerer klargjøring og leveringstid?', answer: 'Lagerprøver får 5–7 virkedagers QC og PI953-skjerming før avsendelse; bud og toll styrer endelig levering.' },
      { question: 'Krever magnetiske prøver spesiell flyskjerming?', answer: 'Ja, vi pakker med ferromagnetisk skjerming etter IATA PI953.' },
      { question: 'Kan vi bestille logogravert prøve før 100 stk.?', answer: 'Ja (10–15 dager): $50 USD for 50W fiberlaser eller $80–$150 USD for dyp laser + emalje pluss frakt; gratis 12t korrektur.' },
      { question: 'Hvilke modeller viser forskjellen på sink og CNC-stål?', answer: 'Kombiner FS-001 eller FS-009 ($0.74+) med FS-047 og FS-043/FS-075.' },
      { question: 'Hvilke modeller viser høy klang mot stille kontor?', answer: 'Sammenlign FS-150 med FS-125 PTFE eller FS-009 R188.' },
      { question: 'Hvilke betalingsmåter godtas?', answer: 'PayPal, Wise og bankoverføring (T/T) mot SKU-liste og postnummer.' },
      { question: 'Hvilken emballasje og MOQ gjelder ved seriebestilling?', answer: 'Blank MOQ 50 stk. i vakuumpose ($0.00); 50W laser eller lager EVA-etui (+$0.75+/stk.) fra 100 stk.; gaveeske (+$1.45+/stk.) fra 500 stk.; metallboks fra 1 000+ stk.' }
    ]
  },
  fi: {
    bcCurrent: '1 Kpl Näytepaketti',
    badge1: 'Maksullinen 1 Kpl Arviointinäyte',
    badge2: '140 Valmista Muottia · Yhdistetty Lähetys',
    kpis: [
      { label: 'Min. Näytemäärä', val: '1 Kpl / SKU' },
      { label: 'Näyte & Rahti', val: 'Ostajan Kustannuksella' },
      { label: 'Pakkaus', val: 'Multi-SKU Yhdistetty' },
      { label: 'Kuriiri', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: '140-SKU Hinnasto →',
    showcasePill: 'FYYSINEN NÄYTEARVIOINTI',
    showcaseMoldCount: '140 Valmista Muottia',
    showcaseAlt: '1 kpl metallifidget arviointinäytesetti sinkkiseoksesta, alumiinista ja teräksestä',
    showcaseMeta: ['Maksullinen Näyte · Selkeät Ehdot', 'PI953 Suojaus', 'Suoraan Fuzhousta'],
    geoTitle: 'Suora Vastaus: Näin 1 Kpl Metallifidget-Näytteen Tilaus Toimii',
    geoAnswer: 'Kaikki FidgetSupplyn 140 valmista metallimuottia (FS-001–FS-150) ovat tilattavissa maksullisina 1 kappaleen arviointinäytteinä ennen 50 kpl merkkaamatonta tai 100 kpl logotilausta. Näytekappaleet ja kansainvälinen kuriirirahti (DHL/FedEx/UPS) ovat ostajan maksamia eikä niitä hyvitetä. Useampi malli yhdistetään yhteen magneettisuojattuun pakettiin Fuzhousta; toimitusnopeus riippuu kuriirista ja tullista.',
    matrixBadge: 'SUOSITELLUT NÄYTEYHDISTELMÄT',
    matrixTitle: '3 Testattua Näytepakettia Ennen Tukkutilausta',
    tableHeaders: ['Näytesetin Teema', 'Suositellut SKU:t', 'Mitä Tiimi Arvioi', 'Näyte- & Toimitusehdot'],
    tableRows: [
      ['1. Materiaali- & Painovertailu (5 Kpl)', 'FS-001 (Zamak-3), FS-047 (Alu 6063), FS-013 (304 Teräs), FS-043 (CNC Gyro), FS-135 (Sormus)', 'Vertaa valumetallia CNC-teräksen tarkkuuteen ja anodisointiin.', 'Ostaja maksaa näytteet + yhdistetyn kuriirirahdin (DHL/FedEx/UPS).'],
      ['2. Yrityslogot & Pintamallit (4 Kpl)', 'FS-009 ($0.74+), FS-125 (Sileä Slider), FS-047 (Alu), FS-013 (Kolikko Ø28mm)', 'Testaa 50W laserpinnat ja EVA-kotelon istuvuus ennen 100 kpl erää.', 'Merkkaamattomat varastonäytteet Fuzhousta; valinnainen lasernäyte ($50, 10–15 pv).'],
      ['3. Akustinen Äänirauta vs Hiljainen Toimisto (4 Kpl)', 'FS-150 (Äänirauta), FS-129 (Kaksoislaakeri), FS-125 (Hiljainen PTFE), FS-009 (R188)', 'Testaa soittoääni verkkokauppaan vs. hiljainen toimistofidget.', 'Pakattu IATA PI953 -magneettisuojauksella; kuriiri määrää kulkuajan.']
    ],
    picksBadge: 'ENITEN TILATUT MUOTIT',
    picksTitle: 'Kysytyimmät 1 Kpl Arviointimallit',
    faqBadge: 'NÄYTE- & LOGISTIIKKA-FAQ',
    faqTitle: 'Läpinäkyvät Ehdot Maksullisille Näytteille',
    serviceName: '1 Kpl Metallifidget Arviointinäyteohjelma (140 Muottia)',
    serviceDesc: 'Maksulliset 1 kpl näytteet 140 valmiista muotista; näyte ja kansainvälinen rahti ostajan vastuulla.',
    faqs: [
      { question: 'Voinko tilata vain 1 kappaleen ennen 50 kpl tukkutilausta?', answer: 'Kyllä, kaikki 140 muottia (FS-001–FS-150) ovat saatavilla 1 kpl arviointinäytteinä.' },
      { question: 'Kuka maksaa näytteet ja rahdin, ja hyvitetäänkö ne?', answer: 'Valmiiden sarjamuottien vuoksi ostaja maksaa näytehinnan ja rahdin (DHL/FedEx/UPS), eivätkä ne ole hyvitettäviä.' },
      { question: 'Voiko 3–10 eri mallia yhdistää samaan lähetykseen?', answer: 'Kyllä, Fuzhoun varasto yhdistää mallit yhteen suojattuun pakettiin.' },
      { question: 'Miten lähetysvalmistelu ja kansainvälinen kuljetus etenevät?', answer: 'Varastonäytteet saavat 5–7 arkipäivän QC-tarkastuksen ja PI953-suojauksen; kuriiri ja tulli määräävät lopullisen kulkuajan.' },
      { question: 'Tarvitsevatko magneettinäytteet erityisen lentorahtisuojauksen?', answer: 'Kyllä, pakkaamme IATA PI953 -standardin mukaisella ferromagneettisella suojauksella.' },
      { question: 'Saanko logolla merkityn esinäytteen ennen 100 kpl tilausta?', answer: 'Kyllä (10–15 pv): $50 USD 50W kuitulaserille tai $80–$150 USD syväkaiverrukselle + emalille sekä rahti; ilmainen 12h vedos.' },
      { question: 'Mitkä mallit näyttävät eron sinkkivalun ja CNC-teräksen välillä?', answer: 'Yhdistä FS-001 tai FS-009 ($0.74+) malleihin FS-047 ja FS-043/FS-075.' },
      { question: 'Mitkä mallit vertaavat äänirautaa hiljaiseen toimistomalliin?', answer: 'Vertaa FS-150:tä malleihin FS-125 PTFE tai FS-009 R188.' },
      { question: 'Mitä maksutapoja hyväksytään näytteille?', answer: 'PayPal, Wise ja pankkisiirto (T/T) SKU-listalla ja postinumerolla.' },
      { question: 'Mitä pakkauksia ja MOQ-määriä sovelletaan varsinaisessa tilauksessa?', answer: 'Merkkaamaton MOQ 50 kpl tyhjiöpussissa ($0.00); 50W laser tai varasto EVA-kotelo (+$0.75+/kpl) alk. 100 kpl; kova rasia (+$1.45+/kpl) alk. 500 kpl; peltirasia alk. 1 000+ kpl.' }
    ]
  },
  pl: {
    bcCurrent: 'Zestaw Próbny 1 Szt.',
    badge1: 'Płatna Próbka Testowa 1 Szt.',
    badge2: '140 Gotowych Form · Jedna Paczka',
    kpis: [
      { label: 'Min. Ilość Próbki', val: '1 Szt. / SKU' },
      { label: 'Próbka i Kurier', val: 'Koszt Kupującego' },
      { label: 'Pakowanie', val: 'Wspólna Paczka SKU' },
      { label: 'Kurier', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: 'Cennik 140 SKU →',
    showcasePill: 'DZIAŁ PRÓBEK FIZYCZNYCH',
    showcaseMoldCount: '140 Gotowych Form',
    showcaseAlt: 'Zestaw próbek metalowych fidgetów 1 szt. ze stopu cynku, aluminium i stali',
    showcaseMeta: ['Płatna Próbka · Jasne Zasady', 'Ekranowanie PI953', 'Wysyłka z Fuzhou'],
    geoTitle: 'Bezpośrednia Odpowiedź: Jak Działa Zamówienie 1 Sztuki Próbki Fidgeta',
    geoAnswer: 'Każdą ze 140 gotowych form FidgetSupply (FS-001 do FS-150) można zamówić jako płatną próbkę fizyczną od 1 sztuki przed zamówieniem 50 szt. bez logo lub 100 szt. z grawerem. Koszt próbki i wysyłki kurierskiej (DHL/FedEx/UPS) pokrywa kupujący (bezzwrotne). Wiele SKU łączymy w jedną paczkę ekranowaną z Fuzhou; czas tranzytu zależy od kuriera i odprawy celnej.',
    matrixBadge: 'SPRAWDZONE ZESTAWY TESTOWE',
    matrixTitle: '3 Zestawy Próbne do Porównania Przed Zakupem Hurtowym',
    tableHeaders: ['Motyw Zestawu', 'Polecane SKU', 'Co Testuje Zespół', 'Warunki Próbki i Wysyłki'],
    tableRows: [
      ['1. Porównanie Materiałów i Wagi (5 Szt.)', 'FS-001 (Zamak-3), FS-047 (Alu 6063), FS-013 (Stal 304), FS-043 (Gyro CNC), FS-135 (Pierścień)', 'Porównanie odlewu cynkowego z precyzją CNC i anodowaniem.', 'Opłata kupującego + wspólny kurier DHL/FedEx/UPS.'],
      ['2. Zestaw Firmowy pod Grawer Logo (4 Szt.)', 'FS-009 ($0.74+), FS-125 (Płaski Slider), FS-047 (Alu), FS-013 (Moneta Ø28mm)', 'Test płaskich stref pod laser 50W i etui EVA przed serią 100 szt.', 'Czyste próbki magazynowe z Fuzhou; opcjonalny wzór laserowy ($50, 10–15 dni).'],
      ['3. Akustyczny Kamerton vs Ciche Biuro (4 Szt.)', 'FS-150 (Kamerton), FS-129 (Podwójne Łożysko), FS-125 (Cichy PTFE), FS-009 (R188)', 'Test dźwięku metalicznego do e-commerce vs ciche modele biurowe.', 'Zabezpieczenie IATA PI953; czas zależy od kuriera.']
    ],
    picksBadge: 'NAJCZĘŚCIEJ TESTOWANE FORMY',
    picksTitle: 'Najpopularniejsze Modele Próbne 1 Szt.',
    faqBadge: 'FAQ PRÓBEK I LOGISTYKI',
    faqTitle: 'Przejrzyste Zasady Płatnych Próbek',
    serviceName: 'Program Próbek 1 Szt. ze 140 Gotowych Form Metalowych',
    serviceDesc: 'Płatne próbki od 1 sztuki ze 140 form; koszt sztuki i przesyłki zagranicznej pokrywa kupujący.',
    faqs: [
      { question: 'Czy mogę zamówić tylko 1 sztukę przed hurtem 50 szt.?', answer: 'Tak, wszystkie 140 form (FS-001 do FS-150) jest dostępnych jako płatna próbka 1 szt.' },
      { question: 'Kto płaci za próbki i kuriera oraz czy są zwrotne?', answer: 'Ponieważ używamy gotowych form produkcyjnych, próbki i kurier (DHL/FedEx/UPS) opłaca kupujący bez zwrotu.' },
      { question: 'Czy mogę połączyć 3–10 różnych modeli w jednej przesyłce?', answer: 'Tak, konsolidacja z Fuzhou znacznie obniża koszt wysyłki za sztukę.' },
      { question: 'Ile trwa przygotowanie wysyłki i transport?', answer: 'Próbki z magazynu przechodzą 5–7 dni roboczych QC i pakowania PI953; czas dostawy zależy od kuriera i cła.' },
      { question: 'Czy paczki magnetyczne wymagają osłony lotniczej?', answer: 'Tak, stosujemy ekranowanie ferromagnetyczne zgodne z IATA PI953.' },
      { question: 'Czy mogę zamówić próbkę z grawerem logo przed 100 szt.?', answer: 'Tak (10–15 dni): $50 USD laser 50W lub $80–$150 USD głęboki laser + emalia plus kurier; wizualizacja 12h gratis.' },
      { question: 'Które modele najlepiej zestawiają cynk z CNC stalą?', answer: 'Połącz FS-001 lub FS-009 ($0.74+) z FS-047 oraz FS-043 lub FS-075.' },
      { question: 'Które modele pokazują głośny kamerton vs ciche biuro?', answer: 'Porównaj FS-150 z FS-125 PTFE lub FS-009 R188.' },
      { question: 'Jakie metody płatności są akceptowane?', answer: 'PayPal, Wise i przelew bankowy (T/T) po podaniu listy SKU i kodu pocztowego.' },
      { question: 'Jakie opakowania i MOQ obowiązują przy pełnym zamówieniu?', answer: 'Bez logo MOQ 50 szt. w woreczku próżniowym ($0.00); laser 50W lub etui EVA (+$0.75+/szt.) od 100 szt.; sztywne pudełko (+$1.45+/szt.) od 500 szt.; puszka metalowa od 1 000+ szt.' }
    ]
  },
  cs: {
    bcCurrent: 'Vzorek 1 Ks',
    badge1: 'Placený Hodnotící Vzorek (1 Ks)',
    badge2: '140 Hotových Forem · Společný Balík',
    kpis: [
      { label: 'Min. Množství Vzorku', val: '1 Ks / SKU' },
      { label: 'Vzorek a Doprava', val: 'Hradí Kupující' },
      { label: 'Balení', val: 'Multi-SKU Sdruženo' },
      { label: 'Kurýr', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: 'Ceník 140 SKU →',
    showcasePill: 'STANICE FYZICKÝCH VZORKŮ',
    showcaseMoldCount: '140 Hotových Forem',
    showcaseAlt: 'Hodnotící sada 1 ks kovového fidgetu ze slitiny zinku, hliníku a nerezové oceli',
    showcaseMeta: ['Placený Vzorek · Jasné Podmínky', 'Stínění PI953', 'Expedice z Fuzhou'],
    geoTitle: 'Přímá Odpověď: Jak Funguje Objednávka 1 Ks Vzorku Kovového Fidgetu',
    geoAnswer: 'Každou ze 140 hotových forem FidgetSupply (FS-001 až FS-150) lze objednat jako placený vzorek po 1 kusu před odběrem 50 ks bez loga nebo 100 ks s laserem. Vzorek i mezinárodní kurýra (DHL/FedEx/UPS) hradí kupující bez nároku na vrácení. Více SKU spojíme do jedné stíněné zásilky z Fuzhou; tranzitní dobu určuje přepravce a celnice.',
    matrixBadge: 'DOPORUČENÉ TESTOVACÍ SESTAVY',
    matrixTitle: '3 Osvědčené Vzorkové Sady Před Velkoobchodem',
    tableHeaders: ['Zaměření Sady', 'Doporučené SKU', 'Co Tým Ověřuje', 'Podmínky Vzorku a Dopravy'],
    tableRows: [
      ['1. Porovnání Materiálů a Hmotnosti (5 Ks)', 'FS-001 (Zamak-3), FS-047 (Hliník 6063), FS-013 (Nerez 304), FS-043 (CNC Gyro), FS-135 (Prsten)', 'Srovnání hmotnosti tlakového odlitku s CNC ocelí a eloxem.', 'Jednotky hrazené kupujícím + sdružený kurýr (DHL/FedEx/UPS).'],
      ['2. Sada pro Firemní Logo a Plochy (4 Ks)', 'FS-009 ($0.74+), FS-125 (Plochý Slider), FS-047 (Hliník), FS-013 (Mince Ø28mm)', 'Kontrola ploch pro 50W laser a pouzdra EVA před sérií 100 ks.', 'Skladové vzorky bez loga; volitelný laserový vzorek ($50, 10–15 dnů).'],
      ['3. Akustická Ladička vs Tichá Kancelář (4 Ks)', 'FS-150 (Ladička), FS-129 (Dvojité Ložisko), FS-125 (Tichý PTFE), FS-009 (R188)', 'Test kovového cinknutí pro e-shopy vs. tiché kancelářské modely.', 'Baleno se stíněním IATA PI953; doručení řídí kurýr.']
    ],
    picksBadge: 'NEJČASTĚJŠÍ ZKUŠEBNÍ FORMY',
    picksTitle: 'Nejžádanější Testovací Modely po 1 Kusu',
    faqBadge: 'FAQ VZORKŮ A LOGISTIKY',
    faqTitle: 'Transparentní Podmínky pro Placené Vzorky',
    serviceName: 'Program Fyzických Vzorků od 1 Ks ze 140 Kovových Forem',
    serviceDesc: 'Placené vzorky po 1 kusu ze 140 hotových forem; kusovou cenu a mezinárodní dopravu hradí kupující.',
    faqs: [
      { question: 'Mohu objednat jen 1 kus před velkoobchodní objednávkou 50 ks?', answer: 'Ano, všech 140 forem (FS-001 až FS-150) je dostupných jako placený 1ks testovací vzorek.' },
      { question: 'Kdo platí vzorky a dopravu a jsou vratné?', answer: 'Protože jde o stávající sériové formy, vzorky a kurýra (DHL/FedEx/UPS) hradí kupující a jsou nevratné.' },
      { question: 'Mohu zkombinovat 3 až 10 modelů do jedné zásilky?', answer: 'Ano, sdružení z Fuzhou výrazně snižuje náklady na dopravu jednoho kusu.' },
      { question: 'Jak probíhá příprava a mezinárodní přeprava?', answer: 'Skladové vzorky mají 5–7 pracovních dnů na QC a stínění PI953; konečnou lhůtu určuje kurýr a celnice.' },
      { question: 'Vyžadují magnetické balíky letecké stínění?', answer: 'Ano, používáme feromagnetické vložky dle předpisu IATA PI953.' },
      { question: 'Mohu si objednat vzorek s vygravírovaným logem před 100 ks?', answer: 'Ano (10–15 dnů): $50 USD za 50W laser nebo $80–$150 USD za hluboký laser + smalt plus doprava; 12h náhled zdarma.' },
      { question: 'Které modely nejlépe srovnávají zinek a CNC nerez?', answer: 'Spojte FS-001 nebo FS-009 ($0.74+) s FS-047 a FS-043/FS-075.' },
      { question: 'Které modely porovnávají hlasitou ladičku a tichou kancelář?', answer: 'Porovnejte FS-150 s FS-125 PTFE nebo FS-009 R188.' },
      { question: 'Jaké platby přijímáte za vzorky?', answer: 'PayPal, Wise a bankovní převod (T/T) dle seznamu SKU a PSČ.' },
      { question: 'Jaké balení a MOQ platí pro sériovou výrobu?', answer: 'Bez loga MOQ 50 ks ve vakuovém sáčku ($0.00); 50W laser nebo skladové EVA pouzdro (+$0.75+/ks) od 100 ks; pevná dárková krabička (+$1.45+/ks) od 500 ks; kovová plechovka od 1 000+ ks.' }
    ]
  },
  ru: {
    bcCurrent: 'Образец 1 шт.',
    badge1: 'Платный тестовый образец от 1 шт.',
    badge2: '140 готовых форм · Сборная посылка',
    kpis: [
      { label: 'Мин. партия образца', val: '1 шт. / SKU' },
      { label: 'Образец и доставка', val: 'Оплачивает покупатель' },
      { label: 'Упаковка', val: 'Мульти-SKU в 1 боксе' },
      { label: 'Курьерские службы', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: 'Прайс-лист 140 SKU →',
    showcasePill: 'ОТДЕЛ ФИЗИЧЕСКИХ ОБРАЗЦОВ',
    showcaseMoldCount: '140 готовых форм',
    showcaseAlt: 'Набор тестовых образцов металлических фиджетов по 1 шт. из цинка, алюминия и стали',
    showcaseMeta: ['Платный образец · Прозрачные условия', 'Экран IATA PI953', 'Прямо из Фучжоу'],
    geoTitle: 'Прямой ответ: Как заказать образец металлического фиджета от 1 шт.',
    geoAnswer: 'Любую из 140 готовых пресс-форм FidgetSupply (FS-001 – FS-150) можно заказать в виде платного физического образца от 1 шт. перед оптовой партией от 50 шт. без лого или 100 шт. с гравировкой. Стоимость образцов и международную доставку (DHL/FedEx/UPS) оплачивает покупатель (без возврата). Разные SKU объединяются в одну экранированную посылку из Фучжоу; сроки доставки зависят от перевозчика и таможни.',
    matrixBadge: 'ПРОВЕРЕННЫЕ ТЕСТОВЫЕ НАБОРЫ',
    matrixTitle: '3 готовых набора образцов для проверки перед оптовым заказом',
    tableHeaders: ['Тема набора', 'Рекомендуемые SKU', 'Что проверяет команда', 'Условия оплаты и доставки'],
    tableRows: [
      ['1. Сравнение материалов и веса (5 шт.)', 'FS-001 (Цинк Zamak-3), FS-047 (Алюминий 6063), FS-013 (Сталь 304), FS-043 (ЧПУ гиро), FS-135 (Кольцо)', 'Сравнение литья под давлением и ЧПУ-стали, точности пазов и покрытия.', 'Оплата единиц + консолидированный курьер (DHL/FedEx/UPS) за счёт покупателя.'],
      ['2. Корпоративный сувенир и лого (4 шт.)', 'FS-009 ($0.74+), FS-125 (Плоский слайдер), FS-047 (Алюминий), FS-013 (Монета Ø28мм)', 'Оценка ровных зон под 50W лазер и чехла EVA перед тиражом 100+ шт.', 'Образцы без лого со склада Фучжоу; тестовое нанесение лазера ($50, 10–15 дн.).'],
      ['3. Звучный камертон vs Тихий офис (4 шт.)', 'FS-150 (Камертон), FS-129 (Двойной подшипник), FS-125 (Тихий PTFE), FS-009 (R188)', 'Тест металлического резонанса для видеоконтента vs бесшумных моделей.', 'С экранированием IATA PI953; сроки определяет перевозчик.']
    ],
    picksBadge: 'ПОПУЛЯРНЫЕ ГОТОВЫЕ ФОРМЫ',
    picksTitle: 'Самые заказываемые модели для теста по 1 шт.',
    faqBadge: 'FAQ ПО ОБРАЗЦАМ И ЛОГИСТИКЕ',
    faqTitle: 'Честные условия по платным образцам',
    serviceName: 'Программа платных физических образцов от 1 шт. на 140 формах',
    serviceDesc: 'Платные образцы от 1 шт. из 140 готовых форм; образцы и курьерскую доставку оплачивает покупатель.',
    faqs: [
      { question: 'Можно ли заказать всего 1 шт. перед оптовым заказом от 50 шт.?', answer: 'Да, все 140 моделей (FS-001 – FS-150) доступны как платные образцы по 1 шт.' },
      { question: 'Кто оплачивает образцы и доставку, и возвращаются ли эти деньги?', answer: 'Так как используются готовые серийные формы, стоимость образцов и курьера (DHL/FedEx/UPS) оплачивает покупатель без возврата.' },
      { question: 'Можно ли объединить 3–10 разных SKU в одной посылке?', answer: 'Да, объединение в один бокс в Фучжоу заметно снижает стоимость доставки на единицу.' },
      { question: 'Как быстро отгружаются образцы и сколько идёт доставка?', answer: 'Подготовка складских образцов (QC и экранирование PI953) занимает 5–7 рабочих дней; сроки транзита определяют перевозчик и таможня.' },
      { question: 'Нужна ли магнитным посылкам спецзащита для авиадоставки?', answer: 'Да, многопозиционные магнитные боксы экранируются листами по стандарту IATA PI953.' },
      { question: 'Можно ли заказать тестовый образец с нашим логотипом до тиража 100 шт.?', answer: 'Да (10–15 дней): $50 USD за 50W лазер или $80–$150 USD за глубокий лазер + эмаль плюс курьер; цифровой макет за 12 ч бесплатно.' },
      { question: 'Какие модели лучше сравнить между цинком и ЧПУ-нержавейкой?', answer: 'Сопоставьте FS-001 или FS-009 ($0.74+) с FS-047 и FS-043/FS-075.' },
      { question: 'Какие модели сравнят звонкий камертон и тихий офис?', answer: 'Сравните FS-150 с FS-125 PTFE или FS-009 R188.' },
      { question: 'Какие способы оплаты принимаются за образцы?', answer: 'PayPal, Wise и банковский перевод (T/T) после расчёта по списку SKU и индексу.' },
      { question: 'Какая упаковка и MOQ действуют при серийном заказе?', answer: 'Без лого MOQ 50 шт. в вакуумном пакете ($0.00); 50W лазер или чехол EVA со склада (+$0.75+/шт.) от 100 шт.; жёсткая коробка (+$1.45+/шт.) от 500 шт.; жестяной бокс от 1 000+ шт.' }
    ]
  },
  ja: {
    bcCurrent: '1個サンプル注文',
    badge1: '有償 1個評価サンプル',
    badge2: '140種の既存金型・複数型同梱発送',
    kpis: [
      { label: '最小サンプル数', val: '1個 / SKU' },
      { label: 'サンプル代・送料', val: '買い手負担 (実費)' },
      { label: '梱包方式', val: '複数SKU同梱' },
      { label: '国際クーリエ', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: '140品番価格一覧 →',
    showcasePill: '実物評価サンプル窓口',
    showcaseMoldCount: '140既存金型',
    showcaseAlt: '亜鉛合金・アルミ・ステンレス製フィジェットトイ1個評価サンプルキット',
    showcaseMeta: ['有償サンプル・明朗条件', 'PI953磁気遮蔽梱包', '福州倉庫直送'],
    geoTitle: '結論：金属フィジェット1個評価サンプルの注文ルール',
    geoAnswer: 'FidgetSupplyの既存140金型（FS-001〜FS-150）はすべて、無地50個または名入れ100個の本発注前に1個単位で有償評価サンプルを注文できます。既存金型製品のため、サンプル本体代金および国際クーリエ送料（DHL/FedEx/UPS等）は買い手様ご負担（返金不可）となります。複数品番を福州拠点で磁気遮蔽の上1箱に同梱出荷でき、最終配送日数はクーリエと通関次第です。',
    matrixBadge: '推奨評価サンプルセット',
    matrixTitle: '本発注前の実機検証におすすめの3パターン',
    tableHeaders: ['評価セットテーマ', '推奨品番 (SKU)', '主な確認ポイント', 'サンプル・発送条件'],
    tableRows: [
      ['1. 素材・重量比較ベンチマーク (5個)', 'FS-001 (Zamak-3), FS-047 (アルミ6063), FS-013 (304ステンレス), FS-043 (CNCジャイロ), FS-135 (リング)', '亜鉛ダイカストの重厚感と5軸CNCステンレスの精度・表面処理を比較。', '本体代＋複数品番同梱クーリエ送料（DHL/FedEx/UPS）買い手様ご負担。'],
      ['2. 法人ノベルティ＆レーザー面検証 (4個)', 'FS-009 ($0.74+), FS-125 (平面スライダー), FS-047 (アルミ), FS-013 (Ø28mmコイン)', '50Wレーザー彫刻面、デスク上の質感、EVAケース収納性を100個発注前に確認。', '無地在庫サンプルを福州より発送。名入れ試作は有償($50〜・10〜15日)。'],
      ['3. 共鳴音叉 vs 静音オフィス比較 (4個)', 'FS-150 (音叉), FS-129 (複軸音叉), FS-125 (静音PTFE), FS-009 (静音R188)', 'SNS映えする金属音叉の響きとオフィス向け静音仕様を比較評価。', 'IATA PI953磁気遮蔽梱包済み、配送日数はクーリエ規定に準拠。']
    ],
    picksBadge: '人気の評価サンプル金型',
    picksTitle: '1個テスト注文の多い主力モデル',
    faqBadge: 'サンプル＆国際配送FAQ',
    faqTitle: '有償評価サンプルの明確な規定',
    serviceName: '既存140金型 金属フィジェット1個実物評価サンプルプログラム',
    serviceDesc: '既存140金型の有償1個評価サンプル。サンプル代・国際クーリエ送料は買い手様負担で福州より同梱出荷。',
    faqs: [
      { question: '無地50個の本発注前に1個だけサンプルを購入できますか？', answer: 'はい。全140品番（FS-001〜FS-150）を1個から有償評価サンプルとして手配可能です。' },
      { question: 'サンプル代と国際送料の負担および返金はどうなりますか？', answer: '既存金型の完成品であるため、サンプル代・国際送料ともに買い手様ご負担（返金・充当不可）となります。' },
      { question: '3〜10種類の異なるSKUを1箱にまとめて配送できますか？', answer: 'はい。福州出荷拠点で磁気遮蔽の上1箱に同梱するため、単品配送より1個あたり送料を大幅に抑えられます。' },
      { question: 'サンプル出荷準備と国際配送の日数はどのくらいですか？', answer: '在庫品は入金確認後5〜7営業日で検品とPI953磁気遮蔽梱包を行い引き渡します。到着日数は選択クーリエと現地通関に依存します。' },
      { question: '磁石入りフィジェットのサンプルは航空輸送の磁気対策が必要ですか？', answer: 'はい。複数同梱時はIATA PI953基準の鉄板シールドで磁気漏れを抑えて発送します。' },
      { question: '100個発注前に自社ロゴ入りの試作サンプルを作れますか？', answer: 'はい（製作10〜15日）。50Wレーザー試作は$50 USD、深彫り＋色入れは$80〜$150 USD（送料別）。12時間無料の版下校正も提供します。' },
      { question: '亜鉛合金とCNCステンレスの違いを体感できる組み合わせは？', answer: 'FS-001またはFS-009（$0.74〜）とFS-047（アルミ）、FS-043またはFS-075（CNC 304SS）の組み合わせが最適です。' },
      { question: '音叉サウンド系と静音デスク系を比較するおすすめ品番は？', answer: 'FS-150（音叉）とFS-125（PTFE静音）またはFS-009（静音R188）を比較してください。' },
      { question: 'サンプル注文の決済方法は何が使えますか？', answer: 'PayPal、Wise、銀行電信送金（T/T）に対応しています。希望SKUと郵便番号をお知らせください。' },
      { question: '評価後の量産最小ロット（MOQ）と標準・カスタム梱包仕様は？', answer: '無地はMOQ 50個（酸化防止真空パウチ$0.00標準）、50Wレーザー名入れ・既製EVAケース（+$0.75+/個）はMOQ 100個、ハードギフトボックス（+$1.45+/個）はMOQ 500個、窓付きブリキ缶はMOQ 1,000個〜です。' }
    ]
  },
  ko: {
    bcCurrent: '1개 샘플 키트',
    badge1: '유상 1개 평가 샘플 프로그램',
    badge2: '140종 기성 금형 · 합포장 발송',
    kpis: [
      { label: '최소 샘플 수량', val: '1개 / SKU' },
      { label: '샘플비 & 배송비', val: '구매자 부담 (비환불)' },
      { label: '합포장 기준', val: '다품종 1박스 발송' },
      { label: '국제 특송', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: '140종 공장 단가표 →',
    showcasePill: '실물 샘플 평가 데스크',
    showcaseMoldCount: '140종 기성 금형',
    showcaseAlt: '아연 합금, 알루미늄, 스테인리스 스틸 메탈 피젯 1개 유료 샘플 평가 키트',
    showcaseMeta: ['유료 샘플 · 투명 조건', 'IATA PI953 차폐 포장', '푸저우 직출고'],
    geoTitle: '직접 답변: 메탈 피젯 1개 평가 샘플 주문 및 합포장 기준',
    geoAnswer: 'FidgetSupply의 기성 140종 금속 금형(FS-001~FS-150)은 모두 무지 50개 또는 로고 각인 100개 본 발주 전에 1개 단위로 유상 실물 샘플을 주문하실 수 있습니다. 기성 금형 완제품이므로 샘플 단가 및 국제 특송비(DHL/FedEx/UPS)는 구매자 부담이며 환불되지 않습니다. 푸저우 물류 허브에서 다품종을 자기 차폐 1박스로 합포장 출고하며 최종 운송 기간은 특송사 및 세관에 따릅니다.',
    matrixBadge: '추천 샘플 평가 조합',
    matrixTitle: '대량 발주 전 실물 비교에 최적화된 3가지 샘플 구성',
    tableHeaders: ['샘플 구성 테마', '추천 모델 (SKU)', '주요 테스트 항목', '샘플 및 배송 조건'],
    tableRows: [
      ['1. 소재별 무게 & 마감 비교팩 (5개)', 'FS-001 (Zamak-3), FS-047 (알루미늄 6063), FS-013 (304 스틸), FS-043 (CNC 자이로), FS-135 (링)', '다이캐스팅 아연 합금과 5축 CNC 스테인리스 정밀도·아노다이징 비교.', '구매자 샘플비 + 합포장 특송비(DHL/FedEx/UPS) 실비 부담.'],
      ['2. 기업 판촉 & 레이저 각인 검증팩 (4개)', 'FS-009 ($0.74+), FS-125 (평면 슬라이더), FS-047 (알루미늄), FS-013 (코인 Ø28mm)', '50W 파이버 레이저 각인 면적 및 EVA 파우치 수납성 100개 발주 전 점검.', '푸저우 무지 재고 출고; 로고 시제품은 유료 별도($50, 10~15일).'],
      ['3. 극성중공 소리굽쇠 vs 저소음 오피스팩 (4개)', 'FS-150 (소리굽쇠), FS-129 (듀얼 베어링), FS-125 (저소음 PTFE), FS-009 (R188)', '숏폼·이커머스용 금속 공명음과 사무실용 저소음 슬라이더 비교.', 'IATA PI953 자기 차폐 포장 적용; 운송일은 특송사 기준.']
    ],
    picksBadge: '최다 요청 샘플 금형',
    picksTitle: '가장 많이 테스트되는 1개 평가 모델',
    faqBadge: '샘플 & 국제배송 FAQ',
    faqTitle: '유료 1개 샘플 및 물류 정책 안내',
    serviceName: '140종 기성 금형 메탈 피젯 1개 실물 샘플 프로그램',
    serviceDesc: '140종 기성 금형 1개 단위 유료 샘플 제공. 샘플비 및 국제 배송비 구매자 부담, 푸저우 합포장 출고.',
    faqs: [
      { question: '무지 50개 도매 발주 전에 딱 1개만 먼저 샘플로 받아볼 수 있나요?', answer: '네, FS-001부터 FS-150까지 전 140종 기성 금형 모델을 1개 단위로 유상 주문하여 자력, PTFE 슬라이드감, 공명음을 직접 확인하실 수 있습니다.' },
      { question: '샘플비와 국제 배송비는 누가 부담하며 추후 환불·공제되나요?', answer: '신규 금형 제작이 아닌 기성 금형 출고품이므로 샘플 제품비와 국제 특송비(DHL/FedEx/UPS) 모두 구매자 부담이며 비환불 조건입니다.' },
      { question: '서로 다른 3~10개 모델을 한 박스로 합포장하여 배송비를 줄일 수 있나요?', answer: '네, 푸저우 수출 허브에서 여러 SKU를 자기 차폐 1박스로 합포장 발송해 개당 물류비를 크게 낮출 수 있습니다.' },
      { question: '샘플 출고 준비 기간과 해외 배송 소요는 어떻게 되나요?', answer: '결제 확인 후 재고 샘플은 푸저우 창고에서 5~7영업일간 검수 및 PI953 자기 차폐 포장을 거쳐 출고되며, 도착 기간은 특송사와 세관 통관에 따릅니다.' },
      { question: '자석이 들어간 샘플 소포도 항공 자기 차폐 포장이 필요한가요?', answer: '네, N52 네오디뮴 다품종 샘플은 항공 보안 검색 통과를 위해 IATA PI953 강자성 차폐 시트로 포장합니다.' },
      { question: '100개 주문 전에 우리 회사 로고를 각인한 샘플을 미리 받아볼 수 있나요?', answer: '네(제작 10~15일 소요): 50W 파이버 레이저 세팅 $50 USD 또는 딥 레이저+에나멜 컬러 $80~$150 USD(배송비 별도)이며, 먼저 12시간 무료 벡터 시안을 제공합니다.' },
      { question: '아연 합금 보급형과 CNC 스테인리스 고급형 차이를 보려면 어떤 모델이 좋나요?', answer: 'FS-001 또는 FS-009($0.74+)와 FS-047(알루미늄), 그리고 FS-043 또는 FS-075(CNC 304 스틸) 조합을 추천합니다.' },
      { question: '극성중공 소리굽쇠와 저소음 오피스 모델을 비교하려면 무엇을 주문할까요?', answer: 'FS-150 소리굽쇠 슬라이더와 저소음 FS-125 PTFE 슬라이더 또는 FS-009 R188 스피너를 비교해 보세요.' },
      { question: '샘플 주문 시 어떤 결제 수단을 지원하나요?', answer: 'PayPal, Wise, 법인 계좌이체(T/T)를 지원하며 SKU 목록과 우편번호를 주시면 정확한 합산 견적을 드립니다.' },
      { question: '샘플 확인 후 첫 양산 발주 시 MOQ와 포장 사양은 어떻게 되나요?', answer: '무지는 MOQ 50개부터 산화방지 진공 파우치($0.00 기본)가 포함되며, 50W 레이저 각인 및 기성 블랙 EVA 지퍼 파우치(+$0.75+/개)는 100개부터, 고급 하드 박스(+$1.45+/개)는 500개, 창문형 틴케이스는 1,000개 이상부터 진행됩니다.' }
    ]
  },
  id: {
    bcCurrent: 'Paket Sampel 1 Pc',
    badge1: 'Sampel Evaluasi Berbayar 1 Pc',
    badge2: '140 Cetakan Siap · Kirim Gabungan',
    kpis: [
      { label: 'Min. Sampel', val: '1 Pc / SKU' },
      { label: 'Sampel & Ongkir', val: 'Ditanggung Pembeli' },
      { label: 'Pengemasan', val: 'Gabungan Multi-SKU' },
      { label: 'Kurir Udara', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: 'Daftar Harga 140 SKU →',
    showcasePill: 'MEJA EVALUASI FISIK',
    showcaseMoldCount: '140 Cetakan Siap',
    showcaseAlt: 'Paket sampel evaluasi fidget logam 1 pc berbahan zinc alloy, aluminium, dan stainless steel',
    showcaseMeta: ['Sampel Berbayar · Transparan', 'Perisai Magnetik PI953', 'Kirim Langsung Fuzhou'],
    geoTitle: 'Jawaban Langsung: Cara Pesan Sampel Fidget Logam Mulai 1 Pc',
    geoAnswer: 'Seluruh 140 cetakan siap pakai FidgetSupply (FS-001 hingga FS-150) tersedia sebagai sampel fisik berbayar 1 pc sebelum order 50 pcs polos atau 100 pcs logo. Biaya sampel dan ongkir internasional (DHL/FedEx/UPS) dibayar pembeli dan tidak dapat dikembalikan. Beberapa SKU digabung dalam satu paket berpelindung magnetik dari Fuzhou; lama pengiriman mengikuti kurir dan bea cukai.',
    matrixBadge: 'KOMBINASI UJI TERBAIK',
    matrixTitle: '3 Paket Evaluasi Terbukti Sebelum Order Grosir',
    tableHeaders: ['Tema Paket Uji', 'SKU Rekomendasi', 'Aspek yang Diuji Tim', 'Ketentuan Sampel & Pengiriman'],
    tableRows: [
      ['1. Pembanding Material & Bobot (5 Pcs)', 'FS-001 (Zamak-3), FS-047 (Alu 6063), FS-013 (304 Stainless), FS-043 (CNC Gyro), FS-135 (Cincin)', 'Bandingkan bobot die-cast vs presisi CNC stainless serta lapisan anodized.', 'Unit + kurir gabungan (DHL/FedEx/UPS) ditanggung pembeli.'],
      ['2. Paket Hadiah Perusahaan & Area Logo (4 Pcs)', 'FS-009 ($0.74+), FS-125 (Slider Datar), FS-047 (Alu), FS-013 (Koin Ø28mm)', 'Cek bidang rata laser 50W dan ukuran tas EVA sebelum produksi 100 pcs.', 'Stok polos dikirim dari Fuzhou; sampel laser berbayar opsional ($50, 10–15 hari).'],
      ['3. Garpu Tala Akustik vs Kantor Senyap (4 Pcs)', 'FS-150 (Garpu Tala), FS-129 (Dual Bearing), FS-125 (PTFE Halus), FS-009 (R188)', 'Uji denting akustik untuk konten video vs slider senyap di meja kerja.', 'Dilengkapi pelindung magnetik IATA PI953; durasi sesuai kurir.']
    ],
    picksBadge: 'CETAKAN PALING SERING DIUJI',
    picksTitle: 'Model Evaluasi 1 Pc Paling Diminati',
    faqBadge: 'FAQ SAMPEL & LOGISTIK',
    faqTitle: 'Kebijakan Jelas untuk Sampel Berbayar',
    serviceName: 'Program Sampel Fisik 1 Pc dari 140 Cetakan Fidget Logam',
    serviceDesc: 'Sampel evaluasi berbayar 1 pc dari 140 cetakan; biaya unit & kurir internasional ditanggung pembeli.',
    faqs: [
      { question: 'Bisakah memesan hanya 1 pc sebelum order grosir 50 pcs?', answer: 'Ya, semua 140 model (FS-001 s.d. FS-150) tersedia sebagai sampel uji berbayar 1 pc.' },
      { question: 'Siapa yang menanggung biaya sampel & ongkir, dan apakah bisa refund?', answer: 'Karena memakai cetakan produksi siap pakai, sampel dan kurir (DHL/FedEx/UPS) dibayar pembeli dan tidak dapat direfund.' },
      { question: 'Bisakah menggabungkan 3 hingga 10 SKU dalam 1 pengiriman?', answer: 'Ya, konsolidasi di gudang Fuzhou memangkas biaya kirim per unit.' },
      { question: 'Bagaimana proses persiapan dan estimasi pengiriman?', answer: 'Sampel stok menjalani 5–7 hari kerja QC & pengemasan PI953; waktu transit bergantung pada kurir & bea cukai tujuan.' },
      { question: 'Apakah paket sampel bermagnet butuh pelindung khusus udara?', answer: 'Ya, kami melapisi paket dengan perisai feromagnetik IATA PI953.' },
      { question: 'Bisakah memesan sampel berukir logo sebelum order 100 pcs?', answer: 'Ya (10–15 hari): $50 USD laser 50W atau $80–$150 USD deep laser + enamel tambah ongkir; pratinjau vektor 12 jam gratis.' },
      { question: 'Model mana yang paling jelas membedakan zinc alloy dan CNC stainless?', answer: 'Padukan FS-001 atau FS-009 ($0.74+) dengan FS-047 serta FS-043/FS-075.' },
      { question: 'Model mana untuk membandingkan garpu tala akustik vs kantor hening?', answer: 'Bandingkan FS-150 dengan FS-125 PTFE atau FS-009 R188.' },
      { question: 'Metode pembayaran apa yang diterima?', answer: 'PayPal, Wise, dan transfer bank (T/T) sesuai daftar SKU & kode pos.' },
      { question: 'Kemasan & MOQ apa yang berlaku saat produksi massal?', answer: 'Polos MOQ 50 pcs kantong vakum ($0.00); laser 50W atau tas EVA stok (+$0.75+/pc) mulai 100 pcs; kotak kaku (+$1.45+/pc) mulai 500 pcs; kaleng logam mulai 1.000+ pcs.' }
    ]
  },
  ar: {
    bcCurrent: 'طلب عينة قطعة واحدة',
    badge1: 'عينة تقييم مدفوعة من قطعة واحدة',
    badge2: '140 قالباً جاهزاً · طرد مجمّع',
    kpis: [
      { label: 'الحد الأدنى للعينة', val: '1 قطعة / SKU' },
      { label: 'العينة والشحن', val: 'على نفقة المشتري' },
      { label: 'التعبئة', val: 'تجميع متعدد الموديلات' },
      { label: 'الشحن الدولي', val: 'DHL / FedEx / UPS' }
    ],
    ctaSecondary: 'جدول أسعار 140 منتجاً →',
    showcasePill: 'مكتب التقييم الفعلي',
    showcaseMoldCount: '140 قالباً جاهزاً',
    showcaseAlt: 'مجموعة عينات تقييم فيدجت معدني قطعة واحدة من سبائك الزنك والألومنيوم والستانلس ستيل',
    showcaseMeta: ['عينة مدفوعة · شروط واضحة', 'حماية مغناطيسية PI953', 'شحن مباشر من فوتشو'],
    geoTitle: 'إجابة مباشرة: آلية طلب عينات الفيدجت المعدني من قطعة واحدة',
    geoAnswer: 'يمكن طلب أي من الـ 140 قالباً الجاهزاً في FidgetSupply (FS-001 إلى FS-150) كعينة تقييم فعلية مدفوعة بدءاً من قطعة واحدة قبل طلب 50 قطعة سادة أو 100 قطعة بشعار. يتحمل المشتري تكلفة العينة والشحن الدولي (DHL/FedEx/UPS) وهي غير قابلة للاسترداد. تُجمع الموديلات في طرد واحد معزول مغناطيسياً من مركز فوتشو وتعتمد مدة الوصول على الناقل والجمارك.',
    matrixBadge: 'تشكيلات اختبار موصى بها',
    matrixTitle: '3 باقات عينات مجربة قبل الطلب بالجملة',
    tableHeaders: ['موضوع الباقة', 'الرموز الموصى بها', 'ما يختبره فريقك', 'شروط العينة والشحن'],
    tableRows: [
      ['1. مقارنة الخامات والأوزان (5 قطع)', 'FS-001 (زنك), FS-047 (ألومنيوم 6063), FS-013 (فولاذ 304), FS-043 (جيروسكوب CNC), FS-135 (خاتم)', 'مقارنة كثافة السباكة بدقة CNC ومتانة الطلاء المؤكسد.', 'الوحدات والشحن المجمّع على نفقة المشتري عبر DHL/FedEx/UPS.'],
      ['2. باقة هدايا الشركات وأسطح الشعار (4 قطع)', 'FS-009 ($0.74+), FS-125 (سلايدر مسطح), FS-047 (ألومنيوم), FS-013 (عملة Ø28mm)', 'اختبار مساحات ليزر 50W وحافظة EVA قبل طلب 100 قطعة.', 'عينات سادة من فوتشو؛ عينة ليزر اختيارية ($50، 10–15 يوماً).'],
      ['3. الشوكة الرنانة الصوتية مقابل المكتب الهادئ (4 قطع)', 'FS-150 (شوكة رنانة), FS-129 (محور مزدوج), FS-125 (تفلون هادئ), FS-009 (R188)', 'مقارنة الرنين المعدني القوي للمتاجر مقابل السكون المكتبي.', 'معبأة بعزل IATA PI953؛ يحدد الناقل مدة الوصول.']
    ],
    picksBadge: 'القوالب الأكثر طلباً للتجربة',
    picksTitle: 'الموديلات الأكثر طلباً كعينات قطعة واحدة',
    faqBadge: 'الأسئلة الشائعة للعينات والشحن',
    faqTitle: 'سياسات واضحة للعينات المدفوعة',
    serviceName: 'برنامج عينات التقييم الفعلية قطعة واحدة لـ 140 قالباً معدنياً',
    serviceDesc: 'عينات تقييم مدفوعة من قطعة واحدة على 140 قالباً؛ يدفع المشتري سعر العينة والشحن الدولي من فوتشو.',
    faqs: [
      { question: 'هل يمكنني طلب قطعة واحدة فقط قبل الالتزام بطلب جملة 50 قطعة؟', answer: 'نعم، تتوفر جميع القوالب الـ 140 (FS-001–FS-150) كعينات تقييم مدفوعة بقطعة واحدة.' },
      { question: 'من يدفع ثمن العينات والشحن الدولي، وهل الرسوم مستردة؟', answer: 'لأنها قوالب إنتاج جاهزة، يتحمل المشتري تكلفة العينة والشحن (DHL/FedEx/UPS) وهي غير قابلة للاسترداد.' },
      { question: 'هل يمكن دمج 3 إلى 10 موديلات في شحنة واحدة لتوفير الشحن؟', answer: 'نعم، يخفض التجميع في طرد واحد من فوتشو تكلفة الشحن للقطعة بشكل ملحوظ.' },
      { question: 'ما مدة التجهيز والشحن الدولي؟', answer: 'تخضع العينات المتوفرة لـ 5–7 أيام عمل للفحص والعزل IATA PI953، وتعتمد مدة التوصيل على شركة الشحن والجمارك.' },
      { question: 'هل تتطلب الطرود المغناطيسية تغليفاً جوياً خاصاً؟', answer: 'نعم، نستخدم صفائح عزل فيرومغناطيسية مطابقة لـ IATA PI953.' },
      { question: 'هل يمكن طلب عينة محفورة بشعارنا قبل طلب 100 قطعة؟', answer: 'نعم (10–15 يوماً): $50 USD لليزر 50W أو $80–$150 USD للحفر العميق والمينا بالإضافة للشحن، مع معاينة مجانية خلال 12 ساعة.' },
      { question: 'ما الموديلات التي توضح الفرق بين الزنك والفولاذ CNC؟', answer: 'اجمع FS-001 أو FS-009 ($0.74+) مع FS-047 وFS-043/FS-075.' },
      { question: 'ما الموديلات التي تقارن الشوكة الصوتية مع الفيدجت الهادئ؟', answer: 'قارن FS-150 مع FS-125 PTFE أو FS-009 R188.' },
      { question: 'ما طرق الدفع المقبولة للعينات؟', answer: 'PayPal وWise والتحويل البنكي (T/T) بعد تحديد قائمة SKU والرمز البريدي.' },
      { question: 'ما خيارات التغليف والحد الأدنى بعد اعتماد العينة؟', answer: 'السادة 50 قطعة في كيس مفرغ ($0.00)؛ ليزر 50W أو حافظة EVA (+$0.75+) من 100 قطعة؛ علبة صلبة (+$1.45+) من 500 قطعة؛ علبة صفيح من 1,000+ قطعة.' }
    ]
  }
};

export function getSampleKitCopy(lang: SupportedLanguage): SampleKitCopy {
  return COPY[lang] || COPY.en;
}
