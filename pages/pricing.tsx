import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Atom, 
  Shield, 
  Rocket,
  TrendingUp,
  Crown,
  Sparkles,
  Infinity,
  Users,
  Clock,
  Globe,
  Lock
} from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');

  const currencyRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73
  };

  const formatPrice = (price: number) => {
    const convertedPrice = price * currencyRates[selectedCurrency];
    const symbol = selectedCurrency === 'USD' ? '$' : selectedCurrency === 'EUR' ? '€' : '£';
    return `${symbol}${convertedPrice.toFixed(0)}`;
  };

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      icon: <Rocket className="w-8 h-8 text-emerald-400" />,
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'AI-powered business insights',
        'Basic automation workflows',
        'Email support',
        '5 user accounts',
        'Standard security features',
        'Basic analytics dashboard',
        'Mobile app access',
        'API access (1000 calls/month)'
      ],
      popular: false,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Everything in Starter',
        'Advanced AI algorithms',
        'Custom automation workflows',
        'Priority support',
        'Unlimited user accounts',
        'Advanced security features',
        'Real-time analytics',
        'API access (10,000 calls/month)',
        'Custom integrations',
        'White-label options'
      ],
      popular: true,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      icon: <Crown className="w-8 h-8 text-purple-400" />,
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        'Everything in Professional',
        'Custom AI model training',
        'Quantum computing access',
        'Dedicated account manager',
        '24/7 phone support',
        'Advanced compliance features',
        'Custom development',
        'Unlimited API access',
        'On-premise deployment',
        'SLA guarantees'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Ultimate',
      description: 'Cutting-edge solutions for industry leaders',
      icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
      monthlyPrice: 2499,
      yearlyPrice: 24990,
      features: [
        'Everything in Enterprise',
        'AI consciousness evolution',
        'Quantum AI convergence',
        'Executive advisory board',
        'Custom research & development',
        'Industry-specific solutions',
        'Global deployment support',
        'Quantum security protocols',
        'Future technology access',
        'Exclusive innovation labs'
      ],
      popular: false,
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const addOns = [
    {
      name: 'AI Training & Customization',
      description: 'Custom AI model training for your specific use case',
      price: 500,
      period: 'month'
    },
    {
      name: 'Quantum Computing Access',
      description: 'Access to our quantum computing infrastructure',
      price: 1000,
      period: 'month'
    },
    {
      name: 'Advanced Security Suite',
      description: 'Enhanced security features and compliance tools',
      price: 300,
      period: 'month'
    },
    {
      name: 'Custom Integration',
      description: 'Custom integration with your existing systems',
      price: 750,
      period: 'one-time'
    },
    {
      name: 'Dedicated Support',
      description: '24/7 dedicated technical support team',
      price: 400,
      period: 'month'
    },
    {
      name: 'Training & Certification',
      description: 'Comprehensive training for your team',
      price: 200,
      period: 'person'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our cutting-edge AI and quantum technology solutions.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-white/50'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: billingCycle === 'yearly' ? 32 : 4 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-white/50'}`}>
                Yearly
                <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                  Save 20%
                </span>
              </span>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              {(['USD', 'EUR', 'GBP'] as const).map((currency) => (
                <button
                  key={currency}
                  onClick={() => setSelectedCurrency(currency)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCurrency === currency
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {currency}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
                    : 'border-white/20 bg-gradient-to-br from-white/5 to-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice)}
                    </span>
                    <span className="text-white/70">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'border-2 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Enhance your experience with our premium add-on services and custom solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{addon.name}</h3>
                <p className="text-white/70 text-sm mb-4">{addon.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">
                    {formatPrice(addon.price)}
                    <span className="text-sm text-white/50">/{addon.period}</span>
                  </span>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm hover:bg-cyan-500/30 transition-all duration-300"
                  >
                    Add Service
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70">Everything you need to know about our pricing and services.</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
              },
              {
                question: 'Do you offer custom pricing for enterprise clients?',
                answer: 'Absolutely! We work with enterprise clients to create custom pricing plans that meet their specific needs and requirements.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
              },
              {
                question: 'Is there a free trial available?',
                answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
              },
              {
                question: 'What kind of support is included?',
                answer: 'Support varies by plan. Starter includes email support, Professional includes priority support, and Enterprise/Ultimate include 24/7 phone support.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already transforming their operations with our AI and quantum technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Start Free Trial
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}