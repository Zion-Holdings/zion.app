import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Clock, TrendingUp, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  relevance: number;
}

const EnhancedSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trendingSearches] = useState<string[]>([
    'AI Consciousness',
    'Quantum Computing',
    'Space Technology',
    'Micro SAAS',
    'Cybersecurity'
  ]);

  const searchRef = useRef<HTMLDivElement>(null);

  // Mock search results - in real app, this would come from API
  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Consciousness Evolution Platform',
      description: 'Revolutionary AI platform that evolves consciousness and emotional intelligence',
      url: '/ai-consciousness-evolution-2029',
      category: 'AI & Machine Learning',
      relevance: 0.95
    },
    {
      id: '2',
      title: 'Quantum Neural Network Platform',
      description: 'Next-generation quantum computing platform for neural network processing',
      url: '/quantum-neural-network-platform',
      category: 'Quantum Computing',
      relevance: 0.92
    },
    {
      id: '3',
      title: 'Space Resource Mining Platform',
      description: 'Advanced space technology for asteroid mining and resource extraction',
      url: '/space-resource-mining-platform',
      category: 'Space Technology',
      relevance: 0.88
    },
    {
      id: '4',
      title: 'Autonomous Business Operations',
      description: 'AI-powered autonomous business process automation and management',
      url: '/autonomous-business-operations-platform',
      category: 'AI & Machine Learning',
      relevance: 0.85
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as HTMLElement)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;

    setIsSearching(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Filter results based on query
    const filteredResults = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()) ||
      result.category.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
    setIsSearching(false);

    // Add to recent searches
    const newRecentSearches = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(newRecentSearches);
    localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    
    if (value.trim()) {
      handleSearch(value);
    } else {
      setSearchResults([]);
    }
  };

  const handleRecentSearchClick = (search: string) => {
    setSearchQuery(search);
    handleSearch(search);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Search Button */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:scale-105"
        aria-label="Open search"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:block">Search...</span>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Search Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleInputChange(e.target.value)}
                      placeholder="Search services, solutions, and technologies..."
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        onClick={clearSearch}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Search Content */}
              <div className="max-h-96 overflow-y-auto">
                {searchQuery ? (
                  // Search Results
                  <div className="p-6">
                    {isSearching ? (
                      <div className="text-center py-8">
                        <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-400">Searching...</p>
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Search Results ({searchResults.length})
                        </h3>
                        {searchResults.map((result) => (
                          <motion.div
                            key={result.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="group p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200"
                          >
                            <Link href={result.url} className="block">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                    {result.title}
                                  </h4>
                                  <p className="text-gray-400 text-sm mt-1">
                                    {result.description}
                                  </p>
                                  <div className="flex items-center space-x-4 mt-2">
                                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                                      {result.category}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                      {Math.round(result.relevance * 100)}% relevant
                                    </span>
                                  </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100" />
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">No results found</h3>
                        <p className="text-gray-400">Try adjusting your search terms</p>
                      </div>
                    )}
                  </div>
                ) : (
                  // Search Suggestions and Recent Searches
                  <div className="p-6">
                    {/* Trending Searches */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Trending Searches
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {trendingSearches.map((search, index) => (
                          <button
                            key={index}
                            onClick={() => handleRecentSearchClick(search)}
                            className="px-3 py-1.5 bg-cyan-500/20 text-cyan-400 rounded-full text-sm hover:bg-cyan-500/30 transition-colors"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Recent Searches */}
                    {recentSearches.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          Recent Searches
                        </h3>
                        <div className="space-y-2">
                          {recentSearches.map((search, index) => (
                            <button
                              key={index}
                              onClick={() => handleRecentSearchClick(search)}
                              className="w-full text-left p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between group"
                            >
                              <span>{search}</span>
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quick Suggestions */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Popular Categories
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {['AI Services', 'Quantum Computing', 'Space Technology', 'Enterprise IT'].map((category) => (
                          <button
                            key={category}
                            onClick={() => handleRecentSearchClick(category)}
                            className="p-3 text-left bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                          >
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {category}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              Explore solutions
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedSearch;