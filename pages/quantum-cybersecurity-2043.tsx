import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Atom, Lock, Target, Users, Globe, Cpu, Network } from 'lucide-react';

const QuantumCybersecurity2043: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-red-900/20 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Quantum Cybersecurity 2043
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Quantum-Resistant
                <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Cybersecurity
                </span>
                Platform
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your digital assets with next-generation quantum-resistant cybersecurity. 
                Advanced threat detection, encryption, and autonomous security response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Security Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Advanced capabilities that provide unprecedented protection against quantum threats
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8" />,
                  title: "Quantum-Resistant Encryption",
                  description: "Post-quantum cryptography algorithms that withstand quantum computing attacks",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Advanced Threat Detection",
                  description: "AI-powered threat detection with real-time response and mitigation",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Zero Trust Security",
                  description: "Comprehensive zero trust architecture with continuous verification",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Predictive Security",
                  description: "AI-driven threat prediction and proactive security measures",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Identity Management",
                  description: "Advanced identity verification and access control systems",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Security Network",
                  description: "Distributed security infrastructure with global threat intelligence",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Dashboard Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/10 to-orange-900/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Security Dashboard
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real-time security monitoring and threat intelligence dashboard
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { metric: "Threat Level", value: "Low", status: "Secure", color: "text-green-400" },
                  { metric: "Active Threats", value: "0", status: "Protected", color: "text-blue-400" },
                  { metric: "Security Score", value: "98.5%", status: "Excellent", color: "text-purple-400" },
                  { metric: "Response Time", value: "<50ms", status: "Ultra-Fast", color: "text-emerald-400" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl">
                    <p className="text-gray-400 text-sm mb-2">{stat.metric}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-green-400 text-sm">{stat.status}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 mb-4">Real-time security monitoring with instant threat response</p>
                <button className="px-6 py-3 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300">
                  View Security Dashboard
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Protect Critical Infrastructure
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Revolutionary use cases that secure the digital future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Financial Security",
                  description: "Protect banking systems, payment networks, and financial transactions with quantum-resistant security",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Healthcare Protection",
                  description: "Secure patient data, medical devices, and healthcare systems with advanced cybersecurity",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Government Defense",
                  description: "Protect critical government infrastructure and national security systems",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Industrial Security",
                  description: "Secure industrial control systems, IoT devices, and critical infrastructure",
                  color: "from-orange-500 to-red-500"
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.color} mb-6`}>
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Future?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the quantum cybersecurity revolution. Protect your digital assets today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Now
                </button>
                <button className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumCybersecurity2043;