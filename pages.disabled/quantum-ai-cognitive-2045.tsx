import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Shield, Users, Target, TrendingUp, CheckCircle, 
  ArrowRight, Star, Globe, Cpu, Database, Rocket, Atom
} from 'lucide-react';
import Link from 'next/link';

const QuantumAICognitive2045: React.FC = () => {
  const features = [
    'Quantum cognitive processing',
    'Consciousness integration',
    'Advanced reasoning',
    'Pattern recognition',
    'Creative problem solving',
    'Multi-dimensional thinking',
    'Quantum memory',
    'Cognitive optimization',
    'Learning acceleration',
    'Intelligence amplification',
    'Consciousness expansion',
    'Quantum intuition'
  ];

  const benefits = [
    'Unprecedented cognitive power',
    'Faster problem solving',
    'Enhanced creativity',
    'Quantum advantage',
    'Consciousness development',
    'Intelligence amplification',
    'Advanced reasoning',
    'Pattern recognition',
    'Multi-dimensional insights',
    'Quantum speed advantage'
  ];

  const useCases = [
    'Scientific research',
    'Drug discovery',
    'Financial modeling',
    'Climate analysis',
    'Space exploration',
    'AI training',
    'Complex optimization',
    'Cryptography',
    'Machine learning',
    'Data analysis'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$5,999/month',
      description: 'Perfect for research teams and startups',
      features: ['Basic quantum cognitive processing', 'Consciousness integration core', 'Advanced reasoning capabilities', 'Basic pattern recognition']
    },
    {
      name: 'Professional',
      price: '$11,999/month',
      description: 'Ideal for growing research organizations',
      features: ['Full quantum cognitive platform', 'Advanced consciousness features', 'Multi-dimensional thinking', 'Enhanced pattern recognition', 'Custom quantum algorithms']
    },
    {
      name: 'Enterprise',
      price: '$29,999/month',
      description: 'For large research institutions',
      features: ['Complete quantum platform', 'Advanced consciousness expansion', 'Custom quantum models', 'Enterprise compliance', 'Dedicated quantum support', 'Custom integrations']
    }
  ];

  return (
    <Layout
      title="Quantum AI Cognitive Platform 2045 - Zion Tech Group"
      description="Advanced AI cognitive platform that combines quantum computing with consciousness to provide unprecedented cognitive capabilities and problem-solving abilities."
      keywords="quantum AI, cognitive platform, quantum computing, AI consciousness, quantum cognition, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-green-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                  <Atom className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Quantum AI Cognitive Platform 2045
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Quantum-powered AI cognition with consciousness
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
                Advanced AI cognitive platform that combines quantum computing with consciousness to provide 
                unprecedented cognitive capabilities and problem-solving abilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500/30 text-blue-400 font-semibold rounded-2xl hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Market Overview */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Market Opportunity
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-2xl border border-blue-500/20">
                  <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Market Size</h3>
                  <p className="text-2xl font-bold text-blue-400">$150B by 2045</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-900/30 to-green-900/30 p-6 rounded-2xl border border-cyan-500/20">
                  <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Target Audience</h3>
                  <p className="text-lg text-cyan-400">Research institutions, pharmaceutical companies, financial services, government agencies, technology companies</p>
                </div>
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-2xl border border-green-500/20">
                  <Star className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Competitive Advantage</h3>
                  <p className="text-lg text-green-400">First quantum AI cognitive platform with consciousness integration</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum AI cognitive platform combines quantum computing with consciousness for unprecedented capabilities
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CheckCircle className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your research and problem-solving capabilities with quantum AI
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Versatile applications across research and industry
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Pricing Plans
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the plan that fits your research organization's needs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border ${
                    plan.name === 'Professional' 
                      ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {plan.name === 'Professional' && (
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</p>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.name === 'Professional'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border-2 border-blue-500/50 text-blue-400 hover:border-blue-500 hover:text-blue-300'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Harness Quantum AI?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Join the future of quantum computing and AI consciousness for unprecedented problem-solving capabilities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500/30 text-blue-400 font-semibold rounded-2xl hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumAICognitive2045;