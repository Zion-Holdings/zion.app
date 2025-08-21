import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { TrendingUp, Star, Users, Zap, Brain, Atom, Sparkles, Shield, Target, Cloud, DollarSign, BarChart3, Target as TargetIcon, Award } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { revolutionary2026Services } from '../data/revolutionary-2026-services';
import { emergingTech2026Services } from '../data/emerging-tech-2026-services';
import { comprehensiveIT2026Services } from '../data/comprehensive-it-2026-services';

export default function MarketPricing2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  // Combine all 2026 services
  const allServices = [
    ...revolutionary2026Services,
    ...emergingTech2026Services,
    ...comprehensiveIT2026Services
  ];

  // Filter services based on selection
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'budget' && parseFloat(service.price.replace(/[^0-9.]/g, '')) < 5000) ||
      (priceRange === 'mid' && parseFloat(service.price.replace(/[^0-9.]/g, '')) >= 5000 && parseFloat(service.price.replace(/[^0-9.]/g, '')) < 15000) ||
      (priceRange === 'premium' && parseFloat(service.price.replace(/[^0-9.]/g, '')) >= 15000);
    return matchesCategory && matchesPrice;
  });

  const categories = [
    { id: 'all', name: 'All Categories', icon: BarChart3, count: allServices.length },
    { id: 'AI', name: 'AI & Machine Learning', icon: Brain, count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'Quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'Emerging', name: 'Emerging Technology', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length },
    { id: 'IT', name: 'IT & Infrastructure', icon: Shield, count: allServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'Autonomous', name: 'Autonomous Systems', icon: Target, count: allServices.filter(s => s.category.includes('Autonomous')).length },
    { id: 'Cloud', name: 'Cloud & DevOps', icon: Cloud, count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('DevOps')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All price ranges' },
    { id: 'budget', name: 'Budget ($0 - $5K)', range: 'Affordable solutions for startups and small businesses' },
    { id: 'mid', name: 'Mid-Range ($5K - $15K)', range: 'Professional solutions for growing companies' },
    { id: 'premium', name: 'Premium ($15K+)', range: 'Enterprise-grade solutions for large organizations' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Calculate pricing statistics
  const pricingStats = {
    totalServices: allServices.length,
    averagePrice: allServices.reduce((sum, service) => sum + parseFloat(service.price.replace(/[^0-9.]/g, '')), 0) / allServices.length,
    lowestPrice: Math.min(...allServices.map(s => parseFloat(s.price.replace(/[^0-9.]/g, '')))),
    highestPrice: Math.max(...allServices.map(s => parseFloat(s.price.replace(/[^0-9.]/g, '')))),
    totalCustomers: allServices.reduce((sum, service) => sum + service.customers, 0),
    averageRating: allServices.reduce((sum, service) => sum + service.rating, 0) / allServices.length
  };

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum-fusion"
      particleCount={600}
      animationSpeed={2.5}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - 2026 Market Pricing & Competitive Analysis | 1500+ Solutions</title>
          <meta name="description" content="Comprehensive market pricing analysis for Zion Tech Group's revolutionary 2026 services. Compare prices, ROI, and competitive positioning. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 pricing, AI services pricing, quantum computing pricing, emerging technology pricing, IT solutions pricing, competitive analysis, market positioning, ROI analysis" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Zion Tech Group - 2026 Market Pricing & Competitive Analysis" />
          <meta property="og:description" content="1500+ cutting-edge services with competitive pricing and 1000% ROI guarantee. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/market-pricing-2026" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/market-pricing-2026" />
        </Head>

        {/* Navigation */}
        <UltraAdvancedNavigation />

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  2026 Market Pricing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Comprehensive pricing analysis and competitive positioning for our revolutionary AI, 
                quantum computing, and emerging technology services
              </p>
              
              {/* Pricing Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{pricingStats.totalServices}</div>
                  <div className="text-gray-400 text-sm">Total Services</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">${pricingStats.averagePrice.toFixed(0)}</div>
                  <div className="text-gray-400 text-sm">Avg. Price/Month</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-pink-400 mb-2">${pricingStats.lowestPrice.toFixed(0)}</div>
                  <div className="text-gray-400 text-sm">Lowest Price</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400 mb-2">${pricingStats.highestPrice.toFixed(0)}</div>
                  <div className="text-gray-400 text-sm">Highest Price</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{pricingStats.totalCustomers.toLocaleString()}+</div>
                  <div className="text-gray-400 text-sm">Total Customers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-white font-semibold mb-3">Service Category</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-cyan-500 text-black'
                            : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                        }`}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <category.icon className="w-4 h-4" />
                          <span>{category.name}</span>
                        </div>
                        <div className="text-xs mt-1 opacity-75">({category.count})</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-white font-semibold mb-3">Price Range</label>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <button
                        key={range.id}
                        onClick={() => setPriceRange(range.id)}
                        className={`w-full p-3 rounded-xl text-left transition-all duration-300 ${
                          priceRange === range.id
                            ? 'bg-cyan-500 text-black'
                            : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                        }`}
                      >
                        <div className="font-medium">{range.name}</div>
                        <div className="text-xs opacity-75">{range.range}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Analysis Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Market Analysis & Competitive Positioning</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services are strategically positioned to provide maximum value while maintaining competitive pricing 
                in the rapidly evolving technology landscape
              </p>
            </motion.div>

            {/* Market Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Competitive Pricing</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Our pricing is strategically positioned to be 20-40% more affordable than enterprise competitors 
                  while providing superior features and ROI
                </p>
                <div className="flex items-center text-cyan-400 text-sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span>20-40% cost savings</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">ROI Guarantee</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Every service comes with our 1000% ROI guarantee, ensuring that customers see 
                  exceptional returns on their investment
                </p>
                <div className="flex items-center text-green-400 text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  <span>1000% ROI guarantee</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Future-Proof Technology</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Our 2026 services incorporate cutting-edge technologies that will remain 
                  relevant and competitive for years to come
                </p>
                <div className="flex items-center text-purple-400 text-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  <span>Future-proof solutions</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Pricing Grid */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Service Pricing & Features</h2>
              <p className="text-xl text-gray-300">
                {filteredServices.length} services found matching your criteria
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-gray-300 text-sm mb-4">
                      {service.tagline}
                    </p>

                    {/* Pricing Section */}
                    <div className="bg-gray-700/30 rounded-xl p-4 mb-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-1">
                          {service.price}
                          <span className="text-gray-400 text-lg font-normal">{service.period}</span>
                        </div>
                        <div className="text-gray-400 text-sm">Starting price</div>
                      </div>
                    </div>

                    {/* Market Position */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Market Position</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {service.marketPosition}
                      </p>
                    </div>

                    {/* ROI & Customers */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                        <div className="text-lg font-bold text-green-400 mb-1">
                          {service.roi.split(' ')[0]}
                        </div>
                        <div className="text-gray-400 text-xs">ROI</div>
                      </div>
                      <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                        <div className="text-lg font-bold text-blue-400 mb-1">
                          {service.customers.toLocaleString()}+
                        </div>
                        <div className="text-gray-400 text-xs">Customers</div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Features</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-gray-400 text-xs flex items-center">
                            <Zap className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Technology</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.technology.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                        {service.technology.length > 3 && (
                          <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                            +{service.technology.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block"
                    >
                      View Details
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your category or price range filters</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss pricing, implementation, and how our revolutionary 2026 services 
                can transform your business with exceptional ROI
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-cyan-300">
                  <span className="text-2xl">📱</span>
                  <span className="font-semibold">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-purple-300">
                  <span className="text-2xl">✉️</span>
                  <span className="font-semibold">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-pink-300">
                  <span className="text-2xl">📍</span>
                  <span className="font-semibold text-sm">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Custom Quote
                </a>
                <a
                  href="/2026-services-showcase"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}