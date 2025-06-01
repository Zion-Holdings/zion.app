import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import LocalStorageCache from 'i18next-localstorage-cache';

i18n
  .use(LanguageDetector)
  .use(LocalStorageCache)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // Add English translations here
        },
      },
      es: {
        translation: {
          // Add Spanish translations here
        },
      },
      pt: {
        translation: {
          // Add Portuguese translations here
        },
      },
    },
  });

export default i18n;
