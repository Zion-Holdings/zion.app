import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Zap, Target, ArrowRight, 
  Network, Users, Clock, CheckCircle, Star, 
  TrendingUp, Globe, Settings, Layers, Code
} from 'lucide-react';

const AIAutonomousEcosystem2041: React.FC = () => {
  const features = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Self-Organizing Networks",
      description: "AI systems that autonomously form and optimize collaborative networks"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Collective Consciousness",
      description: "Multiple AI agents working together with shared intelligence"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Autonomous Management",
      description: "Self-healing and self-optimizing ecosystem operations"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-Layer Intelligence",
      description: "Hierarchical AI systems with distributed decision-making"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Dynamic Adaptation",
      description: "Real-time system evolution based on environmental changes"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coordination",
      description: "Worldwide AI ecosystem synchronization and collaboration"
    }
  ];

  const benefits = [
    "100% autonomous operation",
    "Self-healing capabilities",
    "Real-time optimization",
    "Scalable intelligence",
    "Reduced human intervention",
    "Continuous improvement"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
                <Network className="w-4 h-4 mr-2" />
                AI Autonomous Ecosystem 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Autonomous AI Ecosystem
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionary AI systems that form self-organizing, self-managing ecosystems with collective 
                consciousness and autonomous decision-making capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Deploy Ecosystem
                </button>
                <button className="px-8 py-4 border border-indigo-500/50 text-indigo-300 font-semibold rounded-full hover:bg-indigo-500/20 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Ecosystem Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI systems form intelligent, self-managing networks that operate autonomously.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-indigo-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-indigo-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Operations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience unprecedented automation and intelligence in your systems.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Ecosystem Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Autonomy Level</span>
                    <span className="text-green-400 font-semibold">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Self-Healing</span>
                    <span className="text-green-400 font-semibold">Real-time</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Optimization</span>
                    <span className="text-green-400 font-semibold">Continuous</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Scalability</span>
                    <span className="text-green-400 font-semibold">Infinite</span>
                  </div>
                </div>
              </motion.div>
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Autonomous AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy intelligent ecosystems that manage themselves and optimize continuously.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Deploy Your Ecosystem
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-indigo-500/50 text-indigo-300 font-semibold rounded-full hover:bg-indigo-500/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousEcosystem2041;