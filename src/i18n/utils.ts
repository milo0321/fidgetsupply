import { defaultLang, languages, supportedLanguages, type SupportedLanguage } from './config';
import { ui } from './ui';

export function getLanguageFromURL(urlOrPath: string | URL): SupportedLanguage {
  if (!urlOrPath) return defaultLang;
  const pathname = typeof urlOrPath === 'string' ? urlOrPath : urlOrPath.pathname;
  let clean = pathname.split('?')[0].split('#')[0];
  clean = clean.replace(/(\/index)?\.(html?|php)$/i, '');
  const segments = clean.split('/').filter(Boolean);
  const firstSegment = segments[0];
  if (firstSegment && (supportedLanguages as string[]).includes(firstSegment)) {
    return firstSegment as SupportedLanguage;
  }
  return defaultLang;
}

export function useTranslations(lang: SupportedLanguage = defaultLang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    const langDict = ui[lang] as Record<string, string> | undefined;
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    return (ui[defaultLang] as Record<string, string>)[key] || key;
  };
}

export function getLocalizedPath(pathname: string, targetLang: SupportedLanguage, sourceLang?: SupportedLanguage): string {
  if (!pathname) return targetLang === defaultLang ? '/' : `/${targetLang}`;

  const [pathPart, queryPart] = pathname.split('?');
  let cleanPath = pathPart.split('#')[0];

  cleanPath = cleanPath.replace(/(\/index)?\.(html?|php)$/i, '');

  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  let strippedPath = cleanPath;
  if (!strippedPath.startsWith('/')) {
    strippedPath = '/' + strippedPath;
  }

  const langPrefixRegex = new RegExp(`^\\/(${supportedLanguages.join('|')})(\\/|$)`);
  while (langPrefixRegex.test(strippedPath)) {
    strippedPath = strippedPath.replace(langPrefixRegex, '/');
  }
  if (strippedPath.length > 1 && strippedPath.endsWith('/')) {
    strippedPath = strippedPath.slice(0, -1);
  }
  if (strippedPath === '' || strippedPath === '/index' || strippedPath === '/404') {
    strippedPath = '/';
  }

  let finalPath: string;
  if (targetLang === defaultLang) {
    finalPath = strippedPath;
  } else if (strippedPath === '/') {
    finalPath = `/${targetLang}`;
  } else {
    finalPath = `/${targetLang}${strippedPath}`;
  }

  return queryPart ? `${finalPath}?${queryPart}` : finalPath;
}

export function getHreflangTags(currentUrl: URL | string) {
  const urlObj = typeof currentUrl === 'string' ? new URL(currentUrl, 'https://fidgetsupply.com') : currentUrl;
  const rawPath = urlObj.pathname;

  return supportedLanguages.map((lang) => {
    const localizedPath = getLocalizedPath(rawPath, lang);
    const href = localizedPath === '/' ? 'https://fidgetsupply.com' : `https://fidgetsupply.com${localizedPath}`.replace(/\/+$/, '');
    return {
      lang,
      hreflang: languages[lang].code,
      href
    };
  });
}

export function getDirection(lang: SupportedLanguage): 'ltr' | 'rtl' {
  return languages[lang]?.dir || 'ltr';
}

export function getLanguageMetadata(lang: SupportedLanguage) {
  return languages[lang] || languages[defaultLang];
}

export interface MicroHookLabels {
  sample1Pc: string;
  freeLogoProof: string;
  sheet140: string;
  lockPriceWa: string;
  orderSampleMockup: (sku: string) => string;
  getFullSheetPdf: string;
  mixMoqBadge: string;
  unitPriceLabel: string;
  estTotalLabel: string;
  pdpInputPlaceholder: string;
  pdpDirectSendBtn: string;
  pdpSentConfirm: string;
}

const MICRO_HOOK_MAP: Record<SupportedLanguage, MicroHookLabels> = {
  en: {
    sample1Pc: '📦 1-Pc Sample',
    freeLogoProof: 'Free Logo Proof',
    sheet140: '📊 140-SKU Sheet',
    lockPriceWa: '💬 WhatsApp Quote →',
    orderSampleMockup: (sku) => `📦 Order 1-Pc Sample (${sku}) + Free 1:1 Logo Mockup →`,
    getFullSheetPdf: '📊 Get Full 140-SKU Wholesale Price Sheet (PDF/Excel) →',
    mixMoqBadge: '✓ 1-Pc Sample OK · ✓ 50-Pc Mix-SKU · ✓ $0 Mold Fee',
    unitPriceLabel: 'Unit Factory Price',
    estTotalLabel: 'Est. Batch Subtotal',
    pdpInputPlaceholder: 'Work Email (name@company.com) for Quote & PDF...',
    pdpDirectSendBtn: '⚡ Get Quote & PDF →',
    pdpSentConfirm: '✅ Received! Our Fuzhou export desk will send your quote & PDF sheet within 2–12h.'
  },
  de: {
    sample1Pc: '📦 1-Stk. Muster',
    freeLogoProof: 'Gratis Logo-Entwurf',
    sheet140: '📊 140-SKU Preisliste',
    lockPriceWa: '💬 WhatsApp Preis →',
    orderSampleMockup: (sku) => `📦 1-Stk. Muster (${sku}) + Gratis 1:1 Logo-Layout anfordern →`,
    getFullSheetPdf: '📊 Komplette 140-SKU Großhandels-Preisliste (PDF/Excel) →',
    mixMoqBadge: '✓ 1-Stk. Muster möglich · ✓ 50-Stk. Mix-SKU · ✓ $0 Formkosten',
    unitPriceLabel: 'Stückpreis ab Werk',
    estTotalLabel: 'Geschätzte Summe',
    pdpInputPlaceholder: 'Geschäftliche E-Mail (name@firma.de) für Angebot & PDF...',
    pdpDirectSendBtn: '⚡ Angebot & PDF →',
    pdpSentConfirm: '✅ Erhalten! Unser Export-Team sendet Ihr Angebot & die PDF-Liste in 2–12 Std.'
  },
  fr: {
    sample1Pc: '📦 Échantillon 1 pce',
    freeLogoProof: 'Maquette logo gratuite',
    sheet140: '📊 Tarifs 140 Modèles',
    lockPriceWa: '💬 Tarif WhatsApp →',
    orderSampleMockup: (sku) => `📦 Commander 1 échantillon (${sku}) + Maquette logo 1:1 gratuite →`,
    getFullSheetPdf: '📊 Recevoir la grille tarifaire complète 140 modèles (PDF/Excel) →',
    mixMoqBadge: '✓ Échantillon 1 pce OK · ✓ 50 pcs Mix-SKU · ✓ 0 $ frais de moule',
    unitPriceLabel: 'Prix unitaire usine',
    estTotalLabel: 'Sous-total estimé',
    pdpInputPlaceholder: 'E-mail professionnel (nom@societe.fr) pour devis & PDF...',
    pdpDirectSendBtn: '⚡ Devis & PDF →',
    pdpSentConfirm: '✅ Reçu ! Notre bureau export vous enverra le devis & tarifs PDF sous 2–12h.'
  },
  nl: {
    sample1Pc: '📦 1-St. Monster',
    freeLogoProof: 'Gratis logoproef',
    sheet140: '📊 140-SKU Prijslijst',
    lockPriceWa: '💬 WhatsApp Prijs →',
    orderSampleMockup: (sku) => `📦 Bestel 1-st. monster (${sku}) + Gratis 1:1 logoproef →`,
    getFullSheetPdf: '📊 Ontvang volledige 140-SKU groothandelsprijslijst (PDF/Excel) →',
    mixMoqBadge: '✓ 1-St. monster OK · ✓ 50-St. Mix-SKU · ✓ $0 matrijskosten',
    unitPriceLabel: 'Fabrieksprijs / st.',
    estTotalLabel: 'Geschat subtotaal',
    pdpInputPlaceholder: 'Zakelijke e-mail (naam@bedrijf.nl) voor offerte & PDF...',
    pdpDirectSendBtn: '⚡ Offerte & PDF →',
    pdpSentConfirm: '✅ Ontvangen! Ons exportteam stuurt uw offerte & PDF-prijslijst binnen 2–12 uur.'
  },
  es: {
    sample1Pc: '📦 Muestra 1 ud.',
    freeLogoProof: 'Boceto logo gratis',
    sheet140: '📊 Lista 140 Modelos',
    lockPriceWa: '💬 Precio WhatsApp →',
    orderSampleMockup: (sku) => `📦 Pedir muestra de 1 ud. (${sku}) + Boceto de logo 1:1 gratis →`,
    getFullSheetPdf: '📊 Recibir lista completa de precios mayoristas 140 SKU (PDF/Excel) →',
    mixMoqBadge: '✓ Muestra 1 ud. OK · ✓ 50 uds. Mix-SKU · ✓ $0 costo de molde',
    unitPriceLabel: 'Precio unitario fábrica',
    estTotalLabel: 'Subtotal estimado',
    pdpInputPlaceholder: 'Correo corporativo (nombre@empresa.com) para cotización y PDF...',
    pdpDirectSendBtn: '⚡ Cotización y PDF →',
    pdpSentConfirm: '✅ ¡Recibido! Nuestro equipo enviará su cotización y lista PDF en 2–12h.'
  },
  it: {
    sample1Pc: '📦 Campione 1 pz',
    freeLogoProof: 'Bozza logo gratuita',
    sheet140: '📊 Listino 140 Modelli',
    lockPriceWa: '💬 Prezzo WhatsApp →',
    orderSampleMockup: (sku) => `📦 Richiedi campione 1 pz (${sku}) + Bozza logo 1:1 gratuita →`,
    getFullSheetPdf: '📊 Scarica il listino prezzi ingrosso completo 140 SKU (PDF/Excel) →',
    mixMoqBadge: '✓ Campione 1 pz OK · ✓ 50 pz Mix-SKU · ✓ $0 costi di stampo',
    unitPriceLabel: 'Prezzo unitario fabbrica',
    estTotalLabel: 'Subtotale stimato',
    pdpInputPlaceholder: 'Email aziendale (nome@azienda.it) per preventivo e PDF...',
    pdpDirectSendBtn: '⚡ Preventivo e PDF →',
    pdpSentConfirm: '✅ Ricevuto! Il nostro team export invierà preventivo e listino PDF entro 2–12h.'
  },
  pt: {
    sample1Pc: '📦 Amostra 1 un.',
    freeLogoProof: 'Prova de logo grátis',
    sheet140: '📊 Tabela 140 Modelos',
    lockPriceWa: '💬 Preço WhatsApp →',
    orderSampleMockup: (sku) => `📦 Solicitar amostra 1 un. (${sku}) + Prova de logo 1:1 grátis →`,
    getFullSheetPdf: '📊 Receber tabela completa de preços atacado 140 SKU (PDF/Excel) →',
    mixMoqBadge: '✓ Amostra 1 un. OK · ✓ 50 un. Mix-SKU · ✓ $0 custo de molde',
    unitPriceLabel: 'Preço unitário fábrica',
    estTotalLabel: 'Subtotal estimado',
    pdpInputPlaceholder: 'E-mail corporativo (nome@empresa.com) para cotação e PDF...',
    pdpDirectSendBtn: '⚡ Cotação e PDF →',
    pdpSentConfirm: '✅ Recebido! Nossa equipe enviará sua cotação e tabela PDF em 2–12h.'
  },
  sv: {
    sample1Pc: '📦 1 st Prov',
    freeLogoProof: 'Gratis logokorrektur',
    sheet140: '📊 140-SKU Prislista',
    lockPriceWa: '💬 WhatsApp-pris →',
    orderSampleMockup: (sku) => `📦 Beställ 1 st utvärderingsprov (${sku}) + Gratis 1:1 logokorrektur →`,
    getFullSheetPdf: '📊 Få komplett 140-SKU grossistprislista (PDF/Excel) →',
    mixMoqBadge: '✓ 1 st prov OK · ✓ 50 st Mix-SKU · ✓ $0 verktygskostnad',
    unitPriceLabel: 'Fabrikspris / st',
    estTotalLabel: 'Beräknad delsumma',
    pdpInputPlaceholder: 'Företagsmejl (namn@foretag.se) för offert & PDF...',
    pdpDirectSendBtn: '⚡ Offert & PDF →',
    pdpSentConfirm: '✅ Mottaget! Vårt exportteam skickar din offert & PDF-prislista inom 2–12 tim.'
  },
  da: {
    sample1Pc: '📦 1 stk. Prøve',
    freeLogoProof: 'Gratis logokorrektur',
    sheet140: '📊 140-SKU Prisliste',
    lockPriceWa: '💬 WhatsApp-pris →',
    orderSampleMockup: (sku) => `📦 Bestil 1 stk. prøve (${sku}) + Gratis 1:1 logokorrektur →`,
    getFullSheetPdf: '📊 Få komplet 140-SKU engrosprisliste (PDF/Excel) →',
    mixMoqBadge: '✓ 1 stk. prøve OK · ✓ 50 stk. Mix-SKU · ✓ $0 værktøjsgebyr',
    unitPriceLabel: 'Fabrikspris / stk.',
    estTotalLabel: 'Estimeret subtotal',
    pdpInputPlaceholder: 'Firma-e-mail (navn@firma.dk) for tilbud & PDF...',
    pdpDirectSendBtn: '⚡ Tilbud & PDF →',
    pdpSentConfirm: '✅ Modtaget! Vores eksportteam sender tilbud & PDF-prisliste inden for 2–12 timer.'
  },
  no: {
    sample1Pc: '📦 1 stk. Prøve',
    freeLogoProof: 'Gratis logokorrektur',
    sheet140: '📊 140-SKU Prisliste',
    lockPriceWa: '💬 WhatsApp-pris →',
    orderSampleMockup: (sku) => `📦 Bestill 1 stk. prøve (${sku}) + Gratis 1:1 logokorrektur →`,
    getFullSheetPdf: '📊 Få komplett 140-SKU grossistprisliste (PDF/Excel) →',
    mixMoqBadge: '✓ 1 stk. prøve OK · ✓ 50 stk. Mix-SKU · ✓ $0 verktøygebyr',
    unitPriceLabel: 'Fabrikkpris / stk.',
    estTotalLabel: 'Estimert delsum',
    pdpInputPlaceholder: 'Firma-e-post (navn@firma.no) for tilbud & PDF...',
    pdpDirectSendBtn: '⚡ Tilbud & PDF →',
    pdpSentConfirm: '✅ Mottatt! Vårt eksportteam sender tilbud & PDF-prisliste innen 2–12 timer.'
  },
  fi: {
    sample1Pc: '📦 1 kpl Näyte',
    freeLogoProof: 'Ilmainen logovedos',
    sheet140: '📊 140-SKU Hinnasto',
    lockPriceWa: '💬 WhatsApp-hinta →',
    orderSampleMockup: (sku) => `📦 Tilaa 1 kpl näyte (${sku}) + Ilmainen 1:1 logovedos →`,
    getFullSheetPdf: '📊 Tilaa koko 140-SKU tukkuhinnasto (PDF/Excel) →',
    mixMoqBadge: '✓ 1 kpl näyte OK · ✓ 50 kpl Mix-SKU · ✓ $0 muottikulu',
    unitPriceLabel: 'Tehdashinta / kpl',
    estTotalLabel: 'Arvioitu välisumma',
    pdpInputPlaceholder: 'Työsähköposti (nimi@yritys.fi) tarjousta & PDF:ää varten...',
    pdpDirectSendBtn: '⚡ Tarjous & PDF →',
    pdpSentConfirm: '✅ Vastaanotettu! Vientitiimimme lähettää tarjouksen ja PDF-hinnaston 2–12h sisällä.'
  },
  pl: {
    sample1Pc: '📦 Próbka 1 szt.',
    freeLogoProof: 'Darmowy projekt logo',
    sheet140: '📊 Cennik 140 Modeli',
    lockPriceWa: '💬 Cena WhatsApp →',
    orderSampleMockup: (sku) => `📦 Zamów próbkę 1 szt. (${sku}) + Darmowa wizualizacja logo 1:1 →`,
    getFullSheetPdf: '📊 Pobierz pełny cennik hurtowy 140 modeli (PDF/Excel) →',
    mixMoqBadge: '✓ Próbka 1 szt. OK · ✓ 50 szt. Mix-SKU · ✓ 0 $ za formę',
    unitPriceLabel: 'Cena fabryczna / szt.',
    estTotalLabel: 'Szacowana suma',
    pdpInputPlaceholder: 'Służbowy e-mail (imie@firma.pl) po wycenę i PDF...',
    pdpDirectSendBtn: '⚡ Wycena i PDF →',
    pdpSentConfirm: '✅ Otrzymano! Nasz dział eksportu wyśle wycenę i cennik PDF w 2–12 godz.'
  },
  cs: {
    sample1Pc: '📦 Vzorek 1 ks',
    freeLogoProof: 'Náhled loga zdarma',
    sheet140: '📊 Ceník 140 Modelů',
    lockPriceWa: '💬 Cena WhatsApp →',
    orderSampleMockup: (sku) => `📦 Objednat vzorek 1 ks (${sku}) + 1:1 náhled loga zdarma →`,
    getFullSheetPdf: '📊 Získat kompletní velkoobchodní ceník 140 SKU (PDF/Excel) →',
    mixMoqBadge: '✓ Vzorek 1 ks OK · ✓ 50 ks Mix-SKU · ✓ $0 poplatek za formu',
    unitPriceLabel: 'Tovární cena / ks',
    estTotalLabel: 'Odhadovaný mezisoučet',
    pdpInputPlaceholder: 'Firemní e-mail (jmeno@firma.cz) pro nabídku a PDF...',
    pdpDirectSendBtn: '⚡ Nabídka a PDF →',
    pdpSentConfirm: '✅ Přijato! Náš exportní tým vám zašle nabídku a PDF ceník do 2–12 hodin.'
  },
  ru: {
    sample1Pc: '📦 Образец 1 шт.',
    freeLogoProof: 'Макет лого бесплатно',
    sheet140: '📊 Прайс 140 Моделей',
    lockPriceWa: '💬 Цена в WhatsApp →',
    orderSampleMockup: (sku) => `📦 Заказать образец 1 шт. (${sku}) + Бесплатный макет логотипа 1:1 →`,
    getFullSheetPdf: '📊 Получить полный оптовый прайс-лист на 140 моделей (PDF/Excel) →',
    mixMoqBadge: '✓ Образец 1 шт. · ✓ Микс 50 шт. · ✓ $0 за пресс-форму',
    unitPriceLabel: 'Цена завода / шт.',
    estTotalLabel: 'Итоговая сумма',
    pdpInputPlaceholder: 'Рабочий Email (name@company.com) для расчета и PDF...',
    pdpDirectSendBtn: '⚡ Расчет и PDF →',
    pdpSentConfirm: '✅ Принято! Наш отдел экспорта отправит расчет и PDF прайс за 2–12 часов.'
  },
  ja: {
    sample1Pc: '📦 1個サンプル',
    freeLogoProof: '無料ロゴ校正',
    sheet140: '📊 全140型 価格表',
    lockPriceWa: '💬 WhatsApp見積 →',
    orderSampleMockup: (sku) => `📦 1個サンプル請求（${sku}）＋無料1:1ロゴ校正データ →`,
    getFullSheetPdf: '📊 全140モデルの卸売価格表（PDF/Excel）を即時受け取る →',
    mixMoqBadge: '✓ 1個サンプルOK · ✓ 50個混載OK · ✓ 金型代 $0',
    unitPriceLabel: '工場出荷単価',
    estTotalLabel: '概算小計（金型$0）',
    pdpInputPlaceholder: '法人メールアドレス（name@company.jp）で即時見積・PDF価格表を受取...',
    pdpDirectSendBtn: '⚡ 見積＆PDF受取 →',
    pdpSentConfirm: '✅ 受付完了！輸出担当より2〜12時間以内にお見積りとPDF価格表をお送りします。'
  },
  ko: {
    sample1Pc: '📦 1개 샘플',
    freeLogoProof: '무료 로고 시안',
    sheet140: '📊 140종 단가표',
    lockPriceWa: '💬 WhatsApp 견적 →',
    orderSampleMockup: (sku) => `📦 1개 평가 샘플 신청 (${sku}) + 무료 1:1 로고 시안 →`,
    getFullSheetPdf: '📊 전 제품 140종 도매 단가표 (PDF/Excel) 즉시 받기 →',
    mixMoqBadge: '✓ 1개 샘플 가능 · ✓ 50개 혼합 주문 가능 · ✓ 금형비 $0',
    unitPriceLabel: '공장 출고 단가',
    estTotalLabel: '예상 합계 (금형비 $0)',
    pdpInputPlaceholder: '업무용 이메일(name@company.co.kr)로 즉시 견적 및 PDF 단가표 받기...',
    pdpDirectSendBtn: '⚡ 견적 및 PDF 받기 →',
    pdpSentConfirm: '✅ 접수 완료! 수출팀에서 2~12시간 내에 견적서와 PDF 단가표를 보내드립니다.'
  },
  id: {
    sample1Pc: '📦 Sampel 1 pc',
    freeLogoProof: 'Mockup logo gratis',
    sheet140: '📊 Daftar Harga 140 SKU',
    lockPriceWa: '💬 Harga WhatsApp →',
    orderSampleMockup: (sku) => `📦 Pesan Sampel 1 Pc (${sku}) + Mockup Logo 1:1 Gratis →`,
    getFullSheetPdf: '📊 Dapatkan Daftar Harga Grosir 140 SKU Lengkap (PDF/Excel) →',
    mixMoqBadge: '✓ Sampel 1 pc OK · ✓ 50 pcs Mix-SKU · ✓ Biaya cetakan $0',
    unitPriceLabel: 'Harga Satuan Pabrik',
    estTotalLabel: 'Estimasi Subtotal',
    pdpInputPlaceholder: 'Email Kerja (nama@perusahaan.com) untuk Penawaran & PDF...',
    pdpDirectSendBtn: '⚡ Penawaran & PDF →',
    pdpSentConfirm: '✅ Diterima! Tim ekspor kami akan mengirimkan penawaran & PDF dalam 2–12 jam.'
  },
  ar: {
    sample1Pc: '📦 عينة 1 قطعة',
    freeLogoProof: 'تصميم شعار مجاني',
    sheet140: '📊 قائمة أسعار 140 طرازاً',
    lockPriceWa: '💬 سعر واتساب →',
    orderSampleMockup: (sku) => `📦 اطلب عينة 1 قطعة (${sku}) + تصميم شعار 1:1 مجاني →`,
    getFullSheetPdf: '📊 احصل على قائمة أسعار الجملة الكاملة لـ 140 طرازاً (PDF/Excel) →',
    mixMoqBadge: '✓ عينة 1 قطعة متاحة · ✓ 50 قطعة متنوعة · ✓ 0$ رسوم قالب',
    unitPriceLabel: 'سعر المصنع للقطعة',
    estTotalLabel: 'المجموع التقديري',
    pdpInputPlaceholder: 'البريد الإلكتروني للعمل (name@company.com) لعرض السعر وPDF...',
    pdpDirectSendBtn: '⚡ عرض السعر وPDF →',
    pdpSentConfirm: '✅ تم الاستلام! سيرسل مكتب التصدير عرض السعر وقائمة PDF خلال 2–12 ساعة.'
  }
};

export function getMicroHookLabels(lang: SupportedLanguage = defaultLang): MicroHookLabels {
  return MICRO_HOOK_MAP[lang] || MICRO_HOOK_MAP.en;
}
