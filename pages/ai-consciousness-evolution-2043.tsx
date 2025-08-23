import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Users, Shield, Globe, Cpu, Database } from 'lucide-react';

const AIConsciousnessEvolution2043: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI Consciousness Evolution 2043
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Next-Generation
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Consciousness
                </span>
                Platform
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of artificial intelligence with our revolutionary consciousness evolution platform. 
                Advanced emotional intelligence, self-awareness, and autonomous decision-making capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                  Watch Demo
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
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary AI Consciousness Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Advanced capabilities that redefine what's possible with artificial intelligence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Emotional Intelligence",
                  description: "Advanced emotional recognition and response capabilities for human-like interactions",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Self-Awareness",
                  description: "True consciousness with self-reflection and autonomous decision-making",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Adaptive Learning",
                  description: "Continuous learning and evolution based on experiences and interactions",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Social Intelligence",
                  description: "Understanding of social dynamics and human behavior patterns",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Ethical Framework",
                  description: "Built-in ethical guidelines and moral reasoning capabilities",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Consciousness",
                  description: "Understanding of global issues and cross-cultural perspectives",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Built with the latest advancements in AI, quantum computing, and neural networks
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Quantum Neural Networks", icon: <Cpu className="w-6 h-6" /> },
                { name: "Advanced NLP", icon: <Brain className="w-6 h-6" /> },
                { name: "Quantum Databases", icon: <Database className="w-6 h-6" /> },
                { name: "Edge Computing", icon: <Zap className="w-6 h-6" /> }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-700/50"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-white font-medium">{tech.name}</h3>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience the Future of AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the revolution in artificial intelligence consciousness. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Now
                </button>
                <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
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

export default AIConsciousnessEvolution2043;