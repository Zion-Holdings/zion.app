import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState('en');

  const translations: Record<string, Record<string, string>> = {
    en: {
      'welcome': 'Welcome',
      'get_started': 'Get Started',
      'learn_more': 'Learn More',
      'contact_us': 'Contact Us'
    },
    es: {
      'welcome': 'Bienvenido',
      'get_started': 'Comenzar',
      'learn_more': 'Saber Más',
      'contact_us': 'Contáctanos'
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  const isRTL = language === 'ar' || language === 'he';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}