import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
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

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions with quantum computing integration',
      icon: <Brain className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'AI & Machine Learning').length,
      color: 'from-fuchsia-500 to-purple-600'
    },
    {
      name: 'Blockchain & Web3',
      description: 'Future-proof blockchain with quantum security',
      icon: <Globe2 className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Blockchain & Web3').length,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Quantum Computing',
      description: 'Revolutionary quantum solutions for complex problems',
      icon: <Atom className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Quantum Computing').length,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced security with AI and quantum encryption',
      icon: <Shield className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Cybersecurity').length,
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'Biomedical & Healthcare',
      description: 'AI-powered medical research and drug discovery',
      icon: <Dna className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Biomedical & Healthcare').length,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial modeling and trading',
      icon: <DollarSign className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Financial Technology').length,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Space Technology',
      description: 'AI and quantum solutions for space exploration',
      icon: <Rocket className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Space Technology').length,
      color: 'from-violet-500 to-purple-600'
    },
    {
      name: 'Environmental Technology',
      description: 'Climate modeling and environmental analytics',
      icon: <Leaf className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Environmental Technology').length,
      color: 'from-teal-500 to-green-600'
    }
  ];

  return (
    <EnhancedFuturisticBackground variant="quantum-holographic-advanced" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Services - Zion Tech Group | 300+ AI & Quantum Computing Solutions</title>
          <meta name="description" content="Explore 300+ real micro SaaS services powered by AI, quantum computing, blockchain, and cutting-edge technology. Transform your business with Zion Tech Group." />
          <meta name="keywords" content="AI services, quantum computing, blockchain, cybersecurity, micro SaaS, Zion Tech Group" />
          <meta property="og:title" content="Services - Zion Tech Group | AI & Quantum Computing Solutions" />
          <meta property="og:description" content="300+ real micro SaaS services with AI, quantum computing, and cutting-edge technology." />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/40 to-cyan-900/40 z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                300+ Real Micro SaaS Services
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with production-ready solutions powered by 
              <span className="text-cyan-400 font-semibold"> AI</span>, 
              <span className="text-purple-400 font-semibold"> Quantum Computing</span>, and 
              <span className="text-green-400 font-semibold"> Cutting-edge Technology</span>
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              From AI content generation to quantum blockchain platforms, discover the tools that deliver 1000%+ ROI. 
              All services include 14-day free trials and enterprise-grade support.
            </p>

            {/* Contact Information Banner */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 max-w-4xl mx-auto mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-white font-medium">{contactInfo.mobile}</div>
                  <div className="text-gray-300 text-sm">24/7 Support</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-white font-medium">{contactInfo.email}</div>
                  <div className="text-gray-300 text-sm">Quick Response</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-white font-medium text-sm">{contactInfo.address}</div>
                  <div className="text-gray-300 text-sm">Global Presence</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="https://ziontechgroup.com/contact"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button
                href="https://ziontechgroup.com/pricing"
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Explore Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Service Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover solutions across all major technology sectors, each designed to deliver exceptional value and ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {enhancedCategories.map((category, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl bg-gradient-to-br ${category.color} border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white">{category.icon}</div>
                    <div className="text-white text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black/50 via-purple-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>

              {/* Filter Toggle */}
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  variant="secondary"
                  size="sm"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>

                {/* View Mode Toggle */}
                <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-6 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="All">All Categories</option>
                      {enhancedCategories.map((category) => (
                        <option key={category.name} value={category.name}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Price Range</label>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort Options */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-gray-300">
                Showing <span className="text-white font-semibold">{filteredServices.length}</span> services
                {selectedCategory !== 'All' && (
                  <span> in <span className="text-white font-semibold">{selectedCategory}</span></span>
                )}
              </div>
              
              {/* Quick Actions */}
              <div className="flex items-center gap-4">
                <Button
                  href="https://ziontechgroup.com/contact"
                  variant="secondary"
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
                <Button
                  href="https://ziontechgroup.com/pricing"
                  variant="primary"
                  size="sm"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  View Pricing
                </Button>
              </div>
            </div>

            {/* Services Display */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredServices.map((service, index) => (
                  <Card
                    key={service.id || index}
                    className="bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="p-6">
                      <div className="text-3xl mb-4">{service.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-cyan-400 font-bold">{service.price}</div>
                        {service.popular && (
                          <div className="flex items-center text-yellow-400 text-sm">
                            <Star className="w-4 h-4 fill-current mr-1" />
                            Popular
                          </div>
                        )}
                      </div>
                      
                      <div className="text-xs text-gray-400 mb-4">
                        <div className="flex items-center mb-1">
                          <Clock className="w-3 h-3 mr-1" />
                          Setup: {service.setupTime}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          Trial: {service.trialDays} days
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-xs text-gray-400 mb-2">Category:</div>
                        <div className="text-xs text-white bg-white/10 px-2 py-1 rounded-full inline-block">
                          {service.category}
                        </div>
                      </div>

                      <Button
                        href={service.link}
                        variant="secondary"
                        size="sm"
                        className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredServices.map((service, index) => (
                  <div
                    key={service.id || index}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-4xl flex-shrink-0">{service.icon}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                        </div>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                        
                        <div className="flex items-center gap-6 mb-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            Setup: {service.setupTime}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Trial: {service.trialDays} days
                          </div>
                          <div className="flex items-center">
                            <Target className="w-4 h-4 mr-1" />
                            {service.category}
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <Button
                            href={service.link}
                            variant="secondary"
                            size="sm"
                            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                          >
                            Get Started
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          
                          {service.popular && (
                            <div className="flex items-center text-yellow-400 text-sm">
                              <Star className="w-4 h-4 fill-current mr-1" />
                              Popular Choice
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search criteria or browse all our services.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('All');
                  }}
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  View All Services
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black/50 via-purple-900/20 to-cyan-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already leveraging our revolutionary technology solutions. 
              Start your 14-day free trial today and experience the power of AI, quantum computing, and cutting-edge innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                href="https://ziontechgroup.com/contact"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button
                href="https://ziontechgroup.com/pricing"
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </div>

            {/* Final Contact Information */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-white font-medium">{contactInfo.mobile}</div>
                  <div className="text-gray-300 text-sm">24/7 Support</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-white font-medium">{contactInfo.email}</div>
                  <div className="text-gray-300 text-sm">Quick Response</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-white font-medium text-sm">{contactInfo.address}</div>
                  <div className="text-gray-300 text-sm">Global Presence</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}