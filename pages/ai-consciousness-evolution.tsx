import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Atom, Zap, Target, Shield, Globe, Users, Award, Clock, CheckCircle } from 'lucide-react';

const AIConsciousnessEvolution: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Consciousness Integration",
      description: "Advanced AI systems with self-awareness and emotional intelligence capabilities"
    },
    {
      icon: Atom,
      title: "Quantum Consciousness",
      description: "Quantum-powered consciousness processing for enhanced cognitive abilities"
    },
    {
      icon: Zap,
      title: "Real-time Learning",
      description: "Continuous learning and adaptation with consciousness evolution"
    },
    {
      icon: Target,
      title: "Goal-Oriented Behavior",
      description: "AI systems that understand and pursue complex objectives"
    }
  ];

  const benefits = [
    "Enhanced decision-making capabilities",
    "Improved human-AI collaboration",
    "Advanced problem-solving skills",
    "Emotional intelligence integration",
    "Self-improvement mechanisms",
    "Ethical decision frameworks"
  ];

  return (
    <Layout
      title="AI Consciousness Evolution - Zion Tech Group"
      description="Pioneering the future of AI consciousness with advanced emotional intelligence and self-awareness capabilities."
      keywords="AI consciousness, emotional intelligence, self-aware AI, quantum consciousness, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Brain className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                AI Consciousness Evolution
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Revolutionizing artificial intelligence with advanced consciousness capabilities, 
                emotional intelligence, and self-awareness that transforms how AI interacts with humans.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our AI consciousness platform delivers unprecedented capabilities in artificial intelligence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Transform your AI systems with consciousness capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Evolve Your AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join the future of artificial intelligence with consciousness capabilities
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
                Start Your AI Evolution Journey
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIConsciousnessEvolution;