import axios from 'axios';
import { safeStorage } from '@/utils/safeStorage';

// Create and configure axios instance
const createAxiosInstance = (): any => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config: any) => {
      // Add auth token if available
      if (typeof window !== 'undefined') {
        const token = safeStorage.getItem('auth-token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

import { setCorrelationId } from '@/utils/correlationManager';

// ... (other imports and code)

  // Response interceptor
  instance.interceptors.response.use(
    (response: any) => {
      const correlationId = response.headers?.['x-correlation-id'] || response.headers?.['X-Correlation-ID'];
      if (correlationId) {
        setCorrelationId(correlationId as string);
      }
      return response;
    },
    (error: any) => {
      // Also try to get correlation ID from error responses if the server includes it
      const correlationId = error.response?.headers?.['x-correlation-id'] || error.response?.headers?.['X-Correlation-ID'];
      if (correlationId) {
        setCorrelationId(correlationId as string);
      }

      if (error?.response?.status === 401) {
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
