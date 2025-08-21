import React, { useState } from 'react';
import Head from 'next/head';
import { Shield, Clock, DollarSign, TrendingUp, Brain, Rocket, ArrowRight, ExternalLink, Search, Filter, Grid, List, Phone, Mail, MapPin, Star, Check, Sparkles, Atom, Cpu, Globe, FlaskConical } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices } from '../data/enhanced-real-micro-saas-services';
import { motion } from 'framer-motion';

export default function MicroSaasPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'innovation'>('innovation');
  const [searchQuery, setSearchQuery] = useState('');
  
  const competitiveAdvantages = [
    {
      icon: '⚡',
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes, not weeks. Our services are designed for immediate value delivery with minimal configuration.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business needs.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee for all services.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-blue-500/10'
    },
    {
      icon: '📊',
      title: 'Real Business Value',
      description: 'Each service solves a specific business problem with measurable ROI and immediate impact.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-500/10 to-purple-500/10'
    },
    {
      icon: '🌐',
      title: 'Unified Platform',
      description: 'Access all services through ziontechgroup.com with single sign-on and integrated billing.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-500/10 to-cyan-500/10'
    },
    {
      icon: '🎯',
      title: 'Focused Solutions',
      description: 'Specialized tools that do one thing exceptionally well, without enterprise complexity.',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-500/10 to-pink-500/10'
    }
  ];

  // Filter and sort services
  let filteredServices = selectedCategory === 'all' || selectedCategory === 'All'
    ? enhancedRealMicroSaasServices 
    : getServicesByCategory(selectedCategory);

  // Apply search filter
  if (searchQuery) {
    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.technology.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  // Apply sorting
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'innovation': {
        // Sort by realImplementation first, then by popularity
        if (a.realImplementation && !b.realImplementation) return -1;
        if (!a.realImplementation && b.realImplementation) return 1;
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return 0;
      }
      default:
        return 0;
    }
  });

  const revolutionaryServices = enhancedRealMicroSaasServices.filter(service => 
    service.realImplementation && service.popular
  );

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const featuredCategories = [
    {
      name: 'Quantum Computing & AI',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-purple-600 to-indigo-700',
      description: 'Revolutionary quantum solutions for complex problems',
      serviceCount: enhancedRealMicroSaasServices.filter(s => s.category === 'Quantum Computing & AI').length
    },
    {
      name: 'Autonomous Manufacturing',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-orange-600 to-red-700',
      description: 'Self-optimizing AI that runs 24/7',
      serviceCount: enhancedRealMicroSaasServices.filter(s => s.category === 'Autonomous Manufacturing').length
    },
    {
      name: 'Space Technology',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-blue-600 to-indigo-700',
      description: 'Next-generation space exploration and management',
      serviceCount: enhancedRealMicroSaasServices.filter(s => s.category === 'Space Technology').length
    },
    {
      name: 'Metaverse & VR/AR',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-700',
      description: 'Immersive digital experiences and virtual worlds',
      serviceCount: enhancedRealMicroSaasServices.filter(s => s.category === 'Metaverse & VR/AR').length
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>100+ Revolutionary Micro SaaS Services | Zion Tech Group - AI, Quantum, Emerging Tech</title>
          <meta name="description" content="Explore 100+ revolutionary micro SaaS services from Zion Tech Group. Quantum AI, autonomous manufacturing, cybersecurity, biomedical research, and emerging technologies. Start your free trial today." />
          <meta name="keywords" content="micro SaaS services, quantum AI, autonomous manufacturing, cybersecurity, biomedical research, financial technology, space technology, metaverse, blockchain, IoT, edge computing" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="100+ Revolutionary Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Revolutionary micro SaaS platform with quantum AI, autonomous systems, and emerging technology solutions." />
          <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
        </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">150+ Revolutionary Services Available</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 futuristic-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Micro SaaS
              </span>
              <br />
              <span className="text-white">Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover 150+ cutting-edge micro SaaS solutions that are transforming industries. 
              From Quantum AI to Autonomous Factories, each service delivers real business value with proven ROI.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">150+</div>
                <div className="text-sm text-gray-300 font-medium">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-2">25+</div>
                <div className="text-sm text-gray-300 font-medium">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500%+</div>
                <div className="text-sm text-gray-300 font-medium">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">30+</div>
                <div className="text-sm text-gray-300 font-medium">Day Trials</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured Categories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our most innovative service categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 h-full`}>
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20`}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{category.name}</h3>
                  <p className="text-gray-300 text-center mb-4">{category.description}</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{category.serviceCount}</div>
                    <div className="text-sm text-gray-400">Services</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Search */}
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  >
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  >
                    <option value="innovation">Sort by Innovation</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="price">Sort by Price</option>
                    <option value="name">Sort by Name</option>
                  </select>
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex justify-center mt-6">
                <div className="flex bg-gray-800/50 rounded-xl p-1 border border-gray-600/50">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Available Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredServices.length} services found in {selectedCategory === 'All' ? 'all categories' : selectedCategory}
            </p>
          </motion.div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <EnhancedFuturisticCard
                    variant={service.variant as any}
                    className="h-full"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-gray-400 ml-1">{service.period}</span>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                      </div>
                      <div className="text-sm text-gray-400 mb-4">{service.category}</div>
                      <Button
                        href={service.link}
                        variant="secondary"
                        size="sm"
                        className="w-full"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </EnhancedFuturisticCard>
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
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-6">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-300 mb-2">{service.tagline}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{service.category}</span>
                          <span>•</span>
                          <span>{service.setupTime} setup</span>
                          <span>•</span>
                          <span>{service.trialDays} day trial</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                        <div className="text-gray-400 text-sm mb-2">{service.period}</div>
                        <div className="flex items-center justify-end mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <Button
                          href={service.link}
                          variant="secondary"
                          size="sm"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredServices.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search criteria or browse all categories</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                variant="primary"
              >
                View All Services
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unmatched innovation, reliability, and value in the micro SaaS industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${advantage.bgColor} border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 h-full`}>
                  <div className="text-4xl mb-6">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team to learn more about our revolutionary micro SaaS services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">Mobile</div>
                        <div className="text-gray-300">{contactInfo.mobile}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">Email</div>
                        <div className="text-gray-300">{contactInfo.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">Address</div>
                        <div className="text-gray-300">{contactInfo.address}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
                  <div className="space-y-4">
                    <Button 
                      href="/micro-saas" 
                      variant="primary" 
                      size="lg"
                      className="w-full"
                    >
                      Browse All Services
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button 
                      href={`mailto:${contactInfo.email}`}
                      variant="secondary" 
                      size="lg"
                      className="w-full"
                    >
                      Send Email
                      <Mail className="ml-2 w-5 h-5" />
                    </Button>
                    <Button 
                      href={`tel:${contactInfo.mobile}`}
                      variant="secondary" 
                      size="lg"
                      className="w-full"
                    >
                      Call Now
                      <Phone className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </UltraAdvancedFuturisticBackground>
  );
}