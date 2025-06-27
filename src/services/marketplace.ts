import axios, { AxiosInstance, AxiosError } from 'axios';
import * as Sentry from '@sentry/nextjs';
import { logger } from '@/utils/logger';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { ProductListing } from '@/types/listings';
import { TalentProfile as TalentProfileType } from '@/types/talent';
import { ApiResponse, PaginatedResponse, SearchFilters } from '@/types/common';

// TypeScript interfaces
export interface Product {
import { logError } from '@/utils/productionLogger';

  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  tags: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  created_at: string;
  updated_at: string;
  seller_id?: string;
  in_stock?: boolean;
  specifications?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  product_count?: number;
}

export interface TalentProfile {
  id: string;
  name: string;
  specialization: string;
  skills: string[];
  hourly_rate: number;
  availability: string;
  rating: number;
  reviewCount: number;
  location?: string;
  bio?: string;
  portfolio_items?: PortfolioItem[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  project_url?: string;
  technologies: string[];
}

export interface Equipment {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  location: string;
  availability: string;
  specifications: Record<string, string>;
  images: string[];
  rating: number;
  reviewCount: number;
}

// Use internal Next.js API routes instead of external URLs
const createMarketplaceClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: '', // Use relative URLs for internal API routes
    withCredentials: false,
  });

  // Request interceptor for debugging
  client.interceptors.request.use(
    async (config) => {
      if (process.env.NODE_ENV === 'development' && process.env.DEBUG_MARKETPLACE) {
        logger.debug(`Marketplace API Request: ${config.method?.toUpperCase() || 'UNKNOWN'} ${config.url || 'UNKNOWN_URL'}`);
      }
      return config;
    },
    (error) => {
      if (process.env.NODE_ENV === 'development') {
        logger.error('Marketplace request interceptor error:', error);
      }
      return Promise.reject(error);
    }
  );

  // Response interceptor with error logging
  client.interceptors.response.use(
    (response) => {
      if (process.env.NODE_ENV === 'development' && process.env.DEBUG_MARKETPLACE) {
        logger.debug(`Marketplace API Response: ${response.status}`);
      }
      return response;
    },
    (error: AxiosError) => {
      if (process.env.NODE_ENV === 'development') {
        logger.error('Marketplace API Error:', {
          message: error.message,
          status: error.response?.status,
          url: error.config?.url,
          method: error.config?.method,
        });
      }
      return Promise.reject(error);
    }
  );

  return client;
};

const marketplaceClient = createMarketplaceClient();

// Marketplace API Functions with internal API route calls

export const fetchProducts = async (params: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  sort?: string;
} = {}): Promise<Product[]> => {
  try {
    if (process.env.NODE_ENV === 'development' && process.env.DEBUG_MARKETPLACE) {
      logger.debug('Marketplace Service - API Base URL:', process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api');
      logger.debug('Fetching marketplace products with params:', params);
    }
    
    // Use internal Next.js API route
    const response = await marketplaceClient.get('/api/products', { 
      params,
    });
    
    // Handle both direct array response and object with products array
    let products = [];
    if (response.data) {
      if (Array.isArray(response.data)) {
        products = response.data;
      } else if (response.data.products && Array.isArray(response.data.products)) {
        products = response.data.products;
      }
    }
    
    if (products.length > 0) {
      if (process.env.NODE_ENV === 'development' && process.env.DEBUG_MARKETPLACE) {
        logger.debug(`Successfully fetched ${products.length} products from API`);
      }
      return products.map((item: any) => ({
        ...item,
        price: item.price || 0,
        description: item.description || ''
      }));
    } else {
      // Fallback to static data if API returns unexpected format
      if (process.env.NODE_ENV !== 'production') {
        logger.warn('Products API returned unexpected data format. Using static fallback.');
      }
      const { MARKETPLACE_LISTINGS } = await import('@/data/listingData');
      return MARKETPLACE_LISTINGS.map(item => ({
        ...item,
        price: item.price || 0,
        description: item.description || ''
      }));
    }
  } catch (error: any) {
    logger.error('Marketplace fetch failed - Products:', error.message);
    
    // Log to Sentry for production debugging
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error, {
        tags: { service: 'marketplace', endpoint: 'fetchProducts' },
        extra: { params }
      });
    }
    
    // Always return fallback data instead of throwing to prevent infinite loops
    try {
      const { MARKETPLACE_LISTINGS } = await import('@/data/listingData');
      
      // Apply client-side filtering if needed
      let filteredListings = [...MARKETPLACE_LISTINGS]; // Create a copy to avoid mutations
      
      if (params.category) {
        filteredListings = filteredListings.filter(item => 
          item.category?.toLowerCase() === params.category?.toLowerCase()
        );
      }
      
      if (params.search) {
        const searchTerm = params.search.toLowerCase();
        filteredListings = filteredListings.filter(item =>
          item.title?.toLowerCase().includes(searchTerm) ||
          item.description?.toLowerCase().includes(searchTerm) ||
          item.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      }
      
      // Apply sorting
      switch (params.sort) {
        case 'price-low':
          filteredListings.sort((a, b) => (a.price || 0) - (b.price || 0));
          break;
        case 'price-high':
          filteredListings.sort((a, b) => (b.price || 0) - (a.price || 0));
          break;
        case 'rating':
          filteredListings.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          break;
        case 'popular':
          filteredListings.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
          break;
        case 'ai-score':
          filteredListings.sort((a, b) => (b.aiScore || 0) - (a.aiScore || 0));
          break;
        case 'newest':
        default:
          filteredListings.sort(
            (a, b) =>
              new Date(b.createdAt || '').getTime() -
              new Date(a.createdAt || '').getTime()
          );
          break;
      }

      // Apply pagination
      if (params.page && params.limit) {
        const start = (params.page - 1) * params.limit;
        const end = start + params.limit;
        filteredListings = filteredListings.slice(start, end);
      } else if (params.limit) {
        filteredListings = filteredListings.slice(0, params.limit);
      }
      
      return filteredListings.map(item => ({
        ...item,
        price: item.price || 0,
        description: item.description || ''
      }));
    } catch (fallbackError) {
      logger.error('Critical error: Even fallback data failed to load:', fallbackError);
      // Return minimal empty array to prevent complete failure
      return [];
    }
  }
};

// Helper function to get fallback categories
const getFallbackCategories = (): Category[] => {
  return [
    { id: '1', name: 'AI Models & APIs', slug: 'ai-models-apis', description: 'Pre-trained models and API endpoints', productCount: 25 },
    { id: '2', name: 'Services', slug: 'services', description: 'Professional AI and tech services', productCount: 18 },
    { id: '3', name: 'Equipment', slug: 'equipment', description: 'Hardware and computing equipment', productCount: 12 },
    { id: '4', name: 'Content Creation', slug: 'content-creation', description: 'AI-powered content tools', productCount: 15 },
    { id: '5', name: 'Data Analysis', slug: 'data-analysis', description: 'Analytics and BI solutions', productCount: 20 },
  ];
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    // Use internal Next.js API route  
    const response = await marketplaceClient.get('/api/categories');
    
    if (response.data && Array.isArray(response.data)) {
      return response.data;
    } else {
      return getFallbackCategories();
    }
  } catch (error: any) {
    if (process.env.NODE_ENV === 'development') {
    logger.error('Marketplace fetch failed - Categories:', error.message);
    }
    
    // Return fallback categories instead of throwing
    return getFallbackCategories();
  }
};

// Helper function to get fallback equipment
const getFallbackEquipment = (params: any): Equipment[] => {
  const fallbackEquipment: Equipment[] = [
    {
      id: 'eq-1',
      name: 'AI Workstation Pro',
      description: 'High-performance workstation optimized for AI development',
      category: 'Hardware',
      price: 4999,
      currency: 'USD',
      availability: 'In Stock',
      location: 'San Francisco, CA',
      specifications: ['NVIDIA RTX 4090', '128GB RAM', '2TB NVMe SSD'],
      rating: 4.8,
      reviewCount: 23
    },
    {
      id: 'eq-2', 
      name: 'Cloud GPU Cluster',
      description: 'Scalable GPU cluster for machine learning training',
      category: 'Cloud',
      price: 2.50,
      currency: 'USD',
      availability: 'Available',
      location: 'Global',
      specifications: ['NVIDIA A100', 'Auto-scaling', 'Kubernetes'],
      rating: 4.9,
      reviewCount: 67
    }
  ];
  
  // Apply basic filtering
  if (params.category) {
    return fallbackEquipment.filter(eq => 
      eq.category.toLowerCase() === params.category.toLowerCase()
    );
  }
  
  return fallbackEquipment;
};

export const fetchEquipment = async (params: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
} = {}): Promise<Equipment[]> => {
  try {
    // Use internal Next.js API route
    const response = await marketplaceClient.get('/api/equipment', { 
      params,
    });
    
    if (response.data && Array.isArray(response.data)) {
      return response.data;
    } else {
      return getFallbackEquipment(params);
    }
  } catch (error: any) {
    if (process.env.NODE_ENV === 'development') {
    logger.error('Marketplace fetch failed - Equipment:', error.message);
    }
    
    // Return fallback equipment instead of throwing
    return getFallbackEquipment(params);
  }
};

// Helper function to get fallback talent profiles
const getFallbackTalent = (): TalentProfile[] => {
  return [
    {
      id: 'talent-1',
      full_name: 'Alex Chen',
      professional_title: 'Senior AI Engineer',
      description: 'Specialized in computer vision and deep learning with 8+ years experience',
      skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'MLOps'],
      hourly_rate: 150,
      currency: 'USD',
      availability: 'Available',
      location: 'San Francisco, CA',
      rating: 4.9,
      reviewCount: 34
    },
    {
      id: 'talent-2',
      full_name: 'Sarah Rodriguez',
      professional_title: 'ML Data Scientist',
      description: 'Expert in NLP and recommendation systems with proven track record',
      skills: ['Python', 'R', 'NLP', 'Recommendation Systems'],
      hourly_rate: 120,
      currency: 'USD',
      availability: 'Available',
      location: 'New York, NY',
      rating: 4.7,
      reviewCount: 28
    }
  ];
};

export const fetchTalent = async (params: {
  page?: number;
  limit?: number;
  skills?: string;
  search?: string;
} = {}): Promise<TalentProfile[]> => {
  try {
    // Use internal Next.js API route
    const response = await marketplaceClient.get('/api/talent', { 
      params,
    });
    
    if (response.data && Array.isArray(response.data)) {
      return response.data;
    } else {
      return getFallbackTalent();
    }
  } catch (error: any) {
    if (process.env.NODE_ENV === 'development') {
    logger.error('Marketplace fetch failed - Talent:', error.message);
    }
    
    // Return fallback talent instead of throwing
    return getFallbackTalent();
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
  } else if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return 'No internet connection. Please check your network.';
  } else {
    return 'Unable to load marketplace data. Please try again.';
  }
};

// Export the client for advanced usage
export { marketplaceClient };

// Add product validation and auto-generation utilities
export const validateProductData = (product: any): boolean => {
  const requiredFields = ['id', 'title', 'description', 'category'];
  return requiredFields.every(field => product[field] && product[field].toString().trim() !== '');
};

export const generateProductId = (name: string): string => {
  const timestamp = Date.now();
  const randomSuffix = Math.random().toString(36).substring(2, 8);
  const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '-').substring(0, 20);
  return `${slug}-${timestamp}-${randomSuffix}`;
};

export const ensureProductIntegrity = (products: Product[]): Product[] => {
  return products.map(product => ({
    ...product,
    // Ensure required fields have default values
    id: product.id || `product-${Date.now()}-${Math.random()}`,
    name: product.name || 'Unnamed Product',
    description: product.description || '',
    price: typeof product.price === 'number' ? product.price : 0,
    currency: product.currency || 'USD',
    category: product.category || 'general',
    tags: Array.isArray(product.tags) ? product.tags : [],
    images: Array.isArray(product.images) ? product.images : [],
    rating: typeof product.rating === 'number' ? product.rating : 0,
    reviewCount: typeof product.reviewCount === 'number' ? product.reviewCount : 0,
    created_at: product.created_at || new Date().toISOString(),
    updated_at: product.updated_at || new Date().toISOString(),
  }));
};

// Enhanced fetch functions with proper typing
export async function fetchProducts(filters: SearchFilters = {}): Promise<Product[]> {
  try {
    const searchParams = new URLSearchParams();
    
    if (filters.query) searchParams.append('search', filters.query);
    if (filters.category) searchParams.append('category', filters.category);
    if (filters.tags?.length) searchParams.append('tags', filters.tags.join(','));
    if (filters.priceRange?.min) searchParams.append('minPrice', filters.priceRange.min.toString());
    if (filters.priceRange?.max) searchParams.append('maxPrice', filters.priceRange.max.toString());

    const response = await fetch(`/api/marketplace/products?${searchParams}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data: ApiResponse<Product[]> = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    return ensureProductIntegrity(data.data || []);
  } catch (error) {
    logError('Failed to fetch products:', error);
    throw error;
  }
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await fetch('/api/marketplace/categories');
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data: ApiResponse<Category[]> = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    return data.data || [];
  } catch (error) {
    logError('Failed to fetch categories:', error);
    throw error;
  }
}

export async function fetchTalent(filters: SearchFilters = {}): Promise<TalentProfile[]> {
  try {
    const searchParams = new URLSearchParams();
    
    if (filters.query) searchParams.append('search', filters.query);
    if (filters.category) searchParams.append('specialization', filters.category);
    if (filters.tags?.length) searchParams.append('skills', filters.tags.join(','));

    const response = await fetch(`/api/marketplace/talent?${searchParams}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data: ApiResponse<TalentProfile[]> = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    return data.data || [];
  } catch (error) {
    logError('Failed to fetch talent:', error);
    throw error;
  }
}

export async function fetchEquipment(filters: SearchFilters = {}): Promise<Equipment[]> {
  try {
    const searchParams = new URLSearchParams();
    
    if (filters.query) searchParams.append('search', filters.query);
    if (filters.category) searchParams.append('category', filters.category);
    if (filters.priceRange?.min) searchParams.append('minPrice', filters.priceRange.min.toString());
    if (filters.priceRange?.max) searchParams.append('maxPrice', filters.priceRange.max.toString());

    const response = await fetch(`/api/marketplace/equipment?${searchParams}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data: ApiResponse<Equipment[]> = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    return data.data || [];
  } catch (error) {
    logError('Failed to fetch equipment:', error);
    throw error;
  }
}