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
  tenant: null,;';;