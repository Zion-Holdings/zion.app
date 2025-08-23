import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Atom, Zap, Target, Star, CheckCircle, Lock, Network, Database, Brain, Cpu, Users } from 'lucide-react';

const QuantumCybersecurityFuture2040: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Quantum-Resistant Encryption',
      description: 'Advanced cryptographic systems that withstand quantum computing attacks'
    },
    {
      icon: <Atom className="w-8 h-8 text-blue-400" />,
      title: 'Quantum Key Distribution',
      description: 'Unbreakable encryption using quantum entanglement principles'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'AI-Powered Threat Detection',
      description: 'Intelligent systems that identify and neutralize cyber threats in real-time'
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: 'Zero-Trust Architecture',
      description: 'Comprehensive security framework with continuous verification and monitoring'
    }
  ];

  const benefits = [
    'Unbreakable quantum encryption',
    'Real-time threat detection and response',
    'Future-proof security architecture',
    'Advanced AI security monitoring',
    'Comprehensive compliance frameworks',
    '24/7 security operations center'
  ];

  const applications = [
    {
      title: 'Financial Security',
      description: 'Quantum-resistant protection for banking, trading, and financial transactions',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Government Defense',
      description: 'National security systems with quantum-level protection capabilities',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'Healthcare Protection',
      description: 'Secure patient data and medical systems with quantum encryption',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Critical Infrastructure',
      description: 'Protection for power grids, transportation, and communication systems',
      icon: <Network className="w-6 h-6" />
    }
  ];

  const technologyStack = [
    'Quantum-Resistant Cryptography',
    'AI-Powered Threat Intelligence',
    'Zero-Trust Security Framework',
    'Quantum Key Distribution Systems',
    'Advanced Behavioral Analytics',
    'Automated Incident Response'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-red-900/20 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Revolutionary Cybersecurity Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Quantum Cybersecurity Future
                <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  2040
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of cybersecurity with quantum-resistant encryption and 
                AI-powered threat detection that keeps you secure in the quantum age.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
                >
                  Get Started
                </a>
                <a
                  href="/quantum-cybersecurity"
                  className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-black transition-all duration-300"
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
                Our quantum cybersecurity platform delivers unprecedented protection 
                that redefines what's possible in digital security.
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
        <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-orange-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Quantum Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the transformative power of quantum-resistant security that 
                protects your digital assets from current and future threats.
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
                Discover how quantum cybersecurity is revolutionizing industries and 
                protecting critical systems from evolving cyber threats.
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
                  <div className="mb-4 text-red-400">{application.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                  <p className="text-gray-300">{application.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-900/20 to-red-900/20">
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
                Built on the most cutting-edge cybersecurity technologies available in 2040, 
                ensuring unparalleled protection and threat detection capabilities.
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
                  <CheckCircle className="w-5 h-5 text-red-400" />
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
                Ready to Secure Your Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the quantum cybersecurity revolution and discover what's possible when 
                quantum technology meets advanced AI security systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
                >
                  Start Your Journey
                </a>
                <a
                  href="/quantum-cybersecurity"
                  className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-black transition-all duration-300"
                >
                  Explore All Security Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumCybersecurityFuture2040;