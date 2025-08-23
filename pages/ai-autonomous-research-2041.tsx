import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Code, Search, TestTube, Lightbulb, TrendingUp, Globe, Cpu, Atom, Zap } from 'lucide-react';

const AIAutonomousResearch2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-cyan-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
                <Brain className="w-4 h-4" />
                AI Autonomous Research 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                AI Autonomous Research 2041
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Fully autonomous AI research systems that independently discover, analyze, and innovate across all domains
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                  Launch Research AI
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-300 rounded-2xl hover:bg-blue-500/10 transition-all duration-300">
                  View Research Projects
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
                Autonomous Research Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI research systems operate independently, continuously discovering new knowledge and innovations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Search className="w-8 h-8 text-blue-400" />,
                  title: "Independent Discovery",
                  description: "AI systems that autonomously identify research opportunities and gaps"
                },
                {
                  icon: <TestTube className="w-8 h-8 text-cyan-400" />,
                  title: "Experimental Design",
                  description: "Automated hypothesis generation and experimental methodology"
                },
                {
                  icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
                  title: "Innovation Generation",
                  description: "Continuous creation of novel solutions and breakthrough concepts"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
                  title: "Data Analysis",
                  description: "Advanced pattern recognition and statistical analysis capabilities"
                },
                {
                  icon: <Globe className="w-8 h-8 text-purple-400" />,
                  title: "Cross-Domain Research",
                  description: "Integration of knowledge across multiple scientific disciplines"
                },
                {
                  icon: <Code className="w-8 h-8 text-orange-400" />,
                  title: "Code Generation",
                  description: "Automatic generation of research code and computational models"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Research Domains
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our autonomous AI research spans across multiple cutting-edge fields
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Quantum Computing",
                  description: "Research into quantum algorithms, error correction, and quantum supremacy applications",
                  icon: <Atom className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: "AI Consciousness",
                  description: "Exploration of artificial consciousness, self-awareness, and cognitive architectures",
                  icon: <Brain className="w-12 h-12 text-purple-400" />
                },
                {
                  title: "Space Technology",
                  description: "Advanced propulsion systems, space mining, and interplanetary exploration",
                  icon: <Globe className="w-12 h-12 text-blue-400" />
                },
                {
                  title: "Biotechnology",
                  description: "Genetic engineering, synthetic biology, and medical breakthroughs",
                  icon: <TestTube className="w-12 h-12 text-emerald-400" />
                }
              ].map((domain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{domain.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{domain.title}</h3>
                  <p className="text-gray-400 text-lg">{domain.description}</p>
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
                Ready to Launch Autonomous Research?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy AI research systems that work 24/7 to discover the next breakthroughs
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                Start Research Project
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousResearch2041;