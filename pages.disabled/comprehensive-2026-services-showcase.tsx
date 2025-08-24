import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search, Star, DollarSign, CheckCircle,
  ArrowRight, Rocket, Phone, Mail, MapPin, Grid, List,
  ChevronDown, Brain, Atom, Shield, Target, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, Globe, Zap, Users, TrendingUp
} from 'lucide-react';

// Import all our service data
import { real2026AdvancedServices } from '../data/real-2026-advanced-services';
import { real2026InnovativeSolutions } from '../data/real-2026-innovative-solutions';
import { real2026SpecializedServices } from '../data/real-2026-specialized-services';

export default function Comprehensive2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices = [
    ...real2026AdvancedServices,
    ...real2026InnovativeSolutions,
    ...real2026SpecializedServices
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service =>
    service.category?.includes('AI') || service.category?.includes('Machine Learning')
  ).length;
  const quantumCount = allServices.filter(service =>
    service.category?.includes('Quantum') || service.category?.includes('Space')
  ).length;
  const blockchainCount = allServices.filter(service =>
    service.category?.includes('Blockchain') || service.category?.includes('Digital')
  ).length;
  const edgeCount = allServices.filter(service =>
    service.category?.includes('Edge') || service.category?.includes('IoT')
  ).length;
  const specializedCount = allServices.filter(service =>
    service.category?.includes('Specialized') || service.category?.includes('Niche')
  ).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: quantumCount },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: '⛓️', count: blockchainCount },
    { id: 'edge', name: 'Edge Computing & IoT', icon: '🌐', count: edgeCount },
    { id: 'specialized', name: 'Specialized Solutions', icon: '🎯', count: specializedCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $3K/month', range: '$1K - $3K' },
    { id: 'high', name: '$3K - $6K/month', range: '$3K - $6K' },
    { id: 'enterprise', name: 'Custom pricing', range: 'Custom' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' ||
        (selectedCategory === 'ai' && service.category.includes('AI')) ||
        (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
        (selectedCategory === 'blockchain' && (service.category.includes('Blockchain') || service.category.includes('Digital'))) ||
        (selectedCategory === 'edge' && (service.category.includes('Edge') || service.category.includes('IoT'))) ||
        (selectedCategory === 'specialized' && (service.category.includes('Specialized') || service.category.includes('Niche')));

      const matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) < 1000) ||
        (selectedPriceRange === 'medium' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 3000) ||
        (selectedPriceRange === 'high' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) > 3000) ||
        (selectedPriceRange === 'enterprise' && service.price === 'Custom pricing');

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort((a, b) => {
          const priceA = a.price === 'Custom pricing' ? 999999 : parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = b.price === 'Custom pricing' ? 999999 : parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'popularity':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

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

  return (
    <>
      <Head>
        <title>Comprehensive 2026 Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive portfolio of cutting-edge micro SAAS, IT, and AI services for 2026. From quantum computing to autonomous systems, we deliver innovative solutions that drive business transformation." />
        <meta name="keywords" content="micro SAAS, IT services, AI services, quantum computing, blockchain, edge computing, 2026 services, Zion Tech Group" />
        <meta property="og:title" content="Comprehensive 2026 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive portfolio of cutting-edge micro SAAS, IT, and AI services for 2026." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-2026-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2026-services-showcase" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <motion.div 
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Comprehensive 2026
                </span>
                <br />
                <span className="text-white">Services Showcase</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover our revolutionary portfolio of micro SAAS, IT, and AI services that are reshaping industries and driving the future of technology. From quantum computing breakthroughs to autonomous systems, we deliver solutions that transform businesses.
              </motion.p>
              
              {/* Key Statistics */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{allServices.length}+</div>
                  <div className="text-gray-300">Advanced Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">25+</div>
                  <div className="text-gray-300">Technology Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">500+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 text-blue-400 mb-3" />
                    <div className="text-white font-semibold">Call Us</div>
                    <div className="text-gray-300">{contactInfo.mobile}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-8 h-8 text-purple-400 mb-3" />
                    <div className="text-white font-semibold">Email Us</div>
                    <div className="text-gray-300">{contactInfo.email}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 text-pink-400 mb-3" />
                    <div className="text-white font-semibold">Visit Us</div>
                    <div className="text-gray-300 text-sm">{contactInfo.address}</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Filters and Search */}
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center justify-end space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-white font-semibold mb-3">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-white font-semibold mb-3">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id} className="bg-gray-800 text-white">
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-white font-semibold mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="name" className="bg-gray-800 text-white">Name</option>
                  <option value="price" className="bg-gray-800 text-white">Price</option>
                  <option value="popularity" className="bg-gray-800 text-white">Popularity</option>
                  <option value="rating" className="bg-gray-800 text-white">Rating</option>
                  <option value="newest" className="bg-gray-800 text-white">Newest</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex items-center space-x-6' : ''
                }`}
              >
                {viewMode === 'list' ? (
                  // List View
                  <>
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}>
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white truncate">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          {service.popular && (
                            <span className="px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-semibold rounded-full">
                              Popular
                            </span>
                          )}
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="ml-1 text-sm text-white">{service.rating}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-3 line-clamp-2">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-white">{service.price}<span className="text-lg text-gray-300">{service.period}</span></div>
                        <Link
                          href={service.link}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  // Grid View
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}>
                        {service.icon}
                      </div>
                      <div className="flex items-center space-x-2">
                        {service.popular && (
                          <span className="px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-semibold rounded-full">
                            Popular
                          </span>
                        )}
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm text-white">{service.rating}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-gray-400 ml-6">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">{service.price}<span className="text-lg text-gray-300">{service.period}</span></div>
                      <Link
                        href={service.link}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12 text-gray-400"
          >
            Showing {filteredServices.length} of {allServices.length} services
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of companies already leveraging our cutting-edge services to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Sales
              </Link>
              <Link
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}