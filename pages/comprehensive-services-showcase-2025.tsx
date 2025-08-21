import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, 
  Brain, Atom, Shield, Rocket, Globe, 
  Cpu, Target, Microscope, Lock, Cloud,
  BarChart3, Settings, Eye, Award, Clock,
  ArrowRight, Phone, Mail, MapPin, Zap,
  DollarSign, CheckCircle, X, ChevronDown,
  Sparkles, Crown, Infinity, Flame, Database,
  Server, ShieldCheck, TargetIcon, Lightbulb,
  BarChart3 as BarChart3Icon, PieChart, Activity
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { quantumBreakthroughServices2025 } from '../data/2025-quantum-breakthrough-services';
import { enterpriseITBreakthroughServices2025 } from '../data/2025-enterprise-it-breakthrough';
import { innovativeMicroSaasBreakthrough2025 } from '../data/2025-innovative-micro-saas-breakthrough';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const allServices = [
  ...innovativeRealMicroSaasServices2025.map(service => ({ ...service, category: 'Micro SAAS' })),
  ...innovativeAIServicesEnhanced2025.map(service => ({ ...service, category: 'AI & Consciousness' })),
  ...innovativeITServicesEnhanced2025.map(service => ({ ...service, category: 'Enterprise IT' })),
  ...emergingTechServicesEnhanced2025.map(service => ({ ...service, category: 'Quantum & Emerging Tech' })),
  ...cuttingEdgeAIServices2025.map(service => ({ ...service, category: 'AI & Consciousness' })),
  ...quantumBreakthroughServices2025.map(service => ({ ...service, category: 'Quantum & Emerging Tech' })),
  ...enterpriseITBreakthroughServices2025.map(service => ({ ...service, category: 'Enterprise IT' })),
  ...innovativeMicroSaasBreakthrough2025.map(service => ({ ...service, category: 'Micro SAAS' }))
];

const categories = [
  { id: 'all', name: '🚀 All Services', icon: Globe, color: 'from-cyan-500 to-blue-600', count: allServices.length },
  { id: 'Micro SAAS', name: '💻 Micro SAAS', icon: Rocket, color: 'from-teal-500 to-emerald-600', count: allServices.filter(s => s.category === 'Micro SAAS').length },
  { id: 'AI & Consciousness', name: '🧠 AI & Consciousness', icon: Brain, color: 'from-violet-500 to-purple-600', count: allServices.filter(s => s.category === 'AI & Consciousness').length },
  { id: 'Enterprise IT', name: '🏢 Enterprise IT', icon: Shield, color: 'from-blue-500 to-cyan-600', count: allServices.filter(s => s.category === 'Enterprise IT').length },
  { id: 'Quantum & Emerging Tech', name: '⚛️ Quantum & Emerging Tech', icon: Atom, color: 'from-indigo-500 to-blue-600', count: allServices.filter(s => s.category === 'Quantum & Emerging Tech').length }
];

const pricingRanges = [
  { id: 'all', name: 'All Prices', min: 0, max: 999999, color: 'from-gray-500 to-gray-600' },
  { id: 'budget', name: 'Budget ($0 - $100)', min: 0, max: 100, color: 'from-green-500 to-emerald-600' },
  { id: 'mid-range', name: 'Mid-Range ($100 - $500)', min: 100, max: 500, color: 'from-blue-500 to-cyan-600' },
  { id: 'premium', name: 'Premium ($500 - $1000)', min: 500, max: 1000, color: 'from-purple-500 to-pink-600' },
  { id: 'enterprise', name: 'Enterprise ($1000+)', min: 1000, max: 999999, color: 'from-yellow-500 to-orange-600' }
];

const sortOptions = [
  { value: 'name', label: 'Sort by Name', icon: 'A-Z' },
  { value: 'price', label: 'Sort by Price', icon: '$' },
  { value: 'category', label: 'Sort by Category', icon: '📁' },
  { value: 'marketSize', label: 'Sort by Market Size', icon: '📊' },
  { value: 'newest', label: 'Sort by Newest', icon: '🆕' }
];

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const selectedPricingRange = pricingRanges.find(p => p.id === selectedPricing);
    const matchesPricing = selectedPricing === 'all' || 
      (selectedPricingRange && 
       service.pricing.starter.price >= selectedPricingRange.min &&
       service.pricing.starter.price <= selectedPricingRange.max);
    
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesPricing && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.pricing.starter.price - b.pricing.starter.price;
      case 'category':
        return a.category.localeCompare(b.category);
      case 'marketSize':
        return parseFloat(b.marketSize.replace(/[^0-9.]/g, '')) - parseFloat(a.marketSize.replace(/[^0-9.]/g, ''));
      case 'newest':
        return ((b as any).isNew ? 1 : 0) - ((a as any).isNew ? 1 : 0);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-gray-500 to-gray-600';
  };

  const getPricingColor = (pricingId: string) => {
    const pricing = pricingRanges.find(p => p.id === pricingId);
    return pricing ? pricing.color : 'from-gray-500 to-gray-600';
  };

  const getBadgeStyle = (service: any) => {
    if (service.isPremium) return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black';
    if (service.isHot) return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
    if (service.isNew) return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
    return '';
  };

  const getBadgeText = (service: any) => {
    if (service.isPremium) return 'Premium';
    if (service.isHot) return 'Hot';
    if (service.isNew) return 'New';
    return '';
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedPricing('all');
    setSearchQuery('');
    setSortBy('name');
  };

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of revolutionary technology services including AI consciousness, quantum computing, enterprise IT, and innovative micro SAAS solutions." />
        <meta name="keywords" content="AI services, quantum computing, enterprise IT, micro SAAS, technology solutions, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Comprehensive Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Explore our revolutionary technology services portfolio." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-36 h-36 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                {allServices.length}+ Revolutionary Services
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed">
              Discover our revolutionary portfolio of {allServices.length}+ cutting-edge technology services designed to transform your business and propel you into the future.
            </p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold text-cyan-400">{allServices.length}+</div>
                </div>
                <div className="text-gray-400 font-medium">Services Available</div>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold text-purple-400">{categories.length - 1}</div>
                </div>
                <div className="text-gray-400 font-medium">Categories</div>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold text-green-400">24/7</div>
                </div>
                <div className="text-gray-400 font-medium">Support</div>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold text-yellow-400">100%</div>
                </div>
                <div className="text-gray-400 font-medium">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Filters Section */}
      <section className="py-16 bg-gray-900/50 border-b border-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white hover:bg-gray-700/50 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters & Search
              </span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Desktop Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="space-y-6">
              {/* Search */}
              <div className="relative max-w-2xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200 text-lg"
                />
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  Service Categories
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 border-2 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/25'
                          : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:bg-gray-700/50 hover:text-white hover:border-gray-600/50'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <category.icon className="w-5 h-5" />
                        {category.name.replace(/^[^\s]+ /, '')}
                        <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-bold">
                          {category.count}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing Filter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  Price Ranges
                </h3>
                <div className="flex flex-wrap gap-3">
                  {pricingRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPricing(range.id)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 border-2 ${
                        selectedPricing === range.id
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white border-transparent shadow-lg shadow-purple-500/25'
                          : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:bg-gray-700/50 hover:text-white hover:border-gray-600/50'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort & Actions */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex items-center gap-4">
                  <label className="text-white font-medium">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-colors"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.icon} {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 hover:text-white transition-colors flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Summary */}
          <div className="mb-12 p-6 bg-gray-900/30 rounded-2xl border border-gray-800/50">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Showing {sortedServices.length} of {allServices.length} Services
                </h2>
                <p className="text-gray-400 text-lg">
                  {selectedCategory !== 'all' && `Category: ${selectedCategory}`}
                  {selectedPricing !== 'all' && ` • Price Range: ${pricingRanges.find(p => p.id === selectedPricing)?.name}`}
                  {searchQuery && ` • Search: "${searchQuery}"`}
                </p>
              </div>
              
              {sortedServices.length > 0 && (
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{sortedServices.length}</div>
                    <div className="text-sm text-gray-400">Results</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{Math.ceil(sortedServices.length / 9)}</div>
                    <div className="text-sm text-gray-400">Pages</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Services Grid */}
          {sortedServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 h-full backdrop-blur-sm">
                    {/* Service Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {getBadgeText(service) && (
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeStyle(service)}`}>
                          {getBadgeText(service)}
                        </span>
                      )}
                      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                        <Globe className="w-3 h-3" />
                        {service.category.replace(/^[^\s]+ /, '')}
                      </div>
                    </div>

                    {/* Service Icon */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${getCategoryColor(service.category)} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {React.createElement(getCategoryIcon(service.category), { className: "w-10 h-10 text-white" })}
                      </div>
                    </div>

                    {/* Service Info */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 leading-tight">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-base mb-6 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Enhanced Pricing */}
                    <div className="mb-6 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                      <div className="text-3xl font-bold text-cyan-400 mb-1">
                        ${service.pricing.starter.price}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-2">Starting from</div>
                      {service.pricing.professional && (
                        <div className="text-sm text-gray-300">
                          Professional: ${service.pricing.professional.price}/month
                        </div>
                      )}
                      {service.pricing.enterprise && (
                        <div className="text-sm text-gray-300">
                          Enterprise: ${service.pricing.enterprise.price}/month
                        </div>
                      )}
                    </div>

                    {/* Enhanced Features Preview */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-3 font-medium">Key Features:</div>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-gray-500 text-center pt-2">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Enhanced Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-lg border border-gray-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {service.tags.length > 4 && (
                          <span className="px-3 py-1 bg-gray-800/50 text-gray-500 text-xs rounded-lg border border-gray-700/50">
                            +{service.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Enhanced Market Info */}
                    <div className="mb-6 p-4 bg-gray-800/20 rounded-xl border border-gray-700/20">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-400 mb-1">Market Size:</div>
                          <div className="text-cyan-400 font-semibold">{service.marketSize}</div>
                        </div>
                        <div>
                          <div className="text-gray-400 mb-1">Target:</div>
                          <div className="text-gray-300 line-clamp-2">{service.targetAudience.split(',')[0]}...</div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <Link href={`/services/${service.id}`}>
                      <button className="w-full py-4 px-6 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group border border-gray-600/50 hover:border-cyan-500/50">
                        <span className="flex items-center justify-center gap-3">
                          Learn More
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Try adjusting your filters or search query to find what you're looking for. 
                We have a wide range of services that might match your needs.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Contact CTA */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400 text-lg font-medium">
                <Sparkles className="w-5 h-5 mr-2" />
                Ready to Transform Your Business?
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Let's Build the{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Future Together
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect with our team of experts and discover how our revolutionary technology solutions can drive your business forward into the next generation.
            </p>
            
            {/* Enhanced Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Call Us</h3>
                <p className="text-cyan-400 font-semibold text-lg">{contactInfo.mobile}</p>
                <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Email Us</h3>
                <p className="text-purple-400 font-semibold text-lg">{contactInfo.email}</p>
                <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-r from-green-500/20 to-teal-600/20 border border-green-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Visit Us</h3>
                <p className="text-green-400 font-semibold text-sm leading-tight">{contactInfo.address}</p>
                <p className="text-gray-400 text-sm mt-2">Schedule a meeting</p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <button className="group px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-xl transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 border-2 border-transparent hover:border-cyan-400/50">
                  <span className="flex items-center gap-3">
                    Get Started Today
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
              
              <Link href="/pricing">
                <button className="group px-12 py-5 bg-transparent text-white font-semibold rounded-full text-xl transition-all duration-300 hover:scale-105 border-2 border-gray-600 hover:border-cyan-500/50 hover:bg-gray-800/30">
                  <span className="flex items-center gap-3">
                    View Pricing
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}