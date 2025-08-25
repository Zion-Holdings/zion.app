import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  TrendingUp,
  Globe,
  Code,
  Database,
  Cloud,
  Brain,
  Lock,
  BarChart3,
  DollarSign,
  Rocket,
  Sparkles,
  Cpu,
  Network,
  Eye,
  Bot
} from 'lucide-react';
import { ENHANCED_MICRO_SAAS_SERVICES, ENHANCED_SAAS_CATEGORIES } from '../data/enhancedMicroSaasServices';
import { INNOVATIVE_SERVICES, INNOVATIVE_SERVICE_CATEGORIES } from '../data/innovativeServices';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: {
    monthly: number;
    yearly: number;
    enterprise: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  useCases: string[];
  integration: string[];
  pricingTier: string;
  website: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: string;
  marketPrice: string;
  estimatedDelivery: string;
  supportLevel: string;
  aiScore?: number;
  innovationScore?: number;
  tags: string[];
}

const EnhancedServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingTier, setSelectedPricingTier] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Combine all services
  const allServices: Service[] = [
    ...ENHANCED_MICRO_SAAS_SERVICES,
    ...INNOVATIVE_SERVICES
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      
      const matchesPricing = selectedPricingTier === 'all' || service.pricingTier === selectedPricingTier;
      
      return matchesSearch && matchesCategory && matchesPricing;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'aiScore':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'innovationScore':
          return (b.innovationScore || 0) - (a.innovationScore || 0);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    const categoryMap: { [key: string]: React.ReactNode } = {
      'AI & ML': <Brain className="w-6 h-6" />,
      'IT Infrastructure': <Cloud className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Business Automation': <Zap className="w-6 h-6" />,
      'Data Analytics': <BarChart3 className="w-6 h-6" />,
      'Financial Tech': <DollarSign className="w-6 h-6" />,
      'Quantum Computing': <Cpu className="w-6 h-6" />,
      'Blockchain & Web3': <Network className="w-6 h-6" />,
      'Internet of Things': <Globe className="w-6 h-6" />,
      'Edge Computing': <Zap className="w-6 h-6" />,
      'Augmented Reality': <Eye className="w-6 h-6" />,
      'Robotic Process Automation': <Bot className="w-6 h-6" />
    };
    return categoryMap[category] || <Rocket className="w-6 h-6" />;
  };

  const getPricingTierColor = (tier: string) => {
    const colorMap: { [key: string]: string } = {
      'Starter': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Professional': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Enterprise': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Custom': 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    };
    return colorMap[tier] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden py-20 px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Zion Tech Group
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover our comprehensive suite of cutting-edge micro SAAS services, AI solutions, and innovative technology platforms designed to transform your business.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
              {allServices.length}+ Services
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
              AI-Powered Solutions
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
              Enterprise Grade
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
              24/7 Support
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div 
        className="px-6 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {ENHANCED_SAAS_CATEGORIES.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
              {INNOVATIVE_SERVICE_CATEGORIES.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Pricing Tier Filter */}
            <select
              value={selectedPricingTier}
              onChange={(e) => setSelectedPricingTier(e.target.value)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Pricing Tiers</option>
              <option value="Starter">Starter</option>
              <option value="Professional">Professional</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Custom">Custom</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="name">Sort by Name</option>
              <option value="aiScore">Sort by AI Score</option>
              <option value="innovationScore">Sort by Innovation Score</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:bg-gray-700/50'
                }`}
              >
                <div className="grid grid-cols-2 gap-1 w-5 h-5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:bg-gray-700/50'
                }`}
              >
                <div className="space-y-1 w-5 h-5">
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                </div>
              </button>
            </div>
            <div className="text-gray-400">
              {filteredServices.length} services found
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid/List */}
      <motion.div 
        className="px-6 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getPricingTierColor(service.pricingTier)}`}>
                      {service.pricingTier}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white">
                      {service.price.currency}{service.price.monthly}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.price.currency}{service.price.yearly}/year (save {Math.round((1 - service.price.yearly / (service.price.monthly * 12)) * 100)}%)
                    </div>
                  </div>

                  {/* Rating and Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white">{service.rating}</span>
                      <span className="text-gray-400">({service.reviewCount})</span>
                    </div>
                    {service.aiScore && (
                      <div className="flex items-center gap-1">
                        <Brain className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400">{service.aiScore}</span>
                      </div>
                    )}
                    {service.innovationScore && (
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400">{service.innovationScore}</span>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => openServiceModal(service)}
                      className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => window.open(service.website, '_blank')}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      Visit Site
                    </button>
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
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                            {getCategoryIcon(service.category)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-xl text-white group-hover:text-cyan-400 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-gray-400">{service.category} • {service.subcategory}</p>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getPricingTierColor(service.pricingTier)}`}>
                          {service.pricingTier}
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">{service.rating}</span>
                          <span className="text-gray-400">({service.reviewCount})</span>
                        </div>
                        {service.aiScore && (
                          <div className="flex items-center gap-1">
                            <Brain className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-400">AI Score: {service.aiScore}</span>
                          </div>
                        )}
                        {service.innovationScore && (
                          <div className="flex items-center gap-1">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-purple-400">Innovation: {service.innovationScore}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and Actions */}
                    <div className="lg:w-64 flex flex-col gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">
                          {service.price.currency}{service.price.monthly}
                          <span className="text-sm text-gray-400 font-normal">/month</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          {service.price.currency}{service.price.yearly}/year
                        </div>
                        <div className="text-xs text-green-400 mt-1">
                          Save {Math.round((1 - service.price.yearly / (service.price.monthly * 12)) * 100)}%
                        </div>
                      </div>

                      <div className="space-y-2">
                        <button
                          onClick={() => openServiceModal(service)}
                          className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => window.open(service.website, '_blank')}
                          className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                        >
                          Visit Site
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                      {getCategoryIcon(selectedService.category)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                      <p className="text-gray-400">{selectedService.category} • {selectedService.subcategory}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                      <p className="text-gray-300">{selectedService.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                      <ul className="space-y-2">
                        {selectedService.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Pricing</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                          <span className="text-gray-300">Monthly</span>
                          <span className="text-xl font-bold text-white">
                            {selectedService.price.currency}{selectedService.price.monthly}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                          <span className="text-gray-300">Yearly</span>
                          <span className="text-xl font-bold text-white">
                            {selectedService.price.currency}{selectedService.price.yearly}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                          <span className="text-gray-300">Enterprise</span>
                          <span className="text-xl font-bold text-white">
                            {selectedService.price.currency}{selectedService.price.enterprise}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Target Audience</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.targetAudience.map((audience, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30"
                          >
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Use Cases</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.useCases.map((useCase, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-md border border-purple-500/30"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Integrations</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.integration.slice(0, 6).map((integration, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-md"
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Email:</span>
                      <div className="text-white">{selectedService.contactInfo.email}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Phone:</span>
                      <div className="text-white">{selectedService.contactInfo.phone}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Address:</span>
                      <div className="text-white">{selectedService.contactInfo.address}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => window.open(selectedService.website, '_blank')}
                    className="flex-1 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium"
                  >
                    Visit Website
                  </button>
                  <button
                    onClick={() => window.open(`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.title}`)}
                    className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    Contact Sales
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedServicesShowcase;