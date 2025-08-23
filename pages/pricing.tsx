import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Brain, Atom, Shield, Rocket, Users, Globe } from 'lucide-react';
import Layout from '../components/layout/Layout';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$999',
    period: 'month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic AI Integration',
      'Standard Support',
      'Core Analytics',
      'Email Support',
      'Basic Training'
    ],
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    popular: false,
    cta: 'Get Started',
    href: '/contact'
  },
  {
    name: 'Professional',
    price: '$1,999',
    period: 'month',
    description: 'Ideal for growing businesses and enterprises',
    features: [
      'Advanced AI Solutions',
      'Priority Support',
      'Advanced Analytics',
      'Phone & Email Support',
      'Comprehensive Training',
      'Custom Integrations',
      'Performance Monitoring'
    ],
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    popular: true,
    cta: 'Get Started',
    href: '/contact'
  },
  {
    name: 'Enterprise',
    price: '$3,999',
    period: 'month',
    description: 'Full-scale solutions for large organizations',
    features: [
      'Custom AI Development',
      '24/7 Dedicated Support',
      'Advanced Analytics & ML',
      'Dedicated Account Manager',
      'On-site Training',
      'Custom Integrations',
      'Performance Optimization',
      'Security Audits',
      'Compliance Support'
    ],
    icon: <Shield className="w-8 h-8 text-purple-400" />,
    popular: false,
    cta: 'Contact Sales',
    href: '/contact'
  }
];

const serviceCategories = [
  {
    name: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6 text-cyan-400" />,
    services: [
      { name: 'AI Consciousness Evolution', price: '$2,999/month' },
      { name: 'Autonomous Business Operations', price: '$1,999/month' },
      { name: 'Predictive Maintenance AI', price: '$999/month' },
      { name: 'Content Personalization Engine', price: '$799/month' }
    ]
  },
  {
    name: 'Quantum Computing',
    icon: <Atom className="w-6 h-6 text-purple-400" />,
    services: [
      { name: 'Quantum Neural Networks', price: '$3,999/month' },
      { name: 'Quantum Financial Trading', price: '$2,999/month' },
      { name: 'Quantum Materials Discovery', price: '$2,499/month' },
      { name: 'Quantum Cloud Infrastructure', price: '$3,499/month' }
    ]
  },
  {
    name: 'Space Technology',
    icon: <Rocket className="w-6 h-6 text-orange-400" />,
    services: [
      { name: 'Space Resource Mining', price: '$4,999/month' },
      { name: 'AI-Powered Space Technology', price: '$3,999/month' },
      { name: 'Autonomous Space Operations', price: '$2,999/month' }
    ]
  },
  {
    name: 'Enterprise IT',
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    services: [
      { name: 'Quantum-Secure Cloud Infrastructure', price: '$2,999/month' },
      { name: 'Autonomous IT Operations Center', price: '$1,999/month' },
      { name: 'Zero Trust Security Platform', price: '$1,499/month' },
      { name: 'SOC 2 Compliance Automation', price: '$999/month' }
    ]
  }
];

export default function Pricing() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Pricing Plans
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transparent pricing for revolutionary technology solutions that transform your business
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-green-400/50 scale-105' 
                      : 'border-gray-700/50'
                  } hover:border-green-400/50 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.href}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-500 hover:to-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Service Pricing by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Detailed pricing for our specialized technology solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-700/50 last:border-b-0">
                        <span className="text-gray-300">{service.name}</span>
                        <span className="text-green-400 font-semibold">{service.price}</span>
                      </div>
                    ))}
                  </div>
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
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us to discuss your specific needs and get a customized quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Custom Quote
                </a>
                <a
                  href="/market-pricing"
                  className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  View Market Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}