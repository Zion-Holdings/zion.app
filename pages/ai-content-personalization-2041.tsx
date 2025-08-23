import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Palette, Users, Target, Sparkles, TrendingUp, Globe, Cpu, Heart, Zap, ShoppingCart } from 'lucide-react';

const AIContentPersonalization2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-pink-900/20 to-purple-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm mb-6">
                <Brain className="w-4 h-4" />
                AI Content Personalization 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                AI Content Personalization 2041
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Consciousness-based AI that creates deeply personalized content experiences for every individual
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300">
                  Experience Personalization
                </button>
                <button className="px-8 py-4 border border-pink-500/30 text-pink-300 rounded-2xl hover:bg-pink-500/10 transition-all duration-300">
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
                Revolutionary Personalization
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI understands individual preferences, emotions, and context to deliver truly personalized experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8 text-pink-400" />,
                  title: "Individual Profiling",
                  description: "Deep understanding of personal preferences, behaviors, and emotional states"
                },
                {
                  icon: <Palette className="w-8 h-8 text-purple-400" />,
                  title: "Dynamic Content Creation",
                  description: "Real-time generation of personalized content based on current context"
                },
                {
                  icon: <Target className="w-8 h-8 text-cyan-400" />,
                  title: "Precision Targeting",
                  description: "Laser-focused content delivery to maximize engagement and relevance"
                },
                {
                  icon: <Heart className="w-8 h-8 text-red-400" />,
                  title: "Emotional Intelligence",
                  description: "Content that resonates with individual emotional states and needs"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
                  title: "Continuous Learning",
                  description: "AI that improves personalization with every interaction"
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-400" />,
                  title: "Cultural Context",
                  description: "Understanding of cultural nuances and local preferences"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-pink-500/20 rounded-2xl hover:border-pink-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Personalization Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your business with AI-powered personalization across all touchpoints
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "E-commerce",
                  description: "Personalized product recommendations, dynamic pricing, and customized shopping experiences",
                  icon: <ShoppingCart className="w-12 h-12 text-pink-400" />
                },
                {
                  title: "Content Marketing",
                  description: "Tailored content creation, personalized email campaigns, and dynamic website experiences",
                  icon: <Palette className="w-12 h-12 text-purple-400" />
                },
                {
                  title: "Customer Support",
                  description: "Intelligent chatbots with emotional understanding and personalized assistance",
                  icon: <Heart className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: "Learning & Training",
                  description: "Adaptive learning paths and personalized educational content delivery",
                  icon: <Brain className="w-12 h-12 text-emerald-400" />
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-pink-500/20 rounded-2xl hover:border-pink-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{useCase.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
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
                Ready to Personalize Everything?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Transform your business with AI-powered personalization that understands your customers
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300">
                Start Personalizing
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIContentPersonalization2041;