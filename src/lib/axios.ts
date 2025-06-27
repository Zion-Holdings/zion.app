import axios from 'axios';
import { safeStorage } from '@/utils/safeStorage';

// Create axios instance with proper configuration
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Setup interceptors after instance creation
const setupInterceptors = () => {
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      // Add auth token if available
      if (typeof window !== 'undefined') {
        const token = safeStorage.getItem('auth-token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
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
};

// Initialize interceptors
setupInterceptors();

export default axiosInstance;
