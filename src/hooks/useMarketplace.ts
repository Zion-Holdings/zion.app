import { useState, useEffect, useCallback } from 'react';
import {
  fetchProducts,
  fetchCategories,
  fetchTalent,
  fetchEquipment,
  getMarketplaceErrorMessage,
  type Product,
  type Category,
  type TalentProfile,
  type Equipment,
} from '@/services/marketplace';

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
export function useMarketplaceProducts(filters: MarketplaceFilters = {}): UseMarketplaceState<Product> {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('useMarketplaceProducts: Fetching products with filters:', filters);
      
      const products = await fetchProducts(filters);
      setData(products);
      
      if (products.length === 0 && !filters.search && !filters.category) {
        console.log('useMarketplaceProducts: No products returned, but no error occurred');
      }
    } catch (err: any) {
      console.error('useMarketplaceProducts: Error fetching products:', err);
      const errorMessage = getMarketplaceErrorMessage(err);
      setError(errorMessage);
      setData([]); // Clear data on error
    } finally {
      setLoading(false);
    }
  }, [filters.page, filters.limit, filters.category, filters.search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const retry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const refresh = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, retry, refresh };
}

// Hook for categories
export function useMarketplaceCategories(): UseMarketplaceState<Category> {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('useMarketplaceCategories: Fetching categories');
      
      const categories = await fetchCategories();
      setData(categories);
    } catch (err: any) {
      console.error('useMarketplaceCategories: Error fetching categories:', err);
      const errorMessage = getMarketplaceErrorMessage(err);
      setError(errorMessage);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const retry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const refresh = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, retry, refresh };
}

// Hook for talent
export function useMarketplaceTalent(filters: MarketplaceFilters = {}): UseMarketplaceState<TalentProfile> {
  const [data, setData] = useState<TalentProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('useMarketplaceTalent: Fetching talent with filters:', filters);
      
      const talent = await fetchTalent(filters);
      setData(talent);
    } catch (err: any) {
      console.error('useMarketplaceTalent: Error fetching talent:', err);
      const errorMessage = getMarketplaceErrorMessage(err);
      setError(errorMessage);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [filters.page, filters.limit, filters.search, JSON.stringify(filters.skills)]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const retry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const refresh = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, retry, refresh };
}

// Hook for equipment
export function useMarketplaceEquipment(filters: MarketplaceFilters = {}): UseMarketplaceState<Equipment> {
  const [data, setData] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('useMarketplaceEquipment: Fetching equipment with filters:', filters);
      
      const equipment = await fetchEquipment(filters);
      setData(equipment);
    } catch (err: any) {
      console.error('useMarketplaceEquipment: Error fetching equipment:', err);
      const errorMessage = getMarketplaceErrorMessage(err);
      setError(errorMessage);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [filters.page, filters.limit, filters.category, filters.search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const retry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const refresh = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, retry, refresh };
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
    console.error('Marketplace Error:', { error, message: errorMessage });
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