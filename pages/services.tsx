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
      description: 'Quantum-resistant cybersecurity and advanced threat protection',
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
      name: 'Space Technology',
      description: 'AI-powered space exploration and satellite management',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Space Technology').length
    },
    {
      name: 'Logistics & Supply Chain',
      description: 'Autonomous logistics and supply chain optimization',
      icon: <Truck className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Logistics & Supply Chain').length
    },
    {
      name: 'Energy & Sustainability',
      description: 'Quantum energy optimization and renewable energy management',
      icon: <Zap className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Energy & Sustainability').length
    },
    {
      name: 'Education Technology',
      description: 'AI-powered personalized learning and education platforms',
      icon: <GraduationCap className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Education Technology').length
    },
    {
      name: 'Content Creation & Marketing',
      description: 'AI-powered content generation and marketing automation',
      icon: <FileText className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'AI & Content Creation').length
    },
    {
      name: 'Customer Service & Sales',
      description: 'Intelligent customer service and sales automation',
      icon: <Users className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'AI & Customer Service' || s.category === 'AI & Sales Automation').length
    }
  ];

  return (
    <UltraFuturisticBackground variant="holographic" className="min-h-screen">
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
              500+ Revolutionary
            </span>
            <br />
            <span className="text-white">Micro SaaS Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover cutting-edge micro SaaS solutions powered by quantum AI, autonomous systems, 
            and emerging technologies. Transform your business with industry-leading innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              href="/contact" 
              variant="primary" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              href="#services" 
              variant="secondary" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Explore Services
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
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
                  hoverEffect={true}
                  animated={true}
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
                  hoverEffect={true}
                  animated={true}
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
        <div className="max-w-4xl mx-auto text-center">
          <UltraFuturisticCard variant="quantum" className="p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to learn more about our revolutionary micro SaaS services 
              and how they can transform your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-400">{contactInfo.mobile}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-400">{contactInfo.email}</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                <div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-400">{contactInfo.address}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
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
          </UltraFuturisticCard>
        </div>
      </section>
    </UltraFuturisticBackground>
  );
}