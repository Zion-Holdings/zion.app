import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Search, Filter, X, ArrowRight, Star, Brain, Atom, Rocket, Shield } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  type: 'service' | 'page' | 'blog' | 'resource';
  featured?: boolean;
  icon: string;
  tags: string[];
}

const SearchPage: React.FC = () => {
  const router = useRouter();
  const { q: queryParam } = router.query;
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Mock search results - in a real app, this would come from an API
  const mockSearchResults: SearchResult[] = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Evolution 2040',
      description: 'Revolutionary platform for developing AI systems with advanced consciousness capabilities and ethical reasoning.',
      category: 'AI & Consciousness',
      url: '/ai-consciousness-evolution-2040',
      type: 'service',
      featured: true,
      icon: '🧠',
      tags: ['AI', 'Consciousness', 'Ethics', 'Advanced Technology']
    },
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum Cybersecurity Future 2040',
      description: 'Next-generation cybersecurity platform using quantum-resistant encryption and AI threat detection.',
      category: 'Quantum & Security',
      url: '/quantum-cybersecurity-future-2040',
      type: 'service',
      featured: true,
      icon: '🛡️',
      tags: ['Quantum', 'Cybersecurity', 'AI', 'Encryption']
    },
    {
      id: 'space-resource-intelligence',
      title: 'Space Resource Intelligence 2040',
      description: 'Advanced space technology platform for resource discovery and optimization using AI and quantum computing.',
      category: 'Space Technology',
      url: '/space-resource-intelligence-2040',
      type: 'service',
      featured: true,
      icon: '🚀',
      tags: ['Space', 'AI', 'Quantum', 'Resources']
    },
    {
      id: 'ai-autonomous-research',
      title: 'AI Autonomous Research 2041',
      description: 'Fully autonomous research platform that conducts scientific research and generates insights automatically.',
      category: 'AI & Research',
      url: '/ai-autonomous-research-2041',
      type: 'service',
      icon: '🔬',
      tags: ['AI', 'Research', 'Autonomous', 'Science']
    },
    {
      id: 'quantum-neural-ecosystem',
      title: 'Quantum Neural Ecosystem 2040',
      description: 'Quantum-enhanced neural network platform for advanced machine learning and AI development.',
      category: 'Quantum & AI',
      url: '/quantum-neural-ecosystem-2040',
      type: 'service',
      icon: '⚛️',
      tags: ['Quantum', 'Neural Networks', 'AI', 'Machine Learning']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: <Star className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & Consciousness', icon: <Brain className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-4 h-4" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'service', name: 'Services' },
    { id: 'page', name: 'Pages' },
    { id: 'blog', name: 'Blog Posts' },
    { id: 'resource', name: 'Resources' }
  ];

  useEffect(() => {
    if (queryParam && typeof queryParam === 'string') {
      setSearchQuery(queryParam);
      performSearch(queryParam);
    }
  }, [queryParam]);

  const performSearch = (query: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const results = mockSearchResults.filter(result => {
        const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||
                           result.description.toLowerCase().includes(query.toLowerCase()) ||
                           result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
        
        const matchesCategory = selectedCategory === 'all' || 
                               result.category.toLowerCase().includes(selectedCategory.toLowerCase());
        
        const matchesType = selectedType === 'all' || result.type === selectedType;
        
        return matchesQuery && matchesCategory && matchesType;
      });
      
      setSearchResults(results);
      setIsLoading(false);
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedType('all');
    if (searchQuery) {
      performSearch(searchQuery);
    }
  };

  const filteredResults = searchResults.filter(result => {
    const matchesCategory = selectedCategory === 'all' || 
                           result.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesType = selectedType === 'all' || result.type === selectedType;
    return matchesCategory && matchesType;
  });

  return (
    <Layout>
      <SEO 
        title={`Search Results${searchQuery ? ` for "${searchQuery}"` : ''} - Zion Tech Group`}
        description="Search our comprehensive collection of AI, quantum computing, and space technology solutions."
        keywords={["search", "AI services", "quantum computing", "space technology", "cybersecurity"]}
      />
      
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Search Results
            </h1>
            {searchQuery && (
              <p className="text-xl text-gray-300">
                Showing results for "<span className="text-cyan-400">{searchQuery}</span>"
              </p>
            )}
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, solutions, or technologies..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </form>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Filters:</span>
              </div>
              
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>

              {/* Clear Filters */}
              {(selectedCategory !== 'all' || selectedType !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 text-center"
          >
            <p className="text-gray-400">
              {isLoading ? 'Searching...' : `Found ${filteredResults.length} result${filteredResults.length !== 1 ? 's' : ''}`}
            </p>
          </motion.div>

          {/* Search Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl animate-pulse">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-700 rounded w-full"></div>
                      <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : filteredResults.length > 0 ? (
              filteredResults.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{result.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2 group">
                            <a 
                              href={result.url}
                              className="hover:text-cyan-400 transition-colors flex items-center space-x-2"
                            >
                              <span>{result.title}</span>
                              {result.featured && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                                  Featured
                                </span>
                              )}
                            </a>
                          </h3>
                          <p className="text-gray-300 mb-3 leading-relaxed">
                            {result.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                            <span className="flex items-center space-x-1">
                              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                              {result.category}
                            </span>
                            <span className="flex items-center space-x-1">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {result.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a
                          href={result.url}
                          className="ml-4 p-2 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/50 rounded-lg text-gray-400 hover:text-cyan-400 transition-all duration-300"
                          aria-label={`View ${result.title}`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-4">No results found</h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  {searchQuery 
                    ? `We couldn't find any results for "${searchQuery}". Try adjusting your search terms or filters.`
                    : 'Enter a search query to find services and solutions.'
                  }
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedType('all');
                    setSearchResults([]);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start New Search
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Search Suggestions */}
          {searchQuery && filteredResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Related Searches</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['AI services', 'Quantum computing', 'Space technology', 'Cybersecurity'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => {
                      setSearchQuery(suggestion);
                      router.push(`/search?q=${encodeURIComponent(suggestion)}`);
                    }}
                    className="px-4 py-2 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/50 rounded-lg text-gray-300 hover:text-cyan-400 transition-all duration-300"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;