import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import {
  Database, Atom, Target, Users, Award, CheckCircle,
  Cpu, Shield, Globe, Rocket, Network,
  TrendingUp, Star, Sparkles, ArrowRight, Zap
} from 'lucide-react';

const QuantumDatabase2043: React.FC = () => {
  const features = [
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Entanglement Storage",
      description: "Store data using quantum entanglement for instant access across locations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Superposition Queries",
      description: "Process multiple database operations simultaneously in quantum superposition",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Quantum Encryption",
      description: "Unbreakable encryption using quantum key distribution",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Quantum Network Sync",
      description: "Instant synchronization across quantum networks",
      color: "from-red-500 to-orange-500"
    }
  ];

  const benefits = [
    "Process queries 1000x faster than classical databases",
    "Unbreakable quantum encryption security",
    "Instant data synchronization across global networks",
    "Handle exponentially larger datasets",
    "Quantum machine learning integration",
    "Future-proof quantum computing compatibility"
  ];

  const useCases = [
    "Financial trading systems",
    "Scientific research databases",
    "AI and machine learning platforms",
    "Blockchain and cryptocurrency",
    "Healthcare and genomics",
    "Space exploration data"
  ];

  const databaseFeatures = [
    "Quantum SQL with superposition queries",
    "Entangled data replication",
    "Quantum compression algorithms",
    "Real-time quantum analytics",
    "Hybrid classical-quantum storage",
    "Quantum backup and recovery"
  ];

  const technologyStack = [
    "Quantum Entanglement Storage",
    "Superposition Query Processing",
    "Quantum Key Distribution",
    "Quantum Error Correction",
    "Hybrid Classical-Quantum Architecture",
    "Quantum Network Protocols"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-blue-900/20" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Database className="w-4 h-4 mr-2" />
                Quantum Database 2043
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Quantum Database
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Platform 2043
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize data storage and processing with quantum database technology that leverages 
                superposition, entanglement, and quantum mechanics for unprecedented performance and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Quantum Database
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">1000x</div>
                <div className="text-gray-400">Faster Queries</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
                <div className="text-gray-400">Security Level</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">0ms</div>
                <div className="text-gray-400">Sync Latency</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Revolutionary Quantum Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum database platform leverages the fundamental principles of quantum mechanics 
                to deliver unprecedented performance, security, and scalability.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`p-6 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-20 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 h-full`}>
                    <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose Quantum Database?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of data management with quantum technology that breaks through 
                classical computing limitations and opens new possibilities.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Quantum Database Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From financial systems to scientific research, our quantum database platform 
                is transforming industries that require extreme performance and security.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Database Features Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Database Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive quantum database capabilities that go beyond classical limitations, 
                providing features that were previously impossible.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {databaseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
                >
                  <div className="text-blue-400 mb-4">
                    <Database className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Quantum Technology Stack
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built on cutting-edge quantum computing technologies that enable 
                unprecedented database performance and capabilities.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-4">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{tech}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Go Quantum?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join the quantum revolution with database technology that breaks through classical limits, 
                providing performance and security that were previously unimaginable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Start Quantum Database
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumDatabase2043;