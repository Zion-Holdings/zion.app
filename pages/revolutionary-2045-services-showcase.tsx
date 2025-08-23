import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Server, Cloud, Lock, Zap, Star,
  ChevronRight, ChevronDown, Eye, BookOpen, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2045AdvancedMicroSaas } from '../data/revolutionary-2045-advanced-micro-saas';
import { revolutionary2045ITServices } from '../data/revolutionary-2045-it-services';
import { revolutionary2045AIServices } from '../data/revolutionary-2045-ai-services';

const Revolutionary2045ServicesShowcase: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Combine all revolutionary services
  const allServices = [
    ...revolutionary2045AdvancedMicroSaas,
    ...revolutionary2045ITServices,
    ...revolutionary2045AIServices
  ];

  // Get unique categories and types
  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const types = ['all', ...Array.from(new Set(allServices.map(s => s.type)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
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
        case 'category':
          return a.category.localeCompare(b.category);
        case 'type':
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });

  // Get service icon based on category
  const getServiceIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Quantum')) return Atom;
    if (category.includes('Space')) return Rocket;
    if (category.includes('Security') || category.includes('Cybersecurity')) return Shield;
    if (category.includes('Cloud') || category.includes('Infrastructure')) return Cloud;
    if (category.includes('Data')) return Database;
    if (category.includes('DevOps')) return Server;
    if (category.includes('Business')) return Target;
    return Cpu;
  };

  // Get service color based on category
  const getServiceColor = (category: string) => {
    if (category.includes('AI')) return 'from-purple-500 to-pink-500';
    if (category.includes('Quantum')) return 'from-blue-500 to-cyan-500';
    if (category.includes('Space')) return 'from-indigo-500 to-purple-500';
    if (category.includes('Security') || category.includes('Cybersecurity')) return 'from-red-500 to-orange-500';
    if (category.includes('Cloud') || category.includes('Infrastructure')) return 'from-indigo-500 to-purple-500';
    if (category.includes('Data')) return 'from-emerald-500 to-teal-500';
    if (category.includes('DevOps')) return 'from-orange-500 to-red-500';
    if (category.includes('Business')) return 'from-emerald-500 to-teal-500';
    return 'from-gray-500 to-gray-600';
  };

  // Toggle service expansion
  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  // Handle contact
  const handleContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Revolutionary 2045 Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge revolutionary 2045 technology services including AI consciousness, quantum computing, space technology, and autonomous solutions."
        keywords={["revolutionary 2045", "AI consciousness", "quantum computing", "space technology", "autonomous solutions", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" />
              Revolutionary 2045 Technology
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary 2045
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our comprehensive suite of revolutionary 2045 services. 
              From AI consciousness to quantum computing, discover solutions that will transform your business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {allServices.length}+
                </div>
                <div className="text-gray-400 text-sm">Revolutionary Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {categories.length - 1}
                </div>
                <div className="text-gray-400 text-sm">Technology Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {types.length - 1}
                </div>
                <div className="text-gray-400 text-sm">Service Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-400 text-sm">AI Support</div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 pr-10"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                {/* Type Filter */}
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="appearance-none px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 pr-10"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                {/* Sort By */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 pr-10"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="category">Sort by Category</option>
                    <option value="type">Sort by Type</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/50' 
                      : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/50' 
                      : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedCategory !== 'all' || selectedType !== 'all' || searchQuery) && (
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-gray-400 text-sm">Active filters:</span>
                  {selectedCategory !== 'all' && (
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-400/50">
                      Category: {selectedCategory}
                    </span>
                  )}
                  {selectedType !== 'all' && (
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-400/50">
                      Type: {selectedType}
                    </span>
                  )}
                  {searchQuery && (
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-400/50">
                      Search: "{searchQuery}"
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedType('all');
                      setSearchQuery('');
                    }}
                    className="px-3 py-1 bg-gray-600/50 text-gray-300 rounded-full text-sm hover:bg-gray-500/50 transition-colors duration-300"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-400">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </div>

          {/* Services Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                    {/* Service Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getServiceColor(service.category)} flex items-center justify-center`}>
                          {React.createElement(getServiceIcon(service.category), { className: "w-6 h-6 text-white" })}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-cyan-400 font-medium">{service.type}</div>
                          <div className="text-2xl font-bold text-cyan-400">{service.pricing.starter}</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features Preview */}
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Market Size */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-emerald-400 font-semibold">{service.marketSize}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="p-6 pt-0">
                      <button 
                        onClick={() => toggleServiceExpansion(service.id)}
                        className="w-full group/btn relative px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {expandedService === service.id ? 'Show Less' : 'Learn More'}
                          {expandedService === service.id ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </button>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-gray-700/50 pt-6">
                            {/* All Features */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-3">All Features</h4>
                              <div className="grid grid-cols-1 gap-2">
                                {service.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Benefits */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                              <div className="grid grid-cols-1 gap-2">
                                {service.benefits.map((benefit, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                    <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                    <span>{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Use Cases */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.useCases.map((useCase, idx) => (
                                  <span key={idx} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                                    {useCase}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Pricing */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-3">Pricing Plans</h4>
                              <div className="grid grid-cols-1 gap-3">
                                {Object.entries(service.pricing).map(([plan, price]) => (
                                  <div key={plan} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                                    <span className="text-sm font-medium text-gray-300 capitalize">{plan}</span>
                                    <span className="text-sm font-semibold text-cyan-400">{price}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-4 border border-cyan-400/20">
                              <h4 className="text-lg font-semibold text-white mb-3">Get Started</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-gray-300">
                                  <Phone className="w-4 h-4 text-cyan-400" />
                                  <span>{service.mobile}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                  <Mail className="w-4 h-4 text-purple-400" />
                                  <span>{service.contact}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                  <MapPin className="w-4 h-4 text-emerald-400" />
                                  <span>{service.address}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Service Icon and Basic Info */}
                        <div className="flex items-start gap-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getServiceColor(service.category)} flex items-center justify-center flex-shrink-0`}>
                            {React.createElement(getServiceIcon(service.category), { className: "w-8 h-8 text-white" })}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                                {service.name}
                              </h3>
                              <div className="text-right">
                                <div className="text-sm text-cyan-400 font-medium">{service.type}</div>
                                <div className="text-2xl font-bold text-cyan-400">{service.pricing.starter}</div>
                              </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-4">
                              {service.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span>Category: <span className="text-cyan-400">{service.category}</span></span>
                              <span>Market Size: <span className="text-emerald-400">{service.marketSize}</span></span>
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex items-center justify-end">
                          <button 
                            onClick={() => toggleServiceExpansion(service.id)}
                            className="group/btn relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              {expandedService === service.id ? 'Show Less' : 'Learn More'}
                              {expandedService === service.id ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                          </button>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {expandedService === service.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-6 pt-6 border-t border-gray-700/50"
                          >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              {/* Features and Benefits */}
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Features & Benefits</h4>
                                <div className="space-y-3">
                                  {service.features.slice(0, 6).map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Use Cases and Pricing */}
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Use Cases & Pricing</h4>
                                <div className="space-y-3">
                                  <div>
                                    <h5 className="text-sm font-medium text-gray-400 mb-2">Use Cases:</h5>
                                    <div className="flex flex-wrap gap-2">
                                      {service.useCases.slice(0, 4).map((useCase, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                                          {useCase}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-medium text-gray-400 mb-2">Starting Price:</h5>
                                    <span className="text-lg font-bold text-cyan-400">{service.pricing.starter}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Try adjusting your search criteria or filters to find the services you're looking for.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedType('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20 p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with 2045 Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our revolutionary services are designed to propel your business into the future. 
              Get in touch with our team to discuss how we can help you achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContact}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Contact Us Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <button
                onClick={() => window.location.href = '/services'}
                className="px-8 py-4 border-2 border-cyan-400/50 rounded-full text-cyan-300 font-semibold text-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
              >
                View All Services
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-3" />
                <div className="text-white font-semibold">Phone</div>
                <div className="text-gray-400">+1 302 464 0950</div>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-3" />
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-400">kleber@ziontechgroup.com</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-emerald-400 mb-3" />
                <div className="text-white font-semibold">Address</div>
                <div className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Revolutionary2045ServicesShowcase;