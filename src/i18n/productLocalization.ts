import type { SupportedLanguage } from './config';
import { getLocalizedPath, useTranslations } from './utils';
import { localizeInsightMeta } from './insightAndCollectionLocalization';

export interface LocalizedProductData {
  title: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  material: string;
  magnets: string;
  accessories: string;
  colors: string;
  specs: Array<[string, string]>;
  variants: Array<any>;
  features: string[];
  editorialHtml: string;
  faqs: Array<{ question: string; answer: string }>;
}

const SPEC_KEY_MAP: Record<string, Partial<Record<SupportedLanguage, string>>> = {
  'Factory SKU Code': {
    de: 'Werk-SKU-Code', fr: 'Code SKU Usine', nl: 'Fabrieks-SKU-code', es: 'Código SKU de Fábrica',
    it: 'Codice SKU di Fabbrica', pt: 'Código SKU de Fábrica', sv: 'Fabriks-SKU-kod', da: 'Fabriks-SKU-kode',
    no: 'Fabrikk-SKU-kode', fi: 'Tehtaan SKU-koodi', pl: 'Kod SKU Fabryki', cs: 'Tovární SKU kód',
    ru: 'Заводской артикул (SKU)', ja: '工場SKUコード', ko: '공장 SKU 코드', id: 'Kode SKU Pabrik', ar: 'رمز SKU للمصنع'
  },
  'Original Mold Reference': {
    de: 'Serienform-Referenz', fr: 'Référence Moule de Série', nl: 'Originele Matrijsreferentie', es: 'Referencia de Molde de Serie',
    it: 'Riferimento Stampo di Serie', pt: 'Referência de Molde de Série', sv: 'Originalform-referens', da: 'Original støbeformsreference',
    no: 'Original støpeformreferanse', fi: 'Alkuperäinen muottiviite', pl: 'Referencja Formy Seryjnej', cs: 'Reference sériové formy',
    ru: 'Номер серийной пресс-формы', ja: '既存金型リファレンス', ko: '기성 금형 번호', id: 'Referensi Cetakan Seri', ar: 'مرجع القالب الجاهز'
  },
  'Body Material': {
    de: 'Gehäusematerial & Metallurgie', fr: 'Matériau du Corps & Alliage', nl: 'Behuizingsmateriaal', es: 'Material del Cuerpo y Aleación',
    it: 'Materiale del Corpo e Lega', pt: 'Material do Corpo e Liga', sv: 'Chassimaterial & metallurgi', da: 'Kabinetmateriale & legering',
    no: 'Kabinettmateriale & legering', fi: 'Runkomateriaali & metallurgia', pl: 'Materiał Korpusu i Stop', cs: 'Materiál těla a slitina',
    ru: 'Материал корпуса и сплав', ja: '本体素材・合金仕様', ko: '바디 소재 및 합금', id: 'Material Bodi & Paduan Logam', ar: 'مادة الهيكل والسبيكة المعدنية'
  },
  'Dimensions (L × W × H)': {
    de: 'Abmessungen (L × B × H)', fr: 'Dimensions (L × l × H)', nl: 'Afmetingen (L × B × H)', es: 'Dimensiones (L × An × Al)',
    it: 'Dimensioni (L × P × A)', pt: 'Dimensões (C × L × A)', sv: 'Mått (L × B × H)', da: 'Dimensioner (L × B × H)',
    no: 'Dimensjoner (L × B × H)', fi: 'Mitat (P × L × K)', pl: 'Wymiary (Dł. × Szer. × Wys.)', cs: 'Rozměry (D × Š × V)',
    ru: 'Габариты (Д × Ш × В)', ja: '外形寸法 (縦×横×厚さ)', ko: '외형 치수 (가로×세로×두께)', id: 'Dimensi Ukuran (P × L × T)', ar: 'الأبعاد الهندسية (الطول × العرض × الارتفاع)'
  },
  'Net Unit Weight': {
    de: 'Nettogewicht pro Stück', fr: 'Poids Net Unitaire', nl: 'Netto Eenheidsgewicht', es: 'Peso Neto Unitario',
    it: 'Peso Netto Unitario', pt: 'Peso Líquido Unitário', sv: 'Nettovikt per enhet', da: 'Nettovægt pr. enhed',
    no: 'Nettovekt per enhet', fi: 'Yksikön nettopaino', pl: 'Masa Netto Sztuki', cs: 'Čistá hmotnost kusu',
    ru: 'Чистый вес изделия', ja: '単体重量（ネット重量）', ko: '단품 순중량', id: 'Berat Bersih per Unit', ar: 'الوزن الصافي للقطعة'
  },
  'Magnet Configuration': {
    de: 'NdFeB-Magnetkonfiguration', fr: 'Configuration Magnétique NdFeB', nl: 'NdFeB-magneetconfiguratie', es: 'Configuración de Imanes NdFeB',
    it: 'Configurazione Magnetica NdFeB', pt: 'Configuração de Ímanes NdFeB', sv: 'NdFeB-magnetkonfiguration', da: 'NdFeB-magnetkonfiguration',
    no: 'NdFeB-magnetkonfigurasjon', fi: 'NdFeB-magneettikokoonpano', pl: 'Konfiguracja Magnesów NdFeB', cs: 'Konfigurace magnetů NdFeB',
    ru: 'Конфигурация неодимовых магнитов', ja: 'ネオジム磁石（NdFeB）構成', ko: '네오디뮴(NdFeB) 자석 배열', id: 'Konfigurasi Magnet Neodymium', ar: 'تكوين مغناطيس النيوديميوم NdFeB'
  },
  'Internal Hardware & Bearings': {
    de: 'Interne Mechanik & Kugellager', fr: 'Mécanisme Interne & Roulements', nl: 'Interne Hardware & Lagers', es: 'Herrajes Internos y Rodamientos',
    it: 'Componenti Interni e Cuscinetti', pt: 'Componentes Internos e Rolamentos', sv: 'Intern mekanik & kullager', da: 'Intern mekanik & kuglelejer',
    no: 'Intern mekanikk & kulelager', fi: 'Sisäiset komponentit & laakerit', pl: 'Mechanizm Wewnętrzny i Łożyska', cs: 'Vnitřní mechanika a ložiska',
    ru: 'Внутренняя механика и подшипники', ja: '内部ベアリング・機構部品', ko: '내부 베어링 및 기구 부품', id: 'Komponen Internal & Bantalan Bearing', ar: 'المكونات الميكانيكية والمحامل الداخلية'
  },
  'Standard Surface Finishes': {
    de: 'Standard-Oberflächenveredelung', fr: 'Finitions de Surface Standard', nl: 'Standaard Oppervlakteafwerking', es: 'Acabados Superficiales Estándar',
    it: 'Finiture Superficiali Standard', pt: 'Acabamentos Superficiais Padrão', sv: 'Standard ytfinish', da: 'Standard overfladefinish',
    no: 'Standard overflatefinish', fi: 'Vakiopintakäsittelyt', pl: 'Standardowe Wykończenia Powierzchni', cs: 'Standardní povrchové úpravy',
    ru: 'Стандартная отделка поверхности', ja: '標準表面仕上げ・メッキ仕様', ko: '표준 표면 마감 및 도금', id: 'Finishing Permukaan Standar', ar: 'التشطيبات السطحية القياسية'
  },
  'Tooling / Mold Fee': {
    de: 'Werkzeug- / Formenbaugebühr', fr: 'Frais d’Outillage / Moule', nl: 'Matrijs- / Gereedschapskosten', es: 'Costo de Molde / Matricería',
    it: 'Costo Stampo / Attrezzatura', pt: 'Custo de Molde / Ferramentaria', sv: 'Verktygs- / formkostnad', da: 'Værktøjs- / støbeformsgebyr',
    no: 'Verktøy- / støpeformgebyr', fi: 'Muotti- ja työkalukustannus', pl: 'Koszt Formy / Oprzędziowania', cs: 'Poplatek za formu / nástroje',
    ru: 'Стоимость пресс-формы / оснастки', ja: '金型費用（初期ツール代）', ko: '금형비 (초기 툴링 비용)', id: 'Biaya Cetakan / Mold', ar: 'رسوم القالب والتجهيز الهندسي'
  },
  'Wholesale MOQ': {
    de: 'Mindestbestellmenge (MOQ)', fr: 'Quantité Minimale (MOQ)', nl: 'Minimale Bestelhoeveelheid (MOQ)', es: 'Pedido Mínimo Mayorista (MOQ)',
    it: 'Quantitativo Minimo (MOQ)', pt: 'Quantidade Mínima (MOQ)', sv: 'Minsta orderkvantitet (MOQ)', da: 'Mindste ordremængde (MOQ)',
    no: 'Minste bestillingsantall (MOQ)', fi: 'Vähimmäistilausmäärä (MOQ)', pl: 'Minimalne Zamówienie (MOQ)', cs: 'Minimální odběr (MOQ)',
    ru: 'Минимальный тираж (MOQ)', ja: '最小注文数量 (MOQ)', ko: '최소 주문 수량 (MOQ)', id: 'Kuantitas Pesanan Minimum (MOQ)', ar: 'الحد الأدنى للطلب بالجملة (MOQ)'
  },
  'Custom Branding Methods': {
    de: 'Individuelle Logo-Verfahren', fr: 'Méthodes de Marquage Logo', nl: 'Logo-personalisatiemethoden', es: 'Métodos de Personalización de Logo',
    it: 'Metodi di Personalizzazione Logo', pt: 'Métodos de Personalização de Logótipo', sv: 'Logotyptryck & gravyrmetoder', da: 'Logomærkningsmetoder',
    no: 'Logomerkingsmetoder', fi: 'Logon merkkausmenetelmät', pl: 'Metody Znakowania Logo', cs: 'Metody značení vlastního loga',
    ru: 'Методы нанесения логотипа', ja: 'カスタムロゴ名入れ・刻印方法', ko: '맞춤 로고 각인 및 인쇄 방식', id: 'Metode Kustomisasi Logo', ar: 'طرق حفر وطباعة الشعار المخصص'
  },
  'Safety Compliance': {
    de: 'Sicherheits- & Normkonformität', fr: 'Conformité & Normes de Sécurité', nl: 'Veiligheidsnormen & Conformiteit', es: 'Normativa y Seguridad Internacional',
    it: 'Conformità e Sicurezza Normativa', pt: 'Conformidade e Normas de Segurança', sv: 'Säkerhets- & regelefterlevnad', da: 'Sikkerheds- & lovkrav',
    no: 'Sikkerhets- & samsvarskrav', fi: 'Turvallisuus- & vaatimustenmukaisuus', pl: 'Zgodność z Normami Bezpieczeństwa', cs: 'Bezpečnostní normy a certifikace',
    ru: 'Стандарты безопасности и сертификация', ja: '安全基準・国際コンプライアンス', ko: '안전 기준 및 국제 규정 준수', id: 'Standar Keamanan & Kepatuhan', ar: 'معايير السلامة والامتثال الدولي'
  },
  'Custom Sample Fee & Time': {
    de: 'Mustergebühr & Musterbauzeit', fr: 'Frais & Délai d’Échantillonnage', nl: 'Monsterkosten & Doorlooptijd', es: 'Tarifa y Plazo de Muestra con Logo',
    it: 'Costo e Tempi Campione Personalizzato', pt: 'Taxa e Prazo de Amostra com Logótipo', sv: 'Provavgift & provleveranstid', da: 'Prøvegebyr & ekspeditionstid',
    no: 'Prøvegebyr & leveringstid', fi: 'Mallimaksu & mallin toimitusaika', pl: 'Koszt i Czas Wykonania Próbki', cs: 'Cena a doba výroby vzorku',
    ru: 'Стоимость и срок изготовления образца', ja: 'カスタムサンプル費用・製作日数', ko: '맞춤 샘플 비용 및 제작 기간', id: 'Biaya & Waktu Sampel Logo Kustom', ar: 'رسوم ومدة تصنيع العينة المخصصة'
  },
  'Factory Production Note': {
    de: 'Produktionshinweis ab Werk', fr: 'Note de Production Usine', nl: 'Fabrieksproductie-opmerking', es: 'Nota de Producción de Fábrica',
    it: 'Nota di Produzione di Fabbrica', pt: 'Nota de Produção de Fábrica', sv: 'Fabriksproduktionsnotering', da: 'Fabriksproduktionsnote',
    no: 'Fabrikkproduksjonsnotat', fi: 'Tehtaan tuotantohuomautus', pl: 'Uwaga Produkcyjna Fabryki', cs: 'Výrobní poznámka závodu',
    ru: 'Производственное примечание', ja: '工場生産・在庫備考', ko: '공장 생산 및 재고 비고', id: 'Catatan Produksi Pabrik', ar: 'ملاحظة الإنتاج في المصنع'
  }
};

const MATERIAL_PHRASE_MAP: Array<[RegExp, Partial<Record<SupportedLanguage, string>>]> = [
  [/Die-Cast Zinc Alloy \(Zamak #3\)/gi, {
    de: 'Zinkdruckguss-Legierung (Zamak #3)', fr: 'Alliage de Zinc Moulé sous Pression (Zamak #3)', nl: 'Spuitgegoten Zinklegering (Zamak #3)',
    es: 'Aleación de Zinc Fundido a Presión (Zamak #3)', it: 'Lega di Zinco Pressofusa (Zamak #3)', pt: 'Liga de Zinco Fundido sob Pressão (Zamak #3)',
    sv: 'Pressgjuten zinklegering (Zamak #3)', da: 'Trykstøbt zinklegering (Zamak #3)', no: 'Pressstøpt sinklegering (Zamak #3)',
    fi: 'Painevalettu sinkkiseos (Zamak #3)', pl: 'Odlewany Ciśnieniowo Stop Cynku (Zamak #3)', cs: 'Tlakově litá zinková slitina (Zamak #3)',
    ru: 'Литой цинковый сплав (Zamak #3)', ja: '亜鉛合金ダイカスト (Zamak #3)', ko: '아연 합금 다이캐스팅 (Zamak #3)',
    id: 'Paduan Seng Die-Cast (Zamak #3)', ar: 'سبيكة الزنك المصبوبة بالضغط (Zamak #3)'
  }],
  [/Marine-Grade 316 Stainless Steel/gi, {
    de: 'Marine-Edelstahl 316 (CNC-gefräst)', fr: 'Acier Inoxydable 316 Qualité Marine', nl: 'Maritiem 316 Roestvrij Staal',
    es: 'Acero Inoxidable 316 de Grado Marino', it: 'Acciaio Inox 316 di Grado Marino', pt: 'Aço Inoxidável 316 de Grau Marinho',
    sv: 'Marinklassat 316 rostfritt stål', da: 'Marine-kvalitet 316 rustfrit stål', no: 'Marinekvalitet 316 rustfritt stål',
    fi: 'Meriluokan 316 ruostumaton teräs', pl: 'Stal Nierdzewna 316 Klasy Morskiej', cs: 'Námořní nerezová ocel 316',
    ru: 'Морская нержавеющая сталь 316', ja: 'マリングレード 316ステンレス鋼', ko: '마린 그레이드 316 스테인리스 스틸',
    id: 'Baja Tahan Karat 316 Kelas Maritim', ar: 'الفولاذ المقاوم للصدأ 316 البحري'
  }],
  [/CNC 304 Stainless Steel/gi, {
    de: 'CNC-gefräster 304 Edelstahl', fr: 'Acier Inoxydable 304 Usiné CNC', nl: 'CNC 304 Roestvrij Staal',
    es: 'Acero Inoxidable 304 Mecanizado CNC', it: 'Acciaio Inox 304 Lavorato CNC', pt: 'Aço Inoxidável 304 Maquinado CNC',
    sv: 'CNC-fräst 304 rostfritt stål', da: 'CNC-fræset 304 rustfrit stål', no: 'CNC-frest 304 rustfritt stål',
    fi: 'CNC-koneistettu 304 ruostumaton teräs', pl: 'Stal Nierdzewna 304 Obrabiana CNC', cs: 'CNC obráběná nerezová ocel 304',
    ru: 'Нержавеющая сталь 304 (ЧПУ)', ja: 'CNC切削 304ステンレス鋼', ko: 'CNC 가공 304 스테인리스 스틸',
    id: 'Baja Tahan Karat 304 CNC', ar: 'الفولاذ المقاوم للصدأ 304 المصنع بـ CNC'
  }],
  [/304 Stainless Steel/gi, {
    de: '304 Edelstahl', fr: 'Acier Inoxydable 304', nl: '304 Roestvrij Staal',
    es: 'Acero Inoxidable 304', it: 'Acciaio Inox 304', pt: 'Aço Inoxidável 304',
    sv: '304 rostfritt stål', da: '304 rustfrit stål', no: '304 rustfritt stål',
    fi: '304 ruostumaton teräs', pl: 'Stal Nierdzewna 304', cs: 'Nerezová ocel 304',
    ru: 'Нержавеющая сталь 304', ja: '304ステンレス鋼', ko: '304 스테인리스 스틸',
    id: 'Baja Tahan Karat 304', ar: 'الفولاذ المقاوم للصدأ 304'
  }],
  [/Free-Machining 303 Stainless Steel/gi, {
    de: 'CNC 303 Automaten-Edelstahl', fr: 'Acier Inoxydable 303 de Décolletage CNC', nl: 'CNC 303 Roestvrij Staal',
    es: 'Acero Inoxidable 303 de Mecanizado CNC', it: 'Acciaio Inox 303 Lavorato CNC', pt: 'Aço Inoxidável 303 Maquinado CNC',
    sv: 'CNC 303 rostfritt automatstål', da: 'CNC 303 rustfrit stål', no: 'CNC 303 rustfritt stål',
    fi: 'CNC 303 ruostumaton automaattiteräs', pl: 'Stal Nierdzewna 303 CNC', cs: 'Automatová nerezová ocel 303 CNC',
    ru: 'Нержавеющая сталь 303 (ЧПУ)', ja: 'CNC切削 303ステンレス鋼', ko: 'CNC 가공 303 스테인리스 스틸',
    id: 'Baja Tahan Karat 303 CNC', ar: 'الفولاذ المقاوم للصدأ 303 المصنع بـ CNC'
  }],
  [/CNC 6061\/6063 Anodized Aluminum Alloy/gi, {
    de: 'CNC 6061/6063 Eloxierte Aluminiumlegierung', fr: 'Alliage d’Aluminium Anodisé 6061/6063 CNC', nl: 'CNC 6061/6063 Geanodiseerd Aluminium',
    es: 'Aleación de Aluminio Anodizado 6061/6063 CNC', it: 'Lega di Alluminio Anodizzato 6061/6063 CNC', pt: 'Liga de Alumínio Anodizado 6061/6063 CNC',
    sv: 'CNC 6061/6063 anodiserad aluminiumlegering', da: 'CNC 6061/6063 anodiseret aluminiumslegering', no: 'CNC 6061/6063 anodisert aluminiumslegering',
    fi: 'CNC 6061/6063 anodisoitu alumiiniseos', pl: 'Anodowany Stop Aluminium 6061/6063 CNC', cs: 'CNC eloxovaná hliníková slitina 6061/6063',
    ru: 'Анодированный алюминиевый сплав 6061/6063 (ЧПУ)', ja: 'CNC 6061/6063 アルマイト加工アルミニウム合金', ko: 'CNC 6061/6063 아노다이징 알루미늄 합금',
    id: 'Paduan Aluminium Anodized 6061/6063 CNC', ar: 'سبيكة الألومنيوم المؤكسد 6061/6063 CNC'
  }],
  [/CNC 6063-T6 Anodized Aluminum/gi, {
    de: 'CNC 6063-T6 Eloxiertes Aluminium', fr: 'Aluminium Anodisé 6063-T6 CNC', nl: 'CNC 6063-T6 Geanodiseerd Aluminium',
    es: 'Aluminio Anodizado 6063-T6 CNC', it: 'Alluminio Anodizzato 6063-T6 CNC', pt: 'Alumínio Anodizado 6063-T6 CNC',
    sv: 'CNC 6063-T6 anodiserat aluminium', da: 'CNC 6063-T6 anodiseret aluminium', no: 'CNC 6063-T6 anodisert aluminium',
    fi: 'CNC 6063-T6 anodisoitu alumiini', pl: 'Anodowane Aluminium 6063-T6 CNC', cs: 'CNC eloxovaný hliník 6063-T6',
    ru: 'Анодированный алюминий 6063-T6 (ЧПУ)', ja: 'CNC 6063-T6 アルマイト加工アルミニウム', ko: 'CNC 6063-T6 아노다이징 알루미늄',
    id: 'Aluminium Anodized 6063-T6 CNC', ar: 'الألومنيوم المؤكسد 6063-T6 CNC'
  }],
  [/CNC Exotic Zirconium Alloy \(Zr702\)/gi, {
    de: 'CNC Exotische Zirkoniumlegierung (Zr702)', fr: 'Alliage de Zirconium Exotique CNC (Zr702)', nl: 'CNC Exotische Zirkoniumlegering (Zr702)',
    es: 'Aleación Exótica de Circonio CNC (Zr702)', it: 'Lega Esotica di Zirconio CNC (Zr702)', pt: 'Liga Exótica de Zircónio CNC (Zr702)',
    sv: 'CNC exotisk zirkoniumlegering (Zr702)', da: 'CNC eksotisk zirkoniumlegering (Zr702)', no: 'CNC eksotisk zirkoniumlegering (Zr702)',
    fi: 'CNC eksoottinen zirkoniumseos (Zr702)', pl: 'Egzotyczny Stop Cyrkonu CNC (Zr702)', cs: 'CNC exotická zirkoniová slitina (Zr702)',
    ru: 'Экзотический циркониевый сплав ЧПУ (Zr702)', ja: 'CNC 希少ジルコニウム合金 (Zr702)', ko: 'CNC 특수 지르코늄 합금 (Zr702)',
    id: 'Paduan Zirkonium Eksotis CNC (Zr702)', ar: 'سبيكة الزركونيوم النادرة CNC (Zr702)'
  }],
  [/Amber PEI \(Polyetherimide \/ Ultem 1000\)/gi, {
    de: 'Bernstein-PEI (Polyetherimid / Ultem 1000)', fr: 'PEI Ambre (Polyétherimide / Ultem 1000)', nl: 'Amber PEI (Polyetherimide / Ultem 1000)',
    es: 'PEI Ámbar (Polieterimida / Ultem 1000)', it: 'PEI Ambra (Polieterimmide / Ultem 1000)', pt: 'PEI Âmbar (Polieterimida / Ultem 1000)',
    sv: 'Bärnstens-PEI (Polyeterimid / Ultem 1000)', da: 'Ravfarvet PEI (Polyetherimid / Ultem 1000)', no: 'Ravfarget PEI (Polyeterimid / Ultem 1000)',
    fi: 'Meripihkanvärinen PEI (Ultem 1000)', pl: 'Bursztynowy PEI (Polieteroimid / Ultem 1000)', cs: 'Jantarový PEI (Polyetherimid / Ultem 1000)',
    ru: 'Янтарный полиэфиримид PEI (Ultem 1000)', ja: 'アンバーPEI（ポリエーテルイミド / Ultem 1000）', ko: '앰버 PEI (폴리에테르이미드 / 울템 1000)',
    id: 'PEI Amber (Polyetherimide / Ultem 1000)', ar: 'بولي إيثر إيميد الكهرماني PEI (Ultem 1000)'
  }],
  [/3K Woven Carbon Fiber & C36000 Brass/gi, {
    de: '3K-Kohlefasergewebe & C36000 Messing', fr: 'Fibre de Carbone Tressée 3K & Laiton C36000', nl: '3K Geweven Koolstofvezel & C36000 Messing',
    es: 'Fibra de Carbono 3K y Latón C36000', it: 'Fibra di Carbonio 3K e Ottone C36000', pt: 'Fibra de Carbono 3K e Latão C36000',
    sv: '3K vävd kolfiber & C36000 mässing', da: '3K vævet kulfiber & C36000 messing', no: '3K vevd karbonfiber & C36000 messing',
    fi: '3K hiilikuitu & C36000 messinki', pl: 'Włókno Węglowe 3K i Mosiądz C36000', cs: '3K uhlíkové vlákno a mosaz C36000',
    ru: 'Карбон 3K и латунь C36000', ja: '3Kカーボンファイバー＆C36000真鍮', ko: '3K 카본 파이버 & C36000 황동',
    id: 'Serat Karbon 3K & Kuningan C36000', ar: 'ألياف الكربون 3K والنحاس الأصفر C36000'
  }],
  [/Zinc Alloy/gi, {
    de: 'Zinklegierung', fr: 'Alliage de Zinc', nl: 'Zinklegering', es: 'Aleación de Zinc', it: 'Lega di Zinco', pt: 'Liga de Zinco',
    sv: 'Zinklegering', da: 'Zinklegering', no: 'Sinklegering', fi: 'Sinkkiseos', pl: 'Stop Cynku', cs: 'Zinková slitina',
    ru: 'Цинковый сплав', ja: '亜鉛合金', ko: '아연 합금', id: 'Paduan Seng', ar: 'سبيكة الزنك'
  }],
  [/C36000 Brass/gi, {
    de: 'C36000 Messing', fr: 'Laiton C36000', nl: 'C36000 Messing', es: 'Latón C36000', it: 'Ottone C36000', pt: 'Latão C36000',
    sv: 'C36000 mässing', da: 'C36000 messing', no: 'C36000 messing', fi: 'C36000 messinki', pl: 'Mosiądz C36000', cs: 'Mosaz C36000',
    ru: 'Латунь C36000', ja: 'C36000真鍮', ko: 'C36000 황동', id: 'Kuningan C36000', ar: 'النحاس الأصفر C36000'
  }],
  [/Anodized Aluminum/gi, {
    de: 'Eloxiertes Aluminium', fr: 'Aluminium Anodisé', nl: 'Geanodiseerd Aluminium', es: 'Aluminio Anodizado', it: 'Alluminio Anodizzato', pt: 'Alumínio Anodizado',
    sv: 'Anodiserat aluminium', da: 'Anodiseret aluminium', no: 'Anodisert aluminium', fi: 'Anodisoitu alumiini', pl: 'Anodowane Aluminium', cs: 'Eloxovaný hliník',
    ru: 'Анодированный алюминий', ja: 'アルマイト加工アルミニウム', ko: '아노다이징 알루미늄', id: 'Aluminium Anodized', ar: 'الألومنيوم المؤكسد'
  }],
  [/Hardened Alloy Steel/gi, {
    de: 'Gehärteter Legierungsstahl', fr: 'Acier Allié Trempé', nl: 'Gehard Gelegeerd Staal', es: 'Acero Aleado Templado', it: 'Acciaio Legato Temprato', pt: 'Aço Ligado Temperado',
    sv: 'Härdat legerat stål', da: 'Hærdet legeret stål', no: 'Herdet legert stål', fi: 'Karkaistu seosteräs', pl: 'Hartowana Stal Stopowa', cs: 'Kalená legovaná ocel',
    ru: 'Закаленная легированная сталь', ja: '焼入れ合金鋼', ko: '경화 합금강', id: 'Baja Paduan Keras', ar: 'فولاذ سبائكي مقسى'
  }]
];

export function localizeMaterial(raw: string, lang: SupportedLanguage): string {
  if (lang === 'en' || !raw) return raw;
  let out = raw;
  for (const [re, map] of MATERIAL_PHRASE_MAP) {
    if (map[lang]) {
      out = out.replace(re, map[lang]!);
    }
  }
  return out;
}

const HARDWARE_TERMS: Array<[RegExp, Partial<Record<SupportedLanguage, string>>]> = [
  [/Non-Magnetic \(Pure Mechanical \/ Bearing Action\)/gi, {
    de: 'Magnetfrei (Reine Mechanik- / Kugellager-Rotation)', fr: 'Sans Aimant (Action Puremenent Mécanique / Roulement)',
    nl: 'Niet-magnetisch (Puurs Mechanische / Lageractie)', es: 'Sin Imanes (Acción Puramente Mecánica / Rodamiento)',
    it: 'Senza Magneti (Azione Meccanica / Cuscinetto)', pt: 'Sem Ímanes (Ação Puramente Mecânica / Rolamento)',
    sv: 'Magnetfri (Ren mekanisk / kullagerfunktion)', da: 'Magnetfri (Ren mekanisk / kuglelejefunktion)',
    no: 'Magnetfri (Ren mekanisk / kulelagerfunksjon)', fi: 'Magneetiton (Puhdas mekaaninen / laakeritoiminto)',
    pl: 'Bezmagnesowy (Czysta Mechanika / Łożysko)', cs: 'Nemagnetické (Čistě mechanický / ložiskový chod)',
    ru: 'Без магнитов (чистая механика / вращение на подшипнике)', ja: '磁石なし（純機械式・ベアリング機構）',
    ko: '무자석 설계 (순수 기계식 / 베어링 구동)', id: 'Non-Magnetik (Mekanis Murni / Putaran Bearing)',
    ar: 'خالٍ من المغناطيس (حركة ميكانيكية خالصة بالمحامل)'
  }],
  [/Precision CNC\/Die-Cast Enclosure with Factory-Locked Hardware/gi, {
    de: 'Präzisions-CNC-/Druckgussgehäuse mit werkseitig verriegelter Mechanik', fr: 'Boîtier CNC / Moulé sous Pression avec Mécanisme Verrouillé en Usine',
    nl: 'Precisie CNC/Spuitgietbehuizing met Fabrieksvergrendelde Hardware', es: 'Carcasa de Precisión CNC/Fundición con Herrajes Bloqueados en Fábrica',
    it: 'Scocca di Precisione CNC/Pressofusione con Componenti Bloccati in Fabbrica', pt: 'Caixa de Precisão CNC/Fundição com Componentes Bloqueados de Fábrica',
    sv: 'Precisions-CNC/pressgjutet hölje med fabrikslåst mekanik', da: 'Præcisions-CNC/trykstøbt kabinet med fabrikslåst mekanik',
    no: 'Presisjons-CNC/pressstøpt kabinett med fabrikklåst mekanikk', fi: 'Tarkkuus-CNC/painevalurunko tehdaskiinnitetyillä osilla',
    pl: 'Precyzyjna Obudowa CNC/Odlewana z Fabrycznie Zablokowanym Mechanizmem', cs: 'Přesné CNC/tlakově lité pouzdro s továrně zajištěnou mechanikou',
    ru: 'Прецизионный корпус ЧПУ/литья с заводской фиксацией узлов', ja: '高精度CNC/ダイカスト筐体（工場ロック済み内部機構）',
    ko: '정밀 CNC/다이캐스팅 하우징 (공장 잠금 하드웨어 내장)', id: 'Enklosur Presisi CNC/Die-Cast dengan Pengunci Internal Pabrik',
    ar: 'هيكل دقيق مصنع بـ CNC/الصب مع تثبيت ميكانيكي محكم'
  }],
  [/Precision Ball Bearing/gi, {
    de: 'Präzisions-Kugellager', fr: 'Roulement à Billes de Précision', nl: 'Precisiekogellager', es: 'Rodamiento de Bolas de Precisión',
    it: 'Cuscinetto a Sfere di Precisione', pt: 'Rolamento de Esferas de Precisão', sv: 'Precisionskullager', da: 'Præcisionskugleleje',
    no: 'Presisjonskulelager', fi: 'Tarkkuuskuulalaakeri', pl: 'Precyzyjne Łożysko Kulkowe', cs: 'Přesné kuličkové ložisko',
    ru: 'Прецизионный шарикоподшипник', ja: '高精度ボールベアリング', ko: '정밀 볼 베어링', id: 'Bantalan Bola Presisi', ar: 'محمل كروي دقيق'
  }],
  [/Flat Thrust Bearing/gi, {
    de: 'Flach-Axiallager', fr: 'Butée à Billes Plate', nl: 'Vlak Druklager', es: 'Rodamiento Axial Plano',
    it: 'Cuscinetto Reggispinta Piatto', pt: 'Rolamento Axial Plano', sv: 'Plant axialkullager', da: 'Fladt aksialleje',
    no: 'Flatt aksiallager', fi: 'Litteä painelaakeri', pl: 'Płaskie Łożysko Wzdłużne', cs: 'Ploché axiální ložisko',
    ru: 'Плоский упорный подшипник', ja: '平面スラストベアリング', ko: '평면 스러스트 베어링', id: 'Thrust Bearing Datar', ar: 'محمل دفعي مسطح'
  }],
  [/Silicone Damping O-Ring/gi, {
    de: 'Silikon-Dämpfungs-O-Ring', fr: 'Joint Torique Amortisseur en Silicone', nl: 'Silicone Dempings-O-ring', es: 'Junta Tórica Amortiguadora de Silicona',
    it: 'O-Ring Smorzante in Silicone', pt: 'O-Ring Amortecedor de Silicone', sv: 'Silikondämpande O-ring', da: 'Silikonedæmpende O-ring',
    no: 'Silikondempende O-ring', fi: 'Silikoninen vaimennus-O-rengas', pl: 'Silikonowy O-Ring Tłumiący', cs: 'Silikonový tlumicí O-kroužek',
    ru: 'Силиконовое демпфирующее кольцо', ja: 'シリコン消音Oリング', ko: '실리콘 댐핑 O링', id: 'O-Ring Peredam Silikon', ar: 'حلقة سيليكون ممتصة للصدمات'
  }],
  [/PTFE Wear Pad/gi, {
    de: 'PTFE-Gleitpad (Teflon)', fr: 'Patin de Glisse PTFE (Téflon)', nl: 'PTFE-slijtplaat (Teflon)', es: 'Almohadilla Deslizante de PTFE',
    it: 'Pattino di Scorrimento in PTFE', pt: 'Placa Deslizante de PTFE', sv: 'PTFE-glidplatta', da: 'PTFE-glideplade',
    no: 'PTFE-glideplate', fi: 'PTFE-liukupala', pl: 'Ślizgacz PTFE (Teflon)', cs: 'Kluzná podložka PTFE',
    ru: 'Тефлоновая пластина скольжения (PTFE)', ja: 'PTFE（テフロン）摺動パッド', ko: 'PTFE(테플론) 슬라이딩 패드', id: 'Bantalan Geser PTFE', ar: 'وسادة انزلاق تفلون PTFE'
  }],
  [/Precision Coil Spring/gi, {
    de: 'Präzisions-Schraubenfeder', fr: 'Ressort Hélicoïdal de Précision', nl: 'Precisiespiraalveer', es: 'Resorte Helicoidal de Precisión',
    it: 'Molla Elicoidale di Precisione', pt: 'Mola Helicoidal de Precisão', sv: 'Precisionsspiralfjäder', da: 'Præcisionsspiralfjeder',
    no: 'Presisjonsspiralfjær', fi: 'Tarkkuuskierrejousi', pl: 'Precyzyjna Sprężyna Śrubowa', cs: 'Přesná vinutá pružina',
    ru: 'Прецизионная цилиндрическая пружина', ja: '高精度コイルスプリング', ko: '정밀 코일 스프링', id: 'Pegas Koil Presisi', ar: 'نابض حلزوني دقيق'
  }],
  [/Stainless Steel Detent Ball/gi, {
    de: 'Edelstahl-Rastkugel', fr: 'Bille d’Indexation en Acier Inox', nl: 'RVS-klikballetje', es: 'Esfera de Retención de Acero Inoxidable',
    it: 'Sfera di Scatto in Acciaio Inox', pt: 'Esfera de Retenção em Aço Inox', sv: 'Rostfri spärrkula', da: 'Rustfri låsekugle',
    no: 'Rustfri låsekule', fi: 'Ruostumaton lukituskuula', pl: 'KulkaZatrzaskowa ze Stali Nierdzewnej', cs: 'Nerezová aretační kulička',
    ru: 'Стопорный шарик из нержавеющей стали', ja: 'ステンレス製ディテントボール（鋼球）', ko: '스테인리스 스틸 디텐트 볼', id: 'Bola Detent Baja Tahan Karat', ar: 'كرة تثبيت من الفولاذ المقاوم للصدأ'
  }],
  [/Steel Ball/gi, {
    de: 'Stahlkugel', fr: 'Bille d’Acier', nl: 'Stalen Kogel', es: 'Bola de Acero',
    it: 'Sfera d’Acciaio', pt: 'Esfera de Aço', sv: 'Stålkula', da: 'Stålkugle',
    no: 'Stålkule', fi: 'Teräskuula', pl: 'Kulka Stalowa', cs: 'Ocelová kulička',
    ru: 'Стальной шарик', ja: 'スチールボール（鋼球）', ko: '스틸 볼', id: 'Bola Baja', ar: 'كرة فولاذية'
  }],
  [/Ring Magnet/gi, {
    de: 'Ringmagnet', fr: 'Aimant Annulaire', nl: 'Ringmagneet', es: 'Imán Anular',
    it: 'Magnete ad Anello', pt: 'Íman Anelar', sv: 'Ringmagnet', da: 'Ringmagnet',
    no: 'Ringmagnet', fi: 'Rengasmagneetti', pl: 'Magnes Pierścieniowy', cs: 'Prstencový magnet',
    ru: 'Кольцевой магнит', ja: 'リング磁石', ko: '링 자석', id: 'Magnet Cincin', ar: 'مغناطيس حلقي'
  }],
  [/Magnets/gi, {
    de: 'Magnete', fr: 'Aimants', nl: 'Magneten', es: 'Imanes',
    it: 'Magneti', pt: 'Ímanes', sv: 'Magneter', da: 'Magneter',
    no: 'Magneter', fi: 'Magneetit', pl: 'Magnesy', cs: 'Magnety',
    ru: 'Магниты', ja: 'ネオジム磁石', ko: '자석', id: 'Magnet', ar: 'مغناطيسات'
  }]
];

export function localizeHardwareOrMagnets(raw: string, lang: SupportedLanguage): string {
  if (lang === 'en' || !raw) return raw;
  let out = raw;
  for (const [re, map] of HARDWARE_TERMS) {
    if (map[lang]) {
      out = out.replace(re, map[lang]!);
    }
  }
  const pcsUnit: Partial<Record<SupportedLanguage, string>> = {
    de: 'Stk.', fr: 'pcs', nl: 'st.', es: 'uds.', it: 'pz.', pt: 'un.',
    sv: 'st', da: 'stk.', no: 'stk.', fi: 'kpl', pl: 'szt.', cs: 'ks',
    ru: 'шт.', ja: '個', ko: '개', id: 'pcs', ar: 'قطعة'
  };
  if (pcsUnit[lang]) {
    out = out.replace(/\b(\d+)\s*pcs?\b/gi, `$1 ${pcsUnit[lang]}`);
  }
  return out;
}

const TITLE_TERMS: Array<[RegExp, Partial<Record<SupportedLanguage, string>>]> = [
  [/Magnetic Slider/gi, {
    de: 'Magnet-Slider', fr: 'Slider Magnétique', nl: 'Magnetische Slider', es: 'Slider Magnético',
    it: 'Slider Magnetico', pt: 'Slider Magnético', sv: 'Magnetisk Slider', da: 'Magnetisk Slider',
    no: 'Magnetisk Slider', fi: 'Magneettinen Slider', pl: 'Magnetyczny Slider', cs: 'Magnetický Slider',
    ru: 'Магнитный слайдер', ja: 'マグネットスライダー', ko: '마그네틱 슬라이더', id: 'Slider Magnetik', ar: 'سلايدر مغناطيسي'
  }],
  [/Haptic Slider/gi, {
    de: 'Haptik-Slider', fr: 'Slider Haptique', nl: 'Haptische Slider', es: 'Slider Háptico',
    it: 'Slider Aptico', pt: 'Slider Háptico', sv: 'Haptisk Slider', da: 'Haptisk Slider',
    no: 'Haptisk Slider', fi: 'Haptinen Slider', pl: 'Slider Haptyczny', cs: 'Haptický Slider',
    ru: 'Тактильный слайдер', ja: 'ハプティックスライダー', ko: '햅틱 슬라이더', id: 'Slider Haptik', ar: 'سلايدر لمسي'
  }],
  [/Push Slider/gi, {
    de: 'Push-Slider', fr: 'Slider Poussoir', nl: 'Push-Slider', es: 'Slider de Empuje',
    it: 'Push Slider', pt: 'Push Slider', sv: 'Push-Slider', da: 'Push-Slider',
    no: 'Push-Slider', fi: 'Työntöslider', pl: 'Slider Pchany', cs: 'Posuvný Slider',
    ru: 'Нажимной слайдер', ja: 'プッシュスライダー', ko: '푸시 슬라이더', id: 'Slider Dorong', ar: 'سلايدر دفع'
  }],
  [/Fidget Spinner/gi, {
    de: 'Fidget-Spinner', fr: 'Hand Spinner Métal', nl: 'Fidget Spinner', es: 'Fidget Spinner Metálico',
    it: 'Fidget Spinner in Metallo', pt: 'Fidget Spinner Metálico', sv: 'Fidget Spinner', da: 'Fidget Spinner',
    no: 'Fidget Spinner', fi: 'Fidget Spinner', pl: 'Fidget Spinner', cs: 'Fidget Spinner',
    ru: 'Фиджет-спиннер', ja: 'ハンドスピナー', ko: '피젯 스피너', id: 'Fidget Spinner Logam', ar: 'سبينر معدني'
  }],
  [/Desktop Gyro/gi, {
    de: 'Tischkreisel-Gyroskop', fr: 'Toupie Gyroscopique de Bureau', nl: 'Bureautol Gyro', es: 'Giroscopio de Escritorio',
    it: 'Trottola Giroscopica da Scrivania', pt: 'Giroscópio de Secretária', sv: 'Skrivbordsgyro', da: 'Skrivebordsgyro',
    no: 'Skrivebordsgyro', fi: 'Pöytähyrrä Gyro', pl: 'Bączek Żyroskopowy na Biurko', cs: 'Stolní gyroskopický spinner',
    ru: 'Настольный гироскоп-волчок', ja: 'デスクトップ・ジャイロコマ', ko: '데스크탑 자이로 팽이', id: 'Giroskop Meja Putar', ar: 'جيروسكوب مكتبي دوار'
  }],
  [/Haptic Fidget Coin|Haptic Coin/gi, {
    de: 'Haptik-Münze', fr: 'Pièce Haptique Magnétique', nl: 'Haptische Munt', es: 'Moneda Háptica Magnética',
    it: 'Moneta Aptica Magnetica', pt: 'Moeda Háptica Magnética', sv: 'Haptiskt Mynt', da: 'Haptisk Mønt',
    no: 'Haptisk Mynt', fi: 'Haptinen Kolikko', pl: 'Moneta Haptyczna', cs: 'Haptická mince',
    ru: 'Тактильная фиджет-монета', ja: 'ハプティックコイン', ko: '햅틱 피젯 코인', id: 'Koin Haptik Magnetik', ar: 'عملة لمسية مغناطيسية'
  }],
  [/Spinner Ring|Magnet Ring/gi, {
    de: 'Drehring', fr: 'Bague Rotative Magnétique', nl: 'Draairing', es: 'Anillo Giratorio Magnético',
    it: 'Anello Rotante Magnetico', pt: 'Anel Giratório Magnético', sv: 'Roterande Ring', da: 'Roterende Ring',
    no: 'Roterende Ring', fi: 'Pyörivä Sormus', pl: 'Pierścień Obrotowy', cs: 'Otočný prsten',
    ru: 'Вращающееся кольцо-спиннер', ja: 'スピナーリング（回転指輪）', ko: '마그네틱 스피너 링', id: 'Cincin Putar Magnetik', ar: 'خاتم دوار مغناطيسي'
  }],
  [/Tuning Fork/gi, {
    de: 'Stimmgabel-Resonanz', fr: 'Diapason Acoustique', nl: 'Stemvork-Resonantie', es: 'Diapasón Acústico',
    it: 'Diapason Acustico', pt: 'Diapasão Acústico', sv: 'Stämgaffel-resonans', da: 'Stemmegaffel-resonans',
    no: 'Stemmegaffel-resonans', fi: 'Äänirauta-akustiikka', pl: 'Kamerton Akustyczny', cs: 'Akustická ladička',
    ru: 'Акустический камертон', ja: '音叉（チューニングフォーク）共鳴', ko: '튜닝포크(음차) 공명', id: 'Garpu Tala Akustik', ar: 'الشوكة الرنانة الصوتية'
  }],
  [/EDC Hand Piece|Hand-Piece Gourd|EDC Gourd/gi, {
    de: 'EDC-Handschmeichler-Kalebasse', fr: 'Gourde EDC de Poche', nl: 'EDC Handstuk Kalebas', es: 'Calabaza EDC de Mano',
    it: 'Zucca EDC Tascabile', pt: 'Cabaça EDC de Mão', sv: 'EDC-handpjäs kalebass', da: 'EDC-håndstykke kalebas',
    no: 'EDC-håndstykke kalebass', fi: 'EDC-kädenpyörityskurpitsa', pl: 'Tykwowy Gadżet EDC do Dłoni', cs: 'EDC tykev do dlaně',
    ru: 'Тактильная тыква-хулу EDC', ja: 'EDCハンドピース（ひょうたん型）', ko: 'EDC 핸드피스 조롱박', id: 'Labu Genggam EDC', ar: 'قطعة يدوية EDC بشكل القرع'
  }],
  [/Knuckle Roller/gi, {
    de: 'Knuckle-Roller', fr: 'Rouleau d’Articulation EDC', nl: 'Knokkelroller', es: 'Rodillo de Nudillos EDC',
    it: 'Rullo da Dita EDC', pt: 'Rolo de Dedos EDC', sv: 'Knogrulle EDC', da: 'Knorulle EDC',
    no: 'Knorulle EDC', fi: 'Sormirulla EDC', pl: 'Roller Międzywęzłowy EDC', cs: 'Prstový váleček EDC',
    ru: 'Накл-роллер для пальцев', ja: 'ナックルローラー', ko: '너클 롤러', id: 'Knuckle Roller EDC', ar: 'أسطوانة أصابع EDC'
  }],
  [/Triple-Layer/gi, {
    de: 'Dreischichtiger', fr: 'Triple Couche', nl: 'Drielaagse', es: 'Triple Capa',
    it: 'Triplo Strato', pt: 'Tripla Camada', sv: 'Trelagers', da: 'Trelags',
    no: 'Trelags', fi: 'Kolmikerroksinen', pl: 'Trójwarstwowy', cs: 'Třívrstvý',
    ru: 'Трехслойный', ja: '3層構造', ko: '3중 레이어', id: 'Tiga Lapis', ar: 'ثلاثي الطبقات'
  }]
];

export function localizeTitle(rawTitle: string, lang: SupportedLanguage): string {
  if (lang === 'en' || !rawTitle) return rawTitle;
  let out = rawTitle;
  for (const [re, map] of TITLE_TERMS) {
    if (map[lang]) {
      out = out.replace(re, map[lang]!);
    }
  }
  out = out.replace(/(\d+)-Magnet\b/gi, (_m, n) => {
    const suffix: Partial<Record<SupportedLanguage, string>> = {
      de: `${n}-Magnet`, fr: `${n} Aimants`, nl: `${n}-Magneet`, es: `${n} Imanes`,
      it: `${n} Magneti`, pt: `${n} Ímanes`, sv: `${n}-Magnet`, da: `${n}-Magnet`,
      no: `${n}-Magnet`, fi: `${n}-magneettinen`, pl: `${n}-Magnesowy`, cs: `${n}-magnetový`,
      ru: `${n}-магнитный`, ja: `${n}磁石`, ko: `${n}자석`, id: `${n}-Magnet`, ar: `${n} مغناطيس`
    };
    return suffix[lang] || `${n}-Magnet`;
  });
  return out;
}

const COLOR_TERMS: Array<[RegExp, Partial<Record<SupportedLanguage, string>>]> = [
  [/Raw Machined Metal \/ Custom PVD & Anodized Finishes/gi, {
    de: 'Blankes Metall (CNC/Guss) / Individuelle PVD- & Eloxal-Beschichtungen',
    fr: 'Métal Brut Usiné / Finitions PVD & Anodisées sur Mesure',
    nl: 'Blank Bewerkt Metaal / Aangepaste PVD- & Geanodiseerde Afwerkingen',
    es: 'Metal Mecanizado en Bruto / Acabados PVD y Anodizados Personalizados',
    it: 'Metallo Lavorato Grezzo / Finiture PVD e Anodizzate Personalizzate',
    pt: 'Metal Maquinado Bruto / Acabamentos PVD e Anodizados Personalizados',
    sv: 'Råbearbetad metall / Anpassad PVD- & anodiserad finish',
    da: 'Råbearbejdet metal / Tilpasset PVD- & anodiseret finish',
    no: 'Råbearbeidet metall / Tilpasset PVD- & anodisert finish',
    fi: 'Koneistettu raakametalli / Räätälöidyt PVD- & anodisoidut pinnat',
    pl: 'Surowy Metal Obrabiany / Powłoki PVD i Anodowane na Zamówienie',
    cs: 'Surový obráběný kov / Zakázkové PVD a eloxované povrchy',
    ru: 'Необработанный металл / Индивидуальное PVD и анодирование',
    ja: '金属素地仕上げ / カスタムPVD・アルマイト処理対応',
    ko: '금속 원본 마감 / 맞춤 PVD 코팅 및 아노다이징 지원',
    id: 'Logam Mesin Mentah / Finishing PVD & Anodized Kustom',
    ar: 'معدن خام مشغل / طلاءات PVD وأكسدة مخصصة'
  }],
  [/Matte Black/gi, {
    de: 'Mattschwarz', fr: 'Noir Mat', nl: 'Matzwart', es: 'Negro Mate', it: 'Nero Opaco', pt: 'Preto Mate',
    sv: 'Mattsvart', da: 'Matsort', no: 'Matt svart', fi: 'Mattamusta', pl: 'Czarny Mat', cs: 'Matná černá',
    ru: 'Матовый черный', ja: 'マットブラック', ko: '매트 블랙', id: 'Hitam Doff (Matte)', ar: 'أسود غير لامع'
  }],
  [/Metallic Silver/gi, {
    de: 'Metallisch Silber', fr: 'Argent Métallisé', nl: 'Metallic Zilver', es: 'Plata Metálico', it: 'Argento Metallizzato', pt: 'Prata Metálico',
    sv: 'Metalliskt silver', da: 'Metallisk sølv', no: 'Metallisk sølv', fi: 'Metallinhopea', pl: 'Srebrny Metalik', cs: 'Metalická stříbrná',
    ru: 'Металлический серебристый', ja: 'メタリックシルバー', ko: '메탈릭 실버', id: 'Perak Metalik', ar: 'فضي معدني'
  }],
  [/Antique Bronze/gi, {
    de: 'Antik-Bronze', fr: 'Bronze Antique', nl: 'Antiek Brons', es: 'Bronce Antiguo', it: 'Bronzo Antico', pt: 'Bronze Antigo',
    sv: 'Antikbrons', da: 'Antik bronze', no: 'Antikk bronse', fi: 'Antiikkipronssi', pl: 'Antyczny Brąz', cs: 'Antický bronz',
    ru: 'Античная бронза', ja: 'アンティークブロンズ（青銅）', ko: '앤틱 브론즈', id: 'Perunggu Antik', ar: 'برونزي عتيق'
  }],
  [/Antique Copper/gi, {
    de: 'Antik-Kupfer', fr: 'Cuivre Antique', nl: 'Antiek Koper', es: 'Cobre Antiguo', it: 'Rame Antico', pt: 'Cobre Antigo',
    sv: 'Antikkoppar', da: 'Antik kobber', no: 'Antikk kobber', fi: 'Antiikkikupari', pl: 'Antyczna Miedź', cs: 'Antická měď',
    ru: 'Античная медь', ja: 'アンティークカッパー（赤銅）', ko: '앤틱 코퍼', id: 'Tembaga Antik', ar: 'نحاسي عتيق'
  }],
  [/Antique Silver/gi, {
    de: 'Antik-Silber', fr: 'Argent Antique', nl: 'Antiek Zilver', es: 'Plata Antigua', it: 'Argento Antico', pt: 'Prata Antiga',
    sv: 'Antiksilver', da: 'Antik sølv', no: 'Antikk sølv', fi: 'Antiikkihopea', pl: 'Antyczne Srebro', cs: 'Antická stříbrná',
    ru: 'Античное серебро', ja: 'アンティークシルバー', ko: '앤틱 실버', id: 'Perak Antik', ar: 'فضي عتيق'
  }],
  [/Tactical Gunmetal/gi, {
    de: 'Taktisches Gunmetal-Grau', fr: 'Gris Canon de Fusil (Gunmetal)', nl: 'Tactisch Gunmetal', es: 'Gris Gunmetal Táctico', it: 'Canna di Fucile (Gunmetal)', pt: 'Cinza Gunmetal Tático',
    sv: 'Taktisk gunmetal', da: 'Taktisk gunmetal', no: 'Taktisk gunmetal', fi: 'Taktinen asemetalli (Gunmetal)', pl: 'Taktyczny Gunmetal', cs: 'Taktická dělovina (Gunmetal)',
    ru: 'Оружейный серый (Gunmetal)', ja: 'タクティカル・ガンメタル', ko: '택티컬 건메탈', id: 'Gunmetal Taktis', ar: 'رمادي معدني تكتيكي (Gunmetal)'
  }],
  [/Satin Pearl Chrome/gi, {
    de: 'Satin-Perlchrom', fr: 'Chrome Perlé Satiné', nl: 'Satijn Parelchroom', es: 'Cromo Perlado Satinado', it: 'Cromo Perlato Satinato', pt: 'Cromo Pérola Acetinado',
    sv: 'Satin pärlkrom', da: 'Satin perlekrom', no: 'Satin perlekrom', fi: 'Satiinihelmikromi', pl: 'Satynowy Chrom Perłowy', cs: 'Saténový perleťový chrom',
    ru: 'Сатиновый жемчужный хром', ja: 'サテンパールクローム', ko: '새틴 펄 크롬', id: 'Krom Mutiara Satin', ar: 'كروم لؤلؤي ساتان'
  }],
  [/Rainbow PVD Spectrum/gi, {
    de: 'Regenbogen-PVD-Spektrum', fr: 'Spectre PVD Arc-en-Ciel', nl: 'Regenboog PVD-spectrum', es: 'Espectro PVD Arcoíris', it: 'Spettro PVD Arcobaleno', pt: 'Espectro PVD Arco-Íris',
    sv: 'Regnbågs-PVD-spektrum', da: 'Regnbue PVD-spektrum', no: 'Regnbue PVD-spektrum', fi: 'Sateenkaari-PVD-pinnoite', pl: 'Tęczowe Spektrum PVD', cs: 'Duhové PVD spektrum',
    ru: 'Радужное покрытие PVD', ja: 'レインボーPVDスペクトラム', ko: '레인보우 PVD 스펙트럼', id: 'Spektrum PVD Pelangi', ar: 'طلاء PVD بألوان الطيف'
  }],
  [/Anodized Gold/gi, {
    de: 'Eloxiertes Gold', fr: 'Or Anodisé', nl: 'Geanodiseerd Goud', es: 'Oro Anodizado', it: 'Oro Anodizzato', pt: 'Ouro Anodizado',
    sv: 'Anodiserat guld', da: 'Anodiseret guld', no: 'Anodisert gull', fi: 'Anodisoitu kulta', pl: 'Anodowane Złoto', cs: 'Eloxovaná zlatá',
    ru: 'Анодированное золото', ja: 'アルマイトゴールド', ko: '아노다이징 골드', id: 'Emas Anodized', ar: 'ذهبي مؤكسد'
  }]
];

export function localizeColors(raw: string, lang: SupportedLanguage): string {
  if (lang === 'en' || !raw) return raw;
  let out = raw;
  for (const [re, map] of COLOR_TERMS) {
    if (map[lang]) {
      out = out.replace(re, map[lang]!);
    }
  }
  return out;
}

const OVERVIEW_BUILDER: Record<SupportedLanguage, (sku: string, title: string, mat: string, size: string, weight: string, mag: string, acc: string, rowId: number) => string> = {
  en: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} is an industrial-grade wholesale metal EDC fidget engineered from ${mat} (${size}, net weight ${weight}). Equipped with ${mag} and ${acc}, this model utilizes our mature ready-to-use production mold #${rowId} ($0 Tooling Cost) across our integrated China precision metalworking & CNC supply chain network. Available for immediate blank wholesale (MOQ 50 pcs) or custom corporate surface branding via Fiber Laser Engraving, Silk-Screen Printing, and Deep Laser Color Fill (MOQ 100–300 pcs).`,
  de: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} ist ein präzisionsgefertigtes Metall-EDC-Fidget für den Großhandel aus ${mat} (Maße ${size}, Nettogewicht ${weight}). Ausgestattet mit ${mag} sowie ${acc}, nutzt dieses Modell unsere sofort einsatzbereite Serienform #${rowId} ($0 Werkzeugkosten) in unserem integrierten CNC- & Druckguss-Fertigungsnetzwerk. Sofort lieferbar als Blanko-Lagerware (ab 50 Stk. MOQ) oder mit individueller Logo-Veredelung per 50W-Faserlasergravur, Siebdruck ($35/Farbe + $0,10/Farbe/Stk.) oder tiefer Lasergravur mit Farbauslegung (ab 100–300 Stk. MOQ).`,
  fr: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} est un fidget EDC en métal de qualité industrielle pour la vente en gros, fabriqué en ${mat} (dimensions ${size}, poids net ${weight}). Équipé de ${mag} et de ${acc}, ce modèle utilise notre moule de série prêt à produire #${rowId} (0 $ de frais de moule). Disponible immédiatement en stock neutre (MOQ 50 pcs) ou avec personnalisation de logo par gravure laser fibre 50W, sérigraphie couleur (35 $/couleur + 0,10 $/couleur/pc) ou gravure laser profonde avec remplissage émail (MOQ 100–300 pcs).`,
  nl: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} is een hoogwaardig metalen EDC-fidget voor de groothandel, vervaardigd uit ${mat} (afmetingen ${size}, nettogewicht ${weight}). Uitgerust met ${mag} en ${acc}, maakt dit model gebruik van onze productierijpe matrijs #${rowId} ($0 matrijskosten). Direct leverbaar als blanco voorraad (MOQ 50 st.) of met gepersonaliseerd bedrijfslogo via 50W fiberlasergravure, zeefdruk ($35/kleur + $0,10/kleur/st.) of diepe lasergravure met kleurvulling (MOQ 100–300 st.).`,
  es: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} es un fidget EDC metálico de grado industrial al por mayor fabricado en ${mat} (dimensiones ${size}, peso neto ${weight}). Equipado con ${mag} y ${acc}, este modelo utiliza nuestro molde de producción listo #${rowId} ($0 costo de molde). Disponible para envío inmediato en blanco (MOQ 50 uds.) o con personalización de marca mediante grabado láser de fibra de 50W, serigrafía ($35/color + $0.10/color/ud.) o grabado láser profundo con relleno de color (MOQ 100–300 uds.).`,
  it: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} è un fidget EDC in metallo di grado industriale all'ingrosso realizzato in ${mat} (dimensioni ${size}, peso netto ${weight}). Dotato di ${mag} e ${acc}, questo modello utilizza il nostro stampo di serie pronto #${rowId} ($0 costi di stampo). Disponibile per fornitura immediata neutra (MOQ 50 pz.) o con personalizzazione del logo tramite incisione laser a fibra 50W, serigrafia ($35/colore + $0,10/colore/pz.) o incisione laser profonda con smalto colorato (MOQ 100–300 pz.).`,
  pt: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} é um fidget EDC metálico de grau industrial por atacado fabricado em ${mat} (dimensões ${size}, peso líquido ${weight}). Equipado com ${mag} e ${acc}, este modelo utiliza o nosso molde de produção pronto #${rowId} ($0 custo de molde). Disponível para envio imediato sem marca (MOQ 50 un.) ou com personalização de logótipo via gravação a laser de fibra 50W, serigrafia ($35/cor + $0,10/cor/un.) ou gravação a laser profunda com preenchimento de cor (MOQ 100–300 un.).`,
  sv: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} är en industriell EDC-metallfidget för grossister tillverkad av ${mat} (mått ${size}, nettovikt ${weight}). Utrustad med ${mag} och ${acc} använder denna modell vår färdiga produktionsform #${rowId} ($0 verktygskostnad). Tillgänglig för omedelbar leverans utan tryck (MOQ 50 st) eller med egen logotyp via 50W fiberlasergravyr, screentryck ($35/färg + $0,10/färg/st) eller djup lasergravyr med färgfyllning (MOQ 100–300 st).`,
  da: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} er en industriel metal-EDC-fidget til engros fremstillet af ${mat} (mål ${size}, nettovægt ${weight}). Udstyret med ${mag} og ${acc} benytter denne model vores produktionsklare støbeform #${rowId} ($0 værktøjsgebyr). Kan leveres straks uden logo (MOQ 50 stk.) eller med brugerdefineret logo via 50W fiberlasergravering, serigrafi ($35/farve + $0,10/farve/stk.) eller dyb lasergravering med farvefyld (MOQ 100–300 stk.).`,
  no: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} er en industriell metall-EDC-fidget for engros produsert i ${mat} (mål ${size}, nettovekt ${weight}). Utstyrt med ${mag} og ${acc}, bruker denne modellen vår produksjonsklare støpeform #${rowId} ($0 verktøygebyr). Tilgjengelig for umiddelbar levering uten logo (MOQ 50 stk.) eller med eget firmalogo via 50W fiberlasergravering, silketrykk ($35/farge + $0,10/farge/stk.) eller dyp lasergravering med fargefyll (MOQ 100–300 stk.).`,
  fi: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} on teollisuusluokan metallinen EDC-fidget tukkumyyntiin, valmistettu materiaalista ${mat} (mitat ${size}, nettopaino ${weight}). Varustettu kokoonpanolla ${mag} ja ${acc}, tämä malli hyödyntää valmista sarjatuotantomuottiamme #${rowId} ($0 muottikulu). Saatavilla heti ilman merkkausta (MOQ 50 kpl) tai omalla logolla 50W kuitulaserkaiverruksella, silkkipainatuksella ($35/väri + $0,10/väri/kpl) tai syvälaserkaiverruksella ja väritäytöllä (MOQ 100–300 kpl).`,
  pl: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} to przemysłowej klasy metalowy gadżet EDC w sprzedaży hurtowej, wykonany z materiału ${mat} (wymiary ${size}, masa netto ${weight}). Wyposażony w ${mag} oraz ${acc}, model ten wykorzystuje naszą gotową formę produkcyjną #${rowId} (0 $ kosztów formy). Dostępny od ręki w wersji czystej (MOQ 50 szt.) lub z personalizacją logo metodą grawerowania laserem światłowodowym 50W, sitodruku (35 $/kolor + 0,10 $/kolor/szt.) lub głębokiego grawerowania laserowego z wypełnieniem kolorem (MOQ 100–300 szt.).`,
  cs: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} je průmyslový kovový EDC fidget pro velkoobchod vyrobený z materiálu ${mat} (rozměry ${size}, čistá hmotnost ${weight}). Tento model vybavený ${mag} a ${acc} využívá naši hotovou sériovou formu #${rowId} ($0 poplatek za formu). K dispozici ihned bez potisku (MOQ 50 ks) nebo s vlastním logem pomocí 50W vláknového laseru, sítotisku ($35/barva + $0,10/barva/ks) či hlubokého laserového gravírování s barevnou výplní (MOQ 100–300 ks).`,
  ru: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} — металлический EDC-фиджет промышленного класса оптом, изготовленный из материала ${mat} (габариты ${size}, чистый вес ${weight}). Оснащенный конфигурацией (${mag}; ${acc}), этот артикул производится на базе нашей готовой серийной пресс-формы #${rowId} ($0 за оснастку). Доступен со склада без логотипа (MOQ 50 шт.) или с нанесением фирменного логотипа методом оптоволоконной лазерной гравировки 50W, шелкографии ($35/цвет + $0.10/цвет/шт.) или глубокой лазерной гравировки с заливкой эмалью (MOQ 100–300 шт.).`,
  ja: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title}は、${mat}（外寸 ${size}、単体重量 ${weight}）を採用した卸売・OEM向け高精度メタルEDCフィジェットです。内部に${mag}および${acc}を搭載し、当社の既存量産金型 #${rowId}（金型費用 $0）を活用して製造されます。ロゴなし無地在庫の即時出荷（最小ロット 50個〜）はもちろん、50Wファイバーレーザー刻印、シルクスクリーン多色印刷（版代 $35/色＋単価 +$0.10/色）、深彫りレーザー＋色入れ加工（最小ロット 100〜300個〜）によるOEMカスタムロゴ名入れに完全対応しています。`,
  ko: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} 모델은 ${mat} 소재(치수 ${size}, 순중량 ${weight})로 정밀 설계된 도매 및 OEM 전용 금속 EDC 피젯 토이입니다. 내부에는 ${mag} 및 ${acc} 구조가 적용되어 있으며, 당사의 검증된 기성 금형 #${rowId}(금형비 $0)를 통해 생산됩니다. 무지 기본 재고 소량 발주(MOQ 50개)부터 50W 파이버 레이저 각인, 실크스크린 컬러 인쇄(판비 색상당 $35 + 개당 색상당 +$0.10), 심층 레이저 각인 후 컬러 필링(MOQ 100~300개)까지 맞춤형 브랜드 로고 제작을 지원합니다.`,
  id: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `${sku} ${title} adalah mainan fidget EDC logam kelas industri grosir yang dirancang dari ${mat} (dimensi ${size}, berat bersih ${weight}). Dilengkapi dengan ${mag} dan ${acc}, model ini menggunakan cetakan produksi siap pakai #${rowId} ($0 biaya cetakan/mold). Tersedia untuk pesanan grosir polos (MOQ 50 pcs) maupun kustomisasi logo merek melalui Grafir Laser Fiber 50W, Sablon Silk-Screen ($35/warna + $0,10/warna/pc), atau Grafir Laser Dalam + Isi Warna (MOQ 100–300 pcs).`,
  ar: (sku, title, mat, size, weight, mag, acc, rowId) =>
    `إن ${sku} ${title} هو فيدجت معدني EDC احترافي للبيع بالجملة مصنع من ${mat} (الأبعاد ${size}، الوزن الصافي ${weight}). تم تجهيز هذا الموديل بـ ${mag} مع ${acc}، ويعتمد على قالب الإنتاج الجاهز رقم #${rowId} (0 دولار رسوم القالب). متاح للطلب الفوري بدون شعار (الحد الأدنى 50 قطعة) أو مع تخصيص شعار علامتك التجارية عبر الحفر بالليزر الليفي 50W، أو الطباعة الحريرية متعددة الألوان (35 دولاراً/لون + 0.10 دولار/لون/قطعة)، أو الحفر العميق بالليزر مع تعبئة الألوان (الحد الأدنى 100–300 قطعة).`
};

const BRANDING_SPEC_VALUE: Record<SupportedLanguage, (logoReady: boolean) => string> = {
  en: (lr) => lr
    ? 'Fiber Laser Engraving (+$0.15–$0.30/pc) / Silk-Screen Color Print ($35/color screen + $0.10/color/pc) / Deep Laser + Color Fill ($0.35–$0.60/pc, MOQ 200–300)'
    : 'Track-Plate Laser Mark or Custom Logo on Black EVA Zipper Case / Window Tin Box',
  de: (lr) => lr
    ? '50W-Faserlasergravur (+$0,15–$0,30/Stk.) / Siebdruck ($35/Farbe Sieb + $0,10/Farbe/Stk.) / Tiefe Lasergravur + Farbauslegung (+$0,35–$0,60/Stk., MOQ 200–300)'
    : 'Innenbahn-Lasergravur oder Logo auf schwarzem EVA-Reißverschlussetui / Sichtfenster-Blechdose',
  fr: (lr) => lr
    ? 'Gravure Laser Fibre 50W (+0,15–0,30 $/pc) / Sérigraphie Couleur (35 $/couleur + 0,10 $/couleur/pc) / Gravure Laser Profonde + Émail (+0,35–0,60 $/pc, MOQ 200–300)'
    : 'Marquage Laser sur Piste Interne ou Logo sur Étui Zippé EVA Noir / Boîte Métallique à Fenêtre',
  nl: (lr) => lr
    ? '50W Fiberlasergravure (+$0,15–$0,30/st.) / Zeefdruk ($35/kleur zeef + $0,10/kleur/st.) / Diepe Lasergravure + Kleurvulling (+$0,35–$0,60/st., MOQ 200–300)'
    : 'Lasergravure op Binnenplaat of Logo op Zwarte EVA-ritsetui / Blikken Doos met Venster',
  es: (lr) => lr
    ? 'Grabado Láser de Fibra (+$0.15–$0.30/ud.) / Serigrafía en Color ($35/color pantalla + $0.10/color/ud.) / Láser Profundo + Relleno de Color (+$0.35–$0.60/ud., MOQ 200–300)'
    : 'Marca Láser en Placa Interna o Logo Personalizado en Estuche EVA Negro / Caja Metálica con Ventana',
  it: (lr) => lr
    ? 'Incisione Laser a Fibra (+$0,15–$0,30/pz.) / Serigrafia a Colori ($35/colore telaio + $0,10/colore/pz.) / Laser Profondo + Smalto (+$0,35–$0,60/pz., MOQ 200–300)'
    : 'Marcatura Laser su Piastra Interna o Logo su Custodia Zip EVA Nera / Scatola in Latta con Finestra',
  pt: (lr) => lr
    ? 'Gravação a Laser de Fibra (+$0,15–$0,30/un.) / Serigrafia a Cores ($35/cor quadro + $0,10/cor/un.) / Laser Profundo + Preenchimento (+$0,35–$0,60/un., MOQ 200–300)'
    : 'Marcação a Laser na Placa Interna ou Logótipo em Bolsa EVA Preta / Caixa de Lata com Janela',
  sv: (lr) => lr
    ? '50W Fiberlasergravyr (+$0,15–$0,30/st) / Screentryck ($35/färg schablon + $0,10/färg/st) / Djup Lasergravyr + Färgfyllning (+$0,35–$0,60/st, MOQ 200–300)'
    : 'Lasergravyr på inre glidplatta eller logotyp på svart EVA-fodral / plåtask med fönster',
  da: (lr) => lr
    ? '50W Fiberlasergravering (+$0,15–$0,30/stk.) / Serigrafi ($35/farve ramme + $0,10/farve/stk.) / Dyb Lasergravering + Farvefyld (+$0,35–$0,60/stk., MOQ 200–300)'
    : 'Lasermærkning på indvendig plade eller logo på sort EVA-lynlåsetui / metalæske med vindue',
  no: (lr) => lr
    ? '50W Fiberlasergravering (+$0,15–$0,30/stk.) / Silketrykk ($35/farge ramme + $0,10/farge/stk.) / Dyp Lasergravering + Fargefyll (+$0,35–$0,60/stk., MOQ 200–300)'
    : 'Lasermerking på innvendig plate eller logo på svart EVA-glidelåsetui / metalleske med vindu',
  fi: (lr) => lr
    ? '50W Kuitulaserkaiverrus (+$0,15–$0,30/kpl) / Silkkipainatus ($35/väri seula + $0,10/väri/kpl) / Syvälaserkaiverrus + Väritäyttö (+$0,35–$0,60/kpl, MOQ 200–300)'
    : 'Lasermerkkaus sisälevyyn tai logo mustaan EVA-vetoketjukoteloon / ikkunalliseen peltirasiaan',
  pl: (lr) => lr
    ? 'Grawerowanie Laserem Fibre (+0,15–0,30 $/szt.) / Sitodruk Kolorowy (35 $/kolor matryca + 0,10 $/kolor/szt.) / Głęboki Laser + Kolor (+0,35–0,60 $/szt., MOQ 200–300)'
    : 'Znakowanie laserowe na płytce wewnętrznej lub logo na czarnym etui EVA / puszce z okienkiem',
  cs: (lr) => lr
    ? '50W Vláknový laser (+$0,15–$0,30/ks) / Barevný sítotisk ($35/barva šablona + $0,10/barva/ks) / Hluboký laser + Barevná výplň (+$0,35–$0,60/ks, MOQ 200–300)'
    : 'Laserové značení na vnitřní desku nebo logo na černé EVA pouzdro / plechovou krabičku s okénkem',
  ru: (lr) => lr
    ? 'Оптоволоконный лазер 50W (+$0.15–$0.30/шт.) / Шелкография ($35/цвет матрица + $0.10/цвет/шт.) / Глубокий лазер + эмаль (+$0.35–$0.60/шт., MOQ 200–300)'
    : 'Лазерная маркировка на внутренней пластине или логотип на черном чехле EVA / жестяной коробке',
  ja: (lr) => lr
    ? '50Wファイバーレーザー刻印 (+$0.15〜$0.30/個) / シルクスクリーン印刷 (版代$35/色 + 単価+$0.10/色) / 深彫りレーザー＋色入れ (+$0.35〜$0.60/個, MOQ 200〜300個)'
    : '内部トラックプレートへのレーザー刻印、または黒EVAジッパーケース・窓付き缶ボックスへのロゴ名入れ',
  ko: (lr) => lr
    ? '50W 파이버 레이저 각인 (+$0.15~$0.30/개) / 실크스크린 인쇄 (판비 $35/색상 + 단가 +$0.10/색상) / 심층 레이저 + 컬러 필링 (+$0.35~$0.60/개, MOQ 200~300개)'
    : '내부 트랙 플레이트 레이저 각인 또는 블랙 EVA 지퍼 케이스 / 윈도우 틴케이스 로고 인쇄',
  id: (lr) => lr
    ? 'Grafir Laser Fiber 50W (+$0,15–$0,30/pc) / Sablon Silk-Screen ($35/warna screen + $0,10/warna/pc) / Laser Dalam + Isi Warna (+$0,35–$0,60/pc, MOQ 200–300)'
    : 'Marka Laser pada Pelat Dalam atau Logo Kustom pada Case Resleting EVA Hitam / Kotak Kaleng Jendela',
  ar: (lr) => lr
    ? 'حفر ليزر فايبر 50W (+0.15–0.30$/قطعة) / طباعة حريرية ملونة (35$/لون للشاشة + 0.10$/لون/قطعة) / حفر ليزر عميق + تعبئة لون (+0.35–0.60$/قطعة، MOQ 200–300)'
    : 'وسم بالليزر على الصفيحة الداخلية أو طباعة الشعار على حقيبة EVA السوداء / علبة القصدير بنافذة'
};

const SPEC_STATIC_VALS: Record<SupportedLanguage, {
  moldRef: (rowId: number) => string;
  toolingFee: string;
  moq: string;
  safety: string;
  sampleFeeTime: string;
}> = {
  en: {
    moldRef: (r) => `Mold #${r} (Ready Production Tooling)`,
    toolingFee: '$0.00 (Mature Ready Production Mold)',
    moq: '50 pcs (Blank Stock) / 100 pcs (Custom Laser or Silk-Screen Logo)',
    safety: 'US CPSC 16 CFR 1262 Locked-Magnet Enclosure, RoHS & REACH Compliant',
    sampleFeeTime: '$80–$150 USD (Custom Logo Sample) · 10–15 Days'
  },
  de: {
    moldRef: (r) => `Serienform #${r} (Fertiges Produktionswerkzeug)`,
    toolingFee: '$0,00 (Sofort einsatzbereite Serienform)',
    moq: '50 Stk. (Blanko-Lagerware) / 100 Stk. (Mit Laser- oder Siebdruck-Logo)',
    safety: 'US CPSC 16 CFR 1262 Verriegeltes Magnetgehäuse, EU RoHS & REACH konform',
    sampleFeeTime: '$80–$150 USD (Individuelles Logo-Muster) · 10–15 Tage'
  },
  fr: {
    moldRef: (r) => `Moule #${r} (Outillage de Série Prêt)`,
    toolingFee: '0,00 $ (Moule de Série Prêt à Produire)',
    moq: '50 pcs (Stock Neutre) / 100 pcs (Logo Laser ou Sérigraphie)',
    safety: 'Boîtier Magnétique Verrouillé US CPSC 16 CFR 1262, Conforme RoHS & REACH',
    sampleFeeTime: '80 $ – 150 $ USD (Échantillon Logo Personnalisé) · 10 à 15 Jours'
  },
  nl: {
    moldRef: (r) => `Matrijs #${r} (Productierijp Gereedschap)`,
    toolingFee: '$0,00 (Bestaande Productierijpe Matrijs)',
    moq: '50 st. (Blanco Voorraad) / 100 st. (Laser- of Zeefdruklogo)',
    safety: 'US CPSC 16 CFR 1262 Vergrendelde Magneetbehuizing, RoHS & REACH Conform',
    sampleFeeTime: '$80–$150 USD (Monster met Eigen Logo) · 10–15 Dagen'
  },
  es: {
    moldRef: (r) => `Molde #${r} (Herramental de Serie Listo)`,
    toolingFee: '$0.00 (Molde de Producción en Serie Listo)',
    moq: '50 uds. (Stock en Blanco) / 100 uds. (Logo Láser o Serigrafía)',
    safety: 'Carcasa Magnética Bloqueada US CPSC 16 CFR 1262, Cumple RoHS y REACH',
    sampleFeeTime: '$80–$150 USD (Muestra con Logo Personalizado) · 10–15 Días'
  },
  it: {
    moldRef: (r) => `Stampo #${r} (Attrezzatura di Serie Pronta)`,
    toolingFee: '$0,00 (Stampo di Produzione di Serie Pronto)',
    moq: '50 pz. (Stock Neutro) / 100 pz. (Logo Laser o Serigrafia)',
    safety: 'Scocca Magneti Bloccati US CPSC 16 CFR 1262, Conforme RoHS e REACH',
    sampleFeeTime: '$80–$150 USD (Campione con Logo Personalizzato) · 10–15 Giorni'
  },
  pt: {
    moldRef: (r) => `Molde #${r} (Ferramentaria de Série Pronta)`,
    toolingFee: '$0,00 (Molde de Produção de Série Pronto)',
    moq: '50 un. (Stock Neutro) / 100 un. (Logótipo Laser ou Serigrafia)',
    safety: 'Caixa Magnética Bloqueada US CPSC 16 CFR 1262, Conforme RoHS e REACH',
    sampleFeeTime: '$80–$150 USD (Amostra com Logótipo Personalizado) · 10–15 Dias'
  },
  sv: {
    moldRef: (r) => `Form #${r} (Färdigt produktionsverktyg)`,
    toolingFee: '$0,00 (Färdig serieproduktionsform)',
    moq: '50 st ( Blankt lager ) / 100 st ( Laser- eller screentryckt logotyp )',
    safety: 'US CPSC 16 CFR 1262 låst magnethölje, RoHS- & REACH-kompatibel',
    sampleFeeTime: '$80–$150 USD (Prov med egen logotyp) · 10–15 dagar'
  },
  da: {
    moldRef: (r) => `Støbeform #${r} (Produktionsklart værktøj)`,
    toolingFee: '$0,00 (Produktionsklar seriestøbeform)',
    moq: '50 stk. (Neutralt lager) / 100 stk. (Laser- eller serigrafilogo)',
    safety: 'US CPSC 16 CFR 1262 låst magnetkabinet, RoHS- & REACH-godkendt',
    sampleFeeTime: '$80–$150 USD (Prøve med eget logo) · 10–15 dage'
  },
  no: {
    moldRef: (r) => `Støpeform #${r} (Produksjonsklart verktøy)`,
    toolingFee: '$0,00 (Produksjonsklar seriestøpeform)',
    moq: '50 stk. (Nøytralt lager) / 100 stk. (Laser- eller silketrykklogo)',
    safety: 'US CPSC 16 CFR 1262 låst magnetkabinett, RoHS- & REACH-samsvar',
    sampleFeeTime: '$80–$150 USD (Prøve med eget logo) · 10–15 dager'
  },
  fi: {
    moldRef: (r) => `Muotti #${r} (Valmis sarjatuotantotyökalu)`,
    toolingFee: '$0,00 (Valmis sarjatuotantomuotti)',
    moq: '50 kpl (Ilman merkkausta) / 100 kpl (Laser- tai silkkipainettu logo)',
    safety: 'US CPSC 16 CFR 1262 lukittu magneettirunko, RoHS- & REACH-yhteensopiva',
    sampleFeeTime: '$80–$150 USD (Räätälöity logomalli) · 10–15 päivää'
  },
  pl: {
    moldRef: (r) => `Forma #${r} (Gotowe Oprzędziowanie Seryjne)`,
    toolingFee: '0,00 $ (Gotowa Forma Produkcyjna)',
    moq: '50 szt. (Wersja Czysta) / 100 szt. (Z Logo Laserowym lub Sitodrukiem)',
    safety: 'Zablokowana Komora Magnesów US CPSC 16 CFR 1262, Zgodność z RoHS i REACH',
    sampleFeeTime: '80–150 USD (Próbka z Własnym Logo) · 10–15 Dni'
  },
  cs: {
    moldRef: (r) => `Forma #${r} (Hotový sériový nástroj)`,
    toolingFee: '$0,00 (Hotová sériová výrobní forma)',
    moq: '50 ks (Bez potisku) / 100 ks (Vlastní logo laserem nebo sítotiskem)',
    safety: 'Uzamčené magnetické pouzdro US CPSC 16 CFR 1262, shoda s RoHS a REACH',
    sampleFeeTime: '$80–$150 USD (Vzorek s vlastním logem) · 10–15 dní'
  },
  ru: {
    moldRef: (r) => `Пресс-форма #${r} (Готовая серийная оснастка)`,
    toolingFee: '$0.00 (Готовая серийная пресс-форма)',
    moq: '50 шт. (Без логотипа) / 100 шт. (Лазерная гравировка или шелкография)',
    safety: 'Защищенный магнитный корпус US CPSC 16 CFR 1262, соответствие RoHS и REACH',
    sampleFeeTime: '$80–$150 USD (Образец с логотипом) · 10–15 дней'
  },
  ja: {
    moldRef: (r) => `金型 #${r}（量産対応・既存金型）`,
    toolingFee: '$0.00（既存量産金型を使用するため金型代不要）',
    moq: '50個（無地在庫） / 100個（レーザー刻印・シルク印刷ロゴ）',
    safety: '米国CPSC 16 CFR 1262 磁石脱落防止ロック構造・EU RoHS & REACH準拠',
    sampleFeeTime: '$80〜$150 USD（カスタムロゴ試作サンプル） · 10〜15日'
  },
  ko: {
    moldRef: (r) => `금형 #${r} (양산 완료 기성 금형)`,
    toolingFee: '$0.00 (기성 양산 금형 사용으로 초기 금형비 무료)',
    moq: '50개 (무지 기본형) / 100개 (레이저 각인 및 실크스크린 로고)',
    safety: '미국 CPSC 16 CFR 1262 자석 이탈 방지 잠금 구조, EU RoHS & REACH 준수',
    sampleFeeTime: '$80–$150 USD (맞춤 로고 샘플 제작비) · 10–15일 소요'
  },
  id: {
    moldRef: (r) => `Cetakan #${r} (Cetakan Produksi Siap Pakai)`,
    toolingFee: '$0,00 (Cetakan Produksi Seri Siap Pakai)',
    moq: '50 pcs (Stok Polos) / 100 pcs (Logo Laser atau Sablon Silk-Screen)',
    safety: 'Enklosur Magnet Terkunci US CPSC 16 CFR 1262, Sesuai RoHS & REACH',
    sampleFeeTime: '$80–$150 USD (Sampel Logo Kustom) · 10–15 Hari'
  },
  ar: {
    moldRef: (r) => `القالب #${r} (قالب إنتاج متسلسل جاهز)`,
    toolingFee: '0.00 دولار (قالب إنتاج جاهز بدون رسوم تأسيس)',
    moq: '50 قطعة (بدون شعار) / 100 قطعة (مع شعار بالليزر أو الطباعة الحريرية)',
    safety: 'هيكل مغناطيسي محكم الإغلاق مطابق لـ US CPSC 16 CFR 1262 و RoHS و REACH',
    sampleFeeTime: '80–150 دولاراً أمريكياً (عينة بشعار مخصص) · 10–15 يوماً'
  }
};

const FEATURES_BUILDER: Record<SupportedLanguage, (rowId: number, mag: string, acc: string) => string[]> = {
  en: (rowId, mag, acc) => [
    `Zero Tooling Cost ($0 Mold Fee): Ready-to-produce factory mold #${rowId} eliminates $2,500+ custom CNC/die-casting tooling expenses.`,
    `Verified Tactile & Acoustic Engineering: Built with ${mag} and ${acc} for repeatable crisp haptic feedback.`,
    `CPSC 16 CFR 1262 Magnet Retention: Internal mechanical screw/structural lock prevents neodymium magnet detachment under heavy drop tests.`,
    `Turnkey Wholesale Branding & Packaging: Supports 50W Fiber Laser Engraving, Silk-Screen Printing ($35/color + $0.10/color/pc), Deep Laser Color Fill, and custom EVA zipper pouches.`
  ],
  de: (rowId, mag, acc) => [
    `Null Werkzeugkosten ($0 Formgebühr): Unsere fertige Serienform #${rowId} spart über $2.500 an individuellen Druckguss- oder CNC-Vorrichtungskosten.`,
    `Geprüfte Haptik- & Akustik-Mechanik: Ausgestattet mit ${mag} sowie ${acc} für präzises, reproduzierbares Klick-Feedback.`,
    `US CPSC 16 CFR 1262 Magnetverriegelung: Mechanische Verschraubung und Strukturkleber verhindern das Lösen von Neodym-Magneten bei Falltests.`,
    `Schlüsselfertiges Logo-Branding & Verpackung: Unterstützt 50W-Faserlasergravur, Siebdruck ($35/Farbe + $0,10/Farbe/Stk.), tiefe Lasergravur mit Farbauslegung sowie EVA-Etuis.`
  ],
  fr: (rowId, mag, acc) => [
    `Zéro Frais de Moule (0 $ d’Outillage) : Notre moule de série prêt #${rowId} élimine plus de 2 500 $ de frais de création de moule sur mesure.`,
    `Ingénierie Tactile & Acoustique Calibrée : Assemblé avec ${mag} et ${acc} pour un retour haptique net et régulier.`,
    `Sécurité Magnétique US CPSC 16 CFR 1262 : Le verrouillage mécanique par vis et résine époxy empêche tout détachement d’aimant lors des tests de chute.`,
    `Personnalisation Logo & Packaging Clé en Main : Gravure laser fibre 50W, sérigraphie (35 $/couleur + 0,10 $/couleur/pc), gravure profonde émaillée et étuis EVA.`
  ],
  nl: (rowId, mag, acc) => [
    `Geen Matrijskosten ($0 Tooling Fee): Onze productierijpe matrijs #${rowId} bespaart meer dan $2.500 aan opstart- en matrijskosten.`,
    `Gekalibreerde Haptische & Akoestische Mechaniek: Gebouwd met ${mag} en ${acc} voor consistente, strakke klikfeedback.`,
    `US CPSC 16 CFR 1262 Magneetbeveiliging: Interne schroefvergrendeling en structurele epoxy voorkomen het losraken van magneten bij valproeven.`,
    `Turnkey Logo-personalisatie & Verpakking: Ondersteunt 50W fiberlasergravure, zeefdruk ($35/kleur + $0,10/kleur/st.), diepe lasergravure met kleurvulling en EVA-etuis.`
  ],
  es: (rowId, mag, acc) => [
    `Cero Costo de Molde ($0 Matricería): Nuestro molde de serie listo #${rowId} elimina más de $2,500 en gastos de moldes personalizados.`,
    `Ingeniería Táctil y Acústica Verificada: Construido con ${mag} y ${acc} para una respuesta háptica nítida y repetible.`,
    `Retención Magnética US CPSC 16 CFR 1262: El bloqueo mecánico interno evita el desprendimiento de imanes de neodimio en pruebas de caída.`,
    `Personalización de Marca y Empaque Llave en Mano: Admite grabado láser de fibra 50W, serigrafía ($35/color + $0.10/color/ud.), láser profundo con color y estuches EVA.`
  ],
  it: (rowId, mag, acc) => [
    `Zero Costi di Stampo ($0 Attrezzatura): Il nostro stampo di serie pronto #${rowId} elimina oltre $2.500 di spese per stampi personalizzati.`,
    `Ingegneria Tattile e Acustica Calibrata: Costruito con ${mag} e ${acc} per un feedback aptico nitido e costante.`,
    `Sicurezza Magnetica US CPSC 16 CFR 1262: Il bloccaggio meccanico interno impedisce il distacco dei magneti al neodimio nei test di caduta.`,
    `Personalizzazione Logo e Packaging Chiavi in Mano: Supporta incisione laser a fibra 50W, serigrafia ($35/colore + $0,10/colore/pz.), laser profondo con smalto e custodie EVA.`
  ],
  pt: (rowId, mag, acc) => [
    `Zero Custo de Molde ($0 Ferramentaria): O nosso molde de produção pronto #${rowId} elimina mais de $2.500 em custos de moldes personalizados.`,
    `Engenharia Tátil e Acústica Verificada: Construído com ${mag} e ${acc} para um feedback háptico nítido e consistente.`,
    `Retenção Magnética US CPSC 16 CFR 1262: O bloqueio mecânico interno impede o desprendimento de ímanes de neodímio em testes de queda.`,
    `Personalização de Logótipo e Embalagem Chave na Mão: Suporta gravação a laser de fibra 50W, serigrafia ($35/cor + $0,10/cor/un.), laser profundo com cor e bolsas EVA.`
  ],
  sv: (rowId, mag, acc) => [
    `Noll verktygskostnad ($0 formavgift): Vår färdiga produktionsform #${rowId} eliminerar över $2 500 i verktygskostnader.`,
    `Verifierad taktil & akustisk mekanik: Byggd med ${mag} och ${acc} för distinkt och repeterbar haptisk respons.`,
    `US CPSC 16 CFR 1262 magnetlåsning: Intern mekanisk skruv- och epoxilåsning förhindrar att magneter lossnar vid falltester.`,
    `Nyckelfärdig logotypmärkning & förpackning: Stöder 50W fiberlasergravyr, screentryck ($35/färg + $0,10/färg/st), djup laser med färgfyllning och EVA-fodral.`
  ],
  da: (rowId, mag, acc) => [
    `Nul værktøjsomkostninger ($0 formgebyr): Vores produktionsklare støbeform #${rowId} sparer over $2.500 i værktøjsudgifter.`,
    `Verificeret taktil & akustisk mekanik: Konstrueret med ${mag} og ${acc} for skarp og ensartet haptisk respons.`,
    `US CPSC 16 CFR 1262 magnetlåsning: Intern mekanisk skrue- og epoxylås forhindrer magnetløsning under faldtest.`,
    `Nøglefærdig logomærkning & emballage: Understøtter 50W fiberlasergravering, serigrafi ($35/farve + $0,10/farve/stk.), dyb laser med farvefyld og EVA-etuier.`
  ],
  no: (rowId, mag, acc) => [
    `Null verktøykostnad ($0 støpeformgebyr): Vår produksjonsklare støpeform #${rowId} sparer over $2 500 i verktøykostnader.`,
    `Verifisert taktil & akustisk mekanikk: Bygget med ${mag} og ${acc} for presis og repeterbar haptisk respons.`,
    `US CPSC 16 CFR 1262 magnetlåsing: Intern mekanisk skrue- og epoksylåsing forhindrer at magneter løsner under falltester.`,
    `Nøkkelferdig logomerking & emballasje: Støtter 50W fiberlasergravering, silketrykk ($35/farge + $0,10/farge/stk.), dyp laser med fargefyll og EVA-etuier.`
  ],
  fi: (rowId, mag, acc) => [
    `Nolla muottikulua ($0 työkalumaksu): Valmis sarjatuotantomuottimme #${rowId} säästää yli $2 500 räätälöidyissä muottikuluissa.`,
    `Varmennettu haptinen & akustinen mekaniikka: Rakennettu kokoonpanolla ${mag} ja ${acc} tarkkaa ja toistettavaa tuntumaa varten.`,
    `US CPSC 16 CFR 1262 magneettilukitus: Sisäinen ruuvi- ja epoksilukitus estää neodyymimagneettien irtoamisen pudotustesteissä.`,
    `Avaimet käteen -logomerkkaus & pakkaus: Tukee 50W kuitulaserkaiverrusta, silkkipainatusta ($35/väri + $0,10/väri/kpl), syvälaseria väritäytöllä ja EVA-koteloita.`
  ],
  pl: (rowId, mag, acc) => [
    `Zero Kosztów Formy (0 $ Opłaty Narzędziowej): Gotowa forma seryjna #${rowId} eliminuje ponad 2500 $ kosztów budowy własnej matrycy.`,
    `Zweryfikowana Mechanika Haptyczna i Akustyczna: Zbudowany z ${mag} oraz ${acc} dla powtarzalnego, wyraźnego kliku.`,
    `Zabezpieczenie Magnesów US CPSC 16 CFR 1262: Wewnętrzna blokada śrubowa i epoksydowa zapobiega wypadaniu magnesów w testach upadku.`,
    `Kompleksowe Znakowanie Logo i Opakowania: Obsługuje laser światłowodowy 50W, sitodruk (35 $/kolor + 0,10 $/kolor/szt.), głęboki laser z kolorem oraz etui EVA.`
  ],
  cs: (rowId, mag, acc) => [
    `Nulové náklady na formu ($0 poplatek): Naše hotová sériová forma #${rowId} eliminuje více než $2 500 za výrobu zakázkové formy.`,
    `Ověřená haptická a akustická mechanika: Sestaveno s ${mag} a ${acc} pro přesnou a opakovatelnou odezvu.`,
    `Zajištění magnetů US CPSC 16 CFR 1262: Vnitřní mechanické šroubové a epoxidové jištění zabraňuje uvolnění magnetů při pádových testech.`,
    `Kompletní branding a balení na klíč: Podporuje 50W vláknový laser, sítotisk ($35/barva + $0,10/barva/ks), hluboký laser s barvou a pouzdra EVA.`
  ],
  ru: (rowId, mag, acc) => [
    `Нулевая стоимость пресс-формы ($0 за оснастку): Готовая серийная форма #${rowId} экономит более $2500 на индивидуальной оснастке.`,
    `Выверенная тактильная и акустическая механика: Конструкция включает ${mag} и ${acc} для четкого тактильного отклика.`,
    `Фиксация магнитов US CPSC 16 CFR 1262: Внутренний винтовой и эпоксидный замок исключает выпадение неодимовых магнитов при ударах.`,
    `Брендирование и упаковка под ключ: Лазерная гравировка 50W, шелкография ($35/цвет + $0.10/цвет/шт.), глубокий лазер с эмалью и чехлы EVA.`
  ],
  ja: (rowId, mag, acc) => [
    `初期金型代ゼロ（$0 ツール費用）：既存の量産金型 #${rowId} を使用するため、通常 $2,500 以上かかる新規金型製作費が一切不要です。`,
    `精密な触覚（ハプティック）＆音響設計：${mag} と ${acc} を組み込み、心地よいクリック感と耐久性を両立しています。`,
    `米国 CPSC 16 CFR 1262 磁石ロック安全構造：内部ネジ固定と高強度構造用エポキシにより、落下衝撃でもネオジム磁石が脱落しません。`,
    `OEMロゴ名入れ＆パッケージ一貫対応：50Wファイバーレーザー刻印、シルク印刷（版代$35/色＋単価+$0.10/色）、深彫り色入れ、EVAケース・FNSKUラベル貼付に対応。`
  ],
  ko: (rowId, mag, acc) => [
    `금형비 제로 ($0 툴링 비용): 검증된 기성 양산 금형 #${rowId}를 사용하여 $2,500 이상의 신규 금형 제작 비용을 전액 절감합니다.`,
    `검증된 햅틱 손맛 및 음향 설계: ${mag} 및 ${acc} 구성을 통해 균일하고 경쾌한 타건감을 구현합니다.`,
    `미국 CPSC 16 CFR 1262 자석 안전 잠금: 내부 기계식 나사 및 구조용 에폭시 이중 고정으로 낙하 충격 시 자석 이탈을 완벽히 방지합니다.`,
    `턴키 OEM 로고 브랜딩 및 패키징: 50W 파이버 레이저 각인, 실크스크린($35/색상 + $0.10/색상/개), 심층 레이저 컬러 필링 및 EVA 파우치를 지원합니다.`
  ],
  id: (rowId, mag, acc) => [
    `Bebas Biaya Cetakan ($0 Mold Fee): Cetakan produksi siap pakai #${rowId} menghemat lebih dari $2.500 biaya pembuatan cetakan baru.`,
    `Rekayasa Taktil & Akustik Teruji: Dirancang dengan ${mag} dan ${acc} untuk umpan balik klik haptik yang presisi.`,
    `Keamanan Magnet US CPSC 16 CFR 1262: Penguncian sekrup mekanis internal mencegah lepasnya magnet neodymium saat uji jatuh.`,
    `Branding Logo & Kemasan Siap Jual: Mendukung Grafir Laser Fiber 50W, Sablon Silk-Screen ($35/warna + $0,10/warna/pc), Laser Dalam + Isi Warna, dan pouch EVA.`
  ],
  ar: (rowId, mag, acc) => [
    `صفر رسوم للقالب (0$ تكلفة التجهيز): القالب الجاهز للإنتاج رقم #${rowId} يوفر عليك أكثر من 2,500 دولار من تكاليف فتح قوالب جديدة.`,
    `هندسة لمسية وصوتية معايرة: مزود بـ ${mag} مع ${acc} لمنح استجابة ميكانيكية دقيقة ومتكررة.`,
    `تثبيت المغناطيس وفق US CPSC 16 CFR 1262: إغلاق ميكانيكي داخلي يمنع انفصال مغناطيس النيوديميوم تحت اختبارات السقوط القاسية.`,
    `تخصيص الشعار والتغليف المتكامل: يدعم حفر ليزر فايبر 50W، والطباعة الحريرية (35$/لون + 0.10$/لون/قطعة)، والحفر العميق الملون وحقائب EVA.`
  ]
};

interface EditorialCopy {
  secTitle: (sku: string, title: string) => string;
  p1: (sku: string, title: string, mat: string, size: string, weight: string, rowId: number) => string;
  h3Mech: string;
  pMech: (mag: string, acc: string, colors: string) => string;
  h3Logo: string;
  logoBullets: [string, string, string, string];
  h3Table: (sku: string) => string;
  thOption: string;
  thMoq: string;
  thSetup: string;
  thUnitAdd: string;
  thLead: string;
  r1: [string, string, string, string, string];
  r2: [string, string, string, string, string];
  r3: [string, string, string, string, string];
  r4: [string, string, string, string, string];
}

const EDITORIAL_COPY: Record<SupportedLanguage, EditorialCopy> = {
  en: {
    secTitle: (sku, title) => `${sku} ${title} — Mechanical Architecture, Logo Customization & Packaging Guide`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Manufactured on our mature ready-to-use production mold #${rowId} ($0.00 tooling investment), the ${sku} ${title} is built from ${mat} with precision outer dimensions of ${size} and a calibrated hand-feel weight of ${weight}. Every unit is assembled and inspected at our Fuzhou Industrial Zone export hub prior to international dispatch.`,
    h3Mech: '1. Internal Haptic & Acoustic Mechanism Calibration',
    pMech: (mag, acc, colors) =>
      `The internal drive system integrates ${mag} paired with ${acc}. All neodymium magnet pockets and bearing seats are mechanically locked and bonded with industrial structural epoxy (>22 MPa shear strength) to guarantee zero magnet detachment under US CPSC 16 CFR Part 1262 drop tests. Standard factory surface finishes include ${colors}.`,
    h3Logo: '2. Custom Logo Branding & Private-Label Options ($0 Mold Fee)',
    logoBullets: [
      '<strong>50W MOPA Fiber Laser Engraving (Monochrome):</strong> MOQ 100 pcs · $0.00 setup fee · +$0.15–$0.30/pc unit cost. Micron-ablates permanent metallic/white contrast marks that never peel or fade.',
      '<strong>Silk-Screen Printing (Standard Multi-Color Logo):</strong> MOQ 100 pcs · $35 USD screen setup fee per color (1 color = $35, 2 colors = $70, 3 colors = $105) · +$0.10 USD per color per unit (e.g., 1 color = +$0.10/pc, 5 colors = +$0.50/pc).',
      '<strong>Deep Laser Engraving + Hand Color Fill (Recessed Enamel):</strong> MOQ 200–300 pcs · $0.00 laser setup · +$0.35–$0.60/pc unit cost. Deep-etches a recessed cavity into the metal before filling with durable color enamel.',
      '<strong>Custom Logo Pre-Production Sample:</strong> $80–$150 USD sample fee · 10–15 days sample lead time (free 12-hour digital vector mockup provided prior to sampling).'
    ],
    h3Table: (sku) => `3. ${sku} Customization & Packaging Cost Reference Matrix`,
    thOption: 'Customization / Packaging Mode', thMoq: 'MOQ', thSetup: 'Setup / Screen Fee', thUnitAdd: 'Unit Add-On Cost', thLead: 'Production Time',
    r1: ['Blank Ready-Mold Stock', '50 pcs', '$0.00', 'Included in Base Tier Price', '3–5 Business Days'],
    r2: ['50W Fiber Laser Engraved Logo', '100 pcs', '$0.00', '+$0.15 – $0.30 / pc', '10–15 Business Days'],
    r3: ['Silk-Screen Multi-Color Logo', '100 pcs', '$35 / color', '+$0.10 / color / pc', '10–15 Business Days'],
    r4: ['Deep Laser Etch + Color Fill', '200–300 pcs', '$0.00', '+$0.35 – $0.60 / pc', '12–15 Business Days']
  },
  de: {
    secTitle: (sku, title) => `${sku} ${title} — Mechanik-Aufbau, Logo-Veredelung & Verpackungsleitfaden`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Gefertigt auf unserer ausgereiften Serienform #${rowId} ($0,00 Werkzeugkosten), besteht das Modell ${sku} ${title} aus ${mat} mit exakten Außenmaßen von ${size} und einem ausbalancierten Handgewicht von ${weight}. Jede Einheit wird vor dem weltweiten DDP-Versand in unserem Exportzentrum in Fuzhou geprüft.`,
    h3Mech: '1. Kalibrierung der internen Haptik- & Akustik-Mechanik',
    pMech: (mag, acc, colors) =>
      `Das interne Antriebssystem kombiniert ${mag} mit ${acc}. Alle Neodym-Magnetkammern und Lagersitze sind mechanisch verschraubt und mit hochfestem Struktur-Epoxidharz (>22 MPa Scherfestigkeit) gesichert, um die US-Norm CPSC 16 CFR Part 1262 sowie EU RoHS/REACH zu erfüllen. Standardoberflächen: ${colors}.`,
    h3Logo: '2. Individuelle Logo-Veredelung & Eigenmarken-Optionen ($0 Formgebühr)',
    logoBullets: [
      '<strong>50W MOPA-Faserlasergravur (Monochrom):</strong> MOQ 100 Stk. · $0,00 Einrichtungsgebühr · +$0,15–$0,30/Stk. Dauerhafte, abriebfeste Metallgravur.',
      '<strong>Siebdruck (Mehrfarbige Markenlogos):</strong> MOQ 100 Stk. · $35 USD Siebgebühr pro Farbe (1 Farbe = $35, 2 Farben = $70, 3 Farben = $105) · +$0,10 USD pro Farbe und Stück (z. B. 5 Farben = +$0,50/Stk.).',
      '<strong>Tiefe Lasergravur + Farbauslegung (Emaille-Füllung):</strong> MOQ 200–300 Stk. · $0,00 Laser-Setup · +$0,35–$0,60/Stk. Tiefengravur mit anschließender abriebgeschützter Farbfüllung.',
      '<strong>Vorabmuster mit eigenem Logo:</strong> $80–$150 USD Mustergebühr · 10–15 Tage Musterbauzeit (inkl. kostenlosem digitalem Korrekturabzug binnen 12 Std.).'
    ],
    h3Table: (sku) => `3. ${sku} Kostenmatrix für Logo-Veredelung & Serienproduktion`,
    thOption: 'Veredelungs- / Bestellmodus', thMoq: 'MOQ', thSetup: 'Einrichtungs- / Siebgebühr', thUnitAdd: 'Aufpreis pro Stück', thLead: 'Produktionszeit',
    r1: ['Blanko-Lagerware ab Serienform', '50 Stk.', '$0,00', 'Im Staffelpreis enthalten', '3–5 Werktage'],
    r2: ['50W-Faserlasergravur Logo', '100 Stk.', '$0,00', '+$0,15 – $0,30 / Stk.', '10–15 Werktage'],
    r3: ['Siebdruck Mehrfarben-Logo', '100 Stk.', '$35 / Farbe', '+$0,10 / Farbe / Stk.', '10–15 Werktage'],
    r4: ['Tiefe Lasergravur + Farbauslegung', '200–300 Stk.', '$0,00', '+$0,35 – $0,60 / Stk.', '12–15 Werktage']
  },
  fr: {
    secTitle: (sku, title) => `${sku} ${title} — Architecture Mécanique, Marquage Logo & Conditionnement`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Fabriqué à partir de notre moule de série prêt #${rowId} (0,00 $ de frais d’outillage), le modèle ${sku} ${title} est conçu en ${mat} avec des dimensions précises de ${size} et un poids équilibré de ${weight}. Chaque pièce est contrôlée dans notre centre logistique export de Fuzhou avant expédition DDP.`,
    h3Mech: '1. Calibrage du Mécanisme Interne Haptique & Acoustique',
    pMech: (mag, acc, colors) =>
      `L’architecture interne associe ${mag} et ${acc}. Tous les logements d’aimants néodyme et sièges de roulements sont verrouillés mécaniquement et scellés à la résine époxy structurelle (>22 MPa) conformément aux normes US CPSC 16 CFR 1262 et EU RoHS/REACH. Finitions disponibles : ${colors}.`,
    h3Logo: '2. Options de Personnalisation Logo & Marque Privée (0 $ de Moule)',
    logoBullets: [
      '<strong>Gravure Laser Fibre MOPA 50W (Monochrome) :</strong> MOQ 100 pcs · 0,00 $ de frais fixes · +0,15 à 0,30 $/pc. Marquage permanent inaltérable dans le métal.',
      '<strong>Sérigraphie Couleur (Logo Multicolore) :</strong> MOQ 100 pcs · 35 $ USD de frais d’écran par couleur (1 couleur = 35 $, 2 couleurs = 70 $, 3 couleurs = 105 $) · +0,10 $ USD par couleur et par pièce.',
      '<strong>Gravure Laser Profonde + Remplissage Couleur :</strong> MOQ 200–300 pcs · 0,00 $ de frais laser · +0,35 à 0,60 $/pc. Gravure en creux remplie d’émail couleur résistant.',
      '<strong>Échantillon Pré-Série avec Logo :</strong> 80 $ à 150 $ USD · délai d’échantillonnage de 10 à 15 jours (maquette numérique gratuite sous 12h).'
    ],
    h3Table: (sku) => `3. Grille Tarifaire de Personnalisation — ${sku}`,
    thOption: 'Mode de Personnalisation', thMoq: 'MOQ', thSetup: 'Frais Fixes / Écran', thUnitAdd: 'Coût Unitaire Ajouté', thLead: 'Délai de Production',
    r1: ['Stock Neutre (Moule Prêt)', '50 pcs', '0,00 $', 'Inclus dans le tarif de base', '3 à 5 jours ouvrés'],
    r2: ['Gravure Laser Fibre 50W', '100 pcs', '0,00 $', '+0,15 $ – 0,30 $ / pc', '10 à 15 jours ouvrés'],
    r3: ['Sérigraphie Multicolore', '100 pcs', '35 $ / couleur', '+0,10 $ / couleur / pc', '10 à 15 jours ouvrés'],
    r4: ['Laser Profond + Remplissage Couleur', '200–300 pcs', '0,00 $', '+0,35 $ – 0,60 $ / pc', '12 à 15 jours ouvrés']
  },
  nl: {
    secTitle: (sku, title) => `${sku} ${title} — Mechanische Opbouw, Logo-personalisatie & Verpakkingsgids`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Geproduceerd met onze bestaande productierijpe matrijs #${rowId} ($0,00 matrijskosten), is de ${sku} ${title} vervaardigd uit ${mat} met afmetingen van ${size} en een nettogewicht van ${weight}. Elke eenheid wordt geïnspecteerd in ons exportcentrum in Fuzhou.`,
    h3Mech: '1. Interne Haptische & Akoestische Mechaniekkalibratie',
    pMech: (mag, acc, colors) =>
      `Het interne mechanisme combineert ${mag} met ${acc}. Alle neodymium-magneetkamers zijn mechanisch vergrendeld en verlijmd met structurele epoxy (>22 MPa) conform US CPSC 16 CFR 1262 en EU RoHS/REACH. Standaardafwerkingen: ${colors}.`,
    h3Logo: '2. Bedrijfslogo & Private-Label Opties ($0 Matrijskosten)',
    logoBullets: [
      '<strong>50W MOPA Fiberlasergravure (Monochroom):</strong> MOQ 100 st. · $0,00 instelkosten · +$0,15–$0,30/st. Slijtvaste permanente metaalgravure.',
      '<strong>Zeefdruk (Meerkleurig Logo):</strong> MOQ 100 st. · $35 USD zeefkosten per kleur (1 kleur = $35, 2 kleuren = $70, 3 kleuren = $105) · +$0,10 USD per kleur per stuk.',
      '<strong>Diepe Lasergravure + Kleurvulling:</strong> MOQ 200–300 st. · $0,00 laser-setup · +$0,35–$0,60/st. Diep gegraveerde uitsparing gevuld met duurzame kleuremaille.',
      '<strong>Pre-productiemonster met eigen logo:</strong> $80–$150 USD monsterkosten · 10–15 dagen levertijd (gratis digitale proef binnen 12 uur).'
    ],
    h3Table: (sku) => `3. ${sku} Overzicht Personalisatie- & Productiekosten`,
    thOption: 'Personalisatiemethode', thMoq: 'MOQ', thSetup: 'Instel- / Zeefkosten', thUnitAdd: 'Meerprijs per Stuk', thLead: 'Productietijd',
    r1: ['Blanco Voorraad (Bestaande Matrijs)', '50 st.', '$0,00', 'Inbegrepen in staffelprijs', '3–5 werkdagen'],
    r2: ['50W Fiberlasergravure Logo', '100 st.', '$0,00', '+$0,15 – $0,30 / st.', '10–15 werkdagen'],
    r3: ['Zeefdruk Meerkleurenlogo', '100 st.', '$35 / kleur', '+$0,10 / kleur / st.', '10–15 werkdagen'],
    r4: ['Diepe Lasergravure + Kleurvulling', '200–300 st.', '$0,00', '+$0,35 – $0,60 / st.', '12–15 werkdagen']
  },
  es: {
    secTitle: (sku, title) => `${sku} ${title} — Arquitectura Mecánica, Personalización de Logo y Empaque`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Fabricado en nuestro molde de producción en serie #${rowId} ($0.00 en costos de matricería), el ${sku} ${title} está construido en ${mat} con dimensiones de ${size} y un peso neto calibrado de ${weight}. Cada unidad se inspecciona en nuestro centro logístico de exportación en Fuzhou.`,
    h3Mech: '1. Calibración del Mecanismo Interno Háptico y Acústico',
    pMech: (mag, acc, colors) =>
      `El sistema interno integra ${mag} junto con ${acc}. Todos los alojamientos de imanes de neodimio están bloqueados mecánicamente y sellados con epoxi estructural (>22 MPa) para cumplir con la norma US CPSC 16 CFR 1262 y EU RoHS/REACH. Acabados estándar: ${colors}.`,
    h3Logo: '2. Opciones de Personalización de Marca Privada ($0 Costo de Molde)',
    logoBullets: [
      '<strong>Grabado Láser de Fibra MOPA 50W (Monocromo):</strong> MOQ 100 uds. · $0.00 cargo de configuración · +$0.15–$0.30/ud. Marca permanente en el metal que nunca se borra.',
      '<strong>Serigrafía (Logo Multicolor Estándar):</strong> MOQ 100 uds. · $35 USD de pantalla por color (1 color = $35, 2 colores = $70, 3 colores = $105) · +$0.10 USD por color por unidad.',
      '<strong>Grabado Láser Profundo + Relleno de Color:</strong> MOQ 200–300 uds. · $0.00 configuración láser · +$0.35–$0.60/ud. Cavidad grabada a láser rellena con esmalte de color.',
      '<strong>Muestra Física con Logo Personalizado:</strong> $80–$150 USD tarifa de muestra · 10–15 días de plazo (boceto digital gratuito en 12 horas).'
    ],
    h3Table: (sku) => `3. Matriz de Costos de Personalización — ${sku}`,
    thOption: 'Modo de Personalización', thMoq: 'MOQ', thSetup: 'Cargo de Pantalla / Setup', thUnitAdd: 'Costo Adicional / Ud.', thLead: 'Plazo de Producción',
    r1: ['Stock en Blanco (Molde Listo)', '50 uds.', '$0.00', 'Incluido en precio base', '3–5 días hábiles'],
    r2: ['Grabado Láser de Fibra 50W', '100 uds.', '$0.00', '+$0.15 – $0.30 / ud.', '10–15 días hábiles'],
    r3: ['Serigrafía Multicolor', '100 uds.', '$35 / color', '+$0.10 / color / ud.', '10–15 días hábiles'],
    r4: ['Láser Profundo + Relleno de Color', '200–300 uds.', '$0.00', '+$0.35 – $0.60 / ud.', '12–15 días hábiles']
  },
  it: {
    secTitle: (sku, title) => `${sku} ${title} — Architettura Meccanica, Personalizzazione Logo e Packaging`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Prodotto utilizzando il nostro stampo di serie pronto #${rowId} ($0,00 costi di attrezzatura), il modello ${sku} ${title} è realizzato in ${mat} con dimensioni di ${size} e un peso netto di ${weight}. Ogni pezzo è ispezionato nel nostro hub di esportazione di Fuzhou.`,
    h3Mech: '1. Calibrazione del Meccanismo Interno Aptico e Acustico',
    pMech: (mag, acc, colors) =>
      `Il sistema interno integra ${mag} abbinato a ${acc}. Tutte le sedi dei magneti al neodimio sono bloccate meccanicamente e sigillate con resina epossidica strutturale (>22 MPa) in conformità a US CPSC 16 CFR 1262 ed EU RoHS/REACH. Finiture standard: ${colors}.`,
    h3Logo: '2. Opzioni di Personalizzazione Logo e Private Label ($0 Costo Stampo)',
    logoBullets: [
      '<strong>Incisione Laser a Fibra MOPA 50W (Monocromatica):</strong> MOQ 100 pz. · $0,00 costo impianto · +$0,15–$0,30/pz. Marcatura permanente indelebile sul metallo.',
      '<strong>Serigrafia (Logo Multicolore Standard):</strong> MOQ 100 pz. · $35 USD costo telaio per colore (1 colore = $35, 2 colori = $70, 3 colori = $105) · +$0,10 USD per colore per pezzo.',
      '<strong>Incisione Laser Profonda + Riempimento Colore:</strong> MOQ 200–300 pz. · $0,00 setup laser · +$0,35–$0,60/pz. Incisione profonda riempita con smalto colorato resistente.',
      '<strong>Campione Pre-Produzione con Logo:</strong> $80–$150 USD costo campione · 10–15 giorni (bozza digitale gratuita entro 12 ore).'
    ],
    h3Table: (sku) => `3. Tabella Costi di Personalizzazione — ${sku}`,
    thOption: 'Modalità di Personalizzazione', thMoq: 'MOQ', thSetup: 'Costo Impianto / Telaio', thUnitAdd: 'Supplemento per Pezzo', thLead: 'Tempi di Produzione',
    r1: ['Stock Neutro (Stampo Pronto)', '50 pz.', '$0,00', 'Incluso nel prezzo base', '3–5 giorni lavorativi'],
    r2: ['Incisione Laser a Fibra 50W', '100 pz.', '$0,00', '+$0,15 – $0,30 / pz.', '10–15 giorni lavorativi'],
    r3: ['Serigrafia Multicolore', '100 pz.', '$35 / colore', '+$0,10 / colore / pz.', '10–15 giorni lavorativi'],
    r4: ['Laser Profondo + Smalto Colorato', '200–300 pz.', '$0,00', '+$0,35 – $0,60 / pz.', '12–15 giorni lavorativi']
  },
  pt: {
    secTitle: (sku, title) => `${sku} ${title} — Arquitetura Mecânica, Personalização de Logótipo e Embalagem`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Fabricado no nosso molde de produção em série #${rowId} ($0,00 de custo de molde), o ${sku} ${title} é construído em ${mat} com dimensões de ${size} e peso líquido calibrado de ${weight}. Cada unidade é inspecionada no nosso centro logístico de exportação em Fuzhou.`,
    h3Mech: '1. Calibração do Mecanismo Interno Háptico e Acústico',
    pMech: (mag, acc, colors) =>
      `O sistema interno integra ${mag} combinado com ${acc}. Todos os alojamentos de ímanes de neodímio são bloqueados mecanicamente e selados com epóxi estrutural (>22 MPa) em conformidade com US CPSC 16 CFR 1262 e EU RoHS/REACH. Acabamentos padrão: ${colors}.`,
    h3Logo: '2. Opções de Personalização de Logótipo e Marca Própria ($0 Molde)',
    logoBullets: [
      '<strong>Gravação a Laser de Fibra MOPA 50W (Monocromática):</strong> MOQ 100 un. · $0,00 taxa de configuração · +$0,15–$0,30/un. Marcação permanente no metal que nunca desaparece.',
      '<strong>Serigrafia (Logótipo Multicor Padrão):</strong> MOQ 100 un. · $35 USD de quadro por cor (1 cor = $35, 2 cores = $70, 3 cores = $105) · +$0,10 USD por cor por unidade.',
      '<strong>Gravação a Laser Profunda + Preenchimento de Cor:</strong> MOQ 200–300 un. · $0,00 setup laser · +$0,35–$0,60/un. Cavidade gravada a laser preenchida com esmalte colorido.',
      '<strong>Amostra Física com Logótipo Personalizado:</strong> $80–$150 USD taxa de amostra · 10–15 dias de prazo (maquete digital gratuita em 12 horas).'
    ],
    h3Table: (sku) => `3. Matriz de Custos de Personalização — ${sku}`,
    thOption: 'Modo de Personalização', thMoq: 'MOQ', thSetup: 'Taxa de Quadro / Setup', thUnitAdd: 'Custo Adicional / Un.', thLead: 'Prazo de Produção',
    r1: ['Stock Neutro (Molde Pronto)', '50 un.', '$0,00', 'Incluído no preço base', '3–5 dias úteis'],
    r2: ['Gravação a Laser de Fibra 50W', '100 un.', '$0,00', '+$0,15 – $0,30 / un.', '10–15 dias úteis'],
    r3: ['Serigrafia Multicor', '100 un.', '$35 / cor', '+$0,10 / cor / un.', '10–15 dias úteis'],
    r4: ['Laser Profundo + Preenchimento de Cor', '200–300 un.', '$0,00', '+$0,35 – $0,60 / un.', '12–15 dias úteis']
  },
  sv: {
    secTitle: (sku, title) => `${sku} ${title} — Mekanisk konstruktion, logotypmärkning & förpackningsguide`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Tillverkad i vår färdiga produktionsform #${rowId} ($0,00 verktygskostnad) är ${sku} ${title} konstruerad av ${mat} med måtten ${size} och en nettovikt på ${weight}. Varje enhet kvalitetskontrolleras vid vårt exportnav i Fuzhou före leverans.`,
    h3Mech: '1. Intern haptisk & akustisk mekanikkalibrering',
    pMech: (mag, acc, colors) =>
      `Drivsystemet integrerar ${mag} tillsammans med ${acc}. Alla neodymmagnetfickor är mekaniskt låsta och förseglade med strukturell epoxi (>22 MPa) enligt US CPSC 16 CFR 1262 och EU RoHS/REACH. Standardfinish: ${colors}.`,
    h3Logo: '2. Anpassad logotypmärkning & Private Label ($0 formavgift)',
    logoBullets: [
      '<strong>50W MOPA-fiberlasergravyr (Monokrom):</strong> MOQ 100 st · $0,00 startavgift · +$0,15–$0,30/st. Permanent metallgravyr som aldrig nöts bort.',
      '<strong>Screentryck (Flerfärgslogotyp):</strong> MOQ 100 st · $35 USD schablonavgift per färg (1 färg = $35, 2 färger = $70, 3 färger = $105) · +$0,10 USD per färg och enhet.',
      '<strong>Djup lasergravyr + färgfyllning:</strong> MOQ 200–300 st · $0,00 laser-setup · +$0,35–$0,60/st. Djupgraverat spår fyllt med slitstark färgemalj.',
      '<strong>Förproduktionsprov med egen logotyp:</strong> $80–$150 USD provavgift · 10–15 dagars ledtid (fri digital korrektur inom 12 timmar).'
    ],
    h3Table: (sku) => `3. ${sku} Kostnadsmatris för logotypmärkning`,
    thOption: 'Anpassningsläge', thMoq: 'MOQ', thSetup: 'Start- / Schablonavgift', thUnitAdd: 'Tillägg per enhet', thLead: 'Produktionstid',
    r1: ['Blankt lager (Färdig form)', '50 st', '$0,00', 'Ingår i baspriset', '3–5 arbetsdagar'],
    r2: ['50W Fiberlasergravyr', '100 st', '$0,00', '+$0,15 – $0,30 / st', '10–15 arbetsdagar'],
    r3: ['Screentryck flerfärg', '100 st', '$35 / färg', '+$0,10 / färg / st', '10–15 arbetsdagar'],
    r4: ['Djup lasergravyr + färgfyllning', '200–300 st', '$0,00', '+$0,35 – $0,60 / st', '12–15 arbetsdagar']
  },
  da: {
    secTitle: (sku, title) => `${sku} ${title} — Mekanisk opbygning, logomærkning & emballageguide`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Fremstillet i vores produktionsklare støbeform #${rowId} ($0,00 værktøjsgebyr) er ${sku} ${title} bygget af ${mat} med dimensionerne ${size} og en nettovægt på ${weight}. Hver enhed kontrolleres på vores eksporthub i Fuzhou før afsendelse.`,
    h3Mech: '1. Intern haptisk & akustisk mekanikkalibrering',
    pMech: (mag, acc, colors) =>
      `Det interne system kombinerer ${mag} med ${acc}. Alle neodymmagnetlommer er mekanisk låst og forseglet med strukturel epoxy (>22 MPa) i henhold til US CPSC 16 CFR 1262 og EU RoHS/REACH. Standardfinish: ${colors}.`,
    h3Logo: '2. Brugerdefineret logomærkning & Private Label ($0 formgebyr)',
    logoBullets: [
      '<strong>50W MOPA-fiberlasergravering (Monokrom):</strong> MOQ 100 stk. · $0,00 opstartsgebyr · +$0,15–$0,30/stk. Permanent, slidstærk metalgravering.',
      '<strong>Serigrafi (Flerfarvet logo):</strong> MOQ 100 stk. · $35 USD rammegebyr pr. farve (1 farve = $35, 2 farver = $70, 3 farver = $105) · +$0,10 USD pr. farve pr. stk.',
      '<strong>Dyb lasergravering + farvefyld:</strong> MOQ 200–300 stk. · $0,00 laser-setup · +$0,35–$0,60/stk. Dybgraveret fordybning fyldt med slidstærk emaljefarve.',
      '<strong>Prøveproduktion med eget logo:</strong> $80–$150 USD prøvegebyr · 10–15 dages leveringstid (gratis digital korrektur inden for 12 timer).'
    ],
    h3Table: (sku) => `3. ${sku} Prisoversigt for logomærkning`,
    thOption: 'Tilpasningstilstand', thMoq: 'MOQ', thSetup: 'Opstarts- / Rammegebyr', thUnitAdd: 'Tillæg pr. stk.', thLead: 'Produktionstid',
    r1: ['Neutralt lager (Klar form)', '50 stk.', '$0,00', 'Inkluderet i basispris', '3–5 hverdage'],
    r2: ['50W Fiberlasergravering', '100 stk.', '$0,00', '+$0,15 – $0,30 / stk.', '10–15 hverdage'],
    r3: ['Serigrafi flerfarvet', '100 stk.', '$35 / farve', '+$0,10 / farve / stk.', '10–15 hverdage'],
    r4: ['Dyb lasergravering + farvefyld', '200–300 stk.', '$0,00', '+$0,35 – $0,60 / stk.', '12–15 hverdage']
  },
  no: {
    secTitle: (sku, title) => `${sku} ${title} — Mekanisk oppbygning, logomerking & emballasjeguide`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Produsert i vår produksjonsklare støpeform #${rowId} ($0,00 verktøygebyr), er ${sku} ${title} laget av ${mat} med målene ${size} og en nettovekt på ${weight}. Hver enhet kontrolleres ved vårt eksporthub i Fuzhou før utsendelse.`,
    h3Mech: '1. Intern haptisk & akustisk mekanikkalibrering',
    pMech: (mag, acc, colors) =>
      `Det interne drivsystemet kombinerer ${mag} med ${acc}. Alle neodymmagnetlommer er mekanisk låst og forseglet med strukturell epoksy (>22 MPa) i samsvar med US CPSC 16 CFR 1262 og EU RoHS/REACH. Standardfinish: ${colors}.`,
    h3Logo: '2. Egendefinert logomerking & Private Label ($0 formgebyr)',
    logoBullets: [
      '<strong>50W MOPA-fiberlasergravering (Monokrom):</strong> MOQ 100 stk. · $0,00 oppstartsgebyr · +$0,15–$0,30/stk. Permanent og slitesterk metallgravering.',
      '<strong>Silketrykk (Flerfarget logo):</strong> MOQ 100 stk. · $35 USD rammegebyr per farge (1 farge = $35, 2 farger = $70, 3 farger = $105) · +$0,10 USD per farge per stk.',
      '<strong>Dyp lasergravering + fargefyll:</strong> MOQ 200–300 stk. · $0,00 laser-setup · +$0,35–$0,60/stk. Dypgravert fordypning fylt med slitesterk fargeemalje.',
      '<strong>Førproduksjonsprøve med eget logo:</strong> $80–$150 USD prøvegebyr · 10–15 dagers leveringstid (gratis digital korrektur innen 12 timer).'
    ],
    h3Table: (sku) => `3. ${sku} Prisoversikt for logomerking`,
    thOption: 'Tilpasningsmodus', thMoq: 'MOQ', thSetup: 'Oppstarts- / Rammegebyr', thUnitAdd: 'Tillegg per stk.', thLead: 'Produksjonstid',
    r1: ['Nøytralt lager (Klar form)', '50 stk.', '$0,00', 'Inkludert i basispris', '3–5 virkedager'],
    r2: ['50W Fiberlasergravering', '100 stk.', '$0,00', '+$0,15 – $0,30 / stk.', '10–15 virkedager'],
    r3: ['Silketrykk flerfarget', '100 stk.', '$35 / farge', '+$0,10 / farge / stk.', '10–15 virkedager'],
    r4: ['Dyp lasergravering + fargefyll', '200–300 stk.', '$0,00', '+$0,35 – $0,60 / stk.', '12–15 virkedager']
  },
  fi: {
    secTitle: (sku, title) => `${sku} ${title} — Mekaaninen rakenne, logomerkkaus & pakkausopas`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Valmistettu valmiilla sarjatuotantomuotillamme #${rowId} ($0,00 muottikulu), ${sku} ${title} on koneistettu materiaalista ${mat}, ulkomitat ${size} ja nettopaino ${weight}. Jokainen yksikkö tarkastetaan Fuzhoun vientikeskuksessamme ennen lähetystä.`,
    h3Mech: '1. Sisäisen haptisen & akustisen koneiston kalibrointi',
    pMech: (mag, acc, colors) =>
      `Sisäinen koneisto yhdistää ${mag} sekä ${acc}. Kaikki neodyymimagneettipesät on lukittu mekaanisesti ja varmistettu rakenne-epoksilla (>22 MPa) US CPSC 16 CFR 1262- ja EU RoHS/REACH -vaatimusten mukaisesti. Vakiopinnat: ${colors}.`,
    h3Logo: '2. Räätälöity logomerkkaus & Private Label ($0 muottimaksu)',
    logoBullets: [
      '<strong>50W MOPA-kuitulaserkaiverrus (Yksivärinen):</strong> MOQ 100 kpl · $0,00 aloitusmaksu · +$0,15–$0,30/kpl. Pysyvä ja kulumaton metallikaiverrus.',
      '<strong>Silkkipainatus (Monivärinen logo):</strong> MOQ 100 kpl · $35 USD seulamaksu per väri (1 väri = $35, 2 väriä = $70, 3 väriä = $105) · +$0,10 USD per väri per kpl.',
      '<strong>Syvälaserkaiverrus + väritäyttö:</strong> MOQ 200–300 kpl · $0,00 laser-setup · +$0,35–$0,60/kpl. Syväkaiverrettu ura täytettynä kestävällä väriemalilla.',
      '<strong>Esituotantomalli omalla logolla:</strong> $80–$150 USD mallimaksu · 10–15 päivän toimitusaika (ilmainen digitaalinen vedos 12 tunnissa).'
    ],
    h3Table: (sku) => `3. ${sku} Logomerkkauksen ja pakkauksen hintataulukko`,
    thOption: 'Merkkaus- / tilaustapa', thMoq: 'MOQ', thSetup: 'Aloitus- / seulamaksu', thUnitAdd: 'Lisähinta / kpl', thLead: 'Tuotantoaika',
    r1: ['Ilman merkkausta (Valmis muotti)', '50 kpl', '$0,00', 'Sisältyy perushintaan', '3–5 arkipäivää'],
    r2: ['50W Kuitulaserkaiverrus', '100 kpl', '$0,00', '+$0,15 – $0,30 / kpl', '10–15 arkipäivää'],
    r3: ['Silkkipainatus moniväri', '100 kpl', '$35 / väri', '+$0,10 / väri / kpl', '10–15 arkipäivää'],
    r4: ['Syvälaserkaiverrus + väritäyttö', '200–300 kpl', '$0,00', '+$0,35 – $0,60 / kpl', '12–15 arkipäivää']
  },
  pl: {
    secTitle: (sku, title) => `${sku} ${title} — Konstrukcja Mechaniczna, Znakowanie Logo i Opakowania`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Wyprodukowany przy użyciu naszej gotowej formy seryjnej #${rowId} (0,00 $ kosztów oprzyrządowania), model ${sku} ${title} jest wykonany z materiału ${mat} o wymiarach ${size} i masie netto ${weight}. Każda sztuka przechodzi kontrolę jakości w naszym centrum eksportowym w Fuzhou.`,
    h3Mech: '1. Kalibracja Wewnętrznego Mechanizmu Haptycznego i Akustycznego',
    pMech: (mag, acc, colors) =>
      `Wewnętrzny układ napędowy łączy ${mag} oraz ${acc}. Wszystkie gniazda magnesów neodymowych są mechanicznie zablokowane i klejone żywicą epoksydową (>22 MPa) zgodnie z normami US CPSC 16 CFR 1262 oraz EU RoHS/REACH. Standardowe wykończenia: ${colors}.`,
    h3Logo: '2. Personalizacja Logo i Opcje Private Label (0 $ za Formę)',
    logoBullets: [
      '<strong>Grawerowanie Laserem Fibre MOPA 50W (Monochromatyczne):</strong> MOQ 100 szt. · 0,00 $ opłaty przygotowawczej · +0,15–0,30 $/szt. Trwałe znakowanie w metalu.',
      '<strong>Sitodruk (Kolorowe Logo):</strong> MOQ 100 szt. · 35 $ USD opłaty za matrycę na kolor (1 kolor = 35 $, 2 kolory = 70 $, 3 kolory = 105 $) · +0,10 $ USD za kolor na sztukę.',
      '<strong>Głębokie Grawerowanie Laserowe + Wypełnienie Kolorem:</strong> MOQ 200–300 szt. · 0,00 $ setup laserowy · +0,35–0,60 $/szt. Głęboki grawer wypełniony trwałą emalią.',
      '<strong>Próbka Przedprodukcyjna z Własnym Logo:</strong> 80–150 USD koszt próbki · 10–15 dni realizacji (darmowa wizualizacja cyfrowa w 12h).'
    ],
    h3Table: (sku) => `3. Tabela Kosztów Personalizacji — ${sku}`,
    thOption: 'Tryb Personalizacji', thMoq: 'MOQ', thSetup: 'Opłata Wstępna / Matryca', thUnitAdd: 'Dopłata Jednostkowa', thLead: 'Czas Produkcji',
    r1: ['Wersja Czysta (Gotowa Forma)', '50 szt.', '0,00 $', 'Wliczone w cenę bazową', '3–5 dni roboczych'],
    r2: ['Grawerowanie Laserem Fibre 50W', '100 szt.', '0,00 $', '+0,15 $ – 0,30 $ / szt.', '10–15 dni roboczych'],
    r3: ['Sitodruk Wielokolorowy', '100 szt.', '35 $ / kolor', '+0,10 $ / kolor / szt.', '10–15 dni roboczych'],
    r4: ['Głęboki Laser + Wypełnienie Kolorem', '200–300 szt.', '0,00 $', '+0,35 $ – 0,60 $ / szt.', '12–15 dni roboczych']
  },
  cs: {
    secTitle: (sku, title) => `${sku} ${title} — Mechanická konstrukce, značení loga a balení`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Model ${sku} ${title}, vyráběný na naší hotové sériové formě #${rowId} ($0,00 náklady na formu), je zhotoven z materiálu ${mat} s rozměry ${size} a čistou hmotností ${weight}. Každý kus je před odesláním kontrolován v našem exportním centru ve Fuzhou.`,
    h3Mech: '1. Kalibrace vnitřního haptického a akustického mechanismu',
    pMech: (mag, acc, colors) =>
      `Vnitřní mechanismus kombinuje ${mag} a ${acc}. Všechna lůžka neodymových magnetů jsou mechanicky zajištěna a zalepena konstrukčním epoxidem (>22 MPa) v souladu s normami US CPSC 16 CFR 1262 a EU RoHS/REACH. Standardní povrchy: ${colors}.`,
    h3Logo: '2. Zakázkový branding loga a Private Label ($0 poplatek za formu)',
    logoBullets: [
      '<strong>50W MOPA vláknový laser (Monochromatický):</strong> MOQ 100 ks · $0,00 příprava · +$0,15–$0,30/ks. Trvalý, nesmazatelný laserový popis do kovu.',
      '<strong>Sítotisk (Barevné logo):</strong> MOQ 100 ks · $35 USD šablona za barvu (1 barva = $35, 2 barvy = $70, 3 barvy = $105) · +$0,10 USD za barvu a kus.',
      '<strong>Hluboké laserové gravírování + barevná výplň:</strong> MOQ 200–300 ks · $0,00 laser setup · +$0,35–$0,60/ks. Hluboký gravír vyplněný odolným barevným smaltem.',
      '<strong>Předvýrobní vzorek s vlastním logem:</strong> $80–$150 USD poplatek za vzorek · doba výroby 10–15 dní (digitální náhled zdarma do 12 hodin).'
    ],
    h3Table: (sku) => `3. Přehled nákladů na personalizaci — ${sku}`,
    thOption: 'Režim personalizace', thMoq: 'MOQ', thSetup: 'Příprava / Šablona', thUnitAdd: 'Příplatek za kus', thLead: 'Doba výroby',
    r1: ['Bez potisku (Hotová forma)', '50 ks', '$0,00', 'V ceně základní hladiny', '3–5 pracovních dnů'],
    r2: ['50W Vláknový laser', '100 ks', '$0,00', '+$0,15 – $0,30 / ks', '10–15 pracovních dnů'],
    r3: ['Vícebarevný sítotisk', '100 ks', '$35 / barva', '+$0,10 / barva / ks', '10–15 pracovních dnů'],
    r4: ['Hluboký laser + barevná výplň', '200–300 ks', '$0,00', '+$0,35 – $0,60 / ks', '12–15 pracovních dnů']
  },
  ru: {
    secTitle: (sku, title) => `${sku} ${title} — Механическая конструкция, нанесение логотипа и упаковка`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Производимый на базе нашей готовой серийной пресс-формы #${rowId} ($0.00 за оснастку), артикул ${sku} ${title} выполнен из материала ${mat} с точными габаритами ${size} и сбалансированным весом ${weight}. Каждое изделие проходит контроль качества в экспортном хабе Фучжоу.`,
    h3Mech: '1. Калибровка внутреннего тактильного и акустического механизма',
    pMech: (mag, acc, colors) =>
      `Внутренняя система объединяет ${mag} и ${acc}. Все посадочные места неодимовых магнитов механически зафиксированы и проклеены конструкционным эпоксидным составом (>22 МПа) в соответствии с US CPSC 16 CFR 1262 и EU RoHS/REACH. Стандартные покрытия: ${colors}.`,
    h3Logo: '2. Брендирование и выпуск под собственной маркой ($0 за пресс-форму)',
    logoBullets: [
      '<strong>Оптоволоконная лазерная гравировка 50W MOPA (Монохром):</strong> MOQ 100 шт. · $0.00 настройка · +$0.15–$0.30/шт. Вечная гравировка на металле.',
      '<strong>Шелкография (Цветной логотип):</strong> MOQ 100 шт. · $35 USD печатная форма за цвет (1 цвет = $35, 2 цвета = $70, 3 цвета = $105) · +$0.10 USD за цвет на штуку.',
      '<strong>Глубокая лазерная гравировка + заливка эмалью:</strong> MOQ 200–300 шт. · $0.00 настройка лазера · +$0.35–$0.60/шт. Глубокая выборка металла с последующей заливкой стойкой цветной эмалью.',
      '<strong>Предсерийный образец с логотипом:</strong> $80–$150 USD стоимость образца · 10–15 дней (бесплатный 3D-макет за 12 часов).'
    ],
    h3Table: (sku) => `3. Матрица стоимости брендирования — ${sku}`,
    thOption: 'Вариант брендирования', thMoq: 'MOQ', thSetup: 'Настройка / Матрица', thUnitAdd: 'Доплата за шт.', thLead: 'Срок производства',
    r1: ['Без логотипа (Готовая форма)', '50 шт.', '$0.00', 'Включено в базовую цену', '3–5 рабочих дней'],
    r2: ['Лазерная гравировка 50W', '100 шт.', '$0.00', '+$0.15 – $0.30 / шт.', '10–15 рабочих дней'],
    r3: ['Многоцветная шелкография', '100 шт.', '$35 / цвет', '+$0.10 / цвет / шт.', '10–15 рабочих дней'],
    r4: ['Глубокий лазер + заливка цветом', '200–300 шт.', '$0.00', '+$0.35 – $0.60 / шт.', '12–15 рабочих дней']
  },
  ja: {
    secTitle: (sku, title) => `${sku} ${title} — 内部機構設計・カスタムロゴ名入れ・OEMパッケージ仕様ガイド`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `当社の既存量産金型 #${rowId}（初期金型代 $0.00）を使用して製造される「${sku} ${title}」は、${mat}を採用し、外寸 ${size}・単体重量 ${weight} に精密設計されています。全製品が福州工業区輸出ハブにて出荷前検品を経て世界各国へDDP発送されます。`,
    h3Mech: '1. 内部ハプティック（触覚）＆音響機構のキャリブレーション',
    pMech: (mag, acc, colors) =>
      `内部駆動系には ${mag} と ${acc} を搭載。すべてのネオジム磁石ポケットおよびベアリング座面は機械的ロックと工業用構造エポキシ接着剤（せん断強度 >22 MPa）で二重固定され、米国 CPSC 16 CFR Part 1262 落下試験および EU RoHS/REACH 基準をクリアしています。標準表面仕上げ：${colors}。`,
    h3Logo: '2. カスタムロゴ名入れ・プライベートブランド（PB）対応（金型代 $0）',
    logoBullets: [
      '<strong>50W MOPAファイバーレーザー刻印（単色・金属コントラスト）：</strong> 最小ロット 100個 · 版代 $0.00 · 単価 +$0.15〜$0.30/個。金属表面をミクロン単位で彫刻するため半永久的に消えません。',
      '<strong>シルクスクリーン印刷（標準カラーロゴ）：</strong> 最小ロット 100個 · 版代 1色につき $35 USD（1色＝$35、2色＝$70、3色＝$105） · 印刷単価 1色につき +$0.10 USD/個（例：5色ロゴ＝+$0.50/個）。',
      '<strong>深彫りレーザー彫刻＋色入れ加工（凹部エナメル充填）：</strong> 最小ロット 200〜300個 · レーザー初期費 $0.00 · 単価 +$0.35〜$0.60/個。金属に一定の深さの溝をレーザー彫刻した上でカラー塗料を充填する高耐久仕様です。',
      '<strong>カスタムロゴ試作サンプル製作：</strong> サンプル費用 $80〜$150 USD · 製作期間 10〜15日（試作前に12時間以内の無料デジタル配置校正をご提供）。'
    ],
    h3Table: (sku) => `3. ${sku} ロゴ名入れ・OEM加工費用リファレンス表`,
    thOption: '加工・発注モード', thMoq: '最小ロット (MOQ)', thSetup: '版代・初期セットアップ費', thUnitAdd: '1個あたり追加単価', thLead: '量産納期目安',
    r1: ['ロゴなし無地在庫（既存金型）', '50個', '$0.00', '基本卸売単価に含む', '3〜5営業日'],
    r2: ['50Wファイバーレーザー刻印', '100個', '$0.00', '+$0.15 〜 $0.30 / 個', '10〜15営業日'],
    r3: ['シルクスクリーン多色印刷', '100個', '$35 / 色', '+$0.10 / 色 / 個', '10〜15営業日'],
    r4: ['深彫りレーザー＋色入れ加工', '200〜300個', '$0.00', '+$0.35 〜 $0.60 / 個', '12〜15営業日']
  },
  ko: {
    secTitle: (sku, title) => `${sku} ${title} — 내부 기구 설계, 맞춤 로고 각인 및 패키징 가이드`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `당사의 검증된 기성 양산 금형 #${rowId}(초기 금형비 $0.00)로 제작되는 ${sku} ${title} 모델은 ${mat} 소재를 사용하여 외형 치수 ${size}, 순중량 ${weight}으로 정밀 설계되었습니다. 모든 제품은 푸저우 수출 물류 허브에서 전수 검수 후 출고됩니다.`,
    h3Mech: '1. 내부 햅틱 및 음향 메커니즘 캘리브레이션',
    pMech: (mag, acc, colors) =>
      `내부 구동계는 ${mag} 및 ${acc} 구성을 결합했습니다. 모든 네오디뮴 자석 포켓과 베어링 시트는 기계식 나사 잠금 및 고강도 에폭시(>22 MPa)로 이중 고정되어 미국 CPSC 16 CFR 1262 낙하 테스트와 EU RoHS/REACH 규격을 완벽히 충족합니다. 표준 표면 마감: ${colors}.`,
    h3Logo: '2. 맞춤 브랜드 로고 각인 및 PB 제작 옵션 (금형비 $0)',
    logoBullets: [
      '<strong>50W MOPA 파이버 레이저 각인 (단색 메탈 각인):</strong> MOQ 100개 · 초기 세팅비 $0.00 · 개당 +$0.15~$0.30. 금속 표면을 미세 식각하여 반영구적으로 지워지지 않습니다.',
      '<strong>실크스크린 인쇄 (표준 컬러 로고):</strong> MOQ 100개 · 색상당 판비 $35 USD (1도=$35, 2도=$70, 3도=$105) · 개당 색상당 +$0.10 USD 추가 (예: 5도 컬러 로고 = 개당 +$0.50).',
      '<strong>심층 레이저 각인 + 컬러 필링 (음각 에나멜 채움):</strong> MOQ 200~300개 · 레이저 세팅비 $0.00 · 개당 +$0.35~$0.60. 일정 깊이로 레이저 음각 가공 후 컬러 도료를 채워 넣는 고급 사양입니다.',
      '<strong>맞춤 로고 사전 샘플 제작:</strong> 샘플비 $80–$150 USD · 제작 기간 10–15일 (샘플 제작 전 12시간 이내 무료 디지털 시안 제공).'
    ],
    h3Table: (sku) => `3. ${sku} 맞춤 로고 브랜딩 및 제작 비용 안내표`,
    thOption: '커스텀 / 주문 방식', thMoq: '최소 수량 (MOQ)', thSetup: '판비 / 초기 세팅비', thUnitAdd: '개당 추가 단가', thLead: '양산 소요 기간',
    r1: ['무지 기본 재고 (기성 금형)', '50개', '$0.00', '기본 단가에 포함', '3–5 영업일'],
    r2: ['50W 파이버 레이저 각인', '100개', '$0.00', '+$0.15 – $0.30 / 개', '10–15 영업일'],
    r3: ['실크스크린 다색 로고 인쇄', '100개', '$35 / 색상', '+$0.10 / 색상 / 개', '10–15 영업일'],
    r4: ['심층 레이저 음각 + 컬러 필링', '200–300개', '$0.00', '+$0.35 – $0.60 / 개', '12–15 영업일']
  },
  id: {
    secTitle: (sku, title) => `${sku} ${title} — Arsitektur Mekanis, Kustomisasi Logo & Panduan Kemasan`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `Diproduksi menggunakan cetakan seri siap pakai #${rowId} ($0,00 biaya cetakan), ${sku} ${title} dibuat dari ${mat} dengan dimensi presisi ${size} dan berat bersih ${weight}. Setiap unit diperiksa di pusat logistik ekspor Fuzhou kami sebelum pengiriman.`,
    h3Mech: '1. Kalibrasi Mekanisme Internal Haptik & Akustik',
    pMech: (mag, acc, colors) =>
      `Sistem penggerak internal memadukan ${mag} dengan ${acc}. Semua dudukan magnet neodymium dikunci secara mekanis dan direkatkan dengan epoksi struktural (>22 MPa) sesuai standar US CPSC 16 CFR 1262 dan EU RoHS/REACH. Finishing standar: ${colors}.`,
    h3Logo: '2. Opsi Kustomisasi Logo & Private Label ($0 Biaya Mold)',
    logoBullets: [
      '<strong>Grafir Laser Fiber MOPA 50W (Monokrom):</strong> MOQ 100 pcs · biaya setup $0,00 · +$0,15–$0,30/pc. Grafir permanen pada permukaan logam yang tidak akan luntur.',
      '<strong>Sablon Silk-Screen (Logo Berwarna Standar):</strong> MOQ 100 pcs · biaya screen $35 USD per warna (1 warna = $35, 2 warna = $70, 3 warna = $105) · +$0,10 USD per warna per pc.',
      '<strong>Grafir Laser Dalam + Isi Warna (Enamel Cekung):</strong> MOQ 200–300 pcs · setup laser $0,00 · +$0,35–$0,60/pc. Ukiran laser dengan kedalaman khusus lalu diisi cat warna tahan aus.',
      '<strong>Sampel Pra-Produksi Logo Kustom:</strong> biaya sampel $80–$150 USD · waktu pengerjaan 10–15 hari (mockup digital gratis dalam 12 jam).'
    ],
    h3Table: (sku) => `3. Tabel Biaya Kustomisasi Logo — ${sku}`,
    thOption: 'Metode Kustomisasi', thMoq: 'MOQ', thSetup: 'Biaya Screen / Setup', thUnitAdd: 'Tambahan Biaya / Pc', thLead: 'Waktu Produksi',
    r1: ['Stok Polos (Cetakan Siap Pakai)', '50 pcs', '$0,00', 'Termasuk harga dasar', '3–5 hari kerja'],
    r2: ['Grafir Laser Fiber 50W', '100 pcs', '$0,00', '+$0,15 – $0,30 / pc', '10–15 hari kerja'],
    r3: ['Sablon Silk-Screen Multi-Warna', '100 pcs', '$35 / warna', '+$0,10 / warna / pc', '10–15 hari kerja'],
    r4: ['Laser Dalam + Isi Warna', '200–300 pcs', '$0,00', '+$0,35 – $0,60 / pc', '12–15 hari kerja']
  },
  ar: {
    secTitle: (sku, title) => `${sku} ${title} — الهندسة الميكانيكية وتخصيص الشعار ودليل التغليف`,
    p1: (sku, title, mat, size, weight, rowId) =>
      `يتم تصنيع الموديل ${sku} ${title} باستخدام قالب الإنتاج الجاهز رقم #${rowId} (0.00 دولار تكلفة القالب) من مادة ${mat} بأبعاد دقيقة تبلغ ${size} ووزن صافٍ يبلغ ${weight}. تخضع كل قطعة لفحص الجودة في مركز التصدير اللوجستي في فوتشو قبل الشحن الدولي.`,
    h3Mech: '1. معايرة الآلية الداخلية اللمسية والصوتية',
    pMech: (mag, acc, colors) =>
      `يدمج النظام الداخلي ${mag} مع ${acc}. جميع حجرات مغناطيس النيوديميوم مؤمنة ميكانيكياً ومثبتة بإيبوكسي هيكلي فائق القوة (>22 ميجاباسكال) لضمان الامتثال لمعيار US CPSC 16 CFR 1262 و EU RoHS/REACH. التشطيبات القياسية: ${colors}.`,
    h3Logo: '2. خيارات حفر وطباعة الشعار والعلامة الخاصة (0$ رسوم قالب)',
    logoBullets: [
      '<strong>حفر بالليزر الليفي 50W MOPA (أحادي اللون):</strong> الحد الأدنى 100 قطعة · 0.00$ رسوم إعداد · +0.15 إلى 0.30$/قطعة. وسم دائم في المعدن لا يبهت أبداً.',
      '<strong>الطباعة الحريرية Silk-Screen (شعار ملون):</strong> الحد الأدنى 100 قطعة · 35$ رسوم شاشة لكل لون (لون واحد = 35$، لونان = 70$، 3 ألوان = 105$) · +0.10$ لكل لون لكل قطعة.',
      '<strong>حفر ليزر عميق + تعبئة الألوان (مينا غائرة):</strong> الحد الأدنى 200–300 قطعة · 0.00$ إعداد ليزر · +0.35 إلى 0.60$/قطعة. حفر بعمق محدد بالليزر ثم تعبئة التجويف بطلاء ملون متين.',
      '<strong>عينة ما قبل الإنتاج بشعار مخصص:</strong> رسوم العينة 80–150 دولاراً أمريكياً · مدة التصنيع 10–15 يوماً (مع نموذج رقمي مجاني خلال 12 ساعة).'
    ],
    h3Table: (sku) => `3. جدول تكاليف تخصيص الشعار — ${sku}`,
    thOption: 'خيار التخصيص', thMoq: 'الحد الأدنى (MOQ)', thSetup: 'رسوم الإعداد / الشاشة', thUnitAdd: 'التكلفة الإضافية للقطعة', thLead: 'مدة الإنتاج',
    r1: ['مخزون بدون شعار (قالب جاهز)', '50 قطعة', '$0.00', 'مشمول في السعر الأساسي', '3–5 أيام عمل'],
    r2: ['حفر ليزر فايبر 50W', '100 قطعة', '$0.00', '+$0.15 – $0.30 / قطعة', '10–15 يوم عمل'],
    r3: ['طباعة حريرية متعددة الألوان', '100 قطعة', '$35 / لون', '+$0.10 / لون / قطعة', '10–15 يوم عمل'],
    r4: ['حفر ليزر عميق + تعبئة لون', '200–300 قطعة', '$0.00', '+$0.35 – $0.60 / قطعة', '12–15 يوم عمل']
  }
};

export function getRelatedInsightSlugsForProduct(p: any): string[] {
  const slugs: string[] = [];
  const titleLower = String(p.title || '').toLowerCase();
  const magLower = String(p.magnetsEn || '').toLowerCase();
  const accLower = String(p.accessoriesEn || '').toLowerCase();
  const colLower = String(p.colorsEn || '').toLowerCase();

  if (p.tuningFork) {
    slugs.push('acoustic-tuning-fork-fidget-slider-engineering-trend');
  }
  if (/poker|ace|king|joker|spade|card|mahjong|casino|dice/i.test(titleLower)) {
    slugs.push('poker-card-mahjong-tile-casino-metal-magnetic-fidget-sliders-guide');
  }
  if (/3-layer|triple|48|56|24-magnet|20-magnet/i.test(titleLower + ' ' + magLower)) {
    slugs.push('triple-layer-stacked-high-density-48-56-magnet-fidget-sliders');
  }
  if (/opener|keychain|carabiner|luminous|glow|tritium/i.test(titleLower + ' ' + accLower)) {
    slugs.push('multi-function-bottle-opener-keychain-luminous-tritium-edc-fidgets');
  }
  if (/mecha|armor|skull|cross|dragon|sword|biscuit|toast|corgi|cheese|owl|pirate|shield|relief/i.test(titleLower)) {
    slugs.push('3d-mecha-armor-gothic-skull-relief-sculpted-metal-edc-fidget-guide');
  }
  if (/roller|gyro|ring|top|pei/i.test(titleLower)) {
    slugs.push('quiet-office-executive-desk-fidget-toys-decibel-acoustic-guide');
  }

  switch (p.primaryCollection) {
    case 'magnetic-fidget-sliders':
      slugs.push('unlimited-free-floating-ptfe-vs-mechanical-track-fidget-sliders');
      slugs.push('n35-vs-n52-neodymium-magnet-haptic-feel-guide');
      break;
    case 'metal-fidget-spinners-gyros':
      slugs.push('r188-bearing-metal-fidget-spinners-desktop-gyro-engineering-guide');
      slugs.push('ptfe-teflon-tape-ceramic-beads-r188-bearing-fidget-maintenance-guide');
      break;
    case 'mechanical-edc-fidgets':
      slugs.push('multi-action-mechanical-ratchet-bolt-action-edc-fidget-guide');
      slugs.push('ptfe-teflon-tape-ceramic-beads-r188-bearing-fidget-maintenance-guide');
      break;
    case 'haptic-fidget-coins':
    case 'edc-gourds-hand-pieces':
    case 'magnetic-fidget-rings':
      slugs.push('haptic-fidget-coins-edc-gourds-magnetic-spinner-rings-guide');
      slugs.push('quiet-office-executive-desk-fidget-toys-decibel-acoustic-guide');
      break;
    default:
      slugs.push('n35-vs-n52-neodymium-magnet-haptic-feel-guide');
  }

  if (p.cncExotic) {
    slugs.push('zinc-alloy-die-casting-vs-cnc-stainless-steel-edc-cost');
  } else if (p.logoReady) {
    slugs.push('corporate-executive-gifts-trade-show-vip-swag-metal-fidget-guide');
    slugs.push('fiber-laser-engraving-vs-uv-printing-metal-fidget-logos');
  } else if (/pvd|stonewash|antique|anodiz|bronze/i.test(colLower)) {
    slugs.push('pvd-coating-hard-anodizing-stonewash-antique-metal-fidget-finishes');
  }

  slugs.push('custom-eva-zipper-cases-tin-boxes-metal-fidget-packaging-guide');
  slugs.push('international-ddp-shipping-hs-codes-iata-pi953-metal-fidget-import-guide');
  slugs.push('us-cpsc-16-cfr-1262-magnet-fidget-safety-compliance');
  return Array.from(new Set(slugs)).slice(0, 5);
}

const INSIGHT_DEFAULT_TITLES: Record<string, string> = {
  'acoustic-tuning-fork-fidget-slider-engineering-trend': 'Acoustic Tuning Fork Fidget Sliders: Resonance Chamber Engineering & Wholesale Guide',
  'fiber-laser-engraving-vs-uv-printing-metal-fidget-logos': 'Fiber Laser Engraving vs. Silk-Screen & Deep Color Fill on Metal EDC Fidgets',
  'n35-vs-n52-neodymium-magnet-haptic-feel-guide': 'N35 vs. N45 vs. N52 Neodymium Magnets in Metal Fidget Sliders: Tactile Force Guide',
  'us-cpsc-16-cfr-1262-magnet-fidget-safety-compliance': 'US CPSC 16 CFR 1262 Magnet Safety Standard & RoHS/REACH Compliance Guide',
  'zero-tooling-ready-mold-private-label-fidget-sop': 'How to Launch a Private Label Metal Fidget Brand in 10 Days ($0 Tooling SOP)',
  'zinc-alloy-die-casting-vs-cnc-stainless-steel-edc-cost': 'Die-Cast Zinc Alloy vs. CNC 304/316 Stainless Steel & PEI (Ultem): Cost Breakdown',
  'r188-bearing-metal-fidget-spinners-desktop-gyro-engineering-guide': 'R188 Bearing Physics & Multi-Axis Desktop Gyro Spinners: Wholesale Engineering Guide',
  'multi-action-mechanical-ratchet-bolt-action-edc-fidget-guide': 'Multi-Action Mechanical EDC Fidgets: Spring Ratchets, Bolt-Action & Planetary Gears',
  'haptic-fidget-coins-edc-gourds-magnetic-spinner-rings-guide': 'Haptic Fidget Coins, Baoding EDC Gourds & Magnetic Spinner Rings: Ergonomics Guide',
  'custom-eva-zipper-cases-tin-boxes-metal-fidget-packaging-guide': 'Custom EVA Zipper Cases, Windowed Tin Boxes & Collector Gift Packaging Guide',
  'unlimited-free-floating-ptfe-vs-mechanical-track-fidget-sliders': 'Unlimited Free-Floating PTFE Magnetic Sliders vs. Captive Mechanical Track Sliders',
  'quiet-office-executive-desk-fidget-toys-decibel-acoustic-guide': 'Quiet Office & Executive Desk Fidget Toys: Decibel (dBA) Acoustic Ratings Guide',
  'triple-layer-stacked-high-density-48-56-magnet-fidget-sliders': '3-Layer Stacked & High-Density 48/56-Magnet Fidget Sliders: Haptic Matrix Engineering',
  'pvd-coating-hard-anodizing-stonewash-antique-metal-fidget-finishes': 'PVD Coating, Type-III Hard Anodizing, Stonewash & Antique Patina Finishing Guide',
  'corporate-executive-gifts-trade-show-vip-swag-metal-fidget-guide': 'Corporate Executive Gifts, Tech Trade Show VIP Swag & Client Onboarding Fidget Guide',
  'poker-card-mahjong-tile-casino-metal-magnetic-fidget-sliders-guide': 'Poker Card, Mahjong Tile & Casino Metal Magnetic Fidget Sliders: Enamel & Retail Guide',
  'multi-function-bottle-opener-keychain-luminous-tritium-edc-fidgets': 'Multi-Function 2-in-1 Bottle Opener, Keychain & Luminous Night-Glow Metal EDC Fidgets',
  '3d-mecha-armor-gothic-skull-relief-sculpted-metal-edc-fidget-guide': '3D Mecha Armor, Gothic Skull, Mythic Dragon & Pop-Art Relief Sculpted EDC Fidgets',
  'ptfe-teflon-tape-ceramic-beads-r188-bearing-fidget-maintenance-guide': 'PTFE Teflon Friction Tape, Si3N4 Ceramic Beads & R188 Bearing Maintenance Guide',
  'international-ddp-shipping-hs-codes-iata-pi953-metal-fidget-import-guide': 'International DDP Shipping, HS Codes (9503.00) & IATA PI-953 Magnetic Air Freight Guide'
};

function buildLocalizedEditorialHtml(
  p: any,
  locTitle: string,
  locMat: string,
  locMag: string,
  locAcc: string,
  locColors: string,
  lang: SupportedLanguage
): string {
  const c = EDITORIAL_COPY[lang] || EDITORIAL_COPY.en;
  const t = useTranslations(lang);
  const insightSlugs = getRelatedInsightSlugsForProduct(p);
  const insightLinksHtml = insightSlugs
    .map((slug) => {
      const meta = localizeInsightMeta({ slug, title: INSIGHT_DEFAULT_TITLES[slug] || slug, summary: '', category: '' }, lang);
      const href = getLocalizedPath(`/insights/${slug}`, lang);
      return `<li><a href="${href}">${meta.title}</a></li>`;
    })
    .join('');
  const colHref = getLocalizedPath(`/collections/${p.primaryCollection}`, lang);
  const colName = t(`col.${p.primaryCollection}.name` as any);

  return `
    <h2>${c.secTitle(p.skuDisplay, locTitle)}</h2>
    <p>${c.p1(p.skuDisplay, locTitle, locMat, p.size, p.weight, p.rowId)}</p>
    <h3>${c.h3Mech}</h3>
    <p>${c.pMech(locMag, locAcc, locColors)}</p>
    <h3>${c.h3Logo}</h3>
    <ul>
      ${c.logoBullets.map((b) => `<li>${b}</li>`).join('')}
    </ul>
    <h3>${c.h3Table(p.skuDisplay)}</h3>
    <div class="geo-table-wrap">
      <table class="geo-table">
        <thead>
          <tr>
            <th>${c.thOption}</th>
            <th>${c.thMoq}</th>
            <th>${c.thSetup}</th>
            <th>${c.thUnitAdd}</th>
            <th>${c.thLead}</th>
          </tr>
        </thead>
        <tbody>
          ${[c.r1, c.r2, c.r3, c.r4]
            .map(
              (r) =>
                `<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td><td><strong>${r[3]}</strong></td><td>${r[4]}</td></tr>`
            )
            .join('')}
        </tbody>
      </table>
    </div>
    <h3>4. ${t('breadcrumb.guides')} &amp; <a href="${colHref}">${colName}</a></h3>
    <ul class="editorial-guide-links">
      ${insightLinksHtml}
    </ul>
  `;
}

type FaqBuilder = (
  sku: string,
  title: string,
  rowId: number,
  mat: string,
  size: string,
  weight: string,
  mag: string,
  acc: string,
  colors: string,
  t50: string,
  t200: string,
  t500: string
) => Array<{ question: string; answer: string }>;

const FAQ_BUILDERS: Partial<Record<SupportedLanguage, FaqBuilder>> = {
  de: (sku, title, rowId, mat, size, weight, mag, acc, colors, t50, t200, t500) => [
    {
      question: `Wie hoch sind Mindestbestellmenge (MOQ) und Werkzeugkosten für ${sku} ${title}?`,
      answer: `Da ${sku} unsere fertige Serienform (#${rowId}) nutzt, beträgt die Werkzeug- und Formgebühr $0,00. Die Mindestbestellmenge (MOQ) liegt bei 50 Stk. für Blanko-Lagerware und 100 Stk. für Aufträge mit individueller Lasergravur oder Siebdruck-Logo.`
    },
    {
      question: `Können wir unser eigenes Marken- oder Firmenlogo auf ${sku} anbringen?`,
      answer: `Ja. Wir unterstützen 50W-Faserlasergravur (+$0,15–$0,30/Stk., $0 Einrichtung), mehrfarbigen Siebdruck ($35/Farbe Siebgebühr + $0,10/Farbe/Stk., ab 100 Stk.) sowie tiefe Lasergravur mit Farbauslegung (+$0,35–$0,60/Stk., ab 200–300 Stk.).`
    },
    {
      question: `Wie sind die Magnete im Modell ${sku} gemäß US CPSC 16 CFR 1262 gesichert?`,
      answer: `Alle Magnet- und Mechanikkomponenten (${mag}; ${acc}) sind mechanisch verschraubt und mit hochfestem Struktur-Epoxidharz (>22 MPa) verklebt. Sie bestehen 10× 1,5m Beton-Falltests nach US CPSC 16 CFR Part 1262 sowie EU RoHS 3 / REACH.`
    },
    {
      question: `Welche Materialien und Oberflächen sind für ${sku} verfügbar?`,
      answer: `${sku} wird aus ${mat} mit einem Nettogewicht von ${weight} und Abmessungen von ${size} gefertigt. Standardoberflächen: ${colors}. Individuelle PVD- oder Eloxal-Farben sind ab 300 Stk. möglich.`
    },
    {
      question: `Wie ist die Mengenstaffelung der Großhandelspreise für ${sku} aufgebaut?`,
      answer: `Wir bieten transparente 3-Stufen-Werkspreise für ${sku}: $${t50}/Stk. für 50–199 Stk. (Testcharge / Logo-Start), $${t200}/Stk. für 200–499 Stk. (Standard-Großhandel) und $${t500}/Stk. ab 500+ Stk. (Volumen-Stufe).`
    },
    {
      question: `Welche internen Magnete und Kugellager sind in ${sku} verbaut?`,
      answer: `${sku} ist mit ${mag} sowie ${acc} ausgestattet. Jede Einheit wird vor dem Verpacken auf saubere Oberfläche, Magnetpolarität und geschmeidigen Lauf geprüft.`
    },
    {
      question: `Können wir vor der Großbestellung ein Muster von ${sku} mit eigenem Logo bestellen?`,
      answer: `Ja. Die Mustergebühr für ein Vorabmuster mit individuellem Logo beträgt $80–$150 USD (je nach Laser-, Siebdruck- oder Farbauslegungs-Verfahren), und die Musterbauzeit liegt bei 10–15 Tagen.`
    },
    {
      question: `Welche Einzelhandels- und Amazon-FBA-Verpackungen passen für ${sku} (${size})?`,
      answer: `Neben der Standard-Schutzverpackung bieten wir für ${sku}: (1) Schwarzes stoßfestes EVA-Reißverschlussetui mit Logo (+$0,75/Stk., MOQ 100 Stk.), (2) Sichtfenster-Blechdose mit EVA-Inlay (+$0,85/Stk., MOQ 200 Stk.) und (3) Magnet-Geschenkbox (+$1,10/Stk., MOQ 300 Stk.) inkl. kostenlosem FNSKU-Etikett.`
    },
    {
      question: `Wie lange dauern Serienproduktion und DDP-Versand für ${sku}?`,
      answer: `Logo-Muster dauern 10–15 Tage ($80–$150 USD). Blanko-Bestellungen (ab 50 Stk.) werden in 3–5 Werktagen versandt, Logo-Aufträge (ab 100 Stk.) in 10–15 Werktagen. DDP-Luftfracht Express dauert 5–7 Tage, DDP-Seefracht 20–28 Tage.`
    },
    {
      question: `Welche Qualitätskontrolle (QC) und Ersatzteile sind bei Großbestellungen von ${sku} enthalten?`,
      answer: `Jede Charge von ${sku} durchläuft eine strenge Ausgangsprüfung (Oberfläche, Logo-Position, Magnetverriegelung, Falltest). Bei PTFE-/Lagermodellen legen wir kostenlose PTFE-Ersatzpads, Rastkugeln und M2-Schrauben bei.`
    }
  ],
  fr: (sku, title, rowId, mat, size, weight, mag, acc, colors, t50, t200, t500) => [
    {
      question: `Quels sont le MOQ et les frais de moule pour ${sku} ${title} ?`,
      answer: `Le modèle ${sku} utilisant notre moule de série prêt (#${rowId}), les frais de moule sont de 0,00 $. Le MOQ est de 50 pcs en stock neutre et de 100 pcs avec marquage logo par gravure laser ou sérigraphie.`
    },
    {
      question: `Pouvons-nous personnaliser notre logo sur le modèle ${sku} ?`,
      answer: `Oui. Nous proposons la gravure laser fibre 50W (+0,15–0,30 $/pc, 0 $ de frais fixes), la sérigraphie couleur (35 $/couleur d’écran + 0,10 $/couleur/pc, MOQ 100 pcs) et la gravure laser profonde avec remplissage émail (+0,35–0,60 $/pc, MOQ 200–300 pcs).`
    },
    {
      question: `Comment les aimants sont-ils sécurisés dans ${sku} pour la conformité US CPSC 16 CFR 1262 ?`,
      answer: `Les aimants et roulements (${mag} ; ${acc}) sont verrouillés mécaniquement et scellés à la résine époxy structurelle (>22 MPa), résistant aux tests de chute de 1,5 m conformément aux normes US CPSC 16 CFR 1262 et EU RoHS/REACH.`
    },
    {
      question: `Quels matériaux et finitions de surface sont disponibles pour ${sku} ?`,
      answer: `${sku} est fabriqué en ${mat} (poids net ${weight}, dimensions ${size}). Finitions standard : ${colors}. Des finitions PVD ou anodisées sur mesure sont disponibles dès 300 pcs.`
    },
    {
      question: `Comment fonctionnent les tarifs dégressifs de gros pour ${sku} ?`,
      answer: `Nous appliquons 3 paliers directs usine pour ${sku} : ${t50} $/pc pour 50–199 pcs, ${t200} $/pc pour 200–499 pcs, et ${t500} $/pc pour 500+ pcs. Les commandes multi-références peuvent être regroupées.`
    },
    {
      question: `Quelle est la configuration interne d’aimants et de roulements de ${sku} ?`,
      answer: `${sku} intègre ${mag} ainsi que ${acc}. Chaque pièce est contrôlée avant emballage pour vérifier la finition, la polarité magnétique et la fluidité mécanique.`
    },
    {
      question: `Pouvons-nous commander un échantillon personnalisé de ${sku} avant une commande groupée ?`,
      answer: `Oui. Les frais d’échantillon pré-série avec logo personnalisé sont de 80 $ à 150 $ USD selon le procédé choisi, avec un délai de fabrication de 10 à 15 jours.`
    },
    {
      question: `Quelles options d’emballage retail et Amazon FBA conviennent à ${sku} (${size}) ?`,
      answer: `Nous proposons 3 coffrets sur mesure : (1) Étui zippé EVA antichoc noir avec logo (+0,75 $/pc, MOQ 100 pcs), (2) Boîte métallique à fenêtre avec mousse EVA (+0,85 $/pc, MOQ 200 pcs) et (3) Coffret cadeau magnétique rigide (+1,10 $/pc, MOQ 300 pcs), étiquetage FNSKU inclus.`
    },
    {
      question: `Quels sont les délais de production et de livraison DDP pour ${sku} ?`,
      answer: `L’échantillonnage avec logo prend 10 à 15 jours (80–150 $ USD). En série, le stock neutre (50+ pcs) part sous 3 à 5 jours ouvrés et les commandes avec logo (100+ pcs) sous 10 à 15 jours ouvrés via expédition DDP Air (5–7 jours) ou DDP Mer (20–28 jours).`
    },
    {
      question: `Quel contrôle qualité (QC) et quelles pièces de rechange sont inclus avec ${sku} ?`,
      answer: `Chaque lot de ${sku} subit une inspection complète avant expédition. Pour les modèles à patins PTFE ou billes, nous incluons gratuitement des patins PTFE, billes et vis M2 de rechange.`
    }
  ],
  es: (sku, title, rowId, mat, size, weight, mag, acc, colors, t50, t200, t500) => [
    {
      question: `¿Cuál es el pedido mínimo (MOQ) y el costo de molde para ${sku} ${title}?`,
      answer: `Dado que ${sku} utiliza nuestro molde de producción listo (#${rowId}), el costo de molde es $0.00. El MOQ es de 50 uds. sin marca y 100 uds. con logotipo personalizado por láser o serigrafía.`
    },
    {
      question: `¿Podemos personalizar nuestro logotipo corporativo en ${sku}?`,
      answer: `Sí. Ofrecemos grabado láser de fibra 50W (+$0.15–$0.30/ud., $0 setup), serigrafía en color ($35/color de pantalla + $0.10/color/ud., MOQ 100 uds.) y grabado láser profundo con relleno de color (+$0.35–$0.60/ud., MOQ 200–300 uds.).`
    },
    {
      question: `¿Cómo se aseguran los imanes en ${sku} para cumplir con US CPSC 16 CFR 1262?`,
      answer: `Los conjuntos magnéticos y mecánicos (${mag}; ${acc}) están bloqueados mecánicamente y sellados con epoxi estructural (>22 MPa), superando pruebas de caída de 1.5 m bajo US CPSC 16 CFR 1262 y EU RoHS/REACH.`
    },
    {
      question: `¿Qué materiales y acabados están disponibles para ${sku}?`,
      answer: `${sku} se fabrica en ${mat} con un peso neto de ${weight} y dimensiones de ${size}. Acabados estándar: ${colors}. Acabados PVD o anodizados personalizados disponibles desde 300 uds.`
    },
    {
      question: `¿Cómo funcionan los precios mayoristas por volumen para ${sku}?`,
      answer: `Ofrecemos 3 tramos directos de fábrica para ${sku}: $${t50}/ud. para 50–199 uds., $${t200}/ud. para 200–499 uds., y $${t500}/ud. para 500+ uds.`
    },
    {
      question: `¿Qué configuración interna de imanes y rodamientos utiliza ${sku}?`,
      answer: `${sku} está equipado con ${mag} y ${acc}. Cada unidad se inspecciona individualmente antes del embalaje.`
    },
    {
      question: `¿Podemos pedir una muestra física de ${sku} con logotipo antes del pedido al por mayor?`,
      answer: `Sí. La tarifa de muestra con logotipo personalizado es de $80–$150 USD y el plazo de elaboración de la muestra es de 10–15 días.`
    },
    {
      question: `¿Qué opciones de empaque minorista y Amazon FBA se adaptan a ${sku} (${size})?`,
      answer: `Ofrecemos: (1) Estuche EVA negro con cremallera y logo (+$0.75/ud., MOQ 100 uds.), (2) Caja metálica con ventana y espuma EVA (+$0.85/ud., MOQ 200 uds.) y (3) Caja rígida magnética de regalo (+$1.10/ud., MOQ 300 uds.), con etiquetas FNSKU gratuitas.`
    },
    {
      question: `¿Cuál es el plazo de producción y envío DDP para ${sku}?`,
      answer: `Las muestras con logo tardan 10–15 días ($80–$150 USD). En producción masiva, el stock en blanco (50+ uds.) se envía en 3–5 días hábiles y los pedidos con logo (100+ uds.) en 10–15 días hábiles con envío DDP Aéreo (5–7 días) o Marítimo (20–28 días).`
    },
    {
      question: `¿Qué control de calidad y repuestos se incluyen con los pedidos de ${sku}?`,
      answer: `Cada lote de ${sku} pasa por inspección previa al embarque. Para modelos con PTFE o rodamientos, incluimos almohadillas PTFE, esferas y tornillos M2 de repuesto sin costo.`
    }
  ],
  ja: (sku, title, rowId, mat, size, weight, mag, acc, colors, t50, t200, t500) => [
    {
      question: `${sku} ${title} の最小注文数量（MOQ）と金型費用はいくらですか？`,
      answer: `${sku} は当社の既存量産金型（#${rowId}）を使用するため、初期金型費用は $0.00 です。最小注文数量（MOQ）は、ロゴなし無地在庫が 50個〜、カスタムロゴ名入れが 100個〜となります。`
    },
    {
      question: `${sku} に自社ブランドや企業ロゴの名入れは可能ですか？`,
      answer: `はい。50Wファイバーレーザー刻印（+$0.15〜$0.30/個、初期費$0）、シルクスクリーン多色印刷（版代 1色につき$35＋印刷単価 1色につき+$0.10/個、MOQ 100個）、および深彫りレーザー＋色入れ加工（+$0.35〜$0.60/個、MOQ 200〜300個）に対応しています。`
    },
    {
      question: `${sku} の内部磁石は米国 CPSC 16 CFR 1262 安全基準にどのように適合していますか？`,
      answer: `内蔵されている磁気・機構部品（${mag}、${acc}）は機械的ロックおよび高強度構造用エポキシ接着剤（>22 MPa）で密閉固定されており、米国 CPSC 16 CFR Part 1262 の 1.5m 落下衝撃試験および EU RoHS 3 / REACH に準拠しています。`
    },
    {
      question: `${sku} の素材と表面仕上げのバリエーションは何がありますか？`,
      answer: `${sku} は ${mat} 製で、単体重量は ${weight}、外寸は ${size} です。標準仕上げは「${colors}」で、300個以上のオーダーでカスタムPVDやアルマイト調色も可能です。`
    },
    {
      question: `${sku} の数量別ボリュームディスカウント（卸売価格）はどうなっていますか？`,
      answer: `${sku} の工場直販3段階価格は、50〜199個が $${t50}/個、200〜499個が $${t200}/個、500個以上が $${t500}/個 となります。複数SKUの混載発注も可能です。`
    },
    {
      question: `${sku} にはどのようなグレードの磁石とベアリングが使われていますか？`,
      answer: `${sku} には ${mag} および ${acc} が組み込まれており、出荷前に全品で表面仕上げ・磁極ロック・摺動/回転動作の検品を実施しています。`
    },
    {
      question: `量産発注前に ${sku} のカスタムロゴ試作サンプルを注文できますか？`,
      answer: `はい。量産前に自社ロゴ入りの試作サンプルを製作可能です。カスタムロゴサンプル費用は $80〜$150 USD（レーザー・シルク印刷・深彫り色入れ等の仕様による）、サンプル製作期間は 10〜15日です。`
    },
    {
      question: `${sku}（${size}）に対応する小売用・Amazon FBA用パッケージはありますか？`,
      answer: `標準保護包装のほか、3種類のOEMパッケージをご用意しています：(1) ロゴ入り黒EVA耐衝撃ジッパーケース（+$0.75/個、MOQ 100個）、(2) 窓付きメタル缶ボックス＋EVA内装（+$0.85/個、MOQ 200個）、(3) マグネット開閉式ハードギフト箱（+$1.10/個、MOQ 300個）。Amazon FNSKUバーコード貼付は無料です。`
    },
    {
      question: `${sku} の量産納期とDDP（関税込）配送スケジュールはどのくらいですか？`,
      answer: `ロゴ試作サンプルは 10〜15日（$80〜$150 USD）。量産は無地在庫（50個〜）が 3〜5営業日、カスタムロゴ注文（100個〜）が 10〜15営業日で出荷されます。福州工業区ハブよりDDP航空便（5〜7日）またはDDP船便（20〜28日）でお届けします。`
    },
    {
      question: `${sku} の大口注文にはどのような品質検査（QC）と予備パーツが含まれますか？`,
      answer: `すべてのロットで外観・ロゴ位置・磁石ロック・動作の出荷前検査を実施しています。PTFEパッドやベアリング搭載モデルには、予備のPTFE摺動パッド・鋼球・M2ネジを無償同梱いたします。`
    }
  ],
  ko: (sku, title, rowId, mat, size, weight, mag, acc, colors, t50, t200, t500) => [
    {
      question: `${sku} ${title} 모델의 최소 주문 수량(MOQ)과 금형 비용은 얼마인가요?`,
      answer: `${sku} 모델은 당사의 기성 양산 금형(#${rowId})을 사용하므로 금형 비용은 $0.00입니다. 도매 MOQ는 무지 기본 재고 50개, 맞춤 로고 각인/인쇄 주문 시 100개입니다.`
    },
    {
      question: `${sku} 제품에 회사 또는 브랜드 로고를 커스텀할 수 있나요?`,
      answer: `네. 50W 파이버 레이저 각인(+$0.15~$0.30/개, 초기 세팅비 $0), 실크스크린 컬러 인쇄(색상당 판비 $35 + 개당 색상당 +$0.10, MOQ 100개), 심층 레이저 음각 후 컬러 필링(+$0.35~$0.60/개, MOQ 200~300개)을 모두 지원합니다.`
    },
    {
      question: `${sku} 내부 자석은 미국 CPSC 16 CFR 1262 안전 규정을 어떻게 충족하나요?`,
      answer: `모든 자석 및 기구 부품(${mag}; ${acc})은 기계식 나사 잠금과 고강도 구조용 에폭시(>22 MPa)로 이중 고정되어 1.5m 낙하 충격 테스트 및 미국 CPSC 16 CFR 1262, EU RoHS/REACH 기준을 통과합니다.`
    },
    {
      question: `${sku} 모델의 소재와 표면 마감 옵션은 무엇인가요?`,
      answer: `${sku}는 ${mat} 소재로 제작되며 순중량은 ${weight}, 치수는 ${size}입니다. 기본 마감은 '${colors}'이며 300개 이상 주문 시 맞춤 PVD 코팅 및 아노다이징 색상 지정이 가능합니다.`
    },
    {
      question: `${sku} 모델의 수량별 도매 단가는 어떻게 적용되나요?`,
      answer: `${sku} 공장 직거래 3단계 단가는 50~199개 $${t50}/개, 200~499개 $${t200}/개, 500개 이상 $${t500}/개입니다. 여러 SKU를 혼합하여 발주할 수 있습니다.`
    },
    {
      question: `${sku}에는 어떤 내부 자석 배열과 베어링 부품이 사용되나요?`,
      answer: `${sku} 모델은 ${mag} 및 ${acc} 사양으로 설계되었으며, 포장 전 표면 마감과 자석 극성, 작동감을 전수 검사합니다.`
    },
    {
      question: `대량 발주 전에 ${sku} 맞춤 로고 샘플을 먼저 받아볼 수 있나요?`,
      answer: `네. 본 생산 전에 맞춤 로고 샘플을 제작할 수 있습니다. 커스텀 로고 샘플 비용은 $80–$150 USD이며, 샘플 제작 기간은 10–15일입니다.`
    },
    {
      question: `${sku}(${size})에 적합한 소매용 및 아마존 FBA 패키징 옵션은 무엇인가요?`,
      answer: `기본 보호 포장 외에 3가지 패키징 업그레이드를 제공합니다: (1) 로고 인쇄 블랙 EVA 지퍼 케이스(+$0.75/개, MOQ 100개), (2) 윈도우 메탈 틴케이스 + EVA 폼(+$0.85/개, MOQ 200개), (3) 자석 개폐식 고급 하드 기프트 박스(+$1.10/개, MOQ 300개). FNSKU 바코드 라벨 부착은 무료입니다.`
    },
    {
      question: `${sku}의 양산 리드타임과 DDP 배송 일정은 어떻게 되나요?`,
      answer: `맞춤 로고 샘플은 10–15일($80–$150 USD)이 소요됩니다. 대량 주문 시 무지 재고(50개 이상)는 3–5 영업일, 커스텀 로고 주문(100개 이상)은 10–15 영업일 내에 출고되며 DDP 항공 특송(5–7일) 또는 DDP 해상 운송(20–28일)으로 배송됩니다.`
    },
    {
      question: `${sku} 대량 주문 시 어떤 품질 검수(QC)와 예비 부품이 제공되나요?`,
      answer: `모든 출고 물량은 외관, 로고 정렬, 자석 잠금 및 낙하 내구성 검사를 거칩니다. PTFE 패드 및 베어링 모델에는 예비 PTFE 테플론 패드, 디텐트 볼, M2 나사를 무상 동봉해 드립니다.`
    }
  ]
};

function buildGenericLocalizedFaqs(
  lang: SupportedLanguage,
  sku: string,
  title: string,
  rowId: number,
  mat: string,
  size: string,
  weight: string,
  mag: string,
  acc: string,
  colors: string,
  t50: string,
  t200: string,
  t500: string
): Array<{ question: string; answer: string }> {
  const c = EDITORIAL_COPY[lang] || EDITORIAL_COPY.en;
  const s = SPEC_STATIC_VALS[lang] || SPEC_STATIC_VALS.en;
  return [
    {
      question: `1. ${sku} ${title} — ${SPEC_KEY_MAP['Wholesale MOQ'][lang] || 'MOQ'} & ${SPEC_KEY_MAP['Tooling / Mold Fee'][lang] || 'Tooling'}?`,
      answer: `${s.moldRef(rowId)} · ${s.toolingFee}. ${s.moq}.`
    },
    {
      question: `2. ${sku} — ${SPEC_KEY_MAP['Custom Branding Methods'][lang] || 'Custom Logo'}?`,
      answer: `${BRANDING_SPEC_VALUE[lang](true)}`
    },
    {
      question: `3. ${sku} — ${SPEC_KEY_MAP['Safety Compliance'][lang] || 'Safety Compliance'} (US CPSC 16 CFR 1262)?`,
      answer: `${s.safety}. (${mag}; ${acc}).`
    },
    {
      question: `4. ${sku} — ${SPEC_KEY_MAP['Body Material'][lang] || 'Material'} & ${SPEC_KEY_MAP['Standard Surface Finishes'][lang] || 'Finishes'}?`,
      answer: `${mat} (${size}, ${weight}). ${colors}.`
    },
    {
      question: `5. ${sku} — 50 / 200 / 500+ USD Wholesale Pricing?`,
      answer: `50–199: $${t50} | 200–499: $${t200} | 500+: $${t500} (${s.toolingFee}).`
    },
    {
      question: `6. ${sku} — ${SPEC_KEY_MAP['Magnet Configuration'][lang] || 'Magnets'} & ${SPEC_KEY_MAP['Internal Hardware & Bearings'][lang] || 'Hardware'}?`,
      answer: `${mag} · ${acc}.`
    },
    {
      question: `7. ${sku} — ${SPEC_KEY_MAP['Custom Sample Fee & Time'][lang] || 'Sample Fee & Time'}?`,
      answer: `${s.sampleFeeTime}.`
    },
    {
      question: `8. ${sku} (${size}) — EVA Case & Gift Box Packaging?`,
      answer: `(1) Black EVA Zipper Case (+$0.75/pc, MOQ 100), (2) Window Metal Tin Box (+$0.85/pc, MOQ 200), (3) Rigid Magnetic Gift Box (+$1.10/pc, MOQ 300).`
    },
    {
      question: `9. ${sku} — ${c.thLead} & DDP Shipping?`,
      answer: `${c.r1[0]}: ${c.r1[4]} | ${c.r2[0]}: ${c.r2[4]} | ${c.r3[0]}: ${c.r3[4]}. DDP Air (5–7d) / DDP Sea (20–28d).`
    },
    {
      question: `10. ${sku} — QC Inspection & Spare Parts?`,
      answer: `${c.pMech(mag, acc, colors)}`
    }
  ];
}

export function localizeProduct(p: any, lang: SupportedLanguage): LocalizedProductData {
  const locTitle = localizeTitle(p.title, lang);
  const locMat = localizeMaterial(p.material, lang);
  const locMag = localizeHardwareOrMagnets(p.magnetsEn, lang);
  const locAcc = localizeHardwareOrMagnets(p.accessoriesEn, lang);
  const locColors = localizeColors(p.colorsEn, lang);

  const overview = (OVERVIEW_BUILDER[lang] || OVERVIEW_BUILDER.en)(
    p.skuDisplay,
    locTitle,
    locMat,
    p.size,
    p.weight,
    locMag,
    locAcc,
    p.rowId
  );

  const staticVals = SPEC_STATIC_VALS[lang] || SPEC_STATIC_VALS.en;
  const rawSpecs: Array<[string, string]> = [
    ['Factory SKU Code', p.skuDisplay],
    ['Original Mold Reference', staticVals.moldRef(p.rowId)],
    ['Body Material', locMat],
    ['Dimensions (L × W × H)', p.size],
    ['Net Unit Weight', p.weight],
    ['Magnet Configuration', locMag],
    ['Internal Hardware & Bearings', locAcc],
    ['Standard Surface Finishes', locColors],
    ['Tooling / Mold Fee', staticVals.toolingFee],
    ['Wholesale MOQ', staticVals.moq],
    ['Custom Branding Methods', (BRANDING_SPEC_VALUE[lang] || BRANDING_SPEC_VALUE.en)(Boolean(p.logoReady))],
    ['Safety Compliance', staticVals.safety],
    ['Custom Sample Fee & Time', staticVals.sampleFeeTime]
  ];

  const specs: Array<[string, string]> = rawSpecs.map(([k, v]) => [
    lang === 'en' ? k : SPEC_KEY_MAP[k]?.[lang] || k,
    v
  ]);

  const variants = (p.variants || []).map((v: any) => ({
    ...v,
    materialLocalized: localizeMaterial(v.materialEn, lang)
  }));

  const features =
    lang === 'en'
      ? p.features
      : (FEATURES_BUILDER[lang] || FEATURES_BUILDER.en)(p.rowId, locMag, locAcc);

  const editorialHtml = buildLocalizedEditorialHtml(
    p,
    locTitle,
    locMat,
    locMag,
    locAcc,
    locColors,
    lang
  );

  const faqs =
    lang === 'en'
      ? p.faqs
      : FAQ_BUILDERS[lang]
        ? FAQ_BUILDERS[lang]!(
            p.skuDisplay,
            locTitle,
            p.rowId,
            locMat,
            p.size,
            p.weight,
            locMag,
            locAcc,
            locColors,
            p.tier50,
            p.tier200,
            p.tier500
          )
        : buildGenericLocalizedFaqs(
            lang,
            p.skuDisplay,
            locTitle,
            p.rowId,
            locMat,
            p.size,
            p.weight,
            locMag,
            locAcc,
            locColors,
            p.tier50,
            p.tier200,
            p.tier500
          );

  const metaTitle =
    lang === 'en'
      ? p.metaTitle
      : `${p.skuDisplay} ${locTitle} | FidgetSupply`;
  const metaDescription = overview.slice(0, 158);

  return {
    title: locTitle,
    metaTitle,
    metaDescription,
    overview,
    material: locMat,
    magnets: locMag,
    accessories: locAcc,
    colors: locColors,
    specs,
    variants,
    features,
    editorialHtml,
    faqs
  };
}
