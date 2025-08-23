import React from 'react';
import { motion } from 'framer-motion';
import { Star, Rocket, Brain, Atom, Shield, Zap, Target, Globe, Users, BarChart3, Cpu, Building } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

export default function Showcase() {
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
                Service Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our cutting-edge technology solutions through interactive demonstrations, 
                detailed showcases, and real-world applications that drive innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Showcases */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Showcases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most innovative and transformative technology solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-8 h-8 text-cyan-400" />
                    <span className="text-sm font-semibold text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    2025 Services Showcase
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our current flagship services portfolio featuring AI consciousness, 
                    quantum computing, and autonomous systems.
                  </p>
                  <Link 
                    href="/services"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group-hover:gap-3"
                  >
                    <span>Explore Services</span>
                    <Rocket className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-8 h-8 text-purple-400" />
                    <span className="text-sm font-semibold text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                      AI Focus
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    2037 Innovative Services
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Next-generation AI solutions that push the boundaries of consciousness 
                    and autonomous decision-making.
                  </p>
                  <Link 
                    href="/2037-innovative-services-showcase"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group-hover:gap-3"
                  >
                    <span>View Innovation</span>
                    <Brain className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 hover:border-green-400/60 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Atom className="w-8 h-8 text-green-400" />
                    <span className="text-sm font-semibold text-green-400 bg-green-900/30 px-3 py-1 rounded-full">
                      Quantum
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ultimate 2035 Futuristic
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Revolutionary quantum technologies and space-age solutions that 
                    define the future of computing and exploration.
                  </p>
                  <Link 
                    href="/ultimate-2035-futuristic-services-showcase"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group-hover:gap-3"
                  >
                    <span>Discover Future</span>
                    <Atom className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology solutions organized by category
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="group text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI & Consciousness</h3>
                <p className="text-gray-400 text-sm">Advanced AI solutions</p>
                <Link 
                  href="/ai-services"
                  className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Explore →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="group text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Atom className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quantum Technology</h3>
                <p className="text-gray-400 text-sm">Quantum computing solutions</p>
                <Link 
                  href="/quantum-services"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Explore →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="group text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Autonomous Systems</h3>
                <p className="text-gray-400 text-sm">Self-operating solutions</p>
                <Link 
                  href="/autonomous-systems"
                  className="inline-block mt-4 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Explore →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="group text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise IT</h3>
                <p className="text-gray-400 text-sm">Corporate solutions</p>
                <Link 
                  href="/enterprise-it"
                  className="inline-block mt-4 text-green-400 hover:text-green-300 transition-colors"
                >
                  Explore →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Demos */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Interactive Demonstrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience our technology firsthand through interactive demos and live showcases
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Live AI Demo
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Watch our AI consciousness platform in action, demonstrating real-time 
                  learning, decision-making, and ethical reasoning capabilities.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Launch Demo
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Quantum Simulator
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Explore quantum computing concepts through our interactive simulator, 
                  understanding superposition, entanglement, and quantum algorithms.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                  Start Simulation
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Showcase */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pricing & Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for all our technology solutions and service packages
              </p>
            </motion.div>

            <div className="text-center">
              <Link 
                href="/pricing"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>View All Pricing</span>
                <Target className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a personalized demo or consultation to see how our technology 
                solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Demo
                </button>
                <Link 
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}