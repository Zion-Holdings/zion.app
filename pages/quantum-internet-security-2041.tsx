import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, Shield, Network, Zap, Lock, Globe, ArrowRight } from 'lucide-react';

const QuantumInternetSecurity2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full text-indigo-400 text-sm font-medium mb-6">
                <Network className="w-4 h-4" />
                <span>Quantum Internet Security 2041</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Quantum Internet Security 2041
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Revolutionary quantum internet protection using advanced quantum cryptography, 
                entanglement-based security, and consciousness-driven threat detection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Secure Network
                </button>
                <button className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Quantum-powered security that protects the future of internet communication
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8 text-indigo-400" />,
                  title: "Quantum Cryptography",
                  description: "Unbreakable encryption using quantum principles"
                },
                {
                  icon: <Shield className="w-8 h-8 text-purple-400" />,
                  title: "Entanglement Security",
                  description: "Quantum entanglement-based authentication"
                },
                {
                  icon: <Network className="w-8 h-8 text-pink-400" />,
                  title: "Quantum Networks",
                  description: "Secure quantum internet infrastructure"
                },
                {
                  icon: <Zap className="w-8 h-8 text-blue-400" />,
                  title: "Real-time Protection",
                  description: "Instant threat detection and response"
                },
                {
                  icon: <Lock className="w-8 h-8 text-green-400" />,
                  title: "Zero Trust Architecture",
                  description: "Quantum-verified identity and access"
                },
                {
                  icon: <Globe className="w-8 h-8 text-yellow-400" />,
                  title: "Global Security",
                  description: "Worldwide quantum security coverage"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-indigo-400/50 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Benefits Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Security Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Unprecedented protection for the quantum internet era
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "100%", label: "Unbreakable" },
                { metric: "0ms", label: "Detection Time" },
                { metric: "∞", label: "Future Proof" },
                { metric: "Global", label: "Coverage" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-400/20 rounded-xl p-6 text-center hover:border-indigo-400/40 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-indigo-400 mb-2">{item.metric}</div>
                  <div className="text-white font-medium">{item.label}</div>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for Quantum Internet Security?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Protect your digital future with quantum-powered security solutions
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Secure Now
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumInternetSecurity2041;