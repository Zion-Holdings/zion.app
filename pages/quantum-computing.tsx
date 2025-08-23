import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Atom, Zap, Brain, Shield, Database, 
  Cpu, Network, Lock, Rocket, Target,
  CheckCircle, ArrowRight, Star
} from 'lucide-react';
import Link from 'next/link';

export default function QuantumComputingPage() {
  const features = [
    {
      icon: <Atom className="w-8 h-8 text-cyan-400" />,
      title: 'Quantum Supremacy',
      description: 'Achieve computational advantages over classical systems'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Quantum AI',
      description: 'Enhanced machine learning with quantum algorithms'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Quantum Security',
      description: 'Unbreakable encryption using quantum key distribution'
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: 'Quantum Databases',
      description: 'Ultra-fast data processing and search capabilities'
    }
  ];

  const services = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for specific business problems',
      price: 'Starting at $15,000',
      features: ['Custom algorithm design', 'Quantum circuit optimization', 'Performance benchmarking']
    },
    {
      title: 'Quantum Computing Infrastructure',
      description: 'Full-stack quantum computing platform deployment',
      price: 'Starting at $25,000',
      features: ['Hardware integration', 'Software stack', 'Maintenance & support']
    },
    {
      title: 'Quantum Security Solutions',
      description: 'Quantum-resistant cryptography and secure communications',
      price: 'Starting at $10,000',
      features: ['Post-quantum cryptography', 'Quantum key distribution', 'Security audits']
    }
  ];

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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-6">
                Quantum Computing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Unlock the power of quantum mechanics to solve previously impossible computational challenges. 
                Experience the future of computing today.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link
                  href="/resources"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Capabilities
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Harness the power of quantum mechanics for unprecedented computational performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Services
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Comprehensive quantum computing solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience Quantum Computing?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Join the quantum revolution and solve problems that were once impossible
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Quantum Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}