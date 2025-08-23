import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Rocket, Shield, Zap, Target, Globe, Users, BarChart3, Lock } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AutonomousSystems() {
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
                Autonomous Systems
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Self-operating intelligent systems that revolutionize business operations, 
                security, and decision-making through advanced AI and automation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous systems operate independently, continuously learning and adapting 
                to optimize performance and deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">AI Consciousness</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Advanced AI systems with self-awareness and ethical decision-making capabilities, 
                  ensuring responsible autonomous operations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Self-Optimization</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Continuous self-improvement through machine learning, performance analysis, 
                  and adaptive algorithms for optimal efficiency.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Security & Compliance</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Built-in security protocols, compliance monitoring, and ethical safeguards 
                  ensuring safe autonomous operations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Scalable Operations</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Autonomous systems that scale seamlessly, handling increased workloads 
                  and complexity without human intervention.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">Predictive Intelligence</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Advanced forecasting and predictive analytics enabling proactive decision-making 
                  and risk mitigation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-red-400" />
                  <h3 className="text-2xl font-bold text-white">Real-time Adaptation</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Instant response to changing conditions, market dynamics, and operational 
                  requirements for optimal performance.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Autonomous Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most advanced autonomous systems that are transforming industries 
                and driving innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-8 rounded-2xl border border-cyan-500/30"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  AI Autonomous Content Factory
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Fully autonomous content creation, optimization, and distribution system 
                  that operates 24/7, continuously learning and improving content performance.
                </p>
                <div className="flex items-center gap-2 text-cyan-400">
                  <span>Learn More</span>
                  <Rocket className="w-4 h-4" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/30"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  Autonomous Business Intelligence
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Self-operating analytics platform that continuously monitors business metrics, 
                  identifies opportunities, and generates actionable insights automatically.
                </p>
                <div className="flex items-center gap-2 text-purple-400">
                  <span>Learn More</span>
                  <BarChart3 className="w-4 h-4" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 rounded-2xl border border-green-500/30"
              >
                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  Autonomous DevOps Platform
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Self-managing development and operations platform that automatically handles 
                  deployments, monitoring, scaling, and incident response.
                </p>
                <div className="flex items-center gap-2 text-green-400">
                  <span>Learn More</span>
                  <Cpu className="w-4 h-4" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-8 rounded-2xl border border-yellow-500/30"
              >
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  Autonomous Customer Success
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Intelligent customer relationship management system that proactively identifies 
                  customer needs and automatically provides personalized support and solutions.
                </p>
                <div className="flex items-center gap-2 text-yellow-400">
                  <span>Learn More</span>
                  <Users className="w-4 h-4" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency, accuracy, and innovation with our 
                autonomous technology solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-cyan-400 mb-4">24/7</div>
                <div className="text-xl text-white mb-2">Continuous Operation</div>
                <div className="text-gray-400">Never sleeps, never stops</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-blue-400 mb-4">99.9%</div>
                <div className="text-xl text-white mb-2">Uptime</div>
                <div className="text-gray-400">Reliable performance</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-purple-400 mb-4">10x</div>
                <div className="text-xl text-white mb-2">Faster</div>
                <div className="text-gray-400">Than traditional methods</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-green-400 mb-4">∞</div>
                <div className="text-xl text-white mb-2">Scalability</div>
                <div className="text-gray-400">Grows with your needs</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Automate Your Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your business operations with cutting-edge autonomous systems 
                that work tirelessly to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}