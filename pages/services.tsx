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
                  🚀 300+ Real Micro SaaS Services Available Now
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Complete Services
                  <span className="block text-6xl md:text-8xl bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Discover our comprehensive portfolio of cutting-edge micro SaaS services. 
                  From quantum AI to blockchain solutions, every service is production-ready and battle-tested.
                  <span className="block text-lg text-cyan-400 mt-4">
                    💰 Average ROI: 1000%+ | 🚀 30-Day Free Trials | 🔒 Quantum-Safe Security
                  </span>
                </p>

                {/* Contact Information Banner */}
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-4">Need Help Choosing the Right Service?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">Call: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">+1 302 464 0950</a></span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">kleber@ziontechgroup.com</a></span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">Address: <span className="text-cyan-400 font-medium">364 E Main St STE 1008 Middletown DE 19709</span></span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    href="/contact" 
                    variant="primary" 
                    size="lg"
                    className="group"
                  >
                    Get Free Consultation
                    <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button 
                    href="tel:+13024640950" 
                    variant="secondary" 
                    size="lg"
                    className="group"
                  >
                    Call Now
                    <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { value: '300+', label: 'Real Services', color: 'text-cyan-400' },
                  { value: '30', label: 'Day Trials', color: 'text-fuchsia-400' },
                  { value: '1000%+', label: 'Average ROI', color: 'text-blue-400' },
                  { value: '24/7', label: 'Support', color: 'text-green-400' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Service Categories */}
        <section className="py-16 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Revolutionary Service Categories
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                From quantum computing to AI-powered solutions, we offer the most cutting-edge technology 
                services that will future-proof your business and drive exponential growth.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: '🤖', title: 'AI & ML', count: '45+', color: 'from-fuchsia-500 to-purple-600' },
                { icon: '🔐', title: 'Cybersecurity', count: '28+', color: 'from-red-500 to-pink-600' },
                { icon: '📊', title: 'Data Analytics', count: '32+', color: 'from-emerald-500 to-teal-600' },
                { icon: '☁️', title: 'Cloud & IoT', count: '38+', color: 'from-cyan-500 to-blue-600' },
                { icon: '🔗', title: 'Blockchain', count: '25+', color: 'from-purple-500 to-indigo-600' },
                { icon: '🚚', title: 'Supply Chain', count: '22+', color: 'from-teal-500 to-cyan-600' },
                { icon: '⚡', title: 'Energy', count: '18+', color: 'from-yellow-500 to-orange-600' },
                { icon: '💳', title: 'FinTech', count: '31+', color: 'from-violet-500 to-purple-600' }
              ].map((category, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl p-4 text-center transform group-hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-purple-500/50">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <div className="text-sm font-medium text-white mb-1">{category.title}</div>
                    <div className={`text-xs font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.count}
                    </div>
                  </div>
                </div>
              ))}
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
                      <option key={category} value={category}>{category}</option>
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
        {popularServices.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Most Popular
                  </span> Services
                </h2>
                <p className="text-lg text-gray-300">Our most requested and highly-rated solutions</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularServices.slice(0, 6).map((service) => (
                  <div
                    key={service.id}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden"
                  >
                    {/* Popular Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 inline mr-1" />
                      Popular
                    </div>

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
            </div>
          </section>
        )}

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

        {/* Enhanced Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses that have already revolutionized their operations with our 
                cutting-edge micro SaaS solutions. Get started today with a free consultation.
              </p>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium text-lg">
                    +1 302 464 0950
                  </a>
                  <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium text-lg">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm">
                  <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <span className="text-emerald-400 font-medium text-sm">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                  <p className="text-gray-400 text-sm mt-2">Headquarters</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="lg"
                  className="group"
                >
                  Schedule Free Consultation
                  <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
                <Button 
                  href="tel:+13024640950" 
                  variant="secondary" 
                  size="lg"
                  className="group"
                >
                  Call Now
                  <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}