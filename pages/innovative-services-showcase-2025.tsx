import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, ArrowRight, CheckCircle, Users, Clock, 
  TrendingUp, Shield, Zap, Brain, Atom, Rocket, Target,
  Filter, Search, Grid, List, ChevronDown, Phone, Mail
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovative2025MicroSaasServices } from '../data/innovative-2025-micro-saas-services';
import { innovative2025AIServices } from '../data/innovative-2025-ai-services';
import { innovative2025ITServices } from '../data/innovative-2025-it-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const allServices = [
  ...innovative2025MicroSaasServices.map(s => ({ ...s, category: 'Micro SAAS' })),
  ...innovative2025AIServices.map(s => ({ ...s, category: 'AI Services' })),
  ...innovative2025ITServices.map(s => ({ ...s, category: 'IT Services' })),
  ...emergingTech2025Services.map(s => ({ ...s, category: 'Emerging Tech' }))
];

const categories = ['All', 'Micro SAAS', 'AI Services', 'IT Services', 'Emerging Tech'];
const priceRanges = ['All', 'Under $500', '$500 - $1000', '$1000 - $2000', 'Over $2000'];

export default function InnovativeServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesPrice = selectedPriceRange === 'All' || 
      (selectedPriceRange === 'Under $500' && parseInt(service.price.replace(/[^0-9]/g, '')) < 500) ||
      (selectedPriceRange === '$500 - $1000' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 500 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 1000) ||
      (selectedPriceRange === '$1000 - $2000' && parseInt(service.price.replace(/[^0-9]/g, '')) > 1000 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 2000) ||
      (selectedPriceRange === 'Over $2000' && parseInt(service.price.replace(/[^0-9]/g, '')) > 2000);
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.rating - a.rating;
      case 'price-low':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <Head>
        <title>Innovative Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of innovative AI, quantum computing, IT, and micro SAAS services for 2025. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, quantum computing, IT services, micro SAAS, innovative technology, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Innovative Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive portfolio of innovative technology services for 2025." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase-2025" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2025" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative Services
              </span>
              <br />
              <span className="text-white">Showcase 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of revolutionary AI, quantum computing, IT infrastructure, and micro SAAS solutions designed to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-cyan-400" />
                {allServices.length} Services Available
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-purple-400" />
                1000+ Happy Customers
              </span>
              <span className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                99.9% Success Rate
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-gray-400">
              Showing {filteredServices.length} of {allServices.length} available services
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    <div className="flex flex-col items-end">
                      {service.popular && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full mb-2">
                          Popular
                        </span>
                      )}
                      <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-gray-400 text-sm">{service.period}</div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {service.rating} ({service.reviews})
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {service.customers}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-center block"
                  >
                    Learn More
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl`}>
                        {service.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                            {service.popular && (
                              <span className="px-3 py-1 text-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
                                Popular
                              </span>
                            )}
                            <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded">
                              {service.category}
                            </span>
                          </div>
                          <p className="text-gray-400 text-lg">{service.description}</p>
                        </div>
                        
                        <div className="mt-4 lg:mt-0 text-right">
                          <div className="text-3xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-gray-400">{service.period}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-400" />
                          <span className="text-white">{service.rating} Rating</span>
                          <span className="text-gray-400">({service.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-purple-400" />
                          <span className="text-white">{service.customers} Customers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-green-400" />
                          <span className="text-white">Setup: {service.setupTime}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="text-sm text-gray-400 mb-3">Key Features:</div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={service.link}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
                        >
                          Learn More
                        </Link>
                        <button className="px-6 py-3 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 rounded-xl transition-all duration-300">
                          Contact Sales
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search criteria or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedPriceRange('All');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Contact our team today to learn how our innovative technology solutions can drive growth and innovation for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 font-bold text-lg rounded-2xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}