
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useWhitelabelTenant, WhitelabelTenant } from '@/hooks/useWhitelabelTenant';

export interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
  logoUrl: string | null;
  brandName: string;
  themePreset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
  landingPageCopy: {
    headline: string;
    subtitle: string;
    cta: string;
  };
  tenant: WhitelabelTenant | null;
}

const defaultContext: WhitelabelContextType = {
  isWhitelabel: false,
  primaryColor: '#9b87f5', // Default Zion purple
  logoUrl: null,
  brandName: 'Zion AI Marketplace',
  themePreset: 'light',
  landingPageCopy: {
    headline: 'AI Talent Marketplace',
    subtitle: 'Find the best AI talent for your projects',
    cta: 'Get Started',
  },
  tenant: null,
};

// Using the default context value avoids returning `{}` when the React type
// definitions are missing. This ensures `useContext` always provides a fully
// typed object and prevents compile errors about missing properties.
const WhitelabelContext = createContext<WhitelabelContextType>(defaultContext);

export const useWhitelabel = (): WhitelabelContextType => {
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};

interface WhitelabelProviderProps {
  children: ReactNode;
}

export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {
  const [contextValue, setContextValue] = useState<WhitelabelContextType>(defaultContext);
  const { tenant, isLoading } = useWhitelabelTenant();

  useEffect(() => {
    if (!isLoading && tenant) {
      setContextValue({
        isWhitelabel: true,
        primaryColor: tenant.primary_color,
        logoUrl: tenant.logo_url,
        brandName: tenant.brand_name,
        themePreset: tenant.theme_preset,
        landingPageCopy: tenant.landing_page_copy,
        tenant: tenant,
      });
    } else if (!isLoading) {
      setContextValue(defaultContext);
    }
  }, [tenant, isLoading]);

  return (
    <WhitelabelContext.Provider value={contextValue}>
      {children}
    </WhitelabelContext.Provider>
  );
};

