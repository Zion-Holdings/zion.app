import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Check, Star, Zap, Brain, Rocket, Shield,
  ArrowRight, Sparkles, Crown, TrendingUp,
  Globe, Infinity, Clock, Users, Lock
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: billingCycle === 'monthly' ? 99 : 990,
      originalPrice: billingCycle === 'monthly' ? 149 : 1490,
      features: [
        "AI Consciousness Platform - Basic",
        "Quantum Security - Standard",
        "5 AI Agents",
        "10GB Quantum Storage",
        "Basic Support",
        "API Access",
        "Mobile App",
        "Basic Analytics"
      ],
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing enterprises",
      price: billingCycle === 'monthly' ? 299 : 2990,
      originalPrice: billingCycle === 'monthly' ? 399 : 3990,
      features: [
        "Everything in Starter",
        "Advanced AI Consciousness",
        "Quantum Neural Networks",
        "25 AI Agents",
        "100GB Quantum Storage",
        "Priority Support",
        "Advanced Analytics",
        "Custom Integrations",
        "Team Management",
        "Advanced Security"
      ],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations and corporations",
      price: billingCycle === 'monthly' ? 799 : 7990,
      originalPrice: billingCycle === 'monthly' ? 999 : 9990,
      features: [
        "Everything in Professional",
        "Full AI Consciousness Suite",
        "Quantum Computing Platform",
        "Unlimited AI Agents",
        "1TB Quantum Storage",
        "24/7 Dedicated Support",
        "Custom AI Training",
        "White-label Solutions",
        "Advanced Compliance",
        "Dedicated Success Manager"
      ],
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      popular: false
    }
  ];

  const addons = [
    {
      name: "Space Resource Intelligence",
      description: "AI-powered space exploration and resource mapping",
      price: billingCycle === 'monthly' ? 199 : 1990,
      icon: Rocket
    },
    {
      name: "Quantum Cybersecurity Suite",
      description: "Advanced quantum-resistant security solutions",
      price: billingCycle === 'monthly' ? 299 : 2990,
      icon: Shield
    },
    {
      name: "Autonomous DevOps Platform",
      description: "Fully automated deployment and infrastructure management",
      price: billingCycle === 'monthly' ? 399 : 3990,
      icon: TrendingUp
    },
    {
      name: "Custom AI Development",
      description: "Tailored AI solutions for your specific needs",
      price: "Custom",
      icon: Brain
    }
  ];

  const savings = billingCycle === 'yearly' ? 20 : 0;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Pricing & Plans
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Choose Your Plan
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI, quantum computing, and autonomous systems. 
                Choose the plan that fits your needs and scale as you grow.
              </p>
            </motion.div>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-purple-500' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                  Save {savings}%
                </span>
              )}
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                      : 'border-gray-700/50 hover:border-purple-500/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      {billingCycle === 'monthly' ? (
                        <span className="text-gray-400">/month</span>
                      ) : (
                        <span className="text-gray-400">/year</span>
                      )}
                    </div>
                    {plan.originalPrice !== plan.price && (
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-lg text-gray-400 line-through">${plan.originalPrice}</span>
                        <span className="text-green-400 text-sm">
                          Save ${plan.originalPrice - plan.price}
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gray-700/50 text-white hover:bg-gray-600/50 border border-gray-600/50 hover:border-purple-500/50'
                  }`}>
                    Get Started
                    <ArrowRight className="w-5 h-5 inline ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your experience with specialized add-ons and custom solutions 
                tailored to your specific business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addons.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                        <addon.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{addon.name}</h3>
                        <p className="text-gray-400 text-sm">{addon.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {typeof addon.price === 'number' ? `$${addon.price}` : addon.price}
                      </div>
                      {typeof addon.price === 'number' && (
                        <div className="text-sm text-gray-400">
                          {billingCycle === 'monthly' ? '/month' : '/year'}
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="w-full py-3 bg-gray-700/50 text-white rounded-xl hover:bg-gray-600/50 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300">
                    Add to Plan
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Get answers to common questions about our pricing and services.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "Can I change my plan at any time?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
                },
                {
                  question: "Do you offer custom enterprise solutions?",
                  answer: "Absolutely! We work with enterprise clients to create custom AI solutions, custom integrations, and specialized deployments tailored to your specific needs."
                },
                {
                  question: "What kind of support do you provide?",
                  answer: "We offer tiered support levels from basic email support to 24/7 dedicated support with dedicated success managers for enterprise clients."
                },
                {
                  question: "Is there a free trial available?",
                  answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-3xl p-12 border border-purple-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already transforming their operations 
                with our cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="w-6 h-6 inline ml-3" />
                </button>
                <button className="px-10 py-5 border-2 border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/20 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PricingPage;