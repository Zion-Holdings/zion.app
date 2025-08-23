import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Atom, Zap, Shield, Brain, Cpu, Network, 
  Globe, BarChart3, Rocket, Star, ArrowRight, 
  CheckCircle, Lock, Database, Cloud
} from 'lucide-react';

const quantumServices = [
  {
    category: 'Quantum Computing Platforms',
    services: [
      {
        name: 'Quantum Neural Network Platform',
        description: 'Advanced quantum neural networks for complex problem solving',
        href: '/quantum-neural-network-platform',
        icon: <Brain className="w-6 h-6 text-cyan-400" />,
        featured: true
      },
      {
        name: 'Quantum Bio-Computing Platform',
        description: 'Quantum computing for biological and medical research',
        href: '/quantum-bio-computing-platform',
        icon: <Atom className="w-6 h-6 text-green-400" />
      },
      {
        name: 'Quantum Materials Discovery Platform',
        description: 'Quantum algorithms for materials science and discovery',
        href: '/quantum-materials-discovery-platform',
        icon: <Cpu className="w-6 h-6 text-purple-400" />
      }
    ]
  },
  {
    category: 'Quantum Security & Infrastructure',
    services: [
      {
        name: 'Quantum Cybersecurity Platform',
        description: 'Quantum-resistant security solutions for the future',
        href: '/quantum-cybersecurity',
        icon: <Shield className="w-6 h-6 text-red-400" />
      },
      {
        name: 'Quantum Internet Security Platform',
        description: 'Secure quantum internet infrastructure',
        href: '/quantum-internet-security-platform',
        icon: <Lock className="w-6 h-6 text-blue-400" />
      },
      {
        name: 'Quantum Cloud Infrastructure Platform',
        description: 'Quantum-ready cloud computing infrastructure',
        href: '/quantum-cloud-infrastructure-platform',
        icon: <Cloud className="w-6 h-6 text-indigo-400" />
      }
    ]
  },
  {
    category: 'Quantum Financial & Trading',
    services: [
      {
        name: 'Quantum Financial Trading Platform',
        description: 'Quantum algorithms for financial markets and trading',
        href: '/quantum-financial-trading-platform',
        icon: <BarChart3 className="w-6 h-6 text-emerald-400" />
      },
      {
        name: 'Quantum Blockchain Platform',
        description: 'Quantum-secured blockchain technology',
        href: '/quantum-blockchain',
        icon: <Database className="w-6 h-6 text-yellow-400" />
      }
    ]
  },
  {
    category: 'Quantum IoT & Logistics',
    services: [
      {
        name: 'Quantum IoT Platform',
        description: 'Quantum-enhanced Internet of Things solutions',
        href: '/quantum-iot',
        icon: <Network className="w-6 h-6 text-pink-400" />
      },
      {
        name: 'Quantum Logistics Optimization',
        description: 'Quantum algorithms for supply chain optimization',
        href: '/quantum-logistics-optimization',
        icon: <Globe className="w-6 h-6 text-orange-400" />
      }
    ]
  },
  {
    category: 'Quantum Energy & Robotics',
    services: [
      {
        name: 'Quantum Energy Platform',
        description: 'Quantum solutions for energy optimization',
        href: '/quantum-energy',
        icon: <Zap className="w-6 h-6 text-yellow-400" />
      },
      {
        name: 'Quantum Robotics Platform',
        description: 'Quantum-enhanced robotic systems',
        href: '/quantum-robotics',
        icon: <Rocket className="w-6 h-6 text-cyan-400" />
      }
    ]
  }
];

const features = [
  'Quantum Supremacy Capabilities',
  'Quantum Error Correction',
  'Hybrid Quantum-Classical Systems',
  'Quantum Machine Learning',
  'Quantum Cryptography',
  'Scalable Quantum Architecture',
  'Quantum Software Development',
  'Enterprise Quantum Integration'
];

export default function QuantumServices() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary quantum computing solutions that unlock unprecedented computational power and solve previously intractable problems
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose Quantum Technology?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unprecedented computational power that revolutionizes industries and solves complex problems in seconds
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Quantum Services Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive quantum solutions designed for cutting-edge research and enterprise applications
            </p>
          </motion.div>

          <div className="space-y-16">
            {quantumServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-white">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: categoryIndex * 0.2 + serviceIndex * 0.1 }}
                      className={`bg-gray-800/50 p-6 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                        service.featured 
                          ? 'border-blue-500/50 bg-gradient-to-br from-gray-800/50 to-blue-900/20' 
                          : 'border-gray-700 hover:border-blue-500/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        {service.icon}
                        {service.featured && (
                          <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      <Link 
                        href={service.href}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Advantage Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The Quantum Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience computational power that was previously impossible with classical computing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Exponential Speed</h3>
              <p className="text-gray-300">
                Solve complex problems in seconds that would take classical computers years or even centuries
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Intelligence</h3>
              <p className="text-gray-300">
                Leverage quantum superposition and entanglement for unprecedented computational capabilities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Future-Proof Security</h3>
              <p className="text-gray-300">
                Quantum-resistant cryptography and security solutions for the post-quantum era
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Harness Quantum Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the quantum revolution and unlock computational capabilities that will transform your industry
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Quantum Journey
              </Link>
              <Link 
                href="/pricing"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}