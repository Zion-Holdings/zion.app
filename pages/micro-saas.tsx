import React, { useState } from 'react';
import Head from 'next/head';
import { Shield, Clock, DollarSign, TrendingUp, Brain, Rocket, ArrowRight, ExternalLink, Search, Filter, Grid, List, Phone, Mail, MapPin, Star, Check, Sparkles, Atom, Cpu, Globe, FlaskConical } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices } from '../data/enhanced-real-micro-saas-services';
import { motion } from 'framer-motion';

export default function MicroSaasPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'innovation'>('innovation');
  const [searchQuery, setSearchQuery] = useState('');
  
  const competitiveAdvantages = [
    {
      icon: '⚡',
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes, not weeks. Our services are designed for immediate value delivery with minimal configuration.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business needs.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee for all services.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-blue-500/10'
    },
    {
      icon: '📊',
      title: 'Real Business Value',
      description: 'Each service solves a specific business problem with measurable ROI and immediate impact.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-500/10 to-purple-500/10'
    },
    {
      icon: '🌐',
      title: 'Unified Platform',
      description: 'Access all services through ziontechgroup.com with single sign-on and integrated billing.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-500/10 to-teal-500/10'
    },
    {
      icon: '🎯',
      title: 'Focused Solutions',
      description: 'Specialized tools that do one thing exceptionally well, without enterprise complexity.',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-500/10 to-pink-500/10'
    }
  ];

  // Filter and sort services
  let filteredServices = selectedCategory === 'all' || selectedCategory === 'All'
    ? enhancedRealMicroSaasServices 
    : getServicesByCategory(selectedCategory);

  // Apply search filter
  if (searchQuery) {
    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.technology.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  // Apply sorting
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'innovation': {
        // Sort by realImplementation first, then by popularity
        if (a.realImplementation && !b.realImplementation) return -1;
        if (!a.realImplementation && b.realImplementation) return 1;
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return 0;
      }
      default:
        return 0;
    }
  });

  const revolutionaryServices = enhancedRealMicroSaasServices.filter(service => 
    service.realImplementation && service.popular
  );

  // Enhanced service highlights with market data
  const enhancedServiceHighlights = [
    {
      title: '🧠 Quantum AI Cognitive Platform',
      description: 'World\'s first quantum-enhanced AI with human-like reasoning. Achieve 1000% ROI through breakthrough discoveries.',
      price: '$299/month',
      marketData: '$15B market, 500% growth',
      competitors: 'IBM Quantum ($2000+/month)',
      savings: 'Save 85% vs. competitors',
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      color: 'from-purple-600 to-indigo-700'
    },
    {
      title: '🏭 Autonomous Manufacturing AI',
      description: 'Self-learning manufacturing systems with zero downtime. Achieve 400% ROI within 6 months.',
      price: '$199/month',
      marketData: '$12.3B market, 320% growth',
      competitors: 'Siemens MindSphere ($500+/month)',
      savings: 'Save 60% vs. competitors',
      link: 'https://ziontechgroup.com/autonomous-manufacturing',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: '🔒 Quantum Cybersecurity Suite',
      description: 'Post-quantum era security with AI threat detection. 300% ROI within 4 months.',
      price: '$159/month',
      marketData: '$6.8B market, 380% growth',
      competitors: 'CrowdStrike ($8.99/user/month)',
      savings: 'Save 70% vs. competitors',
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      color: 'from-red-500 to-pink-600'
    },
    {
      title: '🚀 Space Technology Platform',
      description: 'Cutting-edge space exploration and satellite management. 500% ROI within 8 months.',
      price: '$399/month',
      marketData: '$4.2B market, 280% growth',
      competitors: 'Maxar ($500+/month)',
      savings: 'Save 20% vs. competitors',
      link: 'https://ziontechgroup.com/space-technology',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: '🧬 Biotech AI Platform',
      description: 'AI-powered drug discovery and biotech research. 800% ROI within 12 months.',
      price: '$599/month',
      marketData: '$8.5B market, 420% growth',
      competitors: 'Insitro ($1000+/month)',
      savings: 'Save 40% vs. competitors',
      link: 'https://ziontechgroup.com/biotech-ai',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: '💰 Quantum Financial Trading',
      description: 'Quantum-enhanced algorithmic trading and risk management. 1200% ROI within 6 months.',
      price: '$899/month',
      marketData: '$22B market, 280% growth',
      competitors: 'Bloomberg Terminal ($2000+/month)',
      savings: 'Save 55% vs. competitors',
      link: 'https://ziontechgroup.com/quantum-financial-trading',
      color: 'from-yellow-500 to-amber-600'
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Enhanced service advertising content
  const serviceHighlights = [
    {
      title: '🚀 Quantum AI Cognitive Platform',
      description: 'The world\'s first quantum-enhanced AI with human-like reasoning. Achieve 1000% ROI through breakthrough discoveries.',
      price: '$299/month',
      features: ['Quantum neural networks', 'Human-like reasoning', '1000% ROI reported'],
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      color: 'from-purple-500 to-indigo-600',
      marketPosition: 'First-to-market quantum AI platform. No direct competitors yet.'
    },
    {
      title: '🏭 Autonomous Manufacturing AI',
      description: 'Self-learning manufacturing systems with zero downtime. Achieve 400% ROI within 6 months.',
      price: '$199/month',
      features: ['Predictive maintenance', 'Quality control automation', 'Supply chain intelligence'],
      link: 'https://ziontechgroup.com/autonomous-manufacturing',
      color: 'from-orange-500 to-red-600',
      marketPosition: 'Leading autonomous manufacturing platform. Competes with Siemens MindSphere ($500+/month).'
    },
    {
      title: '🔒 Quantum Cybersecurity Suite',
      description: 'Quantum-resistant security for the post-quantum era. 300% ROI within 4 months.',
      price: '$159/month',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture'],
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      color: 'from-red-500 to-pink-600',
      marketPosition: 'Leading quantum-resistant cybersecurity platform. Competes with CrowdStrike ($8.99/user/month).'
    },
    {
      title: '🚀 Space Technology Platform',
      description: 'Revolutionary space exploration and satellite management. 500% ROI within 8 months.',
      price: '$399/month',
      features: ['Satellite mission management', 'Space data analytics', 'Orbital optimization'],
      link: 'https://ziontechgroup.com/space-technology',
      color: 'from-blue-500 to-indigo-600',
      marketPosition: 'Leading space technology platform. Competes with AGI STK ($1000+/month).'
    }
  ];

  // Enhanced market insights with better pricing
  const marketInsights = [
    {
      metric: '$15B',
      label: 'Quantum AI Market',
      description: 'Growing at 500% annually',
      icon: '🧠',
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Our Quantum AI Platform: $299/month vs. Competitors: $2000+/month'
    },
    {
      metric: '$12.3B',
      label: 'Autonomous Manufacturing',
      description: '320% annual growth rate',
      icon: '🏭',
      color: 'from-orange-500 to-red-600',
      pricing: 'Our Manufacturing AI: $199/month vs. Siemens: $500+/month'
    },
    {
      metric: '$6.8B',
      label: 'Quantum Cybersecurity',
      description: '380% annual growth rate',
      icon: '🔒',
      color: 'from-red-500 to-pink-600',
      pricing: 'Our Security Suite: $159/month vs. CrowdStrike: $8.99/user/month'
    },
    {
      metric: '$4.2B',
      label: 'Space Technology',
      description: '290% annual growth rate',
      icon: '🚀',
      color: 'from-blue-500 to-indigo-600',
      pricing: 'Our Space Platform: $399/month vs. AGI STK: $1000+/month'
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground variant="holographic">
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | Revolutionary AI & Quantum Solutions</title>
        <meta name="description" content="Explore 150+ revolutionary micro SaaS services powered by quantum computing, AI, autonomous systems, and cutting-edge technology. Transform your business today." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, autonomous systems, space technology, metaverse, biomedical AI, quantum finance" />
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="150+ revolutionary micro SaaS services powered by quantum computing and AI" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
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
              <span className="text-gradient-cyan">150+ Revolutionary</span>
              <br />
              <span className="text-gradient-purple">Micro SaaS Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge micro SaaS solutions powered by quantum computing, 
              AI, autonomous systems, and space technology. Experience unprecedented ROI and efficiency.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-cyan-400 mb-1">{enhancedRealMicroSaasServices.length}+</div>
              <div className="text-sm text-slate-400">Total Services</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-purple-400 mb-1">30+</div>
              <div className="text-sm text-slate-400">Day Free Trials</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-green-400 mb-1">500%+</div>
              <div className="text-sm text-slate-400">Average ROI</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-yellow-400 mb-1">99.99%</div>
              <div className="text-sm text-slate-400">Uptime Guarantee</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantages */}
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
              Why Choose <span className="text-gradient-cyan">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver real business value with revolutionary technology that actually works
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${advantage.color} p-3 rounded-xl w-fit mb-4`}>
                  <span className="text-2xl">{advantage.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-slate-300">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
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
              Our most popular and innovative micro SaaS services that are transforming industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revolutionaryServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EnhancedFuturisticCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
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
              Explore <span className="text-gradient-cyan">All Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our complete portfolio of revolutionary micro SaaS solutions
            </p>
          </motion.div>

          {/* Filters and Search */}
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="All">All Categories</option>
                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="innovation">Most Innovative</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price">Price: Low to High</option>
                  <option value="name">Name A-Z</option>
                </select>

                {/* View Mode */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-slate-800/50 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-slate-800/50 text-slate-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <EnhancedFuturisticCard service={service} />
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search criteria or category filter</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-gradient-cyan">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get started with our revolutionary micro SaaS services today
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-slate-400 text-sm">{contactInfo.mobile}</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-slate-400 text-sm">{contactInfo.email}</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-slate-400 text-sm">{contactInfo.address}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="border-slate-600 text-white hover:border-purple-500 hover:text-purple-400 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient-cyan">Ready to Get Started?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our team of experts is ready to help you choose the perfect micro SaaS solution
            </p>
          </motion.div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 text-center"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-cyan-400 font-medium text-lg">{contactInfo.mobile}</p>
              <p className="text-slate-400 text-sm mt-2">Available 24/7 for support</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 text-center"
            >
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-cyan-400 font-medium text-lg">{contactInfo.email}</p>
              <p className="text-slate-400 text-sm mt-2">Quick response guaranteed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 text-center"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-cyan-400 font-medium text-lg">{contactInfo.address}</p>
              <p className="text-slate-400 text-sm mt-2">Visit our headquarters</p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Us Now</h3>
              <p className="text-slate-300 mb-6">
                Our team of experts is ready to help you choose the perfect micro SaaS solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href={`tel:${contactInfo.mobile}`}
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Call Now
                </Button>
                <Button
                  href={`mailto:${contactInfo.email}`}
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Send Email
                </Button>
              </div>
              <p className="text-slate-400 text-sm mt-6">
                Website: <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 underline">{contactInfo.website}</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraAdvancedFuturisticBackground>
  );
}