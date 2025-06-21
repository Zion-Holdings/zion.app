import { toast } from '@/hooks/use-toast';
import { logError } from './logError';

if (typeof window !== "undefined" && window.fetch) {
  const originalFetch = window.fetch.bind(window);

  window.fetch = async (...args: Parameters<typeof fetch>): Promise<Response> => {
    try {
      const response = await originalFetch(...args);
      if (!response.ok) {
        const notify = toast.error;
       const url = typeof args[0] === 'string'
         ? args[0]
         : (args[0] instanceof URL ? args[0].href : args[0].url);
        if (response.status === 401 && url.includes('/api/auth/session')) {
          notify('Session expired');
        } else {
          try {
            const data = await response.clone().json();
            if (data && data.error) {
              notify(String(data.error));
            } else {
              notify(`Error ${response.status}`);
            }
          } catch {
            notify(`Error ${response.status}`);
          }
        }
      }
      return response;
    } catch (err: any) {
      const message = err?.response?.data?.error ?? 'Network error';
      toast.error(message);
      logError(err, { context: 'globalFetchInterceptor' });
      throw err;
    }
  };
}

