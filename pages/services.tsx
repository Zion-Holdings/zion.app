import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, Satellite, Dna, Leaf, Factory, Car, Microscope, Lightbulb } from 'lucide-react';
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
    { value: '201-500', label: '$201 - $500' },
    { value: '501+', label: '$501+' }
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

  // Get variant for service category
  const getCategoryVariant = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return 'neural';
      case 'Quantum Computing':
        return 'quantum';
      case 'Space Technology':
        return 'space';
      case 'Biotechnology':
        return 'biotech';
      case 'Renewable Energy':
        return 'energy';
      case 'Advanced Manufacturing':
        return 'holographic';
      case 'Autonomous Vehicles':
        return 'cyberpunk';
      case 'Blockchain & Web3':
        return 'quantum';
      case 'Metaverse & VR/AR':
        return 'holographic';
      case 'IoT & Connected Devices':
        return 'neural';
      case 'Cybersecurity':
        return 'cyberpunk';
      case 'Healthcare & Life Sciences':
        return 'biotech';
      case 'Financial Technology':
        return 'quantum';
      default:
        return 'neural';
    }
  };

  return (
    <EnhancedFuturisticBackground variant="quantum" intensity="medium">
      <div className="min-h-screen">
        <Head>
          <title>Complete Services Portfolio | Zion Tech Group - AI, Cloud, Security & More</title>
          <meta name="description" content="Explore our complete portfolio of 150+ micro SaaS services. AI solutions, quantum computing, space technology, biotechnology, renewable energy, and emerging technologies." />
          <meta name="keywords" content="AI services, quantum computing, space technology, biotechnology, renewable energy, autonomous vehicles, micro SaaS, business automation" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Complete Services Portfolio | Zion Tech Group" />
          <meta property="og:description" content="Comprehensive technology services portfolio with AI, quantum computing, space technology, and emerging technology solutions." />
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
                  <span>150+ Real Micro SaaS Services</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Complete Services
                  </span>
                  <br />
                  <span className="text-white">Portfolio</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Discover our comprehensive collection of cutting-edge micro SaaS services. 
                  From AI and quantum computing to space technology and biotechnology, we're building the future.
                </p>

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-600/30 max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <Phone className="w-5 h-5 text-cyan-400 mb-2" />
                      <div className="text-white font-semibold text-sm">Mobile</div>
                      <div className="text-gray-300 text-sm">{contactInfo.mobile}</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <Mail className="w-5 h-5 text-purple-400 mb-2" />
                      <div className="text-white font-semibold text-sm">Email</div>
                      <div className="text-gray-300 text-sm">{contactInfo.email}</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <MapPin className="w-5 h-5 text-green-400 mb-2" />
                      <div className="text-white font-semibold text-sm">Address</div>
                      <div className="text-gray-300 text-xs">{contactInfo.address}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-yellow-400">Popular</span> Services
              </h2>
              <p className="text-lg text-gray-300">
                Our most requested and highly-rated solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.slice(0, 6).map((service, index) => (
                <EnhancedFuturisticCard
                  key={service.id}
                  variant={getCategoryVariant(service.category)}
                  intensity="medium"
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
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.tagline}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-green-400">{service.price}</div>
                    <div className="text-gray-400 text-sm">{service.period}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {service.trialDays} day trial
                    </div>
                    <Button
                      href={service.link}
                      variant="primary"
                      size="sm"
                      className="text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-gradient-to-r from-slate-800/30 to-slate-700/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-sm"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                      : 'bg-slate-700/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                      : 'bg-slate-700/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-xl transition-colors border border-slate-600/30"
              >
                <Filter className="w-5 h-5" />
                Filters
                {showFilters ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-white font-medium mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-sm"
                  >
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-white font-medium mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-sm"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-white font-medium mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-sm"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All <span className="text-cyan-400">Services</span>
              </h2>
              <p className="text-lg text-gray-300">
                {filteredServices.length} services found
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <EnhancedFuturisticCard
                    key={service.id}
                    variant={getCategoryVariant(service.category)}
                    intensity="medium"
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
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.tagline}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-green-400">{service.price}</div>
                      <div className="text-gray-400 text-sm">{service.period}</div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        {service.trialDays} day trial
                      </div>
                      <Button
                        href={service.link}
                        variant="primary"
                        size="sm"
                        className="text-sm"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </EnhancedFuturisticCard>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredServices.map((service) => (
                  <EnhancedFuturisticCard
                    key={service.id}
                    variant={getCategoryVariant(service.category)}
                    intensity="low"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300 text-sm">{service.tagline}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 ml-auto">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-400">{service.price}</div>
                          <div className="text-gray-400 text-sm">{service.period}</div>
                        </div>
                        <Button
                          href={service.link}
                          variant="primary"
                          size="sm"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </EnhancedFuturisticCard>
                ))}
              </div>
            )}

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search criteria or filters
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('All');
                  }}
                  variant="secondary"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <EnhancedFuturisticCard
              variant="quantum"
              intensity="high"
              className="max-w-4xl mx-auto"
            >
              <div className="py-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to <span className="text-purple-400">Transform</span> Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get started with our cutting-edge solutions today. Our team of experts is ready to help you succeed.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    href="/contact" 
                    variant="primary" 
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <Button 
                    href={`tel:${contactInfo.mobile}`} 
                    variant="secondary" 
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Call Us
                    <Phone className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="mt-8 text-gray-400">
                  <p>Questions? Call us at {contactInfo.mobile} or email {contactInfo.email}</p>
                </div>
              </div>
            </EnhancedFuturisticCard>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}