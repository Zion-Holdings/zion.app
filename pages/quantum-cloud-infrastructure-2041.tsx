import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, Cloud, Zap, Server, Shield, Globe, ArrowRight } from 'lucide-react';

const QuantumCloudInfrastructure2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4" />
                <span>Quantum Cloud Infrastructure 2041</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Quantum Cloud Infrastructure 2041
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Revolutionary quantum cloud computing infrastructure that combines quantum processing 
                power with cloud scalability for unprecedented computational capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Deploy Quantum Cloud
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Cloud Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Quantum-powered cloud infrastructure for the future of computing
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8 text-cyan-400" />,
                  title: "Quantum Processing",
                  description: "Quantum computing power in the cloud"
                },
                {
                  icon: <Cloud className="w-8 h-8 text-blue-400" />,
                  title: "Scalable Infrastructure",
                  description: "Elastic quantum cloud resources"
                },
                {
                  icon: <Zap className="w-8 h-8 text-indigo-400" />,
                  title: "Lightning Fast",
                  description: "Quantum speed for complex computations"
                },
                {
                  icon: <Server className="w-8 h-8 text-green-400" />,
                  title: "Hybrid Architecture",
                  description: "Quantum-classical computing integration"
                },
                {
                  icon: <Shield className="w-8 h-8 text-yellow-400" />,
                  title: "Quantum Security",
                  description: "Unbreakable cloud security protocols"
                },
                {
                  icon: <Globe className="w-8 h-8 text-orange-400" />,
                  title: "Global Distribution",
                  description: "Worldwide quantum cloud access"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Performance Metrics
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Unprecedented computational capabilities and efficiency
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "1000x", label: "Speed Increase" },
                { metric: "∞", label: "Scalability" },
                { metric: "99.99%", label: "Uptime" },
                { metric: "Global", label: "Access" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{item.metric}</div>
                  <div className="text-white font-medium">{item.label}</div>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for Quantum Cloud Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of cloud infrastructure with quantum computing power
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Start Computing
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumCloudInfrastructure2041;