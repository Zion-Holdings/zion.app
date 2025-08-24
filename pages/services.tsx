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
import Button from '../components/ui/Button';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { newRealServices } from '../data/new-real-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';
import { nextGenITServices } from '../data/next-gen-it-services';
import { innovativeMicroSaasV2 } from '../data/innovative-micro-saas-v2';

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
    ...nextGenAIServices,
    ...nextGenITServices,
    ...innovativeMicroSaasV2
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: innovativeAIServices.length + nextGenAIServices.length },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: quantumSpaceServices.length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseITServices.length + nextGenITServices.length },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: enhancedRealMicroSaasServices.length + innovativeMicroSaasV2.length },
    { id: 'next-gen', name: 'Next-Gen Services', icon: '🌟', count: nextGenAIServices.length + nextGenITServices.length + innovativeMicroSaasV2.length }
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
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT'))) ||
                             (selectedCategory === 'micro-saas' && service.category.includes('Micro SaaS')) ||
                             (selectedCategory === 'next-gen' && (service.category.includes('Next-Gen') || service.category.includes('Innovative')));
      
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
        filtered.sort((a, b) => ((b as any).rating || 0) - ((a as any).rating || 0));
        break;
      case 'customers':
        filtered.sort((a, b) => ((b as any).customers || 0) - ((a as any).customers || 0));
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group | 600+ AI, Quantum & IT Solutions</title>
        <meta name="description" content="Explore 600+ revolutionary AI, quantum computing, and IT services. From micro-SaaS to enterprise solutions, find the perfect service for your business needs." />
        <meta name="keywords" content="AI services, quantum computing, IT services, micro SaaS, cybersecurity, cloud migration, enterprise solutions" />
      </Head>

      <div className="min-h-screen bg-gray-900">
        {/* Header Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                600+ cutting-edge services designed to transform your business
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                From AI-powered solutions to quantum computing and enterprise IT infrastructure, 
                discover the perfect service to accelerate your digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filter Controls */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Results Count */}
                <div className="flex items-end">
                  <div className="text-sm text-gray-400">
                    {filteredServices.length} of {allServices.length} services
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredServices.length > 0 ? (
                <motion.div
                  key={`${selectedCategory}-${selectedPriceRange}-${sortBy}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                        {/* Service Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-3xl">{service.icon}</div>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                              POPULAR
                            </div>
                          )}
                        </div>

                        {/* Service Info */}
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Service Details */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between">
                            <span className="text-cyan-300 font-bold text-lg">
                              {service.price}{service.period}
                            </span>
                            <div className="flex items-center text-yellow-400">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="ml-1 text-sm">{service.rating || 'N/A'}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-sm text-gray-400">
                            <Users className="w-4 h-4 mr-2" />
                            <span>{service.customers || 'N/A'} customers</span>
                          </div>
                          
                          <div className="flex items-center text-sm text-gray-400">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>Setup: {service.setupTime}</span>
                          </div>
                        </div>

                        {/* Service Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                          <ul className="text-xs text-gray-400 space-y-1">
                            {service.features.slice(0, 3).map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                <span className="line-clamp-1">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button 
                            href={service.link || '/contact'} 
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
                            className="flex-1"
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-gray-400 text-lg mb-4">
                    No services found matching your criteria
                  </div>
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedPriceRange('all');
                    }}
                    variant="primary"
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </>
  );
}