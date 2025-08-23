import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Shield, Users, Globe, Rocket, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';

const aiServices = [
  {
    id: 'ai-consciousness',
    name: 'AI Consciousness Evolution',
    description: 'Revolutionary AI platforms that evolve consciousness and emotional intelligence',
    features: ['Emotional Intelligence Training', 'Consciousness Evolution', 'Ethical AI Development'],
    price: '$2,999',
    period: 'month',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    badge: 'Featured'
  },
  {
    id: 'ai-autonomous',
    name: 'Autonomous Business Operations',
    description: 'AI-powered autonomous systems that run your business operations 24/7',
    features: ['Process Automation', 'Decision Making', 'Continuous Learning'],
    price: '$1,999',
    period: 'month',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    badge: 'Popular'
  },
  {
    id: 'ai-research',
    name: 'AI Research Assistant',
    description: 'Advanced AI research platforms for scientific discovery and innovation',
    features: ['Data Analysis', 'Pattern Recognition', 'Hypothesis Generation'],
    price: '$1,499',
    period: 'month',
    icon: <Target className="w-8 h-8 text-green-400" />,
    badge: 'New'
  },
  {
    id: 'ai-predictive',
    name: 'Predictive Maintenance AI',
    description: 'AI-powered predictive analytics for equipment and system maintenance',
    features: ['Failure Prediction', 'Optimization', 'Cost Reduction'],
    price: '$999',
    period: 'month',
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    badge: 'Hot'
  },
  {
    id: 'ai-content',
    name: 'Content Personalization Engine',
    description: 'AI-driven content personalization for enhanced user engagement',
    features: ['User Behavior Analysis', 'Dynamic Content', 'A/B Testing'],
    price: '$799',
    period: 'month',
    icon: <Users className="w-8 h-8 text-purple-400" />,
    badge: 'Popular'
  },
  {
    id: 'ai-ecosystem',
    name: 'Autonomous Ecosystem Manager',
    description: 'AI systems that manage and optimize entire business ecosystems',
    features: ['System Integration', 'Performance Monitoring', 'Automated Optimization'],
    price: '$2,499',
    period: 'month',
    icon: <Globe className="w-8 h-8 text-emerald-400" />,
    badge: 'Enterprise'
  }
];

export default function AIServices() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary artificial intelligence solutions that transform businesses and accelerate human progress
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    {service.icon}
                    {service.badge && (
                      <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                      <span className="text-sm text-gray-400 font-normal">/{service.period}</span>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Get Started
                    </button>
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
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI solutions can accelerate your growth and innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
