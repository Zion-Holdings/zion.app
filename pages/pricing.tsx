import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Rocket, Brain, Atom, Target } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025 } from '../data/2025-innovative-it-services';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';

interface PricingTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
  color: string;
  cta: string;
  ctaLink: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 99,
    period: 'month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 team members',
      'Basic AI content generation',
      'Standard support',
      'Core integrations',
      'Basic analytics',
      'Email support'
    ],
    icon: <Target className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    cta: 'Start Free Trial',
    ctaLink: '/contact'
  },
  {
    name: 'Professional',
    price: 299,
    period: 'month',
    description: 'Ideal for growing businesses and teams',
    features: [
      'Up to 25 team members',
      'Advanced AI features',
      'Priority support',
      'Advanced integrations',
      'Advanced analytics',
      'Phone & email support',
      'Custom branding',
      'API access'
    ],
    popular: true,
    icon: <Zap className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    cta: 'Start Free Trial',
    ctaLink: '/contact'
  },
  {
    name: 'Enterprise',
    price: 999,
    period: 'month',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited team members',
      'Full AI suite access',
      '24/7 dedicated support',
      'Custom integrations',
      'Advanced analytics & reporting',
      'Dedicated account manager',
      'Custom development',
      'SLA guarantees',
      'On-premise options',
      'Compliance certifications'
    ],
    icon: <Shield className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    cta: 'Contact Sales',
    ctaLink: '/contact'
  }
];

const serviceCategories = [
  {
    name: 'AI & Consciousness Services',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    services: innovativeAIServices2025.slice(0, 6)
  },
  {
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    services: emergingTechServices2025.slice(0, 6)
  },
  {
    name: 'Enterprise IT Solutions',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    services: innovativeITServices2025.slice(0, 6)
  },
  {
    name: 'Micro SAAS Solutions',
    icon: <Target className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    services: realMicroSaasServices2025.slice(0, 6)
  }
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const getDiscountedPrice = (price: number) => {
    return billingPeriod === 'yearly' ? Math.round(price * 0.8) : price;
  };

  const getPeriodText = () => {
    return billingPeriod === 'yearly' ? 'year' : 'month';
  };

  return (
    <>
      <SEO title="Pricing - Zion Tech Group | Future Technology Solutions" description="Transparent pricing for our cutting-edge AI, quantum computing, and emerging technology services. Choose the perfect plan for your business needs." canonical="https://ziontechgroup.com/pricing/" />

      <Layout>
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Transparent Pricing
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan for your business. All plans include our cutting-edge AI, quantum computing, 
                and emerging technology solutions with transparent pricing and no hidden fees.
              </p>
            </motion.div>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-16"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setBillingPeriod('monthly')}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                      billingPeriod === 'monthly'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingPeriod('yearly')}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                      billingPeriod === 'yearly'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Yearly
                    <span className="ml-2 px-2 py-1 text-xs bg-green-500 text-white rounded-full">
                      Save 20%
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Pricing Tiers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            >
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className={`relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 ${
                    tier.popular ? 'ring-2 ring-purple-500/50' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      {tier.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-6">{tier.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">${getDiscountedPrice(tier.price)}</span>
                      <span className="text-gray-400">/{getPeriodText()}</span>
                    </div>

                    <a
                      href={tier.ctaLink}
                      className={`block w-full bg-gradient-to-r ${tier.color} text-white py-3 px-6 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-${tier.color.split('-')[1]}/25 transition-all duration-200 transform hover:scale-105`}
                    >
                      {tier.cta}
                    </a>
                  </div>

                  <ul className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Service Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Service Categories
                </span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                    
                    <div className="space-y-4">
                      {category.services.map((service) => (
                        <div key={service.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                          <div>
                            <h4 className="font-semibold text-white">{service.name}</h4>
                            <p className="text-sm text-gray-400">{service.tagline}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-white">${service.price.monthly}</div>
                            <div className="text-sm text-gray-400">/month</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <a
                        href={`/services#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        <span>View All {category.name}</span>
                        <Rocket className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-16">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white mb-3">What's included in the free trial?</h3>
                  <p className="text-gray-400">All plans include a 14-day free trial with full access to features and support.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
                  <p className="text-gray-400">Yes, you can upgrade, downgrade, or cancel your plan at any time with no penalties.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing?</h3>
                  <p className="text-gray-400">Enterprise customers can get custom pricing based on their specific needs and requirements.</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white mb-3">What support is included?</h3>
                  <p className="text-gray-400">Support varies by plan from email support to 24/7 dedicated support for enterprise customers.</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mt-20"
            >
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already using our cutting-edge technology solutions 
                  to drive growth and competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Get Started Today
                  </a>
                  <a
                    href="/contact"
                    className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}