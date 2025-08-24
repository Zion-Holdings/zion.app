import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Star, DollarSign, CheckCircle, Rocket, Phone, Mail, MapPin, 
  Grid, List, ChevronDown, Brain, Atom, Shield, Zap, Globe, Users,
  TrendingUp, Award, Clock, Heart, Lightbulb, Sparkles, Cpu, Lock,
  Cloud, Settings, Eye, User, ShoppingCart, Bell, HelpCircle, FileText,
  Video, Headphones, Code, Database, Network, Server, Monitor, Smartphone,
  Camera, Gamepad2, Palette, Music, Film, BookOpenCheck, Building,
  MessageCircle, Target, BarChart3, Truck, BookOpen, X
} from 'lucide-react';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036EmergingTechServices } from '../data/real-2036-emerging-tech-services';

export default function Ultimate2036FuturisticServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices = [
    ...real2036InnovativeServices,
    ...real2036EmergingTechServices
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service =>
    service.category?.includes('AI') || service.category?.includes('Machine Learning')
  ).length;
  const quantumCount = allServices.filter(service =>
    service.category?.includes('Quantum') || service.category?.includes('Space')
  ).length;
  const emergingCount = allServices.filter(service =>
    service.category?.includes('Emerging') || service.category?.includes('Innovation')
  ).length;
  const roboticsCount = allServices.filter(service =>
    service.category?.includes('Robotics') || service.category?.includes('Automation')
  ).length;
  const biotechCount = allServices.filter(service =>
    service.category?.includes('Biology') || service.category?.includes('Biotech')
  ).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length, color: 'from-blue-500 to-purple-600' },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount, color: 'from-purple-500 to-pink-600' },
    { id: 'quantum', name: 'Quantum Technology', icon: '⚛️', count: quantumCount, color: 'from-cyan-500 to-blue-600' },
    { id: 'emerging', name: 'Emerging Tech', icon: '✨', count: emergingCount, color: 'from-green-500 to-emerald-600' },
    { id: 'robotics', name: 'Robotics & Automation', icon: '🤖', count: roboticsCount, color: 'from-orange-500 to-red-600' },
    { id: 'biotech', name: 'Biotechnology', icon: '🧬', count: biotechCount, color: 'from-teal-500 to-green-600' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $2K/month', range: 'Under $2K' },
    { id: 'medium', name: '$2K - $5K/month', range: '$2K - $5K' },
    { id: 'high', name: '$5K - $10K/month', range: '$5K - $10K' },
    { id: 'enterprise', name: 'Custom pricing', range: 'Custom' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' ||
        (selectedCategory === 'ai' && service.category.includes('AI')) ||
        (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
        (selectedCategory === 'emerging' && service.category.includes('Emerging')) ||
        (selectedCategory === 'robotics' && service.category.includes('Robotics')) ||
        (selectedCategory === 'biotech' && service.category.includes('Biology'));

      const matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && service.price.monthly < 2000) ||
        (selectedPriceRange === 'medium' && service.price.monthly >= 2000 && service.price.monthly <= 5000) ||
        (selectedPriceRange === 'high' && service.price.monthly > 5000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort((a, b) => a.price.monthly - b.price.monthly);
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
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

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
        <title>Ultimate 2036 Futuristic Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of cutting-edge micro SAAS services, AI solutions, quantum computing platforms, and emerging technology solutions for 2036 and beyond." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, emerging technology, futuristic solutions, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-2036-futuristic-services-showcase" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Futuristic Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1),transparent_50%)]" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 pt-24 lg:pt-28">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <motion.div 
              className="max-w-6xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ultimate 2036
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Futuristic Services Showcase
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover the future of technology with our comprehensive collection of cutting-edge micro SAAS services, 
                AI solutions, quantum computing platforms, and emerging technology solutions designed for 2036 and beyond.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-gray-300">{contactInfo.mobile}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
                <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-pink-400" />
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-gray-300">{contactInfo.address}</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Search and Filters */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                {/* Search Bar */}
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services by name, description, or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Filters and Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                      <option value="popularity">Popularity</option>
                      <option value="rating">Rating</option>
                      <option value="customers">Customers</option>
                    </select>
                  </div>

                  {/* View Mode */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">View Mode</label>
                    <div className="flex bg-gray-800/50 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          viewMode === 'grid'
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Grid className="w-4 h-4 mx-auto" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          viewMode === 'list'
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <List className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
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
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className={`group cursor-pointer ${
                      viewMode === 'grid' 
                        ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105' 
                        : 'bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300'
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{service.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-gray-400">{service.category}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>

                    {/* Service Description */}
                    <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-white">
                        ${service.price.monthly.toLocaleString()}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        ${service.price.yearly.toLocaleString()}/year (save ${((service.price.monthly * 12 - service.price.yearly) / (service.price.monthly * 12) * 100).toFixed(0)}%)
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Service Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {service.rating} ({service.reviews} reviews)
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-blue-400 mr-1" />
                        {service.customers.toLocaleString()} customers
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                      Learn More & Get Started
                    </button>
                  </motion.div>
                ))}
              </motion.div>

              {/* No Results */}
              {filteredServices.length === 0 && (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search criteria or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedPriceRange('all');
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our team of experts is ready to help you implement the latest technologies and drive innovation in your organization.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-blue-400">Phone:</strong><br />
                      {contactInfo.mobile}
                    </div>
                    <div>
                      <strong className="text-purple-400">Email:</strong><br />
                      {contactInfo.email}
                    </div>
                    <div>
                      <strong className="text-green-400">Address:</strong><br />
                      {contactInfo.address}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{selectedService.icon}</div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>
                      <p className="text-lg text-gray-400">{selectedService.tagline}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                    <p className="text-gray-300 mb-6">{selectedService.description}</p>

                    <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-semibold text-white mb-4">Target Audience</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedService.targetAudience.map((audience, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing</h3>
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 mb-6 border border-blue-500/30">
                      <div className="text-3xl font-bold text-white mb-2">
                        ${selectedService.price.monthly.toLocaleString()}
                        <span className="text-lg text-gray-400 font-normal">/month</span>
                      </div>
                      <div className="text-lg text-gray-300 mb-4">
                        ${selectedService.price.yearly.toLocaleString()}/year
                      </div>
                      <div className="text-sm text-gray-400 mb-4">
                        <strong>Trial:</strong> {selectedService.price.trialDays} days<br />
                        <strong>Setup:</strong> {selectedService.price.setupTime}
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                        Get Started
                      </button>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-semibold text-white mb-4">Use Cases</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.useCases.map((useCase, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <strong className="text-blue-400">Market Position:</strong><br />
                      <span className="text-gray-300">{selectedService.marketPosition}</span>
                    </div>
                    <div>
                      <strong className="text-purple-400">ROI:</strong><br />
                      <span className="text-gray-300">{selectedService.roi}</span>
                    </div>
                    <div>
                      <strong className="text-green-400">Support:</strong><br />
                      <span className="text-gray-300">{selectedService.support}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}