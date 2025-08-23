import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, TestTube, Zap, Target, TrendingUp, Star, ArrowRight } from 'lucide-react';

const QuantumMaterialsDiscovery2040: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
                                     <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium mb-6">
                         <TestTube className="w-4 h-4" />
                         <span>Quantum Materials Discovery 2040</span>
                       </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-600 bg-clip-text text-transparent">
                Quantum Materials Discovery 2040
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Revolutionary quantum materials science using AI consciousness to discover, 
                design, and synthesize breakthrough materials for the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105">
                  Discover Materials
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300">
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
                Revolutionary Discovery Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                AI that revolutionizes materials science through consciousness-driven insights
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8 text-purple-400" />,
                  title: "Quantum Simulation",
                  description: "Quantum computing for materials modeling"
                },
                                         {
                           icon: <TestTube className="w-8 h-8 text-violet-400" />,
                           title: "AI Synthesis",
                           description: "Intelligent materials synthesis and design"
                         },
                {
                  icon: <Zap className="w-8 h-8 text-indigo-400" />,
                  title: "Rapid Discovery",
                  description: "Accelerated materials discovery process"
                },
                {
                  icon: <Target className="w-8 h-8 text-blue-400" />,
                  title: "Precision Design",
                  description: "Exact material property targeting"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                  title: "Continuous Innovation",
                  description: "Evolving discovery methodologies"
                },
                {
                  icon: <Star className="w-8 h-8 text-yellow-400" />,
                  title: "Breakthrough Materials",
                  description: "Revolutionary new material classes"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Material Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Revolutionary materials for next-generation technologies
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Quantum Computing",
                "Energy Storage",
                "Medical Devices",
                "Space Technology",
                "Electronics",
                "Transportation",
                "Construction",
                "Communications"
              ].map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-400/20 rounded-xl p-4 text-center hover:border-purple-400/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">{application}</h3>
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
                Ready to Discover the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the revolution in materials science with quantum AI
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Start Discovery
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

export default QuantumMaterialsDiscovery2040;