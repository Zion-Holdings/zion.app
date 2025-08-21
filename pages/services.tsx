import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, CheckCircle, XCircle } from 'lucide-react';
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
      description: 'Cutting-edge AI solutions with quantum computing integration and proven ROI',
      icon: <Brain className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'AI & Machine Learning').length,
      highlight: '45+ Services'
    },
    {
      name: 'Blockchain & Web3',
      description: 'Future-proof blockchain with quantum security and DeFi optimization',
      icon: <Globe2 className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Blockchain & Web3').length,
      highlight: '32+ Services'
    },
    {
      name: 'Quantum Computing',
      description: 'Revolutionary quantum solutions for complex computational problems',
      icon: <Atom className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Quantum Computing').length,
      highlight: '38+ Services'
    },
    {
      name: 'Cybersecurity',
      description: 'Enterprise-grade security with zero-trust architecture and quantum resistance',
      icon: <ShieldCheck className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Cybersecurity').length,
      highlight: '28+ Services'
    },
    {
      name: 'Biomedical & Healthcare',
      description: 'AI-powered healthcare breakthroughs and drug discovery acceleration',
      icon: <Dna className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Biomedical & Healthcare').length,
      highlight: '25+ Services'
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial solutions and algorithmic trading',
      icon: <DollarSign className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Financial Technology').length,
      highlight: '22+ Services'
    },
    {
      name: 'Manufacturing & Industry 4.0',
      description: 'Smart manufacturing with AI, IoT, and quantum optimization',
      icon: <Factory className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0').length,
      highlight: '20+ Services'
    },
    {
      name: 'Transportation & Logistics',
      description: 'AI-powered supply chain optimization and autonomous logistics',
      icon: <Truck className="w-6 h-6" />,
      count: expandedMicroSaasServices.filter(s => s.category === 'Transportation & Logistics').length,
      highlight: '18+ Services'
    }
  ];

  const categoryIcons: { [key: string]: React.ReactNode } = {
    'AI & Machine Learning': <Brain className="w-6 h-6" />,
    'Blockchain & Web3': <Globe2 className="w-6 h-6" />,
    'AR/VR & Metaverse': <Globe className="w-6 h-6" />,
    'IoT & Smart Cities': <Smartphone className="w-6 h-6" />,
    'Cloud & Infrastructure': <Cloud className="w-6 h-6" />,
    'Data Analytics & BI': <BarChart3 className="w-6 h-6" />,
    'Cybersecurity': <Shield className="w-6 h-6" />,
    'Emerging Technologies': <Rocket className="w-6 h-6" />,
    'Quantum Computing': <Atom className="w-6 h-6" />,
    'Autonomous Systems': <Bot className="w-6 h-6" />,
    'Sustainable Technology': <Leaf className="w-6 h-6" />,
    'Biomedical & Healthcare': <FlaskConical className="w-6 h-6" />,
    'Financial Technology': <DollarSign className="w-6 h-6" />,
    'Climate & Environment': <Leaf className="w-6 h-6" />,
    'Manufacturing & Industry 4.0': <Factory className="w-6 h-6" />,
    'Transportation & Logistics': <Truck className="w-6 h-6" />,
    'Energy & Utilities': <Zap className="w-6 h-6" />,
    'Research & Development': <Microscope className="w-6 h-6" />,
    'Government & Defense': <ShieldCheck className="w-6 h-6" />,
    'Education & Training': <GraduationCap className="w-6 h-6" />
  };

  return (
    <>
      <Head>
        <title>400+ Real Micro SaaS Services | Zion Tech Group - AI, Quantum, Blockchain & More</title>
        <meta name="description" content="Explore our comprehensive portfolio of 400+ production-ready micro SaaS services. AI solutions, quantum computing, blockchain, cybersecurity, and emerging technologies with proven ROI." />
        <meta name="keywords" content="AI services, quantum computing, blockchain, cybersecurity, data analytics, IoT platform, micro SaaS, business automation, enterprise solutions" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="400+ Real Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology services portfolio with AI, quantum computing, blockchain, and emerging technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>
      
      <EnhancedFuturisticBackground variant="neural-quantum" intensity="high">
        <div className="min-h-screen bg-black text-white">
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                400+ Real Micro SaaS Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover our comprehensive portfolio of production-ready, AI-powered micro SaaS solutions. 
                From quantum computing to autonomous systems, we offer the most innovative technology 
                solutions in the market with proven ROI and enterprise-grade reliability.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">1200%+</div>
                  <div className="text-sm text-gray-400">Average ROI</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime Guarantee</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-green-400 mb-2">14 Days</div>
                  <div className="text-sm text-gray-400">Free Trial</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">AI Support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                >
                  <span>Get Free Consultation</span>
                  <MessageSquare className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('https://ziontechgroup.com', '_blank')}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Contact Info */}
              <div className="text-center text-gray-400 text-sm">
                <p>Ready to get started? Contact us today:</p>
                <p className="mt-2">
                  <span className="text-cyan-400">Mobile:</span> {contactInfo.mobile} | 
                  <span className="text-fuchsia-400 ml-2">Email:</span> {contactInfo.email}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Most Popular Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our most sought-after solutions that are transforming businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service, index) => (
                <EnhancedFuturisticCard
                  key={service.id}
                  variant={index % 3 === 0 ? 'quantum' : index % 3 === 1 ? 'holographic' : 'neural'}
                  intensity="high"
                  className="h-full group cursor-pointer"
                  interactive={true}
                  onClick={() => window.open(service.link, '_blank')}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium mb-3">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    <div className="text-sm text-gray-400 mb-2">{service.category}</div>
                    <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}{service.period}</div>
                    <div className="inline-flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Service Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive range of technology solutions organized by industry and technology type.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enhancedCategories.map((category, index) => (
                <EnhancedFuturisticCard
                  key={category.name}
                  variant={index % 4 === 0 ? 'holographic' : index % 4 === 1 ? 'quantum' : index % 4 === 2 ? 'neural' : 'cyberpunk'}
                  intensity="medium"
                  className="text-center cursor-pointer group"
                  interactive={true}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{category.description}</p>
                  <div className="text-sm text-gray-400 mb-3">{category.count} services</div>
                  <div className="inline-flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                    View Services <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8">
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                  {/* Search */}
                  <div className="flex-1 w-full lg:w-auto">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full lg:w-80 pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                    >
                      {enhancedCategories.map((category) => (
                        <option key={category.name} value={category.name}>{category.name}</option>
                      ))}
                    </select>

                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                      ))}
                    </select>

                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-3 rounded-xl transition-colors ${
                        viewMode === 'grid' 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                          : 'bg-gray-800/50 text-gray-400 border border-gray-600/50 hover:bg-gray-700/50'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-3 rounded-xl transition-colors ${
                        viewMode === 'list' 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                          : 'bg-gray-800/50 text-gray-400 border border-gray-600/50 hover:bg-gray-700/50'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-center mb-8">
                <p className="text-gray-400">
                  Showing <span className="text-white font-semibold">{filteredServices.length}</span> services
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>

              {/* Services Grid/List */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service, index) => (
                    <EnhancedFuturisticCard
                      key={service.id}
                      variant={service.variant || 'holographic'}
                      intensity="medium"
                      className="h-full"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl mb-2">{service.icon}</div>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              Popular
                            </div>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                        
                        <div className="mb-4">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">
                            {service.price}
                            <span className="text-sm text-gray-400">{service.period}</span>
                          </div>
                          <div className="text-xs text-gray-400">
                            {service.trialDays}-day free trial • Setup: {service.setupTime}
                          </div>
                        </div>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                        
                        <div className="mb-4">
                          <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                          <div className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-xs text-gray-300">
                                <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                <span className="line-clamp-1">{feature}</span>
                              </div>
                            ))}
                            {service.features.length > 3 && (
                              <div className="text-xs text-cyan-400">
                                +{service.features.length - 3} more features
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-xs text-gray-400 mb-2">ROI & Market:</div>
                          <div className="text-sm text-green-400 font-semibold mb-1">{service.roi}</div>
                          <div className="text-xs text-gray-400">
                            Market: {service.marketSize} • Growth: {service.growthRate}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-400">
                            Category: <span className="text-cyan-400">{service.category}</span>
                          </div>
                          <Button
                            variant="primary"
                            size="sm"
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                            onClick={() => window.open(service.link, '_blank')}
                          >
                            <span>Learn More</span>
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </EnhancedFuturisticCard>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredServices.map((service, index) => (
                    <EnhancedFuturisticCard
                      key={service.id}
                      variant={index % 4 === 0 ? 'quantum' : index % 4 === 1 ? 'holographic' : index % 4 === 2 ? 'neural' : 'cyberpunk'}
                      intensity="low"
                      className="group cursor-pointer"
                      interactive={true}
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{service.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            {service.popular && (
                              <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                                <Star className="w-3 h-3 mr-1" />
                                Popular
                              </div>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{service.tagline}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{service.category}</span>
                            <span>•</span>
                            <span>{service.setupTime} setup</span>
                            <span>•</span>
                            <span>{service.trialDays} day trial</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}{service.period}</div>
                          <div className="inline-flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </EnhancedFuturisticCard>
                  ))}
                </div>
              )}

              {/* No Results */}
              {filteredServices.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                  <p className="text-gray-400 mb-6">Try adjusting your search criteria or browse all categories.</p>
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
          </div>
        </section>

        {/* Real vs Mock Services */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Real vs Mock Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                At Zion Tech Group, we pride ourselves on delivering only the highest quality, production-ready services. 
                Our portfolio includes 400+ real micro SaaS solutions, each rigorously tested and ready for immediate deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <EnhancedFuturisticCard
                variant="neural"
                intensity="medium"
                className="text-center"
              >
                <div className="text-cyan-400 mb-4">
                  <CheckCircle className="w-10 h-10 mx-auto text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Real Services</h3>
                <p className="text-lg text-cyan-400 font-mono">
                  All services in our portfolio are 100% production-ready, with no mockups or placeholders. 
                  We guarantee enterprise-grade reliability and performance.
                </p>
              </EnhancedFuturisticCard>

              <EnhancedFuturisticCard
                variant="quantum"
                intensity="medium"
                className="text-center"
              >
                <div className="text-fuchsia-400 mb-4">
                  <XCircle className="w-10 h-10 mx-auto text-fuchsia-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mock Services</h3>
                <p className="text-lg text-fuchsia-400 font-mono">
                  We do not offer any mock services or placeholder products. 
                  Our commitment to quality means you get only the best and most reliable solutions.
                </p>
              </EnhancedFuturisticCard>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join thousands of companies already achieving extraordinary results with our AI-powered solutions. 
                Get your free consultation and start your 14-day free trial today.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Transform Your Business Today
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  Experience the power of AI-driven innovation. Our team of experts is ready to help you 
                  implement the perfect solution for your business needs with guaranteed ROI.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Free consultation and setup assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">14-day free trial on all services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">24/7 AI-powered support and monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">ROI guarantee on all implementations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Enterprise-grade security and compliance</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                  >
                    <span>Get Free Consultation</span>
                    <MessageSquare className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.open('https://ziontechgroup.com', '_blank')}
                  >
                    <span>Explore More Services</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h4>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Mobile</div>
                      <div className="text-white font-semibold">{contactInfo.mobile}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="text-white font-semibold">{contactInfo.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Address</div>
                      <div className="text-white font-semibold">{contactInfo.address}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Website</div>
                      <div className="text-white font-semibold">{contactInfo.website}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                  >
                    <span>Contact Us Now</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <EnhancedFuturisticCard
              variant="quantum-holographic"
              intensity="high"
              className="max-w-4xl mx-auto"
            >
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Contact our team to discuss your specific needs and find the perfect solution for your business. 
                  Get a free consultation and start your 14-day trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button href="/contact" variant="primary" size="lg">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button href="/pricing" variant="secondary" size="lg">
                    View Pricing
                  </Button>
                </div>
                <div className="mt-6 text-sm text-gray-400 mb-8">
                  Free 14-day trial • No credit card required • Expert support included • 99.9% uptime guarantee
                </div>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                    <Phone className="w-6 h-6 text-blue-400 mb-2" />
                    <div className="text-sm text-gray-400">Mobile</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                    <div className="text-xs text-blue-400 mt-1">Available 24/7</div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30">
                    <Mail className="w-6 h-6 text-green-400 mb-2" />
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                    <div className="text-xs text-green-400 mt-1">Response within 2 hours</div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30">
                    <MapPin className="w-6 h-6 text-purple-400 mb-2" />
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                    <div className="text-xs text-purple-400 mt-1">Global headquarters</div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-sm">
                    <Globe className="w-4 h-4 mr-2" />
                    Visit us at: {contactInfo.website}
                  </div>
                </div>
              </div>
            </EnhancedFuturisticCard>
          </div>
        </section>

        {/* Unique Value Proposition */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We stand apart from the competition with our commitment to delivering only the highest quality, 
                production-ready services with proven ROI and enterprise-grade reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EnhancedFuturisticCard
                variant="quantum"
                intensity="medium"
                className="text-center"
              >
                <div className="text-cyan-400 mb-4">
                  <Rocket className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Production-Ready Services</h3>
                <p className="text-gray-300">
                  All 400+ services are fully functional and ready for immediate deployment. 
                  No mockups, no placeholders, just real solutions that work.
                </p>
              </EnhancedFuturisticCard>

              <EnhancedFuturisticCard
                variant="neural"
                intensity="medium"
                className="text-center"
              >
                <div className="text-fuchsia-400 mb-4">
                  <TrendingUp className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Proven ROI</h3>
                <p className="text-gray-300">
                  Our services deliver an average ROI of 1200%+ across all implementations. 
                  We guarantee results or your money back.
                </p>
              </EnhancedFuturisticCard>

              <EnhancedFuturisticCard
                variant="holographic"
                intensity="medium"
                className="text-center"
              >
                <div className="text-green-400 mb-4">
                  <Shield className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  SOC 2 compliant with quantum-resistant encryption and 99.9% uptime guarantee. 
                  Trusted by Fortune 500 companies worldwide.
                </p>
              </EnhancedFuturisticCard>

              <EnhancedFuturisticCard
                variant="cyberpunk"
                intensity="medium"
                className="text-center"
              >
                <div className="text-orange-400 mb-4">
                  <Zap className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast Setup</h3>
                <p className="text-gray-300">
                  Get started in minutes with our intuitive interfaces and automated onboarding. 
                  Average setup time: 2-8 hours.
                </p>
              </EnhancedFuturisticCard>

              <EnhancedFuturisticCard
                variant="neural"
                intensity="medium"
                className="text-center"
              >
                <div className="text-teal-400 mb-4">
                  <Users className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">24/7 AI Support</h3>
                <p className="text-gray-300">
                  Round-the-clock AI-powered support and consultation. 
                  Our intelligent systems are always ready to help.
                </p>
              </EnhancedFuturisticCard>

              <EnhancedFuturisticCard
                variant="quantum-holographic"
                intensity="medium"
                className="text-center"
              >
                <div className="text-purple-400 mb-4">
                  <Award className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Industry Leadership</h3>
                <p className="text-gray-300">
                  First-to-market quantum AI solutions and cutting-edge technology. 
                  Stay ahead of the competition with our innovations.
                </p>
              </EnhancedFuturisticCard>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4 text-center">
            <EnhancedFuturisticCard
              variant="quantum-holographic"
              intensity="high"
              className="max-w-4xl mx-auto"
            >
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Start Your Transformation Today
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of companies already leveraging our revolutionary technology solutions. 
                  Start your 14-day free trial today and experience the power of AI-driven innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.open('https://ziontechgroup.com/services', '_blank')}
                  >
                    <span>Explore All Services</span>
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <div className="text-sm text-gray-400">
                  No credit card required • 14-day free trial • Cancel anytime • ROI guarantee
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <span className="text-cyan-400">Mobile:</span> {contactInfo.mobile} | 
                  <span className="text-fuchsia-400 ml-2">Email:</span> {contactInfo.email}
                </div>
              </div>
            </EnhancedFuturisticCard>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
    </>
  );
}