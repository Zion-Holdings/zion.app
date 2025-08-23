import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, Globe,
  Star, Zap, Infinity, Crown, Eye, Code
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative 2040 services
import { innovative2040AIServices } from '../data/innovative-2040-ai-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { innovative2040MicroSaasServices } from '../data/innovative-2040-micro-saas-services';

const Innovative2040ServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('popularity');

  // Combine all services
  const allServices = [
    ...innovative2040AIServices,
    ...innovative2040ITServices,
    ...innovative2040MicroSaasServices
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return 0;
      }
    });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <SEO 
        title="Innovative 2040 Services Showcase - Zion Tech Group"
        description="Explore our revolutionary 2040 services featuring AI consciousness, quantum computing, and autonomous systems. Next-generation technology solutions for the future."
        keywords={["2040 services", "AI consciousness", "quantum computing", "autonomous systems", "futuristic technology", "Zion Tech Group"]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              animate={{
                x: [0, Math.random() * 1000, 0],
                y: [0, Math.random() * 1000, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: -1,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovative 2040
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Services Showcase
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the future of technology with our revolutionary 2040 services featuring AI consciousness, 
            quantum computing, and fully autonomous systems. Next-generation solutions for tomorrow's challenges.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: "18", label: "Innovative Services", icon: Star, color: "from-cyan-500 to-blue-500" },
              { number: "3", label: "Service Categories", icon: Brain, color: "from-purple-500 to-pink-500" },
              { number: "∞", label: "Future Possibilities", icon: Infinity, color: "from-emerald-500 to-teal-500" },
              { number: "2040", label: "Technology Era", icon: Crown, color: "from-yellow-500 to-orange-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative 2040 services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>

              {/* View Mode */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
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
                className={`bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Popular
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-white">${service.price.toLocaleString()}</span>
                      <span className="text-gray-400">/{service.period}</span>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">Category: {service.category}</div>
                      <div className="text-sm text-gray-400 mb-2">Type: {service.type}</div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.slice(0, 3).map((useCase, idx) => (
                          <span key={idx} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-700/50 pt-4">
                      <div className="text-sm text-gray-400 mb-2">Contact Information:</div>
                      <div className="text-sm text-gray-300">
                        <div>📞 {service.contactInfo.phone}</div>
                        <div>📧 {service.contactInfo.email}</div>
                        <div>🌐 <a href={service.contactInfo.website} className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">{service.contactInfo.website}</a></div>
                      </div>
                    </div>
                    
                    <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center">
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          <p className="text-gray-300 text-sm">{service.tagline}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Popular
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-white">${service.price.toLocaleString()}</span>
                          <span className="text-gray-400">/{service.period}</span>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-sm text-gray-400 mb-2">Category: {service.category}</div>
                          <div className="text-sm text-gray-400 mb-2">Type: {service.type}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                        <div className="space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-700/50 pt-4 mt-6">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                          📞 {service.contactInfo.phone} | 📧 {service.contactInfo.email}
                        </div>
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center">
                          Get Started
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
          
          {filteredServices.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the revolution with our innovative 2040 services. Transform your business with 
              AI consciousness, quantum computing, and autonomous systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-6 h-6 ml-2" />
              </button>
              <button className="border-2 border-purple-500 text-purple-400 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2040ServicesShowcase;