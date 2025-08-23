import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Globe, Zap, Target, Users, ArrowRight, Atom } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function QuantumInternetSecurity() {
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
                Quantum Internet Security
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Next-generation cybersecurity powered by quantum mechanics. Unbreakable encryption, 
                instant threat detection, and future-proof protection for the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is Quantum Internet Security */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white">What is Quantum Internet Security?</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Quantum Internet Security leverages the fundamental principles of quantum mechanics to create 
                  unbreakable encryption and instant threat detection systems. By harnessing quantum entanglement, 
                  superposition, and uncertainty, we create security protocols that are mathematically impossible to breach.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our quantum security infrastructure provides protection against both current and future threats, 
                  including attacks from quantum computers that could break traditional encryption.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <Atom className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                    <p className="text-blue-400 text-lg font-semibold">Quantum Security Matrix</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Revolutionary quantum security capabilities</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="w-12 h-12 text-cyan-400" />,
                  title: "Quantum Key Distribution",
                  description: "Unbreakable encryption keys generated through quantum entanglement, ensuring perfect secrecy."
                },
                {
                  icon: <Zap className="w-12 h-12 text-blue-400" />,
                  title: "Instant Threat Detection",
                  description: "Real-time monitoring using quantum sensors that detect anomalies at the quantum level."
                },
                {
                  icon: <Target className="w-12 h-12 text-purple-400" />,
                  title: "Quantum-Resistant Algorithms",
                  description: "Advanced cryptographic protocols designed to withstand attacks from quantum computers."
                },
                {
                  icon: <Globe className="w-12 h-12 text-green-400" />,
                  title: "Global Quantum Network",
                  description: "Worldwide quantum-secured communication infrastructure with instant connectivity."
                },
                {
                  icon: <Shield className="w-12 h-12 text-yellow-400" />,
                  title: "Zero-Trust Architecture",
                  description: "Quantum-verified identity and access management with continuous authentication."
                },
                {
                  icon: <Atom className="w-12 h-12 text-pink-400" />,
                  title: "Quantum Machine Learning",
                  description: "AI-powered threat detection using quantum computing for pattern recognition."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Applications</h2>
              <p className="text-xl text-gray-300">Transformative security solutions for critical infrastructure</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Financial Institutions",
                  description: "Quantum-secured banking, trading, and payment systems with unbreakable encryption.",
                  benefits: ["Unbreakable encryption", "Real-time fraud detection", "Global compliance"]
                },
                {
                  title: "Government & Defense",
                  description: "National security infrastructure protected by quantum encryption and threat detection.",
                  benefits: ["Classified communications", "Critical infrastructure", "National security"]
                },
                {
                  title: "Healthcare Systems",
                  description: "Patient data protection and medical device security using quantum protocols.",
                  benefits: ["HIPAA compliance", "Device security", "Data privacy"]
                },
                {
                  title: "Energy & Utilities",
                  description: "Grid security and critical infrastructure protection against cyber threats.",
                  benefits: ["Grid resilience", "Threat prevention", "24/7 monitoring"]
                }
              ].map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{app.title}</h3>
                  <p className="text-gray-300 mb-4">{app.description}</p>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-cyan-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
              <p className="text-xl text-gray-300">Cutting-edge quantum technologies powering our security platform</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="space-y-6"
              >
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Quantum Key Distribution (QKD)</h3>
                  <p className="text-gray-300">BB84 and E91 protocols for secure key generation using quantum entanglement.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Post-Quantum Cryptography</h3>
                  <p className="text-gray-300">Lattice-based, hash-based, and multivariate polynomial cryptography.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Quantum Random Number Generation</h3>
                  <p className="text-gray-300">True randomness from quantum mechanical processes for cryptographic keys.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="space-y-6"
              >
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-green-400 mb-3">Quantum Machine Learning</h3>
                  <p className="text-gray-300">AI-powered threat detection using quantum algorithms for pattern recognition.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">Quantum Network Protocols</h3>
                  <p className="text-gray-300">Advanced networking protocols optimized for quantum-secured communications.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-pink-400 mb-3">Quantum Sensors</h3>
                  <p className="text-gray-300">Ultra-sensitive detection systems for identifying security threats.</p>
                </div>
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
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready for Quantum-Secure Future?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Protect your digital assets with the most advanced security technology ever created.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/quantum-services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}