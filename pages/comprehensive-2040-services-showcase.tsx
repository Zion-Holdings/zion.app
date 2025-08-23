import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, TrendingUp, Zap, Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap, Building, Cpu, Globe, Eye, Users
} from 'lucide-react';
import Layout from '../components/layout/Layout';

// Import our new innovative 2040 services
import { innovative2039FuturisticServices } from '../data/innovative-2039-futuristic-services';
import { innovative2040AdvancedSolutions } from '../data/innovative-2040-advanced-solutions';
import { innovative2040ITSolutions } from '../data/innovative-2040-it-solutions';
import { innovative2040MicroSaasSolutions } from '../data/innovative-2040-micro-saas-solutions';

// Create unified services array
const allServices = [
  ...innovative2039FuturisticServices,
  ...innovative2040AdvancedSolutions,
  ...innovative2040ITSolutions,
  ...innovative2040MicroSaasSolutions
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of all 2040 services'
  },
  {
    id: 'ai-consciousness',
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI consciousness and emotional intelligence'
  },
  {
    id: 'quantum-tech',
    name: 'Quantum Technology',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Quantum computing and breakthrough technologies'
  },
  {
    id: 'space-tech',
    name: 'Space Technology',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Space exploration and colonization solutions'
  },
  {
    id: 'enterprise-it',
    name: 'Enterprise IT',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Enterprise solutions and infrastructure'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Innovative business solutions and automation'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Advanced security and threat protection'
  },
  {
    id: 'productivity',
    name: 'Productivity',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    description: 'Productivity and efficiency solutions'
  }
];

const Comprehensive2040ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity' | 'newest'>('popularity');

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'popularity':
          return (b.rating || 0) - (a.rating || 0);
        case 'newest':
          return new Date(b.launchDate || '2025-01-01').getTime() - new Date(a.launchDate || '2025-01-01').getTime();
        default:
          return 0;
      }
    });

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

  return (
    <Layout>
      <SEO 
        title="Comprehensive 2040 Services Showcase - Zion Tech Group"
        description="Explore our revolutionary 2040 technology services including AI consciousness, quantum computing, space technology, and innovative micro SAAS solutions. Pioneering the future of technology."
        keywords={["2040 technology services", "AI consciousness", "quantum computing", "space technology", "micro SAAS", "Zion Tech Group"]}
      />
      
      <main className="relative z-10 pt-8" role="main">
        {/* Hero Section */}
        <section className="text-center py-16 px-4 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Futuristic Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </motion.div>

          <motion.div 
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight tracking-tight"
              variants={fadeInUp}
            >
              2040 Services Showcase
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
            >
              Experience the future of technology with our revolutionary 2040 services. From <span className="text-cyan-400 font-semibold">AI consciousness</span> to <span className="text-purple-400 font-semibold">quantum computing</span> and <span className="text-pink-400 font-semibold">space technology</span>.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-lg"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 text-cyan-400">
                <Star className="w-6 h-6" />
                <span>{allServices.length}+ Revolutionary Services</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <TrendingUp className="w-6 h-6" />
                <span>Cutting-Edge Technology</span>
              </div>
              <div className="flex items-center gap-2 text-pink-400">
                <Zap className="w-6 h-6" />
                <span>Future-Ready Solutions</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Search and Filters */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search revolutionary 2040 services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      {category.icon}
                      <span className="ml-2">{category.name}</span>
                    </button>
                  ))}
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="newest">Newest</option>
                  <option value="name">Name A-Z</option>
                  <option value="price">Price Low-High</option>
                </select>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {filteredServices.length} Revolutionary 2040 Services
              </h2>
              <p className="text-xl text-gray-400">
                Discover the future of technology with our cutting-edge solutions
              </p>
            </motion.div>

            {filteredServices.length === 0 ? (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            ) : (
              <motion.div 
                className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
                }
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className={`group relative ${
                      viewMode === 'grid' 
                        ? 'bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105'
                        : 'bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300'
                    }`}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                          POPULAR
                        </span>
                      </div>
                    )}

                    {/* Service Icon */}
                    <div className="text-4xl mb-4">{service.icon}</div>

                    {/* Service Name */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {service.tagline}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-cyan-400">
                        {service.price}
                      </span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                            <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-sm text-cyan-400">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Category */}
                    <div className="mb-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        service.category === 'AI & Consciousness' ? 'bg-cyan-500/20 text-cyan-300' :
                        service.category === 'Quantum Technology' ? 'bg-purple-500/20 text-purple-300' :
                        service.category === 'Space Technology' ? 'bg-orange-500/20 text-orange-300' :
                        service.category === 'Enterprise IT' ? 'bg-blue-500/20 text-blue-300' :
                        service.category === 'Micro SAAS' ? 'bg-green-500/20 text-green-300' :
                        'bg-gray-500/20 text-gray-300'
                      }`}>
                        {service.category}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => window.open(service.link, '_blank')}
                      className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10"></div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us to learn more about our revolutionary 2040 services and how they can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </button>
                <button
                  onClick={() => window.location.href = '/pricing'}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Comprehensive2040ServicesShowcase;