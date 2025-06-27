import axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { safeStorage } from '@/utils/safeStorage';

export interface AxiosError<T = unknown> extends Error {
  config: AxiosRequestConfig;
  code?: string;
  request?: unknown;
  response?: AxiosResponse<T>;
  isAxiosError: boolean;
}

// Base request configuration type
interface BaseRequestConfig extends Omit<AxiosRequestConfig, 'headers'> {
  headers?: Record<string, string>;
}

// Enhanced client interface with proper typing
interface ApiClient {
  get<T = unknown>(url: string, config?: BaseRequestConfig): Promise<AxiosResponse<T>>;
  post<T = unknown>(url: string, data?: unknown, config?: BaseRequestConfig): Promise<AxiosResponse<T>>;
  put<T = unknown>(url: string, data?: unknown, config?: BaseRequestConfig): Promise<AxiosResponse<T>>;
  patch<T = unknown>(url: string, data?: unknown, config?: BaseRequestConfig): Promise<AxiosResponse<T>>;
  delete<T = unknown>(url: string, config?: BaseRequestConfig): Promise<AxiosResponse<T>>;
}

// Create axios instance with proper configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
    if (error.response?.status === 401) {
      // Handle unauthorized access
      if (typeof window !== 'undefined') {
        safeStorage.removeItem('auth-token');
        window.location.href = '/auth/login';
      }
    }
    return Promise.reject(error);
  }
);

// Enhanced API client implementation
class EnhancedApiClient implements ApiClient {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  async get<T = unknown>(url: string, config: BaseRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.instance.get<T>(url, config);
  }

  async post<T = unknown>(url: string, data: unknown = {}, config: BaseRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data, config);
  }

  async put<T = unknown>(url: string, data: unknown = {}, config: BaseRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data, config);
  }

  async patch<T = unknown>(url: string, data: unknown = {}, config: BaseRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.instance.patch<T>(url, data, config);
  }

  async delete<T = unknown>(url: string, config: BaseRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url, config);
  }
}

// Create and export the enhanced client
export const apiClient = new EnhancedApiClient(axiosInstance);

export default axiosInstance;
