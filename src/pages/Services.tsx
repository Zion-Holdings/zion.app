import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, Users, Zap, Shield, Brain, Cloud, Globe, Database, Lock, Code, BarChart3, Smartphone, Monitor, Server, Wifi, Eye, Target, TrendingUp, Award, CheckCircle, ArrowRight, Phone, Mail, ExternalLink } from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

export function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['All', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.category)))];
  const subcategories = ['All', ...Array.from(new Set(COMPREHENSIVE_SERVICES.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  ).map(service => service.subcategory)))];

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'All' || service.subcategory === selectedSubcategory;
    
    return matchesSearch && matchesCategory && matchesSubcategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Brain className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'Cloud Computing':
        return <Cloud className="w-6 h-6" />;
      case 'Web Development':
        return <Code className="w-6 h-6" />;
      case 'Mobile Development':
        return <Smartphone className="w-6 h-6" />;
      case 'Data Analytics':
        return <BarChart3 className="w-6 h-6" />;
      case 'DevOps':
        return <Server className="w-6 h-6" />;
      case 'IoT Solutions':
        return <Wifi className="w-6 h-6" />;
      case 'Blockchain':
        return <Database className="w-6 h-6" />;
      case 'Digital Marketing':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'basic':
        return 'text-green-400';
      case 'standard':
        return 'text-blue-400';
      case 'premium':
        return 'text-purple-400';
      case 'enterprise':
        return 'text-cyan-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-black text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our comprehensive suite of cutting-edge technology solutions designed to transform your business and drive innovation across all industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-zion-blue-light/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-slate-light">100+ Services</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-blue-light/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3">
              <Award className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-slate-light">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-blue-light/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-slate-light">Global Support</span>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedSubcategory('All');
                  }}
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Subcategory Filter */}
              <div>
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                >
                  {subcategories.map(subcategory => (
                    <option key={subcategory} value={subcategory}>{subcategory}</option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-zion-blue-light/10 to-zion-blue-dark/20 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-300"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-zion-purple/20 rounded-xl text-zion-purple group-hover:bg-zion-cyan/20 group-hover:text-zion-cyan transition-all duration-300">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <span className="text-xs text-zion-slate-light bg-zion-blue-light/30 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {service.currency}{service.price.toLocaleString()}
                  </div>
                  <div className="text-xs text-zion-slate-light capitalize">
                    {service.pricingModel.replace('-', ' ')}
                  </div>
                </div>
              </div>

              {/* Service Title and Description */}
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-zion-cyan transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Features Preview */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-zion-cyan" />
                  <span className="text-sm font-medium text-zion-slate-light">Key Features</span>
                </div>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zion-slate-light">Delivery:</span>
                  <span className="text-white">{service.estimatedDelivery}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zion-slate-light">Support:</span>
                  <span className={`capitalize ${getSupportLevelColor(service.supportLevel)}`}>
                    {service.supportLevel}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zion-slate-light">Market Price:</span>
                  <span className="text-white">{service.marketPrice}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact and Action */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                    title="Call us"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${service.contactInfo.email}`}
                    className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                    title="Email us"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href={service.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No services found</h3>
            <p className="text-zion-slate-light">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let our expert team help you choose the perfect solutions and implement them with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Call Now: +1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 hover:border-zion-cyan transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Email Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}