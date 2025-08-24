import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket,
  Brain, Globe, Database, Cloud, Lock, Palette, Target, Layers, Sparkles, Atom, Microscope, Satellite,
  Crown, Award, Users, BarChart3, Clock, Eye, EyeOff, Filter, Search
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { nextGenAIServices2026 } from '../data/next-gen-ai-services-2026';
import { revolutionaryITInfrastructure2026 } from '../data/revolutionary-it-infrastructure-2026';
import { innovativeMicroSaas2026 } from '../data/innovative-micro-saas-2026';

export default function Comprehensive2026Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [showPopularOnly, setShowPopularOnly] = useState(false);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices = [
    ...nextGenAIServices2026,
    ...revolutionaryITInfrastructure2026,
    ...innovativeMicroSaas2026
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: nextGenAIServices2026.length },
    { id: 'it', name: 'IT Infrastructure', icon: Shield, count: revolutionaryITInfrastructure2026.length },
    { id: 'saas', name: 'Micro SaaS', icon: Zap, count: innovativeMicroSaas2026.length },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Layers, count: allServices.filter(s => s.category.includes('Blockchain')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length }
  ];

  // Price ranges
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($0-$299)', range: '0-299' },
    { id: 'mid', name: 'Mid-Range ($300-$999)', range: '300-999' },
    { id: 'premium', name: 'Premium ($1000-$2999)', range: '1000-2999' },
    { id: 'enterprise', name: 'Enterprise ($3000+)', range: '3000+' }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory);
      
      const matchesPriceRange = (() => {
        const price = parseFloat(service.price.replace('$', '').replace(',', ''));
        switch (priceRange) {
          case 'budget': return price <= 299;
          case 'mid': return price >= 300 && price <= 999;
          case 'premium': return price >= 1000 && price <= 2999;
          case 'enterprise': return price >= 3000;
          default: return true;
        }
      })();
      
      const matchesPopular = !showPopularOnly || service.popular;
      
      return matchesCategory && matchesPriceRange && matchesPopular;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'price-high':
          return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return a.popular ? -1 : 1;
      }
    });

  // Calculate pricing statistics
  const pricingStats = {
    totalServices: allServices.length,
    averagePrice: Math.round(allServices.reduce((sum, s) => sum + parseFloat(s.price.replace('$', '').replace(',', '')), 0) / allServices.length),
    lowestPrice: Math.min(...allServices.map(s => parseFloat(s.price.replace('$', '').replace(',', '')))),
    highestPrice: Math.max(...allServices.map(s => parseFloat(s.price.replace('$', '').replace(',', '')))),
    popularServices: allServices.filter(s => s.popular).length
  };

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
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum-fusion"
      particleCount={600}
      animationSpeed={3.0}
    >
      <Head>
        <title>Comprehensive 2026 Pricing | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive 2026 pricing for cutting-edge AI, IT infrastructure, and micro SaaS services. Find the perfect solution for your business needs." />
        <meta name="keywords" content="2026 pricing, AI services pricing, IT infrastructure pricing, micro SaaS pricing, Zion Tech Group pricing" />
        <meta property="og:title" content="Comprehensive 2026 Pricing | Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive 2026 pricing for cutting-edge AI, IT infrastructure, and micro SaaS services." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-2026-pricing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2026-pricing" />
      </Head>

      <UltraAdvancedNavigation />

      <div className="min-h-screen relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Comprehensive 2026
                <br />
                <span className="text-6xl md:text-8xl">Pricing Guide</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover transparent pricing for our revolutionary collection of AI, IT infrastructure, 
                and micro SaaS services designed to transform your business in 2026.
              </p>
              
              {/* Pricing Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 quantum-hover">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{pricingStats.totalServices}+</div>
                  <div className="text-gray-300">Total Services</div>
                </div>
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 holographic-hover">
                  <div className="text-3xl font-bold text-purple-400 mb-2">${pricingStats.averagePrice}</div>
                  <div className="text-gray-300">Average Price</div>
                </div>
                <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30 neural-hover">
                  <div className="text-3xl font-bold text-green-400 mb-2">${pricingStats.lowestPrice}</div>
                  <div className="text-gray-300">Starting Price</div>
                </div>
                <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30 cyberpunk-hover">
                  <div className="text-3xl font-bold text-orange-400 mb-2">{pricingStats.popularServices}</div>
                  <div className="text-gray-300">Popular Services</div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                  <Crown className="w-8 h-8 text-yellow-400" />
                  Need Custom Pricing?
                </h3>
                <p className="text-gray-300 mb-6">
                  Contact us for enterprise solutions, custom integrations, and volume discounts.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Filter & Sort Services</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-3">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                  <label className="block text-sm font-semibold text-gray-400 mb-3">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                  <label className="block text-sm font-semibold text-gray-400 mb-3">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="customers">Most Customers</option>
                  </select>
                </div>

                {/* Popular Only Toggle */}
                <div className="flex items-end">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showPopularOnly}
                      onChange={(e) => setShowPopularOnly(e.target.checked)}
                      className="w-5 h-5 text-cyan-600 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="text-sm font-semibold text-gray-400">Popular Only</span>
                  </label>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-6 text-center">
                <p className="text-gray-300">
                  Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
                  <span className="text-cyan-400 font-semibold">{allServices.length}</span> services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    layout
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-600/30 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 group"
                  >
                    {/* Service Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        {service.popular && (
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Popular
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {service.tagline}
                      </p>

                      {/* Pricing */}
                      <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-4 mb-4 border border-cyan-500/20">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-cyan-400 mb-1">
                            {service.price}
                            <span className="text-gray-400 text-sm font-normal">{service.period}</span>
                          </div>
                          <div className="text-sm text-gray-300">
                            {service.trialDays} days free trial
                          </div>
                        </div>
                      </div>

                      {/* Rating and Customers */}
                      <div className="flex items-center justify-between mb-4 text-sm">
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-white">{service.rating}</span>
                          <span className="text-gray-400">({service.reviews})</span>
                        </div>
                        <div className="text-gray-400">
                          {service.customers.toLocaleString()} customers
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-sm text-cyan-400">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Market Info */}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                          <div className="text-gray-400 mb-1">Market Size</div>
                          <div className="text-white font-semibold">{service.marketSize}</div>
                        </div>
                        <div>
                          <div className="text-gray-400 mb-1">Growth Rate</div>
                          <div className="text-white font-semibold">{service.growthRate}</div>
                        </div>
                      </div>

                      {/* ROI */}
                      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-4 mb-6 border border-green-500/20">
                        <div className="text-sm text-gray-400 mb-1">Expected ROI</div>
                        <div className="text-green-400 font-semibold text-sm">{service.roi}</div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-3">
                        <Link
                          href={service.link}
                          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold py-3 px-6 rounded-xl border border-gray-600/30 transition-all duration-300 flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4" />
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your filters or contact us for custom solutions</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                    setShowPopularOnly(false);
                  }}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our team of experts is ready to help you choose the perfect solution 
                and get you started with a free consultation and trial.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href={`tel:${contactInfo.mobile}`}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: {contactInfo.mobile}
                </Link>
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </Link>
              </div>

              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30">
                <h3 className="text-2xl font-bold text-white mb-4">Special Enterprise Offers</h3>
                <p className="text-gray-300 mb-6">
                  Get volume discounts, custom integrations, and dedicated support for enterprise deployments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">Up to 40%</div>
                    <div className="text-gray-300">Volume Discounts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-gray-300">Priority Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-2">Custom</div>
                    <div className="text-gray-300">Integrations</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-gray-400">
                <p>📍 {contactInfo.address}</p>
                <p>🌐 <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">{contactInfo.website}</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}