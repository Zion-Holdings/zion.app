import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Brain, Zap, Cpu, Database, Cloud, ArrowRight, Shield, Network, Globe, Rocket, Star, Lock, Users, Eye } from 'lucide-react';
import Link from 'next/link';

const QuantumNeuralNetworkPlatform2045: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Processing',
      description: 'Revolutionary quantum computing power for neural network operations',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Neural Evolution',
      description: 'Self-evolving neural architectures that adapt and improve continuously',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Network,
      title: 'Quantum Entanglement',
      description: 'Interconnected quantum neural networks with instant communication',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'Processing speeds that exceed classical computing limitations',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const capabilities = [
    'Quantum neural network training and optimization',
    'Real-time quantum pattern recognition',
    'Quantum memory and storage systems',
    'Quantum error correction and fault tolerance',
    'Quantum neural network security protocols',
    'Scalable quantum neural architectures',
    'Quantum neural network monitoring and analytics',
    'Cross-platform quantum neural integration'
  ];

  const applications = [
    {
      title: 'Advanced AI Research',
      description: 'Breakthrough discoveries in artificial intelligence and machine learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing',
      description: 'ArrowRight-generation quantum computing applications and algorithms',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Neural Network Optimization',
      description: 'Unprecedented optimization of complex neural network architectures',
      icon: Network,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Scientific Discovery',
      description: 'Accelerating scientific research and breakthrough discoveries',
      icon: Eye,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Revolutionary Quantum Technology 2045
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Quantum Neural Network Platform 2045
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Experience the future of computing with our revolutionary quantum neural network platform 
              that combines the power of quantum computing with advanced neural network architectures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/quantum-services" className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-lg font-semibold text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Quantum Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the unprecedented capabilities of our quantum neural network platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/40 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 relative bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum neural network platform delivers unprecedented capabilities that redefine computing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how our quantum neural network platform is transforming industries and research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/40 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${application.color} mb-6`}>
                    <application.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{application.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{application.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join us in the quantum revolution and discover the future of neural network computing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                Start Your Journey
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/quantum-services" className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-lg font-semibold text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                Explore Quantum Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumNeuralNetworkPlatform2045;