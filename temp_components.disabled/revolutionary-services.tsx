import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Trophy, FlaskConical as FlaskIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories, getRevolutionaryServicesByCategory, getPopularRevolutionaryServices, getRevolutionaryServicesByPriceRange } from '../data/revolutionary-micro-saas-services';
import { motion, AnimatePresence } from 'framer-motion';

export default function RevolutionaryServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-1000', label: '$0 - $1,000' },
    { value: '1001-2500', label: '$1,001 - $2,500' },
    { value: '2501-5000', label: '$2,501 - $5,000' },
    { value: '5001+', label: '$5,001+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
  ];

  // Filter and sort services
  let filteredServices = revolutionaryMicroSaasServices;

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = getRevolutionaryServicesByCategory(selectedCategory);
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getRevolutionaryServicesByPriceRange(min, max);
  }

  // Search filter
  if (searchQuery) {
    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort services
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':
        const aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0');
        const bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const popularServices = getPopularRevolutionaryServices();

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'Quantum AI & Cognitive Computing',
      description: 'Revolutionary quantum AI solutions with human-level reasoning capabilities',
      icon: <Brain className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum AI & Cognitive Computing').length,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Autonomous Manufacturing & Industry 4.0',
      description: 'Next-generation autonomous manufacturing with zero human intervention',
      icon: <Factory className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Autonomous Manufacturing & Industry 4.0').length,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Quantum Blockchain & DeFi',
      description: 'Quantum-secured blockchain platforms with infinite scalability',
      icon: <Globe className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Blockchain & DeFi').length,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'AI Biomedical Research & Drug Discovery',
      description: 'AI-powered platforms for accelerated drug discovery and medical research',
      icon: <FlaskIcon className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'AI Biomedical Research & Drug Discovery').length,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Quantum Cybersecurity & Threat Detection',
      description: 'Quantum-resistant cybersecurity with AI-powered threat detection',
      icon: <ShieldCheck className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Cybersecurity & Threat Detection').length,
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Space Technology & Satellite Optimization',
      description: 'Revolutionary platforms for space exploration and satellite optimization',
      icon: <Rocket className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Space Technology & Satellite Optimization').length,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'AI Content Creation & Marketing',
      description: 'Quantum-powered content creation at infinite scale',
      icon: <FileText className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'AI Content Creation & Marketing').length,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'Quantum Computing as a Service',
      description: 'Enterprise quantum computing with real quantum processors',
      icon: <Cpu className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Computing as a Service').length,
      color: 'from-violet-500 to-purple-600'
    },
    {
      name: 'Autonomous Vehicles & Smart Transportation',
      description: 'AI platforms for autonomous vehicles and smart transportation',
      icon: <CarIcon className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Autonomous Vehicles & Smart Transportation').length,
      color: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Smart Energy & Renewable Energy',
      description: 'AI platforms for smart energy grids and renewable energy optimization',
      icon: <LeafIcon className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Smart Energy & Renewable Energy').length,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Revolutionary Micro SaaS Services | Zion Tech Group - Quantum AI, Autonomous Systems, Space Technology</title>
          <meta name="description" content="Discover revolutionary micro SaaS services from Zion Tech Group. Quantum AI, autonomous manufacturing, space technology, biomedical research, and cutting-edge solutions. Start your free trial today." />
          <meta name="keywords" content="revolutionary micro SaaS, quantum AI, autonomous manufacturing, space technology, biomedical research, quantum cybersecurity, blockchain, autonomous vehicles, smart energy" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Revolutionary Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Cutting-edge micro SaaS platform with quantum AI, autonomous systems, and revolutionary technology solutions." />
          <meta property="og:url" content="https://ziontechgroup.com/revolutionary-services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/revolutionary-services" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-8 futuristic-glow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="text-white">Micro SaaS Services</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience the future of technology with our revolutionary micro SaaS platform. 
                Quantum AI, autonomous systems, space technology, and cutting-edge solutions that redefine what's possible.
              </motion.p>
              
              {/* Service Count Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{revolutionaryMicroSaasServices.length}+</div>
                  <div className="text-gray-400">Revolutionary Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
                  <div className="text-gray-400">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">21</div>
                  <div className="text-gray-400">Day Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">2000%+</div>
                  <div className="text-gray-400">Average ROI</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="futuristic" 
                  size="lg"
                  onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                >
                  Get Started
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="py-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-t border-b border-cyan-400/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">{contactInfo.mobile}</span>
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-white">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-white">{contactInfo.address}</span>
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-white">{contactInfo.website}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {enhancedCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <UltraFuturisticCard
                    variant="quantum-advanced"
                    size="small"
                    className="text-center cursor-pointer h-full"
                    onClick={() => setSelectedCategory(category.name === selectedCategory ? 'All' : category.name)}
                  >
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{category.description}</p>
                    <div className="text-2xl font-bold text-cyan-400">{category.count}</div>
                    <div className="text-xs text-gray-500">Services</div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Popular Services Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Most Popular
                </span>
                <br />
                <span className="text-white">Revolutionary Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most sought-after revolutionary micro SaaS services that are transforming industries worldwide.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {popularServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <UltraFuturisticCard
                    variant={service.variant as any}
                    size="large"
                    className="h-full cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.tagline}</p>
                      <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.period}</div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                                                 <Button 
                             variant="primary" 
                             size="md"
                             onClick={() => window.open(service.link, '_blank')}
                             className="w-full"
                           >
                             Learn More
                             <ExternalLink className="ml-2 w-4 h-4" />
                           </Button>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services-grid" className="py-16">
          <div className="container mx-auto px-4">
            {/* Filters and Controls */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="flex flex-wrap gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="All">All Categories</option>
                    {revolutionaryServiceCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-400"
                  >
                    {priceRanges.map(range => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-green-400/30 rounded-lg text-white focus:outline-none focus:border-green-400"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 w-64"
                    />
                  </div>
                  
                  <div className="flex border border-gray-600 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-3 py-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services Display */}
            <motion.div 
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
              }
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <UltraFuturisticCard
                    variant={service.variant as any}
                    size={viewMode === 'grid' ? 'large' : 'medium'}
                    className={`h-full cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                    onClick={() => setSelectedService(service)}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <div className="text-center">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-300 mb-4 text-sm">{service.tagline}</p>
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                        <div className="text-sm text-gray-400 mb-4">{service.period}</div>
                        
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="text-center">
                          <Button 
                            variant="primary" 
                            size="sm"
                            onClick={() => window.open(service.link, '_blank')}
                            className="w-full"
                          >
                            Learn More
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className="flex flex-col md:flex-row gap-6 w-full">
                        <div className="text-4xl md:text-5xl flex-shrink-0">{service.icon}</div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                              <p className="text-gray-300 text-sm">{service.tagline}</p>
                            </div>
                            <div className="text-right mt-2 md:mt-0">
                              <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                              <div className="text-sm text-gray-400">{service.period}</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                              <div className="space-y-1">
                                {service.features.slice(0, 4).map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                    <span className="text-gray-300">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-purple-400 mb-2">Market Info</h4>
                              <div className="space-y-1 text-sm text-gray-300">
                                <div><span className="text-gray-400">ROI:</span> {service.roi}</div>
                                <div><span className="text-gray-400">Market:</span> {service.marketSize}</div>
                                <div><span className="text-gray-400">Growth:</span> {service.growthRate}</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                                                         <Button 
                               variant="primary" 
                               size="sm"
                               onClick={() => window.open(service.link, '_blank')}
                             >
                               Learn More
                               <ExternalLink className="ml-2 w-4 h-4" />
                             </Button>
                             <Button 
                               variant="futuristic" 
                               size="sm"
                               onClick={() => setSelectedService(service)}
                             >
                               View Details
                               <Eye className="ml-2 w-4 h-4" />
                             </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters.</p>
                                         <Button 
                           variant="primary"
                           onClick={() => {
                             setSearchQuery('');
                             setSelectedCategory('All');
                             setPriceRange('All');
                           }}
                         >
                           Clear Filters
                         </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-slate-900 rounded-2xl border border-cyan-400/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{selectedService.icon}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                        <p className="text-xl text-gray-300">{selectedService.tagline}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Service Details</h3>
                      <p className="text-gray-300 mb-6">{selectedService.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-purple-400 mb-2">Pricing</h4>
                          <div className="text-2xl font-bold text-white">{selectedService.price}{selectedService.period}</div>
                          <div className="text-sm text-gray-400">{selectedService.marketPrice}</div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-green-400 mb-2">ROI & Market</h4>
                          <div className="text-sm text-gray-300 space-y-1">
                            <div><span className="text-gray-400">ROI:</span> {selectedService.roi}</div>
                            <div><span className="text-gray-400">Market Size:</span> {selectedService.marketSize}</div>
                            <div><span className="text-gray-400">Growth Rate:</span> {selectedService.growthRate}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Features & Capabilities</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features</h4>
                          <div className="space-y-2">
                            {selectedService.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits</h4>
                          <div className="space-y-2">
                            {selectedService.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Capabilities</h4>
                          <div className="space-y-2">
                            {selectedService.capabilities.map((capability, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Zap className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                                <span className="text-gray-300">{capability}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                      <div className="text-sm text-gray-400">
                        <div>Setup Time: {selectedService.setupTime}</div>
                        <div>Trial: {selectedService.trialDays} days</div>
                      </div>
                      
                      <div className="flex gap-4">
                                                 <Button 
                           variant="primary"
                           onClick={() => window.open(selectedService.link, '_blank')}
                         >
                           Visit Service
                           <ExternalLink className="ml-2 w-4 h-4" />
                         </Button>
                         <Button 
                           variant="futuristic"
                           onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                         >
                           Contact Sales
                           <Mail className="ml-2 w-4 h-4" />
                         </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already transforming their business with our revolutionary micro SaaS services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                 <Button 
                   variant="primary" 
                   size="lg"
                   onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                 >
                   Start Free Trial
                   <Rocket className="ml-2 w-5 h-5" />
                 </Button>
                 <Button 
                   variant="futuristic" 
                   size="lg"
                   onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                 >
                   Schedule Demo
                   <Calendar className="ml-2 w-5 h-5" />
                 </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{contactInfo.mobile}</div>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email us 24/7</div>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{contactInfo.address}</div>
                  <div className="text-gray-400 text-sm">Visit our office</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}