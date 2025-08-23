import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Star, Users, TrendingUp, Zap, Globe, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new advanced service data
import { advancedCybersecurityMicroSaasServices } from '../data/2025-advanced-cybersecurity-micro-saas';
import { advancedAIMLMicroSaasServices } from '../data/2025-advanced-ai-ml-micro-saas';
import { fintechBlockchainMicroSaasServices } from '../data/2025-fintech-blockchain-micro-saas';
import { healthcareBiotechMicroSaasServices } from '../data/2025-healthcare-biotech-micro-saas';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Combine all services
const allAdvancedServices = [
  ...advancedCybersecurityMicroSaasServices,
  ...advancedAIMLMicroSaasServices,
  ...fintechBlockchainMicroSaasServices,
  ...healthcareBiotechMicroSaasServices
];

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

export default function AdvancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allAdvancedServices.map(service => getServiceCategory(service))))];

  // Filter and sort services
  const filteredServices = allAdvancedServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || getServiceCategory(service) === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return (a.price?.monthly || 0) - (b.price?.monthly || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'popularity':
        default:
          return (b.customers || 0) - (a.customers || 0);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="2025 Advanced Micro SAAS Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of advanced micro SAAS services including cybersecurity, AI/ML, fintech, blockchain, healthcare, and biotech solutions. Real, innovative, and market-ready services."
        keywords={["micro SAAS", "cybersecurity", "AI services", "blockchain", "fintech", "healthcare", "biotech", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              2025 Advanced Micro SAAS Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Cutting-edge, real, and innovative micro SAAS solutions across cybersecurity, AI/ML, fintech, blockchain, healthcare, and biotech
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">{allAdvancedServices.length}+</div>
                <div className="text-sm">Advanced Services</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm">Uptime Guarantee</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Expert Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
              <a 
                href={contactInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort and View */}
            <div className="flex gap-4 items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price">Price: Low to High</option>
                <option value="name">Name A-Z</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                      viewMode === 'list' ? 'flex gap-6 p-6' : 'p-6'
                    }`}
                  >
                    {viewMode === 'list' ? (
                      // List View
                      <>
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl`}>
                            {service.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-600">{getServicePricing(service)}</div>
                              <div className="text-sm text-gray-500">per month</div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{getServiceDescription(service)}</p>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium">{service.rating}</span>
                              <span className="text-sm text-gray-500">({service.reviews})</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4 text-blue-400" />
                              <span className="text-sm text-gray-500">{service.customers.toLocaleString()}+ customers</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {getServiceFeatures(service).slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            <a
                              href={service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                              Learn More
                            </a>
                            <a
                              href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                              className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                            >
                              Contact Sales
                            </a>
                          </div>
                        </div>
                      </>
                    ) : (
                      // Grid View
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-xl`}>
                            {service.icon}
                          </div>
                          {service.popular && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">
                              Popular
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{getServiceDescription(service)}</p>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{service.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-gray-500">{service.customers.toLocaleString()}+</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-2xl font-bold text-blue-600">{getServicePricing(service)}</div>
                          <div className="text-sm text-gray-500">per month</div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {getServiceFeatures(service).slice(0, 2).map((feature, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <a
                            href={service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                          >
                            Learn More
                          </a>
                          <a
                            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                            className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                          >
                            Contact
                          </a>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver real, innovative, and market-ready micro SAAS solutions that transform businesses and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Implementation</h3>
              <p className="text-gray-600">All services are production-ready with proven track records and real customer success stories</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-gray-600">Our customers typically see 200-1000% ROI through improved efficiency and reduced costs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Support</h3>
              <p className="text-gray-600">24/7 expert support with dedicated specialists for each service category</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2, ISO 27001, and industry-specific compliance for maximum security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts help you choose the perfect micro SAAS solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call {contactInfo.mobile}
            </a>
            <a
              href={`mailto:${contactInfo.email}?subject=Micro SAAS Services Inquiry`}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-lg font-medium mb-2">Visit our headquarters:</p>
            <p className="text-sm">{contactInfo.address}</p>
            <a 
              href={contactInfo.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white underline mt-2 inline-block"
            >
              {contactInfo.website}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}