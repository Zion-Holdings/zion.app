import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import UltraFuturisticNavigation2046 from '../components/layout/UltraFuturisticNavigation2046';
import UltraFuturisticFooter2046 from '../components/layout/UltraFuturisticFooter2046';
import { 
  Search, Grid, List, Filter, Star, Check, ArrowRight, ExternalLink,
  Brain, Atom, Shield, Target, Rocket, Globe, Cpu, Database, 
  TrendingUp, Users, Award, Clock, Zap, Heart, Palette, Cloud,
  Phone, Mail, MapPin, DollarSign, BarChart3, ShoppingCart
} from 'lucide-react';

// Import our new additional 2025 services
import { additionalRealMicroSaasServices2025 } from '../data/2025-additional-real-micro-saas-services';
import { additionalITInfrastructureServices2025 } from '../data/2025-additional-it-infrastructure-services';
import { additionalAIServices2025 } from '../data/2025-additional-ai-services';

const ComprehensiveServicesShowcaseEnhanced: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Combine all new services
  const allNewServices = [
    ...additionalRealMicroSaasServices2025,
    ...additionalITInfrastructureServices2025,
    ...additionalAIServices2025
  ];

  // Filter services based on search and category
  const filteredServices = allNewServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.price.monthly - b.price.monthly;
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.customers - a.customers;
      default:
        return 0;
    }
  });

  const categories = [
    { id: 'all', name: 'All Services', count: allNewServices.length, color: 'from-gray-500 to-slate-500' },
    { id: 'legal', name: 'Legal Technology', count: allNewServices.filter(s => s.category.includes('Legal')).length, color: 'from-blue-500 to-indigo-600' },
    { id: 'supply', name: 'Supply Chain', count: allNewServices.filter(s => s.category.includes('Supply')).length, color: 'from-green-500 to-emerald-600' },
    { id: 'customer', name: 'Customer Support', count: allNewServices.filter(s => s.category.includes('Customer')).length, color: 'from-purple-500 to-pink-600' },
    { id: 'project', name: 'Project Management', count: allNewServices.filter(s => s.category.includes('Project')).length, color: 'from-orange-500 to-red-600' },
    { id: 'hr', name: 'Human Resources', count: allNewServices.filter(s => s.category.includes('Human')).length, color: 'from-teal-500 to-cyan-600' },
    { id: 'finance', name: 'Finance & Accounting', count: allNewServices.filter(s => s.category.includes('Finance')).length, color: 'from-green-500 to-emerald-600' },
    { id: 'marketing', name: 'Marketing & Automation', count: allNewServices.filter(s => s.category.includes('Marketing')).length, color: 'from-purple-500 to-pink-600' },
    { id: 'ecommerce', name: 'E-commerce & Analytics', count: allNewServices.filter(s => s.category.includes('E-commerce')).length, color: 'from-blue-500 to-indigo-600' },
    { id: 'education', name: 'Education & Training', count: allNewServices.filter(s => s.category.includes('Education')).length, color: 'from-indigo-500 to-purple-600' },
    { id: 'cloud', name: 'Cloud Infrastructure', count: allNewServices.filter(s => s.category.includes('Cloud')).length, color: 'from-blue-500 to-cyan-600' },
    { id: 'devops', name: 'DevOps & Automation', count: allNewServices.filter(s => s.category.includes('DevOps')).length, color: 'from-orange-500 to-red-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', count: allNewServices.filter(s => s.category.includes('Cybersecurity')).length, color: 'from-red-500 to-pink-600' },
    { id: 'edge', name: 'Edge Computing', count: allNewServices.filter(s => s.category.includes('Edge')).length, color: 'from-green-500 to-teal-600' },
    { id: 'datacenter', name: 'Data Center', count: allNewServices.filter(s => s.category.includes('Data Center')).length, color: 'from-gray-500 to-slate-600' },
    { id: 'network', name: 'Network Infrastructure', count: allNewServices.filter(s => s.category.includes('Network')).length, color: 'from-blue-500 to-indigo-600' },
    { id: 'storage', name: 'Storage & Data', count: allNewServices.filter(s => s.category.includes('Storage')).length, color: 'from-purple-500 to-pink-600' },
    { id: 'analytics', name: 'Predictive Analytics', count: allNewServices.filter(s => s.category.includes('Analytics')).length, color: 'from-blue-500 to-indigo-600' },
    { id: 'nlp', name: 'Natural Language Processing', count: allNewServices.filter(s => s.category.includes('Natural Language')).length, color: 'from-green-500 to-emerald-600' },
    { id: 'vision', name: 'Computer Vision', count: allNewServices.filter(s => s.category.includes('Computer Vision')).length, color: 'from-purple-500 to-pink-600' },
    { id: 'recommendation', name: 'Recommendation Systems', count: allNewServices.filter(s => s.category.includes('Recommendation')).length, color: 'from-orange-500 to-red-600' },
    { id: 'chatbot', name: 'Conversational AI', count: allNewServices.filter(s => s.category.includes('Conversational')).length, color: 'from-blue-500 to-cyan-600' },
    { id: 'testing', name: 'Software Testing', count: allNewServices.filter(s => s.category.includes('Software Testing')).length, color: 'from-green-500 to-teal-600' },
    { id: 'dataquality', name: 'Data Quality', count: allNewServices.filter(s => s.category.includes('Data Quality')).length, color: 'from-indigo-500 to-purple-600' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="2025 Comprehensive Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Real solutions with proven ROI and competitive pricing."
        keywords={["micro SAAS", "IT services", "AI services", "business solutions", "technology services", "Zion Tech Group"]}
      />
      
      <UltraFuturisticNavigation2046 />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6"
          >
            2025 Comprehensive Services Showcase
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. 
            Real solutions with proven ROI and competitive pricing.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Contact Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-sm text-gray-300">Mobile</p>
                <a href={`tel:${contactInfo.mobile}`} className="text-white font-semibold hover:text-blue-400 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-green-400 mb-2" />
                <p className="text-sm text-gray-300">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="text-white font-semibold hover:text-green-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-sm text-gray-300">Address</p>
                <p className="text-white font-semibold">{contactInfo.address}</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a 
                href={contactInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Visit our website <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{allNewServices.length}</div>
              <div className="text-sm text-gray-400">New Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">99.9%</div>
              <div className="text-sm text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">Global</div>
              <div className="text-sm text-gray-400">Reach</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white`
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price">Price: Low to High</option>
                <option value="name">Name A-Z</option>
              </select>
              
              <div className="flex bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-gray-400">
              Showing {filteredServices.length} of {allNewServices.length} services
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                  
                  {/* Category and Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-blue-400 bg-blue-900/30 px-2 py-1 rounded">
                      {service.category}
                    </span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">${service.price.monthly}/mo</div>
                      <div className="text-xs text-gray-400">${service.price.yearly}/year</div>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-300 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-400">
                          <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-300 mb-2">Key Benefits:</div>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-400">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>⭐ {service.rating} ({service.reviews} reviews)</span>
                    <span>👥 {service.customers.toLocaleString()} customers</span>
                  </div>

                  {/* CTA */}
                  <div className="space-y-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-700 transition-all flex items-center justify-center"
                    >
                      Contact Sales <Phone className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-4xl flex-shrink-0">{service.icon}</div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                          <p className="text-gray-400 text-sm mb-2">{service.tagline}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-blue-400 bg-blue-900/30 px-2 py-1 rounded">
                              {service.category}
                            </span>
                            {service.popular && (
                              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                                POPULAR
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">${service.price.monthly}/mo</div>
                          <div className="text-sm text-gray-400">${service.price.yearly}/year</div>
                          <div className="text-xs text-gray-500 mt-1">{service.price.trialDays}-day trial</div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">{service.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-300 mb-2 font-medium">Key Features:</div>
                          <div className="space-y-1">
                            {service.features.slice(0, 4).map((feature, index) => (
                              <div key={index} className="flex items-center text-xs text-gray-400">
                                <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-300 mb-2 font-medium">Key Benefits:</div>
                          <div className="space-y-1">
                            {service.benefits.slice(0, 4).map((benefit, index) => (
                              <div key={index} className="flex items-center text-xs text-gray-400">
                                <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>⭐ {service.rating} ({service.reviews} reviews)</span>
                          <span>👥 {service.customers.toLocaleString()} customers</span>
                          <span>🚀 {service.price.setupTime} setup</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <a
                            href={service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all flex items-center"
                          >
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                          <a
                            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                            className="bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all flex items-center"
                          >
                            Contact Sales <Phone className="w-4 h-4 ml-2" />
                          </a>
                        </div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our comprehensive suite of services is designed to drive innovation, efficiency, and growth. 
            Contact us today to discuss your specific needs and discover how we can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-lg text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href={`tel:${contactInfo.mobile}`}
              className="bg-gray-800 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-700 transition-all flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Visit our website for more information</p>
            <a 
              href={contactInfo.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium inline-flex items-center"
            >
              {contactInfo.website} <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <UltraFuturisticFooter2046 />
    </div>
  );
};

export default ComprehensiveServicesShowcaseEnhanced;