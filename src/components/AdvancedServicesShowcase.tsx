import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  useCases: string[];
  integration: string[];
  pricingTier: 'Starter' | 'Professional' | 'Enterprise' | 'Custom';
  website: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
  marketPrice: string;
  deliveryTime: string;
}

export const AdvancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'aiScore'>('aiScore');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices: Service[] = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...SPECIALIZED_IT_SERVICES
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => 
      selectedCategory === 'All' || service.category === selectedCategory
    )
    .filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'price') return a.price.starter - b.price.starter;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // Default sort
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
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Services
            </span>
            <br />
            <span className="text-white">Marketplace</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI services, Micro SAAS solutions, and comprehensive IT services 
            designed to transform your business and drive innovation.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400">
                🔍
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort & View */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'aiScore')}
                className="px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
              >
                <option value="aiScore">Sort by AI Score</option>
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
              </select>

              <div className="flex bg-gray-800/50 rounded-lg p-1 border border-cyan-500/30">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  ⏹️
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  📋
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                className={`group ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 p-6 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20'
                    : 'bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 p-6 transition-all duration-500'
                }`}
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                          {service.category}
                        </span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                          {service.subcategory}
                        </span>
                      </div>
                    </div>
                    {service.status === 'Active' && (
                      <div className="px-2 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs rounded-full font-medium">
                        ✓ Active
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Rating & Status */}
                  <div className="flex items-center gap-4 mb-4">
                    {service.rating && (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400">
                              {i < Math.floor(service.rating) ? '★' : '☆'}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-gray-400">({service.reviewCount} reviews)</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">Status: {service.status}</span>
                    </div>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Pricing & Contact */}
                <div className="border-t border-gray-700/50 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        ${service.price.starter}
                        <span className="text-sm text-gray-400 font-normal ml-1">
                          /month
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">{service.marketPrice}</div>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                      Get Quote
                    </button>
                  </div>

                  {/* Contact Info */}
                  <div className="text-xs text-gray-400 space-y-1">
                    <div>📱 {service.contactInfo.phone}</div>
                    <div>✉️ {service.contactInfo.email}</div>
                    <div>🌐 <a href={service.website} className="text-cyan-400 hover:underline">Visit Website</a></div>
                  </div>
                </div>

                {/* Target Audience */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 4).map((audience, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                    >
                      {audience}
                    </span>
                  ))}
                  {service.targetAudience.length > 4 && (
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-500 text-xs rounded-full">
                      +{service.targetAudience.length - 4}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or category filter.</p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: allServices.length.toString(), label: "Total Services", icon: "🚀" },
              { number: categories.length - 1, label: "Service Categories", icon: "📊" },
              { number: "24/7", label: "Support Available", icon: "🛟" },
              { number: "Global", label: "Service Coverage", icon: "🌍" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedServicesShowcase;