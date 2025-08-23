import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Atom, 
  Server, 
  Zap, 
  Database, 
  Network, 
  Lock, 
  Shield,
  CheckCircle,
  BarChart3,
  Globe,
  Cpu,
  ArrowRight,
  Star,
  Sparkles,
  Layers,
  Target,
  Users,
  Eye
} from 'lucide-react';

const QuantumCloudHybridPlatform: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing Integration",
      description: "Seamlessly integrate quantum computing capabilities with traditional cloud infrastructure for unprecedented processing power."
    },
    {
      icon: Cloud,
      title: "Hybrid Cloud Architecture",
      description: "Flexible deployment options across public, private, and edge clouds with unified management and security."
    },
    {
      icon: Server,
      title: "Auto-scaling Infrastructure",
      description: "Intelligent resource management that automatically scales based on demand while optimizing costs and performance."
    },
    {
      icon: Database,
      title: "Quantum Database Systems",
      description: "High-performance database solutions optimized for quantum computing with advanced query optimization."
    },
    {
      icon: Network,
      title: "Quantum Network Security",
      description: "Unbreakable network security using quantum encryption and advanced threat detection systems."
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Instant insights and analytics powered by quantum computing for real-time decision making."
    }
  ];

  const benefits = [
    "Unprecedented computing power with quantum integration",
    "Flexible hybrid cloud deployment options",
    "Automatic scaling and resource optimization",
    "Quantum-level security and encryption",
    "Real-time analytics and insights",
    "Cost-effective resource management"
  ];

  const useCases = [
    {
      title: "Scientific Research",
      description: "Accelerate complex scientific simulations and research with quantum computing power."
    },
    {
      title: "Financial Modeling",
      description: "Advanced financial modeling and risk assessment using quantum algorithms."
    },
    {
      title: "AI Training",
      description: "Train large AI models faster with quantum-accelerated computing resources."
    },
    {
      title: "Data Analytics",
      description: "Process massive datasets in real-time with quantum-enhanced analytics."
    }
  ];

  const technicalSpecs = [
    {
      category: "Quantum Processing",
      specs: ["Qubit Support", "Quantum Error Correction", "Quantum-Classical Interface"]
    },
    {
      category: "Cloud Infrastructure",
      specs: ["Multi-Cloud Support", "Edge Computing", "Container Orchestration"]
    },
    {
      category: "Security",
      specs: ["Quantum Encryption", "Zero-Trust Architecture", "Compliance Standards"]
    }
  ];

  return (
    <Layout
      title="Quantum Cloud Hybrid Platform - Zion Tech Group"
      description="Revolutionary hybrid cloud platform that combines quantum computing with traditional cloud infrastructure for unprecedented performance and capabilities."
      keywords="quantum cloud, hybrid cloud, quantum computing, cloud platform, quantum infrastructure, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Quantum Cloud Technology
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Quantum Cloud
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Hybrid Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of cloud computing with our revolutionary Quantum Cloud Hybrid Platform. 
                Combining quantum computing power with traditional cloud infrastructure for unprecedented 
                performance, security, and scalability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-indigo-500/30 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300">
                  Platform Demo
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The most advanced cloud platform ever created, combining quantum and classical computing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built with cutting-edge technology for maximum performance and reliability
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technicalSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{spec.category}</h3>
                  <div className="space-y-2">
                    {spec.specs.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
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
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how our platform transforms industries and accelerates innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Unparalleled advantages for modern computing needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 bg-white/5 border border-white/10 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
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
              <p className="text-xl text-gray-300 mb-8">
                Join the quantum revolution and transform your computing capabilities today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Now
                </button>
                <button className="px-8 py-4 border border-indigo-500/30 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumCloudHybridPlatform;