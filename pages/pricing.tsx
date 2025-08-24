import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  DollarSign, Crown, Zap as ZapIcon, Check
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      price: { monthly: 299, yearly: 2999 },
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI Content Generation (100/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Security',
        '5 User Licenses',
        'Basic Training'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      price: { monthly: 799, yearly: 7999 },
      description: 'Advanced AI solutions for growing enterprises',
      features: [
        'AI Business Intelligence Suite',
        'Advanced Analytics & Reporting',
        'Priority Support (4hr response)',
        'Enhanced Security Features',
        '25 User Licenses',
        'Advanced Training & Onboarding',
        'Custom Integrations',
        'Performance Monitoring'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      price: { monthly: 1999, yearly: 19999 },
      description: 'Full-scale AI transformation for large organizations',
      features: [
        'Complete AI Suite Access',
        'Custom AI Model Development',
        '24/7 Dedicated Support',
        'Enterprise Security & Compliance',
        'Unlimited User Licenses',
        'Custom Training Programs',
        'White-label Solutions',
        'Dedicated Success Manager',
        'SLA Guarantees',
        'Advanced Analytics & AI'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const addOnServices = [
    {
      name: 'AI Autonomous Systems',
      description: 'Self-learning AI that adapts to your business needs',
      price: { monthly: 299, yearly: 2999 },
      features: ['Autonomous decision making', 'Continuous learning', 'Custom algorithms']
    },
    {
      name: 'Quantum Cybersecurity',
      description: 'Future-proof security with quantum-resistant encryption',
      price: { monthly: 499, yearly: 4999 },
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture']
    },
    {
      name: 'Edge Computing Orchestration',
      description: 'Deploy and manage applications at the edge',
      price: { monthly: 199, yearly: 1999 },
      features: ['Edge deployment', 'Load balancing', 'Performance optimization']
    },
    {
      name: 'AI Content Factory',
      description: 'Automated content creation at scale',
      price: { monthly: 399, yearly: 3999 },
      features: ['Multi-format content', 'AI personalization', 'Brand voice training']
    }
  ];

  const savings = {
    monthly: 0,
    yearly: 20
  };

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for AI, cybersecurity, and IT infrastructure solutions. Choose the plan that fits your business needs." />
        <meta name="keywords" content="AI pricing, cybersecurity pricing, IT services pricing, Zion Tech Group pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Transparent Pricing
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Choose the perfect plan for your business. All plans include enterprise-grade security, 24/7 support, and the latest AI innovations.
            </motion.p>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-gray-800/50 rounded-lg p-1 border border-gray-700/50"
            >
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-2 px-2 py-1 text-xs bg-green-500 text-white rounded-full">
                  Save {savings.yearly}%
                </span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                      : 'border-gray-700/50 hover:border-cyan-500/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${plan.color} mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">$</span>
                      <span className="text-6xl font-bold text-cyan-400">
                        {billingCycle === 'monthly' ? plan.price.monthly : Math.round(plan.price.yearly / 12)}
                      </span>
                      <span className="text-xl text-gray-400 ml-2">/month</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-gray-400 mt-2">
                        Billed annually (${plan.price.yearly})
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-gray-700/50 text-white border border-gray-600/50 hover:bg-gray-600/50 hover:border-cyan-500/50'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Add-on Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Enhance your plan with specialized AI and technology services tailored to your specific needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addOnServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">
                      ${billingCycle === 'monthly' ? service.price.monthly : Math.round(service.price.yearly / 12)}
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                    Add to Plan
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">
                Get answers to common questions about our pricing and services.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: 'Can I change my plan at any time?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.'
                },
                {
                  question: 'Is there a free trial available?',
                  answer: 'Yes, we offer a 14-day free trial for all Professional and Enterprise plans. No credit card required to start.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely.'
                },
                {
                  question: 'Do you offer custom pricing for large organizations?',
                  answer: 'Yes, we provide custom pricing and enterprise agreements for organizations with 100+ users or specific requirements.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already transforming their operations with our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Start Free Trial
                  <Rocket className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Contact Sales
                  <Users className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}