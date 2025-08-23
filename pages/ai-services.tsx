import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users, Target, Award, Globe, Rocket, Atom, Cpu } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AIServices() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI consciousness, autonomous systems, and intelligent solutions 
                that transform businesses and accelerate human progress.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI Categories */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Consciousness */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">AI Consciousness</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Advanced AI platforms with emotional intelligence, self-awareness, and ethical alignment.
                </p>
                <div className="space-y-2">
                  <a href="/ai-consciousness-evolution-2025" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                    • AI Consciousness Evolution Platform
                  </a>
                  <a href="/ai-emotional-intelligence-platform" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                    • Emotional Intelligence Training
                  </a>
                  <a href="/ai-ethics-governance-framework" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                    • AI Ethics & Governance
                  </a>
                </div>
              </motion.div>

              {/* Autonomous Systems */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Autonomous Systems</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Self-operating AI systems that manage business processes autonomously.
                </p>
                <div className="space-y-2">
                  <a href="/ai-autonomous-business-operations" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    • Autonomous Business Operations
                  </a>
                  <a href="/ai-autonomous-customer-service" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    • Autonomous Customer Service
                  </a>
                  <a href="/ai-autonomous-marketing-platform" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    • Autonomous Marketing Platform
                  </a>
                </div>
              </motion.div>

              {/* Business Intelligence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Business Intelligence</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  AI-powered analytics and decision-making tools for business optimization.
                </p>
                <div className="space-y-2">
                  <a href="/ai-business-intelligence-suite" className="block text-green-400 hover:text-green-300 transition-colors">
                    • Business Intelligence Suite
                  </a>
                  <a href="/ai-predictive-maintenance-platform" className="block text-green-400 hover:text-green-300 transition-colors">
                    • Predictive Maintenance
                  </a>
                  <a href="/ai-supply-chain-optimization" className="block text-green-400 hover:text-green-300 transition-colors">
                    • Supply Chain Optimization
                  </a>
                </div>
              </motion.div>

              {/* AI Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">AI Development</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Custom AI development and integration services for enterprise applications.
                </p>
                <div className="space-y-2">
                  <a href="/ai-code-review-copilot" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    • AI Code Review Copilot
                  </a>
                  <a href="/ai-autonomous-code-generation" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    • Autonomous Code Generation
                  </a>
                  <a href="/ai-autonomous-decision-engine" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    • Autonomous Decision Engine
                  </a>
                </div>
              </motion.div>

              {/* Industry Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white">Industry Solutions</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Specialized AI solutions for healthcare, finance, manufacturing, and more.
                </p>
                <div className="space-y-2">
                  <a href="/healthcare-ai-solutions" className="block text-orange-400 hover:text-orange-300 transition-colors">
                    • Healthcare AI Solutions
                  </a>
                  <a href="/financial-solutions" className="block text-orange-400 hover:text-orange-300 transition-colors">
                    • Financial AI Solutions
                  </a>
                  <a href="/manufacturing-ai-solutions" className="block text-orange-400 hover:text-orange-300 transition-colors">
                    • Manufacturing AI Solutions
                  </a>
                </div>
              </motion.div>

              {/* AI Infrastructure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">AI Infrastructure</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Robust AI infrastructure and platform solutions for enterprise deployment.
                </p>
                <div className="space-y-2">
                  <a href="/ai-powered-enterprise-architecture" className="block text-yellow-400 hover:text-yellow-300 transition-colors">
                    • Enterprise AI Architecture
                  </a>
                  <a href="/ai-powered-devops-platform" className="block text-yellow-400 hover:text-yellow-300 transition-colors">
                    • AI-Powered DevOps
                  </a>
                  <a href="/ai-powered-cybersecurity" className="block text-yellow-400 hover:text-yellow-300 transition-colors">
                    • AI-Powered Cybersecurity
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI experts help you implement cutting-edge solutions that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/comprehensive-2037-services-showcase"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View Showcase
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
