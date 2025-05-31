import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { captureException } from '@/utils/sentry';
import { authFetch } from '@/utils/authUtils'; // Import authFetch

const baseURL = import.meta.env.VITE_API_URL || '/api';

// General error handler for responses, excluding 401 which is handled by authFetch
const handleApiError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    // authFetch will throw an error for 401, so we don't need to handle it here again.
    // It will be caught by the caller or a global error handler.
    if (status && status !== 401) {
      captureException(error);
      const message = error.response?.data?.message || 'Unexpected error';
      toast.error(message);
    }
  } else {
    // Non-Axios errors
    captureException(error);
    toast.error('An unexpected error occurred.');
  }
  return Promise.reject(error);
};

const apiClient = {
  get: async <T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    try {
      return await authFetch(`${baseURL}${url}`, { ...config, method: 'GET' });
    } catch (error) {
      return handleApiError(error);
    }
  },
  post: async <T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> => {
    try {
      return await authFetch(`${baseURL}${url}`, { ...config, method: 'POST', data });
    } catch (error) {
      return handleApiError(error);
    }
  },
  put: async <T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> => {
    try {
      return await authFetch(`${baseURL}${url}`, { ...config, method: 'PUT', data });
    } catch (error) {
      return handleApiError(error);
    }
  },
  delete: async <T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    try {
      return await authFetch(`${baseURL}${url}`, { ...config, method: 'DELETE' });
    } catch (error) {
      return handleApiError(error);
    }
  },
  // You can add other methods like patch, head, options if needed
};

export default apiClient;
