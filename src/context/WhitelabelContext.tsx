import React, { createContext, useContext, ReactNode } from 'react';

interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
  companyName: string;
  logo: string;
}

const defaultContext: WhitelabelContextType = {
  isWhitelabel: false,
  primaryColor: '#8c15e9',
  companyName: 'Zion Tech Group',
  logo: '/logos/zion-logo.png'
};

const WhitelabelContext = createContext<WhitelabelContextType>(defaultContext);

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};

interface WhitelabelProviderProps {
  children: ReactNode;
  config?: Partial<WhitelabelContextType>;
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ 
  children, 
  config = {} 
}) => {
  const value = { ...defaultContext, ...config };
  
  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
};