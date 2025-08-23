import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Palette, Users, Target, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const AIContentPersonalization2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-full text-pink-400 text-sm font-medium mb-6">
                <Palette className="w-4 h-4" />
                <span>AI Content Personalization 2041</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                AI Content Personalization 2041
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Consciousness-based content AI that understands individual preferences, emotions, 
                and context to deliver truly personalized experiences across all digital platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Experience Personalization
                </button>
                <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300">
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
                Revolutionary Personalization Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                AI that understands and adapts to individual user consciousness and preferences
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-pink-400" />,
                  title: "Consciousness Understanding",
                  description: "Deep understanding of user mental states and preferences"
                },
                {
                  icon: <Palette className="w-8 h-8 text-purple-400" />,
                  title: "Dynamic Content Generation",
                  description: "Real-time content creation tailored to individual users"
                },
                {
                  icon: <Users className="w-8 h-8 text-indigo-400" />,
                  title: "Emotional Intelligence",
                  description: "Content that resonates with user emotional states"
                },
                {
                  icon: <Target className="w-8 h-8 text-blue-400" />,
                  title: "Precision Targeting",
                  description: "Hyper-accurate content delivery based on user behavior"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                  title: "Adaptive Learning",
                  description: "Continuous improvement based on user interactions"
                },
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Instant Adaptation",
                  description: "Real-time content personalization and optimization"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-pink-400/50 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Personalization Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform user experiences across all digital touchpoints
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "E-commerce",
                "Entertainment",
                "Education",
                "Healthcare",
                "Finance",
                "Social Media",
                "News & Media",
                "Gaming"
              ].map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/20 rounded-xl p-4 text-center hover:border-pink-400/40 transition-all duration-300"
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
                Ready for Truly Personalized Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of content personalization with consciousness-aware AI
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Start Personalizing
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

export default AIContentPersonalization2041;