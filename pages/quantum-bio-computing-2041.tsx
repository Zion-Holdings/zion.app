import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, Brain, Dna, TestTube, Zap, Globe, Shield, Cpu, CheckCircle, Star } from 'lucide-react';

const QuantumBioComputing2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-green-900/20 to-emerald-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 text-sm mb-6">
                <Atom className="w-4 h-4" />
                Quantum Bio-Computing 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Quantum Bio-Computing 2041
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary quantum computing integrated with biological systems for unprecedented computational power
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
                  Deploy Bio-Quantum System
                </button>
                <button className="px-8 py-4 border border-green-500/30 text-green-300 rounded-2xl hover:bg-green-500/10 transition-all duration-300">
                  View Demo
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
                Quantum Bio-Computing Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced quantum computing integrated with biological systems for revolutionary computational capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8 text-green-400" />,
                  title: "Quantum Processing",
                  description: "Quantum computing power integrated with biological systems"
                },
                {
                  icon: <Dna className="w-8 h-8 text-emerald-400" />,
                  title: "Biological Integration",
                  description: "Seamless integration with biological computing substrates"
                },
                {
                  icon: <Brain className="w-8 h-8 text-blue-400" />,
                  title: "Neural Networks",
                  description: "Biological neural networks enhanced with quantum computing"
                },
                {
                  icon: <TestTube className="w-8 h-8 text-cyan-400" />,
                  title: "Bio-Molecular Computing",
                  description: "Computing using biological molecules and processes"
                },
                {
                  icon: <Zap className="w-8 h-8 text-purple-400" />,
                  title: "Lightning Performance",
                  description: "Exponential speed improvements through quantum-bio integration"
                },
                {
                  icon: <Globe className="w-8 h-8 text-orange-400" />,
                  title: "Global Applications",
                  description: "Worldwide deployment of quantum bio-computing systems"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-green-500/20 rounded-2xl hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Revolutionary applications enabled by quantum bio-computing technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Drug Discovery",
                  description: "Accelerate pharmaceutical research with quantum bio-computing",
                  icon: <TestTube className="w-12 h-12 text-green-400" />
                },
                {
                  title: "Genetic Engineering",
                  description: "Advanced genetic manipulation and optimization",
                  icon: <Dna className="w-12 h-12 text-emerald-400" />
                },
                {
                  title: "Neural Interfaces",
                  description: "Direct brain-computer interfaces with quantum processing",
                  icon: <Brain className="w-12 h-12 text-blue-400" />
                },
                {
                  title: "Biological Computing",
                  description: "Computing systems built from biological components",
                  icon: <Cpu className="w-12 h-12 text-cyan-400" />
                }
              ].map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-green-500/20 rounded-2xl hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{application.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{application.title}</h3>
                  <p className="text-gray-400 text-lg">{application.description}</p>
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
                Ready for Quantum Bio-Computing?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy the future of computing with quantum-biological integration
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumBioComputing2041;