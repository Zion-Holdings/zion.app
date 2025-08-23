import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Cloud, Atom, Zap, Cpu, Database, Network, Shield, Globe, TrendingUp, Rocket } from 'lucide-react';

const QuantumCloudInfrastructure2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-cyan-900/20 to-blue-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
                <Cloud className="w-4 h-4" />
                Quantum Cloud Infrastructure 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Quantum Cloud Infrastructure 2041
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary quantum-powered cloud computing infrastructure with unprecedented performance and security
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                  Deploy Quantum Cloud
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-300 rounded-2xl hover:bg-cyan-500/10 transition-all duration-300">
                  View Architecture
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Cloud Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced quantum computing infrastructure that revolutionizes cloud performance and capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8 text-cyan-400" />,
                  title: "Quantum Processing",
                  description: "Quantum computing power for complex calculations and simulations"
                },
                {
                  icon: <Database className="w-8 h-8 text-blue-400" />,
                  title: "Quantum Databases",
                  description: "High-performance quantum-enhanced data storage and retrieval"
                },
                {
                  icon: <Network className="w-8 h-8 text-purple-400" />,
                  title: "Quantum Networking",
                  description: "Ultra-fast quantum communication between cloud nodes"
                },
                {
                  icon: <Shield className="w-8 h-8 text-emerald-400" />,
                  title: "Quantum Security",
                  description: "Unbreakable encryption and quantum-resistant security protocols"
                },
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Lightning Performance",
                  description: "Exponential speed improvements for computational workloads"
                },
                {
                  icon: <Globe className="w-8 h-8 text-orange-400" />,
                  title: "Global Distribution",
                  description: "Worldwide quantum cloud infrastructure deployment"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Infrastructure Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your applications with quantum-powered cloud infrastructure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Exponential Performance",
                  description: "Quantum computing power that solves previously impossible problems",
                  icon: <Rocket className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: "Unlimited Scalability",
                  description: "Infinitely scalable infrastructure that grows with your needs",
                  icon: <TrendingUp className="w-12 h-12 text-blue-400" />
                },
                {
                  title: "Cost Optimization",
                  description: "Quantum efficiency reduces computational costs significantly",
                  icon: <Zap className="w-12 h-12 text-purple-400" />
                },
                {
                  title: "Future-Proof Technology",
                  description: "Infrastructure that evolves with quantum computing advances",
                  icon: <Cpu className="w-12 h-12 text-emerald-400" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 text-lg">{benefit.description}</p>
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
                Ready for Quantum Cloud?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy the future of cloud computing with quantum-powered infrastructure
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumCloudInfrastructure2041;