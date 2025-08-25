import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Search as SearchIcon, Filter, X, ChevronDown, Clock, TrendingUp } from 'lucide-react';

export interface SearchSuggestion {
  id: string;
  text: string;
  type: 'recent' | 'trending' | 'suggestion';
  category?: string;
  icon?: React.ReactNode;
}

export interface SearchFilter {
  id: string;
  label: string;
  type: 'select' | 'checkbox' | 'range' | 'date';
  options?: { value: string; label: string }[];
  value?: any;
  min?: number;
  max?: number;
}

export interface SearchProps {
  placeholder?: string;
  suggestions?: SearchSuggestion[];
  filters?: SearchFilter[];
  onSearch: (query: string, filters: Record<string, any>) => void;
  onSuggestionClick?: (suggestion: SearchSuggestion) => void;
  recentSearches?: string[];
  trendingSearches?: string[];
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showFilters?: boolean;
  showSuggestions?: boolean;
}

export const Search: React.FC<SearchProps> = ({
  placeholder = 'Search...',
  suggestions = [],
  filters = [],
  onSearch,
  onSuggestionClick,
  recentSearches = [],
  trendingSearches = [],
  className = '',
  size = 'md',
  showFilters = true,
  showSuggestions = true
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
  const [filterValues, setFilterValues] = useState<Record<string, any>>({});
  const searchRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-12 text-lg'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
        setShowFiltersPanel(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = useCallback(() => {
    if (query.trim()) {
      onSearch(query.trim(), activeFilters);
      setIsFocused(false);
    }
  }, [query, activeFilters, onSearch]);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    onSuggestionClick?.(suggestion);
    handleSearch();
  };

  const handleFilterChange = (filterId: string, value: any) => {
    setFilterValues(prev => ({ ...prev, [filterId]: value }));
    
    if (value !== undefined && value !== '') {
      setActiveFilters(prev => ({ ...prev, [filterId]: value }));
    } else {
      setActiveFilters(prev => {
        const newFilters = { ...prev };
        delete newFilters[filterId];
        return newFilters;
      });
    }
  };

  const clearFilters = () => {
    setActiveFilters({});
    setFilterValues({});
  };

  const getActiveFiltersCount = () => Object.keys(activeFilters).length;

  const renderFilterInput = (filter: SearchFilter) => {
    switch (filter.type) {
      case 'select':
        return (
          <select
            value={filterValues[filter.id] || ''}
            onChange={(e) => handleFilterChange(filter.id, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select {filter.label}</option>
            {filter.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className="space-y-2">
            {filter.options?.map(option => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filterValues[filter.id]?.includes(option.value) || false}
                  onChange={(e) => {
                    const currentValues = filterValues[filter.id] || [];
                    const newValues = e.target.checked
                      ? [...currentValues, option.value]
                      : currentValues.filter(v => v !== option.value);
                    handleFilterChange(filter.id, newValues);
                  }}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'range':
        return (
          <div className="space-y-2">
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                min={filter.min}
                max={filter.max}
                value={filterValues[filter.id]?.min || ''}
                onChange={(e) => {
                  const currentRange = filterValues[filter.id] || {};
                  handleFilterChange(filter.id, { ...currentRange, min: e.target.value });
                }}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                placeholder="Max"
                min={filter.min}
                max={filter.max}
                value={filterValues[filter.id]?.max || ''}
                onChange={(e) => {
                  const currentRange = filterValues[filter.id] || {};
                  handleFilterChange(filter.id, { ...currentRange, max: e.target.value });
                }}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        );

      case 'date':
        return (
          <input
            type="date"
            value={filterValues[filter.id] || ''}
            onChange={(e) => handleFilterChange(filter.id, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        );

      default:
        return null;
    }
  };

  const renderSuggestions = () => {
    if (!showSuggestions || !isFocused) return null;

    const allSuggestions = [
      ...recentSearches.map(search => ({
        id: `recent-${search}`,
        text: search,
        type: 'recent' as const,
        icon: <Clock className="w-4 h-4 text-gray-400" />
      })),
      ...trendingSearches.map(search => ({
        id: `trending-${search}`,
        text: search,
        type: 'trending' as const,
        icon: <TrendingUp className="w-4 h-4 text-green-400" />
      })),
      ...suggestions
    ];

    if (allSuggestions.length === 0) return null;

    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <div className="py-2">
          {allSuggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3"
            >
              {suggestion.icon}
              <span className="flex-1">{suggestion.text}</span>
              {suggestion.category && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {suggestion.category}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderFiltersPanel = () => {
    if (!showFiltersPanel || filters.length === 0) return null;

    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Filters</h3>
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Clear all
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filters.map(filter => (
            <div key={filter.id} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {filter.label}
              </label>
              {renderFilterInput(filter)}
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => setShowFiltersPanel(false)}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className={`${iconSizes[size]} text-gray-400`} />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className={`
            w-full pl-10 pr-20 border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition-colors ${sizeClasses[size]}
          `}
        />
        
        {/* Filter Button */}
        {showFilters && filters.length > 0 && (
          <button
            onClick={() => setShowFiltersPanel(!showFiltersPanel)}
            className={`
              absolute inset-y-0 right-0 px-3 flex items-center
              ${getActiveFiltersCount() > 0 ? 'text-blue-600' : 'text-gray-400'}
              hover:text-blue-600 transition-colors
            `}
          >
            <Filter className={`${iconSizes[size]} mr-1`} />
            {getActiveFiltersCount() > 0 && (
              <span className="bg-blue-100 text-blue-800 text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                {getActiveFiltersCount()}
              </span>
            )}
            <ChevronDown className={`${iconSizes[size]} ml-1 transition-transform ${
              showFiltersPanel ? 'rotate-180' : ''
            }`} />
          </button>
        )}
        
        {/* Clear Button */}
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          >
            <X className={`${iconSizes[size]}`} />
          </button>
        )}
      </div>

      {/* Suggestions */}
      {renderSuggestions()}

      {/* Filters Panel */}
      {renderFiltersPanel()}
    </div>
  );
};