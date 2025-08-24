import React, { createContext, useContext, ReactNode } from 'react';

interface WhitelabelContextType {
  isWhitelabel: boolean;
  brandName: string;
  brandLogo: string;
  primaryColor: string;
}

const defaultWhitelabelContext: WhitelabelContextType = {
  isWhitelabel: false,
  brandName: 'Zion Tech Group',
  brandLogo: '/logo.png',
  primaryColor: '#3B82F6'
};

const WhitelabelContext = createContext<WhitelabelContextType>(defaultWhitelabelContext);

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};

interface WhitelabelProviderProps {
  children: ReactNode;
  value?: Partial<WhitelabelContextType>;
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ 
  children, 
  value = {} 
}) => {
  const contextValue = {
    ...defaultWhitelabelContext,
    ...value
  };

  return (
    <WhitelabelContext.Provider value={contextValue}>
      {children}
    </WhitelabelContext.Provider>
  );
};