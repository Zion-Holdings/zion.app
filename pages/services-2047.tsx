import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle, Zap as ZapIcon,
  Lock, Cloud, Network, Truck, FileText, GraduationCap, DollarSign, Satellite, Cpu, ArrowUpRight,
  Search, Filter, Grid, List, BookOpen, Video, MessageCircle, Calendar, MapPin, Phone, Mail
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2045AdvancedRealMicroSaas } from '../data/revolutionary-2045-advanced-real-micro-saas';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';

// Import our new innovative 2025 services
import { innovativeAIAutonomousEcosystemServices2025 } from '../data/2025-innovative-ai-autonomous-ecosystem';
import { cuttingEdgeITInfrastructureInnovations2025 } from '../data/2025-cutting-edge-it-infrastructure-innovations';
import { innovativeMicroSaasBreakthroughs2025 } from '../data/2025-innovative-micro-saas-breakthroughs';

const Services2047: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2045AdvancedRealMicroSaas,
    ...revolutionary2045AdvancedITServices,
    ...revolutionary2045AdvancedAIServices,
    ...innovativeAIAutonomousEcosystemServices2025,
    ...cuttingEdgeITInfrastructureInnovations2025,
    ...innovativeMicroSaasBreakthroughs2025
  ];

  // Filter services by category and search
  const getFilteredServices = () => {
    let filtered = allRevolutionaryServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (service as any).type?.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'price':
          aValue = a.pricing?.starter || '0';
          bValue = b.pricing?.starter || '0';
          break;
        case 'category':
          aValue = a.category;
          bValue = b.category;
          break;
        default:
          aValue = a.name;
          bValue = b.name;
      }

      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    return filtered;
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allRevolutionaryServices.filter(s => s.category.includes('AI') || s.category.includes('Consciousness')).length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => (s as any).type === 'Micro SAAS' || s.category.includes('Business')).length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length }
  ];

  const filteredServices = getFilteredServices();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const handleServiceClick = (slug: string) => {
    window.location.href = slug;
  };

  return (
    <Layout
      title="Revolutionary Services 2047 - Zion Tech Group"
      description="Discover our cutting-edge technology solutions including AI consciousness, quantum computing, and autonomous systems that are reshaping the future of business and technology."
      keywords="AI consciousness, quantum computing, autonomous systems, cybersecurity, business solutions, IT infrastructure, Zion Tech Group, 2047 technology"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(59, 130, 246, 0.5)", "0 0 40px rgba(59, 130, 246, 0.8)", "0 0 20px rgba(59, 130, 246, 0.5)"] }}
              transition={{ duration: 2, repeat: Infinity as any, ease: "easeInOut" as const }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <SparklesIcon className="w-4 h-4 mr-2" />
              Revolutionary Technology 2047
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the next generation of AI consciousness, quantum computing, and autonomous systems. 
              Transform your business with revolutionary technology that thinks, learns, and evolves.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "5000+", label: "Innovative Services" },
                { number: "99.99%", label: "Uptime Guarantee" },
                { number: "24/7", label: "AI Support Available" },
                { number: "300+", label: "Countries Served" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="category">Sort by Category</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`group px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600'
                }`}
              >
                <category.icon className="w-5 h-5 inline-block mr-2" />
                {category.name}
                <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-800/50 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-6'
              }
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`group relative bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden ${
                    viewMode === 'list' ? 'p-6' : 'p-6'
                  }`}
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Service Icon */}
                  <div className="relative z-10 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                      <Brain className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    {/* Pricing */}
                    {service.pricing && (
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-blue-400">
                          {service.pricing.starter}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">starting from</span>
                      </div>
                    )}

                    {/* Features Preview */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleServiceClick(service.slug)}
                      className="group/btn w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                    >
                      Learn More
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our revolutionary AI consciousness and quantum computing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 border-2 border-blue-500/30 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services2047;