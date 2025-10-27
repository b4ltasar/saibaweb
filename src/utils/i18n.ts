import { translations, type Language, defaultLang } from '../i18n';

export function getLangFromUrl(url: URL): Language {
  // Get all path segments
  const segments = url.pathname.split('/').filter(Boolean);
  
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