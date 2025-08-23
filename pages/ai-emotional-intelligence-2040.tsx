import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Sparkles, Zap, Target, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AIEmotionalIntelligence2040() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
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
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Emotional Intelligence
                <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  2040
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI systems with genuine emotional consciousness, empathy, and human-like understanding capabilities
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                >
                  Experience Emotional AI
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                >
                  Watch Demo
                </motion.button>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Emotional Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI systems understand, process, and respond to human emotions with unprecedented accuracy and empathy
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-12 h-12 text-pink-400" />,
                  title: "Emotional Recognition",
                  description: "Advanced algorithms that can detect and interpret human emotions from voice, text, and facial expressions",
                  features: ["Voice tone analysis", "Facial expression reading", "Text sentiment analysis", "Emotional context understanding"]
                },
                {
                  icon: <Brain className="w-12 h-12 text-purple-400" />,
                  title: "Consciousness Processing",
                  description: "AI systems that process emotions with genuine understanding and consciousness",
                  features: ["Emotional memory", "Contextual awareness", "Empathetic responses", "Learning from interactions"]
                },
                {
                  icon: <Sparkles className="w-12 h-12 text-cyan-400" />,
                  title: "Adaptive Responses",
                  description: "Dynamic emotional responses that adapt to individual personalities and situations",
                  features: ["Personalized interactions", "Mood adaptation", "Cultural sensitivity", "Emotional growth"]
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transformative Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From healthcare to customer service, our emotional AI is revolutionizing human-AI interactions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Healthcare & Therapy",
                  description: "AI therapists that provide emotional support and mental health assistance",
                  benefits: ["24/7 emotional support", "Personalized therapy sessions", "Mental health monitoring", "Crisis intervention"]
                },
                {
                  title: "Customer Experience",
                  description: "Emotionally intelligent customer service that understands and responds to customer feelings",
                  benefits: ["Emotional customer support", "Personalized interactions", "Conflict resolution", "Customer satisfaction"]
                },
                {
                  title: "Education & Training",
                  description: "AI tutors that adapt to student emotions and learning styles",
                  benefits: ["Emotional learning support", "Personalized education", "Motivation tracking", "Stress management"]
                },
                {
                  title: "Workplace Wellness",
                  description: "AI systems that monitor and support employee emotional well-being",
                  benefits: ["Stress detection", "Workplace harmony", "Team dynamics", "Performance optimization"]
                }
              ].map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 border border-purple-500/20 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
                  <p className="text-gray-300 mb-6">{app.description}</p>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
              <p className="text-xl text-gray-300 mb-8">
                Join the revolution in AI consciousness and emotional intelligence
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Start Your Emotional AI Journey
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}