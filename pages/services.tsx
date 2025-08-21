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
    <EnhancedFuturisticBackground variant="dimensional" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Complete Services Portfolio | Zion Tech Group - AI, Cloud, Security & More</title>
          <meta name="description" content="Explore our complete portfolio of 300+ revolutionary micro SaaS services including AI, quantum computing, synthetic biology, cybersecurity, and more." />
          <meta name="keywords" content="micro SaaS, AI services, quantum computing, synthetic biology, cybersecurity, cloud services, Zion Tech Group" />
          <meta property="og:title" content="Complete Services Portfolio | Zion Tech Group" />
          <meta property="og:description" content="300+ revolutionary micro SaaS services for the future of business." />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> Micro SaaS</span>
              <br />Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover 300+ cutting-edge micro SaaS solutions powered by consciousness AI, quantum computing, 
              synthetic biology, and emerging technologies. Transform your business with future-forward solutions.
            </p>
            
            {/* Contact Information Banner */}
            <div className="bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-cyan-900/50 border border-blue-500/30 rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services Showcase */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Services</h2>
              <p className="text-gray-300">Our most popular and revolutionary micro SaaS solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service) => (
                <Card key={service.id} className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                    <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}{service.period}</div>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                    <div className="flex justify-center mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {service.category}
                      </span>
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
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === 'All'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                    }`}
                  >
                    All Categories
                  </button>
                  {serviceCategories.slice(0, 8).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        selectedCategory === category
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      {categoryIcons[category] || <Sparkles className="w-4 h-4" />}
                      {category}
                    </button>
                  ))}
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Advanced Filters */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Price Range:</span>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="text-sm text-gray-400">
                    {filteredServices.length} services found
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
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
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service) => (
                  <Card key={service.id} className="group hover:scale-105 transition-transform duration-300">
                    <div className={viewMode === 'list' ? 'flex items-start gap-6' : 'text-center'}>
                      <div className={`text-4xl ${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                        {service.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                            <div className="text-sm text-gray-400">{service.period}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                            {service.category}
                          </span>
                          {service.popular && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                              Popular
                            </span>
                          )}
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                            {service.trialDays} day trial
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-400">
                            Setup: {service.setupTime}
                          </div>
                          <Button 
                            href={service.link} 
                            variant="primary" 
                            size="sm"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our revolutionary micro SaaS platform. 
              Start your free trial today and experience the future of technology.
            </p>
            
            <div className="bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-cyan-900/50 border border-blue-500/30 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-300">{contactInfo.mobile}</div>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-300">{contactInfo.email}</div>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-300">{contactInfo.address}</div>
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
                Start Free Trial
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
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}