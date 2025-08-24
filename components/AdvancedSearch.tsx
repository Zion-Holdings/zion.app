import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'service' | 'technology' | 'page' | 'content';
  url: string;
  tags: string[];
  relevance: number;
}

interface SearchFilter {
  type: string[];
  tags: string[];
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
}

interface SearchSuggestion {
  text: string;
  type: 'recent' | 'popular' | 'related';
  count?: number;
}

export default function AdvancedSearch() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilter>({
    type: [],
    tags: [],
    dateRange: { start: null, end: null }
  });
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedResult, setSelectedResult] = useState<number>(-1);

  // Mock data - in production, this would come from your backend
  const mockData: SearchResult[] = [
    {
      id: '1',
      title: 'Micro SaaS Development',
      description: 'Custom micro SaaS solutions for specific business needs',
      type: 'service',
      url: '/services/micro-saas',
      tags: ['SaaS', 'Development', 'Custom'],
      relevance: 0.95
    },
    {
      id: '2',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions',
      type: 'service',
      url: '/services/ai-ml',
      tags: ['AI', 'Machine Learning', 'Automation'],
      relevance: 0.92
    },
    {
      id: '3',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      type: 'service',
      url: '/services/cloud',
      tags: ['Cloud', 'AWS', 'Azure', 'GCP'],
      relevance: 0.88
    },
    {
      id: '4',
      title: 'React & Next.js',
      description: 'Modern frontend development technologies',
      type: 'technology',
      url: '/technologies/frontend',
      tags: ['React', 'Next.js', 'Frontend'],
      relevance: 0.85
    },
    {
      id: '5',
      title: 'Cybersecurity Solutions',
      description: 'Advanced security for digital assets',
      type: 'service',
      url: '/services/security',
      tags: ['Security', 'Cybersecurity', 'Protection'],
      relevance: 0.82
    }
  ];

  // Search suggestions
  const searchSuggestions: SearchSuggestion[] = [
    { text: 'SaaS', type: 'popular', count: 45 },
    { text: 'AI', type: 'popular', count: 32 },
    { text: 'Cloud', type: 'popular', count: 28 },
    { text: 'Security', type: 'popular', count: 25 },
    { text: 'Development', type: 'popular', count: 22 },
    { text: 'Machine Learning', type: 'recent' },
    { text: 'Micro Services', type: 'recent' },
    { text: 'DevOps', type: 'recent' },
    { text: 'Blockchain', type: 'related' },
    { text: 'IoT', type: 'related' }
  ];

  // Filter options
  const filterOptions = {
    types: ['service', 'technology', 'page', 'content'],
    tags: ['SaaS', 'AI', 'Cloud', 'Security', 'Development', 'React', 'Next.js', 'AWS', 'Azure', 'GCP']
  };

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        performSearch();
      } else {
        setResults([]);
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, filters]);

  const performSearch = useCallback(async () => {
    setIsSearching(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Filter and search through mock data
    const filteredResults = mockData.filter(item => {
      const matchesQuery = query.toLowerCase().split(' ').every(word =>
        item.title.toLowerCase().includes(word) ||
        item.description.toLowerCase().includes(word) ||
        item.tags.some(tag => tag.toLowerCase().includes(word))
      );
      
      const matchesType = filters.type.length === 0 || filters.type.includes(item.type);
      const matchesTags = filters.tags.length === 0 || 
        filters.tags.some(filterTag => item.tags.includes(filterTag));
      
      return matchesQuery && matchesType && matchesTags;
    });
    
    // Sort by relevance
    const sortedResults = filteredResults.sort((a, b) => b.relevance - a.relevance);
    
    setResults(sortedResults);
    
    // Update suggestions based on query
    const querySuggestions = searchSuggestions
      .filter(suggestion => suggestion.text.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);
    setSuggestions(querySuggestions);
    
    setIsSearching(false);
  }, [query, filters]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setSelectedResult(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedResult(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedResult(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && selectedResult >= 0) {
      e.preventDefault();
      const result = results[selectedResult];
      if (result) {
        window.location.href = result.url;
      }
    } else if (e.key === 'Escape') {
      setQuery('');
      setResults([]);
      setSuggestions([]);
      setSelectedResult(-1);
    }
  };

  const toggleFilter = (filterType: 'type' | 'tags', value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: [],
      tags: [],
      dateRange: { start: null, end: null }
    });
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'service': return '🔧';
      case 'technology': return '⚡';
      case 'page': return '📄';
      case 'content': return '📝';
      default: return '🔍';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowFilters(true)}
            placeholder="Search for services, technologies, or content..."
            className="w-full px-4 py-3 pl-12 pr-20 text-lg bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            {showFilters ? '✕' : '⚙️'}
          </button>
        </div>

        {/* Search Suggestions */}
        <AnimatePresence>
          {suggestions.length > 0 && query && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
            >
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(suggestion.text)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span>{suggestion.text}</span>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className={`px-2 py-1 rounded text-xs ${
                      suggestion.type === 'popular' ? 'bg-blue-100 text-blue-800' :
                      suggestion.type === 'recent' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {suggestion.type}
                    </span>
                    {suggestion.count && (
                      <span>{suggestion.count}</span>
                    )}
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Type Filter */}
              <div>
                <h4 className="font-medium mb-2">Type</h4>
                <div className="space-y-2">
                  {filterOptions.types.map(type => (
                    <label key={type} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.type.includes(type)}
                        onChange={() => toggleFilter('type', type)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div>
                <h4 className="font-medium mb-2">Tags</h4>
                <div className="space-y-2">
                  {filterOptions.tags.map(tag => (
                    <label key={tag} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.tags.includes(tag)}
                        onChange={() => toggleFilter('tags', tag)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm">{tag}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results */}
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-6 space-y-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {isSearching ? 'Searching...' : `${results.length} results found`}
              </h3>
              {isSearching && (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
              )}
            </div>

            {results.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  selectedResult === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => window.location.href = result.url}
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{getResultIcon(result.type)}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{result.title}</h4>
                    <p className="text-gray-600 mb-2">{result.description}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded capitalize">
                        {result.type}
                      </span>
                      {result.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">
                      {Math.round(result.relevance * 100)}% match
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      {query && results.length === 0 && !isSearching && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center py-8"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No results found</h3>
          <p className="text-gray-500">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
        </motion.div>
      )}
    </div>
  );
}