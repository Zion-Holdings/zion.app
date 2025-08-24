import React, { createContext, useContext, useState } from 'react';

interface WhitelabelConfig {
  name: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  domain: string;
  features: string[];
}

interface WhitelabelContextType {
  config: WhitelabelConfig;
  updateConfig: (newConfig: Partial<WhitelabelConfig>) => void;
  isWhitelabeled: boolean;
}

const defaultConfig: WhitelabelConfig = {
  name: 'Zion Tech Group',
  logo: '/logo.svg',
  primaryColor: '#3B82F6',
  secondaryColor: '#1E40AF',
  domain: 'ziontechgroup.com',
  features: ['ai', 'marketplace', 'services'],
};

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};

interface WhitelabelProviderProps {
  children: React.ReactNode;
  initialConfig?: Partial<WhitelabelConfig>;
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ 
  children, 
  initialConfig = {} 
}) => {
  const [config, setConfig] = useState<WhitelabelConfig>({
    ...defaultConfig,
    ...initialConfig,
  });

  const updateConfig = (newConfig: Partial<WhitelabelConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const isWhitelabeled = config.name !== defaultConfig.name || 
                         config.domain !== defaultConfig.domain;

  const value: WhitelabelContextType = {
    config,
    updateConfig,
    isWhitelabeled,
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
};