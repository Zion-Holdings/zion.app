import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Star, Users, TrendingUp, Clock, Zap
} from 'lucide-react';

// Import our new advanced services
import { advanced2025MicroSaasExpansionV2 } from '../data/2025-advanced-micro-saas-expansion-v2';
import { advanced2025ITSolutionsExpansionV2 } from '../data/2025-advanced-it-solutions-expansion-v2';
import { advanced2025AIServicesExpansionV2 } from '../data/2025-advanced-ai-services-expansion-v2';

// Combine all services
const allAdvancedServices = [
  ...advanced2025MicroSaasExpansionV2,
  ...advanced2025ITSolutionsExpansionV2,
  ...advanced2025AIServicesExpansionV2
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of advanced services'
  },
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-500',
    description: 'Advanced artificial intelligence and machine learning solutions'
  },
  {
    id: 'it-solutions',
    name: 'IT & Infrastructure',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Enterprise IT solutions and infrastructure services'
  },
  {
    id: 'quantum-tech',
    name: 'Quantum Computing',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Cutting-edge quantum computing solutions'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Advanced security and threat protection'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions and tools'
  }
];

const AdvancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Filter and sort services
  const filteredServices = allAdvancedServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        (selectedCategory === 'ai-services' && service.category.includes('AI')) ||
        (selectedCategory === 'it-solutions' && service.category.includes('IT')) ||
        (selectedCategory === 'quantum-tech' && service.category.includes('Quantum')) ||
        (selectedCategory === 'cybersecurity' && service.category.includes('Security')) ||
        (selectedCategory === 'micro-saas' && service.category.includes('SAAS'));
      
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
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

  const getServiceFeatures = (service: any) => {
    if (service.features) return service.features;
    return [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Advanced Services Showcase 2025 | Zion Tech Group"
        description="Discover our comprehensive portfolio of advanced AI, IT, and micro SAAS services. Cutting-edge solutions for modern businesses."
        keywords={['AI services', 'IT solutions', 'micro SAAS', 'quantum computing', 'cybersecurity', 'machine learning']}
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
              Advanced Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Showcase 2025
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Discover our comprehensive portfolio of cutting-edge AI, IT, and micro SAAS services. 
              Real solutions for real businesses, built with innovation and intelligence.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-green-400">
                <Check className="w-5 h-5" />
                <span>50+ Advanced Services</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Users className="w-5 h-5" />
                <span>2,000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <TrendingUp className="w-5 h-5" />
                <span>Industry Leading ROI</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Quick Setup & Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>Proven Track Record</span>
              </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+13024640950"
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
              <a 
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                🌐 ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Controls */}
        <div className="mb-8 space-y-4">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Categories and Sort */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    {category.name}
                  </div>
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>
        </div>

        {/* Services Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${viewMode}-${sortBy}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded mr-2 mb-2">
                        {getServiceCategory(service)}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                          />
                        ))}
                        <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                      </div>
                      <span className="text-gray-400 text-sm">{service.customers} customers</span>
                    </div>
                    
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">{service.icon}</div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            <p className="text-gray-400 text-sm">{service.tagline}</p>
                          </div>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">
                              POPULAR
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                            {getServiceCategory(service)}
                          </span>
                          <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">
                            {service.trialDays} day trial
                          </span>
                          <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded">
                            {service.setupTime} setup
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                                />
                              ))}
                              <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                            </div>
                            <span className="text-gray-400 text-sm">{service.customers} customers</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                            <div className="text-gray-400 text-sm">{service.period}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 w-fit"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement the perfect solution for your business needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">24/7 Support Available</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Learn More About Our Services</p>
            </div>
          </div>
          
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Office Address</h3>
            <p className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="text-gray-400 text-sm">United States</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            <p className="mt-2">
              Advanced AI, IT, and Micro SAAS Solutions for Modern Businesses
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdvancedServicesShowcase2025;