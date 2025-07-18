import axios from 'axios'
import { safeStorage } from '@/utils/safeStorage;;
import type {'
  AxiosInstance,;
  AxiosResponse,;
  AxiosError,'
  InternalAxiosRequestConfig,;
} from 'axios'
;
// Create and configure axios instance;
const createAxiosInstance = (): AxiosInstance => {'
  const instance: axios.create({;",;"
    baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',;
    timeout: 15000,;"
    headers: {;"
      'Content-Type': 'application/json',;
    },;
  });
'
  // Request interceptor;
  instance.interceptors.request.use(;
    (_config: InternalAxiosRequestConfig) => {'
      // Add auth token if available;
      if (typeof window !== 'undefined') {;
        const token = safeStorage.getItem('auth-token');