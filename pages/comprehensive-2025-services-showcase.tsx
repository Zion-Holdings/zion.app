import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Star, Users, TrendingUp, Zap, Globe
} from 'lucide-react';

// Import our new service data
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';

const Comprehensive2025ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices = [
    ...advancedAIAutomationServices2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeMicroSaasSolutions2025,
    ...cuttingEdgeAIServices2025
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.customers - a.customers;
        default:
          return 0;
      }
    });

  const categories = ['all', 'AI Automation', 'IT Infrastructure', 'Micro SAAS', 'AI Services'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <SEO 
        title="Comprehensive 2025 Services Showcase | Zion Tech Group"
        description="Explore our comprehensive range of innovative micro SAAS services, IT infrastructure solutions, and cutting-edge AI services. Transform your business with Zion Tech Group."
        keywords={["micro SAAS", "IT services", "AI services", "business automation", "cloud infrastructure", "Zion Tech Group"]}
        url="https://ziontechgroup.com/comprehensive-2025-services-showcase"
      />

      {/* Header Section */}
      <header className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium">
              <Star className="w-4 h-4" />
              <span>2025 Innovation Showcase</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our complete portfolio of innovative micro SAAS services, cutting-edge IT infrastructure solutions, and advanced AI services designed to transform your business.
            </p>
            
            {/* Contact Information */}
            <div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Get Started Today</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">ziontechgroup.com</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-green-400" />
                  <span>Mobile: <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-purple-400" />
                  <span>Address: 364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Service Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive service portfolio covers every aspect of modern business technology needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Automation Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Automation Services</h3>
              <p className="text-gray-300 text-sm mb-4">
                Intelligent automation solutions that streamline operations and boost productivity
              </p>
              <div className="text-cyan-400 font-semibold">
                Starting at $199/month
              </div>
            </motion.div>

            {/* IT Infrastructure Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-white mb-2">IT Infrastructure Services</h3>
              <p className="text-gray-300 text-sm mb-4">
                Robust infrastructure solutions for modern digital businesses
              </p>
              <div className="text-cyan-400 font-semibold">
                Starting at $499/month
              </div>
            </motion.div>

            {/* Micro SAAS Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Micro SAAS Solutions</h3>
              <p className="text-gray-300 text-sm mb-4">
                Specialized software solutions for specific business needs
              </p>
              <div className="text-cyan-400 font-semibold">
                Starting at $69/month
              </div>
            </motion.div>

            {/* Cutting-Edge AI Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-6 hover:border-orange-400/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI Services</h3>
              <p className="text-gray-300 text-sm mb-4">
                Next-generation AI solutions for competitive advantage
              </p>
              <div className="text-cyan-400 font-semibold">
                Starting at $179/month
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-black'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>

            {/* Sort and View */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="popularity">Sort by Popularity</option>
              </select>

              <div className="flex bg-gray-800/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'list' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">
              {filteredServices.length} Services Found
            </h3>
            <p className="text-gray-400">
              Showing results for "{searchTerm}" in {selectedCategory === 'all' ? 'all categories' : selectedCategory}
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    {service.popular && (
                      <span className="px-2 py-1 bg-cyan-500 text-black text-xs font-semibold rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span>⭐ {service.rating}</span>
                      <span>•</span>
                      <span>{service.reviews} reviews</span>
                      <span>•</span>
                      <span>{service.customers} customers</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-300 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Check className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-300 mb-2">ROI Benefits:</div>
                    <div className="text-sm text-cyan-400">{service.roi}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                      {service.category}
                    </span>
                    <a
                      href={service.link}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="text-4xl mb-2">{service.icon}</div>
                      {service.popular && (
                        <span className="px-2 py-1 bg-cyan-500 text-black text-xs font-semibold rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-semibold text-white mb-2">{service.name}</h4>
                          <p className="text-gray-300 mb-2">{service.tagline}</p>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                        
                        <div className="mt-4 lg:mt-0 lg:ml-6">
                          <div className="text-3xl font-bold text-cyan-400 mb-1">
                            {service.price}
                            <span className="text-sm text-gray-400">{service.period}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                            <span>⭐ {service.rating}</span>
                            <span>•</span>
                            <span>{service.reviews} reviews</span>
                            <span>•</span>
                            <span>{service.customers} customers</span>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                            {service.category}
                          </span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="text-sm text-gray-300 mb-2">Key Features:</div>
                          <div className="space-y-1">
                            {service.features.slice(0, 5).map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                <Check className="w-3 h-3 text-green-400" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-300 mb-2">ROI Benefits:</div>
                          <div className="text-sm text-cyan-400 mb-4">{service.roi}</div>
                          
                          <div className="text-sm text-gray-300 mb-2">Market Position:</div>
                          <div className="text-sm text-gray-400 mb-4">{service.marketPosition}</div>
                          
                          <a
                            href={service.link}
                            className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our innovative services to drive growth and efficiency
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>Visit us at: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Comprehensive2025ServicesShowcase;