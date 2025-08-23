import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Star, Users, TrendingUp, Phone, Mail, MapPin,
  Brain, Shield, Cloud, Factory, Rocket, ArrowRight,
  Zap, Lock, Globe, Cpu, Palette, Target
} from 'lucide-react';

// Import our new service data
import { advancedAIMLServices } from '../data/2025-advanced-ai-ml-services';
import { advancedCybersecurityServices } from '../data/2025-advanced-cybersecurity-services';
import { advancedCloudDevOpsServices } from '../data/2025-advanced-cloud-devops-services';
import { industrySpecificSolutions } from '../data/2025-industry-specific-solutions';
import { emergingTechnologyServices } from '../data/2025-emerging-technology-services';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Service categories with icons and descriptions
const serviceCategories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Advanced AI and machine learning platforms for enterprise applications',
    services: advancedAIMLServices,
    color: 'from-purple-600 to-indigo-700'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Compliance',
    icon: Shield,
    description: 'Enterprise-grade security solutions and compliance automation',
    services: advancedCybersecurityServices,
    color: 'from-red-600 to-pink-700'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Cloud infrastructure, DevOps automation, and edge computing solutions',
    services: advancedCloudDevOpsServices,
    color: 'from-blue-600 to-cyan-700'
  },
  {
    id: 'industry',
    name: 'Industry Solutions',
    icon: Factory,
    description: 'Specialized solutions for healthcare, finance, manufacturing, and retail',
    services: industrySpecificSolutions,
    color: 'from-green-600 to-emerald-700'
  },
  {
    id: 'emerging',
    name: 'Emerging Technologies',
    icon: Rocket,
    description: 'Cutting-edge technologies including quantum computing, blockchain, and AR/VR',
    services: emergingTechnologyServices,
    color: 'from-orange-600 to-yellow-700'
  }
];

const ComprehensivePricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ai-ml');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const getCategoryData = () => {
    return serviceCategories.find(cat => cat.id === selectedCategory) || serviceCategories[0];
  };

  const formatPrice = (price: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    if (billingCycle === 'yearly') {
      const yearlyPrice = Math.round(numericPrice * 12 * 0.8); // 20% discount for yearly
      return `$${yearlyPrice.toLocaleString()}`;
    }
    return price;
  };

  const getBillingPeriod = () => {
    return billingCycle === 'yearly' ? '/year' : '/month';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Pricing - Zion Tech Group"
        description="Comprehensive pricing for our innovative micro SAAS services, IT solutions, and AI services. Competitive pricing with enterprise-grade features and proven ROI."
        keywords={["pricing", "micro SAAS pricing", "AI services pricing", "cybersecurity pricing", "cloud services pricing", "enterprise solutions pricing"]}
        image="https://ziontechgroup.com/og-image.jpg"
        url="https://ziontechgroup.com/2025-comprehensive-pricing"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              2025 Comprehensive
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pricing Guide
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Transparent pricing for our comprehensive portfolio of innovative services. 
              Choose the perfect solution for your business needs with competitive pricing and proven ROI.
            </motion.p>
            
            {/* Billing Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 mb-8 inline-block"
            >
              <div className="flex items-center gap-4">
                <span className="text-white font-medium">Billing Cycle:</span>
                <div className="flex bg-white/20 rounded-lg p-1">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      billingCycle === 'yearly' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                    }`}
                  >
                    Yearly
                    <span className="ml-1 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <category.icon className="w-6 h-6" />
              <span className="font-semibold">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Category Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${getCategoryData().color} mb-6`}>
                {(() => {
                  const IconComponent = getCategoryData().icon;
                  return <IconComponent className="w-10 h-10 text-white" />;
                })()}
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">{getCategoryData().name}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{getCategoryData().description}</p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {getCategoryData().services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mx-auto mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.tagline}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      {formatPrice(service.price)}
                      <span className="text-lg text-gray-300 font-normal">{getBillingPeriod()}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm font-medium">Save 20% with yearly billing</div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4 text-lg">Key Features:</h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-gray-400 mb-1">Market Size</div>
                      <div className="text-white font-semibold">{service.marketSize}</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-gray-400 mb-1">Growth Rate</div>
                      <div className="text-white font-semibold">{service.growthRate}</div>
                    </div>
                  </div>

                  {/* ROI and Popularity */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm">
                      <div className="text-gray-400 mb-1">Expected ROI</div>
                      <div className="text-green-400 font-semibold">{service.roi.split(' ')[0]} ROI</div>
                    </div>
                    {service.popular && (
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-semibold">Popular</span>
                      </div>
                    )}
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{service.customers.toLocaleString()} customers</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span>{service.rating} ({service.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={service.link}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all duration-200 font-semibold"
                    >
                      Get Quote
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pricing Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Competitive Pricing Analysis</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our pricing compares to industry standards and understand the value we provide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-600 to-pink-700 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Market Competitive</h3>
              <p className="text-gray-300">Our pricing is competitive with industry leaders while offering superior features and support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
              <p className="text-gray-300">Customers typically see 300-800% ROI within 6-18 months of implementation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Value</h3>
              <p className="text-gray-300">Enterprise-grade features and support at competitive pricing with flexible billing options</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your specific needs and get a customized quote for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              <Phone className="w-5 h-5" />
              Call {contactInfo.mobile}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors font-semibold text-lg"
            >
              <Mail className="w-5 h-5" />
              Email for Quote
            </a>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="bg-slate-800/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Pricing Benefits</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>No hidden fees or setup costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Flexible monthly or yearly billing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>20% discount on yearly plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Custom enterprise pricing available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricing;