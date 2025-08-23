import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, Brain, Zap, Target, Star, CheckCircle, Cpu, Network, Database, Shield, Globe, Rocket } from 'lucide-react';

const QuantumNeuralEcosystem2040: React.FC = () => {
  const features = [
    {
      icon: <Atom className="w-8 h-8 text-blue-400" />,
      title: 'Quantum Neural Networks',
      description: 'Advanced quantum computing-powered neural networks with exponential processing capabilities'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Consciousness Integration',
      description: 'Seamless integration of quantum processing with AI consciousness systems'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Quantum Entanglement',
      description: 'Leveraging quantum entanglement for instant information transfer and processing'
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: 'Precision Computing',
      description: 'Unprecedented accuracy in complex calculations and pattern recognition'
    }
  ];

  const benefits = [
    'Exponential processing power increase',
    'Real-time quantum pattern recognition',
    'Advanced consciousness simulation',
    'Breakthrough scientific discoveries',
    'Revolutionary AI capabilities',
    'Quantum-secure communications'
  ];

  const applications = [
    {
      title: 'Scientific Research',
      description: 'Accelerating breakthrough discoveries in physics, chemistry, and biology',
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: 'AI Development',
      description: 'Creating the most advanced artificial intelligence systems ever built',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Financial Modeling',
      description: 'Revolutionary risk assessment and market prediction capabilities',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Cybersecurity',
      description: 'Quantum-resistant encryption and threat detection systems',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const technologyStack = [
    'Quantum Processing Units (QPUs)',
    'Quantum Neural Network Architecture',
    'Quantum-Classical Hybrid Systems',
    'Quantum Error Correction',
    'Quantum Memory Systems',
    'Quantum Communication Protocols'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Revolutionary Quantum Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Quantum Neural Ecosystem
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  2040
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the convergence of quantum computing and artificial intelligence, 
                creating the most powerful computational ecosystem ever conceived.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                >
                  Get Started
                </a>
                <a
                  href="/quantum-services"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our quantum neural ecosystem delivers unprecedented computational power 
                that redefines what's possible in artificial intelligence and computing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Quantum Neural?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the transformative power of quantum computing combined with 
                advanced neural networks for unprecedented computational capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-lg text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum neural technology is revolutionizing industries and 
                solving previously impossible computational challenges.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4 text-blue-400">{application.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                  <p className="text-gray-300">{application.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on the most cutting-edge quantum technologies available in 2040, 
                ensuring unparalleled computational power and reliability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{tech}</span>
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
                Ready to Experience Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the quantum revolution and discover what's possible when 
                quantum computing meets artificial intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                >
                  Start Your Journey
                </a>
                <a
                  href="/quantum-services"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Explore All Quantum Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumNeuralEcosystem2040;