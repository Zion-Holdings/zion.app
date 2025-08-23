import React, { useState } from 'react';
import Head from 'next/head';
import { Shield, Clock, DollarSign, TrendingUp, Brain, Rocket, ArrowRight, ExternalLink, Search, Filter, Grid, List, Phone, Mail, MapPin, Sparkles, Star, Users, Zap, Globe, Cpu, Database, Lock, Smartphone, Palette, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Code, BookOpen, Activity, Settings, Atom, Eye, Trophy, Dna, ChevronRight, Check, CpuIcon, BrainCircuit, Network, Satellite, ShieldAlert, FlaskConicalIcon, RocketIcon, GlobeIcon, Target } from 'lucide-react';
import Button from '../components/ui/Button';
import QuantumMatrixBackground from '../components/ui/QuantumMatrixBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
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
      bgColor: 'from-teal-500/10 to-cyan-500/10'
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

  const popularServices = getPopularServices();

  return (
    <QuantumMatrixBackground intensity={0.5} speed={1.0}>
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | 200+ Revolutionary Solutions</title>
        <meta name="description" content="Explore 200+ revolutionary micro SaaS services powered by AI, quantum computing, space technology, and more. Transform your business with cutting-edge solutions." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, space technology, biomedical AI, metaverse, autonomous systems, business solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="200+ revolutionary micro SaaS services powered by cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta name="twitter:description" content="200+ revolutionary micro SaaS services powered by cutting-edge technology." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                200+ Revolutionary
              </span>
              <br />
              <span className="text-white">Micro SaaS Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge micro SaaS solutions powered by AI, quantum computing, space technology, and autonomous systems.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, technologies, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
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
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              >
                <option value="innovation">Most Innovative</option>
                <option value="rating">Highest Rated</option>
                <option value="price">Price: Low to High</option>
                <option value="name">Alphabetical</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-cyan-400">{filteredServices.length}</div>
              <div className="text-sm text-gray-300">Services Available</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-purple-400">{serviceCategories.length}</div>
              <div className="text-sm text-gray-300">Categories</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-green-400">90+</div>
              <div className="text-sm text-gray-300">Day Trials</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-yellow-400">1200%+</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another SaaS provider. We're the future of business technology.
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
                className="group p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {advantage.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Most Popular Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most requested and highest-rated micro SaaS solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {popularServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <QuantumHolographicCard
                  service={service}
                  onClick={() => window.open(service.link, '_blank')}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete portfolio of revolutionary micro SaaS solutions
            </p>
          </motion.div>

          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search criteria or browse all categories</p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl"
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' 
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
                  <QuantumHolographicCard
                    service={service}
                    onClick={() => window.open(service.link, '_blank')}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to learn more about our revolutionary micro SaaS services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Phone</div>
                <div className="text-cyan-400">+1 302 464 0950</div>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Mail className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Email</div>
                <div className="text-purple-400">kleber@ziontechgroup.com</div>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <MapPin className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Address</div>
                <div className="text-green-400 text-sm">364 E Main St STE 1008 Middletown DE 19709</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </QuantumMatrixBackground>
  );
}