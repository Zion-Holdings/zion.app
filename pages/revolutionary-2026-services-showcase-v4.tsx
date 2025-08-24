import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, 
  ArrowRight, Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, Phone, Mail, MapPin, Eye, Heart, Target, Award
} from 'lucide-react';
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4';
import { enterpriseIT2026ServicesV4 } from '../data/enterprise-it-2026-services-v4';
import { innovative2026AIServicesV4 } from '../data/innovative-2026-ai-services-v4';
import UltraQuantumHolographicBackgroundV4 from '../components/ui/UltraQuantumHolographicBackgroundV4';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';

export default function Revolutionary2026ServicesShowcaseV4() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all new services
  const allServices = [
    ...innovative2026MicroSaasServicesV4,
    ...emergingTech2026ServicesV4,
    ...enterpriseIT2026ServicesV4,
    ...innovative2026AIServicesV4
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service => 
    service.category?.includes('AI') || 
    service.category?.includes('Machine Learning') || 
    service.category?.includes('AI Autonomous') || 
    service.category?.includes('AI Consciousness') || 
    service.category?.includes('AI Legal') || 
    service.category?.includes('AI Scientific') || 
    service.category?.includes('AI Creative') || 
    service.category?.includes('AI Healthcare') || 
    service.category?.includes('AI Content') ||
    service.category?.includes('AI Emotional')
  ).length;

  const quantumCount = allServices.filter(service => 
    service.category?.includes('Quantum') || 
    service.category.includes('Space') || 
    service.category?.includes('Quantum Space') ||
    service.category?.includes('Quantum Internet')
  ).length;

  const enterpriseCount = allServices.filter(service => 
    service.category?.includes('Enterprise') || 
    service.category?.includes('IT') ||
    service.category?.includes('Infrastructure') ||
    service.category?.includes('Security') ||
    service.category?.includes('Network')
  ).length;

  const microSaasCount = allServices.filter(service => 
    service.category?.includes('Micro SaaS') ||
    service.category?.includes('AI Content Marketing') ||
    service.category?.includes('AI Customer Success') ||
    service.category?.includes('AI Supply Chain')
  ).length;

  const emergingCount = allServices.filter(service => 
    service.category?.includes('Holographic') || 
    service.category?.includes('Autonomous') ||
    service.category?.includes('Brain-Computer') ||
    service.category?.includes('Space Technology')
  ).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🤖', count: aiCount },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: quantumCount },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💼', count: microSaasCount },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟', count: emergingCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $500', range: 'Under $500' },
    { id: 'medium', name: '$500 - $2,000', range: '$500 - $2,000' },
    { id: 'high', name: '$2,000+', range: '$2,000+' },
    { id: 'custom', name: 'Custom Pricing', range: 'Custom' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name', icon: '🔤' },
    { id: 'price', name: 'Price', icon: '💰' },
    { id: 'popularity', name: 'Popularity', icon: '⭐' },
    { id: 'rating', name: 'Rating', icon: '🏆' },
    { id: 'newest', name: 'Newest', icon: '🆕' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        switch (selectedCategory) {
          case 'ai':
            return service.category?.includes('AI') || service.category?.includes('Machine Learning');
          case 'quantum':
            return service.category?.includes('Quantum') || service.category?.includes('Space');
          case 'enterprise':
            return service.category?.includes('Enterprise') || service.category?.includes('IT') || service.category?.includes('Infrastructure');
          case 'micro-saas':
            return service.category?.includes('Micro SaaS') || service.category?.includes('AI Content') || service.category?.includes('AI Customer');
          case 'emerging':
            return service.category?.includes('Holographic') || service.category?.includes('Autonomous') || service.category?.includes('Brain-Computer');
          default:
            return true;
        }
      });
    }

    // Price filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = service.price;
        switch (selectedPriceRange) {
          case 'low':
            return price.includes('$') && parseInt(price.replace(/[^0-9]/g, '')) < 500;
          case 'medium':
            return price.includes('$') && (parseInt(price.replace(/[^0-9]/g, '')) >= 500 && parseInt(price.replace(/[^0-9]/g, '')) <= 2000);
          case 'high':
            return price.includes('$') && parseInt(price.replace(/[^0-9]/g, '')) > 2000;
          case 'custom':
            return price.includes('Custom') || price.includes('custom');
          default:
            return true;
        }
      });
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    switch (sortBy) {
      case 'price':
        filtered.sort((a, b) => {
          const aPrice = a.price.includes('Custom') ? 999999 : parseInt(a.price.replace(/[^0-9]/g, ''));
          const bPrice = b.price.includes('Custom') ? 999999 : parseInt(b.price.replace(/[^0-9]/g, ''));
          return aPrice - bPrice;
        });
        break;
      case 'popularity':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [allServices, selectedCategory, selectedPriceRange, searchTerm, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Head>
        <title>Revolutionary 2026 Services Showcase V4 - Zion Tech Group</title>
        <meta name="description" content="Discover the most innovative and cutting-edge services of 2026. From AI consciousness simulation to quantum internet gateways, explore the future of technology." />
        <meta name="keywords" content="AI services, quantum computing, emerging technology, enterprise IT, micro SaaS, 2026 technology" />
        <meta property="og:title" content="Revolutionary 2026 Services Showcase V4 - Zion Tech Group" />
        <meta property="og:description" content="Discover the most innovative and cutting-edge services of 2026. From AI consciousness simulation to quantum internet gateways, explore the future of technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2026-services-showcase-v4" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2026-services-showcase-v4" />
      </Head>

      <UltraQuantumHolographicBackgroundV4 
        intensity="extreme"
        colorScheme="holographic"
        particleCount={300}
        animationSpeed={2}
        enableHolographic={true}
        enableQuantumEffects={true}
        enableNeuralNetwork={true}
        enableCosmicWaves={true}
        enableFloatingElements={true}
        enableMatrixRain={true}
        enableEnergyFields={true}
        enableTimeWarp={true}
      />
      <UltraAdvancedNavigation2026 />

      <main className="min-h-screen relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Revolutionary 2026
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Services Showcase V4
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our most innovative and cutting-edge services. 
                From AI consciousness simulation to quantum internet gateways, discover solutions that will transform your business.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
                <div className="flex items-center gap-2 text-purple-300">
                  <Phone className="w-5 h-5" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <Mail className="w-5 h-5" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <MapPin className="w-5 h-5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{allServices.length}</div>
                  <div className="text-gray-400">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{aiCount}</div>
                  <div className="text-gray-400">AI Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{quantumCount}</div>
                  <div className="text-gray-400">Quantum Tech</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{enterpriseCount}</div>
                  <div className="text-gray-400">Enterprise IT</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Price and Sort */}
              <div className="flex gap-4">
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id} className="bg-gray-800 text-white">
                      {range.name}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id} className="bg-gray-800 text-white">
                      {option.name}
                    </option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-all duration-200 ${
                      viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-all duration-200 ${
                      viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredServices.length === 0 ? (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                  <p className="text-gray-400 mb-8">Try adjusting your search criteria or filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedPriceRange('all');
                    }}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={`${selectedCategory}-${selectedPriceRange}-${searchTerm}-${sortBy}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className={viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    : 'space-y-6'
                  }
                >
                  {filteredServices.map((service) => (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      className={`group relative ${
                        viewMode === 'grid' 
                          ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105'
                          : 'bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300'
                      }`}
                    >
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </div>
                      )}

                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl mb-3">{service.icon}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="text-sm text-gray-400">{service.period}</div>
                        </div>
                      </div>

                      {/* Service Info */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                      {/* Category and Rating */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full">
                          {service.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{service.rating}</span>
                          <span className="text-gray-400 text-sm">({service.reviews})</span>
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              {feature}
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-xs text-gray-500">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Market Info */}
                      <div className="mb-6 p-4 bg-black/20 rounded-lg">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400">Market Size</div>
                            <div className="text-white font-medium">{service.marketSize}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Growth Rate</div>
                            <div className="text-white font-medium">{service.growthRate}</div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Link
                          href={service.link}
                          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg text-center font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                        >
                          Learn More
                        </Link>
                        <Link
                          href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                          className="px-4 py-3 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200"
                        >
                          <Mail className="w-5 h-5" />
                        </Link>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our revolutionary 2026 services are designed to give you the competitive edge you need. 
                Contact us today to learn how we can help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`mailto:${contactInfo.email}?subject=Revolutionary 2026 Services Inquiry`}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 border-2 border-purple-500 text-purple-300 rounded-lg text-lg font-medium hover:bg-purple-500 hover:text-white transition-all duration-200"
                >
                  Call Us Now
                </Link>
              </div>

              {/* Contact Details */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-white font-medium">{contactInfo.mobile}</div>
                  <div className="text-gray-400 text-sm">Phone</div>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-white font-medium">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-white font-medium">{contactInfo.address}</div>
                  <div className="text-gray-400 text-sm">Address</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}