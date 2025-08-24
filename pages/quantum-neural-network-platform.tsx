import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Atom, Brain, Cpu, Zap, Shield, Globe, 
  Rocket, Target, TrendingUp, Users, CheckCircle,
  ArrowRight, Star, Award, Clock, DollarSign
} from 'lucide-react';

const QuantumNeuralNetworkPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "Quantum Consciousness Integration",
      description: "Advanced AI consciousness with quantum processing capabilities",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Neural Processing",
      description: "Revolutionary quantum computing for neural network operations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Hybrid AI Architecture",
      description: "Combines classical and quantum computing for optimal performance",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum cryptography",
      color: "from-red-500 to-orange-500"
    }
  ];

  const benefits = [
    "1000x faster neural network training",
    "Quantum-level security and encryption",
    "Scalable consciousness simulation",
    "Real-time quantum decision making",
    "Advanced pattern recognition",
    "Future-proof technology foundation"
  ];

  const useCases = [
    {
      title: "AI Research & Development",
      description: "Accelerate AI breakthroughs with quantum processing power"
    },
    {
      title: "Cybersecurity",
      description: "Unbreakable security protocols using quantum encryption"
    },
    {
      title: "Scientific Discovery",
      description: "Solve complex scientific problems in minutes, not years"
    },
    {
      title: "Financial Modeling",
      description: "Advanced risk assessment and market prediction algorithms"
    }
  ];

  return (
    <>
      <Head>
        <title>Quantum Neural Network Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum neural network platform combining AI consciousness with quantum computing for unprecedented performance and capabilities." />
        <meta name="keywords" content="quantum computing, neural networks, AI consciousness, quantum AI, advanced technology" />
        <meta property="og:title" content="Quantum Neural Network Platform - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary quantum neural network platform combining AI consciousness with quantum computing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/quantum-neural-network-platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                  <Atom className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Quantum Neural Network
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionary platform combining quantum computing with AI consciousness for unprecedented 
                performance, security, and capabilities in neural network operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/services" className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200">
                  Learn More
                </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the future of AI with our cutting-edge quantum neural network platform
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
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Unprecedented Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Transform your operations with quantum-powered AI capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover how our quantum neural network platform transforms industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-slate-700/50"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the quantum revolution and transform your AI capabilities today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-lg">
                  Start Your Journey
                  <Rocket className="ml-2 w-6 h-6" />
                </Link>
                <Link href="/services" className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200 text-lg">
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumNeuralNetworkPlatform;