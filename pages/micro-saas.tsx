import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { 
  Search, Filter, Star, Users, TrendingUp, Zap, Shield, Brain, 
  Rocket, Globe, FlaskConical, DollarSign, Clock, Check, 
  ArrowRight, ExternalLink, Cpu, Database, Lock, Smartphone, 
  Palette, MessageSquare, FileText, Calendar, CreditCard, 
  BarChart3, Code, BookOpen, Activity, Settings, Mail, Phone, 
  MapPin, Sparkles, Atom, Eye, Trophy, Dna, ChevronDown, 
  ChevronUp, X, FilterIcon, SortAsc, SortDesc
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedFuturisticCard from '../components/ui/UltraAdvancedFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';
import { motion, AnimatePresence } from 'framer-motion';

export default function MicroSaasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = enhancedRealMicroSaasServices;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => 
          feature.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service =>
        service.category.includes(selectedCategory)
      );
    }

    // Price filter
    filtered = filtered.filter(service => {
      const price = parseInt(service.price.replace('$', ''));
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort
    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'price':
          aValue = parseInt(a.price.replace('$', ''));
          bValue = parseInt(b.price.replace('$', ''));
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'customers':
          aValue = a.customers;
          bValue = b.customers;
          break;
        case 'category':
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, sortOrder, priceRange]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortBy('name');
    setSortOrder('asc');
    setPriceRange([0, 1000]);
  };

  const getCategoryStats = () => {
    const stats: { [key: string]: number } = {};
    serviceCategories.forEach(category => {
      stats[category] = enhancedRealMicroSaasServices.filter(
        service => service.category.includes(category)
      ).length;
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <UltraAdvancedFuturisticBackground variant="holographic" intensity="medium">
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | 200+ Revolutionary AI-Powered Solutions</title>
        <meta name="description" content="Explore 200+ revolutionary micro SaaS services powered by AI, quantum computing, space technology, and cutting-edge innovations. Transform your business with Zion Tech Group." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, space technology, biomedical AI, metaverse, autonomous systems, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="200+ revolutionary AI-powered micro SaaS services transforming industries with quantum computing, space tech, and autonomous systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta name="twitter:description" content="200+ revolutionary AI-powered micro SaaS services transforming industries with quantum computing, space tech, and autonomous systems." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                200+ Revolutionary
              </span>
              <br />
              <span className="text-white">Micro SaaS Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge AI-powered solutions across quantum computing, space technology, 
              biomedical research, autonomous systems, and more. Transform your business with proven ROI.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            <div className="text-center p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-gray-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{enhancedRealMicroSaasServices.length}</div>
              <div className="text-sm text-gray-300">Total Services</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-gray-700/50">
              <div className="text-3xl font-bold text-purple-400 mb-1">{serviceCategories.length}</div>
              <div className="text-sm text-gray-300">Categories</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-gray-700/50">
              <div className="text-3xl font-bold text-green-400 mb-1">800%+</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-gray-700/50">
              <div className="text-3xl font-bold text-pink-400 mb-1">30+</div>
              <div className="text-sm text-gray-300">Day Trials</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/20 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6">
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <FilterIcon className="w-4 h-4" />
                  Filters
                  {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
                
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  className="px-4 py-3 border border-gray-600 text-gray-300 hover:bg-gray-700/50 rounded-xl transition-all duration-300"
                >
                  Reset
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-700/50 pt-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-black/30 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                      >
                        <option value="All">All Categories</option>
                        {serviceCategories.map((category) => (
                          <option key={category} value={category}>
                            {category} ({categoryStats[category] || 0})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Sort By */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                      <div className="flex">
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="flex-1 px-3 py-2 bg-black/30 border border-gray-700/50 rounded-l-lg text-white focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                        >
                          <option value="name">Name</option>
                          <option value="price">Price</option>
                          <option value="rating">Rating</option>
                          <option value="customers">Customers</option>
                          <option value="category">Category</option>
                        </select>
                        <button
                          onClick={toggleSortOrder}
                          className="px-3 py-2 bg-black/30 border border-gray-700/50 border-l-0 rounded-r-lg text-gray-300 hover:bg-gray-700/50 transition-all duration-300"
                        >
                          {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder="Min"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                          className="flex-1 px-3 py-2 bg-black/30 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                          className="flex-1 px-3 py-2 bg-black/30 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Results Count */}
                    <div className="flex items-end">
                      <div className="text-center w-full">
                        <div className="text-2xl font-bold text-cyan-400">{filteredServices.length}</div>
                        <div className="text-sm text-gray-300">Services Found</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search criteria or filters</p>
              <Button
                onClick={resetFilters}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Reset Filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <UltraAdvancedFuturisticCard
                    service={service}
                    onClick={() => window.open(service.link, '_blank')}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our team to learn more about our revolutionary micro SaaS services and how they can accelerate your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <DollarSign className="w-4 h-4 mr-2" />
                View Pricing
              </Button>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-gray-700/50">
                <Phone className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Mobile</div>
                <div className="text-gray-300 text-sm">{contactInfo.mobile}</div>
              </div>
              <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-gray-700/50">
                <Mail className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Email</div>
                <div className="text-gray-300 text-sm">{contactInfo.email}</div>
              </div>
              <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-gray-700/50">
                <MapPin className="w-5 h-5 text-pink-400 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Address</div>
                <div className="text-gray-300 text-xs">{contactInfo.address}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraAdvancedFuturisticBackground>
  );
}