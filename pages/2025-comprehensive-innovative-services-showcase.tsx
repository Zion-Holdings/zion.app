import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, BarChart3, TrendingUp, Phone, Mail, MapPin,
  Star, Users, Zap, Globe, Lock, TrendingUp as TrendingUpIcon
} from 'lucide-react';

// Import all our innovative services
import { advancedCybersecurityAutomationServices } from '../data/2025-advanced-cybersecurity-automation';
import { aiPoweredBusinessAutomationServices } from '../data/2025-ai-powered-business-automation';
import { advancedCloudDevOpsSolutions } from '../data/2025-advanced-cloud-devops-solutions';
import { advancedDataAnalyticsSolutions } from '../data/2025-advanced-data-analytics-solutions';
import { fintechBlockchainInnovations } from '../data/2025-fintech-blockchain-innovations';
import { healthcareBiotechInnovations } from '../data/2025-healthcare-biotech-innovations';

const ComprehensiveInnovativeServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...advancedCybersecurityAutomationServices,
    ...aiPoweredBusinessAutomationServices,
    ...advancedCloudDevOpsSolutions,
    ...advancedDataAnalyticsSolutions,
    ...fintechBlockchainInnovations,
    ...healthcareBiotechInnovations
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-6 h-6" />, color: 'from-gray-500 to-slate-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-6 h-6" />, color: 'from-red-500 to-orange-500' },
    { id: 'ai-automation', name: 'AI Automation', icon: <Brain className="w-6 h-6" />, color: 'from-blue-500 to-purple-500' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: <Rocket className="w-6 h-6" />, color: 'from-blue-500 to-indigo-600' },
    { id: 'data-analytics', name: 'Data & Analytics', icon: <BarChart3 className="w-6 h-6" />, color: 'from-purple-500 to-pink-600' },
    { id: 'fintech-blockchain', name: 'Fintech & Blockchain', icon: <TrendingUp className="w-6 h-6" />, color: 'from-green-500 to-emerald-600' },
    { id: 'healthcare-biotech', name: 'Healthcare & Biotech', icon: <Heart className="w-6 h-6" />, color: 'from-red-500 to-pink-500' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.category.includes(selectedCategory);
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const getServiceCategory = (service: any) => {
    if (service.category) return service.category;
    return 'Other';
  };

  const getServicePricing = (service: any) => {
    if (service.pricing?.starter) return `$${service.pricing.starter}/month`;
    return 'Contact for pricing';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEO 
        title="2025 Comprehensive Innovative Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms. Cutting-edge cybersecurity, cloud DevOps, data analytics, fintech, and healthcare solutions."
        keywords={["micro SAAS", "IT services", "AI solutions", "cybersecurity", "cloud DevOps", "data analytics", "fintech", "blockchain", "healthcare", "biotechnology", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              2025 Comprehensive Innovative Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge portfolio of micro SAAS services, IT solutions, and AI-powered platforms that are transforming industries worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">AI & Machine Learning</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Cybersecurity</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Cloud & DevOps</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Data Analytics</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Fintech & Blockchain</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Healthcare & Biotech</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 transition-colors ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'all' ? 'All Services' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {filteredServices.length} services available
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{service.icon}</span>
                      {service.popular && (
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.tagline}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-blue-600">{getServicePricing(service)}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{service.rating}</span>
                        <span className="text-sm text-gray-400">({service.reviews})</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{getServiceCategory(service)}</span>
                      <a
                        href={service.link}
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-6"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{service.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        {service.popular && (
                          <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{service.tagline}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <span className="text-sm font-medium text-gray-500">Pricing</span>
                          <p className="text-lg font-bold text-blue-600">{getServicePricing(service)}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Category</span>
                          <p className="text-gray-700">{getServiceCategory(service)}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Rating</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-gray-700">{service.rating} ({service.reviews})</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <a
                          href={service.link}
                          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Our innovative services are designed to drive growth, improve efficiency, and create competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get Started Today</span>
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Leading provider of innovative micro SAAS services, IT solutions, and AI-powered platforms.
              </p>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Innovation First</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUpIcon className="w-4 h-4 text-purple-400" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com" className="hover:text-white transition-colors">ziontechgroup.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensiveInnovativeServicesShowcase;