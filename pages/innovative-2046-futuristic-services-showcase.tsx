import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart,
  Phone, Mail, MapPin, Search, Grid, List, Sparkles, Target, BarChart3, 
  Lightbulb, Code, Server, Network, ShieldCheck, BrainCircuit, Atom, Satellite,
  Eye, Clock, DollarSign, CheckCircle, ArrowUpRight,
  Filter, SortAsc, SortDesc
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services
import { innovative2046AIServices } from '../data/innovative-2046-ai-services';
import { innovative2046ITServices } from '../data/innovative-2046-it-services';
import { innovative2046MicroSAASServices } from '../data/innovative-2046-micro-saas-services';

const Innovative2046FuturisticServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = [
    ...innovative2046AIServices,
    ...innovative2046ITServices,
    ...innovative2046MicroSAASServices
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];

  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'price':
          aValue = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          bValue = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'reviews':
          aValue = a.reviews;
          bValue = b.reviews;
          break;
        case 'name':
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Neural Interfaces':
      case 'AI & Machine Learning':
        return <Brain className="w-5 h-5" />;
      case 'Space Computing':
      case 'IT & Infrastructure':
        return <Server className="w-5 h-5" />;
      case 'Sustainability':
      case 'Micro SAAS Solutions':
        return <Globe className="w-5 h-5" />;
      default:
        return <Rocket className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Neural Interfaces':
      case 'AI & Machine Learning':
        return 'from-cyan-500 to-purple-600';
      case 'Space Computing':
      case 'IT & Infrastructure':
        return 'from-purple-500 to-pink-600';
      case 'Sustainability':
      case 'Micro SAAS Solutions':
        return 'from-green-500 to-blue-600';
      default:
        return 'from-orange-500 to-red-600';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0">
          {/* Quantum grid effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          {/* Floating orbs */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent">
                  Innovative 2046 Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Discover our revolutionary quantum AI, neural interface, and space technology solutions that are transforming industries worldwide.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{allServices.length}</div>
                  <div className="text-gray-300">Revolutionary Services</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">{categories.length - 1}</div>
                  <div className="text-gray-300">Service Categories</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-2">4.8</div>
                  <div className="text-gray-300">Average Rating</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-10 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-4 flex-1 max-w-2xl">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg"
                    />
                  </div>
                  
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort and View Controls */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <SortAsc className="w-4 h-4 text-gray-400" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 bg-black/30 border border-cyan-400/30 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg"
                    >
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                      <option value="rating">Rating</option>
                      <option value="reviews">Reviews</option>
                    </select>
                    
                    <button
                      onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                      className="p-2 bg-black/30 border border-cyan-400/30 rounded-lg text-gray-400 hover:text-white hover:border-cyan-400 transition-all duration-300"
                    >
                      {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-2 bg-black/30 border border-cyan-400/30 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-all duration-300 ${
                        viewMode === 'grid' 
                          ? 'bg-cyan-500 text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-all duration-300 ${
                        viewMode === 'list' 
                          ? 'bg-cyan-500 text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services Grid/List */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="group"
                    >
                      <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center`}>
                            {getCategoryIcon(service.category)}
                          </div>
                          <div className="text-right">
                            <span className={`inline-block bg-gradient-to-r ${getCategoryColor(service.category)} text-white text-xs px-2 py-1 rounded-full`}>
                              {service.category}
                            </span>
                            <div className="flex items-center gap-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(service.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-600'
                                  }`}
                                />
                              ))}
                              <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        <div className="mb-4">
                          <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                            <DollarSign className="w-4 h-4" />
                            <span>{service.price}</span>
                          </div>
                        </div>

                        <div className="space-y-2 mb-6">
                          <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between">
                          <Link href={service.link}>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                            >
                              Learn More <ArrowUpRight className="w-4 h-4" />
                            </motion.button>
                          </Link>
                          
                          <div className="text-right text-xs text-gray-400">
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{service.customers}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{service.launchDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="group"
                    >
                      <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
                        <div className="flex flex-col lg:flex-row gap-6">
                          <div className="flex-shrink-0">
                            <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                              {getCategoryIcon(service.category)}
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {service.name}
                                  </h3>
                                  <span className={`inline-block bg-gradient-to-r ${getCategoryColor(service.category)} text-white text-xs px-3 py-1 rounded-full`}>
                                    {service.category}
                                  </span>
                                </div>
                                
                                <p className="text-gray-300 text-lg mb-4">
                                  {service.description}
                                </p>
                              </div>
                              
                              <div className="text-right">
                                <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                                <div className="flex items-center gap-1 justify-end mb-2">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < Math.floor(service.rating)
                                          ? 'text-yellow-400 fill-current'
                                          : 'text-gray-600'
                                      }`}
                                    />
                                  ))}
                                  <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                                </div>
                                <div className="text-sm text-gray-400">
                                  <div className="flex items-center gap-1 justify-end">
                                    <Users className="w-3 h-3" />
                                    <span>{service.customers}</span>
                                  </div>
                                  <div className="flex items-center gap-1 justify-end">
                                    <Clock className="w-3 h-3" />
                                    <span>{service.launchDate}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                                <ul className="space-y-2">
                                  {service.features.slice(0, 4).map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                                <ul className="space-y-2">
                                  {service.benefits.slice(0, 4).map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      <span>{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between mt-6 pt-6 border-t border-cyan-400/30">
                              <div className="text-sm text-gray-400">
                                <span className="font-semibold text-white">Market Size:</span> {service.marketSize}
                              </div>
                              
                              <Link href={service.link}>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                                >
                                  Learn More <ArrowUpRight className="w-4 h-4" />
                                </motion.button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
              className="text-center mt-20"
            >
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the future with our revolutionary quantum AI, neural interface, and space technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Started Today
                    </motion.button>
                  </Link>
                  <Link href="/demo">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                    >
                      Request Demo
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Innovative2046FuturisticServicesShowcase;