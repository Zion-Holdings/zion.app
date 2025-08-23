import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import { expandedMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/expanded-micro-saas-services';

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
  let filteredServices = expandedMicroSaasServices;

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

  return (
    <EnhancedFuturisticBackground variant="holographic-advanced" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Complete Services Portfolio | Zion Tech Group - AI, Cloud, Security & More</title>
          <meta name="description" content="Explore our complete portfolio of 100+ micro SaaS services. AI solutions, cloud infrastructure, cybersecurity, data analytics, IoT, blockchain, and emerging technologies." />
          <meta name="keywords" content="AI services, cloud solutions, cybersecurity, data analytics, IoT platform, blockchain, quantum computing, AR/VR, micro SaaS, business automation" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Complete Services Portfolio | Zion Tech Group" />
          <meta property="og:description" content="Comprehensive technology services portfolio with AI, cloud, security, and emerging technology solutions." />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Revolutionary AI-Powered Solutions
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    200+ Real Micro SaaS
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">
                    Services Portfolio
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Discover our comprehensive portfolio of cutting-edge AI, quantum computing, blockchain, and emerging technology solutions. 
                  Not mockups - real, working services with proven ROI.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center text-cyan-400">
                    <Check className="w-5 h-5 mr-2" />
                    <span className="text-sm">200+ Real Services</span>
                  </div>
                  <div className="flex items-center text-fuchsia-400">
                    <Check className="w-5 h-5 mr-2" />
                    <span className="text-sm">600%+ Average ROI</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Check className="w-5 h-5 mr-2" />
                    <span className="text-sm">14-Day Free Trials</span>
                  </div>
                  <div className="flex items-center text-purple-400">
                    <Check className="w-5 h-5 mr-2" />
                    <span className="text-sm">24/7 AI Support</span>
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                    <span className="text-white font-semibold">{contactInfo.mobile}</span>
                    <span className="text-gray-400 text-sm">Available 24/7</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-6 h-6 text-purple-400 mb-2" />
                    <span className="text-white font-semibold">{contactInfo.email}</span>
                    <span className="text-gray-400 text-sm">Response within 2 hours</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-6 h-6 text-green-400 mb-2" />
                    <span className="text-white font-semibold text-sm">{contactInfo.address}</span>
                    <span className="text-gray-400 text-sm">Delaware, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-16 bg-gradient-to-br from-gray-900/30 to-black/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">
                  Comprehensive
                </span> Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI and machine learning to quantum computing and emerging technologies, we cover every aspect of modern business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCategories.map((category) => {
                const categoryServices = getServicesByCategory(category.name);
                const realServicesCount = categoryServices.filter(s => s.realService).length;
                
                return (
                  <div key={category.name} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                      <div className="text-3xl mb-4">{category.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-semibold">{realServicesCount} Real Services</span>
                        <span className="text-gray-400 text-sm">Starting from ${category.minPrice}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Services Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                  Most Popular
                </span> AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most sought-after solutions that are transforming industries and driving unprecedented business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service) => (
                <div key={service.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">{service.category}</span>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Setup: {service.setupTime}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Target className="w-4 h-4 mr-2" />
                        <span>ROI: {service.roi}</span>
                      </div>
                    </div>
                    <a 
                      href={service.link}
                      className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://ziontechgroup.com/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                View All Popular Services <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Filters and Search Section */}
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Filters Row */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent pr-10"
                  >
                    {serviceCategories.map((category) => (
                      <option key={category.name} value={category.name}>{category.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>

                {/* Price Range Filter */}
                <div className="relative">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="appearance-none bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent pr-10"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>

                {/* Sort Options */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent pr-10"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-gray-900/50 border border-gray-600 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Results Count */}
                <div className="ml-auto text-gray-400 text-sm">
                  {filteredServices.length} services found
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Complete <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Services Portfolio
                </span>
              </h2>
              <p className="text-lg text-gray-300">Explore our comprehensive range of micro SaaS solutions</p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold text-green-400">{service.price}{service.period}</span>
                      <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                      <span className="text-sm text-gray-400">{service.trialDays} day trial</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group"
                  >
                    <div className="flex items-start space-x-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        {service.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-300 leading-relaxed">{service.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-green-400 mb-2">{service.price}{service.period}</div>
                            <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                              {service.category}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                            <div className="space-y-2">
                              {service.features.slice(0, 4).map((feature, index) => (
                                <div key={index} className="flex items-center text-sm text-gray-300">
                                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Quick Info:</h4>
                            <div className="space-y-2 text-sm text-gray-300">
                              <div>Setup: {service.setupTime}</div>
                              <div>Trial: {service.trialDays} days</div>
                              <div>ROI: {service.roi}</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <a
                            href={service.link}
                            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{service.trialDays} day trial</span>
                            <span>•</span>
                            <span>{service.setupTime} setup</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your search criteria or filters</p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('All');
                  }}
                  variant="primary"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Transform
                </span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses that have already revolutionized their operations with our cutting-edge solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="group transform hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                  <Rocket className="w-5 h-5 ml-2 group-hover:translate-y-[-2px] transition-transform" />
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="group transform hover:scale-105 transition-all duration-300"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-4">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.mobile}
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}