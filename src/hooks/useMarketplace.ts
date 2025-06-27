import { useState, useEffect, useCallback } from 'react';
import {
import { logError } from '@/utils/productionLogger';

  fetchProducts,
  fetchCategories,
  fetchTalent,
  fetchEquipment,
  getMarketplaceErrorMessage,
  type Product,
  type Category,
  type Equipment,
  type TalentProfile,
} from '@/services/marketplace';
import { useQuery } from '@tanstack/react-query';
import { logDev, logError } from '@/utils/developmentLogger';

export interface UseMarketplaceState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  retry: () => void;
  refresh: () => void;
}

export interface MarketplaceFilters {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  skills?: string[];
}

// Hook for products
export function useMarketplaceProducts(filters: MarketplaceFilters = {}) {
  return useQuery({
    queryKey: ['marketplace', 'products', filters],
    queryFn: async () => {
      logDev('useMarketplaceProducts: Fetching products with filters:', filters);
      
      const searchParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          searchParams.append(key, String(value));
        }
      });

      const response = await fetch(`/api/marketplace/products?${searchParams}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
      }
      
      const data = await response.json();
      if (!data.products || data.products.length === 0) {
        logDev('useMarketplaceProducts: No products returned, but no error occurred');
      }
      return data.products || [];
    },
    onError: (err) => {
      logError('useMarketplaceProducts: Error fetching products:', err);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
}

// Hook for categories
export function useMarketplaceCategories() {
  return useQuery({
    queryKey: ['marketplace', 'categories'],
    queryFn: async () => {
      logDev('useMarketplaceCategories: Fetching categories');
      
      const response = await fetch('/api/marketplace/categories');
      if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.status}`);
      }
      return response.json();
    },
    onError: (err) => {
      logError('useMarketplaceCategories: Error fetching categories:', err);
    },
    staleTime: 30 * 60 * 1000, // 30 minutes - categories change less frequently
    refetchOnWindowFocus: false,
  });
}

// Hook for talent
export function useMarketplaceTalent(filters: MarketplaceFilters = {}) {
  return useQuery({
    queryKey: ['marketplace', 'talent', filters],
    queryFn: async () => {
      logDev('useMarketplaceTalent: Fetching talent with filters:', filters);
      
      const searchParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (Array.isArray(value)) {
            searchParams.append(key, value.join(','));
          } else {
            searchParams.append(key, String(value));
          }
        }
      });

      const response = await fetch(`/api/marketplace/talent?${searchParams}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch talent: ${response.status}`);
      }
      return response.json();
    },
    onError: (err) => {
      logError('useMarketplaceTalent: Error fetching talent:', err);
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
  });
}

// Hook for equipment
export function useMarketplaceEquipment(filters: MarketplaceFilters = {}) {
  return useQuery({
    queryKey: ['marketplace', 'equipment', filters],
    queryFn: async () => {
      logDev('useMarketplaceEquipment: Fetching equipment with filters:', filters);
      
      const searchParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          searchParams.append(key, String(value));
        }
      });

      const response = await fetch(`/api/marketplace/equipment?${searchParams}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch equipment: ${response.status}`);
      }
      return response.json();
    },
    onError: (err) => {
      logError('useMarketplaceEquipment: Error fetching equipment:', err);
    },
    staleTime: 15 * 60 * 1000, // 15 minutes
    refetchOnWindowFocus: false,
  });
}

// Combined hook for marketplace overview
export function useMarketplaceOverview() {
  const products = useMarketplaceProducts({ limit: 6 });
  const categories = useMarketplaceCategories();
  const talent = useMarketplaceTalent({ limit: 6 });
  const equipment = useMarketplaceEquipment({ limit: 6 });

  const loading = products.loading || categories.loading || talent.loading || equipment.loading;
  const hasError = !!(products.error || categories.error || talent.error || equipment.error);
  
  const errors = [products.error, categories.error, talent.error, equipment.error]
    .filter(Boolean) as string[];

  const retryAll = () => {
    products.retry();
    categories.retry();
    talent.retry();
    equipment.retry();
  };

  return {
    products: products.data,
    categories: categories.data,
    talent: talent.data,
    equipment: equipment.data,
    loading,
    hasError,
    errors,
    retryAll,
  };
}

// Helper hook for error handling
export function useMarketplaceErrorHandler() {
  const [lastError, setLastError] = useState<string | null>(null);

  const handleError = useCallback((error: any) => {
    const errorMessage = getMarketplaceErrorMessage(error);
    setLastError(errorMessage);
    logError('Marketplace Error:', { error, message: errorMessage });
    return errorMessage;
  }, []);

  const clearError = useCallback(() => {
    setLastError(null);
  }, []);

  return {
    lastError,
    handleError,
    clearError,
  };
} 