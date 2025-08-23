import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Search as SearchIcon, X, TrendingUp, Clock, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  relevance: number;
  lastAccessed?: Date;
}

interface EnhancedSearchProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
  showSuggestions?: boolean;
  maxResults?: number;
}

const EnhancedSearch: React.FC<EnhancedSearchProps> = ({
  placeholder = "Search our revolutionary services...",
  className = "",
  onSearch,
  showSuggestions = true,
  maxResults = 10
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<SearchResult[]>([]);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock data for demonstration - in real app, this would come from API
  const mockSearchData: SearchResult[] = [
    {
      id: '1',
      title: 'AI Consciousness Evolution',
      description: 'Next-generation AI consciousness and emotional intelligence platform',
      url: '/ai-consciousness-evolution-2040',
      category: 'AI & Consciousness',
      tags: ['AI', 'consciousness', 'evolution', 'emotional intelligence'],
      relevance: 0.95
    },
    {
      id: '2',
      title: 'Quantum Neural Ecosystem',
      description: 'Revolutionary quantum computing with consciousness integration',
      url: '/quantum-neural-ecosystem-2040',
      category: 'Quantum Computing',
      tags: ['quantum', 'neural', 'ecosystem', 'computing'],
      relevance: 0.92
    },
    {
      id: '3',
      title: 'Space Resource Intelligence',
      description: 'AI-powered space exploration and resource management',
      url: '/space-resource-intelligence-2040',
      category: 'Space Technology',
      tags: ['space', 'AI', 'resources', 'exploration'],
      relevance: 0.88
    },
    {
      id: '4',
      title: 'Autonomous Business Intelligence',
      description: 'Consciousness-driven business insights and automation',
      url: '/autonomous-business-intelligence-2040',
      category: 'Business Intelligence',
      tags: ['autonomous', 'business', 'intelligence', 'AI'],
      relevance: 0.85
    },
    {
      id: '5',
      title: 'Quantum Cybersecurity Future',
      description: 'Future-proof security with consciousness-based protection',
      url: '/quantum-cybersecurity-future-2040',
      category: 'Cybersecurity',
      tags: ['quantum', 'cybersecurity', 'future', 'protection'],
      relevance: 0.83
    }
  ];

  const mockPopularSearches = [
    'AI consciousness',
    'Quantum computing',
    'Space technology',
    'Cybersecurity',
    'Business intelligence',
    'Autonomous systems'
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recent-searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (error) {
        console.warn('Failed to parse recent searches:', error);
      }
    }

    const savedHistory = localStorage.getItem('search-history');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.warn('Failed to parse search history:', error);
      }
    }
  }, []);

  // Save recent searches to localStorage
  useEffect(() => {
    if (recentSearches.length > 0) {
      localStorage.setItem('recent-searches', JSON.stringify(recentSearches.slice(0, 5)));
    }
  }, [recentSearches]);

  // Handle click outside to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!showResults) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && results[focusedIndex]) {
          handleResultClick(results[focusedIndex]);
        } else if (query.trim()) {
          handleSearch();
        }
        break;
      case 'Escape':
        setShowResults(false);
        setFocusedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  }, [showResults, results, focusedIndex, query]);

  // Perform search
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    // Filter results based on query
    const filtered = mockSearchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Sort by relevance
    const sorted = filtered.sort((a, b) => b.relevance - a.relevance);
    setResults(sorted.slice(0, maxResults));
    setIsSearching(false);
  }, [maxResults]);

  // Handle search input changes
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim()) {
      performSearch(value);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [performSearch]);

  // Handle search submission
  const handleSearch = useCallback(() => {
    if (!query.trim()) return;

    // Add to recent searches
    setRecentSearches(prev => {
      const filtered = prev.filter(search => search !== query);
      return [query, ...filtered].slice(0, 5);
    });

    // Add to search history
    const newHistoryItem: SearchResult = {
      id: Date.now().toString(),
      title: query,
      description: `Search for: ${query}`,
      url: `/search?q=${encodeURIComponent(query)}`,
      category: 'Search',
      tags: [query],
      relevance: 1,
      lastAccessed: new Date()
    };

    setSearchHistory(prev => {
      const filtered = prev.filter(item => item.title !== query);
      return [newHistoryItem, ...filtered].slice(0, 10);
    });

    // Save to localStorage
    localStorage.setItem('search-history', JSON.stringify(searchHistory));

    if (onSearch) {
      onSearch(query);
    } else {
      // Default behavior: navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }

    setShowResults(false);
    setQuery('');
  }, [query, onSearch, searchHistory]);

  // Handle result click
  const handleResultClick = useCallback((result: SearchResult) => {
    // Add to search history
    setSearchHistory(prev => {
      const filtered = prev.filter(item => item.id !== result.id);
      const updatedResult = { ...result, lastAccessed: new Date() };
      return [updatedResult, ...filtered].slice(0, 10);
    });

    // Navigate to result
    window.location.href = result.url;
    setShowResults(false);
    setQuery('');
  }, []);

  // Handle recent search click
  const handleRecentSearchClick = useCallback((search: string) => {
    setQuery(search);
    performSearch(search);
    setShowResults(true);
  }, [performSearch]);

  // Clear search
  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    setShowResults(false);
    setFocusedIndex(-1);
    inputRef.current?.focus();
  }, []);

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowResults(true)}
          placeholder={placeholder}
          className="w-full px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
          aria-label="Search revolutionary services"
          aria-expanded={showResults}
          aria-controls="search-results"
          aria-activedescendant={focusedIndex >= 0 ? `result-${focusedIndex}` : undefined}
        />
        
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            id="search-results"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-black/95 backdrop-blur-sm border border-white/20 rounded-2xl max-h-96 overflow-y-auto shadow-2xl"
          >
            {/* Search Results */}
            {query && results.length > 0 && (
              <div className="p-4">
                <h3 className="text-white font-medium text-sm mb-3 flex items-center">
                  <SearchIcon className="w-4 h-4 mr-2" />
                  Search Results ({results.length})
                </h3>
                <div className="space-y-2">
                  {results.map((result, index) => (
                    <motion.div
                      key={result.id}
                      id={`result-${index}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        focusedIndex === index 
                          ? 'bg-cyan-500/20 border border-cyan-500/30' 
                          : 'hover:bg-white/10 border border-transparent'
                      }`}
                      onClick={() => handleResultClick(result)}
                      role="option"
                      aria-selected={focusedIndex === index}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm mb-1">{result.title}</h4>
                          <p className="text-gray-400 text-xs mb-2">{result.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-400 text-xs bg-cyan-500/20 px-2 py-1 rounded-full">
                              {result.category}
                            </span>
                            {result.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="text-gray-500 text-xs bg-gray-500/20 px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-2" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Searches */}
            {!query && recentSearches.length > 0 && (
              <div className="p-4 border-b border-white/10">
                <h3 className="text-white font-medium text-sm mb-3 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent Searches
                </h3>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleRecentSearchClick(search)}
                      className="w-full text-left p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            {!query && (
              <div className="p-4">
                <h3 className="text-white font-medium text-sm mb-3 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Popular Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {mockPopularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleRecentSearchClick(search)}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white rounded-full text-sm transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search History */}
            {!query && searchHistory.length > 0 && (
              <div className="p-4 border-t border-white/10">
                <h3 className="text-white font-medium text-sm mb-3 flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  Search History
                </h3>
                <div className="space-y-2">
                  {searchHistory.slice(0, 3).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleResultClick(item)}
                      className="w-full text-left p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.title}</span>
                        <span className="text-gray-500 text-xs">
                          {item.lastAccessed?.toLocaleDateString()}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {query && results.length === 0 && !isSearching && (
              <div className="p-8 text-center">
                <SearchIcon className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 text-sm">No results found for "{query}"</p>
                <p className="text-gray-500 text-xs mt-2">Try different keywords or browse our services</p>
              </div>
            )}

            {/* Loading State */}
            {isSearching && (
              <div className="p-8 text-center">
                <div className="animate-spin w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-400 text-sm">Searching...</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedSearch;