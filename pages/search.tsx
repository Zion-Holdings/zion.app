import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Search, Filter, X, ArrowRight, Star, Brain, Atom, Shield, Rocket } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  featured?: boolean;
  icon?: React.ReactNode;
}

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock search results - in a real app, this would come from an API
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Autonomous Business Operations',
      description: 'Revolutionary AI platform for autonomous business management and decision-making',
      url: '/ai-autonomous-business-operations-platform',
      category: 'ai',
      featured: true,
      icon: <Brain className="w-5 h-5 text-cyan-400" />
    },
    {
      id: '2',
      title: 'Quantum Neural Network Platform',
      description: 'Advanced quantum computing solutions for neural network processing',
      url: '/quantum-neural-network-platform',
      category: 'quantum',
      featured: true,
      icon: <Atom className="w-5 h-5 text-blue-400" />
    },
    {
      id: '3',
      title: 'Space Resource Mining Platform',
      description: 'Innovative space technology for resource extraction and management',
      url: '/space-resource-mining-platform',
      category: 'space',
      featured: true,
      icon: <Rocket className="w-5 h-5 text-purple-400" />
    },
    {
      id: '4',
      title: 'Zero Trust Security Platform',
      description: 'Comprehensive security solution for modern enterprise environments',
      url: '/zero-trust-security-platform',
      category: 'security',
      icon: <Shield className="w-5 h-5 text-green-400" />
    },
    {
      id: '5',
      title: 'AI Content Personalization Engine',
      description: 'Intelligent content optimization and personalization platform',
      url: '/ai-content-personalization-engine',
      category: 'ai',
      icon: <Brain className="w-5 h-5 text-cyan-400" />
    },
    {
      id: '6',
      title: 'Quantum Financial Trading Platform',
      description: 'Quantum-powered financial trading and analysis platform',
      url: '/quantum-financial-trading',
      category: 'quantum',
      icon: <Atom className="w-5 h-5 text-blue-400" />
    },
    {
      id: '7',
      title: 'Brain-Computer Interface Platform',
      description: 'Revolutionary neural interface technology for human-computer interaction',
      url: '/brain-computer-interface-platform',
      category: 'emerging',
      featured: true,
      icon: <Brain className="w-5 h-5 text-pink-400" />
    },
    {
      id: '8',
      title: 'Autonomous Vehicle AI Platform',
      description: 'Advanced AI solutions for autonomous vehicle systems',
      url: '/autonomous-vehicle-ai-platform',
      category: 'ai',
      icon: <Brain className="w-5 h-5 text-cyan-400" />
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: mockResults.length },
    { id: 'ai', name: 'AI & Machine Learning', count: mockResults.filter(r => r.category === 'ai').length },
    { id: 'quantum', name: 'Quantum Technology', count: mockResults.filter(r => r.category === 'quantum').length },
    { id: 'space', name: 'Space Technology', count: mockResults.filter(r => r.category === 'space').length },
    { id: 'security', name: 'Security Solutions', count: mockResults.filter(r => r.category === 'security').length },
    { id: 'emerging', name: 'Emerging Tech', count: mockResults.filter(r => r.category === 'emerging').length }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const filtered = mockResults.filter(result => {
        const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           result.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || result.category === selectedCategory;
        return matchesQuery && matchesCategory;
      });
      
      setSearchResults(filtered);
      setIsSearching(false);
    }, 500);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const filteredResults = selectedCategory === 'all' 
    ? searchResults 
    : searchResults.filter(result => result.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Search Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover our innovative solutions, cutting-edge technology, and comprehensive services
              </p>
            </motion.div>

            {/* Search Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSearch}
              className="relative max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, solutions, or technologies..."
                  className="w-full pl-12 pr-20 py-4 bg-white/10 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                />
                <button
                  type="submit"
                  disabled={!searchQuery.trim() || isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSearching ? 'Searching...' : 'Search'}
                </button>
              </div>
              
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-24 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </motion.form>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 flex flex-wrap gap-2 justify-center"
                >
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-black'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <section className="pb-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold mb-2">
                  Search Results for "{searchQuery}"
                </h2>
                <p className="text-gray-400">
                  Found {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredResults.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      {result.icon}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                          {result.title}
                        </h3>
                        {result.featured && (
                          <span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full mb-2">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {result.description}
                    </p>
                    
                    <Link
                      href={result.url}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group-hover:gap-3"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No Results */}
        {searchQuery && searchResults.length === 0 && !isSearching && (
          <section className="pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <h2 className="text-2xl font-bold mb-4">No results found</h2>
                <p className="text-gray-400 mb-6">
                  We couldn't find any results for "{searchQuery}". Try adjusting your search terms or browse our categories.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  {categories.slice(1).map((category) => (
                    <Link
                      key={category.id}
                      href={`/services?category=${category.id}`}
                      className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300"
                    >
                      Browse {category.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Popular Searches */}
        {!searchQuery && (
          <section className="pb-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Popular Searches</h2>
                <p className="text-gray-400">Discover our most sought-after solutions and technologies</p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockResults.filter(r => r.featured).map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      {result.icon}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                          {result.title}
                        </h3>
                        <span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {result.description}
                    </p>
                    
                    <Link
                      href={result.url}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group-hover:gap-3"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;