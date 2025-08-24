import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
import { Link as RouterLink } from 'react-router-dom';

export const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'ai-score':
        return b.aiScore - a.aiScore;
      default:
        return b.aiScore - a.aiScore; // featured
    }
  });

  return (
    <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-purple-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Tech Services
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover our extensive range of micro SAAS, IT, and AI services designed to transform your business operations and drive innovation.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-cyan text-zion-slate-dark'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70'
                }`}
              >
                All Categories
              </button>
              {SERVICE_CATEGORIES.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-zion-cyan text-zion-slate-dark'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="ai-score">AI Score</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-zion-cyan/20 rounded-lg text-zion-cyan group-hover:bg-zion-cyan group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">${service.price}</div>
                      <div className="text-sm text-zion-slate-light">{service.pricingModel}</div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>

                  {/* Service Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-zion-slate-light'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-zion-cyan">AI Score: {service.aiScore}%</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs border border-zion-purple/30 text-zion-cyan px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-xl p-8 border border-zion-cyan/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our expert team is ready to help you implement the perfect technology solutions. 
              Get in touch today for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink to="/comprehensive-services">
                <button className="bg-zion-cyan text-zion-slate-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-all duration-300">
                  View All Services
                </button>
              </RouterLink>
              <a href="tel:+13024640950">
                <button className="bg-zion-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-purple/80 transition-all duration-300">
                  Call +1 302 464 0950
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};