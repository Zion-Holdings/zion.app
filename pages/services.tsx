import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import AdvancedFuturisticCard from '../components/ui/AdvancedFuturisticCard';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

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
    filteredServices = enhancedRealMicroSaasServices.filter(service => 
      service.category === selectedCategory
    );
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = filteredServices.filter(service => {
      const price = parseInt(service.price.replace('$', ''));
      return price >= min && (max === Infinity ? true : price <= max);
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

  const popularServices = enhancedRealMicroSaasServices.filter(service => service.popular).slice(0, 6);

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions with unprecedented computing power',
      icon: <Brain className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Quantum Computing & AI').length
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <Factory className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0').length
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskConical className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Healthcare & Biotechnology').length
    },
    {
      name: 'Cybersecurity',
      description: 'Future-proof security solutions with quantum-resistant encryption',
      icon: <Shield className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Cybersecurity').length
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial optimization and risk management',
      icon: <DollarSign className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Financial Technology').length
    },
    {
      name: 'Space & Aerospace',
      description: 'AI-powered space exploration and satellite management',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Aerospace & Space Technology').length
    },
    {
      name: 'Metaverse & VR/AR',
      description: 'Complete metaverse development and immersive experiences',
      icon: <Globe className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Metaverse & VR/AR').length
    },
    {
      name: 'Blockchain & DeFi',
      description: 'Decentralized finance and smart contract platforms',
      icon: <Database className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Blockchain & DeFi').length
    },
    {
      name: 'IoT & Smart Cities',
      description: 'Intelligent IoT platforms for smart city management',
      icon: <Smartphone className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'IoT & Smart Cities').length
    },
    {
      name: 'Edge Computing',
      description: 'Distributed edge computing for ultra-low latency applications',
      icon: <Zap className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Edge Computing').length
    }
  ];

  return (
    <UltraFuturisticBackground variant="holographic" intensity="medium">
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | 500+ Revolutionary Solutions</title>
        <meta name="description" content="Explore 500+ revolutionary micro SaaS services including Quantum AI, Autonomous Systems, Biomedical Research, and emerging technologies. Start your 30-day free trial today." />
        <meta name="keywords" content="micro saas services, quantum ai, autonomous systems, biomedical research, ai services, quantum computing, cybersecurity, fintech, space technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group | 500+ Revolutionary Solutions" />
        <meta property="og:description" content="Explore 500+ revolutionary micro SaaS services including Quantum AI, Autonomous Systems, and emerging technologies." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SaaS Services - Zion Tech Group | 500+ Revolutionary Solutions" />
        <meta name="twitter:description" content="Explore 500+ revolutionary micro SaaS services including Quantum AI, Autonomous Systems, and emerging technologies." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              500+ Revolutionary
            </span>
            <br />
            <span className="text-white">Micro SaaS Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover cutting-edge micro SaaS solutions powered by Quantum AI, Autonomous Systems, 
            and emerging technologies. Transform your business with unprecedented innovation.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for services, features, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{enhancedRealMicroSaasServices.length}+</div>
              <div className="text-sm text-gray-400">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">30</div>
              <div className="text-sm text-gray-400">Day Free Trials</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">99.99%</div>
              <div className="text-sm text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">24/7</div>
              <div className="text-sm text-gray-400">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/20 via-purple-900/10 to-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {enhancedCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-4 rounded-xl backdrop-blur-xl border transition-all duration-300 text-center group ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/30 text-white'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`${selectedCategory === category.name ? 'text-cyan-400' : 'text-gray-400'} group-hover:text-cyan-400 transition-colors`}>
                    {category.icon}
                  </div>
                  <div className="text-sm font-medium">{category.name}</div>
                  <div className="text-xs text-gray-500">{category.count} services</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Left side - Filters */}
            <div className="flex flex-wrap items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showFilters && (
                <div className="flex flex-wrap items-center space-x-4">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value} className="bg-gray-800 text-white">
                        {range.label}
                      </option>
                    ))}
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Right side - View mode */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-white/10 text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-white/10 text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      {selectedCategory === 'All' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Popular
              </span> Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service, index) => (
                <AdvancedFuturisticCard
                  key={service.id}
                  title={service.name}
                  description={service.description}
                  icon={service.icon}
                  price={service.price}
                  period={service.period}
                  features={service.features.slice(0, 5)}
                  link={service.link}
                  variant={service.variant as any}
                  popular={service.popular}
                  badge={service.category}
                  stats={[
                    {
                      label: 'ROI',
                      value: service.roi.split(' ')[0] + ' ROI',
                      icon: <TrendingUp className="w-4 h-4" />
                    },
                    {
                      label: 'Setup',
                      value: service.setupTime,
                      icon: <Zap className="w-4 h-4" />
                    }
                  ]}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              {selectedCategory === 'All' ? 'All Services' : selectedCategory}
              <span className="text-gray-400 text-lg ml-2">({filteredServices.length} services)</span>
            </h2>
            
            {selectedCategory !== 'All' && (
              <Button
                onClick={() => setSelectedCategory('All')}
                variant="secondary"
                size="sm"
                className="group"
              >
                View All Categories
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setPriceRange('All');
                }}
                variant="primary"
              >
                Browse All Services
              </Button>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredServices.map((service, index) => (
                <AdvancedFuturisticCard
                  key={service.id}
                  title={service.name}
                  description={service.description}
                  icon={service.icon}
                  price={service.price}
                  period={service.period}
                  features={service.features.slice(0, 5)}
                  link={service.link}
                  variant={service.variant as any}
                  popular={service.popular}
                  badge={service.category}
                  stats={[
                    {
                      label: 'ROI',
                      value: service.roi.split(' ')[0] + ' ROI',
                      icon: <TrendingUp className="w-4 h-4" />
                    },
                    {
                      label: 'Setup',
                      value: service.setupTime,
                      icon: <Zap className="w-4 h-4" />
                    }
                  ]}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/20 via-blue-900/10 to-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your 30-day free trial today and experience the future of business technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              href="/contact" 
              variant="primary" 
              size="lg"
              className="group"
            >
              Start Free Trial
              <Rocket className="ml-2 group-hover:translate-y-[-2px] transition-transform" />
            </Button>
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg"
              className="group"
            >
              Schedule Demo
              <Calendar className="ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UltraFuturisticBackground>
  );
}