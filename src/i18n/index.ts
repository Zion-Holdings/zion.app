import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { safeStorage } from '../utils/safeStorage';
import { setCookie } from '../utils/cookies';

import enTranslation from './locales/en/translation.json';
import enUsTranslation from './locales/en-US/translation.json';
import esTranslation from './locales/es/translation.json';
import ptTranslation from './locales/pt/translation.json';
import frTranslation from './locales/fr/translation.json';
import arTranslation from './locales/ar/translation.json';
import {logErrorToProduction} from '@/utils/productionLogger';


if (!i18n) {
  logErrorToProduction("CRITICAL: i18next failed to import. Internationalization will not work.");
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
      'en-US': {
        translation: enUsTranslation
      },
      es: {
        translation: esTranslation
      },
      'es-ES': {
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
    preload: ['en-US', 'es-ES'],
    supportedLngs: ['en', 'en-US', 'es', 'es-ES', 'fr', 'pt', 'ar'],
    debug: false, // Disabled debug to reduce console noise - enable only when needed
    // Silence noisy i18next warnings in development logs
    // logger: {
    //   log: () => {},
    //   warn: () => {},
    //   error: console.error,
    // },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    // Performance optimizations
    load: 'currentOnly', // Only load current language instead of all fallbacks
    cleanCode: true, // Clean up language codes
    nonExplicitSupportedLngs: false, // Don't auto-detect non-explicit languages
    initImmediate: false, // Initialize synchronously to avoid missing key warnings
    detection: {
      order: ['cookie', 'navigator'], // Keep navigator as a fallback for first-time users
      lookupCookie: 'i18n_lang',
      caches: ['cookie'], // Re-enabled cookie caching for better performance
    },
  })
  .catch(error => {
    logErrorToProduction('Error initializing i18next or its detector:', { data: error });
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
      setCookie('i18n_lang', lng);
      safeStorage.setItem('i18n_lang', lng);

      // If user is authenticated, save language preference to profile
      // This will be implemented in the LanguageContext
    });

  }
}

// Capture missing translation keys on both client and server
i18n.on('missingKey', (lngs, namespace, key) => {
  logErrorToProduction(`Missing translation key: ${key}`, {
    data: {
      languages: lngs,
      namespace,
    },
  });
  // Also persist missing keys on the server for easier debugging
  if (typeof window === 'undefined') {
    try {
      // Use dynamic imports for Node.js modules in server-side environment
      import('fs').then(async (fs) => {
        const path = await import('path');
        const logsDir = path.join(process.cwd(), 'logs');
        if (!fs.existsSync(logsDir)) {
          fs.mkdirSync(logsDir, { recursive: true });
        }
        const filePath = path.join(logsDir, 'missing-keys.log');
        const line = `${new Date().toISOString()} ${lngs.join(',')} ${namespace} ${key}\n`;
        fs.appendFileSync(filePath, line);
      }).catch(() => {
        // Fail silently to avoid interfering with app flow
      });
    } catch (error) {
      // Fail silently to avoid interfering with app flow
    }
  }
});

export default i18n;
