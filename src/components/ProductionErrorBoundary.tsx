import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { ENV_CONFIG } from '@/utils/environmentConfig'
import { logErrorToProduction } from '@/utils/productionLogger'

interface Props {
  children: ReactNode'
  fallback?: ReactNode'
}
'
interface State {'
  hasError: "boolean,"
  error: Error | null,""
  errorType: 'config' | 'network' | 'runtime' | 'unknown,'
  retryCount: number","
  showDetails: boolean"
}