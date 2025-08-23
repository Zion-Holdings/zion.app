import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Building, Target, Cpu, Shield, 
  ArrowRight, Check, Star, Phone, Mail, MapPin,
  TrendingUp, Users, Zap, Globe, Lock
} from 'lucide-react';

// Import our new service data
import { advancedBusinessIntelligenceServices2025 } from '../data/2025-advanced-business-intelligence-services';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';

const ComprehensiveServicesShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allServices = [
    ...advancedBusinessIntelligenceServices2025,
    ...advancedAIAutomationServices2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeMicroSaasSolutions2025,
    ...cuttingEdgeAIServices2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Target className="w-5 h-5" /> },
    { id: 'business-intelligence', name: 'Business Intelligence', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'ai-automation', name: 'AI Automation', icon: <Brain className="w-5 h-5" /> },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: <Building className="w-5 h-5" /> },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Zap className="w-5 h-5" /> },
    { id: 'ai-services', name: 'AI Services', icon: <Cpu className="w-5 h-5" /> }
  ];

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => {
        if (activeTab === 'business-intelligence') return service.category?.includes('Business Intelligence') || service.category?.includes('Analytics');
        if (activeTab === 'ai-automation') return service.category?.includes('AI Automation');
        if (activeTab === 'it-infrastructure') return service.category?.includes('IT Infrastructure');
        if (activeTab === 'micro-saas') return service.category?.includes('Micro SAAS') || service.type === 'Micro SAAS';
        if (activeTab === 'ai-services') return service.category?.includes('AI Services') || service.type === 'AI Service';
        return true;
      });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="2025 Comprehensive Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Transform your business with cutting-edge solutions."
        keywords="micro SAAS, IT services, AI services, business intelligence, automation, cloud infrastructure"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              2025 Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your business with our innovative portfolio of micro SAAS, IT infrastructure, and AI services
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30">
                {allServices.length}+ Services
              </span>
              <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30">
                AI-Powered Solutions
              </span>
              <span className="bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30">
                Enterprise Ready
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-blue-100">Get in touch with our experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {service.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {service.category}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {service.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Pricing</h4>
                    <div className="space-y-1">
                      {service.pricing?.starter && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Starter:</span>
                          <span className="font-semibold text-green-600">{service.pricing.starter}</span>
                        </div>
                      )}
                      {service.pricing?.professional && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Professional:</span>
                          <span className="font-semibold text-blue-600">{service.pricing.professional}</span>
                        </div>
                      )}
                      {service.pricing?.enterprise && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Enterprise:</span>
                          <span className="font-semibold text-purple-600">{service.pricing.enterprise}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features?.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Market Size:</span>
                      <span className="font-semibold text-gray-900">{service.marketSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Target Audience:</span>
                      <span className="font-semibold text-gray-900">{service.targetAudience}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits?.slice(0, 4).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex flex-col gap-2">
                    <a
                      href={`mailto:${service.contact}?subject=Inquiry about ${service.name}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Get Started
                    </a>
                    <a
                      href={`tel:${service.mobile}`}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge AI and machine learning solutions that deliver real business value
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-grade security and compliance for mission-critical business applications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3>
              <p className="text-gray-600">
                Cloud-native solutions that scale globally with enterprise-grade reliability
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative services can help you achieve your business goals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Start Consultation
            </a>
            <a
              href="https://ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
            >
              <Globe className="w-5 h-5" />
              Visit Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;