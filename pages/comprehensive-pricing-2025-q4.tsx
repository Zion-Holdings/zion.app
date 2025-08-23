import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Zap, Shield, Rocket, Brain, Atom, Target, 
  Star, TrendingUp, Users, Award, Globe, Phone, Mail, MapPin,
  ArrowRight, ExternalLink, Clock, DollarSign, Search, Filter,
  ChevronDown, ChevronUp
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovative2025Q4MicroSaasServices } from '../data/innovative-2025-q4-micro-saas-services';
import { innovative2025Q4ITServices } from '../data/innovative-2025-q4-it-services';
import { innovative2025Q4AIServices } from '../data/innovative-2025-q4-ai-services';

const ComprehensivePricing2025Q4: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" /> },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" /> },
    { id: 'it-services', name: 'IT Services', icon: <Shield className="w-5 h-5" /> },
    { id: 'ai-services', name: 'AI Services', icon: <Brain className="w-5 h-5" /> }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($50-150)', range: '50-150' },
    { id: 'mid-range', name: 'Mid-Range ($150-300)', range: '150-300' },
    { id: 'premium', name: 'Premium ($300+)', range: '300+' }
  ];

  const allServices = [
    ...innovative2025Q4MicroSaasServices.map(service => ({ ...service, category: 'micro-saas' })),
    ...innovative2025Q4ITServices.map(service => ({ ...service, category: 'it-services' })),
    ...innovative2025Q4AIServices.map(service => ({ ...service, category: 'ai-services' }))
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesPrice = true;
    if (priceRange === 'budget') matchesPrice = service.price.monthly >= 50 && service.price.monthly <= 150;
    else if (priceRange === 'mid-range') matchesPrice = service.price.monthly >= 150 && service.price.monthly <= 300;
    else if (priceRange === 'premium') matchesPrice = service.price.monthly >= 300;
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Helper function to get setup time from different service structures
  const getSetupTime = (service: any) => {
    if (service.setupTime) return service.setupTime;
    if (service.price?.setupTime) return service.price.setupTime;
    return 'Contact for details';
  };

  // Helper function to get trial days from different service structures
  const getTrialDays = (service: any) => {
    if (service.trialDays) return service.trialDays;
    if (service.price?.trialDays) return service.price.trialDays;
    return null;
  };

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

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
    <Layout>
      <SEO 
        title="Comprehensive Pricing Q4 2025 | Zion Tech Group"
        description="Complete pricing guide for our innovative micro SAAS, IT, and AI services. Compare features, benefits, and ROI across all our Q4 2025 solutions."
        keywords={["pricing", "micro SAAS pricing", "IT services pricing", "AI services pricing", "business solutions pricing"]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Pricing Guide
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Q4 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our innovative services. Compare features, benefits, and ROI to find the perfect solution for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span>Competitive Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Shield className="w-5 h-5 text-purple-400" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are priced competitively to provide maximum value while ensuring enterprise-grade quality and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Micro SAAS</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$59 - $149</div>
              <div className="text-gray-600 mb-4">per month</div>
              <p className="text-gray-700">Affordable solutions for small to medium businesses with proven ROI and enterprise features.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">IT Services</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$149 - $299</div>
              <div className="text-gray-600 mb-4">per month</div>
              <p className="text-gray-700">Enterprise-grade infrastructure, security, and DevOps solutions with comprehensive support.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Services</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">$159 - $399</div>
              <div className="text-gray-600 mb-4">per month</div>
              <p className="text-gray-700">Advanced AI and machine learning platforms with automated features and expert guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Details & Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Click on any service to see detailed features, benefits, and competitive analysis.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white cursor-pointer`} onClick={() => toggleServiceExpansion(service.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{service.name}</h3>
                        <p className="text-white/90 text-sm">{service.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold">${service.price.monthly}</div>
                        <div className="text-sm text-white/80">per month</div>
                      </div>
                      {expandedService === service.id ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Service Details */}
                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 border-t border-gray-100"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Description</h4>
                        <p className="text-gray-600 mb-6">{service.description}</p>

                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                        <ul className="space-y-2 mb-6">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Column */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Pricing Details</h4>
                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm text-gray-500">Monthly</div>
                              <div className="text-2xl font-bold text-gray-900">${service.price.monthly}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Yearly (Save 17%)</div>
                              <div className="text-2xl font-bold text-gray-900">${service.price.yearly}</div>
                            </div>
                          </div>
                          <div className="mt-4 space-y-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>Setup: {getSetupTime(service)}</span>
                            </div>
                            {getTrialDays(service) && (
                              <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                <span>{getTrialDays(service)} days free trial</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <h4 className="font-semibold text-gray-900 mb-3">ROI Promise</h4>
                        <div className="bg-blue-50 rounded-lg p-4 mb-6">
                          <p className="text-sm text-blue-700">{service.roi}</p>
                        </div>

                        <h4 className="font-semibold text-gray-900 mb-3">Target Audience</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.targetAudience.map((audience, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {audience}
                            </span>
                          ))}
                        </div>

                        <h4 className="font-semibold text-gray-900 mb-3">Competitive Analysis</h4>
                        <div className="bg-yellow-50 rounded-lg p-4 mb-6">
                          <p className="text-sm text-yellow-800">{service.marketPosition}</p>
                        </div>

                        <div className="flex gap-3">
                          <a
                            href={service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <a
                            href="mailto:kleber@ziontechgroup.com?subject=Inquiry about %service.name%"
                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Pricing is Unbeatable
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide enterprise-grade solutions at competitive prices while maintaining the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Our prices are 30-50% lower than enterprise competitors while maintaining quality.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-gray-600">Customers see 300-600% ROI within 3-8 months of implementation.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2 Type II, ISO 27001, GDPR, HIPAA compliance included.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">24/7 support with dedicated specialists and comprehensive training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your needs and get a personalized quote for any of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="mb-2">📍 364 E Main St STE 1008 Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComprehensivePricing2025Q4;