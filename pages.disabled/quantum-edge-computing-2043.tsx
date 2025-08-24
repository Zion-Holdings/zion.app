import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import {
  Cpu, Atom, Target, Users, Award, CheckCircle,
  Database, Shield, Globe, Rocket, Network,
  TrendingUp, Star, Sparkles, ArrowRight, Zap
} from 'lucide-react';

const QuantumEdgeComputing2043: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Quantum Edge Processing",
      description: "Quantum computing power at the network edge for instant processing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Entangled Edge Networks",
      description: "Quantum-entangled edge nodes for instant data synchronization",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Superposition Computing",
      description: "Process multiple edge operations simultaneously in quantum superposition",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Edge Orchestration",
      description: "Coordinate quantum edge resources across worldwide networks",
      color: "from-red-500 to-orange-500"
    }
  ];

  const benefits = [
    "Process data 1000x faster at the edge",
    "Zero-latency quantum communication",
    "Unlimited edge computing scalability",
    "Quantum-secure edge operations",
    "Real-time global edge coordination",
    "Future-proof quantum edge infrastructure"
  ];

  const useCases = [
    "Autonomous vehicle edge computing",
    "IoT device quantum processing",
    "5G/6G network edge optimization",
    "Smart city edge intelligence",
    "Industrial IoT edge analytics",
    "Satellite edge computing networks"
  ];

  const edgeFeatures = [
    "Quantum Edge Nodes",
    "Entangled Edge Communication",
    "Superposition Edge Processing",
    "Quantum Edge Security",
    "Global Edge Orchestration",
    "Hybrid Classical-Quantum Edge"
  ];

  const technologyStack = [
    "Quantum Edge Processors",
    "Entangled Network Protocols",
    "Superposition Computing Units",
    "Quantum Edge Security",
    "Edge Orchestration Systems",
    "Hybrid Edge Architecture"
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
                <Cpu className="w-4 h-4 mr-2" />
                Quantum Edge Computing 2043
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Quantum Edge
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Computing 2043
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize edge computing with quantum technology that brings unprecedented processing power, 
                instant communication, and unlimited scalability to the network edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center"
                >
                  Deploy Quantum Edge
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                >
                  View Architecture
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
                <div className="text-gray-400">Faster Processing</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">0ms</div>
                <div className="text-gray-400">Latency</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
                <div className="text-gray-400">Scalability</div>
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
                Revolutionary Edge Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our quantum edge computing platform leverages quantum mechanics to deliver 
                unprecedented performance, instant communication, and unlimited scalability at the network edge.
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
                Why Choose Quantum Edge Computing?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of edge computing with quantum technology that breaks through 
                classical limitations and opens new possibilities for distributed computing.
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
                Edge Computing Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From autonomous vehicles to smart cities, our quantum edge computing platform 
                is transforming industries that require instant processing and real-time intelligence.
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

        {/* Edge Features Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Edge Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive quantum edge computing capabilities that go beyond classical limitations, 
                providing features that were previously impossible at the network edge.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {edgeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
                >
                  <div className="text-blue-400 mb-4">
                    <Cpu className="w-8 h-8" />
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
                unprecedented edge computing performance and capabilities.
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
                    <Atom className="w-8 h-8" />
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
                Ready to Go Quantum at the Edge?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join the quantum edge revolution with computing technology that breaks through classical limits, 
                providing performance and capabilities that were previously unimaginable at the network edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Deploy Quantum Edge
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

export default QuantumEdgeComputing2043;