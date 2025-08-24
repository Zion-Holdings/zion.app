import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'zh' | 'ja' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

// Simple translation function - in a real app, you'd use i18next or similar
const translations: Record<Language, Record<string, string>> = {
  en: {
    'welcome': 'Welcome',
    'services': 'Services',
    'about': 'About',
    'contact': 'Contact',
    'login': 'Login',
    'register': 'Register',
  },
  es: {
    'welcome': 'Bienvenido',
    'services': 'Servicios',
    'about': 'Acerca de',
    'contact': 'Contacto',
    'login': 'Iniciar sesión',
    'register': 'Registrarse',
  },
  fr: {
    'welcome': 'Bienvenue',
    'services': 'Services',
    'about': 'À propos',
    'contact': 'Contact',
    'login': 'Connexion',
    'register': 'S\'inscrire',
  },
  de: {
    'welcome': 'Willkommen',
    'services': 'Dienstleistungen',
    'about': 'Über uns',
    'contact': 'Kontakt',
    'login': 'Anmelden',
    'register': 'Registrieren',
  },
  pt: {
    'welcome': 'Bem-vindo',
    'services': 'Serviços',
    'about': 'Sobre',
    'contact': 'Contato',
    'login': 'Entrar',
    'register': 'Registrar',
  },
  zh: {
    'welcome': '欢迎',
    'services': '服务',
    'about': '关于',
    'contact': '联系',
    'login': '登录',
    'register': '注册',
  },
  ja: {
    'welcome': 'ようこそ',
    'services': 'サービス',
    'about': 'について',
    'contact': 'お問い合わせ',
    'login': 'ログイン',
    'register': '登録',
  },
  ko: {
    'welcome': '환영합니다',
    'services': '서비스',
    'about': '소개',
    'contact': '연락처',
    'login': '로그인',
    'register': '가입',
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  defaultLanguage = 'en' 
}) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};