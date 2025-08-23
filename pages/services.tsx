import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building
} from 'lucide-react';

// Import our new service data
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services';
import { innovative2038AIServices } from '../data/innovative-2038-ai-services';
import { innovative2038ITServices } from '../data/innovative-2038-it-services';
import { enterpriseITSolutions } from '../data/2034-enterprise-it-solutions';
import { innovativeMicroSaasSolutions } from '../data/2034-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices } from '../data/2034-cutting-edge-ai-services';
import { real2025Q4AugmentedBatch } from '../data/real-2025-q4-augmented-batch';
import { real2029Q3Additions } from '../data/real-2029-q3-additions';
import { validatedServices2025Q4 } from '../data/real-validated-2025-q4-additions';
import { real2035Q2Additions } from '../data/real-2035-q2-additions';
import { real2036ServiceExpansions } from '../data/real-2036-service-expansions';
import { innovative2036MicroSaasServices } from '../data/innovative-2036-micro-saas-services';
import { innovative2036ITServices } from '../data/innovative-2036-it-services';
import { innovative2037MicroSaasServices } from '../data/innovative-2037-micro-saas-services';
import { innovative2037ITServices } from '../data/innovative-2037-it-services';
import { innovative2037AIServices } from '../data/innovative-2037-ai-services';

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

// Helper function to get service category
const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  if (service.type) return service.type;
  return 'Other';
};

// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  if (service.price) return service.price;
  return 'Contact for pricing';
};

// Helper function to get service features
const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: any) => {
  if (service.description) return service.description;
  if (service.tagline) return service.tagline;
  return 'No description available';
};

// Create unified services array
const allServices = [
  ...innovative2038MicroSaasServices,
  ...innovative2038AIServices,
  ...innovative2038ITServices,
  ...enterpriseITSolutions,
  ...innovativeMicroSaasSolutions,
  ...cuttingEdgeAIServices,
  ...realMicroSaasServices,
  ...innovativeAIServices,
  ...enterpriseITServices,
  ...emergingTechServices,
  ...newRealServices,
  ...realOperationalServices,
  ...marketReadyServices,
  ...marketValidatedServices,
  ...industryRealServices,
  ...real2025Q4AugmentedBatch,
  ...real2029Q3Additions,
  ...validatedServices2025Q4,
  ...real2035Q2Additions,
  ...real2036ServiceExpansions,
  ...innovative2036MicroSaasServices,
  ...innovative2036ITServices,
  ...innovative2037MicroSaasServices,
  ...innovative2037ITServices,
  ...innovative2037AIServices
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
    id: 'ai',
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Revolutionary AI platforms and solutions'
  },
  {
    id: 'quantum',
    name: 'Quantum Technology',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Quantum computing and emerging tech'
  },
  {
    id: 'space',
    name: 'Space Technology',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Space exploration and innovation'
  },
  {
    id: 'it',
    name: 'IT Solutions',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Enterprise IT infrastructure'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-emerald-500 to-cyan-500',
    description: 'Innovative business solutions'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: <Building className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Large-scale enterprise solutions'
  }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter services based on category and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      getServiceCategory(service).toLowerCase().includes(selectedCategory) ||
      service.category?.toLowerCase().includes(selectedCategory);
    
    const matchesSearch = searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      getServiceDescription(service).toLowerCase().includes(searchQuery.toLowerCase()) ||
      getServiceFeatures(service).some((feature: string) => 
        feature.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <SEO 
        title="Services | Zion Tech Group"
        description="Explore our comprehensive portfolio of AI, quantum computing, space technology, and enterprise IT solutions. Transform your business with cutting-edge technology."
        keywords="AI services, quantum computing, space technology, IT solutions, enterprise software, micro SAAS, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of cutting-edge technology solutions. 
              From AI consciousness to quantum computing, we deliver the future today.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our services, features, and capabilities..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4 inline mr-2" />
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4 inline mr-2" />
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300">
              Showing <span className="text-blue-400 font-semibold">{filteredServices.length}</span> services
              {selectedCategory !== 'all' && (
                <span> in <span className="text-purple-400 font-semibold">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </span></span>
              )}
            </p>
          </div>

          {/* Services Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Service Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-3xl">{service.icon || '🚀'}</span>
                    </div>
                    {service.popular && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Service Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {getServiceDescription(service)}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-blue-400">
                      {getServicePricing(service)}
                    </div>
                    {service.trialDays && (
                      <div className="text-sm text-gray-400">
                        {service.trialDays} day free trial
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/80 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {getServiceFeatures(service).slice(0, 3).map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link || `/services/${service.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    
                    <a
                      href="/contact"
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id || index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-6">
                    {/* Service Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-4xl">{service.icon || '🚀'}</span>
                    </div>

                    {/* Service Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h3>
                        {service.popular && (
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {getServiceDescription(service)}
                      </p>

                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <span>Category: {getServiceCategory(service)}</span>
                        {service.trialDays && (
                          <span>{service.trialDays} day trial</span>
                        )}
                      </div>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="text-right space-y-4">
                      <div className="text-2xl font-bold text-blue-400">
                        {getServicePricing(service)}
                      </div>
                      
                      <div className="space-y-2">
                        <a
                          href={service.link || `/services/${service.id}`}
                          className="block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </a>
                        
                        <a
                          href="/contact"
                          className="block px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300"
                        >
                          Contact Sales
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8">
                Try adjusting your search terms or category filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cutting-edge technology solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Get Started Today
              </a>
              <a
                href="/pricing"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}