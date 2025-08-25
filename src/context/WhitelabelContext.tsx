import React, { createContext, useContext, ReactNode } from 'react';

<<<<<<< HEAD
interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
}

const WhitelabelContext = createContext<WhitelabelContextType>({
  isWhitelabel: false,
  primaryColor: '#8c15e9'
});

interface WhitelabelProviderProps {
  children: ReactNode;
}

export function WhitelabelProvider({ children }: WhitelabelProviderProps) {
  return (
    <WhitelabelContext.Provider value={{
      isWhitelabel: false,
      primaryColor: '#8c15e9'
    }}>
      {children}
    </WhitelabelContext.Provider>
  );
}

export function useWhitelabel() {
  return useContext(WhitelabelContext);
}
=======
interface WhitelabelConfig {
  companyName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  domain: string;
  isWhitelabel: boolean;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

const defaultConfig: WhitelabelConfig = {
  companyName: 'Zion Tech Group',
  logo: '/logo.svg',
  primaryColor: '#1e40af',
  secondaryColor: '#7c3aed',
  domain: 'https://ziontechgroup.com',
  isWhitelabel: false,
  contactInfo: {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
};

const WhitelabelContext = createContext<WhitelabelConfig>(defaultConfig);

export const useWhitelabel = () => useContext(WhitelabelContext);

interface WhitelabelProviderProps {
  children: ReactNode;
  config?: Partial<WhitelabelConfig>;
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ 
  children, 
  config = {} 
}) => {
  const mergedConfig = { ...defaultConfig, ...config };

  return (
    <WhitelabelContext.Provider value={mergedConfig}>
      {children}
    </WhitelabelContext.Provider>
  );
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
