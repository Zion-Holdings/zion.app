import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot } from 'lucide-react';
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
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.technology.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  // Sort services
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':
        const aRoi = parseFloat(a.roi.replace('%', '').replace('+', ''));
        const bRoi = parseFloat(b.roi.replace('%', '').replace('+', ''));
        return bRoi - aRoi;
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

  const serviceStats = {
    totalServices: expandedMicroSaasServices.length,
    popularServices: popularServices.length,
    categories: serviceCategories.length - 1, // Exclude 'All'
    priceRange: {
      min: Math.min(...expandedMicroSaasServices.map(s => parseFloat(s.price.replace('$', '').replace(',', '')))),
      max: Math.max(...expandedMicroSaasServices.map(s => parseFloat(s.price.replace('$', '').replace(',', ''))))
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>300+ Real Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of 300+ real micro SaaS services powered by quantum computing and AI. Starting at $49/month with 14-day free trials." />
        <meta name="keywords" content="micro SaaS services, quantum computing, AI services, neural interfaces, quantum AI, microservices" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="300+ Real Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive portfolio of 300+ real micro SaaS services powered by quantum computing and AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <EnhancedFuturisticBackground variant="quantum-holographic" intensity="medium">
        {/* Hero Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              300+ Real Micro SaaS Services
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of production-ready micro SaaS services powered by quantum computing, AI, and emerging technologies. 
              All services are real implementations with actual APIs, databases, and infrastructure.
            </p>

            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{serviceStats.totalServices}+</div>
                <div className="text-sm text-gray-400">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{serviceStats.categories}</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">{serviceStats.popularServices}</div>
                <div className="text-sm text-gray-400">Popular Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">${serviceStats.priceRange.min}-${serviceStats.priceRange.max}</div>
                <div className="text-sm text-gray-400">Price Range</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 max-w-2xl mx-auto mb-12">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Need Help Choosing?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors"
              >
                <Filter className="w-5 h-5" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Popular Services */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Most Popular Services
              </h2>
              <p className="text-xl text-gray-300">
                Our most requested and highest-performing micro SaaS services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service) => (
                <EnhancedFuturisticCard
                  key={service.id}
                  className="h-full transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(service.link, '_blank')}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.period}</div>
                    </div>
                    <div className="text-xs text-gray-400 mb-3">{service.category}</div>
                    <div className="flex items-center text-blue-400 text-sm hover:text-blue-300 transition-colors">
                      Learn More <ExternalLink className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                All Services ({filteredServices.length})
              </h2>
              <p className="text-xl text-gray-300">
                Browse our complete portfolio of micro SaaS services
              </p>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
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
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service) => (
                  <EnhancedFuturisticCard
                    key={service.id}
                    className={`transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                      viewMode === 'list' ? 'flex items-center p-6' : 'h-full'
                    }`}
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    {viewMode === 'grid' ? (
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-3xl">{service.icon}</div>
                          {service.popular && (
                            <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              Popular
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-sm text-gray-400">{service.period}</div>
                        </div>
                        <div className="text-xs text-gray-400 mb-3">{service.category}</div>
                        <div className="flex items-center text-blue-400 text-sm hover:text-blue-300 transition-colors">
                          Learn More <ExternalLink className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center w-full">
                        <div className="text-3xl mr-6">{service.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            {service.popular && (
                              <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                Popular
                              </div>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{service.tagline}</p>
                          <div className="text-xs text-gray-400">{service.category}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">{service.price}</div>
                          <div className="text-sm text-gray-400 mb-2">{service.period}</div>
                          <div className="flex items-center text-blue-400 text-sm hover:text-blue-300 transition-colors">
                            Learn More <ExternalLink className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    )}
                  </EnhancedFuturisticCard>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your 14-day free trial today and experience the power of our quantum AI micro SaaS services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href={`tel:${contactInfo.mobile}`}
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                Call Us Now
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Contact Information */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Phone</span>
                  </div>
                  <div className="text-lg text-white">{contactInfo.mobile}</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <div className="text-lg text-white">{contactInfo.email}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Address</span>
                  </div>
                  <div className="text-lg text-white">{contactInfo.address}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Website</span>
                  </div>
                  <div className="text-lg text-white">{contactInfo.website}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </EnhancedFuturisticBackground>
    </div>
  );
}