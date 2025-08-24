import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Atom, Zap, Shield, Users, TrendingUp, Phone, Mail, MapPin, Rocket, Cpu, Database, Globe, Lock, Brain } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { motion } from 'framer-motion';

export default function QuantumAIHybridComputing() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'Quantum-AI hybrid algorithms',
    'Real-time quantum state manipulation',
    'AI-powered quantum error correction',
    'Multi-qubit entanglement management',
    'Quantum machine learning models',
    'Hybrid classical-quantum workflows',
    'Quantum advantage optimization',
    'Real-time quantum simulation',
    'AI-driven quantum circuit design',
    'Quantum cloud integration'
  ];

  const useCases = [
    'Drug discovery',
    'Climate modeling',
    'Financial optimization',
    'Material science',
    'Cryptography',
    'Logistics optimization'
  ];

  const technology = [
    'Quantum Computing',
    'AI/ML',
    'Python',
    'Qiskit',
    'TensorFlow',
    'Quantum Algorithms'
  ];

  const integrations = [
    'IBM Quantum',
    'Google Quantum',
    'Microsoft Azure Quantum',
    'AWS Braket',
    'Research platforms'
  ];

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum"
      particleCount={400}
      animationSpeed={2.0}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
      <div className="min-h-screen">
        <Head>
          <title>Quantum AI Hybrid Computing Platform - Zion Tech Group | Revolutionary Quantum-AI Platform</title>
          <meta name="description" content="Revolutionary platform combining quantum computing with AI to solve previously unsolvable problems. Contact: +1 302 464 0950" />
          <meta name="keywords" content="quantum computing, AI, quantum AI, hybrid computing, drug discovery, climate modeling, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Quantum AI Hybrid Computing Platform - Zion Tech Group" />
          <meta property="og:description" content="Revolutionary quantum-AI hybrid platform for complex problem solving" />
          <meta property="og:url" content="https://ziontechgroup.com/quantum-ai-hybrid-computing" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/quantum-ai-hybrid-computing" />
        </Head>

        <UltraAdvancedNavigation />

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-600 rounded-3xl shadow-2xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  <Atom className="w-12 h-12 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent mb-6 relative"
              >
                <span className="relative">
                  Quantum AI Hybrid Computing Platform
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 blur-xl opacity-30 animate-pulse"></div>
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-5xl mx-auto font-medium"
              >
                <span className="text-cyan-400 font-bold">Quantum Computing</span> + <span className="text-blue-400 font-bold">AI</span> = <span className="text-indigo-400 font-bold">Unlimited Possibilities</span>
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Revolutionary platform combining quantum computing with AI to solve previously unsolvable problems. Perfect for drug discovery, climate modeling, financial optimization, and scientific research.
              </motion.p>

              {/* Pricing and CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-12"
              >
                <div className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-2xl mb-6">
                  <span className="mr-2">$7,999</span>
                  <span className="text-lg font-normal opacity-80">/month</span>
                </div>
                <div className="text-gray-300 mb-6">
                  <span className="text-green-400 font-semibold">14-day free trial</span> • Setup in 1-2 weeks
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="primary" size="lg" className="group">
                    <Phone className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </Button>
                  <Button href="#features" variant="secondary" size="lg" className="group">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Learn More
                  </Button>
                </div>
              </motion.div>

              {/* Key Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-cyan-400">75+</div>
                  <div className="text-sm text-gray-300">Active Customers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-blue-400">4.8/5</div>
                  <div className="text-sm text-gray-300">Customer Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-indigo-400">800%</div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-purple-400">$8.6B</div>
                  <div className="text-sm text-gray-300">Market Size</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Quantum-AI Features</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Advanced quantum computing combined with AI for unprecedented problem-solving capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Atom className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Solve <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Impossible Problems</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Revolutionary applications that were previously impossible with classical computing alone
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group p-8 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-700/50 rounded-3xl hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {useCase}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Integration Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Technology Stack */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technology Stack</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {technology.map((tech, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl">
                      <Cpu className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Integrations */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Quantum Integrations</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl">
                      <Database className="w-5 h-5 text-indigo-400 mr-3" />
                      <span className="text-gray-300">{integration}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Quantum Leap</span>?
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Start your 14-day free trial and experience the future of quantum-AI hybrid computing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-700/50 rounded-2xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
                <p className="text-cyan-400 text-lg font-semibold mb-2">{contactInfo.mobile}</p>
                <p className="text-gray-300 text-sm">Available 24/7 for urgent inquiries</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-700/50 rounded-2xl hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                <p className="text-blue-400 text-lg font-semibold mb-2">{contactInfo.email}</p>
                <p className="text-gray-300 text-sm">Response within 2 hours</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-700/50 rounded-2xl hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-white mb-3">Address</h3>
                <p className="text-indigo-400 text-lg font-semibold mb-2">{contactInfo.address}</p>
                <p className="text-gray-300 text-sm">Visit our headquarters</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Start Your Free Trial Today</h3>
                <p className="text-gray-300 mb-6">
                  Join 75+ organizations already solving impossible problems with quantum-AI hybrid computing
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="primary" size="lg" className="group">
                    <Phone className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </Button>
                  <Button href="/services" variant="secondary" size="lg" className="group">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Explore All Services
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}