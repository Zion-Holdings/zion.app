import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Grid, List, Star, TrendingUp, 
  Users, Zap, Shield, Clock, ArrowRight, ExternalLink,
  Brain, Rocket, Dna, DollarSign, Lock, Globe, 
  Wifi, Truck, Gamepad2, Bot, Factory, Car,
  Sparkles, Crown, Target, Award, Lightbulb, Mail, Phone
} from 'lucide-react';
import UltraAdvancedQuantumBackground from '../components/ui/UltraAdvancedQuantumBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { aiFuturisticServices } from '../data/ai-futuristic-services';

export default function InnovativeServicesShowcasePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity' | 'newest' | 'innovation'>('innovation');

  // Combine all services
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...emergingTechServices,
    ...aiFuturisticServices
  ];

  // Enhanced categories with icons and innovation scores
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-4 h-4" />, count: allServices.length, innovationScore: 10 },
    { id: 'quantum', name: 'Quantum Computing', icon: <Zap className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Quantum') || s.name.includes('Quantum')).length, innovationScore: 10 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length, innovationScore: 9 },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Space') || s.name.includes('Space')).length, innovationScore: 10 },
    { id: 'biotech', name: 'Biotech & Healthcare', icon: <Dna className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Biotech') || s.category.includes('Healthcare')).length, innovationScore: 9 },
    { id: 'finance', name: 'Financial Services', icon: <DollarSign className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Trading')).length, innovationScore: 8 },
    { id: 'security', name: 'Cybersecurity', icon: <Lock className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length, innovationScore: 9 },
    { id: 'internet', name: 'Internet & Network', icon: <Globe className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Internet') || s.category.includes('Network')).length, innovationScore: 8 },
    { id: 'iot', name: 'IoT & Smart Devices', icon: <Wifi className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('IoT') || s.name.includes('IoT')).length, innovationScore: 8 },
    { id: 'logistics', name: 'Logistics & Supply Chain', icon: <Truck className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Logistics') || s.category.includes('Supply Chain')).length, innovationScore: 7 },
    { id: 'metaverse', name: 'Metaverse & Gaming', icon: <Gamepad2 className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Metaverse') || s.category.includes('Gaming')).length, innovationScore: 9 },
    { id: 'robotics', name: 'Robotics & Automation', icon: <Bot className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length, innovationScore: 8 },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Factory className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Manufacturing') || s.name.includes('Manufacturing')).length, innovationScore: 7 },
    { id: 'vehicles', name: 'Autonomous Vehicles', icon: <Car className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Vehicle') || s.name.includes('Vehicle')).length, innovationScore: 8 }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory) ||
                             service.name.toLowerCase().includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'popularity':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
      case 'innovation':
        // Sort by innovation level (quantum services first, then AI, then others)
        filtered.sort((a, b) => {
          const aScore = a.name.includes('Quantum') ? 10 : a.name.includes('AI') ? 9 : 7;
          const bScore = b.name.includes('Quantum') ? 10 : b.name.includes('AI') ? 9 : 7;
          return bScore - aScore;
        });
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraAdvancedQuantumBackground>
      <div className="min-h-screen">
        <Head>
          <title>Innovative Services Showcase - Zion Tech Group</title>
          <meta name="description" content="Explore our most innovative and cutting-edge micro SaaS services featuring quantum computing, AI, space technology, and revolutionary innovations." />
          <meta name="keywords" content="innovative services, quantum computing, AI services, space technology, cutting-edge technology, micro SaaS" />
          <meta property="og:title" content="Innovative Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Explore our most innovative and cutting-edge micro SaaS services" />
          <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-full">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Innovative
                </span>
                <br />
                <span className="text-white">Services Showcase</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our most revolutionary and cutting-edge micro SaaS services. Experience the future of technology 
                with quantum computing, AI, space technology, and breakthrough innovations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <motion.a
                  href="/services"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket className="w-6 h-6 inline mr-2" />
                  View All Services
                </motion.a>
                
                <motion.a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-6 h-6 inline mr-2" />
                  Get Started
                </motion.a>
              </div>
            </motion.div>

            {/* Innovation Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-cyan-400 text-3xl md:text-4xl font-bold mb-2 flex justify-center">
                  <Crown className="w-8 h-8" />
                </div>
                <div className="text-cyan-400 text-2xl md:text-3xl font-bold mb-1">500+</div>
                <div className="text-gray-400 text-sm">Innovative Services</div>
              </motion.div>
              
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-purple-400 text-3xl md:text-4xl font-bold mb-2 flex justify-center">
                  <Target className="w-8 h-8" />
                </div>
                <div className="text-purple-400 text-2xl md:text-3xl font-bold mb-1">15+</div>
                <div className="text-gray-400 text-sm">Technology Categories</div>
              </motion.div>
              
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-pink-400 text-3xl md:text-4xl font-bold mb-2 flex justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-pink-400 text-2xl md:text-3xl font-bold mb-1">99.9%</div>
                <div className="text-gray-400 text-sm">Innovation Score</div>
              </motion.div>
              
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-green-400 text-3xl md:text-4xl font-bold mb-2 flex justify-center">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <div className="text-green-400 text-2xl md:text-3xl font-bold mb-1">2000%+</div>
                <div className="text-gray-400 text-sm">Average ROI</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search innovative services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                      }`}
                    >
                      {category.icon}
                      {category.name}
                      <span className="bg-gray-700/50 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* View Mode and Sort */}
                <div className="flex gap-3">
                  <div className="flex bg-gray-800/50 rounded-lg p-1 border border-gray-600/50">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-all duration-300 ${
                        viewMode === 'grid'
                          ? 'bg-cyan-500 text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-all duration-300 ${
                        viewMode === 'list'
                          ? 'bg-cyan-500 text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                  >
                    <option value="innovation">Most Innovative</option>
                    <option value="popularity">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="name">Name A-Z</option>
                    <option value="price">Price Low-High</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {filteredServices.length}
                </span> Innovative Services Found
              </h2>
              <p className="text-gray-300">
                Explore our cutting-edge services and transform your business with revolutionary technology
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {filteredServices.length > 0 ? (
                <motion.div
                  className={viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    : 'space-y-6'
                  }
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key={`${searchTerm}-${selectedCategory}-${sortBy}-${viewMode}`}
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      layout
                    >
                      <UltraFuturisticServiceCard
                        service={service}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-lg transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team to learn more about our innovative services and how they can revolutionize your operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-6 h-6 inline mr-2" />
                  Contact Us
                </motion.a>
                
                <motion.a
                  href={`tel:${contactInfo.mobile}`}
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-6 h-6 inline mr-2" />
                  {contactInfo.mobile}
                </motion.a>
              </div>

              <div className="mt-8 text-gray-400">
                <p>Email: {contactInfo.email}</p>
                <p>Address: {contactInfo.address}</p>
                <p>Website: <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">{contactInfo.website}</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedQuantumBackground>
  );
}