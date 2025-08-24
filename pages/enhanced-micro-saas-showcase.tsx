import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, 
  Sparkles, Atom, Target, Microscope, Search, Filter,
  ExternalLink, Users, Clock, BarChart3, Award
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground2035 from '../components/ui/UltraFuturisticBackground2035';
import UltraFuturisticNavigation2033 from '../components/layout/UltraFuturisticNavigation2033';
import UltraFuturisticFooter2034 from '../components/layout/UltraFuturisticFooter2034';
import { realMicroSaasServices2025, microSaasCategories } from '../data/2025-real-micro-saas-expansion';

export default function EnhancedMicroSaasShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const filteredServices = realMicroSaasServices2025
    .filter(service => 
      (selectedCategory === 'all' || service.category === selectedCategory) &&
      (searchQuery === '' || 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'price') {
        return a.pricing.starter.price - b.pricing.starter.price;
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return a.name.localeCompare(b.name);
    });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <Head>
        <title>Enhanced Micro SAAS Showcase 2025 | Zion Tech Group - Revolutionary Business Automation Solutions</title>
        <meta name="description" content="Discover our comprehensive collection of real, market-ready micro SAAS services. From AI-powered content automation to cybersecurity automation, transform your business with cutting-edge solutions." />
        <meta name="keywords" content="micro SAAS, business automation, AI automation, content marketing, financial management, customer success, sales automation, HR automation, e-commerce automation, project management, data analytics, cybersecurity, customer support" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Enhanced Micro SAAS Showcase 2025 | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary micro SAAS services for business automation and growth. Real solutions with proven ROI." />
        <meta property="og:url" content="https://ziontechgroup.com/enhanced-micro-saas-showcase" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enhanced Micro SAAS Showcase 2025 | Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary micro SAAS services for business automation and growth." />
        
        <link rel="canonical" href="https://ziontechgroup.com/enhanced-micro-saas-showcase" />
      </Head>

      <UltraFuturisticBackground2035>
        <UltraFuturisticNavigation2033 />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-lg font-medium mb-8 backdrop-blur-sm"
            >
              <Star className="w-5 h-5 mr-2 text-cyan-400" />
              2025 Enhanced Micro SAAS Revolution
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Real
              </span>
              <br />
              <span className="text-white">Micro SAAS</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Transform your business with our comprehensive collection of market-ready micro SAAS services. 
              From AI-powered automation to comprehensive business solutions, we deliver real ROI and measurable results.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">$200B+</div>
                <div className="text-gray-300 text-sm">Market Opportunity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime Guarantee</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href={`tel:${contactInfo.mobile}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
              >
                <span>Get Started</span>
                <Phone className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <span className="text-white"> Micro SAAS Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive collection of market-ready micro SAAS solutions designed to transform your business operations and drive growth.
              </p>
            </motion.div>

            {/* Filters and Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center space-x-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="all">All Categories</option>
                    {microSaasCategories.map((category) => (
                      <option key={category.name} value={category.name}>
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>

                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
                    className="px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="category">Sort by Category</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative bg-gradient-to-br from-black/40 to-purple-900/20 border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm"
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-cyan-400 font-medium">{service.category}</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-cyan-400 font-medium">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                      <DollarSign className="w-4 h-4 mr-2 text-green-400" />
                      Starting at
                    </h4>
                    <div className="text-2xl font-bold text-green-400">
                      ${service.pricing.starter.price}
                      <span className="text-sm text-gray-400 font-normal">/{service.pricing.starter.period}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-yellow-400" />
                      Key Benefits
                    </h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="text-sm text-gray-300">
                          • {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Market Size:</span>
                      <div className="text-cyan-400 font-medium">{service.marketSize}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Use Cases:</span>
                      <div className="text-purple-400 font-medium">{service.useCases.length}+</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={service.website}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 text-sm"
                    >
                      <span>Learn More</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </motion.a>
                    <motion.a
                      href={`tel:${service.contact}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center px-4 py-3 bg-black/50 border border-cyan-500/50 text-cyan-300 font-medium rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your search criteria or category filter</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team to discuss how our micro SAAS solutions can drive growth and efficiency for your organization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 p-4 bg-black/30 border border-cyan-500/20 rounded-lg">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-black/30 border border-cyan-500/20 rounded-lg">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-black/30 border border-cyan-500/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={`tel:${contactInfo.mobile}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Now</span>
                </motion.a>
                
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                >
                  <Mail className="w-6 h-6" />
                  <span>Email Us</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <UltraFuturisticFooter2034 />
              </UltraFuturisticBackground2035>
    </>
  );
}