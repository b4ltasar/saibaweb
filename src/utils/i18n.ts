import { translations, type Language, defaultLang } from '../i18n';

export function getLangFromUrl(url: URL): Language {
  // Remove base URL if present
  const base = import.meta.env.BASE_URL || '/';
  let pathname = url.pathname;
  
  // Strip base URL from pathname
  if (base !== '/' && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length);
  }
  
  // Get language from path
  const [, lang] = pathname.split('/');
  if (lang in translations) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof translations[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key];
  }
}