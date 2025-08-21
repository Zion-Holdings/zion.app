import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-real-micro-saas-services';

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
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Quantum Computing & AI' || s.category === 'AI & Machine Learning').length
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <Factory className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0' || s.category === 'Robotics & Automation').length
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskConical className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Healthcare & Biotechnology').length
    },
    {
      name: 'Cybersecurity & Defense',
      description: 'Advanced cybersecurity solutions with quantum-resistant encryption',
      icon: <Shield className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Cybersecurity').length
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial optimization and trading platforms',
      icon: <DollarSign className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Financial Technology').length
    },
    {
      name: 'Space & Aerospace',
      description: 'AI-powered space exploration and satellite management',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Space Technology').length
    }
  ];

  return (
    <UltraFuturisticBackground variant="holographic" intensity="medium">
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | 500+ Revolutionary AI & Quantum Solutions</title>
        <meta name="description" content="Explore 500+ revolutionary micro SaaS services powered by quantum AI, autonomous systems, and cutting-edge technology. Transform your business with Zion Tech Group's innovative solutions." />
        <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, autonomous systems, cybersecurity, healthcare AI, fintech, space technology" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group | 500+ Revolutionary AI & Quantum Solutions" />
        <meta property="og:description" content="Explore 500+ revolutionary micro SaaS services powered by quantum AI, autonomous systems, and cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SaaS Services - Zion Tech Group | 500+ Revolutionary AI & Quantum Solutions" />
        <meta name="twitter:description" content="Explore 500+ revolutionary micro SaaS services powered by quantum AI, autonomous systems, and cutting-edge technology." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Micro SaaS Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover 500+ revolutionary micro SaaS services powered by quantum AI, autonomous systems, and cutting-edge technology
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              500+ Services Available
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              30-Day Free Trials
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              99.99% Uptime Guarantee
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Starting from $49/month
            </span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <UltraFuturisticCard variant="quantum" className="p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                >
                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
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
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex border border-slate-600/30 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-3 ${viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800/50 text-gray-400'} hover:bg-cyan-500/10 transition-colors`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-3 ${viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800/50 text-gray-400'} hover:bg-cyan-500/10 transition-colors`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </UltraFuturisticCard>
        </div>

        {/* Service Categories Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enhancedCategories.map((category, index) => (
              <UltraFuturisticCard
                key={index}
                variant={index % 2 === 0 ? 'quantum' : 'holographic'}
                interactive={true}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{category.count}+</div>
                <Button
                  href={`/services?category=${category.name}`}
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  View Services
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* Popular Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.slice(0, 6).map((service, index) => (
              <UltraFuturisticCard
                key={service.id}
                variant={service.variant as any}
                interactive={true}
                glowIntensity="high"
                className="h-full"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.tagline}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-purple-400">{service.category}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4 text-xs">
                    <div className="text-cyan-400 mb-1">{service.marketSize}</div>
                    <div className="text-purple-400">{service.growthRate}</div>
                  </div>
                  
                  <Button
                    href={service.link}
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* All Services Grid/List */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              All Services ({filteredServices.length})
            </h2>
            <div className="text-gray-400">
              Showing {filteredServices.length} of {enhancedRealMicroSaasServices.length} services
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <UltraFuturisticCard
                  key={service.id}
                  variant={service.variant as any}
                  interactive={true}
                  className="h-full"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.tagline}</p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm text-purple-400">{service.category}</span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="w-3 h-3 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4 text-xs">
                      <div className="text-cyan-400 mb-1">{service.marketSize}</div>
                      <div className="text-purple-400">{service.growthRate}</div>
                    </div>
                    
                    <Button
                      href={service.link}
                      variant="primary"
                      size="sm"
                      className="w-full"
                    >
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </UltraFuturisticCard>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <UltraFuturisticCard
                  key={service.id}
                  variant={service.variant as any}
                  interactive={true}
                  className="p-6"
                >
                  <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="text-4xl">{service.icon}</div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <span className="text-sm text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                        {service.popular && (
                          <span className="text-sm text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-300 mb-4">{service.tagline}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-cyan-400 font-semibold">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
                        <div className="text-gray-400">
                          <span className="text-purple-400">{service.marketSize}</span>
                        </div>
                        <div className="text-gray-400">
                          <span className="text-green-400">{service.growthRate}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <span key={idx} className="text-xs text-gray-300 bg-slate-700/50 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      href={service.link}
                      variant="primary"
                      size="sm"
                      className="lg:self-start"
                    >
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </UltraFuturisticCard>
              ))}
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <UltraFuturisticCard variant="quantum" className="text-center p-6">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
              <p className="text-cyan-400 text-lg font-semibold">{contactInfo.mobile}</p>
              <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
            </UltraFuturisticCard>

            <UltraFuturisticCard variant="holographic" className="text-center p-6">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-purple-400 text-lg font-semibold">{contactInfo.email}</p>
              <p className="text-gray-400 text-sm mt-2">Quick response guaranteed</p>
            </UltraFuturisticCard>

            <UltraFuturisticCard variant="neural" className="text-center p-6">
              <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Address</h3>
              <p className="text-green-400 text-sm font-semibold leading-relaxed">{contactInfo.address}</p>
              <p className="text-gray-400 text-sm mt-2">Global operations</p>
            </UltraFuturisticCard>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <UltraFuturisticCard variant="quantum-holographic-advanced" className="p-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already leveraging our revolutionary micro SaaS services. 
              Experience unprecedented growth, efficiency, and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Get Free Consultation
                <MessageSquare className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href="/pricing"
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                View Pricing
                <DollarSign className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>✓ 30-Day Free Trial • ✓ 24/7 AI Support • ✓ 99.99% Uptime Guarantee</p>
              <p className="mt-2">✓ Instant Setup • ✓ Global Infrastructure • ✓ Enterprise Security</p>
            </div>
          </UltraFuturisticCard>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}