import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: string;
  name: string;
  description?: string;
  tagline?: string;
  category?: string;
  tags?: string[];
  price?: string;
  period?: string;
  icon?: string;
  popular?: boolean;
}

interface ServiceSearchProps {
  services: Service[];
  onServiceSelect?: (service: Service) => void;
  placeholder?: string;
  showFilters?: boolean;
  maxResults?: number;
}

const ServiceSearch: React.FC<ServiceSearchProps> = ({
  services,
  onServiceSelect,
  placeholder = "Search for services, technologies, or solutions...",
  showFilters = true,
  maxResults = 12
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'name' | 'popular' | 'price'>('popular');

  // Extract unique categories and tags
  const categories = useMemo(() => {
    const cats = new Set<string>();
    services.forEach(service => {
      if (service.category) cats.add(service.category);
    });
    return Array.from(cats).sort();
  }, [services]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    services.forEach(service => {
      if (service.tags) {
        service.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  }, [services]);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = services;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Tag filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(service =>
        service.tags?.some(tag => selectedTags.includes(tag))
      );
    }

    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tagline?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name': {
          return a.name.localeCompare(b.name);
        }
        case 'popular': {
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        }
        case 'price': {
          const priceA = parseFloat(a.price?.replace(/[^0-9.]/g, '') || '0');
          const priceB = parseFloat(b.price?.replace(/[^0-9.]/g, '') || '0');
          return priceA - priceB;
        }
        default:
          return 0;
      }
    });

    return filtered.slice(0, maxResults);
  }, [services, searchQuery, selectedCategory, selectedTags, sortBy, maxResults]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTags([]);
    setSortBy('popular');
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-4 bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 space-y-6"
        >
          {/* Category Filter */}
          <div>
            <h3 className="text-white font-semibold mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-400 text-black'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-400 text-black'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filter */}
          <div>
            <h3 className="text-white font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 20).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    selectedTags.includes(tag)
                      ? 'bg-purple-400 text-black'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-white font-semibold">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'popular' | 'price')}
                className="px-3 py-2 bg-black/60 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              >
                <option value="popular">Most Popular</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
              </select>
            </div>
            
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              Clear Filters
            </button>
          </div>
        </motion.div>
      )}

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-300">
          Showing {filteredServices.length} of {services.length} services
          {searchQuery && ` for "${searchQuery}"`}
        </p>
      </div>

      {/* Search Results */}
      <AnimatePresence mode="wait">
        {filteredServices.length > 0 ? (
          <motion.div
            key={`${searchQuery}-${selectedCategory}-${selectedTags.join(',')}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => onServiceSelect?.(service)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{service.icon || '🚀'}</div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                {service.tagline && (
                  <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                )}
                {service.description && (
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>
                )}
                {service.tags && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {service.price && (
                  <div className="text-cyan-400 font-bold">
                    {service.price}{service.period}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceSearch;