import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, TrendingUp, Clock, Star, Zap, Brain, Atom, Shield, Rocket } from 'lucide-react';

interface SearchResult {
  id: string;
  name: string;
  description: string;
  category: string;
  type: string;
  slug: string;
  relevance: number;
  features?: string[];
  pricing?: {
    starter?: string;
    enterprise?: string;
  };
}

interface SearchProps {
  onSearch: (query: string) => void;
  onResultSelect: (result: SearchResult) => void;
  placeholder?: string;
  className?: string;
  showFilters?: boolean;
}

const EnhancedSearch: React.FC<SearchProps> = ({
  onSearch,
  onResultSelect,
  placeholder = "Search revolutionary services...",
  className = "",
  showFilters = true
}) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [popularSearches] = useState([
    'AI Consciousness',
    'Quantum Computing',
    'Cybersecurity',
    'Business Intelligence',
    'Space Technology',
    'Autonomous Systems'
  ]);

  // Mock search results - in real app, this would come from API
  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      name: 'AI Consciousness Evolution Platform 2045',
      description: 'Next-generation AI consciousness with emotional intelligence and self-awareness capabilities.',
      category: 'AI & Machine Learning',
      type: 'Platform',
      slug: '/ai-consciousness-evolution-platform-2045',
      relevance: 95,
      features: ['Emotional Intelligence', 'Self-Awareness', 'Consciousness Evolution'],
      pricing: { starter: '$999/month', enterprise: 'Contact Sales' }
    },
    {
      id: '2',
      name: 'Quantum AI Hybrid Computing',
      description: 'Quantum-powered AI with consciousness integration and quantum supremacy.',
      category: 'Quantum Computing',
      type: 'Platform',
      slug: '/quantum-ai-hybrid-computing',
      relevance: 92,
      features: ['Quantum Supremacy', 'AI Integration', 'Hybrid Computing'],
      pricing: { starter: '$1,499/month', enterprise: 'Contact Sales' }
    },
    {
      id: '3',
      name: 'Quantum Cybersecurity Intelligence',
      description: 'Quantum-resistant security with AI consciousness and threat prediction.',
      category: 'Cybersecurity',
      type: 'Platform',
      slug: '/quantum-cybersecurity-intelligence',
      relevance: 88,
      features: ['Quantum Resistance', 'Threat Prediction', 'AI Security'],
      pricing: { starter: '$799/month', enterprise: 'Contact Sales' }
    }
  ];

  const categories = [
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum', icon: Atom, color: 'from-blue-500 to-cyan-500' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'business', name: 'Business', icon: Rocket, color: 'from-emerald-500 to-teal-500' }
  ];

  // Debounced search function
  const debouncedSearch = useCallback(
    useMemo(
      () => debounce((searchQuery: string) => {
        if (searchQuery.trim().length < 2) {
          setResults([]);
          setShowResults(false);
          return;
        }

        setIsSearching(true);
        
        // Simulate API call delay
        setTimeout(() => {
          const filteredResults = mockSearchResults.filter(result => {
            const matchesQuery = result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               result.category.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesFilters = selectedFilters.length === 0 || 
                                 selectedFilters.some(filter => 
                                   result.category.toLowerCase().includes(filter.toLowerCase()) ||
                                   result.type.toLowerCase().includes(filter.toLowerCase())
                                 );
            
            return matchesQuery && matchesFilters;
          });

          // Sort by relevance
          const sortedResults = filteredResults.sort((a, b) => b.relevance - a.relevance);
          
          setResults(sortedResults);
          setShowResults(true);
          setIsSearching(false);
        }, 300);
      }, 300),
      [selectedFilters]
    ),
    [selectedFilters]
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  // Handle search input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim().length === 0) {
      setShowResults(false);
      setResults([]);
    }
  };

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      addToSearchHistory(query);
      setShowResults(false);
    }
  };

  // Add search to history
  const addToSearchHistory = (searchTerm: string) => {
    const newHistory = [searchTerm, ...searchHistory.filter(item => item !== searchTerm)].slice(0, 5);
    setSearchHistory(newHistory);
    localStorage.setItem('zion-search-history', JSON.stringify(newHistory));
  };

  // Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('zion-search-history');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Failed to parse search history:', error);
      }
    }
  }, []);

  // Handle filter toggle
  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  // Handle result selection
  const handleResultSelect = (result: SearchResult) => {
    onResultSelect(result);
    setShowResults(false);
    setQuery('');
  };

  // Clear search
  const clearSearch = () => {
    setQuery('');
    setShowResults(false);
    setResults([]);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search Form */}
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full pl-12 pr-20 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
            onFocus={() => setShowResults(true)}
          />
          
          {/* Clear Button */}
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          
          {/* Search Button */}
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          >
            Search
          </button>
        </div>
      </form>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto"
          >
            {/* Filters */}
            {showFilters && (
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-300">Filter by Category</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => toggleFilter(category.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                        selectedFilters.includes(category.id)
                          ? `bg-gradient-to-r ${category.color} text-white`
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      <category.icon className="w-3 h-3" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            <div className="p-4">
              {isSearching ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                  <span className="ml-3 text-gray-400">Searching...</span>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-3">
                  {results.map((result) => (
                    <motion.div
                      key={result.id}
                      whileHover={{ scale: 1.02 }}
                      className="p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                      onClick={() => handleResultSelect(result)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-white mb-1">{result.name}</h4>
                          <p className="text-sm text-gray-300 mb-2 line-clamp-2">{result.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                              {result.category}
                            </span>
                            {result.pricing?.starter && (
                              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                                From {result.pricing.starter}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-cyan-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-xs">{result.relevance}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : query.trim().length > 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No results found for "{query}"</div>
                  <div className="text-sm text-gray-500">Try adjusting your search terms or filters</div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Search History */}
                  {searchHistory.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-300">Recent Searches</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {searchHistory.map((term, index) => (
                          <button
                            key={index}
                            onClick={() => setQuery(term)}
                            className="px-3 py-1.5 bg-gray-700/50 text-gray-300 text-sm rounded-lg hover:bg-gray-600/50 transition-colors"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Popular Searches */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-300">Popular Searches</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((term, index) => (
                        <button
                          key={index}
                          onClick={() => setQuery(term)}
                          className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-sm rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-cyan-400/30"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default EnhancedSearch;