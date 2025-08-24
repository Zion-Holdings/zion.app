import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, CheckCircle,
  ArrowRight, ExternalLink, Play, Download, BookOpen,
  Users, Globe, Zap, Shield, Brain, Atom, Rocket,
  DollarSign, Clock, Award, TrendingUp, Sparkles, Cpu
} from 'lucide-react';
import { innovative2025Services } from '../data/innovative-2025-2026-services';

const InnovativeServicesShowcase2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: innovative2025Services.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Zap className="w-5 h-5" />, count: innovative2025Services.filter(s => s.category === 'micro-saas').length },
    { id: 'ai-services', name: 'AI Services', icon: <Brain className="w-5 h-5" />, count: innovative2025Services.filter(s => s.category === 'ai-services').length },
    { id: 'it-solutions', name: 'IT Solutions', icon: <Cpu className="w-5 h-5" />, count: innovative2025Services.filter(s => s.category === 'it-solutions').length },
    { id: 'quantum-tech', name: 'Quantum Tech', icon: <Atom className="w-5 h-5" />, count: innovative2025Services.filter(s => s.category === 'quantum-tech').length },
    { id: 'space-tech', name: 'Space Tech', icon: <Rocket className="w-5 h-5" />, count: innovative2025Services.filter(s => s.category === 'space-tech').length },
    { id: 'fintech', name: 'Fintech', icon: <DollarSign className="w-5 h-5" />, count: innovative2025Services.filter(s => s.category === 'fintech').length },
    { id: 'healthtech', name: 'Healthtech', icon: <Shield className="w-5 h-5" />, count: innovative2025Services.filter(s => s.category === 'healthtech').length },
    { id: 'edutech', name: 'Edutech', icon: <BookOpen className="w-5 h-5" />, count: innovative2025Services.filter(s => s.category === 'edutech').length }
  ];

  const filteredServices = innovative2025Services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <SEO 
        title="Innovative Services Showcase 2026 | Zion Tech Group"
        description="Discover our revolutionary 2026 technology solutions including AI services, quantum computing, space technology, and innovative micro SAAS platforms."
        keywords="AI services, quantum computing, space technology, micro SAAS, fintech, healthtech, edutech, Zion Tech Group"
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Revolutionary 2026 Services
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Services Showcase
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Explore our comprehensive portfolio of cutting-edge technology solutions designed to transform 
                businesses and drive innovation across industries.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {[
                { label: 'Total Services', value: innovative2025Services.length, color: 'text-cyan-400' },
                { label: 'Categories', value: categories.length - 1, color: 'text-blue-400' },
                { label: 'AI Services', value: innovative2025Services.filter(s => s.category === 'ai-services').length, color: 'text-purple-400' },
                { label: 'Micro SAAS', value: innovative2025Services.filter(s => s.category === 'micro-saas').length, color: 'text-green-400' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 bg-gradient-to-r from-black/40 via-black/20 to-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-400 bg-cyan-400/20 text-cyan-300'
                        : 'border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800/50'
                    }`}
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                    <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                      : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                      : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
                }
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`group ${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300'
                        : 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300'
                    }`}
                  >
                    {/* Service Header */}
                    <div className={`flex ${viewMode === 'list' ? 'items-start gap-6' : 'flex-col items-center text-center'}`}>
                      <div className={`text-4xl mb-4 ${viewMode === 'list' ? 'mb-0' : ''}`}>
                        {service.icon}
                      </div>
                      
                      <div className={`flex-1 ${viewMode === 'list' ? 'text-left' : ''}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h3>
                          {service.popular && (
                            <span className="px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-xs text-yellow-300">
                              <Star className="w-3 h-3 inline mr-1" />
                              Popular
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-300 mb-3 font-medium">{service.tagline}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className={`mt-6 ${viewMode === 'list' ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : ''}`}>
                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-sm font-medium text-gray-300">Pricing</span>
                        </div>
                        <div className="text-2xl font-bold text-green-400">
                          ${service.price.monthly}/month
                        </div>
                        <div className="text-sm text-gray-500">
                          ${service.price.yearly}/year (save {Math.round((1 - service.price.yearly / (service.price.monthly * 12)) * 100)}%)
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {service.price.trialDays}-day free trial • Setup: {service.price.setupTime}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm font-medium text-gray-300">Key Features</span>
                        </div>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Market Info */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-purple-400" />
                          <span className="text-sm font-medium text-gray-300">Market Info</span>
                        </div>
                        <div className="text-sm text-gray-400 space-y-1">
                          <div>Market Size: {service.marketSize}</div>
                          <div>Growth: {service.growthRate}</div>
                          <div>Funding: {service.fundingStatus}</div>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm font-medium text-gray-300">Key Benefits</span>
                        </div>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={service.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center group-hover:scale-105"
                      >
                        <span className="flex items-center justify-center">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </a>
                      
                      <button className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                        <span className="flex items-center justify-center">
                          <Play className="w-4 h-4 mr-2" />
                          Demo
                        </span>
                      </button>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 pt-6 border-t border-gray-700/50">
                      <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {service.customers.toLocaleString()}+ customers
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          {service.rating} ({service.reviews} reviews)
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Launched {new Date(service.launchDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-black/40 via-black/20 to-black/40 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Transform your business with our innovative technology solutions. 
                Get in touch to learn more about how we can help you succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </a>
                
                <a
                  href="/pricing"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
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

export default InnovativeServicesShowcase2026;