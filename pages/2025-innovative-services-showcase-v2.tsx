import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import {
  Search, Grid, List,
  Brain, Atom, Shield,
  ArrowRight, Check,
  Building, Cpu, Star, Phone, Mail,
  Sparkles, DollarSign, Microscope
} from 'lucide-react';

// Import our new innovative services
import { innovativeAIAutonomousServicesExpansion2025 } from '../data/2025-innovative-ai-autonomous-services-expansion';
import { innovativeITInfrastructureExpansion2025 } from '../data/2025-innovative-it-infrastructure-expansion';
import { innovativeMicroSaasExpansionV32025 } from '../data/2025-innovative-micro-saas-expansion-v3';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { newRealServices } from '../data/new-real-services';
import { realOperationalServices } from '../data/real-operational-services';
import { marketReadyServices } from '../data/market-ready-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { industryRealServices } from '../data/industry-real-services';

// Helper function to get service pricing safely
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  if (service.price?.starter) return service.price.starter;
  return 'Contact Us';
};

// Helper function to get service category safely
const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  if (service.type) return service.type;
  return 'Other';
};

// Helper function to get service market size safely
const getServiceMarketSize = (service: any) => {
  if (service.marketSize) return service.marketSize;
  if (service.market) return service.market;
  return '0';
};

// Helper function to get service website safely
const getServiceWebsite = (service: any) => {
  if (service.website) return service.website;
  if (service.link) return service.link;
  return `/services/${service.id || service.name.toLowerCase().replace(/\s+/g, '-')}`;
};

// Helper function to get service color safely
const getServiceColor = (category: string) => {
  if (category.includes('AI') || category.includes('Autonomous')) return 'from-cyan-500 to-blue-500';
  if (category.includes('Quantum')) return 'from-blue-500 to-indigo-500';
  if (category.includes('Infrastructure')) return 'from-green-500 to-teal-500';
  if (category.includes('SAAS')) return 'from-orange-500 to-red-500';
  if (category.includes('Security')) return 'from-red-500 to-orange-500';
  if (category.includes('Financial')) return 'from-emerald-500 to-green-500';
  if (category.includes('Healthcare')) return 'from-pink-500 to-purple-500';
  if (category.includes('Education')) return 'from-yellow-500 to-orange-500';
  if (category.includes('Manufacturing')) return 'from-purple-500 to-pink-500';
  if (category.includes('Creative')) return 'from-indigo-500 to-purple-500';
  return 'from-purple-500 to-pink-500';
};

const InnovativeServicesShowcase2025V2: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'market'>('name');

  // Combine all innovative services
  const allInnovativeServices = [
    ...innovativeAIAutonomousServicesExpansion2025,
    ...innovativeITInfrastructureExpansion2025,
    ...innovativeMicroSaasExpansionV32025,
    ...realMicroSaasServices,
    ...innovativeAIServices,
    ...enterpriseITServices,
    ...emergingTechServices,
    ...newRealServices,
    ...realOperationalServices,
    ...marketReadyServices,
    ...marketValidatedServices,
    ...industryRealServices
  ];

  // Filter services by search query and category
  const filteredServices = allInnovativeServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         getServiceCategory(service).toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' ||
                           getServiceCategory(service).toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price': {
        const priceA = parseFloat(getServicePricing(a).replace(/[^0-9.]/g, '') || '0');
        const priceB = parseFloat(getServicePricing(b).replace(/[^0-9.]/g, '') || '0');
        return priceA - priceB;
      }
      case 'market': {
        const marketA = parseFloat(getServiceMarketSize(a).replace(/[^0-9.]/g, '') || '0');
        const marketB = parseFloat(getServiceMarketSize(b).replace(/[^0-9.]/g, '') || '0');
        return marketB - marketA;
      }
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Autonomous', icon: Brain, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500' },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, color: 'from-green-500 to-teal-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Building, color: 'from-orange-500 to-red-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'fintech', name: 'FinTech', icon: DollarSign, color: 'from-emerald-500 to-green-500' },
    { id: 'healthcare', name: 'Healthcare', icon: Microscope, color: 'from-pink-500 to-purple-500' }
  ];

  const getServiceIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Autonomous')) return Brain;
    if (category.includes('Quantum')) return Atom;
    if (category.includes('Infrastructure')) return Cpu;
    if (category.includes('SAAS')) return Building;
    if (category.includes('Security')) return Shield;
    if (category.includes('Financial')) return DollarSign;
    if (category.includes('Healthcare')) return Microscope;
    return Sparkles;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <SEO
        title="2025 Innovative Services Showcase - Zion Tech Group"
        description="Discover our cutting-edge 2025 innovative services including AI autonomous systems, quantum computing infrastructure, and revolutionary micro SAAS solutions."
        keywords={[
          'innovative services 2025',
          'AI autonomous systems',
          'quantum computing',
          'micro SAAS',
          'IT infrastructure',
          'Zion Tech Group'
        ]}
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            >
              2025 Innovative Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Discover our revolutionary AI autonomous systems, quantum computing infrastructure,
              and cutting-edge micro SAAS solutions that are shaping the future of technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full">
                <Brain className="w-5 h-5" />
                <span>AI Autonomous</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 rounded-full">
                <Atom className="w-5 h-5" />
                <span>Quantum Computing</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 px-6 py-3 rounded-full">
                <Cpu className="w-5 h-5" />
                <span>IT Infrastructure</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} border-transparent text-white`
                      : 'bg-gray-700/50 border-gray-600/50 text-gray-300 hover:bg-gray-600/50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-700/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'market')}
                className="bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="market">Sort by Market Size</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            {filteredServices.length} Innovative Services Found
          </h2>
          <p className="text-gray-400 text-center">
            Discover cutting-edge solutions that are revolutionizing industries
          </p>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${getServiceColor(getServiceCategory(service))} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(getServiceIcon(getServiceCategory(service)), { className: 'w-8 h-8 text-white' })}
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getServiceColor(getServiceCategory(service))} text-white`}>
                      {getServiceCategory(service)}
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-green-400">
                      {getServicePricing(service)}
                    </div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>

                  {/* Market Info */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <span className="text-gray-400">Market Size:</span>
                    <span className="text-green-400 font-medium">{getServiceMarketSize(service)}</span>
                  </div>

                  {/* Features Preview */}
                  {service.features && service.features.length > 0 && (
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-400">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <a
                      href={getServiceWebsite(service)}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-400">Innovative</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Service Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${getServiceColor(getServiceCategory(service))} flex items-center justify-center flex-shrink-0`}>
                    {React.createElement(getServiceIcon(getServiceCategory(service)), { className: 'w-10 h-10 text-white' })}
                  </div>

                  {/* Service Details */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 mb-3">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getServiceColor(getServiceCategory(service))} text-white`}>
                            {service.category}
                          </span>
                          <span className="text-sm text-gray-500">{getServiceCategory(service)}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="mb-2">
                          <div className="text-3xl font-bold text-green-400">
                            {getServicePricing(service)}
                          </div>
                          <div className="text-sm text-gray-500">Starting price</div>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-400">Market: </span>
                          <span className="text-green-400 font-medium">{getServiceMarketSize(service)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-700/50 rounded text-sm text-gray-300 flex items-center gap-2">
                              <Check className="w-3 h-3 text-green-400" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action */}
                    <div className="flex items-center justify-between">
                      <a
                        href={getServiceWebsite(service)}
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                      >
                        Explore Service
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>Innovative Technology</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-3xl p-12 text-center border border-gray-700/50">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our innovative services are designed to give you a competitive edge in the rapidly evolving technology landscape.
            Contact us today to learn how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 rounded-xl text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-xl text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">Visit us at: <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300">ziontechgroup.com</a></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InnovativeServicesShowcase2025V2;