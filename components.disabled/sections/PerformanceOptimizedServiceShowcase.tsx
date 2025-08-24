import React, { useState, useMemo, useCallback, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, Star, TrendingUp, Zap, Shield, Clock, DollarSign, ArrowRight, Eye, Heart, CheckCircle } from 'lucide-react';
import ServiceCard from '../ServiceCard';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string | string[];
  features: string[];
  marketSize?: string;
  growthRate?: string;
  competitors?: string[];
  roi?: string;
  image?: string;
  rating?: number;
  reviews?: number;
}

interface PerformanceOptimizedServiceShowcaseProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  showSearch?: boolean;
  maxDisplay?: number;
}

const PerformanceOptimizedServiceShowcase: React.FC<PerformanceOptimizedServiceShowcaseProps> = ({
  services,
  title = "Revolutionary Technology Services",
  subtitle = "Discover cutting-edge solutions that transform your business",
  showFilters = true,
  showSearch = true,
  maxDisplay = 12
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  // Memoized filtered and sorted services
  const filteredServices = useMemo(() => {
    let filtered = services;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (Array.isArray(service.category) 
          ? service.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
          : service.category.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service =>
        Array.isArray(service.category)
          ? service.category.includes(selectedCategory)
          : service.category === selectedCategory
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'growth':
          return parseFloat(b.growthRate || '0') - parseFloat(a.growthRate || '0');
        default:
          return 0;
      }
    });

    return filtered;
  }, [services, searchTerm, selectedCategory, sortBy]);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    services.forEach(service => {
      if (Array.isArray(service.category)) {
        service.category.forEach(cat => cats.add(cat));
      } else {
        cats.add(service.category);
      }
    });
    return ['all', ...Array.from(cats).sort()];
  }, [services]);

  // Pagination
  const itemsPerPage = maxDisplay;
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  // Toggle favorite
  const toggleFavorite = useCallback((serviceId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(serviceId)) {
        newFavorites.delete(serviceId);
      } else {
        newFavorites.add(serviceId);
      }
      return newFavorites;
    });
  }, []);

  // Handle search with debouncing
  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page on search
  }, []);

  // Handle category change
  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Search and Filters */}
        {(showSearch || showFilters) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 space-y-4"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              {showSearch && (
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              )}

              {/* View Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-slate-700 text-gray-400 hover:bg-slate-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-slate-700 text-gray-400 hover:bg-slate-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="flex flex-wrap gap-4 items-center justify-center">
                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                    <option value="growth">Growth Rate</option>
                  </select>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-400">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredServices.length)} of {filteredServices.length} services
          </p>
        </div>

        {/* Services Grid/List */}
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-slate-800 rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-slate-700 rounded mb-4"></div>
                <div className="h-3 bg-slate-700 rounded mb-2"></div>
                <div className="h-3 bg-slate-700 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        }>
          <AnimatePresence mode="wait">
            {currentServices.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
              }>
                {currentServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={viewMode === 'grid' 
                      ? "bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                      : "bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300"
                    }
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleFavorite(service.id)}
                        className={`ml-2 p-2 rounded-full transition-colors ${
                          favorites.has(service.id)
                            ? 'text-red-500 hover:text-red-400'
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${favorites.has(service.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-3">
                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-400">
                          ${service.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-400">/month</span>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <p className="text-xs text-gray-500">
                            +{service.features.length - 3} more features
                          </p>
                        )}
                      </div>

                      {/* Market Info */}
                      {service.marketSize && (
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <TrendingUp className="w-4 h-4" />
                          <span>Market: {service.marketSize}</span>
                        </div>
                      )}

                      {/* ROI */}
                      {service.roi && (
                        <div className="flex items-center space-x-2 text-sm text-green-400">
                          <Zap className="w-4 h-4" />
                          <span>ROI: {service.roi}</span>
                        </div>
                      )}

                      {/* Rating */}
                      {service.rating && (
                        <div className="flex items-center space-x-2 text-sm text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span>{service.rating}/5 ({service.reviews} reviews)</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>Preview</span>
                      </button>
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
                <div className="text-gray-400 text-lg mb-4">
                  No services found matching your criteria
                </div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setCurrentPage(1);
                  }}
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </Suspense>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center"
          >
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-slate-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-slate-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PerformanceOptimizedServiceShowcase;