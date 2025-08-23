import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Search, Filter, Star, TrendingUp, Brain, Shield, Rocket, Globe, 
  Cpu, Database, Atom, Target, Sparkles, Cloud, Heart, BookOpen, Mail, Phone,
  Globe2, Zap, Infinity, Eye, Play, Download, Share2
} from 'lucide-react';

// Import our revolutionary services
import { revolutionary2045AIConsciousnessServices } from '../data/revolutionary-2045-ai-consciousness-services';
import { revolutionary2045ITInfrastructureServices } from '../data/revolutionary-2045-it-infrastructure-services';
import { revolutionary2045MicroSaasServices } from '../data/revolutionary-2045-micro-saas-services';

const Revolutionary2045ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);

  // Combine all services
  const allServices = [
    ...revolutionary2045AIConsciousnessServices,
    ...revolutionary2045ITInfrastructureServices,
    ...revolutionary2045MicroSaasServices
  ];

  // Get unique categories and types
  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const types = ['all', ...Array.from(new Set(allServices.map(s => s.type)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesType = selectedType === 'all' || service.type === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.pricing.starter.replace(/[^0-9.]/g, '')) - parseFloat(b.pricing.starter.replace(/[^0-9.]/g, ''));
        case 'marketSize':
          return parseFloat(a.marketSize.replace(/[^0-9.]/g, '')) - parseFloat(b.marketSize.replace(/[^0-9.]/g, ''));
        default:
          return 0;
      }
    });

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleGetStarted = (service: any) => {
    window.location.href = `/contact?service=${service.id}`;
  };

  return (
    <Layout>
      <main className="relative z-10 py-8">
        {/* Header Section */}
        <section className="text-center mb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary Technology 2045
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Services</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">2045</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our cutting-edge technology solutions that are reshaping the future of business, 
              AI consciousness, and quantum computing. Experience the next evolution of technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{allServices.length}</div>
                <div className="text-sm text-gray-400">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{categories.length - 1}</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{types.length - 1}</div>
                <div className="text-sm text-gray-400">Service Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">∞</div>
                <div className="text-sm text-gray-400">Scalability</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Filters and Search */}
        <section className="mb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Type Filter */}
                <div className="flex flex-wrap gap-3">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedType === type
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Sort and View */}
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500/50"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="marketSize">Sort by Market Size</option>
                  </select>

                  <div className="flex bg-gray-800/50 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className="grid grid-cols-2 gap-1 w-4 h-4">
                        <div className="bg-current rounded-sm" />
                        <div className="bg-current rounded-sm" />
                        <div className="bg-current rounded-sm" />
                        <div className="bg-current rounded-sm" />
                      </div>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className="space-y-1 w-4 h-4">
                        <div className="bg-current rounded-sm h-1" />
                        <div className="bg-current rounded-sm h-1" />
                        <div className="bg-current rounded-sm h-1" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
              </motion.div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 ${
                      viewMode === 'list' ? 'flex items-center gap-6' : ''
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Service Icon */}
                    <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="flex-1">
                      {/* Service Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{service.tagline}</p>
                          </div>
                          <div className="text-right ml-4">
                            <div className="text-xs text-purple-400 font-medium">{service.type}</div>
                            <div className="text-sm text-gray-400">{service.category}</div>
                          </div>
                        </div>
                      </div>

                      {/* Service Features */}
                      <div className="mb-4">
                        <div className="text-sm text-gray-300 mb-2">Key Features:</div>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/30"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                              +{service.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-gray-300 mb-1">Starting at:</div>
                          <div className="text-xl font-bold text-white">{service.pricing.starter}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-300 mb-1">Market Size:</div>
                          <div className="text-lg font-semibold text-emerald-400">{service.marketSize}</div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.button
                          onClick={() => handleServiceClick(service)}
                          className="flex-1 group relative px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="flex items-center justify-center">
                            <Eye className="mr-2 w-4 h-4" />
                            View Details
                          </span>
                        </motion.button>
                        
                        <motion.button
                          onClick={() => handleGetStarted(service)}
                          className="px-4 py-3 bg-transparent border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-3xl border border-gray-700/50 p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Future</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us to learn more about our revolutionary 2045 technology solutions
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">Email</div>
                  <div className="text-gray-400">kleber@ziontechgroup.com</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">Phone</div>
                  <div className="text-gray-400">+1 302 464 0950</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <Globe2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">Website</div>
                  <div className="text-gray-400">ziontechgroup.com</div>
                </div>
              </div>
              
              <motion.button
                onClick={() => window.location.href = '/contact'}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700/50 p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>

              {/* Service Content */}
              <div className="mb-6">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                    <p className="text-xl text-gray-300 mb-4">{selectedService.tagline}</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                        {selectedService.type}
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                        {selectedService.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">{selectedService.description}</p>

                {/* Features and Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing and Market Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <div className="text-2xl font-bold text-white mb-2">Starting Price</div>
                    <div className="text-3xl font-bold text-emerald-400">{selectedService.pricing.starter}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <div className="text-2xl font-bold text-white mb-2">Market Size</div>
                    <div className="text-3xl font-bold text-purple-400">{selectedService.marketSize}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <div className="text-2xl font-bold text-white mb-2">Target Audience</div>
                    <div className="text-sm text-gray-300">{selectedService.targetAudience.split(',')[0]}...</div>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.useCases.map((useCase: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-600/30"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <motion.button
                    onClick={() => handleGetStarted(selectedService)}
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center">
                      Get Started with {selectedService.name}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Revolutionary2045ServicesShowcase;