import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Check, Star, Zap, Brain, Atom, Rocket, Cpu, Shield,
  ArrowRight, Sparkles, TrendingUp, Globe, Users, Database
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 99, annual: 990 },
      features: [
        'AI Consciousness Basic',
        'Quantum Computing Access (100 qubits)',
        '24/7 AI Support',
        'Basic Space Intelligence',
        'Standard Security',
        '5 Team Members',
        '100GB Storage',
        'Email Support'
      ],
      icon: Zap,
      color: 'from-emerald-500 to-teal-500',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing enterprises',
      price: { monthly: 299, annual: 2990 },
      features: [
        'AI Consciousness Advanced',
        'Quantum Computing Access (500 qubits)',
        '24/7 AI Support + Human Experts',
        'Advanced Space Intelligence',
        'Enhanced Security + SOC2',
        '25 Team Members',
        '1TB Storage',
        'Priority Support',
        'Custom AI Training',
        'Advanced Analytics'
      ],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations and corporations',
      price: { monthly: 999, annual: 9990 },
      features: [
        'AI Consciousness Enterprise',
        'Quantum Computing Access (1000+ qubits)',
        '24/7 AI Support + Dedicated Team',
        'Full Space Intelligence Platform',
        'Enterprise Security + Zero Trust',
        'Unlimited Team Members',
        'Unlimited Storage',
        'Dedicated Account Manager',
        'Custom AI Development',
        'Advanced Analytics + ML',
        'White-label Solutions',
        'API Access'
      ],
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Consciousness Training',
      description: 'Custom AI consciousness training for your specific use case',
      price: { monthly: 199, annual: 1990 },
      icon: Brain
    },
    {
      name: 'Quantum Computing Power',
      description: 'Additional quantum computing resources and processing power',
      price: { monthly: 299, annual: 2990 },
      icon: Atom
    },
    {
      name: 'Space Intelligence Module',
      description: 'Advanced space resource intelligence and exploration tools',
      price: { monthly: 399, annual: 3990 },
      icon: Rocket
    },
    {
      name: 'Enterprise Security Suite',
      description: 'Comprehensive security including SOC2, penetration testing',
      price: { monthly: 499, annual: 4990 },
      icon: Shield
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI Consciousness Evolution",
      description: "Next-generation AI with emotional intelligence and consciousness",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Computing Power",
      description: "Access to cutting-edge quantum computing resources",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Space Technology",
      description: "Advanced space exploration and resource intelligence",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security with SOC2 compliance",
      color: "from-red-500 to-orange-500"
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const getAnnualDiscount = (monthlyPrice: number, annualPrice: number) => {
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - annualPrice;
    const discountPercent = Math.round((savings / monthlyTotal) * 100);
    return { savings, discountPercent };
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Transparent Pricing
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Pricing Plans
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose the perfect plan for your organization. All plans include our revolutionary AI consciousness, 
                quantum computing, and space technology solutions with transparent, predictable pricing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-2 border border-gray-700/50">
                <div className="flex">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      billingCycle === 'monthly'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('annual')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      billingCycle === 'annual'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Annual
                    <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                      Save 20%
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => {
                const { savings, discountPercent } = getAnnualDiscount(plan.price.monthly, plan.price.annual);
                const currentPrice = billingCycle === 'annual' ? plan.price.annual : plan.price.monthly;
                
                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 ${
                      plan.popular
                        ? 'border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.3)] scale-105'
                        : 'border-gray-700/50 hover:border-cyan-500/30'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                          <Star className="w-4 h-4 mr-2" />
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center`}>
                        <plan.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-6">{plan.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-white">${currentPrice}</span>
                        <span className="text-gray-400 ml-2">
                          /{billingCycle === 'annual' ? 'year' : 'month'}
                        </span>
                      </div>
                      
                      {billingCycle === 'annual' && (
                        <div className="text-green-400 text-sm mb-4">
                          Save ${savings} ({discountPercent}% off monthly)
                        </div>
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
                      onClick={() => handlePlanSelect(plan.id)}
                      className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25'
                          : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                      }`}
                    >
                      {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Add-on Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with additional specialized services and capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                    <addon.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 text-center">
                    {addon.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 text-center">
                    {addon.description}
                  </p>
                  
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-white">
                      ${billingCycle === 'annual' ? addon.price.annual : addon.price.monthly}
                    </span>
                    <span className="text-gray-400 text-sm ml-2">
                      /{billingCycle === 'annual' ? 'year' : 'month'}
                    </span>
                  </div>
                  
                  <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Add Service
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What's Included
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every plan includes our core revolutionary technology solutions and features.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
              viewport={{ once: true }}
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
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated."
                },
                {
                  question: "Do you offer custom enterprise solutions?",
                  answer: "Absolutely! We work with enterprise clients to create custom solutions tailored to their specific needs and requirements."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients."
                },
                {
                  question: "Is there a free trial available?",
                  answer: "Yes, we offer a 14-day free trial for all plans so you can experience our revolutionary technology firsthand."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of organizations already using our revolutionary technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PricingPage;