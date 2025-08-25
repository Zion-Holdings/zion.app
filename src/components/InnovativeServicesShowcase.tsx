import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  location?: string;
  availability?: string;
  demoUrl?: string;
  documentationUrl?: string;
  technology?: string[];
  integrations?: string[];
  compliance?: string[];
  scalability?: string;
  deployment?: string;
  roi?: string;
  timeToValue?: string;
}

export const InnovativeServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'aiScore'>('aiScore');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(INNOVATIVE_MICRO_SAAS_SERVICES.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES
    .filter(service => 
      selectedCategory === 'All' || service.category === selectedCategory
    )
    .filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return (b.aiScore || 0) - (a.aiScore || 0);
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

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Quantum Computing': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'DevOps & Automation': 'from-blue-500 to-cyan-500',
      'Blockchain': 'from-green-500 to-emerald-500',
      'IoT & Edge Computing': 'from-indigo-500 to-purple-500',
      'Marketing & Sales': 'from-yellow-500 to-orange-500',
      'VR/AR & Training': 'from-pink-500 to-rose-500',
      'Infrastructure': 'from-gray-500 to-slate-500'
    };
    return colors[category] || 'from-cyan-500 to-blue-500';
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Quantum Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      {/* Neural Network Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse"
            style={{
              left: `${(i + 1) * 12.5}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovative
            </span>
            <br />
            <span className="text-white">Micro SAAS Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge micro SAAS services that leverage the latest technologies including AI, 
            Quantum Computing, Blockchain, and IoT to transform your business operations.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-4 mb-12 justify-between items-center"
        >
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search innovative services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-6 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 w-full sm:w-80"
            />
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'aiScore')}
              className="px-6 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            >
              <option value="aiScore">Sort by AI Score</option>
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-xl transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-cyan-500 text-black' 
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-xl transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'bg-cyan-500 text-black' 
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Services Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`group cursor-pointer ${
                viewMode === 'grid' 
                  ? 'p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20' 
                  : 'p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300'
              }`}
              onClick={() => setSelectedService(service)}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                      {service.category}
                    </span>
                    {service.featured && (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Service Metrics */}
              <div className="flex items-center gap-4 mb-4">
                {service.aiScore && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
                      {service.aiScore}
                    </div>
                    <span className="text-xs text-gray-400">AI Score</span>
                  </div>
                )}
                {service.rating && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(service.rating!) ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">({service.reviewCount})</span>
                  </div>
                )}
              </div>

              {/* Service Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Price:</span>
                  <span className="text-2xl font-bold text-cyan-400">
                    {service.currency}{service.price.toLocaleString()}
                    <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Market Price:</span>
                  <span className="text-sm text-gray-300">{service.marketPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Delivery:</span>
                  <span className="text-sm text-gray-300">{service.estimatedDelivery}</span>
                </div>
                {service.roi && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">ROI:</span>
                    <span className="text-sm text-green-400 font-semibold">{service.roi}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-md">
                    {tag}
                  </span>
                ))}
                {service.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-gray-700/50 text-gray-400 rounded-md">
                    +{service.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-700/50 pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Contact:</span>
                  <div className="flex items-center gap-2">
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      {service.contactInfo.phone}
                    </a>
                    <span className="text-gray-600">|</span>
                    <a 
                      href={`mailto:${service.contactInfo.email}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      {service.contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
            <p className="text-gray-400">Try adjusting your search criteria or browse all categories.</p>
          </motion.div>
        )}

        {/* Service Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
            <span className="text-cyan-400 font-semibold">{INNOVATIVE_MICRO_SAAS_SERVICES.length}</span> innovative services
          </p>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl border border-cyan-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(selectedService.category)} text-white`}>
                        {selectedService.category}
                      </span>
                      <span className="px-3 py-1 text-sm font-semibold rounded-full bg-gray-700 text-gray-300">
                        {selectedService.subcategory}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">{selectedService.title}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Service Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedService.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">✓</span>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Business Benefits</h3>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">→</span>
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Use Cases */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Use Cases</h3>
                      <ul className="space-y-2">
                        {selectedService.useCases.map((useCase, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span className="text-gray-300">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Target Audience</h3>
                      <ul className="space-y-2">
                        {selectedService.targetAudience.map((audience, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">👥</span>
                            <span className="text-gray-300">{audience}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack */}
                    {selectedService.technology && (
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Technology Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technology.map((tech, index) => (
                            <span key={index} className="px-3 py-1 text-sm bg-gray-800 text-cyan-400 rounded-md border border-gray-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-700">
                  <a
                    href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.title}`}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-center hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </a>
                  <a
                    href={`tel:${selectedService.contactInfo.phone}`}
                    className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    Call Now
                  </a>
                  {selectedService.demoUrl && (
                    <a
                      href={selectedService.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-xl font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300"
                    >
                      View Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};