import { getEnqueueSnackbar } from '@/context/SnackbarContext';
import { logError } from './logError';

if (typeof window !== "undefined" && window.fetch) {
  const originalFetch = window.fetch.bind(window);

  window.fetch = async (...args: Parameters<typeof fetch>): Promise<Response> => {
    try {
      const response = await originalFetch(...args);
      if (!response.ok) {
        const enqueueSnackbar = getEnqueueSnackbar();
        const url = typeof args[0] === 'string' ? args[0] : args[0].url;
        if (response.status === 401 && url.includes('/api/auth/session')) {
          enqueueSnackbar('Session expired', { variant: 'error' });
        } else {
          try {
            const data = await response.clone().json();
            if (data && data.error) {
              enqueueSnackbar(String(data.error), { variant: 'error' });
            } else {
              enqueueSnackbar(`Error ${response.status}`, { variant: 'error' });
            }
          } catch {
            enqueueSnackbar(`Error ${response.status}`, { variant: 'error' });
          }
        }
      }
      return response;
    } catch (err: any) {
      const message = err?.response?.data?.error ?? 'Network error';
      const enqueueSnackbar = getEnqueueSnackbar();
      enqueueSnackbar(message, { variant: 'error' });
      logError(err, { context: 'globalFetchInterceptor' });
      throw err;
    }
  };
}

