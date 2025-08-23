import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, TestTube, Brain, Zap, Globe, Cpu, CheckCircle, Star, Search, Target } from 'lucide-react';

const QuantumMaterialsDiscovery2040: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
                <Atom className="w-4 h-4" />
                Quantum Materials Discovery 2040
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Quantum Materials Discovery 2040
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered quantum materials discovery with consciousness-based research and autonomous experimentation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                  Launch Discovery AI
                </button>
                <button className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-2xl hover:bg-purple-500/10 transition-all duration-300">
                  View Research
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Materials Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced AI capabilities that revolutionize materials science and discovery
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8 text-purple-400" />,
                  title: "Quantum Simulation",
                  description: "Quantum computing for materials simulation and modeling"
                },
                {
                  icon: <Brain className="w-8 h-8 text-blue-400" />,
                  title: "AI Discovery",
                  description: "Consciousness-based AI for materials research"
                },
                {
                  icon: <TestTube className="w-8 h-8 text-cyan-400" />,
                  title: "Autonomous Research",
                  description: "Self-directed materials research and experimentation"
                },
                {
                  icon: <Search className="w-8 h-8 text-emerald-400" />,
                  title: "Pattern Recognition",
                  description: "Advanced pattern recognition in materials data"
                },
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "High-Throughput",
                  description: "Rapid materials screening and optimization"
                },
                {
                  icon: <Globe className="w-8 h-8 text-orange-400" />,
                  title: "Global Collaboration",
                  description: "Worldwide materials research collaboration"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Materials Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Revolutionary applications enabled by quantum materials discovery
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Energy Storage",
                  description: "Advanced batteries and energy storage materials",
                  icon: <Zap className="w-12 h-12 text-purple-400" />
                },
                {
                  title: "Quantum Computing",
                  description: "Materials for quantum computing and quantum devices",
                  icon: <Atom className="w-12 h-12 text-blue-400" />
                },
                {
                  title: "Medical Devices",
                  description: "Biocompatible materials for medical applications",
                  icon: <TestTube className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: "Space Technology",
                  description: "Advanced materials for space exploration",
                  icon: <Globe className="w-12 h-12 text-emerald-400" />
                }
              ].map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{application.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{application.title}</h3>
                  <p className="text-gray-400 text-lg">{application.description}</p>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Quantum Materials?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy AI-powered materials discovery that revolutionizes science
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumMaterialsDiscovery2040;