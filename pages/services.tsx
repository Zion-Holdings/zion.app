import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, CheckCircle, XCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AdvancedFuturisticBackground from '../components/ui/AdvancedFuturisticBackground';
import AdvancedFuturisticCard from '../components/ui/AdvancedFuturisticCard';
import { enhancedMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-micro-saas-services';
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
    { value: '0-200', label: '$0 - $200' },
    { value: '201-400', label: '$201 - $400' },
    { value: '401-600', label: '$401 - $600' },
    { value: '601+', label: '$601+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' }
  ];

  // Filter and sort services
  let filteredServices = enhancedMicroSaasServices;

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
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
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

  // Market Statistics
  const marketStats = [
    {
      title: 'Total Market Size',
      value: '$2.5T+',
      description: 'Combined market value of all service categories'
    },
    {
      title: 'Average Growth Rate',
      value: '180%',
      description: 'Annual growth across all service categories'
    },
    {
      title: 'Client ROI',
      value: '2500%+',
      description: 'Average return on investment for clients'
    },
    {
      title: 'Global Reach',
      value: '150+',
      description: 'Countries served worldwide'
    }
  ];

  // Service Benefits
  const serviceBenefits = [
    {
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in 2-16 hours with our automated onboarding process'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with quantum-resistant encryption and 24/7 monitoring'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-fuchsia-400" />,
      title: 'Proven ROI',
      description: 'Average 2500%+ return on investment within 12-18 months'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'Expert Support',
      description: '24/7 AI-powered support with human experts available when needed'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: 'Global Infrastructure',
      description: 'Multi-region deployment with 99.9% uptime guarantee'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Instant Scaling',
      description: 'Auto-scaling infrastructure that grows with your business needs'
    }
  ];

  return (
    <AdvancedFuturisticBackground>
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | Revolutionary AI & Quantum Solutions</title>
        <meta name="description" content="Explore 12+ revolutionary micro SaaS services powered by quantum computing and AI. From $199/month with 30-day free trials. Transform your business today." />
        <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, cybersecurity, cloud services, financial technology, legal tech, healthcare technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="12+ revolutionary micro SaaS services with quantum AI technology" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta name="twitter:description" content="12+ revolutionary micro SaaS services with quantum AI technology" />
      </Head>

      <main className="relative z-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Revolutionary{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  Micro SaaS Services
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover 12+ cutting-edge micro SaaS solutions powered by quantum computing, AI, and revolutionary technology. 
                Transform your business with enterprise-grade solutions starting from $199/month.
              </p>
              
              {/* Market Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                {marketStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400 mb-1">{stat.title}</div>
                    <div className="text-xs text-gray-500">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every service is designed with cutting-edge technology and proven business value
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AdvancedFuturisticCard className="p-6 h-full">
                    <div className="flex items-start mb-4">
                      <div className="p-2 bg-white/10 rounded-lg mr-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Most Popular Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most sought-after solutions that are transforming industries worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AdvancedFuturisticCard className="p-6 h-full relative overflow-hidden">
                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm border border-yellow-500/30">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                        <p className="text-sm text-gray-400">{service.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-gray-400">{service.period}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{service.trialDays} days free trial</span>
                        <span className="text-gray-400">{service.setupTime} setup</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="text-sm">
                        <span className="text-gray-400">Category:</span>
                        <span className="text-white ml-2">{service.category}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 ml-2">{service.roi}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-blue-400 ml-2">{service.marketSize}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Button
                        href={service.link}
                        variant="primary"
                        size="sm"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        href="/contact"
                        variant="secondary"
                        size="sm"
                      >
                        Get Started
                        <Rocket className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Find Your Perfect Service
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Use our advanced filters to discover the ideal solution for your business needs
              </p>
            </motion.div>

            {/* Search and Filters */}
            <div className="bg-black/30 rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">View Mode:</span>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-black/50 text-gray-400'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-black/50 text-gray-400'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="text-gray-400 text-sm">
                  {filteredServices.length} services found
                </div>
              </div>
            </div>

            {/* Services Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AdvancedFuturisticCard className="p-6 h-full">
                    <div className="flex items-start mb-4">
                      <span className="text-3xl mr-4">{service.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-white">{service.name}</h3>
                          {service.popular && (
                            <div className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              Popular
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{service.tagline}</p>
                        <div className="text-sm text-gray-500">{service.category}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-gray-400">{service.period}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{service.trialDays} days free</span>
                        <span className="text-gray-400">{service.setupTime} setup</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="text-sm">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 ml-2">{service.roi}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-400">Market:</span>
                        <span className="text-blue-400 ml-2">{service.marketSize}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Button
                        href={service.link}
                        variant="primary"
                        size="sm"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        href="/contact"
                        variant="secondary"
                        size="sm"
                      >
                        Get Started
                        <Rocket className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
                <Button
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange('All');
                    setSearchQuery('');
                  }}
                  variant="primary"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss your needs and start your 30-day free trial today
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start Free Trial
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  href={`mailto:${contactInfo.email}`}
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Contact Sales
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">{contactInfo.mobile}</p>
                </div>
                <div>
                  <Mail className="h-6 w-6 text-fuchsia-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
                <div>
                  <MapPin className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </AdvancedFuturisticBackground>
  );
}