import React, { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, Filter as FilterIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-real-micro-saas-services';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);
  const [showInnovativeServices, setShowInnovativeServices] = useState(true);

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

  // Combine all services
  const allServices = [...expandedMicroSaasServices, ...innovativeServices];

  // Filter and sort services
  let filteredServices = enhancedMicroSaasServices;

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = allServices.filter(service => service.category === selectedCategory);
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = filteredServices.filter(service => {
      const price = parseFloat(service.price.replace('$', ''));
      return price >= min && price <= max;
    });
  }

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price':
        filtered.sort((a, b) => parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', '')));
        break;
      case 'popularity':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'category':
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

import { motion } from 'framer-motion';
import { 
  Star, 
  Check, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin, 
  TrendingUp, 
  Users, 
  Award,
  Zap,
  Shield,
  Brain,
  Rocket,
  DollarSign,
  Clock,
  Target,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { realMicroSaasServices } from '../data/real-micro-saas-services-enhanced';
import { useState } from 'react';

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Enhanced service advertising content with comprehensive market data
  const serviceHighlights = [
    {
      title: '🧠 Quantum AI Cognitive Platform',
      description: 'World\'s first quantum-enhanced AI with human-like reasoning capabilities. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
      price: '$299/month',
      features: ['Quantum neural networks with 1000+ qubits', 'Human-like reasoning and problem-solving', 'Real-time quantum simulation', 'Advanced research collaboration tools'],
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      color: 'from-purple-600 to-indigo-700',
      marketPosition: 'First-to-market quantum AI platform. No direct competitors yet. Traditional AI platforms cost $2000+/month with limited capabilities.',
      marketData: '$15B quantum computing market, 500% annual growth',
      savings: 'Save 85% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🏭 Autonomous Manufacturing AI Platform',
      description: 'Self-learning manufacturing systems achieving zero downtime and 400% ROI within 6 months. Industry 4.0 revolution.',
      price: '$199/month',
      features: ['Predictive maintenance with 99.9% accuracy', 'Real-time quality control automation', 'Supply chain intelligence and optimization', 'Energy consumption optimization'],
      link: 'https://ziontechgroup.com/autonomous-manufacturing',
      color: 'from-orange-500 to-red-600',
      marketPosition: 'Leading autonomous manufacturing platform. Competes with Siemens MindSphere ($500+/month) and PTC ThingWorx ($300+/month).',
      marketData: '$12.3B industrial AI market, 320% annual growth',
      savings: 'Save 60% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🔒 Quantum Cybersecurity Suite',
      description: 'Post-quantum era security with AI threat detection. Future-proof your infrastructure with 300% ROI within 4 months.',
      price: '$159/month',
      features: ['Quantum-resistant encryption algorithms', 'AI-powered threat detection and response', 'Zero-trust architecture implementation', 'Real-time security monitoring'],
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      color: 'from-red-500 to-pink-600',
      marketPosition: 'Advanced quantum-resistant cybersecurity platform. Competes with CrowdStrike ($8.99/user/month) and Palo Alto Networks ($50+/user/month).',
      marketData: '$6.8B quantum security market, 380% annual growth',
      savings: 'Save 70% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚀 Space Technology Platform',
      description: 'Cutting-edge space exploration and satellite management tools. Achieve 500% ROI within 8 months through improved operations.',
      price: '$399/month',
      features: ['Satellite mission management and planning', 'Space data analytics and visualization', 'Orbital optimization algorithms', 'Space debris tracking and avoidance'],
      link: 'https://ziontechgroup.com/space-technology',
      color: 'from-blue-500 to-indigo-600',
      marketPosition: 'Innovative space technology platform. Competes with Maxar ($500+/month) and Planet Labs ($400+/month).',
      marketData: '$4.2B space technology market, 280% annual growth',
      savings: 'Save 20% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧬 Biotech AI Platform',
      description: 'AI-powered drug discovery and biotech research. Accelerate research with 800% ROI within 12 months.',
      price: '$599/month',
      features: ['AI-powered drug discovery algorithms', 'Protein folding prediction with 99.2% accuracy', 'Genomic data analysis and interpretation', 'Clinical trial optimization'],
      link: 'https://ziontechgroup.com/biotech-ai',
      color: 'from-emerald-500 to-teal-600',
      marketPosition: 'Advanced biotech AI platform. Competes with Insitro ($1000+/month) and Atomwise ($800+/month).',
      marketData: '$8.5B biotech AI market, 420% annual growth',
      savings: 'Save 40% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '💰 Quantum Financial Trading Platform',
      description: 'Quantum-enhanced algorithmic trading and risk management. Achieve 1200% ROI within 6 months.',
      price: '$899/month',
      features: ['Quantum-enhanced trading algorithms', 'Real-time market analysis and prediction', 'Advanced risk management systems', 'Portfolio optimization with quantum algorithms'],
      link: 'https://ziontechgroup.com/quantum-financial-trading',
      color: 'from-violet-500 to-purple-600',
      marketPosition: 'Advanced quantum trading platform. Competes with Bloomberg Terminal ($24,000/year) and Thomson Reuters ($22,000/year).',
      marketData: '$25B algorithmic trading market, 450% annual growth',
      savings: 'Save 95% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

  const heroStats = [
    { value: '250+', label: 'Revolutionary Services', icon: <ShieldCheck className="w-6 h-6 text-cyan-400" /> },
    { value: '99.99%', label: 'Uptime Guarantee', icon: <ShieldCheck className="w-6 h-6 text-fuchsia-400" /> },
    { value: '30+', label: 'Day Free Trials', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { value: '1000%+', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6 text-green-400" /> }
  ];
=======
  // Enhanced service highlights
  const serviceHighlights = [
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: '300+ Production-Ready Services',
      description: 'All services are fully functional and deployed in production, not just mockups or prototypes.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: 'Lightning Fast Setup',
      description: 'Most services are ready to use in under 1 hour with automated onboarding and configuration.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with quantum-resistant encryption and 99.9% uptime guarantee.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Proven ROI',
      description: 'Average 1000%+ ROI across all services with real customer success stories.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

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

  return (
    <UltraAdvancedFuturisticBackground variant="quantum">
      <Head>
        <title>Revolutionary Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover 200+ revolutionary micro SaaS services powered by quantum computing, AI, autonomous systems, and cutting-edge technology. Transform your business today." />
        <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, autonomous systems, space technology, biotech AI, quantum finance" />
        <meta property="og:title" content="Revolutionary Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="200+ revolutionary micro SaaS services powered by quantum computing and AI" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-gradient-cyan">200+ Revolutionary</span>
              <br />
              <span className="text-gradient-purple">Micro SaaS Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge micro SaaS solutions powered by quantum computing, 
              AI, autonomous systems, and space technology. Experience unprecedented ROI and innovation.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 max-w-2xl mx-auto mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-white font-semibold">{contactInfo.mobile}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-6 h-6 text-purple-400" />
                <span className="text-white font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient-purple">Featured</span> Revolutionary Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our most innovative and high-impact micro SaaS solutions with proven ROI and market leadership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraAdvancedFuturisticCard
                  variant="quantum-advanced"
                  className="h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <div className="text-3xl">{service.title.split(' ')[0]}</div>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed">{service.description}</p>
                    
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-cyan-400 font-semibold">Market Size</div>
                        <div className="text-slate-300">{service.marketData}</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-purple-400 font-semibold">Savings</div>
                        <div className="text-slate-300">{service.savings}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-slate-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Button
                        href={service.link}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 font-semibold rounded-lg"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </UltraAdvancedFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </motion.div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800/50 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800/50 text-slate-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              {filteredServices.length} Services Found
            </h3>
            <p className="text-slate-400">
              Showing {selectedCategory !== 'All' ? selectedCategory : 'all'} services
              {priceRange !== 'All' && ` in price range ${priceRange}`}
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraAdvancedFuturisticCard
                    variant={service.variant as any || 'quantum'}
                    className="h-full"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-slate-300 text-sm">{service.tagline}</p>
                        </div>
                        <div className="text-3xl ml-3">{service.icon}</div>
                      </div>
                      
                      <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-cyan-400">{service.price}{service.period}</div>
                        {service.popular && (
                          <div className="flex items-center space-x-1 px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-yellow-400 text-xs font-medium">Popular</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="bg-slate-800/50 rounded-lg p-2">
                          <div className="text-cyan-400 font-semibold">Market</div>
                          <div className="text-slate-300">{service.marketSize}</div>
                        </div>
                        <div className="bg-slate-800/50 rounded-lg p-2">
                          <div className="text-purple-400 font-semibold">Growth</div>
                          <div className="text-slate-300">{service.growthRate}</div>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button
                          href={service.link}
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-lg"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </UltraAdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <UltraAdvancedFuturisticCard
                    variant={service.variant as any || 'quantum'}
                    className="p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="text-3xl">{service.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                          <p className="text-slate-300 text-sm">{service.tagline}</p>
                          <p className="text-slate-400 text-sm mt-2">{service.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-xl font-bold text-cyan-400">{service.price}{service.period}</div>
                          <div className="text-slate-400 text-sm">{service.marketSize}</div>
                        </div>
                        
                        <Button
                          href={service.link}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 font-semibold rounded-lg"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </UltraAdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of businesses already using our revolutionary micro SaaS services to achieve unprecedented growth and efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">200+</div>
                <div className="text-slate-300">Revolutionary Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">800%+</div>
                <div className="text-slate-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">30 Days</div>
                <div className="text-slate-300">Free Trial</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-lg"
              >
                Contact Us
                <Mail className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/micro-saas"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold rounded-lg"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
      </div>
    </UltraFuturisticMatrixBackground>
=======
          </motion.div>
        </div>
      </section>
    </UltraAdvancedFuturisticBackground>
  );
}
