import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Sparkle, ArrowUpRight, Eye, Heart, Share2, Bookmark, Download, Upload, RefreshCw, Target as TargetIcon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import AdvancedFuturisticCard from '../components/ui/AdvancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { enhancedMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-micro-saas-services';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-100', label: '$0 - $100' },
    { value: '101-500', label: '$101 - $500' },
    { value: '501-1000', label: '$501 - $1000' },
    { value: '1001+', label: '$1001+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
  ];

  // Filter and sort services
  let filteredServices = enhancedMicroSaasServices;

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = getServicesByCategory(selectedCategory);
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getServicesByPriceRange(min, max);
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

  const popularServices = getPopularServices();

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions with unprecedented computing power',
      icon: <Brain className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'Quantum Computing' || s.category === 'AI & Machine Learning').length,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <Factory className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0' || s.category === 'Robotics & Automation').length,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskConical className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'Healthcare & Biotechnology').length,
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Space Technology',
      description: 'Cutting-edge space exploration and satellite optimization',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'Space Technology').length,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Quantum Finance',
      description: 'Quantum-powered financial modeling and trading platforms',
      icon: <DollarSign className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'Quantum Finance').length,
      color: 'from-yellow-500 to-amber-600'
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced AI and quantum cybersecurity solutions',
      icon: <Shield className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'AI Cybersecurity' || s.category === 'Quantum Cybersecurity').length,
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Supply Chain & Logistics',
      description: 'Intelligent supply chain optimization and management',
      icon: <Truck className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'Supply Chain & Logistics').length,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Content & Marketing',
      description: 'AI-powered content creation and marketing automation',
      icon: <MessageSquare className="w-6 h-6" />,
      count: enhancedMicroSaasServices.filter(s => s.category === 'AI Content Creation' || s.category === 'AI Sales & Marketing').length,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const stats = [
    { label: 'Total Services', value: enhancedMicroSaasServices.length, icon: <Cloud className="w-6 h-6" />, color: 'text-cyan-400' },
    { label: 'Categories', value: serviceCategories.length, icon: <Target className="w-6 h-6" />, color: 'text-purple-400' },
    { label: 'Popular Services', value: popularServices.length, icon: <Star className="w-6 h-6" />, color: 'text-yellow-400' },
    { label: 'Starting Price', value: '$49', icon: <DollarSign className="w-6 h-6" />, color: 'text-green-400' },
    { label: 'Free Trial', value: '21 Days', icon: <Calendar className="w-6 h-6" />, color: 'text-blue-400' },
    { label: 'Uptime', value: '99.99%', icon: <Shield className="w-6 h-6" />, color: 'text-red-400' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>400+ Revolutionary Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover 400+ cutting-edge micro SaaS services powered by quantum AI, autonomous systems, and emerging technologies. 21-day free trials, 99.99% uptime, 2000%+ average ROI." />
        <meta name="keywords" content="micro SaaS services, quantum AI, autonomous systems, biomedical research, space technology, quantum finance, cybersecurity, automation" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="400+ Revolutionary Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="Discover 400+ cutting-edge micro SaaS services powered by quantum AI and autonomous systems" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Enhanced Futuristic Background */}
      <UltraFuturisticBackground>
        <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Sparkle className="w-4 h-4 mr-2" />
              Revolutionary Micro SaaS Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-6">
              400+ Revolutionary
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
                Micro SaaS Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive portfolio of cutting-edge micro SaaS services. 
              From quantum AI to autonomous systems, we provide the tools you need to dominate your industry.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex justify-center mb-2">
                    <div className={`p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 ${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Explore Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of micro SaaS services organized by industry and technology type
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enhancedCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EnhancedFuturisticCard 
                  className="h-full p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">
                      {category.count} Services
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </EnhancedFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  All Categories
                </button>
                {serviceCategories.slice(0, 6).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Price Range:</span>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-sm text-gray-400">
                  Showing {filteredServices.length} of {enhancedMicroSaasServices.length} services
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setPriceRange('All');
                }}
                variant="primary"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard
                    title={service.name}
                    description={service.tagline}
                    icon={<div className="text-3xl">{service.icon}</div>}
                    color={service.color}
                    textColor={service.textColor}
                    gradient={service.color}
                    features={service.features}
                    link={service.link}
                    popular={service.popular}
                    price={service.price}
                    period={service.period}
                    variant={service.variant || 'default'}
                    className="h-full"
                  >
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-blue-400">{service.marketSize}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Growth Rate:</span>
                        <span className="text-purple-400">{service.growthRate}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-white">{service.setupTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Trial:</span>
                        <span className="text-cyan-400">{service.trialDays} days free</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                        variant="secondary"
                        size="sm"
                        className="group flex-1"
                      >
                        Contact Sales
                        <Mail className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already achieving unprecedented results with our revolutionary micro SaaS services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center text-left">
                <Check className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">21-day free trial on all services</span>
              </div>
              <div className="flex items-center text-left">
                <Check className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">No credit card required</span>
              </div>
              <div className="flex items-center text-left">
                <Check className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">Instant setup and deployment</span>
              </div>
              <div className="flex items-center text-left">
                <Check className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">24/7 AI-powered support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://ziontechgroup.com/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href={`tel:${contactInfo.mobile}`}
                variant="secondary"
                size="lg"
                className="group"
              >
                Call Us Now
                <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Footer */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 border border-cyan-500/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Need Help Choosing the Right Service?
              </h3>
              <p className="text-xl text-gray-300">
                Our team of experts is here to help you find the perfect solution for your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Call Us</h4>
                <a 
                  href={`tel:${contactInfo.mobile}`} 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
                >
                  {contactInfo.mobile}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Email Us</h4>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="text-purple-400 hover:text-purple-300 transition-colors text-lg font-medium"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Visit Us</h4>
                <p className="text-green-400 text-sm">
                  {contactInfo.address}
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button
                href="https://ziontechgroup.com/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                Get Expert Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
        </div>
      </UltraFuturisticBackground>
    </div>
  );
}