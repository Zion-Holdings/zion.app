import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { safeStorage } from '@/utils/safeStorage';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import { toast } from '../components/ui/use-toast';

export type SupportedLanguage = 'en-US' | 'es-ES';

export type LanguageContextType = {
  currentLanguage: SupportedLanguage;
  changeLanguage: (lang: SupportedLanguage) => Promise<void>;
  isRTL: boolean;
  supportedLanguages: { code: SupportedLanguage; name: string; flag: string }[];
};

const supportedLanguages = [
  { code: 'en-US' as SupportedLanguage, name: 'English', flag: '🇺🇸' },
  { code: 'es-ES' as SupportedLanguage, name: 'Español', flag: '🇪🇸' }
];

const supportedLanguages = SUPPORTED_LANGUAGES;

const defaultLanguageContext: LanguageContextType = {
  currentLanguage: 'en-US',
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
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    (i18n.language as SupportedLanguage) || 'en-US'
  );
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl');

  useEffect(() => {
    // Set initial language from cookie or localStorage
    const savedLang = (Cookies.get('zion_language') as SupportedLanguage) ||
      (safeStorage.getItem('zion_language') as SupportedLanguage);
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {
      i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang);
    } else {
      fetch('/api/detect-language')
        .then(res => res.json())
        .then(data => {
          if (data.lang && supportedLanguages.some(l => l.code === data.lang)) {
            i18n.changeLanguage(data.lang);
            setCurrentLanguage(data.lang as SupportedLanguage);
          }
        })
        .catch(() => {});
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
      logInfo('LanguageContext: Language already selected and applied:', { data:  { data: lang } });
      return;
    }
    
    logInfo('LanguageContext: Changing language from', { data: { from: currentLanguage, i18nLang: i18n.language, to: lang } });
    
    try {
      // Change i18n language
      await i18n.changeLanguage(lang);
      setCurrentLanguage(lang);
      Cookies.set('zion_language', lang, { expires: 365 });
      safeStorage.setItem('zion_language', lang);
      
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
          
          logInfo('LanguageContext: DOM updated with new language:', { data:  { data: lang } });
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