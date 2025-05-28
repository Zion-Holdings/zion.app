
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { safeStorage } from '../utils/safeStorage';

import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import ptTranslation from './locales/pt/translation.json';
import arTranslation from './locales/ar/translation.json';

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
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'zion_language',
      caches: ['localStorage']
    },
  });

// For RTL language support
document.documentElement.dir = i18n.dir();

// Listen for language changes to update RTL/LTR direction
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = i18n.dir();

  // Save language preference to localStorage
  safeStorage.setItem('zion_language', lng);
  
  // If user is authenticated, save language preference to profile
  // This will be implemented in the LanguageContext
});

export default i18n;
