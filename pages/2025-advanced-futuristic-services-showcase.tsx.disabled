import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Star, CheckCircle,
  Atom, Target, Heart,
  Globe, Zap, Lock,
  TrendingUp, Users, DollarSign, Award,
  Code, Cloud, Settings, Package, Server, Activity, Layers, Leaf,
  FileText, Factory, MessageCircle, Scale, Phone, Mail, MapPin, Link
} from 'lucide-react';

// Import our new advanced services
import { advancedFuturisticMicroSaasServices } from '../data/2025-advanced-futuristic-micro-saas-expansion';
import { advancedITInfrastructureServices } from '../data/2025-advanced-it-infrastructure-services';
import { advancedAIAutomationServices } from '../data/2025-advanced-ai-automation-services';

const AdvancedFuturisticServicesShowcase = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all services
  const allServices = [
    ...advancedFuturisticMicroSaasServices,
    ...advancedITInfrastructureServices,
    ...advancedAIAutomationServices
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];



  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'development & devops':
        return 'from-blue-500 to-cyan-600';
      case 'cybersecurity & privacy':
        return 'from-purple-600 to-indigo-700';
      case 'business automation & ai':
        return 'from-green-500 to-emerald-600';
      case 'edge computing & iot':
        return 'from-orange-500 to-red-600';
      case 'customer experience & ai':
        return 'from-pink-500 to-rose-600';
      case 'blockchain & supply chain':
        return 'from-yellow-500 to-orange-600';
      case 'financial technology & ai':
        return 'from-green-600 to-emerald-700';
      case 'quantum computing & ai':
        return 'from-indigo-600 to-purple-700';
      case 'cloud infrastructure & governance':
        return 'from-blue-500 to-indigo-600';
      case 'network security & access':
        return 'from-green-600 to-emerald-700';
      case 'it operations & ai':
        return 'from-purple-500 to-pink-600';
      case 'container security & devops':
        return 'from-orange-500 to-red-600';
      case 'data center & infrastructure':
        return 'from-gray-600 to-slate-700';
      case 'network performance & ai':
        return 'from-blue-600 to-cyan-700';
      case 'hybrid cloud & management':
        return 'from-indigo-500 to-purple-600';
      case 'data center & sustainability':
        return 'from-yellow-500 to-orange-600';
      case 'document processing & ai':
        return 'from-blue-500 to-indigo-600';
      case 'industrial ai & iot':
        return 'from-orange-500 to-red-600';
      case 'marketing & ai':
        return 'from-green-500 to-emerald-600';
      case 'customer service & ai':
        return 'from-blue-500 to-cyan-600';
      case 'sales & ai':
        return 'from-green-600 to-emerald-700';
      case 'human resources & ai':
        return 'from-purple-500 to-pink-600';
      case 'legal technology & ai':
        return 'from-indigo-600 to-purple-700';
      default:
        return 'from-gray-500 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEO 
        title="2025 Advanced Futuristic Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge advanced futuristic micro SAAS services, IT infrastructure solutions, and AI automation platforms. Transform your business with innovative technology solutions."
        keywords={["advanced futuristic services", "micro SAAS", "IT infrastructure", "AI automation", "quantum computing", "blockchain", "edge computing", "cybersecurity"]}
        image="/og-image-advanced-futuristic-services.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              2025 Advanced Futuristic Services
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge micro SAAS solutions, advanced IT infrastructure, 
              and intelligent AI automation platforms designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center text-white">
                <Award className="w-5 h-5 mr-2" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center text-white">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>Proven ROI Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900">Ready to Transform Your Business?</h3>
              <p className="text-gray-600">Get in touch with our experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center text-gray-700">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Advanced Futuristic Services ({filteredServices.length})
          </h2>
          <p className="text-gray-600">
            Discover our comprehensive portfolio of cutting-edge services designed to drive innovation and growth.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </motion.div>
          ) : (
            <motion.div
              key={`${viewMode}-${searchTerm}-${selectedCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-6'
              }
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 ${
                    viewMode === 'list' ? 'p-6' : 'p-6'
                  }`}
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center text-white text-2xl`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-sm text-gray-600">{service.category}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-700 mb-4 line-clamp-3">{service.description}</p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${service.price.monthly}
                      </span>
                      <span className="text-gray-600">/month</span>
                      <span className="text-sm text-gray-500">
                        or ${service.price.yearly}/year
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {service.price.trialDays}-day free trial • Setup: {service.price.setupTime}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <p className="text-sm text-gray-500">
                          +{service.features.length - 3} more features
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI and Stats */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">ROI:</span>
                      <span className="font-medium text-green-600">{service.roi}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-gray-600">Customers:</span>
                      <span className="font-medium text-gray-900">{service.customers.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium text-gray-900 ml-1">{service.rating}</span>
                        <span className="text-gray-500 ml-1">({service.reviews})</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 mr-3"
                    >
                      Learn More
                    </a>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement these cutting-edge solutions 
            and drive innovation across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
          <div className="mt-8 text-indigo-100">
            <p className="text-sm">
              <MapPin className="w-4 h-4 inline mr-1" />
              364 E Main St STE 1008, Middletown DE 19709
            </p>
            <p className="text-sm mt-2">
              Visit us at: <a href="https://ziontechgroup.com" className="underline hover:text-white">ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedFuturisticServicesShowcase;