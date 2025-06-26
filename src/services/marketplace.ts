import axios, { AxiosInstance, AxiosError } from 'axios';
import * as Sentry from '@sentry/nextjs';
import { logger } from '@/utils/logger';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { ProductListing } from '@/types/listings';
import { TalentProfile as TalentProfileType } from '@/types/talent';

// TypeScript interfaces
export interface Product {
  id: string;
  title: string;
  name?: string; // Alternative property name
  description: string;
  price: number;
  currency?: string;
  category: string;
  subcategory?: string;
  image?: string;
  images?: string[];
  author?: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  tags?: string[];
  createdAt: string;
  rating?: number;
  reviewCount?: number;
  availability?: string;
  stock?: number;
  location?: string;
  featured?: boolean;
  aiScore?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  productCount?: number;
}

export interface Equipment {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  availability: string;
  location?: string;
  specifications?: string[];
  images?: string[];
  rating?: number;
  reviewCount?: number;
}

export interface TalentProfile {
  id: string;
  full_name: string;
  professional_title: string;
  description: string;
  skills: string[];
  hourly_rate?: number;
  currency?: string;
  availability: string;
  location?: string;
  avatar?: string;
  rating?: number;
  reviewCount?: number;
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
        console.log(`[DEBUG] Marketplace API Request: ${config.method?.toUpperCase() || 'UNKNOWN'} ${config.url || 'UNKNOWN_URL'}`);
      }
      return config;
    },
    (error) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('Marketplace request interceptor error:', error);
      }
      return Promise.reject(error);
    }
  );

  // Response interceptor with error logging
  client.interceptors.response.use(
    (response) => {
      if (process.env.NODE_ENV === 'development' && process.env.DEBUG_MARKETPLACE) {
        console.log(`[DEBUG] Marketplace API Response: ${response.status}`);
      }
      return response;
    },
    (error: AxiosError) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('Marketplace API Error:', {
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
      console.log('[DEBUG] Marketplace Service - API Base URL:', process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api');
      console.log('Fetching marketplace products with params:', params);
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
        console.log(`Successfully fetched ${products.length} products from API`);
      }
      return products.map((item: any) => ({
        ...item,
        price: item.price || 0,
        description: item.description || ''
      }));
    } else {
      // Fallback to static data if API returns unexpected format
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Products API returned unexpected data format. Using static fallback.');
      }
      const { MARKETPLACE_LISTINGS } = await import('@/data/listingData');
      return MARKETPLACE_LISTINGS.map(item => ({
        ...item,
        price: item.price || 0,
        description: item.description || ''
      }));
    }
  } catch (error: any) {
    console.error('Marketplace fetch failed - Products:', error.message);
    
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
      console.error('Critical error: Even fallback data failed to load:', fallbackError);
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
      console.error('Marketplace fetch failed - Categories:', error.message);
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
      console.error('Marketplace fetch failed - Equipment:', error.message);
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
      console.error('Marketplace fetch failed - Talent:', error.message);
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

export const generateProductId = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);
};

export const ensureProductIntegrity = (products: any[]): any[] => {
  return products.map((product, index) => {
    const validated = { ...product };
    
    // Ensure ID exists
    if (!validated.id) {
      validated.id = generateProductId(validated.title || `product-${index}`);
      console.warn(`[Auto-Fix] Generated ID for product: ${validated.id}`);
    }
    
    // Ensure required fields exist
    if (!validated.title) {
      validated.title = `Product ${index + 1}`;
      console.warn(`[Auto-Fix] Generated title for product: ${validated.id}`);
    }
    
    if (!validated.description) {
      validated.description = `Description for ${validated.title}`;
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[Auto-Fix] Generated description for product: ${validated.id}`);
      }
    }
    
    if (!validated.category) {
      validated.category = 'General';
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[Auto-Fix] Generated category for product: ${validated.id}`);
      }
    }
    
    // Ensure price is a valid number
    if (typeof validated.price !== 'number' || validated.price < 0) {
      validated.price = 0;
    }
    
    // Ensure author exists
    if (!validated.author) {
      validated.author = {
        name: 'Zion Marketplace',
        id: 'zion-marketplace'
      };
    }
    
    // Ensure creation date exists
    if (!validated.createdAt) {
      validated.createdAt = new Date().toISOString();
    }
    
    return validated;
  });
};