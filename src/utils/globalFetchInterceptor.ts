import { getEnqueueSnackbar } from '@/context/SnackbarContext';

if (typeof window !== "undefined" && window.fetch) {
  const originalFetch = window.fetch.bind(window);

  window.fetch = async (...args: Parameters<typeof fetch>): Promise<Response> => {
    try {
      const response = await originalFetch(...args);
      if (!response.ok) {
        try {
          const data = await response.clone().json();
          const enqueueSnackbar = getEnqueueSnackbar();
          if (data && data.error) {
            enqueueSnackbar(String(data.error), { variant: 'error' });
          } else {
            enqueueSnackbar(`Error ${response.status}`, { variant: 'error' });
          }
        } catch {
          const enqueueSnackbar = getEnqueueSnackbar();
          enqueueSnackbar(`Error ${response.status}`, { variant: 'error' });
        }
      }
      return response;
    } catch (err: any) {
      const message = err?.response?.data?.error ?? "Network error";
      const enqueueSnackbar = getEnqueueSnackbar();
      enqueueSnackbar(message, { variant: 'error' });
      throw err;
    }
  };
}

