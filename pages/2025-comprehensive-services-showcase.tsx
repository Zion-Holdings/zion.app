import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Star, CheckCircle, ArrowRight,
  Brain, Atom, Shield, Target, Rocket, Building,
  Phone, Mail, MapPin, Globe, Users, TrendingUp,
  Zap, Lock, Cloud, Database, Code, Palette, Truck
} from 'lucide-react';

// Import our new service data
import { innovative2025MicroSaasExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovative2025ITServicesExpansionV2 } from '../data/2025-innovative-it-services-expansion-v2';
import { innovative2025AIServicesExpansionV2 } from '../data/2025-innovative-ai-services-expansion-v2';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...innovative2025MicroSaasExpansionV2,
    ...innovative2025ITServicesExpansionV2,
    ...innovative2025AIServicesExpansionV2
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'legal & compliance': return <Shield className="w-6 h-6" />;
      case 'cybersecurity': return <Lock className="w-6 h-6" />;
      case 'supply chain & logistics': return <Truck className="w-6 h-6" />;
      case 'human resources': return <Users className="w-6 h-6" />;
      case 'financial technology': return <TrendingUp className="w-6 h-6" />;
      case 'manufacturing & industry 4.0': return <Building className="w-6 h-6" />;
      case 'healthcare & biotechnology': return <Target className="w-6 h-6" />;
      case 'energy & sustainability': return <Zap className="w-6 h-6" />;
      case 'space technology': return <Rocket className="w-6 h-6" />;
      case 'education technology': return <Brain className="w-6 h-6" />;
      case 'network security': return <Shield className="w-6 h-6" />;
      case 'devops & automation': return <Code className="w-6 h-6" />;
      case 'cloud infrastructure': return <Cloud className="w-6 h-6" />;
      case 'data engineering & analytics': return <Database className="w-6 h-6" />;
      case 'iot & edge computing': return <Globe className="w-6 h-6" />;
      case 'api management': return <Code className="w-6 h-6" />;
      case 'blockchain & web3': return <Atom className="w-6 h-6" />;
      case 'cybersecurity operations': return <Lock className="w-6 h-6" />;
      case 'ai development & machine learning': return <Brain className="w-6 h-6" />;
      case 'ai automation & orchestration': return <Zap className="w-6 h-6" />;
      case 'ai optimization & quantum computing': return <Atom className="w-6 h-6" />;
      case 'ai content generation & marketing': return <Palette className="w-6 h-6" />;
      case 'ai predictive analytics & forecasting': return <TrendingUp className="w-6 h-6" />;
      case 'ai customer intelligence & analytics': return <Users className="w-6 h-6" />;
      case 'ai natural language processing': return <Brain className="w-6 h-6" />;
      case 'ai computer vision & image analysis': return <Target className="w-6 h-6" />;
      case 'ai reinforcement learning & decision making': return <Brain className="w-6 h-6" />;
      case 'ai ethics & governance': return <Shield className="w-6 h-6" />;
      default: return <Target className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'legal & compliance': return 'from-purple-500 to-indigo-600';
      case 'cybersecurity': return 'from-red-500 to-pink-600';
      case 'supply chain & logistics': return 'from-green-500 to-emerald-600';
      case 'human resources': return 'from-blue-500 to-cyan-600';
      case 'financial technology': return 'from-yellow-500 to-orange-600';
      case 'manufacturing & industry 4.0': return 'from-gray-500 to-slate-600';
      case 'healthcare & biotechnology': return 'from-red-500 to-pink-600';
      case 'energy & sustainability': return 'from-yellow-500 to-amber-600';
      case 'space technology': return 'from-indigo-500 to-purple-600';
      case 'education technology': return 'from-blue-500 to-indigo-600';
      case 'network security': return 'from-blue-500 to-indigo-600';
      case 'devops & automation': return 'from-green-500 to-emerald-600';
      case 'cloud infrastructure': return 'from-cyan-500 to-blue-600';
      case 'data engineering & analytics': return 'from-purple-500 to-pink-600';
      case 'iot & edge computing': return 'from-teal-500 to-cyan-600';
      case 'api management': return 'from-orange-500 to-red-600';
      case 'blockchain & web3': return 'from-indigo-500 to-purple-600';
      case 'cybersecurity operations': return 'from-red-500 to-pink-600';
      case 'ai development & machine learning': return 'from-purple-500 to-indigo-600';
      case 'ai automation & orchestration': return 'from-purple-500 to-indigo-600';
      case 'ai optimization & quantum computing': return 'from-indigo-500 to-purple-600';
      case 'ai content generation & marketing': return 'from-green-500 to-emerald-600';
      case 'ai predictive analytics & forecasting': return 'from-purple-500 to-pink-600';
      case 'ai customer intelligence & analytics': return 'from-blue-500 to-cyan-600';
      case 'ai natural language processing': return 'from-teal-500 to-cyan-600';
      case 'ai computer vision & image analysis': return 'from-blue-500 to-indigo-600';
      case 'ai reinforcement learning & decision making': return 'from-orange-500 to-red-600';
      case 'ai ethics & governance': return 'from-green-500 to-emerald-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT services, and AI solutions. Transform your business with cutting-edge technology and expert support."
        keywords={["micro SAAS", "IT services", "AI solutions", "quantum computing", "cybersecurity", "cloud infrastructure", "data analytics", "automation", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                2025 Comprehensive Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge portfolio of innovative micro SAAS, IT services, and AI solutions. 
              Stay ahead of the competition with quantum computing, autonomous systems, and next-generation technology.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Get Started Today</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-2" />
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a href="tel:+13024640950" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-cyan-400 mb-2" />
                  <p className="text-gray-300 text-sm">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white font-semibold">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-300">Quantum computing, AI, and next-generation solutions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">SOC 2, ISO 27001, and industry compliance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Proven ROI</h3>
                <p className="text-gray-300">Average 300-1000% ROI within 3-18 months</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white shadow-lg'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {category === 'all' ? 'All Services' : category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-gray-300">
              Discover our comprehensive portfolio of innovative solutions
            </p>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center text-2xl`}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-gray-400">{service.category}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Service Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="bg-white/10 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-white">${service.price.monthly}</p>
                          <p className="text-sm text-gray-400">per month</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-white">${service.price.yearly}</p>
                          <p className="text-sm text-gray-400">per year</p>
                        </div>
                      </div>
                      <div className="mt-2 text-center">
                        <span className="text-xs text-gray-400">
                          {service.price.trialDays}-day free trial • {service.price.setupTime} setup
                        </span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <p className="text-xs text-gray-400 text-center">
                            +{service.features.length - 3} more features
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ROI and Stats */}
                    <div className="bg-white/10 rounded-xl p-4 mb-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-lg font-bold text-white">{service.customers.toLocaleString()}+</p>
                          <p className="text-xs text-gray-400">Customers</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-white">{service.rating}</p>
                          <p className="text-xs text-gray-400">Rating</p>
                        </div>
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-xs text-gray-400">{service.roi}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Service Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center text-3xl`}>
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                              {service.popular && (
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-gray-400 text-sm mb-2">{service.category}</p>
                            <p className="text-gray-300">{service.description}</p>
                          </div>
                        </div>

                        {/* Features and Benefits */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                            <div className="space-y-2">
                              {service.features.slice(0, 5).map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                            <div className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                  <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Pricing and CTA */}
                      <div className="lg:w-80 space-y-4">
                        {/* Pricing */}
                        <div className="bg-white/10 rounded-xl p-4">
                          <h4 className="text-sm font-semibold text-white mb-3">Pricing</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Monthly:</span>
                              <span className="text-white font-semibold">${service.price.monthly}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Yearly:</span>
                              <span className="text-white font-semibold">${service.price.yearly}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Trial:</span>
                              <span className="text-white">{service.price.trialDays} days</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Setup:</span>
                              <span className="text-white">{service.price.setupTime}</span>
                            </div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="bg-white/10 rounded-xl p-4">
                          <h4 className="text-sm font-semibold text-white mb-3">Performance</h4>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <p className="text-lg font-bold text-white">{service.customers.toLocaleString()}+</p>
                              <p className="text-xs text-gray-400">Customers</p>
                            </div>
                            <div>
                              <p className="text-lg font-bold text-white">{service.rating}</p>
                              <p className="text-xs text-gray-400">Rating</p>
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <a
                          href={service.link}
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team of experts to discuss how our innovative solutions can help you achieve your goals.
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-cyan-400 text-lg font-semibold">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <a
                  href="https://ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Globe className="w-5 h-5" />
                  Visit Our Website
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;