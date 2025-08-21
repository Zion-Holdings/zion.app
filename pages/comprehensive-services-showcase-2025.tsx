import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, Zap, 
  Brain, Cpu, Shield, Rocket, Target, Microscope,
  Atom, Database, Lock, Cloud, BarChart3, Settings,
  Eye, Code, Palette, Layers, Network, Server,
  CheckCircle, ArrowRight, DollarSign, Phone, Mail,
  MapPin, Globe, Star as StarIcon, Users as UsersIcon,
  TrendingUp as TrendingUpIcon, Award, Clock, Globe as GlobeIcon
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  { id: 'all', name: 'All Services', icon: Globe, color: 'from-cyan-500 to-blue-600' },
  { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-violet-500 to-purple-600' },
  { id: 'quantum', name: 'Quantum & Emerging Tech', icon: Atom, color: 'from-indigo-500 to-blue-600' },
  { id: 'enterprise', name: 'Enterprise IT', icon: Shield, color: 'from-blue-500 to-cyan-600' },
  { id: 'fintech', name: 'Financial Technology', icon: DollarSign, color: 'from-green-500 to-emerald-600' },
  { id: 'healthcare', name: 'Healthcare Technology', icon: Microscope, color: 'from-red-500 to-pink-600' },
  { id: 'education', name: 'Education Technology', icon: Users, color: 'from-yellow-500 to-orange-600' },
  { id: 'energy', name: 'Energy Technology', icon: Zap, color: 'from-orange-500 to-red-600' },
  { id: 'robotics', name: 'Robotics & Automation', icon: Rocket, color: 'from-pink-500 to-purple-600' },
  { id: 'supply-chain', name: 'Supply Chain & Logistics', icon: Network, color: 'from-teal-500 to-green-600' }
];

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = innovativeRealMicroSaasServices2025.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory) ||
                           service.tags.some(tag => tag.toLowerCase().includes(selectedCategory));
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.pricing.starter.price - b.pricing.starter.price;
      case 'market':
        return parseFloat(b.marketSize.replace('$', '').replace('B', '')) - parseFloat(a.marketSize.replace('$', '').replace('B', ''));
      default:
        return 0;
    }
  });

  const getCategoryIcon = (categoryName: string) => {
    const category = serviceCategories.find(cat => 
      categoryName.toLowerCase().includes(cat.id) || 
      cat.name.toLowerCase().includes(categoryName.toLowerCase())
    );
    return category?.icon || Globe;
  };

  const getCategoryColor = (categoryName: string) => {
    const category = serviceCategories.find(cat => 
      categoryName.toLowerCase().includes(cat.id) || 
      cat.name.toLowerCase().includes(categoryName.toLowerCase())
    );
    return category?.color || 'from-gray-500 to-gray-600';
  };

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of cutting-edge AI, quantum computing, and emerging technology services. Transform your business with innovative solutions." />
        <meta name="keywords" content="AI services, quantum computing, emerging technology, micro SAAS, enterprise solutions, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive Services
              </span>
              <br />
              <span className="text-white">Showcase 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our revolutionary portfolio of AI, quantum computing, and emerging technology solutions. 
              Transform your business with cutting-edge innovations that drive growth and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-80 pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm"
              >
                {serviceCategories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{innovativeRealMicroSaasServices2025.length}+ Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>1000+ Companies Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>300% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                List View
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="market">Market Size</option>
              </select>
            </div>
          </div>

          {/* Services Count */}
          <div className="text-center mb-12">
            <p className="text-gray-400">
              Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
              <span className="text-cyan-400 font-semibold">{innovativeRealMicroSaasServices2025.length}</span> services
            </p>
          </div>

          {/* Services Grid/List */}
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {sortedServices.map((service, index) => {
                  const CategoryIcon = getCategoryIcon(service.category);
                  const categoryColor = getCategoryColor(service.category);
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColor} text-white`}>
                          <CategoryIcon className="w-3 h-3" />
                          <span>{service.category}</span>
                        </div>
                      </div>

                      {/* Service Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${categoryColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <CategoryIcon className="w-8 h-8 text-white" />
                      </div>

                      {/* Service Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {service.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700/50">
                            +{service.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-white">
                          ${service.pricing.starter.price}
                          <span className="text-sm text-gray-400 font-normal">/month</span>
                        </div>
                        <p className="text-sm text-gray-400">Starting from</p>
                      </div>

                      {/* Market Info */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                        <span>Market: {service.marketSize}</span>
                        <span className="text-cyan-400">Hot</span>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={`/${service.id}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {sortedServices.map((service, index) => {
                  const CategoryIcon = getCategoryIcon(service.category);
                  const categoryColor = getCategoryColor(service.category);
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Side - Icon and Basic Info */}
                        <div className="flex-shrink-0">
                          <div className={`w-20 h-20 bg-gradient-to-r ${categoryColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <CategoryIcon className="w-10 h-10 text-white" />
                          </div>
                          <div className="text-center">
                            <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColor} text-white mb-2`}>
                              <CategoryIcon className="w-3 h-3" />
                              <span>{service.category}</span>
                            </div>
                            <div className="text-2xl font-bold text-white">
                              ${service.pricing.starter.price}
                              <span className="text-sm text-gray-400 font-normal">/month</span>
                            </div>
                          </div>
                        </div>

                        {/* Center - Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                            {service.name}
                          </h3>
                          <p className="text-gray-400 leading-relaxed mb-4">
                            {service.description}
                          </p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-md border border-gray-700/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Features Preview */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                            {service.features.slice(0, 4).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="line-clamp-1">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Side - Market Info and CTA */}
                        <div className="flex-shrink-0 flex flex-col justify-between">
                          <div className="text-right mb-4">
                            <div className="text-sm text-gray-400 mb-2">Market Size</div>
                            <div className="text-lg font-bold text-cyan-400">{service.marketSize}</div>
                            <div className="text-sm text-gray-400 mt-2">Target Audience</div>
                            <div className="text-xs text-gray-500 max-w-48">{service.targetAudience}</div>
                          </div>
                          
                          <Link
                            href={`/${service.id}`}
                            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our cutting-edge technology solutions 
              to drive growth and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/pricing"
                className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>✓ 14-90 Day Free Trials • ✓ No Credit Card Required • ✓ Instant Setup</p>
              <p className="mt-2">✓ 24/7 Support • ✓ 99.9% Uptime SLA • ✓ Global Infrastructure</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComprehensiveServicesShowcase2025;