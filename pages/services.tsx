import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Grid, List, Star, TrendingUp, 
  Users, Zap, Shield, Clock, ArrowRight, ExternalLink,
  Brain, Rocket, Dna, DollarSign, Lock, Globe, 
  Wifi, Truck, Gamepad2, Bot, Factory, Car
} from 'lucide-react';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedServiceCard from '../components/ui/EnhancedServiceCard';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { nextGenInnovativeServices } from '../data/next-gen-innovative-services';
import { enterpriseAIServices } from '../data/enterprise-ai-services';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity' | 'newest'>('popularity');

  // Combine all services
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...nextGenInnovativeServices,
    ...enterpriseAIServices
  ];

  // Categories with icons
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-4 h-4" />, count: allServices.length },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: <Zap className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Quantum') || s.name.includes('Quantum')).length },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Space') || s.name.includes('Space')).length },
    { id: 'biotech', name: 'Biotech & Healthcare', icon: <Dna className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Biotech') || s.category.includes('Healthcare')).length },
    { id: 'finance', name: 'Financial Services', icon: <DollarSign className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Trading')).length },
    { id: 'security', name: 'Cybersecurity', icon: <Lock className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'internet', name: 'Internet & Network', icon: <Globe className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Internet') || s.category.includes('Network')).length },
    { id: 'iot', name: 'IoT & Smart Devices', icon: <Wifi className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('IoT') || s.name.includes('IoT')).length },
    { id: 'logistics', name: 'Logistics & Supply Chain', icon: <Truck className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Logistics') || s.category.includes('Supply Chain')).length },
    { id: 'metaverse', name: 'Metaverse & Gaming', icon: <Gamepad2 className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Metaverse') || s.category.includes('Gaming')).length },
    { id: 'robotics', name: 'Robotics & Automation', icon: <Bot className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Factory className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Manufacturing') || s.name.includes('Manufacturing')).length },
    { id: 'vehicles', name: 'Autonomous Vehicles', icon: <Car className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Vehicle') || s.name.includes('Vehicle')).length }
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

  return (
    <EnhancedFuturisticBackground intensity={1.3} variant="neural">
      <EnhancedNavigation />
      <div className="min-h-screen pt-16">
        <Head>
          <title>Services - Zion Tech Group | Revolutionary Micro SaaS Solutions</title>
          <meta name="description" content="Explore 300+ revolutionary micro SaaS services including quantum AI, space technology, biotech, cybersecurity, and more. Transform your business today." />
          <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, space technology, biotech AI, cybersecurity, autonomous systems" />
          <meta property="og:title" content="Services - Zion Tech Group" />
          <meta property="og:description" content="300+ revolutionary micro SaaS services and solutions" />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
        </Head>

        {/* Header Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  300+ Revolutionary
                </span>
                <br />
                <span className="text-white">Micro SaaS Services</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover cutting-edge solutions in quantum AI, space technology, biotech, cybersecurity, 
                and autonomous systems. Transform your business with unprecedented capabilities.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services by name, category, or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-black/50 border border-cyan-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                  <div className="text-gray-400 text-sm">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{allServices.filter(s => s.popular).length}</div>
                  <div className="text-gray-400 text-sm">Popular Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">{categories.length - 1}</div>
                  <div className="text-gray-400 text-sm">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">1000%+</div>
                  <div className="text-gray-400 text-sm">Average ROI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-white/20 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Controls */}
              <div className="flex items-center space-x-4">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-black/50 border border-white/20 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-cyan-500"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="newest">Newest First</option>
                  <option value="name">Alphabetical</option>
                  <option value="price">Price: Low to High</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex border border-white/20 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-all duration-300 ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-all duration-300 ${
                      viewMode === 'list' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-400">
                Showing {filteredServices.length} of {allServices.length} services
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              </p>
            </div>

            {/* Services Grid */}
            <motion.div
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
              }
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={viewMode === 'list' ? 'w-full' : ''}
                >
                  <EnhancedServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or category filters
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
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
                Contact our team to discuss your specific needs and get personalized recommendations
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Our Team
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                >
                  Send Email
                </a>
              </div>

              <div className="mt-8 p-6 bg-black/30 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-cyan-400 font-semibold">Phone</div>
                    <div className="text-gray-300">+1 302 464 0950</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-semibold">Email</div>
                    <div className="text-gray-300">kleber@ziontechgroup.com</div>
                  </div>
                  <div className="text-center">
                    <div className="text-pink-400 font-semibold">Address</div>
                    <div className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}