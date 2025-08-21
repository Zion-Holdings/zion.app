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
          <meta name="description" content="Explore our complete portfolio of 300+ revolutionary micro SaaS services including Consciousness AI, Quantum Computing, Synthetic Biology, Brain-Computer Interfaces, and more." />
          <meta name="keywords" content="micro SaaS services, AI services, quantum computing, synthetic biology, brain-computer interface, consciousness AI, Zion Tech Group" />
          <meta property="og:title" content="Complete Services Portfolio | Zion Tech Group" />
          <meta property="og:description" content="300+ revolutionary micro SaaS services including Consciousness AI, Quantum Computing, and Synthetic Biology." />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                300+ Revolutionary
              </span>
              <br />
              <span className="text-white">Micro SaaS Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover cutting-edge solutions including Consciousness AI, Quantum Computing, Synthetic Biology, 
              Brain-Computer Interfaces, and more. Transform your business with the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(categoryIcons).map(([category, icon]) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                      : 'border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                  }`}
                >
                  {icon}
                  <span className="ml-2">{category}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-xl"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50'
                      : 'text-gray-400 hover:text-cyan-400'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50'
                      : 'text-gray-400 hover:text-cyan-400'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Price Range Filter */}
              <div className="flex items-center gap-4">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-xl"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-xl"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-300">
                Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> services
                {selectedCategory !== 'All' && (
                  <span className="text-gray-400"> in {selectedCategory}</span>
                )}
              </p>
              <div className="text-sm text-gray-400">
                {filteredServices.length > 0 && (
                  <span>Prices from ${Math.min(...filteredServices.map(s => parseFloat(s.price.replace('$', ''))))} to ${Math.max(...filteredServices.map(s => parseFloat(s.price.replace('$', ''))))}</span>
                )}
              </div>
            </div>

            {/* Services Display */}
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400 mb-8">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('All');
                  }}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service) => (
                  <div key={service.id} className="group">
                    <div className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl h-full transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-cyan-400/50 overflow-hidden ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}>
                      {/* Service Icon and Header */}
                      <div className={`p-6 ${viewMode === 'list' ? 'flex-shrink-0' : ''}`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          {service.popular && (
                            <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                              Popular
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                          {service.description}
                        </p>

                        {/* Price and Category */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-cyan-400">
                            {service.price}{service.period}
                          </div>
                          <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50">
                            {service.category}
                          </span>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-400 text-sm">
                                <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                            {service.features.length > 4 && (
                              <li className="text-cyan-400 text-sm">
                                +{service.features.length - 4} more features
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Additional Info */}
                        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                          <div>
                            <span className="text-gray-400">Setup:</span>
                            <span className="text-white ml-2">{service.setupTime}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Trial:</span>
                            <span className="text-white ml-2">{service.trialDays} days</span>
                          </div>
                          <div>
                            <span className="text-gray-400">ROI:</span>
                            <span className="text-green-400 ml-2">{service.roi}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Market:</span>
                            <span className="text-white ml-2">{service.marketSize}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button
                            href={service.link}
                            variant="primary"
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                          >
                            Learn More
                          </Button>
                          <Button
                            href="/contact"
                            variant="secondary"
                            size="sm"
                            className="px-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors duration-300"
                          >
                            Contact
                          </Button>
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
        <section className="py-20 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Revolutionary Technology</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our team of experts is ready to help you implement the perfect solution for your needs. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Get Free Consultation
              </Button>
              <Button 
                href="/pricing" 
                variant="secondary" 
                size="lg"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/50 p-6 rounded-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-cyan-400/50">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">{contactInfo.mobile}</p>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/50 p-6 rounded-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-purple-400/50">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/50 p-6 rounded-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-pink-400/50">
                  <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}