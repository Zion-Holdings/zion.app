import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, Filter, X, Sparkles, TrendingUp, Clock, Star } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  rating?: number;
  type: 'service' | 'talent' | 'equipment';
  tags: string[];
}

interface SearchProps {
  placeholder?: string;
  onSearch?: (query: string, filters: SearchFilters) => void;
  results?: SearchResult[];
  loading?: boolean;
  className?: string;
}

interface SearchFilters {
  category: string[];
  type: string[];
  rating: number;
  priceRange: [number, number];
}

export function Search({ 
  placeholder = "Search for services, talent, or equipment...",
  onSearch,
  results = [],
  loading = false,
  className = ""
}: SearchProps) {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    category: [],
    type: [],
    rating: 0,
    priceRange: [0, 10000]
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock data for suggestions
  useEffect(() => {
    setSuggestions([
      'AI Development',
      'Cloud Migration',
      'Cybersecurity',
      'Data Analytics',
      'Machine Learning',
      'Web Development',
      'Mobile Apps',
      'DevOps Services'
    ]);

    setRecentSearches([
      'React Development',
      'Python AI',
      'AWS Consulting'
    ]);

    setTrendingSearches([
      'Generative AI',
      'Blockchain Development',
      'IoT Solutions',
      'Quantum Computing'
    ]);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query, filters);
      // Add to recent searches
      setRecentSearches(prev => [query, ...prev.filter(s => s !== query)].slice(0, 5));
      setIsExpanded(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'Escape') {
      setIsExpanded(false);
    }
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      type: [],
      rating: 0,
      priceRange: [0, 10000]
    });
  };

  const toggleFilter = (filterType: keyof SearchFilters, value: string | number) => {
    if (filterType === 'category' || filterType === 'type') {
      setFilters(prev => ({
        ...prev,
        [filterType]: prev[filterType].includes(value as string)
          ? prev[filterType].filter(v => v !== value)
          : [...prev[filterType], value as string]
      }));
    } else if (filterType === 'rating') {
      setFilters(prev => ({
        ...prev,
        rating: prev.rating === value ? 0 : value as number
      }));
    }
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          onKeyDown={handleKeyPress}
          className="pl-10 pr-20 py-3 text-lg bg-zion-blue-dark/60 border-zion-blue-light/30 focus:border-zion-cyan text-white placeholder-zinc-400"
        />
        
        {/* Action Buttons */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 ${showFilters ? 'bg-zion-cyan text-zion-blue-dark' : 'text-zinc-400 hover:text-zion-cyan'}`}
          >
            <Filter className="w-4 h-4" />
          </Button>
          
          {query && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setQuery('')}
              className="p-2 text-zinc-400 hover:text-zion-cyan"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
          
          <Button
            size="sm"
            onClick={handleSearch}
            disabled={!query.trim()}
            className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark disabled:opacity-50"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl p-4 z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Filters</h3>
              <Button
                size="sm"
                variant="ghost"
                onClick={clearFilters}
                className="text-zinc-400 hover:text-zion-cyan text-sm"
              >
                Clear All
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Categories */}
              <div>
                <h4 className="text-zinc-300 text-sm font-medium mb-2">Categories</h4>
                <div className="space-y-2">
                  {['AI & ML', 'Cloud', 'Security', 'Development', 'Analytics'].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(cat)}
                        onChange={() => toggleFilter('category', cat)}
                        className="rounded border-zion-blue-light/30 text-zion-cyan focus:ring-zion-cyan"
                      />
                      <span className="text-zinc-300 text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Types */}
              <div>
                <h4 className="text-zinc-300 text-sm font-medium mb-2">Types</h4>
                <div className="space-y-2">
                  {['Service', 'Talent', 'Equipment'].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.type.includes(type)}
                        onChange={() => toggleFilter('type', type)}
                        className="rounded border-zion-blue-light/30 text-zion-cyan focus:ring-zion-cyan"
                      />
                      <span className="text-zinc-300 text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <h4 className="text-zinc-300 text-sm font-medium mb-2">Minimum Rating</h4>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => toggleFilter('rating', rating)}
                      className={`p-1 rounded ${filters.rating >= rating ? 'text-yellow-400' : 'text-zinc-600'}`}
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Suggestions & Results */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl overflow-hidden z-10 max-h-96 overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* AI Suggestions */}
            {query && (
              <div className="p-4 border-b border-zion-blue-light/20">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-zion-cyan" />
                  <span className="text-zion-cyan text-sm font-medium">AI Suggestions</span>
                </div>
                <div className="space-y-2">
                  {suggestions
                    .filter(s => s.toLowerCase().includes(query.toLowerCase()))
                    .slice(0, 3)
                    .map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left p-2 rounded hover:bg-zion-blue/20 transition-colors duration-200"
                      >
                        <div className="text-white font-medium">{suggestion}</div>
                        <div className="text-zinc-400 text-sm">AI-powered recommendation</div>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Recent Searches */}
            <div className="p-4 border-b border-zion-blue-light/20">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-400 text-sm font-medium">Recent Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => handleSuggestionClick(search)}
                    className="px-3 py-1 bg-zion-blue/20 border border-zion-blue-light/30 rounded-full text-zinc-300 text-sm hover:bg-zion-blue/30 transition-colors duration-200"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Searches */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-400 text-sm font-medium">Trending</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => handleSuggestionClick(search)}
                    className="px-3 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zinc-300 text-sm hover:bg-zion-purple/30 transition-colors duration-200"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results */}
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl overflow-hidden z-10 max-h-96 overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {results.map((result) => (
              <div key={result.id} className="p-4 border-b border-zion-blue-light/20 last:border-b-0 hover:bg-zion-blue/20 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-white font-medium mb-1">{result.title}</h4>
                    <p className="text-zinc-400 text-sm mb-2">{result.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded text-xs text-zion-cyan">
                        {result.category}
                      </span>
                      <span className="px-2 py-1 bg-zion-blue/20 border border-zion-blue/30 rounded text-xs text-zinc-300">
                        {result.type}
                      </span>
                      {result.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-zinc-300 text-xs">{result.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading State */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl p-4 z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 border-2 border-zion-cyan border-t-transparent rounded-full animate-spin" />
              <span className="text-zinc-300">Searching...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}