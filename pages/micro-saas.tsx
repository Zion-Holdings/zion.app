import React, { useState } from 'react';
import Head from 'next/head';
import { Shield, Clock, DollarSign, TrendingUp, Brain, Rocket, ArrowRight, ExternalLink, Search, Filter, Grid, List, Phone, Mail, MapPin, Sparkles, Star, Users, Zap, Globe, Cpu, Database, Lock, Smartphone, Palette, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Code, BookOpen, Activity, Settings, Atom, Eye, Trophy, Dna, ChevronRight, Check, CpuIcon, BrainCircuit, Network, Satellite, ShieldAlert, FlaskConicalIcon, RocketIcon, GlobeIcon, Target } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedFuturisticCard from '../components/ui/UltraAdvancedFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices } from '../data/enhanced-real-micro-saas-services';
import { motion } from 'framer-motion';

export default function MicroSaasPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'innovation'>('innovation');
  const [searchQuery, setSearchQuery] = useState('');
  
  const competitiveAdvantages = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes, not weeks. Our services are designed for immediate value delivery with minimal configuration.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business needs.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee for all services.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-blue-500/10'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Real Business Value',
      description: 'Each service solves a specific business problem with measurable ROI and immediate impact.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-500/10 to-violet-500/10'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Unified Platform',
      description: 'Access all services through ziontechgroup.com with single sign-on and integrated billing.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-500/10 to-teal-500/10'
    },
    {
      icon: <Target className="w-6 h-6" />,
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
        // Sort by category priority (Quantum and Autonomous first)
        const priorityOrder = {
          'Quantum': 1,
          'Autonomous': 2,
          'AI': 3,
          'Space': 4,
          'Biomedical': 5,
          'Blockchain': 6,
          'Edge': 7,
          'IoT': 8
        };
        
        const aPriority = Object.entries(priorityOrder).find(([key]) => 
          a.category.includes(key)
        )?.[1] || 9;
        
        const bPriority = Object.entries(priorityOrder).find(([key]) => 
          b.category.includes(key)
        )?.[1] || 9;
        
        return aPriority - bPriority;
      }
      default:
        return 0;
    }
  });

  const revolutionaryServices = enhancedRealMicroSaasServices
    .filter(service => service.category.includes('Quantum') || service.category.includes('Autonomous'))
    .slice(0, 6);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const innovationHighlights = [
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: 'Quantum AI Revolution',
      description: 'First-to-market quantum AI platforms with unprecedented cognitive capabilities',
      color: 'from-purple-600 to-indigo-700',
      services: enhancedRealMicroSaasServices.filter(s => s.category.includes('Quantum'))
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Autonomous Systems',
      description: 'Complete autonomous manufacturing and logistics with zero human intervention',
      color: 'from-orange-600 to-red-700',
      services: enhancedRealMicroSaasServices.filter(s => s.category.includes('Autonomous'))
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: 'Space Technology',
      description: 'Advanced satellite management and space data analytics platforms',
      color: 'from-blue-600 to-indigo-700',
      services: enhancedRealMicroSaasServices.filter(s => s.category.includes('Space'))
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: 'Quantum Security',
      description: 'Future-proof cybersecurity using quantum-resistant encryption',
      color: 'from-red-600 to-pink-700',
      services: enhancedRealMicroSaasServices.filter(s => s.category.includes('Quantum') && s.category.includes('Cybersecurity'))
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-entanglement">
      <Head>
        <title>Revolutionary Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Explore 150+ revolutionary micro SaaS services from Quantum AI to Autonomous Manufacturing. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SaaS, quantum AI, autonomous manufacturing, cybersecurity, space technology, metaverse, blockchain, IoT, edge computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Revolutionary Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="150+ revolutionary micro SaaS services transforming business technology" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">150+ Revolutionary Services Available</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 futuristic-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Micro SaaS
              </span>
              <br />
              <span className="text-white">Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our comprehensive portfolio of cutting-edge micro SaaS solutions. From Quantum AI to Autonomous Factories, 
              each service delivers real business value with proven ROI and immediate impact.
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {enhancedRealMicroSaasServices.length}+
                </div>
                <div className="text-sm text-gray-300 font-medium">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-2">
                  {serviceCategories.length - 1}
                </div>
                <div className="text-sm text-gray-300 font-medium">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  30+
                </div>
                <div className="text-sm text-gray-300 font-medium">Day Free Trials</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  500%+
                </div>
                <div className="text-sm text-gray-300 font-medium">Average ROI</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Technology Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services span the most innovative and fastest-growing technology sectors with unprecedented market opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovationHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${highlight.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{highlight.description}</p>
                  <div className="text-sm text-cyan-400 font-medium">
                    {highlight.services.length} services available
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                >
                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Sort By */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                >
                  <option value="innovation">Sort by Innovation</option>
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                </select>

                {/* View Mode */}
                <div className="flex bg-gray-800/50 border border-gray-600/50 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 px-3 py-2 rounded-md transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-4 h-4 mx-auto" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 px-3 py-2 rounded-md transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-400">
                  Showing {filteredServices.length} of {enhancedRealMicroSaasServices.length} services
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-8">Try adjusting your search criteria or browse all categories.</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                variant="primary"
              >
                View All Services
              </Button>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
            }>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {viewMode === 'grid' ? (
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full group hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="text-sm text-gray-400">{service.period}</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-400">
                          <Users className="w-4 h-4 mr-2" />
                          {service.customers.toLocaleString()} customers
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                          {service.rating} ({service.reviews} reviews)
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock className="w-4 h-4 mr-2" />
                          {service.setupTime} setup
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{service.category}</span>
                        <Button href={service.link} variant="secondary" size="sm">
                          Learn More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-start space-x-6">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">{service.price}</div>
                              <div className="text-sm text-gray-400">{service.period}</div>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-sm text-gray-400">
                              <Users className="w-4 h-4 inline mr-1" />
                              {service.customers.toLocaleString()} customers
                            </div>
                            <div className="text-sm text-gray-400">
                              <Star className="w-4 h-4 inline mr-1 text-yellow-400 fill-current" />
                              {service.rating} ({service.reviews} reviews)
                            </div>
                            <div className="text-sm text-gray-400">
                              <Clock className="w-4 h-4 inline mr-1" />
                              {service.setupTime} setup
                            </div>
                            <div className="text-sm text-gray-400">
                              <TrendingUp className="w-4 h-4 inline mr-1" />
                              {service.growthRate}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{service.category}</span>
                            <Button href={service.link} variant="secondary" size="sm">
                              Learn More
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another SaaS provider - we're your innovation partner, delivering cutting-edge technology 
              that transforms your business and drives unprecedented growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-700/50 group-hover:border-green-500/50 transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${advantage.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team to learn more about our revolutionary micro SaaS services and how they can transform your business.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300">
                  <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-cyan-400 font-medium">{contactInfo.mobile}</p>
                </div>
              </motion.div>

              <motion.div
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-purple-400 font-medium">{contactInfo.email}</p>
                </div>
              </motion.div>

              <motion.div
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-700/50 group-hover:border-pink-500/50 transition-all duration-300">
                  <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                  <p className="text-pink-400 font-medium text-sm">{contactInfo.address}</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Schedule a Consultation
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </UltraAdvancedFuturisticBackground>
  );
}