// Language switcher - client-side translation without reload
window.SAIBA = window.SAIBA || {};
window.SAIBA.i18n = (function() {
  'use strict';
  
  const storage = window.localStorage;
  const langKey = 'saiba-lang';
  
  // Translation data loaded from i18n file
  let translations = {};
  
  // Get current language from storage or URL
  function getCurrentLang() {
    const stored = storage.getItem(langKey);
    if (stored) return stored;
    
    const path = window.location.pathname;
    const match = path.match(/\/(en|da)\//);
    return match ? match[1] : 'da';
  }
  
  // Set language and update URL
  function setLang(lang) {
    storage.setItem(langKey, lang);
    updateURL(lang);
    updateContent(lang);
  }
  
  // Update URL without reload
  function updateURL(lang) {
    const path = window.location.pathname;
    const newPath = path.replace(/\/(en|da)\//, `/${lang}/`) || `/${lang}`;
    window.history.pushState({}, '', newPath);
  }
  
  // Update page content
  function updateContent(lang) {
    if (!translations[lang]) {
      console.error('Translations not loaded for', lang);
      return;
    }
    
    const t = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translated = key.split('.').reduce((obj, k) => obj?.[k], t);
      if (translated) {
        el.textContent = translated;
      }
    });
    
    // Update html lang attribute
    document.documentElement.lang = lang;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = t.description || metaDescription.content;
    }
    
    // Emit custom event
    window.dispatchEvent(new CustomEvent('language-changed', { detail: { lang } }));
  }
  
  // Initialize
  function init(translationData) {
    translations = translationData;
    const currentLang = getCurrentLang();
    updateContent(currentLang);
  }
  
  return {
    init,
    setLang,
    getCurrentLang
  };
})();

