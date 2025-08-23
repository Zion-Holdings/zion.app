import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, TrendingUp, Clock, Star, ArrowRight, Brain, Atom, Rocket, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

interface EnhancedSearchProps {
  onClose: () => void;
}

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  icon: React.ReactNode;
  featured?: boolean;
  tags: string[];
}

const EnhancedSearch: React.FC<EnhancedSearchProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Memoized search suggestions
  const searchSuggestions = useMemo(() => [
    'AI Consciousness Evolution',
    'Quantum Neural Networks',
    'Space Resource Mining',
    'Autonomous Business Operations',
    'Brain-Computer Interface',
    'Quantum Financial Trading',
    'AI Emotional Intelligence',
    'Zero Trust Security',
    'Edge Computing',
    'Blockchain Infrastructure'
  ], []);

  // Mock search results - in a real app, this would come from an API
  const mockSearchResults = useMemo(() => [
    {
      id: '1',
      title: 'AI Consciousness Evolution 2029',
      description: 'Revolutionary AI platform that evolves consciousness and emotional intelligence',
      url: '/ai-consciousness-evolution-2029',
      category: 'AI & Consciousness',
      icon: <Brain className="w-5 h-5" />,
      featured: true,
      tags: ['AI', 'Consciousness', 'Evolution', '2029']
    },
    {
      id: '2',
      title: 'Quantum Neural Network Platform',
      description: 'Breakthrough quantum computing solution for neural network processing',
      url: '/quantum-neural-network-platform',
      category: 'Quantum Technology',
      icon: <Atom className="w-5 h-5" />,
      featured: true,
      tags: ['Quantum', 'Neural Networks', 'Computing']
    },
    {
      id: '3',
      title: 'Space Resource Mining Platform',
      description: 'Next-generation space exploration and resource extraction technology',
      url: '/space-resource-mining-platform',
      category: 'Space Technology',
      icon: <Rocket className="w-5 h-5" />,
      featured: true,
      tags: ['Space', 'Mining', 'Resources']
    },
    {
      id: '4',
      title: 'Zero Trust Security Platform',
      description: 'Advanced cybersecurity solution with zero-trust architecture',
      url: '/zero-trust-security-platform',
      category: 'Enterprise IT',
      icon: <Shield className="w-5 h-5" />,
      tags: ['Security', 'Zero Trust', 'Cybersecurity']
    },
    {
      id: '5',
      title: 'Edge Computing Orchestration',
      description: 'Intelligent edge computing management and optimization platform',
      url: '/edge-computing-orchestration',
      category: 'Enterprise IT',
      icon: <Zap className="w-5 h-5" />,
      tags: ['Edge Computing', 'Orchestration', 'IoT']
    }
  ], []);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Set popular searches
  useEffect(() => {
    setPopularSearches([
      'AI Services',
      'Quantum Computing',
      'Space Technology',
      'Cybersecurity',
      'Cloud Solutions'
    ]);
  }, []);

  // Handle search with debouncing
  const handleSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    // Filter results based on query
    const filteredResults = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    setResults(filteredResults);
    setIsSearching(false);
  }, []);

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, handleSearch]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          window.location.href = results[selectedIndex].url;
        } else if (query.trim()) {
          // Perform search
          handleSearch(query);
        }
        break;
      case 'Escape':
        onClose();
        break;
    }
  }, [results, selectedIndex, query, handleSearch, onClose]);

  // Save search to recent searches
  const saveSearch = useCallback((searchTerm: string) => {
    const newRecentSearches = [
      searchTerm,
      ...recentSearches.filter(s => s !== searchTerm)
    ].slice(0, 5);
    
    setRecentSearches(newRecentSearches);
    localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
  }, [recentSearches]);

  // Handle search submission
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      saveSearch(query);
      handleSearch(query);
    }
  }, [query, saveSearch, handleSearch]);

  // Handle result click
  const handleResultClick = useCallback((result: SearchResult) => {
    saveSearch(query);
    onClose();
  }, [query, saveSearch, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-4xl mx-auto bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
    >
      {/* Search Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <Search className="w-6 h-6 text-cyan-400" />
          <h2 className="text-xl font-semibold text-white">Search Zion Tech Group</h2>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
          aria-label="Close search"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Search Input */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search for services, solutions, or expertise..."
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
              autoFocus
            />
            {isSearching && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-5 h-5 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Search Results or Suggestions */}
      <div className="max-h-96 overflow-y-auto">
        <AnimatePresence mode="wait">
          {query.trim() ? (
            // Search Results
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-6 pb-6"
            >
              {results.length > 0 ? (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                    Search Results ({results.length})
                  </h3>
                  {results.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                        selectedIndex === index
                          ? 'border-cyan-500/50 bg-cyan-500/10'
                          : 'border-white/10 hover:border-cyan-500/30 hover:bg-white/5'
                      }`}
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          {result.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="text-white font-semibold truncate">{result.title}</h4>
                            {result.featured && (
                              <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm mb-2 line-clamp-2">{result.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">{result.category}</span>
                            <div className="flex items-center space-x-1 text-cyan-400">
                              <span className="text-xs">View</span>
                              <ArrowRight className="w-3 h-3" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-300 mb-2">No results found</h3>
                  <p className="text-gray-500">Try adjusting your search terms or browse our categories below.</p>
                </motion.div>
              )}
            </motion.div>
          ) : (
            // Search Suggestions
            <motion.div
              key="suggestions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-6 pb-6"
            >
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Recent Searches</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setQuery(search)}
                        className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-200"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Searches */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Popular Searches</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(search)}
                      className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-lg text-left transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300 group-hover:text-white">{search}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Categories */}
              <div>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
                  Quick Categories
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'AI & ML', icon: <Brain className="w-5 h-5" />, color: 'cyan' },
                    { name: 'Quantum Tech', icon: <Atom className="w-5 h-5" />, color: 'purple' },
                    { name: 'Space Tech', icon: <Rocket className="w-5 h-5" />, color: 'blue' },
                    { name: 'Security', icon: <Shield className="w-5 h-5" />, color: 'green' }
                  ].map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(category.name)}
                      className={`p-4 bg-gradient-to-br from-${category.color}-500/10 to-${category.color}-600/10 border border-${category.color}-500/20 hover:border-${category.color}-500/40 rounded-lg transition-all duration-200 group`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                          {category.icon}
                        </div>
                        <span className="text-white font-medium">{category.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Footer */}
      <div className="px-6 py-4 border-t border-white/10 bg-white/5">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <span>Press <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Enter</kbd> to search</span>
            <span>Press <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Esc</kbd> to close</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Powered by</span>
            <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded"></div>
            <span className="text-cyan-400 font-medium">Zion Tech Group</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedSearch;