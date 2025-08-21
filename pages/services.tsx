import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const allServices = [
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...enterpriseITServices,
    ...enhancedRealMicroSaasServices
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: innovativeAIServices.length },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: quantumSpaceServices.filter(s => s.name.toLowerCase().includes('quantum')).length },
    { id: 'space', name: 'Space Technology', icon: '🚀', count: quantumSpaceServices.filter(s => s.name.toLowerCase().includes('space')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseITServices.length },
    { id: 'saas', name: 'Micro SaaS', icon: '💻', count: enhancedRealMicroSaasServices.length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', count: allServices.length },
    { id: 'under-1000', name: 'Under $1,000', count: allServices.filter(s => parseInt(s.price.replace(/[$,]/g, '')) < 1000).length },
    { id: '1000-5000', name: '$1,000 - $5,000', count: allServices.filter(s => {
      const price = parseInt(s.price.replace(/[$,]/g, ''));
      return price >= 1000 && price <= 5000;
    }).length },
    { id: '5000-15000', name: '$5,000 - $15,000', count: allServices.filter(s => {
      const price = parseInt(s.price.replace(/[$,]/g, ''));
      return price > 5000 && price <= 15000;
    }).length },
    { id: 'over-15000', name: 'Over $15,000', count: allServices.filter(s => {
      const price = parseInt(s.price.replace(/[$,]/g, ''));
      return price > 15000;
    }).length }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customer Count' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai' && innovativeAIServices.includes(service)) ||
      (selectedCategory === 'quantum' && service.name.toLowerCase().includes('quantum')) ||
      (selectedCategory === 'space' && service.name.toLowerCase().includes('space')) ||
      (selectedCategory === 'enterprise' && enterpriseITServices.includes(service)) ||
      (selectedCategory === 'saas' && enhancedRealMicroSaasServices.includes(service));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = selectedPriceRange === 'all' || 
      (selectedPriceRange === 'under-1000' && parseInt(service.price.replace(/[$,]/g, '')) < 1000) ||
      (selectedPriceRange === '1000-5000' && (() => {
        const price = parseInt(service.price.replace(/[$,]/g, ''));
        return price >= 1000 && price <= 5000;
      })()) ||
      (selectedPriceRange === '5000-15000' && (() => {
        const price = parseInt(service.price.replace(/[$,]/g, ''));
        return price > 5000 && price <= 15000;
      })()) ||
      (selectedPriceRange === 'over-15000' && parseInt(service.price.replace(/[$,]/g, '')) > 15000);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return parseInt(a.price.replace(/[$,]/g, '')) - parseInt(b.price.replace(/[$,]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[$,]/g, '')) - parseInt(a.price.replace(/[$,]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      default:
        return 0;
    }
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
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Services - Zion Tech Group | Revolutionary AI & Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive range of revolutionary AI, quantum computing, space technology, and enterprise IT services. Transform your business with cutting-edge solutions." />
        <meta name="keywords" content="AI services, quantum computing, space technology, enterprise IT, micro SaaS, cybersecurity, cloud migration, DevOps automation" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI & Technology Solutions" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of cutting-edge AI, quantum computing, space technology, 
              and enterprise IT services designed to transform your business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {allServices.length}+
                </div>
                <div className="text-gray-400 text-sm">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                  {allServices.filter(s => s.popular).length}
                </div>
                <div className="text-gray-400 text-sm">Popular Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                  {Math.round(allServices.reduce((acc, s) => acc + s.rating, 0) / allServices.length * 10) / 10}
                </div>
                <div className="text-gray-400 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  {allServices.reduce((acc, s) => acc + s.customers, 0).toLocaleString()}+
                </div>
                <div className="text-gray-400 text-sm">Total Customers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
            {/* Search */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                <label className="block text-sm font-medium text-gray-300 mb-3">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name} ({range.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 text-center">
              <div className="text-gray-400">
                Showing <span className="text-cyan-400 font-semibold">{sortedServices.length}</span> of{' '}
                <span className="text-cyan-400 font-semibold">{allServices.length}</span> services
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  layout
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/25">
                    {/* Service Icon */}
                    <div className="text-6xl mb-6">{service.icon}</div>

                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-6 right-6">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                          POPULAR
                        </span>
                      </div>
                    )}

                    {/* Service Info */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">
                        {service.price}
                        <span className="text-lg text-gray-400">{service.period}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.trialDays} day free trial
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {service.features.length > 3 && (
                        <div className="text-sm text-cyan-400 mt-2">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* Market Data */}
                    <div className="mb-6 p-4 bg-gray-800/50 rounded-2xl">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-cyan-400 font-semibold">{service.marketSize}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-400">Growth Rate:</span>
                        <span className="text-green-400 font-semibold">{service.growthRate}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-yellow-400 font-semibold">{service.roi.split(' ').slice(0, 3).join(' ')}</span>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-6 p-4 bg-gray-800/50 rounded-2xl">
                      <div className="text-sm text-gray-400 mb-2">Contact Information:</div>
                      <div className="space-y-1 text-xs text-gray-300">
                        <div>📱 {service.contactInfo.mobile}</div>
                        <div>✉️ {service.contactInfo.email}</div>
                        <div>📍 {service.contactInfo.address}</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={service.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                      >
                        Contact
                      </motion.a>
                    </div>

                    {/* Service Stats */}
                    <div className="mt-6 pt-6 border-t border-gray-700/50">
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {service.customers.toLocaleString()}+ customers
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" />
                          {service.rating}/5 ({service.reviews})
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8">
                Try adjusting your search criteria or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                  setSortBy('name');
                }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already leveraging our cutting-edge AI and technology services to achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.a>
              <motion.a
                href="tel:+13024640950"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Call +1 302 464 0950
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}