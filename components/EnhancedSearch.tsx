import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Sparkles, Filter, TrendingUp, Clock, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  relevance: number;
  lastUpdated: string;
  featured: boolean;
}

interface EnhancedSearchProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

const EnhancedSearch: React.FC<EnhancedSearchProps> = ({
  placeholder = "Search for AI, quantum, or autonomous solutions...",
  className = "",
  onSearch
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock AI-powered search suggestions
  const aiSuggestions = [
    "AI consciousness evolution",
    "Quantum neural networks",
    "Autonomous business intelligence",
    "Space resource mining",
    "Brain-computer interface",
    "Quantum cybersecurity",
    "AI emotional intelligence",
    "Autonomous vehicle AI"
  ];

  // Mock search results
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Consciousness Evolution 2040',
      description: 'Revolutionary AI consciousness platform for advanced cognitive computing',
      category: 'AI',
      url: '/ai-consciousness-evolution-2040',
      relevance: 0.98,
      lastUpdated: '2025-01-23',
      featured: true
    },
    {
      id: '2',
      title: 'Quantum Neural Ecosystem 2040',
      description: 'Breakthrough quantum neural network platform for complex problem solving',
      category: 'Quantum',
      url: '/quantum-neural-ecosystem-2040',
      relevance: 0.95,
      lastUpdated: '2025-01-22',
      featured: true
    },
    {
      id: '3',
      title: 'Autonomous Business Intelligence 2040',
      description: 'Self-learning business intelligence platform with predictive analytics',
      category: 'Business',
      url: '/autonomous-business-intelligence-2040',
      relevance: 0.92,
      lastUpdated: '2025-01-21',
      featured: false
    },
    {
      id: '4',
      title: 'Space Resource Intelligence 2040',
      description: 'Advanced space mining and resource optimization platform',
      category: 'Space',
      url: '/space-resource-intelligence-2040',
      relevance: 0.89,
      lastUpdated: '2025-01-20',
      featured: false
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 2) {
      performSearch(query);
      setShowSuggestions(false);
    } else {
      setResults([]);
      setFilteredResults([]);
      if (query.length > 0) {
        setShowSuggestions(true);
      }
    }
  }, [query]);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredResults(results);
    } else {
      setFilteredResults(results.filter(result => result.category === selectedCategory));
    }
  }, [selectedCategory, results]);

  const performSearch = async (searchQuery: string) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter mock results based on query
    const filtered = mockResults.filter(result =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(filtered);
    setFilteredResults(filtered);
    setIsLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch?.(query);
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    performSearch(suggestion);
  };

  const categories = [
    { id: 'all', name: 'All Categories', count: results.length },
    { id: 'AI', name: 'AI & ML', count: results.filter(r => r.category === 'AI').length },
    { id: 'Quantum', name: 'Quantum', count: results.filter(r => r.category === 'Quantum').length },
    { id: 'Business', name: 'Business', count: results.filter(r => r.category === 'Business').length },
    { id: 'Space', name: 'Space Tech', count: results.filter(r => r.category === 'Space').length }
  ];

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      {/* Search Input */}
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </form>

      {/* AI Suggestions */}
      <AnimatePresence>
        {showSuggestions && query.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-50"
          >
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">AI-Powered Suggestions</span>
              </div>
              <div className="space-y-2">
                {aiSuggestions
                  .filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase()))
                  .slice(0, 4)
                  .map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors text-gray-300 hover:text-white"
                    >
                      {suggestion}
                    </button>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results */}
      <AnimatePresence>
        {isOpen && (results.length > 0 || isLoading) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-50 max-h-96 overflow-hidden"
          >
            {/* Category Filters */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Filter by Category</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-black'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="max-h-64 overflow-y-auto">
              {isLoading ? (
                <div className="p-4 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto"></div>
                  <p className="text-gray-400 mt-2">Searching with AI...</p>
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  {filteredResults.map((result) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="group p-3 rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          {result.featured ? (
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors truncate">
                              {result.title}
                            </h4>
                            {result.featured && (
                              <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                            {result.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              {Math.round(result.relevance * 100)}% match
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {result.lastUpdated}
                            </span>
                            <span className="px-2 py-1 bg-white/10 rounded-full">
                              {result.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-gray-900/50">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{filteredResults.length} results found</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  Powered by AI
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedSearch;