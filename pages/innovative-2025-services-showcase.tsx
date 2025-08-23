import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Grid, List, Star, ArrowRight, Phone, Mail, MapPin,
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud, Zap, TrendingUp,
  Users, Award, Heart, Target, Sparkles, Eye, Globe, Lock
} from 'lucide-react';
import Link from 'next/link';
import SEO from '../components/SEO';

// Import our new innovative services
import { innovative2025AdvancedServices } from '../data/innovative-2025-advanced-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const ServiceCard = ({ service, index, viewMode }: { service: any; index: number; viewMode: 'grid' | 'list' }) => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return <Brain className="w-6 h-6" />;
    if (category.includes('Quantum')) return <Atom className="w-6 h-6" />;
    if (category.includes('Space')) return <Rocket className="w-6 h-6" />;
    if (category.includes('Security')) return <Shield className="w-6 h-6" />;
    if (category.includes('Cloud')) return <Cloud className="w-6 h-6" />;
    if (category.includes('DevOps')) return <Cpu className="w-6 h-6" />;
    if (category.includes('Data')) return <Database className="w-6 h-6" />;
    return <Zap className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'from-purple-400 to-pink-500';
    if (category.includes('Quantum')) return 'from-cyan-400 to-blue-500';
    if (category.includes('Space')) return 'from-indigo-400 to-purple-500';
    if (category.includes('Security')) return 'from-red-400 to-orange-500';
    if (category.includes('Cloud')) return 'from-blue-400 to-cyan-500';
    if (category.includes('DevOps')) return 'from-green-400 to-emerald-500';
    if (category.includes('Data')) return 'from-yellow-400 to-orange-500';
    return 'from-gray-400 to-gray-600';
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative"
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20`}></div>
        <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/25">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                {getCategoryIcon(service.category)}
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{service.tagline}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>Setup: {service.setupTime}</span>
                  <span>Trial: {service.trialDays} days</span>
                  <span>Market: {service.marketSize}</span>
                </div>
                <Link 
                  href={service.link}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20`}></div>
      <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full group-hover:shadow-2xl group-hover:shadow-cyan-500/25">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            {getCategoryIcon(service.category)}
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-300">{service.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
        <p className="text-cyan-400 text-sm font-medium mb-3">{service.tagline}</p>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
        
        <div className="space-y-3 mb-6">
          {service.features.slice(0, 3).map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="mb-6">
          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
        </div>

        <div className="space-y-3 mb-6 text-xs text-gray-400">
          <div className="flex justify-between">
            <span>Setup Time:</span>
            <span>{service.setupTime}</span>
          </div>
          <div className="flex justify-between">
            <span>Trial:</span>
            <span>{service.trialDays} days</span>
          </div>
          <div className="flex justify-between">
            <span>Market Size:</span>
            <span>{service.marketSize}</span>
          </div>
        </div>

        <Link 
          href={service.link}
          className="block w-full text-center py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

const Innovative2025ServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'category'>('name');
  const [isLoading, setIsLoading] = useState(true);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(innovative2025AdvancedServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = innovative2025AdvancedServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price': {
          const aPrice = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const bPrice = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return aPrice - bPrice;
        }
        case 'rating':
          return b.rating - a.rating;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">Loading Innovative 2025 Services...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Innovative 2025 Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2025 technology solutions including AI, Quantum Computing, Space Technology, and more. Transform your business with future-ready solutions."
        keywords={["AI services", "quantum computing", "space technology", "cybersecurity", "cloud solutions", "2025 technology", "Zion Tech Group"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Header Section */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Innovative{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  2025 Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive portfolio of cutting-edge technology solutions designed to drive your business into the future. 
                From AI and Quantum Computing to Space Technology and beyond.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore Our{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Service Portfolio
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the perfect solution for your business needs with our advanced search and filtering capabilities
              </p>
            </motion.div>

            {/* Search and Controls */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col lg:flex-row gap-6 mb-12"
            >
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Sort and View Controls */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8"
            >
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                  <option value="category">Category</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-gray-300">View:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-400 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-400 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-gray-300">
                Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
                <span className="text-cyan-400 font-semibold">{innovative2025AdvancedServices.length}</span> services
              </p>
            </motion.div>

            {/* Services Grid/List */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  viewMode={viewMode}
                />
              ))}
            </motion.div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or category filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's discuss how our innovative solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Innovative2025ServicesShowcase;