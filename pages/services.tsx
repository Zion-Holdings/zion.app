import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket } from 'lucide-react';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { newRealServices } from '../data/new-real-services';
import { industryRealServices } from '../data/industry-real-services';
import { professionalServices } from '../data/professional-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
import { marketValidatedServices } from '../data/market-validated-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { curatedMarketServices } from '../data/curated-market-services';
import { realMarketServices } from '../data/real-market-services';
import { new2025Services } from '../data/new-2025-services';
import { newRealInnovations } from '../data/new-real-innovations';
import { serviceExpansions2025 } from '../data/service-expansions-2025';
import { newOperationalServices2025 } from '../data/new-operational-services-2025';
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2';
import { innovative2025Services } from '../data/innovative-2025-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import { extraServices } from '../data/extra-services';
import { newlyAddedServices } from '../data/newly-added-services';
import { moreRealServices2025 } from '../data/more-real-services-2025';
import { verified2025Additions } from '../data/verified-2025-additions';
import { realServicesQ12025 } from '../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../data/real-enterprise-services-2025';
import { realMarketAugmentations2025 } from '../data/real-market-augmentations-2025';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';
import { enterpriseIT2026ServicesV4 } from '../data/enterprise-it-2026-services-v4';
import { aiAutonomousServices2026 } from '../data/2026-ai-autonomous-services';
import { quantumSpaceTechServices2026 } from '../data/2026-quantum-space-tech-services';
import { metaverseDigitalRealityServices2026 } from '../data/2026-metaverse-digital-reality-services';
import { ultimate2026Services } from '../data/ultimate-2026-services';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const allServices = [
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...enterpriseITServices,
    ...enhancedRealMicroSaasServices,
    ...additionalEnhancedServices,
    ...extraServices,
    ...newlyAddedServices,
    ...newRealServices,
    ...moreRealServices2025,
    ...industryRealServices,
    ...professionalServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,
    ...marketValidatedServices,
    ...emergingTechnologyServices,
    ...comprehensiveITSolutions,
    ...curatedMarketServices,
    ...realMarketServices,
    ...new2025Services,
    ...verified2025Additions,
    ...newRealInnovations,
    ...serviceExpansions2025,
    ...newOperationalServices2025,
    ...realServicesQ12025,
    ...realEnterpriseServices2025,
    ...verifiedRealServices2025Batch2,
    ...innovative2025Services,
    ...emergingTech2025Services,
    ...realMarketAugmentations2025,
    ...innovative2026MicroSaasServicesV2,
    ...innovative2026MicroSaasServicesV4,
    ...emergingTech2026ServicesV2,
    ...emergingTech2026ServicesV4,
    ...enterpriseIT2026ServicesV2,
    ...enterpriseIT2026ServicesV4,
    ...aiAutonomousServices2026,
    ...quantumSpaceTechServices2026,
    ...metaverseDigitalRealityServices2026,
    ...ultimate2026Services,
    ...revolutionary2026Innovations
  ];

  // Dynamic category counts mapped to the same filter logic below
  const aiCount = allServices.filter(service => (service.category?.includes('AI') || service.category?.includes('Machine Learning') || service.category?.includes('AI Autonomous') || service.category?.includes('AI Consciousness') || service.category?.includes('AI Legal') || service.category?.includes('AI Scientific') || service.category?.includes('AI Creative') || service.category?.includes('AI Healthcare') || service.category?.includes('AI Education'))).length;
  const quantumCount = allServices.filter(service => (service.category?.includes('Quantum') || service.category.includes('Space') || service.category?.includes('Quantum Space'))).length;
  const enterpriseCount = allServices.filter(service => (service.category?.includes('Enterprise') || service.category?.includes('IT'))).length;
  const microSaasCount = allServices.filter(service => (service.category?.includes('Micro SaaS'))).length;
  const metaverseCount = allServices.filter(service => (service.category?.includes('Metaverse') || service.category?.includes('Digital Reality') || service.category?.includes('Consciousness Interface') || service.category?.includes('Holographic'))).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: quantumCount },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    { id: 'metaverse', name: 'Metaverse & Digital Reality', icon: '🌐', count: metaverseCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customer Count' }
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
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (service.tagline && service.tagline.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && (service.category.includes('AI') || service.category.includes('Machine Learning') || service.category.includes('AI Autonomous') || service.category.includes('AI Consciousness') || service.category.includes('AI Legal') || service.category.includes('AI Scientific') || service.category.includes('AI Creative') || service.category.includes('AI Healthcare') || service.category.includes('AI Education'))) ||
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space') || service.category.includes('Quantum Space'))) ||
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT') || service.category.includes('Cloud') || service.category.includes('Security'))) ||
                             (selectedCategory === 'micro-saas' && service.category.includes('Micro SaaS')) ||
                             (selectedCategory === 'metaverse' && (service.category.includes('Metaverse') || service.category.includes('Digital Reality') || service.category.includes('Consciousness Interface') || service.category.includes('Holographic')));
      
      const numericPrice = parsePriceToNumber((service as any).price);
      const matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && numericPrice < 1000) ||
                          (selectedPriceRange === 'medium' && numericPrice >= 1000 && numericPrice < 5000) ||
                          (selectedPriceRange === 'high' && numericPrice >= 5000 && numericPrice < 20000) ||
                          (selectedPriceRange === 'premium' && numericPrice >= 20000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-low':
        filtered.sort((a, b) => parsePriceToNumber((a as any).price) - parsePriceToNumber((b as any).price));
        break;
      case 'price-high':
        filtered.sort((a, b) => parsePriceToNumber((b as any).price) - parsePriceToNumber((a as any).price));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'customers':
        filtered.sort((a, b) => {
          const getCustomers = (s: any) => (s.customerCount ?? s.customers ?? 0) as number;
          return getCustomers(b) - getCustomers(a);
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  React.useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    if (hash === 'ai') setSelectedCategory('ai');
    else if (hash === 'quantum') setSelectedCategory('quantum');
    else if (hash === 'enterprise' || hash === 'it') setSelectedCategory('enterprise');
    else if (hash === 'micro-saas') setSelectedCategory('micro-saas');
    else if (hash === 'metaverse') setSelectedCategory('metaverse');
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>All Services - Zion Tech Group | 800+ Revolutionary Technology Solutions</title>
        <meta name="description" content="Explore our complete portfolio of 800+ AI, quantum computing, and IT services. Find the perfect solution for your business needs. Contact: +1 302 464 0950" />
        <meta name="keywords" content="AI services, quantum computing, IT services, micro SaaS, cybersecurity, cloud migration, blockchain, metaverse, IoT, edge computing" />
        <meta property="og:title" content="All Services - Zion Tech Group" />
        <meta property="og:description" content="800+ revolutionary technology solutions" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Header */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Futuristic Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 rounded-3xl shadow-2xl mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              <Rocket className="w-10 h-10 text-white relative z-10" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 relative"
          >
            <span className="relative">
              All Services
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-xl opacity-30 animate-pulse"></div>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Discover our complete portfolio of <span className="text-cyan-400 font-bold">{allServices.length}+</span> revolutionary technology solutions
          </motion.p>

          {/* Service Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl">
              <div className="text-2xl font-bold text-cyan-400">{aiCount}</div>
              <div className="text-gray-400 text-sm">AI Services</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl">
              <div className="text-2xl font-bold text-purple-400">{quantumCount}</div>
              <div className="text-gray-400 text-sm">Quantum & Space</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl">
              <div className="text-2xl font-bold text-green-400">{enterpriseCount}</div>
              <div className="text-gray-400 text-sm">Enterprise IT</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl">
              <div className="text-2xl font-bold text-pink-400">{microSaasCount}</div>
              <div className="text-gray-400 text-sm">Micro SaaS</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 relative overflow-hidden"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Find Your Perfect Solution</h3>
                <p className="text-gray-400">Use our advanced filters to discover the ideal service for your needs</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                {/* Search */}
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-cyan-400 transition-colors duration-300" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/80 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-300 hover:border-gray-600/50"
                  />
                </div>

                {/* Category */}
                <div className="relative group">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-4 bg-gray-800/80 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-300 hover:border-gray-600/50 appearance-none cursor-pointer"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Price Range */}
                <div className="relative group">
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full px-4 py-4 bg-gray-800/80 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-300 hover:border-gray-600/50 appearance-none cursor-pointer"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Sort */}
                <div className="relative group">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-4 bg-gray-800/80 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-300 hover:border-gray-600/50 appearance-none cursor-pointer"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                  <span className="text-cyan-400 font-semibold">{filteredServices.length}</span>
                  <span className="text-gray-300">services found</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Market pricing CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6"
          >
            <a 
              href="/market-pricing" 
              className="block w-full text-center bg-gradient-to-r from-cyan-600/30 to-purple-600/30 hover:from-cyan-600/50 hover:to-purple-600/50 text-cyan-200 border border-cyan-500/40 rounded-2xl px-8 py-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
            >
              <div className="flex items-center justify-center space-x-3">
                <DollarSign className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg font-semibold">See average market prices and vendor references</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 h-full relative overflow-hidden">
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Service Icon */}
                      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon || '🚀'}
                      </div>

                      {/* Service Name */}
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 text-sm line-clamp-3 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Price */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-2xl border border-gray-600/30">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">
                          {typeof (service as any).price === 'number' ? `$${(service as any).price.toLocaleString()}/month` : `${(service as any).price}${(service as any).period ? '' : ''}`}
                        </div>
                        <div className="text-sm text-gray-400">
                          Starting price
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          Key Features:
                        </h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-400">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                        <div className="text-center p-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-xl border border-gray-600/30">
                          <div className="text-cyan-400 font-bold text-lg">
                            {service.rating || 'N/A'}
                          </div>
                          <div className="text-gray-400 text-xs">Rating</div>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-xl border border-gray-600/30">
                          <div className="text-purple-400 font-bold text-lg">
                            {((service as any).customerCount ?? (service as any).customers ?? 'N/A')}
                          </div>
                          <div className="text-gray-400 text-xs">Customers</div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <a 
                        href={(service as any).link || '/services'} 
                        className="w-full inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 group-hover:shadow-2xl group-hover:shadow-cyan-500/40"
                      >
                        <span className="flex items-center">
                          Learn More
                          <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-24"
            >
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 text-lg mb-8">Try adjusting your search criteria or filters</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}