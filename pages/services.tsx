import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, Brain, Atom, Eye, Bot, Rocket as RocketIcon, Cpu as CpuIcon, Database as DatabaseIcon2, Cloud as CloudIcon2, Bot as BotIcon2, Shield as ShieldIcon2, Globe as GlobeIcon2, Zap as ZapIcon2, BarChart3 as BarChart3Icon2, TrendingUp as TrendingUpIcon2, Users as UsersIcon2, Target as TargetIcon2, Building as BuildingIcon2, Award as AwardIcon2, DollarSign as DollarSignIcon2, ChartBar as ChartBarIcon2, Lock as LockIcon2, Cpu as CpuIcon2, Database as DatabaseIcon3, Cloud as CloudIcon3, Smartphone as SmartphoneIcon2, Palette as PaletteIcon2, Search as SearchIcon2, MessageSquare as MessageSquareIcon2, FileText as FileTextIcon2, Calendar as CalendarIcon2, CreditCard as CreditCardIcon2, Settings as SettingsIcon2, Code as CodeIcon2, BookOpen as BookOpenIcon2, Activity as ActivityIcon2, Database as DatabaseIcon4, Play as PlayIcon2, Mail as MailIcon2, Phone as PhoneIcon2, MapPin as MapPinIcon2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
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
  const [selectedService, setSelectedService] = useState<string | null>(null);

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
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
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
      case 'roi':
        return parseFloat(b.roi.replace('%', '').replace('+', '')) - parseFloat(a.roi.replace('%', '').replace('+', ''));
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

  const categoryIcons: { [key: string]: React.ReactNode } = {
    'AI & Machine Learning': <Brain className="w-5 h-5" />,
    'Quantum Computing & Security': <Atom className="w-5 h-5" />,
    'Edge AI & IoT': <Cpu className="w-5 h-5" />,
    'Autonomous Systems': <Bot className="w-5 h-5" />,
    'Healthcare & Life Sciences': <Eye className="w-5 h-5" />,
    'Cybersecurity': <Shield className="w-5 h-5" />,
    'Data Analytics & BI': <BarChart3 className="w-5 h-5" />,
    'Emerging Technology': <Sparkles className="w-5 h-5" />,
    'Cloud & Infrastructure': <Cloud className="w-5 h-5" />,
    'Blockchain & Web3': <Globe className="w-5 h-5" />,
    'AR/VR & Metaverse': <Eye className="w-5 h-5" />,
    'IoT & Smart Cities': <Cpu className="w-5 h-5" />,
    'Business Intelligence': <TrendingUp className="w-5 h-5" />
  };

  const marketStats = [
    { metric: 'Total Services', value: '500+', description: 'Real micro SaaS solutions' },
    { metric: 'Categories', value: '13', description: 'Technology domains covered' },
    { metric: 'Starting Price', value: '$29', description: 'Per month' },
    { metric: 'Free Trial', value: '21 days', description: 'Risk-free testing' },
    { metric: 'Uptime', value: '99.99%', description: 'Enterprise reliability' },
    { metric: 'Global Reach', value: '150+', description: 'Countries served' }
  ];

  const featuredCategories = [
    {
      name: 'Quantum Computing & Security',
      description: 'Revolutionary quantum solutions for cryptography, optimization, and secure communications',
      icon: <Atom className="w-8 h-8" />,
      serviceCount: 45,
      avgPrice: '$599',
      variant: 'quantum' as const
    },
    {
      name: 'AI & Machine Learning',
      description: 'Advanced AI platforms for automation, analytics, and intelligent decision-making',
      icon: <Brain className="w-8 h-8" />,
      serviceCount: 78,
      avgPrice: '$299',
      variant: 'neural' as const
    },
    {
      name: 'Synthetic Biology',
      description: 'Cutting-edge biotech platforms for DNA synthesis and genetic engineering',
      icon: <Eye className="w-8 h-8" />,
      serviceCount: 23,
      avgPrice: '$799',
      variant: 'biometric' as const
    },
    {
      name: 'Neuromorphic Computing',
      description: 'Brain-inspired computing systems for ultra-efficient edge AI processing',
      icon: <Cpu className="w-8 h-8" />,
      serviceCount: 18,
      avgPrice: '$699',
      variant: 'neural' as const
    },
    {
      name: 'Autonomous Systems',
      description: 'Self-learning robotic and autonomous platforms for Industry 4.0',
      icon: <Bot className="w-8 h-8" />,
      serviceCount: 34,
      avgPrice: '$549',
      variant: 'cyber' as const
    },
    {
      name: 'Blockchain & Web3',
      description: 'Next-generation blockchain solutions with quantum security and DeFi integration',
      icon: <Globe className="w-8 h-8" />,
      serviceCount: 29,
      avgPrice: '$449',
      variant: 'holographic' as const
    }
  ];

  return (
    <QuantumHolographicBackground variant="neural-quantum" intensity="high">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-blue-900">
        <Head>
          <title>500+ Real Micro SaaS Services | Zion Tech Group | Quantum Computing | AI Solutions</title>
          <meta name="description" content="Explore our comprehensive portfolio of 500+ real micro SaaS services including quantum computing, AI solutions, synthetic biology, and emerging technologies. Starting from $29/month. Contact: +1 302 464 0950" />
          <meta name="keywords" content="micro SaaS services, quantum computing, AI solutions, synthetic biology, neuromorphic computing, blockchain, cybersecurity, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="500+ Real Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Leading provider of quantum computing, AI, and emerging technology solutions. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
        </Head>

        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
                500+ Real Micro SaaS
              </span>{' '}
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge micro SaaS solutions powered by quantum computing, 
              AI, synthetic biology, and emerging technologies. All services are fully functional with real implementations.
            </p>
            
            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {marketStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300 mb-1">{stat.metric}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* Contact Info Banner */}
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 font-medium">24/7 Support Available</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-5 h-5 text-blue-400 mb-2" />
                  <span className="text-sm text-gray-400">Phone</span>
                  <a href={`tel:${contactInfo.mobile}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-5 h-5 text-green-400 mb-2" />
                  <span className="text-sm text-gray-400">Email</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-white font-medium hover:text-green-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-5 h-5 text-purple-400 mb-2" />
                  <span className="text-sm text-gray-400">Address</span>
                  <span className="text-white font-medium text-sm">
                    {contactInfo.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Featured
                </span>{' '}
                Technology Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most innovative service categories, each representing cutting-edge technology 
                that's reshaping industries and creating new possibilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCategories.map((category, index) => (
                <QuantumHolographicCard
                  key={index}
                  variant={category.variant}
                  intensity="high"
                  className="h-full cursor-pointer"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 text-white">{category.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                    <p className="text-gray-300 mb-4">{category.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-cyan-400 font-semibold">{category.serviceCount}</div>
                        <div className="text-gray-400">Services</div>
                      </div>
                      <div>
                        <div className="text-green-400 font-semibold">{category.avgPrice}</div>
                        <div className="text-gray-400">Avg Price</div>
                      </div>
                    </div>
                  </div>
                </QuantumHolographicCard>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 px-4 bg-black/20">
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
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                      : 'bg-gray-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                      : 'bg-gray-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 text-white rounded-xl hover:bg-gray-700/50 transition-colors"
              >
                <Filter className="w-5 h-5" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <div className="mt-6 p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
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
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Sort By Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
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
        </section>

        {/* Services Grid/List */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                {filteredServices.length} Services Found
              </h2>
              <div className="text-gray-400">
                Showing {Math.min(filteredServices.length, 50)} of {filteredServices.length} services
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.slice(0, 50).map((service, index) => (
                  <QuantumHolographicCard
                    key={service.id}
                    variant={index % 4 === 0 ? 'quantum' : index % 4 === 1 ? 'holographic' : index % 4 === 2 ? 'neural' : 'cyber'}
                    intensity="medium"
                    className="h-full cursor-pointer"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open(service.link, '_blank');
                      }
                    }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{service.tagline}</p>
                      <div className="text-2xl font-bold text-white mb-4">{service.price}{service.period}</div>
                      
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <div className="text-cyan-400 font-semibold">{service.trialDays} days</div>
                          <div className="text-gray-400">Free Trial</div>
                        </div>
                        <div>
                          <div className="text-green-400 font-semibold">{service.roi}</div>
                          <div className="text-gray-400">ROI</div>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                          if (typeof window !== 'undefined') {
                            window.open(service.link, '_blank');
                          }
                        }}
                      >
                        Learn More <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </QuantumHolographicCard>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredServices.slice(0, 50).map((service, index) => (
                  <QuantumHolographicCard
                    key={service.id}
                    variant={index % 4 === 0 ? 'quantum' : index % 4 === 1 ? 'holographic' : index % 4 === 2 ? 'neural' : 'cyber'}
                    intensity="low"
                    className="cursor-pointer"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open(service.link, '_blank');
                      }
                    }}
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-300 mb-2">{service.tagline}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{service.category}</span>
                          <span>•</span>
                          <span>{service.setupTime} setup</span>
                          <span>•</span>
                          <span>{service.roi} ROI</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-2">{service.price}{service.period}</div>
                        <div className="text-sm text-green-400 mb-2">{service.trialDays} days free</div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            if (typeof window !== 'undefined') {
                              window.open(service.link, '_blank');
                            }
                          }}
                        >
                          View Details <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </QuantumHolographicCard>
                ))}
              </div>
            )}

            {filteredServices.length > 50 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open('/services', '_self');
                    }
                  }}
                >
                  View All {filteredServices.length} Services <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Most Popular
                </span>{' '}
                Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most sought-after services that are delivering exceptional results 
                for businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service, index) => (
                <QuantumHolographicCard
                  key={service.id}
                  variant={index % 3 === 0 ? 'quantum' : index % 3 === 1 ? 'holographic' : 'neural'}
                  intensity="high"
                  className="h-full cursor-pointer"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open(service.link, '_blank');
                    }
                  }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.tagline}</p>
                    <div className="text-2xl font-bold text-white mb-4">{service.price}{service.period}</div>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          window.open(service.link, '_blank');
                        }
                      }}
                    >
                      Learn More <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </QuantumHolographicCard>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of companies already leveraging our revolutionary micro SaaS services. 
              Start your 21-day free trial today and experience the future of business technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('/contact', '_self');
                  }
                }}
              >
                Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('/pricing', '_self');
                  }
                }}
              >
                View Pricing <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Need Help Choosing?</h3>
              <p className="text-gray-300 mb-4">
                Our team of experts is here to help you find the perfect services for your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div>
                  <Phone className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-400">Call us</span>
                  <div className="text-white font-medium">{contactInfo.mobile}</div>
                </div>
                <div>
                  <Mail className="w-5 h-5 text-green-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-400">Email us</span>
                  <div className="text-white font-medium">{contactInfo.email}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </QuantumHolographicBackground>
  );
}