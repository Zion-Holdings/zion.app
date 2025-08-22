import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Cpu, Cloud, Target,
  ArrowRight, Star, Zap, Users, Award, Globe, Search,
  Filter, ChevronDown, ExternalLink, Sparkles, Eye,
  Lock, Clock, CheckCircle, TrendingUp, DollarSign, Phone,
  Mail, MapPin, Building, ChartBar, Code, Database,
  Server, Network
} from 'lucide-react';

// Import all service data
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { advancedFuturisticMicroSaasServices2025 } from '../data/2025-advanced-futuristic-micro-saas';
import { cuttingEdgeAIInnovations2025 } from '../data/2025-cutting-edge-ai-innovations';
import { innovativeRealMicroSaasServices2025 as innovativeServices } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';
import { innovativeBusinessSolutions2025 } from '../data/2025-innovative-business-solutions';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedService, setSelectedService] = useState<any>(null);

  // Combine all services
  const allServices = [
    ...innovativeRealMicroSaasServices2025,
    ...advancedFuturisticMicroSaasServices2025,
    ...cuttingEdgeAIInnovations2025,
    ...innovativeServices,
    ...innovativeAIServicesEnhanced2025,
    ...innovativeITServicesEnhanced2025,
    ...emergingTechServicesEnhanced2025,
    ...advancedAIAutomationServices2025,
    ...advancedITInfrastructureServices2025,
    ...innovativeBusinessSolutions2025
  ];

  // Enhanced categories with icons and descriptions
  const categories = [
    { 
      id: 'all', 
      name: 'All Services', 
      icon: <Globe className="w-6 h-6" />, 
      count: allServices.length,
      description: 'Complete portfolio of all technology services',
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      id: 'ai', 
      name: 'AI & Machine Learning', 
      icon: <Brain className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length,
      description: 'Revolutionary AI and machine learning solutions',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'quantum', 
      name: 'Quantum & Emerging Tech', 
      icon: <Atom className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length,
      description: 'Next-generation quantum and emerging technologies',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'it', 
      name: 'IT & Infrastructure', 
      icon: <Cpu className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length,
      description: 'Advanced IT infrastructure and enterprise solutions',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      id: 'saas', 
      name: 'Micro SAAS', 
      icon: <Rocket className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('SAAS') || s.category.includes('Business')).length,
      description: 'Innovative micro SAAS solutions for modern businesses',
      color: 'from-orange-500 to-red-500'
    },
    { 
      id: 'automation', 
      name: 'Automation', 
      icon: <Zap className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Automation')).length,
      description: 'Intelligent automation and process optimization',
      color: 'from-yellow-500 to-amber-500'
    },
    { 
      id: 'customer-success', 
      name: 'Customer Success', 
      icon: <Users className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Customer Success') || s.category.includes('Retention')).length,
      description: 'Customer success and retention automation',
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      id: 'marketing', 
      name: 'Marketing & Sales', 
      icon: <Target className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Marketing') || s.category.includes('Sales')).length,
      description: 'AI-powered marketing and sales intelligence',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      id: 'finance', 
      name: 'Finance & Legal', 
      icon: <DollarSign className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Legal')).length,
      description: 'Financial planning and legal document analysis',
      color: 'from-emerald-500 to-green-500'
    },
    { 
      id: 'healthcare', 
      name: 'Healthcare & Manufacturing', 
      icon: <Building className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Manufacturing')).length,
      description: 'Healthcare analytics and manufacturing optimization',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.name.toLowerCase().includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return 0;
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of innovative micro SAAS services, AI solutions, and cutting-edge technology services. Transform your business with Zion Tech Group." />
        <meta name="keywords" content="micro SAAS services, AI solutions, IT services, quantum computing, business automation, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Comprehensive Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive portfolio of innovative micro SAAS services, AI solutions, and cutting-edge technology services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-black text-white py-20 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
            
            {/* Animated grid */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '200px 200px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '200px 200px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Services Showcase 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover our revolutionary portfolio of {allServices.length}+ innovative micro SAAS services, 
                AI solutions, and cutting-edge technology services designed to transform your business
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Phone className="w-5 h-5" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Mail className="w-5 h-5" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-pink-400">
                  <MapPin className="w-5 h-5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                  <div className="text-gray-400">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">15+</div>
                  <div className="text-gray-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">100%</div>
                  <div className="text-gray-400">Real Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="bg-gray-900 py-8 sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <span>{category.name}</span>
                      <span className="bg-black/20 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Sort and View */}
              <div className="flex gap-4 items-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="customers">Most Customers</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>

                <div className="flex bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-black py-16">
          <div className="container mx-auto px-4">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-400">
                Showing {filteredServices.length} of {allServices.length} services
              </p>
            </div>

            {/* Services Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{service.icon}</div>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                              POPULAR
                            </span>
                          )}
                        </div>

                        {/* Title and Tagline */}
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>

                        {/* Price */}
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <p className="text-xs text-gray-500">+{service.features.length - 3} more features</p>
                          )}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                          <div>
                            <div className="text-lg font-bold text-white">{service.rating}</div>
                            <div className="text-xs text-gray-400">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{service.customers}</div>
                            <div className="text-xs text-gray-400">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{service.reviews}</div>
                            <div className="text-xs text-gray-400">Reviews</div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedService(service)}
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                          >
                            Learn More
                          </button>
                          <a
                            href={service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className="flex-1 p-6">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{service.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                              <h3 className="text-xl font-bold text-white">{service.name}</h3>
                              {service.popular && (
                                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                                  POPULAR
                                </span>
                              )}
                            </div>
                            <p className="text-gray-400 mb-2">{service.tagline}</p>
                            <div className="flex items-center gap-6 text-sm text-gray-300">
                              <span>Rating: {service.rating}/5</span>
                              <span>Customers: {service.customers}</span>
                              <span>Category: {service.category}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}{service.period}</div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => setSelectedService(service)}
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                              >
                                Learn More
                              </button>
                              <a
                                href={service.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </div>
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
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 border border-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-6xl">{selectedService.icon}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                        <p className="text-xl text-gray-400">{selectedService.tagline}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  {/* Price and Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-cyan-400">{selectedService.price}</div>
                      <div className="text-gray-400">{selectedService.period}</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-white">{selectedService.rating}</div>
                      <div className="text-gray-400">Rating</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-white">{selectedService.customers}</div>
                      <div className="text-gray-400">Customers</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-white">{selectedService.reviews}</div>
                      <div className="text-gray-400">Reviews</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">Description</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedService.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Market Position</h3>
                      <p className="text-gray-300 text-sm">{selectedService.marketPosition}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Target Audience</h3>
                      <p className="text-gray-300 text-sm">{selectedService.targetAudience}</p>
                    </div>
                  </div>

                  {/* Technology and Integrations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technology.map((tech, idx) => (
                          <span key={idx} className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Integrations</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.integrations.map((integration, idx) => (
                          <span key={idx} className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ROI and Competitors */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">ROI & Benefits</h3>
                      <p className="text-gray-300 text-sm">{selectedService.roi}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Competitors</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.competitors.map((competitor, idx) => (
                          <span key={idx} className="bg-gray-800 text-pink-400 px-3 py-1 rounded-full text-sm">
                            {competitor}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <a
                      href={selectedService.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-center"
                    >
                      Get Started
                    </a>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-gray-900 to-black py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our team of experts is ready to help you implement the perfect solution for your business needs. 
                Get in touch today to start your transformation journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Call {contactInfo.mobile}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;