import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Star, Users, TrendingUp, Zap, Phone, Mail, MapPin, Cloud
} from 'lucide-react';

// Import all our new innovative services
import { advancedCybersecurityAutomationServices2025 } from '../data/2025-advanced-cybersecurity-automation-services';
import { aiAutomationWorkflowServices2025 } from '../data/2025-ai-automation-workflow-services';
import { cloudDevOpsAutomationServices2025 } from '../data/2025-cloud-devops-automation-services';
import { businessIntelligenceAutomationServices2025 } from '../data/2025-business-intelligence-automation-services';
import { marketingAutomationAIServices2025 } from '../data/2025-marketing-automation-ai-services';
import { healthcareAISpecializedServices2025 } from '../data/2025-healthcare-ai-specialized-services';

// Combine all services
const allInnovativeServices = [
  ...advancedCybersecurityAutomationServices2025,
  ...aiAutomationWorkflowServices2025,
  ...cloudDevOpsAutomationServices2025,
  ...businessIntelligenceAutomationServices2025,
  ...marketingAutomationAIServices2025,
  ...healthcareAISpecializedServices2025
];

const InnovativeServicesExpandedShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('name');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allInnovativeServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allInnovativeServices
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (searchTerm === '' || 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.customers - a.customers;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="2025 Innovative Services Expanded Showcase | Zion Tech Group"
        description="Discover our comprehensive suite of innovative micro SAAS services, IT solutions, and AI-powered platforms. From cybersecurity automation to healthcare AI diagnostics."
        keywords={[
          'micro SAAS', 'IT services', 'AI services', 'cybersecurity automation', 
          'business intelligence', 'marketing automation', 'healthcare AI', 'cloud DevOps'
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Innovative Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Expanded Showcase 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-blue-600 mb-2" />
              <p className="text-sm text-gray-600">Phone</p>
              <a href="tel:+13024640950" className="text-blue-600 font-semibold hover:underline">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-blue-600 mb-2" />
              <p className="text-sm text-gray-600">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 font-semibold hover:underline">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <p className="text-sm text-gray-600">Address</p>
              <p className="text-gray-800 font-semibold">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative services span across cybersecurity, AI automation, cloud DevOps, business intelligence, marketing automation, and healthcare AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: "Cybersecurity & AI",
                description: "Advanced threat detection, zero-trust access control, and automated compliance management",
                count: advancedCybersecurityAutomationServices2025.length,
                color: "from-red-500 to-red-700"
              },
              {
                icon: Brain,
                title: "AI & Process Automation",
                description: "Intelligent workflow automation, customer service automation, and data analytics",
                count: aiAutomationWorkflowServices2025.length,
                color: "from-purple-500 to-purple-700"
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                description: "Cloud cost optimization, automated pipelines, and Kubernetes management",
                count: cloudDevOpsAutomationServices2025.length,
                color: "from-blue-500 to-blue-700"
              },
              {
                icon: TrendingUp,
                title: "Business Intelligence",
                description: "AI-powered analytics, financial insights, and sales intelligence",
                count: businessIntelligenceAutomationServices2025.length,
                color: "from-green-500 to-green-700"
              },
              {
                icon: Target,
                title: "Marketing Automation",
                description: "AI marketing automation, social media management, and content optimization",
                count: marketingAutomationAIServices2025.length,
                color: "from-pink-500 to-pink-700"
              },
              {
                icon: Heart,
                title: "Healthcare AI",
                description: "Medical diagnostics, compliance automation, and telemedicine platforms",
                count: healthcareAISpecializedServices2025.length,
                color: "from-indigo-500 to-indigo-700"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {category.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {category.count} Services
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="popularity">Sort by Popularity</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} rounded-l-lg hover:bg-blue-50 transition-colors`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} rounded-r-lg hover:bg-blue-50 transition-colors`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={viewMode === 'grid' ? 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden' : 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6'}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div>
                    <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                        {service.popular && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{service.tagline}</p>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-blue-600">
                          ${service.price.monthly}
                          <span className="text-sm text-gray-500 font-normal">/month</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">{service.rating}</span>
                          <span className="ml-1 text-xs text-gray-500">({service.reviews})</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {service.customers.toLocaleString()} customers
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Zap className="w-4 h-4 mr-2" />
                          {service.price.setupTime} setup
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            <Check className="w-3 h-3 mr-1" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      <a
                        href={service.link}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex gap-6">
                    <div className={`w-24 h-24 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                        <div className="flex items-center gap-4">
                          {service.popular && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </span>
                          )}
                          <div className="text-2xl font-bold text-blue-600">
                            ${service.price.monthly}
                            <span className="text-sm text-gray-500 font-normal">/month</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{service.tagline}</p>
                      <p className="text-gray-700 mb-3">{service.description}</p>
                      
                      <div className="flex items-center gap-6 mb-3 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          {service.rating} ({service.reviews})
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {service.customers.toLocaleString()} customers
                        </div>
                        <div className="flex items-center">
                          <Zap className="w-4 h-4 mr-1" />
                          {service.price.setupTime} setup
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <span key={idx} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            <Check className="w-3 h-3 mr-1" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      <a
                        href={service.link}
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our innovative services to automate operations, enhance security, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Speak with an Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Innovative micro SAAS services, IT solutions, and AI-powered platforms for modern businesses.
              </p>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">
                  🌐 Website
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📱 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="https://ziontechgroup.com/services" className="block text-gray-400 hover:text-white transition-colors">
                  All Services
                </a>
                <a href="https://ziontechgroup.com/about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
                <a href="https://ziontechgroup.com/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
                <a href="https://ziontechgroup.com/support" className="block text-gray-400 hover:text-white transition-colors">
                  Support
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Categories</h4>
              <div className="space-y-2">
                <a href="#cybersecurity" className="block text-gray-400 hover:text-white transition-colors">
                  Cybersecurity & AI
                </a>
                <a href="#automation" className="block text-gray-400 hover:text-white transition-colors">
                  AI & Process Automation
                </a>
                <a href="#cloud" className="block text-gray-400 hover:text-white transition-colors">
                  Cloud & DevOps
                </a>
                <a href="#bi" className="block text-gray-400 hover:text-white transition-colors">
                  Business Intelligence
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com" className="hover:text-white transition-colors">ziontechgroup.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InnovativeServicesExpandedShowcase;