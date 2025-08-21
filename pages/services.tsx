import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
import AdvancedFuturisticBackground from '../components/ui/AdvancedFuturisticBackground';
import AdvancedFuturisticCard from '../components/ui/AdvancedFuturisticCard';
import { expandedMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/expanded-micro-saas-services';
import { innovativeServices, getInnovativeServicesByCategory, getPopularInnovativeServices, getInnovativeServicesByPriceRange } from '../data/innovative-services';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);
  const [showInnovativeServices, setShowInnovativeServices] = useState(true);

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

  // Combine all services
  const allServices = [...expandedMicroSaasServices, ...innovativeServices];

  // Filter and sort services
  let filteredServices = allServices;

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = allServices.filter(service => service.category === selectedCategory);
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = filteredServices.filter(service => {
      const price = parseFloat(service.price.replace('$', ''));
      return price >= min && price <= max;
    });
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
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
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
  const popularInnovativeServices = getPopularInnovativeServices();

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions with quantum computing integration',
      icon: <Brain className="w-6 h-6" />,
      count: allServices.filter(s => s.category === 'AI & Machine Learning').length
    },
    {
      name: 'Blockchain & Web3',
      description: 'Future-proof blockchain with quantum security',
      icon: <Globe2 className="w-6 h-6" />,
      count: allServices.filter(s => s.category === 'Blockchain & Web3').length
    },
    {
      name: 'Quantum Computing',
      description: 'Revolutionary quantum solutions for complex problems',
      icon: <Atom className="w-6 h-6" />,
      count: allServices.filter(s => s.category === 'Quantum Computing').length
    },
    {
      name: 'Healthcare & Life Sciences',
      description: 'AI-powered healthcare and biomedical innovations',
      icon: <FlaskConical className="w-6 h-6" />,
      count: allServices.filter(s => s.category === 'Healthcare & Life Sciences').length
    },
    {
      name: 'Financial Technology',
      description: 'Next-generation fintech with quantum security',
      icon: <DollarSign className="w-6 h-6" />,
      count: allServices.filter(s => s.category === 'Financial Technology').length
    },
    {
      name: 'Supply Chain & Logistics',
      description: 'Intelligent supply chain optimization',
      icon: <Truck className="w-6 h-6" />,
      count: allServices.filter(s => s.category === 'Supply Chain & Logistics').length
    }
  ];

  return (
    <AdvancedFuturisticBackground theme="quantum" intensity="high">
      <Head>
        <title>Innovative Micro SAAS Services | Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge micro SAAS services including AI, quantum computing, blockchain, and more. Real implementations with 1500%+ average ROI." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, blockchain, fintech, healthcare AI, supply chain optimization" />
        <meta property="og:title" content="Innovative Micro SAAS Services | Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge micro SAAS services with real implementations and proven ROI." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Micro SAAS
              </span>
              <br />
              <span className="text-white">Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our portfolio of cutting-edge micro SAAS solutions featuring AI, quantum computing, 
              blockchain, and more. All services are fully implemented with proven ROI and enterprise-grade infrastructure.
            </motion.p>

            {/* Contact Information Banner */}
            <motion.div 
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-blue-400 mb-2" />
                  <p className="text-white font-semibold">Mobile</p>
                  <p className="text-blue-300">{contactInfo.mobile}</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-purple-300">{contactInfo.email}</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-cyan-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {allServices.length}+
                </div>
                <div className="text-gray-400">Real Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                  99.99%
                </div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  21 Days
                </div>
                <div className="text-gray-400">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  1500%+
                </div>
                <div className="text-gray-400">Average ROI</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Service Categories
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enhancedCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <AdvancedFuturisticCard
                    variant="quantum"
                    theme="quantum"
                    className="h-full cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                      <div className="text-cyan-400 font-semibold">{category.count} Services</div>
                    </div>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Popular Services
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <AdvancedFuturisticCard
                    variant="premium"
                    theme="quantum"
                    className="h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-gray-400 text-sm">{service.period}</div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        {service.trialDays} days trial
                      </div>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => window.open(service.link, '_blank')}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-1/4">
                <AdvancedFuturisticCard variant="default" theme="quantum" className="sticky top-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Filters</h3>
                  
                  {/* Category Filter */}
                  <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="All">All Categories</option>
                      {enhancedCategories.map(category => (
                        <option key={category.name} value={category.name}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Price Range</label>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      {priceRanges.map(range => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort Options */}
                  <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-medium mb-2">View Mode</label>
                    <div className="flex bg-gray-800 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                          viewMode === 'grid'
                            ? 'bg-cyan-600 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Grid className="w-4 h-4 mx-auto" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                          viewMode === 'list'
                            ? 'bg-cyan-600 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <List className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                        {contactInfo.mobile}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Mail className="w-4 h-4 mr-2 text-purple-400" />
                        {contactInfo.email}
                      </div>
                      <div className="flex items-start text-gray-300">
                        <MapPin className="w-4 h-4 mr-2 text-blue-400 mt-0.5" />
                        <span className="text-xs">{contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </AdvancedFuturisticCard>
              </div>

              {/* Services Grid */}
              <div className="lg:w-3/4">
                {/* Search Bar */}
                <div className="mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Services Count */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-300">
                    Showing {filteredServices.length} of {allServices.length} services
                  </p>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setShowInnovativeServices(!showInnovativeServices)}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                    >
                      {showInnovativeServices ? 'Hide' : 'Show'} Innovative Services
                    </button>
                  </div>
                </div>

                {/* Services Grid */}
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2' 
                    : 'grid-cols-1'
                }`}>
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <AdvancedFuturisticCard
                        variant={service.popular ? 'premium' : 'default'}
                        theme="quantum"
                        className="h-full hover:scale-105 transition-transform duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-3xl">{service.icon}</div>
                          <div className="flex items-center space-x-2">
                            {service.popular && (
                              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                Popular
                              </div>
                            )}
                            {service.realService && (
                              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                                Real Service
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-gray-400 text-sm">{service.period}</div>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                        
                        {/* Features */}
                        <div className="mb-4">
                          <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-xs text-gray-300">
                                <Check className="w-3 h-3 text-green-400 mr-1" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-400">
                            {service.trialDays} days trial
                          </div>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => window.open(service.link, '_blank')}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </AdvancedFuturisticCard>
                    </motion.div>
                  ))}
                </div>

                {/* No Results */}
                {filteredServices.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
                    <Button
                      onClick={() => {
                        setSelectedCategory('All');
                        setPriceRange('All');
                        setSearchQuery('');
                      }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AdvancedFuturisticCard variant="enterprise" theme="quantum">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our innovative micro SAAS services. 
                Start your 21-day free trial today and experience the future of business technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => window.open('/contact', '_self')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Contact Sales Team
                  <Phone className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/pricing', '_self')}
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                >
                  View Pricing
                  <DollarSign className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">Contact Information:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-cyan-400 font-semibold">Mobile</div>
                    <div className="text-white">{contactInfo.mobile}</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-semibold">Email</div>
                    <div className="text-white">{contactInfo.email}</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">Website</div>
                    <div className="text-white">{contactInfo.website}</div>
                  </div>
                </div>
              </div>
            </AdvancedFuturisticCard>
          </div>
        </section>
      </div>
    </AdvancedFuturisticBackground>
  );
}