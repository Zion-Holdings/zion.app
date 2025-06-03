import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { safeStorage } from './utils/safeStorage';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      // Avoid using localStorage to prevent cross-context errors
      order: ['navigator'],
      caches: []
    },
  });

// Persist chosen language using safeStorage
i18n.on('languageChanged', (lng) => {
  safeStorage.setItem('i18n_lang', lng);
});

export default i18n;
