import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, 
  ArrowRight, Rocket, Brain, Zap, Shield, Atom, Sparkles, 
  Target, Satellite, Globe, Cpu, Lock, Palette, Layers,
  Phone, Mail, MapPin, ExternalLink, Filter, Grid, List
} from 'lucide-react';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-v2';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedNavigation2026 from '../components/layout/EnhancedNavigation2026';

export default function Revolutionary2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all 2026 services
  const all2026Services = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2
  ];

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    let filtered = all2026Services;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') {
          return service.category.includes('AI') || service.category.includes('Machine Learning');
        } else if (selectedCategory === 'quantum') {
          return service.category.includes('Quantum') || service.category.includes('Space');
        } else if (selectedCategory === 'emerging') {
          return service.category.includes('Emerging') || service.category.includes('Technology');
        } else if (selectedCategory === 'enterprise') {
          return service.category.includes('Enterprise') || service.category.includes('Business');
        }
        return true;
      });
    }

    // Price filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
        if (selectedPriceRange === 'low') return price < 1000;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000;
        if (selectedPriceRange === 'premium') return price >= 20000;
        return true;
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price-low') {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
        return priceA - priceB;
      }
      if (sortBy === 'price-high') {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
        return priceB - priceA;
      }
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popularity') return b.customers - a.customers;
      return 0;
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, all2026Services]);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: all2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Space')).length },
    { id: 'emerging', name: 'Emerging Technologies', icon: '✨', count: all2026Services.filter(s => s.category.includes('Emerging') || s.category.includes('Technology')).length },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('Business')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'popularity', name: 'Most Popular' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="neural-network"
      particleCount={500}
      animationSpeed={2.5}
      enableHolographic={true}
      enableQuantumEffects={true}
      enableNeuralNetwork={true}
    >
      <div className="min-h-screen">
        <Head>
          <title>2026 Revolutionary Services Showcase - Zion Tech Group | Cutting-Edge AI, Quantum & Emerging Tech</title>
          <meta name="description" content="Discover Zion Tech Group's revolutionary 2026 services: AI, quantum computing, emerging technologies, and enterprise solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 services, AI services, quantum computing, emerging technologies, enterprise solutions, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="2026 Revolutionary Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Cutting-edge AI, quantum computing, and emerging technology services for 2026" />
          <meta property="og:url" content="https://ziontechgroup.com/2026-revolutionary-services-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/2026-revolutionary-services-showcase" />
        </Head>

        {/* Enhanced Navigation */}
        <EnhancedNavigation2026 />

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  2026 Revolutionary Services
                </span>
              </h1>
              <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
                Experience the future with our cutting-edge AI, quantum computing, and emerging technology solutions. 
                Transform your business with revolutionary innovations that deliver unprecedented ROI.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>{all2026Services.length}+ Revolutionary Services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9/5 Average Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span>1000%+ ROI Guarantee</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">Ready to Transform Your Business?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search revolutionary services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-black/60 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-black/40 text-gray-300 hover:bg-black/60 hover:text-white'
                      }`}
                    >
                      {category.icon} {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 mt-6">
                {/* Price Range Filter */}
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPriceRange(range.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedPriceRange === range.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-black/40 text-gray-300 hover:bg-black/60 hover:text-white'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>

                {/* Sort Options */}
                <div className="flex items-center space-x-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-black/60 border border-purple-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500/60"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex bg-black/40 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-all duration-200 ${
                        viewMode === 'grid'
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-all duration-200 ${
                        viewMode === 'list'
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredServices.length} Revolutionary Services Found
              </h2>
              <p className="text-gray-400">
                Discover cutting-edge solutions that will transform your business in 2026 and beyond
              </p>
            </div>

            <AnimatePresence mode="wait">
              {filteredServices.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <div className="text-gray-400 text-xl">
                    No services found matching your criteria.
                    <br />
                    Try adjusting your search or filters.
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`grid gap-6 ${
                    viewMode === 'grid'
                      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                      : 'grid-cols-1'
                  }`}
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`group relative ${
                        viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className={`relative bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 ${
                        viewMode === 'list' ? 'flex-1' : ''
                      }`}>
                        {/* Service Header */}
                        <div className={`${viewMode === 'list' ? 'flex items-start space-x-4' : ''}`}>
                          <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                            <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-2xl`}>
                              {service.icon}
                            </div>
                          </div>
                          <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-purple-300 text-sm mb-2">{service.tagline}</p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        {/* Service Details */}
                        <div className={`mt-6 ${viewMode === 'list' ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : ''}`}>
                          {/* Features */}
                          <div>
                            <h4 className="text-white font-semibold mb-3 flex items-center">
                              <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {service.features.slice(0, 5).map((feature, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Service Info */}
                          <div className={`${viewMode === 'list' ? '' : 'mt-6'}`}>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-400">Price:</span>
                                <div className="text-white font-semibold">{service.price}{service.period}</div>
                              </div>
                              <div>
                                <span className="text-gray-400">Category:</span>
                                <div className="text-white">{service.category}</div>
                              </div>
                              <div>
                                <span className="text-gray-400">Rating:</span>
                                <div className="flex items-center text-white">
                                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                  {service.rating}/5 ({service.reviews} reviews)
                                </div>
                              </div>
                              <div>
                                <span className="text-gray-400">Customers:</span>
                                <div className="text-white">{service.customers.toLocaleString()}+</div>
                              </div>
                            </div>

                            {/* ROI and Market Info */}
                            <div className="mt-4 p-3 bg-purple-900/20 rounded-lg">
                              <div className="text-sm text-purple-300 mb-2">
                                <strong>ROI:</strong> {service.roi}
                              </div>
                              <div className="text-xs text-gray-400">
                                <strong>Market:</strong> {service.marketSize} | <strong>Growth:</strong> {service.growthRate}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                          <Link
                            href={service.link}
                            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group-hover:scale-105"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <a
                            href={`tel:${contactInfo.mobile}`}
                            className="flex-1 bg-black/40 hover:bg-black/60 text-white font-semibold py-3 px-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-200 flex items-center justify-center"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Contact
                          </a>
                        </div>

                        {/* Popular Badge */}
                        {service.popular && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                              POPULAR
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Lead the Future?
              </h2>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Join the revolution with our cutting-edge 2026 services. Transform your business, 
                accelerate innovation, and achieve unprecedented ROI with Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {contactInfo.mobile}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="bg-black/40 hover:bg-black/60 text-white font-semibold py-4 px-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-200 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
              <div className="mt-8 text-gray-400 text-sm">
                <p>Visit us at: <a href={contactInfo.website} className="text-purple-400 hover:text-purple-300">{contactInfo.website}</a></p>
                <p className="mt-2">{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}