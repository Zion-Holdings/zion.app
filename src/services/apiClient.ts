import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { captureException } from '@/utils/sentry';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  withCredentials: true,
});

// Request Interceptor for Global Loading State
apiClient.interceptors.request.use(
  (config) => {
    document.dispatchEvent(new CustomEvent('globalLoading', { detail: { isLoading: true } }));
    return config;
  },
  (error) => {
    // Also set loading to false if a request itself fails to be made
    document.dispatchEvent(new CustomEvent('globalLoading', { detail: { isLoading: false } }));
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    // If request is successful, turn off loading
    // (Axios doesn't have a 'finally' for interceptors easily, so handle in success/error)
    document.dispatchEvent(new CustomEvent('globalLoading', { detail: { isLoading: false } }));
    return response;
  },
  async (error) => {
    // Dispatch loading false event at the beginning of the error handler
    document.dispatchEvent(new CustomEvent('globalLoading', { detail: { isLoading: false } }));

    const status = error.response?.status;
    const axiosError = error as import('axios').AxiosError; // For type safety
    const retryConfig = axiosError.config;
    let displayMessage = (axiosError.response?.data as any)?.message ||
                         (axiosError.response?.data as any)?.error ||
                         axiosError.message ||
                         "An unexpected API error occurred.";

    if (!axiosError.response) {
      displayMessage = "Network error. Please check your connection.";
    } else if (status === 503 && (axiosError.response?.data as any)?.error?.includes('Network error after multiple retries')) {
      // Use message from authService if it's the specific retry failure
      displayMessage = (axiosError.response?.data as any)?.error;
    } else if (status === 500) {
      displayMessage = "A server error occurred. Please try again later.";
    } else if (status === 401) {
      displayMessage = "Authentication failed. Please log in again.";
    } else if (status === 403) {
      displayMessage = "You do not have permission to perform this action.";
    }
    // Keep existing specific toasts for non-modal feedback if desired, or remove if modal is enough
    // For now, the existing toast.error() will fire based on original logic below.

    if (status && status >= 400 && status !== 401) { // Avoid double toast for 401 if global modal shows similar
      captureException(error); // Sentry call
      // The original toast.error is still here:
      // toast.error(error.response?.data?.message || 'Unexpected error');
      // This might be redundant if the global modal shows a similar message.
      // Let's keep it for now to ensure no functionality is lost immediately.
      // If the global modal is preferred, this specific toast could be removed or conditioned.
      if (!toast.isActive('api-error-toast')) { // Prevent duplicate toasts if one is already up
        toast.error( (axiosError.response?.data as any)?.message || 'An error occurred', { toastId: 'api-error-toast'});
      }
    }

    // Dispatch Global Error Event for Modal (after other specific handlers)
    // This allows the modal to be an additional layer.
    document.dispatchEvent(new CustomEvent('globalError', {
      detail: { message: displayMessage, retryConfig: retryConfig }
    }));

    if (status === 401) {
      captureException(error); // Capture 401s too
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
