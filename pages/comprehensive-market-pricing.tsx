import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, 
  DollarSign, Clock, CheckCircle, ArrowRight,
  Brain, Rocket, Dna, Globe, Shield, Wifi, 
  Package, Bot, Car, Building2, Monitor, Cpu, 
  Zap, Atom, Database, Cloud, Lock, Code,
  Phone, Mail, MapPin, ExternalLink, Award,
  Target, Sparkles, Crown, Infinity, Zap as ZapIcon,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { revolutionary2025Services } from '../data/revolutionary-2025-services';
import { nextGenInnovations2025 } from '../data/next-gen-innovations-2025';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Card from '../components/ui/Card';

export default function ComprehensiveMarketPricing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const allServices = [
    ...revolutionary2025Services,
    ...nextGenInnovations2025
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Market analysis data
  const marketAnalysis = {
    totalMarketSize: '$156.8B',
    averageROI: '1000%',
    serviceCount: allServices.length,
    categories: [
      { name: 'AI & Machine Learning', marketSize: '$45.2B', growth: '280%' },
      { name: 'Quantum Computing', marketSize: '$12.8B', growth: '320%' },
      { name: 'Cybersecurity', marketSize: '$28.5B', growth: '220%' },
      { name: 'Cloud & Infrastructure', marketSize: '$35.6B', growth: '180%' },
      { name: 'Emerging Tech', marketSize: '$18.7B', growth: '350%' },
      { name: 'Enterprise IT', marketSize: '$16.0B', growth: '200%' }
    ]
  };

  // Competitive analysis
  const competitiveAnalysis = {
    aiServices: [
      { name: 'OpenAI', pricing: '$0.002-$0.12 per 1K tokens', ourAdvantage: 'Consciousness simulation, ethical AI, 1000% ROI' },
      { name: 'Anthropic', pricing: '$3-$15 per 1M tokens', ourAdvantage: 'Quantum-powered AI, privacy preservation, advanced features' },
      { name: 'Google AI', pricing: 'Enterprise pricing', ourAdvantage: 'First-to-market solutions, specialized AI services' }
    ],
    quantumServices: [
      { name: 'IBM Quantum', pricing: '$0.10-$1.60 per second', ourAdvantage: 'Advanced algorithms, industry-specific solutions' },
      { name: 'Microsoft Azure Quantum', pricing: 'Pay-per-use', ourAdvantage: 'Comprehensive quantum platforms, better integration' },
      { name: 'Amazon Braket', pricing: '$0.30 per task', ourAdvantage: 'Quantum optimization, specialized use cases' }
    ],
    cybersecurity: [
      { name: 'CrowdStrike', pricing: '$8.92-$18.92 per endpoint/month', ourAdvantage: 'Quantum threat detection, AI-powered security, 500% ROI' },
      { name: 'SentinelOne', pricing: '$5-$8 per endpoint/month', ourAdvantage: 'Advanced AI security, behavioral analysis, comprehensive protection' },
      { name: 'Palo Alto Networks', pricing: '$50-$200 per user/month', ourAdvantage: 'Zero trust architecture, quantum encryption, enterprise-grade' }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠', count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟', count: allServices.filter(s => s.category.includes('Emerging') || s.category.includes('Next-Gen')).length },
    { id: 'business', name: 'Business & Finance', icon: '💼', count: allServices.filter(s => s.category.includes('Business') || s.category.includes('Finance')).length },
    { id: 'industry', name: 'Industry 4.0', icon: '🏭', count: allServices.filter(s => s.category.includes('Manufacturing') || s.category.includes('Industry')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $10K/month', range: 'Under $10K' },
    { id: 'medium', name: '$10K - $25K/month', range: '$10K - $25K' },
    { id: 'high', name: '$25K+/month', range: '$25K+' }
  ];

  // Filter and sort services
  const filteredServices = React.useMemo(() => {
    const parsePriceToNumber = (price: any): number => {
      if (typeof price === 'number') return price;
      if (typeof price === 'string') {
        const match = price.replace(/[^0-9.]/g, '');
        const parsed = parseFloat(match || '0');
        return isNaN(parsed) ? 0 : parsed;
      }
      return 0;
    };

    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && service.category.includes('AI')) ||
                             (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
                             (selectedCategory === 'emerging' && (service.category.includes('Emerging') || service.category.includes('Next-Gen'))) ||
                             (selectedCategory === 'business' && (service.category.includes('Business') || service.category.includes('Finance'))) ||
                             (selectedCategory === 'industry' && (service.category.includes('Manufacturing') || service.category.includes('Industry')));

      const matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && parsePriceToNumber(service.price) < 10000) ||
                          (selectedPriceRange === 'medium' && parsePriceToNumber(service.price) >= 10000 && parsePriceToNumber(service.price) <= 25000) ||
                          (selectedPriceRange === 'high' && parsePriceToNumber(service.price) > 25000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort by price low to high
    filtered.sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange]);

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Comprehensive Market Pricing & Competitive Analysis | Zion Tech Group</title>
        <meta name="description" content="Complete market pricing analysis for 1000+ revolutionary AI, quantum computing, and emerging technology services. Competitive analysis and ROI guarantees. Contact: +1 302 464 0950" />
        <meta name="keywords" content="market pricing, competitive analysis, AI services pricing, quantum computing costs, cybersecurity pricing, ROI analysis" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-market-pricing" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Comprehensive Market Pricing
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">
              Revolutionary Services with Competitive Pricing & 1000% ROI Guarantee
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto">
              Discover transparent pricing for our 1000+ cutting-edge services. 
              Compare with market leaders and see why our revolutionary solutions deliver unmatched value.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Market Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl border border-cyan-500/30 p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Market Overview & Competitive Analysis
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{marketAnalysis.totalMarketSize}</div>
                  <div className="text-gray-300 text-sm">Total Market Size</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{marketAnalysis.averageROI}</div>
                  <div className="text-gray-300 text-sm">Average ROI</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-green-400 mb-2">{marketAnalysis.serviceCount}+</div>
                  <div className="text-gray-300 text-sm">Revolutionary Services</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-pink-400 mb-2">6</div>
                  <div className="text-gray-300 text-sm">Major Categories</div>
                </div>
              </div>

              {/* Market Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketAnalysis.categories.map((category, index) => (
                  <div key={category.name} className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Market Size:</span>
                      <span className="text-green-400 font-semibold">{category.marketSize}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-400">Growth Rate:</span>
                      <span className="text-purple-400 font-semibold">{category.growth}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Competitive Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Competitive Analysis & Market Positioning
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="bg-gray-800/40 rounded-2xl border border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-purple-400" />
                  AI & Machine Learning
                </h3>
                <div className="space-y-4">
                  {competitiveAnalysis.aiServices.map((competitor, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-white">{competitor.name}</span>
                        <span className="text-sm text-gray-400">{competitor.pricing}</span>
                      </div>
                      <div className="text-sm text-cyan-400">
                        <strong>Our Advantage:</strong> {competitor.ourAdvantage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantum Services */}
              <div className="bg-gray-800/40 rounded-2xl border border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Atom className="w-6 h-6 text-blue-400" />
                  Quantum Computing
                </h3>
                <div className="space-y-4">
                  {competitiveAnalysis.quantumServices.map((competitor, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-white">{competitor.name}</span>
                        <span className="text-sm text-gray-400">{competitor.pricing}</span>
                      </div>
                      <div className="text-sm text-cyan-400">
                        <strong>Our Advantage:</strong> {competitor.ourAdvantage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cybersecurity */}
              <div className="bg-gray-800/40 rounded-2xl border border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-400" />
                  Cybersecurity
                </h3>
                <div className="space-y-4">
                  {competitiveAnalysis.cybersecurity.map((competitor, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-white">{competitor.name}</span>
                        <span className="text-sm text-gray-400">{competitor.pricing}</span>
                      </div>
                      <div className="text-sm text-cyan-400">
                        <strong>Our Advantage:</strong> {competitor.ourAdvantage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search revolutionary services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>

                {/* Results Count */}
                <div className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white flex items-center justify-center">
                  <span className="text-sm">{filteredServices.length} services found</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="h-full group hover:scale-105 transition-transform duration-300 bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50"
                    >
                      <div className="p-6">
                        {/* Service Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{service.icon}</div>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                              POPULAR
                            </div>
                          )}
                        </div>

                        {/* Service Name and Tagline */}
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          {service.tagline}
                        </p>

                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-3xl font-bold text-cyan-400">
                            {service.price}
                          </span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Market Info */}
                        <div className="bg-gray-800/30 rounded-lg p-3 mb-4">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-400">Market Size:</span>
                            <span className="text-green-400 font-semibold">{service.marketSize}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs mt-1">
                            <span className="text-gray-400">Growth Rate:</span>
                            <span className="text-purple-400 font-semibold">{service.growthRate}</span>
                          </div>
                        </div>

                        {/* ROI and Contact */}
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-3 rounded-lg border border-green-500/30">
                            <p className="text-xs text-green-400 font-semibold text-center">
                              {service.roi}
                            </p>
                          </div>
                          
                          <div className="flex gap-2">
                            <button
                              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                              {expandedService === service.id ? 'Show Less' : 'View Details'}
                              {expandedService === service.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                            <a
                              href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                            >
                              <Mail className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                          {expandedService === service.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-gray-700"
                            >
                              <div className="space-y-4">
                                {/* Features */}
                                <div>
                                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                                  <ul className="space-y-1">
                                    {service.features.slice(0, 5).map((feature, idx) => (
                                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Technology Stack */}
                                <div>
                                  <h4 className="text-sm font-semibold text-white mb-2">Technology:</h4>
                                  <div className="flex flex-wrap gap-1">
                                    {service.technology.slice(0, 3).map((tech, idx) => (
                                      <span key={idx} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Market Position */}
                                <div>
                                  <h4 className="text-sm font-semibold text-white mb-2">Market Position:</h4>
                                  <p className="text-xs text-gray-400">{service.marketPosition}</p>
                                </div>

                                {/* Contact Information */}
                                <div className="pt-2 border-t border-gray-700">
                                  <div className="text-xs text-gray-400 space-y-1">
                                    <div className="flex items-center gap-2">
                                      <Phone className="w-3 h-3 text-cyan-400" />
                                      <span>{contactInfo.mobile}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Mail className="w-3 h-3 text-purple-400" />
                                      <span>{contactInfo.email}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl border border-cyan-500/30 p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Revolutionary Pricing?
              </h2>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Contact us today for custom pricing, volume discounts, and enterprise solutions. 
                Get started with our revolutionary services and achieve 1000% ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {contactInfo.mobile}
                </a>
                <a
                  href={`mailto:${contactInfo.email}?subject=Pricing Inquiry for Revolutionary Services`}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Custom Quote
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}