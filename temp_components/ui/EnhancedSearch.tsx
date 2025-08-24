import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, Sparkles, Brain, Atom, Shield, Target, Cpu, Globe } from 'lucide-react';
import { useRouter } from 'next/router';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  slug: string;
  relevance: number;
}

interface SearchFilters {
  category: string;
  type: string;
  priceRange: string;
}

const EnhancedSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'all',
    type: 'all',
    priceRange: 'all'
  });
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const categories = [
    { id: 'all', name: 'All Categories', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500' },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500' },
    { id: 'space', name: 'Space Technology', icon: Globe, color: 'from-purple-500 to-indigo-500' }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'micro-saas', name: 'Micro SAAS' },
    { id: 'ai-service', name: 'AI Service' },
    { id: 'it-service', name: 'IT Service' },
    { id: 'platform', name: 'Platform' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'free', name: 'Free' },
    { id: 'low', name: 'Under $100/month' },
    { id: 'medium', name: '$100-$500/month' },
    { id: 'high', name: 'Over $500/month' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 2) {
      performSearch();
    } else {
      setResults([]);
    }
  }, [query, filters]);

  const performSearch = async () => {
    setIsSearching(true);
    
    // Simulate search delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Mock search results - in real implementation, this would call an API
    const mockResults: SearchResult[] = [
      {
        id: 'ai-content-intelligence',
        title: 'AI Content Intelligence Platform 2045',
        description: 'Advanced AI platform for content analysis and optimization',
        category: 'AI & Machine Learning',
        type: 'Micro SAAS',
        slug: '/ai-content-intelligence-platform-2045',
        relevance: 0.95
      },
      {
        id: 'quantum-secure-data',
        title: 'Quantum-Secure Data Pipeline Orchestrator',
        description: 'Quantum-secured data processing platform',
        category: 'Quantum Technology',
        type: 'Platform',
        slug: '/quantum-secure-data-pipeline-orchestrator-2045',
        relevance: 0.88
      },
      {
        id: 'autonomous-business-intelligence',
        title: 'Autonomous Business Intelligence Platform',
        description: 'Fully autonomous AI business intelligence system',
        category: 'Business Solutions',
        type: 'AI Service',
        slug: '/autonomous-business-intelligence-2045',
        relevance: 0.82
      }
    ];

    // Filter results based on search query and filters
    const filteredResults = mockResults.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||
                          result.description.toLowerCase().includes(query.toLowerCase());
      
      const matchesCategory = filters.category === 'all' || 
                             result.category.toLowerCase().includes(filters.category.toLowerCase());
      
      const matchesType = filters.type === 'all' || 
                         result.type.toLowerCase().includes(filters.type.toLowerCase());
      
      return matchesQuery && matchesCategory && matchesType;
    });

    setResults(filteredResults);
    setIsSearching(false);
  };

  const handleResultClick = (result: SearchResult) => {
    router.push(result.slug);
    setIsOpen(false);
    setQuery('');
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
          <input
            type="text"
            placeholder="Search for services, solutions, or technologies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            className="w-full pl-10 pr-12 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all duration-300"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        
        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`absolute right-12 top-1/2 transform -translate-y-1/2 p-1 rounded-lg transition-all duration-300 ${
            showFilters 
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30' 
              : 'text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          <Filter className="w-4 h-4" />
        </button>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl z-50"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  {types.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                  className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>{range.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results */}
      <AnimatePresence>
        {isOpen && (query.length > 2 || results.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl z-50 max-h-96 overflow-y-auto"
          >
            {isSearching ? (
              <div className="p-4 text-center text-white/70">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400 mx-auto mb-2"></div>
                Searching...
              </div>
            ) : results.length > 0 ? (
              <div className="p-2">
                {results.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => handleResultClick(result)}
                    className="p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200 truncate">
                          {result.title}
                        </h4>
                        <p className="text-sm text-white/70 mt-1 line-clamp-2">
                          {result.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-white/70">
                            {result.category}
                          </span>
                          <span className="text-xs bg-cyan-500/20 px-2 py-1 rounded-full text-cyan-400">
                            {result.type}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-white/50">
                        {Math.round(result.relevance * 100)}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : query.length > 2 ? (
              <div className="p-4 text-center text-white/70">
                No results found for "{query}"
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedSearch;