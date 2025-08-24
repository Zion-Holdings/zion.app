import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, Users, Award, TrendingUp,
  Brain, Atom, Shield, Target, Rocket, ArrowRight, Check, 
  Palette, Heart, Truck, GraduationCap, Building, Cpu, Globe,
  Zap, Eye, Clock, MessageCircle, Code, Cloud, Settings, Network
} from 'lucide-react';

// Import all service data
import { innovative2037MicroSaasExpansions } from '../data/innovative-2037-micro-saas-expansions';
import { innovative2037ITServicesExpansions } from '../data/innovative-2037-it-services-expansions';
import { innovative2037AIServicesExpansions } from '../data/innovative-2037-ai-services-expansions';

const allServices = [
  ...innovative2037MicroSaasExpansions,
  ...innovative2037ITServicesExpansions,
  ...innovative2037AIServicesExpansions
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of revolutionary services'
  },
  {
    id: 'ai-consciousness',
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Revolutionary AI consciousness and quantum intelligence'
  },
  {
    id: 'quantum-tech',
    name: 'Quantum Technology',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Quantum computing and breakthrough technologies'
  },
  {
    id: 'autonomous-systems',
    name: 'Autonomous Systems',
    icon: <Settings className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Self-managing intelligent systems'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions'
  },
  {
    id: 'it-infrastructure',
    name: 'IT & Infrastructure',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Enterprise infrastructure and cloud solutions'
  }
];

const Revolutionary2038ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.customers - a.customers;
      default:
        return 0;
    }
  });

  const getServiceCategory = (service: any) => {
    if (service.category) return service.category;
    return 'Other';
  };

  const getServicePricing = (service: any) => {
    if (service.price) return `${service.price}${service.period}`;
    return 'Contact for pricing';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900">
      <SEO 
        title="Revolutionary 2038 Services Showcase | Zion Tech Group"
        description="Explore our revolutionary 2038 services featuring quantum AI consciousness, autonomous systems, and cutting-edge micro SAAS solutions that transform businesses worldwide."
        keywords={["quantum AI", "consciousness technology", "autonomous systems", "micro SAAS", "2038 services", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionary 2038
            <br />
            Services Showcase
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of technology with our revolutionary quantum AI consciousness, 
            autonomous systems, and cutting-edge micro SAAS solutions that transform businesses worldwide.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: Brain, title: "18", description: "Revolutionary Services", color: "cyan" },
              { icon: Users, title: "1,200+", description: "Happy Clients", color: "blue" },
              { icon: Award, title: "99.9%", description: "Satisfaction Rate", color: "purple" },
              { icon: TrendingUp, title: "200+", description: "Industries Served", color: "emerald" }
            ].map((stat, index) => (
              <div key={stat.title} className="text-center">
                <div className="relative inline-block mb-4">
                  <stat.icon className={`w-12 h-12 mx-auto text-${stat.color}-400`} />
                  <div className={`absolute inset-0 w-12 h-12 bg-${stat.color}-400/20 rounded-full blur-xl`}></div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.title}</div>
                <div className="text-gray-400">{stat.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search revolutionary services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {category.icon}
                      <span>{category.name}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* View Mode and Sort */}
              <div className="flex items-center space-x-4">
                <div className="flex bg-gray-700/50 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price">Price</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          {sortedServices.length === 0 ? (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Brain className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{service.icon}</div>
                        {service.popular && (
                          <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-400 mb-4 line-clamp-3">{service.description}</p>
                      
                      <div className="text-2xl font-bold text-cyan-400 mb-4">{getServicePricing(service)}</div>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-cyan-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>⭐ {service.rating} ({service.reviews})</span>
                        <span>👥 {service.customers.toLocaleString()}</span>
                      </div>
                      
                      <Link
                        href={service.link}
                        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ) : (
                    // List View
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{service.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-400">{service.description}</p>
                          </div>
                        </div>
                        {service.popular && (
                          <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Pricing</div>
                          <div className="text-lg font-bold text-cyan-400">{getServicePricing(service)}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Rating</div>
                          <div className="text-lg font-bold text-white">⭐ {service.rating} ({service.reviews})</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Customers</div>
                          <div className="text-lg font-bold text-white">{service.customers.toLocaleString()}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          href={service.link}
                          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center p-12 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-3xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of companies already leveraging our revolutionary quantum AI, 
                consciousness technology, and autonomous solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Revolutionary2038ServicesShowcase;