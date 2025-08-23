import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Shield, Zap, Brain, Rocket, Target, Award, Globe, Cpu, Lock } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function QuantumServices() {
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Quantum Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Breakthrough quantum computing solutions that solve previously impossible problems 
                and unlock the next generation of technological advancement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quantum Categories */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quantum Computing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Atom className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Quantum Computing</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Advanced quantum computing platforms and hybrid AI-quantum solutions.
                </p>
                <div className="space-y-2">
                  <a href="/quantum-ai-brain-computer-interface" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    • Quantum AI Brain-Computer Interface
                  </a>
                  <a href="/quantum-ai-cognitive" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    • Quantum AI Cognitive Platform
                  </a>
                  <a href="/quantum-ai-fusion" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    • Quantum AI Fusion Platform
                  </a>
                </div>
              </motion.div>

              {/* Quantum Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Quantum Security</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Unbreakable quantum encryption and cybersecurity solutions.
                </p>
                <div className="space-y-2">
                  <a href="/quantum-cybersecurity-platform" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    • Quantum Cybersecurity Platform
                  </a>
                  <a href="/quantum-encryption-gateway" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    • Quantum Encryption Gateway
                  </a>
                  <a href="/quantum-identity-verification" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    • Quantum Identity Verification
                  </a>
                </div>
              </motion.div>

              {/* Quantum Infrastructure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Quantum Infrastructure</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Quantum-ready cloud infrastructure and edge computing platforms.
                </p>
                <div className="space-y-2">
                  <a href="/quantum-cloud-infrastructure-platform" className="block text-green-400 hover:text-green-300 transition-colors">
                    • Quantum Cloud Infrastructure
                  </a>
                  <a href="/quantum-edge-computing-platform" className="block text-green-400 hover:text-green-300 transition-colors">
                    • Quantum Edge Computing
                  </a>
                  <a href="/quantum-data-center" className="block text-green-400 hover:text-green-300 transition-colors">
                    • Quantum Data Center
                  </a>
                </div>
              </motion.div>

              {/* Quantum Applications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white">Quantum Applications</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Specialized quantum applications for finance, logistics, and materials science.
                </p>
                <div className="space-y-2">
                  <a href="/quantum-financial-trading-platform" className="block text-orange-400 hover:text-orange-300 transition-colors">
                    • Quantum Financial Trading
                  </a>
                  <a href="/quantum-supply-chain-optimizer" className="block text-orange-400 hover:text-orange-300 transition-colors">
                    • Quantum Supply Chain Optimizer
                  </a>
                  <a href="/quantum-materials-discovery-platform" className="block text-orange-400 hover:text-orange-300 transition-colors">
                    • Quantum Materials Discovery
                  </a>
                </div>
              </motion.div>

              {/* Quantum IoT & Networks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Quantum IoT & Networks</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Quantum-secured IoT platforms and network security solutions.
                </p>
                <div className="space-y-2">
                  <a href="/quantum-iot" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                    • Quantum IoT Platform
                  </a>
                  <a href="/quantum-internet-security-platform" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                    • Quantum Internet Security
                  </a>
                  <a href="/quantum-networking" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                    • Quantum Networking
                  </a>
                </div>
              </motion.div>

              {/* Quantum Energy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">Quantum Energy</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Quantum solutions for energy optimization and sustainable technology.
                </p>
                <div className="space-y-2">
                  <a href="/quantum-energy-platform" className="block text-yellow-400 hover:text-yellow-300 transition-colors">
                    • Quantum Energy Platform
                  </a>
                  <a href="/quantum-energy-optimization" className="block text-yellow-400 hover:text-yellow-300 transition-colors">
                    • Quantum Energy Optimization
                  </a>
                  <a href="/quantum-bio-computing-platform" className="block text-yellow-400 hover:text-yellow-300 transition-colors">
                    • Quantum Bio-Computing
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Harness Quantum Power?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of computing with our quantum solutions that solve previously impossible problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/comprehensive-2037-services-showcase"
                  className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
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