import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { captureException } from '@/utils/sentry';

const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;

    if (status && status >= 400) {
      captureException(error);
      const message = error.response?.data?.message || 'Unexpected error';
      toast.error(message);
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
