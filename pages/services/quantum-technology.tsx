import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, Zap, Target, Users, Shield, Rocket, Star, CheckCircle, Cpu, Database } from 'lucide-react';

const QuantumTechnologyPage: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'State-of-the-art quantum processors and quantum algorithms for complex problem solving'
    },
    {
      icon: Cpu,
      title: 'Hybrid Systems',
      description: 'Seamless integration between quantum and classical computing architectures'
    },
    {
      icon: Database,
      title: 'Quantum Databases',
      description: 'Quantum-enhanced data storage and retrieval systems'
    },
    {
      icon: Zap,
      title: 'Quantum Algorithms',
      description: 'Custom quantum algorithms optimized for specific industry applications'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Quantum-resistant cryptography and quantum key distribution'
    },
    {
      icon: Rocket,
      title: 'Quantum Optimization',
      description: 'Quantum optimization for logistics, finance, and scientific research'
    }
  ];

  const applications = [
    'Financial modeling and risk assessment',
    'Drug discovery and molecular simulation',
    'Logistics and supply chain optimization',
    'Climate modeling and weather prediction',
    'Cryptography and cybersecurity',
    'Machine learning and AI acceleration'
  ];

  const benefits = [
    'Exponential speedup for complex calculations',
    'Revolutionary breakthroughs in scientific research',
    'Enhanced optimization capabilities',
    'Future-proof security solutions',
    'Competitive advantage in innovation',
    'Access to cutting-edge quantum technology'
  ];

  return (
    <Layout
      title="Quantum Technology Solutions - Zion Tech Group"
      description="Revolutionary quantum computing and hybrid systems that solve previously impossible problems with unprecedented speed and accuracy."
      keywords="quantum computing, quantum technology, hybrid systems, quantum algorithms, quantum security, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Quantum Technology Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Quantum Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Harness the power of quantum mechanics with our revolutionary quantum computing and hybrid systems that solve previously impossible problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Explore Quantum Solutions
                </button>
                <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300">
                  Schedule Quantum Demo
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Quantum Technology Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum technology platform represents the cutting edge of computational power, combining quantum mechanics with advanced classical computing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/60 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Technology Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover how quantum technology is revolutionizing industries and solving complex problems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/40 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <p className="text-gray-300">{application}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Quantum Technology?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of computing with our revolutionary quantum technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Harness Quantum Power?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join us in pioneering the quantum computing revolution and solving the world's most complex problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Start Quantum Journey
                </button>
                <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300">
                  Contact Quantum Experts
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumTechnologyPage;