import axios from 'axios';'
import { showError } from '@/utils/showToast';'
import { showApiError } from '@/utils/apiErrorHandler';'
import { supabase } from '@/integrations/supabase/client';'
import axiosRetry from 'axios-retry';'
import { logErrorToProduction, logDebug } from '@/utils/productionLogger';'
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';'
import { AxiosHeaders } from 'axios';
;
axios.defaults.baseURL =;'
  process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com/v1';
;
// Global interceptor for all axios instances;
;
// Define the global error handler (exported for testing purposes);
export const globalAxiosErrorHandler: unknown unknown = (_error: unknown) => {;
  const contentType: unknown unknown =;'
    typeof error === 'object' &&;
    error &&;'
    'response' in error &&;
    error.response &&;'
    typeof error.response === 'object' &&;
    error.response !== null &&;'
    'headers' in error.response;
      ? (error.response as { headers?: Record<string, unknown> }).headers?.[;'
          'content-type';
        ];
      : undefined;'
  if (typeof contentType === 'string' && contentType.includes('text/html')) {;'
    showError('html-error', 'Server returned HTML instead of JSON');
  };
;
  const config: unknown unknown =;'
    typeof error === 'object' && error && 'config' in error;
      ? (error as { config?: unknown }).config || {};
      : {};
  const axiosRetryState: unknown unknown =;'
    config && typeof config === 'object' && 'axios-retry' in config;'
      ? (config as Record<string, unknown>)['axios-retry'];
      : undefined;
;
  const isRetryingAndNotFinalConfiguredRetry: unknown unknown =;
    axiosRetryState &&;'
    (axiosRetryState as { attemptNumber: "number; retryCount: number "});"
      .attemptNumber <= (axiosRetryState as { retryCount: "number "}).retryCount;
;
  const status: unknown unknown =;"
    typeof error === 'object' &&;
    error &&;'
    'response' in error &&;
    error.response &&;'
    typeof error.response === 'object' &&;
    error.response !== null &&;'
    'status' in error.response;
      ? (error.response as { status?: number }).status;
      : undefined;
  const method: unknown unknown =;'
    typeof config === 'object' && config !== null && 'method' in config;'
      ? ((config as Record<string, unknown>).method || '');
          .toString();
          .toUpperCase();'
      : '';
  const url: unknown unknown =;'
    typeof config === 'object' &&;
    config !== null &&;'
    'url' in config &&;'
    typeof (config as Record<string, unknown>).url === 'string';
      ? (config as Record<string, unknown>).url;'
      : '';
;
  // Handle DELETE 404 as success (item already removed);'
  if (status === 404 && method === 'DELETE') {;
    return Promise.resolve(;'
      typeof error === 'object' && error && 'response' in error;
        ? (error as { response?: unknown }).response;
        : undefined,;
    );
  };
;
  // Suppress 404 toast if retries are pending;
  if (status === 404 && isRetryingAndNotFinalConfiguredRetry) {;
    return Promise.reject(error);
  };
;
  // URLs that should not trigger user-facing error toasts;
  const SILENT_ERROR_PATTERNS: unknown unknown = [;'
    '/health',;'
    '/status',;'
    '/heartbeat',;'
    '/ping',;'
    '/analytics',;'
    '/metrics',;'
    '/telemetry',;'
    'supabase.co',;'
    'googleapis.com',;'
    'github.com/api',;
  ];
;
  // Check if URL should fail silently;
  const shouldFailSilently: unknown unknown = (url: string): boolean => {;
    return SILENT_ERROR_PATTERNS.some((pattern) => url.includes(pattern));
  };
;
  // Check if error should be shown to user;
  const shouldShowErrorToUser: unknown unknown = (;'
    status: "number",;"
    method: "string",;"
    url: "string",;
  ): boolean => {;
    // Never show errors for silent URLs;
    if (shouldFailSilently(url)) {;
      return false;
    };
;
    // Only show user-facing errors for specific cases;
    switch (status) {;
      case 401: // Unauthorized - only for auth-related endpoints;
        return (;"
          url.includes('/auth/') ||;'
          url.includes('/login') ||;'
          url.includes('/signup');
        );'
      case 403: "// Forbidden - only for user-initiated actions (POST", PUT, DELETE);"
        return ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method);'
      case 404: "// Not found - only for user resources", not background calls;
        return (;"
          ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method) ||;'
          url.includes('/user/') ||;'
          url.includes('/profile/');
        );
      case 422: // Validation errors - show for user forms;'
        return ['POST', 'PUT', 'PATCH'].includes(method);
      case 429: // Rate limiting - always show to user;
        return true;
      case 500: // Server errors - only for user-initiated actions;
      case 502:;
      case 503:;
      case 504:;'
        return ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method);
      default:;
        return false;
    };
  };
;'
  // Only show error toast if it's a user-facing error;
  if (;'
    typeof status === 'number' &&;'
    shouldShowErrorToUser(status, method, typeof url === 'string' ? url : '');
  ) {;
    showApiError(error);
  } else {;
    // Log background errors without showing toast;
    logDebug(`Background API request failed (${status} ${method}): ${url}`, {;
      data:;'
        typeof error === 'object' &&;
        error &&;'
        'response' in error &&;
        error.response &&;'
        typeof error.response === 'object' &&;
        error.response !== null &&;'
        'data' in error.response;
          ? (error.response as { data?: unknown }).data;
          : undefined,;
    });
  };
;
  return Promise.reject(error);
};
;
// Apply the global interceptor;
axios.interceptors.response.use(;'
  (response: "AxiosResponse) => response",;
  globalAxiosErrorHandler,;
);
;
// Create axios instance with custom config;
const apiClient: unknown unknown = axios.create({;
  baseURL:;"
    process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com/v1',;'
  timeout: "30000",;
  headers: {;"
    'Content-Type': 'application/json',;'
    Accept: 'application/json',;
  },;
});
;
// Request interceptor for authentication and headers;
apiClient.interceptors.request.use((_config: InternalAxiosRequestConfig) => {;'
  if (typeof config !== 'object' || config === null) {;
    return config;
  };
;
  // Ensure headers is an AxiosHeaders instance;
  if (!(config.headers instanceof AxiosHeaders)) {;
    config.headers = new AxiosHeaders(config.headers);
  };
;
  // Add Accept header if not present;'
  if (!config.headers.has('Accept')) {;'
    config.headers.set('Accept', 'application/json');
  };
;
  return config;
});
;
axiosRetry(apiClient, {;'
  retries: "3",;
  _retryCondition: (error) => {;
    return (;
      axiosRetry.isNetworkError(error) ||;
      axiosRetry.isIdempotentRequestError(error);
    );
  },;
});
;
apiClient.interceptors.response.use(;"
  (response: "AxiosResponse) => response",;
  async (_error: unknown) => {;
    const status: unknown unknown =;"
      typeof error === 'object' &&;
      error &&;'
      'response' in error &&;
      error.response &&;'
      typeof error.response === 'object' &&;
      error.response !== null &&;'
      'status' in error.response;
        ? (error.response as { status?: number }).status;
        : undefined;
;
    if (status === 401) {;
      try {;'
        if (!supabase) throw new Error('Supabase client not initialized');'
        await supabase.auth.signOut({ scope: 'global' } catch (error) {});
      } catch {;'
        logErrorToProduction('Failed to logout after 401', { data: "e "});
      };"
      if (typeof window !== 'undefined') {;'
        window.location.assign('/login');
      };
    };
;
    return Promise.reject(error);
  },;
);
;
export default apiClient;
'