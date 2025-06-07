import axios from 'axios';
import { showError } from '@/utils/showToast';
import { showApiError } from '@/utils/apiErrorHandler';
import { supabase } from '@/integrations/supabase/client';
import axiosRetry from 'axios-retry';

axios.defaults.baseURL = import.meta.env.VITE_API_URL || '';

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

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.headers['content-type']?.includes('text/html')) {
      showError('html-error', 'Server returned HTML instead of JSON');
    }
    showApiError(error);
    return Promise.reject(error);
  }
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
