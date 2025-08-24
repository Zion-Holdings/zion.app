import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, Shield, Zap, Brain, Cloud, Rocket,
  TrendingUp, Users, Globe, Lock, Database, Cpu, Grid
} from 'lucide-react';

// Import our new service data
import { real2025AdvancedAIServices } from '../data/real-2025-advanced-ai-services';
import { real2025ITInfrastructureServices } from '../data/real-2025-it-infrastructure-services';
import { real2025InnovativeMicroSaas } from '../data/real-2025-innovative-micro-saas';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Group services by category
const serviceCategories = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-600',
    services: real2025AdvancedAIServices
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure & Cloud',
    icon: <Cloud className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-600',
    services: real2025ITInfrastructureServices
  },
  {
    id: 'micro-saas',
    name: 'Innovative Micro SAAS',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-600',
    services: real2025InnovativeMicroSaas
  }
];

const AdvancedPricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const getFilteredServices = () => {
    if (selectedCategory === 'all') {
      return serviceCategories.flatMap(cat => cat.services);
    }
    return serviceCategories.find(cat => cat.id === selectedCategory)?.services || [];
  };

  const calculateSavings = (monthly: number, yearly: number) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - yearly;
    const savingsPercentage = Math.round((savings / monthlyTotal) * 100);
    return { savings, savingsPercentage };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Advanced Services Pricing - Zion Tech Group"
        description="Transparent pricing for our cutting-edge AI services, IT infrastructure solutions, and innovative micro SAAS platforms. Get the best value for your business transformation."
        keywords="pricing, AI services pricing, IT infrastructure pricing, micro SAAS pricing, business solutions cost"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Advanced Services Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Transparent, competitive pricing for cutting-edge technology solutions that drive real business results
          </motion.p>
          
          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                billingCycle === 'yearly' ? 'transform translate-x-8' : 'transform translate-x-1'
              }`} />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                Save up to 20%
              </span>
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href={`mailto:${contactInfo.email}?subject=Pricing Consultation`}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </a>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Call for Details
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="py-8 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-blue-500/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-cyan-400 mb-2">📱</div>
              <p className="text-gray-300 text-sm">Mobile</p>
              <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 font-semibold hover:text-cyan-300">
                {contactInfo.mobile}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-cyan-400 mb-2">✉️</div>
              <p className="text-gray-300 text-sm">Email</p>
              <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 font-semibold hover:text-cyan-300">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-cyan-400 mb-2">📍</div>
              <p className="text-gray-300 text-sm">Address</p>
              <p className="text-cyan-400 font-semibold">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              <Grid className="w-5 h-5 inline mr-2" />
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Headers */}
          {selectedCategory === 'all' && serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                  {category.icon}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {category.name}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Cutting-edge solutions designed to transform your business operations and drive growth
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Service Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-4xl">{service.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                            <p className="text-sm text-gray-400">{service.category}</p>
                          </div>
                        </div>
                        {service.popular && (
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                            Popular
                          </span>
                        )}
                      </div>

                      <p className="text-gray-300 mb-6">{service.description}</p>

                      {/* Pricing */}
                      <div className="mb-6 p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-3xl font-bold text-cyan-400">
                            ${billingCycle === 'monthly' ? service.price.monthly : service.price.yearly}
                          </span>
                          <span className="text-gray-400">
                            /{billingCycle === 'monthly' ? 'month' : 'year'}
                          </span>
                        </div>
                        {billingCycle === 'yearly' && (
                          <div className="text-sm text-green-400">
                            Save ${calculateSavings(service.price.monthly, service.price.yearly).savings} annually
                          </div>
                        )}
                        <div className="text-sm text-gray-500 mt-2">
                          {service.price.trialDays}-day free trial • Setup in {service.price.setupTime}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 5).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Benefits */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits:</h4>
                        <div className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                              <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* ROI Information */}
                      <div className="mb-6 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                        <div className="text-sm text-blue-300 font-medium mb-1">Expected ROI:</div>
                        <div className="text-xs text-blue-200">{service.roi}</div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <a
                          href={service.link}
                          className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        >
                          Learn More
                        </a>
                        <a
                          href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name} - ${billingCycle} pricing`}
                          className="px-4 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                        >
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Single Category View */}
          {selectedCategory !== 'all' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {getFilteredServices().map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{service.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                          <p className="text-sm text-gray-400">{service.category}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

                    <p className="text-gray-300 mb-6">{service.description}</p>

                    {/* Pricing */}
                    <div className="mb-6 p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-cyan-400">
                          ${billingCycle === 'monthly' ? service.price.monthly : service.price.yearly}
                        </span>
                        <span className="text-gray-400">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <div className="text-sm text-green-400">
                          Save ${calculateSavings(service.price.monthly, service.price.yearly).savings} annually
                        </div>
                      )}
                      <div className="text-sm text-gray-500 mt-2">
                        {service.price.trialDays}-day free trial • Setup in {service.price.setupTime}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 5).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits:</h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ROI Information */}
                    <div className="mb-6 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                      <div className="text-sm text-blue-300 font-medium mb-1">Expected ROI:</div>
                      <div className="text-xs text-blue-200">{service.roi}</div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={service.link}
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name} - ${billingCycle} pricing`}
                        className="px-4 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Need Enterprise Solutions?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            We offer custom enterprise packages with dedicated support, custom integrations, and volume discounts for large organizations.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href={`mailto:${contactInfo.email}?subject=Enterprise Solutions Inquiry`}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Enterprise Sales
            </a>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Call {contactInfo.mobile}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Pioneering the future of technology with innovative solutions that drive business transformation.
              </p>
              <div className="flex gap-4">
                <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📱 {contactInfo.mobile}</p>
                <p>✉️ {contactInfo.email}</p>
                <p>📍 {contactInfo.address}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <p>🤖 AI Services</p>
                <p>☁️ IT Infrastructure</p>
                <p>🚀 Micro SAAS</p>
                <p>🔒 Cybersecurity</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  All Services
                </a>
                <a href="/2025-advanced-services-showcase" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Services Showcase
                </a>
                <a href="/about" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </a>
                <a href="/contact" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved. | Advanced Technology Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdvancedPricingPage;