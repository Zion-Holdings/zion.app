import { useState, useEffect, useCallback, useMemo } from 'react';

interface SearchOptions<T> {
  searchFields: (keyof T)[];
  filterFields?: (keyof T)[];
  sortFields?: (keyof T)[];
  debounceMs?: number;
  fuzzySearch?: boolean;
  caseSensitive?: boolean;
}

interface SearchState<T> {
  query: string;
  filters: Record<string, any>;
  sortBy: keyof T | null;
  sortOrder: 'asc' | 'desc';
  results: T[];
  isLoading: boolean;
  totalResults: number;
}

export const useSearch = <T extends Record<string, any>>(
  data: T[],
  options: SearchOptions<T>
) => {
  const {
    searchFields,
    debounceMs = 300,
    fuzzySearch = true,
    caseSensitive = false
  } = options;

  const [searchState, setSearchState] = useState<SearchState<T>>({
    query: '',
    filters: {},
    sortBy: null,
    sortOrder: 'asc',
    results: data,
    isLoading: false,
    totalResults: data.length
  });

  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchState.query);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [searchState.query, debounceMs]);

  // Fuzzy search algorithm
  const fuzzyMatch = useCallback((text: string, query: string): boolean => {
    if (!query) return true;
    
    const searchText = caseSensitive ? text : text.toLowerCase();
    const searchQuery = caseSensitive ? query : query.toLowerCase();
    
    if (!fuzzySearch) {
      return searchText.includes(searchQuery);
    }

    let queryIndex = 0;
    for (let i = 0; i < searchText.length && queryIndex < searchQuery.length; i++) {
      if (searchText[i] === searchQuery[queryIndex]) {
        queryIndex++;
      }
    }
    
    return queryIndex === searchQuery.length;
  }, [fuzzySearch, caseSensitive]);

  // Search and filter data
  const processedData = useMemo(() => {
    setSearchState(prev => ({ ...prev, isLoading: true }));

    let results = data;

    // Apply search
    if (debouncedQuery) {
      results = results.filter(item => {
        return searchFields.some(field => {
          const value = item[field];
          if (typeof value === 'string') {
            return fuzzyMatch(value, debouncedQuery);
          }
          if (typeof value === 'number') {
            return value.toString().includes(debouncedQuery);
          }
          return false;
        });
      });
    }

    // Apply filters
    Object.entries(searchState.filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        results = results.filter(item => {
          const itemValue = item[key];
          if (Array.isArray(value)) {
            return value.includes(itemValue);
          }
          if (typeof value === 'string') {
            return itemValue?.toLowerCase().includes(value.toLowerCase());
          }
          return itemValue === value;
        });
      }
    });

    // Apply sorting
    if (searchState.sortBy) {
      results = [...results].sort((a, b) => {
        const aValue = a[searchState.sortBy!];
        const bValue = b[searchState.sortBy!];
        
        if (aValue === bValue) return 0;
        
        let comparison = 0;
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          comparison = aValue.localeCompare(bValue);
        } else if (typeof aValue === 'number' && typeof bValue === 'number') {
          comparison = aValue - bValue;
        } else {
          comparison = String(aValue).localeCompare(String(bValue));
        }
        
        return searchState.sortOrder === 'asc' ? comparison : -comparison;
      });
    }

    setSearchState(prev => ({ 
      ...prev, 
      results, 
      totalResults: results.length,
      isLoading: false 
    }));

    return results;
  }, [data, debouncedQuery, searchState.filters, searchState.sortBy, searchState.sortOrder, searchFields, fuzzyMatch]);

  // Update search query
  const setQuery = useCallback((query: string) => {
    setSearchState(prev => ({ ...prev, query }));
  }, []);

  // Update filters
  const setFilter = useCallback((key: string, value: any) => {
    setSearchState(prev => ({
      ...prev,
      filters: { ...prev.filters, [key]: value }
    }));
  }, []);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setSearchState(prev => ({ ...prev, filters: {} }));
  }, []);

  // Update sorting
  const setSort = useCallback((field: keyof T, order: 'asc' | 'desc' = 'asc') => {
    setSearchState(prev => ({
      ...prev,
      sortBy: field,
      sortOrder: order
    }));
  }, []);

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchState(prev => ({
      ...prev,
      query: '',
      filters: {},
      sortBy: null,
      sortOrder: 'asc'
    }));
  }, []);

  // Get search suggestions
  const getSuggestions = useCallback((query: string, maxSuggestions: number = 5): string[] => {
    if (!query || query.length < 2) return [];

    const suggestions = new Set<string>();
    
    searchFields.forEach(field => {
      data.forEach(item => {
        const value = item[field];
        if (typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())) {
          const words = value.split(/\s+/);
          words.forEach((word: string) => {
            if (word.toLowerCase().startsWith(query.toLowerCase()) && word.length > query.length) {
              suggestions.add(word);
            }
          });
        }
      });
    });

    return Array.from(suggestions).slice(0, maxSuggestions);
  }, [data, searchFields]);

  // Pagination helper
  const getPaginatedResults = useCallback((page: number, pageSize: number) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return {
      results: searchState.results.slice(startIndex, endIndex),
      totalPages: Math.ceil(searchState.totalResults / pageSize),
      currentPage: page,
      hasNextPage: endIndex < searchState.totalResults,
      hasPrevPage: page > 1
    };
  }, [searchState.results, searchState.totalResults]);

  return {
    ...searchState,
    setQuery,
    setFilter,
    clearFilters,
    setSort,
    clearSearch,
    getSuggestions,
    getPaginatedResults,
    processedData
  };
};