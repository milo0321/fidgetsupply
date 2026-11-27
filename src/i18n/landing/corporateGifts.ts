import type { SupportedLanguage } from '../config';
import type { FaqItem } from './privateLabelOem';

export interface CorporateGiftsCopy {
  bcCurrent: string;
  badge1: string;
  badge2: string;
  kpis: { label: string; val: string }[];
  ctaPrimary: string;
  ctaSecondary: string;
  showcasePill: string;
  showcasePrice: string;
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

const COPY: Record<SupportedLanguage, CorporateGiftsCopy> = {
  en: {
    bcCurrent: 'Corporate Gifts',
    badge1: 'CORPORATE SWAG & VIP GIFTS',
    badge2: '28 Logo-Ready Molds · $0 Tooling',
    kpis: [
      { label: 'Entry Swag Tier', val: '$0.74 – $2.50' },
      { label: '50W Laser Logo', val: '+$0.15 – $0.30' },
      { label: 'Digital Proof', val: 'Free in 12h' },
      { label: 'Logo Production', val: '10–15 Days' }
    ],
    ctaPrimary: 'Get Free 12h Logo Proof →',
    ctaSecondary: 'View 28 Logo-Ready Molds →',
    showcasePill: 'EXECUTIVE DESK RETENTION',
    showcasePrice: 'MOQ 100 pcs',
    showcaseAlt: 'Custom laser-engraved metal fidget sliders and pocket spinners for corporate gifts and trade show swag',
    showcaseMeta: ['50W Fiber Laser', 'Deep Enamel Fill', 'Stock EVA Cases'],
    geoTitle: 'Direct Answer: Factory-Direct Corporate Metal Fidget Gifts by Budget Tier',
    geoAnswer: 'FidgetSupply supplies custom logo metal fidget spinners, magnetic sliders, and haptic coins directly from 28 flat-surface ready molds ($0.00 tooling fee, MOQ 100 pcs) across three corporate budget tiers: Conference Swag ($0.74–$2.50/pc), Employee Onboarding Kits ($2.80–$6.50/pc), and Executive VIP Gifts ($8.49–$18.00/pc). Every order includes a free 12-hour 1:1 vector proof, permanent 50W fiber laser engraving (+$0.15–$0.30/pc) or recessed Pantone color fill (+$0.35–$0.60/pc), and optional EVA cases or custom rigid gift boxes.',
    matrixBadge: 'CORPORATE BUDGET MATRIX',
    matrixTitle: 'Match Your Event Budget to Permanent Metal Desk Swag',
    tableHeaders: ['Corporate Use Case', 'Factory Unit Budget (EXW)', 'Top Recommended Molds', 'Branding & Packaging Pairing'],
    tableRows: [
      ['Trade Shows & Tech Conferences (500–5,000 pcs)', '$0.74 – $2.50 / pc', 'FS-009 Knurled Pocket Spinner ($0.74+), FS-059 Promo Slider ($1.70+), FS-006 Delta Slider', '50W Fiber Laser (+$0.15–$0.30/pc) + Vacuum Anti-Oxidation Pouch ($0.00 · MOQ 50)'],
      ['Employee Onboarding & SaaS Welcome Kits (100–500 pcs)', '$2.80 – $6.50 / pc', 'FS-001 Poker Slider, FS-047 6063 Aluminum Slider, FS-013 304SS Coin, FS-125 Smooth Slider', 'Deep Laser + Pantone Enamel (+$0.35–$0.60/pc) + Stock EVA Zipper Case (+$0.75+/pc · MOQ 100)'],
      ['Executive VIP & Boardroom Holiday Bundles (100–300+ pcs)', '$8.49 – $18.00 / pc', 'FS-043 6-Axis CNC Stainless Gyro, FS-150 Tuning Fork Slider, FS-075 CNC 304SS Slider', 'VIP Laser Engraving + Custom Rigid Box (+$1.45+/pc · MOQ 500) / Tin Box (1,000+)']
    ],
    picksBadge: '28 LOGO-READY MOLDS · TOP 8 CORPORATE PICKS',
    picksTitle: 'Best-Selling Flat-Surface Models for Company Logos',
    faqBadge: 'CORPORATE GIFTING FAQ',
    faqTitle: 'Logo Proofing, Pricing & Event Turnaround Questions',
    serviceName: 'Corporate Metal Fidget Gifts & Custom Logo Promotional Swag Supply',
    serviceDesc: 'Factory-direct custom logo metal fidget spinners, sliders, and haptic coins for corporate gifting, tech onboarding, and trade show giveaways. $0 mold fee, MOQ 100 pcs, 12h free vector proof.',
    faqs: [
      { question: 'Why do enterprise teams choose metal fidget sliders and spinners over plastic promotional giveaways?', answer: 'Plastic spinners ($0.45–$0.80) feel disposable and have pad-printed ink that rubs off within weeks. Solid metal EDC instruments (20g–130g Zamak-3, 6063 aluminum, or 304 stainless steel) with permanent 50W fiber laser engraving stay on executive desks for years, generating far higher brand impressions per dollar.' },
      { question: 'What is the minimum order quantity (MOQ) for corporate logo metal fidgets?', answer: 'Custom logo orders start at 100 pieces per SKU with $0.00 mold tooling fees across 28 flat-surface Logo-Ready molds. Blank unbranded stock starts at 50 pieces per SKU.' },
      { question: 'How much does a custom logo metal fidget cost across different corporate budget tiers?', answer: 'Conference handout tier starts at $0.74–$2.50/pc (FS-009 Pocket Spinner, FS-059 Promo Slider), employee onboarding tier runs $2.80–$6.50/pc (FS-001, FS-013, FS-047), and executive VIP tier runs $8.49–$18.00/pc (FS-043 CNC Gyro, FS-150 Tuning Fork), plus +$0.15–$0.30/pc for 50W fiber laser engraving.' },
      { question: 'How does FidgetSupply compare to promotional swag distributors?', answer: 'Promotional resellers typically mark up imported stock and offer limited plastic shapes. Sourcing directly from FidgetSupply’s integrated Fuzhou supply chain gives you access to 140 precision metal molds at factory EXW tiers with $0 mold fee and in-house 50W fiber laser and deep enamel color-fill lines.' },
      { question: 'How fast can you prepare a digital logo proof and complete production for an event?', answer: 'We deliver a 1:1 vector placement proof free within 12 hours of receiving your .AI/.EPS/.SVG/.PDF logo file. Standard custom logo production for 100–500 units completes in 10–15 business days at our Fuzhou Hub before courier or freight handoff.' },
      { question: 'Can you engrave individual employee or VIP client names onto each metal fidget?', answer: 'Yes. Our Galvo fiber laser workstations support automated CSV variable-data engraving, allowing unique VIP recipient names or sequential edition numbers (e.g., 001/250).' },
      { question: 'Can we match our brand’s Pantone color on a metal fidget?', answer: 'Yes. For colored logos on metal, we use Deep Laser Engraving + Thermally Cured Pantone Enamel Color Fill (+$0.35–$0.60/pc, MOQ 100–200 pcs) so the colored crest sits recessed below the metal friction plane and never peels off.' },
      { question: 'What corporate gift packaging options are available?', answer: 'Every unit includes an individual Vacuum Anti-Oxidation Pouch ($0.00, MOQ 50). Custom upgrades are Stock-Mold Black EVA Shockproof Zipper Cases (+$0.75+/pc, MOQ 100), Two-Piece Custom Rigid Luxury Gift Boxes (+$1.45+/pc, MOQ 500), and Window Metal Tin Boxes (MOQ 1,000+ MTO).' },
      { question: 'Can we order a paid physical sample before approving our corporate bulk order?', answer: 'Yes. Paid 1-piece blank evaluation samples are available across all 140 models (buyer pays unit fee and international courier shipping, non-refundable). Paid custom laser pre-production samples require 10–15 days and cost $50 USD (50W laser) or $80–$150 USD (deep enamel fill) plus shipping.' },
      { question: 'Are your metal corporate gifts compliant with US CPSC 16 CFR 1262, Prop 65, and EU RoHS 3?', answer: 'Yes. Every magnetic model uses captive retention engineered for US CPSC 16 CFR Part 1262, metal finishes pass EU RoHS 3 / REACH and California Prop 65 screening, and we also offer 30+ 100% magnet-free mechanical models.' }
    ]
  },
  de: {
    bcCurrent: 'Firmengeschenke',
    badge1: 'WERBEGESCHENKE & VIP-PRÄSENTE',
    badge2: '28 Logo-Formen · $0 Werkzeugkosten',
    kpis: [
      { label: 'Einstiegsbudget', val: '$0.74 – $2.50' },
      { label: '50W Laserlogo', val: '+$0.15 – $0.30' },
      { label: 'Digitale Vorschau', val: 'Gratis in 12h' },
      { label: 'Logoproduktion', val: '10–15 Werktage' }
    ],
    ctaPrimary: 'Gratis 12h-Logovorschau →',
    ctaSecondary: 'Alle 28 Logo-Formen →',
    showcasePill: 'DAUERHAFTE SCHREIBTISCHPRÄSENZ',
    showcasePrice: 'MOQ 100 Stk.',
    showcaseAlt: 'Lasergravierte Metall-Fidget-Slider und Spinner für Firmengeschenke und Messen',
    showcaseMeta: ['50W Faserlaser', 'Tiefen-Emaille', 'Lager-EVA-Etuis'],
    geoTitle: 'Direktantwort: Metall-Fidget Firmengeschenke ab Werk nach Budgetklasse',
    geoAnswer: 'FidgetSupply fertigt gravierte Metall-Spinner, Magnet-Slider und Haptic Coins aus 28 flachen Serienformen ($0 Werkzeugkosten, MOQ 100 Stk.) in drei Budgetstufen: Messe-Swag ($0.74–$2.50), Onboarding-Kits ($2.80–$6.50) und VIP-Executive-Präsente ($8.49–$18.00). Inklusive gratis 12h-Vektorvorschau sowie 50W Faserlaser (+$0.15–$0.30/Stk.) oder Pantone-Tiefenemaille (+$0.35–$0.60/Stk.).',
    matrixBadge: 'FIRMENBUDGET-MATRIX',
    matrixTitle: 'Passende Metall-Werbegeschenke für Messe, Onboarding & VIP-Kunden',
    tableHeaders: ['Einsatzbereich', 'Stückbudget ab Werk (EXW)', 'Empfohlene Serienformen', 'Veredelung & Verpackung'],
    tableRows: [
      ['Messen & Tech-Konferenzen (500–5.000 Stk.)', '$0.74 – $2.50 / Stk.', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', '50W Faserlaser (+$0.15–$0.30) + Vakuumbeutel ($0.00 · MOQ 50)'],
      ['Mitarbeiter-Onboarding & SaaS-Pakete (100–500 Stk.)', '$2.80 – $6.50 / Stk.', 'FS-001 Poker Slider, FS-047 Alu-Slider, FS-013 Münze, FS-125 Slider', 'Tiefenlaser + Emaille (+$0.35–$0.60) + Lager-EVA-Etui (+$0.75+/Stk. · MOQ 100)'],
      ['Vorstand & VIP-Kundenpräsente (100–500+ Stk.)', '$8.49 – $18.00 / Stk.', 'FS-043 CNC 6-Achs-Gyro, FS-150 Stimmgabel, FS-075 CNC 304SS', 'VIP-Lasergravur + Hartbox (+$1.45+/Stk. · MOQ 500) / Dose (1.000+)']
    ],
    picksBadge: '28 LOGO-SERIENFORMEN · TOP 8 EMPFEHLUNGEN',
    picksTitle: 'Meistverkaufte Flachmodelle für dauerhafte Firmengravur',
    faqBadge: 'FIRMENGESCHENKE FAQ',
    faqTitle: 'Fragen zu Logovorschau, Budget & Event-Vorlaufzeit',
    serviceName: 'Metall-Fidget Firmengeschenke & Maßgeschneiderte Logogravur',
    serviceDesc: 'Direkt ab Werk gravierte Metall-Fidgets für Firmenpräsente, Onboarding & Messen ($0 Werkzeug, MOQ 100, 12h Vorschau).',
    faqs: [
      { question: 'Warum bevorzugen Firmen Metall-Fidgets statt Plastik-Werbeartikeln?', answer: 'Solide Metallinstrumente (20g–130g Zamak-3, Alu 6063, 304 Edelstahl) mit abriebfester 50W-Lasergravur bleiben jahrelang auf dem Schreibtisch.' },
      { question: 'Wie hoch ist die Mindestbestellmenge (MOQ) für Firmenlogos?', answer: '100 Stück pro SKU bei $0.00 Werkzeugkosten auf 28 flachen Logo-Formen; blanko ab 50 Stück.' },
      { question: 'Was kosten Firmengeschenke in den drei Budgetklassen?', answer: 'Messeklasse $0.74–$2.50, Onboarding $2.80–$6.50, VIP $8.49–$18.00 jeweils zzgl. +$0.15–$0.30/Stk. für 50W Laser.' },
      { question: 'Welcher Vorteil entsteht direkt über FidgetSupply gegenüber Zwischenhändlern?', answer: 'Direkte EXW-Werkspreise ohne Großhandelsaufschlag auf 140 Serienformen mit hauseigener 50W-Laser- und Emaille-Linie.' },
      { question: 'Wie schnell erhalten wir Druckvorschau und Produktion für Events?', answer: 'Gratis 1:1 Vektorvorschau binnen 12 Stunden; Produktion in 10–15 Werktagen ab Werk Fuzhou.' },
      { question: 'Können individuelle Namen pro Mitarbeiter oder VIP graviert werden?', answer: 'Ja, automatisierte CSV-Variablendatengravur für Namen oder Seriennummern wird unterstützt.' },
      { question: 'Sind farbige Pantone-Logos auf Metall möglich?', answer: 'Ja, per Tiefenlaser + thermisch gehärteter Pantone-Emaille (+$0.35–$0.60/Stk., MOQ 100–200).' },
      { question: 'Welche Geschenkverpackungen stehen bereit?', answer: 'Vakuumbeutel ($0.00, MOQ 50) inkl.; Lager-EVA-Etui (+$0.75+/Stk., MOQ 100); Hartbox (+$1.45+/Stk., MOQ 500); Metalldose (1.000+).' },
      { question: 'Können vorab bezahlte Muster bestellt werden?', answer: 'Ja: 1-Stück-Blankomuster ab Lager (Käufer zahlt Einheit + Fracht, nicht erstattungsfähig) oder Logomuster in 10–15 Tagen ($50 Laser / $80–$150 Tiefen-Emaille).' },
      { question: 'Erfüllen die Geschenke US CPSC 16 CFR 1262, Prop 65 und EU RoHS 3?', answer: 'Ja, gekapselte Magnetkammern erfüllen CPSC 16 CFR 1262 sowie RoHS 3 / REACH; zudem 30+ magnetfreie Modelle.' }
    ]
  },
  fr: {
    bcCurrent: 'Cadeaux d’Entreprise',
    badge1: 'GOODIES CORPORATE & CADEAUX VIP',
    badge2: '28 Moules Logo · 0 $ Outillage',
    kpis: [
      { label: 'Palier Salon', val: '$0.74 – $2.50' },
      { label: 'Laser Fibre 50W', val: '+$0.15 – $0.30' },
      { label: 'BAT Vectoriel', val: 'Gratuit en 12h' },
      { label: 'Fabrication Logo', val: '10–15 Jours' }
    ],
    ctaPrimary: 'Obtenir un BAT Gratuit 12h →',
    ctaSecondary: 'Voir les 28 Moules Logo →',
    showcasePill: 'RÉTENTION BUREAU DIRIGEANT',
    showcasePrice: 'MOQ 100 pcs',
    showcaseAlt: 'Sliders et spinners métalliques gravés au laser pour cadeaux d’affaires et salons',
    showcaseMeta: ['Laser Fibre 50W', 'Émail Profond', 'Étuis EVA Stock'],
    geoTitle: 'Réponse Directe : Cadeaux d’Affaires en Métal par Palier Budgétaire',
    geoAnswer: 'FidgetSupply fournit des fidgets métalliques gravés directement depuis 28 moules plats prêts (0 $ outillage, MOQ 100 pcs) selon trois budgets : Salons ($0.74–$2.50/pce), Kits Onboarding ($2.80–$6.50/pce) et Cadeaux VIP ($8.49–$18.00/pce), avec BAT gratuit sous 12h, laser 50W (+$0.15–$0.30/pce) ou émail Pantone (+$0.35–$0.60/pce).',
    matrixBadge: 'MATRICE BUDGET ENTREPRISE',
    matrixTitle: 'Associez Votre Budget Événementiel à un Objet Métal Durable',
    tableHeaders: ['Cas d’Usage Entreprise', 'Budget Unitaire EXW', 'Moules Recommandés', 'Marquage & Coffret'],
    tableRows: [
      ['Salons Pro & Conférences Tech (500–5 000 pcs)', '$0.74 – $2.50 / pce', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', 'Laser 50W (+$0.15–$0.30) + Pochette sous vide ($0.00 · MOQ 50)'],
      ['Kits d’Intégration & Équipes SaaS (100–500 pcs)', '$2.80 – $6.50 / pce', 'FS-001 Poker Slider, FS-047 Alu 6063, FS-013 Pièce Inox, FS-125 Slider', 'Laser profond + Émail (+$0.35–$0.60) + Étui EVA stock (+$0.75+ · MOQ 100)'],
      ['Direction Générale & Cadeaux VIP (100–500+ pcs)', '$8.49 – $18.00 / pce', 'FS-043 Gyro CNC 6 Axes, FS-150 Diapason, FS-075 Slider Inox 304', 'Gravure VIP + Coffret rigide (+$1.45+/pce · MOQ 500) / Boîte métal (1 000+)']
    ],
    picksBadge: '28 MOULES PLATS · TOP 8 ENTREPRISE',
    picksTitle: 'Meilleures Ventes à Surface Plane pour Logo d’Entreprise',
    faqBadge: 'FAQ CADEAUX D’ENTREPRISE',
    faqTitle: 'BAT Numérique, Tarifs & Délais Événementiels',
    serviceName: 'Cadeaux d’Affaires Métal & Objets Publicitaires Gravés',
    serviceDesc: 'Spinners, sliders et pièces tactiles en métal gravés pour cadeaux corporate et salons ($0 moule, MOQ 100, BAT 12h).',
    faqs: [
      { question: 'Pourquoi les entreprises préfèrent-elles le métal au plastique publicitaire ?', answer: 'Le métal massif (Zamak-3, Alu 6063, Inox 304) gravé au laser 50W reste des années sur les bureaux sans que le logo s’efface.' },
      { question: 'Quel est le MOQ pour des fidgets avec logo d’entreprise ?', answer: '100 pièces par SKU sur 28 moules plats ($0 frais de moule) ; 50 pièces pour du stock neutre.' },
      { question: 'Combien coûte chaque gamme corporate ?', answer: 'Salons $0.74–$2.50, Onboarding $2.80–$6.50, VIP $8.49–$18.00, plus +$0.15–$0.30/pce pour le laser 50W.' },
      { question: 'Quel avantage face aux agences de goodies traditionnelles ?', answer: 'Accès direct aux prix usine EXW sur 140 moules avec atelier interne de laser 50W et émail.' },
      { question: 'Quel est le délai pour le BAT et la production ?', answer: 'BAT vectoriel gratuit en 12h ; production de 100–500 pcs en 10–15 jours ouvrés à Fuzhou avant remise au transporteur.' },
      { question: 'Peut-on graver un nom différent par collaborateur ou client VIP ?', answer: 'Oui, via gravure laser à données variables depuis un fichier CSV.' },
      { question: 'Pouvez-vous reproduire nos couleurs Pantone sur métal ?', answer: 'Oui par gravure profonde + émail Pantone cuit (+$0.35–$0.60/pce, MOQ 100–200).' },
      { question: 'Quels emballages cadeaux proposez-vous ?', answer: 'Pochette sous vide ($0.00, MOQ 50) incluse ; étui EVA stock (+$0.75+/pce, MOQ 100) ; coffret rigide (+$1.45+/pce, MOQ 500) ; boîte métal (1 000+).' },
      { question: 'Pouvons-nous commander un échantillon payant avant validation ?', answer: 'Oui : échantillon neutre 1 pièce (unité + port à la charge acheteur, non remboursable) ou prototype logo en 10–15 jours ($50 laser / $80–$150 émail).' },
      { question: 'Vos cadeaux respectent-ils CPSC 16 CFR 1262, Prop 65 et RoHS 3 ?', answer: 'Oui, tous nos aimants sont encapsulés de façon permanente ; plus de 30 modèles sans aimant existent aussi.' }
    ]
  },
  nl: {
    bcCurrent: 'Relatiegeschenken',
    badge1: 'ZAKELIJKE SWAG & VIP-GESCHENKEN',
    badge2: '28 Logo-Mallen · $0 Matrijzen',
    kpis: [
      { label: 'Beurs Instap', val: '$0.74 – $2.50' },
      { label: '50W Fiberlaser', val: '+$0.15 – $0.30' },
      { label: 'Drukproef', val: 'Gratis in 12u' },
      { label: 'Logoproductie', val: '10–15 Dagen' }
    ],
    ctaPrimary: 'Gratis 12u Logo-Proef →',
    ctaSecondary: 'Bekijk 28 Logo-Mallen →',
    showcasePill: 'BLIJVENDE BUREAUWAARDE',
    showcasePrice: 'MOQ 100 st.',
    showcaseAlt: 'Metalen fidget sliders en spinners met bedrijfslogo voor relatiegeschenken en beurzen',
    showcaseMeta: ['50W Fiberlaser', 'Diepe Emaille', 'Voorraad EVA-Etui'],
    geoTitle: 'Direct Antwoord: Zakelijke Metalen Fidget Relatiegeschenken per Budget',
    geoAnswer: 'FidgetSupply levert bedrukte/gegraveerde metalen spinners, sliders en haptic coins rechtstreeks uit 28 vlakke logo-mallen ($0 matrijskosten, MOQ 100 st.) in drie budgetklassen: Beurzen ($0.74–$2.50/st.), Onboarding ($2.80–$6.50/st.) en VIP-Directie ($8.49–$18.00/st.), inclusief gratis 12u proef en 50W fiberlaser (+$0.15–$0.30/st.) of Pantone emaille (+$0.35–$0.60/st.).',
    matrixBadge: 'ZAKELIJKE BUDGETMATRIX',
    matrixTitle: 'Stem uw Eventbudget af op Duurzame Metalen Desk-Swag',
    tableHeaders: ['Zakelijke Toepassing', 'Fabrieksbudget (EXW)', 'Aanbevolen Mallen', 'Gravure & Verpakking'],
    tableRows: [
      ['Vakbeurzen & Tech-Conferenties (500–5.000 st.)', '$0.74 – $2.50 / st.', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', '50W Fiberlaser (+$0.15–$0.30) + Vacuümzak ($0.00 · MOQ 50)'],
      ['Personeel Onboarding & SaaS Welkomstpakket (100–500 st.)', '$2.80 – $6.50 / st.', 'FS-001 Poker Slider, FS-047 Alu Slider, FS-013 RVS Munt, FS-125 Slider', 'Diepe Laser + Emaille (+$0.35–$0.60) + EVA-etui (+$0.75+/st. · MOQ 100)'],
      ['Directie & VIP Feestgeschenken (100–500+ st.)', '$8.49 – $18.00 / st.', 'FS-043 CNC 6-Assige Gyro, FS-150 Stemvork, FS-075 CNC RVS Slider', 'VIP Lasergravure + Luxe Doos (+$1.45+/st. · MOQ 500) / Blik (1.000+)']
    ],
    picksBadge: '28 VLAKKE LOGO-MALLEN · TOP 8 ZAKELIJK',
    picksTitle: 'Bestsellers met Vlakke Zijden voor Bedrijfslogo',
    faqBadge: 'ZAKELIJKE GESCHENKEN FAQ',
    faqTitle: 'Vragen over Drukproeven, Prijzen & Doorlooptijd',
    serviceName: 'Zakelijke Metalen Fidget Relatiegeschenken met Logo',
    serviceDesc: 'Direct af-fabriek gegraveerde metalen fidgets voor relatiegeschenken en beurzen ($0 matrijs, MOQ 100, 12u drukproef).',
    faqs: [
      { question: 'Waarom kiezen bedrijven metalen fidgets boven plastic weggevers?', answer: 'Massief metaal (20g–130g Zamak-3, 6063 alu of 304 RVS) met blijvende 50W fiberlasergravure blijft jaren op bureaus liggen.' },
      { question: 'Wat is de minimale afname (MOQ) met bedrijfslogo?', answer: '100 stuks per SKU op 28 vlakke Logo-Ready mallen ($0 matrijskosten); blanco voorraad vanaf 50 stuks.' },
      { question: 'Wat kost een metalen relatiegeschenk in de drie budgetklassen?', answer: 'Beurs $0.74–$2.50, onboarding $2.80–$6.50, VIP $8.49–$18.00 plus +$0.15–$0.30/st. voor 50W laser.' },
      { question: 'Wat is het voordeel t.o.v. reguliere promotiebureaus?', answer: 'Rechtstreekse EXW-fabrieksprijzen op 140 precisievormen inclusief eigen 50W fiberlaser- en emaille-lijnen.' },
      { question: 'Hoe snel leveren jullie een digitale proef en productie?', answer: 'Gratis 1:1 vectorproef binnen 12 uur; productie van 100–500 stuks duurt 10–15 werkdagen in Fuzhou.' },
      { question: 'Kunnen individuele namen per medewerker of VIP gegraveerd worden?', answer: 'Ja, via CSV variabele datagravure voor unieke namen of nummers.' },
      { question: 'Zijn Pantone-merkkleuren mogelijk op metaal?', answer: 'Ja, met diepe lasergravure + thermisch uitgeharde Pantone-emaille (+$0.35–$0.60/st., MOQ 100–200).' },
      { question: 'Welke zakelijke verpakkingen zijn beschikbaar?', answer: 'Vacuümzak ($0.00, MOQ 50) inbegrepen; EVA-etui (+$0.75+/st., MOQ 100); luxe doos (+$1.45+/st., MOQ 500); blikken doos (1.000+).' },
      { question: 'Kunnen we eerst een betaald fysiek monster bestellen?', answer: 'Ja: 1-stuk blanco monster (koper betaalt stuk + koerier, niet restitueerbaar) of logomonster in 10–15 dagen ($50 laser / $80–$150 emaille).' },
      { question: 'Voldoen de geschenken aan US CPSC 16 CFR 1262, Prop 65 en EU RoHS 3?', answer: 'Ja, alle magneten zijn duurzaam opgesloten en metaal voldoet aan RoHS 3 / REACH; tevens 30+ magneetvrije modellen.' }
    ]
  },
  es: {
    bcCurrent: 'Regalos Corporativos',
    badge1: 'MERCHANDISING & REGALOS VIP',
    badge2: '28 Moldes Logo · $0 Utillaje',
    kpis: [
      { label: 'Gama Feria', val: '$0.74 – $2.50' },
      { label: 'Láser Fibra 50W', val: '+$0.15 – $0.30' },
      { label: 'Boceto Digital', val: 'Gratis en 12h' },
      { label: 'Producción Logo', val: '10–15 Días' }
    ],
    ctaPrimary: 'Solicitar Prueba 12h Gratis →',
    ctaSecondary: 'Ver 28 Moldes para Logo →',
    showcasePill: 'PERMANENCIA EN ESCRITORIO',
    showcasePrice: 'MOQ 100 uds.',
    showcaseAlt: 'Fidget sliders y spinners metálicos grabados con logo para regalos corporativos y ferias',
    showcaseMeta: ['Láser Fibra 50W', 'Esmalte Profundo', 'Estuches EVA Stock'],
    geoTitle: 'Respuesta Directa: Regalos Corporativos Metálicos Directos de Fábrica',
    geoAnswer: 'FidgetSupply fabrica spinners, sliders y monedas táctiles con logotipo directamente sobre 28 moldes planos ($0 coste de molde, MOQ 100 uds.) en tres presupuestos: Ferias ($0.74–$2.50), Bienvenida Empleados ($2.80–$6.50) y Regalos VIP ($8.49–$18.00), con prueba vectorial gratuita en 12h y láser 50W (+$0.15–$0.30/ud.) o esmalte Pantone (+$0.35–$0.60/ud.).',
    matrixBadge: 'MATRIZ DE PRESUPUESTO CORPORATIVO',
    matrixTitle: 'Adapte su Presupuesto de Evento a Regalos Metálicos Duraderos',
    tableHeaders: ['Uso Corporativo', 'Presupuesto Fábrica (EXW)', 'Moldes Recomendados', 'Marcaje y Empaque'],
    tableRows: [
      ['Ferias y Congresos Tech (500–5.000 uds.)', '$0.74 – $2.50 / ud.', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', 'Láser 50W (+$0.15–$0.30) + Bolsa al vacío ($0.00 · MOQ 50)'],
      ['Onboarding y Kits de Bienvenida (100–500 uds.)', '$2.80 – $6.50 / ud.', 'FS-001 Poker Slider, FS-047 Alu 6063, FS-013 Moneda Inox, FS-125', 'Láser profundo + Esmalte (+$0.35–$0.60) + Estuche EVA (+$0.75+ · MOQ 100)'],
      ['Directivos y Regalos VIP (100–500+ uds.)', '$8.49 – $18.00 / ud.', 'FS-043 Gyro CNC 6 Ejes, FS-150 Diapasón, FS-075 Inox 304', 'Grabado VIP + Caja rígida (+$1.45+/ud. · MOQ 500) / Lata (1.000+)']
    ],
    picksBadge: '28 MOLDES PARA LOGO · TOP 8 CORPORATIVO',
    picksTitle: 'Modelos Planos Más Vendidos para Logotipo Empresarial',
    faqBadge: 'FAQ REGALOS CORPORATIVOS',
    faqTitle: 'Preguntas sobre Bocetos, Precios y Plazos de Evento',
    serviceName: 'Regalos Corporativos Metálicos Fidget y Merchandising con Logo',
    serviceDesc: 'Spinners y sliders metálicos personalizados con láser 50W directo de fábrica ($0 molde, MOQ 100, boceto en 12h).',
    faqs: [
      { question: '¿Por qué las empresas eligen metal frente a obsequios plásticos?', answer: 'El metal sólido (Zamak-3, Alu 6063, Inox 304) grabado con láser 50W permanece años en el escritorio sin que la marca se borre.' },
      { question: '¿Cuál es el MOQ para pedidos con logo corporativo?', answer: '100 piezas por SKU en 28 moldes planos ($0 utillaje); stock sin logo desde 50 piezas.' },
      { question: '¿Cuánto cuestan según el nivel de presupuesto?', answer: 'Ferias $0.74–$2.50, onboarding $2.80–$6.50 y VIP $8.49–$18.00, más +$0.15–$0.30/ud. de láser 50W.' },
      { question: '¿Qué ventaja tiene comprar directo frente a intermediarios de regalos?', answer: 'Precios EXW directos de fábrica en 140 moldes propios con líneas internas de láser 50W y esmalte.' },
      { question: '¿Qué rapidez ofrecen para prueba digital y fabricación?', answer: 'Prueba vectorial 1:1 gratis en 12h y producción de 100–500 uds. en 10–15 días hábiles en Fuzhou.' },
      { question: '¿Se pueden grabar nombres individuales por empleado o VIP?', answer: 'Sí, mediante carga de datos variables CSV en nuestros láseres Galvo.' },
      { question: '¿Es posible igualar colores Pantone corporativos?', answer: 'Sí, con grabado láser profundo + relleno de esmalte curado (+$0.35–$0.60/ud., MOQ 100–200).' },
      { question: '¿Qué empaques corporativos ofrecen?', answer: 'Bolsa al vacío ($0.00, MOQ 50) incluida; estuche EVA stock (+$0.75+/ud., MOQ 100); caja rígida (+$1.45+/ud., MOQ 500); lata metálica (1.000+).' },
      { question: '¿Podemos pedir muestra física pagada antes de aprobar?', answer: 'Sí: muestra neutra de 1 ud. (unidad y envío a cargo del comprador, no reembolsable) o muestra con logo en 10–15 días ($50 láser / $80–$150 esmalte).' },
      { question: '¿Cumplen con US CPSC 16 CFR 1262, Prop 65 y EU RoHS 3?', answer: 'Sí, todos los imanes llevan retención encapsulada y existen más de 30 modelos mecánicos sin imanes.' }
    ]
  },
  it: {
    bcCurrent: 'Regali Aziendali',
    badge1: 'GADGET AZIENDALI & REGALI VIP',
    badge2: '28 Stampi Logo · $0 Stampo',
    kpis: [
      { label: 'Fascia Fiere', val: '$0.74 – $2.50' },
      { label: 'Laser Fibra 50W', val: '+$0.15 – $0.30' },
      { label: 'Bozza Digitale', val: 'Gratis in 12h' },
      { label: 'Produzione Logo', val: '10–15 Giorni' }
    ],
    ctaPrimary: 'Richiedi Bozza Gratis 12h →',
    ctaSecondary: 'Vedi 28 Stampi Logo →',
    showcasePill: 'PRESENZA DUREVOLE SULLA SCRIVANIA',
    showcasePrice: 'MOQ 100 pz.',
    showcaseAlt: 'Slider e spinner in metallo incisi al laser per regali aziendali e fiere',
    showcaseMeta: ['Laser Fibra 50W', 'Smalto Profondo', 'Custodie EVA Stock'],
    geoTitle: 'Risposta Diretta: Regali Aziendali in Metallo Diretti di Fabbrica per Budget',
    geoAnswer: 'FidgetSupply fornisce spinner, slider e monete tattili con logo su 28 stampi piatti ($0 spese stampo, MOQ 100 pz) in tre fasce budget: Fiere ($0.74–$2.50), Onboarding ($2.80–$6.50) e Regali VIP ($8.49–$18.00), con bozza vettoriale gratuita in 12h e laser 50W (+$0.15–$0.30/pz) o smalto Pantone (+$0.35–$0.60/pz).',
    matrixBadge: 'MATRICE BUDGET AZIENDALE',
    matrixTitle: 'Abbina il Budget Evento a Gadget Metallici Permanenti',
    tableHeaders: ['Applicazione Aziendale', 'Budget Unità (EXW)', 'Stampi Consigliati', 'Personalizzazione & Packaging'],
    tableRows: [
      ['Fiere & Conferenze Tech (500–5.000 pz)', '$0.74 – $2.50 / pz', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', 'Laser 50W (+$0.15–$0.30) + Bustina sottovuoto ($0.00 · MOQ 50)'],
      ['Onboarding & Kit Benvenuto SaaS (100–500 pz)', '$2.80 – $6.50 / pz', 'FS-001 Poker Slider, FS-047 Alluminio, FS-013 Moneta, FS-125', 'Laser profondo + Smalto (+$0.35–$0.60) + Custodia EVA (+$0.75+ · MOQ 100)'],
      ['Executive VIP & Omaggi Direzione (100–500+ pz)', '$8.49 – $18.00 / pz', 'FS-043 Gyro CNC 6 Assi, FS-150 Diapason, FS-075 Inox 304', 'Incisione VIP + Cofanetto rigido (+$1.45+/pz · MOQ 500) / Scatola metallo (1.000+)']
    ],
    picksBadge: '28 STAMPI PER LOGO · TOP 8 AZIENDALE',
    picksTitle: 'Modelli Piatti Più Venduti per Logo Aziendale',
    faqBadge: 'FAQ REGALI AZIENDALI',
    faqTitle: 'Domande su Bozze, Prezzi & Tempistiche Eventi',
    serviceName: 'Regali Aziendali in Metallo Fidget & Gadget con Logo Laser',
    serviceDesc: 'Fidget spinner e slider in metallo personalizzati direttamente in fabbrica ($0 stampo, MOQ 100, bozza 12h).',
    faqs: [
      { question: 'Perché le aziende scelgono fidget in metallo rispetto alla plastica?', answer: 'Il metallo pieno (Zamak-3, Alluminio 6063, Inox 304) inciso al laser 50W resta anni sulle scrivanie senza cancellarsi.' },
      { question: 'Qual è l’ordine minimo (MOQ) con logo aziendale?', answer: '100 pezzi per SKU su 28 stampi piatti ($0 stampo); 50 pezzi per merce neutra.' },
      { question: 'Quanto costano nelle diverse fasce aziendali?', answer: 'Fiere $0.74–$2.50, onboarding $2.80–$6.50 e VIP $8.49–$18.00 più +$0.15–$0.30/pz per laser 50W.' },
      { question: 'Quale vantaggio rispetto ai distributori promozionali?', answer: 'Prezzi diretti EXW su 140 stampi con reparti interni di laser 50W e smaltatura.' },
      { question: 'Quanto sono rapidi bozza digitale e produzione?', answer: 'Bozza vettoriale 1:1 gratis in 12 ore; produzione 100–500 pz in 10–15 giorni lavorativi a Fuzhou.' },
      { question: 'Potete incidere nomi diversi per ogni dipendente o VIP?', answer: 'Sì, tramite dati variabili CSV sui nostri laser Galvo.' },
      { question: 'È possibile abbinare i colori Pantone su metallo?', answer: 'Sì, con incisione profonda + smalto Pantone cotto a forno (+$0.35–$0.60/pz, MOQ 100–200).' },
      { question: 'Quali confezioni regalo sono disponibili?', answer: 'Bustina sottovuoto ($0.00, MOQ 50) inclusa; custodia EVA stock (+$0.75+/pz, MOQ 100); cofanetto rigido (+$1.45+/pz, MOQ 500); scatola metallo (1.000+).' },
      { question: 'Possiamo ordinare un campione pagato prima dell’approvazione?', answer: 'Sì: campione neutro 1 pz (unità e corriere a carico acquirente, non rimborsabili) o campione logo in 10–15 giorni ($50 laser / $80–$150 smalto).' },
      { question: 'I prodotti rispettano US CPSC 16 CFR 1262, Prop 65 ed EU RoHS 3?', answer: 'Sì, tutti i magneti sono bloccati internamente e sono disponibili oltre 30 modelli senza magneti.' }
    ]
  },
  pt: {
    bcCurrent: 'Brindes Corporativos',
    badge1: 'BRINDES CORPORATIVOS & VIP',
    badge2: '28 Moldes Logo · $0 Molde',
    kpis: [
      { label: 'Linha Feiras', val: '$0.74 – $2.50' },
      { label: 'Laser Fibra 50W', val: '+$0.15 – $0.30' },
      { label: 'Arte Digital', val: 'Grátis em 12h' },
      { label: 'Produção Logo', val: '10–15 Dias' }
    ],
    ctaPrimary: 'Pedir Arte Grátis 12h →',
    ctaSecondary: 'Ver 28 Moldes para Logo →',
    showcasePill: 'PRESENÇA PERMANENTE NA MESA',
    showcasePrice: 'MOQ 100 un.',
    showcaseAlt: 'Sliders e spinners metálicos gravados a laser para brindes corporativos e feiras',
    showcaseMeta: ['Laser Fibra 50W', 'Esmalte Profundo', 'Estojos EVA Estoque'],
    geoTitle: 'Resposta Direta: Brindes Corporativos Metálicos Diretos da Fábrica',
    geoAnswer: 'A FidgetSupply fornece spinners, sliders e moedas táteis personalizados diretamente de 28 moldes planos ($0 custo de molde, MOQ 100 un.) em três faixas: Feiras ($0.74–$2.50), Onboarding ($2.80–$6.50) e VIP Executivo ($8.49–$18.00), incluindo arte vetorial grátis em 12h e laser 50W (+$0.15–$0.30/un.) ou esmalte Pantone (+$0.35–$0.60/un.).',
    matrixBadge: 'MATRIZ DE ORÇAMENTO CORPORATIVO',
    matrixTitle: 'Combine o Orçamento do Evento com Brindes Metálicos Duráveis',
    tableHeaders: ['Aplicação Corporativa', 'Orçamento Fábrica (EXW)', 'Moldes Recomendados', 'Gravação & Embalagem'],
    tableRows: [
      ['Feiras & Conferências Tech (500–5.000 un.)', '$0.74 – $2.50 / un.', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', 'Laser 50W (+$0.15–$0.30) + Saco a vácuo ($0.00 · MOQ 50)'],
      ['Kits Onboarding & Boas-Vindas (100–500 un.)', '$2.80 – $6.50 / un.', 'FS-001 Poker Slider, FS-047 Alu 6063, FS-013 Moeda Inox, FS-125', 'Laser profundo + Esmalte (+$0.35–$0.60) + Estojo EVA (+$0.75+ · MOQ 100)'],
      ['Diretoria & Presentes VIP (100–500+ un.)', '$8.49 – $18.00 / un.', 'FS-043 Gyro CNC 6 Eixos, FS-150 Diapasão, FS-075 Inox 304', 'Gravação VIP + Caixa rígida (+$1.45+/un. · MOQ 500) / Lata (1.000+)']
    ],
    picksBadge: '28 MOLDES PARA LOGO · TOP 8 CORPORATIVO',
    picksTitle: 'Modelos Planos Mais Vendidos para Logotipo de Empresa',
    faqBadge: 'FAQ BRINDES CORPORATIVOS',
    faqTitle: 'Dúvidas sobre Arte Digital, Preços & Prazos de Evento',
    serviceName: 'Brindes Corporativos Metálicos Fidget com Logotipo a Laser',
    serviceDesc: 'Fidget spinners e sliders metálicos com logo gravado direto da fábrica ($0 molde, MOQ 100, arte 12h).',
    faqs: [
      { question: 'Por que empresas preferem metal em vez de brindes plásticos?', answer: 'O metal sólido (Zamak-3, Alumínio 6063, Inox 304) gravado a laser 50W dura anos na mesa de trabalho sem apagar.' },
      { question: 'Qual o pedido mínimo (MOQ) com logo da empresa?', answer: '100 peças por SKU em 28 moldes planos ($0 molde); 50 peças para estoque liso.' },
      { question: 'Quanto custa em cada faixa corporativa?', answer: 'Feiras $0.74–$2.50, onboarding $2.80–$6.50 e VIP $8.49–$18.00 mais +$0.15–$0.30/un. do laser 50W.' },
      { question: 'Qual a vantagem de comprar direto da FidgetSupply?', answer: 'Preços EXW diretos em 140 moldes com linhas próprias de laser 50W e esmalte Pantone.' },
      { question: 'Quão rápido ficam prontos a arte digital e a produção?', answer: 'Prova vetorial 1:1 grátis em 12h; produção de 100–500 un. em 10–15 dias úteis em Fuzhou.' },
      { question: 'É possível gravar nomes individuais de colaboradores ou VIPs?', answer: 'Sim, via dados variáveis CSV nos nossos equipamentos a laser.' },
      { question: 'Dá para aplicar cores Pantone no metal?', answer: 'Sim, com gravação profunda a laser + esmalte curado (+$0.35–$0.60/un., MOQ 100–200).' },
      { question: 'Quais embalagens corporativas estão disponíveis?', answer: 'Saco a vácuo ($0.00, MOQ 50) incluso; estojo EVA estoque (+$0.75+/un., MOQ 100); caixa rígida (+$1.45+/un., MOQ 500); lata metálica (1.000+).' },
      { question: 'Podemos pedir amostra física paga antes do lote?', answer: 'Sim: amostra lisa de 1 un. (unidade e frete pagos pelo comprador, sem reembolso) ou amostra com logo em 10–15 dias ($50 laser / $80–$150 esmalte).' },
      { question: 'Os brindes atendem CPSC 16 CFR 1262, Prop 65 e RoHS 3?', answer: 'Sim, todos os ímãs são retidos mecanicamente e há mais de 30 modelos sem ímãs.' }
    ]
  },
  sv: {
    bcCurrent: 'Företagspresenter',
    badge1: 'FÖRETAGSGÅVOR & VIP-PROFIL',
    badge2: '28 Logo-Formar · $0 Verktyg',
    kpis: [
      { label: 'Mässa-nivå', val: '$0.74 – $2.50' },
      { label: '50W Fiberlaser', val: '+$0.15 – $0.30' },
      { label: 'Digital Korrektur', val: 'Gratis inom 12h' },
      { label: 'Logoproduktion', val: '10–15 Dagar' }
    ],
    ctaPrimary: 'Få Gratis 12h Korrektur →',
    ctaSecondary: 'Se 28 Logo-Formar →',
    showcasePill: 'LÅNGVARIG SKRIVBORDSPLATS',
    showcasePrice: 'MOQ 100 st',
    showcaseAlt: 'Lasergraverade metallsliders och spinners med företagslogotyp för företagsgåvor och mässor',
    showcaseMeta: ['50W Fiberlaser', 'Djup Emalj', 'Lager EVA-Etui'],
    geoTitle: 'Direktsvar: Företagspresenter i Metall Direkt från Fabrik per Budget',
    geoAnswer: 'FidgetSupply levererar graverade metallspinners, sliders och coins från 28 plana seriegjutformar ($0 verktygskostnad, MOQ 100 st) i tre budgetnivåer: Mässa ($0.74–$2.50), Onboarding ($2.80–$6.50) och VIP ($8.49–$18.00), med gratis 12h vektorkorrektur och 50W laser (+$0.15–$0.30/st) eller Pantone-emalj (+$0.35–$0.60/st).',
    matrixBadge: 'FÖRETAGSBUDGETMATRIS',
    matrixTitle: 'Anpassa Eventbudgeten till Hållbara Metallpresenter',
    tableHeaders: ['Användningsområde', 'Fabriksbudget (EXW)', 'Rekommenderade Formar', 'Märkning & Förpackning'],
    tableRows: [
      ['Mässor & Tech-konferenser (500–5 000 st)', '$0.74 – $2.50 / st', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', '50W Fiberlaser (+$0.15–$0.30) + Vakuumpåse ($0.00 · MOQ 50)'],
      ['Onboarding & Välkomstpaket (100–500 st)', '$2.80 – $6.50 / st', 'FS-001 Poker Slider, FS-047 Alu 6063, FS-013 Mynt, FS-125', 'Djup laser + Emalj (+$0.35–$0.60) + Lager EVA-etui (+$0.75+ · MOQ 100)'],
      ['Ledning & VIP-gåvor (100–500+ st)', '$8.49 – $18.00 / st', 'FS-043 CNC 6-axlig Gyro, FS-150 Stämgaffel, FS-075 Stål 304', 'VIP-gravyr + Hård presentask (+$1.45+/st · MOQ 500) / Plåtask (1 000+)']
    ],
    picksBadge: '28 LOGO-FORMAR · TOPP 8 FÖRETAG',
    picksTitle: 'Mest Sålda Plana Modeller för Företagslogotyp',
    faqBadge: 'FÖRETAGSGÅVOR FAQ',
    faqTitle: 'Frågor om Korrektur, Priser & Ledtid',
    serviceName: 'Företagspresenter Metallfidgets & Logograverad Profilreklam',
    serviceDesc: 'Fabriksdirekta lasergraverade metallfidgets för företagsgåvor och mässor ($0 verktyg, MOQ 100, 12h korrektur).',
    faqs: [
      { question: 'Varför väljer företag metall framför plastpresenter?', answer: 'Solid metall (Zamak-3, Alu 6063, 304 stål) med permanent 50W fiberlasergravyr stannar kvar på skrivbord i åratal.' },
      { question: 'Vad är minimiorder (MOQ) med företagslogga?', answer: '100 st per SKU på 28 plana Logo-Ready formar ($0 verktyg); blank lagervara från 50 st.' },
      { question: 'Vad kostar gåvorna i de tre budgetklasserna?', answer: 'Mässa $0.74–$2.50, onboarding $2.80–$6.50, VIP $8.49–$18.00 plus +$0.15–$0.30/st för 50W laser.' },
      { question: 'Vilken fördel ger inköp direkt från FidgetSupply?', answer: 'Direkta EXW-priser på 140 formar med egen 50W laser och djup emaljlinje.' },
      { question: 'Hur snabbt levererar ni korrektur och produktion?', answer: 'Gratis 1:1 vektorkorrektur inom 12h; tillverkning på 10–15 arbetsdagar i Fuzhou.' },
      { question: 'Kan individuella namn graveras på varje exemplar?', answer: 'Ja, via CSV-variabeldata för namn eller löpnummer.' },
      { question: 'Kan vi matcha vår Pantone-färg på metall?', answer: 'Ja, genom djup lasergravyr + ugnshärdad Pantone-emalj (+$0.35–$0.60/st, MOQ 100–200).' },
      { question: 'Vilka presentförpackningar erbjuder ni?', answer: 'Vakuumpåse ($0.00, MOQ 50) ingår; lager EVA-etui (+$0.75+/st, MOQ 100); hård presentask (+$1.45+/st, MOQ 500); plåtask (1 000+).' },
      { question: 'Kan vi beställa ett betalt fysiskt prov innan produktion?', answer: 'Ja: 1-st blankt prov (köparen betalar prov + frakt, ej återbetalningsbart) eller logoprov på 10–15 dagar ($50 laser / $80–$150 emalj).' },
      { question: 'Uppfyller produkterna CPSC 16 CFR 1262, Prop 65 och RoHS 3?', answer: 'Ja, alla magneter är mekaniskt kapslade och över 30 magnetfria modeller finns.' }
    ]
  },
  da: {
    bcCurrent: 'Firmagaver',
    badge1: 'FIRMAGAVER & VIP-MERCH',
    badge2: '28 Logo-Forme · $0 Værktøj',
    kpis: [
      { label: 'Messe-niveau', val: '$0.74 – $2.50' },
      { label: '50W Fiberlaser', val: '+$0.15 – $0.30' },
      { label: 'Digital Korrektur', val: 'Gratis på 12t' },
      { label: 'Logoproduktion', val: '10–15 Dage' }
    ],
    ctaPrimary: 'Få Gratis 12t Korrektur →',
    ctaSecondary: 'Se 28 Logo-Forme →',
    showcasePill: 'BLIVENDE PLADS PÅ SKRIVEBORDET',
    showcasePrice: 'MOQ 100 stk.',
    showcaseAlt: 'Lasergraverede metalslidere og spinnere med firmalogo til firmagaver og messer',
    showcaseMeta: ['50W Fiberlaser', 'Dyb Emalje', 'Lager EVA-Etui'],
    geoTitle: 'Direkte Svar: Fabriksdirekte Firmagaver i Metal efter Budget',
    geoAnswer: 'FidgetSupply leverer graverede metalspinners, sliders og coins fra 28 flade serieforme ($0 værktøj, MOQ 100 stk.) i tre budgetlag: Messestrø ($0.74–$2.50), Onboarding ($2.80–$6.50) og VIP ($8.49–$18.00), inklusiv gratis 12t vektorkorrektur samt 50W laser (+$0.15–$0.30/stk.) eller Pantone-emalje (+$0.35–$0.60/stk.).',
    matrixBadge: 'FIRMABUDGET-MATRIX',
    matrixTitle: 'Match Jeres Eventbudget med Holdbare Metalgaver',
    tableHeaders: ['Anvendelse i Virksomheden', 'Fabriksbudget (EXW)', 'Anbefalede Forme', 'Gravering & Emballage'],
    tableRows: [
      ['Messer & Tech-konferencer (500–5.000 stk.)', '$0.74 – $2.50 / stk.', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', '50W Fiberlaser (+$0.15–$0.30) + Vakuumpose ($0.00 · MOQ 50)'],
      ['Onboarding & Medarbejderpakker (100–500 stk.)', '$2.80 – $6.50 / stk.', 'FS-001 Poker Slider, FS-047 Alu 6063, FS-013 Mønt, FS-125', 'Dyb laser + Emalje (+$0.35–$0.60) + Lager EVA-etui (+$0.75+ · MOQ 100)'],
      ['Direktion & VIP-gaver (100–500+ stk.)', '$8.49 – $18.00 / stk.', 'FS-043 CNC 6-akset Gyro, FS-150 Stemmegaffel, FS-075 Stål 304', 'VIP-gravering + Hård gaveæske (+$1.45+/stk. · MOQ 500) / Dåse (1.000+)']
    ],
    picksBadge: '28 LOGO-FORME · TOP 8 FIRMAVALG',
    picksTitle: 'Mest Solgte Flade Modeller til Firmalogo',
    faqBadge: 'FIRMAGAVER FAQ',
    faqTitle: 'Spørgsmål om Korrektur, Priser & Levering til Events',
    serviceName: 'Firmagaver Metalfidgets & Reklameartikler med Logo',
    serviceDesc: 'Fabriksdirekte lasergraverede metalfidgets til firmagaver og messer ($0 værktøj, MOQ 100, 12t korrektur).',
    faqs: [
      { question: 'Hvorfor vælger virksomheder metal fremfor plastikreklame?', answer: 'Solidt metal (Zamak-3, Alu 6063, 304 stål) med permanent 50W lasergravering bliver stående på skrivebordet i årevis.' },
      { question: 'Hvad er MOQ for firmagaver med logo?', answer: '100 stk. pr. SKU på 28 flade Logo-Ready forme ($0 værktøj); blank lagervare fra 50 stk.' },
      { question: 'Hvad koster gaverne i de tre budgetklasser?', answer: 'Messe $0.74–$2.50, onboarding $2.80–$6.50, VIP $8.49–$18.00 plus +$0.15–$0.30/stk. for 50W laser.' },
      { question: 'Hvad er fordelen ved at handle direkte med FidgetSupply?', answer: 'Direkte EXW-fabrikspriser på 140 forme med eget 50W laser- og emaljeværksted.' },
      { question: 'Hvor hurtigt leverer I korrektur og produktion?', answer: 'Gratis 1:1 vektorkorrektur inden 12 timer; produktion på 10–15 hverdage i Fuzhou.' },
      { question: 'Kan der graveres individuelle navne på hver enhed?', answer: 'Ja, via CSV-variabeldatagravering til medarbejdernavne eller nummerering.' },
      { question: 'Kan I matche vores Pantone-farver på metal?', answer: 'Ja, med dyb lasergravering + hærdet Pantone-emalje (+$0.35–$0.60/stk., MOQ 100–200).' },
      { question: 'Hvilke gaveæsker tilbyder I?', answer: 'Vakuumpose ($0.00, MOQ 50) inkl.; lager EVA-etui (+$0.75+/stk., MOQ 100); hård gaveæske (+$1.45+/stk., MOQ 500); metaldåse (1.000+).' },
      { question: 'Kan vi bestille en betalt prøve før godkendelse?', answer: 'Ja: 1-stk. blank prøve (køber betaler enhed + fragt, uden refusion) eller logoprøve på 10–15 dage ($50 laser / $80–$150 emalje).' },
      { question: 'Overholder gaverne CPSC 16 CFR 1262, Prop 65 og RoHS 3?', answer: 'Ja, alle magneter er indkapslede og der findes 30+ magnetfri modeller.' }
    ]
  },
  no: {
    bcCurrent: 'Firmagaver',
    badge1: 'FIRMAGAVER & VIP-PROFILERING',
    badge2: '28 Logo-Former · $0 Verktøy',
    kpis: [
      { label: 'Messenivå', val: '$0.74 – $2.50' },
      { label: '50W Fiberlaser', val: '+$0.15 – $0.30' },
      { label: 'Digital Korrektur', val: 'Gratis på 12t' },
      { label: 'Logoproduksjon', val: '10–15 Dager' }
    ],
    ctaPrimary: 'Få Gratis 12t Korrektur →',
    ctaSecondary: 'Se 28 Logo-Former →',
    showcasePill: 'VARIG PLASS PÅ SKRIVEBORDET',
    showcasePrice: 'MOQ 100 stk.',
    showcaseAlt: 'Lasergraverte metallslidere og spinnere med firmalogo til firmagaver og messer',
    showcaseMeta: ['50W Fiberlaser', 'Dyp Emalje', 'Lager EVA-Etui'],
    geoTitle: 'Direkte Svar: Fabrikkdirekte Metall-Firmagaver etter Budsjett',
    geoAnswer: 'FidgetSupply leverer graverte metallspinnere, slidere og coins fra 28 flate former ($0 verktøygebyr, MOQ 100 stk.) i tre budsjettklasser: Messer ($0.74–$2.50), Onboarding ($2.80–$6.50) og VIP ($8.49–$18.00), med gratis 12t vektorkorrektur samt 50W laser (+$0.15–$0.30/stk.) eller Pantone-emalje (+$0.35–$0.60/stk.).',
    matrixBadge: 'FIRMABUDSJETT-MATRISE',
    matrixTitle: 'Tilpass Eventbudsjettet til Varige Metallgaver',
    tableHeaders: ['Bruksområde', 'Fabrikkbudsjett (EXW)', 'Anbefalte Former', 'Gravering & Emballasje'],
    tableRows: [
      ['Messer & Tech-konferanser (500–5 000 stk.)', '$0.74 – $2.50 / stk.', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', '50W Fiberlaser (+$0.15–$0.30) + Vakuumpose ($0.00 · MOQ 50)'],
      ['Onboarding & Ansattpakker (100–500 stk.)', '$2.80 – $6.50 / stk.', 'FS-001 Poker Slider, FS-047 Alu 6063, FS-013 Mynt, FS-125', 'Dyp laser + Emalje (+$0.35–$0.60) + Lager EVA-etui (+$0.75+ · MOQ 100)'],
      ['Ledelse & VIP-gaver (100–500+ stk.)', '$8.49 – $18.00 / stk.', 'FS-043 CNC 6-akset Gyro, FS-150 Stemmegaffel, FS-075 Stål 304', 'VIP-gravering + Hard gaveeske (+$1.45+/stk. · MOQ 500) / Boks (1 000+)']
    ],
    picksBadge: '28 LOGO-FORMER · TOPP 8 FIRMAVALG',
    picksTitle: 'Bestselgende Flate Modeller for Firmalogo',
    faqBadge: 'FIRMAGAVER FAQ',
    faqTitle: 'Spørsmål om Korrektur, Priser & Leveringstid',
    serviceName: 'Firmagaver Metallfidgets & Logogravert Profilering',
    serviceDesc: 'Fabrikkdirekte lasergraverte metallfidgets for firmagaver og messer ($0 verktøy, MOQ 100, 12t korrektur).',
    faqs: [
      { question: 'Hvorfor velger bedrifter metall fremfor plastgaver?', answer: 'Solid metall (Zamak-3, Alu 6063, 304 stål) med permanent 50W fiberlaser blir værende på skrivebordet i årevis.' },
      { question: 'Hva er MOQ for firmalogo på metallfidgets?', answer: '100 stk. per SKU på 28 flate Logo-Ready former ($0 verktøy); blank lagervare fra 50 stk.' },
      { question: 'Hva koster gavene i de ulike budsjettklassene?', answer: 'Messe $0.74–$2.50, onboarding $2.80–$6.50 og VIP $8.49–$18.00 pluss +$0.15–$0.30/stk. for 50W laser.' },
      { question: 'Hva er fordelen mot profileringsbyråer?', answer: 'Direkte EXW-fabrikkpriser på 140 former med egen 50W laser- og emaljelinje.' },
      { question: 'Hvor raskt leveres digital korrektur og produksjon?', answer: 'Gratis 1:1 vektorkorrektur innen 12t; produksjon på 10–15 virkedager i Fuzhou.' },
      { question: 'Kan hvert eksemplar graveres med eget ansattnavn?', answer: 'Ja, via CSV variabeldata-gravering.' },
      { question: 'Kan vi matche Pantone-farger på metall?', answer: 'Ja, via dyp lasergravering + herdet Pantone-emalje (+$0.35–$0.60/stk., MOQ 100–200).' },
      { question: 'Hvilke gavepakninger tilbyr dere?', answer: 'Vakuumpose ($0.00, MOQ 50) inkl.; lager EVA-etui (+$0.75+/stk., MOQ 100); gaveeske (+$1.45+/stk., MOQ 500); metallboks (1 000+).' },
      { question: 'Kan vi bestille betalt prøve før godkjenning?', answer: 'Ja: 1-stk blank prøve (kjøper betaler enhet + frakt, uten refusjon) eller logoprøve på 10–15 dager ($50 laser / $80–$150 emalje).' },
      { question: 'Oppfyller gavene CPSC 16 CFR 1262, Prop 65 og RoHS 3?', answer: 'Ja, alle magneter er mekanisk sikret og det finnes 30+ magnetfrie modeller.' }
    ]
  },
  fi: {
    bcCurrent: 'Yrityslahjat',
    badge1: 'YRITYSLAHJA & VIP-LIIKELAHJAT',
    badge2: '28 Logomuottia · $0 Muottikulu',
    kpis: [
      { label: 'Messutaso', val: '$0.74 – $2.50' },
      { label: '50W Kuitulaser', val: '+$0.15 – $0.30' },
      { label: 'Digivedos', val: 'Ilmainen 12h' },
      { label: 'Logotuotanto', val: '10–15 Päivää' }
    ],
    ctaPrimary: 'Tilaa Ilmainen 12h Vedos →',
    ctaSecondary: 'Katso 28 Logomuottia →',
    showcasePill: 'PYSYVÄ PÖYTÄNÄKYVYYS',
    showcasePrice: 'MOQ 100 kpl',
    showcaseAlt: 'Laserkaiverretut metallisliderit ja spinnerit yrityslahjoiksi ja messuille',
    showcaseMeta: ['50W Kuitulaser', 'Syvä Emali', 'Varasto EVA-Kotelo'],
    geoTitle: 'Suora Vastaus: Tehdassuorat Metalliset Yrityslahjat Budjettiluokittain',
    geoAnswer: 'FidgetSupply valmistaa kaiverrettuja metallispinnereitä, slidereita ja kolikoita 28 litteästä valmiista muotista ($0 muottikulu, MOQ 100 kpl) kolmessa budjetissa: Messujako ($0.74–$2.50), Perehdytyspaketit ($2.80–$6.50) ja VIP-johtolahjat ($8.49–$18.00), sisältäen ilmaisen 12h vektorivedoksen ja 50W laserin (+$0.15–$0.30/kpl) tai Pantone-emalin (+$0.35–$0.60/kpl).',
    matrixBadge: 'YRITYSBUDJETTIMATRIISI',
    matrixTitle: 'Sovita Tapahtumabudjettisi Kestäviin Metallilahjoihin',
    tableHeaders: ['Yrityskäyttö', 'Tehdasbudjetti (EXW)', 'Suositellut Muotit', 'Merkintä & Pakkaus'],
    tableRows: [
      ['Messut & Tech-konferenssit (500–5 000 kpl)', '$0.74 – $2.50 / kpl', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', '50W Kuitulaser (+$0.15–$0.30) + Tyhjiöpussi ($0.00 · MOQ 50)'],
      ['Työntekijöiden Perehdytys & SaaS (100–500 kpl)', '$2.80 – $6.50 / kpl', 'FS-001 Poker Slider, FS-047 Alu 6063, FS-013 Kolikko, FS-125', 'Syvä laser + Emali (+$0.35–$0.60) + Varasto EVA-kotelo (+$0.75+ · MOQ 100)'],
      ['Johto & VIP-asiakaslahjat (100–500+ kpl)', '$8.49 – $18.00 / kpl', 'FS-043 CNC 6-aks. Gyro, FS-150 Äänirauta, FS-075 Teräs 304', 'VIP-laserkaiverrus + Kova rasia (+$1.45+/kpl · MOQ 500) / Peltirasia (1 000+)']
    ],
    picksBadge: '28 LOGOMUOTTIA · TOP 8 YRITYSVALINTA',
    picksTitle: 'Myydyimmät Tasapintaiset Mallit Yrityslogolle',
    faqBadge: 'YRITYSLAHJA FAQ',
    faqTitle: 'Kysymykset Vedoksista, Hinnoista & Toimitusajoista',
    serviceName: 'Metalliset Yrityslahja-Fidgetit Omalla Logolla',
    serviceDesc: 'Tehdassuorat laserkaiverretut metallifidgetit yrityslahjoiksi ja messuille ($0 muotti, MOQ 100, 12h vedos).',
    faqs: [
      { question: 'Miksi yritykset valitsevat metallin muovisten mainoslahjojen sijaan?', answer: 'Vankka metalli (Zamak-3, 6063 alumiini, 304 teräs) pysyvällä 50W laserkaiverruksella säilyy työpöydällä vuosia.' },
      { question: 'Mikä on minimitilaus (MOQ) yrityksen logolla?', answer: '100 kpl per SKU 28 tasapintaisella logomuotilla ($0 muottikulu); merkkaamaton varasto alk. 50 kpl.' },
      { question: 'Paljonko yrityslahjat maksavat eri hintaluokissa?', answer: 'Messu $0.74–$2.50, perehdytys $2.80–$6.50 ja VIP $8.49–$18.00 sekä +$0.15–$0.30/kpl 50W laserista.' },
      { question: 'Mitä etua on suorasta tehdastoimituksesta välittäjiin nähden?', answer: 'Suorat EXW-tehdashinnat 140 muotissa omilla 50W laser- ja emalilinjoilla.' },
      { question: 'Kuinka nopeasti vedos ja tuotanto valmistuvat?', answer: 'Ilmainen 1:1 vektorivedos 12 tunnissa; tuotanto 10–15 arkipäivässä Fuzhoussa.' },
      { question: 'Voiko jokaiseen kappaleeseen kaivertaa yksilöllisen nimen?', answer: 'Kyllä, CSV-muuttujatiedolla nimille tai sarjanumeroille.' },
      { question: 'Onnistuvatko Pantone-brändivärit metallissa?', answer: 'Kyllä, syväkaiverruksella + paistetulla Pantone-emalilla (+$0.35–$0.60/kpl, MOQ 100–200).' },
      { question: 'Mitä lahjapakkauksia on saatavilla?', answer: 'Tyhjiöpussi ($0.00, MOQ 50) sisältyy; varasto EVA-kotelo (+$0.75+/kpl, MOQ 100); kova rasia (+$1.45+/kpl, MOQ 500); peltirasia (1 000+).' },
      { question: 'Voiko tilata maksullisen näytteen ennen hyväksyntää?', answer: 'Kyllä: 1 kpl perusnäyte (ostaja maksaa näytteen ja rahdin, ei hyvitetä) tai logonäyte 10–15 päivässä ($50 laser / $80–$150 emali).' },
      { question: 'Täyttävätkö tuotteet CPSC 16 CFR 1262, Prop 65 ja RoHS 3 -vaatimukset?', answer: 'Kyllä, magneetit ovat mekaanisesti suljettuja ja valikoimassa on yli 30 magneetitonta mallia.' }
    ]
  },
  pl: {
    bcCurrent: 'Gadżety Firmowe',
    badge1: 'GADŻETY FIRMOWE & PREZENTY VIP',
    badge2: '28 Form Logo · $0 za Formę',
    kpis: [
      { label: 'Poziom Targowy', val: '$0.74 – $2.50' },
      { label: 'Laser Światłow. 50W', val: '+$0.15 – $0.30' },
      { label: 'Wizualizacja', val: 'Gratis w 12h' },
      { label: 'Produkcja Logo', val: '10–15 Dni' }
    ],
    ctaPrimary: 'Zamów Wizualizację 12h Gratis →',
    ctaSecondary: 'Zobacz 28 Form pod Logo →',
    showcasePill: 'TRWAŁA OBECNOŚĆ NA BIURKU',
    showcasePrice: 'MOQ 100 szt.',
    showcaseAlt: 'Metalowe slidery i spinnery z grawerem laserowym na prezenty firmowe i targi',
    showcaseMeta: ['Laser 50W', 'Głęboka Emalia', 'Etui EVA ze Zapasu'],
    geoTitle: 'Bezpośrednia Odpowiedź: Metalowe Gadżety Firmowe Prosto z Fabryki wg Budżetu',
    geoAnswer: 'FidgetSupply dostarcza grawerowane metalowe spinnery, slidery i monety z 28 płaskich gotowych form ($0 za formę, MOQ 100 szt.) w trzech progach: Targi ($0.74–$2.50), Pakiety Onboarding ($2.80–$6.50) i Prezenty VIP ($8.49–$18.00), z darmową wizualizacją 12h i laserem 50W (+$0.15–$0.30/szt.) lub emalią Pantone (+$0.35–$0.60/szt.).',
    matrixBadge: 'MATRYCA BUDŻETÓW FIRMOWYCH',
    matrixTitle: 'Dopasuj Budżet Eventowy do Trwałych Metalowych Upominków',
    tableHeaders: ['Zastosowanie Firmowe', 'Budżet Fabryczny (EXW)', 'Polecane Formy', 'Znakowanie i Opakowanie'],
    tableRows: [
      ['Targi i Konferencje Tech (500–5 000 szt.)', '$0.74 – $2.50 / szt.', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', 'Laser 50W (+$0.15–$0.30) + Woreczek próżniowy ($0.00 · MOQ 50)'],
      ['Pakiety Onboarding & SaaS (100–500 szt.)', '$2.80 – $6.50 / szt.', 'FS-001 Poker Slider, FS-047 Alu 6063, FS-013 Moneta, FS-125', 'Głęboki laser + Emalia (+$0.35–$0.60) + Etui EVA (+$0.75+ · MOQ 100)'],
      ['Zarząd & Upominki VIP (100–500+ szt.)', '$8.49 – $18.00 / szt.', 'FS-043 CNC 6-osiowy Gyro, FS-150 Kamerton, FS-075 Stal 304', 'Grawer VIP + Sztywne pudełko (+$1.45+/szt. · MOQ 500) / Puszka (1 000+)']
    ],
    picksBadge: '28 FORM POD LOGO · TOP 8 FIRMOWYCH',
    picksTitle: 'Najpopularniejsze Płaskie Modele pod Logo Firmy',
    faqBadge: 'FAQ GADŻETÓW FIRMOWYCH',
    faqTitle: 'Pytania o Wizualizacje, Ceny i Terminy Eventowe',
    serviceName: 'Metalowe Gadżety Firmowe Fidget z Grawerem Laserowym',
    serviceDesc: 'Fabryczne metalowe spinnery i slidery z grawerem 50W dla firm i konferencji ($0 formy, MOQ 100, wizualizacja 12h).',
    faqs: [
      { question: 'Dlaczego firmy wybierają metalowe fidgety zamiast taniego plastiku?', answer: 'Lity metal (Zamak-3, Alu 6063, Stal 304) z trwałym grawerem laserowym 50W zostaje na biurkach przez lata.' },
      { question: 'Jaki jest minimalny nakład (MOQ) z logo firmowym?', answer: '100 sztuk na SKU dla 28 płaskich form ($0 formy); bez logo od 50 sztuk.' },
      { question: 'Ile kosztują w poszczególnych progach budżetowych?', answer: 'Targi $0.74–$2.50, onboarding $2.80–$6.50, VIP $8.49–$18.00 plus +$0.15–$0.30/szt. za laser 50W.' },
      { question: 'Jaka jest przewaga nad agencjami reklamowymi?', answer: 'Bezpośrednie ceny fabryczne EXW ze 140 form z własnymi liniami lasera 50W i emalii.' },
      { question: 'Jak szybko powstaje wizualizacja i produkcja?', answer: 'Bezpłatny podgląd wektorowy 1:1 w 12h; produkcja 100–500 szt. w 10–15 dni roboczych w Fuzhou.' },
      { question: 'Czy można grawerować indywidualne imiona pracowników lub VIP?', answer: 'Tak, z pliku CSV dla unikalnych nazwisk lub numeracji.' },
      { question: 'Czy wykonujecie kolorowe logotypy Pantone na metalu?', answer: 'Tak, metodą głębokiego lasera + utwardzonej emalii Pantone (+$0.35–$0.60/szt., MOQ 100–200).' },
      { question: 'Jakie opakowania prezentowe oferujecie?', answer: 'Woreczek próżniowy ($0.00, MOQ 50) w cenie; etui EVA (+$0.75+/szt., MOQ 100); sztywne pudełko (+$1.45+/szt., MOQ 500); puszka (1 000+).' },
      { question: 'Czy można zamówić płatną próbkę przed produkcją?', answer: 'Tak: próbka 1 szt. bez logo (jednostka i kurier na koszt kupującego, bezzwrotne) lub wzór z logo w 10–15 dni ($50 laser / $80–$150 emalia).' },
      { question: 'Czy spełniają normy US CPSC 16 CFR 1262, Prop 65 i EU RoHS 3?', answer: 'Tak, magnesy są mechanicznie zabezpieczone; mamy też ponad 30 modeli bez magnesów.' }
    ]
  },
  cs: {
    bcCurrent: 'Firemní Dárky',
    badge1: 'FIREMNÍ REKLAMNÍ PŘEDMĚTY & VIP',
    badge2: '28 Forem pro Logo · $0 Za Formu',
    kpis: [
      { label: 'Veletržní Úroveň', val: '$0.74 – $2.50' },
      { label: '50W Vláknový Laser', val: '+$0.15 – $0.30' },
      { label: 'Digitální Náhled', val: 'Zdarma do 12h' },
      { label: 'Výroba s Logem', val: '10–15 Dnů' }
    ],
    ctaPrimary: 'Získat Náhled Zdarma do 12h →',
    ctaSecondary: 'Zobrazit 28 Forem pro Logo →',
    showcasePill: 'DLOUHODOBĚ NA PRACOVNÍM STOLE',
    showcasePrice: 'MOQ 100 ks',
    showcaseAlt: 'Laserově gravírované kovové slidery a spinnery s firemním logem pro veletrhy a VIP',
    showcaseMeta: ['50W Vláknový Laser', 'Hluboký Smalt', 'Skladové EVA Pouzdro'],
    geoTitle: 'Přímá Odpověď: Kovové Firemní Dárky Přímo z Továrny Dle Rozpočtu',
    geoAnswer: 'FidgetSupply dodává gravírované kovové spinnery, slidery a mince z 28 plochých forem ($0 za formu, MOQ 100 ks) ve třech rozpočtech: Veletrhy ($0.74–$2.50), Nástupní Balíčky ($2.80–$6.50) a VIP Dárky ($8.49–$18.00), včetně bezplatného 12h vektorového náhledu a 50W laseru (+$0.15–$0.30/ks) či Pantone smaltu (+$0.35–$0.60/ks).',
    matrixBadge: 'ROZPOČTOVÁ MATICE PRO FIRMY',
    matrixTitle: 'Slaďte Rozpočet Akce s Odolnými Kovovými Předměty',
    tableHeaders: ['Firemní Použití', 'Tovární Rozpočet (EXW)', 'Doporučené Formy', 'Značení a Balení'],
    tableRows: [
      ['Veletrhy & Tech Konference (500–5 000 ks)', '$0.74 – $2.50 / ks', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', '50W Laser (+$0.15–$0.30) + Vakuový sáček ($0.00 · MOQ 50)'],
      ['Onboarding & Uvítací Balíčky (100–500 ks)', '$2.80 – $6.50 / ks', 'FS-001 Poker Slider, FS-047 Hliník, FS-013 Mince, FS-125', 'Hluboký laser + Smalt (+$0.35–$0.60) + EVA pouzdro (+$0.75+ · MOQ 100)'],
      ['Management & VIP Dárky (100–500+ ks)', '$8.49 – $18.00 / ks', 'FS-043 CNC 6osé Gyro, FS-150 Ladička, FS-075 Nerez 304', 'VIP gravírování + Pevná krabička (+$1.45+/ks · MOQ 500) / Plechovka (1 000+)']
    ],
    picksBadge: '28 FOREM PRO LOGO · TOP 8 FIREMNÍ',
    picksTitle: 'Nejprodávanější Ploché Modely pro Firemní Logo',
    faqBadge: 'FAQ FIREMNÍCH DÁRKŮ',
    faqTitle: 'Dotazy k Náhledům, Cenám & Termínům pro Akce',
    serviceName: 'Firemní Dárky Kovové Fidgety & Reklamní Předměty s Logem',
    serviceDesc: 'Továrně gravírované kovové fidgety pro firmy a veletrhy ($0 forma, MOQ 100, náhled 12h).',
    faqs: [
      { question: 'Proč firmy volí kov místo plastových reklamních předmětů?', answer: 'Masivní kov (Zamak-3, Hliník 6063, Nerez 304) s trvalým 50W laserem zůstává na stole roky.' },
      { question: 'Jaké je MOQ pro zakázku s firemním logem?', answer: '100 ks na SKU u 28 plochých forem ($0 forma); bez loga od 50 ks.' },
      { question: 'Kolik stojí jednotlivé firemní úrovně?', answer: 'Veletrhy $0.74–$2.50, onboarding $2.80–$6.50, VIP $8.49–$18.00 plus +$0.15–$0.30/ks za 50W laser.' },
      { question: 'Jaká je výhoda oproti běžným reklamním agenturám?', answer: 'Přímé tovární EXW ceny ze 140 forem s vlastní linkou 50W laseru a smaltování.' },
      { question: 'Jak rychle dodáte digitální náhled a výrobu?', answer: 'Vektorový náhled 1:1 zdarma do 12h; výroba 100–500 ks za 10–15 pracovních dnů v Fuzhou.' },
      { question: 'Lze gravírovat individuální jména zaměstnanců či VIP?', answer: 'Ano, prostřednictvím CSV variabilních dat.' },
      { question: 'Umíte sladit firemní barvy Pantone na kovu?', answer: 'Ano, hlubokým laserem + vypalovaným Pantone smaltem (+$0.35–$0.60/ks, MOQ 100–200).' },
      { question: 'Jaké dárkové krabičky nabízíte?', answer: 'Vakuový sáček ($0.00, MOQ 50) v ceně; skladové pouzdro EVA (+$0.75+/ks, MOQ 100); pevná krabička (+$1.45+/ks, MOQ 500); plechovka (1 000+).' },
      { question: 'Můžeme předem objednat placený fyzický vzorek?', answer: 'Ano: 1ks vzorek bez loga (kupující platí kus i dopravu, nevratné) nebo vzorek s logem za 10–15 dnů ($50 laser / $80–$150 smalt).' },
      { question: 'Splňují výrobky normy US CPSC 16 CFR 1262, Prop 65 a EU RoHS 3?', answer: 'Ano, magnety jsou mechanicky jištěné a máme přes 30 bezmagnetových modelů.' }
    ]
  },
  ru: {
    bcCurrent: 'Корпоративные подарки',
    badge1: 'КОРПОРАТИВНЫЙ МЕРЧ И VIP-ПОДАРКИ',
    badge2: '28 форм под лого · $0 форма',
    kpis: [
      { label: 'Промо-уровень', val: '$0.74 – $2.50' },
      { label: 'Волоконный лазер 50W', val: '+$0.15 – $0.30' },
      { label: 'Цифровой макет', val: 'Бесплатно за 12ч' },
      { label: 'Срок с логотипом', val: '10–15 дней' }
    ],
    ctaPrimary: 'Макет бесплатно за 12ч →',
    ctaSecondary: 'Все 28 форм под лого →',
    showcasePill: 'ПОСТОЯННО НА СТОЛЕ РУКОВОДИТЕЛЯ',
    showcasePrice: 'MOQ 100 шт.',
    showcaseAlt: 'Металлические спиннеры и слайдеры с лазерной гравировкой для корпоративных подарков и выставок',
    showcaseMeta: ['Лазер 50W', 'Глубокая эмаль', 'Чехлы EVA в наличии'],
    geoTitle: 'Прямой ответ: Корпоративные металлические подарки с завода по бюджету',
    geoAnswer: 'FidgetSupply поставляет спиннеры, слайдеры и хаптик-монеты с логотипом напрямую с 28 плоских готовых форм ($0 за форму, MOQ 100 шт.) в трёх бюджетах: Выставки ($0.74–$2.50), Велком-наборы ($2.80–$6.50) и VIP-подарки ($8.49–$18.00), включая бесплатный векторный макет за 12 ч и лазер 50W (+$0.15–$0.30/шт.) или эмаль Pantone (+$0.35–$0.60/шт.).',
    matrixBadge: 'МАТРИЦА КОРПОРАТИВНЫХ БЮДЖЕТОВ',
    matrixTitle: 'Подберите долговечный металлический мерч под бюджет мероприятия',
    tableHeaders: ['Корпоративная задача', 'Заводской бюджет (EXW)', 'Рекомендуемые формы', 'Нанесение и упаковка'],
    tableRows: [
      ['Выставки и IT-конференции (500–5 000 шт.)', '$0.74 – $2.50 / шт.', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', 'Лазер 50W (+$0.15–$0.30) + Вакуумный пакет ($0.00 · MOQ 50)'],
      ['Онбординг сотрудников и SaaS-боксы (100–500 шт.)', '$2.80 – $6.50 / шт.', 'FS-001 Poker Slider, FS-047 Алюминий, FS-013 Монета, FS-125', 'Глубокий лазер + Эмаль (+$0.35–$0.60) + Чехол EVA (+$0.75+ · MOQ 100)'],
      ['Топ-менеджмент и VIP-партнёры (100–500+ шт.)', '$8.49 – $18.00 / шт.', 'FS-043 ЧПУ 6-осевой Гиро, FS-150 Камертон, FS-075 Сталь 304', 'VIP-гравировка + Жёсткая коробка (+$1.45+/шт. · MOQ 500) / Жесть (1 000+)']
    ],
    picksBadge: '28 ФОРМ ПОД ЛОГО · ТОП-8 ДЛЯ БИЗНЕСА',
    picksTitle: 'Самые популярные плоские модели для логотипа компании',
    faqBadge: 'FAQ ПО КОРПОРАТИВНЫМ ПОДАРКАМ',
    faqTitle: 'Вопросы по макетам, ценам и срокам к мероприятиям',
    serviceName: 'Корпоративные металлические фиджеты и сувениры с логотипом',
    serviceDesc: 'Металлические спиннеры и слайдеры с гравировкой 50W напрямую с фабрики ($0 форма, MOQ 100, макет за 12 ч).',
    faqs: [
      { question: 'Почему компании выбирают металл вместо пластиковых промо-сувениров?', answer: 'Цельный металл (Zamak-3, Алюминий 6063, Сталь 304) с вечной гравировкой лазером 50W годами остаётся на рабочем столе.' },
      { question: 'Каков минимальный тираж (MOQ) с логотипом компании?', answer: '100 шт. на модель на 28 плоских формах ($0 форма); без лого — от 50 шт.' },
      { question: 'Сколько стоят наборы в трёх корпоративных бюджетах?', answer: 'Выставки $0.74–$2.50, велком-боксы $2.80–$6.50, VIP $8.49–$18.00 плюс +$0.15–$0.30/шт. за лазер 50W.' },
      { question: 'В чём выгода прямого заказа от агентств сувенирной продукции?', answer: 'Прямые цены EXW на 140 готовых форм и собственные линии лазера 50W и эмалирования.' },
      { question: 'Как быстро делаются макет и партия к дате события?', answer: 'Бесплатный 1:1 векторный макет за 12 ч; производство 100–500 шт. — 10–15 рабочих дней в Фучжоу.' },
      { question: 'Можно ли выгравировать именные поздравления или номера 001/250?', answer: 'Да, с загрузкой переменных данных из CSV на лазерных станках Galvo.' },
      { question: 'Можно ли нанести цветной логотип по Pantone?', answer: 'Да, глубокой лазерной выборкой + запечённой эмалью Pantone (+$0.35–$0.60/шт., MOQ 100–200).' },
      { question: 'Какая подарочная упаковка доступна?', answer: 'Вакуумный пакет ($0.00, MOQ 50) включён; чехол EVA (+$0.75+/шт., MOQ 100); жёсткая коробка (+$1.45+/шт., MOQ 500); жестяной бокс (1 000+).' },
      { question: 'Можно ли предварительно заказать платный физический образец?', answer: 'Да: 1 шт. без лого (единица и доставка за счёт покупателя, невозвратно) или именной образец за 10–15 дней ($50 лазер / $80–$150 эмаль).' },
      { question: 'Соответствуют ли изделия CPSC 16 CFR 1262, Prop 65 и EU RoHS 3?', answer: 'Да, все магниты механически заблокированы, плюс есть 30+ моделей без магнитов.' }
    ]
  },
  ja: {
    bcCurrent: '法人ギフト・ノベルティ',
    badge1: '企業ノベルティ＆VIP記念品',
    badge2: '名入れ向け平面28金型・金型代 $0',
    kpis: [
      { label: '展示会バラマキ帯', val: '$0.74 – $2.50' },
      { label: '50Wレーザー刻印', val: '+$0.15 – $0.30' },
      { label: 'デジタル版下校正', val: '12時間以内無料' },
      { label: '名入れ製作期間', val: '10〜15営業日' }
    ],
    ctaPrimary: '12時間無料ロゴ校正を依頼 →',
    ctaSecondary: '名入れ対応28金型を見る →',
    showcasePill: 'デスクで長く使われる金属品質',
    showcasePrice: 'MOQ 100個',
    showcaseAlt: '企業ギフト・展示会向けの50Wレーザー名入れ金属フィジェットスライダーとスピナー',
    showcaseMeta: ['50Wファイバーレーザー', '深彫り色入れ', '既製EVAケース'],
    geoTitle: '結論：予算帯別の工場直販・法人向け名入れ金属フィジェット',
    geoAnswer: 'FidgetSupplyは平面名入れ対応28金型（金型費$0・MOQ 100個〜）を用い、展示会ノベルティ($0.74–$2.50)、社員ウェルカムキット($2.80–$6.50)、VIPエグゼクティブギフト($8.49–$18.00)の3価格帯で工場直販供給します。12時間以内の1:1無料版下校正、消えない50Wレーザー刻印(+$0.15–$0.30/個)および深彫りPantone色入れ(+$0.35–$0.60/個)に対応しています。',
    matrixBadge: '法人予算別マトリクス',
    matrixTitle: 'イベント予算と用途に最適な永久保存版メタルギフトを選択',
    tableHeaders: ['法人利用シーン', '工場単価目安 (EXW)', '推奨既存金型', '名入れ・パッケージ組み合わせ'],
    tableRows: [
      ['展示会・テックカンファレンス配布 (500〜5,000個)', '$0.74 – $2.50 / 個', 'FS-009 ポケットスピナー ($0.74+), FS-059 ($1.70+), FS-006', '50Wレーザー (+$0.15–$0.30) + 防酸化真空パウチ ($0.00 · MOQ 50)'],
      ['新入社員ウェルカムキット・記念品 (100〜500個)', '$2.80 – $6.50 / 個', 'FS-001 ポーカー, FS-047 アルミ6063, FS-013 コイン, FS-125', '深彫り+Pantone色入れ (+$0.35–$0.60) + 既製EVAケース (+$0.75+ · MOQ 100)'],
      ['役員・VIP顧客向けプレミアムギフト (100〜500+個)', '$8.49 – $18.00 / 個', 'FS-043 6軸CNCジャイロ, FS-150 音叉, FS-075 304SS', 'VIP個別刻印 + 特注ハード箱 (+$1.45+/個 · MOQ 500) / ブリキ缶 (1,000+)']
    ],
    picksBadge: '平面名入れ対応28金型・法人人気TOP 8',
    picksTitle: '企業ロゴが美しく映える平皿・平面モデル',
    faqBadge: '法人ギフト・ノベルティ FAQ',
    faqTitle: '版下校正・価格帯・納期に関するよくある質問',
    serviceName: '企業ノベルティ・VIP記念品向け名入れ金属フィジェット製造',
    serviceDesc: '展示会・ウェルカムキット・VIPギフト向けの工場直販名入れ金属フィジェット（金型$0、MOQ 100、12時間無料校正）。',
    faqs: [
      { question: 'なぜ多くの企業がプラスチック製ではなく金属製フィジェットを選ぶのですか？', answer: '20g〜130gの亜鉛合金・アルミ・ステンレス製ボディに50Wレーザー刻印を施すため、印刷剥がれがなく何年もデスクに置かれ高い広告接触効果が続きます。' },
      { question: '企業ロゴ入れの最小ロット（MOQ）はいくつですか？', answer: '平面対応28金型は1品番100個〜（金型費$0）、無地は50個〜です。' },
      { question: '予算帯ごとの単価イメージを教えてください。', answer: '展示会用$0.74–$2.50、社内記念品$2.80–$6.50、VIP用$8.49–$18.00にレーザー加工+$0.15–$0.30/個が目安です。' },
      { question: '一般のノベルティ代理店と比べて何が有利ですか？', answer: '140種の工場直販EXW単価に加え、内製の50W MOPAレーザーおよび深彫りエポキシ塗装ラインを直接利用できます。' },
      { question: 'ロゴ配置イメージ校正と量産納期の目安は？', answer: '.AI/.SVG/.PDF受領後12時間以内に1:1無料校正を提示し、100〜500個は10〜15営業日で福州工場にて完成します。' },
      { question: '社員名やシリアル番号（001/250等）を1個ずつ変えて刻印できますか？', answer: 'はい、CSVデータ連携による可変レーザー刻印に対応しています。' },
      { question: 'コーポレートカラーのPantone色表現は可能ですか？', answer: 'はい、深彫りレーザー＋焼付エナメル充填（+$0.35–$0.60/個・MOQ 100〜200個）により摩擦で剥がれない着色ロゴが可能です。' },
      { question: 'どのような法人向けギフトパッケージがありますか？', answer: '真空防酸化パウチ($0.00・MOQ 50)標準付属、既製ブラックEVAジッパーケース(+$0.75+/個・MOQ 100)、特注ハード化粧箱(+$1.45+/個・MOQ 500)、窓付きブリキ缶(MOQ 1,000個〜)があります。' },
      { question: '本発注前に有償の事前サンプルを確認できますか？', answer: 'はい。無地1個評価サンプル（実費・送料買い手負担、返金不可）に加え、名入れ試作（10〜15日：50Wレーザー$50 USD／深彫り色入れ$80〜$150 USD・送料別）を手配可能です。' },
      { question: '米国CPSC 16 CFR 1262やEU RoHS 3など安全基準に適合していますか？', answer: 'はい、全磁石モデルに二重固定構造を採用しRoHS 3 / REACH適合。磁石不使用モデルも30種以上ございます。' }
    ]
  },
  ko: {
    bcCurrent: '기업 선물 & 판촉물',
    badge1: '기업 판촉물 & VIP 기프트',
    badge2: '평면 로고 28종 금형 · 금형비 $0',
    kpis: [
      { label: '행사 배포용 단가', val: '$0.74 – $2.50' },
      { label: '50W 레이저 각인', val: '+$0.15 – $0.30' },
      { label: '디지털 시안', val: '12시간 내 무료' },
      { label: '로고 제작 기간', val: '10~15영업일' }
    ],
    ctaPrimary: '12시간 무료 로고 시안 신청 →',
    ctaSecondary: '로고 전용 28종 금형 보기 →',
    showcasePill: '임원 데스크에 오래 남는 굿즈',
    showcasePrice: 'MOQ 100개',
    showcaseAlt: '전시회 판촉물 및 기업 VIP 선물용 50W 레이저 각인 메탈 피젯 슬라이더와 스피너',
    showcaseMeta: ['50W 파이버 레이저', '딥 인그레이빙 에나멜', '기성 EVA 케이스'],
    geoTitle: '직접 답변: 예산 구간별 공장 직판 기업 로고 메탈 피젯 기프트',
    geoAnswer: 'FidgetSupply는 로고 각인에 최적화된 평면 28종 기성 금형(금형비 $0, MOQ 100개)을 기반으로 컨퍼런스 판촉용($0.74–$2.50/개), 임직원 온보딩 키트($2.80–$6.50/개), VIP 임원 기프트($8.49–$18.00/개)를 공장 직판가로 공급합니다. 12시간 무료 1:1 벡터 시안, 벗겨지지 않는 50W 파이버 레이저(+$0.15–$0.30/개) 및 팬톤 컬러 딥 에나멜(+$0.35–$0.60/개)을 지원합니다.',
    matrixBadge: '기업 예산별 추천 매트릭스',
    matrixTitle: '행사 규모와 예산에 맞는 반영구적 메탈 데스크 굿즈',
    tableHeaders: ['기업 활용 목적', '공장 EXW 단가 예산', '추천 기성 금형', '각인 & 패키지 조합'],
    tableRows: [
      ['박람회 & 테크 컨퍼런스 대량 배포 (500~5,000개)', '$0.74 – $2.50 / 개', 'FS-009 포켓 스피너 ($0.74+), FS-059 ($1.70+), FS-006 델타', '50W 파이버 레이저 (+$0.15–$0.30) + 진공 파우치 ($0.00 · MOQ 50)'],
      ['신규 입사자 웰컴 키트 & SaaS 굿즈 (100~500개)', '$2.80 – $6.50 / 개', 'FS-001 포커 슬라이더, FS-047 알루미늄, FS-013 코인, FS-125', '딥 레이저 + 에나멜 (+$0.35–$0.60) + 기성 EVA 파우치 (+$0.75+ · MOQ 100)'],
      ['VIP 고객사 & 임원진 선물 패키지 (100~500+개)', '$8.49 – $18.00 / 개', 'FS-043 6축 CNC 자이로, FS-150 소리굽쇠, FS-075 스틸', 'VIP 개별 각인 + 맞춤 하드 박스 (+$1.45+/개 · MOQ 500) / 틴케이스 (1,000+)']
    ],
    picksBadge: '로고 각인 28종 · 기업 선호 TOP 8',
    picksTitle: '기업 로고 시인성이 가장 뛰어난 평면 베스트셀러',
    faqBadge: '기업 선물 & 판촉물 FAQ',
    faqTitle: '무료 시안, 예산 구간 및 납기 안내',
    serviceName: '기업 홍보 판촉물 & VIP 로고 각인 메탈 피젯 공급',
    serviceDesc: '전시회 기념품·온보딩 키트·VIP 선물용 50W 레이저 각인 메탈 피젯 공장 직판 (금형비 $0, MOQ 100, 12시간 무료 시안).',
    faqs: [
      { question: '왜 많은 기업들이 플라스틱 판촉물 대신 메탈 피젯을 선택하나요?', answer: '20g~130g Zamak-3 아연·6063 알루미늄·304 스틸 바디와 영구적인 50W 파이버 레이저 각인은 인쇄가 지워지지 않고 책상 위에서 수년간 브랜드를 노출시킵니다.' },
      { question: '기업 로고 각인 최소 주문 수량(MOQ)은 얼마인가요?', answer: '평면 로고 전용 28종 금형 기준 SKU당 100개부터 가능하며(금형비 $0.00), 무지 제품은 50개부터 주문 가능합니다.' },
      { question: '기업 예산대별 제품 구성과 비용은 어떻게 되나요?', answer: '행사 배포용 $0.74–$2.50, 온보딩 키트 $2.80–$6.50, VIP 기프트 $8.49–$18.00 수준이며 50W 레이저 각인 비용은 +$0.15–$0.30/개입니다.' },
      { question: '일반 판촉물 대행사와 비교해 어떤 경쟁력이 있나요?', answer: '중간 유통 마진 없는 공장 직판 EXW 단가로 140종 기성 금형과 자체 50W 레이저·딥 에나멜 라인을 직접 이용하실 수 있습니다.' },
      { question: '시안 확인과 양산 출고까지 얼마나 걸리나요?', answer: '.AI/.SVG/.PDF 파일 접수 후 12시간 이내 무료 1:1 벡터 시안을 발송하며, 100~500개 기준 푸저우 공장에서 10~15영업일 내 제작 완료됩니다.' },
      { question: '임직원이나 VIP 성함, 일련번호(001/250 등)를 개별 각인할 수 있나요?', answer: '네, CSV 파일 가변 데이터 각인으로 개별 성함과 시리얼 넘버 부여가 가능합니다.' },
      { question: '기업 로고의 팬톤(Pantone) 지정 컬러 구현도 가능한가요?', answer: '네, 딥 레이저 음각 후 열경화 팬톤 에나멜 충진(+$0.35–$0.60/개, MOQ 100~200개)으로 손마찰에도 색상이 벗겨지지 않습니다.' },
      { question: '제공되는 기업 선물 포장 옵션은 어떤 것들이 있나요?', answer: '개별 산화방지 진공 파우치($0.00, MOQ 50) 기본 포함 외에 기성 블랙 EVA 지퍼 케이스(+$0.75+/개, MOQ 100), 맞춤 하드 기프트 박스(+$1.45+/개, MOQ 500), 창문형 틴케이스(1,000개+) 선택이 가능합니다.' },
      { question: '대량 승인 전에 유상 실물 샘플을 먼저 받아볼 수 있나요?', answer: '네, 전 140종 1개 무지 샘플(단가 및 국제 배송비 구매자 부담·비환불) 또는 로고 시제품(10~15일: 레이저 $50 USD / 딥 에나멜 $80~$150 USD, 운임 별도) 주문이 가능합니다.' },
      { question: '미국 CPSC 16 CFR 1262 및 유럽 RoHS 3 안전 규정을 충족하나요?', answer: '네, 모든 자석 모델에 이중 잠금 고정 설계를 적용했으며 RoHS 3 / REACH 인증을 준수합니다. 무자석 기계식 모델도 30종 이상 보유하고 있습니다.' }
    ]
  },
  id: {
    bcCurrent: 'Souvenir Perusahaan',
    badge1: 'SOUVENIR PERUSAHAAN & HADIAH VIP',
    badge2: '28 Cetakan Logo · $0 Cetakan',
    kpis: [
      { label: 'Paket Pameran', val: '$0.74 – $2.50' },
      { label: 'Laser Serat 50W', val: '+$0.15 – $0.30' },
      { label: 'Bukti Desain', val: 'Gratis 12 Jam' },
      { label: 'Produksi Logo', val: '10–15 Hari' }
    ],
    ctaPrimary: 'Dapatkan Desain Gratis 12 Jam →',
    ctaSecondary: 'Lihat 28 Cetakan Logo →',
    showcasePill: 'TAHAN LAMA DI MEJA KLIEN',
    showcasePrice: 'MOQ 100 pcs',
    showcaseAlt: 'Fidget slider & spinner logam berukir laser untuk souvenir perusahaan dan hadiah VIP',
    showcaseMeta: ['Laser Serat 50W', 'Enamel Dalam', 'Tas EVA Stok'],
    geoTitle: 'Jawaban Langsung: Souvenir Fidget Logam Perusahaan Langsung Pabrik',
    geoAnswer: 'FidgetSupply menyediakan spinner, slider, dan koin taktil logam berlogo dari 28 cetakan permukaan datar ($0 biaya cetakan, MOQ 100 pcs) dalam tiga anggaran: Pameran ($0.74–$2.50), Onboarding Karyawan ($2.80–$6.50), dan Hadiah VIP ($8.49–$18.00), lengkap dengan bukti vektor gratis 12 jam serta laser 50W (+$0.15–$0.30/pc) atau enamel Pantone (+$0.35–$0.60/pc).',
    matrixBadge: 'MATRIKS ANGGARAN PERUSAHAAN',
    matrixTitle: 'Sesuaikan Anggaran Acara dengan Souvenir Logam Permanen',
    tableHeaders: ['Kebutuhan Perusahaan', 'Anggaran Pabrik (EXW)', 'Cetakan Rekomendasi', 'Ukiran & Kemasan'],
    tableRows: [
      ['Pameran & Konferensi Teknologi (500–5.000 pcs)', '$0.74 – $2.50 / pc', 'FS-009 Pocket Spinner ($0.74+), FS-059 Slider ($1.70+), FS-006 Delta', 'Laser 50W (+$0.15–$0.30) + Kantong vakum ($0.00 · MOQ 50)'],
      ['Onboarding & Paket Karyawan SaaS (100–500 pcs)', '$2.80 – $6.50 / pc', 'FS-001 Poker Slider, FS-047 Alu 6063, FS-013 Koin, FS-125', 'Deep laser + Enamel (+$0.35–$0.60) + Tas EVA (+$0.75+ · MOQ 100)'],
      ['Eksekutif VIP & Bingkisan Direksi (100–500+ pcs)', '$8.49 – $18.00 / pc', 'FS-043 CNC Gyro 6-Sumbu, FS-150 Garpu Tala, FS-075 Stainless', 'Ukiran VIP + Kotak kaku (+$1.45+/pc · MOQ 500) / Kaleng (1.000+)']
    ],
    picksBadge: '28 CETAKAN LOGO · 8 PILIHAN TERBAIK',
    picksTitle: 'Model Permukaan Datar Terlaris untuk Logo Perusahaan',
    faqBadge: 'FAQ SOUVENIR PERUSAHAAN',
    faqTitle: 'Pertanyaan Desain Logo, Harga & Waktu Pengerjaan',
    serviceName: 'Souvenir Fidget Logam Perusahaan & Merchandise Laser Kustom',
    serviceDesc: 'Spinner & slider logam berlogo laser 50W langsung pabrik untuk souvenir kantor dan pameran ($0 cetakan, MOQ 100, bukti 12 jam).',
    faqs: [
      { question: 'Mengapa perusahaan memilih fidget logam dibanding suvenir plastik?', answer: 'Logam padat (Zamak-3, Aluminium 6063, Stainless 304) dengan laser 50W permanen bertahan bertahun-tahun di meja kerja.' },
      { question: 'Berapa minimal order (MOQ) untuk logo perusahaan?', answer: '100 pcs per SKU di 28 cetakan datar ($0 cetakan); stok polos mulai 50 pcs.' },
      { question: 'Berapa biaya di tiap tingkat anggaran perusahaan?', answer: 'Pameran $0.74–$2.50, onboarding $2.80–$6.50, VIP $8.49–$18.00 ditambah +$0.15–$0.30/pc untuk laser 50W.' },
      { question: 'Apa kelebihannya dibanding distributor merchandise biasa?', answer: 'Harga pabrik EXW langsung pada 140 cetakan dengan lini laser 50W dan enamel internal.' },
      { question: 'Seberapa cepat bukti digital dan produksinya?', answer: 'Bukti vektor 1:1 gratis dalam 12 jam; produksi 100–500 pcs selesai 10–15 hari kerja di Fuzhou.' },
      { question: 'Bisakah mengukir nama karyawan atau nomor seri VIP satu per satu?', answer: 'Ya, melalui fitur data variabel CSV pada mesin laser Galvo kami.' },
      { question: 'Bisakah menyesuaikan warna merek Pantone di atas logam?', answer: 'Ya, dengan ukiran laser dalam + isian enamel Pantone (+$0.35–$0.60/pc, MOQ 100–200).' },
      { question: 'Pilihan kemasan hadiah apa saja yang tersedia?', answer: 'Kantong vakum ($0.00, MOQ 50) termasuk; tas EVA stok (+$0.75+/pc, MOQ 100); kotak kaku (+$1.45+/pc, MOQ 500); kaleng logam (1.000+).' },
      { question: 'Bisakah memesan sampel fisik berbayar sebelum produksi massal?', answer: 'Ya: sampel polos 1 pc (unit & ongkir ditanggung pembeli, non-refundable) atau sampel logo dalam 10–15 hari ($50 laser / $80–$150 enamel).' },
      { question: 'Apakah memenuhi standar CPSC 16 CFR 1262, Prop 65, dan RoHS 3?', answer: 'Ya, seluruh magnet terkunci permanen dan tersedia 30+ model mekanis tanpa magnet.' }
    ]
  },
  ar: {
    bcCurrent: 'هدايا الشركات',
    badge1: 'هدايا الشركات وكبار الشخصيات VIP',
    badge2: '28 قالباً للشعار · 0$ قوالب',
    kpis: [
      { label: 'فئة المعارض', val: '$0.74 – $2.50' },
      { label: 'ليزر ألياف 50W', val: '+$0.15 – $0.30' },
      { label: 'معاينة رقمية', val: 'مجاناً خلال 12 ساعة' },
      { label: 'إنتاج الشعار', val: '10–15 يوم عمل' }
    ],
    ctaPrimary: 'اطلب معاينة شعار مجانية خلال 12 ساعة →',
    ctaSecondary: 'عرض 28 قالباً جاهزاً للشعار →',
    showcasePill: 'بقاء دائم على مكاتب المدراء',
    showcasePrice: 'الحد الأدنى 100 قطعة',
    showcaseAlt: 'سلايدرات وسبينرات معدنية محفورة بالليزر لهدايا الشركات والمعارض التجارية',
    showcaseMeta: ['ليزر ألياف 50W', 'مينا عميق', 'حافظات EVA متوفرة'],
    geoTitle: 'إجابة مباشرة: هدايا الشركات المعدنية من المصنع حسب الميزانية',
    geoAnswer: 'تورد FidgetSupply سبينرات وسلايدرات وعملات تفاعلية محفورة بشعار شركتك مباشرة من 28 قالباً مسطحاً ($0 رسوم قوالب، حد أدنى 100 قطعة) في ثلاث شرائح: توزيعات المعارض ($0.74–$2.50)، حقائب الموظفين الجدد ($2.80–$6.50)، وهدايا كبار الشخصيات VIP ($8.49–$18.00)، شاملة معاينة متجهات مجانية خلال 12 ساعة وليزر 50W (+$0.15–$0.30) أو مينا بانتون (+$0.35–$0.60).',
    matrixBadge: 'مصفوفة ميزانيات الشركات',
    matrixTitle: 'طابق ميزانية فعاليتك مع هدايا مكتبية معدنية تدوم طويلاً',
    tableHeaders: ['الاستخدام المؤسسي', 'ميزانية المصنع (EXW)', 'أفضل القوالب', 'خيار الحفر والتغليف'],
    tableRows: [
      ['المعارض والمؤتمرات التقنية (500–5,000 قطعة)', '$0.74 – $2.50 / قطعة', 'FS-009 سبينر الجيب ($0.74+), FS-059 ($1.70+), FS-006', 'ليزر 50W (+$0.15–$0.30) + كيس مفرغ ($0.00 · 50 قطعة)'],
      ['تأهيل الموظفين وهدايا فرق التقنية (100–500 قطعة)', '$2.80 – $6.50 / قطعة', 'FS-001 بوكر، FS-047 ألومنيوم، FS-013 عملة، FS-125', 'ليزر عميق + مينا (+$0.35–$0.60) + حافظة EVA (+$0.75+ · 100 قطعة)'],
      ['هدايا الإدارة وكبار الشخصيات VIP (100–500+ قطعة)', '$8.49 – $18.00 / قطعة', 'FS-043 جيروسكوب CNC، FS-150 شوكة رنانة، FS-075 فولاذ', 'حفر VIP خاص + علبة فاخرة صلبة (+$1.45+ · 500) / صفيح (1,000+)']
    ],
    picksBadge: '28 قالباً للشعار · أفضل 8 خيارات للشركات',
    picksTitle: 'الموديلات المسطحة الأكثر مبيعاً لشعارات الشركات',
    faqBadge: 'الأسئلة الشائعة لهدايا الشركات',
    faqTitle: 'أسئلة معاينة الشعار والأسعار وجداول الفعاليات',
    serviceName: 'توريد هدايا الشركات المعدنية بحفر شعار ليزر مخصص',
    serviceDesc: 'سبينرات وسلايدرات معدنية محفورة بليزر 50W مباشرة من المصنع للمعارض وكبار الشخصيات ($0 قالب، 100 قطعة، معاينة 12 ساعة).',
    faqs: [
      { question: 'لماذا تختار الشركات الفيدجت المعدني بدلاً من الهدايا البلاستيكية؟', answer: 'المعدن الصلب (Zamak-3 والألومنيوم والفولاذ) بحفر ليزر 50W الدائم يبقى على المكاتب سنوات طويلة دون بهتان الشعار.' },
      { question: 'ما الحد الأدنى لطلب هدايا الشركات مع الشعار؟', answer: '100 قطعة لكل SKU عبر 28 قالباً مسطحاً ($0 قوالب)، و50 قطعة للسادة.' },
      { question: 'كم تبلغ التكلفة في شرائح ميزانية الشركات؟', answer: 'المعارض $0.74–$2.50، حقائب الموظفين $2.80–$6.50، وVIP $8.49–$18.00 يضاف إليها +$0.15–$0.30/قطعة لليزر 50W.' },
      { question: 'ما ميزة الشراء المباشر مقارنة بوكالات الدعاية التقليدية؟', answer: 'أسعار EXW المصنعية مباشرة عبر 140 قالباً وخطوط ليزر 50W وتلوين مينا داخلية.' },
      { question: 'ما سرعة تجهيز المعاينة الرقمية والإنتاج للفعاليات؟', answer: 'معاينة رقمية مجانية خلال 12 ساعة وإنتاج 100–500 قطعة خلال 10–15 يوم عمل في فوتشو.' },
      { question: 'هل يمكن حفر اسم كل موظف أو رقم تسلسلي فريد لكبار الشخصيات؟', answer: 'نعم، عبر تغذية بيانات CSV المتغيرة على أجهزة الليزر.' },
      { question: 'هل يمكن مطابقة ألوان بانتون الخاصة بشركتنا على المعدن؟', answer: 'نعم، بالحفر العميق وتعبئة مينا بانتون المعالجة حرارياً (+$0.35–$0.60/قطعة، MOQ 100–200).' },
      { question: 'ما خيارات تغليف الهدايا المؤسسية؟', answer: 'كيس مفرغ ($0.00، 50 قطعة) مشمول، حافظة EVA متوفرة (+$0.75+، 100 قطعة)، علبة فاخرة صلبة (+$1.45+، 500 قطعة)، أو علبة صفيح (+1,000).' },
      { question: 'هل يمكن طلب عينة فعلية مدفوعة قبل اعتماد الكمية؟', answer: 'نعم: عينة سادة بقطعة واحدة (سعر العينة والشحن على المشتري دون استرداد) أو عينة بالشعار خلال 10–15 يوماً ($50 ليزر / $80–$150 مينا).' },
      { question: 'هل الهدايا متوافقة مع معايير CPSC 16 CFR 1262 وProp 65 وEU RoHS 3؟', answer: 'نعم، جميع المغناطيسات مثبتة بإحكام وتتوفر أيضاً أكثر من 30 موديلاً بدون مغناطيس.' }
    ]
  }
};

export function getCorporateGiftsCopy(lang: SupportedLanguage): CorporateGiftsCopy {
  return COPY[lang] || COPY.en;
}
