import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, TrendingUp, Zap, Shield, Globe,
  Brain, Building, Target, Rocket, ArrowRight
} from 'lucide-react';

// Import our new 2025 services
import { advancedAIAutomationServices } from '../data/2025-advanced-ai-automation-services';
import { innovativeITInfrastructureServices } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions } from '../data/2025-innovative-micro-saas-solutions';
import { emergingTechnologyServices } from '../data/2025-emerging-technology-services';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Service categories with pricing tiers
const serviceCategories = [
  {
    id: 'ai-automation',
    name: 'AI Automation Services',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    services: advancedAIAutomationServices
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure Services',
    icon: <Building className="w-8 h-8" />,
    color: 'from-blue-500 to-indigo-500',
    services: innovativeITInfrastructureServices
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Target className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    services: innovativeMicroSaasSolutions
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technology Services',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    services: emergingTechnologyServices
  }
];

// Pricing tiers
const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic service features',
      'Email support',
      'Standard integrations',
      'Community documentation',
      'Basic analytics'
    ],
    color: 'from-gray-500 to-slate-500'
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses and teams',
    features: [
      'All Starter features',
      'Priority support',
      'Advanced integrations',
      'Custom configurations',
      'Advanced analytics',
      'Team collaboration'
    ],
    color: 'from-blue-500 to-indigo-500',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$799',
    period: '/month',
    description: 'For large organizations with complex needs',
    features: [
      'All Professional features',
      '24/7 dedicated support',
      'Custom integrations',
      'White-label options',
      'Advanced security',
      'SLA guarantees',
      'Custom training',
      'On-premise options'
    ],
    color: 'from-purple-500 to-pink-500'
  }
];

export default function InnovativePricing2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const getFilteredServices = () => {
    if (selectedCategory === 'all') {
      return [
        ...advancedAIAutomationServices,
        ...innovativeITInfrastructureServices,
        ...innovativeMicroSaasSolutions,
        ...emergingTechnologyServices
      ];
    }
    
    const category = serviceCategories.find(cat => cat.id === selectedCategory);
    return category ? category.services : [];
  };

  const getYearlyDiscount = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.17); // 17% discount for yearly
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Innovative Services Pricing | Zion Tech Group"
        description="Comprehensive pricing for our 2025 innovative services including AI automation, IT infrastructure, micro SAAS solutions, and emerging technology services."
        keywords={["2025 pricing", "innovative services pricing", "AI automation pricing", "IT infrastructure pricing", "micro SAAS pricing", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              2025 Innovative
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services Pricing
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Transparent, competitive pricing for our cutting-edge portfolio of AI automation, 
              IT infrastructure, micro SAAS solutions, and emerging technology services.
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
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  billingCycle === 'yearly' ? 'bg-purple-500' : 'bg-gray-600'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                  billingCycle === 'yearly' ? 'left-9' : 'left-1'
                }`} />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 text-sm text-green-400">Save 17%</span>
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 ${
                tier.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <p className="text-gray-300">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                tier.popular
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white'
                  : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Service Categories & Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive portfolio of innovative services with transparent pricing
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
            }`}
          >
            All Services
          </button>
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredServices().map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{service.icon}</div>
                {service.popular && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    POPULAR
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-purple-400">
                    ${typeof service.price === 'string' ? service.price : 
                       billingCycle === 'monthly' ? service.price.monthly : service.price.yearly}
                  </span>
                  <span className="text-gray-400">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                {billingCycle === 'yearly' && typeof service.price !== 'string' && (
                  <div className="text-sm text-green-400">
                    Save ${getYearlyDiscount(service.price.monthly)} annually
                  </div>
                )}
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs rounded-full border border-white/30">
                  {service.category}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <div className="text-xs text-gray-400">
                  <span className="text-gray-500">Setup:</span> {typeof service.price === 'string' ? 'Custom' : service.price.setupTime}
                </div>
                <div className="text-xs text-gray-400">
                  <span className="text-gray-500">Trial:</span> {typeof service.price === 'string' ? 'Contact' : service.price.trialDays} days
                </div>
              </div>

              <a
                href={service.link}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                View Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enterprise Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-8 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise Features & Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the full potential of our innovative services with enterprise-grade features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Enterprise Security',
                description: 'SOC 2 Type II, GDPR, HIPAA compliance with advanced security features'
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'Global Support',
                description: '24/7 dedicated support with SLA guarantees and custom training'
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Custom Integration',
                description: 'White-label options and custom integrations for your business needs'
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Scalable Solutions',
                description: 'On-premise options and unlimited scaling for enterprise growth'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your needs and get a personalized quote for our innovative services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${contact.mobile}`}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              <span>📞</span>
              {contact.mobile}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              <span>✉️</span>
              {contact.email}
            </a>
          </div>
          <div className="mt-6 text-gray-400 text-sm">
            <p>{contact.address}</p>
            <p className="mt-2">
              Visit our website: <a href={contact.website} className="text-blue-400 hover:underline">{contact.website}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}