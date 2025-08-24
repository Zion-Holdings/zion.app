import React, { createContext, useContext, ReactNode } from 'react';

interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
}

const WhitelabelContext = createContext<WhitelabelContextType>({
  isWhitelabel: false,
  primaryColor: '#22ddd2', // Default Zion cyan
});

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};

interface WhitelabelProviderProps {
  children: ReactNode;
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ children }) => {
  const value: WhitelabelContextType = {
    isWhitelabel: false,
    primaryColor: '#22ddd2',
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
};