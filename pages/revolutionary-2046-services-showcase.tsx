import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Cloud, Lock, Globe, Zap, Star, Sparkles
} from 'lucide-react';

// Import our new 2046 revolutionary services
import { revolutionary2046AdvancedAIServices } from '../data/revolutionary-2046-advanced-ai-services';
import { revolutionary2046AdvancedITServices } from '../data/revolutionary-2046-advanced-it-services';
import { revolutionary2046AdvancedMicroSaas } from '../data/revolutionary-2046-advanced-micro-saas';

const Revolutionary2046ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Combine all 2046 revolutionary services
  const allServices = [
    ...revolutionary2046AdvancedAIServices,
    ...revolutionary2046AdvancedITServices,
    ...revolutionary2046AdvancedMicroSaas
  ];

  // Get unique categories and types
  const categories = ['all', ...new Set(allServices.map(service => service.category))];
  const types = ['all', ...new Set(allServices.map(service => service.type))];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesType = selectedType === 'all' || service.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const stats = [
    { number: "18+", label: "Revolutionary Services", icon: Star, color: "from-purple-500 to-pink-500" },
    { number: "99.99%", label: "Uptime Guarantee", icon: Zap, color: "from-cyan-500 to-blue-500" },
    { number: "24/7", label: "AI Support Available", icon: Brain, color: "from-green-500 to-emerald-500" },
    { number: "200+", label: "Countries Served", icon: Globe, color: "from-orange-500 to-red-500" }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution", description: "Next-generation AI consciousness with emotional intelligence", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Neural Networks", description: "Quantum-powered AI with consciousness integration", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity", description: "Quantum-resistant security with AI consciousness", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Resource Intelligence", description: "AI-powered space exploration with consciousness", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous Business Intelligence", description: "Fully autonomous AI business intelligence", color: "from-emerald-500 to-teal-500" },
    { icon: Cloud, title: "Quantum Cloud Infrastructure", description: "Quantum-powered cloud with consciousness", color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <Layout>
      <SEO 
        title="Revolutionary 2046 Services Showcase | Zion Tech Group"
        description="Explore our revolutionary 2046 advanced AI services, IT services, and micro SAAS solutions. Quantum computing, AI consciousness, and futuristic technology solutions."
        keywords={["revolutionary 2046 services", "AI consciousness", "quantum computing", "micro SAAS", "IT services", "futuristic technology"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
          <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary 2046
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              Services Showcase
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary 2046 advanced AI services, 
              quantum-powered IT solutions, and consciousness-driven micro SAAS platforms.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
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

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge features that make our 2046 services truly revolutionary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-white text-opacity-90">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search revolutionary services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-4">
                <div className="flex bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category and Type Filters */}
            <div className="flex flex-wrap gap-4 mt-6">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Services Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative ${
                    viewMode === 'list' ? 'flex gap-6 p-6 bg-gray-800 rounded-2xl' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="relative p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-center justify-between mb-6">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500">
                            <Brain className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-sm text-cyan-400 font-medium">{service.type}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400">Category:</span>
                            <span className="text-sm text-white">{service.category}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400">Market Size:</span>
                            <span className="text-sm text-cyan-400">{service.marketSize}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-cyan-400">{service.pricing.starter}</span>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <span className="text-sm text-cyan-400 font-medium">{service.type}</span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-gray-400">Category:</span>
                          <p className="text-sm text-white">{service.category}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Market Size:</span>
                          <p className="text-sm text-cyan-400">{service.marketSize}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Starting Price:</span>
                          <p className="text-sm text-cyan-400">{service.pricing.starter}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">Target:</span>
                          <p className="text-sm text-white">{service.targetAudience.split(',')[0]}...</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or filters</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the revolution and experience the next generation of technology services. 
              Our 2046 solutions are designed to transform your business and propel you into the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Revolutionary2046ServicesShowcase;