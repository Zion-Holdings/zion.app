import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Star, Zap, Shield, Users, 
  ArrowRight, Brain, Atom, Rocket, Database,
  TrendingUp, Award, Clock, Globe
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 299, annual: 2990 },
      features: [
        'AI Content Factory Access',
        'Basic AI Assistant',
        '5 AI Agents',
        'Standard Support',
        'Basic Analytics',
        'Email Support'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-600',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: { monthly: 799, annual: 7990 },
      features: [
        'Everything in Starter',
        'AI Consciousness Platform',
        'Quantum Machine Learning',
        '25 AI Agents',
        'Advanced Analytics',
        'Priority Support',
        'Phone Support',
        'Custom Integrations'
      ],
      icon: <Atom className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: { monthly: 1999, annual: 19990 },
      features: [
        'Everything in Professional',
        'Full Quantum Suite',
        'Space Technology Platform',
        'Unlimited AI Agents',
        'Custom AI Development',
        'Dedicated Support Team',
        'SLA Guarantee',
        'On-premise Options',
        'Custom Training'
      ],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      popular: false
    },
    {
      name: 'Custom',
      description: 'Tailored solutions for unique requirements',
      price: { monthly: 'Custom', annual: 'Custom' },
      features: [
        'Everything in Enterprise',
        'Custom AI Development',
        'Dedicated Infrastructure',
        'White-label Solutions',
        'Custom Integrations',
        '24/7 Dedicated Support',
        'Custom SLA',
        'On-site Implementation'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Consciousness Upgrade',
      description: 'Advanced consciousness capabilities for your AI systems',
      price: { monthly: 499, annual: 4990 },
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Quantum Computing Access',
      description: 'Access to our quantum computing infrastructure',
      price: { monthly: 999, annual: 9990 },
      icon: <Atom className="w-6 h-6" />
    },
    {
      name: 'Space Technology Module',
      description: 'Space resource intelligence and satellite optimization',
      price: { monthly: 1499, annual: 14990 },
      icon: <Rocket className="w-6 h-6" />
    },
    {
      name: 'Cybersecurity Suite',
      description: 'Advanced threat detection and quantum-resistant encryption',
      price: { monthly: 399, annual: 3990 },
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const savings = {
    monthly: 0,
    annual: 20
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Pricing — Zion Tech Group | Transparent Technology Solutions Pricing</title>
        <meta name="description" content="Explore Zion Tech Group's transparent pricing for AI, quantum computing, and technology services. Choose the perfect plan for your business needs." />
        <meta property="og:title" content="Pricing — Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for cutting-edge technology solutions. Find the perfect plan for your business transformation." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your business transformation. 
              All plans include our cutting-edge AI and quantum technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-gray-800/30 backdrop-blur-xl rounded-2xl p-2 border border-gray-700/50"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                Save {savings.annual}%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/30 backdrop-blur-xl rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/25'
                    : 'border-gray-700/50 hover:border-cyan-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-white mb-2">
                      {typeof plan.price[billingCycle] === 'number' ? (
                        <>
                          ${plan.price[billingCycle]}
                          <span className="text-lg text-gray-400">/{billingCycle === 'monthly' ? 'mo' : 'year'}</span>
                        </>
                      ) : (
                        <span className="text-2xl">{plan.price[billingCycle]}</span>
                      )}
                    </div>
                    {billingCycle === 'annual' && typeof plan.price.annual === 'number' && (
                      <p className="text-green-400 text-sm">
                        Save ${(plan.price.monthly * 12 - plan.price.annual).toLocaleString()}/year
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-700/50 hover:bg-gray-600/50 text-white border border-gray-600 hover:border-cyan-500/50'
                  }`}>
                    {plan.name === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Add-On Services</h2>
            <p className="text-xl text-gray-300">Enhance your plan with additional capabilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      {addon.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{addon.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">
                      {typeof addon.price[billingCycle] === 'number' ? (
                        <>
                          ${addon.price[billingCycle]}
                          <span className="text-sm text-gray-400">/{billingCycle === 'monthly' ? 'mo' : 'year'}</span>
                        </>
                      ) : (
                        <span className="text-lg">{addon.price[billingCycle]}</span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{addon.description}</p>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Add to Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Plan Comparison</h2>
            <p className="text-xl text-gray-300">See what&apos;s included in each plan</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Starter</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Professional</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Enterprise</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Custom</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">AI Agents</td>
                  <td className="text-center py-4 px-6 text-white">5</td>
                  <td className="text-center py-4 px-6 text-white">25</td>
                  <td className="text-center py-4 px-6 text-white">Unlimited</td>
                  <td className="text-center py-4 px-6 text-white">Custom</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">AI Consciousness</td>
                  <td className="text-center py-4 px-6 text-gray-400">-</td>
                  <td className="text-center py-4 px-6 text-white">✓</td>
                  <td className="text-center py-4 px-6 text-white">✓</td>
                  <td className="text-center py-4 px-6 text-white">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Quantum Computing</td>
                  <td className="text-center py-4 px-6 text-gray-400">-</td>
                  <td className="text-center py-4 px-6 text-white">✓</td>
                  <td className="text-center py-4 px-6 text-white">✓</td>
                  <td className="text-center py-4 px-6 text-white">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Space Technology</td>
                  <td className="text-center py-4 px-6 text-gray-400">-</td>
                  <td className="text-center py-4 px-6 text-gray-400">-</td>
                  <td className="text-center py-4 px-6 text-white">✓</td>
                  <td className="text-center py-4 px-6 text-white">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Support</td>
                  <td className="text-center py-4 px-6 text-white">Email</td>
                  <td className="text-center py-4 px-6 text-white">Phone</td>
                  <td className="text-center py-4 px-6 text-white">Dedicated</td>
                  <td className="text-center py-4 px-6 text-white">24/7</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">SLA</td>
                  <td className="text-center py-4 px-6 text-gray-400">-</td>
                  <td className="text-center py-4 px-6 text-gray-400">-</td>
                  <td className="text-center py-4 px-6 text-white">99.9%</td>
                  <td className="text-center py-4 px-6 text-white">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about our pricing</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we&apos;ll prorate any billing adjustments."
              },
              {
                question: "Do you offer custom pricing for large organizations?",
                answer: "Absolutely! Our Custom plan is designed for enterprise clients with unique requirements. Contact our sales team for a personalized quote."
              },
              {
                question: "What&apos;s included in the annual discount?",
                answer: "Annual plans include a 20% discount compared to monthly pricing, plus additional benefits like priority support and custom integrations."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for any of our plans. You only pay for the services you use, starting from day one."
              },
              {
                question: "What kind of support do you provide?",
                answer: "Support varies by plan: Starter includes email support, Professional adds phone support, Enterprise includes dedicated support, and Custom offers 24/7 dedicated support."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect plan for your business and start transforming with cutting-edge technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
