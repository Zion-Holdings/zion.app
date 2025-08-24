import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Search, Filter, Star, Clock, Users, Shield, Zap, Brain, Globe, Code, Database, Cloud, Lock, BarChart3, Rocket, Target, TrendingUp, Award, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');

  const categories = Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.category)));
  const pricingModels = Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.pricingModel)));

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES.filter(service => {
      const matchesSearch = searchTerm === '' || 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPricing = selectedPricing === 'all' || service.pricingModel === selectedPricing;
      
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchTerm, selectedCategory, selectedPricing]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return <Brain className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Cloud & Infrastructure': return <Cloud className="w-5 h-5" />;
      case 'Data & Analytics': return <Database className="w-5 h-5" />;
      case 'Digital Transformation': return <Rocket className="w-5 h-5" />;
      case 'Web & Mobile Development': return <Code className="w-5 h-5" />;
      case 'IT Support & Consulting': return <Users className="w-5 h-5" />;
      case 'Blockchain & Web3': return <Globe className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getPricingDisplay = (service: any) => {
    if (service.pricingModel === 'monthly') {
      return `${service.currency}${service.price.toLocaleString()}/month`;
    } else if (service.pricingModel === 'hourly') {
      return `${service.currency}${service.price}/hour`;
    } else if (service.pricingModel === 'project') {
      return `${service.currency}${service.price.toLocaleString()}`;
    }
    return `${service.currency}${service.price}`;
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our comprehensive portfolio of cutting-edge AI, IT, and SAAS solutions designed to transform your business
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder:text-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan transition-colors"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Pricing Filter */}
              <div>
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan transition-colors"
                >
                  <option value="all">All Pricing Models</option>
                  {pricingModels.map(model => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
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
                  <div className="p-2 bg-zion-purple/20 rounded-lg">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zion-slate-light">{service.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {getPricingDisplay(service)}
                  </div>
                  <div className="text-xs text-zion-slate-light capitalize">{service.pricingModel}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">
                      <CheckCircle className="w-3 h-3 text-zion-cyan" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Clock className="w-3 h-3 text-zion-cyan" />
                  <span>{service.estimatedDelivery}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Shield className="w-3 h-3 text-zion-cyan" />
                  <span className="capitalize">{service.supportLevel}</span>
                </div>
              </div>

              {/* Market Price */}
              <div className="mb-4 p-3 bg-zion-purple/10 border border-zion-purple/20 rounded-lg">
                <div className="text-xs text-zion-slate-light mb-1">Market Price Range:</div>
                <div className="text-sm font-semibold text-zion-cyan">{service.marketPrice}</div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-slate-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact Info */}
              <div className="border-t border-zion-purple/20 pt-4">
                <div className="text-xs text-zion-slate-light mb-2">Contact for more info:</div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-zion-cyan">
                    <Phone className="w-3 h-3" />
                    <span>{service.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-cyan">
                    <Mail className="w-3 h-3" />
                    <span>{service.contactInfo.email}</span>
                  </div>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can drive your success. Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-zion-blue-light/20 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}