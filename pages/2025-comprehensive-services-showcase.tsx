import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Cloud, Cpu, Star, Users, TrendingUp,
  CheckCircle, Clock, DollarSign, Globe, Zap, Mail
} from 'lucide-react';

// Import our new service data
import { innovativeServicesExpansionQ4 } from '../data/2025-innovative-services-expansion-q4';
import { advancedITSolutionsExpansion } from '../data/2025-advanced-it-solutions-expansion';
import { advancedAIServicesExpansion } from '../data/2025-advanced-ai-services-expansion';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...innovativeServicesExpansionQ4,
    ...advancedITSolutionsExpansion,
    ...advancedAIServicesExpansion
  ];

  // Service categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI Services', icon: <Brain className="w-5 h-5" />, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Tech', icon: <Atom className="w-5 h-5" />, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, color: 'from-red-500 to-orange-500' },
    { id: 'space', name: 'Space Tech', icon: <Rocket className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: <Target className="w-5 h-5" />, color: 'from-emerald-500 to-teal-500' },
    { id: 'it', name: 'IT Services', icon: <Cpu className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Zap className="w-5 h-5" />, color: 'from-gray-500 to-slate-500' }
  ];

  // Filter services
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  const getServiceCategory = (service: any) => {
    if (service.category.includes('AI')) return 'ai';
    if (service.category.includes('Quantum')) return 'quantum';
    if (service.category.includes('Cybersecurity') || service.category.includes('Security')) return 'cybersecurity';
    if (service.category.includes('Space')) return 'space';
    if (service.category.includes('Business') || service.category.includes('Sales') || service.category.includes('Marketing')) return 'business';
    if (service.category.includes('IT') || service.category.includes('Infrastructure')) return 'it';
    if (service.category.includes('Manufacturing')) return 'manufacturing';
    return 'other';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Services Showcase | Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative micro SAAS, IT, and AI services. Revolutionary solutions for the future of business and technology."
        keywords={["AI services", "quantum computing", "cybersecurity", "space technology", "business solutions", "IT services", "micro SAAS", "Zion Tech Group"]}
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                2025 Services
              </span>
              <br />
              <span className="text-white">Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary micro SAAS, IT, and AI services that transform businesses and drive innovation. 
              Discover the future of technology with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Globe className="w-6 h-6" />
              <span className="font-semibold">https://ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Users className="w-6 h-6" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-purple-500 text-white' : 'bg-white/20 text-gray-300 hover:bg-white/30'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-purple-500 text-white' : 'bg-white/20 text-gray-300 hover:bg-white/30'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Services Count */}
        <div className="text-center mb-8">
          <p className="text-gray-300 text-lg">
            Showing <span className="text-purple-400 font-semibold">{filteredServices.length}</span> of{' '}
            <span className="text-purple-400 font-semibold">{allServices.length}</span> services
          </p>
        </div>

        {/* Services Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-purple-400/50"
              >
                {/* Service Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    getServiceCategory(service) === 'ai' ? 'bg-cyan-500/20 text-cyan-300' :
                    getServiceCategory(service) === 'quantum' ? 'bg-blue-500/20 text-blue-300' :
                    getServiceCategory(service) === 'cybersecurity' ? 'bg-red-500/20 text-red-300' :
                    getServiceCategory(service) === 'space' ? 'bg-indigo-500/20 text-indigo-300' :
                    getServiceCategory(service) === 'business' ? 'bg-emerald-500/20 text-emerald-300' :
                    getServiceCategory(service) === 'it' ? 'bg-blue-500/20 text-blue-300' :
                    getServiceCategory(service) === 'manufacturing' ? 'bg-gray-500/20 text-gray-300' :
                    'bg-purple-500/20 text-purple-300'
                  }`}>
                    {service.category}
                  </div>
                </div>

                {/* Service Name and Tagline */}
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>

                {/* Pricing */}
                <div className="flex items-center space-x-2 mb-4">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-white font-semibold">
                    ${service.pricing.starter} - ${service.pricing.enterprise}
                  </span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.keyFeatures.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-gray-300 text-xs">{feature}</span>
                      </div>
                    ))}
                    {service.keyFeatures.length > 3 && (
                      <span className="text-purple-300 text-xs">+{service.keyFeatures.length - 3} more features</span>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        <span className="text-gray-300 text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Setup: {service.pricing.setupTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{service.rating}/5 ({service.reviews} reviews)</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
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
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-purple-400/50"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left Column */}
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            getServiceCategory(service) === 'ai' ? 'bg-cyan-500/20 text-cyan-300' :
                            getServiceCategory(service) === 'quantum' ? 'bg-blue-500/20 text-blue-300' :
                            getServiceCategory(service) === 'cybersecurity' ? 'bg-red-500/20 text-red-300' :
                            getServiceCategory(service) === 'space' ? 'bg-indigo-500/20 text-indigo-300' :
                            getServiceCategory(service) === 'business' ? 'bg-emerald-500/20 text-emerald-300' :
                            getServiceCategory(service) === 'it' ? 'bg-blue-500/20 text-blue-300' :
                            getServiceCategory(service) === 'manufacturing' ? 'bg-gray-500/20 text-gray-300' :
                            'bg-purple-500/20 text-purple-300'
                          }`}>
                          {service.category}
                        </div>
                        </div>
                        <p className="text-gray-300 text-lg mb-3">{service.tagline}</p>
                        <p className="text-gray-400 mb-4">{service.description}</p>
                        
                        {/* Pricing */}
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-green-400" />
                            <span className="text-white font-semibold">Starter: ${service.pricing.starter}/month</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-blue-400" />
                            <span className="text-white font-semibold">Enterprise: ${service.pricing.enterprise}/month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:w-80">
                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.keyFeatures.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span className="text-gray-300 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>Setup: {service.pricing.setupTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{service.rating}/5 ({service.reviews} reviews)</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Contact our team of experts to learn how our innovative services can drive your business forward. 
            Get personalized solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule a Demo
            </motion.button>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Globe className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <p className="text-purple-100">https://ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-purple-100">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-purple-100">kleber@ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;