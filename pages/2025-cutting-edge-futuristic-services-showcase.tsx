import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, ArrowRight, Check,
  Star, TrendingUp, Zap, Globe
} from 'lucide-react';
import { cuttingEdgeFuturisticServices } from '../data/2025-cutting-edge-futuristic-services';

// Helper function to get service category
const getServiceCategory = (service: { category?: string; type?: string }) => {
  if (service.category) return service.category;
  if (service.type) return service.type;
  return 'Other';
};



// Helper function to get service features
const getServiceFeatures = (service: { features?: string[]; keyFeatures?: string[] }) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: { description?: string; tagline?: string }) => {
  if (service.description) return service.description;
  if (service.tagline) return service.tagline;
  return 'No description available';
};

const CuttingEdgeFuturisticServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(cuttingEdgeFuturisticServices.map(service => getServiceCategory(service))))];

  // Filter and sort services
  const filteredServices = cuttingEdgeFuturisticServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || getServiceCategory(service) === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price': {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return priceA - priceB;
        }
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'popularity':
        default:
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      }
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Cutting-Edge Futuristic Services Showcase | Zion Tech Group"
        description="Discover our revolutionary cutting-edge futuristic services including quantum AI, autonomous systems, holographic technology, and more. Transform your business with next-generation solutions."
                keywords="cutting-edge services, futuristic technology, quantum AI, autonomous systems, holographic technology, AI automation, quantum computing, neural interfaces"
        ogImage="/og-cutting-edge-services.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Cutting-Edge
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Futuristic Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary services that combine quantum computing, 
              autonomous AI, holographic technology, and neural interfaces to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>Revolutionary Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <span>Quantum Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                <span>Autonomous AI</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-400" />
                <span>Holographic Reality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search cutting-edge services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'rating' | 'popularity')}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price">Price: Low to High</option>
                <option value="name">Name: A to Z</option>
              </select>

              {/* View Mode */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
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
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group ${
                  viewMode === 'grid'
                    ? 'bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105'
                    : 'bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300'
                }`}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-400">{getServiceCategory(service)}</p>
                    </div>
                  </div>
                  {service.popular && (
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                {/* Service Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {getServiceDescription(service)}
                </p>

                {/* Service Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {getServiceFeatures(service).slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {getServiceFeatures(service).length > 3 && (
                      <p className="text-xs text-gray-500 mt-1">
                        +{getServiceFeatures(service).length - 3} more features
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="text-center">
                    <p className="text-gray-400">Rating</p>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                      <span className="text-gray-500">({service.reviews})</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400">Customers</p>
                    <p className="text-white font-semibold">{service.customers.toLocaleString()}</p>
                  </div>
                </div>

                {/* Service Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-white">{service.price}</p>
                    <p className="text-sm text-gray-400">{service.period}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Trial</p>
                    <p className="text-white font-semibold">{service.trialDays} days</p>
                  </div>
                </div>

                {/* Innovation Level */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-400">Innovation Level:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      service.innovationLevel === 'Revolutionary' ? 'bg-red-500/20 text-red-400' :
                      service.innovationLevel === 'Breakthrough' ? 'bg-orange-500/20 text-orange-400' :
                      service.innovationLevel === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                </div>

                {/* Market Position */}
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">Market Position</p>
                  <p className="text-sm text-white">{service.marketPosition}</p>
                </div>

                {/* ROI */}
                <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <p className="text-xs text-green-400 mb-1">ROI Impact</p>
                  <p className="text-sm text-green-300">{service.roi}</p>
                </div>

                {/* Action Button */}
                <a
                  href={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:transform hover:scale-105 hover:shadow-lg"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-2">Contact Zion Tech Group</p>
                    <div className="flex flex-col gap-1 text-xs text-gray-300">
                      <p>📱 {service.contactInfo.mobile}</p>
                      <p>✉️ {service.contactInfo.email}</p>
                      <p>📍 {service.contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our cutting-edge futuristic services. 
              Get in touch to discuss how we can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:transform hover:scale-105 hover:shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl border border-white/20 transition-all duration-200 hover:transform hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CuttingEdgeFuturisticServicesShowcase;