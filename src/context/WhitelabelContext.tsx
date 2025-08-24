import React, { createContext, useContext, ReactNode } from 'react';

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