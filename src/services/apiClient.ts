import axios from 'axios';
import { showError } from '@/utils/showToast';
import { showApiError } from '@/utils/apiErrorHandler';
import { supabase } from '@/integrations/supabase/client';
import axiosRetry from 'axios-retry';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com/v1';

// Global interceptor for all axios instances
function mapStatusMessage(status?: number, fallback = ''): string {
  switch (status) {
    case 400:
      return 'Validation error';
    case 401:
      return 'Authentication required';
    case 404:
      return 'Not found';
    case 500:
      return 'Server error';
    default:
      return fallback;
  }
}

// Define the global error handler (exported for testing purposes)
export const globalAxiosErrorHandler = (error: any) => {
  const contentType = error.response?.headers?.['content-type'];
  if (contentType?.includes('text/html')) {
    showError('html-error', 'Server returned HTML instead of JSON');
  }

  const config = error.config || {};
  const axiosRetryState = config['axios-retry']; // Standard property used by axios-retry

  // Check if the request was handled by axios-retry and if it's not the final attempt
  // attemptNumber is 1-indexed (1 = initial request, 2 = 1st retry, etc.)
  // retryCount is the number of configured retries (e.g., 3)
  // We suppress if it's a 404 AND (attemptNumber <= retryCount), meaning more retries are possible or this is the last configured retry.
  // We show if attemptNumber > retryCount (meaning all configured retries + initial attempt are done)
  const isRetryingAndNotFinalConfiguredRetry = axiosRetryState && axiosRetryState.attemptNumber <= axiosRetryState.retryCount;

  const status = error.response?.status;
  if (status === 404 && isRetryingAndNotFinalConfiguredRetry) {
    // Suppress 404 toast if retries are pending / this isn't past the configured retries
  } else {
    showApiError(error);
  }

  return Promise.reject(error);
};

// Apply the global interceptor
axios.interceptors.response.use(
  (response) => response,
  globalAxiosErrorHandler
);

const API_BASE = axios.defaults.baseURL;
const apiClient = axios.create({
  baseURL: `${API_BASE}/api/v1/services`,
});

apiClient.interceptors.request.use((config) => {
  return {
    ...config,
    headers: { ...(config.headers || {}), Accept: 'application/json' },
  };
});

axiosRetry(apiClient, {
  retries: 3,
  retryCondition: (error) => {
    return (
      axiosRetry.isNetworkError(error) ||
      axiosRetry.isIdempotentRequestError(error)
    );
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;

    if (status === 401) {
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (e) {
        console.error('Failed to logout after 401', e);
      }
      if (typeof window !== 'undefined') {
        window.location.assign('/login');
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
