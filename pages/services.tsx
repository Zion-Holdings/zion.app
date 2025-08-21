import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, Filter as FilterIcon } from 'lucide-react';
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
    { value: '0-100', label: '$0 - $100' },
    { value: '101-200', label: '$101 - $200' },
    { value: '201-400', label: '$201 - $400' },
    { value: '401+', label: '$401+' }
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
    <EnhancedFuturisticBackground variant="holographic-matrix" intensity="medium">
      <div className="min-h-screen">
        <Head>
          <title>Complete Services Portfolio | Zion Tech Group - AI, Cloud, Security & More</title>
          <meta name="description" content="Explore our complete portfolio of 30+ micro SaaS services. AI solutions, cloud infrastructure, cybersecurity, data analytics, IoT, blockchain, and emerging technologies." />
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
                  Complete Technology Portfolio
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    30+ Real Micro SaaS
                  </span>
                  <br />
                  <span className="text-white">Services</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  From AI-powered automation to quantum computing, discover our comprehensive portfolio of 
                  real, functional micro SaaS solutions designed to transform your business.
                </p>

                {/* Contact Information Banner */}
                <EnhancedFuturisticCard 
                  variant="holographic" 
                  intensity="medium" 
                  className="max-w-4xl mx-auto mb-8"
                  background="glass"
                >
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                      <span className="text-sm text-gray-400">Mobile</span>
                      <span className="text-white font-semibold">{contactInfo.mobile}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Mail className="w-6 h-6 text-purple-400 mb-2" />
                      <span className="text-sm text-gray-400">Email</span>
                      <span className="text-white font-semibold">{contactInfo.email}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MapPin className="w-6 h-6 text-green-400 mb-2" />
                      <span className="text-sm text-gray-400">Address</span>
                      <span className="text-white font-semibold text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
                </EnhancedFuturisticCard>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">30+</div>
                  <div className="text-gray-400 text-sm">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">8</div>
                  <div className="text-gray-400 text-sm">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">14</div>
                  <div className="text-gray-400 text-sm">Day Trials</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Most Popular
                </span> Services
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our most requested and highest-rated solutions that deliver exceptional value to businesses worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service, index) => (
                <EnhancedFuturisticCard 
                  key={service.id}
                  variant={index % 3 === 0 ? 'holographic' : index % 3 === 1 ? 'cyberpunk' : 'quantum'}
                  intensity="medium"
                  className="h-full group"
                  background="glass"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <div className="flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                        <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                        <span className="text-yellow-400 text-xs font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-gray-400 text-sm">{service.period}</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {service.trialDays} day trial
                    </div>
                    <Button 
                      href={service.link} 
                      variant="ghost" 
                      size="sm"
                      className="text-cyan-400 hover:bg-cyan-400/10"
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

        {/* Filters and Search Section */}
        <section className="py-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <EnhancedFuturisticCard 
              variant="neural" 
              intensity="low"
              className="max-w-6xl mx-auto"
              background="glass"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex-shrink-0">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 transition-all"
                  >
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Filter */}
                <div className="flex-shrink-0">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/20 transition-all"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="flex-shrink-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400/20 transition-all"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.value === 'name' ? 'Name A-Z' : option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex-shrink-0">
                  <div className="flex bg-gray-800/50 border border-gray-700 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all ${
                        viewMode === 'grid' 
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all ${
                        viewMode === 'list' 
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </EnhancedFuturisticCard>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {filteredServices.length} services found. Explore our complete portfolio to find the perfect solution for your business.
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <EnhancedFuturisticCard 
                    key={service.id}
                    variant={index % 4 === 0 ? 'holographic' : index % 4 === 1 ? 'cyberpunk' : index % 4 === 2 ? 'quantum' : 'neural'}
                    intensity="medium"
                    className="h-full group"
                    background="glass"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <div className="flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                          <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                          <span className="text-yellow-400 text-xs font-medium">Popular</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-gray-400 text-sm">{service.period}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        {service.trialDays} day trial
                      </div>
                      <Button 
                        href={service.link} 
                        variant="ghost" 
                        size="sm"
                        className="text-cyan-400 hover:bg-cyan-400/10"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </EnhancedFuturisticCard>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service, index) => (
                  <EnhancedFuturisticCard 
                    key={service.id}
                    variant={index % 4 === 0 ? 'holographic' : index % 4 === 1 ? 'cyberpunk' : index % 4 === 2 ? 'quantum' : 'neural'}
                    intensity="low"
                    className="group"
                    background="glass"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="text-5xl">{service.icon}</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-400 text-lg mb-2">{service.tagline}</p>
                          </div>
                          {service.popular && (
                            <div className="flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                              <span className="text-yellow-400 text-sm font-medium">Popular</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <span className="text-gray-400 text-sm">Category:</span>
                            <span className="text-white ml-2">{service.category}</span>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">Setup Time:</span>
                            <span className="text-white ml-2">{service.setupTime}</span>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">ROI:</span>
                            <span className="text-green-400 ml-2">{service.roi}</span>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">Market Size:</span>
                            <span className="text-white ml-2">{service.marketSize}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="text-3xl font-bold text-cyan-400">{service.price}</div>
                            <div className="text-gray-400">{service.period}</div>
                            <div className="text-gray-500 text-sm">{service.trialDays} day trial</div>
                          </div>
                          <Button 
                            href={service.link} 
                            variant="primary" 
                            size="sm"
                            className="group"
                          >
                            Get Started
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </EnhancedFuturisticCard>
                ))}
              </div>
            )}

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or filters to find what you're looking for.
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
              variant="quantum-cyberpunk" 
              intensity="high"
              className="max-w-4xl mx-auto"
              background="gradient"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Transform
                </span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your journey with our 14-day free trial. No credit card required, instant access to all features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="lg"
                  className="group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  href="/contact" 
                  variant="secondary" 
                  size="lg"
                >
                  Contact Sales
                </Button>
              </div>
              
              {/* Contact Information */}
              <div className="pt-8 border-t border-gray-700">
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-xs">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </EnhancedFuturisticCard>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}