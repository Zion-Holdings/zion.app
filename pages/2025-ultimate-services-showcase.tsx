import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Cloud, Database, Lock, ChartBar,
  Zap, Globe, Users, Code, Server
} from 'lucide-react';

// Import all our new service data
import { advancedEnterpriseAutomationServices2025 } from '../data/2025-advanced-enterprise-automation-services';
import { advancedCybersecurityComplianceServices2025 } from '../data/2025-advanced-cybersecurity-compliance-services';
import { advancedDataAnalyticsBIServices } from '../data/2025-advanced-data-analytics-bi-services';
import { advancedCloudDevOpsServices } from '../data/2025-advanced-cloud-devops-services';
import { advancedAIMLServices } from '../data/2025-advanced-ai-ml-services';
import { advancedFintechBlockchainServices } from '../data/2025-advanced-fintech-blockchain-services';

// Combine all services
const allServices = [
  ...advancedEnterpriseAutomationServices2025,
  ...advancedCybersecurityComplianceServices2025,
  ...advancedDataAnalyticsBIServices,
  ...advancedCloudDevOpsServices,
  ...advancedAIMLServices,
  ...advancedFintechBlockchainServices
];

// Service categories
const serviceCategories = [
  'All Services',
  'Enterprise Automation',
  'Cybersecurity & Compliance',
  'Data Analytics & BI',
  'Cloud & DevOps',
  'AI & Machine Learning',
  'Fintech & Blockchain'
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Enterprise Automation': return <Building className="w-6 h-6" />;
    case 'Cybersecurity & Compliance': return <Shield className="w-6 h-6" />;
    case 'Data Analytics & BI': return <ChartBar className="w-6 h-6" />;
    case 'Cloud & DevOps': return <Cloud className="w-6 h-6" />;
    case 'AI & Machine Learning': return <Brain className="w-6 h-6" />;
    case 'Fintech & Blockchain': return <Zap className="w-6 h-6" />;
    default: return <Rocket className="w-6 h-6" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Enterprise Automation': return 'from-blue-500 to-indigo-600';
    case 'Cybersecurity & Compliance': return 'from-red-500 to-pink-600';
    case 'Data Analytics & BI': return 'from-green-500 to-emerald-600';
    case 'Cloud & DevOps': return 'from-purple-500 to-violet-600';
    case 'AI & Machine Learning': return 'from-orange-500 to-red-600';
    case 'Fintech & Blockchain': return 'from-yellow-500 to-orange-600';
    default: return 'from-gray-500 to-gray-600';
  }
};

export default function UltimateServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {
    let filtered = allServices;
    
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => service.category === selectedCategory);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <SEO 
        title="2025 Ultimate Services Showcase - Zion Tech Group"
        description="Discover our comprehensive suite of innovative micro SAAS services, IT solutions, and AI services. From enterprise automation to blockchain compliance, we deliver cutting-edge solutions for modern businesses."
        keywords={["micro SAAS", "IT services", "AI services", "enterprise automation", "cybersecurity", "data analytics", "cloud DevOps", "fintech", "blockchain"]}
        ogImage="/og-image-2025-services.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            2025 Ultimate Services Showcase
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
          >
            Discover our comprehensive suite of innovative micro SAAS services, IT solutions, and AI services. 
            From enterprise automation to blockchain compliance, we deliver cutting-edge solutions for modern businesses.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center space-x-2 text-white">
              <Check className="w-5 h-5 text-green-300" />
              <span>50+ Innovative Services</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Check className="w-5 h-5 text-green-300" />
              <span>Enterprise-Grade Solutions</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Check className="w-5 h-5 text-green-300" />
              <span>24/7 Expert Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-6 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
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
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
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
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
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
                    <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl">{service.icon}</span>
                        {service.popular && (
                          <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
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
                      
                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-3xl font-bold text-gray-900">
                            ${service.price.monthly.toLocaleString()}
                          </span>
                          <span className="text-gray-500">/month</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          ${service.price.yearly.toLocaleString()}/year (save 17%)
                        </p>
                      </div>

                      {/* Key Features */}
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

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                        <div>
                          <div className="text-lg font-bold text-blue-600">{service.customers.toLocaleString()}+</div>
                          <div className="text-xs text-gray-500">Customers</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-600">{service.rating}</div>
                          <div className="text-xs text-gray-500">Rating</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-purple-600">{service.reviews.toLocaleString()}</div>
                          <div className="text-xs text-gray-500">Reviews</div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <a
                        href={service.link}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center block"
                      >
                        Learn More & Get Started
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
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Service Info */}
                      <div className="flex-1 p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-4 rounded-lg text-white`}>
                            <span className="text-3xl">{service.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                              {service.popular && (
                                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                                  POPULAR
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-lg mb-3">{service.tagline}</p>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            
                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                                <ul className="space-y-1">
                                  {service.features.slice(0, 5).map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                                <ul className="space-y-1">
                                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                      <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Pricing & CTA */}
                      <div className="lg:w-80 bg-gray-50 p-6 flex flex-col justify-between">
                        <div>
                          {/* Pricing */}
                          <div className="mb-6">
                            <div className="text-center">
                              <div className="flex items-baseline justify-center space-x-2 mb-2">
                                <span className="text-4xl font-bold text-gray-900">
                                  ${service.price.monthly.toLocaleString()}
                                </span>
                                <span className="text-gray-500">/month</span>
                              </div>
                              <p className="text-sm text-gray-500 mb-2">
                                ${service.price.yearly.toLocaleString()}/year (save 17%)
                              </p>
                              <p className="text-xs text-gray-500">
                                {service.price.trialDays}-day free trial • Setup in {service.price.setupTime}
                              </p>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                            <div>
                              <div className="text-lg font-bold text-blue-600">{service.customers.toLocaleString()}+</div>
                              <div className="text-xs text-gray-500">Customers</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-green-600">{service.rating}</div>
                              <div className="text-xs text-gray-500">Rating</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-purple-600">{service.reviews.toLocaleString()}</div>
                              <div className="text-xs text-gray-500">Reviews</div>
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <a
                          href={service.link}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center block"
                        >
                          Learn More & Get Started
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement the perfect solution for your business needs. 
            Get in touch today to start your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 text-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 text-lg"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Import icons
import { Phone, Mail, MapPin } from 'lucide-react';