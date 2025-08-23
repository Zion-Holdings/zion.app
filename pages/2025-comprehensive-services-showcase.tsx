import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Globe, Lock, Server, Cloud, Database,
  Smartphone, Mail, Calendar, DollarSign, Clipboard,
  Star, Users, TrendingUp, Zap, Cpu, Phone, MapPin
} from 'lucide-react';

// Import our new service data
import { advancedEnterpriseSolutions2025 } from '../data/2025-advanced-enterprise-solutions';
import { innovativeAIAutomationServices2025 } from '../data/2025-innovative-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';

// Create unified services array
const allServices = [
  ...advancedEnterpriseSolutions2025,
  ...innovativeAIAutomationServices2025,
  ...innovativeITInfrastructureServices2025,
  ...innovativeMicroSaasSolutions2025,
  ...realMicroSaasServices,
  ...innovativeAIServices,
  ...enterpriseITServices
];

// Service categories
const categories = [
  'All Services',
  'Enterprise Solutions',
  'AI & Automation',
  'IT Infrastructure',
  'Micro SAAS',
  'Cloud Services',
  'Security',
  'Analytics',
  'Marketing',
  'Finance',
  'HR & Operations'
];

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        service.name.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Enterprise Solutions': <Building className="w-5 h-5" />,
      'AI & Automation': <Brain className="w-5 h-5" />,
      'IT Infrastructure': <Server className="w-5 h-5" />,
      'Micro SAAS': <Globe className="w-5 h-5" />,
      'Cloud Services': <Cloud className="w-5 h-5" />,
      'Security': <Shield className="w-5 h-5" />,
      'Analytics': <TrendingUp className="w-5 h-5" />,
      'Marketing': <Target className="w-5 h-5" />,
      'Finance': <DollarSign className="w-5 h-5" />,
      'HR & Operations': <Users className="w-5 h-5" />
    };
    return iconMap[category] || <Rocket className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Enterprise Solutions': 'from-blue-500 to-indigo-600',
      'AI & Automation': 'from-purple-500 to-violet-600',
      'IT Infrastructure': 'from-green-500 to-emerald-600',
      'Micro SAAS': 'from-orange-500 to-amber-600',
      'Cloud Services': 'from-cyan-500 to-blue-600',
      'Security': 'from-red-500 to-pink-600',
      'Analytics': 'from-teal-500 to-cyan-600',
      'Marketing': 'from-pink-500 to-rose-600',
      'Finance': 'from-emerald-500 to-green-600',
      'HR & Operations': 'from-amber-500 to-orange-600'
    };
    return colorMap[category] || 'from-gray-500 to-slate-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <SEO 
        title="2025 Comprehensive Services Showcase | Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative micro SAAS, IT services, and AI solutions. From enterprise solutions to cutting-edge automation, discover how we can transform your business."
        keywords={["micro SAAS", "IT services", "AI solutions", "enterprise software", "cloud infrastructure", "automation", "digital transformation"]}
        image="/og-services-showcase.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            2025 Comprehensive Services Showcase
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
          >
            Discover our innovative portfolio of micro SAAS, IT services, and AI solutions designed to transform your business
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center space-x-2 text-white">
              <Check className="w-5 h-5" />
              <span>500+ Services Available</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Check className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Check className="w-5 h-5" />
              <span>Enterprise Grade</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
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
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </div>

          {/* Services Display */}
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{service.icon}</span>
                        {service.popular && (
                          <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-blue-100 text-sm">{service.tagline}</p>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                      
                      {/* Price */}
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-gray-900">
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                        </span>
                        <span className="text-gray-500">
                          {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                        </span>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {getCategoryIcon(service.category)}
                          <span className="ml-1">{service.category}</span>
                        </span>
                      </div>

                      {/* Action Button */}
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Service Icon and Basic Info */}
                        <div className="flex items-start space-x-4">
                          <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                            <span className="text-3xl">{service.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                              {service.popular && (
                                <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                                  POPULAR
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-2">{service.tagline}</p>
                            <p className="text-gray-700">{service.description}</p>
                          </div>
                        </div>

                        {/* Price and Features */}
                        <div className="lg:w-1/3">
                          <div className="text-right mb-4">
                            <span className="text-3xl font-bold text-gray-900">
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                            </span>
                            <span className="text-gray-500">
                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>
                          </div>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Category and Action */}
                          <div className="flex flex-col items-end space-y-3">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                              {getCategoryIcon(service.category)}
                              <span className="ml-1">{service.category}</span>
                            </span>
                            
                            <a
                              href={service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team of experts is ready to help you implement the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase;