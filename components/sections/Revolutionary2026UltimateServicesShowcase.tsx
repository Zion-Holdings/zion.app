import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud, Search, Filter, Grid, List, Phone } from 'lucide-react';
import Link from 'next/link';

// Import all the new service data
import { revolutionary2026AIAutomationServices } from '../../data/revolutionary-2026-ai-automation-services';
import { revolutionary2026EmergingTechServices } from '../../data/revolutionary-2026-emerging-tech-services';
import { revolutionary2026HealthcareBiotechServices } from '../../data/revolutionary-2026-healthcare-biotech-services';
import { revolutionary2026FintechBlockchainServices } from '../../data/revolutionary-2026-fintech-blockchain-services';

const Revolutionary2026UltimateServicesShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all services
  const allServices = [
    ...revolutionary2026AIAutomationServices,
    ...revolutionary2026EmergingTechServices,
    ...revolutionary2026HealthcareBiotechServices,
    ...revolutionary2026FintechBlockchainServices
  ];

  // Filter services based on category and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'AI', name: 'AI & Automation', count: revolutionary2026AIAutomationServices.length, icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'Emerging', name: 'Emerging Tech', count: revolutionary2026EmergingTechServices.length, icon: Rocket, color: 'from-green-500 to-emerald-500' },
    { id: 'Healthcare', name: 'Healthcare & Biotech', count: revolutionary2026HealthcareBiotechServices.length, icon: Shield, color: 'from-teal-500 to-cyan-500' },
    { id: 'Fintech', name: 'Fintech & Blockchain', count: revolutionary2026FintechBlockchainServices.length, icon: Zap, color: 'from-yellow-500 to-orange-500' }
  ];

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2026 Revolutionary Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future with our cutting-edge AI, quantum computing, and emerging technology services. 
            Transform your business with autonomous intelligence and quantum-powered solutions.
          </p>
          
          {/* Service Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: 'Total Services', value: allServices.length, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
              { label: 'AI Services', value: revolutionary2026AIAutomationServices.length, icon: Brain, color: 'from-blue-500 to-cyan-500' },
              { label: 'Emerging Tech', value: revolutionary2026EmergingTechServices.length, icon: Rocket, color: 'from-green-500 to-emerald-500' },
              { label: 'Healthcare', value: revolutionary2026HealthcareBiotechServices.length, icon: Shield, color: 'from-teal-500 to-cyan-500' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}+</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-900/50 rounded-xl p-1 border border-gray-700">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent text-white'
                    : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-purple-500 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                className={`group relative ${
                  viewMode === 'list' ? 'flex items-center gap-6' : ''
                }`}
              >
                <div className={`
                  relative overflow-hidden rounded-2xl border border-gray-700/50 
                  bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm
                  hover:border-purple-500/50 transition-all duration-500
                  ${viewMode === 'list' ? 'flex-1' : ''}
                  ${service.popular ? 'ring-2 ring-purple-500/50' : ''}
                `}>
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Service Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex items-center gap-6' : ''}`}>
                    {/* Icon and Header */}
                    <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-4`}>
                        {service.icon}
                      </div>
                    </div>

                    <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                      {/* Service Name and Tagline */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {service.tagline}
                      </p>

                      {/* Price and Features */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl font-bold text-white">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          {service.trialDays} days free trial • {service.setupTime} setup
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                        <div className="grid grid-cols-1 gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
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

                      {/* Market Position */}
                      <div className="mb-6 p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-xs text-gray-400 mb-1">Market Position</div>
                        <div className="text-sm text-gray-300 line-clamp-3">
                          {service.marketPosition}
                        </div>
                      </div>

                      {/* ROI and Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <div className="text-gray-400">ROI</div>
                          <div className="text-green-400 font-semibold">{service.roi.split(' ')[0]} ROI</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Customers</div>
                          <div className="text-white font-semibold">{service.customers.toLocaleString()}+</div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link href={service.link}>
                        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2">
                          Explore Service
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl p-12 border border-purple-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already using our revolutionary services to gain competitive advantages, 
              reduce costs, and accelerate innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Sales Team
                </button>
              </Link>
              <Link href="/pricing">
                <button className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Revolutionary2026UltimateServicesShowcase;