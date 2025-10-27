import { translations, type Language, defaultLang } from '../i18n';

export function getLangFromUrl(url: URL): Language {
  let pathname = url.pathname;
  
  // Remove base URL if present (for production build with base path)
  const base = import.meta.env.BASE_URL || '/';
  if (base !== '/' && base !== '/' && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length);
  }
  
  // Clean up leading/trailing slashes
  pathname = pathname.replace(/^\/+|\/+$/g, '');
  
  // Get all path segments
  const segments = pathname.split('/').filter(Boolean);
  
  // Check each segment for a valid language code
  for (const segment of segments) {
    if (segment in translations) {
      return segment as Language;
    }
  }
  
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof translations[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key];
  }
}