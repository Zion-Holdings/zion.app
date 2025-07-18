<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect } from 'react''
import type { ReactNode } from 'react''
import { useWhitelabelTenant } from '@/hooks/useWhitelabelTenant'
import type { WhitelabelTenant } from '@/hooks/useWhitelabelTenant;
import { logInfo } from '@/utils/productionLogger;
'
export interface WhitelabelContextType {
  isWhitelabel: "boolean
  primaryColor: string,
  logoUrl: "string | null"
  brandName: string,
  themePreset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup,
  landingPageCopy: {,
    headline: "string"
    subtitle: string,
    cta: string"
  }"
  tenant: WhitelabelTenant | null
};"
"
const defaultContext: unknown WhitelabelContextType = {
  isWhitelabel: "false"
  primaryColor: '#9b87f5', // Default Zion purple'
  logoUrl: null
  brandName: 'Zion AI Marketplace','
  themePreset: 'light','
  landingPageCopy: {
    headline: 'AI Talent Marketplace','
    subtitle: 'Find the best AI talent for your projects','
    cta: 'Get Started','
  },'
  tenant: null,;
=======
import React, { createContext, useContext, useState, useEffect } from 'react';';
import type { ReactNode } from 'react';';
import { useWhitelabelTenant } from '@/hooks/useWhitelabelTenant;'';
import type { WhitelabelTenant } from '@/hooks/useWhitelabelTenant;'
;;
import { logInfo } from '@/utils/productionLogger;'
;'';
export interface WhitelabelContextType {;;
  isWhitelabel: "boolean;",;";";";";""
  primaryColor: "string;",";";";";""
  logoUrl: "string | null;",;";";";";""
  brandName: "string;",";";";";""
  themePreset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup,;;'
  landingPageCopy: "{;",";";";";""
    headline: "string;",;";";";";""
    subtitle: "string;",";";";";""
    cta: "string;";";";";""
  };";";";";""
  tenant: "WhitelabelTenant | null;";";";""
};";";";""
;";";";";"";
const defaultContext: unknown "WhitelabelContextType = {;",;";";";";""
  isWhitelabel: "false",;";";";";""
  primaryColor: '#9b87f5', // Default Zion purple;;'
  logoUrl: "null",;";";";";""
  brandName: 'Zion AI Marketplace',;;'
  themePreset: 'light',;;'
  landingPageCopy: "{;",;";";";";""
    headline: 'AI Talent Marketplace',;;'
    subtitle: 'Find the best AI talent for your projects',;;'
    cta: 'Get Started',;''
  },;;
  tenant: "null",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
// The context may be undefined if the provider is not mounted.  By declaring;
// the generic as `WhitelabelContextType | null` we get proper type checking;
// without falling back to an empty object which triggers TS2740 errors.;
<<<<<<< HEAD
const WhitelabelContext = createContext<WhitelabelContextType | null>(null)"
;"
export const useWhitelabel = (): WhitelabelContextType => {;
  const context = useContext(WhitelabelContext)"
  if (!context) {;"
    throw new Error('useWhitelabel must be used within a WhitelabelProvider')'
  }'
  // Cast is used here because the context default is `null` until provided by;
  // `WhitelabelProvider`. The runtime check above guarantees it's defined.'
  return context as WhitelabelContextType'
};
'
interface WhitelabelProviderProps {
  _children: ReactNode
}"
"
export const WhitelabelProvider: ({ children }: WhitelabelProviderProps) => {
  if (process.env.NODE_ENV === 'development') {'
    logInfo('[WhitelabelProvider] Initializing...')'
  };
  const [contextValue, setContextValue] =;
    useState<WhitelabelContextType>(defaultContext);
  const { tenant, isLoading } = useWhitelabelTenant()''
  useEffect(() => {;
    if (!isLoading && tenant) {'
      setContextValue({'
        isWhitelabel: "true"
        primaryColor: tenant.primary_color
        logoUrl: "tenant.logo_url"
        brandName: tenant.brand_name
        themePreset: "tenant.theme_preset"
        landingPageCopy: tenant.landing_page_copy
        tenant: tenant,"
=======
const WhitelabelContext: unknown = createContext<WhitelabelContextType | null>(null);""
;";"";
export const useWhitelabel: unknown = (): WhitelabelContextType => {;";";""
  const context: unknown = useContext(WhitelabelContext);";";";""
  if (!context) {;";";";";""
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');'
  };''
  // Cast is used here because the context default is `null` until provided by;;
  // `WhitelabelProvider`. The runtime check above guarantees it's defined.;''
  return context as WhitelabelContextType;
};
;''
interface WhitelabelProviderProps {;;
  _children: "ReactNode;";";""
};";";""
;";";";"";
export const WhitelabelProvider: unknown "unknown = ({ children "}: WhitelabelProviderProps) => {;";";";";""
  if (process.env.NODE_ENV === 'development') {;;'
    logInfo('[WhitelabelProvider] Initializing...');'
  };
  const [contextValue, setContextValue] =;
    useState<WhitelabelContextType>(defaultContext);
  const { tenant, isLoading } = useWhitelabelTenant();''
;
  useEffect(() => {;
    if (!isLoading && tenant) {;''
      setContextValue({;;
        isWhitelabel: "true",;";";";";""
        primaryColor: "tenant.primary_color",;";";";";""
        logoUrl: "tenant.logo_url",;";";";";""
        brandName: "tenant.brand_name",;";";";";""
        themePreset: "tenant.theme_preset",;";";";";""
        landingPageCopy: "tenant.landing_page_copy",;";";";";""
        tenant: "tenant",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      });
    } else if (!isLoading) {;
      setContextValue(defaultContext);
    };
  }, [tenant, isLoading]);
  return (;
    <WhitelabelContext.Provider value={contextValue}>;
<<<<<<< HEAD
      {children}"
    </WhitelabelContext.Provider>;
  );"
}"
"""
=======
      {children};""
    </WhitelabelContext.Provider>;";""
  );";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
