import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, Brain, Zap, Cpu, Database, Network, Shield, Rocket, Star, ArrowRight } from 'lucide-react';

export default function QuantumNeuralNetworkPlatform2045() {
  const features = [
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Processing',
      description: 'Quantum-powered neural networks that process information at quantum speeds.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Advanced AI Learning',
      description: 'Self-evolving neural networks with unprecedented learning capabilities.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Quantum Memory',
      description: 'Quantum memory systems that store and retrieve information instantly.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Neural Connectivity',
      description: 'Advanced neural connectivity patterns for complex problem solving.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const capabilities = [
    'Quantum speed processing',
    'Advanced pattern recognition',
    'Real-time learning adaptation',
    'Quantum memory optimization',
    'Neural network evolution',
    'Cross-dimensional computing'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Atom className="w-4 h-4" />
                <span>Quantum Neural Network Platform 2045</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Quantum Neural
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Network Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Experience the future of computing with quantum-powered neural networks 
                that process information at quantum speeds and learn in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  Explore Platform
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300">
                  Request Demo
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
                Revolutionary Quantum Neural Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Harness the power of quantum computing combined with advanced neural networks 
                for unprecedented processing capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-30 h-full transition-all duration-300 group-hover:scale-105 group-hover:bg-opacity-20`}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Neural Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the extraordinary capabilities of our quantum neural network platform 
                that redefines the boundaries of artificial intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Platform Capabilities</h3>
                <ul className="space-y-4">
                  {capabilities.map((capability, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                      <span>{capability}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Quantum Processing Speed</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full">
                      <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Neural Learning Rate</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full">
                      <div className="w-20 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Memory Efficiency</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full">
                      <div className="w-22 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                Ready to Experience Quantum Neural Networks?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the quantum revolution with neural networks that process information 
                at speeds previously thought impossible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300">
                  Contact Our Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}