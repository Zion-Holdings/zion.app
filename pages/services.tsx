  const heroStats = [
    { value: '200+', label: 'Revolutionary Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '800%+', label: 'Average ROI', color: 'text-green-400', icon: <TrendingUp className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>AI-Powered Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover 25+ real AI-powered micro SAAS services that transform businesses. From legal automation to quantum computing, we deliver cutting-edge solutions with proven ROI." />
        <meta name="keywords" content="AI services, micro SAAS, business automation, legal tech, customer service AI, SEO automation, video editing AI, data analytics, quantum computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="AI-Powered Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with 25+ real AI-powered micro SAAS services. Proven ROI, 21-day free trials, 24/7 support." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <QuantumHolographicBackground>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI-Powered Micro SAAS Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover <span className="text-cyan-400 font-semibold">25+ real, innovative micro SAAS solutions</span> 
                powered by artificial intelligence. Transform your business with cutting-edge technology 
                and proven ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button href="/contact" variant="primary" size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button href="#services" variant="secondary" size="lg">
                  Explore Services
                </Button>
=======
    <AdvancedFuturisticBackground theme="quantum" intensity="high">
      <Head>
        <title>Innovative Micro SAAS Services | Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge micro SAAS services including AI, quantum computing, blockchain, and more. Real implementations with 1500%+ average ROI." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, blockchain, fintech, healthcare AI, supply chain optimization" />
        <meta property="og:title" content="Innovative Micro SAAS Services | Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge micro SAAS services with real implementations and proven ROI." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Micro SAAS
              </span>
              <br />
              <span className="text-white">Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our portfolio of cutting-edge micro SAAS solutions featuring AI, quantum computing, 
              blockchain, and more. All services are fully implemented with proven ROI and enterprise-grade infrastructure.
            </motion.p>

            {/* Contact Information Banner */}
            <motion.div 
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-blue-400 mb-2" />
                  <p className="text-white font-semibold">Mobile</p>
                  <p className="text-blue-300">{contactInfo.mobile}</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-purple-300">{contactInfo.email}</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-cyan-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {allServices.length}+
                </div>
                <div className="text-gray-400">Real Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                  99.99%
                </div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  21 Days
                </div>
                <div className="text-gray-400">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  1500%+
                </div>
                <div className="text-gray-400">Average ROI</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Service Categories
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enhancedCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <AdvancedFuturisticCard
                    variant="quantum"
                    theme="quantum"
                    className="h-full cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                      <div className="text-cyan-400 font-semibold">{category.count} Services</div>
                    </div>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </QuantumHolographicBackground>
      </section>

        {/* Popular Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Popular Services
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <AdvancedFuturisticCard
                    variant="premium"
                    theme="quantum"
                    className="h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-gray-400 text-sm">{service.period}</div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        {service.trialDays} days trial
                      </div>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => window.open(service.link, '_blank')}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>

        {/* All Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-1/4">
                <AdvancedFuturisticCard variant="default" theme="quantum" className="sticky top-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Filters</h3>
                  
                  {/* Category Filter */}
                  <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="All">All Categories</option>
                      {enhancedCategories.map(category => (
                        <option key={category.name} value={category.name}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Price Range</label>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      {priceRanges.map(range => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort Options */}
                  <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-medium mb-2">View Mode</label>
                    <div className="flex bg-gray-800 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                          viewMode === 'grid'
                            ? 'bg-cyan-600 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Grid className="w-4 h-4 mx-auto" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                          viewMode === 'list'
                            ? 'bg-cyan-600 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <List className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                        {contactInfo.mobile}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Mail className="w-4 h-4 mr-2 text-purple-400" />
                        {contactInfo.email}
                      </div>
                      <div className="flex items-start text-gray-300">
                        <MapPin className="w-4 h-4 mr-2 text-blue-400 mt-0.5" />
                        <span className="text-xs">{contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </AdvancedFuturisticCard>
              </div>

              {/* Services Grid */}
              <div className="lg:w-3/4">
                {/* Search Bar */}
                <div className="mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Services Count */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-300">
                    Showing {filteredServices.length} of {allServices.length} services
                  </p>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setShowInnovativeServices(!showInnovativeServices)}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                    >
                      {showInnovativeServices ? 'Hide' : 'Show'} Innovative Services
                    </button>
                  </div>
                </div>

                {/* Services Grid */}
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2' 
                    : 'grid-cols-1'
                }`}>
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <AdvancedFuturisticCard
                        variant={service.popular ? 'premium' : 'default'}
                        theme="quantum"
                        className="h-full hover:scale-105 transition-transform duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-3xl">{service.icon}</div>
                          <div className="flex items-center space-x-2">
                            {service.popular && (
                              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                Popular
                              </div>
                            )}
                            {service.realService && (
                              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                                Real Service
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-gray-400 text-sm">{service.period}</div>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                        
                        {/* Features */}
                        <div className="mb-4">
                          <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-xs text-gray-300">
                                <Check className="w-3 h-3 text-green-400 mr-1" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-400">
                            {service.trialDays} days trial
                          </div>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => window.open(service.link, '_blank')}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </AdvancedFuturisticCard>
                    </motion.div>
                  ))}
                </div>

                {/* No Results */}
                {filteredServices.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
                    <Button
                      onClick={() => {
                        setSelectedCategory('All');
                        setPriceRange('All');
                        setSearchQuery('');
                      }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AdvancedFuturisticCard variant="enterprise" theme="quantum">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our innovative micro SAAS services. 
                Start your 21-day free trial today and experience the future of business technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => window.open('/contact', '_self')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Contact Sales Team
                  <Phone className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/pricing', '_self')}
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                >
                  View Pricing
                  <DollarSign className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">Contact Information:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-cyan-400 font-semibold">Mobile</div>
                    <div className="text-white">{contactInfo.mobile}</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-semibold">Email</div>
                    <div className="text-white">{contactInfo.email}</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">Website</div>
                    <div className="text-white">{contactInfo.website}</div>
                  </div>
                </div>
              </div>
            </AdvancedFuturisticCard>
          </div>
        </div>

      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
=======
      {/* Services Grid/List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              {filteredServices.length} Services Found
            </h2>
            <div className="text-gray-400">
              Showing {filteredServices.length} of {enhancedRealMicroSaasServices.length} total services
            </div>
          </div>
        </section>
      </div>
    </AdvancedFuturisticBackground>
  );
}
=======
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, Zap
} from 'lucide-react';
import Link from 'next/link';

// Import our service data
import { realMarketServices } from '../data/real-market-services';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { newRealServices } from '../data/new-real-services';
import { realOperationalServices } from '../data/real-operational-services';
import { marketReadyServices } from '../data/market-ready-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { industryRealServices } from '../data/industry-real-services';
import { real2027Q2Additions } from '../data/real-2027-q2-additions';

// Import our new real services
import { realMicroSaas2025Expansion } from '../data/real-micro-saas-2025-expansion';
import { realITServices2025Expansion } from '../data/real-it-services-2025-expansion';
import { realAIServices2025Expansion } from '../data/real-ai-services-2025-expansion';

// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  return 'Contact for pricing';
};

// Helper function to get service features
const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: any) => {
  if (service.description) return service.description;
  if (service.tagline) return service.tagline;
  return 'No description available';
};

// Create unified services array with new 2035 services
const allServices = [
  ...realMarketServices,
  ...realMicroSaasServices,
  ...innovativeAIServices,
  ...enterpriseITServices,
  ...emergingTechServices,
  ...newRealServices,
  ...realOperationalServices,
  ...marketReadyServices,
  ...marketValidatedServices,
  ...industryRealServices,
  ...real2027Q2Additions
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of all services'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Services',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Innovative business solutions and automation'
  },
  {
    id: 'ai-consciousness',
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Revolutionary AI consciousness and emotional intelligence'
  },
  {
    id: 'it-infrastructure',
    name: 'IT & Infrastructure',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
    description: 'Next-generation IT solutions and infrastructure'
  },
  {
    id: 'advanced-solutions',
    name: 'Advanced Solutions',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    description: 'Cutting-edge technology solutions'
  },
  {
    id: 'quantum-emerging',
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Quantum computing and breakthrough technologies'
  },
  {
    id: 'space-metaverse',
    name: 'Space & Metaverse',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Space exploration and virtual worlds'
  },
  {
    id: 'creative-media',
    name: 'Creative & Media',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'AI-powered creative solutions'
  },
  {
    id: 'healthcare-biotech',
    name: 'Healthcare & Biotech',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Advanced healthcare solutions'
  },
  {
    id: 'transportation-logistics',
    name: 'Transportation & Logistics',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Smart transportation solutions'
  },
  {
    id: 'education-research',
    name: 'Education & Research',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    description: 'Learning and research platforms'
  }
];

const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Highest Rated' }
];

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const serviceCategories = [
    { id: 'all', name: 'All Services', count: 24 },
    { id: 'ai-consciousness', name: 'AI Consciousness', count: 8 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 6 },
    { id: 'autonomous-ops', name: 'Autonomous Operations', count: 5 },
    { id: 'enterprise-it', name: 'Enterprise IT', count: 5 }
  ];

  const featuredServices = [
    {
      id: 1,
      title: 'AI Consciousness Platform Development',
      description: 'Build revolutionary AI consciousness applications that understand, learn, and evolve like human consciousness.',
      category: 'ai-consciousness',
      icon: <Brain className="w-12 h-12" />,
      features: [
        'Emotional intelligence and empathy',
        'Self-awareness and learning',
        'Natural language understanding',
        'Adaptive decision making',
        'Consciousness evolution'
      ],
      benefits: [
        'Human-like AI interactions',
        'Continuous learning and improvement',
        'Emotional connection with users',
        'Advanced problem-solving capabilities',
        'Scalable consciousness architecture'
      ],
      useCases: [
        'Customer service automation',
        'Therapeutic AI companions',
        'Educational AI tutors',
        'Creative AI assistants',
        'Research and development'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions',
      description: 'Leverage the power of quantum mechanics to solve complex problems that are impossible for classical computers.',
      category: 'quantum-computing',
      icon: <Atom className="w-12 h-12" />,
      features: [
        'Quantum algorithm optimization',
        'Quantum machine learning',
        'Cryptography and security',
        'Molecular simulation',
        'Financial modeling'
      ],
      benefits: [
        'Exponential speed improvements',
        'Unprecedented problem-solving',
        'Future-proof security',
        'Scientific breakthroughs',
        'Competitive advantage'
      ],
      useCases: [
        'Drug discovery and development',
        'Financial risk assessment',
        'Climate modeling',
        'Supply chain optimization',
        'Artificial intelligence'
      ]
    },
    {
      id: 3,
      title: 'Autonomous Business Operations',
      description: 'Transform your organization with fully autonomous systems that operate independently and optimize continuously.',
      category: 'autonomous-ops',
      icon: <Rocket className="w-12 h-12" />,
      features: [
        'Process automation',
        'Intelligent decision making',
        'Predictive analytics',
        'Self-healing systems',
        'Continuous optimization'
      ],
      benefits: [
        '24/7 operational efficiency',
        'Reduced human error',
        'Cost optimization',
        'Scalable operations',
        'Data-driven insights'
      ],
      useCases: [
        'Manufacturing automation',
        'Customer service',
        'Supply chain management',
        'Financial operations',
        'IT infrastructure'
      ]
    }
  ];

  const allServices = [
    // AI Consciousness Services
    {
      id: 4,
      title: 'AI Consciousness API Development',
      description: 'Custom APIs for integrating AI consciousness capabilities into existing applications.',
      category: 'ai-consciousness',
      icon: <Code className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '3-6 months',
      startingPrice: '$50,000'
    },
    {
      id: 5,
      title: 'Emotional Intelligence AI',
      description: 'AI systems that understand and respond to human emotions and emotional contexts.',
      category: 'ai-consciousness',
      icon: <Heart className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '2-4 months',
      startingPrice: '$35,000'
    },
    {
      id: 6,
      title: 'Consciousness Architecture Design',
      description: 'Design scalable and ethical AI consciousness architectures for enterprise applications.',
      category: 'ai-consciousness',
      icon: <Layers className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '4-8 months',
      startingPrice: '$75,000'
    },
    {
      id: 7,
      title: 'AI Ethics and Governance',
      description: 'Implement ethical frameworks and governance systems for AI consciousness applications.',
      category: 'ai-consciousness',
      icon: <Shield className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '2-3 months',
      startingPrice: '$25,000'
    },
    {
      id: 8,
      title: 'Consciousness Training Systems',
      description: 'AI systems that can train and develop consciousness in other AI applications.',
      category: 'ai-consciousness',
      icon: <GraduationCap className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '6-12 months',
      startingPrice: '$100,000'
    },

    // Quantum Computing Services
    {
      id: 9,
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for specific business problems and use cases.',
      category: 'quantum-computing',
      icon: <Cpu className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '4-8 months',
      startingPrice: '$80,000'
    },
    {
      id: 10,
      title: 'Quantum Machine Learning',
      description: 'Machine learning systems that leverage quantum computing for enhanced performance.',
      category: 'quantum-computing',
      icon: <Brain className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '6-10 months',
      startingPrice: '$90,000'
    },
    {
      id: 11,
      title: 'Quantum Security Implementation',
      description: 'Quantum-resistant cryptography and security solutions for future-proof protection.',
      category: 'quantum-computing',
      icon: <Lock className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '3-5 months',
      startingPrice: '$45,000'
    },
    {
      id: 12,
      title: 'Quantum Simulation Services',
      description: 'Quantum simulations for scientific research, drug discovery, and material science.',
      category: 'quantum-computing',
      icon: <Atom className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '5-9 months',
      startingPrice: '$70,000'
    },

    // Autonomous Operations Services
    {
      id: 13,
      title: 'Business Process Automation',
      description: 'End-to-end automation of complex business processes with AI-driven decision making.',
      category: 'autonomous-ops',
      icon: <Zap className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '2-4 months',
      startingPrice: '$30,000'
    },
    {
      id: 14,
      title: 'Predictive Analytics Systems',
      description: 'AI-powered predictive analytics for forecasting and proactive decision making.',
      category: 'autonomous-ops',
      icon: <TrendingUp className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '3-5 months',
      startingPrice: '$40,000'
    },
    {
      id: 15,
      title: 'Self-Healing Infrastructure',
      description: 'IT infrastructure that automatically detects and resolves issues without human intervention.',
      category: 'autonomous-ops',
      icon: <Server className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '4-7 months',
      startingPrice: '$60,000'
    },
    {
      id: 16,
      title: 'Autonomous Customer Service',
      description: 'AI-powered customer service systems that handle complex inquiries autonomously.',
      category: 'autonomous-ops',
      icon: <Users className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '2-3 months',
      startingPrice: '$25,000'
    },

    // Enterprise IT Services
    {
      id: 17,
      title: 'Enterprise AI Integration',
      description: 'Seamless integration of AI solutions into existing enterprise infrastructure.',
      category: 'enterprise-it',
      icon: <Building className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '3-6 months',
      startingPrice: '$50,000'
    },
    {
      id: 18,
      title: 'Cloud-Native AI Development',
      description: 'AI applications built using cloud-native technologies and best practices.',
      category: 'enterprise-it',
      icon: <Cloud className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '2-4 months',
      startingPrice: '$35,000'
    },
    {
      id: 19,
      title: 'DevOps for AI Systems',
      description: 'DevOps practices and automation specifically designed for AI and ML systems.',
      category: 'enterprise-it',
      icon: <Zap className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '2-3 months',
      startingPrice: '$30,000'
    },
    {
      id: 20,
      title: 'AI Security and Compliance',
      description: 'Security frameworks and compliance solutions for AI systems in regulated industries.',
      category: 'enterprise-it',
      icon: <Shield className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '3-5 months',
      startingPrice: '$45,000'
    }
  ];

  const filteredServices = allServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    const icons = {
      'ai-consciousness': <Brain className="w-6 h-6" />,
      'quantum-computing': <Atom className="w-6 h-6" />,
      'autonomous-ops': <Rocket className="w-6 h-6" />,
      'enterprise-it': <Building className="w-6 h-6" />
    };
    return icons[category as keyof typeof icons] || <Code className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'ai-consciousness': 'cyan',
      'quantum-computing': 'purple',
      'autonomous-ops': 'green',
      'enterprise-it': 'blue'
    };
    return colors[category as keyof typeof colors] || 'gray';
  };

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <Layout>
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive AI consciousness, quantum computing, and autonomous operations services. Transform your business with cutting-edge technology solutions."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Revolutionary Technology Services
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                From AI consciousness platforms to quantum computing solutions and autonomous business operations, we deliver the future of technology today.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  <span>AI Consciousness</span>
                </div>
                <div className="flex items-center gap-2">
                  <Atom className="w-5 h-5" />
                  <span>Quantum Computing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  <span>Autonomous Operations</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-400">
                Our most innovative and transformative technology solutions
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 bg-${getCategoryColor(service.category)}-500/20 text-${getCategoryColor(service.category)}-400 rounded-full text-sm border border-${getCategoryColor(service.category)}-500/30`}>
                        {service.category.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <a
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                All Services
              </h2>
              <p className="text-xl text-gray-400">
                Comprehensive technology solutions across all domains
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        {service.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 bg-${getCategoryColor(service.category)}-500/20 text-${getCategoryColor(service.category)}-400 rounded text-xs border border-${getCategoryColor(service.category)}-500/30`}>
                            {service.category.replace('-', ' ')}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {service.complexity}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{service.timeline}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            <span>From {service.startingPrice}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right flex-shrink-0">
                        <button
                          onClick={() => toggleService(service.id)}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {expandedService === service.id ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-700"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-white font-semibold mb-3">Service Details</h4>
                            <div className="space-y-2 text-sm text-gray-300">
                              <div className="flex justify-between">
                                <span>Complexity:</span>
                                <span className="text-white">{service.complexity}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Timeline:</span>
                                <span className="text-white">{service.timeline}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Starting Price:</span>
                                <span className="text-white">{service.startingPrice}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-white font-semibold mb-3">What's Included</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Custom solution design</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Implementation and testing</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Training and documentation</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Ongoing support</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex gap-3">
                          <a
                            href="/contact"
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                          >
                            Get Quote
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <a
                            href="/case-studies"
                            className="inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 font-bold py-3 px-6 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                          >
                            View Case Studies
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Service Process
              </h2>
              <p className="text-xl text-gray-400">
                A proven methodology for delivering exceptional results
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'Deep dive into your business needs, challenges, and objectives to understand the full scope.',
                  icon: <Target className="w-8 h-8" />
                },
                {
                  step: '02',
                  title: 'Solution Design',
                  description: 'Architect the perfect solution using cutting-edge technology and industry best practices.',
                  icon: <Lightbulb className="w-8 h-8" />
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Expert development and deployment with rigorous testing and quality assurance.',
                  icon: <Code className="w-8 h-8" />
                },
                {
                  step: '04',
                  title: 'Optimization & Support',
                  description: 'Continuous monitoring, optimization, and ongoing support to ensure peak performance.',
                  icon: <TrendingUp className="w-8 h-8" />
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {process.icon}
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-300">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-400">
                Leading-edge technology with proven results
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: 'Cutting-Edge Innovation',
                  description: 'We\'re at the forefront of AI consciousness, quantum computing, and autonomous operations research and development.',
                  icon: <Sparkles className="w-8 h-8" />,
                  color: 'cyan'
                },
                {
                  title: 'Proven Expertise',
                  description: 'Over a decade of experience delivering complex technology solutions to Fortune 500 companies and startups.',
                  icon: <Award className="w-8 h-8" />,
                  color: 'yellow'
                },
                {
                  title: 'Custom Solutions',
                  description: 'Every solution is tailored to your specific business needs, challenges, and objectives.',
                  icon: <Palette className="w-8 h-8" />,
                  color: 'purple'
                },
                {
                  title: 'Ongoing Support',
                  description: 'Comprehensive support and maintenance services to ensure your solutions continue to deliver value.',
                  icon: <Users className="w-8 h-8" />,
                  color: 'green'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-${feature.color}-500/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our revolutionary technology services can help you achieve your business objectives and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View Success Stories
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <UltraFuturisticFooter2046 />
      </div>
    </Layout>
  );
};

export default Services;
