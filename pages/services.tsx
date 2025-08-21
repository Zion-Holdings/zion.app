import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, Brain, Atom, Eye, Bot, Rocket as RocketIcon, Cpu as CpuIcon, Database as DatabaseIcon2, Cloud as CloudIcon2, Bot as BotIcon2, Shield as ShieldIcon2, Globe as GlobeIcon2, Zap as ZapIcon2, BarChart3 as BarChart3Icon2, TrendingUp as TrendingUpIcon2, Users as UsersIcon2, Target as TargetIcon2, Building as BuildingIcon2, Award as AwardIcon2, DollarSign as DollarSignIcon2, ChartBar as ChartBarIcon2, Lock as LockIcon2, Cpu as CpuIcon2, Database as DatabaseIcon3, Cloud as CloudIcon3, Smartphone as SmartphoneIcon2, Palette as PaletteIcon2, Search as SearchIcon2, MessageSquare as MessageSquareIcon2, FileText as FileTextIcon2, Calendar as CalendarIcon2, CreditCard as CreditCardIcon2, Settings as SettingsIcon2, Code as CodeIcon2, BookOpen as BookOpenIcon2, Activity as ActivityIcon2, Database as DatabaseIcon4, Play as PlayIcon2, Mail as MailIcon2, Phone as PhoneIcon2, MapPin as MapPinIcon2 } from 'lucide-react';
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
  const [selectedService, setSelectedService] = useState<string | null>(null);

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

  return (
    <EnhancedFuturisticBackground variant="holographic-advanced" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Complete Services Portfolio | Zion Tech Group - AI, Cloud, Security & More</title>
          <meta name="description" content="Explore our complete portfolio of 200+ micro SaaS services. AI solutions, cloud infrastructure, cybersecurity, data analytics, IoT, blockchain, and emerging technologies." />
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
                  🚀 200+ Real Micro SaaS Services
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="text-quantum">Complete</span>
                  <br />
                  <span className="text-holographic">Services</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                    Portfolio
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Discover our comprehensive collection of cutting-edge micro SaaS solutions including 
                  <span className="text-cyan-400 font-semibold"> Quantum AI</span>, 
                  <span className="text-purple-400 font-semibold"> Edge Computing</span>, 
                  <span className="text-green-400 font-semibold"> Autonomous Systems</span>, and more.
                </p>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">200+</div>
                    <div className="text-gray-400 text-sm">Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">15</div>
                    <div className="text-gray-400 text-sm">Categories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">14</div>
                    <div className="text-gray-400 text-sm">Day Trial</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services Showcase */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-quantum">Featured</span> Services
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our most popular and innovative solutions that are transforming businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.slice(0, 6).map((service) => (
                <div key={service.id} className="group">
                  <div className="card-futuristic h-full hover-quantum">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{service.icon}</span>
                      {service.popular && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.tagline}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}
                        <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Check className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      href={service.link}
                      variant="primary"
                      size="sm"
                      className="w-full"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b border-gray-800">
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
                  className="w-full pl-10 pr-4 py-3 bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-3 bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-xl text-gray-300 hover:text-white hover:border-gray-600/50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-6 p-6 bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-black/60 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
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
                    <label className="block text-sm font-medium text-gray-300 mb-3">Price Range</label>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full px-3 py-2 bg-black/60 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort By Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 bg-black/60 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedCategory === 'All' ? 'All Services' : selectedCategory}
                </h2>
                <p className="text-gray-400">
                  {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div key={service.id} className="group">
                    <div className="card-futuristic h-full hover-quantum">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{service.icon}</span>
                        {service.popular && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          {service.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                        {service.tagline}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.price}
                          <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Setup: {service.setupTime}</div>
                          <div className="text-sm text-gray-400">{service.trialDays} day trial</div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <Check className="w-3 h-3 text-green-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <Button
                          href={service.link}
                          variant="primary"
                          size="sm"
                          className="w-full"
                        >
                          Learn More
                        </Button>
                        
                        <Button
                          href="/contact"
                          variant="secondary"
                          size="sm"
                          className="w-full"
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredServices.map((service) => (
                  <div key={service.id} className="group">
                    <div className="card-futuristic hover-glow">
                      <div className="flex items-start space-x-6">
                        <div className="text-4xl">{service.icon}</div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-2">
                                {service.name}
                              </h3>
                              <p className="text-gray-300 leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-2xl font-bold text-cyan-400 mb-1">
                                {service.price}
                                <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                              </div>
                              <div className="text-sm text-gray-400">Setup: {service.setupTime}</div>
                              <div className="text-sm text-gray-400">{service.trialDays} day trial</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                              {service.category}
                            </span>
                            {service.popular && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                                <Star className="w-3 h-3 mr-1" />
                                Popular
                              </span>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                              <div className="space-y-1">
                                {service.features.slice(0, 3).map((feature, idx) => (
                                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                    <Check className="w-3 h-3 text-green-400" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-semibold text-gray-300 mb-2">Technology</h4>
                              <div className="flex flex-wrap gap-1">
                                {service.technology.slice(0, 3).map((tech, idx) => (
                                  <span key={idx} className="inline-block px-2 py-1 rounded text-xs bg-gray-800/50 text-gray-300">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-3">
                            <Button
                              href={service.link}
                              variant="primary"
                              size="sm"
                            >
                              Learn More
                            </Button>
                            
                            <Button
                              href="/contact"
                              variant="secondary"
                              size="sm"
                            >
                              Get Started
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-quantum">Transform</span> Your Business?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get started with any of our 200+ micro SaaS services today. 
                Contact our team for personalized recommendations and support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="hover-quantum"
                >
                  <span className="flex items-center space-x-2">
                    <Rocket className="w-5 h-5" />
                    <span>Get Started</span>
                  </span>
                </Button>
                
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="hover-glow"
                >
                  <span className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5" />
                    <span>View Pricing</span>
                  </span>
                </Button>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                    <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">{contactInfo.mobile}</p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <Mail className="w-6 h-6 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}