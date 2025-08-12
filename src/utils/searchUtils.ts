import { SearchSuggestion } from '@/types/search';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'talent' | 'blog' | 'service' | 'doc';
  category?: string;
  url?: string;
  image?: string;
  price?: number;
  currency?: string;
  rating?: number;
  tags?: string[];
  date?: string;
}

export interface SearchFilters {
  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string;
}

export interface SearchMetrics {
  totalResults: number;
  searchTime: number;
  topCategories: Array<{ category: string; count: number }>;
  averagePrice: number;
  averageRating: number;
}

/**
 * Highlight search terms in text with HTML mark tags
 */
export const highlightSearchTerms = (text: string, searchTerm: string): string => {
  if (!searchTerm.trim()) return text;
  
  const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  
  return text.replace(regex, '<mark class="bg-yellow-200 text-black px-1 rounded">$1</mark>');
};

/**
 * Check if a text contains the search term (case-insensitive)
 */
export const matchesSearchTerm = (text: string | undefined, searchTerm: string): boolean => {
  if (!text || !searchTerm.trim()) return false;
  return text.toLowerCase().includes(searchTerm.toLowerCase());
};

/**
 * Calculate relevance score for search results
 */
export const calculateRelevanceScore = (result: SearchResult, searchTerm: string): number => {
  let score = 0;
  const term = searchTerm.toLowerCase();
  const title = result.title.toLowerCase();
  const description = result.description.toLowerCase();

  // Exact title match gets highest score
  if (title === term) score += 100;
  
  // Title starts with search term
  else if (title.startsWith(term)) score += 80;
  
  // Title contains search term
  else if (title.includes(term)) score += 60;
  
  // Description contains search term
  if (description.includes(term)) score += 30;
  
  // Tag matches
  if (result.tags?.some(tag => tag.toLowerCase().includes(term))) {
    score += 20;
  }
  
  // Category match
  if (result.category?.toLowerCase().includes(term)) {
    score += 15;
  }
  
  // Boost score based on rating
  if (result.rating) {
    score += result.rating * 2;
  }
  
  // Recent content gets slight boost
  if (result.date) {
    const dateScore = Math.max(0, 10 - (Date.now() - new Date(result.date).getTime()) / (1000 * 60 * 60 * 24 * 30));
    score += dateScore;
  }

  return score;
};

/**
 * Sort search results based on sort option
 */
export const sortSearchResults = (results: SearchResult[], sortBy: string, searchTerm: string): SearchResult[] => {
  const sortedResults = [...results];
  
  switch (sortBy) {
    case 'price_asc':
      return sortedResults.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
      
    case 'price_desc':
      return sortedResults.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      
    case 'rating':
      return sortedResults.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      
    case 'date':
      return sortedResults.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      });
      
    case 'alphabetical':
      return sortedResults.sort((a, b) => a.title.localeCompare(b.title));
      
    case 'relevance':
    default:
      return sortedResults.sort((a, b) => {
        const scoreA = calculateRelevanceScore(a, searchTerm);
        const scoreB = calculateRelevanceScore(b, searchTerm);
        return scoreB - scoreA;
      });
  }
};

/**
 * Filter search results based on active filters
 */
export const filterSearchResults = (results: SearchResult[], filters: SearchFilters): SearchResult[] => {
  let filteredResults = [...results];

  // Filter by type
  if (filters.types.length > 0) {
    filteredResults = filteredResults.filter(result => 
      filters.types.includes(result.type)
    );
  }

  // Filter by category
  if (filters.category) {
    filteredResults = filteredResults.filter(result => 
      result.category?.toLowerCase() === filters.category.toLowerCase()
    );
  }

  // Filter by price range
  if (filters.minPrice > 0 || filters.maxPrice < 10000) {
    filteredResults = filteredResults.filter(result => {
      const price = result.price ?? 0;
      return price >= filters.minPrice && price <= filters.maxPrice;
    });
  }

  // Filter by minimum rating
  if (filters.minRating > 0) {
    filteredResults = filteredResults.filter(result => 
      (result.rating ?? 0) >= filters.minRating
    );
  }

  return filteredResults;
};

/**
 * Generate search suggestions based on query
 */
export const generateDynamicSuggestions = (
  query: string, 
  recentSearches: string[] = [],
  availableCategories: string[] = [],
  availableTags: string[] = []
): SearchSuggestion[] => {
  const suggestions: SearchSuggestion[] = [];
  const lowerQuery = query.toLowerCase();

  // Add exact query as first suggestion
  if (query.trim()) {
    suggestions.push({
      text: query,
      type: 'recent',
      id: `query-${query}`
    });
  }

  // Add matching categories
  availableCategories
    .filter(category => category.toLowerCase().includes(lowerQuery))
    .slice(0, 3)
    .forEach(category => {
      suggestions.push({
        text: category,
        type: 'category',
        id: `category-${category}`
      });
    });

  // Add matching tags
  availableTags
    .filter(tag => tag.toLowerCase().includes(lowerQuery))
    .slice(0, 3)
    .forEach(tag => {
      suggestions.push({
        text: tag,
        type: 'tag',
        id: `tag-${tag}`
      });
    });

  // Add recent searches that match
  recentSearches
    .filter(search => search.toLowerCase().includes(lowerQuery) && search !== query)
    .slice(0, 3)
    .forEach(search => {
      suggestions.push({
        text: search,
        type: 'recent',
        id: `recent-${search}`
      });
    });

  return suggestions.slice(0, 8); // Limit to 8 suggestions
};

/**
 * Calculate search metrics for analytics
 */
export const calculateSearchMetrics = (results: SearchResult[], searchTime: number): SearchMetrics => {
  const totalResults = results.length;
  
  // Calculate top categories
  const categoryCount = new Map<string, number>();
  results.forEach(result => {
    if (result.category) {
      categoryCount.set(result.category, (categoryCount.get(result.category) || 0) + 1);
    }
  });
  
  const topCategories = Array.from(categoryCount.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Calculate average price
  const pricesResults = results.filter(r => r.price && r.price > 0);
  const averagePrice = pricesResults.length > 0 
    ? pricesResults.reduce((sum, r) => sum + (r.price || 0), 0) / pricesResults.length
    : 0;

  // Calculate average rating
  const ratedResults = results.filter(r => r.rating && r.rating > 0);
  const averageRating = ratedResults.length > 0
    ? ratedResults.reduce((sum, r) => sum + (r.rating || 0), 0) / ratedResults.length
    : 0;

  return {
    totalResults,
    searchTime,
    topCategories,
    averagePrice,
    averageRating
  };
};

/**
 * Debounce function for search input
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Extract keywords from search query for better matching
 */
export const extractKeywords = (query: string): string[] => {
  return query
    .toLowerCase()
    .split(/[\s,.-]+/)
    .filter(word => word.length > 2)
    .filter(word => !['and', 'or', 'the', 'for', 'with', 'from'].includes(word));
};

/**
 * Format search query for display
 */
export const formatSearchQuery = (query: string): string => {
  return query.trim().replace(/\s+/g, ' ');
};

/**
 * Check if filters are active (not default values)
 */
export const hasActiveFilters = (filters: SearchFilters): boolean => {
  return (
    filters.types.length > 0 ||
    filters.category !== '' ||
    filters.minPrice > 0 ||
    filters.maxPrice < 10000 ||
    filters.minRating > 0 ||
    filters.sort !== 'relevance'
  );
};

/**
 * Get filter count for display
 */
export const getActiveFilterCount = (filters: SearchFilters): number => {
  let count = 0;
  
  if (filters.types.length > 0) count += filters.types.length;
  if (filters.category) count += 1;
  if (filters.minPrice > 0 || filters.maxPrice < 10000) count += 1;
  if (filters.minRating > 0) count += 1;
  if (filters.sort !== 'relevance') count += 1;
  
  return count;
};

/**
 * Reset filters to default values
 */
export const getDefaultFilters = (): SearchFilters => ({
  types: [],
  category: '',
  minPrice: 0,
  maxPrice: 10000,
  minRating: 0,
  sort: 'relevance'
});

export default {
  highlightSearchTerms,
  matchesSearchTerm,
  calculateRelevanceScore,
  sortSearchResults,
  filterSearchResults,
  generateDynamicSuggestions,
  calculateSearchMetrics,
  debounce,
  extractKeywords,
  formatSearchQuery,
  hasActiveFilters,
  getActiveFilterCount,
  getDefaultFilters
}; 