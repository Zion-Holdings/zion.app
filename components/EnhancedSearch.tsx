import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SearchSuggestion {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  relevance: number;
  type: 'service' | 'page' | 'feature';
}

interface SearchHistory {
  query: string;
  timestamp: number;
  resultCount: number;
}

const EnhancedSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([]);
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Trending searches based on popular services
  const defaultTrendingSearches = [
    'AI Services',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Solutions',
    'Machine Learning',
    'Blockchain',
    'IoT Platform',
    'Data Analytics'
  ];

  // Load search history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('search-history');
    if (saved) {
      try {
        setSearchHistory(JSON.parse(saved));
      } catch {
        // Failed to parse search history
      }
    }
    
    setTrendingSearches(defaultTrendingSearches);
  }, []);

  // Save search history to localStorage
  const saveSearchHistory = useCallback((query: string, resultCount: number) => {
    const newHistory: SearchHistory = {
      query,
      timestamp: Date.now(),
      resultCount
    };
    
    const updatedHistory = [
      newHistory,
      ...searchHistory.filter(h => h.query !== query)
    ].slice(0, 10); // Keep only last 10 searches
    
    setSearchHistory(updatedHistory);
    localStorage.setItem('search-history', JSON.stringify(updatedHistory));
  }, [searchHistory]);

  // Generate AI-powered search suggestions
  const generateSuggestions = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate AI-powered search with intelligent matching
    const mockSuggestions: SearchSuggestion[] = [
      {
        id: 'ai-services',
        title: 'AI & Machine Learning Services',
        description: 'Advanced artificial intelligence solutions for modern businesses',
        category: 'AI Services',
        url: '/services/ai-services',
        relevance: 0.95,
        type: 'service'
      },
      {
        id: 'quantum-computing',
        title: 'Quantum Computing Solutions',
        description: 'Next-generation quantum computing and quantum AI services',
        category: 'Quantum Technology',
        url: '/services/quantum-computing',
        relevance: 0.92,
        type: 'service'
      },
      {
        id: 'cybersecurity',
        title: 'Advanced Cybersecurity',
        description: 'Enterprise-grade security solutions and threat protection',
        category: 'Security',
        url: '/services/cybersecurity',
        relevance: 0.89,
        type: 'service'
      },
      {
        id: 'cloud-platform',
        title: 'Cloud Infrastructure Platform',
        description: 'Scalable cloud solutions and infrastructure management',
        category: 'Cloud Services',
        url: '/services/cloud-platform',
        relevance: 0.87,
        type: 'service'
      },
      {
        id: 'data-analytics',
        title: 'Data Analytics & BI',
        description: 'Business intelligence and data-driven insights platform',
        category: 'Data Services',
        url: '/services/data-analytics',
        relevance: 0.85,
        type: 'service'
      }
    ];

    // Filter and sort by relevance
    const filtered = mockSuggestions
      .filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => b.relevance - a.relevance);

    // Add some dynamic suggestions based on query
    if (searchQuery.toLowerCase().includes('ai') || searchQuery.toLowerCase().includes('artificial')) {
      filtered.unshift({
        id: 'ai-autonomous',
        title: 'AI Autonomous Systems',
        description: 'Fully autonomous AI-powered business operations',
        category: 'AI Services',
        url: '/services/ai-autonomous-systems',
        relevance: 0.98,
        type: 'service'
      });
    }

    if (searchQuery.toLowerCase().includes('quantum')) {
      filtered.unshift({
        id: 'quantum-ai',
        title: 'Quantum AI Fusion Platform',
        description: 'Combining quantum computing with artificial intelligence',
        category: 'Quantum Technology',
        url: '/services/quantum-ai-fusion',
        relevance: 0.99,
        type: 'service'
      });
    }

    setSuggestions(filtered);
    setIsLoading(false);
  }, []);

  // Handle search input changes
  const handleInputChange = useCallback((value: string) => {
    setQuery(value);
    setSelectedIndex(-1);
    
    if (value.trim()) {
      generateSuggestions(value);
    } else {
      setSuggestions([]);
    }
  }, [generateSuggestions]);

  // Handle search submission
  const handleSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    saveSearchHistory(searchQuery, suggestions.length);
    setIsOpen(false);
    setQuery('');
    
    // Navigate to search results or first suggestion
    if (suggestions.length > 0) {
      window.location.href = suggestions[0].url;
    } else {
      // Fallback to general search
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  }, [suggestions, saveSearchHistory]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        handleSearch(suggestions[selectedIndex].title);
      } else {
        handleSearch(query);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, [suggestions, selectedIndex, query, handleSearch]);

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/30 rounded-lg text-gray-300 hover:text-white transition-all duration-200 group"
      >
        <Search className="w-4 h-4" />
        <span className="hidden md:block">Search...</span>
        <span className="hidden md:block text-xs text-gray-500">⌘K</span>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          >
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="w-full max-w-2xl mx-4 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-2xl shadow-2xl"
            >
              {/* Search Input */}
              <div className="p-6 border-b border-cyan-400/20">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search for services, features, or solutions..."
                    className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400"
                  />
                  {query && (
                    <button
                      onClick={() => handleInputChange('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Search Content */}
              <div className="max-h-96 overflow-y-auto">
                {query ? (
                  // Search Results
                  <div className="p-4">
                    {isLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                      </div>
                    ) : suggestions.length > 0 ? (
                      <div className="space-y-2">
                        {suggestions.map((suggestion, index) => (
                          <motion.div
                            key={suggestion.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link href={suggestion.url}>
                              <div
                                className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                                  index === selectedIndex
                                    ? 'border-cyan-400 bg-cyan-400/10'
                                    : 'border-gray-700 hover:border-cyan-400/50 hover:bg-gray-800/50'
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <span className="text-white font-medium">
                                        {suggestion.title}
                                      </span>
                                      <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                                        {suggestion.category}
                                      </span>
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                      {suggestion.description}
                                    </p>
                                  </div>
                                  <ArrowRight className="w-5 h-5 text-gray-500" />
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="text-gray-400 mb-2">No results found</div>
                        <div className="text-sm text-gray-500">
                          Try different keywords or browse our services
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // Default State - Trending & History
                  <div className="p-6">
                    {/* Trending Searches */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-cyan-400" />
                        <h3 className="text-white font-medium">Trending Searches</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {trendingSearches.map((trend, index) => (
                          <motion.button
                            key={trend}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleInputChange(trend)}
                            className="px-3 py-2 bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-400/30 rounded-lg text-cyan-400 hover:text-cyan-300 transition-all duration-200 text-sm"
                          >
                            {trend}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Search History */}
                    {searchHistory.length > 0 && (
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <Clock className="w-5 h-5 text-purple-400" />
                          <h3 className="text-white font-medium">Recent Searches</h3>
                        </div>
                        <div className="space-y-2">
                          {searchHistory.slice(0, 5).map((history, index) => (
                            <motion.button
                              key={history.timestamp}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => handleInputChange(history.query)}
                              className="w-full text-left p-3 hover:bg-gray-800/50 rounded-lg transition-colors group"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <Clock className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                                  <span className="text-gray-300 group-hover:text-white transition-colors">
                                    {history.query}
                                  </span>
                                </div>
                                <span className="text-xs text-gray-500">
                                  {history.resultCount} results
                                </span>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="flex items-center space-x-2 mb-4">
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        <h3 className="text-white font-medium">Quick Actions</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Link href="/services">
                          <div className="p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg cursor-pointer transition-colors group">
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              Browse Services
                            </div>
                            <div className="text-sm text-gray-400">
                              Explore our complete service catalog
                            </div>
                          </div>
                        </Link>
                        <Link href="/contact">
                          <div className="p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg cursor-pointer transition-colors group">
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              Get in Touch
                            </div>
                            <div className="text-sm text-gray-400">
                              Contact our team for assistance
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedSearch;