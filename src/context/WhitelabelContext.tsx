import React, { createContext, useContext, useState, useCallback } from 'react';

interface WhitelabelConfig {
  companyName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  theme: 'light' | 'dark' | 'auto';
}

interface WhitelabelContextType {
  config: WhitelabelConfig;
  updateConfig: (newConfig: Partial<WhitelabelConfig>) => void;
  resetConfig: () => void;
}

const defaultConfig: WhitelabelConfig = {
  companyName: 'Zion Tech Group',
  logo: '/logo.svg',
  primaryColor: '#3B82F6',
  secondaryColor: '#1E40AF',
  theme: 'auto'
};

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

export const WhitelabelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<WhitelabelConfig>(defaultConfig);

  const updateConfig = useCallback((newConfig: Partial<WhitelabelConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  }, []);

  const resetConfig = useCallback(() => {
    setConfig(defaultConfig);
  }, []);

  const value: WhitelabelContextType = {
    config,
    updateConfig,
    resetConfig
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
};

export const useWhitelabel = (): WhitelabelContextType => {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};