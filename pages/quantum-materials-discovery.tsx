import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Beaker, Zap, Target, Users, Globe, ArrowRight, Search } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function QuantumMaterialsDiscovery() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Quantum Materials Discovery
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionizing material science through quantum computing and AI. Discover new materials 
                with extraordinary properties for next-generation technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is Quantum Materials Discovery */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Atom className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white">What is Quantum Materials Discovery?</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Quantum Materials Discovery combines quantum computing, artificial intelligence, and advanced 
                  simulation techniques to predict and discover new materials with unprecedented properties. 
                  By modeling materials at the quantum level, we can design materials for specific applications 
                  before they're synthesized in the lab.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our platform accelerates the discovery of materials for energy storage, quantum computing, 
                  advanced electronics, and sustainable technologies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl border border-green-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <Beaker className="w-24 h-24 text-green-400 mx-auto mb-4" />
                    <p className="text-green-400 text-lg font-semibold">Quantum Materials Lab</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Revolutionary quantum materials discovery capabilities</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-12 h-12 text-cyan-400" />,
                  title: "Quantum Simulations",
                  description: "Accurate quantum mechanical simulations of material properties and behavior."
                },
                {
                  icon: <Zap className="w-12 h-12 text-blue-400" />,
                  title: "AI-Powered Prediction",
                  description: "Machine learning algorithms that predict material properties and performance."
                },
                {
                  icon: <Target className="w-12 h-12 text-purple-400" />,
                  title: "Property Optimization",
                  description: "Design materials with specific properties for targeted applications."
                },
                {
                  icon: <Users className="w-12 h-12 text-green-400" />,
                  title: "Collaborative Research",
                  description: "Multi-disciplinary teams working together on breakthrough discoveries."
                },
                {
                  icon: <Globe className="w-12 h-12 text-yellow-400" />,
                  title: "Global Database",
                  description: "Comprehensive database of known materials and their properties."
                },
                {
                  icon: <Search className="w-12 h-12 text-pink-400" />,
                  title: "Experimental Validation",
                  description: "Lab synthesis and testing of predicted materials."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Applications</h2>
              <p className="text-xl text-gray-300">Transformative materials for future technologies</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Energy Storage",
                  description: "Next-generation batteries and supercapacitors with higher energy density and faster charging.",
                  benefits: ["Higher energy density", "Faster charging", "Longer lifespan"]
                },
                {
                  title: "Quantum Computing",
                  description: "Materials for qubits and quantum circuits with optimal coherence properties.",
                  benefits: ["Long coherence times", "High fidelity", "Scalable architecture"]
                },
                {
                  title: "Advanced Electronics",
                  description: "Semiconductors and conductors with superior electrical and thermal properties.",
                  benefits: ["Higher conductivity", "Better thermal management", "Smaller devices"]
                },
                {
                  title: "Sustainable Technologies",
                  description: "Eco-friendly materials for renewable energy and environmental applications.",
                  benefits: ["Biodegradable", "Renewable sources", "Low environmental impact"]
                }
              ].map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{app.title}</h3>
                  <p className="text-gray-300 mb-4">{app.description}</p>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-cyan-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
              <p className="text-xl text-gray-300">Cutting-edge technologies powering our materials discovery platform</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="space-y-6"
              >
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Quantum Computing</h3>
                  <p className="text-gray-300">Quantum algorithms for accurate material property calculations and simulations.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">AI & Machine Learning</h3>
                  <p className="text-gray-300">Deep learning models trained on vast material databases for property prediction.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Molecular Dynamics</h3>
                  <p className="text-gray-300">Advanced simulation techniques for understanding material behavior at atomic scales.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="space-y-6"
              >
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-green-400 mb-3">High-Performance Computing</h3>
                  <p className="text-gray-300">Massive computational resources for complex material simulations.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">Experimental Validation</h3>
                  <p className="text-gray-300">State-of-the-art laboratories for synthesizing and testing predicted materials.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-pink-400 mb-3">Data Analytics</h3>
                  <p className="text-gray-300">Advanced analytics for processing and interpreting material data.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Discover the Future?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in revolutionizing material science and creating the technologies of tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/quantum-services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}