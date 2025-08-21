import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, LinkIcon, Building2, SparklesIcon } from 'lucide-react';
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
    { value: 'category', label: 'Category' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'innovation', label: 'Most Innovative' }
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
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.technology.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
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
      case 'rating':
        return b.rating - a.rating;
      case 'innovation':
        if (a.realImplementation && !b.realImplementation) return -1;
        if (!a.realImplementation && b.realImplementation) return 1;
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return 0;
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

  // Enhanced service categories with better descriptions and icons
  const enhancedCategories = [
    {
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions with unprecedented computing power',
      icon: <Brain className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Quantum Computing & AI' || s.category === 'AI & Machine Learning').length,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <Factory className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0' || s.category === 'Robotics & Automation' || s.category === 'Autonomous Systems & Robotics').length,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskConical className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Healthcare & Biotechnology').length,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Cybersecurity & Defense',
      description: 'Quantum-resistant security and advanced threat protection',
      icon: <Shield className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Cybersecurity & Defense').length,
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Financial Technology',
      description: 'Quantum finance and AI-powered financial solutions',
      icon: <DollarSign className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Financial Technology').length,
      color: 'from-yellow-500 to-amber-600'
    },
    {
      name: 'Space & Aerospace',
      description: 'Satellite operations and space exploration technology',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Space & Aerospace Technology').length,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Metaverse & Virtual Reality',
      description: 'Immersive digital experiences and virtual worlds',
      icon: <Globe className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Metaverse & Virtual Reality').length,
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Emerging Technologies',
      description: 'Cutting-edge innovations like brain-computer interfaces',
      icon: <Atom className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Emerging Technologies').length,
      color: 'from-cyan-500 to-teal-600'
    }
  ];

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
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | 200+ Revolutionary Solutions</title>
        <meta name="description" content="Explore 200+ revolutionary micro SaaS services including Quantum AI, Autonomous Systems, Space Technology, and more. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SaaS services, quantum computing, AI services, autonomous systems, space technology, cybersecurity, robotics, metaverse, biomedical AI" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="200+ revolutionary micro SaaS services for the future of business" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <UltraAdvancedFuturisticBackground>
        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient-rainbow">200+ Revolutionary</span>
                <br />
                <span className="text-gradient-quantum">Micro SaaS Services</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge technology including 
                <span className="text-gradient-cyan font-semibold"> Quantum Computing</span>, 
                <span className="text-gradient-purple font-semibold"> Advanced AI</span>, and 
                <span className="text-gradient-green font-semibold"> Autonomous Systems</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button 
                  href="/pricing" 
                  variant="secondary" 
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Pricing
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              <div className="text-center p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-gradient-cyan mb-1">
                  {enhancedRealMicroSaasServices.length}+
                </div>
                <div className="text-sm text-gray-400">Total Services</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-gradient-purple mb-1">
                  {enhancedRealMicroSaasServices.filter(s => s.realImplementation).length}+
                </div>
                <div className="text-sm text-gray-400">Real Services</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-gradient-green mb-1">
                  {enhancedRealMicroSaasServices.filter(s => s.popular).length}+
                </div>
                <div className="text-sm text-gray-400">Popular Services</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-gradient-pink mb-1">
                  {serviceCategories.length}+
                </div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Overview */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient-rainbow">Service Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of micro SaaS services across cutting-edge technology domains
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {enhancedCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className={`text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">{category.count} services</span>
                    <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                {/* Search */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 items-center">
                  {/* Category Filter */}
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 pr-10"
                    >
                      <option value="All">All Categories</option>
                      {enhancedCategories.map((category) => (
                        <option key={category.name} value={category.name}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>

                  {/* Price Filter */}
                  <div className="relative">
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="appearance-none bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 pr-10"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>

                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 pr-10"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>

                  {/* View Mode */}
                  <div className="flex bg-black/40 border border-white/20 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'grid' 
                          ? 'bg-cyan-500 text-black' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'list' 
                          ? 'bg-cyan-500 text-black' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Showing <span className="text-white font-semibold">{filteredServices.length}</span> of{' '}
                  <span className="text-white font-semibold">{enhancedRealMicroSaasServices.length}</span> services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('All');
                  }}
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                >
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Clear Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
                }
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl ${
                      viewMode === 'list' ? 'flex items-center p-6' : 'p-6'
                    }`}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <>
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-white">
                            {service.price}
                            <span className="text-sm text-gray-400">{service.period}</span>
                          </span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm ml-1">{service.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs text-gray-400 bg-black/20 px-2 py-1 rounded-full">
                            {service.category}
                          </span>
                          {service.realImplementation && (
                            <span className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded-full">
                              Real Service
                            </span>
                          )}
                        </div>
                        <Button
                          href={service.link}
                          variant="primary"
                          size="sm"
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-5 ml-2" />
                        </Button>
                      </>
                    ) : (
                      // List View
                      <>
                        <div className="text-3xl mr-6">{service.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </h3>
                            <span className="text-2xl font-bold text-white">
                              {service.price}
                              <span className="text-sm text-gray-400">{service.period}</span>
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-gray-400 bg-black/20 px-2 py-1 rounded-full">
                              {service.category}
                            </span>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white ml-1">{service.rating}</span>
                            </div>
                            {service.realImplementation && (
                              <span className="text-green-400 bg-green-400/20 px-2 py-1 rounded-full">
                                Real Service
                              </span>
                            )}
                          </div>
                        </div>
                        <Button
                          href={service.link}
                          variant="primary"
                          size="sm"
                          className="ml-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-5 ml-2" />
                        </Button>
                      </>
                    )}
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient-rainbow">Need a Custom Solution?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Let us create a custom micro SaaS service tailored to your needs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button
                href="/pricing"
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
            >
              <div className="p-4">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Phone</div>
                <div className="text-gray-400">{contactInfo.mobile}</div>
              </div>
              <div className="p-4">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-400">{contactInfo.email}</div>
              </div>
              <div className="p-4">
                <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Address</div>
                <div className="text-gray-400 text-sm">{contactInfo.address}</div>
              </div>
            </motion.div>
          </div>
        </section>
      </UltraAdvancedFuturisticBackground>
    </div>
  );
}