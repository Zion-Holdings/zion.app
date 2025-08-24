<<<<<<< HEAD
import React, { createContext, useContext, useState, ReactNode } from 'react';
=======
import React, { createContext, useContext, ReactNode } from 'react';
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0

interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
<<<<<<< HEAD
  setPrimaryColor: (color: string) => void;
  brandName: string;
  setBrandName: (name: string) => void;
  logo: string;
  setLogo: (logo: string) => void;
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);
=======
}

const WhitelabelContext = createContext<WhitelabelContextType>({
  isWhitelabel: false,
  primaryColor: '#8c15e9'
});
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0

interface WhitelabelProviderProps {
  children: ReactNode;
}

export function WhitelabelProvider({ children }: WhitelabelProviderProps) {
<<<<<<< HEAD
  const [isWhitelabel] = useState(false); // Set to true for white-label instances
  const [primaryColor, setPrimaryColor] = useState('#8B5CF6'); // Default Zion purple
  const [brandName, setBrandName] = useState('Zion Tech Group');
  const [logo, setLogo] = useState('');

  const value: WhitelabelContextType = {
    isWhitelabel,
    primaryColor,
    setPrimaryColor,
    brandName,
    setBrandName,
    logo,
    setLogo,
  };

  return (
    <WhitelabelContext.Provider value={value}>
=======
  return (
    <WhitelabelContext.Provider value={{
      isWhitelabel: false,
      primaryColor: '#8c15e9'
    }}>
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
      {children}
    </WhitelabelContext.Provider>
  );
}

<<<<<<< HEAD
export function useWhitelabel(): WhitelabelContextType {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
=======
export function useWhitelabel() {
  return useContext(WhitelabelContext);
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
}