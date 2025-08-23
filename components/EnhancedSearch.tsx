import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, TrendingUp, Clock, ArrowRight, X, Zap, Filter, Star } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  href: string;
  relevance: number;
  tags: string[];
}

interface EnhancedSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
  className?: string;
}

const EnhancedSearch: React.FC<EnhancedSearchProps> = ({
  isOpen,
  onClose,
  onSearch,
  className = ''
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Categories', icon: '🔍', color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & ML', icon: '🤖', color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum', icon: '⚛️', color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Security', icon: '🔒', color: 'from-red-500 to-orange-500' },
    { id: 'business', name: 'Business', icon: '💼', color: 'from-emerald-500 to-teal-500' },
    { id: 'it', name: 'IT Infrastructure', icon: '🖥️', color: 'from-yellow-500 to-orange-500' }
  ];

  // Trending searches based on popular services
  const defaultTrendingSearches = [
    "AI Automation", "Quantum Computing", "Cybersecurity", "Micro SAAS", 
    "DevOps", "Cloud Infrastructure", "Machine Learning", "Data Analytics"
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('zion-recent-searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.warn('Failed to parse recent searches');
      }
    }
    setTrendingSearches(defaultTrendingSearches);
  }, []);

  // Save recent searches to localStorage
  const saveToRecentSearches = useCallback((query: string) => {
    if (!query.trim()) return;
    
    const newSearches = [query, ...recentSearches.filter(s => s !== query)].slice(0, 8);
    setRecentSearches(newSearches);
    localStorage.setItem('zion-recent-searches', JSON.stringify(newSearches));
  }, [recentSearches]);

  // Handle search submission
  const handleSearch = useCallback((query: string) => {
    if (!query.trim()) return;
    
    saveToRecentSearches(query);
    onSearch(query);
    setSearchQuery('');
    onClose();
  }, [saveToRecentSearches, onSearch, onClose]);

  // Simulate search results (in a real app, this would call an API)
  const performSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock search results
    const mockResults: SearchResult[] = [
      {
        id: '1',
        title: 'AI Autonomous Business Intelligence',
        description: 'Fully autonomous AI business intelligence platform with real-time analytics',
        category: 'AI & ML',
        type: 'AI Service',
        href: '/ai-autonomous-business-intelligence',
        relevance: 95,
        tags: ['AI', 'Business Intelligence', 'Analytics', 'Automation']
      },
      {
        id: '2',
        title: 'Quantum Cybersecurity Platform',
        description: 'Next-generation quantum-resistant cybersecurity solutions',
        category: 'Security',
        type: 'Security Service',
        href: '/quantum-cybersecurity-platform',
        relevance: 88,
        tags: ['Quantum', 'Cybersecurity', 'Encryption', 'Security']
      },
      {
        id: '3',
        title: 'Micro SAAS Starter Kit',
        description: 'Complete starter kit for building and launching micro SAAS applications',
        category: 'Business',
        type: 'Micro SAAS',
        href: '/micro-saas-starter-kit',
        relevance: 82,
        tags: ['SAAS', 'Business', 'Startup', 'Development']
      }
    ].filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()) ||
      result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(mockResults);
    setIsSearching(false);
  }, []);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        performSearch(searchQuery);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, performSearch]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Enter' && searchQuery.trim()) {
        handleSearch(searchQuery);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, searchQuery, handleSearch, onClose]);

  // Filter results by category
  const filteredResults = selectedCategory === 'all' 
    ? searchResults 
    : searchResults.filter(result => 
        result.category.toLowerCase().includes(selectedCategory) ||
        result.type.toLowerCase().includes(selectedCategory)
      );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-start justify-center pt-20 px-4 ${className}`}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="w-full max-w-4xl bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className="p-6 border-b border-gray-700/50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <Search className="w-5 h-5 mr-2 text-cyan-400" />
                  Search Zion Tech Group Services
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for AI services, quantum computing, IT infrastructure, micro SAAS..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search for services"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category Filters */}
              <div className="mt-4 flex items-center space-x-2 overflow-x-auto pb-2">
                <span className="text-sm text-gray-400 whitespace-nowrap">Categories:</span>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    <span className="mr-1">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {searchQuery ? (
                // Search Results
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-white">
                      Search Results
                      {filteredResults.length > 0 && (
                        <span className="text-gray-400 ml-2">({filteredResults.length})</span>
                      )}
                    </h3>
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      <Filter className="w-4 h-4" />
                      <span>Filters</span>
                    </button>
                  </div>

                  {isSearching ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                        <span className="text-gray-400">Searching...</span>
                      </div>
                    </div>
                  ) : filteredResults.length > 0 ? (
                    <div className="space-y-3">
                      {filteredResults.map((result) => (
                        <motion.div
                          key={result.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="group bg-gray-800/50 hover:bg-gray-800/70 rounded-lg p-4 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-200 cursor-pointer"
                          onClick={() => handleSearch(result.title)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                {result.title}
                              </h4>
                              <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                                {result.description}
                              </p>
                              <div className="flex items-center space-x-4 mt-2">
                                <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                                  {result.category}
                                </span>
                                <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                                  {result.type}
                                </span>
                                <div className="flex items-center space-x-1">
                                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                  <span className="text-xs text-gray-400">{result.relevance}%</span>
                                </div>
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200 opacity-0 group-hover:opacity-100" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-400 mb-2">No results found</h3>
                      <p className="text-gray-500">Try adjusting your search terms or browse our categories below</p>
                    </div>
                  )}
                </div>
              ) : (
                // Default Content
                <div className="space-y-6">
                  {/* Trending Searches */}
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
                      Trending Searches
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {trendingSearches.map((search) => (
                        <button
                          key={search}
                          onClick={() => handleSearch(search)}
                          className="p-3 bg-gray-800/50 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 rounded-lg text-sm transition-all duration-200 border border-gray-700/50 hover:border-cyan-500/50 group"
                        >
                          <div className="flex items-center justify-between">
                            <span>{search}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                        Recent Searches
                      </h3>
                      <div className="space-y-2">
                        {recentSearches.map((search, index) => (
                          <button
                            key={index}
                            onClick={() => handleSearch(search)}
                            className="w-full text-left p-3 hover:bg-gray-800/50 text-gray-300 hover:text-cyan-400 rounded-lg transition-colors duration-200 flex items-center justify-between group"
                          >
                            <span>{search}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                      Quick Actions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <button
                        onClick={() => handleSearch('AI services')}
                        className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-white rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-200"
                      >
                        <div className="text-left">
                          <div className="font-medium">AI & Machine Learning</div>
                          <div className="text-sm text-cyan-300 mt-1">Explore our AI services</div>
                        </div>
                      </button>
                      <button
                        onClick={() => handleSearch('quantum computing')}
                        className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-white rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-200"
                      >
                        <div className="text-left">
                          <div className="font-medium">Quantum Technology</div>
                          <div className="text-sm text-purple-300 mt-1">Discover quantum solutions</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Search Footer */}
            <div className="p-4 border-t border-gray-700/50 bg-gray-800/30 rounded-b-2xl">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-4">
                  <span>Press <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Enter</kbd> to search</span>
                  <span>Press <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Esc</kbd> to close</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Powered by Zion Tech Group</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnhancedSearch;