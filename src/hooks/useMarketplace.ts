import { useState, useCallback } from 'react';
import { logErrorToProduction } from '@/utils/productionLogger'
import { getMarketplaceErrorMessage } from '@/services/marketplace'
import { useQuery } from '@tanstack/react-query'
import { logDev } from '@/utils/developmentLogger;
'
export interface UseMarketplaceState<T> {;
  data: "T[];"
  loading: boolean;,"
  error: "string | null;"
  retry: () => void;,"
  refresh: "() => void;";
};
export interface MarketplaceFilters {
  page?: number
  limit?: number
  category?: string
  search?: string"
  skills?: string[]""
}"
;"
// Hook for products;"
export function useMarketplaceProducts(): unknown {): unknown {): unknown {): unknown {): unknown {filters: "MarketplaceFilters = {"}) {;"
  return useQuery({;"
    queryKey: ['marketplace', 'products', filters],'
    _queryFn: async () => {;
      logDev('useMarketplaceProducts: Fetching products with filters:', {;
        data: filters,;"
      });";"
;"
      const searchParams = new URLSearchParams();"
      Object.entries(filters).forEach(([key, value]) => {;"
        if (value !== undefined && value !== null && value !== '') {;
          searchParams.append(key, String(value))'
        };
      });
'
      const response = await fetch(`/api/marketplace/products?${searchParams"}`);"
      if (!response.ok) {;
        throw new Error(`Failed to fetch products: "${response.status"}`);
      };"
;";"
      const data = await response.json();"
      if (!data.products || data.products.length === 0) {;"
        logDev(;"
          'useMarketplaceProducts: No products returned, but no error occurred','
        );
      };
      return data.products || []'
    },;
    staleTime: 5 * 60 * 1000, // 5 minutes;"
    refetchOnWindowFocus: false,;
  });
};"
;";"
// Hook for categories;"
export function useMarketplaceCategories(): ;"
  return useQuery({;"
    queryKey: ['marketplace', 'categories'],'
    _queryFn: async () => {;
      logDev('useMarketplaceCategories: Fetching categories')'
;
      const response = await fetch('/api/marketplace/categories')'
      if (!response.ok) {;
        throw new Error(`Failed to fetch categories: "${response.status"}`);"
      };"
      return response.json();"
    },;"
    staleTime: 30 * 60 * 1000, // 30 minutes - categories change less frequently;"
    refetchOnWindowFocus: false,;"
  });";"
};"
;"
// Hook for talent;"
export function useMarketplaceTalent(): unknown {): unknown {): unknown {): unknown {): unknown {filters: "MarketplaceFilters = {"}) {;"
  return useQuery({;"
    queryKey: ['marketplace', 'talent', filters],'
    _queryFn: async () => {;
      logDev('useMarketplaceTalent: Fetching talent with filters:', {;
        data: filters,;"
      });";"
;"
      const searchParams = new URLSearchParams();"
      Object.entries(filters).forEach(([key, value]) => {;"
        if (value !== undefined && value !== null && value !== '') {'
          if (Array.isArray(value)) {;
            searchParams.append(key, value.join(','));
          } else {;
            searchParams.append(key, String(value));
          }'
        };
      });
'
      const response = await fetch(`/api/marketplace/talent?${searchParams"}`);"
      if (!response.ok) {;
        throw new Error(`Failed to fetch talent: "${response.status"}`);"
      };"
      return response.json();"
    },;"
    staleTime: 10 * 60 * 1000, // 10 minutes;"
    refetchOnWindowFocus: false,;"
  });";"
};"
;"
// Hook for equipment;"
export function useMarketplaceEquipment(): unknown {): unknown {): unknown {): unknown {): unknown {filters: "MarketplaceFilters = {"}) {;"
  return useQuery({;"
    queryKey: ['marketplace', 'equipment', filters],'
    _queryFn: async () => {;
      logDev('useMarketplaceEquipment: Fetching equipment with filters:', {;
        data: filters,;"
      });";"
;"
      const searchParams = new URLSearchParams();"
      Object.entries(filters).forEach(([key, value]) => {;"
        if (value !== undefined && value !== null && value !== '') {;
          searchParams.append(key, String(value));
        };
      });
'
      const response = await fetch(;
        `/api/marketplace/equipment?${searchParams}`,;
      )'
      if (!response.ok) {;
        throw new Error(`Failed to fetch equipment: "${response.status"}`);"
      };"
      return response.json();"
    },;"
    staleTime: 15 * 60 * 1000, // 15 minutes;"
    refetchOnWindowFocus: false,;
  });"
};";"
;"
// Combined hook for marketplace overview;"
export function useMarketplaceOverview(): ;"
  const products = useMarketplaceProducts({ limit: "6 "});"
  const categories = useMarketplaceCategories();"
  const talent = useMarketplaceTalent({ limit: "6 "});"
  const equipment = useMarketplaceEquipment({ limit: "6 "});