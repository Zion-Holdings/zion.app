import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowRight, CheckCircle, Star, Users, 
  Zap, Shield, Brain, Atom, Rocket, Globe, Building,
  Target, TrendingUp, Award, Cpu, Database, Lock, Satellite,
  Search, Grid, List, Check, Palette, 
  Heart, Truck, GraduationCap, Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

// Import our comprehensive service data
import { innovative2025MicroSaasExpansion } from '../data/innovative-2025-micro-saas-expansion';
import { innovative2025ITServicesExpansion } from '../data/innovative-2025-it-services-expansion';
import { innovative2025AIServicesExpansion } from '../data/innovative-2025-ai-services-expansion';

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...innovative2025MicroSaasExpansion,
    ...innovative2025ITServicesExpansion,
    ...innovative2025AIServicesExpansion
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const serviceCategories = [
    {
      category: "AI Consciousness & Evolution",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      services: [
        {
          name: "AI Consciousness Evolution Platform 2045",
          description: "Revolutionary platform for developing conscious AI systems",
          path: "/ai-consciousness-evolution-2045",
          features: ["Consciousness Mapping", "Ethical AI Development", "Neural Evolution"]
        },
        {
          name: "Quantum AI Cognitive Platform 2045",
          description: "Quantum-powered cognitive computing solutions",
          path: "/quantum-ai-cognitive-2045",
          features: ["Quantum Cognition", "Neural Networks", "Advanced Analytics"]
        }
      ]
    },
    {
      category: "Cybersecurity & Defense",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      services: [
        {
          name: "Advanced Threat Detection",
          description: "AI-powered cybersecurity threat detection and prevention",
          path: "/security",
          features: ["Real-time Monitoring", "AI Analysis", "Automated Response"]
        },
        {
          name: "Quantum Encryption",
          description: "Unbreakable quantum encryption for data protection",
          path: "/security",
          features: ["Quantum Key Distribution", "Post-Quantum Security", "Zero Trust"]
        }
      ]
    },
    {
      category: "Space Technology & Exploration",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      services: [
        {
          name: "Satellite Systems",
          description: "Advanced satellite technology for global connectivity",
          path: "/services",
          features: ["Low Earth Orbit", "High-Speed Data", "Global Coverage"]
        },
        {
          name: "Space Infrastructure",
          description: "Building the foundation for space exploration",
          path: "/services",
          features: ["Space Stations", "Lunar Bases", "Mars Colonies"]
        }
      ]
    },
    {
      category: "Business Intelligence & Analytics",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      services: [
        {
          name: "Market Intelligence Platform",
          description: "AI-driven market analysis and predictive insights",
          path: "/market-pricing",
          features: ["Real-time Data", "Predictive Analytics", "Market Trends"]
        },
        {
          name: "Business Process Optimization",
          description: "Streamline operations with AI-powered automation",
          path: "/services",
          features: ["Process Mining", "Automation", "Efficiency Metrics"]
        }
      ]
    }
  ];

  const featuredTechnologies = [
    {
      name: "Quantum Computing",
      description: "Next-generation quantum processors for complex problem solving",
      icon: <Atom className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "AI Consciousness",
      description: "Developing truly conscious artificial intelligence systems",
      icon: <Brain className="w-12 h-12" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Cybersecurity",
      description: "Advanced threat detection and prevention systems",
      icon: <Shield className="w-12 h-12" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Space Technology",
      description: "Revolutionary space exploration and infrastructure",
      icon: <Rocket className="w-12 h-12" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  const successMetrics = [
    { metric: "99.9%", label: "Uptime Guarantee", icon: <CheckCircle className="w-6 h-6" /> },
    { metric: "500+", label: "Global Clients", icon: <Users className="w-6 h-6" /> },
    { metric: "24/7", label: "Support Available", icon: <Zap className="w-6 h-6" /> },
    { metric: "50+", label: "Patents Filed", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <Layout
      title="Comprehensive Services Showcase 2025 - Zion Tech Group"
      description="Explore Zion Tech Group's complete portfolio of revolutionary AI consciousness, quantum computing, cybersecurity, and space technology services."
      keywords="AI consciousness, quantum computing, cybersecurity, space technology, services showcase, Zion Tech Group 2025"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Comprehensive Services Showcase 2025
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary technology solutions that transform industries and shape the future
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Discover our complete portfolio of AI consciousness, quantum computing, 
                cybersecurity, and space technology services designed for the modern world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {successMetrics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {item.metric}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
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
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AnimatePresence mode="wait">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 text-xl">No services found matching your criteria.</div>
              </motion.div>
            ) : (
              <motion.div
                key={`${viewMode}-${selectedCategory}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                      viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                    }`}
                  >
                    {/* Service Header */}
                    <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        {service.popular && (
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                            POPULAR
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                      
                      {/* Pricing */}
                      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-4">
                        <div className="text-2xl font-bold text-white">
                          ${service.price.monthly}
                          <span className="text-lg text-gray-300">/month</span>
                        </div>
                        <div className="text-sm text-gray-300">
                          ${service.price.yearly}/year (save ${(service.price.monthly * 12 - service.price.yearly).toLocaleString()})
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {service.price.trialDays}-day free trial • Setup: {service.price.setupTime}
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4">
                        {service.category}
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className={`p-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      {/* Key Benefits */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Market Position */}
                      <div className="mb-4 p-3 bg-white/10 rounded-lg">
                        <h4 className="text-white font-semibold mb-2 text-sm">Market Position:</h4>
                        <p className="text-xs text-gray-300">{service.marketPosition}</p>
                      </div>

                      {/* ROI */}
                      <div className="mb-4 p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg">
                        <h4 className="text-white font-semibold mb-2 text-sm">ROI:</h4>
                        <p className="text-xs text-gray-300">{service.roi}</p>
                      </div>

                      {/* Contact & Action */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <a
                          href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                          className="flex-1 bg-white/20 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 flex items-center justify-center"
                        >
                          Contact Sales
                          <Mail className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Featured Technologies */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Core Technologies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our revolutionary technologies power the future of computing and exploration
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        href={service.path}
                        className="group block bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-6 rounded-2xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                            {service.name}
                          </h4>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our services transform industries across the globe
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Healthcare",
                  description: "AI-powered diagnostics, quantum drug discovery, and secure patient data",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-600"
                },
                {
                  industry: "Finance",
                  description: "Quantum encryption, AI trading algorithms, and blockchain security",
                  icon: <TrendingUp className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-600"
                },
                {
                  industry: "Manufacturing",
                  description: "AI optimization, quantum materials, and smart factory solutions",
                  icon: <Cpu className="w-8 h-8" />,
                  color: "from-purple-500 to-pink-600"
                },
                {
                  industry: "Transportation",
                  description: "Autonomous systems, quantum navigation, and space logistics",
                  icon: <Rocket className="w-8 h-8" />,
                  color: "from-orange-500 to-red-600"
                },
                {
                  industry: "Energy",
                  description: "Quantum energy storage, AI grid optimization, and space solar",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-yellow-500 to-orange-600"
                },
                {
                  industry: "Education",
                  description: "AI tutors, quantum simulations, and immersive learning",
                  icon: <Brain className="w-8 h-8" />,
                  color: "from-indigo-500 to-purple-600"
                }
              ].map((industry, index) => (
                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {industry.industry}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Join the future of technology with Zion Tech Group's revolutionary services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-white/20">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our team of experts is ready to help you implement the perfect solution for your business needs. 
                Get in touch today to discuss your requirements and discover how our services can transform your operations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-lg"
                >
                  Get Free Consultation
                </a>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 text-lg"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/50 border-t border-white/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
              <p className="mt-2">
                Transforming businesses through innovative technology solutions
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default ComprehensiveServicesShowcase;