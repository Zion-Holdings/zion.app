import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Clock, Users, Zap, Shield } from 'lucide-react';

interface EnhancedServiceShowcaseProps {
  services: any[];
  title?: string;
  subtitle?: string;
  maxDisplay?: number;
}

export default function EnhancedServiceShowcase({ 
  services, 
  title = "Revolutionary Services", 
  subtitle = "Discover our cutting-edge solutions that deliver 1000% ROI",
  maxDisplay = 6 
}: EnhancedServiceShowcaseProps) {
  const [visibleServices, setVisibleServices] = useState(maxDisplay);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['all', 'AI & ML', 'Quantum Computing', 'Cybersecurity', 'Space Tech', 'Biotech', 'Finance'];

  const filteredServices = services
    .filter(service => filter === 'all' || service.category.includes(filter))
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.popular ? 1 : -1;
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    })
    .slice(0, visibleServices);

  const loadMore = () => {
    setVisibleServices(prev => Math.min(prev + 6, services.length));
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {title.split(' ').map((word, index) => (
              <span key={index} className="inline-block">
                {index % 2 === 0 ? (
                  <span className="text-gradient-cyan-purple">{word}</span>
                ) : (
                  <span className="text-gradient-purple-pink">{word}</span>
                )}
                {' '}
              </span>
            ))}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">{services.length}+</div>
              <div className="text-gray-400 text-sm">Total Services</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">1000%</div>
              <div className="text-gray-400 text-sm">Average ROI</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-pink-500/40 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-green-500/40 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Filters and Sorting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sorting Options */}
          <div className="flex items-center gap-4">
            <label className="text-gray-400 text-sm">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-gray-700/60 border border-gray-600/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Popular
                  </div>
                )}

                {/* Service Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>

                {/* Service Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Service Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Price and Users */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">
                    {service.price}
                    <span className="text-gray-400 text-lg">{service.period}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{service.customers}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Position */}
                <div className="mb-6 p-3 bg-gray-700/40 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Market Position</div>
                  <div className="text-sm text-gray-300 line-clamp-2">
                    {service.marketPosition}
                  </div>
                </div>

                {/* ROI and Setup Time */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center space-x-1 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>Average ROI</span>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-400">
                    <Clock className="w-4 h-4" />
                    <span>{service.setupTime}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/30"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 bg-gray-700/60 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                  >
                    Contact Us
                  </a>
                </div>

                {/* Contact Information */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
                  <div className="text-xs text-gray-300 space-y-1">
                    <div>📱 {service.contactInfo.mobile}</div>
                    <div>✉️ {service.contactInfo.email}</div>
                    <div>🌐 {service.contactInfo.website}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Enhanced Load More Button */}
        {visibleServices < services.length && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <button
              onClick={loadMore}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 text-lg hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Load More Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        )}

        {/* Enhanced View All Services Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105"
          >
            <Shield className="w-5 h-5 mr-2" />
            View All {services.length} Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}