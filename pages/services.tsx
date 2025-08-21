import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, CheckCircle, XCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AdvancedFuturisticBackground from '../components/ui/AdvancedFuturisticBackground';
import AdvancedFuturisticCard from '../components/ui/AdvancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { enhancedMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-micro-saas-services';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-300', label: '$0 - $300' },
    { value: '301-600', label: '$301 - $600' },
    { value: '601-1000', label: '$601 - $1000' },
    { value: '1001+', label: '$1001+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' }
  ];

  // Filter and sort services
  let filteredServices = enhancedMicroSaasServices;

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

  // Featured Innovative Services
  const featuredInnovativeServices = [
    {
      id: 'quantum-financial-modeling',
      name: 'Quantum Financial Modeling Platform',
      tagline: 'Revolutionary drug discovery using quantum algorithms',
      price: '$899',
      period: '/month',
      description: 'Advanced quantum computing platform for pharmaceutical research, enabling 100x faster drug discovery and molecular simulation.',
      icon: '🧬',
      category: 'Healthcare & Life Sciences',
      variant: 'quantum-holographic-advanced' as const,
      link: 'https://ziontechgroup.com/quantum-biomedical',
      features: ['Quantum molecular dynamics', 'AI drug screening', 'Protein analysis', 'Clinical optimization']
    },
    {
      id: 'ai-autonomous-vehicles',
      name: 'AI Autonomous Vehicles Platform',
      tagline: 'Next-generation self-driving technology',
      price: '$1,299',
      period: '/month',
      description: 'Advanced AI platform for autonomous vehicle development with quantum-enhanced safety algorithms.',
      icon: '🚗',
      category: 'Transportation & Mobility',
      variant: 'quantum-neural-advanced' as const,
      link: 'https://ziontechgroup.com/ai-autonomous-vehicles',
      features: ['Quantum safety algorithms', 'Real-time decision making', 'Advanced sensor fusion', 'Fleet management']
    },
    {
      id: 'quantum-space-exploration',
      name: 'Quantum Space Exploration Platform',
      tagline: 'Revolutionary space technology with quantum computing',
      price: '$1,599',
      period: '/month',
      description: 'Cutting-edge platform for space exploration, satellite optimization, and space mission planning.',
      icon: '🚀',
      category: 'Space Technology',
      variant: 'quantum-space' as const,
      link: 'https://ziontechgroup.com/quantum-space-exploration',
      features: ['Quantum mission planning', 'Satellite optimization', 'Space debris tracking', 'Mission simulation']
    }
  ];

  return (
    <QuantumHolographicBackground variant="neural-quantum" intensity="high">
      <div className="min-h-screen">
        {/* Navigation Section */}
        <section className="relative py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-8">
                  <a href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </a>
                  <nav className="hidden md:flex space-x-6">
                    <a href="/" className="text-white hover:text-cyan-400 transition-colors">Home</a>
                    <a href="/services" className="text-white hover:text-cyan-400 transition-colors">Services</a>
                    <a href="/innovative-services" className="text-white hover:text-cyan-400 transition-colors">Innovative Services</a>
                    <a href="/about" className="text-white hover:text-cyan-400 transition-colors">About</a>
                    <a href="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
                  </nav>
                </div>
                <div className="flex items-center space-x-4">
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">{contactInfo.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <Head>
            <title>Complete Services Portfolio | Zion Tech Group - AI, Cloud, Security & More</title>
            <meta name="description" content="Explore our complete portfolio of 250+ micro SaaS services. AI solutions, cloud infrastructure, cybersecurity, data analytics, IoT, blockchain, and emerging technologies." />
            <meta name="keywords" content="AI services, cloud solutions, cybersecurity, data analytics, IoT platform, blockchain, quantum computing, AR/VR, micro SaaS, business automation" />
            <meta name="author" content="Zion Tech Group" />
            <meta property="og:title" content="Complete Services Portfolio | Zion Tech Group" />
            <meta property="og:description" content="Comprehensive technology services portfolio with AI, cloud, security, and emerging technology solutions." />
            <meta property="og:url" content="https://ziontechgroup.com/services" />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="https://ziontechgroup.com/services" />
          </Head>

          <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Revolutionary Micro SaaS Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the future of technology with our cutting-edge micro SaaS platforms featuring quantum computing, AI, and revolutionary innovations that transform industries.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '12+', label: 'Revolutionary Services', color: 'text-cyan-400' },
                { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
                { value: '30', label: 'Day Free Trials', color: 'text-blue-400' },
                { value: '24/7', label: 'AI Support', color: 'text-green-400' },
                { value: '$500M+', label: 'Market Value', color: 'text-yellow-400' },
                { value: '2500%+', label: 'Average ROI', color: 'text-purple-400' },
                { value: 'Quantum', label: 'Computing Power', color: 'text-indigo-400' },
                { value: 'AI-First', label: 'Architecture', color: 'text-pink-400' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Featured Revolutionary Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredInnovativeServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <AdvancedFuturisticCard
                    variant="quantum"
                    className="h-full"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-cyan-400 mb-4">{service.tagline}</p>
                      <div className="text-3xl font-bold text-white mb-2">
                        {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="h-4 w-4 text-cyan-400 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AdvancedFuturisticCard variant="holographic" className="p-6">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  >
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>

                  {/* Price Range */}
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>

                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>

                  {/* View Mode */}
                  <div className="flex border border-gray-700 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-4 py-3 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-gray-900/50 text-gray-400'}`}
                    >
                      <Grid className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-4 py-3 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-gray-900/50 text-gray-400'}`}
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </AdvancedFuturisticCard>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services-grid" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              All Revolutionary Services
            </motion.h2>
            
            {filteredServices.length === 0 ? (
              <AdvancedFuturisticCard variant="cyberpunk" className="text-center py-12">
                <div className="text-2xl text-gray-400 mb-4">No services found</div>
                <p className="text-gray-500">Try adjusting your search criteria or filters</p>
              </AdvancedFuturisticCard>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AdvancedFuturisticCard
                      variant={service.variant as any || 'quantum'}
                      className="h-full cursor-pointer group"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="text-4xl">{service.icon}</div>
                          {service.popular && (
                            <div className="flex items-center bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs">
                              <Star className="h-3 w-3 mr-1 fill-current" />
                            </div>
                          )}
                        </div>

                        {/* Title and Tagline */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-cyan-400 text-sm mb-3">{service.tagline}</p>
                        </div>

                        {/* Price */}
                        <div className="text-3xl font-bold text-white">
                          {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>

                        {/* Features */}
                        <div className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <Check className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 4 && (
                            <div className="text-xs text-gray-500">
                              +{service.features.length - 4} more features
                            </div>
                          )}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
                          <div className="text-center">
                            <div className="text-sm text-gray-400">Trial</div>
                            <div className="text-white font-semibold">{service.trialDays} days</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-400">Setup</div>
                            <div className="text-white font-semibold">{service.setupTime}</div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between pt-4">
                          <div className="text-sm text-gray-400">
                            ROI: <span className="text-green-400 font-semibold">{service.roi}</span>
                          </div>
                          <Button
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 text-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(service.link, '_blank');
                            }}
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </AdvancedFuturisticCard>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Expert Support & Consultation
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our team of AI and quantum computing experts is here to help you choose the right services and implement them successfully.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <EnhancedFuturisticCard
                variant="neural"
                intensity="medium"
                className="text-center"
              >
                <div className="text-cyan-400 mb-4">
                  <Phone className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-lg text-cyan-400 font-mono">{contactInfo.mobile}</p>
                <p className="text-sm text-gray-400 mt-2">Available 24/7</p>
              </EnhancedFuturisticCard>

              <EnhancedFuturisticCard
                variant="quantum"
                intensity="medium"
                className="text-center"
              >
                <div className="text-fuchsia-400 mb-4">
                  <Mail className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Consultation</h3>
                <p className="text-lg text-fuchsia-400 font-mono break-all">{contactInfo.email}</p>
                <p className="text-sm text-gray-400 mt-2">Response within 2 hours</p>
              </EnhancedFuturisticCard>

              <EnhancedFuturisticCard
                variant="holographic"
                intensity="medium"
                className="text-center"
              >
                <div className="text-green-400 mb-4">
                  <MapPin className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Headquarters</h3>
                <p className="text-sm text-green-400 font-mono leading-relaxed">{contactInfo.address}</p>
                <p className="text-sm text-gray-400 mt-2">Visit us anytime</p>
              </EnhancedFuturisticCard>
            </div>

            <div className="text-center">
              <EnhancedFuturisticCard
                variant="quantum-holographic"
                intensity="low"
                className="max-w-3xl mx-auto"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose Our Services?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">300+ Production-Ready Services</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">21-Day Free Trials</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">Expert Implementation Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">1500%+ Average ROI</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">24/7 Technical Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">Quantum-Safe Security & Compliance</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button href="/contact" variant="primary" size="lg">
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button href="tel:+13024640950" variant="secondary" size="lg">
                      Call Now
                      <Phone className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </EnhancedFuturisticCard>
            </div>
          </div>
        </section>

        {/* Innovative Services Promotion */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Discover Our Revolutionary Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our breakthrough micro SAAS services featuring quantum AI, autonomous systems, and cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <EnhancedFuturisticCard variant="quantum" intensity="high" className="h-full">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚛️🧠</div>
                  <h3 className="text-xl font-bold text-white mb-2">Quantum AI Neural Optimizer</h3>
                  <p className="text-gray-300 text-sm mb-4">1000x faster neural network training with 99.99% accuracy</p>
                  <div className="text-lg font-bold text-cyan-400 mb-2">$2,999/month</div>
                  <div className="text-xs text-gray-400 mb-4">21-day free trial • 2000% ROI guarantee</div>
                  <Button href="/innovative-services" variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </EnhancedFuturisticCard>

              <EnhancedFuturisticCard variant="holographic" intensity="high" className="h-full">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔗⚛️</div>
                  <h3 className="text-xl font-bold text-white mb-2">Quantum Blockchain Platform</h3>
                  <p className="text-gray-300 text-sm mb-4">Infinite scalability with quantum-secured consensus</p>
                  <div className="text-lg font-bold text-cyan-400 mb-2">$1,999/month</div>
                  <div className="text-xs text-gray-400 mb-4">21-day free trial • 1500% ROI guarantee</div>
                  <Button href="/innovative-services" variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </EnhancedFuturisticCard>

              <EnhancedFuturisticCard variant="cyberpunk" intensity="high" className="h-full">
                <div className="text-center">
                  <div className="text-4xl mb-4">🛡️🤖</div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Cybersecurity Quantum Sentinel</h3>
                  <p className="text-gray-300 text-sm mb-4">99.99% threat detection with quantum-resistant encryption</p>
                  <div className="text-lg font-bold text-cyan-400 mb-2">$1,499/month</div>
                  <div className="text-xs text-gray-400 mb-4">14-day free trial • 800% ROI guarantee</div>
                  <Button href="/innovative-services" variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </EnhancedFuturisticCard>
            </div>

            <div className="text-center">
              <Button href="/innovative-services" variant="primary" size="lg" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                <Sparkles className="w-5 h-5 mr-2" />
                Explore All Innovative Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <div className="mt-6 text-sm text-gray-400">
                <div>Contact us: {contactInfo.mobile} | {contactInfo.email}</div>
                <div className="mt-1">Address: {contactInfo.address}</div>
                <div className="mt-1">Website: {contactInfo.website}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <EnhancedFuturisticCard
              variant="quantum-holographic"
              intensity="high"
              className="max-w-4xl mx-auto"
            >
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join the future of technology with our revolutionary micro SaaS services. Get started with a free trial and experience unprecedented ROI and innovation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <Phone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <p className="text-cyan-400">{contactInfo.mobile}</p>
                  </div>
                  <div className="text-center">
                    <Mail className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-cyan-400">{contactInfo.email}</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                    <p className="text-cyan-400">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                    onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
                  >
                    Start Free Trial
                    <Rocket className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg"
                    onClick={() => window.open(contactInfo.website, '_blank')}
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </EnhancedFuturisticCard>
          </div>
        </section>
          </div>
        </div>
      </div>
    </QuantumHolographicBackground>
  );
}

// Helper function to get theme based on service category
function getServiceTheme(category: string): 'quantum' | 'cyberpunk' | 'neural' | 'holographic' {
  const categoryThemes: { [key: string]: 'quantum' | 'cyberpunk' | 'neural' | 'holographic' } = {
    'AI & Machine Learning': 'neural',
    'Quantum Computing': 'quantum',
    'Financial Technology': 'quantum',
    'Healthcare & Life Sciences': 'neural',
    'Cybersecurity': 'cyberpunk',
    'Supply Chain & Logistics': 'quantum',
    'Energy & Utilities': 'quantum',
    'Manufacturing & Industry 4.0': 'cyberpunk',
    'Legal Technology': 'neural',
    'Education Technology': 'neural',
    'Space Technology': 'quantum',
    'Environmental Technology': 'quantum',
    'Blockchain & Web3': 'cyberpunk',
    'IoT & Smart Cities': 'holographic',
    'Biomedical Research': 'neural',
    'Autonomous Vehicles': 'cyberpunk',
    'Robotics & Automation': 'cyberpunk',
    'Data Analytics': 'holographic',
    'Cloud Infrastructure': 'holographic',
    'Mobile Applications': 'holographic'
  };
  
  return categoryThemes[category] || 'quantum';
}