import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Brain, Cpu, Database, Globe, Lock, Rocket } from 'lucide-react';
import Link from 'next/link';

const QuantumComputingPage: React.FC = () => {
  const services = [
    {
      title: 'Quantum Cybersecurity',
      description: 'Next-generation quantum-resistant security solutions',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      features: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Quantum-Resistant Algorithms', 'Secure Communications']
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Quantum algorithms for advanced AI and ML applications',
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      features: ['Quantum Neural Networks', 'Quantum Optimization', 'Quantum Feature Selection', 'Quantum Classification']
    },
    {
      title: 'Quantum Cloud Infrastructure',
      description: 'Scalable quantum computing platforms and services',
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      features: ['Quantum Processors', 'Hybrid Classical-Quantum Systems', 'Quantum Simulators', 'Cloud Quantum Access']
    },
    {
      title: 'Quantum Financial Solutions',
      description: 'Quantum computing for financial modeling and trading',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      features: ['Portfolio Optimization', 'Risk Assessment', 'Option Pricing', 'Market Analysis']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of quantum mechanics to solve complex problems that are impossible for classical computers. 
            Our quantum solutions deliver exponential speedups for cryptography, optimization, and machine learning.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-2xl font-bold text-white ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quantum Advantage Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            The Quantum Advantage
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1000x</div>
              <div className="text-purple-100">Faster Optimization</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Unbreakable</div>
              <div className="text-purple-100">Cryptography</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Exponential</div>
              <div className="text-purple-100">Speedup</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Discover how quantum computing can transform your business operations and give you a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link 
                href="/quantum-services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
              >
                Explore Quantum Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumComputingPage;