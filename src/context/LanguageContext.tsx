import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState('en');

  const translations: Record<string, Record<string, string>> = {
    en: {
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.blog': 'Blog',
      'nav.community': 'Community',
      'home.hero.title': 'Transform Your Business with AI & IT Solutions',
      'home.hero.subtitle': 'Cutting-edge technology solutions for modern businesses',
      'home.tool_ai_matcher': 'AI Matcher',
      'home.tool_ai_matcher_desc': 'Find perfect matches',
      'home.tool_talent': 'Talent Directory',
      'home.tool_talent_desc': 'Browse verified experts',
      'home.tool_services': 'Services',
      'home.tool_services_desc': 'Professional solutions',
      'home.tool_equipment': 'Equipment',
      'home.tool_equipment_desc': 'Cutting-edge tech',
      'home.tool_chat_desc': 'Connect & collaborate',
      'services.ai.title': 'AI Services',
      'services.ai.description': 'Advanced artificial intelligence solutions',
      'services.it.title': 'IT Services',
      'services.it.description': 'Comprehensive IT infrastructure solutions',
      'services.saas.title': 'Micro SAAS',
      'services.saas.description': 'Scalable software-as-a-service platforms',
    },
    es: {
      'nav.home': 'Inicio',
      'nav.services': 'Servicios',
      'nav.about': 'Acerca de',
      'nav.contact': 'Contacto',
      'nav.blog': 'Blog',
      'nav.community': 'Comunidad',
      'home.hero.title': 'Transforma tu Negocio con IA y Soluciones IT',
      'home.hero.subtitle': 'Soluciones tecnológicas de vanguardia para empresas modernas',
      'home.tool_ai_matcher': 'Buscador IA',
      'home.tool_ai_matcher_desc': 'Encuentra coincidencias perfectas',
      'home.tool_talent': 'Directorio de Talento',
      'home.tool_talent_desc': 'Explora expertos verificados',
      'home.tool_services': 'Servicios',
      'home.tool_services_desc': 'Soluciones profesionales',
      'home.tool_equipment': 'Equipamiento',
      'home.tool_equipment_desc': 'Tecnología de vanguardia',
      'home.tool_chat_desc': 'Conecta y colabora',
      'services.ai.title': 'Servicios de IA',
      'services.ai.description': 'Soluciones avanzadas de inteligencia artificial',
      'services.it.title': 'Servicios IT',
      'services.it.description': 'Soluciones integrales de infraestructura IT',
      'services.saas.title': 'Micro SAAS',
      'services.saas.description': 'Plataformas escalables de software como servicio',
    },
    fr: {
      'nav.home': 'Accueil',
      'nav.services': 'Services',
      'nav.about': 'À propos',
      'nav.contact': 'Contact',
      'nav.blog': 'Blog',
      'nav.community': 'Communauté',
      'home.hero.title': 'Transformez votre Entreprise avec l\'IA et les Solutions IT',
      'home.hero.subtitle': 'Solutions technologiques de pointe pour les entreprises modernes',
      'home.tool_ai_matcher': 'Assortisseur IA',
      'home.tool_ai_matcher_desc': 'Trouvez des correspondances parfaites',
      'home.tool_talent': 'Répertoire des Talents',
      'home.tool_talent_desc': 'Parcourez les experts vérifiés',
      'home.tool_services': 'Services',
      'home.tool_services_desc': 'Solutions professionnelles',
      'home.tool_equipment': 'Équipement',
      'home.tool_equipment_desc': 'Technologie de pointe',
      'home.tool_chat_desc': 'Connectez et collaborez',
      'services.ai.title': 'Services IA',
      'services.ai.description': 'Solutions avancées d\'intelligence artificielle',
      'services.it.title': 'Services IT',
      'services.it.description': 'Solutions complètes d\'infrastructure IT',
      'services.saas.title': 'Micro SAAS',
      'services.saas.description': 'Plateformes logicielles en tant que service évolutives',
    },
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
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
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}