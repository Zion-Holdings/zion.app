import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, TrendingUp, Zap, Shield, Brain, Atom, Rocket, ArrowRight, CheckCircle, Users, DollarSign, Clock, Search, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2, Bot, ChevronRight, Crown, Phone, Mail, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground2026 from '../components/ui/UltraAdvancedFuturisticBackground2026';
import { revolutionary2026MicroSaasServices } from '../data/revolutionary-2026-micro-saas-services';
import { revolutionary2026ITServices } from '../data/revolutionary-2026-it-services';
import { revolutionary2026AIServices } from '../data/revolutionary-2026-ai-services';

export default function Revolutionary2026ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = [
    ...revolutionary2026MicroSaasServices,
    ...revolutionary2026ITServices,
    ...revolutionary2026AIServices
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service => service.category?.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category?.includes('Quantum')).length;
  const enterpriseCount = allServices.filter(service => service.category?.includes('Enterprise') || service.category?.includes('IT')).length;
  const microSaasCount = revolutionary2026MicroSaasServices.length;

  const categories = [
    { id: 'all', name: 'All Revolutionary Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum & Advanced Tech', icon: '⚛️', count: quantumCount },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $3K/month', range: '$1K - $3K' },
    { id: 'high', name: '$3K - $8K/month', range: '$3K - $8K' },
    { id: 'enterprise', name: '$8K+/month', range: '$8K+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customer Count' }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
        (selectedCategory === 'ai' && service.category?.includes('AI')) ||
        (selectedCategory === 'quantum' && service.category?.includes('Quantum')) ||
        (selectedCategory === 'enterprise' && (service.category?.includes('Enterprise') || service.category?.includes('IT'))) ||
        (selectedCategory === 'micro-saas' && revolutionary2026MicroSaasServices.includes(service));

      const matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && parseFloat(service.price.replace('$', '').replace(',', '')) < 1000) ||
        (selectedPriceRange === 'medium' && parseFloat(service.price.replace('$', '').replace(',', '')) >= 1000 && parseFloat(service.price.replace('$', '').replace(',', '')) < 3000) ||
        (selectedPriceRange === 'high' && parseFloat(service.price.replace('$', '').replace(',', '')) >= 3000 && parseFloat(service.price.replace('$', '').replace(',', '')) < 8000) ||
        (selectedPriceRange === 'enterprise' && parseFloat(service.price.replace('$', '').replace(',', '')) >= 8000);

      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'price-high':
          return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraAdvancedFuturisticBackground2026>
      <Head>
        <title>Revolutionary 2026 Services - Zion Tech Group</title>
        <meta name="description" content="Experience the future of technology with our cutting-edge micro SAAS, IT, and AI services. Built for tomorrow, available today." />
        <meta name="keywords" content="revolutionary services, 2026 technology, AI services, quantum computing, micro SaaS, IT solutions" />
        <meta property="og:title" content="Revolutionary 2026 Services - Zion Tech Group" />
        <meta property="og:description" content="Experience the future of technology with our cutting-edge micro SAAS, IT, and AI services." />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2026-services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2026-services" />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-8"
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Rocket className="w-12 h-12 text-white" />
                </div>
              </motion.div>

              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Revolutionary 2026 Services
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Experience the future of technology with our cutting-edge micro SAAS, IT, and AI services. 
                Built for tomorrow, available today.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                  <div className="text-gray-400">Revolutionary Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">99.9%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href={`tel:${contactInfo.mobile}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {contactInfo.mobile}</span>
                </motion.a>
                
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/25"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/25 appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* Price Range Filter */}
                <div className="relative">
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/25 appearance-none"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* Sort Options */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/25 appearance-none"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-600/50">
                <div className="text-gray-400">
                  {filteredServices.length} services found
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-6'
              }>
                <AnimatePresence mode="wait">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      layout
                      className={`group ${
                        viewMode === 'list' 
                          ? 'bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6' 
                          : ''
                      }`}
                    >
                      {viewMode === 'grid' ? (
                        // Grid View
                        <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 overflow-hidden group-hover:border-cyan-500/50 transition-all duration-300">
                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Service Icon */}
                          <div className="text-4xl mb-4">
                            {service.icon}
                          </div>

                          {/* Service Header */}
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                              {service.name}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {service.tagline}
                            </p>
                          </div>

                          {/* Price */}
                          <div className="mb-4">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-cyan-400">
                                {service.price}
                              </span>
                              <span className="text-gray-400">{service.period}</span>
                            </div>
                            {service.popular && (
                              <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-semibold rounded-full">
                                <Star className="w-3 h-3" />
                                Popular
                              </div>
                            )}
                          </div>

                          {/* Features Preview */}
                          <div className="mb-6">
                            <div className="space-y-2">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                              {service.features.length > 3 && (
                                <div className="text-sm text-gray-500">
                                  +{service.features.length - 3} more features
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Service Stats */}
                          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                            <div className="text-center">
                              <div className="text-lg font-bold text-cyan-400">{service.customers}</div>
                              <div className="text-xs text-gray-500">Customers</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-purple-400">{service.rating}</div>
                              <div className="text-xs text-gray-500">Rating</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-pink-400">{service.reviews}</div>
                              <div className="text-xs text-gray-500">Reviews</div>
                            </div>
                          </div>

                          {/* CTA Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </motion.button>
                        </div>
                      ) : (
                        // List View
                        <div className="flex items-center space-x-6">
                          <div className="text-4xl">{service.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-400 mb-2">{service.tagline}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>Category: {service.category}</span>
                              <span>Setup: {service.setupTime}</span>
                              <span>Trial: {service.trialDays} days</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-cyan-400 mb-2">
                              {service.price}{service.period}
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm"
                            >
                              Learn More
                            </motion.button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already leveraging our revolutionary 2026 services to achieve unprecedented growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href={`tel:${contactInfo.mobile}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {contactInfo.mobile}</span>
                </motion.a>
                
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </motion.a>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl border border-cyan-500/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-white font-medium">{contactInfo.mobile}</p>
                  </div>
                  <div>
                    <Mail className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-white font-medium">{contactInfo.email}</p>
                  </div>
                  <div>
                    <MapPin className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                    <p className="text-white font-medium">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground2026>
  );
}