import axios, { AxiosInstance, AxiosError } from 'axios';
import { supabase } from '@/integrations/supabase/client';

// Types for marketplace data
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  subcategory?: string;
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  images: string[];
  createdAt: string;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  location?: string;
  availability?: string;
  brand?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface TalentProfile {
  id: string;
  name: string;
  title: string;
  skills: string[];
  hourlyRate?: number;
  avatar?: string;
  rating?: number;
  reviewCount?: number;
  availability?: string;
}

export interface Equipment {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  brand?: string;
  specifications?: string[];
  images: string[];
  availability?: string;
}

// API Configuration - Use environment variable or fallback to API URL
declare const process: {
  env: {
    NEXT_PUBLIC_API_URL?: string;
    [key: string]: string | undefined;
  };
};

const getApiBaseUrl = (): string => {
  // For client-side, use the current origin for local API calls
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  // For server-side, use environment variable or fallback
  return process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com/v1';
};

const API_BASE_URL = getApiBaseUrl();

console.log('Marketplace Service - API Base URL:', API_BASE_URL);

// Create axios instance with proper configuration for the custom implementation
const createMarketplaceClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
  });

  // Request interceptor to add auth token
  client.interceptors.request.use(
    async (config) => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.access_token) {
          if (!config.headers) config.headers = {};
          (config.headers as any).Authorization = `Bearer ${session.access_token}`;
        }
      } catch (error) {
        console.warn('Failed to get auth session for marketplace request:', error);
      }
      
      console.log(`Marketplace API Request: ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    },
    (error) => {
      console.error('Marketplace request interceptor error:', error);
      return Promise.reject(error);
    }
  );

  // Response interceptor with automatic token refresh
  client.interceptors.response.use(
    (response) => {
      console.log(`Marketplace API Response: ${response.status}`);
      return response;
    },
    async (error: AxiosError) => {
      const originalConfig = error.config as any;

      // Handle 401 errors with token refresh
      if (error.response?.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        
        try {
          console.log('Attempting to refresh auth token for marketplace request...');
          const { data, error: refreshError } = await supabase.auth.refreshSession();
          
          if (refreshError || !data.session) {
            console.error('Token refresh failed:', refreshError);
            // Redirect to login
            if (typeof window !== 'undefined') {
              window.location.href = '/login';
            }
            return Promise.reject(error);
          }

          // Make a new request with the refreshed token
          const { data: { session } } = await supabase.auth.getSession();
          if (session?.access_token) {
            const retryConfig = {
              ...originalConfig,
              headers: {
                ...originalConfig.headers,
                Authorization: `Bearer ${session.access_token}`,
              },
            };
            
            // Retry the request based on the method
            if (originalConfig.method === 'GET') {
              return client.get(originalConfig.url, retryConfig);
            } else if (originalConfig.method === 'POST') {
              return client.post(originalConfig.url, originalConfig.body, retryConfig);
            }
          }
        } catch (refreshError) {
          console.error('Error during token refresh:', refreshError);
          return Promise.reject(error);
        }
      }

      // Log detailed error information
      console.error('Marketplace API Error:', {
        message: error.message,
        status: error.response?.status,
        url: error.config?.url,
        method: error.config?.method,
        data: error.response?.data,
        stack: error.stack,
      });

      return Promise.reject(error);
    }
  );

  return client;
};

const marketplaceClient = createMarketplaceClient();

// Marketplace API Functions with detailed error handling

export const fetchProducts = async (params: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
} = {}): Promise<Product[]> => {
  try {
    console.log('Fetching marketplace products with params:', params);
    
    const response = await marketplaceClient.get('/products', { 
      params,
      timeout: 10000, // 10 second timeout
    });
    
    if (response.data && Array.isArray(response.data)) {
      console.log(`Successfully fetched ${response.data.length} products`);
      return response.data;
    } else {
      console.warn('Products API returned unexpected data format:', response.data);
      return [];
    }
  } catch (error: any) {
    console.error('Marketplace fetch failed - Products:', {
      message: error.message,
      status: error.response?.status,
      url: error.config?.url,
      params,
    });
    
    // Return empty array for graceful degradation
    return [];
  }
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    console.log('Fetching marketplace categories...');
    
    const response = await marketplaceClient.get('/categories', {
      timeout: 10000, // 10 second timeout
    });
    
    if (response.data && Array.isArray(response.data)) {
      console.log(`Successfully fetched ${response.data.length} categories`);
      return response.data;
    } else {
      console.warn('Categories API returned unexpected data format:', response.data);
      return [];
    }
  } catch (error: any) {
    console.error('Marketplace fetch failed - Categories:', {
      message: error.message,
      status: error.response?.status,
      url: error.config?.url,
    });
    
    // Return empty array for graceful degradation
    return [];
  }
};

export const fetchTalent = async (params: {
  page?: number;
  limit?: number;
  skills?: string[];
  search?: string;
} = {}): Promise<TalentProfile[]> => {
  try {
    console.log('Fetching marketplace talent with params:', params);
    
    const response = await marketplaceClient.get('/talent', { 
      params,
      timeout: 10000, // 10 second timeout
    });
    
    if (response.data && Array.isArray(response.data)) {
      console.log(`Successfully fetched ${response.data.length} talent profiles`);
      return response.data;
    } else {
      console.warn('Talent API returned unexpected data format:', response.data);
      return [];
    }
  } catch (error: any) {
    console.error('Marketplace fetch failed - Talent:', {
      message: error.message,
      status: error.response?.status,
      url: error.config?.url,
      params,
    });
    
    // Return empty array for graceful degradation
    return [];
  }
};

export const fetchEquipment = async (params: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
} = {}): Promise<Equipment[]> => {
  try {
    console.log('Fetching marketplace equipment with params:', params);
    
    const response = await marketplaceClient.get('/equipment', { 
      params,
      timeout: 10000, // 10 second timeout
    });
    
    if (response.data && Array.isArray(response.data)) {
      console.log(`Successfully fetched ${response.data.length} equipment items`);
      return response.data;
    } else {
      console.warn('Equipment API returned unexpected data format:', response.data);
      return [];
    }
  } catch (error: any) {
    console.error('Marketplace fetch failed - Equipment:', {
      message: error.message,
      status: error.response?.status,
      url: error.config?.url,
      params,
    });
    
    // Return empty array for graceful degradation
    return [];
  }
};

// Helper function to get error message for UI display
export const getMarketplaceErrorMessage = (error: any): string => {
  if (error.response?.status === 404) {
    return 'The requested marketplace data was not found.';
  } else if (error.response?.status === 500) {
    return 'Our servers are experiencing issues. Please try again later.';
  } else if (error.response?.status === 401) {
    return 'Please log in to access marketplace data.';
  } else if (error.code === 'ECONNABORTED') {
    return 'Request timeout. Please check your connection and try again.';
  } else if (!navigator.onLine) {
    return 'No internet connection. Please check your network.';
  } else {
    return 'Unable to load marketplace data. Please try again.';
  }
};

// Export the client for advanced usage
export { marketplaceClient }; 