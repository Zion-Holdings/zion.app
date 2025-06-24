
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { safeStorage } from '../utils/safeStorage';
import { setCookie } from '../utils/cookies';

import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import ptTranslation from './locales/pt/translation.json';
import frTranslation from './locales/fr/translation.json';
import arTranslation from './locales/ar/translation.json';

if (!i18n) {
  console.error("CRITICAL: i18next failed to import. Internationalization will not work.");
} else {
  // Initialize i18next
  i18n
    .use(LanguageDetector) // Detect user language
    .use(initReactI18next) // Initialize react-i18next
    .init({
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      },
      fr: {
        translation: frTranslation
      },
      pt: {
        translation: ptTranslation
      },
      ar: {
        translation: arTranslation
      }
    },
    fallbackLng: 'en', // Default language
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    detection: {
      order: ['cookie', 'navigator'],
      lookupCookie: 'i18n_lang',
      caches: ['cookie'],
    },
  })
  .catch(error => {
    console.error("Error initializing i18next or its detector:", error);
    // This helps prevent an unhandled promise rejection if init fails.
  });

  // Add this check at the beginning of the relevant section
  if (typeof window !== 'undefined') {
    // For RTL language support
    document.documentElement.dir = i18n.dir();

    // Listen for language changes to update RTL/LTR direction
    i18n.on('languageChanged', (lng) => {
      document.documentElement.dir = i18n.dir();

      // Save language preference to cookie and localStorage
      setCookie('i18n_lang', lng, 365);
      safeStorage.setItem('i18n_lang', lng);

      // If user is authenticated, save language preference to profile
      // This will be implemented in the LanguageContext
    });
  }
}

export default i18n;
