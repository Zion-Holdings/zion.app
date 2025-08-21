import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
    <UltraFuturisticBackground>
      <Head>
        <title>500+ Revolutionary Micro SAAS Services | Zion Tech Group</title>
        <meta name="description" content="Explore 500+ cutting-edge micro SAAS services powered by quantum AI, autonomous systems, and next-generation technology. Transform your business today." />
        <meta name="keywords" content="micro SAAS services, AI solutions, quantum computing, autonomous systems, business automation" />
        <meta property="og:title" content="500+ Revolutionary Micro SAAS Services | Zion Tech Group" />
        <meta property="og:description" content="Transform your business with cutting-edge micro SAAS services powered by quantum AI and autonomous systems." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              500+ Revolutionary
            </span>
            <br />
            <span className="text-white">Micro SAAS Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            Transform your business with cutting-edge AI, quantum computing, and autonomous systems. 
            Each service delivers guaranteed ROI and enterprise-grade reliability.
          </p>

          {/* Contact Information Banner */}
          <UltraFuturisticCard variant="quantum" className="max-w-4xl mx-auto p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Mobile</h3>
                <p className="text-gray-300">{contactInfo.mobile}</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </UltraFuturisticCard>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {advertisingContent.benefits.map((benefit, index) => (
              <UltraFuturisticCard key={index} variant="holographic" delay={index} className="text-center p-6">
                <div className="text-2xl mb-3">{benefit.split(' ')[0]}</div>
                <p className="text-gray-300">{benefit.split(' ').slice(1).join(' ')}</p>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <UltraFuturisticCard variant="neural" className="p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-800 text-gray-400 hover:text-white'
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-300">
              Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> services
              {selectedCategory !== 'All' && (
                <> in <span className="text-cyan-400 font-semibold">{selectedCategory}</span></>
              )}
            </p>
          </div>

          {/* Services Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <UltraFuturisticCard key={service.id} variant="quantum" delay={index % 6} className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.tagline}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} days free
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <Link href={service.link}>
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </UltraFuturisticCard>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <UltraFuturisticCard key={service.id} variant="holographic" delay={index % 6}>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300 mb-3">{service.tagline}</p>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                              {service.category}
                            </span>
                            {service.popular && (
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                POPULAR
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-3xl font-bold text-cyan-400 mb-1">
                            {service.price}
                            <span className="text-sm text-gray-400">{service.period}</span>
                          </div>
                          <div className="text-sm text-gray-400 mb-2">
                            {service.trialDays} days free
                          </div>
                          <div className="text-sm text-gray-400">
                            Setup: {service.setupTime}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-sm text-gray-400 mb-2">Key Features:</p>
                          <ul className="space-y-1">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-300">
                                <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-400 mb-2">Technology:</p>
                          <div className="flex flex-wrap gap-2">
                            {service.technology.slice(0, 3).map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                          <span className="text-cyan-400 font-semibold">ROI:</span> {service.roi}
                        </div>
                        <Link href={service.link}>
                          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </UltraFuturisticCard>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <UltraFuturisticCard variant="cyberpunk" className="text-center p-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setPriceRange('All');
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg"
              >
                Clear Filters
              </Button>
            </UltraFuturisticCard>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <UltraFuturisticCard variant="cyberpunk" className="p-12 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="text-white">Your Business?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {advertisingContent.contactCTA}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">{contactInfo.mobile}</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 text-sm">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`tel:${contactInfo.mobile}`}>
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </Link>
              <Link href={`mailto:${contactInfo.email}`}>
                <Button className="bg-transparent border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </Link>
            </div>
          </UltraFuturisticCard>
        </div>
      </section>
    </UltraFuturisticBackground>
  );
}