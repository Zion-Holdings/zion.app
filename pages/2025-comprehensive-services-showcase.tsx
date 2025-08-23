import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Phone, Mail, MapPin, Star, Users, TrendingUp
} from 'lucide-react';

// Import our new service data
import { advancedAIMLServices } from '../data/2025-advanced-ai-ml-services';
import { advancedCybersecurityServices } from '../data/2025-advanced-cybersecurity-services';
import { advancedCloudDevOpsServices } from '../data/2025-advanced-cloud-devops-services';
import { industrySpecificSolutions } from '../data/2025-industry-specific-solutions';
import { emergingTechnologyServices } from '../data/2025-emerging-technology-services';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// All services combined
const allServices = [
  ...advancedAIMLServices,
  ...advancedCybersecurityServices,
  ...advancedCloudDevOpsServices,
  ...industrySpecificSolutions,
  ...emergingTechnologyServices
];

// Service categories
const serviceCategories = [
  'All Services',
  'AI & Machine Learning',
  'Cybersecurity',
  'Cloud & DevOps',
  'Industry Solutions',
  'Emerging Tech'
];

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {
    let filtered = allServices;
    
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'AI & Machine Learning') return service.category.includes('AI');
        if (selectedCategory === 'Cybersecurity') return service.category.includes('Security') || service.category.includes('Cybersecurity');
        if (selectedCategory === 'Cloud & DevOps') return service.category.includes('Cloud') || service.category.includes('DevOps');
        if (selectedCategory === 'Industry Solutions') return service.category.includes('Healthcare') || service.category.includes('Financial') || service.category.includes('Manufacturing') || service.category.includes('Retail');
        if (selectedCategory === 'Emerging Tech') return service.category.includes('Quantum') || service.category.includes('Blockchain') || service.category.includes('AR/VR') || service.category.includes('Robotics');
        return true;
      });
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory]);

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'from-purple-600 to-indigo-700';
    if (category.includes('Security') || category.includes('Cybersecurity')) return 'from-red-600 to-pink-700';
    if (category.includes('Cloud') || category.includes('DevOps')) return 'from-blue-600 to-cyan-700';
    if (category.includes('Healthcare') || category.includes('Financial') || category.includes('Manufacturing') || category.includes('Retail')) return 'from-green-600 to-emerald-700';
    if (category.includes('Quantum') || category.includes('Blockchain') || category.includes('AR/VR') || category.includes('Robotics')) return 'from-orange-600 to-yellow-700';
    return 'from-gray-600 to-slate-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, and AI services. From advanced AI/ML to cybersecurity, cloud infrastructure, and emerging technologies."
        keywords={["micro SAAS", "AI services", "cybersecurity", "cloud infrastructure", "DevOps", "healthcare AI", "fintech", "manufacturing IoT", "quantum computing", "blockchain", "AR/VR", "robotics"]}
        image="https://ziontechgroup.com/og-image.jpg"
        url="https://ziontechgroup.com/2025-comprehensive-services-showcase"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              2025 Comprehensive
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services Showcase
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Discover our comprehensive portfolio of innovative micro SAAS services, cutting-edge IT solutions, and advanced AI services. 
              From enterprise-grade AI/ML platforms to cybersecurity solutions, cloud infrastructure, and emerging technologies.
            </motion.p>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 inline-block"
            >
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold">{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-white/20 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${viewMode}-${selectedCategory}-${searchTerm}`}
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
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex gap-6' : ''
                }`}
              >
                {/* Service Icon and Header */}
                <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-4`}>
                    {service.icon}
                  </div>
                  {viewMode === 'list' && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                      <div className="text-gray-300 text-sm">{service.period}</div>
                    </div>
                  )}
                </div>

                {/* Service Content */}
                <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    {viewMode === 'grid' && (
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-gray-300 text-sm">{service.period}</div>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.tagline}</p>
                  
                  {viewMode === 'list' && (
                    <p className="text-gray-400 mb-4">{service.description}</p>
                  )}

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="text-gray-400">
                      <span className="block">Market Size:</span>
                      <span className="text-white font-semibold">{service.marketSize}</span>
                    </div>
                    <div className="text-gray-400">
                      <span className="block">Growth Rate:</span>
                      <span className="text-white font-semibold">{service.growthRate}</span>
                    </div>
                  </div>

                  {/* ROI and Popularity */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-400">
                      <span className="block">ROI:</span>
                      <span className="text-green-400 font-semibold">{service.roi.split(' ')[0]} ROI</span>
                    </div>
                    {service.popular && (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold">Popular</span>
                      </div>
                    )}
                  </div>

                  {/* Contact and Action */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Users className="w-3 h-3" />
                        <span>{service.customers.toLocaleString()} customers</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current text-yellow-400" />
                        <span>{service.rating} ({service.reviews} reviews)</span>
                      </div>
                    </div>
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Services');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our comprehensive suite of innovative services is designed to drive your business forward. 
            From AI-powered solutions to cutting-edge cybersecurity, we have the expertise to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              <Phone className="w-5 h-5" />
              Call {contactInfo.mobile}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors font-semibold text-lg"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="bg-slate-800/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Why Choose Zion Tech Group?</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Enterprise-grade solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>24/7 expert support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Proven ROI track record</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Cutting-edge technology</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Market Insights</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span>AI market: $500B+ by 2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span>Cybersecurity: $300B+ market</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span>Cloud services: $1T+ market</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;