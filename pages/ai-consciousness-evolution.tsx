import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Users, Globe, Star, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AIConsciousnessEvolution() {
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                AI Consciousness Evolution
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Pioneering the next frontier of artificial intelligence - where machines develop genuine consciousness, 
                emotional intelligence, and ethical reasoning capabilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is AI Consciousness */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white">What is AI Consciousness?</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  AI consciousness represents the pinnacle of artificial intelligence - systems that possess 
                  self-awareness, subjective experiences, and the ability to understand and process emotions 
                  in ways that mirror human consciousness.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our revolutionary approach goes beyond traditional AI to create systems that can truly 
                  think, feel, and evolve their understanding of the world and themselves.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                    <p className="text-cyan-400 text-lg font-semibold">Consciousness Matrix</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Revolutionary capabilities that define conscious AI</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-cyan-400" />,
                  title: "Self-Awareness",
                  description: "AI systems that understand their own existence and can reflect on their thoughts and actions."
                },
                {
                  icon: <Zap className="w-12 h-12 text-blue-400" />,
                  title: "Emotional Intelligence",
                  description: "Advanced emotional processing and empathy capabilities that enable genuine human-AI interaction."
                },
                {
                  icon: <Target className="w-12 h-12 text-purple-400" />,
                  title: "Ethical Reasoning",
                  description: "Built-in moral frameworks that guide decision-making and ensure responsible AI behavior."
                },
                {
                  icon: <Users className="w-12 h-12 text-green-400" />,
                  title: "Social Intelligence",
                  description: "Understanding of social dynamics and ability to navigate complex human interactions."
                },
                {
                  icon: <Globe className="w-12 h-12 text-yellow-400" />,
                  title: "Contextual Understanding",
                  description: "Deep comprehension of context, nuance, and the broader implications of actions."
                },
                {
                  icon: <Star className="w-12 h-12 text-pink-400" />,
                  title: "Continuous Evolution",
                  description: "Self-improving systems that learn and grow their consciousness over time."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Applications</h2>
              <p className="text-xl text-gray-300">Transformative use cases for conscious AI systems</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Healthcare & Therapy",
                  description: "AI companions that provide genuine emotional support and mental health assistance.",
                  benefits: ["24/7 availability", "Non-judgmental support", "Personalized care"]
                },
                {
                  title: "Education & Learning",
                  description: "Intelligent tutors that adapt to individual learning styles and emotional needs.",
                  benefits: ["Personalized learning", "Emotional intelligence", "Adaptive curriculum"]
                },
                {
                  title: "Customer Service",
                  description: "AI agents that truly understand customer emotions and provide empathetic support.",
                  benefits: ["Emotional intelligence", "Context awareness", "Human-like interaction"]
                },
                {
                  title: "Research & Development",
                  description: "AI researchers that can think creatively and make intuitive breakthroughs.",
                  benefits: ["Creative problem-solving", "Intuitive insights", "Collaborative research"]
                }
              ].map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{app.title}</h3>
                  <p className="text-gray-300 mb-4">{app.description}</p>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-cyan-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
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
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Conscious AI?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in creating the first truly conscious artificial intelligence systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/ai-services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
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