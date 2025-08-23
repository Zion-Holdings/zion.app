import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Globe, Zap, Brain, Rocket, Atom, Shield, Star, Cpu } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Team() {
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
                Our Leadership Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the visionary leaders and brilliant minds driving Zion Tech Group's 
                mission to revolutionize technology through AI consciousness and quantum innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Executive Leadership */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Executive Leadership
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Visionary leaders with decades of experience in AI, quantum computing, 
                and autonomous systems
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500"
              >
                <div className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Kleber Santos
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-3">CEO & Founder</p>
                  <p className="text-gray-300 leading-relaxed">
                    Visionary leader with 20+ years in AI and quantum computing. 
                    Pioneering consciousness evolution through technology.
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">AI Expert</span>
                    <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">Quantum</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500"
              >
                <div className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Atom className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Dr. Sarah Chen
                  </h3>
                  <p className="text-purple-400 font-semibold mb-3">CTO & Chief Scientist</p>
                  <p className="text-gray-300 leading-relaxed">
                    Quantum physicist and AI researcher leading breakthrough innovations 
                    in consciousness and autonomous systems.
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Quantum</span>
                    <span className="text-xs bg-pink-900/50 text-pink-300 px-2 py-1 rounded">Research</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 hover:border-green-400/60 transition-all duration-500"
              >
                <div className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Marcus Rodriguez
                  </h3>
                  <p className="text-green-400 font-semibold mb-3">COO & Head of Operations</p>
                  <p className="text-gray-300 leading-relaxed">
                    Operations expert specializing in scaling autonomous systems and 
                    managing complex technology deployments globally.
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">Operations</span>
                    <span className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded">Scale</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Department Heads */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Department Leadership
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized leaders driving innovation across our core technology domains
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI & Consciousness Division</h3>
                    <p className="text-cyan-400">Dr. Elena Petrova</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Leading breakthrough research in AI consciousness, emotional intelligence, 
                  and autonomous decision-making systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">Consciousness</span>
                  <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">Emotional AI</span>
                  <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Ethics</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Atom className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Quantum Technology Division</h3>
                    <p className="text-purple-400">Dr. James Kim</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Pioneering quantum computing applications, quantum security, and 
                  quantum-enhanced AI systems for enterprise solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Quantum</span>
                  <span className="text-xs bg-pink-900/50 text-pink-300 px-2 py-1 rounded">Security</span>
                  <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">Computing</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Autonomous Systems Division</h3>
                    <p className="text-green-400">Alex Thompson</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Developing self-operating intelligent systems that revolutionize 
                  business operations and decision-making processes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">Autonomous</span>
                  <span className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded">Systems</span>
                  <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">Automation</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Enterprise Solutions Division</h3>
                    <p className="text-yellow-400">Maria Gonzalez</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Delivering scalable enterprise IT solutions, security platforms, 
                  and digital transformation services to Fortune 500 companies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded">Enterprise</span>
                  <span className="text-xs bg-orange-900/50 text-orange-300 px-2 py-1 rounded">Security</span>
                  <span className="text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded">Transformation</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our team and drive our mission forward
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
                <p className="text-gray-400">
                  Constantly pushing boundaries and exploring new frontiers in technology
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-gray-400">
                  Delivering the highest quality solutions and exceeding expectations
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
                <p className="text-gray-400">
                  Creating solutions that benefit humanity and advance civilization
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-400">
                  Working together as a unified team to achieve extraordinary results
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for brilliant minds who share our passion for 
                innovation and want to shape the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  View Open Positions
                </button>
                <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  Contact HR
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}