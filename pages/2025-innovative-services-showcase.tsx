import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Star, TrendingUp, Users, Clock, CheckCircle,
  Brain, Atom, Shield, Target, Rocket, ArrowRight, Check, Palette, 
  Heart, Truck, GraduationCap, Building, Globe, Zap, Lock, Eye, Cloud, ShoppingCart
} from 'lucide-react';

// Import our latest innovative services
import { advancedAIAutomationServices } from '../data/advanced-ai-automation-services';
import { nextGenITInfrastructureServices } from '../data/next-gen-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/innovative-micro-saas-solutions-2025';
import { specializedIndustrySolutions } from '../data/specialized-industry-solutions';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = [
    ...advancedAIAutomationServices,
    ...nextGenITInfrastructureServices,
    ...innovativeMicroSaasSolutions2025,
    ...specializedIndustrySolutions
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allServices.length },
    { id: 'AI & Automation', name: 'AI & Automation', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI & Automation').length },
    { id: 'Infrastructure & Edge', name: 'Infrastructure', icon: <Globe className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Infrastructure & Edge').length },
    { id: 'Security & Compliance', name: 'Security', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Security & Compliance').length },
    { id: 'Monitoring & Observability', name: 'Monitoring', icon: <Eye className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Monitoring & Observability').length },
    { id: 'Data & Analytics', name: 'Data & Analytics', icon: <TrendingUp className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Data & Analytics').length },
    { id: 'Cloud & Governance', name: 'Cloud & Governance', icon: <Cloud className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Cloud & Governance').length },
    { id: 'Virtual Events & Communication', name: 'Virtual Events', icon: <Users className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Virtual Events & Communication').length },
    { id: 'Fashion & Retail', name: 'Fashion & Retail', icon: <Palette className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Fashion & Retail').length },
    { id: 'Smart Home & Energy', name: 'Smart Home', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Smart Home & Energy').length },
    { id: 'Legal & Compliance', name: 'Legal & Compliance', icon: <Lock className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Legal & Compliance').length },
    { id: 'Training & Education', name: 'Training & Education', icon: <GraduationCap className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Training & Education').length },
    { id: 'Healthcare & Medical', name: 'Healthcare', icon: <Heart className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Healthcare & Medical').length },
    { id: 'Financial Services', name: 'Financial Services', icon: <Target className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Financial Services').length },
    { id: 'Manufacturing & Industrial', name: 'Manufacturing', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Manufacturing & Industrial').length },
    { id: 'Retail & E-commerce', name: 'Retail & E-commerce', icon: <ShoppingCart className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Retail & E-commerce').length },
    { id: 'Logistics & Supply Chain', name: 'Logistics', icon: <Truck className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Logistics & Supply Chain').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getServiceCategory = (service: any) => {
    if (service.category) return service.category;
    if (service.type) return service.type;
    return 'Other';
  };

  const getServicePricing = (service: any) => {
    if (service.pricing?.starter) return service.pricing.starter;
    if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
    if (service.price?.monthly) return `$${service.price.monthly}/month`;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Innovative Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2025 innovative services including AI automation, next-gen infrastructure, specialized industry solutions, and revolutionary micro SAAS platforms."
        keywords={[
          'innovative services 2025',
          'AI automation',
          'next-gen infrastructure',
          'specialized solutions',
          'micro SAAS',
          'Zion Tech Group'
        ]}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                2025 Innovative Services
              </span>
              <br />
              <span className="text-white">Showcase</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Discover our revolutionary portfolio of cutting-edge micro SAAS services, 
              AI-powered solutions, and next-generation IT infrastructure that are 
              transforming industries and driving digital innovation.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center space-x-2 text-cyan-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-lg font-semibold">25+ New Services</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <TrendingUp className="w-5 h-5" />
                <span className="text-lg font-semibold">Market Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-lg font-semibold">Production Proven</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
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
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                  viewMode === 'list' ? 'flex items-start space-x-6' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                          Popular
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>

                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {getServiceDescription(service)}
                    </p>

                    <div className="mb-4">
                      <span className="text-xs text-gray-400">Category:</span>
                      <span className="text-xs text-cyan-400 ml-2">{getServiceCategory(service)}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{service.customers}+ customers</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-400 ml-1">({service.reviews})</span>
                      </div>
                    </div>

                    <a
                      href={service.link}
                      className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 group"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </>
                ) : (
                  // List View
                  <>
                    <div className="flex-shrink-0">
                      <div className="text-4xl">{service.icon}</div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                            Popular
                          </span>
                        )}
                      </div>

                      <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>

                      <div className="flex items-center space-x-6 mb-3 text-sm">
                        <div>
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
                        <div className="text-gray-400">
                          <span>Category: </span>
                          <span className="text-cyan-400">{getServiceCategory(service)}</span>
                        </div>
                        <div className="text-gray-400">
                          <span>Setup: </span>
                          <span className="text-green-400">{service.setupTime}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {getServiceDescription(service)}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{service.customers}+ customers</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Trial: {service.trialDays} days</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                          <span className="text-xs text-gray-400 ml-1">({service.reviews})</span>
                        </div>
                      </div>

                      <a
                        href={service.link}
                        className="mt-4 inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 group"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filters.</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Innovation?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of companies already leveraging our cutting-edge services 
            to drive growth, efficiency, and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-200"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;
