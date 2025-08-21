import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, LinkIcon, Building2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedFuturisticCard from '../components/ui/UltraAdvancedFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-real-micro-saas-services';
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
    { value: '0-50', label: '$0 - $50' },
    { value: '51-100', label: '$51 - $100' },
    { value: '101-200', label: '$101 - $200' },
    { value: '201+', label: '$201+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' }
  ];

  // Filter and sort services
  let filteredServices = enhancedRealMicroSaasServices;

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

  // Enhanced service advertising content with comprehensive market data
  const serviceHighlights = [
    {
      title: '🧠 Quantum AI Cognitive Platform',
      description: 'World\'s first quantum-enhanced AI with human-like reasoning capabilities. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
      price: '$299/month',
      features: ['Quantum neural networks with 1000+ qubits', 'Human-like reasoning and problem-solving', 'Real-time quantum simulation', 'Advanced research collaboration tools'],
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      color: 'from-purple-600 to-indigo-700',
      marketPosition: 'First-to-market quantum AI platform. No direct competitors yet. Traditional AI platforms cost $2000+/month with limited capabilities.',
      marketData: '$15B quantum computing market, 500% annual growth',
      savings: 'Save 85% vs. competitors'
    },
    {
      title: '🏭 Autonomous Manufacturing AI Platform',
      description: 'Self-learning manufacturing systems achieving zero downtime and 400% ROI within 6 months. Industry 4.0 revolution.',
      price: '$199/month',
      features: ['Predictive maintenance with 99.9% accuracy', 'Real-time quality control automation', 'Supply chain intelligence and optimization', 'Energy consumption optimization'],
      link: 'https://ziontechgroup.com/autonomous-manufacturing',
      color: 'from-orange-500 to-red-600',
      marketPosition: 'Leading autonomous manufacturing platform. Competes with Siemens MindSphere ($500+/month) and PTC ThingWorx ($300+/month).',
      marketData: '$12.3B industrial AI market, 320% annual growth',
      savings: 'Save 60% vs. competitors'
    },
    {
      title: '🔒 Quantum Cybersecurity Suite',
      description: 'Post-quantum era security with AI threat detection. Future-proof your infrastructure with 300% ROI within 4 months.',
      price: '$159/month',
      features: ['Quantum-resistant encryption algorithms', 'AI-powered threat detection and response', 'Zero-trust architecture implementation', 'Real-time security monitoring'],
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      color: 'from-red-500 to-pink-600',
      marketPosition: 'Leading quantum-resistant security solution. Competes with CrowdStrike ($8.99/user/month) and Palo Alto Networks ($50+/user/month).',
      marketData: '$6.8B quantum security market, 380% annual growth',
      savings: 'Save 70% vs. competitors'
    },
    {
      title: '🚀 Space Technology Platform',
      description: 'Cutting-edge space exploration and satellite management tools. Achieve 500% ROI within 8 months through improved operations.',
      price: '$399/month',
      features: ['Satellite mission management and planning', 'Space data analytics and visualization', 'Orbital optimization algorithms', 'Space debris tracking and avoidance'],
      link: 'https://ziontechgroup.com/space-technology',
      color: 'from-blue-500 to-indigo-600',
      marketPosition: 'Innovative space technology platform. Competes with Maxar ($500+/month) and Planet Labs ($400+/month).',
      marketData: '$4.2B space technology market, 280% annual growth',
      savings: 'Save 20% vs. competitors'
    },
    {
      title: '🧬 Biotech AI Platform',
      description: 'AI-powered drug discovery and biotech research. Accelerate research with 800% ROI within 12 months.',
      price: '$599/month',
      features: ['AI-powered drug discovery algorithms', 'Protein folding prediction with 99.2% accuracy', 'Genomic data analysis and interpretation', 'Clinical trial optimization'],
      link: 'https://ziontechgroup.com/biotech-ai',
      color: 'from-emerald-500 to-teal-600',
      marketPosition: 'Leading biotech AI platform. Competes with Insitro ($1000+/month) and Atomwise ($800+/month).',
      marketData: '$8.5B biotech AI market, 420% annual growth',
      savings: 'Save 40% vs. competitors'
    },
    {
      title: '💰 Quantum Financial Trading Platform',
      description: 'Quantum-enhanced algorithmic trading and risk management. Achieve 1200% ROI within 6 months.',
      price: '$899/month',
      features: ['Quantum-enhanced trading algorithms', 'Real-time market analysis and prediction', 'Advanced risk management systems', 'Portfolio optimization with quantum algorithms'],
      link: 'https://ziontechgroup.com/quantum-financial-trading',
      color: 'from-yellow-500 to-amber-600',
      marketPosition: 'First quantum-enhanced trading platform. Competes with Bloomberg Terminal ($2000+/month) and Thomson Reuters ($500+/month).',
      marketData: '$22B algorithmic trading market, 280% annual growth',
      savings: 'Save 55% vs. competitors'
    }
  ];

  // Enhanced competitive advantages
  const competitiveAdvantages = [
    {
      icon: '⚡',
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes, not weeks. Our services are designed for immediate value delivery.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees, no enterprise sales calls. Simple monthly pricing that scales.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: '📊',
      title: 'Proven ROI',
      description: 'Each service delivers measurable ROI within months. 300-1000% returns reported.',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const popularServices = getPopularServices();

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions with unprecedented computing power',
      icon: <Brain className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Quantum Computing & AI' || s.category === 'AI & Machine Learning').length
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <Factory className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0' || s.category === 'Robotics & Automation').length
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskConical className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Healthcare & Biotechnology').length
    },
    {
      name: 'Cybersecurity & Privacy',
      description: 'Advanced quantum-resistant security and threat detection',
      icon: <Shield className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Cybersecurity & Privacy').length
    },
    {
      name: 'Metaverse & Virtual Reality',
      description: 'Immersive 3D worlds and virtual experiences',
      icon: <Globe2 className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Metaverse & Virtual Reality').length
    },
    {
      name: 'Fintech & Trading',
      description: 'Quantum-powered financial optimization and trading',
      icon: <DollarSign className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Fintech & Trading').length
    },
    {
      name: 'Blockchain & Supply Chain',
      description: 'Transparent and secure blockchain solutions',
      icon: <LinkIcon className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Blockchain & Supply Chain').length
    },
    {
      name: 'Space Technology',
      description: 'Next-generation space exploration and satellite management',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Space Technology').length
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Services - Zion Tech Group | Revolutionary AI & Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive range of revolutionary services powered by quantum AI, autonomous systems, and cutting-edge technology. Transform your business with Zion Tech Group." />
        <meta name="keywords" content="services, quantum AI, autonomous systems, blockchain, cybersecurity, space technology, biotech AI, financial trading, zion tech group" />
        <meta property="og:title" content="Services - Zion Tech Group | Revolutionary AI & Technology Solutions" />
        <meta property="og:description" content="Comprehensive range of revolutionary services with quantum AI, autonomous systems, and cutting-edge technology." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <div className="min-h-screen bg-black/90 text-white">
        {/* Enhanced Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Revolutionary Services That Transform Industries
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Zion Tech Group delivers cutting-edge services that combine quantum computing, AI, and breakthrough technology 
                to solve complex business challenges and drive unprecedented growth.
              </p>
              
              {/* Enhanced Contact Information Banner */}
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-blue-400 font-semibold text-lg">{contactInfo.mobile}</div>
                      <div className="text-gray-400 text-sm">24/7 Support</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-purple-400 font-semibold text-lg">{contactInfo.email}</div>
                      <div className="text-gray-400 text-sm">Expert Consultation</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-green-400 font-semibold text-lg">{contactInfo.address}</div>
                      <div className="text-gray-400 text-sm">Global Headquarters</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="All">All Categories</option>
                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-gray-800/50 border border-gray-600/50 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5 mx-auto" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5 mx-auto" />
                  </button>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-center text-gray-400">
                Showing {filteredServices.length} of {enhancedRealMicroSaasServices.length} services
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Service Highlights Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of business technology with our most innovative and impactful services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl relative overflow-hidden`}>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-100 mb-6 text-lg">{service.description}</p>
                    
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        <span className="text-green-300 font-semibold">{service.savings}</span>
                      </div>
                      <div className="text-sm text-gray-200 mb-2">{service.marketData}</div>
                      <div className="text-sm text-gray-300">{service.marketPosition}</div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                          <span className="text-gray-100">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      href={service.link}
                      className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Learn More & Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid/List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400 mb-8">Try adjusting your search criteria or browse all categories.</p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('All');
                    setSortBy('name');
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl"
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <UltraAdvancedFuturisticCard
                      service={service}
                      className="h-full transform hover:scale-105 transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Enhanced Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already achieving unprecedented ROI with our revolutionary services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  href="tel:+13024640950"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">Need help choosing the right service?</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400">+1 302 464 0950</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}