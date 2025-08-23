import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, TrendingUp, Clock, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface SearchSuggestion {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  relevance: number;
}

interface EnhancedSearchProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

const EnhancedSearch: React.FC<EnhancedSearchProps> = ({
  placeholder = "Search our services, solutions, or expertise...",
  className = "",
  onSearch
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trendingSearches] = useState<string[]>([
    'AI Services',
    'Quantum Computing',
    'Space Technology',
    'Enterprise Solutions',
    'Machine Learning',
    'Cloud Infrastructure'
  ]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('zion-recent-searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch {
        // Silently handle parsing errors
      }
    }
  }, []);

  // Save recent searches to localStorage
  const saveRecentSearch = (search: string) => {
    const updated = [search, ...recentSearches.filter(s => s !== search)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('zion-recent-searches', JSON.stringify(updated));
  };

  // Handle search submission
  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      saveRecentSearch(searchQuery.trim());
      setQuery(searchQuery.trim());
      setIsOpen(false);
      if (onSearch) {
        onSearch(searchQuery.trim());
      }
    }
  };

  // Generate search suggestions based on query
  const generateSuggestions = (searchQuery: string): SearchSuggestion[] => {
    if (!searchQuery.trim()) return [];

    const allServices = [
      {
        id: 'ai-services',
        title: 'AI & Machine Learning Services',
        description: 'Advanced artificial intelligence and machine learning solutions',
        category: 'AI',
        url: '/ai-services',
        relevance: 0.9
      },
      {
        id: 'quantum-computing',
        title: 'Quantum Computing Solutions',
        description: 'Next-generation quantum computing and quantum algorithms',
        category: 'Quantum',
        url: '/quantum-services',
        relevance: 0.8
      },
      {
        id: 'space-technology',
        title: 'Space Technology & Infrastructure',
        description: 'Revolutionary space solutions and satellite technology',
        category: 'Space',
        url: '/space-technology',
        relevance: 0.8
      },
      {
        id: 'enterprise-solutions',
        title: 'Enterprise IT Solutions',
        description: 'Comprehensive enterprise technology and infrastructure',
        category: 'Enterprise',
        url: '/it-services',
        relevance: 0.7
      },
      {
        id: 'cloud-infrastructure',
        title: 'Cloud Infrastructure & DevOps',
        description: 'Scalable cloud solutions and development operations',
        category: 'Cloud',
        url: '/cloud-platform',
        relevance: 0.7
      }
    ];

    const query = searchQuery.toLowerCase();
    return allServices
      .filter(service => 
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query)
      )
      .map(service => ({
        ...service,
        relevance: service.relevance + (service.title.toLowerCase().includes(query) ? 0.1 : 0)
      }))
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 5);
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim()) {
      setIsOpen(true);
      setSuggestions(generateSuggestions(value));
    } else {
      setIsOpen(false);
      setSuggestions([]);
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as HTMLElement)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(query);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setSuggestions([]);
              setIsOpen(false);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto"
          >
            {/* Search Suggestions */}
            {suggestions.length > 0 && (
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-300 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                    Search Results
                  </h3>
                  <span className="text-xs text-gray-500">{suggestions.length} results</span>
                </div>
                <div className="space-y-2">
                  {suggestions.map((suggestion) => (
                    <Link
                      key={suggestion.id}
                      href={suggestion.url}
                      onClick={() => {
                        handleSearch(suggestion.title);
                        setIsOpen(false);
                      }}
                      className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                              {suggestion.title}
                            </span>
                            <span className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                              {suggestion.category}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">{suggestion.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-sm font-medium text-gray-300 flex items-center mb-3">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  Recent Searches
                </h3>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="w-full text-left p-2 rounded-lg hover:bg-gray-800/50 transition-colors text-sm text-gray-300 hover:text-white"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Trending Searches */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-300 flex items-center mb-3">
                <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                Trending Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(search)}
                    className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full text-sm transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 bg-gray-800/30 rounded-b-xl">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handleSearch('AI Services');
                    setIsOpen(false);
                  }}
                  className="flex-1 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-lg text-sm transition-colors"
                >
                  AI Services
                </button>
                <button
                  onClick={() => {
                    handleSearch('Quantum Computing');
                    setIsOpen(false);
                  }}
                  className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg text-sm transition-colors"
                >
                  Quantum
                </button>
                <button
                  onClick={() => {
                    handleSearch('Space Technology');
                    setIsOpen(false);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg text-sm transition-colors"
                >
                  Space Tech
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedSearch;