import React, { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Check, Star, TrendingUp, Clock, DollarSign, ShieldCheck, Search, Filter, Grid3X3, List, Phone, Mail, MapPin, ArrowRight, ExternalLink, Brain, Rocket, Globe, Cpu, Lock, Eye, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import AdvancedFuturisticBackground from '../components/ui/AdvancedFuturisticBackground';
import AdvancedFuturisticCard from '../components/ui/AdvancedFuturisticCard';
import { expandedMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/expanded-micro-saas-services';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'roi' | 'category'>('name');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [showInnovative, setShowInnovative] = useState(true);
  const router = useRouter();

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-50', label: '$0 - $50' },
    { value: '51-100', label: '$51 - $100' },
    { value: '101-200', label: '$101 - $200' },
    { value: '201+', label: '$201+' }
  ];

  const allServices = useMemo(() => {
    const baseServices = enhancedRealMicroSaasServices.concat(extraServices, additionalEnhancedServices);
    if (showInnovative) {
      // Convert innovative services to match the base service type structure
      const convertedInnovativeServices = innovativeNewServices.map(service => ({
        ...service,
        variant: service.variant as any // Type assertion to handle variant differences
      }));
      return baseServices.concat(convertedInnovativeServices);
    }
    return baseServices;
  }, [showInnovative]);

  const allCategories = useMemo(() => {
    const baseCategories = serviceCategories || [];
    if (showInnovative) {
      return [...baseCategories, ...innovativeServiceCategories];
    }
    return baseCategories;
  }, [showInnovative]);

  // Ensure allCategories is an array of strings
  const categoryOptions = useMemo(() => {
    return allCategories.map(cat => typeof cat === 'string' ? cat : cat.name || 'Unknown');
  }, [allCategories]);

  // Combine all services
  const allServices = [...expandedMicroSaasServices, ...innovativeServices];

  // Filter and sort services
  let filteredServices = enhancedMicroSaasServices;

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = allServices.filter(service => service.category === selectedCategory);
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = filteredServices.filter(service => {
      const price = parseFloat(service.price.replace('$', ''));
      return price >= min && price <= max;
    });
  }

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.technology?.some(t => t.toLowerCase().includes(q)) ||
        s.useCases?.some(u => u.toLowerCase().includes(q))
      );
    }

    // Filter by price range
    filtered = filtered.filter(s => {
      const price = parseFloat(s.price.replace(/[$,]/g, ''));
      return price >= priceRange[0] && price <= priceRange[1];
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace(/[$,]/g, '')) - parseFloat(b.price.replace(/[$,]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'roi': {
          const ra = parseFloat((a.roi.match(/(\d+)/)?.[1] || '0'));
          const rb = parseFloat((b.roi.match(/(\d+)/)?.[1] || '0'));
          return rb - ra;
        }
        case 'category':
          return a.category.localeCompare(b.category);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, allServices, priceRange]);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Blockchain & DeFi',
      description: 'Decentralized finance and blockchain technology solutions',
      icon: <LinkIcon className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Blockchain & DeFi').length,
      color: 'from-indigo-500 to-blue-600'
    },
    {
      name: 'Space Technology',
      description: 'Satellite operations and space exploration platforms',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Space Technology').length,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Metaverse & VR/AR',
      description: 'Immersive virtual worlds and augmented reality experiences',
      icon: <Globe2 className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Metaverse & Virtual Reality').length,
      color: 'from-purple-500 to-pink-600'
    }
=======
  const heroStats = [
    { value: '250+', label: 'Revolutionary Services', icon: <ShieldCheck className="w-6 h-6 text-cyan-400" /> },
    { value: '99.99%', label: 'Uptime Guarantee', icon: <ShieldCheck className="w-6 h-6 text-fuchsia-400" /> },
    { value: '30+', label: 'Day Free Trials', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { value: '1000%+', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6 text-green-400" /> }
  ];

  const categoryIcons = {
    'AI & Machine Learning': <Brain className="w-5 h-5" />,
    'Quantum Computing': <Zap className="w-5 h-5" />,
    'IoT & Smart Cities': <Cpu className="w-5 h-5" />,
    'Robotics & Automation': <Rocket className="w-5 h-5" />,
    'Biotechnology & Healthcare': <Eye className="w-5 h-5" />,
    'Cybersecurity': <Lock className="w-5 h-5" />,
    'Analytics & Business Intelligence': <TrendingUp className="w-5 h-5" />,
    'Cloud & Infrastructure': <Globe className="w-5 h-5" />,
    'Quantum AI & BCI': <Brain className="w-5 h-5" />,
    'Autonomous Systems': <Rocket className="w-5 h-5" />,
    'Space Technology': <Rocket className="w-5 h-5" />,
    'Quantum Finance': <DollarSign className="w-5 h-5" />,
    'Metaverse & VR': <Globe className="w-5 h-5" />,
    'Quantum IoT': <Cpu className="w-5 h-5" />,
    'Autonomous Vehicles': <Rocket className="w-5 h-5" />,
    'Smart Energy': <Zap className="w-5 h-5" />
  };

  const getVariantForCategory = (category: string) => {
    if (category.includes('Quantum')) return 'quantum';
    if (category.includes('AI') || category.includes('Machine Learning')) return 'neural';
    if (category.includes('AR/VR') || category.includes('Metaverse')) return 'holographic';
    if (category.includes('Cybersecurity') || category.includes('Defense')) return 'cyberpunk';
    if (category.includes('Biomedical') || category.includes('Healthcare')) return 'neural-cyberpunk';
    if (category.includes('Financial') || category.includes('Trading')) return 'quantum-holographic';
    return 'quantum-holographic';
  };

  return (
    <AdvancedFuturisticBackground variant="quantum-holographic" intensity="high">
      <div className="min-h-screen bg-gray-900 text-white">
        <Head>
          <title>300+ Real Micro SaaS Services | Zion Tech Group - Revolutionary Technology Solutions</title>
          <meta name="description" content="Explore 300+ real micro SaaS services including AI, quantum computing, blockchain, cybersecurity, and emerging technologies. Starting at $49/month with 21-day free trials. Contact: +1 302 464 0950" />
          <meta name="keywords" content="micro SaaS services, AI services, quantum computing, blockchain, cybersecurity, Zion Tech Group, kleber@ziontechgroup.com" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
          
          {/* Open Graph */}
          <meta property="og:title" content="300+ Real Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Explore revolutionary technology solutions including AI, quantum computing, and emerging technologies" />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <meta property="og:type" content="website" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="300+ Real Micro SaaS Services | Zion Tech Group" />
          <meta name="twitter:description" content="Revolutionary technology solutions for modern businesses" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              300+ Real Micro SaaS Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover revolutionary technology solutions that are transforming industries worldwide. 
              From AI-powered automation to quantum computing, we deliver real results, not just promises.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300+</div>
                <div className="text-sm text-gray-400">Real Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">21</div>
                <div className="text-sm text-gray-400">Day Free Trials</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$49</div>
                <div className="text-sm text-gray-400">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">1000%+</div>
                <div className="text-sm text-gray-400">Average ROI</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="inline-block p-6 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-sm text-gray-400">Mobile</div>
                  <div className="text-white font-semibold">{contactInfo.mobile}</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-sm text-gray-400">Address</div>
                  <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-sm"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                      : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                      : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white hover:bg-gray-600/50 transition-colors backdrop-blur-sm"
              >
                <Filter className="w-5 h-5" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-sm"
                  >
                    <option value="All">All Categories</option>
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-sm"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-sm"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Most Popular Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service, index) => (
                <AdvancedFuturisticCard
                  key={service.id}
                  variant={getVariantForCategory(service.category)}
                  intensity="high"
                  className="h-full cursor-pointer group"
                  onClick={() => window.open(service.link, '_blank')}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                    
                    {/* Service Details */}
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Price:</span>
                        <span className="text-green-400 font-semibold">{service.price}{service.period}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Category:</span>
                        <span className="text-blue-400 font-semibold">{service.category}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-yellow-400 font-semibold">{service.roi}</span>
                      </div>
                    </div>

                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium mb-4">
                        <Star className="w-4 h-4 fill-current" />
                        Popular
                      </div>
                    )}

                    <div className="inline-flex items-center text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </AdvancedFuturisticCard>
              ))}
            </div>
          )}

                    </Card>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose from our extensive portfolio of revolutionary services. Each solution is designed to 
                deliver immediate value and exponential ROI for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  href="/contact" 
                  variant="quantum" 
                  size="xl"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-xl font-bold rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  Start Free Trial
                  <Rocket className="w-6 h-6 ml-2" />
                </Button>
                <Button 
                  href="/pricing" 
                  variant="outline" 
                  size="xl"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-xl font-bold rounded-2xl transition-all duration-300"
                >
                  View Pricing
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300 font-semibold">{contactInfo.mobile}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="w-6 h-6 text-fuchsia-400" />
                  <span className="text-gray-300 font-semibold">{contactInfo.email}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300 font-semibold text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraFuturisticBackground>
=======
        {/* All Services */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              All Services ({filteredServices.length})
            </h2>
            
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredServices.map((service) => (
                  <AdvancedFuturisticCard
                    key={service.id}
                    variant={getVariantForCategory(service.category)}
                    intensity="medium"
                    className="h-full cursor-pointer group"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-3">{service.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-xs mb-3 line-clamp-2">{service.tagline}</p>
                      
                      <div className="space-y-1 text-xs mb-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Price:</span>
                          <span className="text-green-400 font-semibold">{service.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Category:</span>
                          <span className="text-blue-400 font-semibold text-xs">{service.category}</span>
                        </div>
                      </div>

                      {service.popular && (
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium mb-3">
                          <Star className="w-3 h-3 fill-current" />
                          Popular
                        </div>
                      )}

                      <div className="inline-flex items-center text-cyan-400 text-xs group-hover:text-cyan-300 transition-colors">
                        View Details <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </AdvancedFuturisticCard>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredServices.map((service) => (
                  <AdvancedFuturisticCard
                    key={service.id}
                    variant={getVariantForCategory(service.category)}
                    intensity="low"
                    className="cursor-pointer group"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-2">{service.tagline}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span>Category: {service.category}</span>
                          <span>ROI: {service.roi}</span>
                          <span>Market: {service.marketSize}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-400 mb-1">{service.price}</div>
                        {service.popular && (
                          <div className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                            <Star className="w-3 h-3 fill-current" />
                            Popular
                          </div>
                        )}
                      </div>
                      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </AdvancedFuturisticCard>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <AdvancedFuturisticCard
              variant="quantum-holographic"
              intensity="extreme"
              className="p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose from our 300+ real micro SaaS services and start transforming your business today. 
                All services come with 21-day free trials and no setup fees.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Contact Sales Team
                  <Phone className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  View Pricing
                  <DollarSign className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-400 mb-4">Need Help? Contact Our Team</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="text-gray-400">Mobile</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Website</div>
                    <div className="text-white font-semibold">{contactInfo.website}</div>
                  </div>
                </div>
              </div>
            </AdvancedFuturisticCard>
          </div>
        </section>
      </div>
    </AdvancedFuturisticBackground>
  );
}
