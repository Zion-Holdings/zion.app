import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, Globe,
  Star, Users, TrendingUp, Zap, Sparkles, ExternalLink, Mail, Phone, MapPin
} from 'lucide-react';

// Import our new innovative service suites
import { innovativeAIAutomationSuite } from '../data/2025-innovative-ai-automation-suite';
import { innovativeITInfrastructureSuite } from '../data/2025-innovative-it-infrastructure-suite';
import { innovativeCybersecuritySuite } from '../data/2025-innovative-cybersecurity-suite';
import { innovativeDataAnalyticsSuite } from '../data/2025-innovative-data-analytics-suite';
import { innovativeBusinessAutomationSuite } from '../data/2025-innovative-business-automation-suite';

// Combine all services
const allServices = [
  ...innovativeAIAutomationSuite,
  ...innovativeITInfrastructureSuite,
  ...innovativeCybersecuritySuite,
  ...innovativeDataAnalyticsSuite,
  ...innovativeBusinessAutomationSuite
];

// Service categories
const categories = [
  'All Services',
  'AI & Automation',
  'IT Infrastructure',
  'Cybersecurity',
  'Data Analytics',
  'Business Automation'
];

export default function Innovative2025ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Filter services based on category and search
  const filteredServices = allInnovativeServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'quantum' && service.name.toLowerCase().includes('quantum')) ||
      (selectedCategory === 'cybersecurity' && service.category.toLowerCase().includes('security')) ||
      (selectedCategory === 'healthcare' && service.category.toLowerCase().includes('health')) ||
      (selectedCategory === 'finance' && service.category.toLowerCase().includes('financial'));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.price.monthly - b.price.monthly;
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
      default:
        return b.customers - a.customers;
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative 2025 Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge portfolio of innovative micro SAAS, IT, and AI services. Real solutions with proven ROI, competitive pricing, and enterprise-grade quality."
        keywords={["micro SAAS", "IT services", "AI services", "business solutions", "enterprise software", "digital transformation", "2025 innovation"]}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Innovative 2025
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services Showcase
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Discover our portfolio of innovative micro SAAS, IT, and AI services. 
              Real solutions with proven ROI, competitive pricing, and enterprise-grade quality.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center space-x-2 text-white">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-white/20 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <span className="text-white text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white/20 text-white border border-white/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popularity">Popularity</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {sortedServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-xl">No services found matching your criteria.</div>
            </motion.div>
          ) : (
            <motion.div
              key={`${viewMode}-${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    
                    {/* Pricing */}
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-4">
                      <div className="text-2xl font-bold text-white">
                        ${service.price.monthly}
                        <span className="text-lg text-gray-300">/month</span>
                      </div>
                      <div className="text-sm text-gray-300">
                        ${service.price.yearly}/year (save ${(service.price.monthly * 12 - service.price.yearly).toLocaleString()})
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {service.price.trialDays}-day free trial • Setup: {service.price.setupTime}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4">
                      {service.category}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className={`p-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    {/* Key Benefits */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Position */}
                    <div className="mb-4 p-3 bg-white/10 rounded-lg">
                      <h4 className="text-white font-semibold mb-2 text-sm">Market Position:</h4>
                      <p className="text-xs text-gray-300">{service.marketPosition}</p>
                    </div>

                    {/* ROI */}
                    <div className="mb-4 p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg">
                      <h4 className="text-white font-semibold mb-2 text-sm">ROI:</h4>
                      <p className="text-xs text-gray-300">{service.roi}</p>
                    </div>

                    {/* Contact & Action */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                        className="flex-1 bg-white/20 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 flex items-center justify-center"
                      >
                        Contact Sales
                        <Mail className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Innovative 2025
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI innovations. 
              From AI automation to quantum security, we deliver real, market-ready solutions 
              that transform businesses and drive growth.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Zion Tech Group</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-gray-300 text-sm">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-purple-400 mb-2" />
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-green-400 mb-2" />
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
