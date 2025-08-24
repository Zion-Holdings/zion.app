import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Shield, Zap, Target, Star,
  ArrowRight, Check, TrendingUp, Users, Globe, Cpu,
  Database, Cloud, Lock, Settings, Eye, Award, Clock,
  Filter, Search, Grid, List, ChevronDown, Sparkles
} from 'lucide-react';

// Import our comprehensive service data
import { comprehensive2037Services } from '../data/comprehensive-2037-innovative-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20`}></div>
    <div className={`relative bg-gradient-to-r ${service.color} bg-opacity-10 border border-opacity-30 rounded-2xl p-8 hover:border-opacity-50 transition-all duration-300 h-full backdrop-blur-sm`}>
      <div className="flex items-start justify-between mb-6">
        <div className="text-4xl">{service.icon}</div>
        {service.popular && (
          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
            Popular
          </span>
        )}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
      <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.description}</p>
      
      <div className="space-y-3 mb-6">
        {service.features.slice(0, 4).map((feature: string, idx: number) => (
          <div key={idx} className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-3xl font-bold text-white">{service.price}</span>
          <span className="text-gray-400 text-sm">{service.period}</span>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} />
            ))}
          </div>
          <span className="text-gray-400 text-xs">{service.rating}/5 ({service.reviews} reviews)</span>
        </div>
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
          <span>Customers:</span>
          <span>{service.customers.toLocaleString()}</span>
        </div>
      </div>
      
      <a 
        href={service.link} 
        className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
      >
        Learn More
      </a>
    </div>
  </motion.div>
);

const ComprehensiveServiceShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  
  const categories = [
    { id: 'all', name: 'All Services', icon: <Star className="w-5 h-5" />, count: comprehensive2037Services.length },
    { id: 'ai', name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, count: comprehensive2037Services.filter(s => s.category === 'AI & Consciousness').length },
    { id: 'quantum', name: 'Quantum Technology', icon: <Atom className="w-5 h-5" />, count: comprehensive2037Services.filter(s => s.category === 'Quantum Technology').length },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" />, count: comprehensive2037Services.filter(s => s.category === 'Space Technology').length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Zap className="w-5 h-5" />, count: comprehensive2037Services.filter(s => s.category === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: <Cpu className="w-5 h-5" />, count: comprehensive2037Services.filter(s => s.category === 'IT Infrastructure').length }
  ];

  const filteredServices = comprehensive2037Services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category.toLowerCase().includes(activeCategory);
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Futuristic Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.section 
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
          {...fadeInUp}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>2037 Innovative Services</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Future of Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover revolutionary AI consciousness, quantum computing, space technology, and autonomous systems that will transform the future of business and technology.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2 text-cyan-400">
                  <span>📱</span>
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2 text-purple-400">
                  <span>✉️</span>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2 text-pink-400">
                  <span>📍</span>
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Filters and Controls */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              {/* Search and View Controls */}
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6 mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-gray-800/50 text-gray-400 hover:text-white'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-gray-800/50 text-gray-400 hover:text-white'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="customers">Sort by Customers</option>
                  </select>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Grid */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 pb-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-7xl mx-auto">
            {sortedServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            ) : (
              <div className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {sortedServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            )}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 pb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss how our innovative 2037 technology solutions can drive your success and position you at the forefront of the future.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Get Started Today
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Call {contactInfo.mobile}
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ComprehensiveServiceShowcase;