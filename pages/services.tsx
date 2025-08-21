import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Users, DollarSign, Settings, TrendingUp, BarChart3, ChevronDown
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025 } from '../data/2025-innovative-it-services';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';
import { additionalRealServices2025 } from '../data/2025-additional-real-services';
import { innovativeAIServices2025 as newInnovativeAIServices } from '../data/2025-innovative-ai-it-services';



const allServices = [
  ...realMicroSaasServices2025,
  ...innovativeAIServices2025,
  ...innovativeITServices2025,
  ...emergingTechServices2025,
  ...additionalRealServices2025,
  ...newInnovativeAIServices
];

const categories = [
  {
    id: 'ai-consciousness',
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI consciousness and emotional intelligence'
  },
  {
    id: 'quantum-emerging',
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Quantum computing and breakthrough technologies'
  },
  {
    id: 'enterprise-it',
    name: 'Enterprise IT',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Enterprise solutions and infrastructure'
  },
  {
    id: 'space-metaverse',
    name: 'Space & Metaverse',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Space exploration and virtual worlds'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions'
  },
  {
    id: 'creative-media',
    name: 'Creative & Media',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'AI-powered creative solutions'
  },
  {
    id: 'healthcare-biotech',
    name: 'Healthcare & Biotech',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Advanced healthcare solutions'
  },
  {
    id: 'transportation-logistics',
    name: 'Transportation & Logistics',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Smart transportation solutions'
  },
  {
    id: 'education-research',
    name: 'Education & Research',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    description: 'Learning and research platforms'
  },
  {
    id: 'customer-success',
    name: 'Customer Success',
    icon: <Users className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-600',
    description: 'AI-powered customer success and retention'
  },
  {
    id: 'financial-technology',
    name: 'Financial Technology',
    icon: <DollarSign className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
    description: 'Quantum and AI-powered financial solutions'
  },
  {
    id: 'devops-infrastructure',
    name: 'DevOps & Infrastructure',
    icon: <Settings className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-600',
    description: 'AI-powered DevOps and infrastructure automation'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-pink-600',
    description: 'Quantum-resistant security solutions'
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-orange-500 to-red-600',
    description: 'AI-powered sales and marketing automation'
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-600',
    description: 'Quantum-powered data analytics and insights'
  }
];

const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Highest Rated' }
];

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');


  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return a.price.monthly - b.price.monthly;
      case 'price-high':
        return b.price.monthly - a.price.monthly;
      case 'popular':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const getCategoryServices = (categoryId: string) => {
    if (categoryId === 'all') return allServices;
    return allServices.filter(service => 
      service.category.toLowerCase().includes(categoryId.toLowerCase())
    );
  };

  const getCategoryStats = (categoryId: string) => {
    const services = getCategoryServices(categoryId);
    return {
      count: services.length,
      avgPrice: Math.round(services.reduce((sum, s) => sum + s.price.monthly, 0) / services.length),
      avgRating: Math.round(services.reduce((sum, s) => sum + s.rating, 0) / services.length * 10) / 10
    };
  };

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group | Future Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive suite of cutting-edge AI, quantum computing, emerging technology, and micro SAAS services designed to transform your business." />
        <meta name="keywords" content="AI services, quantum computing, emerging technology, micro SAAS, enterprise solutions, space technology, metaverse development" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <Layout>
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
          {/* Enhanced Futuristic Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          
          {/* Animated Quantum Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-50"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-30"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            {/* Enhanced Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-6"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                  {allServices.length}+ Revolutionary Services Available
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover our comprehensive suite of cutting-edge AI, quantum computing, emerging technology, 
                and micro SAAS services designed to transform your business and drive innovation.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  AI & Consciousness
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Quantum Computing
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Enterprise IT
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                  Micro SAAS
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  {/* Enhanced Search */}
                  <div className="relative flex-1 w-full lg:w-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-6 h-6" />
                      <input
                        type="text"
                        placeholder="Search our revolutionary services..."
                        value={searchQuery}
                                              onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full lg:w-96 pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-cyan-500/30"
                      />
                    </div>
                  </div>

                  {/* Enhanced Category Filter */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-cyan-500/30 appearance-none pr-10"
                      >
                        <option value="all">All Categories</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 pointer-events-none">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Enhanced Sort */}
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-cyan-500/30 appearance-none pr-10"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 pointer-events-none">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Enhanced View Mode */}
                    <div className="flex items-center space-x-2 bg-gray-800/50 rounded-2xl p-1.5 border border-gray-700/50">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          viewMode === 'grid' 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          viewMode === 'list' 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enhanced Results Count */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                    <span className="text-cyan-300 font-medium">
                      Showing {filteredServices.length} of {allServices.length} revolutionary services
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Category Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Service Categories
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Explore our comprehensive range of cutting-edge services across multiple domains
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => {
                  const stats = getCategoryStats(category.id);
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 cursor-pointer group"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {category.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{category.name}</h3>
                      <p className="text-gray-300 text-base mb-6 leading-relaxed">{category.description}</p>
                      
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div className="group-hover:scale-105 transition-transform duration-300">
                          <div className="text-3xl font-bold text-cyan-400">{stats.count}</div>
                          <div className="text-sm text-gray-400">Services</div>
                        </div>
                        <div className="group-hover:scale-105 transition-transform duration-300">
                          <div className="text-3xl font-bold text-purple-400">${stats.avgPrice}</div>
                          <div className="text-sm text-gray-400">Avg Price</div>
                        </div>
                        <div className="group-hover:scale-105 transition-transform duration-300">
                          <div className="text-3xl font-bold text-green-400">{stats.avgRating}</div>
                          <div className="text-sm text-gray-400">Rating</div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-700/50">
                        <div className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                          Click to explore →
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Services Grid/List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {selectedCategory === 'all' ? 'All Services' : categories.find(c => c.id === selectedCategory)?.name}
                </span>
              </h2>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.05 }}
                      className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden"
                    >
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                      {/* Enhanced Service Header */}
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                              {service.name}
                            </h3>
                            <p className="text-base text-gray-300 leading-relaxed">{service.tagline}</p>
                          </div>
                          {service.popular && (
                            <span className="px-3 py-1.5 text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg shadow-pink-500/25">
                              ⭐ Popular
                            </span>
                          )}
                        </div>
                        
                        {/* Service Icon */}
                        <div className="text-4xl mb-4">{service.icon}</div>
                      </div>

                      {/* Enhanced Price */}
                      <div className="mb-6 relative z-10">
                        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-4">
                          <div className="text-3xl font-bold text-white mb-1">${service.price.monthly}</div>
                          <div className="text-sm text-gray-300">/month</div>
                          <div className="text-xs text-cyan-400 font-medium mt-1">{service.price.trialDays}-day free trial</div>
                        </div>
                      </div>

                      {/* Enhanced Features */}
                      <div className="mb-6 relative z-10">
                        <div className="text-sm text-cyan-400 font-medium mb-3">✨ Key Features</div>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-center group-hover:text-white transition-colors duration-300">
                              <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Enhanced Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-6 text-center relative z-10">
                        <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-cyan-500/30 transition-colors duration-300">
                          <div className="text-cyan-400 font-bold text-lg">{service.rating}/5</div>
                          <div className="text-gray-300 text-xs">Rating</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-purple-500/30 transition-colors duration-300">
                          <div className="text-purple-400 font-bold text-lg">{service.customers}+</div>
                          <div className="text-gray-300 text-xs">Customers</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 group-hover:border-green-500/30 transition-colors duration-300">
                          <div className="text-green-400 font-bold text-lg">{service.price.setupTime}</div>
                          <div className="text-gray-300 text-xs">Setup</div>
                        </div>
                      </div>

                      {/* Enhanced CTA */}
                      <div className="relative z-10">
                        <a
                          href={service.link}
                          className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-6 rounded-2xl text-center font-semibold text-base hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 group-hover:shadow-xl group-hover:shadow-cyan-500/40"
                        >
                          Explore Service
                          <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {sortedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.05 }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Service Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            {service.popular && (
                              <span className="px-3 py-1 text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-300 mb-3">{service.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded-lg">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Pricing & Stats */}
                        <div className="lg:w-48 space-y-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white">${service.price.monthly}</div>
                            <div className="text-sm text-gray-400">/month</div>
                            <div className="text-xs text-green-400">{service.price.trialDays}-day trial</div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="bg-gray-800/30 rounded-lg p-2">
                              <div className="text-cyan-400 font-semibold">{service.rating}/5</div>
                              <div className="text-gray-400">Rating</div>
                            </div>
                            <div className="bg-gray-800/30 rounded-lg p-2">
                              <div className="text-purple-400 font-semibold">{service.customers}+</div>
                              <div className="text-gray-400">Customers</div>
                            </div>
                          </div>
                          
                          <a
                            href={service.link}
                            className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 inline ml-2" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-24"
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-3xl p-16 shadow-2xl shadow-cyan-500/10">
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="mb-8"
                  >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                      Transform Your Business Today
                    </div>
                  </motion.div>
                  
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Ready to Get Started?
                    </span>
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Choose from our comprehensive suite of revolutionary services and start transforming your business today with cutting-edge AI, quantum computing, and emerging technologies.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                    >
                      🚀 Get Started Today
                    </motion.a>
                    <motion.a
                      href="/pricing"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-cyan-500/50 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      💰 View Pricing
                    </motion.a>
                  </div>
                  
                  <div className="mt-10 text-sm text-gray-400">
                    <p>Need help choosing? <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Contact our experts</a> for personalized guidance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}