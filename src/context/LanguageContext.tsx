import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { safeStorage } from '@/utils/safeStorage';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import { setCookie, getCookie } from '@/utils/cookies';
import { useTranslation } from 'react-i18next';
import { toast } from '../components/ui/use-toast';

export type SupportedLanguage = 'en' | 'es' | 'fr' | 'pt' | 'ar';

export type LanguageContextType = {
  currentLanguage: SupportedLanguage;
  changeLanguage: (lang: SupportedLanguage) => Promise<void>;
  isRTL: boolean;
  supportedLanguages: { code: SupportedLanguage; name: string; flag: string }[];
};

/**
 * Default list of languages supported by the application. Exported so
 * components can fall back to it if the context has not been initialized
 * correctly.
 */
export const SUPPORTED_LANGUAGES = [
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' },
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' },
  { code: 'fr' as SupportedLanguage, name: 'Français', flag: '🇫🇷' },
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' },
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
];

const supportedLanguages = SUPPORTED_LANGUAGES;

const defaultLanguageContext: LanguageContextType = {
  currentLanguage: 'en',
  changeLanguage: async () => {},
  isRTL: false,
  supportedLanguages
};

const LanguageContext = createContext(defaultLanguageContext);

export const useLanguage = (): LanguageContextType => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
  authState?: { 
    isAuthenticated: boolean;
    user: { id?: string } | null;
  };
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  authState = { isAuthenticated: false, user: null } 
}) => {
  const { i18n, t } = useTranslation();
  const { isAuthenticated, user } = authState;
  // Initialize currentLanguage state with a value that reflects i18next's initial detection or fallback.
  // This will be refined by the useEffect hook below for initial load logic.
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(() => {
    const initialI18nLang = i18n.language;
    if (initialI18nLang) {
      const shortLang = initialI18nLang.substring(0, 2) as SupportedLanguage;
      if (supportedLanguages.some(l => l.code === shortLang)) {
        return shortLang;
      }
    }
    return 'en'; // Default fallback
  });
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl');

  useEffect(() => {
    const navigatorLocale = typeof window !== "undefined" ? window.navigator.language : 'en'; // Default to 'en' for SSR or tests
    const cookieLang = getCookie('i18n_lang') as SupportedLanguage | undefined;
    const storageLang = safeStorage.getItem('i18n_lang') as SupportedLanguage | undefined;
    const persistedLang = cookieLang || storageLang;

    let langToSet: SupportedLanguage;

    if (navigatorLocale.startsWith('en-')) {
      // If browser is 'en-US' (or any 'en-*'), force initial language to 'en'.
      // This makes browser's English preference override any non-English cookie for initial load.
      langToSet = 'en';
    } else if (persistedLang && supportedLanguages.some(lang => lang.code === persistedLang)) {
      // If browser is NOT English, and a valid language cookie/storage exists, use that.
      langToSet = persistedLang;
    } else {
      // If browser is NOT English and no valid persisted lang, try to use browser's language if supported.
      const browserBaseLang = navigatorLocale.substring(0, 2) as SupportedLanguage;
      if (supportedLanguages.some(lang => lang.code === browserBaseLang)) {
        langToSet = browserBaseLang;
      } else {
        // Final fallback if browser's language is not directly supported (e.g. 'de' and only 'en', 'es' are options)
        const fallbackLng = i18n.options.fallbackLng;
        let determinedFallback: string | undefined;

        if (typeof fallbackLng === 'string') {
          determinedFallback = fallbackLng;
        } else if (Array.isArray(fallbackLng)) {
          determinedFallback = fallbackLng[0];
        } else if (typeof fallbackLng === 'object' && fallbackLng !== null && !Array.isArray(fallbackLng)) { // Explicitly check it's an object and not an array
          // It's an object, try 'default' or the first property
          const fallbackLngObj = fallbackLng as { [key: string]: string[] }; // Cast to a more specific object type
          if (fallbackLngObj['default'] && Array.isArray(fallbackLngObj['default']) && fallbackLngObj['default'].length > 0) {
            determinedFallback = fallbackLngObj['default'][0];
          } else {
            const keys = Object.keys(fallbackLngObj);
            if (keys.length > 0 && keys[0] !== undefined) { // Ensure keys[0] is not undefined
              const firstKey = keys[0];
              const firstKeyValues = fallbackLngObj[firstKey];
              if (Array.isArray(firstKeyValues) && firstKeyValues.length > 0) {
                determinedFallback = firstKeyValues[0];
              }
            }
          }
        }

        if (determinedFallback && supportedLanguages.some(l => l.code === determinedFallback)) {
          langToSet = determinedFallback as SupportedLanguage;
        } else {
          // Fallback logic: try i18next's own fallback list if primary determination fails or isn't supported
          const i18nFallbackSetting = i18n.options.fallbackLng;
          let finalFallbackAttempt: string | undefined;

          if (typeof i18nFallbackSetting === 'string') {
            finalFallbackAttempt = i18nFallbackSetting;
          } else if (Array.isArray(i18nFallbackSetting) && i18nFallbackSetting.length > 0) {
            finalFallbackAttempt = i18nFallbackSetting[0];
          }
          // Note: Complex object fallbacks from i18next settings are tricky to universally apply here without specific rules.
          // We prioritize simple string/array fallbacks from i18next if our initial 'determinedFallback' is invalid.

          if (finalFallbackAttempt && supportedLanguages.some(l => l.code === finalFallbackAttempt)) {
            langToSet = finalFallbackAttempt as SupportedLanguage;
          } else {
            langToSet = 'en'; // Absolute fallback
          }
        }
      }
    }
    
    logInfo(`LanguageContext: Initializing language. Navigator: ${navigatorLocale}, Cookie: ${cookieLang}, Storage: ${storageLang}, CurrentContextLang: ${currentLanguage}, CurrentI18nLang: ${i18n.language}, Decided: ${langToSet}`);

    if (i18n.language !== langToSet) {
      i18n.changeLanguage(langToSet).then(() => {
        setCurrentLanguage(langToSet);
        if (typeof document !== 'undefined') {
          document.documentElement.lang = langToSet;
          document.documentElement.dir = langToSet === 'ar' ? 'rtl' : 'ltr';
          if (langToSet === 'ar') document.documentElement.classList.add('rtl'); else document.documentElement.classList.remove('rtl');
        }
      }).catch(err => {
        logErrorToProduction('LanguageContext: Error setting initial language in i18n', { data: err });
        setCurrentLanguage('en'); // Fallback state
        if (i18n.language !== 'en') i18n.changeLanguage('en'); // Attempt to set i18n to fallback
        if (typeof document !== 'undefined') {
          document.documentElement.lang = 'en';
          document.documentElement.dir = 'ltr';
          document.documentElement.classList.remove('rtl');
        }
      });
    } else if (currentLanguage !== langToSet) {
      // i18n is already correct, just update context state and DOM attributes if needed
      setCurrentLanguage(langToSet);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = langToSet;
        document.documentElement.dir = langToSet === 'ar' ? 'rtl' : 'ltr';
        if (langToSet === 'ar') document.documentElement.classList.add('rtl'); else document.documentElement.classList.remove('rtl');
      }
    }
   
  }, []); // Run once on component mount to set initial language.

  // Effect to react to changes in i18n.language from other sources (e.g. detector post-init)
  // AND to update DOM attributes whenever currentLanguage (driven by this context) changes.
  useEffect(() => {
    const handleLanguageChange = (lng?: string) => {
      const newLang = (lng?.substring(0, 2) as SupportedLanguage) || currentLanguage;
      setIsRTL(i18n.dir(newLang) === 'rtl');
      if (typeof document !== 'undefined') {
        document.documentElement.lang = newLang;
        document.documentElement.dir = i18n.dir(newLang);
        if (i18n.dir(newLang) === 'rtl') {
          document.documentElement.classList.add('rtl');
        } else {
          document.documentElement.classList.remove('rtl');
        }
      }
      if(currentLanguage !== newLang && supportedLanguages.some(l => l.code === newLang)) {
        setCurrentLanguage(newLang);
      }
    };

    // Initial setup based on currentLanguage (which might have been set by the first useEffect)
    handleLanguageChange();

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [currentLanguage, i18n]);
  
  // Note: Language preference sync with user profile removed after Auth0 migration
  // Future: Implement Auth0 user metadata sync if needed
  
  const changeLanguage = async (lang: SupportedLanguage) => {
    if (lang === currentLanguage && i18n.language === lang) { // also check i18n.language
      logInfo('LanguageContext: Language already selected and applied:', { data: lang });
      return;
    }
    
    logInfo('LanguageContext: Changing language from', { data: { from: currentLanguage, i18nLang: i18n.language, to: lang } });
    
    try {
      // Change i18n language
      await i18n.changeLanguage(lang);
      setCurrentLanguage(lang);
      
      // Persist language choice with longer expiration (1 year)
      setCookie('i18n_lang', lang, 365);
      safeStorage.setItem('i18n_lang', lang);
      
      // Get language name for toast
      const langName = supportedLanguages.find(l => l.code === lang)?.name || lang;
      
      logInfo('LanguageContext: Language changed successfully to', { data: { lang: lang, langName: langName } });
      
      toast({
        description: t('language.language_changed', { language: langName })
      });
      
      // Force immediate DOM updates
      setTimeout(() => {
        if (typeof document !== 'undefined') {
          document.documentElement.lang = lang;
          document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
          
          // Trigger a custom event to notify components about language change
          window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
          
          logInfo('LanguageContext: DOM updated with new language:', { data: lang });
        }
      }, 50);
      
    } catch (err) {
      logErrorToProduction('LanguageContext: Error changing language:', { data: err });
      toast({
        title: 'Error',
        description: 'Failed to change language',
        variant: 'destructive',
      });
    }
  };
  
  return (
    <LanguageContext.Provider 
      value={{ 
        currentLanguage, 
        changeLanguage, 
        isRTL,
        supportedLanguages
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};