import { NavigationGenerator } from './navigationGenerator';
import { NavigationConfig, NavigationContext, UserNavigationPreferences } from '../types/navigation';

class NavigationService {
  private generator: NavigationGenerator;
  private subscribers: Set<(config: NavigationConfig) => void> = new Set();
  private navigationConfig: NavigationConfig | null = null;
  private updateInterval: NodeJS.Timeout | null = null;
  private isInitialized = false;

  constructor() {
    this.generator = new NavigationGenerator();
    this.initialize();
  }

  private async initialize() {
    try {
      this.navigationConfig = await this.generator.getNavigationConfig();
      this.isInitialized = true;
      this.notifySubscribers();
      
      // Set up automatic refresh
      this.startAutoRefresh();
    } catch (error) {
      console.error('Failed to initialize navigation service:', error);
    }
  }

  // Subscribe to navigation updates
  subscribe(callback: (config: NavigationConfig) => void): () => void {
    this.subscribers.add(callback);
    
    // Immediately call with current config if available
    if (this.navigationConfig) {
      callback(this.navigationConfig);
    }
    
    // Return unsubscribe function
    return () => {
      this.subscribers.delete(callback);
    };
  }

  // Notify all subscribers of updates
  private notifySubscribers() {
    if (this.navigationConfig) {
      this.subscribers.forEach(callback => {
        try {
          callback(this.navigationConfig!);
        } catch (error) {
          console.error('Error in navigation subscriber:', error);
        }
      });
    }
  }

  // Start automatic refresh
  private startAutoRefresh() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
    
    this.updateInterval = setInterval(async () => {
      await this.refresh();
    }, 30000); // Refresh every 30 seconds
  }

  // Stop automatic refresh
  private stopAutoRefresh() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

  // Manual refresh
  async refresh(): Promise<void> {
    try {
      await this.generator.updateNavigation();
      this.navigationConfig = await this.generator.getNavigationConfig();
      this.notifySubscribers();
    } catch (error) {
      console.error('Failed to refresh navigation:', error);
    }
  }

  // Get current navigation configuration
  getNavigationConfig(): NavigationConfig | null {
    return this.navigationConfig;
  }

  // Get navigation for specific context
  getContextualNavigation(context: NavigationContext): NavigationConfig | null {
    if (!this.navigationConfig) return null;

    return {
      ...this.navigationConfig,
      sidebar: this.generator.generateSidebarNavigation(context)
    };
  }

  // Get services by category
  getServicesByCategory(categoryId: string) {
    if (!this.navigationConfig) return [];
    
    const category = this.navigationConfig.categories.find(c => c.id === categoryId);
    if (!category) return [];
    
    return this.navigationConfig.services.filter(service => service.category === category.name);
  }

  // Get service by ID
  getServiceById(serviceId: string) {
    if (!this.navigationConfig) return null;
    return this.navigationConfig.services.find(service => service.id === serviceId) || null;
  }

  // Get category by ID
  getCategoryById(categoryId: string) {
    if (!this.navigationConfig) return null;
    return this.navigationConfig.categories.find(category => category.id === categoryId) || null;
  }

  // Search services
  searchServices(query: string, filters?: {
    category?: string;
    status?: string;
    technology?: string;
  }) {
    if (!this.navigationConfig) return [];
    
    let results = this.navigationConfig.services;
    
    // Apply text search
    if (query) {
      const searchTerm = query.toLowerCase();
      results = results.filter(service => 
        service.label.toLowerCase().includes(searchTerm) ||
        service.description?.toLowerCase().includes(searchTerm) ||
        service.technologyStack?.some(tech => tech.toLowerCase().includes(searchTerm))
      );
    }
    
    // Apply category filter
    if (filters?.category) {
      results = results.filter(service => service.category === filters.category);
    }
    
    // Apply status filter
    if (filters?.status) {
      results = results.filter(service => service.status === filters.status);
    }
    
    // Apply technology filter
    if (filters?.technology) {
      results = results.filter(service => 
        service.technologyStack?.some(tech => 
          tech.toLowerCase().includes(filters.technology!.toLowerCase())
        )
      );
    }
    
    return results.sort((a, b) => (a.priority || 0) - (b.priority || 0));
  }

  // Get navigation statistics
  getNavigationStats() {
    if (!this.navigationConfig) return null;
    
    const totalServices = this.navigationConfig.services.length;
    const totalCategories = this.navigationConfig.categories.length;
    const totalPages = this.navigationConfig.pages.length;
    
    const servicesByStatus = this.navigationConfig.services.reduce((acc, service) => {
      acc[service.status || 'unknown'] = (acc[service.status || 'unknown'] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const servicesByCategory = this.navigationConfig.services.reduce((acc, service) => {
      if (service.category) {
        acc[service.category] = (acc[service.category] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
    
    return {
      totalServices,
      totalCategories,
      totalPages,
      servicesByStatus,
      servicesByCategory,
      lastUpdated: new Date().toISOString()
    };
  }

  // Check if service is available
  isServiceAvailable(serviceId: string): boolean {
    const service = this.getServiceById(serviceId);
    return service?.status === 'active';
  }

  // Get recommended services
  getRecommendedServices(userPreferences?: UserNavigationPreferences, limit: number = 5) {
    if (!this.navigationConfig) return [];
    
    let recommendations = this.navigationConfig.services
      .filter(service => service.status === 'active')
      .sort((a, b) => (a.priority || 0) - (b.priority || 0));
    
    // Apply user preferences if available
    if (userPreferences) {
      if (userPreferences.favoriteServices.length > 0) {
        // Prioritize favorite categories
        const favoriteCategories = new Set(
          userPreferences.favoriteServices.map(id => {
            const service = this.getServiceById(id);
            return service?.category;
          }).filter(Boolean)
        );
        
        recommendations = recommendations.sort((a, b) => {
          const aIsFavorite = a.category && favoriteCategories.has(a.category);
          const bIsFavorite = b.category && favoriteCategories.has(b.category);
          
          if (aIsFavorite && !bIsFavorite) return -1;
          if (!aIsFavorite && bIsFavorite) return 1;
          return (a.priority || 0) - (b.priority || 0);
        });
      }
      
      // Filter based on user preferences
      if (!userPreferences.showBetaServices) {
        recommendations = recommendations.filter(service => service.status !== 'beta');
      }
      
      if (!userPreferences.showDevelopmentServices) {
        recommendations = recommendations.filter(service => service.status !== 'development');
      }
    }
    
    return recommendations.slice(0, limit);
  }

  // Cleanup
  destroy() {
    this.stopAutoRefresh();
    this.subscribers.clear();
  }
}

// Create singleton instance
export const navigationService = new NavigationService();

// Export for use in components
export default navigationService;