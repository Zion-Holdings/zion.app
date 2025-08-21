import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-real-micro-saas-services';

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
    { value: '201-500', label: '$201 - $500' },
    { value: '501-1000', label: '$501 - $1,000' },
    { value: '1001+', label: '$1,001+' }
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
      name: 'AI & Content Creation',
      description: 'Revolutionary AI-powered content creation and media production',
      icon: <Brain className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'AI & Content Creation' || s.category === 'AI & Media').length
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered medical diagnostics and quantum drug discovery',
      icon: <FlaskConical className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Healthcare & AI' || s.category === 'Biotechnology & Quantum').length
    },
    {
      name: 'Blockchain & Web3',
      description: 'Next-generation blockchain solutions and DeFi platforms',
      icon: <Globe2 className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Blockchain & Web3' || s.category === 'DeFi & Cryptocurrency').length
    },
    {
      name: 'Quantum Computing',
      description: 'Revolutionary quantum solutions for cryptography and finance',
      icon: <Atom className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Cybersecurity & Quantum' || s.category === 'Financial Technology' || s.category === 'Biotechnology & Quantum').length
    },
    {
      name: 'Autonomous Systems',
      description: 'AI-powered logistics and energy management platforms',
      icon: <Factory className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Logistics & Supply Chain' || s.category === 'Energy & Sustainability').length
    },
    {
      name: 'Emerging Technologies',
      description: 'Metaverse development and smart city IoT solutions',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Metaverse & VR/AR' || s.category === 'IoT & Smart Cities' || s.category === 'Climate Tech & AI').length
    }
  ];

  return (
    <>
      <Head>
        <title>Revolutionary Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="Discover 500+ revolutionary micro SaaS services including quantum AI, autonomous systems, blockchain solutions, and emerging technologies. Start your 30-day free trial today." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, blockchain, autonomous systems, healthcare AI, DeFi, metaverse, smart cities" />
        <meta property="og:title" content="Revolutionary Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="500+ cutting-edge micro SaaS services with quantum AI, autonomous systems, and emerging technologies. 30-day free trials available." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <QuantumHolographicBackground>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    500+ Revolutionary
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    Micro SaaS Services
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Discover the future of business with our cutting-edge micro SaaS solutions. 
                  From quantum AI to autonomous systems, we're revolutionizing every industry.
                </p>
              </div>

              {/* Contact Information Banner */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Mobile</p>
                      <p className="text-white font-semibold">{contactInfo.mobile}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-semibold">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white font-semibold text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-400">Services Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.99%</div>
                  <div className="text-gray-400">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">30 Days</div>
                  <div className="text-gray-400">Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">2500%+</div>
                  <div className="text-gray-400">Average ROI</div>
                </div>
              </div>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="px-4 sm:px-6 lg:px-8 mb-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Search */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex-shrink-0">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="All">All Categories</option>
                      {serviceCategories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div className="flex-shrink-0">
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex-shrink-0">
                    <div className="flex bg-slate-800/50 border border-slate-600/30 rounded-xl p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`px-3 py-2 rounded-lg transition-colors ${
                          viewMode === 'grid' 
                            ? 'bg-blue-600 text-white' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`px-3 py-2 rounded-lg transition-colors ${
                          viewMode === 'list' 
                            ? 'bg-blue-600 text-white' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Explore Our Service Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enhancedCategories.map((category) => (
                  <div
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className="group cursor-pointer"
                  >
                    <QuantumHolographicCard className="h-full">
                      <div className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                        <p className="text-gray-400 mb-4">{category.description}</p>
                        <div className="text-2xl font-bold text-blue-400">{category.count}</div>
                        <div className="text-sm text-gray-500">Services Available</div>
                      </div>
                    </QuantumHolographicCard>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid/List */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {selectedCategory === 'All' ? 'All Services' : `${selectedCategory} Services`}
                </h2>
                <div className="text-gray-400">
                  {filteredServices.length} services found
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => (
                    <QuantumHolographicCard key={service.id} className="h-full">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{service.icon}</div>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                              Popular
                            </div>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                        
                        <div className="mb-4">
                          <div className="text-2xl font-bold text-blue-400 mb-1">
                            {service.price}
                            <span className="text-gray-500 text-sm">{service.period}</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            {service.trialDays} days free trial • {service.setupTime} setup
                          </div>
                        </div>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                        <div className="mb-4">
                          <div className="text-xs text-gray-500 mb-2">Key Features:</div>
                          <div className="space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-400">
                                <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">
                            <div>ROI: {service.roi}</div>
                            <div>Market: {service.marketSize}</div>
                          </div>
                          <Button
                            href={service.link}
                            variant="primary"
                            size="sm"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </QuantumHolographicCard>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredServices.map((service) => (
                    <QuantumHolographicCard key={service.id}>
                      <div className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl flex-shrink-0">{service.icon}</div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                              {service.popular && (
                                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                  Popular
                                </div>
                              )}
                            </div>
                            
                            <p className="text-gray-400 text-sm mb-2">{service.tagline}</p>
                            <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div>
                                <div className="text-lg font-bold text-blue-400">
                                  {service.price}
                                  <span className="text-gray-500 text-sm">{service.period}</span>
                                </div>
                                <div className="text-xs text-gray-500">
                                  {service.trialDays} days free trial
                                </div>
                              </div>
                              
                              <div>
                                <div className="text-sm text-gray-500 mb-1">Setup Time</div>
                                <div className="text-white">{service.setupTime}</div>
                              </div>
                              
                              <div>
                                <div className="text-sm text-gray-500 mb-1">ROI</div>
                                <div className="text-green-400 text-sm">{service.roi}</div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="text-xs text-gray-500">
                                <div>Market: {service.marketSize} • Growth: {service.growthRate}</div>
                                <div>Category: {service.category}</div>
                              </div>
                              <Button
                                href={service.link}
                                variant="primary"
                                size="sm"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                              >
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </QuantumHolographicCard>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Contact Section */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <QuantumHolographicCard>
                <div className="p-8 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Join thousands of businesses already using our revolutionary micro SaaS services. 
                    Start your 30-day free trial today and experience the future of business technology.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                      <p className="text-blue-400 font-semibold">{contactInfo.mobile}</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                      <p className="text-purple-400 font-semibold">{contactInfo.email}</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                      <p className="text-green-400 font-semibold text-sm">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      href="/contact"
                      variant="primary"
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Get Started Today
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button
                      href="/pricing"
                      variant="secondary"
                      size="lg"
                      className="border border-slate-600 text-white hover:bg-slate-700"
                    >
                      View Pricing
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </QuantumHolographicCard>
            </div>
          </section>
        </div>
      </QuantumHolographicBackground>
    </>
  );
}