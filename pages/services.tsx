import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, 
  DollarSign, Clock, CheckCircle, ArrowRight,
  Brain, Rocket, Dna, Globe, Shield, Wifi, 
  Package, Bot, Car, Building2, Monitor, Cpu, 
  Zap, Atom, Database, Cloud, Lock, Code
} from 'lucide-react';
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
import { verifiedRealServices } from '../data/verified-real-services';

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
    ...newRealServices,
    ...industryRealServices,
    ...professionalServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,
    ...marketValidatedServices,
    ...emergingTechnologyServices,
    ...comprehensiveITSolutions,
    ...curatedMarketServices,
    ...verifiedRealServices
  ];

  // Dynamic category counts mapped to the same filter logic below
  const aiCount = allServices.filter(service => (service.category?.includes('AI') || service.category?.includes('Machine Learning'))).length;
  const quantumCount = allServices.filter(service => (service.category?.includes('Quantum') || service.category?.includes('Space'))).length;
  const enterpriseCount = allServices.filter(service => (service.category?.includes('Enterprise') || service.category?.includes('IT'))).length;
  const microSaasCount = allServices.filter(service => (service.category?.includes('Micro SaaS'))).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: quantumCount },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount }
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
                             (selectedCategory === 'ai' && (service.category.includes('AI') || service.category.includes('Machine Learning'))) ||
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space'))) ||
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT') || service.category.includes('Cloud') || service.category.includes('Security'))) ||
                             (selectedCategory === 'micro-saas' && service.category.includes('Micro SaaS'));
      
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
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
          >
            All Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
          >
            Discover our complete portfolio of {allServices.length}+ revolutionary technology solutions
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 shadow-xl shadow-cyan-500/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {/* Market pricing CTA */}
          <div className="mt-4">
            <a href="/market-pricing" className="block w-full text-center bg-gradient-to-r from-cyan-600/30 to-purple-600/30 hover:from-cyan-600/40 hover:to-purple-600/40 text-cyan-200 border border-cyan-500/30 rounded-xl px-6 py-4 transition-all">
              See average market prices and vendor references →
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 h-full">
                    {/* Service Icon */}
                    <div className="text-4xl mb-4">
                      {service.icon || '🚀'}
                    </div>

                    {/* Service Name */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {typeof (service as any).price === 'number' ? `$${(service as any).price.toLocaleString()}/month` : `${(service as any).price}${(service as any).period ? '' : ''}`}
                      </div>
                      <div className="text-sm text-gray-400">
                        Starting price
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="text-center">
                        <div className="text-cyan-400 font-semibold">
                          {service.rating || 'N/A'}
                        </div>
                        <div className="text-gray-400">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-cyan-400 font-semibold">
                          {((service as any).customerCount ?? (service as any).customers ?? 'N/A')}
                        </div>
                        <div className="text-gray-400">Customers</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a href={(service as any).link || '/services'} className="w-full inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Learn More
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}