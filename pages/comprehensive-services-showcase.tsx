import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, 
  Clock, Target, Brain, Cpu, Database, Atom, Rocket, Cloud, Lock, BarChart3,
  Search, Filter, ChevronDown, ChevronUp, Phone, Mail, MapPin, Globe as GlobeIcon
} from 'lucide-react';
import { enhancedMicroSaasServices, enhancedServiceCategories } from '../data/enhanced-micro-saas-services-2025';
import { specializedITServices, specializedServiceCategories } from '../data/specialized-it-services-2025';

export default function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedServiceType, setSelectedServiceType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  // Combine all services
  const allServices = [
    ...enhancedMicroSaasServices.map(service => ({ ...service, type: 'AI Services' })),
    ...specializedITServices.map(service => ({ ...service, type: 'IT Services' }))
  ];

  // Filter services based on selected criteria
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesType = selectedServiceType === 'All' || service.type === selectedServiceType;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = parseFloat(service.price.replace('$', '').replace(',', '')) >= priceRange.min &&
                        (priceRange.max === Infinity || parseFloat(service.price.replace('$', '').replace(',', '')) <= priceRange.max);
    
    return matchesCategory && matchesType && matchesSearch && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'popularity':
        return b.popular ? 1 : -1;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  // Get all unique categories
  const allCategories = ['All', ...new Set([...enhancedServiceCategories, ...specializedServiceCategories])];

  // Get all service types
  const allServiceTypes = ['All', 'AI Services', 'IT Services'];

  // Price range options
  const priceRanges = [
    { label: 'All Prices', min: 0, max: Infinity },
    { label: 'Under $100', min: 0, max: 100 },
    { label: '$100 - $500', min: 100, max: 500 },
    { label: '$500 - $1000', min: 500, max: 1000 },
    { label: '$1000 - $2000', min: 1000, max: 2000 },
    { label: 'Over $2000', min: 2000, max: Infinity }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Comprehensive Services Showcase - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta name="description" content="Explore our comprehensive portfolio of AI services, IT solutions, and micro SAAS platforms. Leading-edge technology solutions for modern businesses." />
        <meta property="og:title" content="Comprehensive Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive portfolio of AI services, IT solutions, and micro SAAS platforms." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, technology solutions, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Discover our complete portfolio of cutting-edge AI services, IT solutions, and innovative micro SAAS platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              From AI-powered business intelligence to quantum computing solutions, we provide the technology foundation 
              that drives innovation and growth for forward-thinking organizations.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 focus:bg-white/10"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
              {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4"
              >
                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Service Type</label>
                  <select
                    value={selectedServiceType}
                    onChange={(e) => setSelectedServiceType(e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    {allServiceTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    {allCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Price Range</label>
                  <select
                    value={JSON.stringify(priceRange)}
                    onChange={(e) => setPriceRange(JSON.parse(e.target.value))}
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    {priceRanges.map((range, index) => (
                      <option key={index} value={JSON.stringify(range)}>{range.label}</option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="popularity">Popularity</option>
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Results Summary */}
          <div className="mb-8 text-center">
            <p className="text-white/70">
              Showing {sortedServices.length} of {allServices.length} services
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                  {/* Service Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.type === 'AI Services' 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {service.type}
                    </span>
                  </div>

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                        <Star className="w-3 h-3 inline mr-1" />
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className="text-center mb-6 mt-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} text-3xl`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{service.tagline}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white mb-1">
                      {service.price}
                      <span className="text-lg text-white/60">{service.period}</span>
                    </div>
                    <p className="text-white/60 text-sm">
                      {service.trialDays}-day free trial • Setup in {service.setupTime}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/80 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Market Info */}
                  <div className="mb-6 p-4 bg-white/5 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-white/60">Market Size</p>
                        <p className="text-white font-medium">{service.marketSize}</p>
                      </div>
                      <div>
                        <p className="text-white/60">Growth Rate</p>
                        <p className="text-white font-medium">{service.growthRate}</p>
                      </div>
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-sm text-white/60 mb-1">Expected ROI</p>
                    <p className="text-green-400 font-semibold">{service.roi}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-white/20 hover:border-white/40 rounded-lg font-semibold text-white transition-all duration-300 hover:bg-white/10"
                    >
                      <Mail className="w-4 h-4" />
                      Contact Sales
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/70 mb-6">Try adjusting your filters or search terms</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedServiceType('All');
                  setSearchTerm('');
                  setPriceRange({ min: 0, max: Infinity });
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our comprehensive suite of AI services, IT solutions, and micro SAAS platforms 
              is designed to accelerate your digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Phone</h3>
                <p className="text-white/70">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-white/70">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Address</h3>
                <p className="text-white/70">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}