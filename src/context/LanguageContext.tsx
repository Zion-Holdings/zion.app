import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { safeStorage } from '@/utils/safeStorage';
import { setCookie, getCookie } from '@/utils/cookies';
import { useTranslation } from 'react-i18next';
import { supabase } from '../integrations/supabase/client';
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
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    (i18n.language?.substring(0, 2) as SupportedLanguage) || 'en'
  );
  const [isRTL, setIsRTL] = useState(i18n.dir() === 'rtl');
  
  useEffect(() => {
    // Set initial language from cookie or browser
    const savedLang = (getCookie('i18n_lang') as SupportedLanguage) ||
      (safeStorage.getItem('i18n_lang') as SupportedLanguage);
    if (savedLang && supportedLanguages.some(lang => lang.code === savedLang)) {
      i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang);
    } else {
      const detected = i18n.language.substring(0, 2) as SupportedLanguage;
      if (supportedLanguages.some(l => l.code === detected)) {
        setCookie('i18n_lang', detected, 365);
        safeStorage.setItem('i18n_lang', detected);
        setCurrentLanguage(detected);
      }
    }
  }, []);
  
  // Update RTL status when language changes
  useEffect(() => {
    setIsRTL(i18n.dir() === 'rtl');
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = currentLanguage;
    
    // Add RTL class for Tailwind
    if (i18n.dir() === 'rtl') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }, [currentLanguage, i18n]);
  
  // Sync language preference with user profile when authenticated
  useEffect(() => {
    const syncLanguageWithProfile = async () => {
      if (isAuthenticated && user?.id) {
        try {
          const { error } = await supabase
            .from('profiles')
            .update({ preferred_language: currentLanguage })
            .eq('id', user.id);
            
          if (error) {
            console.error('Error updating language preference:', error);
          }
        } catch (err) {
          console.error('Error syncing language with profile:', err);
        }
      }
    };
    
    syncLanguageWithProfile();
  }, [currentLanguage, isAuthenticated, user]);
  
  const changeLanguage = async (lang: SupportedLanguage) => {
    if (lang === currentLanguage) return;
    
    try {
      await i18n.changeLanguage(lang);
      setCurrentLanguage(lang);
      
      // Persist language choice with longer expiration (1 year)
      setCookie('i18n_lang', lang, 365);
      safeStorage.setItem('i18n_lang', lang);
      
      // Get language name for toast
      const langName = supportedLanguages.find(l => l.code === lang)?.name || lang;
      toast({
        description: t('language.language_changed', { language: langName })
      });
      
      // If user is authenticated, update their profile
      if (isAuthenticated && user?.id) {
        const { error } = await supabase
          .from('profiles')
          .update({ preferred_language: lang })
          .eq('id', user.id);
          
        if (error) {
          console.error('Error updating language preference:', error);
        }
      }
      
      // Force immediate DOM updates
      setTimeout(() => {
        if (typeof document !== 'undefined') {
          document.documentElement.lang = lang;
          document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
          
          // Trigger a custom event to notify components about language change
          window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
        }
      }, 50);
      
    } catch (err) {
      console.error('Error changing language:', err);
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