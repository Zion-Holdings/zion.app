import axios, { AxiosInstance, AxiosError } from 'axios';
import { supabase } from '@/integrations/supabase/client';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { logger } from '@/utils/logger';
import { ProductListing } from '@/types/listings';
import { TalentProfile as TalentProfileType } from '@/types/talent';

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

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Development debug logging
logger.debug('Marketplace Service - API Base URL:', API_BASE_URL);

// Create axios instance with proper configuration for the custom implementation
const createMarketplaceClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: false, // Remove auth requirements for now
  });

  // Request interceptor for debugging - auth token not required for public endpoints
  client.interceptors.request.use(
    async (config) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Marketplace API Request: ${config.method?.toUpperCase()} ${config.url}`);
      }
      return config;
    },
    (error) => {
      console.error('Marketplace request interceptor error:', error);
      return Promise.reject(error);
    }
  );

  // Response interceptor with error logging
  client.interceptors.response.use(
    (response) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Marketplace API Response: ${response.status}`);
      }
      return response;
    },
    async (error: AxiosError) => {
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
    if (process.env.NODE_ENV === 'development') {
      console.log('Fetching marketplace products with params:', params);
    }
    
    const response = await marketplaceClient.get('/api/marketplace/products', { 
      params,
      timeout: 10000, // 10 second timeout
    });
    
    if (response.data && Array.isArray(response.data)) {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Successfully fetched ${response.data.length} products from API`);
      }
      return response.data;
    } else {
      console.warn('Products API returned unexpected data format. Falling back to static data.');
      // Fallback to static data
      const { MARKETPLACE_LISTINGS } = await import('@/data/listingData');
      return MARKETPLACE_LISTINGS.map(item => ({
        ...item,
        price: item.price || 0,
        description: item.description || ''
      }));
    }
  } catch (error: any) {
    console.error('Marketplace fetch failed - Products. Falling back to static data:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      method: error.config?.method,
      params,
    });
    
    // Fallback to static data instead of throwing error
    try {
      const { MARKETPLACE_LISTINGS } = await import('@/data/listingData');
      console.log(`Fallback: Using ${MARKETPLACE_LISTINGS.length} static products`);
      
      // Apply basic filtering if parameters were provided
      let products = MARKETPLACE_LISTINGS;
      
      if (params.category) {
        products = products.filter(p => 
          p.category?.toLowerCase().includes(params.category!.toLowerCase())
        );
      }
      
      if (params.search) {
        const searchTerm = params.search.toLowerCase();
        products = products.filter(p => 
          p.title?.toLowerCase().includes(searchTerm) ||
          p.description?.toLowerCase().includes(searchTerm) ||
          p.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      }
      
      // Apply pagination
      const page = params.page || 1;
      const limit = params.limit || 20;
      const start = (page - 1) * limit;
      const end = start + limit;
      
      return products.slice(start, end).map(item => ({
        ...item,
        price: item.price || 0,
        description: item.description || ''
      }));
    } catch (fallbackError) {
      console.error('Failed to load static fallback data:', fallbackError);
      // If even static data fails, return empty array instead of throwing
      return [];
    }
  }
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    console.log('Fetching marketplace categories...');
    
    const response = await marketplaceClient.get('/api/marketplace/categories', {
      timeout: 10000, // 10 second timeout
    });
    
    if (response.data && Array.isArray(response.data)) {
      console.log(`Successfully fetched ${response.data.length} categories`);
      return response.data;
    } else {
      console.warn('Categories API returned unexpected data format, using fallback');
      return getFallbackCategories();
    }
  } catch (error: any) {
    console.error('Marketplace fetch failed - Categories, using fallback:', {
      message: error.message,
      status: error.response?.status,
      url: error.config?.url,
    });
    
    // Return fallback categories instead of throwing
    return getFallbackCategories();
  }
};

export const fetchTalent = async (params: {
  page?: number;
  limit?: number;
  skills?: string[];
  search?: string;
} = {}): Promise<TalentProfileType[]> => {
  try {
    console.log('Fetching marketplace talent with params:', params);
    
    const response = await marketplaceClient.get('/api/marketplace/talent', { 
      params,
      timeout: 10000, // 10 second timeout
    });
    
    if (response.data && Array.isArray(response.data)) {
      console.log(`Successfully fetched ${response.data.length} talent profiles`);
      return response.data;
    } else {
      console.warn('Talent API returned unexpected data format, using fallback');
      return getFallbackTalent(params);
    }
  } catch (error: any) {
    console.error('Marketplace fetch failed - Talent, using fallback:', {
      message: error.message,
      status: error.response?.status,
      url: error.config?.url,
      params,
    });
    
    // Return fallback talent instead of throwing
    return getFallbackTalent(params);
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
    
    const response = await marketplaceClient.get('/api/marketplace/equipment', { 
      params,
      timeout: 10000, // 10 second timeout
    });
    
    if (response.data && Array.isArray(response.data)) {
      console.log(`Successfully fetched ${response.data.length} equipment items`);
      return response.data;
    } else {
      console.warn('Equipment API returned unexpected data format, using fallback');
      return getFallbackEquipment(params);
    }
  } catch (error: any) {
    console.error('Marketplace fetch failed - Equipment, using fallback:', {
      message: error.message,
      status: error.response?.status,
      url: error.config?.url,
      params,
    });
    
    // Return fallback equipment instead of throwing
    return getFallbackEquipment(params);
  }
};

// Fallback data functions
const getFallbackCategories = (): Category[] => {
  return [
    { id: '1', name: 'AI Services', slug: 'ai-services', icon: '🤖' },
    { id: '2', name: 'Machine Learning', slug: 'machine-learning', icon: '🧠' },
    { id: '3', name: 'Data Analytics', slug: 'data-analytics', icon: '📊' },
    { id: '4', name: 'Cloud Computing', slug: 'cloud-computing', icon: '☁️' },
    { id: '5', name: 'IoT Solutions', slug: 'iot-solutions', icon: '🌐' },
    { id: '6', name: 'Cybersecurity', slug: 'cybersecurity', icon: '🔒' },
  ];
};

const getFallbackTalent = async (params: any): Promise<TalentProfileType[]> => {
  try {
    const { TALENT_PROFILES } = await import('@/data/talentData');
    
    // Apply basic filtering and pagination
    let profiles = TALENT_PROFILES || [];
    
    if (params.search) {
      const searchTerm = params.search.toLowerCase();
      profiles = profiles.filter(p => 
        p.full_name?.toLowerCase().includes(searchTerm) ||
        p.professional_title?.toLowerCase().includes(searchTerm) ||
        p.skills?.some((skill: string) => skill.toLowerCase().includes(searchTerm))
      );
    }
    
    if (params.skills && params.skills.length > 0) {
      profiles = profiles.filter(p => 
        params.skills.some((skill: string) => 
          p.skills?.some((pSkill: string) => pSkill.toLowerCase().includes(skill.toLowerCase()))
        )
      );
    }
    
    // Apply pagination
    const page = params.page || 1;
    const limit = params.limit || 20;
    const start = (page - 1) * limit;
    const end = start + limit;
    
    // Map the data to match the marketplace interface
    return profiles.slice(start, end).map(profile => ({
      id: profile.id,
      user_id: profile.id,
      full_name: profile.full_name,
      professional_title: profile.professional_title,
      skills: profile.skills || [],
      hourly_rate: profile.hourly_rate,
      profile_picture_url: profile.profile_picture_url,
      average_rating: profile.average_rating,
      rating_count: profile.rating_count || 0,
      availability_type: profile.availability_type,
      location: profile.location,
      bio: profile.bio,
      years_experience: profile.years_experience
    } as TalentProfileType));
  } catch (error) {
    console.error('Failed to load fallback talent data:', error);
    return [];
  }
};

const getFallbackEquipment = (params: any): Equipment[] => {
  // Return mock equipment data
  const mockEquipment: Equipment[] = [
    {
      id: '1',
      title: 'NVIDIA RTX 4090 GPU',
      description: 'High-performance GPU for AI workloads',
      price: 1599,
      category: 'GPUs',
      brand: 'NVIDIA',
      specifications: ['24GB GDDR6X', 'Ada Lovelace Architecture'],
      images: ['/images/equipment/rtx-4090.jpg'],
      availability: 'In Stock'
    },
    {
      id: '2',
      title: 'AMD EPYC Server CPU',
      description: 'Enterprise server processor for data centers',
      price: 4999,
      category: 'CPUs',
      brand: 'AMD',
      specifications: ['64 Cores', '128 Threads', '2.25 GHz Base'],
      images: ['/images/equipment/epyc-cpu.jpg'],
      availability: 'Limited Stock'
    }
  ];
  
  // Apply basic filtering
  let equipment = mockEquipment;
  
  if (params.category) {
    equipment = equipment.filter(e => 
      e.category?.toLowerCase().includes(params.category.toLowerCase())
    );
  }
  
  if (params.search) {
    const searchTerm = params.search.toLowerCase();
    equipment = equipment.filter(e => 
      e.title?.toLowerCase().includes(searchTerm) ||
      e.description?.toLowerCase().includes(searchTerm)
    );
  }
  
  return equipment;
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
