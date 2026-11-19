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
}

const MICRO_HOOK_MAP: Record<SupportedLanguage, MicroHookLabels> = {
  en: {
    sample1Pc: '📦 1-Pc Sample',
    freeLogoProof: 'Free Logo Proof',
    sheet140: '📊 140-SKU Sheet',
    lockPriceWa: '💬 Lock Price on WhatsApp →',
    orderSampleMockup: (sku) => `📦 Order 1-Pc Sample (${sku}) + Free 1:1 Logo Mockup →`,
    getFullSheetPdf: '📊 Get Full 140-SKU Wholesale Price Sheet (PDF/Excel) →',
    mixMoqBadge: '✓ 1-Pc Sample OK · ✓ 50-Pc Mix-SKU · ✓ $0 Mold Fee'
  },
  de: {
    sample1Pc: '📦 1-Stk. Muster',
    freeLogoProof: 'Gratis Logo-Entwurf',
    sheet140: '📊 140-SKU Preisliste',
    lockPriceWa: '💬 Preis per WhatsApp sichern →',
    orderSampleMockup: (sku) => `📦 1-Stk. Muster (${sku}) + Gratis 1:1 Logo-Layout anfordern →`,
    getFullSheetPdf: '📊 Komplette 140-SKU Großhandels-Preisliste (PDF/Excel) →',
    mixMoqBadge: '✓ 1-Stk. Muster möglich · ✓ 50-Stk. Mix-SKU · ✓ $0 Formkosten'
  },
  fr: {
    sample1Pc: '📦 Échantillon 1 pce',
    freeLogoProof: 'Maquette logo gratuite',
    sheet140: '📊 Tarifs 140 Modèles',
    lockPriceWa: '💬 Bloquer ce tarif sur WhatsApp →',
    orderSampleMockup: (sku) => `📦 Commander 1 échantillon (${sku}) + Maquette logo 1:1 gratuite →`,
    getFullSheetPdf: '📊 Recevoir la grille tarifaire complète 140 modèles (PDF/Excel) →',
    mixMoqBadge: '✓ Échantillon 1 pce OK · ✓ 50 pcs Mix-SKU · ✓ 0 $ frais de moule'
  },
  nl: {
    sample1Pc: '📦 1-St. Monster',
    freeLogoProof: 'Gratis logoproef',
    sheet140: '📊 140-SKU Prijslijst',
    lockPriceWa: '💬 Prijs vastleggen via WhatsApp →',
    orderSampleMockup: (sku) => `📦 Bestel 1-st. monster (${sku}) + Gratis 1:1 logoproef →`,
    getFullSheetPdf: '📊 Ontvang volledige 140-SKU groothandelsprijslijst (PDF/Excel) →',
    mixMoqBadge: '✓ 1-St. monster OK · ✓ 50-St. Mix-SKU · ✓ $0 matrijskosten'
  },
  es: {
    sample1Pc: '📦 Muestra 1 ud.',
    freeLogoProof: 'Boceto logo gratis',
    sheet140: '📊 Lista 140 Modelos',
    lockPriceWa: '💬 Fijar precio por WhatsApp →',
    orderSampleMockup: (sku) => `📦 Pedir muestra de 1 ud. (${sku}) + Boceto de logo 1:1 gratis →`,
    getFullSheetPdf: '📊 Recibir lista completa de precios mayoristas 140 SKU (PDF/Excel) →',
    mixMoqBadge: '✓ Muestra 1 ud. OK · ✓ 50 uds. Mix-SKU · ✓ $0 costo de molde'
  },
  it: {
    sample1Pc: '📦 Campione 1 pz',
    freeLogoProof: 'Bozza logo gratuita',
    sheet140: '📊 Listino 140 Modelli',
    lockPriceWa: '💬 Blocca il prezzo su WhatsApp →',
    orderSampleMockup: (sku) => `📦 Richiedi campione 1 pz (${sku}) + Bozza logo 1:1 gratuita →`,
    getFullSheetPdf: '📊 Scarica il listino prezzi ingrosso completo 140 SKU (PDF/Excel) →',
    mixMoqBadge: '✓ Campione 1 pz OK · ✓ 50 pz Mix-SKU · ✓ $0 costi di stampo'
  },
  pt: {
    sample1Pc: '📦 Amostra 1 un.',
    freeLogoProof: 'Prova de logo grátis',
    sheet140: '📊 Tabela 140 Modelos',
    lockPriceWa: '💬 Garantir preço no WhatsApp →',
    orderSampleMockup: (sku) => `📦 Solicitar amostra 1 un. (${sku}) + Prova de logo 1:1 grátis →`,
    getFullSheetPdf: '📊 Receber tabela completa de preços atacado 140 SKU (PDF/Excel) →',
    mixMoqBadge: '✓ Amostra 1 un. OK · ✓ 50 un. Mix-SKU · ✓ $0 custo de molde'
  },
  sv: {
    sample1Pc: '📦 1 st Prov',
    freeLogoProof: 'Gratis logokorrektur',
    sheet140: '📊 140-SKU Prislista',
    lockPriceWa: '💬 Lås pris på WhatsApp →',
    orderSampleMockup: (sku) => `📦 Beställ 1 st utvärderingsprov (${sku}) + Gratis 1:1 logokorrektur →`,
    getFullSheetPdf: '📊 Få komplett 140-SKU grossistprislista (PDF/Excel) →',
    mixMoqBadge: '✓ 1 st prov OK · ✓ 50 st Mix-SKU · ✓ $0 verktygskostnad'
  },
  da: {
    sample1Pc: '📦 1 stk. Prøve',
    freeLogoProof: 'Gratis logokorrektur',
    sheet140: '📊 140-SKU Prisliste',
    lockPriceWa: '💬 Lås pris på WhatsApp →',
    orderSampleMockup: (sku) => `📦 Bestil 1 stk. prøve (${sku}) + Gratis 1:1 logokorrektur →`,
    getFullSheetPdf: '📊 Få komplet 140-SKU engrosprisliste (PDF/Excel) →',
    mixMoqBadge: '✓ 1 stk. prøve OK · ✓ 50 stk. Mix-SKU · ✓ $0 værktøjsgebyr'
  },
  no: {
    sample1Pc: '📦 1 stk. Prøve',
    freeLogoProof: 'Gratis logokorrektur',
    sheet140: '📊 140-SKU Prisliste',
    lockPriceWa: '💬 Lås pris på WhatsApp →',
    orderSampleMockup: (sku) => `📦 Bestill 1 stk. prøve (${sku}) + Gratis 1:1 logokorrektur →`,
    getFullSheetPdf: '📊 Få komplett 140-SKU grossistprisliste (PDF/Excel) →',
    mixMoqBadge: '✓ 1 stk. prøve OK · ✓ 50 stk. Mix-SKU · ✓ $0 verktøygebyr'
  },
  fi: {
    sample1Pc: '📦 1 kpl Näyte',
    freeLogoProof: 'Ilmainen logovedos',
    sheet140: '📊 140-SKU Hinnasto',
    lockPriceWa: '💬 Lukitse hinta WhatsAppissa →',
    orderSampleMockup: (sku) => `📦 Tilaa 1 kpl näyte (${sku}) + Ilmainen 1:1 logovedos →`,
    getFullSheetPdf: '📊 Tilaa koko 140-SKU tukkuhinnasto (PDF/Excel) →',
    mixMoqBadge: '✓ 1 kpl näyte OK · ✓ 50 kpl Mix-SKU · ✓ $0 muottikulu'
  },
  pl: {
    sample1Pc: '📦 Próbka 1 szt.',
    freeLogoProof: 'Darmowy projekt logo',
    sheet140: '📊 Cennik 140 Modeli',
    lockPriceWa: '💬 Zablokuj cenę na WhatsApp →',
    orderSampleMockup: (sku) => `📦 Zamów próbkę 1 szt. (${sku}) + Darmowa wizualizacja logo 1:1 →`,
    getFullSheetPdf: '📊 Pobierz pełny cennik hurtowy 140 modeli (PDF/Excel) →',
    mixMoqBadge: '✓ Próbka 1 szt. OK · ✓ 50 szt. Mix-SKU · ✓ 0 $ za formę'
  },
  cs: {
    sample1Pc: '📦 Vzorek 1 ks',
    freeLogoProof: 'Náhled loga zdarma',
    sheet140: '📊 Ceník 140 Modelů',
    lockPriceWa: '💬 Potvrdit cenu přes WhatsApp →',
    orderSampleMockup: (sku) => `📦 Objednat vzorek 1 ks (${sku}) + 1:1 náhled loga zdarma →`,
    getFullSheetPdf: '📊 Získat kompletní velkoobchodní ceník 140 SKU (PDF/Excel) →',
    mixMoqBadge: '✓ Vzorek 1 ks OK · ✓ 50 ks Mix-SKU · ✓ $0 poplatek za formu'
  },
  ru: {
    sample1Pc: '📦 Образец 1 шт.',
    freeLogoProof: 'Макет лого бесплатно',
    sheet140: '📊 Прайс 140 Моделей',
    lockPriceWa: '💬 Зафиксировать цену в WhatsApp →',
    orderSampleMockup: (sku) => `📦 Заказать образец 1 шт. (${sku}) + Бесплатный макет логотипа 1:1 →`,
    getFullSheetPdf: '📊 Получить полный оптовый прайс-лист на 140 моделей (PDF/Excel) →',
    mixMoqBadge: '✓ Образец 1 шт. · ✓ Микс 50 шт. · ✓ $0 за пресс-форму'
  },
  ja: {
    sample1Pc: '📦 1個サンプル',
    freeLogoProof: '無料ロゴ校正',
    sheet140: '📊 全140型 価格表',
    lockPriceWa: '💬 WhatsAppでこの価格を確定 →',
    orderSampleMockup: (sku) => `📦 1個サンプル請求（${sku}）＋無料1:1ロゴ校正データ →`,
    getFullSheetPdf: '📊 全140モデルの卸売価格表（PDF/Excel）を即時受け取る →',
    mixMoqBadge: '✓ 1個サンプルOK · ✓ 50個混載OK · ✓ 金型代 $0'
  },
  ko: {
    sample1Pc: '📦 1개 샘플',
    freeLogoProof: '무료 로고 시안',
    sheet140: '📊 140종 단가표',
    lockPriceWa: '💬 WhatsApp으로 이 단가 확정 →',
    orderSampleMockup: (sku) => `📦 1개 평가 샘플 신청 (${sku}) + 무료 1:1 로고 시안 →`,
    getFullSheetPdf: '📊 전 제품 140종 도매 단가표 (PDF/Excel) 즉시 받기 →',
    mixMoqBadge: '✓ 1개 샘플 가능 · ✓ 50개 혼합 주문 가능 · ✓ 금형비 $0'
  },
  id: {
    sample1Pc: '📦 Sampel 1 pc',
    freeLogoProof: 'Mockup logo gratis',
    sheet140: '📊 Daftar Harga 140 SKU',
    lockPriceWa: '💬 Kunci Harga di WhatsApp →',
    orderSampleMockup: (sku) => `📦 Pesan Sampel 1 Pc (${sku}) + Mockup Logo 1:1 Gratis →`,
    getFullSheetPdf: '📊 Dapatkan Daftar Harga Grosir 140 SKU Lengkap (PDF/Excel) →',
    mixMoqBadge: '✓ Sampel 1 pc OK · ✓ 50 pcs Mix-SKU · ✓ Biaya cetakan $0'
  },
  ar: {
    sample1Pc: '📦 عينة 1 قطعة',
    freeLogoProof: 'تصميم شعار مجاني',
    sheet140: '📊 قائمة أسعار 140 طرازاً',
    lockPriceWa: '💬 تثبيت السعر عبر واتساب →',
    orderSampleMockup: (sku) => `📦 اطلب عينة 1 قطعة (${sku}) + تصميم شعار 1:1 مجاني →`,
    getFullSheetPdf: '📊 احصل على قائمة أسعار الجملة الكاملة لـ 140 طرازاً (PDF/Excel) →',
    mixMoqBadge: '✓ عينة 1 قطعة متاحة · ✓ 50 قطعة متنوعة · ✓ 0$ رسوم قالب'
  }
};

export function getMicroHookLabels(lang: SupportedLanguage = defaultLang): MicroHookLabels {
  return MICRO_HOOK_MAP[lang] || MICRO_HOOK_MAP.en;
}
