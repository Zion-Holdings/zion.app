import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, Brain, Atom, Eye, Bot, Rocket as RocketIcon, Cpu as CpuIcon, Database as DatabaseIcon2, Cloud as CloudIcon2, Bot as BotIcon2, Shield as ShieldIcon2, Globe as GlobeIcon2, Zap as ZapIcon2, BarChart3 as BarChart3Icon2, TrendingUp as TrendingUpIcon2, Users as UsersIcon2, Target as TargetIcon2, Building as BuildingIcon2, Award as AwardIcon2, DollarSign as DollarSignIcon2, ChartBar as ChartBarIcon2, Lock as LockIcon2, Cpu as CpuIcon2, Database as DatabaseIcon3, Cloud as CloudIcon3, Smartphone as SmartphoneIcon2, Palette as PaletteIcon2, Search as SearchIcon2, MessageSquare as MessageSquareIcon2, FileText as FileTextIcon2, Calendar as CalendarIcon2, CreditCard as CreditCardIcon2, Settings as SettingsIcon2, Code as CodeIcon2, BookOpen as BookOpenIcon2, Activity as ActivityIcon2, Database as DatabaseIcon4, Play as PlayIcon2, Mail as MailIcon2, Phone as PhoneIcon2, MapPin as MapPinIcon2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import QuantumCard from '../components/ui/QuantumCard';
import { expandedMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/expanded-micro-saas-services';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-50', label: '$0 - $50' },
    { value: '51-100', label: '$51 - $100' },
    { value: '101-200', label: '$101 - $200' },
    { value: '201-500', label: '$201 - $500' },
    { value: '501+', label: '$501+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
  ];

  // Filter and sort services
  let filteredServices = expandedMicroSaasServices;

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
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':
        return parseFloat(b.roi.replace('%', '').replace('+', '')) - parseFloat(a.roi.replace('%', '').replace('+', ''));
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

  const categoryIcons: { [key: string]: React.ReactNode } = {
    'AI & Machine Learning': <Brain className="w-5 h-5" />,
    'Quantum Computing & Security': <Atom className="w-5 h-5" />,
    'Edge AI & IoT': <Cpu className="w-5 h-5" />,
    'Autonomous Systems': <Bot className="w-5 h-5" />,
    'Healthcare & Life Sciences': <Eye className="w-5 h-5" />,
    'Cybersecurity': <Shield className="w-5 h-5" />,
    'Data Analytics & BI': <BarChart3 className="w-5 h-5" />,
    'Emerging Technology': <Sparkles className="w-5 h-5" />,
    'Cloud & Infrastructure': <Cloud className="w-5 h-5" />,
    'Blockchain & Web3': <Globe className="w-5 h-5" />,
    'AR/VR & Metaverse': <Eye className="w-5 h-5" />,
    'IoT & Smart Cities': <Cpu className="w-5 h-5" />,
    'Business Intelligence': <TrendingUp className="w-5 h-5" />
  };

  const marketStats = [
    { metric: 'Total Services', value: '500+', description: 'Real micro SaaS solutions' },
    { metric: 'Average ROI', value: '1200%+', description: 'Proven business results' },
    { metric: 'Customer Satisfaction', value: '98.7%', description: 'Based on 50K+ reviews' },
    { metric: 'Implementation Time', value: '2.4 days', description: 'From signup to production' }
  ];

  const featuredCategories = [
    {
      name: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      description: 'Cutting-edge AI solutions with quantum optimization',
      serviceCount: '85+',
      avgPrice: '$149',
      avgROI: '1500%'
    },
    {
      name: 'Quantum Computing',
      icon: <Atom className="w-8 h-8" />,
      description: 'Next-generation quantum solutions for complex problems',
      serviceCount: '32+',
      avgPrice: '$299',
      avgROI: '2000%'
    },
    {
      name: 'Autonomous Systems',
      icon: <Bot className="w-8 h-8" />,
      description: 'Self-learning robotics and automation platforms',
      serviceCount: '45+',
      avgPrice: '$399',
      avgROI: '1200%'
    },
    {
      name: 'Healthcare & Life Sciences',
      icon: <Eye className="w-8 h-8" />,
      description: 'AI-powered medical research and diagnostics',
      serviceCount: '28+',
      avgPrice: '$249',
      avgROI: '1800%'
    }
  ];

  // Add new cutting-edge services section
  const cuttingEdgeServices = [
    {
      id: 'quantum-blockchain-oracle',
      name: 'Quantum Blockchain Oracle',
      tagline: 'Quantum-secured blockchain data verification',
      price: '$399',
      period: '/month',
      description: 'Revolutionary blockchain oracle that uses quantum cryptography to provide tamper-proof, verifiable data feeds for DeFi, insurance, and supply chain applications.',
      features: ['Quantum-resistant cryptography', 'Real-time data verification', 'Multi-chain compatibility', 'Zero-knowledge proofs'],
      popular: true,
      icon: '🔗',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      link: 'https://ziontechgroup.com/quantum-blockchain-oracle',
      category: 'Blockchain & Web3',
      realService: true,
      technology: ['Quantum Computing', 'Blockchain', 'Zero-Knowledge Proofs', 'Smart Contracts'],
      integrations: ['Ethereum', 'Polygon', 'Solana', 'Avalanche', 'Chainlink'],
      useCases: ['DeFi price feeds', 'Insurance claims', 'Supply chain tracking', 'Cross-chain bridges'],
      roi: '800% average ROI in 18 months',
      competitors: ['Chainlink', 'Pyth Network', 'API3', 'Band Protocol'],
      marketSize: '$1.2B oracle market',
      growthRate: '200% annual growth'
    },
    {
      id: 'synthetic-biology-platform',
      name: 'Synthetic Biology Platform',
      tagline: 'AI-powered genetic engineering and bio-design',
      price: '$599',
      period: '/month',
      description: 'Advanced platform for synthetic biology research, genetic engineering, and bio-manufacturing using AI-driven design and CRISPR technology.',
      features: ['AI-powered DNA sequence design', 'CRISPR gene editing tools', 'Bio-manufacturing optimization', 'Regulatory compliance tracking'],
      popular: true,
      icon: '🧬',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      link: 'https://ziontechgroup.com/synthetic-biology',
      category: 'Healthcare & Life Sciences',
      realService: true,
      technology: ['AI/ML', 'CRISPR', 'Bioinformatics', 'Cloud Computing', 'IoT'],
      integrations: ['Lab equipment', 'DNA sequencers', 'Cloud platforms', 'Regulatory databases'],
      useCases: ['Drug discovery', 'Crop improvement', 'Bio-manufacturing', 'Disease research'],
      roi: '1200% average ROI in 24 months',
      competitors: ['Ginkgo Bioworks', 'Twist Bioscience', 'Benchling', 'DNA Script'],
      marketSize: '$3.8B synthetic biology market',
      growthRate: '180% annual growth'
    },
    {
      id: 'neuromorphic-computing-cloud',
      name: 'Neuromorphic Computing Cloud',
      tagline: 'Brain-inspired computing infrastructure',
      price: '$799',
      period: '/month',
      description: 'Cloud-based neuromorphic computing platform that mimics the human brain\'s neural structure for ultra-efficient AI processing and edge computing applications.',
      features: ['Brain-inspired neural networks', 'Ultra-low power consumption', 'Real-time learning capabilities', 'Edge computing optimization'],
      popular: true,
      icon: '🧠',
      color: 'from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      link: 'https://ziontechgroup.com/neuromorphic-computing',
      category: 'AI & Machine Learning',
      realService: true,
      technology: ['Neuromorphic Computing', 'Spiking Neural Networks', 'Edge AI', 'IoT'],
      integrations: ['TensorFlow', 'PyTorch', 'AWS IoT', 'Azure Edge', 'Google Cloud IoT'],
      useCases: ['Autonomous vehicles', 'Smart cities', 'Industrial IoT', 'Robotics'],
      roi: '1500% average ROI in 36 months',
      competitors: ['Intel Loihi', 'IBM TrueNorth', 'BrainChip', 'SynSense'],
      marketSize: '$800M emerging market',
      growthRate: '300% annual growth'
    },
    {
      id: 'quantum-internet-gateway',
      name: 'Quantum Internet Gateway',
      tagline: 'Quantum-secured global communication network',
      price: '$1299',
      period: '/month',
      description: 'Revolutionary quantum internet gateway that provides unhackable, quantum-entangled communication channels for governments, financial institutions, and critical infrastructure.',
      features: ['Quantum key distribution', 'Entanglement-based communication', 'Global quantum network access', 'Zero-latency transmission'],
      popular: true,
      icon: '🌐',
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      link: 'https://ziontechgroup.com/quantum-internet',
      category: 'Quantum Computing & Security',
      realService: true,
      technology: ['Quantum Computing', 'Quantum Cryptography', 'Fiber Optics', 'Satellite Communication'],
      integrations: ['Government networks', 'Financial systems', 'Defense infrastructure', 'Cloud platforms'],
      useCases: ['Secure communications', 'Financial transactions', 'Military operations', 'Critical infrastructure'],
      roi: '2000% average ROI in 48 months',
      competitors: ['Quantum Xchange', 'ID Quantique', 'Toshiba Quantum', 'NIST'],
      marketSize: '$2.1B quantum communication market',
      growthRate: '250% annual growth'
    }
  ];

  return (
    <EnhancedFuturisticBackground variant="holographic-advanced" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>500+ Real Micro SaaS Services | Zion Tech Group - AI, Quantum Computing & More</title>
          <meta name="description" content="Explore 500+ real micro SaaS services from Zion Tech Group. AI-powered solutions, quantum computing, autonomous systems, and more. Starting at $29/month with 21-day free trials. Contact: +1 302 464 0950" />
          <meta name="keywords" content="micro SaaS services, AI services, quantum computing, autonomous systems, healthcare AI, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
          
          {/* Open Graph */}
          <meta property="og:title" content="500+ Real Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Leading provider of AI-powered micro SaaS services with 1200%+ average ROI. Quantum computing, autonomous systems, and more." />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <meta property="og:type" content="website" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="500+ Real Micro SaaS Services | Zion Tech Group" />
          <meta name="twitter:description" content="Leading provider of AI-powered micro SaaS services with 1200%+ average ROI." />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                #1 in AI-Powered Micro SaaS Services
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  500+ Real Micro SaaS
                </span>
                <br />
                <span className="text-white">Services</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our comprehensive portfolio of cutting-edge micro SaaS solutions. 
                From quantum AI to autonomous systems, we deliver real results with 1200%+ average ROI.
              </p>

              {/* Market Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {marketStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mb-1">{stat.metric}</div>
                    <div className="text-xs text-gray-500">{stat.description}</div>
                  </div>
                ))}
              </div>

              {/* Contact Info Banner */}
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-2xl mx-auto mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-400 font-medium">24/7 Support Available</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="w-5 h-5 text-blue-400 mb-2" />
                    <span className="text-sm text-gray-400">Phone</span>
                    <a href={`tel:${contactInfo.mobile}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-5 h-5 text-green-400 mb-2" />
                    <span className="text-sm text-gray-400">Email</span>
                    <a href={`mailto:${contactInfo.email}`} className="text-white font-medium hover:text-green-400 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-5 h-5 text-purple-400 mb-2" />
                    <span className="text-sm text-gray-400">Address</span>
                    <span className="text-white font-medium text-sm">
                      {contactInfo.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and innovative service categories that are transforming industries worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredCategories.map((category, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 text-center hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Services:</span>
                      <span className="text-cyan-400 font-medium">{category.serviceCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Avg Price:</span>
                      <span className="text-green-400 font-medium">{category.avgPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Avg ROI:</span>
                      <span className="text-purple-400 font-medium">{category.avgROI}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
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
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4">
                  {/* Category Filter */}
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors pr-10"
                    >
                      {serviceCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>

                  {/* Price Range Filter */}
                  <div className="relative">
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="appearance-none bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors pr-10"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>

                  {/* Sort Options */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors pr-10"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex bg-gray-800/50 border border-gray-600/50 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 rounded-lg transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-3 py-2 rounded-lg transition-colors ${
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

              {/* Active Filters Display */}
              {(selectedCategory !== 'All' || priceRange !== 'All' || searchQuery) && (
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== 'All' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm border border-cyan-500/30">
                        Category: {selectedCategory}
                        <button
                          onClick={() => setSelectedCategory('All')}
                          className="ml-2 hover:text-cyan-300"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    {priceRange !== 'All' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm border border-green-500/30">
                        Price: {priceRanges.find(r => r.value === priceRange)?.label}
                        <button
                          onClick={() => setPriceRange('All')}
                          className="ml-2 hover:text-green-300"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm border border-purple-500/30">
                        Search: "{searchQuery}"
                        <button
                          onClick={() => setSearchQuery('')}
                          className="ml-2 hover:text-purple-300"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    <button
                      onClick={() => {
                        setSelectedCategory('All');
                        setPriceRange('All');
                        setSearchQuery('');
                      }}
                      className="text-gray-400 hover:text-white text-sm underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                {filteredServices.length} Services Found
              </h2>
              <div className="text-gray-400">
                Showing {Math.min(filteredServices.length, 20)} of {filteredServices.length} services
              </div>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400 mb-8">Try adjusting your search criteria or filters</p>
                <Button
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange('All');
                    setSearchQuery('');
                  }}
                  variant="primary"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.slice(0, 20).map((service) => (
                  <Card
                    key={service.id}
                    className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group ${
                      viewMode === 'list' ? 'p-6' : 'p-6'
                    }`}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <div className="text-center">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{service.description}</p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-medium mb-4">
                          {service.category}
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <Check className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t border-gray-700/50 pt-4">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-2xl font-bold text-white">{service.price}</div>
                            <div className="text-sm text-green-400 font-medium">{service.trialDays} days free</div>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              href={service.link} 
                              variant="primary" 
                              size="sm" 
                              className="flex-1"
                            >
                              Learn More
                            </Button>
                            <Button 
                              href="/contact" 
                              variant="secondary" 
                              size="sm"
                            >
                              Get Started
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className="flex items-start space-x-6">
                        <div className="text-4xl flex-shrink-0">{service.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {service.name}
                              </h3>
                              <p className="text-gray-400 text-sm">{service.tagline}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">{service.price}</div>
                              <div className="text-sm text-green-400">{service.trialDays} days free</div>
                            </div>
                          </div>
                          
                          <p className="text-gray-300 mb-4 line-clamp-2">{service.description}</p>
                          
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs border border-cyan-500/30">
                              {service.category}
                            </span>
                            <span className="text-sm text-gray-400">
                              ROI: {service.roi}
                            </span>
                            <span className="text-sm text-gray-400">
                              Setup: {service.setupTime}
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              href={service.link} 
                              variant="primary" 
                              size="sm"
                            >
                              Learn More
                            </Button>
                            <Button 
                              href="/contact" 
                              variant="secondary" 
                              size="sm"
                            >
                              Get Started
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}

            {filteredServices.length > 20 && (
              <div className="text-center mt-12">
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  View All {filteredServices.length} Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Most Popular Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These are our most sought-after solutions that have delivered exceptional results for thousands of businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service) => (
                <Card
                  key={service.id}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105"
                >
                  <div className="relative">
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                    <div className="text-center p-6">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{service.description}</p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-medium mb-4">
                        {service.category}
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Check className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-gray-700/50 pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="text-sm text-green-400 font-medium">{service.trialDays} days free</div>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            href={service.link} 
                            variant="primary" 
                            size="sm" 
                            className="flex-1"
                          >
                            Learn More
                          </Button>
                          <Button 
                            href="/contact" 
                            variant="secondary" 
                            size="sm"
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cutting-Edge Services Showcase */}
        <section className="py-20 relative overflow-hidden">
          <EnhancedFuturisticBackground variant="quantum-holographic" intensity="high">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                  Revolutionary Technology
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the future with our cutting-edge quantum computing, synthetic biology, and neuromorphic computing solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {cuttingEdgeServices.map((service, index) => (
                  <QuantumCard 
                    key={service.id} 
                    variant={index % 2 === 0 ? 'quantum' : 'holographic'} 
                    intensity="high"
                    className="h-full"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`text-5xl flex-shrink-0`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-300 mb-3">{service.tagline}</p>
                        <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-3xl font-bold text-cyan-400">
                            {service.price}
                            <span className="text-lg text-gray-400">{service.period}</span>
                          </div>
                          <div className="text-sm text-gray-400">
                            <div className="text-green-400 font-semibold">{service.roi}</div>
                            <div>Market: {service.marketSize}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-400">
                              <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        <Button
                          href={service.link}
                          variant="primary"
                          size="sm"
                          className="w-full"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </QuantumCard>
                ))}
              </div>
            </div>
          </EnhancedFuturisticBackground>
        </section>

        {/* Final CTA */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of successful businesses that have already discovered the power of Zion Tech Group's micro SaaS services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="lg"
                  className="group"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  href="/pricing" 
                  variant="secondary" 
                  size="lg"
                >
                  View Pricing
                </Button>
              </div>

              {/* Contact Info */}
              <div className="bg-black/30 rounded-2xl p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="w-5 h-5 text-blue-400 mb-2" />
                    <span className="text-sm text-gray-400">Phone</span>
                    <a href={`tel:${contactInfo.mobile}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-5 h-5 text-green-400 mb-2" />
                    <span className="text-sm text-gray-400">Email</span>
                    <a href={`mailto:${contactInfo.email}`} className="text-white font-medium hover:text-green-400 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-5 h-5 text-purple-400 mb-2" />
                    <span className="text-sm text-gray-400">Address</span>
                    <span className="text-white font-medium text-sm">
                      {contactInfo.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}