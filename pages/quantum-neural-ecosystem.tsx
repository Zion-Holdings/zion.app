import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, Brain, Zap, Target, Shield, Globe, Users, Award, Clock, CheckCircle, Cpu, Database } from 'lucide-react';

const QuantumNeuralEcosystem: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Processing",
      description: "Quantum-powered neural networks for exponential computational capabilities"
    },
    {
      icon: Brain,
      title: "Neural Architecture",
      description: "Advanced neural network designs optimized for quantum computing"
    },
    {
      icon: Zap,
      title: "Real-time Learning",
      description: "Instantaneous learning and adaptation in quantum space"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Ultra-precise pattern recognition and decision making"
    }
  ];

  const capabilities = [
    "Quantum-enhanced machine learning",
    "Neural network optimization",
    "Pattern recognition at quantum scale",
    "Real-time data processing",
    "Advanced AI training algorithms",
    "Quantum-classical hybrid computing"
  ];

  const applications = [
    "Financial modeling and prediction",
    "Drug discovery and molecular simulation",
    "Climate modeling and prediction",
    "Cybersecurity threat detection",
    "Autonomous vehicle navigation",
    "Medical diagnosis and treatment planning"
  ];

  return (
    <Layout
      title="Quantum Neural Ecosystem - Zion Tech Group"
      description="Revolutionary quantum neural network ecosystem combining quantum computing with advanced AI for unprecedented computational power."
      keywords="quantum neural networks, quantum AI, quantum computing, neural ecosystem, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-indigo-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Atom className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Quantum Neural Ecosystem
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                The future of artificial intelligence meets quantum computing in our revolutionary 
                neural ecosystem, delivering unprecedented computational power and AI capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105">
                  Explore Ecosystem
                </button>
                <button className="px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our quantum neural ecosystem delivers capabilities beyond classical computing
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
                  className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Advanced quantum neural network capabilities that transform computing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Transform industries with quantum neural network technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{application}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ready for Quantum Computing?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Experience the future of neural networks with quantum computing power
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105">
                Access Quantum Neural Ecosystem
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumNeuralEcosystem;