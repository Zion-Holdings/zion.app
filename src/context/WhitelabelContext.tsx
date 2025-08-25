import React, { createContext, useContext, useState } from 'react';

interface WhitelabelContextType {
  tenant: string;
  setTenant: (tenant: string) => void;
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

interface WhitelabelProviderProps {
  children: React.ReactNode;
}

export function WhitelabelProvider({ children }: WhitelabelProviderProps) {
  const [tenant, setTenant] = useState('zion');

  return (
    <WhitelabelContext.Provider value={{ tenant, setTenant }}>
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