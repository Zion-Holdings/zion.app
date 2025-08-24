import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, ArrowRight, Check,
  Brain, Atom, Shield, Rocket, Zap, Globe, Target,
  TrendingUp, Users, Clock, DollarSign, Award, Sparkles
} from 'lucide-react';

// Import our new service data
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services';
import { innovative2038AIServices } from '../data/innovative-2038-ai-services';
import { innovative2038ITServices } from '../data/innovative-2038-it-services';

// Import existing service data
import { innovative2037MicroSaasServices } from '../data/innovative-2037-micro-saas-services';
import { innovative2037AIServices } from '../data/innovative-2037-ai-services';
import { innovative2037ITServices } from '../data/innovative-2037-it-services';

// Create unified services array
const allServices = [
  ...innovative2038MicroSaasServices,
  ...innovative2038AIServices,
  ...innovative2038ITServices,
  ...innovative2037MicroSaasServices,
  ...innovative2037AIServices,
  ...innovative2037ITServices
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of all services'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Innovative business solutions'
  },
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Advanced AI solutions'
  },
  {
    id: 'it-services',
    name: 'IT Infrastructure',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Enterprise IT solutions'
  },
  {
    id: 'quantum',
    name: 'Quantum Technology',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Quantum computing solutions'
  },
  {
    id: 'space-tech',
    name: 'Space Technology',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Space exploration solutions'
  }
];

const Ultimate2038FuturisticServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'name' | 'launchDate'>('rating');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.id.includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = parseFloat(service.pricing.starter.replace(/[^0-9]/g, '')) >= priceRange[0] &&
        parseFloat(service.pricing.enterprise.replace(/[^0-9]/g, '')) <= priceRange[1];
      
      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return parseFloat(a.pricing.starter.replace(/[^0-9]/g, '')) - parseFloat(b.pricing.starter.replace(/[^0-9]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        case 'launchDate':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    });

  const getServiceCategory = (service: any) => {
    if (service.category) return service.category;
    if (service.id.includes('ai-')) return 'AI & Machine Learning';
    if (service.id.includes('quantum-')) return 'Quantum Technology';
    if (service.id.includes('space-')) return 'Space Technology';
    return 'Micro SAAS Solutions';
  };

  const getServicePricing = (service: any) => {
    if (service.pricing?.starter) return service.pricing.starter;
    if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
    return 'Contact for pricing';
  };

  const getServiceFeatures = (service: any) => {
    if (service.features) return service.features;
    if (service.keyFeatures) return service.keyFeatures;
    return [];
  };

  const getServiceDescription = (service: any) => {
    if (service.description) return service.description;
    if (service.tagline) return service.tagline;
    return 'No description available';
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
              <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-blue-400/20 rounded-lg animate-pulse delay-1500"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                <span>2038 Futuristic Services</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ultimate 2038 Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover our revolutionary portfolio of cutting-edge technology solutions that define the future of business transformation
              </p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                  <div className="text-gray-300 text-sm">Innovative Services</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-300 text-sm">Technology Categories</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">4.8+</div>
                  <div className="text-gray-300 text-sm">Average Rating</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Support Available</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 bg-black/50 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {category.icon}
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Mode and Sort */}
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white/5 rounded-lg border border-white/10">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-l-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-r-lg transition-colors ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="name">Sort by Name</option>
                  <option value="launchDate">Sort by Launch Date</option>
                </select>
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-gray-300 text-sm">Price Range:</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-20 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <span className="text-gray-400">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000])}
                  className="w-20 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Results Count */}
            <div className="mb-8 text-center">
              <p className="text-gray-400">
                Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> services
                {selectedCategory !== 'all' && (
                  <> in <span className="text-purple-400 font-semibold">{categories.find(c => c.id === selectedCategory)?.name}</span></>
                )}
              </p>
            </div>

            {/* Services Grid */}
            <AnimatePresence mode="wait">
              {viewMode === 'grid' ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                    >
                      {/* Service Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{service.rating}</span>
                          </div>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-400 font-medium">
                          {getServiceCategory(service)}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {getServiceDescription(service)}
                      </p>

                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-white mb-1">
                          {getServicePricing(service)}
                        </div>
                        <div className="text-xs text-gray-400">
                          Market Price: {service.marketPrice}
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {getServiceFeatures(service).slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-400">
                              <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                          {getServiceFeatures(service).length > 3 && (
                            <div className="text-xs text-cyan-400">
                              +{getServiceFeatures(service).length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <a
                          href={service.link}
                          className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors group-hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="text-xs text-gray-400">
                          Launch: {new Date(service.launchDate).toLocaleDateString()}
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Service Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                {service.name}
                              </h3>
                              <p className="text-gray-300 mb-3">{service.tagline}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-300">{service.rating}</span>
                              </div>
                              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-400 font-medium">
                                {getServiceCategory(service)}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-400 mb-4">{getServiceDescription(service)}</p>
                          
                          {/* Features */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {getServiceFeatures(service).slice(0, 6).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-300">
                                <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pricing and CTA */}
                        <div className="lg:w-64 flex flex-col justify-between">
                          <div className="text-center mb-4">
                            <div className="text-3xl font-bold text-white mb-1">
                              {getServicePricing(service)}
                            </div>
                            <div className="text-sm text-gray-400 mb-2">
                              Market Price: {service.marketPrice}
                            </div>
                            <div className="text-xs text-gray-400">
                              Launch: {new Date(service.launchDate).toLocaleDateString()}
                            </div>
                          </div>
                          
                          <a
                            href={service.link}
                            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-center"
                          >
                            Get Started
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or filters
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange([0, 5000]);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Get Started Today
                </a>
                <a
                  href="/quote"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Request Custom Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Ultimate2038FuturisticServicesShowcase;