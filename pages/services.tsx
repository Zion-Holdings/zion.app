import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, LinkIcon, Building2 } from 'lucide-react';
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
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Quantum Computing & AI' || s.category === 'AI & Machine Learning' || s.category === 'Healthcare & Biotechnology').length,
      marketSize: '$12.5B',
      growthRate: '300%',
      featuredServices: ['Quantum AI Drug Discovery', 'Quantum Financial Optimizer', 'Quantum Healthcare Diagnostics']
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <Factory className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0' || s.category === 'Robotics & Automation').length,
      marketSize: '$180B',
      growthRate: '200%',
      featuredServices: ['Autonomous Factory Orchestrator', 'AI Robotics Platform', 'Smart Manufacturing Suite']
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskConical className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Healthcare & Biotechnology').length,
      marketSize: '$75B',
      growthRate: '280%',
      featuredServices: ['Quantum AI Drug Discovery', 'Quantum Healthcare Diagnostics', 'AI Medical Imaging']
    },
    {
      name: 'Space Technology',
      description: 'AI-powered space mission planning and satellite optimization',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Space Technology').length,
      marketSize: '$8B',
      growthRate: '400%',
      featuredServices: ['Space Exploration AI Platform', 'Satellite Optimization Suite', 'Mission Planning AI']
    },
    {
      name: 'Cybersecurity & Defense',
      description: 'Quantum-resistant encryption and AI-powered threat detection',
      icon: <Shield className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Cybersecurity').length,
      marketSize: '$180B',
      growthRate: '200%',
      featuredServices: ['Quantum Cybersecurity Shield', 'AI Threat Intelligence', 'Zero Trust Security']
    },
    {
      name: 'Environmental Technology',
      description: 'AI-powered climate prediction and sustainability optimization',
      icon: <Leaf className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Environmental Technology').length,
      marketSize: '$12B',
      growthRate: '250%',
      featuredServices: ['AI Climate Prediction Platform', 'Sustainability Analytics', 'Green Energy Optimization']
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial optimization and trading platforms',
      icon: <DollarSign className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Financial Technology').length,
      marketSize: '$25B',
      growthRate: '300%',
      featuredServices: ['Quantum Financial Optimizer', 'AI Trading Platform', 'Risk Management Suite']
    },
    {
      name: 'Education Technology',
      description: 'AI-powered personalized learning and educational platforms',
      icon: <GraduationCap className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Education Technology').length,
      marketSize: '$20B',
      growthRate: '180%',
      featuredServices: ['AI Education Personalizer', 'Learning Analytics Platform', 'Adaptive Content System']
    }
  ];

  // Enhanced hero section with better advertising
  const heroSection = {
    title: "500+ Revolutionary Micro SaaS Services",
    subtitle: "Real, Innovative, AI-Powered Solutions That Actually Work",
    description: "Transform your business with cutting-edge micro SaaS services. From Quantum AI to Autonomous Factories, we deliver real results with proven ROI. No mock services, no empty promises - just innovative technology that drives growth.",
    highlights: [
      "🚀 First-to-Market Quantum AI Solutions",
      "🏭 Industry 4.0 Autonomous Manufacturing", 
      "🛡️ Quantum-Resistant Cybersecurity",
      "🧬 AI-Powered Drug Discovery",
      "💰 Quantum Financial Optimization",
      "🚀 Space Exploration AI Platform"
    ],
    stats: [
      { value: '500+', label: 'Real Services', color: 'text-cyan-400' },
      { value: '99.99%', label: 'Uptime', color: 'text-green-400' },
      { value: '30 Days', label: 'Free Trial', color: 'text-purple-400' },
      { value: '2500%+', label: 'Average ROI', color: 'text-yellow-400' }
    ]
  };

  // Enhanced contact section
  const enhancedContactSection = {
    title: "Ready to Get Started?",
    subtitle: "Our team of experts is ready to help you implement the perfect solution",
    description: "Get started with a free consultation and see the difference our technology can make. No commitment required, expert guidance included.",
    benefits: [
      "🎯 Personalized Solution Design",
      "🚀 Rapid Implementation (1-6 weeks)",
      "💡 Expert Technical Support", 
      "📊 Proven ROI Guarantee",
      "🔄 Continuous Innovation Updates",
      "🌍 Global 24/7 Support"
    ]
  };

  return (
    <UltraFuturisticBackground variant="holographic">
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | 500+ Revolutionary Solutions</title>
        <meta name="description" content="Explore 500+ revolutionary micro SaaS services including quantum AI, autonomous systems, biomedical research, cybersecurity, and emerging technologies. Starting from $49/month." />
        <meta name="keywords" content="micro SaaS services, quantum AI, autonomous systems, biomedical AI, cybersecurity, blockchain, IoT, edge computing, metaverse, VR AR" />
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="500+ revolutionary micro SaaS services with quantum AI and autonomous systems" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              {heroSection.title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto">
            {heroSection.subtitle}
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            {heroSection.description}
          </p>
          
          {/* Enhanced Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 max-w-4xl mx-auto">
            {heroSection.highlights.map((highlight, index) => (
              <div key={index} className="bg-black/20 rounded-lg p-3 border border-cyan-500/30">
                <div className="text-sm text-cyan-400 font-medium">{highlight}</div>
              </div>
            ))}
          </div>

          {/* Enhanced Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {heroSection.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              href="/contact" 
              variant="primary" 
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              Start Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              href="#services" 
              variant="secondary" 
              size="lg"
              className="text-lg px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
            >
              Explore Services
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Contact Information */}
          <div className="bg-black/20 rounded-lg p-6 border border-cyan-500/30 max-w-2xl mx-auto">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-white mb-2">Need Help Choosing?</h3>
              <p className="text-gray-400 text-sm">Our experts are ready to guide you</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-lg text-gray-300">
              Explore our comprehensive range of innovative micro SaaS solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {enhancedCategories.map((category, index) => (
              <UltraFuturisticCard
                key={category.name}
                variant="default"
                className="text-center cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className="text-3xl mb-4 text-cyan-400">{category.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{category.description}</p>
                {category.count && (
                  <div className="text-sm text-cyan-400 font-semibold">
                    {category.count} Services
                  </div>
                )}
              </UltraFuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <UltraFuturisticCard variant="cyberpunk" className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-shrink-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="All">All Categories</option>
                  {enhancedCategories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div className="flex-shrink-0">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex-shrink-0 flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </UltraFuturisticCard>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Available <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-gray-300">
              {filteredServices.length} services found
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <UltraFuturisticCard
                  key={service.id}
                  variant={service.variant as any}
                  className="h-full"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}{service.period}</div>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {service.growthRate}
                    </div>
                    <div className="text-sm text-gray-400">
                      <BarChart3 className="w-4 h-4 inline mr-2" />
                      {service.marketSize}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <Check className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-white font-semibold">{service.rating}</span>
                      <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} day trial
                    </div>
                  </div>

                  <Button
                    href={service.link}
                    variant="primary"
                    className="w-full"
                  >
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </UltraFuturisticCard>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <UltraFuturisticCard
                  key={service.id}
                  variant={service.variant as any}
                  className="p-6"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex items-center lg:w-1/4">
                      <div className="text-4xl mr-4">{service.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {service.growthRate}
                      </div>
                      <div className="text-sm text-gray-400">
                        <BarChart3 className="w-4 h-4 inline mr-2" />
                        {service.marketSize}
                      </div>
                    </div>
                    
                    <div className="lg:w-1/4">
                      <div className="text-2xl font-bold text-white mb-2">{service.price}{service.period}</div>
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-white font-semibold">{service.rating}</span>
                        <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.trialDays} day trial</div>
                    </div>
                    
                    <div className="lg:w-1/6 flex items-center justify-end">
                      <Button
                        href={service.link}
                        variant="primary"
                        size="sm"
                      >
                        View
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </UltraFuturisticCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <UltraFuturisticCard variant="quantum" className="p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {enhancedContactSection.title}
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                {enhancedContactSection.subtitle}
              </p>
              <p className="text-lg text-gray-400">
                {enhancedContactSection.description}
              </p>
            </div>
            
            {/* Enhanced Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-black/20 rounded-lg border border-cyan-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-bold text-lg mb-2">Phone Support</div>
                <div className="text-cyan-400 font-semibold text-xl mb-2">{contactInfo.mobile}</div>
                <div className="text-gray-400 text-sm">Available 24/7</div>
                <div className="text-green-400 text-xs mt-2">✓ Instant Response</div>
              </div>
              
              <div className="text-center p-6 bg-black/20 rounded-lg border border-purple-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-bold text-lg mb-2">Email Support</div>
                <div className="text-purple-400 font-semibold text-lg mb-2">{contactInfo.email}</div>
                <div className="text-gray-400 text-sm">Response within 2 hours</div>
                <div className="text-green-400 text-xs mt-2">✓ Expert Team</div>
              </div>
              
              <div className="text-center p-6 bg-black/20 rounded-lg border border-green-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-bold text-lg mb-2">Global Headquarters</div>
                <div className="text-green-400 font-semibold text-sm mb-2">{contactInfo.address}</div>
                <div className="text-gray-400 text-sm">Strategic location</div>
                <div className="text-green-400 text-xs mt-2">✓ Worldwide Support</div>
              </div>
            </div>

            {/* Enhanced Benefits Section */}
            <div className="bg-gradient-to-r from-black/40 to-black/20 rounded-lg p-8 mb-12 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Why Choose Zion Tech Group?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enhancedContactSection.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-white font-semibold">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="text-center">
              <div className="mb-6">
                <p className="text-lg text-gray-300 mb-4">
                  Get started with a <span className="text-cyan-400 font-bold">free consultation</span> and see the difference our technology can make.
                </p>
                <p className="text-sm text-gray-400">
                  No commitment required • Expert guidance • Custom solution design
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Start Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  href="/pricing" 
                  variant="secondary" 
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                >
                  View Pricing
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  🚀 <span className="text-cyan-400">500+ Services</span> • 💰 <span className="text-green-400">Free Trials</span> • 🌍 <span className="text-purple-400">Global Support</span>
                </p>
              </div>
            </div>
          </UltraFuturisticCard>
        </div>
      </section>
    </UltraFuturisticBackground>
  );
}