import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  Filter,
  Sparkles,
  TrendingUp,
  Star,
  Zap,
  ArrowRight,
  Mic,
  MicOff,
  Settings,
  History,
  Bookmark,
  Share2
} from 'lucide-react';
import { Button } from './button';
import { Badge } from './badge';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  relevance: number;
  rating: number;
  reviews: number;
  location?: string;
  price?: string;
  type: 'service' | 'talent' | 'company' | 'article';
  metadata: {
    lastUpdated: string;
    verified: boolean;
    featured: boolean;
  };
}

interface AISearchProps {
  enabled?: boolean;
  placeholder?: string;
  onSearch?: (query: string, filters: SearchFilters) => void;
  onResultClick?: (result: SearchResult) => void;
  className?: string;
}

interface SearchFilters {
  category: string[];
  priceRange: [number, number];
  rating: number;
  location: string[];
  verified: boolean;
  featured: boolean;
}

export function AISearch({
  enabled = true,
  placeholder = "Search for AI services, talent, or companies...",
  onSearch,
  onResultClick,
  className = ""
}: AISearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [savedSearches, setSavedSearches] = useState<string[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    category: [],
    priceRange: [0, 10000],
    rating: 0,
    location: [],
    verified: false,
    featured: false
  });
  
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [_selectedResult, setSelectedResult] = useState<SearchResult | null>(null);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search results - moved inside useCallback to fix dependency issue

  // Mock suggestions based on query
  const generateSuggestions = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) return [];
    
    const baseSuggestions = [
      'AI services',
      'Machine learning',
      'Cloud solutions',
      'Cybersecurity',
      'Data analytics',
      'Quantum computing',
      'Remote developers',
      'IT consulting'
    ];
    
    return baseSuggestions
      .filter(suggestion => 
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 5);
  }, []);

  // Handle search input
  const handleSearchInput = useCallback((value: string) => {
    setQuery(value);
    
    if (value.trim()) {
      const newSuggestions = generateSuggestions(value);
      setSuggestions(newSuggestions);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [generateSuggestions]);

    // Perform search
  const performSearch = useCallback(async (searchQuery: string, searchFilters: SearchFilters) => {
    setIsSearching(true);

    // Mock search results
    const mockResults: SearchResult[] = [
      {
        id: '1',
        title: 'AI-Powered Business Intelligence Platform',
        description: 'Advanced analytics and insights powered by machine learning algorithms',
        category: 'AI & Analytics',
        tags: ['Business Intelligence', 'Machine Learning', 'Analytics', 'Dashboard'],
        relevance: 0.95,
        rating: 4.8,
        reviews: 1247,
        price: '$2,500/month',
        type: 'service',
        metadata: {
          lastUpdated: '2024-01-15',
          verified: true,
          featured: true
        }
      },
      {
        id: '2',
        title: 'Senior AI Engineer - Remote',
        description: 'Experienced AI engineer specializing in deep learning and NLP',
        category: 'Talent',
        tags: ['AI Engineer', 'Deep Learning', 'NLP', 'Remote'],
        relevance: 0.92,
        rating: 4.9,
        reviews: 89,
        price: '$150/hour',
        type: 'talent',
        metadata: {
          lastUpdated: '2024-01-20',
          verified: true,
          featured: false
        }
      },
      {
        id: '3',
        title: 'Quantum Computing Solutions Inc.',
        description: 'Leading provider of quantum computing services and consulting',
        category: 'Quantum Technology',
        tags: ['Quantum Computing', 'Consulting', 'Research', 'Enterprise'],
        relevance: 0.88,
        rating: 4.7,
        reviews: 456,
        location: 'San Francisco, CA',
        type: 'company',
        metadata: {
          lastUpdated: '2024-01-18',
          verified: true,
          featured: true
        }
      }
    ];

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));

    // Filter results based on query and filters
    const filteredResults = mockResults.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = searchFilters.category.length === 0 ||
                             searchFilters.category.includes(result.category);

      const matchesRating = result.rating >= searchFilters.rating;

      const matchesVerified = !searchFilters.verified || result.metadata.verified;

      return matchesQuery && matchesCategory && matchesRating && matchesVerified;
    });

    // Sort by relevance
    filteredResults.sort((a, b) => b.relevance - a.relevance);

    setResults(filteredResults);
    setIsSearching(false);

    // Add to search history
    if (searchQuery.trim() && !searchHistory.includes(searchQuery.trim())) {
      setSearchHistory(prev => [searchQuery.trim(), ...prev.slice(0, 9)]);
    }

    onSearch?.(searchQuery, searchFilters);
  }, [searchHistory, onSearch]);

  // Handle search submission
  const handleSearch = useCallback(() => {
    if (query.trim()) {
      performSearch(query, filters);
    }
  }, [query, filters, performSearch]);

  // Handle voice input
  const toggleVoiceInput = useCallback(() => {
    setIsVoiceActive(!isVoiceActive);
    // In a real implementation, this would start/stop speech recognition
    if (!isVoiceActive) {
      // Simulate voice input
      setTimeout(() => {
        const voiceQuery = 'AI machine learning services';
        setQuery(voiceQuery);
        handleSearchInput(voiceQuery);
        setIsVoiceActive(false);
      }, 2000);
    }
  }, [isVoiceActive, handleSearchInput]);

  // Save search
  const saveSearch = useCallback((searchQuery: string) => {
    if (!savedSearches.includes(searchQuery)) {
      setSavedSearches(prev => [...prev, searchQuery]);
    }
  }, [savedSearches]);

  // Share search results
  const shareResults = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: 'Search Results from Zion Tech Group',
        text: `Check out these results for "${query}"`,
        url: window.location.href
      });
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(
        `Search Results for "${query}": ${window.location.href}`
      );
    }
  }, [query]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  }, [handleSearch]);

  // Handle result selection
  const handleResultClick = useCallback((result: SearchResult) => {
    setSelectedResult(result);
    onResultClick?.(result);
    setIsOpen(false);
  }, [onResultClick]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!enabled) return null;

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full pl-12 pr-20 py-3 bg-zion-blue-dark/60 border border-zion-blue-light/30 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-200"
          />
          
          {/* Voice Input Button */}
          <button
            onClick={toggleVoiceInput}
            className={`absolute right-16 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-all duration-200 ${
              isVoiceActive 
                ? 'bg-red-500/20 text-red-400' 
                : 'text-zinc-400 hover:text-zinc-300 hover:bg-zion-blue/20'
            }`}
          >
            {isVoiceActive ? (
              <Mic className="w-4 h-4 animate-pulse" />
            ) : (
              <MicOff className="w-4 h-4" />
            )}
          </button>
          
          {/* Search Button */}
          <Button
            onClick={handleSearch}
            disabled={!query.trim() || isSearching}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark disabled:opacity-50"
            size="sm"
          >
            {isSearching ? (
              <div className="w-4 h-4 border-2 border-zion-blue-dark border-t-transparent rounded-full animate-spin" />
            ) : (
              <Search className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Clear Button */}
        {query && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => {
              setQuery('');
              setResults([]);
              setSuggestions([]);
              setIsOpen(false);
            }}
            className="absolute right-24 top-1/2 transform -translate-y-1/2 p-1 text-zinc-400 hover:text-white hover:bg-zion-blue/20 rounded-lg transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
      </div>

      {/* Search Results Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl shadow-2xl z-50 max-h-96 overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-blue-light/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI-Powered Search</h3>
                  <p className="text-zinc-400 text-xs">Intelligent results and suggestions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowFilters(!showFilters)}
                  className="text-zinc-400 hover:text-white p-2"
                >
                  <Filter className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={shareResults}
                  className="text-zinc-400 hover:text-white p-2"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  className="p-4 border-b border-zion-blue-light/30 bg-zion-blue/10"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className="text-zinc-300 text-sm font-medium">Category</label>
                      <select
                        multiple
                        value={filters.category}
                        onChange={(e) => {
                          const selected = Array.from(e.target.selectedOptions, option => option.value);
                          setFilters(prev => ({ ...prev, category: selected }));
                        }}
                        className="mt-1 w-full px-3 py-2 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-sm focus:border-zion-cyan focus:outline-none"
                      >
                        <option value="AI & Analytics">AI & Analytics</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Cloud Solutions">Cloud Solutions</option>
                        <option value="Quantum Technology">Quantum Technology</option>
                        <option value="Talent">Talent</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-zinc-300 text-sm font-medium">Min Rating</label>
                      <select
                        value={filters.rating}
                        onChange={(e) => setFilters(prev => ({ ...prev, rating: Number(e.target.value) }))}
                        className="mt-1 w-full px-3 py-2 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-sm focus:border-zion-cyan focus:outline-none"
                      >
                        <option value={0}>Any Rating</option>
                        <option value={3}>3+ Stars</option>
                        <option value={4}>4+ Stars</option>
                        <option value={4.5}>4.5+ Stars</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-zinc-300 text-sm font-medium">Verified Only</label>
                      <div className="mt-1">
                        <input
                          type="checkbox"
                          checked={filters.verified}
                          onChange={(e) => setFilters(prev => ({ ...prev, verified: e.target.checked }))}
                          className="w-4 h-4 text-zion-cyan bg-zion-blue/20 border-zion-blue-light/30 rounded focus:ring-zion-cyan focus:ring-2"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-zinc-300 text-sm font-medium">Featured</label>
                      <div className="mt-1">
                        <input
                          type="checkbox"
                          checked={filters.featured}
                          onChange={(e) => setFilters(prev => ({ ...prev, featured: e.target.checked }))}
                          className="w-4 h-4 text-zion-cyan bg-zion-blue/20 border-zion-blue-light/30 rounded focus:ring-zion-cyan focus:ring-2"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Content */}
            <div className="max-h-64 overflow-y-auto">
              {/* Search History */}
              {searchHistory.length > 0 && !query && (
                <div className="p-4 border-b border-zion-blue-light/30">
                  <h4 className="text-zinc-300 text-sm font-medium mb-3 flex items-center gap-2">
                    <History className="w-4 h-4" />
                    Recent Searches
                  </h4>
                  <div className="space-y-2">
                    {searchHistory.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setQuery(search);
                          performSearch(search, filters);
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-zion-blue/20 transition-colors duration-200 text-zinc-300 hover:text-white"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* AI Suggestions */}
              {suggestions.length > 0 && (
                <div className="p-4 border-b border-zion-blue-light/30">
                  <h4 className="text-zinc-300 text-sm font-medium mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-zion-cyan" />
                    AI Suggestions
                  </h4>
                  <div className="space-y-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setQuery(suggestion);
                          performSearch(suggestion, filters);
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-zion-blue/20 transition-colors duration-200 text-zinc-300 hover:text-white flex items-center justify-between group"
                      >
                        <span>{suggestion}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Results */}
              {results.length > 0 && (
                <div className="p-4">
                  <h4 className="text-zinc-300 text-sm font-medium mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    Search Results ({results.length})
                  </h4>
                  <div className="space-y-3">
                    {results.map((result) => (
                      <motion.div
                        key={result.id}
                        className="p-3 rounded-lg hover:bg-zion-blue/20 border border-transparent hover:border-zion-blue-light/30 transition-all duration-200 cursor-pointer group"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleResultClick(result)}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h5 className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-200">
                              {result.title}
                            </h5>
                            <p className="text-zinc-400 text-sm line-clamp-2">
                              {result.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 ml-3">
                            {result.metadata.verified && (
                              <Badge variant="outline" className="text-xs border-green-500/30 text-green-400">
                                Verified
                              </Badge>
                            )}
                            {result.metadata.featured && (
                              <Badge variant="outline" className="text-xs border-yellow-500/30 text-yellow-400">
                                Featured
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-zinc-500">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              {result.rating}
                            </span>
                            <span>({result.reviews} reviews)</span>
                            <span className="text-zinc-400">•</span>
                            <span>{result.category}</span>
                          </div>
                          
                          {result.price && (
                            <span className="text-zinc-300 font-medium">{result.price}</span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {query && results.length === 0 && !isSearching && (
                <div className="p-8 text-center">
                  <Search className="w-12 h-12 text-zinc-500 mx-auto mb-3" />
                  <h4 className="text-zinc-300 font-medium mb-2">No results found</h4>
                  <p className="text-zinc-500 text-sm">
                    Try adjusting your search terms or filters
                  </p>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-zion-blue-light/30 bg-zion-blue/10">
              <div className="flex items-center justify-between">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => saveSearch(query)}
                  className="border-zion-blue-light/30 text-zinc-300 hover:text-white"
                >
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save Search
                </Button>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-zion-blue-light/30 text-zinc-300 hover:text-white"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}