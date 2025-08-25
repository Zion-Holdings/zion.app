import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Link } from 'react-router-dom';

export default function ComprehensiveInnovativeServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('all');

  const allServices = [...COMPREHENSIVE_SERVICES];
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const priceRanges = [
    { label: 'all', min: 0, max: Infinity, display: 'All Prices' },
    { label: 'budget', min: 0, max: 500, display: 'Under $500' },
    { label: 'mid', min: 500, max: 2000, display: '$500 - $2,000' },
    { label: 'premium', min: 2000, max: 5000, display: '$2,000 - $5,000' },
    { label: 'enterprise', min: 5000, max: Infinity, display: '$5,000+' }
  ];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesPrice = priceRange === 'all' || 
                        (service.price >= priceRanges.find(range => range.label === priceRange)?.min! &&
                         service.price <= priceRanges.find(range => range.label === priceRange)?.max!);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const getCategoryStats = () => {
    const stats: { [key: string]: number } = {};
    allServices.forEach(service => {
      stats[service.category] = (stats[service.category] || 0) + 1;
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Comprehensive Innovative Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Your complete destination for cutting-edge technology solutions. Explore our comprehensive portfolio of 50+ innovative services designed to transform businesses across all industries.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
              <div className="text-zion-slate-light">Total Services</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{categories.length - 1}</div>
              <div className="text-zion-slate-light">Categories</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Expert Support</div>
            </div>
            <div className="bg-zion-blue-light/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/30">
              <div className="text-3xl font-bold text-zion-cyan mb-2">100%</div>
              <div className="text-zion-slate-light">Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Category Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Service Categories Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.filter(cat => cat !== 'all').map((category) => (
              <div key={category} className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                  <span className="text-2xl font-bold text-zion-cyan">{categoryStats[category]}</span>
                </div>
                <p className="text-zion-slate-light text-sm mb-4">
                  {allServices.filter(service => service.category === category).slice(0, 3).map(service => service.title).join(', ')}
                </p>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className="w-full bg-zion-cyan text-zion-blue-dark font-semibold py-2 px-4 rounded-lg hover:bg-zion-cyan/90 transition-colors"
                >
                  View {categoryStats[category]} Services
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-white text-center mb-6">Find Your Perfect Solution</h3>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services by name, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                      selectedCategory === category
                        ? 'bg-zion-cyan text-zion-blue-dark font-semibold shadow-lg shadow-zion-cyan/30'
                        : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 border border-zion-cyan/30'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>

              {/* Price Filter */}
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(range.label)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                      priceRange === range.label
                        ? 'bg-zion-cyan text-zion-blue-dark font-semibold shadow-lg shadow-zion-cyan/30'
                        : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 border border-zion-cyan/30'
                    }`}
                  >
                    {range.display}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mt-6">
              <p className="text-zion-slate-light">
                Showing <span className="text-zion-cyan font-semibold">{filteredServices.length}</span> of {allServices.length} services
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-zion-blue-light/10 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full">
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                      {service.subcategory}
                    </span>
                    <span className="text-2xl font-bold text-zion-cyan">
                      {service.currency}{service.price}
                      <span className="text-sm text-zion-slate-light">/mo</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-slate-light mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-zion-cyan mt-2">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-slate-light mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center text-xs text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-zion-blue-light/20 text-zion-slate-light px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={`/innovative-saas-showcase?service=${service.id}`}
                    className="flex-1 bg-zion-cyan text-zion-blue-dark font-semibold py-2 px-4 rounded-lg hover:bg-zion-cyan/90 transition-colors text-center"
                  >
                    Learn More
                  </Link>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="flex-1 bg-transparent border border-zion-cyan text-zion-cyan font-semibold py-2 px-4 rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors text-center"
                  >
                    Get Quote
                  </a>
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                  <div className="text-xs text-zion-slate-light">
                    <div className="flex items-center mb-1">
                      <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {service.contactInfo.email}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {service.contactInfo.phone}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-zion-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm rounded-2xl p-12 border border-zion-cyan/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
                className="bg-zion-cyan text-zion-blue-dark font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan/90 transition-colors text-lg"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors text-lg"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}