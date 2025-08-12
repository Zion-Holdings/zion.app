import axios from 'axios';
import * as Sentry from '@sentry/nextjs';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { ProductListing } from '@/types/listings';
import { TalentProfile as TalentProfileType } from '@/types/talent';
import { ApiResponse, PaginatedResponse, SearchFilters } from '@/types/common';

// TypeScript interfaces
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

export interface MarketplaceItem {

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
  full_name: string;
  professional_title: string;
  description: string;
  skills: string[];
  hourly_rate: number;
  currency: string;
  availability: string;
  location: string;
  rating: number;
  reviewCount: number;
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
  specifications: string[];
  images?: string[];
  rating: number;
  reviewCount: number;
}

export interface Product {
  id: string;
  name: string;
  title?: string;
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
  stock?: number;
  specifications?: Record<string, string>;
}

// Use internal Next.js API routes instead of external URLs
const createMarketplaceClient = (): any => {
  const client = axios.create({
    baseURL: '', // Use relative URLs for internal API routes
    withCredentials: false,
  });

  // Request interceptor for debugging
  client.interceptors.request.use(
    async (config: any) => {
      if (process.env.NODE_ENV === 'development' && process.env.DEBUG_MARKETPLACE) {
        logInfo(`Marketplace API Request: ${config.method?.toUpperCase() || 'UNKNOWN'} ${config.url || 'UNKNOWN_URL'}`);
      }
      return config;
    },
    (error: any) => {
      if (process.env.NODE_ENV === 'development') {
        logErrorToProduction('Marketplace request interceptor error:', error);
      }
      return Promise.reject(error);
    }
  );

  // Response interceptor with error logging
  client.interceptors.response.use(
    (response: any) => {
      if (process.env.NODE_ENV === 'development' && process.env.DEBUG_MARKETPLACE) {
        logInfo(`Marketplace API Response: ${response.status}`);
      }
      return response;
    },
    (error: any) => {
      if (process.env.NODE_ENV === 'development') {
        logErrorToProduction('Marketplace API Error:', {
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

// Helper function to get fallback categories
const getFallbackCategories = (): Category[] => {
  return [
    { id: '1', name: 'AI Models & APIs', description: 'Pre-trained models and API endpoints', product_count: 25 },
    { id: '2', name: 'Services', description: 'Professional AI and tech services', product_count: 18 },
    { id: '3', name: 'Equipment', description: 'Hardware and computing equipment', product_count: 12 },
    { id: '4', name: 'Content Creation', description: 'AI-powered content tools', product_count: 15 },
    { id: '5', name: 'Data Analysis', description: 'Analytics and BI solutions', product_count: 20 },
  ];
};

// Helper function to get fallback equipment
const getFallbackEquipment = (filters: SearchFilters = {}): Equipment[] => {
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
  if (filters.category) {
    return fallbackEquipment.filter(eq => 
      eq.category.toLowerCase() === filters.category?.toLowerCase()
    );
  }
  
  return fallbackEquipment;
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
    name: product.name || product.title || 'Unnamed Product',
    title: product.title || product.name || 'Unnamed Product',
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
    logErrorToProduction('Failed to fetch products:', { data: error });
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

    return data.data || getFallbackCategories();
  } catch (error) {
    logErrorToProduction('Failed to fetch categories:', { data: error });
    return getFallbackCategories();
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

    return data.data || getFallbackTalent();
  } catch (error) {
    logErrorToProduction('Failed to fetch talent:', { data: error });
    return getFallbackTalent();
  }
}

export async function fetchEquipment(filters: SearchFilters = {}): Promise<Equipment[]> {
  try {
    const searchParams = new URLSearchParams();
    
    if (filters.query) searchParams.append('search', filters.query);
    if (filters.category) searchParams.append('category', filters.category);
    if (filters.tags?.length) searchParams.append('tags', filters.tags.join(','));

    const response = await fetch(`/api/marketplace/equipment?${searchParams}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data: ApiResponse<Equipment[]> = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    return data.data || getFallbackEquipment(filters);
  } catch (error) {
    logErrorToProduction('Failed to fetch equipment:', { data: error });
    return getFallbackEquipment(filters);
  }
}