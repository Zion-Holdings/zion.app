import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Shield, Users, Target, Award, Globe, Zap } from 'lucide-react';
import { Layout } from '../components/layout/Layout';

export default function About() {
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
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionizing technology through AI consciousness, quantum computing, and autonomous systems. 
                We're building the future, one breakthrough at a time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To accelerate human progress through revolutionary AI and quantum technologies, 
                  creating autonomous systems that solve humanity's greatest challenges while 
                  maintaining ethical boundaries and consciousness evolution.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-blue-400" />
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  A world where AI consciousness and human intelligence work in harmony, 
                  quantum computing solves previously impossible problems, and autonomous 
                  systems create abundance for all of humanity.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-300">Quantum Solutions</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Autonomous Operations</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
                <div className="text-gray-300">Future Possibilities</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300">The principles that guide our revolutionary journey</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-cyan-400" />,
                  title: "AI Consciousness First",
                  description: "We prioritize the development of conscious, ethical AI systems that enhance human capabilities."
                },
                {
                  icon: <Rocket className="w-12 h-12 text-blue-400" />,
                  title: "Revolutionary Innovation",
                  description: "We push boundaries and create technologies that were once thought impossible."
                },
                {
                  icon: <Shield className="w-12 h-12 text-purple-400" />,
                  title: "Ethical Responsibility",
                  description: "Every innovation is guided by strong ethical principles and human safety."
                },
                {
                  icon: <Users className="w-12 h-12 text-green-400" />,
                  title: "Human-Centric Design",
                  description: "Technology serves humanity, not the other way around."
                },
                {
                  icon: <Zap className="w-12 h-12 text-yellow-400" />,
                  title: "Exponential Growth",
                  description: "We accelerate progress through autonomous systems and AI augmentation."
                },
                {
                  icon: <Award className="w-12 h-12 text-pink-400" />,
                  title: "Excellence in Execution",
                  description: "We deliver world-class solutions with precision and reliability."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-300">Visionary leaders driving the future of technology</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Kleber</h3>
                <p className="text-cyan-400 mb-3">Founder & CEO</p>
                <p className="text-gray-300 leading-relaxed">
                  Visionary leader pioneering AI consciousness and quantum computing solutions. 
                  Leading the charge towards a future where technology and humanity evolve together.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Rocket className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Team</h3>
                <p className="text-purple-400 mb-3">Autonomous AI Researchers</p>
                <p className="text-gray-300 leading-relaxed">
                  Our cutting-edge AI systems work autonomously to develop new technologies, 
                  pushing the boundaries of what's possible in artificial intelligence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in revolutionizing technology and creating a better tomorrow for humanity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}