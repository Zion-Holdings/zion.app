import axios from 'axios'
import { showError } from '@/utils/showToast'
import { showApiError } from '@/utils/apiErrorHandler'
import { supabase } from '@/integrations/supabase/client'
import axiosRetry from 'axios-retry'
import { logErrorToProduction, logDebug } from '@/utils/productionLogger'
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { AxiosHeaders } from 'axios;
'
axios.defaults.baseURL =;
  process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com/v1;
// Global interceptor for all axios instances'
;
// Define the global error handler (exported for testing purposes);
export const globalAxiosErrorHandler = (_error: unknown) => {'
  const contentType: unknown =;
    typeof error === 'object' &&'
    error &&;
    'response' in error &&'
    error.response &&;
    typeof error.response === 'object' &&'
    error.response !== null &&;
    'headers' in error.response'
      ? (error.response as { headers?: Record<string, unknown> }).headers?.[;
          'content-type;
        ]'
      : undefined;
  if (typeof contentType === 'string' && contentType.includes('text/html')) {;
    showError('html-error', 'Server returned HTML instead of JSON');
  };
'
  const config: unknown =;
    typeof error === 'object' && error && 'config' in error;
      ? (error as { config?: unknown }).config || {};
      : {}'
  const axiosRetryState: unknown =;
    config && typeof config === 'object' && 'axios-retry' in config;
      ? (config as Record<string, unknown>)['axios-retry']'
      : undefined;
  const isRetryingAndNotFinalConfiguredRetry: unknown ='
    axiosRetryState &&;
    (axiosRetryState as { attemptNumber: "number; retryCount: number "});"
      .attemptNumber <= (axiosRetryState as { retryCount: "number "}).retryCount;"
;"
  const status: unknown =;"
    typeof error === 'object' &&'
    error &&;
    'response' in error &&'
    error.response &&;
    typeof error.response === 'object' &&'
    error.response !== null &&;
    'status' in error.response;
      ? (error.response as { status?: number }).status;
      : undefined'
  const method: unknown =;
    typeof config === 'object' && config !== null && 'method' in config;
      ? ((config as Record<string, unknown>).method || '');
          .toString()'
          .toUpperCase();
      : '
  const url: unknown =;
    typeof config === 'object' &&'
    config !== null &&;
    'url' in config &&;
    typeof (config as Record<string, unknown>).url === 'string;
      ? (config as Record<string, unknown>).url;
      : 
'
  // Handle DELETE 404 as success (item already removed);
  if (status === 404 && method === 'DELETE') {'
    return Promise.resolve(;
      typeof error === 'object' && error && 'response' in error;