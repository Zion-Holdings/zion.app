import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, Eye, Brain } from 'lucide-react';
import Link from 'next/link';

const QuantumCybersecurity: React.FC = () => {
  const solutions = [
    {
      icon: <Key className="w-8 h-8" />,
      title: 'Quantum Key Distribution',
      description: 'Unbreakable encryption using quantum mechanics principles for secure communications.',
      features: ['BB84 Protocol', 'E91 Protocol', 'Continuous Variable QKD']
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Post-Quantum Cryptography',
      description: 'Cryptographic algorithms resistant to quantum computer attacks.',
      features: ['Lattice-based', 'Hash-based', 'Code-based Cryptography']
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Quantum Threat Detection',
      description: 'Advanced threat detection using quantum computing capabilities.',
      features: ['Anomaly Detection', 'Pattern Recognition', 'Real-time Monitoring']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Quantum AI Security',
      description: 'AI-powered security solutions enhanced with quantum computing.',
      features: ['Behavioral Analysis', 'Predictive Security', 'Adaptive Defense']
    }
  ];

  const benefits = [
    {
      title: 'Unbreakable Encryption',
      description: 'Quantum key distribution provides theoretically unbreakable encryption.'
    },
    {
      title: 'Future-Proof Security',
      description: 'Post-quantum cryptography ensures security against future quantum threats.'
    },
    {
      title: 'Enhanced Detection',
      description: 'Quantum computing improves threat detection and response capabilities.'
    },
    {
      title: 'Global Standards',
      description: 'Compliance with emerging quantum security standards and regulations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quantum Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Next-generation security solutions using quantum computing to protect against emerging threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Secure Your Systems
              </Link>
              <Link
                href="/quantum-computing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Back to Quantum
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Quantum Security Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions leveraging quantum computing technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{solution.title}</h3>
                    <p className="text-gray-300">{solution.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Quantum Cybersecurity?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of emerging threats with quantum-powered security solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Implementation Roadmap</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our systematic approach to implementing quantum cybersecurity solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                01
              </div>
              <h3 className="text-xl font-semibold mb-3">Assessment</h3>
              <p className="text-gray-300">Evaluate current security posture and identify quantum vulnerabilities.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                02
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy</h3>
              <p className="text-gray-300">Develop comprehensive quantum security strategy and roadmap.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                03
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-gray-300">Deploy quantum security solutions with minimal disruption.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                04
              </div>
              <h3 className="text-xl font-semibold mb-3">Monitoring</h3>
              <p className="text-gray-300">Continuous monitoring and optimization of quantum security systems.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Protect your systems with quantum-powered cybersecurity solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Security Assessment
              </Link>
              <Link
                href="/quantum-computing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore More Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumCybersecurity;

