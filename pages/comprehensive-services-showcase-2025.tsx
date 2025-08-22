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
import { ultimateInnovativeServices2025 } from '../data/2025-ultimate-innovative-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

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
      name: 'Business Automation', 
      icon: <Target className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Automation') || s.category.includes('Business')).length,
      description: 'Intelligent automation for business processes',
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      id: 'customer', 
      name: 'Customer Success', 
      icon: <Users className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Customer') || s.category.includes('Support')).length,
      description: 'Customer experience and success solutions',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      id: 'marketing', 
      name: 'Marketing & Sales', 
      icon: <TrendingUp className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Marketing') || s.category.includes('Sales')).length,
      description: 'AI-powered marketing and sales intelligence',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      id: 'finance', 
      name: 'Finance & Legal', 
      icon: <DollarSign className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Legal')).length,
      description: 'Financial technology and legal automation',
      color: 'from-emerald-500 to-green-500'
    },
    { 
      id: 'healthcare', 
      name: 'Healthcare & Manufacturing', 
      icon: <Shield className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Manufacturing')).length,
      description: 'Healthcare technology and manufacturing solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'creative', 
      name: 'Creative & Media', 
      icon: <Sparkles className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Creative') || s.category.includes('Media')).length,
      description: 'Creative automation and media solutions',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'education', 
      name: 'Education & Training', 
      icon: <Award className="w-6 h-6" />, 
      count: allServices.filter(s => s.category.includes('Education') || s.category.includes('Training')).length,
      description: 'Educational technology and training platforms',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  // Filter and sort services
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.variant.toLowerCase().includes(selectedCategory);
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Explore our complete portfolio of revolutionary AI, quantum computing, and micro SAAS services. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, quantum computing, micro SAAS, technology solutions, business automation, Zion Tech Group" />
        <meta property="og:title" content="Comprehensive Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Complete portfolio of revolutionary technology solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
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

        {/* Filters and Controls */}
        <section className="py-12 bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <span>{category.name}</span>
                      <span className="text-xs opacity-75">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Sort and View Controls */}
              <div className="flex items-center gap-4">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <label className="text-gray-300 text-sm">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                  </select>
                </div>

                {/* View Mode */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-1 w-4 h-4">
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                    </div>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    <div className="space-y-1 w-4 h-4">
                      <div className="bg-current rounded-sm h-1"></div>
                      <div className="bg-current rounded-sm h-1"></div>
                      <div className="bg-current rounded-sm h-1"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
                <p className="text-gray-500">Try adjusting your search terms or category filter</p>
              </div>
            ) : (
              <div className={`${
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
                  : 'space-y-4'
              }`}>
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer'
                        : 'bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer'
                    }`}
                    onClick={() => handleServiceClick(service)}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                            <div className="text-white text-xl">{service.icon}</div>
                          </div>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                              Popular
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-3">{service.description}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                            <span className="text-gray-400 text-sm">{service.period}</span>
                          </div>
                          <div className="text-xs text-gray-500">{service.category}</div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{service.rating}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-cyan-400" />
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <div className="text-white text-2xl">{service.icon}</div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-white truncate">{service.name}</h3>
                            {service.popular && (
                              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full ml-2">
                                Popular
                              </div>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed mb-2">{service.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>{service.category}</span>
                            <span>•</span>
                            <span>{service.period}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span>{service.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right flex-shrink-0">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">{service.price}</div>
                          <ArrowRight className="w-5 h-5 text-cyan-400 mx-auto" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Service Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${selectedService.color} rounded-2xl flex items-center justify-center`}>
                        <div className="text-white text-3xl">{selectedService.icon}</div>
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                        <p className="text-gray-300">{selectedService.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-600 transition-colors duration-200"
                    >
                      ×
                    </button>
                  </div>

                  {/* Content */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Description</h3>
                        <p className="text-gray-300 leading-relaxed">{selectedService.description}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                        <ul className="space-y-2">
                          {selectedService.features.map((feature: string, index: number) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Technology Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technology.map((tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Pricing */}
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Pricing</h3>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-cyan-400 mb-2">{selectedService.price}</div>
                          <div className="text-gray-300 mb-4">{selectedService.period}</div>
                          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                            Get Started
                          </button>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Market Position</h4>
                          <p className="text-gray-300 text-sm">{selectedService.marketPosition}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Target Audience</h4>
                          <p className="text-gray-300 text-sm">{selectedService.targetAudience}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Setup Time</h4>
                          <p className="text-gray-300 text-sm">{selectedService.setupTime}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">ROI</h4>
                          <p className="text-gray-300 text-sm">{selectedService.roi}</p>
                        </div>
                      </div>

                      {/* Contact CTA */}
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 text-center">
                        <h4 className="font-semibold text-white mb-3">Ready to get started?</h4>
                        <div className="space-y-3">
                          <a
                            href={`tel:${contactInfo.mobile}`}
                            className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                          >
                            Call {contactInfo.mobile}
                          </a>
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="block w-full border border-purple-500/50 text-purple-400 py-2 px-4 rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300"
                          >
                            Email Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join the future of technology with Zion Tech Group. Our revolutionary AI, quantum computing, 
                and micro SAAS solutions are ready to accelerate your success and drive unprecedented growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-cyan-500/25"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {contactInfo.mobile}</span>
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-purple-500/25"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>

              <div className="mt-8 p-6 bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl inline-block">
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <a 
                      href={contactInfo.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition-colors duration-200"
                    >
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;