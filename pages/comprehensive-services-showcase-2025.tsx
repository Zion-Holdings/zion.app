import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Star, Zap, Shield, Users, Globe, ArrowRight, 
  ExternalLink, TrendingUp, Clock, Target, Building, Rocket, 
  Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, 
  Smartphone, Palette, Search, MessageSquare, FileText, Calendar, 
  CreditCard, BarChart3, Settings, Code, BookOpen, Activity, 
  Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, 
  ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, 
  Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, 
  Globe2, Bot, ChevronRight, Crown, Infinity, Eye, Sparkles as SparklesIcon
} from 'lucide-react';
import UltraFuturisticBackground2034 from '../components/ui/UltraFuturisticBackground2034';
import UltraFuturisticNavigation2034 from '../components/layout/UltraFuturisticNavigation2034';
import UltraFuturisticFooter2034 from '../components/layout/UltraFuturisticFooter2034';
import { innovativeMicroSaasExpansionServices } from '../data/2025-innovative-micro-saas-expansion';
import { cuttingEdgeITInnovationServices } from '../data/2025-cutting-edge-it-innovations';
import { advancedAIInnovationServices } from '../data/2025-advanced-ai-innovations';

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasExpansionServices,
    ...cuttingEdgeITInnovationServices,
    ...advancedAIInnovationServices
  ];

  // Service categories
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Target, count: innovativeMicroSaasExpansionServices.length },
    { id: 'it-innovations', name: 'IT Innovations', icon: Cpu, count: cuttingEdgeITInnovationServices.length },
    { id: 'ai-innovations', name: 'AI Innovations', icon: Brain, count: advancedAIInnovationServices.length }
  ];

  // Filter services by category
  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        if (selectedCategory === 'micro-saas') return innovativeMicroSaasExpansionServices.includes(service);
        if (selectedCategory === 'it-innovations') return cuttingEdgeITInnovationServices.includes(service);
        if (selectedCategory === 'ai-innovations') return advancedAIInnovationServices.includes(service);
        return false;
      });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Customer Success & Retention': return 'from-blue-600 to-cyan-500';
      case 'Document Automation & AI': return 'from-green-600 to-emerald-500';
      case 'Inventory & Supply Chain': return 'from-orange-600 to-red-500';
      case 'HR & Recruitment': return 'from-purple-600 to-pink-500';
      case 'Project Management & Collaboration': return 'from-indigo-600 to-blue-500';
      case 'Cybersecurity & Network Security': return 'from-red-600 to-orange-500';
      case 'Edge Computing & IoT': return 'from-blue-600 to-indigo-500';
      case 'DevOps & Automation': return 'from-green-600 to-teal-500';
      case 'Quantum Computing & Cloud': return 'from-purple-600 to-pink-500';
      case 'Data Center & Infrastructure': return 'from-gray-600 to-slate-500';
      case 'AI Consciousness & Development': return 'from-purple-600 to-indigo-500';
      case 'Multimodal AI & Content': return 'from-blue-600 to-cyan-500';
      case 'AI Decision Making & Automation': return 'from-green-600 to-emerald-500';
      case 'AI Emotional Intelligence': return 'from-pink-600 to-rose-500';
      case 'AI Quantum Computing': return 'from-indigo-600 to-purple-500';
      default: return 'from-gray-600 to-slate-500';
    }
  };

  return (
    <>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group | Revolutionary AI, IT & Micro SAAS Solutions</title>
        <meta name="description" content="Explore our comprehensive portfolio of revolutionary AI innovations, cutting-edge IT solutions, and innovative micro SAAS services. Transform your business with next-generation technology." />
        <meta name="keywords" content="AI innovations, IT solutions, micro SAAS, quantum computing, edge computing, cybersecurity, customer success, document automation, inventory management" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Comprehensive Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI, IT & Micro SAAS solutions for the future." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comprehensive Services Showcase 2025 - Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary AI, IT & Micro SAAS solutions for the future." />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Head>

      <UltraFuturisticBackground2034 
        intensity="high" 
        colorScheme="quantum-fusion"
        particleCount={800}
        animationSpeed={2.5}
        enableHolographic={true}
        enableQuantumEffects={true}
        enableNeonEffects={true}
        enableSpaceEffects={true}
      >
        <UltraFuturisticNavigation2034 />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-lg font-medium mb-8"
            >
              <Star className="w-5 h-5 mr-2 text-cyan-400" />
              2025 Comprehensive Services Showcase
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Services Portfolio</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Discover our comprehensive portfolio of cutting-edge AI innovations, revolutionary IT solutions, 
              and innovative micro SAAS services designed to transform businesses and advance humanity.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {allServices.length}+
                </div>
                <div className="text-gray-300 font-medium">Revolutionary Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">$50B+</div>
                <div className="text-gray-300 font-medium">Market Opportunity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%+</div>
                <div className="text-gray-300 font-medium">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 font-medium">Expert Support</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Service Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of revolutionary services across multiple technology domains
              </p>
            </motion.div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl shadow-cyan-500/25'
                      : 'bg-black/30 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-black/30 border border-cyan-500/30 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-cyan-300 hover:bg-cyan-500/10'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-cyan-300 hover:bg-cyan-500/10'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Popular
                        </div>
                      )}

                      {/* Service Icon */}
                      <div className="text-4xl mb-4">{service.icon}</div>

                      {/* Service Name */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-gray-300 mb-4">{service.tagline}</p>

                      {/* Price */}
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-400 ml-1">{service.period}</span>
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Category Badge */}
                      <div className="mb-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {service.category}
                        </span>
                      </div>

                      {/* CTA Button */}
                      <a
                        href={service.link}
                        className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 group-hover:shadow-2xl group-hover:shadow-cyan-500/25"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-6">
                      {/* Service Icon */}
                      <div className="text-5xl flex-shrink-0">{service.icon}</div>

                      {/* Service Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-300 text-lg mb-3">{service.tagline}</p>
                            <div className="flex items-center space-x-4 mb-4">
                              <span className="text-3xl font-bold text-white">{service.price}</span>
                              <span className="text-gray-400">{service.period}</span>
                              {service.popular && (
                                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                                  <Star className="w-4 h-4 mr-1" />
                                  Popular
                                </span>
                              )}
                            </div>
                          </div>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                            {service.category}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-4">{service.description}</p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <a
                          href={service.link}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 hover:shadow-2xl hover:shadow-cyan-500/25"
                        >
                          <span>Explore Service</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-3xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Connect with our experts to discover how our revolutionary services can accelerate your growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Now</span>
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                >
                  <Mail className="w-6 h-6" />
                  <span>Email Us</span>
                </a>
              </div>

              <div className="mt-8 text-gray-400">
                <p className="mb-2">{contactInfo.address}</p>
                <p>{contactInfo.website}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <UltraFuturisticFooter2034 />
      </UltraFuturisticBackground2034>
    </>
  );
}