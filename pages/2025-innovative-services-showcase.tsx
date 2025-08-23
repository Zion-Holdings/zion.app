import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Target, Rocket,
  ArrowRight, Check, Star, TrendingUp,
  Building, Zap
} from 'lucide-react';

// Import our new 2025 services
import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { emergingTechnologyServices } from '../data/2025-emerging-technology-services';

// Unified service interface for showcase display
interface UnifiedService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  icon?: string;
  popular?: boolean;
  link?: string;
  price?: string | number;
  pricing?: {
    starter: string;
    professional: string;
    enterprise: string;
    custom: string;
  };
  price_monthly?: number;
  price_yearly?: number;
  trialDays?: number;
  setupTime?: string;
  features?: string[];
  benefits?: string[];
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of 2025 innovative services'
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Advanced AI automation and intelligence services'
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
    description: 'Cutting-edge IT infrastructure solutions'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Innovative business solutions and automation'
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Tech',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Future technology and innovation services'
  }
];

// Normalize services to unified format
const normalizeService = (service: any): UnifiedService => {
  if (service.pricing) {
    // IT Infrastructure service format
    return {
      id: service.id,
      name: service.name,
      tagline: service.description || '',
      description: service.description || '',
      category: service.category || service.type || '',
      icon: '⚡',
      popular: false,
      link: service.website || `https://ziontechgroup.com${service.slug}`,
      pricing: service.pricing,
      price_monthly: 0,
      price_yearly: 0,
      trialDays: 14,
      setupTime: '1-2 weeks',
      features: service.features || [],
      benefits: service.benefits || []
    };
  } else if (service.price && typeof service.price === 'object') {
    // Emerging technology service format
    return {
      id: service.id,
      name: service.name,
      tagline: service.tagline || '',
      description: service.description || '',
      category: service.category || '',
      icon: service.icon || '🚀',
      popular: service.popular || false,
      link: service.link || `https://ziontechgroup.com/${service.id}`,
      price_monthly: service.price.monthly,
      price_yearly: service.price.yearly,
      trialDays: service.price.trialDays || 14,
      setupTime: service.price.setupTime || '1-2 weeks',
      features: service.features || [],
      benefits: service.benefits || []
    };
  } else {
    // AI Automation and Micro SAAS format
    return {
      id: service.id,
      name: service.name,
      tagline: service.tagline || '',
      description: service.description || '',
      category: service.category || '',
      icon: service.icon || '🤖',
      popular: service.popular || false,
      link: service.link || `https://ziontechgroup.com/${service.id}`,
      price: service.price,
      price_monthly: typeof service.price === 'string' ? 0 : 0,
      price_yearly: typeof service.price === 'string' ? 0 : 0,
      trialDays: service.trialDays || 14,
      setupTime: service.setupTime || '1-2 weeks',
      features: service.features || [],
      benefits: service.benefits || []
    };
  }
};

// Combine all services
const allServices: UnifiedService[] = [
  ...advancedAIAutomationServices.map(normalizeService),
  ...innovativeITInfrastructureServices2025.map(normalizeService),
  ...innovativeMicroSaasSolutions2025.map(normalizeService),
  ...emergingTechnologyServices.map(normalizeService)
];

export default function InnovativeServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  const getServiceCategory = (service: UnifiedService) => {
    if (service.category) return service.category;
    return 'Other';
  };

  const getServicePricing = (service: UnifiedService) => {
    if (service.price_monthly) return `$${service.price_monthly}/month`;
    if (service.pricing) return service.pricing.professional;
    if (service.price) return typeof service.price === 'string' ? service.price : 'Contact for pricing';
    return 'Contact for pricing';
  };

  const getServiceFeatures = (service: UnifiedService) => {
    if (service.features) return service.features;
    return [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        data={{
          pageTitle: "2025 Innovative Services Showcase | Zion Tech Group",
          pageDescription: "Discover our cutting-edge 2025 innovative services including AI automation, IT infrastructure, micro SAAS solutions, and emerging technology services.",
          pageKeywords: ["2025 innovative services", "AI automation", "IT infrastructure", "micro SAAS", "emerging technology", "Zion Tech Group"]
        }}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              2025 Innovative
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services Showcase
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Discover our cutting-edge portfolio of AI automation, IT infrastructure, micro SAAS solutions, 
              and emerging technology services designed to transform your business in 2025 and beyond.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-purple-300">
                <Star className="w-5 h-5" />
                <span>25+ New Services</span>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <TrendingUp className="w-5 h-5" />
                <span>Cutting-Edge Technology</span>
              </div>
              <div className="flex items-center gap-2 text-green-300">
                <Zap className="w-5 h-5" />
                <span>Ready for Production</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <div className="text-gray-500">Try adjusting your search or filters</div>
            </motion.div>
          ) : (
            <motion.div
              key={`${searchTerm}-${selectedCategory}-${viewMode}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
              }
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon || '🚀'}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-purple-400">
                        {getServicePricing(service)}
                      </span>
                      {service.price_yearly && (
                        <span className="text-sm text-gray-400">
                          (${service.price_yearly}/year)
                        </span>
                      )}
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs rounded-full border border-white/30">
                        {getServiceCategory(service)}
                      </span>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold text-sm mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {getServiceFeatures(service).slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {getServiceFeatures(service).length > 3 && (
                          <div className="text-gray-400 text-xs">
                            +{getServiceFeatures(service).length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    {'benefits' in service && service.benefits && (
                      <div className="mb-4">
                        <h4 className="text-white font-semibold text-sm mb-2">Benefits:</h4>
                        <div className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                              <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Service Details */}
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-400 mb-4">
                      <div>
                        <span className="block text-gray-500">Setup Time:</span>
                        <span>{service.setupTime || 'Contact us'}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500">Trial:</span>
                        <span>{service.trialDays || 0} days</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our 2025 innovative services are designed to give you a competitive edge. 
            Contact us today to discuss how we can help implement these cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${contact.mobile}`}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              <span>📞</span>
              {contact.mobile}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              <span>✉️</span>
              {contact.email}
            </a>
          </div>
          <div className="mt-6 text-gray-400 text-sm">
            <p>{contact.address}</p>
            <p className="mt-2">
              Visit our website: <a href={contact.website} className="text-blue-400 hover:underline">{contact.website}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}