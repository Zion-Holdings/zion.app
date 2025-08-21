import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
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
    { value: '0-500', label: '$0 - $500' },
    { value: '501-1000', label: '$501 - $1,000' },
    { value: '1001-2000', label: '$1,001 - $2,000' },
    { value: '2001+', label: '$2,001+' }
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

  const advertisingContent = {
    headline: "500+ Revolutionary Real Micro SaaS Services",
    subheadline: "Transform Your Business with Cutting-Edge AI, Quantum Computing & Autonomous Systems",
    benefits: [
      "🚀 First-to-Market Solutions",
      "💎 Industry-Leading Technology", 
      "🌍 Global Deployment",
      "💰 Competitive Pricing",
      "⚡ Lightning-Fast Setup",
      "🛡️ Enterprise Security"
    ],
    marketPosition: "Zion Tech Group leads the global micro SaaS revolution with patent-pending quantum AI and autonomous systems.",
    pricing: "Services range from $599/month to $2,499/month with 21-day free trials and comprehensive support.",
    contactCTA: "Ready to revolutionize your business? Contact our expert team today!",
    contactDetails: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709",
      website: "https://ziontechgroup.com"
    }
  };

  const popularServices = getPopularServices();

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'Quantum Computing',
      description: 'Revolutionary quantum computing solutions with AI integration',
      icon: <Atom className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Quantum')).length
    },
    {
      name: 'AI & Machine Learning',
      description: 'Advanced AI and machine learning platforms',
      icon: <Brain className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length
    },
    {
      name: 'Cybersecurity',
      description: 'Next-generation security with quantum-resistant encryption',
      icon: <Shield className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security')).length
    },
    {
      name: 'Biomedical & Healthcare',
      description: 'AI-powered healthcare and biomedical research',
      icon: <Dna className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Biomedical') || s.category.includes('Healthcare')).length
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial optimization and trading',
      icon: <DollarSign className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Financial') || s.category.includes('Finance')).length
    },
    {
      name: 'Content & Marketing',
      description: 'AI-powered content creation and marketing automation',
      icon: <FileText className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Content') || s.category.includes('Marketing')).length
    },
    {
      name: 'Data Analytics & BI',
      description: 'Quantum-powered data analytics and business intelligence',
      icon: <BarChart3 className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Data Analytics') || s.category.includes('BI')).length
    },
    {
      name: 'Customer Service & Support',
      description: 'Autonomous AI-powered customer service solutions',
      icon: <MessageSquare className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Customer Service') || s.category.includes('Support')).length
    },
    {
      name: 'Supply Chain & Logistics',
      description: 'Quantum-optimized supply chain and logistics management',
      icon: <Truck className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Supply Chain') || s.category.includes('Logistics')).length
    },
    {
      name: 'Human Resources',
      description: 'AI-powered HR automation and management',
      icon: <Users className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Human Resources') || s.category.includes('HR')).length
    },
    {
      name: 'Legal Technology',
      description: 'AI-powered legal research and automation',
      icon: <ShieldCheck className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Legal') || s.category.includes('Law')).length
    },
    {
      name: 'Sales & Marketing',
      description: 'AI-powered sales automation and optimization',
      icon: <TrendingUp className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Sales') || s.category.includes('Marketing')).length
    },
    {
      name: 'Blockchain & Web3',
      description: 'Quantum-secured blockchain and DeFi platforms',
      icon: <Database className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Blockchain') || s.category.includes('Web3')).length
    },
    {
      name: 'IoT & Edge Computing',
      description: 'AI-powered IoT management and edge computing',
      icon: <Cpu className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('IoT') || s.category.includes('Edge Computing')).length
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Quantum-optimized cloud and infrastructure management',
      icon: <Cloud className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Cloud') || s.category.includes('Infrastructure')).length
    },
    {
      name: 'Video & Media',
      description: 'AI-powered video production and media automation',
      icon: <Play className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Video') || s.category.includes('Media')).length
    },
    {
      name: 'SEO & Digital Marketing',
      description: 'Quantum-powered SEO optimization and digital marketing',
      icon: <Search className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('SEO') || s.category.includes('Digital Marketing')).length
    }
  ];

  return (
    <>
      <Head>
        <title>500+ Revolutionary Real Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge micro SaaS services. AI, Quantum Computing, Autonomous Systems, and more. 21-day free trials." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, autonomous systems, business automation, Zion Tech Group" />
        <meta property="og:title" content="500+ Revolutionary Real Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and autonomous systems. 21-day free trials available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="500+ Revolutionary Real Micro SaaS Services | Zion Tech Group" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and autonomous systems." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <EnhancedFuturisticBackground>
        <div className="min-h-screen py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              {advertisingContent.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              {advertisingContent.subheadline}
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 max-w-6xl mx-auto">
              {advertisingContent.benefits.map((benefit, index) => (
                <div key={index} className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                  <p className="text-sm text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 mb-6">{advertisingContent.contactCTA}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">{advertisingContent.contactDetails.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">{advertisingContent.contactDetails.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">{advertisingContent.contactDetails.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="max-w-7xl mx-auto px-4 mb-12">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="w-full lg:w-auto">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="w-full lg:w-auto">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div className="w-full lg:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-gray-900/50 rounded-lg border border-gray-600">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-3 rounded-l-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-3 rounded-r-lg transition-colors ${
                      viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service Categories Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Explore Our Service Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {enhancedCategories.map((category, index) => (
                <div
                  key={category.name}
                  className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-cyan-400">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.count} services</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Services */}
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Most Popular Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service) => (
                <QuantumHolographicCard key={service.id} className="h-full">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{service.icon}</span>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm">{service.period}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{service.category}</span>
                      <Button
                        variant="quantum"
                        size="sm"
                        onClick={() => window.open(service.link, '_blank')}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </QuantumHolographicCard>
              ))}
            </div>
          </div>

          {/* All Services */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                All Services ({filteredServices.length})
              </h2>
              <div className="text-gray-400">
                Showing {filteredServices.length} of {enhancedRealMicroSaasServices.length} services
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <EnhancedFuturisticCard key={service.id} className="h-full">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{service.icon}</span>
                        {service.popular && (
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                            Popular
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-gray-400 text-sm">{service.period}</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-400">{service.category}</span>
                        <span className="text-sm text-green-400">{service.trialDays} day trial</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{service.setupTime} setup</span>
                        <Button
                          variant="quantum"
                          size="sm"
                          onClick={() => window.open(service.link, '_blank')}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </EnhancedFuturisticCard>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredServices.map((service) => (
                  <div key={service.id} className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{service.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          <p className="text-gray-300 text-sm">{service.description}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm text-gray-400">{service.category}</span>
                            <span className="text-sm text-green-400">{service.trialDays} day trial</span>
                            <span className="text-sm text-gray-400">{service.setupTime} setup</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <Button
                          variant="quantum"
                          size="sm"
                          onClick={() => window.open(service.link, '_blank')}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact our expert team today for a personalized consultation and demo of our revolutionary micro SaaS services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">{contactInfo.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
              <Button
                variant="quantum"
                size="lg"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </EnhancedFuturisticBackground>
    </>
  );
}