import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Search, Filter, Star, Clock, Users, Shield, Zap, Brain, Globe, Code, Database, Cloud, Lock, BarChart3, Rocket, Target, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';

export function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');

  const categories = ['All', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.category)))];
  const pricingModels = ['All', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.pricingModel)))];

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesPricing = selectedPricing === 'All' || service.pricingModel === selectedPricing;
      
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchTerm, selectedCategory, selectedPricing]);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Machine Learning': <Brain className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Cloud Computing': <Cloud className="w-6 h-6" />,
      'Web Development': <Code className="w-6 h-6" />,
      'Mobile Development': <Code className="w-6 h-6" />,
      'Data Analytics': <BarChart3 className="w-6 h-6" />,
      'DevOps & Automation': <Zap className="w-6 h-6" />,
      'Blockchain': <Database className="w-6 h-6" />,
      'IoT Solutions': <Globe className="w-6 h-6" />,
      'Digital Marketing': <TrendingUp className="w-6 h-6" />,
      'IT Consulting': <Users className="w-6 h-6" />,
      'Software Testing': <CheckCircle className="w-6 h-6" />
    };
    return iconMap[category] || <Rocket className="w-6 h-6" />;
  };

  const getPricingDisplay = (service: typeof COMPREHENSIVE_SERVICES[0]) => {
    switch (service.pricingModel) {
      case 'one-time':
        return `${service.currency}${service.price.toLocaleString()}`;
      case 'monthly':
        return `${service.currency}${service.price.toLocaleString()}/month`;
      case 'yearly':
        return `${service.currency}${service.price.toLocaleString()}/year`;
      case 'per-user':
        return `${service.currency}${service.price.toLocaleString()}/user`;
      case 'per-project':
        return `${service.currency}${service.price.toLocaleString()}/project`;
      default:
        return `${service.currency}${service.price.toLocaleString()}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our comprehensive suite of cutting-edge technology solutions designed to transform your business and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              {COMPREHENSIVE_SERVICES.length}+ Services
            </span>
            <span className="px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan">
              AI-Powered Solutions
            </span>
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              Enterprise Grade
            </span>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-zion-blue-light/20 backdrop-blur-md border border-zion-purple/30 rounded-2xl p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-zion-slate-light text-sm font-medium mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Pricing Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-zion-slate-light text-sm font-medium mb-2">Pricing Model</label>
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="w-full px-3 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  {pricingModels.map(model => (
                    <option key={model} value={model}>{model.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <span className="text-zion-slate-light">
                  {filteredServices.length} services found
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zion-purple/20 rounded-lg text-zion-cyan">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm">{service.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {getPricingDisplay(service)}
                  </div>
                  <div className="text-xs text-zion-slate-light capitalize">
                    {service.pricingModel.replace('-', ' ')}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-zion-cyan" />
                  Key Features
                </h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Clock className="w-4 h-4 text-zion-cyan" />
                  <span>{service.estimatedDelivery}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Shield className="w-4 h-4 text-zion-cyan" />
                  <span className="capitalize">{service.supportLevel}</span>
                </div>
              </div>

              {/* Market Price */}
              <div className="mb-4 p-3 bg-zion-blue-dark/30 rounded-lg">
                <div className="text-xs text-zion-slate-light mb-1">Market Price Range</div>
                <div className="text-zion-cyan font-medium">{service.marketPrice}</div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact Info */}
              <div className="border-t border-zion-purple/20 pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zion-slate-light">
                    <div>📧 {service.contactInfo.email}</div>
                    <div>📱 {service.contactInfo.phone}</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}