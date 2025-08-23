import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Shield, Brain, Rocket, Zap, Target, Cpu, Globe, Lock, ArrowRight, Star, Cloud } from 'lucide-react';
import SEO from '../components/SEO';

const quantumServices = [
  {
    title: 'Quantum Neural Networks',
    description: 'Advanced quantum computing systems for neural network processing and AI acceleration',
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    href: '/quantum-neural-network-platform',
    features: ['Quantum AI Acceleration', 'Neural Network Optimization', 'Quantum Learning Algorithms']
  },
  {
    title: 'Quantum Cybersecurity',
    description: 'Quantum-resistant security solutions and cryptographic protocols',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    href: '/quantum-cybersecurity-platform',
    features: ['Quantum-Resistant Encryption', 'Post-Quantum Cryptography', 'Security Auditing']
  },
  {
    title: 'Quantum Cloud Infrastructure',
    description: 'Scalable quantum computing infrastructure in the cloud',
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    href: '/quantum-cloud-infrastructure-platform',
    features: ['Cloud Quantum Computing', 'Scalable Infrastructure', 'Quantum API Access']
  },
  {
    title: 'Quantum Financial Trading',
    description: 'Quantum algorithms for high-frequency trading and financial modeling',
    icon: <Target className="w-8 h-8 text-green-400" />,
    href: '/quantum-financial-trading',
    features: ['Algorithmic Trading', 'Risk Assessment', 'Portfolio Optimization']
  },
  {
    title: 'Quantum Materials Discovery',
    description: 'Quantum simulation for materials science and discovery',
    icon: <Atom className="w-8 h-8 text-cyan-400" />,
    href: '/quantum-materials-discovery-platform',
    features: ['Materials Simulation', 'Property Prediction', 'Discovery Acceleration']
  },
  {
    title: 'Quantum Internet Security',
    description: 'Secure quantum communication networks and protocols',
    icon: <Globe className="w-8 h-8 text-yellow-400" />,
    href: '/quantum-internet-security-platform',
    features: ['Quantum Key Distribution', 'Secure Communication', 'Network Security']
  }
];

export default function QuantumServices() {
  return (
    <>
      <SEO 
        title="Quantum Technology Services | Zion Tech Group"
        description="Breakthrough quantum computing solutions including neural networks, cybersecurity, cloud infrastructure, and financial trading platforms."
        canonical="https://ziontechgroup.com/quantum-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Quantum Technology Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary quantum computing solutions that harness the power of quantum mechanics to solve previously impossible problems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Explore Quantum Solutions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Quantum Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Computing Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                State-of-the-art quantum technologies designed to revolutionize industries and accelerate scientific discovery
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quantumServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:text-purple-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Advantage Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Quantum Advantage
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Quantum computing offers exponential speedup for specific problems that are intractable for classical computers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Exponential Speedup',
                  description: 'Quantum algorithms provide exponential speedup for optimization problems',
                  icon: <Zap className="w-12 h-12 text-yellow-400" />
                },
                {
                  title: 'Quantum Supremacy',
                  description: 'Achieve computational tasks impossible for classical computers',
                  icon: <Rocket className="w-12 h-12 text-purple-400" />
                },
                {
                  title: 'Quantum Entanglement',
                  description: 'Leverage quantum entanglement for secure communication',
                  icon: <Lock className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: 'Quantum Simulation',
                  description: 'Accurate simulation of quantum systems and materials',
                  icon: <Atom className="w-12 h-12 text-blue-400" />
                }
              ].map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400">
                    {advantage.description}
                  </p>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Harness Quantum Power?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Discover how quantum computing can transform your business and accelerate innovation beyond classical limits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Start Quantum Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Quantum Assessment
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}