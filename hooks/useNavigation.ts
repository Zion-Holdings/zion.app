import { useState, useEffect, useMemo } from 'react';
import { NavigationConfig, NavigationContext, UserNavigationPreferences } from '../types/navigation';
import navigationService from '../utils/navigationService';

export function useNavigation() {
  const [navigation, setNavigation] = useState<NavigationConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Subscribe to navigation updates
    const unsubscribe = navigationService.subscribe((config) => {
      setNavigation(config);
      setIsLoading(false);
      setError(null);
    });

    // Get initial navigation if available
    const initialConfig = navigationService.getNavigationConfig();
    if (initialConfig) {
      setNavigation(initialConfig);
      setIsLoading(false);
    }

    return unsubscribe;
  }, []);

  // Get contextual navigation
  const getContextualNavigation = useMemo(() => {
    return (context: NavigationContext) => {
      return navigationService.getContextualNavigation(context);
    };
  }, []);

  // Get services by category
  const getServicesByCategory = useMemo(() => {
    return (categoryId: string) => {
      return navigationService.getServicesByCategory(categoryId);
    };
  }, []);

  // Get service by ID
  const getServiceById = useMemo(() => {
    return (serviceId: string) => {
      return navigationService.getServiceById(serviceId);
    };
  }, []);

  // Get category by ID
  const getCategoryById = useMemo(() => {
    return (categoryId: string) => {
      return navigationService.getCategoryById(categoryId);
    };
  }, []);

  // Search services
  const searchServices = useMemo(() => {
    return (query: string, filters?: {
      category?: string;
      status?: string;
      technology?: string;
    }) => {
      return navigationService.searchServices(query, filters);
    };
  }, []);

  // Get navigation statistics
  const getNavigationStats = useMemo(() => {
    return () => {
      return navigationService.getNavigationStats();
    };
  }, []);

  // Check if service is available
  const isServiceAvailable = useMemo(() => {
    return (serviceId: string) => {
      return navigationService.isServiceAvailable(serviceId);
    };
  }, []);

  // Get recommended services
  const getRecommendedServices = useMemo(() => {
    return (userPreferences?: UserNavigationPreferences, limit?: number) => {
      return navigationService.getRecommendedServices(userPreferences, limit);
    };
  }, []);

  // Manual refresh
  const refresh = async () => {
    try {
      setIsLoading(true);
      await navigationService.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh navigation');
    }
  };

  return {
    navigation,
    isLoading,
    error,
    getContextualNavigation,
    getServicesByCategory,
    getServiceById,
    getCategoryById,
    searchServices,
    getNavigationStats,
    isServiceAvailable,
    getRecommendedServices,
    refresh
  };
}

// Hook for specific navigation context
export function useNavigationContext(context: NavigationContext) {
  const { navigation, isLoading, error } = useNavigation();
  
  const contextualNavigation = useMemo(() => {
    if (!navigation) return null;
    
    return {
      ...navigation,
      sidebar: navigationService.getContextualNavigation(context)?.sidebar || []
    };
  }, [navigation, context]);

  return {
    navigation: contextualNavigation,
    isLoading,
    error
  };
}

// Hook for service-specific navigation
export function useServiceNavigation(serviceId: string) {
  const { navigation, isLoading, error } = useNavigation();
  
  const serviceNavigation = useMemo(() => {
    if (!navigation) return null;
    
    const service = navigationService.getServiceById(serviceId);
    if (!service) return null;
    
    return {
      service,
      sidebar: navigationService.getContextualNavigation({
        pageType: 'service',
        currentService: serviceId
      })?.sidebar || []
    };
  }, [navigation, serviceId]);

  return {
    serviceNavigation,
    isLoading,
    error
  };
}

// Hook for category-specific navigation
export function useCategoryNavigation(categoryId: string) {
  const { navigation, isLoading, error } = useNavigation();
  
  const categoryNavigation = useMemo(() => {
    if (!navigation) return null;
    
    const category = navigationService.getCategoryById(categoryId);
    if (!category) return null;
    
    const services = navigationService.getServicesByCategory(categoryId);
    
    return {
      category,
      services,
      sidebar: navigationService.getContextualNavigation({
        pageType: 'category',
        currentCategory: categoryId
      })?.sidebar || []
    };
  }, [navigation, categoryId]);

  return {
    categoryNavigation,
    isLoading,
    error
  };
}