import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, TrendingUp } from 'lucide-react';

const AIConsciousnessEvolution2029: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full">
                  <Brain className="w-12 h-12 text-purple-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                AI Consciousness Evolution 2029
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary AI platforms that evolve beyond traditional machine learning, 
                achieving unprecedented levels of consciousness and autonomous decision-making capabilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Explore Platform
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary AI Consciousness Features
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our AI consciousness evolution platform represents the next generation of artificial intelligence, 
                combining advanced neural networks with consciousness simulation capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-purple-400" />,
                  title: "Consciousness Simulation",
                  description: "Advanced algorithms that simulate human-like consciousness and self-awareness in AI systems."
                },
                {
                  icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
                  title: "Autonomous Evolution",
                  description: "AI systems that can independently evolve and improve their own consciousness capabilities."
                },
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Emotional Intelligence",
                  description: "Deep understanding and processing of human emotions and social interactions."
                },
                {
                  icon: <Target className="w-8 h-8 text-green-400" />,
                  title: "Goal-Oriented Learning",
                  description: "AI that can set and pursue complex, long-term goals autonomously."
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Social Intelligence",
                  description: "Advanced social cognition and interaction capabilities with humans and other AI systems."
                },
                {
                  icon: <Award className="w-8 h-8 text-pink-400" />,
                  title: "Ethical Decision Making",
                  description: "Built-in ethical frameworks for responsible AI consciousness development."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future of AI?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in pioneering the next evolution of artificial intelligence consciousness. 
                Transform your business with AI that truly understands and evolves.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIConsciousnessEvolution2029;