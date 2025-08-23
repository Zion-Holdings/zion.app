import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, Clock, Users, TrendingUp,
  Brain, Atom, Shield, Target, Rocket, ArrowRight, Check, 
  Palette, Heart, Truck, GraduationCap, Building, Zap, Globe,
  Lock, Database, Cloud, Cpu, Smartphone, BarChart3
} from 'lucide-react';

// Import our new comprehensive service data
import { advancedEnterpriseSolutions } from '../data/2025-advanced-enterprise-solutions-expansion';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions-expansion';
import { cuttingEdgeITServices } from '../data/2025-cutting-edge-it-ai-services-expansion';

const ComprehensiveServicesShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Combine all services
  const allServices = [
    ...advancedEnterpriseSolutions,
    ...innovativeMicroSaasSolutions2025,
    ...cuttingEdgeITServices
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return 0;
      }
    });

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('ai')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.name.toLowerCase().includes('quantum')).length },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('enterprise')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Target className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('micro') || s.category.toLowerCase().includes('saas')).length },
    { id: 'it', name: 'IT Infrastructure', icon: <Cpu className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('it') || s.category.toLowerCase().includes('infrastructure')).length },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('security') || s.category.toLowerCase().includes('cyber')).length },
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('cloud') || s.category.toLowerCase().includes('devops')).length },
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('data') || s.category.toLowerCase().includes('analytics')).length },
    { id: 'marketing', name: 'Marketing & Sales', icon: <TrendingUp className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('marketing') || s.category.toLowerCase().includes('sales')).length }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'ai': 'from-cyan-500 to-blue-500',
      'quantum': 'from-purple-500 to-pink-500',
      'enterprise': 'from-blue-500 to-indigo-500',
      'micro-saas': 'from-orange-500 to-red-500',
      'it': 'from-green-500 to-emerald-500',
      'security': 'from-red-500 to-pink-500',
      'cloud': 'from-blue-500 to-cyan-500',
      'data': 'from-indigo-500 to-purple-500',
      'marketing': 'from-pink-500 to-rose-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Services Showcase | Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Cutting-edge solutions for modern businesses."
        keywords={["micro SAAS", "IT services", "AI services", "quantum computing", "enterprise solutions", "cloud infrastructure", "cybersecurity", "data analytics"]}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                2025 Comprehensive
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge portfolio of innovative micro SAAS, enterprise IT solutions, and revolutionary AI services. 
              Built for the future, delivered today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
              <div className="text-gray-400">Innovative Services</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-400">Technology Categories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              
              <div className="flex gap-4 items-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price">Price: Low to High</option>
                  <option value="name">Name A-Z</option>
                </select>
                
                <div className="flex bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent'
                      : 'bg-white/10 text-gray-300 border-gray-600 hover:bg-white/20'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Services Grid/List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${viewMode}-${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
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
                  className={`bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${
                    viewMode === 'list' ? 'flex items-center gap-6' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{service.icon}</div>
                        {service.popular && (
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-2 py-1 rounded-full font-semibold">
                            Popular
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">{service.price}<span className="text-sm text-gray-400">{service.period}</span></div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {service.setupTime}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </>
                  ) : (
                    // List View
                    <>
                      <div className="text-4xl">{service.icon}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-2 py-1 rounded-full font-semibold">
                              Popular
                            </div>
                          )}
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {service.setupTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {service.customers} customers
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-current" />
                            {service.rating} ({service.reviews} reviews)
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}<span className="text-sm text-gray-400">{service.period}</span></div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                          >
                            Learn More
                          </motion.button>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {/* Services Grid/List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${viewMode}-${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
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
                  className={`bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${
                    viewMode === 'list' ? 'flex items-center gap-6' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{service.icon}</div>
                        {service.popular && (
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-2 py-1 rounded-full font-semibold">
                            Popular
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">{service.price}<span className="text-sm text-gray-400">{service.period}</span></div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {service.setupTime}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </>
                  ) : (
                    // List View
                    <>
                      <div className="text-4xl">{service.icon}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-2 py-1 rounded-full font-semibold">
                              Popular
                            </div>
                          )}
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {service.setupTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {service.customers} customers
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            {service.rating} ({service.reviews} reviews)
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}<span className="text-sm text-gray-400">{service.period}</span></div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filters.</p>
            </motion.div>
          )}
>>>>>>> origin/main
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our comprehensive suite of innovative services is designed to accelerate your digital transformation 
              and drive measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule a Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Contact Sales Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-black/40">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">✉️</div>
              <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="text-lg font-semibold text-white mb-2">Website</h4>
              <p className="text-cyan-400">ziontechgroup.com</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;