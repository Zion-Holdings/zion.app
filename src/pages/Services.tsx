import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Shield, Filter, SortAsc, SortDesc, X } from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { useSearch } from '../hooks/useSearch';
import { OptimizedImage } from '../components/OptimizedImage';
import { usePerformance } from '../hooks/usePerformance';

export default function Services() {
  const performanceMetrics = usePerformance();
  
  // Track render performance
  useEffect(() => {
    // Performance tracking logic can be added here if needed
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Enhanced search with the new hook
  const {
    query,
    setQuery,
    filters,
    setFilter,
    clearFilters,
    sortBy,
    setSort,
    sortOrder,
    totalResults,
    isLoading,
    getSuggestions,
    getPaginatedResults
  } = useSearch(COMPREHENSIVE_SERVICES, {
    searchFields: ['title', 'description', 'category', 'subcategory', 'tags'],
    debounceMs: 300,
    fuzzySearch: true
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const paginatedResults = getPaginatedResults(currentPage, pageSize);

  // Category filter
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(COMPREHENSIVE_SERVICES.map(service => service.category))];
    return uniqueCategories.sort();
  }, []);

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    if (category === 'all') {
      setFilter('category', '');
      setSelectedCategory('all');
    } else {
      setFilter('category', category);
      setSelectedCategory(category);
    }
    setCurrentPage(1);
  };

  // Handle sort change
  const handleSort = (field: keyof typeof COMPREHENSIVE_SERVICES[0]) => {
    const newOrder = sortBy === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSort(field, newOrder);
  };

  // Get search suggestions
  const suggestions = getSuggestions(query, 5);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative">
      {/* Matrix Rain Background */}
      <div className="matrix-rain-container fixed inset-0 pointer-events-none z-0">
        <div className="matrix-rain"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark/50 to-transparent"></div>
        
        {/* Neural Network Background */}
        <div className="absolute inset-0 neural-bg opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="holographic-text">
                Services
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
            </p>
          </motion.div>

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <div className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="cyber-card w-full pl-12 pr-4 py-4 border border-zion-cyan/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Search Suggestions */}
              {suggestions.length > 0 && query && (
                <div className="absolute top-full left-0 right-0 mt-2 cyber-card rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(suggestion)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Search className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300">{suggestion}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Enhanced Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <button
              onClick={() => handleCategorySelect('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'neon-button text-white shadow-lg shadow-zion-cyan/30'
                  : 'cyber-card text-zion-slate-light hover:border-zion-cyan/50 border border-zion-cyan/30'
              }`}
            >
              All Services ({COMPREHENSIVE_SERVICES.length})
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'neon-button text-white shadow-lg shadow-zion-cyan/30'
                    : 'cyber-card text-zion-slate-light hover:border-zion-cyan/50 border border-zion-cyan/30'
                }`}
              >
                {category} ({COMPREHENSIVE_SERVICES.filter(s => s.category === category).length})
              </button>
            ))}
          </motion.div>

          {/* Enhanced Filters and Sort Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="cyber-card flex items-center gap-2 px-4 py-2 hover:border-zion-cyan/50 text-zion-slate-light rounded-lg transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              
              {Object.keys(filters).length > 0 && (
                <button
                  onClick={clearFilters}
                  className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm hover:bg-red-500/30 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zion-slate-light text-sm">Sort by:</span>
              <button
                onClick={() => handleSort('title')}
                className={`cyber-card flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  sortBy === 'title' ? 'border-zion-cyan/50 text-zion-cyan' : 'text-zion-slate-light hover:border-zion-cyan/50'
                }`}
              >
                Name
                {sortBy === 'title' && (
                  sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => handleSort('price')}
                className={`cyber-card flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  sortBy === 'price' ? 'border-zion-cyan/50 text-zion-cyan' : 'text-zion-slate-light hover:border-zion-cyan/50'
                }`}
              >
                Price
                {sortBy === 'price' && (
                  sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Enhanced Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="cyber-card backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-6 mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Pricing Model</label>
                  <select
                    value={filters.pricingModel || ''}
                    onChange={(e) => setFilter('pricingModel', e.target.value || '')}
                    className="cyber-card w-full px-3 py-2 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="">All Models</option>
                    <option value="monthly">Monthly</option>
                    <option value="one-time">One-time</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Support Level</label>
                  <select
                    value={filters.supportLevel || ''}
                    onChange={(e) => setFilter('supportLevel', e.target.value || '')}
                    className="cyber-card w-full px-3 py-2 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="">All Levels</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Price Range</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice || ''}
                      onChange={(e) => setFilter('minPrice', e.target.value ? Number(e.target.value) : '')}
                      className="cyber-card flex-1 px-3 py-2 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice || ''}
                      onChange={(e) => setFilter('maxPrice', e.target.value ? Number(e.target.value) : '')}
                      className="cyber-card flex-1 px-3 py-2 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* Results Summary */}
          <div className="text-center mb-12">
            <p className="text-zion-slate-light">
              {isLoading ? 'Searching...' : `Showing ${totalResults} services`}
              {query && ` for "${query}"`}
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {paginatedResults.results.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <div className="cyber-card group overflow-hidden hover:border-zion-cyan/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-zion-cyan/20">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage
                      src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="cyber-card px-3 py-1 text-zion-cyan text-xs font-medium rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="cyber-card px-2 py-1 rounded-md text-zion-slate-light text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Service Details */}
                    <div className="space-y-2 mb-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-zion-cyan" />
                        <span>Delivery: {service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-zion-cyan" />
                        <span>Support: {service.supportLevel}</span>
                      </div>
                    </div>
                    
                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold neon-text">
                        {service.currency}{service.price.toLocaleString()}
                        <span className="text-sm text-zion-slate-light font-normal">/{service.pricingModel}</span>
                      </div>
                      <button className="neon-button px-4 py-2 text-white rounded-lg font-medium transform hover:scale-105 transition-all duration-300">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Pagination */}
          {paginatedResults.totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={!paginatedResults.hasPrevPage}
                className="cyber-card px-4 py-2 text-zion-slate-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-zion-cyan/50 transition-colors"
              >
                Previous
              </button>
              
              <span className="cyber-card px-4 py-2 text-zion-slate-light">
                Page {currentPage} of {paginatedResults.totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={!paginatedResults.hasNextPage}
                className="cyber-card px-4 py-2 text-zion-slate-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-zion-cyan/50 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}