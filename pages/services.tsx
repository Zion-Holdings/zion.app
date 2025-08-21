import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/ui/Button';
import QuantumCard from '../components/ui/QuantumCard';
import QuantumNeuralBackground from '../components/ui/QuantumNeuralBackground';
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
    <QuantumNeuralBackground variant="neural" intensity="medium">
      <div className="min-h-screen">
        <Head>
          <title>Complete Services Portfolio | Zion Tech Group - AI, Quantum, Blockchain & More</title>
          <meta name="description" content="Explore our complete portfolio of 100+ micro SaaS services. AI solutions, quantum computing, blockchain, cybersecurity, IoT, and emerging technologies." />
          <meta name="keywords" content="AI services, quantum computing, blockchain, cybersecurity, data analytics, IoT platform, AR/VR, edge computing, micro SaaS, business automation" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Complete Services Portfolio | Zion Tech Group" />
          <meta property="og:description" content="Comprehensive technology services portfolio with AI, quantum, blockchain, and emerging technology solutions." />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 futuristic-glow">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Complete Services Portfolio
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover 100+ cutting-edge micro SaaS services across AI, quantum computing, blockchain, cybersecurity, IoT, and emerging technologies. 
                Each service is built for immediate business impact with measurable ROI.
              </p>
              
              {/* Service Count Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {expandedMicroSaasServices.length}+
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                    {serviceCategories.length - 1}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                    {popularServices.length}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">Popular Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                    14 Days
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">Free Trial</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  View Pricing
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Contact Info */}
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">Need Help Choosing?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-black/20">
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
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {serviceCategories.map((category) => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value} className="bg-gray-800 text-white">
                      {range.label}
                    </option>
                  ))}
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                      {option.value === 'name' ? 'Name A-Z' : option.label}
                    </option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-white/10 rounded-xl p-1 border border-gray-600">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Results Count */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-300">
                Showing {filteredServices.length} of {expandedMicroSaasServices.length} services
              </p>
              {selectedCategory !== 'All' && (
                <Button
                  onClick={() => setSelectedCategory('All')}
                  variant="secondary"
                  size="sm"
                >
                  Clear Filters
                </Button>
              )}
            </div>

            {/* Services Grid */}
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredServices.map((service) => (
                <QuantumCard
                  key={service.id}
                  variant={service.category.includes('Quantum') ? 'quantum' : 
                          service.category.includes('AI') ? 'neural' : 
                          service.category.includes('Blockchain') ? 'holographic' : 'cyberpunk'}
                  intensity="medium"
                  className="h-full cursor-pointer"
                  onClick={() => window.open(service.link, '_blank')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                        Popular
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} day trial
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="text-xs text-gray-400 space-y-1 mb-4">
                    <div>Market: {service.marketSize}</div>
                    <div>Growth: {service.growthRate}</div>
                    <div>ROI: {service.roi}</div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <Button
                      href={service.link}
                      variant="primary"
                      size="sm"
                      className="flex-1 mr-2"
                    >
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      href="/contact"
                      variant="secondary"
                      size="sm"
                    >
                      Start Trial
                    </Button>
                  </div>
                </QuantumCard>
              ))}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or filters
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('All');
                  }}
                  variant="primary"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Most Popular Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These are our most requested and highest-rated services based on customer feedback and usage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service) => (
                <QuantumCard
                  key={service.id}
                  variant="quantum"
                  intensity="high"
                  className="h-full cursor-pointer"
                  onClick={() => window.open(service.link, '_blank')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm ml-1">Popular</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} day trial
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>

                  <Button
                    href={service.link}
                    variant="primary"
                    className="w-full"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </QuantumCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <QuantumCard variant="holographic" intensity="high" className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your 14-day free trial today and experience the power of our micro SaaS services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  View Pricing
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>No credit card required • 24/7 support • Cancel anytime</p>
              </div>
            </QuantumCard>
          </div>
        </section>
      </div>
    </QuantumNeuralBackground>
  );
}