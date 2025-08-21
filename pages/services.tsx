import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
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
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions with unprecedented computing power',
      icon: <Brain className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Quantum Computing' || s.category === 'AI & Machine Learning').length
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <Factory className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0' || s.category === 'Robotics & Automation').length
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskConical className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Healthcare & Biotechnology').length
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial optimization and risk assessment',
      icon: <DollarSign className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Financial Technology').length
    },
    {
      name: 'Cybersecurity & Defense',
      description: 'Quantum-resistant security and AI-powered threat detection',
      icon: <Shield className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Cybersecurity').length
    },
    {
      name: 'Space & Aerospace',
      description: 'AI-powered space exploration and satellite management',
      icon: <Rocket className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Aerospace & Space Technology').length
    }
  ];

  // Featured revolutionary services
  const featuredServices = [
    {
      name: 'Quantum AI Cognitive Platform',
      description: 'Revolutionary quantum AI platform combining quantum computing with advanced cognitive AI for unprecedented problem-solving capabilities.',
      icon: '🧠',
      price: '$1,299/month',
      category: 'Quantum Computing',
      features: ['Quantum-enhanced neural networks', 'Cognitive reasoning engine', 'Multi-dimensional problem solving'],
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      popular: true
    },
    {
      name: 'Autonomous AI Factory',
      description: 'Complete autonomous manufacturing system powered by AI that runs 24/7 with zero human intervention.',
      icon: '🏭',
      price: '$2,499/month',
      category: 'Manufacturing & Industry 4.0',
      features: ['Fully autonomous operation', 'AI-powered quality control', 'Predictive maintenance'],
      link: 'https://ziontechgroup.com/autonomous-ai-factory',
      popular: true
    },
    {
      name: 'Quantum Cybersecurity Fortress',
      description: 'Future-proof cybersecurity using quantum-resistant encryption and AI-powered threat detection.',
      icon: '🛡️',
      price: '$1,599/month',
      category: 'Cybersecurity',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture'],
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      popular: true
    }
  ];

  return (
    <QuantumHolographicBackground variant="quantum-holographic" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Micro SaaS Services - Zion Tech Group | Revolutionary AI & Technology Solutions</title>
          <meta name="description" content="Explore our comprehensive portfolio of 500+ revolutionary micro SaaS services. AI, quantum computing, autonomous systems, and emerging technology solutions with guaranteed ROI." />
          <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, autonomous systems, technology services, business automation" />
          <meta property="og:title" content="Micro SaaS Services - Zion Tech Group" />
          <meta property="og:description" content="500+ revolutionary micro SaaS services with guaranteed ROI and enterprise-grade reliability." />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  500+ Revolutionary Micro SaaS Services
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Transform Your Business
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    With Revolutionary Technology
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Discover our comprehensive portfolio of cutting-edge micro SaaS services. 
                  From quantum AI to autonomous systems, each solution delivers guaranteed ROI 
                  and enterprise-grade reliability.
                </p>
              </div>

              {/* Contact Info Banner */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Phone className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                    <div className="text-xs text-gray-400">Mobile</div>
                    <div className="text-cyan-400 font-medium text-sm">{contactInfo.mobile}</div>
                  </div>
                  <div className="text-center">
                    <Mail className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                    <div className="text-xs text-gray-400">Email</div>
                    <div className="text-purple-400 font-medium text-sm">{contactInfo.email}</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-5 h-5 text-green-400 mx-auto mb-2" />
                    <div className="text-xs text-gray-400">Address</div>
                    <div className="text-green-400 font-medium text-xs">{contactInfo.address}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="#services"
                  variant="secondary"
                  size="lg"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of technology with our most innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <QuantumHolographicCard
                  key={index}
                  variant="quantum"
                  className="h-full group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                      {service.category}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center">
                          <Check className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </QuantumHolographicCard>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Service Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive range of technology solutions across all major industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enhancedCategories.map((category, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  variant="holographic"
                  className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className="text-center">
                    <div className="text-blue-400 mb-4 flex justify-center group-hover:text-cyan-400 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                      {category.count} Services
                    </div>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-20" id="services">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                All Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Find the perfect solution for your business needs
              </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white hover:bg-gray-700/50 transition-colors backdrop-blur-sm"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                  {showFilters ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="mt-6 p-6 bg-gray-800/30 rounded-lg border border-gray-700/50 backdrop-blur-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="All">All Categories</option>
                        {serviceCategories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                    {/* Price Range Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                      <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        {priceRanges.map((range) => (
                          <option key={range.value} value={range.value}>{range.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Sort By */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredServices.slice(0, 12).map((service) => (
                <EnhancedFuturisticCard
                  key={service.id}
                  variant="quantum"
                  className={`group hover:scale-105 transition-transform duration-300 ${
                    viewMode === 'list' ? 'flex items-center space-x-4' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="mb-3">
                        <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                          {service.category}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="text-lg font-bold text-green-400">{service.price}</span>
                      </div>
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                      >
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  ) : (
                    // List View
                    <>
                      <div className="text-3xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                          {service.description}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                            {service.category}
                          </span>
                          <span className="text-sm font-bold text-green-400">{service.price}</span>
                        </div>
                      </div>
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </a>
                    </>
                  )}
                </EnhancedFuturisticCard>
              ))}
            </div>

            {/* Load More Button */}
            {filteredServices.length > 12 && (
              <div className="text-center mt-8">
                <Button variant="secondary" size="lg">
                  Load More Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of forward-thinking companies already leveraging our revolutionary technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                >
                  View Pricing
                </Button>
              </div>

              {/* Final Contact Info */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Get in Touch Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Mobile</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                    <div className="text-xs text-cyan-400 mt-1">Available 24/7</div>
                  </div>
                  <div className="text-center">
                    <Mail className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                    <div className="text-xs text-green-400 mt-1">Response within 2 hours</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                    <div className="text-xs text-purple-400 mt-1">Global headquarters</div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-sm">
                    <Globe className="w-4 h-4 mr-2" />
                    Visit us at: {contactInfo.website}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </QuantumHolographicBackground>
  );
}