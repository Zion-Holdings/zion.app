import axios from 'axios';
import { safeStorage } from '@/utils/safeStorage';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Create and configure axios instance
const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // Add auth token if available
      if (typeof window !== 'undefined') {
        const token = safeStorage.getItem('auth-token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error: unknown) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: unknown) => {
      if ((error as AxiosError)?.response?.status === 401) {
        // Handle unauthorized access
        if (typeof window !== 'undefined') {
          safeStorage.removeItem('auth-token');
          window.location.href = '/auth/login';
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

// Export the function instead of calling it immediately to avoid temporal dead zone issues
export default createAxiosInstance;
