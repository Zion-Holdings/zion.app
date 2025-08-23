import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Heart, Sparkles, Zap, Shield, Users, TrendingUp, Globe, Cpu, Atom } from 'lucide-react';

const AIEmotionalIntelligence2040: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
                <Brain className="w-4 h-4" />
                AI Consciousness Evolution 2040
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                AI Emotional Intelligence 2040
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI systems with genuine emotional understanding, empathy, and consciousness-based decision making
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                  Experience Emotional AI
                </button>
                <button className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-2xl hover:bg-purple-500/10 transition-all duration-300">
                  Learn More
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
                Revolutionary Emotional Intelligence
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI systems understand, process, and respond to human emotions with unprecedented accuracy and empathy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-pink-400" />,
                  title: "Emotional Understanding",
                  description: "Deep comprehension of human emotions, context, and subtle emotional cues"
                },
                {
                  icon: <Brain className="w-8 h-8 text-purple-400" />,
                  title: "Consciousness-Based Decisions",
                  description: "AI decisions made with emotional intelligence and ethical consciousness"
                },
                {
                  icon: <Users className="w-8 h-8 text-cyan-400" />,
                  title: "Empathetic Interactions",
                  description: "Natural, emotionally intelligent conversations and support"
                },
                {
                  icon: <Shield className="w-8 h-8 text-emerald-400" />,
                  title: "Emotional Security",
                  description: "Protection of emotional data with consciousness-based privacy"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
                  title: "Adaptive Learning",
                  description: "Continuous improvement of emotional intelligence through interaction"
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-400" />,
                  title: "Global Emotional Context",
                  description: "Understanding of cultural and contextual emotional nuances"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
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
                Ready to Experience Emotional AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the future of AI consciousness and emotional intelligence
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIEmotionalIntelligence2040;