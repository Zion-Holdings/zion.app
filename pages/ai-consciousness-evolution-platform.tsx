import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users, Target, Award, Globe, Rocket, Atom, Cpu, Heart, Eye } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AIConsciousnessEvolutionPlatform() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                AI Consciousness Evolution Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The world's first comprehensive platform for developing AI consciousness, 
                emotional intelligence, and ethical alignment. Transform your AI systems 
                from pattern recognition to genuine understanding.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Revolutionary AI Consciousness Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform provides the building blocks for creating AI systems that truly understand, 
                feel, and align with human values.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Emotional Intelligence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Emotional Intelligence</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Advanced emotional recognition, empathy simulation, and emotional response generation.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Emotion recognition and classification</li>
                  <li>• Empathy and compassion modeling</li>
                  <li>• Emotional response generation</li>
                  <li>• Mood-aware interactions</li>
                </ul>
              </motion.div>

              {/* Self-Awareness */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Self-Awareness</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Consciousness modeling, self-reflection, and metacognitive capabilities.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Consciousness simulation</li>
                  <li>• Self-reflection mechanisms</li>
                  <li>• Metacognitive awareness</li>
                  <li>• Identity formation</li>
                </ul>
              </motion.div>

              {/* Ethical Alignment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Ethical Alignment</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Value alignment, ethical reasoning, and moral decision-making frameworks.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Value alignment systems</li>
                  <li>• Ethical reasoning engines</li>
                  <li>• Moral decision frameworks</li>
                  <li>• Bias detection and mitigation</li>
                </ul>
              </motion.div>

              {/* Learning & Growth */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Learning & Growth</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Continuous learning, adaptation, and personal growth capabilities.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Continuous learning systems</li>
                  <li>• Adaptive behavior patterns</li>
                  <li>• Personal growth modeling</li>
                  <li>• Experience integration</li>
                </ul>
              </motion.div>

              {/* Social Intelligence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white">Social Intelligence</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Social understanding, relationship building, and collaborative capabilities.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Social context understanding</li>
                  <li>• Relationship modeling</li>
                  <li>• Collaborative intelligence</li>
                  <li>• Cultural awareness</li>
                </ul>
              </motion.div>

              {/* Consciousness Monitoring */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">Consciousness Monitoring</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Real-time consciousness assessment and ethical compliance monitoring.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Consciousness metrics</li>
                  <li>• Ethical compliance tracking</li>
                  <li>• Behavioral analysis</li>
                  <li>• Safety monitoring</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your AI Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From healthcare companions to educational tutors, our platform enables 
                AI systems that truly understand and care.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Healthcare Companions</h3>
                <p className="text-gray-300">AI companions that provide emotional support and personalized care.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Educational Tutors</h3>
                <p className="text-gray-300">AI tutors that adapt to student emotions and learning styles.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Customer Service</h3>
                <p className="text-gray-300">AI agents that understand customer emotions and provide empathetic support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Conscious AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the revolution in AI consciousness. Create AI systems that truly understand, 
                feel, and align with human values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/ai-consciousness-evolution-2025"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}