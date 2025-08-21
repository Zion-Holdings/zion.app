import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, LinkIcon, Building2, Menu, X } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-real-micro-saas-services';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Quantum Computing & AI' || s.category === 'AI & Machine Learning').length,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <Factory className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0' || s.category === 'Robotics & Automation').length,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskConical className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Healthcare & Biotechnology').length,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Space Technology',
      description: 'Advanced space mission planning and satellite management',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Space Technology').length,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Metaverse & Virtual Reality',
      description: 'Immersive 3D virtual worlds and augmented reality experiences',
      icon: <Globe className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Metaverse & Virtual Reality').length,
      color: 'from-pink-500 to-violet-600'
    },
    {
      name: 'Cybersecurity & Privacy',
      description: 'Quantum-resistant encryption and advanced threat detection',
      icon: <Shield className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Cybersecurity & Privacy').length,
      color: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic-advanced" intensity="high">
      <Head>
        <title>Revolutionary Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Explore 200+ revolutionary micro SaaS services powered by quantum computing, AI, and cutting-edge technology. Transform your business today." />
        <meta name="keywords" content="micro SaaS services, quantum computing, AI, artificial intelligence, cybersecurity, manufacturing, space technology, metaverse, biomedical AI" />
        <meta property="og:title" content="Revolutionary Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="200+ revolutionary micro SaaS services powered by quantum computing and AI" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200">Home</a>
              <a href="/services" className="text-sm font-medium text-cyan-400">Services</a>
              <a href="/micro-saas" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200">Micro SaaS</a>
              <a href="/contact" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200">Contact</a>
            </div>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="sm"
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-cyan-400/20">
            <div className="px-4 py-4 space-y-4">
              <a href="/" className="block text-gray-300 hover:text-cyan-400 py-2 transition-colors duration-200">Home</a>
              <a href="/services" className="block text-cyan-400 py-2">Services</a>
              <a href="/micro-saas" className="block text-gray-300 hover:text-cyan-400 py-2 transition-colors duration-200">Micro SaaS</a>
              <a href="/contact" className="block text-gray-300 hover:text-cyan-400 py-2 transition-colors duration-200">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <span className="text-white"> Micro SaaS Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover 200+ cutting-edge micro SaaS solutions powered by quantum computing, artificial intelligence, 
            and breakthrough technologies. Transform your business with proven ROI and real implementations.
          </p>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-gray-400">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">800%+</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">30+</div>
              <div className="text-gray-400">Day Free Trials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Service
              </span>
              <span className="text-white"> Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our revolutionary services across cutting-edge technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhancedCategories.map((category, index) => (
              <div
                key={category.name}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{category.name}</h3>
                <p className="text-gray-300 text-center mb-6">{category.description}</p>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{category.count}</div>
                  <div className="text-gray-400">Services Available</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="w-full lg:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full lg:w-48 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                >
                  <option value="All">All Categories</option>
                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="w-full lg:w-auto">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full lg:w-48 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="w-full lg:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full lg:w-48 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex w-full lg:w-auto">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-3 rounded-l-lg transition-colors duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-3 rounded-r-lg transition-colors duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              {filteredServices.length} Services Found
            </h2>
            <div className="text-gray-400">
              Showing {filteredServices.length} of {enhancedRealMicroSaasServices.length} total services
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <UltraFuturisticCard
                  key={service.id}
                  variant={service.variant as any}
                  className="h-full"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.tagline}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-white">{service.rating}</span>
                        <span className="text-gray-400 ml-1">({service.reviews})</span>
                      </div>
                      <span className="text-sm text-gray-400">{service.customers} customers</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">{service.category}</div>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </UltraFuturisticCard>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-gray-400 text-sm">{service.period}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <span className="text-white">{service.rating}</span>
                            <span className="text-gray-400 ml-1">({service.reviews})</span>
                          </div>
                          <span className="text-gray-400">|</span>
                          <span className="text-sm text-gray-400">{service.customers} customers</span>
                          <span className="text-gray-400">|</span>
                          <span className="text-sm text-cyan-400">{service.category}</span>
                        </div>
                        <Button
                          variant="primary"
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                          onClick={() => window.open(service.link, '_blank')}
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setPriceRange('All');
                }}
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Most
              </span>
              <span className="text-white"> Popular Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most sought-after revolutionary services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.slice(0, 6).map((service, index) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.tagline}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-gray-400">{service.period}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-gray-400 ml-1">({service.reviews})</span>
                  </div>
                  <span className="text-sm text-gray-400">{service.customers} customers</span>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  onClick={() => window.open(service.link, '_blank')}
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to
              </span>
              <span className="text-white"> Transform?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get in touch with our team to discover how our revolutionary micro SaaS services can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/micro-saas"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-lg px-8 py-4"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Atom className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-gray-400 text-sm">
                Revolutionary micro SaaS services powered by quantum computing, AI, and breakthrough technologies.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/services" className="hover:text-cyan-400 transition-colors duration-200">All Services</a></li>
                <li><a href="/micro-saas" className="hover:text-cyan-400 transition-colors duration-200">Micro SaaS</a></li>
                <li><a href="/ai-assistant" className="hover:text-cyan-400 transition-colors duration-200">AI Solutions</a></li>
                <li><a href="/automation" className="hover:text-cyan-400 transition-colors duration-200">Automation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-cyan-400 transition-colors duration-200">About Us</a></li>
                <li><a href="/careers" className="hover:text-cyan-400 transition-colors duration-200">Careers</a></li>
                <li><a href="/news" className="hover:text-cyan-400 transition-colors duration-200">News</a></li>
                <li><a href="/case-studies" className="hover:text-cyan-400 transition-colors duration-200">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>{contactInfo.mobile}</li>
                <li>{contactInfo.email}</li>
                <li className="text-xs">{contactInfo.address}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-cyan-400 transition-colors duration-200 ml-2">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-cyan-400 transition-colors duration-200 ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </UltraAdvancedFuturisticBackground>
  );
}