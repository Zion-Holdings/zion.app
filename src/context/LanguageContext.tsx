import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { safeStorage } from '@/utils/safeStorage';
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

const supportedLanguages = [
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇺🇸' },
  { code: 'es' as SupportedLanguage, name: 'Español', flag: '🇪🇸' },
  { code: 'fr' as SupportedLanguage, name: 'Français', flag: '🇫🇷' },
  { code: 'pt' as SupportedLanguage, name: 'Português', flag: '🇧🇷' },
  { code: 'ar' as SupportedLanguage, name: 'العربية', flag: '🇸🇦' }
];

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
        langToSet = (i18n.options.fallbackLng as SupportedLanguage[] | SupportedLanguage)?.[0] || 'en';
        if (Array.isArray(langToSet)) langToSet = langToSet[0] || 'en'; // handle array fallbackLng
      }
    }
    
    console.log(`LanguageContext: Initializing language. Navigator: ${navigatorLocale}, Cookie: ${cookieLang}, Storage: ${storageLang}, CurrentContextLang: ${currentLanguage}, CurrentI18nLang: ${i18n.language}, Decided: ${langToSet}`);

    if (i18n.language !== langToSet) {
      i18n.changeLanguage(langToSet).then(() => {
        setCurrentLanguage(langToSet);
        if (typeof document !== 'undefined') {
          document.documentElement.lang = langToSet;
          document.documentElement.dir = langToSet === 'ar' ? 'rtl' : 'ltr';
          if (langToSet === 'ar') document.documentElement.classList.add('rtl'); else document.documentElement.classList.remove('rtl');
        }
      }).catch(err => {
        console.error("LanguageContext: Error setting initial language in i18n", err);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      console.log('LanguageContext: Language already selected and applied:', lang);
      return;
    }
    
    console.log('LanguageContext: Changing language from', currentLanguage, '(i18n:', i18n.language, ') to', lang);
    
    try {
      // Change i18n language
      await i18n.changeLanguage(lang);
      setCurrentLanguage(lang);
      
      // Persist language choice with longer expiration (1 year)
      setCookie('i18n_lang', lang, 365);
      safeStorage.setItem('i18n_lang', lang);
      
      // Get language name for toast
      const langName = supportedLanguages.find(l => l.code === lang)?.name || lang;
      
      console.log('LanguageContext: Language changed successfully to', lang, '(' + langName + ')');
      
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
          
          console.log('LanguageContext: DOM updated with new language:', lang);
        }
      }, 50);
      
    } catch (err) {
      console.error('LanguageContext: Error changing language:', err);
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