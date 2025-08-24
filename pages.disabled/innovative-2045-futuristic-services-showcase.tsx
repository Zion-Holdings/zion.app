import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Search, Grid, List, Sparkles, Target, BarChart3, Lightbulb, Code, 
  Server, Network, ShieldCheck, BrainCircuit, Atom, Satellite, Filter,
  ChevronDown, Globe, Lock, Cpu, Database, Cloud, Palette, Heart,
  Phone, Mail, MapPin, Zap, CheckCircle, Clock, DollarSign, Users2
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services
import { innovative2045AdvancedServices } from '../data/innovative-2045-advanced-services';
import { innovative2045ITServices } from '../data/innovative-2045-it-services';
import { innovative2045MicroSAASServices } from '../data/innovative-2045-micro-saas-services';

const Innovative2045FuturisticServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'category'>('name');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const allServices = [
    ...innovative2045AdvancedServices,
    ...innovative2045ITServices,
    ...innovative2045MicroSAASServices
  ];

  const categories = [
    'all',
    'AI & Machine Learning',
    'Quantum Computing',
    'Space Technology',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Micro SAAS',
    'Blockchain',
    'Bio-Computing',
    'Metaverse',
    'Supply Chain',
    'Financial Analytics',
    'HR Analytics',
    'Marketing Automation',
    'Customer Support',
    'Business Intelligence'
  ];

  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Machine Learning': <Brain className="w-5 h-5" />,
      'Quantum Computing': <Atom className="w-5 h-5" />,
      'Space Technology': <Satellite className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Cloud Infrastructure': <Cloud className="w-5 h-5" />,
      'Micro SAAS': <Code className="w-5 h-5" />,
      'Blockchain': <Server className="w-5 h-5" />,
      'Bio-Computing': <BrainCircuit className="w-5 h-5" />,
      'Metaverse': <Globe className="w-5 h-5" />,
      'Supply Chain': <Network className="w-5 h-5" />,
      'Financial Analytics': <BarChart3 className="w-5 h-5" />,
      'HR Analytics': <Users2 className="w-5 h-5" />,
      'Marketing Automation': <Target className="w-5 h-5" />,
      'Customer Support': <Heart className="w-5 h-5" />,
      'Business Intelligence': <Lightbulb className="w-5 h-5" />
    };
    return iconMap[category] || <Sparkles className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-400 to-pink-500',
      'Quantum Computing': 'from-cyan-400 to-blue-500',
      'Space Technology': 'from-indigo-400 to-purple-500',
      'Cybersecurity': 'from-red-400 to-orange-500',
      'Cloud Infrastructure': 'from-blue-400 to-cyan-500',
      'Micro SAAS': 'from-emerald-400 to-teal-500',
      'Blockchain': 'from-yellow-400 to-orange-500',
      'Bio-Computing': 'from-green-400 to-emerald-500',
      'Metaverse': 'from-pink-400 to-purple-500',
      'Supply Chain': 'from-teal-400 to-blue-500',
      'Financial Analytics': 'from-green-400 to-blue-500',
      'HR Analytics': 'from-purple-400 to-indigo-500',
      'Marketing Automation': 'from-pink-400 to-red-500',
      'Customer Support': 'from-orange-400 to-red-500',
      'Business Intelligence': 'from-blue-400 to-indigo-500'
    };
    return colorMap[category] || 'from-gray-400 to-gray-500';
  };

  return (
    <Layout>
      <div className="relative min-h-screen bg-gray-900">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
          
          {/* Floating geometric shapes */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-cyan-400/10 rounded-lg"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block p-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 mb-6"
              >
                <Sparkles className="w-12 h-12 text-cyan-400" />
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Innovative 2045
                </span>
              </h1>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Futuristic Services Showcase
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover our revolutionary portfolio of AI, quantum computing, and space technology solutions 
                that are reshaping industries and defining the future. Experience the power of tomorrow's technology today.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Users, value: '2,500+', label: 'Enterprise Clients' },
                  { icon: Award, value: '99.9%', label: 'Uptime SLA' },
                  { icon: TrendingUp, value: '500%', label: 'Performance Boost' },
                  { icon: Star, value: '4.9/5', label: 'Customer Rating' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm"
                  >
                    <div className="inline-block p-2 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 mb-3">
                      <stat.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search Section */}
        <section className="relative px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search for innovative services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  {categories.slice(0, 8).map((category) => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                          : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {category === 'all' ? 'All Categories' : category}
                    </motion.button>
                  ))}
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium shadow-lg"
                  >
                    <Filter className="w-4 h-4 inline mr-2" />
                    More Filters
                  </motion.button>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Advanced Filters */}
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-white/10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Sort By */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value as any)}
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                        >
                          <option value="name">Name</option>
                          <option value="price">Price</option>
                          <option value="rating">Rating</option>
                          <option value="category">Category</option>
                        </select>
                      </div>

                      {/* Price Range */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            placeholder="Min"
                            className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                          />
                          <input
                            type="text"
                            placeholder="Max"
                            className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                          />
                        </div>
                      </div>

                      {/* Rating Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Minimum Rating</label>
                        <select className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300">
                          <option value="">Any Rating</option>
                          <option value="4.5">4.5+ Stars</option>
                          <option value="4.0">4.0+ Stars</option>
                          <option value="3.5">3.5+ Stars</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between">
                <div className="text-gray-300">
                  Showing <span className="text-white font-semibold">{filteredServices.length}</span> of{' '}
                  <span className="text-white font-semibold">{allServices.length}</span> innovative services
                </div>
                <div className="text-gray-400 text-sm">
                  {selectedCategory !== 'all' && `Filtered by: ${selectedCategory}`}
                </div>
              </div>
            </motion.div>

            {/* Services Display */}
            {viewMode === 'grid' ? (
              <motion.div
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -10,
                      boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)"
                    }}
                    className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500"
                  >
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="inline-block p-3 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                          {getCategoryIcon(service.category)}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">{service.price}</div>
                          <div className="text-sm text-gray-400">Starting Price</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Category Badge */}
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white border border-white/30`}>
                        {service.category}
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        {service.rating} ({service.reviews})
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-cyan-400" />
                        {service.customers}
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologyStack?.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300 border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Service Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {getCategoryIcon(service.category)}
                        </div>
                      </div>

                      {/* Service Content */}
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                              {service.name}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-cyan-400 mb-1">{service.price}</div>
                            <div className="text-sm text-gray-400">Starting Price</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {/* Features */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                  <CheckCircle className="w-3 h-3 text-cyan-400 mt-1 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Stats */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Performance</h4>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm text-gray-300">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                {service.rating} ({service.reviews})
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-300">
                                <Users className="w-4 h-4 text-cyan-400" />
                                {service.customers}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-300">
                                <Clock className="w-4 h-4 text-green-400" />
                                {service.launchDate}
                              </div>
                            </div>
                          </div>

                          {/* Technology */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Technology</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologyStack?.slice(0, 3).map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300 border border-white/10">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Category and CTA */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-white/10">
                          <div className="flex items-center gap-4">
                            <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white border border-white/30`}>
                              {service.category}
                            </div>
                            <div className="text-sm text-gray-400">
                              Market Size: {service.marketSize}
                            </div>
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No Services Found</h3>
                <p className="text-gray-300 mb-8 max-w-md mx-auto">
                  Try adjusting your search criteria or browse all categories to discover our innovative services.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  View All Services
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Ready to Transform?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build tomorrow together.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3"
                >
                  <Rocket className="w-6 h-6" />
                  Start Your Journey
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  Contact Sales
                </motion.button>
              </div>

              {/* Contact Info */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Phone, label: 'Phone', value: '+1 302 464 0950' },
                  { icon: Mail, label: 'Email', value: 'kleber@ziontechgroup.com' },
                  { icon: MapPin, label: 'Address', value: '364 E Main St STE 1008, Middletown DE 19709' }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm"
                  >
                    <div className="inline-block p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 mb-4">
                      <contact.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-lg font-semibold text-white mb-2">{contact.label}</div>
                    <div className="text-gray-300">{contact.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Innovative2045FuturisticServicesShowcase;