import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Star, TrendingUp, Zap, Brain, Atom, Rocket,
  ArrowRight, Check, Shield, Target, Sparkles, DollarSign,
  Users, Building
} from 'lucide-react';

// Import all service data
import { innovative2036MicroSaasServices } from '../data/innovative-2036-micro-saas-services';
import { innovative2036ITServices } from '../data/innovative-2036-it-services';
import { newlyAddedServices } from '../data/newly-added-services';
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { emergingTechServices } from '../data/emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Create unified services array
const allServices = [
  ...innovative2036MicroSaasServices,
  ...innovative2036ITServices,
  ...newlyAddedServices,
  ...realMicroSaasServices,
  ...innovativeAIServices,
  ...enterpriseITServices,
  ...emergingTechServices
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of all services'
  },
  {
    id: 'ai-consciousness',
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'AI consciousness and emotional intelligence'
  },
  {
    id: 'quantum',
    name: 'Quantum Technology',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Quantum computing and security'
  },
  {
    id: 'space-tech',
    name: 'Space Technology',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Space exploration and resource mining'
  },
  {
    id: 'autonomous',
    name: 'Autonomous Systems',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'AI-powered autonomous operations'
  },
  {
    id: 'emerging',
    name: 'Emerging Tech',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    description: 'Cutting-edge technologies'
  },
  {
    id: 'enterprise-it',
    name: 'Enterprise IT',
    icon: <Building className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Enterprise solutions and infrastructure'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Security and compliance solutions'
  },
  {
    id: 'business',
    name: 'Business Solutions',
    icon: <Target className="w-6 h-6" />,
    color: 'from-teal-500 to-cyan-500',
    description: 'Business automation and optimization'
  }
];

const sortOptions = [
  { id: 'popular', name: 'Most Popular', icon: <Star className="w-4 h-4" /> },
  { id: 'newest', name: 'Newest', icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'price-low', name: 'Price: Low to High', icon: <DollarSign className="w-4 h-4" /> },
  { id: 'price-high', name: 'Price: High to Low', icon: <DollarSign className="w-4 h-4" /> },
  { id: 'rating', name: 'Highest Rated', icon: <Star className="w-4 h-4" /> }
];

export default function ComprehensiveServicesShowcase2036() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category?.toLowerCase().includes(selectedCategory)
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'newest':
          return new Date(b.launchDate || '2020-01-01').getTime() - new Date(a.launchDate || '2020-01-01').getTime();
        case 'price-low': {
          const aPrice = typeof a.price === 'string' ? parseFloat(a.price.replace(/[^0-9.]/g, '') || '0') : 
                        (a.price?.monthly || 0);
          const bPrice = typeof b.price === 'string' ? parseFloat(b.price.replace(/[^0-9.]/g, '') || '0') : 
                        (b.price?.monthly || 0);
          return aPrice - bPrice;
        }
        case 'price-high': {
          const aPriceHigh = typeof a.price === 'string' ? parseFloat(a.price.replace(/[^0-9.]/g, '') || '0') : 
                            (a.price?.monthly || 0);
          const bPriceHigh = typeof b.price === 'string' ? parseFloat(b.price.replace(/[^0-9.]/g, '') || '0') : 
                            (b.price?.monthly || 0);
          return bPriceHigh - aPriceHigh;
        }
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

    setFilteredServices(filtered);
  }, [selectedCategory, sortBy, searchQuery]);



  const getServicePricing = (service: any) => {
    if (service.pricing?.starter) return service.pricing.starter;
    if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
    if (service.price?.monthly) return `$${service.price.monthly}/month`;
    if (service.price) return service.price;
    return 'Contact for pricing';
  };

  const getServiceFeatures = (service: any) => {
    if (service.features) return service.features;
    if (service.keyFeatures) return service.keyFeatures;
    return [];
  };

  const getServiceDescription = (service: any) => {
    if (service.description) return service.description;
    if (service.tagline) return service.tagline;
    return 'No description available';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Head>
        <title>Comprehensive Services Showcase 2036 - ZionTech Group</title>
        <meta name="description" content="Explore our complete portfolio of innovative micro SAAS services, AI solutions, IT infrastructure, and emerging technologies. Discover cutting-edge solutions for your business needs." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services Showcase 2036
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge micro SAAS services, 
              revolutionary AI solutions, and next-generation IT infrastructure
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>{allServices.length}+ Services</span>
              </span>
              <span className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.8+ Average Rating</span>
              </span>
              <span className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>1000+ Happy Customers</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="relative py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-500 text-white' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-cyan-500 text-white' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-3">
              <span className="text-white/60 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id} className="bg-gray-800 text-white">
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent shadow-lg shadow-cyan-500/25'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-white/60">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </div>

          {/* Services */}
          <AnimatePresence mode="wait">
            {filteredServices.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${sortBy}-${searchQuery}`}
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
                    transition={{ delay: index * 0.1 }}
                    className={`bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 ${
                      viewMode === 'list' ? 'flex items-start space-x-4' : ''
                    }`}
                  >
                    {/* Service Icon */}
                    <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color || 'from-gray-500 to-gray-600'} flex items-center justify-center text-2xl`}>
                        {service.icon}
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{service.name}</h3>
                          <p className="text-white/60 text-sm">{service.tagline}</p>
                        </div>
                        {service.popular && (
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full">
                            Popular
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-white/70 text-sm mb-4 line-clamp-2">
                        {getServiceDescription(service)}
                      </p>

                      {/* Features */}
                      {getServiceFeatures(service).length > 0 && (
                        <div className="mb-4">
                          <ul className="space-y-1">
                            {getServiceFeatures(service).slice(0, 3).map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-center space-x-2 text-white/60 text-sm">
                                <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="text-cyan-400 font-semibold">
                          {getServicePricing(service)}
                        </div>
                        <a
                          href={service.link || `/services/${service.id}`}
                          className="flex items-center space-x-2 text-white/70 hover:text-cyan-400 transition-colors text-sm"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-white/40" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-white/60 mb-6">
                  Try adjusting your search criteria or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  View All Services
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how our innovative solutions can drive your success and 
              position you at the forefront of technological advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Call {contactInfo.mobile}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}