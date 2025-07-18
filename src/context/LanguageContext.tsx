import React, { createContext, useState, useContext, useEffect } from 'react''
import type { ReactNode } from 'react''
import { safeStorage } from '@/utils/safeStorage'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
import { setCookie, getCookie } from '@/utils/cookies'
import { useTranslation } from 'react-i18next'
import { toast } from '../components/ui/use-toast;
export type SupportedLanguage = 'en' | 'es' | 'fr' | 'pt' | 'ar'
'
export type LanguageContextType = {'
  currentLanguage: "SupportedLanguage
  changeLanguage: (lang: SupportedLanguage) => Promise<void>"
  isRTL: boolean;,"
  supportedLanguages: { code: SupportedLanguage; name: string; flag: string }[]"