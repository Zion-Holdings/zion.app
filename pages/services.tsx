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
    <EnhancedFuturisticBackground variant="neural-quantum" intensity="high">
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
                  Revolutionary Technology Portfolio
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    250+ Real Micro SaaS Services
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Discover our comprehensive portfolio of cutting-edge micro SaaS solutions. From AI-powered platforms to quantum computing services, 
                  we deliver real, functional tools that drive business growth and innovation.
                </p>

                {/* Contact Information Banner */}
                <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <Phone className="w-6 h-6 text-purple-400 mb-2" />
                      <span className="text-sm text-gray-300">Mobile</span>
                      <span className="text-lg font-semibold text-white">{contactInfo.mobile}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Mail className="w-6 h-6 text-purple-400 mb-2" />
                      <span className="text-sm text-gray-300">Email</span>
                      <span className="text-lg font-semibold text-white">{contactInfo.email}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MapPin className="w-6 h-6 text-purple-400 mb-2" />
                      <span className="text-sm text-gray-300">Address</span>
                      <span className="text-sm font-semibold text-white">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* Key Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">250+</div>
                    <div className="text-sm text-gray-300">Real Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">800%+</div>
                    <div className="text-sm text-gray-300">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">14 Days</div>
                    <div className="text-sm text-gray-300">Free Trial</div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    href="/contact" 
                    variant="primary" 
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Contact Sales Team
                  </Button>
                  <Button 
                    href="/pricing" 
                    variant="secondary" 
                    size="lg"
                    className="border-purple-500/30 text-purple-400 hover:bg-purple-500/20"
                  >
                    <DollarSign className="w-5 h-5 mr-2" />
                    View Pricing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Filters Section */}
        <section className="py-12 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-y border-gray-700/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                  />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                >
                  <option value="All">All Categories</option>
                  {serviceCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mt-6 text-center">
              <p className="text-gray-300">
                Showing <span className="text-purple-400 font-semibold">{filteredServices.length}</span> of <span className="text-purple-400 font-semibold">{expandedMicroSaasServices.length}</span> services
              </p>
              {searchQuery && (
                <p className="text-sm text-gray-400 mt-2">
                  Search results for: <span className="text-purple-400">"{searchQuery}"</span>
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Innovative Services Showcase */}
        <section className="py-16 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolutionary
                </span> Technology
              </h2>
              <p className="text-lg text-gray-300">Discover our industry-leading innovations that are reshaping the future</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '⚛️',
                  title: 'Quantum AI Training Platform',
                  description: '100x faster AI model training using quantum computing',
                  price: '$899/month',
                  category: 'Emerging Technologies',
                  color: 'from-purple-500 to-violet-600',
                  link: 'https://ziontechgroup.com/quantum-ai-training-platform',
                  badge: 'First to Market'
                },
                {
                  icon: '🧬',
                  title: 'AI Biomedical Research Platform',
                  description: '10x faster drug discovery with AI-powered research',
                  price: '$799/month',
                  category: 'AI & Machine Learning',
                  color: 'from-pink-500 to-rose-600',
                  link: 'https://ziontechgroup.com/ai-biomedical-research',
                  badge: 'Industry Pioneer'
                },
                {
                  icon: '🔐',
                  title: 'Quantum Cryptography Platform',
                  description: 'Future-proof quantum-resistant encryption',
                  price: '$499/month',
                  category: 'Emerging Technologies',
                  color: 'from-emerald-500 to-teal-600',
                  link: 'https://ziontechgroup.com/quantum-cryptography',
                  badge: 'Quantum Safe'
                },
                {
                  icon: '⚖️',
                  title: 'AI Legal Contract Analyzer',
                  description: '95% accuracy in legal contract risk detection',
                  price: '$299/month',
                  category: 'AI & Machine Learning',
                  color: 'from-indigo-500 to-purple-600',
                  link: 'https://ziontechgroup.com/ai-legal-contract-analyzer',
                  badge: '95% Accuracy'
                },
                {
                  icon: '💰',
                  title: 'Quantum Financial Modeling',
                  description: '100x faster financial calculations',
                  price: '$599/month',
                  category: 'Emerging Technologies',
                  color: 'from-yellow-500 to-orange-600',
                  link: 'https://ziontechgroup.com/quantum-financial-modeling',
                  badge: '100x Faster'
                },
                {
                  icon: '🌍',
                  title: 'AI Climate Prediction Engine',
                  description: '95% accuracy in extreme weather prediction',
                  price: '$399/month',
                  category: 'AI & Machine Learning',
                  color: 'from-green-500 to-emerald-600',
                  link: 'https://ziontechgroup.com/ai-climate-prediction',
                  badge: '95% Accuracy'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden"
                >
                  {/* Innovation Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    {service.badge}
                  </div>

                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                    <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <span className="text-sm text-gray-400">14 day trial</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-lg font-medium">
                <Sparkles className="w-5 h-5 mr-2" />
                Industry-leading innovation with 800%+ average ROI
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="py-16 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Most Popular Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our top-performing services trusted by thousands of businesses worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {popularServices.slice(0, 6).map((service) => (
                <Card key={service.id} className="group hover:scale-105 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">Popular</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>⚡ {service.setupTime}</span>
                      <span>🎯 {service.trialDays} day trial</span>
                    </div>
                    <Button 
                      href={service.link} 
                      variant="secondary" 
                      size="sm"
                      className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/20"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-6">
                Ready to explore our complete portfolio of 250+ services?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Sales Team
                </Button>
                <Button 
                  href="/pricing" 
                  variant="secondary" 
                  size="lg"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/20"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Pricing Plans
                </Button>
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