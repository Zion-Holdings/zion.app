import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Star, Users, TrendingUp, Globe, Zap
} from 'lucide-react';

// Import our new service data
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const Comprehensive2025ServicesShowcase: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

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
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return b.popular ? 1 : -1;
      }
    });

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  return (
    <>
      <SEO 
        title="Comprehensive 2025 Services Showcase | Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI automation, IT infrastructure, micro SAAS solutions, and cutting-edge AI services. Transform your business with Zion Tech Group's advanced technology solutions."
        keywords={["AI automation", "IT infrastructure", "micro SAAS", "AI services", "business automation", "technology solutions", "Zion Tech Group"]}
        image="https://ziontechgroup.com/og-image-2025-services.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-6xl mx-auto relative z-10 text-center">
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
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Services Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover our cutting-edge AI automation, IT infrastructure, micro SAAS solutions, and advanced AI services designed to transform your business operations and drive exponential growth.
              </p>
              
              {/* Contact Information */}
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Get Started Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.website}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-pink-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-blue-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive portfolio spans four key areas, each designed to address specific business challenges and opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  title: 'AI Automation',
                  description: 'Intelligent automation solutions that streamline operations and boost productivity',
                  icon: Brain,
                  color: 'from-blue-600 to-indigo-600',
                  count: advancedAIAutomationServices2025.length
                },
                {
                  title: 'IT Infrastructure',
                  description: 'Advanced infrastructure solutions for modern digital enterprises',
                  icon: Shield,
                  color: 'from-green-600 to-emerald-600',
                  count: innovativeITInfrastructureServices2025.length
                },
                {
                  title: 'Micro SAAS',
                  description: 'Scalable software solutions for growing businesses',
                  icon: Rocket,
                  color: 'from-orange-600 to-red-600',
                  count: innovativeMicroSaasSolutions2025.length
                },
                {
                  title: 'AI Services',
                  description: 'Cutting-edge AI solutions for next-generation applications',
                  icon: Atom,
                  color: 'from-purple-600 to-pink-600',
                  count: cuttingEdgeAIServices2025.length
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{category.count}</div>
                  <div className="text-xs text-gray-500">Services Available</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price">Price: Low to High</option>
                  <option value="rating">Highest Rated</option>
                  <option value="customers">Most Customers</option>
                </select>

                {/* View Mode */}
                <div className="flex bg-gray-700/50 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredServices.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-semibold mb-2">No services found</h3>
                  <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
                </motion.div>
              ) : (
                <motion.div
                  key={`${viewMode}-${searchTerm}-${selectedCategory}-${sortBy}`}
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
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 ${
                        viewMode === 'list' ? 'p-6' : 'p-6'
                      }`}
                    >
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-2xl">{service.icon}</span>
                            {service.popular && (
                              <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-semibold rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                          <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="space-y-4">
                        <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                        
                        {/* Pricing */}
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-cyan-400">
                            {service.price}
                            <span className="text-sm text-gray-400">{service.period}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400">Rating</div>
                            <div className="flex items-center space-x-1">
                              <span className="text-yellow-400">{service.rating}</span>
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-400">({service.reviews})</span>
                            </div>
                          </div>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                                <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                            {service.features.length > 3 && (
                              <div className="text-xs text-gray-500 mt-1">
                                +{service.features.length - 3} more features
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Market Info */}
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <div className="text-gray-400">Market Size</div>
                            <div className="text-cyan-400 font-semibold">{service.marketSize}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Growth Rate</div>
                            <div className="text-green-400 font-semibold">{service.growthRate}</div>
                          </div>
                        </div>

                        {/* ROI */}
                        <div className="bg-gray-700/30 rounded-lg p-3">
                          <div className="text-xs text-gray-400 mb-1">Expected ROI</div>
                          <div className="text-sm text-green-400 font-semibold">{service.roi}</div>
                        </div>

                        {/* CTA */}
                        <div className="flex space-x-2">
                          <a
                            href={service.link}
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                          >
                            Learn More
                          </a>
                          <a
                            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                            className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                          >
                            Contact
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join hundreds of businesses already leveraging our innovative solutions to drive growth, efficiency, and competitive advantage.
              </p>
              
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-semibold mb-6">Get Started Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                    <h4 className="font-semibold text-cyan-400 mb-2">Contact Information</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div>📱 {contactInfo.mobile}</div>
                      <div>✉️ {contactInfo.email}</div>
                      <div>🏢 {contactInfo.address}</div>
                      <div>🌐 {contactInfo.website}</div>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-purple-400 mb-2">Why Choose Zion Tech Group?</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div>✅ Proven track record</div>
                      <div>✅ 24/7 support</div>
                      <div>✅ Custom solutions</div>
                      <div>✅ Competitive pricing</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Service Inquiry`}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Sales Team
                  </a>
                  <a
                    href={contactInfo.website}
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Comprehensive2025ServicesShowcase;