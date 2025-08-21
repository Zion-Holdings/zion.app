import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
import { realMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/real-micro-saas-services';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-100', label: '$0 - $100' },
    { value: '101-200', label: '$101 - $200' },
    { value: '201-500', label: '$201 - $500' },
    { value: '501+', label: '$501+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' }
  ];

  // Filter and sort services
  let filteredServices = realMicroSaasServices;

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
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
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
      description: 'Revolutionary AI solutions with unprecedented computing power',
      icon: <Brain className="w-6 h-6" />,
      count: realMicroSaasServices.filter(s => s.category === 'AI & Machine Learning' || s.category.includes('AI')).length,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Business Intelligence',
      description: 'Transform data into actionable business insights',
      icon: <BarChart3 className="w-6 h-6" />,
      count: realMicroSaasServices.filter(s => s.category === 'Business Intelligence' || s.category.includes('Data')).length,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Creative & Media',
      description: 'AI-powered creative tools and media automation',
      icon: <Palette className="w-6 h-6" />,
      count: realMicroSaasServices.filter(s => s.category === 'Creative & Media').length,
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Development & DevOps',
      description: 'Streamline development workflows with AI automation',
      icon: <Code className="w-6 h-6" />,
      count: realMicroSaasServices.filter(s => s.category === 'Development & DevOps').length,
      color: 'from-slate-500 to-gray-600'
    },
    {
      name: 'Legal Technology',
      description: 'AI-powered legal document automation and compliance',
      icon: <Shield className="w-6 h-6" />,
      count: realMicroSaasServices.filter(s => s.category === 'Legal Technology').length,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Customer Service',
      description: 'Intelligent customer support and automation',
      icon: <Users className="w-6 h-6" />,
      count: realMicroSaasServices.filter(s => s.category === 'Customer Service & Support').length,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>AI-Powered Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover 25+ real AI-powered micro SAAS services that transform businesses. From legal automation to quantum computing, we deliver cutting-edge solutions with proven ROI." />
        <meta name="keywords" content="AI services, micro SAAS, business automation, legal tech, customer service AI, SEO automation, video editing AI, data analytics, quantum computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="AI-Powered Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with 25+ real AI-powered micro SAAS services. Proven ROI, 21-day free trials, 24/7 support." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <QuantumHolographicBackground>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI-Powered Micro SAAS Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover <span className="text-cyan-400 font-semibold">25+ real, innovative micro SAAS solutions</span> 
                powered by artificial intelligence. Transform your business with cutting-edge technology 
                and proven ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button href="/contact" variant="primary" size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button href="#services" variant="secondary" size="lg">
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </QuantumHolographicBackground>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Categories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered solutions across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhancedCategories.map((category, index) => (
              <div key={index} className="group">
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer`}
                     onClick={() => setSelectedCategory(category.name === 'AI & Machine Learning' ? 'AI & Machine Learning' : category.name)}>
                  <div className="text-cyan-400 mb-4 group-hover:text-fuchsia-400 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.count} services</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Popular</span> Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our customers' favorite AI-powered solutions with proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.slice(0, 6).map((service, index) => (
              <QuantumHolographicCard key={service.id} className="group hover:scale-105 transition-transform duration-500">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.period}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        <span>{service.roi}</span>
                      </div>
                    </div>
                    <Button 
                      href={service.link} 
                      variant="primary" 
                      size="sm"
                      className="group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </QuantumHolographicCard>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section id="services" className="py-20 px-4">
        <EnhancedFuturisticBackground>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Browse our complete collection of AI-powered micro SAAS solutions
              </p>
            </div>

            {/* Filters and Search */}
            <div className="mb-8 p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  {/* Search */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  {/* Category Filter */}
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="All">All Categories</option>
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>

                  {/* Price Range Filter */}
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>

                {/* Sort and View Options */}
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>

                  <div className="flex border border-gray-700 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-gray-900 text-gray-400 hover:text-white'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-3 py-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-gray-900 text-gray-400 hover:text-white'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid/List */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredServices.map((service, index) => (
                <QuantumHolographicCard key={service.id} className="group hover:scale-105 transition-transform duration-500">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        <div className="text-sm text-gray-400">{service.period}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" />
                          <span>{service.roi}</span>
                        </div>
                      </div>
                      <Button 
                        href={service.link} 
                        variant="primary" 
                        size="sm"
                        className="group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </QuantumHolographicCard>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>
        </EnhancedFuturisticBackground>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Business?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI-powered solutions to increase efficiency, 
            reduce costs, and drive growth. Start your 21-day free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              href="/contact" 
              variant="primary" 
              size="lg"
              className="group"
            >
              Start Free Trial
              <Play className="ml-2 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg"
              className="group"
            >
              Schedule Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          <div className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-700">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Contact Our AI Experts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2 text-fuchsia-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2 text-fuchsia-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2 text-fuchsia-400" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}