import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, Star, TrendingUp, DollarSign, Clock, Users, 
  ArrowRight, Rocket, Brain, Zap, Shield, Atom, Sparkles, 
  Target, Satellite, Globe, Cpu, Lock, Palette, Layers,
  Phone, Mail, MapPin, ExternalLink, Filter, Grid, List
} from 'lucide-react';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-v2';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedNavigation2026 from '../components/layout/EnhancedNavigation2026';

export default function Revolutionary2026Pricing() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price-low');

  // Combine all 2026 services
  const all2026Services = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2
  ];

  // Filter services based on category and price
  const filteredServices = useMemo(() => {
    let filtered = all2026Services;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') {
          return service.category.includes('AI') || service.category.includes('Machine Learning');
        } else if (selectedCategory === 'quantum') {
          return service.category.includes('Quantum') || service.category.includes('Space');
        } else if (selectedCategory === 'emerging') {
          return service.category.includes('Emerging') || service.category.includes('Technology');
        } else if (selectedCategory === 'enterprise') {
          return service.category.includes('Enterprise') || service.category.includes('Business');
        }
        return true;
      });
    }

    // Price filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
        if (selectedPriceRange === 'low') return price < 1000;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000;
        if (selectedPriceRange === 'premium') return price >= 20000;
        return true;
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      if (sortBy === 'price-low') {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
        return priceA - priceB;
      }
      if (sortBy === 'price-high') {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
        return priceB - priceA;
      }
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popularity') return b.customers - a.customers;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

    return filtered;
  }, [selectedCategory, selectedPriceRange, sortBy, all2026Services]);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: all2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Space')).length },
    { id: 'emerging', name: 'Emerging Technologies', icon: '✨', count: all2026Services.filter(s => s.category.includes('Emerging') || s.category.includes('Technology')).length },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('Business')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ];

  const sortOptions = [
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'popularity', name: 'Most Popular' },
    { id: 'name', name: 'Name A-Z' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Calculate pricing statistics
  const pricingStats = {
    totalServices: all2026Services.length,
    averagePrice: all2026Services.reduce((acc, service) => {
      const price = parseFloat(service.price.replace(/[^0-9.]/g, '')) || 0;
      return acc + price;
    }, 0) / all2026Services.length,
    lowestPrice: Math.min(...all2026Services.map(s => parseFloat(s.price.replace(/[^0-9.]/g, '')) || 0)),
    highestPrice: Math.max(...all2026Services.map(s => parseFloat(s.price.replace(/[^0-9.]/g, '')) || 0)),
    popularServices: all2026Services.filter(s => s.popular).length
  };

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="neural-network"
      particleCount={500}
      animationSpeed={2.5}
      enableHolographic={true}
      enableQuantumEffects={true}
      enableNeuralNetwork={true}
    >
      <div className="min-h-screen">
        <Head>
          <title>Revolutionary 2026 Pricing - Zion Tech Group | Competitive AI, Quantum & Emerging Tech Pricing</title>
          <meta name="description" content="Discover competitive pricing for Zion Tech Group's revolutionary 2026 services: AI, quantum computing, emerging technologies, and enterprise solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 pricing, AI services pricing, quantum computing pricing, emerging technologies pricing, enterprise solutions pricing, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Revolutionary 2026 Pricing - Zion Tech Group" />
          <meta property="og:description" content="Competitive pricing for cutting-edge AI, quantum computing, and emerging technology services" />
          <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2026-pricing" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2026-pricing" />
        </Head>

        {/* Enhanced Navigation */}
        <EnhancedNavigation2026 />

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Revolutionary 2026 Pricing
                </span>
              </h1>
              <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
                Transparent, competitive pricing for our cutting-edge AI, quantum computing, and emerging technology solutions. 
                Get maximum ROI with our revolutionary services.
              </p>
              
              {/* Pricing Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-400">{pricingStats.totalServices}+</div>
                  <div className="text-gray-400 text-sm">Total Services</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-400">${Math.round(pricingStats.averagePrice).toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">Average Price</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-400">${pricingStats.lowestPrice}</div>
                  <div className="text-gray-400 text-sm">Starting Price</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-400">{pricingStats.popularServices}</div>
                  <div className="text-gray-400 text-sm">Popular Services</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">Need Custom Pricing?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-black/40 text-gray-300 hover:bg-black/60 hover:text-white'
                      }`}
                    >
                      {category.icon} {category.name} ({category.count})
                    </button>
                  ))}
                </div>

                {/* Price Range Filter */}
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPriceRange(range.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedPriceRange === range.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-black/40 text-gray-300 hover:bg-black/60 hover:text-white'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>

                {/* Sort Options */}
                <div className="flex items-center space-x-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-black/60 border border-purple-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500/60"
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
          </div>
        </section>

        {/* Services Pricing Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredServices.length} Services Available
              </h2>
              <p className="text-gray-400">
                Compare pricing and features to find the perfect solution for your business
              </p>
            </div>

            <AnimatePresence mode="wait">
              {filteredServices.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <div className="text-gray-400 text-xl">
                    No services found matching your criteria.
                    <br />
                    Try adjusting your filters.
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
                        {/* Service Header */}
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-purple-300 text-sm mb-4">{service.tagline}</p>
                          
                          {/* Pricing */}
                          <div className="mb-6">
                            <div className="text-4xl font-bold text-white mb-2">
                              {service.price}
                              <span className="text-lg text-gray-400">{service.period}</span>
                            </div>
                            <div className="text-gray-400 text-sm">
                              {service.trialDays > 0 ? `${service.trialDays}-day free trial` : 'No trial available'}
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 flex items-center">
                            <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 6).map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Service Info */}
                        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                          <div>
                            <span className="text-gray-400">Category:</span>
                            <div className="text-white">{service.category}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Rating:</span>
                            <div className="flex items-center text-white">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              {service.rating}/5
                            </div>
                          </div>
                          <div>
                            <span className="text-gray-400">Customers:</span>
                            <div className="text-white">{service.customers.toLocaleString()}+</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Setup:</span>
                            <div className="text-white">{service.setupTime}</div>
                          </div>
                        </div>

                        {/* ROI and Market Info */}
                        <div className="mb-6 p-3 bg-purple-900/20 rounded-lg">
                          <div className="text-sm text-purple-300 mb-2">
                            <strong>ROI:</strong> {service.roi}
                          </div>
                          <div className="text-xs text-gray-400">
                            <strong>Market:</strong> {service.marketSize} | <strong>Growth:</strong> {service.growthRate}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3">
                          <Link
                            href={service.link}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group-hover:scale-105"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <a
                            href={`tel:${contactInfo.mobile}`}
                            className="bg-black/40 hover:bg-black/60 text-white font-semibold py-3 px-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-200 flex items-center justify-center"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Contact Sales
                          </a>
                        </div>

                        {/* Badges */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                              POPULAR
                            </div>
                          )}
                          {service.price.includes('Custom') && (
                            <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                              CUSTOM
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Our revolutionary 2026 services offer unmatched value, cutting-edge technology, and proven ROI
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value Proposition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Unmatched Value</h3>
                <p className="text-gray-300">
                  Get enterprise-grade technology at competitive prices. Our services deliver 1000%+ ROI, 
                  making them the smartest investment for your business.
                </p>
              </motion.div>

              {/* Technology */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
                <p className="text-gray-300">
                  Access the latest AI, quantum computing, and emerging technologies before they become mainstream. 
                  Stay ahead of the competition with our innovative solutions.
                </p>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Support</h3>
                <p className="text-gray-300">
                  Get dedicated support from our team of experts. We're here to ensure your success 
                  with implementation, training, and ongoing optimization.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Get started with our revolutionary 2026 services today. Contact us for custom pricing 
                and discover how we can accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {contactInfo.mobile}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="bg-black/40 hover:bg-black/60 text-white font-semibold py-4 px-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-200 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </a>
              </div>
              <div className="mt-8 text-gray-400 text-sm">
                <p>Visit us at: <a href={contactInfo.website} className="text-purple-400 hover:text-purple-300">{contactInfo.website}</a></p>
                <p className="mt-2">{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}