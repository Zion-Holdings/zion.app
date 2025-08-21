import React, { useState } from 'react';
import Head from 'next/head';
import { Shield, Clock, DollarSign, TrendingUp, Brain, Rocket, ArrowRight, ExternalLink, Search, Filter, Grid, List, Phone, Mail, MapPin, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedFuturisticCard from '../components/ui/UltraAdvancedFuturisticCard';
import { ultimateMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByInnovationLevel } from '../data/ultimate-micro-saas-services';
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
      bgColor: 'from-rose-500/10 to-rose-500/10'
    }
  ];

  // Filter and sort services
  let filteredServices = selectedCategory === 'all' || selectedCategory === 'All'
    ? ultimateMicroSaasServices 
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
        const innovationOrder = { 'Revolutionary': 4, 'Breakthrough': 3, 'Advanced': 2, 'Emerging': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      }
      default:
        return 0;
    }
  });


  const revolutionaryServices = getServicesByInnovationLevel('Revolutionary');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { value: ultimateMicroSaasServices.length.toString(), label: 'Micro SaaS Services', icon: <Rocket className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', icon: <Clock className="w-6 h-6" /> },
    { value: '$10B+', label: 'Combined Market Value', icon: <DollarSign className="w-6 h-6" /> },
    { value: '500%+', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', icon: <Brain className="w-6 h-6" /> }
  ];

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-entanglement" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>100+ Revolutionary Micro SaaS Services | Zion Tech Group - AI, Quantum, Emerging Tech</title>
          <meta name="description" content="Explore 100+ revolutionary micro SaaS services from Zion Tech Group. Quantum AI, autonomous manufacturing, cybersecurity, biomedical research, and emerging technologies. Start your free trial today." />
          <meta name="keywords" content="micro SaaS services, quantum AI, autonomous manufacturing, cybersecurity, biomedical research, financial technology, space technology, metaverse, blockchain, IoT, edge computing" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="100+ Revolutionary Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Revolutionary micro SaaS platform with quantum AI, autonomous systems, and emerging technology solutions." />
          <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Revolutionary Micro SaaS Services
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover 100+ cutting-edge micro SaaS solutions that are transforming industries. 
                From Quantum AI to Autonomous Manufacturing, experience the future of business technology.
              </motion.p>

              {/* Search and Filter Bar */}
              <motion.div 
                className="max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search revolutionary services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/80 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
              </motion.div>

              {/* Category Filter */}
              <motion.div 
                className="flex flex-wrap justify-center gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {serviceCategories.slice(0, 12).map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-cyan-500/50'
                    }`}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}
              </motion.div>

              {/* View Mode and Sort Controls */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-1 border border-gray-700/50">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                >
                  <option value="innovation">Sort by Innovation</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="name">Sort by Name</option>
                </select>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {filteredServices.length} Revolutionary Services Found
              </h2>
              <p className="text-lg text-gray-300">
                {selectedCategory !== 'All' ? `Showing ${selectedCategory} services` : 'Showing all revolutionary services'}
              </p>
            </motion.div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <UltraAdvancedFuturisticCard
                      service={service}
                      className="h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="group relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <UltraAdvancedFuturisticCard
                      service={service}
                      className="group-hover:scale-102 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another SaaS provider. We're the future of business technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitiveAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${advantage.bgColor} border border-gray-700/50 backdrop-blur-xl`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`text-4xl mb-4 ${advantage.color} bg-clip-text text-transparent`}>
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">🚀 Revolutionary Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                First-to-market solutions that are reshaping entire industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {revolutionaryServices.slice(0, 4).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <UltraAdvancedFuturisticCard service={service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already using our revolutionary micro SaaS services
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">{contactInfo.mobile}</p>
                </div>
                
                <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
                
                <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href={`mailto:${contactInfo.email}`}
                  variant="primary"
                  size="lg"
                >
                  Start Free Trial
                </Button>
                
                <Button
                  href={contactInfo.website}
                  variant="secondary"
                  size="lg"
                >
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}