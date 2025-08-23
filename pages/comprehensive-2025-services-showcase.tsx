import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  ArrowRight, Check,
  Building, Globe, Zap, Users
} from 'lucide-react';

// Import our new service data
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';

const Comprehensive2025ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices = [
    ...advancedAIAutomationServices2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeMicroSaasSolutions2025,
    ...cuttingEdgeAIServices2025,
    ...realMicroSaasServices,
    ...innovativeAIServices,
    ...enterpriseITServices
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name': {
          return a.name.localeCompare(b.name);
        }
        case 'price': {
          const priceA = typeof a.price === 'string' ? parseFloat(a.price.replace(/[^0-9.]/g, '')) : (a.price?.monthly || 0);
          const priceB = typeof b.price === 'string' ? parseFloat(b.price.replace(/[^0-9.]/g, '')) : (b.price?.monthly || 0);
          return priceA - priceB;
        }
        case 'rating': {
          return b.rating - a.rating;
        }
        case 'popularity': {
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        }
        default:
          return 0;
      }
    });

  const getServiceIcon = (service: any) => {
    if (service.icon) return service.icon;
    switch (service.category) {
      case 'AI Automation':
        return '🤖';
      case 'IT Infrastructure':
        return '🏗️';
      case 'Micro SAAS':
        return '💻';
      case 'AI Services':
        return '🧠';
      default:
        return '⚡';
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <SEO 
        data={{
          pageTitle: "Comprehensive 2025 Services Showcase - Zion Tech Group",
          pageDescription: "Explore our comprehensive portfolio of innovative AI automation, IT infrastructure, micro SAAS solutions, and cutting-edge AI services. Transform your business with Zion Tech Group.",
          pageKeywords: ["AI automation", "IT infrastructure", "micro SAAS", "AI services", "business solutions", "technology services"]
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2025 Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of innovative AI automation, IT infrastructure, micro SAAS solutions, and cutting-edge AI services designed to transform your business.
            </p>
            
            {/* Contact Information */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Contact Zion Tech Group</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">ziontechgroup.com</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>Mobile: <a href="tel:+13024640950" className="text-purple-400 hover:underline">+1 302 464 0950</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-pink-400" />
                  <span>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:underline">kleber@ziontechgroup.com</a></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-green-400" />
                  <span>Address: 364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-black'
                      : 'bg-black/30 text-gray-300 hover:bg-black/50 border border-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-black/30 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="popularity">Sort by Popularity</option>
              </select>
              
              <div className="flex bg-black/30 border border-gray-600 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-gray-400 text-center">
              Discover innovative solutions across AI automation, IT infrastructure, micro SAAS, and cutting-edge AI services
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{getServiceIcon(service)}</div>
                      {service.popular && (
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>

                    {/* Service Info */}
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {service.tagline}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">
                        {typeof service.price === 'string' ? service.price : `$${service.price?.monthly || 0}`}
                      </span>
                      <span className="text-gray-400">
                        {typeof service.price === 'string' ? ((service as any).period || '/month') : '/month'}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-400">
                            <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
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

                    {/* Service Details */}
                    <div className="space-y-2 text-xs text-gray-400 mb-4">
                      <div className="flex justify-between">
                        <span>Category:</span>
                        <span className="text-cyan-400">{service.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Setup Time:</span>
                        <span>{(service as any).setupTime || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rating:</span>
                        <span className="text-yellow-400">{service.rating}/5.0 ({service.reviews} reviews)</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.link}
                      className="block w-full text-center py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 inline ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{getServiceIcon(service)}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          {service.popular && (
                            <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                              POPULAR
                            </span>
                          )}
                          <span className="text-2xl font-bold text-cyan-400">
                            {typeof service.price === 'string' ? service.price : `$${service.price?.monthly || 0}`}
                          </span>
                          <span className="text-gray-400">
                            {typeof service.price === 'string' ? ((service as any).period || '/month') : '/month'}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-3">{service.tagline}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>Category: <span className="text-cyan-400">{service.category}</span></span>
                        <span>Setup: {(service as any).setupTime || 'N/A'}</span>
                        <span>Rating: <span className="text-yellow-400">{service.rating}/5.0</span></span>
                      </div>
                    </div>
                    <a
                      href={service.link}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact Zion Tech Group today to discuss how our innovative services can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Comprehensive2025ServicesShowcase;