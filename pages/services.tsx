import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, LinkIcon, Building2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedFuturisticCard from '../components/ui/UltraAdvancedFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-real-micro-saas-services';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-50', label: '$0 - $50' },
    { value: '51-100', label: '$51 - $100' },
    { value: '101-200', label: '$101 - $200' },
    { value: '201+', label: '$201+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' }
  ];

  // Filter and sort services
  let filteredServices = enhancedRealMicroSaasServices;

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = getServicesByCategory(selectedCategory);
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getServicesByPriceRange(min, max);
  }

  // Search filter
  if (searchQuery) {
    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort services
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
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

  const popularServices = getPopularServices();

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions with unprecedented computing power',
      icon: <Brain className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Quantum Computing & AI' || s.category === 'AI & Machine Learning').length
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <Factory className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0' || s.category === 'Robotics & Automation').length
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskConical className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Healthcare & Biotechnology').length
    },
    {
      name: 'Cybersecurity & Privacy',
      description: 'Advanced quantum-resistant security and threat detection',
      icon: <Shield className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Cybersecurity & Privacy').length
    },
    {
      name: 'Metaverse & Virtual Reality',
      description: 'Immersive 3D worlds and virtual experiences',
      icon: <Globe2 className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Metaverse & Virtual Reality').length
    },
    {
      name: 'Fintech & Trading',
      description: 'Quantum-powered financial optimization and trading',
      icon: <DollarSign className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Fintech & Trading').length
    },
    {
      name: 'Blockchain & Supply Chain',
      description: 'Transparent and secure blockchain solutions',
      icon: <LinkIcon className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Blockchain & Supply Chain').length
    },
    {
      name: 'Space Technology',
      description: 'Next-generation space exploration and satellite management',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Space Technology').length
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Revolutionary Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge micro SAAS services including quantum AI, autonomous manufacturing, cybersecurity, and more. Transform your business with next-generation technology." />
        <meta name="keywords" content="micro SAAS, quantum AI, autonomous manufacturing, cybersecurity, blockchain, space technology, Zion Tech Group" />
        <meta property="og:title" content="Revolutionary Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Discover our cutting-edge micro SAAS services including quantum AI, autonomous manufacturing, cybersecurity, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionary Micro SAAS Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with our cutting-edge micro SAAS solutions. From quantum AI to autonomous manufacturing, 
            we're pioneering the future of technology.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center space-x-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Contact Zion Tech Group</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-purple-400">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-green-400">
                <MapPin className="w-4 h-4" />
                <span className="text-xs">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category Navigation */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-black/20 text-gray-300 hover:bg-black/40 border border-gray-700/30'
              }`}
            >
              All Services ({enhancedRealMicroSaasServices.length})
            </button>
            {enhancedCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-black/20 text-gray-300 hover:bg-black/40 border border-gray-700/30'
                }`}
              >
                {category.icon}
                <span>{category.name} ({category.count})</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/30 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="lg:w-48">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode */}
              <div className="flex bg-black/30 rounded-xl p-1 border border-gray-700/50">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <UltraAdvancedFuturisticCard
                    service={service}
                    onClick={() => window.open(service.link, '_blank')}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Popular Services Section */}
        {popularServices.length > 0 && (
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Most Popular Services</h2>
              <p className="text-xl text-gray-300">Discover our most sought-after solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {popularServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <UltraAdvancedFuturisticCard
                    service={service}
                    onClick={() => window.open(service.link, '_blank')}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already using our revolutionary micro SAAS services to gain competitive advantages and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                className="px-8 py-4 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              >
                Get Started Today
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="px-8 py-4 text-lg border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}