import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Brain, Shield, Rocket, Target, Users, Globe, Star, Zap } from 'lucide-react';
import Layout from '../components/layout/Layout';

const quantumServices = [
  {
    id: 'quantum-neural',
    name: 'Quantum Neural Networks',
    description: 'Revolutionary quantum computing platforms for advanced neural network processing',
    features: ['Quantum Superposition', 'Entanglement Processing', 'Exponential Speedup'],
    price: '$3,999',
    period: 'month',
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    badge: 'Featured'
  },
  {
    id: 'quantum-financial',
    name: 'Quantum Financial Trading',
    description: 'Quantum-powered trading platforms for ultra-fast financial analysis and execution',
    features: ['Real-time Analysis', 'Risk Assessment', 'Portfolio Optimization'],
    price: '$2,999',
    period: 'month',
    icon: <Target className="w-8 h-8 text-green-400" />,
    badge: 'Hot'
  },
  {
    id: 'quantum-materials',
    name: 'Quantum Materials Discovery',
    description: 'Quantum computing solutions for advanced materials research and development',
    features: ['Molecular Simulation', 'Property Prediction', 'Optimization Algorithms'],
    price: '$2,499',
    period: 'month',
    icon: <Atom className="w-8 h-8 text-blue-400" />,
    badge: 'New'
  },
  {
    id: 'quantum-bio',
    name: 'Quantum Bio-Computing',
    description: 'Quantum solutions for biological computing and genetic analysis',
    features: ['DNA Sequencing', 'Protein Folding', 'Drug Discovery'],
    price: '$1,999',
    period: 'month',
    icon: <Globe className="w-8 h-8 text-emerald-400" />,
    badge: 'Popular'
  },
  {
    id: 'quantum-security',
    name: 'Quantum Internet Security',
    description: 'Quantum-secure communication and encryption solutions',
    features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Secure Networks'],
    price: '$1,799',
    period: 'month',
    icon: <Shield className="w-8 h-8 text-cyan-400" />,
    badge: 'Enterprise'
  },
  {
    id: 'quantum-cloud',
    name: 'Quantum Cloud Infrastructure',
    description: 'Quantum computing infrastructure as a service platform',
    features: ['Quantum Processing Units', 'Hybrid Classical-Quantum', 'Scalable Architecture'],
    price: '$3,499',
    period: 'month',
    icon: <Rocket className="w-8 h-8 text-yellow-400" />,
    badge: 'Premium'
  }
];

const emergingTechServices = [
  {
    id: 'space-mining',
    name: 'Space Resource Mining',
    description: 'AI-powered space exploration and resource extraction platforms',
    features: ['Asteroid Mining', 'Resource Mapping', 'Autonomous Operations'],
    price: '$4,999',
    period: 'month',
    icon: <Rocket className="w-8 h-8 text-orange-400" />,
    badge: 'Futuristic'
  },
  {
    id: 'brain-computer',
    name: 'Brain-Computer Interface',
    description: 'Advanced neural interface technology for human-computer interaction',
    features: ['Neural Decoding', 'Thought Control', 'Enhanced Cognition'],
    price: '$3,999',
    period: 'month',
    icon: <Brain className="w-8 h-8 text-pink-400" />,
    badge: 'Revolutionary'
  },
  {
    id: 'autonomous-vehicle',
    name: 'Autonomous Vehicle AI',
    description: 'Next-generation AI systems for autonomous vehicle operations',
    features: ['Computer Vision', 'Path Planning', 'Safety Systems'],
    price: '$2,999',
    period: 'month',
    icon: <Zap className="w-8 h-8 text-red-400" />,
    badge: 'Advanced'
  }
];

export default function QuantumServices() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent mb-6">
                Quantum & Emerging Tech
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Breakthrough quantum computing solutions and cutting-edge emerging technologies that define the future
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quantum Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Quantum Computing Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of quantum mechanics for computational problems that were previously impossible
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quantumServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    {service.icon}
                    {service.badge && (
                      <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                      <span className="text-sm text-gray-400 font-normal">/{service.period}</span>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Technologies */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Emerging Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technologies that push the boundaries of what's possible
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {emergingTechServices.map((service, index) => (
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
                      <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full">
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
                    <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
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
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent mb-6">
                Ready for the Quantum Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the power of quantum computing and emerging technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Demo
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}