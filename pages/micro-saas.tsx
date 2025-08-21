import React, { useState } from 'react';
import Head from 'next/head';
import { Shield, Clock, DollarSign, TrendingUp, Brain, Rocket, ArrowRight, ExternalLink, Search, Filter, Grid, List, Phone, Mail, MapPin, Star, Check, Sparkles, Atom, Cpu, Globe, FlaskConical } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import ServiceCard from '../components/ui/ServiceCard';
import { allEnhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices } from '../data/enhanced-real-micro-saas-services';
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
      bgColor: 'from-teal-500/10 to-cyan-500/10'
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
    ? allEnhancedRealMicroSaasServices 
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

  const revolutionaryServices = allEnhancedRealMicroSaasServices.filter(service => 
    service.realImplementation && service.popular
  );

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const featuredCategories = [
    {
      name: 'Quantum Computing & AI',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-purple-600 to-indigo-700',
      description: 'Revolutionary quantum solutions for complex problems',
      serviceCount: allEnhancedRealMicroSaasServices.filter(s => s.category === 'Quantum Computing & AI').length
    },
    {
      name: 'Autonomous Manufacturing',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-orange-600 to-red-700',
      description: 'Self-optimizing AI that runs 24/7',
      serviceCount: allEnhancedRealMicroSaasServices.filter(s => s.category === 'Autonomous Manufacturing').length
    },
    {
      name: 'Space Technology',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-blue-600 to-indigo-700',
      description: 'Next-generation space exploration and management',
      serviceCount: allEnhancedRealMicroSaasServices.filter(s => s.category === 'Space Technology').length
    },
    {
      name: 'Metaverse & VR/AR',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-700',
      description: 'Immersive digital experiences and virtual worlds',
      serviceCount: allEnhancedRealMicroSaasServices.filter(s => s.category === 'Metaverse & VR/AR').length
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic-advanced">
      <Head>
        <title>Micro SAAS Services - Zion Tech Group | Revolutionary AI & Technology Solutions</title>
        <meta name="description" content="Explore 150+ revolutionary micro SAAS services powered by AI, quantum computing, and cutting-edge technology. Transform your business with Zion Tech Group's innovative solutions." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, autonomous manufacturing, space technology, metaverse development, biomedical AI, quantum finance" />
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="150+ cutting-edge micro SAAS services powered by AI and quantum technology" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Micro SAAS Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover 150+ cutting-edge services powered by AI, quantum computing, and futuristic technology
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800 rounded-full">
                🚀 500%+ Average ROI
              </span>
              <span className="px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800 rounded-full">
                ⚡ 30+ Day Free Trials
              </span>
              <span className="px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800 rounded-full">
                🔒 Enterprise Security
              </span>
              <span className="px-4 py-2 bg-black/20 backdrop-blur-sm border border-gray-800 rounded-full">
                🌐 24/7 AI Support
              </span>
            </div>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/30 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-black/30 border border-gray-700 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-all duration-300"
                  >
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-4 py-3 bg-black/30 border border-gray-700 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-all duration-300"
                  >
                    <option value="innovation">Sort by Innovation</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="price">Sort by Price</option>
                    <option value="name">Sort by Name</option>
                  </select>
                  <button
                    onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                    className="px-4 py-3 bg-black/30 border border-gray-700 rounded-xl text-white hover:border-cyan-400 transition-all duration-300"
                  >
                    {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of business technology with our revolutionary micro SAAS services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${advantage.bgColor} border border-gray-800 rounded-2xl p-8 h-full transform transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400`}>
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Revolutionary Services */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most innovative and popular services that are transforming industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {revolutionaryServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  service={service}
                  showContactInfo={true}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              href="/micro-saas"
              variant="primary"
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              All Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              {filteredServices.length} services found
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </motion.div>

          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your search criteria or browse all categories</p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                variant="secondary"
                size="lg"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                Clear Filters
                <Filter className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              : "space-y-6"
            }>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard
                    service={service}
                    showContactInfo={true}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Contact us to learn more about our revolutionary micro SAAS services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              >
                Contact Us
                <Mail className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href="/pricing"
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                View Pricing
                <DollarSign className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraAdvancedFuturisticBackground>
  );
}