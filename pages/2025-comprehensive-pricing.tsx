import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, Users, TrendingUp, Phone, Mail, MapPin,
  Brain, Shield, Cloud, Factory, Rocket, ArrowRight,
  Zap, Lock, Globe, Cpu, Palette, Target
} from 'lucide-react';

// Import our new service data
import { advancedAIMLServices } from '../data/2025-advanced-ai-ml-services';
import { advancedCybersecurityServices2025 } from '../data/2025-advanced-cybersecurity-services';
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
    services: advancedCybersecurityServices2025,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <SEO 
        title="2025 Comprehensive Pricing Guide | Zion Tech Group"
        description="Explore our complete pricing guide for micro SAAS, IT services, and AI solutions. Find the perfect plan for your business needs with transparent pricing and feature comparisons."
        keywords={["pricing", "micro SAAS pricing", "AI services pricing", "cybersecurity pricing", "cloud services pricing", "enterprise solutions pricing"]}
        ogImage="https://ziontechgroup.com/og-image.jpg"
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
            2025 Comprehensive Pricing Guide
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
          >
            Transparent pricing for our complete portfolio of micro SAAS, IT services, and AI solutions
          </motion.p>
          
          {/* Billing Cycle Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex bg-white/20 backdrop-blur-sm rounded-full p-1 mb-8"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-white text-blue-600 shadow-lg' 
                  : 'text-white hover:text-blue-100'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'yearly' 
                  ? 'bg-white text-blue-600 shadow-lg' 
                  : 'text-white hover:text-blue-100'
              }`}
            >
              Yearly
              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getCategoryData().name} Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getCategoryData().description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCategoryData().services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all hover:shadow-2xl hover:-translate-y-2 ${
                  service.popular ? 'border-blue-500 ring-4 ring-blue-100' : 'border-gray-100'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${getCategoryData().color} mb-6`}>
                    {(() => {
                      const IconComponent = getCategoryData().icon;
                      return <IconComponent className="w-10 h-10 text-white" />;
                    })()}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.tagline}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {typeof service.price === 'string' 
                          ? service.price 
                          : `$${service.price.monthly.toLocaleString()}`
                        }
                      </span>
                      <span className="text-gray-500">
                        {typeof service.price === 'string' ? '' : '/month'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && typeof service.price === 'object' && (
                      <div className="text-sm text-green-600 font-medium">
                        Save ${Math.round(service.price.monthly * 12 * 0.2).toLocaleString()} with yearly billing
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 6).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4">
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </a>
                    
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="w-full border-2 border-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
                    >
                      Contact Sales
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Setup Time: {service.setupTime}</span>
                      <span>Trial: {service.trialDays} days</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide enterprise-grade solutions at competitive prices with unmatched support and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600">Trusted by 500+ businesses worldwide with 99.9% uptime guarantee</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">24/7 dedicated support team with average response time under 2 hours</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-600 mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Implementation</h3>
              <p className="text-gray-600">Quick setup with most services ready in under 2 weeks</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI Guarantee</h3>
              <p className="text-gray-600">Average 600% ROI within 18 months or money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss your specific needs and get a customized quote
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contactInfo.email}?subject=Custom Quote Request`}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Custom Quote
            </a>
            <a
              href={`tel:${contactInfo.mobile}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Call {contactInfo.mobile}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing;
