import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, Brain as BrainIcon, Factory as FactoryIcon, Shield as ShieldIcon, FlaskConical as FlaskIcon, DollarSign as DollarIcon, Rocket as RocketIcon, Globe as GlobeIcon, Truck as TruckIcon, GraduationCap as GraduationCapIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
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

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions with unprecedented computing power',
      icon: <BrainIcon className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Quantum Computing & AI' || s.category === 'AI & Machine Learning').length,
      color: 'from-purple-600 to-indigo-700'
    },
    {
      name: 'Manufacturing & Industry 4.0',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <FactoryIcon className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0' || s.category === 'Robotics & Automation').length,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskIcon className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Healthcare & Biotechnology').length,
      color: 'from-blue-600 to-cyan-700'
    },
    {
      name: 'Cybersecurity',
      description: 'Future-proof security solutions with quantum-resistant encryption',
      icon: <ShieldIcon className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Cybersecurity').length,
      color: 'from-green-600 to-emerald-700'
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial optimization and risk management',
      icon: <DollarIcon className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Financial Technology').length,
      color: 'from-yellow-500 to-amber-600'
    },
    {
      name: 'Logistics & Supply Chain',
      description: 'Autonomous logistics and supply chain optimization',
      icon: <TruckIcon className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Logistics & Supply Chain').length,
      color: 'from-teal-500 to-green-600'
    },
    {
      name: 'Space Technology',
      description: 'Advanced space analytics and satellite data processing',
      icon: <RocketIcon className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Space Technology').length,
      color: 'from-indigo-600 to-purple-700'
    },
    {
      name: 'Education Technology',
      description: 'AI-powered personalized learning and education platforms',
      icon: <GraduationCapIcon className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Education Technology').length,
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | 500+ Revolutionary Solutions</title>
        <meta name="description" content="Explore 500+ revolutionary micro SaaS services powered by AI, quantum computing, and cutting-edge technology. Transform your business with our innovative solutions." />
        <meta name="keywords" content="micro SaaS services, AI services, quantum computing, cybersecurity, healthcare AI, fintech, logistics AI, space technology" />
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="500+ revolutionary micro SaaS services powered by AI and quantum computing" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <UltraFuturisticBackground>
        {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Revolutionary Micro SaaS Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover 500+ cutting-edge micro SaaS services that combine AI, quantum computing, and innovative technology 
              to transform your business and deliver unprecedented ROI.
            </p>
          </motion.div>

          {/* Contact Information Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-4xl mx-auto mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-sm text-gray-400">Phone</span>
                <span className="text-white font-semibold">{contactInfo.mobile}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Mail className="w-6 h-6 text-purple-400 mb-2" />
                <span className="text-sm text-gray-400">Email</span>
                <span className="text-white font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <MapPin className="w-6 h-6 text-green-400 mb-2" />
                <span className="text-sm text-gray-400">Address</span>
                <span className="text-white font-semibold text-center text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services by name, description, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="secondary"
                size="sm"
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  onClick={() => setViewMode('grid')}
                  variant={viewMode === 'grid' ? 'primary' : 'secondary'}
                  size="sm"
                  className="p-2"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setViewMode('list')}
                  variant={viewMode === 'list' ? 'primary' : 'secondary'}
                  size="sm"
                  className="p-2"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-6 bg-gray-900/50 border border-gray-700/50 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="All">All Categories</option>
                      {enhancedCategories.map((category) => (
                        <option key={category.name} value={category.name}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Service Categories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of micro SaaS services across cutting-edge technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enhancedCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl group hover:scale-105 transition-all duration-300 cursor-pointer`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <span className="text-sm font-semibold text-white/80 bg-white/20 px-3 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm">Explore services</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {filteredServices.length} Services Found
            </h2>
            <div className="text-gray-400">
              Showing {filteredServices.length} of {enhancedRealMicroSaasServices.length} services
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <UltraFuturisticCard
                    variant={service.variant}
                    className="h-full group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{service.icon}</div>
                        <span className="text-sm font-semibold text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {service.tagline}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-400">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xl font-bold text-cyan-400">
                          {service.price}
                          <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm ml-1">{service.rating}</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-400 mb-4">
                        <div className="flex items-center justify-between">
                          <span>Market: {service.marketSize}</span>
                          <span className="text-green-400">{service.growthRate}</span>
                        </div>
                      </div>
                      
                      <Button
                        href={service.link}
                        variant="primary"
                        size="sm"
                        className="w-full group"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <UltraFuturisticCard
                    variant={service.variant}
                    className="group hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="text-4xl flex-shrink-0">{service.icon}</div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                                {service.name}
                              </h3>
                              <p className="text-gray-300 mb-3 line-clamp-2">
                                {service.description}
                              </p>
                            </div>
                            
                            <div className="text-right flex-shrink-0">
                              <div className="text-2xl font-bold text-cyan-400 mb-2">
                                {service.price}
                                <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                              </div>
                              <span className="text-sm font-semibold text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                                {service.category}
                              </span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                              <div className="space-y-2">
                                {service.features.slice(0, 4).map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-sm text-gray-400">
                                    <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                    <span className="line-clamp-1">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-semibold text-gray-300 mb-2">Market Info</h4>
                              <div className="space-y-2 text-sm text-gray-400">
                                <div>Market: {service.marketSize}</div>
                                <div>Growth: <span className="text-green-400">{service.growthRate}</span></div>
                                <div>Rating: <span className="text-yellow-400">{service.rating}/5</span></div>
                                <div>Customers: {service.customers.toLocaleString()}</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-400">
                              <span className="text-cyan-400 font-semibold">{service.trialDays} days free trial</span> • 
                              Setup in {service.setupTime}
                            </div>
                            
                            <Button
                              href={service.link}
                              variant="primary"
                              size="sm"
                              className="group"
                            >
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our revolutionary micro SaaS services. 
              Get started today with a free consultation and discover how we can accelerate your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
                className="group relative overflow-hidden"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                href="/pricing" 
                variant="secondary" 
                size="lg"
                className="group relative overflow-hidden"
              >
                View Pricing
                <DollarSign className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Enhanced Contact Information */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl">
                  <Phone className="w-8 h-8 text-cyan-400 mb-3" />
                  <span className="text-sm text-gray-400 mb-1">Phone</span>
                  <span className="text-white font-semibold text-lg">{contactInfo.mobile}</span>
                  <span className="text-xs text-gray-500 mt-1">Available 24/7</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl">
                  <Mail className="w-8 h-8 text-purple-400 mb-3" />
                  <span className="text-sm text-gray-400 mb-1">Email</span>
                  <span className="text-white font-semibold text-lg">{contactInfo.email}</span>
                  <span className="text-xs text-gray-500 mt-1">Quick response guaranteed</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl">
                  <MapPin className="w-8 h-8 text-green-400 mb-3" />
                  <span className="text-sm text-gray-400 mb-1">Address</span>
                  <span className="text-white font-semibold text-center text-sm leading-relaxed">{contactInfo.address}</span>
                  <span className="text-xs text-gray-500 mt-1">Global operations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </UltraFuturisticBackground>
    </div>
  );
}