import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, X, Filter, TrendingUp, Clock, 
  Star, Zap, Brain, Shield, Rocket, 
  Globe, Cpu, Database, Cloud
} from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  relevance: number;
  lastUpdated: string;
  tags: string[];
  type: 'service' | 'page' | 'blog' | 'case-study';
}

interface SearchFilters {
  category: string[];
  type: string[];
  dateRange: 'all' | 'week' | 'month' | 'year';
  relevance: 'all' | 'high' | 'medium' | 'low';
}

interface EnhancedSearchProps {
  placeholder?: string;
  showFilters?: boolean;
  onSearch?: (query: string, filters: SearchFilters) => void;
  onResultClick?: (result: SearchResult) => void;
}

const EnhancedSearch: React.FC<EnhancedSearchProps> = ({
  placeholder = "Search for AI, Quantum, Space Tech solutions...",
  showFilters = true,
  onSearch,
  onResultClick
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    category: [],
    type: [],
    dateRange: 'all',
    relevance: 'all'
  });
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mock search results - in real app, this would come from API
  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      title: 'Quantum AI Brain-Computer Interface',
      description: 'Revolutionary neural interface powered by quantum AI for unprecedented human-computer symbiosis',
      category: 'AI & Neuroscience',
      url: '/quantum-ai-brain-computer-interface',
      relevance: 0.95,
      lastUpdated: '2024-08-23',
      tags: ['AI', 'Quantum', 'Neuroscience', 'Brain-Computer Interface'],
      type: 'service'
    },
    {
      id: '2',
      title: 'Holographic Quantum Workspace 2045',
      description: 'Immersive 3D workspace powered by quantum computing for unprecedented productivity',
      category: 'Quantum & Emerging Tech',
      url: '/holographic-quantum-workspace-2045',
      relevance: 0.92,
      lastUpdated: '2024-08-22',
      tags: ['Quantum', 'Holographic', '3D', 'Productivity'],
      type: 'service'
    },
    {
      id: '3',
      title: 'AI Autonomous Business Operations',
      description: 'Fully autonomous business process automation powered by advanced AI',
      category: 'AI & Automation',
      url: '/ai-autonomous-business-operations',
      relevance: 0.89,
      lastUpdated: '2024-08-21',
      tags: ['AI', 'Automation', 'Business', 'Operations'],
      type: 'service'
    },
    {
      id: '4',
      title: 'Space Resource Intelligence Platform',
      description: 'Advanced AI platform for space resource discovery and optimization',
      category: 'Space Technology',
      url: '/space-resource-intelligence-2040',
      relevance: 0.87,
      lastUpdated: '2024-08-20',
      tags: ['Space', 'AI', 'Resources', 'Intelligence'],
      type: 'service'
    },
    {
      id: '5',
      title: 'Quantum Cybersecurity Platform',
      description: 'Next-generation cybersecurity powered by quantum computing',
      category: 'Cybersecurity',
      url: '/quantum-cybersecurity-platform',
      relevance: 0.85,
      lastUpdated: '2024-08-19',
      tags: ['Quantum', 'Cybersecurity', 'Security', 'Platform'],
      type: 'service'
    }
  ];

  // Popular searches
  const popularSearchesData = [
    'AI automation', 'Quantum computing', 'Space technology', 
    'Cybersecurity', 'Machine learning', 'Neural networks',
    'Autonomous systems', 'Digital transformation', 'Cloud solutions'
  ];

  // Categories
  const categories = [
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Zap className="w-4 h-4" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { id: 'cloud', name: 'Cloud Solutions', icon: <Cloud className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Cpu className="w-4 h-4" /> },
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-4 h-4" /> },
    { id: 'blockchain', name: 'Blockchain', icon: <Globe className="w-4 h-4" /> }
  ];

  // Types
  const types = [
    { id: 'service', name: 'Services', icon: <Star className="w-4 h-4" /> },
    { id: 'page', name: 'Pages', icon: <Globe className="w-4 h-4" /> },
    { id: 'blog', name: 'Blog Posts', icon: <Clock className="w-4 h-4" /> },
    { id: 'case-study', name: 'Case Studies', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recent-searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (error) {
        // Failed to load recent searches
      }
    }
    
    setPopularSearches(popularSearchesData);
  }, []);

  // Handle search input changes
  const handleSearchChange = useCallback((value: string) => {
    setQuery(value);
    
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    // Debounce search
    if (value.trim()) {
      searchTimeoutRef.current = setTimeout(() => {
        performSearch(value);
      }, 300);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, []);

  // Perform search
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Filter results based on query and filters
      let filteredResults = mockSearchResults.filter(result => {
        const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesCategory = filters.category.length === 0 || 
                               filters.category.some(cat => result.category.toLowerCase().includes(cat));
        
        const matchesType = filters.type.length === 0 || 
                           filters.type.includes(result.type);
        
        return matchesQuery && matchesCategory && matchesType;
      });
      
      // Sort by relevance
      filteredResults.sort((a, b) => b.relevance - a.relevance);
      
      setResults(filteredResults);
      setIsOpen(true);
      
      // Add to recent searches
      if (!recentSearches.includes(searchQuery)) {
        const newRecentSearches = [searchQuery, ...recentSearches.slice(0, 4)];
        setRecentSearches(newRecentSearches);
        localStorage.setItem('recent-searches', JSON.stringify(newRecentSearches));
      }
      
      // Call onSearch callback
      onSearch?.(searchQuery, filters);
      
    } catch (error) {
      // Search failed
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [filters, recentSearches, onSearch]);

  // Handle result click
  const handleResultClick = useCallback((result: SearchResult) => {
    // Add to search history
    // setSearchHistory(prev => [result, ...prev.slice(0, 9)]); // This line was removed
    
    // Call onResultClick callback
    onResultClick?.(result);
    
    // Close search
    setIsOpen(false);
    setQuery('');
  }, [onResultClick]);

  // Handle filter change
  const handleFilterChange = useCallback((filterType: keyof SearchFilters, value: string | boolean | string[]) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    
    // Re-search if we have a query
    if (query.trim()) {
      performSearch(query);
    }
  }, [query, performSearch]);

  // Handle popular search click
  const handlePopularSearchClick = useCallback((popularSearch: string) => {
    setQuery(popularSearch);
    performSearch(popularSearch);
  }, [performSearch]);

  // Handle recent search click
  const handleRecentSearchClick = useCallback((recentSearch: string) => {
    setQuery(recentSearch);
    performSearch(recentSearch);
  }, [performSearch]);

  // Clear search
  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    searchInputRef.current?.focus();
  }, []);

  // Close search on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          ref={searchInputRef}
          type="text"
          value={query}
          onChange={(e) => handleSearchChange(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder={placeholder}
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-2xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
        />
        
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-96 overflow-hidden"
          >
            {/* Search Results */}
            {results.length > 0 ? (
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-900">
                    {results.length} result{results.length !== 1 ? 's' : ''} found
                  </h3>
                  {showFilters && (
                    <button className="text-sm text-cyan-600 hover:text-cyan-700 flex items-center space-x-1">
                      <Filter className="w-4 h-4" />
                      <span>Filters</span>
                    </button>
                  )}
                </div>
                
                <div className="space-y-2">
                  {results.map((result) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-transparent hover:border-gray-200"
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          {result.type === 'service' && <Star className="w-4 h-4 text-cyan-500" />}
                          {result.type === 'page' && <Globe className="w-4 h-4 text-blue-500" />}
                          {result.type === 'blog' && <Clock className="w-4 h-4 text-green-500" />}
                          {result.type === 'case-study' && <TrendingUp className="w-4 h-4 text-purple-500" />}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {result.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {result.description}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">
                              {result.category}
                            </span>
                            <span className="text-xs text-gray-500">
                              {result.lastUpdated}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <div className="text-xs text-gray-500">
                            {Math.round(result.relevance * 100)}%
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : query.trim() && !isSearching ? (
              /* No Results */
              <div className="p-8 text-center">
                <Search className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search terms or filters
                </p>
              </div>
            ) : (
              /* Search Suggestions */
              <div className="p-4">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Recent Searches</h3>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleRecentSearchClick(search)}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                          <Clock className="w-3 h-3 mr-1" />
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Popular Searches */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handlePopularSearchClick(search)}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-cyan-100 text-cyan-700 hover:bg-cyan-200 transition-colors"
                      >
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Loading State */}
            {isSearching && (
              <div className="p-4 text-center">
                <div className="inline-flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-500"></div>
                  <span className="text-sm text-gray-500">Searching...</span>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filters Panel */}
      {showFilters && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-40 w-full mt-2 bg-white rounded-2xl shadow-lg border border-gray-200 p-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Categories */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={filters.category.includes(category.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              handleFilterChange('category', [...filters.category, category.id]);
                            } else {
                              handleFilterChange('category', filters.category.filter(c => c !== category.id));
                            }
                          }}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="text-sm text-gray-700 flex items-center space-x-1">
                          {category.icon}
                          <span>{category.name}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Types */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Types</h4>
                  <div className="space-y-2">
                    {types.map((type) => (
                      <label key={type.id} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={filters.type.includes(type.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              handleFilterChange('type', [...filters.type, type.id]);
                            } else {
                              handleFilterChange('type', filters.type.filter(t => t !== type.id));
                            }
                          }}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="text-sm text-gray-700 flex items-center space-x-1">
                          {type.icon}
                          <span>{type.name}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Date Range */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Date Range</h4>
                  <select
                    value={filters.dateRange}
                    onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                    className="w-full rounded-md border-gray-300 text-sm focus:ring-cyan-500 focus:border-cyan-500"
                  >
                    <option value="all">All Time</option>
                    <option value="week">Past Week</option>
                    <option value="month">Past Month</option>
                    <option value="year">Past Year</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default EnhancedSearch;