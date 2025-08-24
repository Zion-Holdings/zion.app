import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  brandName: string;
  setBrandName: (name: string) => void;
  logo: string;
  setLogo: (logo: string) => void;
  tenant?: {
    id: string;
    name: string;
    domain: string;
  };
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

interface WhitelabelProviderProps {
  children: ReactNode;
}

export function WhitelabelProvider({ children }: WhitelabelProviderProps) {
  const [isWhitelabel] = useState(false); // Set to true for white-label instances
  const [primaryColor, setPrimaryColor] = useState('#8B5CF6'); // Default Zion purple
  const [brandName, setBrandName] = useState('Zion Tech Group');
  const [logo, setLogo] = useState('');
  const [tenant] = useState({
    id: 'zion-tech-group',
    name: 'Zion Tech Group',
    domain: 'ziontechgroup.com'
  });

  const value: WhitelabelContextType = {
    isWhitelabel,
    primaryColor,
    setPrimaryColor,
    brandName,
    setBrandName,
    logo,
    setLogo,
    tenant,
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
}

export function useWhitelabel(): WhitelabelContextType {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
}