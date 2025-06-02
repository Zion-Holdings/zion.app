import axios from 'axios';
import { getEnqueueSnackbar } from '@/context/SnackbarContext';
import { supabase } from '@/integrations/supabase/client';
import { captureException } from '@/utils/sentry';
import axiosRetry from 'axios-retry';

// Global interceptor for all axios instances
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    if (status && status >= 400) {
      const message = error.response?.data?.message || `Error ${status}`;
      const enqueueSnackbar = getEnqueueSnackbar();
      enqueueSnackbar(message, { variant: 'error' });
    } else {
      const enqueueSnackbar = getEnqueueSnackbar();
      enqueueSnackbar('Network error', { variant: 'error' });
    }
    return Promise.reject(error);
  }
);

const apiClient = axios.create({
  baseURL: '/api/v1/services',
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

    if (status && status >= 400) {
      captureException(error);
      const message = error.response?.data?.message || 'Unexpected error';
      const enqueueSnackbar = getEnqueueSnackbar();
      enqueueSnackbar(message, { variant: 'error' });
    }

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
