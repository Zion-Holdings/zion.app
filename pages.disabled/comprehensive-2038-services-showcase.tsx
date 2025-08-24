import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, Users, TrendingUp, 
  ArrowRight, Check, Zap, Shield, Brain, Rocket, Globe,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';

// Import our new innovative services
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services';
import { innovative2038ITServices } from '../data/innovative-2038-it-services';
import { innovative2038AIServices } from '../data/innovative-2038-ai-services';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const Comprehensive2038ServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Combine all services
  const allServices = [
    ...innovative2038MicroSaasServices,
    ...innovative2038ITServices,
    ...innovative2038AIServices
  ];

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, color: 'from-gray-500 to-slate-500' },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: <Rocket className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'IT Services', name: 'IT Services', icon: <Zap className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'AI Services', name: 'AI Services', icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.customers - a.customers;
        default:
          return 0;
      }
    });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Layout>
      <SEO 
        title="Comprehensive 2038 Services Showcase | Zion Tech Group"
        description="Explore our revolutionary 2038 technology services including AI, quantum computing, blockchain, and more. Transform your business with cutting-edge solutions."
        keywords={["2038 services", "AI services", "quantum computing", "blockchain", "edge computing", "Zion Tech Group"]}
        canonical="https://ziontechgroup.com/comprehensive-2038-services-showcase"
      />

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                2038 Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our revolutionary technology services that are shaping the future. From AI consciousness to quantum computing, 
                we deliver cutting-edge solutions that transform businesses and drive innovation.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-white/10"
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a href={`tel:${contactInfo.mobile}`} className="text-white hover:text-cyan-400 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-purple-400 mb-2" />
                  <p className="text-gray-300 text-sm">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-purple-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-pink-400 mb-2" />
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, features, or use cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-all ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price">Price: Low to High</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' border-transparent text-white'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredServices.length} Revolutionary Services
              </h2>
              <p className="text-gray-400">
                Discover cutting-edge solutions that are transforming industries and driving innovation
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Service Info */}
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>

                    {/* Pricing */}
                    <div className="bg-white/5 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-cyan-400">{formatPrice(service.price.monthly)}</span>
                        <span className="text-gray-400 text-sm">/month</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">
                        {formatPrice(service.price.yearly)} yearly • {service.price.trialDays} day trial
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 text-sm">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>⭐ {service.rating} ({service.reviews} reviews)</span>
                      <span>👥 {service.customers.toLocaleString()}+ users</span>
                    </div>

                    {/* CTA */}
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg text-center font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More <ExternalLink className="w-4 h-4" />
                    </a>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm hover:border-white/40 transition-all duration-300"
                  >
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Service Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="text-4xl">{service.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                              {service.popular && (
                                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-gray-300 mb-3">{service.tagline}</p>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                          </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 5).map((feature, idx) => (
                                <li key={idx} className="flex items-center text-gray-300 text-sm">
                                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                            <ul className="space-y-1">
                              {service.benefits.slice(0, 3).map((benefit, idx) => (
                                <li key={idx} className="flex items-center text-gray-300 text-sm">
                                  <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Pricing and Stats */}
                      <div className="space-y-4">
                        {/* Pricing */}
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-center mb-3">
                            <span className="text-3xl font-bold text-cyan-400">{formatPrice(service.price.monthly)}</span>
                            <span className="text-gray-400 text-sm">/month</span>
                          </div>
                          <div className="text-center text-gray-400 text-sm mb-3">
                            {formatPrice(service.price.yearly)} yearly
                          </div>
                          <div className="text-center text-gray-400 text-xs">
                            {service.price.trialDays} day trial • {service.price.setupTime} setup
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="bg-white/5 rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">Rating:</span>
                            <span className="text-white">⭐ {service.rating} ({service.reviews})</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">Users:</span>
                            <span className="text-white">{service.customers.toLocaleString()}+</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">Market Size:</span>
                            <span className="text-white">{service.marketSize}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <a
                          href={service.link}
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg text-center font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Learn More <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our revolutionary 2038 technology services can help you achieve your goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
                >
                  Call {contactInfo.mobile}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Comprehensive2038ServicesShowcase;