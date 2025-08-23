import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Code, Search, TrendingUp, Globe, Rocket, ArrowRight } from 'lucide-react';

const AIAutonomousResearch2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                <span>AI Autonomous Research 2041</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                AI Autonomous Research 2041
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Fully autonomous AI research systems that independently discover, analyze, and 
                synthesize new knowledge across all domains of human understanding.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Explore Research
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
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
                Autonomous Research Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                AI systems that independently conduct research across all scientific domains
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Search className="w-8 h-8 text-blue-400" />,
                  title: "Independent Discovery",
                  description: "AI systems that autonomously identify research opportunities"
                },
                {
                  icon: <Brain className="w-8 h-8 text-indigo-400" />,
                  title: "Cognitive Analysis",
                  description: "Advanced reasoning and pattern recognition capabilities"
                },
                {
                  icon: <Code className="w-8 h-8 text-purple-400" />,
                  title: "Self-Programming",
                  description: "AI that writes and optimizes its own research algorithms"
                },
                {
                  icon: <Globe className="w-8 h-8 text-green-400" />,
                  title: "Cross-Domain Research",
                  description: "Seamless integration across multiple scientific fields"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
                  title: "Continuous Learning",
                  description: "Evolving research methodologies and approaches"
                },
                {
                  icon: <Rocket className="w-8 h-8 text-orange-400" />,
                  title: "Breakthrough Innovation",
                  description: "Revolutionary discoveries and paradigm shifts"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Research Domains
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive coverage across all scientific and technological frontiers
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Quantum Computing",
                "Artificial Intelligence",
                "Biotechnology",
                "Space Exploration",
                "Climate Science",
                "Materials Science",
                "Neuroscience",
                "Renewable Energy"
              ].map((domain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/20 rounded-xl p-4 text-center hover:border-blue-400/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">{domain}</h3>
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
                Ready to Witness Autonomous AI Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of scientific discovery with fully autonomous AI research systems
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Start Research
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

export default AIAutonomousResearch2041;