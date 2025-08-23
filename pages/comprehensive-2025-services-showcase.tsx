import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, Star, Zap, Users, Award, Globe,
  Filter, ChevronDown, ExternalLink, Sparkles, Eye, Clock, CheckCircle, TrendingUp, DollarSign, Phone
} from 'lucide-react';

// Import all service data
import { innovativeMicroSaasServicesExpanded } from '../data/innovative-2025-micro-saas-expanded';
import { innovativeITServicesExpanded } from '../data/innovative-2025-it-services-expanded';
import { innovativeAIServicesExpanded } from '../data/innovative-2025-ai-services-expanded';

const Comprehensive2025ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasServicesExpanded,
    ...innovativeITServicesExpanded,
    ...innovativeAIServicesExpanded
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('SAAS') || s.category.includes('Business')).length },
    { id: 'it', name: 'IT & Infrastructure', icon: <Cpu className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('DevOps')).length },
    { id: 'security', name: 'Security & Compliance', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Compliance')).length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.name.toLowerCase().includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Comprehensive 2025 Services Showcase | Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative micro SAAS, IT, and AI services. Real, market-ready solutions with competitive pricing and proven ROI."
        keywords="micro SAAS, IT services, AI services, cloud computing, cybersecurity, machine learning, predictive analytics, blockchain, quantum computing"
        url="https://ziontechgroup.com/comprehensive-2025-services-showcase"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
          
          {/* Animated grid */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '200px 200px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '200px 200px']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Comprehensive 2025
            <br />
            <span className="text-white">Services Showcase</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our complete portfolio of innovative micro SAAS, IT, and AI services. 
            Real solutions with proven ROI, competitive pricing, and enterprise-grade quality.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 rounded-full text-sm font-semibold">
              {allServices.length}+ Services
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full text-sm font-semibold">
              AI-Powered Solutions
            </div>
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full text-sm font-semibold">
              Enterprise Ready
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 rounded-full text-sm font-semibold">
              Competitive Pricing
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Ready to Get Started?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-cyan-400" />
                <span className="text-xs">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>

                <div className="flex bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchTerm}-${sortBy}-${viewMode}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
              }
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex items-center gap-6' : ''
                  }`}
                >
                  {viewMode === 'list' ? (
                    // List View
                    <>
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}>
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white truncate">{service.name}</h3>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-xs px-2 py-1 rounded-full font-semibold">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{service.tagline}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {service.price}{service.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {service.setupTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            {service.rating} ({service.reviews})
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <a
                          href={service.link}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </>
                  ) : (
                    // Grid View
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}>
                          {service.icon}
                        </div>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-xs px-2 py-1 rounded-full font-semibold">
                            Popular
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.tagline}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Price:</span>
                          <span className="text-white font-semibold">{service.price}{service.period}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Setup:</span>
                          <span className="text-white">{service.setupTime}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Rating:</span>
                          <span className="flex items-center gap-1 text-white">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            {service.rating} ({service.reviews})
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                              <Check className="w-3 h-3 text-cyan-400" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-xs text-cyan-400">
                              +{service.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-semibold text-gray-300">ROI:</h4>
                        <p className="text-xs text-gray-400">{service.roi}</p>
                      </div>

                      <a
                        href={service.link}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our comprehensive portfolio of innovative services is designed to drive growth, 
              improve efficiency, and provide competitive advantages in today's digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-xl font-semibold text-lg hover:bg-gray-700 transition-all duration-200 border border-gray-600"
              >
                <ExternalLink className="w-5 h-5" />
                Email Us
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Visit our website: <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300">{contactInfo.website}</a></p>
              <p className="mt-2">{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Comprehensive2025ServicesShowcase;