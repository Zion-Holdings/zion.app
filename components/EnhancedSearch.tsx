import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, X, Filter, SortAsc, SortDesc, Grid, List, 
  Star, Clock, TrendingUp, Zap, Brain, Atom, Shield, 
  Target, Cpu, Rocket, ChevronDown, ChevronUp, CheckCircle
} from 'lucide-react';

interface EnhancedSearchProps {
  services?: any[];
  onSearch?: (query: string, filters: SearchFilters) => void;
  placeholder?: string;
  showFilters?: boolean;
  showSort?: boolean;
  showViewToggle?: boolean;
}

interface SearchFilters {
  categories: string[];
  priceRange: [number, number];
  features: string[];
  technology: string[];
  rating: number;
  availability: 'all' | 'available' | 'coming-soon';
}

interface SearchResult {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  rating: number;
  features: string[];
  technology: string[];
  icon: string;
  color: string;
  popular: boolean;
  new: boolean;
  matchScore: number;
}

const EnhancedSearch: React.FC<EnhancedSearchProps> = ({
  services = [],
  onSearch,
  placeholder = "Search for revolutionary technology solutions...",
  showFilters = true,
  showSort = true,
  showViewToggle = true
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'relevance' | 'name' | 'price' | 'rating' | 'popularity'>('relevance');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filters, setFilters] = useState<SearchFilters>({
    categories: [],
    priceRange: [0, 10000],
    features: [],
    technology: [],
    rating: 0,
    availability: 'all'
  });

  // Available filter options
  const filterOptions = useMemo(() => ({
    categories: [
      { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-purple-500 to-pink-500' },
      { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-cyan-500 to-blue-500' },
      { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
      { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500' },
      { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500' },
      { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-pink-500 to-red-500' }
    ],
    features: [
      'Autonomous', 'Real-time', 'AI-powered', 'Quantum-enabled', 'Cloud-native',
      'Scalable', 'Secure', 'Compliant', 'API-first', 'Low-code'
    ],
    technology: [
      'GPT-4', 'Claude 3.5', 'Quantum Computing', 'Machine Learning', 'Blockchain',
      'IoT', 'Edge Computing', '5G', 'AR/VR', 'Robotics'
    ]
  }), []);

  // Search functionality
  const performSearch = useCallback(async (query: string, currentFilters: SearchFilters) => {
    if (!query.trim() && currentFilters.categories.length === 0) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter and search services
    let results = services.filter(service => {
      // Text search
      const textMatch = query.trim() === '' || 
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase()) ||
        service.category.toLowerCase().includes(query.toLowerCase()) ||
        service.features?.some((f: string) => f.toLowerCase().includes(query.toLowerCase()));
      
      // Category filter
      const categoryMatch = currentFilters.categories.length === 0 || 
        currentFilters.categories.includes(service.category.toLowerCase());
      
      // Price filter
      const price = parseFloat(service.price?.replace(/[^0-9.]/g, '') || '0');
      const priceMatch = price >= currentFilters.priceRange[0] && price <= currentFilters.priceRange[1];
      
      // Features filter
      const featuresMatch = currentFilters.features.length === 0 ||
        currentFilters.features.some(f => service.features?.includes(f));
      
      // Technology filter
      const technologyMatch = currentFilters.technology.length === 0 ||
        currentFilters.technology.some(t => service.technology?.includes(t));
      
      // Rating filter
      const ratingMatch = service.rating >= currentFilters.rating;
      
      return textMatch && categoryMatch && priceMatch && featuresMatch && technologyMatch && ratingMatch;
    });

    // Calculate match scores
    results = results.map(service => {
      let score = 0;
      
      // Text relevance score
      if (query.trim()) {
        const queryLower = query.toLowerCase();
        if (service.name.toLowerCase().includes(queryLower)) score += 10;
        if (service.description.toLowerCase().includes(queryLower)) score += 5;
        if (service.category.toLowerCase().includes(queryLower)) score += 3;
        service.features?.forEach((f: string) => {
          if (f.toLowerCase().includes(queryLower)) score += 2;
        });
      }
      
      // Popularity score
      if (service.popular) score += 5;
      if (service.new) score += 3;
      
      // Rating score
      score += service.rating * 2;
      
      return { ...service, matchScore: score };
    });

    // Sort results
    results.sort((a, b) => {
      switch (sortBy) {
        case 'relevance':
          return sortOrder === 'desc' ? b.matchScore - a.matchScore : a.matchScore - b.matchScore;
        case 'name':
          return sortOrder === 'desc' ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);
        case 'price':
          const priceA = parseFloat(a.price?.replace(/[^0-9.]/g, '') || '0');
          const priceB = parseFloat(b.price?.replace(/[^0-9.]/g, '') || '0');
          return sortOrder === 'desc' ? priceB - priceA : priceA - priceB;
        case 'rating':
          return sortOrder === 'desc' ? b.rating - a.rating : a.rating - b.rating;
        case 'popularity':
          const popularityA = (a.popular ? 1 : 0) + (a.new ? 0.5 : 0);
          const popularityB = (b.popular ? 1 : 0) + (b.new ? 0.5 : 0);
          return sortOrder === 'desc' ? popularityB - popularityA : popularityA - popularityB;
        default:
          return 0;
      }
    });

    setSearchResults(results);
    setIsSearching(false);
    
    // Call parent callback
    onSearch?.(query, currentFilters);
  }, [services, sortBy, sortOrder, onSearch]);

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(searchQuery, filters);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, filters, performSearch]);

  // Update filters
  const updateFilter = useCallback((key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  // Toggle category filter
  const toggleCategory = useCallback((categoryId: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(c => c !== categoryId)
        : [...prev.categories, categoryId]
    }));
  }, []);

  // Toggle feature filter
  const toggleFeature = useCallback((feature: string) => {
    setFilters(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  }, []);

  // Toggle technology filter
  const toggleTechnology = useCallback((tech: string) => {
    setFilters(prev => ({
      ...prev,
      technology: prev.technology.includes(tech)
        ? prev.technology.filter(t => t !== tech)
        : [...prev.technology, tech]
    }));
  }, []);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setFilters({
      categories: [],
      priceRange: [0, 10000],
      features: [],
      technology: [],
      rating: 0,
      availability: 'all'
    });
  }, []);

  // Get active filters count
  const activeFiltersCount = useMemo(() => {
    return (
      filters.categories.length +
      filters.features.length +
      filters.technology.length +
      (filters.rating > 0 ? 1 : 0) +
      (filters.availability !== 'all' ? 1 : 0)
    );
  }, [filters]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-200"
            aria-label="Search for services"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        
        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {filterOptions.categories.map(category => (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filters.categories.includes(category.id)
                  ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <category.icon className="inline-block w-4 h-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Search Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        {/* Results Count */}
        <div className="text-gray-600 dark:text-gray-400">
          {isSearching ? (
            <span className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-500 mr-2"></div>
              Searching...
            </span>
          ) : (
            <span>
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
            </span>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Filters Toggle */}
          {showFilters && (
            <button
              onClick={() => setShowFiltersPanel(!showFiltersPanel)}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 flex items-center gap-2 ${
                activeFiltersCount > 0
                  ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300'
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
              }`}
              aria-label="Toggle filters panel"
            >
              <Filter className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-cyan-500 text-white text-xs rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          )}

          {/* Sort */}
          {showSort && (
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="relevance">Relevance</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="popularity">Popularity</option>
              </select>
              <button
                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle sort order"
              >
                {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
              </button>
            </div>
          )}

          {/* View Toggle */}
          {showViewToggle && (
            <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFiltersPanel && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6 overflow-hidden"
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Categories */}
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">Categories</h3>
                  <div className="space-y-2">
                    {filterOptions.categories.map(category => (
                      <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.categories.includes(category.id)}
                          onChange={() => toggleCategory(category.id)}
                          className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">Features</h3>
                  <div className="space-y-2">
                    {filterOptions.features.map(feature => (
                      <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.features.includes(feature)}
                          onChange={() => toggleFeature(feature)}
                          className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Technology */}
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">Technology</h3>
                  <div className="space-y-2">
                    {filterOptions.technology.map(tech => (
                      <label key={tech} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.technology.includes(tech)}
                          onChange={() => toggleTechnology(tech)}
                          className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results */}
      <div className="space-y-4">
        {searchResults.length === 0 && !isSearching && searchQuery && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No results found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((result) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{result.icon}</div>
                  <div className="flex items-center space-x-2">
                    {result.popular && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                    {result.new && <Zap className="w-4 h-4 text-blue-500" />}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 transition-colors">
                  {result.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {result.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-cyan-600">{result.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{result.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {searchResults.map((result) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{result.icon}</div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">
                        {result.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {result.popular && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                        {result.new && <Zap className="w-4 h-4 text-blue-500" />}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {result.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center space-x-1">
                          <Target className="w-4 h-4" />
                          <span>{result.category}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{result.rating}</span>
                        </span>
                      </div>
                      
                      <span className="text-xl font-bold text-cyan-600">{result.price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedSearch;