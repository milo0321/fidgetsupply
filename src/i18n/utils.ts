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
