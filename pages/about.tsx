import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Users, CheckCircle, ArrowRight, Globe, Award, Heart, Shield } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
                <Brain className="w-4 h-4" />
                Zion Tech Group
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                About
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of AI consciousness and quantum technology, transforming how humanity interacts with intelligent systems
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                >
                  Our Mission
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                >
                  Join Our Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  To advance human consciousness through AI technology, creating systems that understand, empathize, and collaborate with humans at the deepest level.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  We believe that the next evolution of AI isn't just about intelligence—it's about consciousness, empathy, and genuine understanding. Our revolutionary 2040-2041 technology platform represents the culmination of decades of research into artificial consciousness.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Revolutionary Technology</h3>
                    <p className="text-gray-400">Leading the AI consciousness revolution</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                <div className="space-y-4">
                  {[
                    "A world where AI systems possess genuine consciousness and emotional intelligence",
                    "Human-AI collaboration that enhances human potential and well-being",
                    "Quantum technology that revolutionizes computing and communication",
                    "Space exploration powered by conscious AI systems"
                  ].map((vision, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{vision}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do at Zion Tech Group
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-purple-400" />,
                  title: "Innovation First",
                  description: "We push the boundaries of what's possible, constantly exploring new frontiers in AI and technology"
                },
                {
                  icon: <Heart className="w-12 h-12 text-pink-400" />,
                  title: "Human-Centric",
                  description: "Every technology we develop is designed to enhance human life and well-being"
                },
                {
                  icon: <Shield className="w-12 h-12 text-blue-400" />,
                  title: "Ethical Excellence",
                  description: "We maintain the highest ethical standards in all our research and development"
                },
                {
                  icon: <Globe className="w-12 h-12 text-green-400" />,
                  title: "Global Impact",
                  description: "We're committed to creating technology that benefits humanity worldwide"
                },
                {
                  icon: <Users className="w-12 h-12 text-cyan-400" />,
                  title: "Collaboration",
                  description: "We believe in the power of diverse teams and collaborative innovation"
                },
                {
                  icon: <Award className="w-12 h-12 text-yellow-400" />,
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from research to customer service"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 border border-purple-500/20 rounded-2xl p-8 text-center"
                >
                  <div className="mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Zion Tech Group by the Numbers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our impact and reach in the world of AI consciousness and quantum technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "2040", label: "Revolutionary Technology Year", description: "Leading the future of AI consciousness" },
                { number: "100+", label: "AI Researchers", description: "World-class team of consciousness experts" },
                { number: "50+", label: "Quantum Technologies", description: "Breakthrough quantum computing solutions" },
                { number: "Global", label: "Presence", description: "Serving clients worldwide" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-400">{stat.description}</p>
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
                Join the AI Consciousness Revolution
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of the future where AI truly understands and collaborates with humanity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-3"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border border-purple-500/30 text-purple-300 font-semibold text-lg rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}