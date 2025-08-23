import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search, Star, DollarSign, CheckCircle,
  ArrowRight, Rocket, Phone, Mail, MapPin, Grid, List,
  ChevronDown, Brain, Shield, Cloud, Database, Zap
} from 'lucide-react';
import { innovativeMicroSaasExpansions2025 } from '../data/2025-innovative-micro-saas-expansions';
import { innovativeITServices } from '../data/2025-innovative-it-services-expansions';
import { innovativeAIServicesExpansions2025 } from '../data/2025-innovative-ai-services-expansions';
import { emergingTechInnovations2025 } from '../data/2025-emerging-tech-innovations';

export default function Comprehensive2025ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Helper function to get monthly price safely
  const getMonthlyPrice = (service: any): number => {
    if (typeof service.price === 'string') {
      // Extract number from string like "$299/month" or "$299"
      const match = service.price.match(/\$?(\d+(?:,\d+)?)/);
      return match ? parseInt(match[1].replace(/,/g, '')) : 0;
    }
    return service.price.monthly || 0;
  };

  // Helper function to format price for display
  const formatPriceDisplay = (service: any): string => {
    if (typeof service.price === 'string') {
      return service.price;
    }
    return `$${service.price.monthly.toLocaleString()}/month`;
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasExpansions2025,
    ...innovativeITServices,
    ...innovativeAIServicesExpansions2025,
    ...emergingTechInnovations2025
  ];

  // Dynamic category counts
  const microSaasCount = innovativeMicroSaasExpansions2025.length;
  const itServicesCount = innovativeITServices.length;
  const aiServicesCount = innovativeAIServicesExpansions2025.length;
  const emergingTechCount = emergingTechInnovations2025.length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: '💼', count: microSaasCount },
    { id: 'it-services', name: 'IT Services', icon: '🖥️', count: itServicesCount },
    { id: 'ai-services', name: 'AI Services', icon: '🧠', count: aiServicesCount },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: '🚀', count: emergingTechCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $3K/month', range: '$1K - $3K' },
    { id: 'high', name: '$3K - $6K/month', range: '$3K - $6K' },
    { id: 'enterprise', name: 'Over $6K/month', range: 'Over $6K' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' ||
        (selectedCategory === 'micro-saas' && service.category.toLowerCase().includes('sales') || service.category.toLowerCase().includes('saas')) ||
        (selectedCategory === 'it-services' && service.category.toLowerCase().includes('it') || service.category.toLowerCase().includes('infrastructure') || service.category.toLowerCase().includes('devops')) ||
        (selectedCategory === 'ai-services' && service.category.toLowerCase().includes('ai') || service.category.toLowerCase().includes('machine learning') || service.category.toLowerCase().includes('neural')) ||
        (selectedCategory === 'emerging-tech' && service.category.toLowerCase().includes('space') || service.category.toLowerCase().includes('quantum') || service.category.toLowerCase().includes('brain-computer'));

      const monthlyPrice = getMonthlyPrice(service);
      const matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && monthlyPrice < 1000) ||
        (selectedPriceRange === 'medium' && monthlyPrice >= 1000 && monthlyPrice <= 3000) ||
        (selectedPriceRange === 'high' && monthlyPrice > 3000 && monthlyPrice <= 6000) ||
        (selectedPriceRange === 'enterprise' && monthlyPrice > 6000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort((a, b) => {
          return getMonthlyPrice(a) - getMonthlyPrice(b);
        });
        break;
      case 'popularity':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'customers':
        filtered.sort((a, b) => b.customers - a.customers);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, allServices]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <>
      <Head>
        <title>Comprehensive 2025 Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of innovative micro SAAS, IT services, and AI solutions for 2025. Cutting-edge technology with real market validation." />
        <meta name="keywords" content="micro SAAS, IT services, AI solutions, quantum computing, enterprise technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2025-services-showcase" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Comprehensive 2025
              <br />
              <span className="text-6xl md:text-8xl">Services Showcase</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our revolutionary portfolio of innovative micro SAAS, enterprise IT services, and cutting-edge AI solutions. 
              Real services, real implementations, real results.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-cyan-400">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">{allServices.length}+ Services</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Star className="w-6 h-6" />
                <span className="text-lg font-semibold">Market Validated</span>
              </div>
              <div className="flex items-center gap-2 text-pink-400">
                <Rocket className="w-6 h-6" />
                <span className="text-lg font-semibold">Future-Ready</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Search */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="popularity">Sort by Popularity</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="customers">Sort by Customers</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 px-4 py-3 rounded-xl border transition-all ${
                      viewMode === 'grid'
                        ? 'bg-cyan-500 border-cyan-500 text-white'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-cyan-500'
                    }`}
                  >
                    <Grid className="w-5 h-5 mx-auto" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 px-4 py-3 rounded-xl border transition-all ${
                      viewMode === 'list'
                        ? 'bg-cyan-500 border-cyan-500 text-white'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-cyan-500'
                    }`}
                  >
                    <List className="w-5 h-5 mx-auto" />
                  </button>
                </div>

                <div className="text-right">
                  <span className="text-gray-400">
                    Showing {filteredServices.length} of {allServices.length} services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filters</p>
              </motion.div>
            ) : (
              <motion.div 
                className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={fadeInUp}
                    className={`bg-black/30 backdrop-blur-xl rounded-2xl border border-cyan-500/30 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{service.icon}</div>
                          {service.popular && (
                            <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-cyan-400">{formatPriceDisplay(service)}</div>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm">{service.rating}</span>
                            <span className="text-gray-500 text-sm">({service.reviews})</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                        
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-sm text-gray-500">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                            {service.category}
                          </span>
                          <Link
                            href={service.link}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className="flex-1 p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-4xl flex-shrink-0">{service.icon}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-bold text-white">{service.name}</h3>
                              {service.popular && (
                                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                            <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">{formatPriceDisplay(service)}</div>
                                <div className="text-xs text-gray-500">Price</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-purple-400">{service.rating}</div>
                                <div className="text-xs text-gray-500">Rating</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-green-400">{service.customers}</div>
                                <div className="text-xs text-gray-500">Customers</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-pink-400">
                                  {typeof service.price === 'object' ? service.price.trialDays : 'N/A'}
                                </div>
                                <div className="text-xs text-gray-500">Trial Days</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                                {service.category}
                              </span>
                              <Link
                                href={service.link}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                              >
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team to discuss how our innovative services can drive your success
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 text-cyan-400">
                  <Phone className="w-6 h-6" />
                  <span className="font-semibold">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-purple-400">
                  <Mail className="w-6 h-6" />
                  <span className="font-semibold">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-pink-400">
                  <MapPin className="w-6 h-6" />
                  <span className="font-semibold text-sm">{contactInfo.address}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-200 font-semibold"
                >
                  Request Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}