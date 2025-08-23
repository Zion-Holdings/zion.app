import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Search, Filter, Star, Brain, Atom, Shield, Rocket, Cpu, Database,
  Cloud, Network, Settings, Monitor, Zap, Eye, Heart, Globe, TrendingUp, Award
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';

const Revolutionary2044ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Combine all revolutionary services
  const allServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesType = selectedType === 'all' || service.type.toLowerCase().includes(selectedType.toLowerCase());
      
      return matchesSearch && matchesCategory && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.pricing.starter.replace(/[^0-9.]/g, '')) - parseFloat(b.pricing.starter.replace(/[^0-9.]/g, ''));
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, color: 'from-yellow-500 to-orange-500' },
    { id: 'it', name: 'IT Services', icon: Cpu, color: 'from-green-500 to-emerald-500' }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'micro saas', name: 'Micro SAAS' },
    { id: 'it services', name: 'IT Services' },
    { id: 'ai services', name: 'AI Services' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'name', name: 'Name A-Z' },
    { id: 'price', name: 'Price Low-High' },
    { id: 'category', name: 'Category' }
  ];

  const stats = [
    { number: "18", label: "Revolutionary Services", icon: Star, color: "from-purple-500 to-pink-500" },
    { number: "6", label: "AI & Consciousness", icon: Brain, color: "from-cyan-500 to-blue-500" },
    { number: "6", label: "IT Services", icon: Cpu, color: "from-emerald-500 to-teal-500" },
    { number: "6", label: "Micro SAAS", icon: Zap, color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
                Revolutionary Services{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  2044
                </span>
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our cutting-edge AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-all duration-300`}>
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    
                    <div className="text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="px-4 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Type Filter */}
                <div>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                  >
                    {types.map(type => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:border-cyan-500/50 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                          <Brain className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                            {service.type}
                          </span>
                          <div className="text-xs text-gray-400 mt-1">
                            {service.category}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                          {service.description}
                        </p>
                        
                        {/* Features Preview */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                          <div className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-xs text-gray-400">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                                {feature}
                              </div>
                            ))}
                            {service.features.length > 3 && (
                              <div className="text-xs text-gray-500 mt-1">
                                +{service.features.length - 3} more features
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-cyan-400">
                            {service.pricing.starter}
                          </span>
                          <div className="text-xs text-gray-400">
                            Market: {service.marketSize}
                          </div>
                        </div>
                        
                        <a
                          href={service.slug}
                          className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.3)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400 mb-8">
                  Try adjusting your search criteria or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedType('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-24">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl backdrop-blur-xl p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already transforming their operations with our revolutionary 2044 technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </a>
                
                <a
                  href="/pricing"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Revolutionary2044ServicesShowcase;