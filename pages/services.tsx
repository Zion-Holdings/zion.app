import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield,
  ArrowRight, Check,
  Building, Cpu, Star, Phone, Mail,
  TrendingUp, Heart, GraduationCap, Truck, Palette, Sparkles, MapPin
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
  if (service.pricing?.monthly) return service.pricing.monthly;
  if (service.price?.monthly) return service.price.monthly;
  if (service.price?.starter) return service.price.starter;
  return 'Contact Us';
};

// Helper function to get service category safely
const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  if (service.type) return service.type;
  return 'Innovative Service';
};

// Helper function to get service market size safely
const getServiceMarketSize = (service: any) => {
  if (service.marketSize) return service.marketSize;
  if (service.market) return service.market;
  return 'N/A';
};

// Helper function to get service website safely
const getServiceWebsite = (service: any) => {
  if (service.website) return service.website;
  if (service.link) return service.link;
  return `/services/${service.id || service.name.toLowerCase().replace(/\s+/g, '-')}`;
};

// Helper function to get service icon
const getServiceIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'ai':
    case 'ai & autonomous':
    case 'ai autonomous service':
      return Brain;
    case 'quantum':
    case 'quantum computing':
    case 'quantum technology':
      return Atom;
    case 'infrastructure':
    case 'it infrastructure':
      return Cpu;
    case 'micro saas':
      return Building;
    default:
      return Shield;
  }
};

// Helper function to get service color safely
const getServiceColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'ai':
    case 'ai & autonomous':
    case 'ai autonomous service':
      return 'from-cyan-500 to-blue-500';
    case 'quantum':
    case 'quantum computing':
    case 'quantum technology':
      return 'from-blue-500 to-indigo-500';
    case 'infrastructure':
    case 'it infrastructure':
      return 'from-green-500 to-teal-500';
    case 'micro saas':
      return 'from-orange-500 to-red-500';
    default:
      return 'from-purple-500 to-pink-500';
  }
};

const ServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'market'>('name');

  // Combine all services
  const allServices = [
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

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           getServiceCategory(service).toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name': {
        return a.name.localeCompare(b.name);
      }
      case 'price': {
        const priceA = getServicePricing(a);
        const priceB = getServicePricing(b);
        if (priceA === 'Contact Us' && priceB === 'Contact Us') return 0;
        if (priceA === 'Contact Us') return 1;
        if (priceB === 'Contact Us') return -1;
        return priceA.localeCompare(priceB);
      }
      case 'market': {
        const marketA = getServiceMarketSize(a);
        const marketB = getServiceMarketSize(b);
        return marketA.localeCompare(marketB);
      }
      default:
        return 0;
    }
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Autonomous', icon: Brain, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500' },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, color: 'from-green-500 to-teal-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Building, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <SEO 
        title="Innovative Services - Zion Tech Group"
        description="Discover our comprehensive range of innovative services including AI autonomous systems, quantum computing, IT infrastructure, and micro SAAS solutions."
        keywords={[
          'innovative services',
          'AI autonomous systems',
          'quantum computing',
          'IT infrastructure',
          'micro SAAS',
          'Zion Tech Group'
        ]}
      />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        className="relative pt-32 pb-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Innovative Services
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Discover our cutting-edge solutions that are reshaping the future of technology
          </motion.p>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <category.icon className="inline-block w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filters */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container mx-auto px-4 mb-12"
      >
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'market')}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="market">Market Size</option>
              </select>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid/List */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="container mx-auto px-4 mb-20"
      >
        {sortedServices.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or category filters</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {sortedServices.map((service, index) => {
              const IconComponent = getServiceIcon(getServiceCategory(service));
              const colorClass = getServiceColor(getServiceCategory(service));
              
              return (
                <motion.div
                  key={service.id || index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    viewMode === 'list' ? 'flex' : 'block'
                  }`}
                >
                  {/* Service Header */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClass}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Starting at</div>
                        <div className="text-lg font-bold text-cyan-400">
                          {getServicePricing(service)}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                    {/* Service Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Category:</span>
                        <span className="text-white font-medium">{getServiceCategory(service)}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-white font-medium">{getServiceMarketSize(service)}</span>
                      </div>
                    </div>

                    {/* Features Preview */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded-lg"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded-lg">
                              +{service.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <a
                      href={getServiceWebsite(service)}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss how our innovative services can drive your success in the digital age
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center p-4">
              <Phone className="w-6 h-6 text-cyan-400 mr-3" />
              <div>
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-gray-300">+1 302 464 0950</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-4">
              <Mail className="w-6 h-6 text-cyan-400 mr-3" />
              <div>
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-gray-300">kleber@ziontechgroup.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-4">
              <MapPin className="w-6 h-6 text-cyan-400 mr-3" />
              <div>
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;