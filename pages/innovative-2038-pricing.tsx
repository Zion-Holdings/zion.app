import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, TrendingUp, Zap, Users, Award,
  Brain, Atom, Shield, Target, Rocket, Building,
  Cpu, Globe, ArrowRight, Phone, Mail, MapPin, Grid
} from 'lucide-react';

// Import our innovative 2038 services
import { innovative2038MicroSaasExpansions } from '../data/innovative-2038-micro-saas-expansions';
import { innovative2038ITServicesExpansions } from '../data/innovative-2038-it-services-expansions';
import { innovative2038AIServicesExpansions } from '../data/innovative-2038-ai-services-expansions';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Create service categories for pricing
const serviceCategories = [
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Target className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions and automation',
    services: innovative2038MicroSaasExpansions
  },
  {
    id: 'it-services',
    name: 'IT Infrastructure',
    icon: <Building className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Advanced IT solutions and infrastructure',
    services: innovative2038ITServicesExpansions
  },
  {
    id: 'ai-services',
    name: 'AI & Consciousness',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI and consciousness technology',
    services: innovative2038AIServicesExpansions
  }
];

export default function Innovative2038Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const allServices = [
    ...innovative2038MicroSaasExpansions,
    ...innovative2038ITServicesExpansions,
    ...innovative2038AIServicesExpansions
  ];

  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allServices;
    const category = serviceCategories.find(cat => cat.id === selectedCategory);
    return category ? category.services : allServices;
  };

  const getPrice = (service: any) => {
    return billingCycle === 'monthly' ? service.price.monthly : service.price.yearly;
  };

  const getSavings = (service: any) => {
    if (billingCycle === 'yearly') {
      const monthlyTotal = service.price.monthly * 12;
      const yearlyPrice = service.price.yearly;
      return monthlyTotal - yearlyPrice;
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        data={{
          pageTitle: "Innovative 2038 Services Pricing - Zion Tech Group",
          pageDescription: "Comprehensive pricing for revolutionary micro SAAS, IT infrastructure, and AI consciousness services. Transparent pricing with enterprise-grade solutions.",
          pageKeywords: ["pricing", "micro SAAS pricing", "AI services pricing", "IT infrastructure pricing", "enterprise solutions"]
        }}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Innovative 2038
              </span>
              <br />
              <span className="text-white">Services Pricing</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Transparent pricing for revolutionary technology solutions. Choose the perfect plan for your business transformation.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center space-x-4 mb-8"
            >
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                  Save up to 20%
                </span>
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Need Custom Pricing?</h3>
              <p className="text-purple-100">Contact our sales team for enterprise solutions</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-purple-200 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-200 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-8 py-4 rounded-full transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:scale-105'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Grid className="w-5 h-5" />
              <span className="font-medium">All Services</span>
            </div>
          </button>
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-4 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:scale-105'
              }`}
            >
              <div className="flex items-center space-x-2">
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {getFilteredServices().map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Service Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                {service.popular && (
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-medium rounded-full">
                    ⭐ Most Popular
                  </span>
                )}
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-white mb-2">
                  ${getPrice(service).toLocaleString()}
                </div>
                <div className="text-gray-400 mb-2">
                  per {billingCycle === 'monthly' ? 'month' : 'year'}
                </div>
                {billingCycle === 'yearly' && getSavings(service) > 0 && (
                  <div className="text-green-400 text-sm">
                    Save ${getSavings(service).toLocaleString()} annually
                  </div>
                )}
                <div className="text-xs text-gray-500 mt-2">
                  Setup: {service.price.setupTime} • Trial: {service.price.trialDays} days
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">Key Features:</h4>
                <div className="space-y-3">
                  {service.features.slice(0, 6).map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 6 && (
                    <div className="text-gray-500 text-sm text-center">
                      +{service.features.length - 6} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Service Details */}
              <div className="mb-8 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-white">{service.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Rating:</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-gray-400">({service.reviews})</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Customers:</span>
                  <span className="text-white">{service.customers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Launch Date:</span>
                  <span className="text-white">{service.launchDate}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                <div className="space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Zap className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={service.link}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 mb-4"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Contact CTA */}
              <div className="text-center">
                <p className="text-gray-400 text-xs mb-2">Need enterprise pricing?</p>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                >
                  Contact Sales Team
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enterprise Solutions */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Enterprise Solutions & Custom Pricing
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Need custom solutions, volume discounts, or enterprise features? Our team will create a tailored package for your organization.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Volume Discounts</h3>
              <p className="text-purple-100 text-sm">Save up to 40% with enterprise volume licensing</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Shield className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Custom Security</h3>
              <p className="text-purple-100 text-sm">Tailored security and compliance solutions</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Cpu className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Custom Integration</h3>
              <p className="text-purple-100 text-sm">Seamless integration with your existing systems</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Enterprise Sales</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Sales Team</span>
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">What payment methods do you accept?</h3>
            <p className="text-gray-300">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise customers.</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">Can I change my plan later?</h3>
            <p className="text-gray-300">Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">Do you offer refunds?</h3>
            <p className="text-gray-300">We offer a 30-day money-back guarantee for all plans. If you're not satisfied, we'll refund your payment.</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">What support is included?</h3>
            <p className="text-gray-300">All plans include 24/7 technical support, dedicated account management, and comprehensive documentation.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of forward-thinking organizations already leading the future with our innovative 2038 services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Start Your Journey</span>
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p className="text-lg font-medium mb-2">📍 Visit Our Office</p>
            <p className="text-base">{contactInfo.address}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading the future of technology innovation with cutting-edge micro SAAS, IT infrastructure, and AI consciousness solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📱 {contactInfo.mobile}</p>
                <p>✉️ {contactInfo.email}</p>
                <p>📍 {contactInfo.address}</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Micro SAAS Solutions</p>
                <p>• IT Infrastructure</p>
                <p>• AI & Consciousness</p>
                <p>• Quantum Computing</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Documentation</p>
                <p>• API Reference</p>
                <p>• Support Center</p>
                <p>• Blog & Updates</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. Leading innovation in technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}