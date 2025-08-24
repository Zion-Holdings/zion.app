import React, { createContext, useContext, ReactNode } from 'react';

interface WhitelabelContextType {
  brandName: string;
  brandColor: string;
  logo: string;
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

export function WhitelabelProvider({ children }: { children: ReactNode }) {
  const value: WhitelabelContextType = {
    brandName: 'Zion Tech Group',
    brandColor: '#00D4FF',
    logo: '/logo.png'
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
}

export function useWhitelabel() {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
}