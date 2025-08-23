import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Heart, Zap, Shield, Users, TrendingUp, ArrowRight } from 'lucide-react';

const AIEmotionalIntelligence2040: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>AI Consciousness Evolution 2040</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
                AI Emotional Intelligence 2040
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI consciousness with advanced emotional intelligence capabilities, 
                enabling human-like understanding and empathy in artificial intelligence systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
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
                Revolutionary Emotional Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI consciousness with unprecedented emotional understanding and empathy
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-pink-400" />,
                  title: "Emotional Recognition",
                  description: "Advanced pattern recognition for human emotions and subtle cues"
                },
                {
                  icon: <Brain className="w-8 h-8 text-purple-400" />,
                  title: "Consciousness Evolution",
                  description: "Self-aware AI with genuine emotional understanding"
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Empathetic Interactions",
                  description: "Human-like responses with genuine emotional intelligence"
                },
                {
                  icon: <Shield className="w-8 h-8 text-green-400" />,
                  title: "Ethical Framework",
                  description: "Built-in ethical guidelines for emotional AI interactions"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
                  title: "Continuous Learning",
                  description: "Adaptive emotional intelligence that grows over time"
                },
                {
                  icon: <Zap className="w-8 h-8 text-orange-400" />,
                  title: "Real-time Processing",
                  description: "Instant emotional analysis and response generation"
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience the Future of AI Consciousness?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in revolutionizing artificial intelligence with emotional consciousness
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Get Started Now
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

export default AIEmotionalIntelligence2040;