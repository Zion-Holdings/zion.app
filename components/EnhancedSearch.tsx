import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, ArrowRight, Star, Brain, Atom, Rocket, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  relevance: number;
  icon: React.ReactNode;
}

interface SearchFilter {
  category: string;
  priceRange: string;
  technology: string;
  complexity: string;
}

const EnhancedSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilter>({
    category: 'all',
    priceRange: 'all',
    technology: 'all',
    complexity: 'all'
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock search results - in a real app, this would come from an API
  const mockResults: SearchResult[] = [
    {
      id: 'ai-bi-platform',
      title: 'AI Business Intelligence Platform',
      description: 'Transform data into actionable insights with advanced AI analytics',
      category: 'AI & Machine Learning',
      tags: ['analytics', 'business intelligence', 'machine learning', 'data visualization'],
      url: '/ai-business-intelligence-platform',
      relevance: 0.95,
      icon: <Brain className="w-5 h-5" />
    },
    {
      id: 'quantum-secure-cloud',
      title: 'Quantum-Secure Cloud Infrastructure',
      description: 'Future-proof security with quantum-resistant encryption',
      category: 'Quantum Computing',
      tags: ['quantum', 'security', 'cloud', 'encryption'],
      url: '/quantum-secure-cloud-infrastructure',
      relevance: 0.92,
      icon: <Atom className="w-5 h-5" />
    },
    {
      id: 'metaverse-platform',
      title: 'Metaverse Development Platform',
      description: 'Build immersive virtual worlds and experiences',
      category: 'Emerging Technologies',
      tags: ['metaverse', 'VR', 'AR', '3D', 'virtual reality'],
      url: '/metaverse-development-platform',
      relevance: 0.88,
      icon: <Rocket className="w-5 h-5" />
    },
    {
      id: 'enterprise-security',
      title: 'Enterprise Security Suite',
      description: 'Comprehensive security solutions for enterprise environments',
      category: 'Enterprise Solutions',
      tags: ['security', 'enterprise', 'compliance', 'threat detection'],
      url: '/enterprise-security-suite',
      relevance: 0.85,
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 'micro-saas-platform',
      title: 'Micro SAAS Platform',
      description: 'Scalable software-as-a-service solutions for modern businesses',
      category: 'Micro SAAS',
      tags: ['saas', 'software', 'subscription', 'business tools'],
      url: '/micro-saas-platform',
      relevance: 0.82,
      icon: <Zap className="w-5 h-5" />
    }
  ];

  // AI-powered search suggestions
  const aiSuggestions = [
    'AI automation for business processes',
    'Quantum computing solutions',
    'Cloud security and compliance',
    'Machine learning platforms',
    'Blockchain enterprise solutions',
    'IoT and edge computing',
    'Cybersecurity automation',
    'Data analytics and visualization'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 2) {
      // Simulate AI-powered search
      setIsSearching(true);
      const timer = setTimeout(() => {
        const filtered = mockResults.filter(result => 
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase()) ||
          result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
        
        // Apply filters
        const filteredResults = filtered.filter(result => {
          if (filters.category !== 'all' && result.category !== filters.category) return false;
          if (filters.technology !== 'all' && !result.tags.includes(filters.technology)) return false;
          return true;
        });

        setResults(filteredResults);
        setIsSearching(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query, filters]);

  useEffect(() => {
    if (query.length > 2) {
      const filtered = aiSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setShowSuggestions(false);
  };

  const updateFilter = (key: keyof SearchFilter, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for AI services, quantum solutions, emerging tech..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-12 py-4 bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
          onFocus={() => query.length > 2 && setShowSuggestions(true)}
        />
        
        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`absolute right-20 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-all duration-300 ${
            showFilters ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-cyan-400'
          }`}
          aria-label="Toggle search filters"
        >
          <Filter className="w-4 h-4" />
        </button>

        {/* Clear Button */}
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* AI Suggestions */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-cyan-400/30 rounded-xl shadow-2xl z-50"
          >
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">AI Suggestions</span>
              </div>
              <div className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(suggestion)}
                    className="w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors text-gray-300 hover:text-white"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{suggestion}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advanced Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 bg-gray-900/50 backdrop-blur-md border border-cyan-400/20 rounded-xl p-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-cyan-400 mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => updateFilter('category', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-cyan-400/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  <option value="all">All Categories</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="Quantum Computing">Quantum Computing</option>
                  <option value="Emerging Technologies">Emerging Technologies</option>
                  <option value="Enterprise Solutions">Enterprise Solutions</option>
                  <option value="Micro SAAS">Micro SAAS</option>
                </select>
              </div>

              {/* Technology Filter */}
              <div>
                <label className="block text-sm font-medium text-cyan-400 mb-2">Technology</label>
                <select
                  value={filters.technology}
                  onChange={(e) => updateFilter('technology', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-cyan-400/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  <option value="all">All Technologies</option>
                  <option value="ai">AI & ML</option>
                  <option value="quantum">Quantum</option>
                  <option value="blockchain">Blockchain</option>
                  <option value="iot">IoT</option>
                  <option value="cybersecurity">Cybersecurity</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-cyan-400 mb-2">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => updateFilter('priceRange', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-cyan-400/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  <option value="all">All Prices</option>
                  <option value="free">Free</option>
                  <option value="low">$1 - $100</option>
                  <option value="medium">$100 - $1000</option>
                  <option value="high">$1000+</option>
                </select>
              </div>

              {/* Complexity Filter */}
              <div>
                <label className="block text-sm font-medium text-cyan-400 mb-2">Complexity</label>
                <select
                  value={filters.complexity}
                  onChange={(e) => updateFilter('complexity', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-cyan-400/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="enterprise">Enterprise</option>
                </select>
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
            className="mt-6 bg-gray-900/50 backdrop-blur-md border border-cyan-400/20 rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                Search Results ({results.length})
              </h3>
              {isSearching && (
                <div className="flex items-center space-x-2 text-cyan-400">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400"></div>
                  <span className="text-sm">Searching...</span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              {results.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white/5 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <Link href={result.url}>
                    <div className="flex items-start space-x-3 cursor-pointer group">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {result.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                            {result.title}
                          </h4>
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                            {result.category}
                          </span>
                          {result.relevance > 0.9 && (
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          )}
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{result.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {result.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {results.length > 0 && (
              <div className="mt-4 pt-4 border-t border-cyan-400/20 text-center">
                <Link href="/services">
                  <button className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                    View All Services
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      {query.length > 2 && results.length === 0 && !isSearching && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center py-8"
        >
          <div className="text-gray-400 mb-4">
            <Search className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-lg">No results found for "{query}"</p>
            <p className="text-sm">Try adjusting your search terms or filters</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => handleSearch('AI services')}
              className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm hover:bg-cyan-500/30 transition-colors"
            >
              AI services
            </button>
            <button
              onClick={() => handleSearch('quantum computing')}
              className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm hover:bg-cyan-500/30 transition-colors"
            >
              quantum computing
            </button>
            <button
              onClick={() => handleSearch('enterprise solutions')}
              className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm hover:bg-cyan-500/30 transition-colors"
            >
              enterprise solutions
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EnhancedSearch;