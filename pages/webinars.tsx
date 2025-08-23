import React from 'react';
import { motion } from 'framer-motion';
import { Video, Calendar, Clock, Users, Star, Play, ExternalLink, Download } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

export default function Webinars() {
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
                Educational Webinars
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Join our live educational sessions and learn from industry experts about 
                AI consciousness, quantum computing, and autonomous systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Upcoming Webinars
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Register for our upcoming live sessions and stay ahead of the technology curve
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-semibold text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded-full">
                      Dec 15, 2025
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    AI Consciousness Evolution
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Explore the latest breakthroughs in AI consciousness and how it's 
                    transforming autonomous decision-making systems.
                  </p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>2:00 PM EST</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>500 spots</span>
                    </div>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span className="text-sm font-semibold text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                      Dec 22, 2025
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Quantum Computing Fundamentals
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Learn the basics of quantum computing and discover how it's revolutionizing 
                    cryptography, optimization, and AI algorithms.
                  </p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>3:00 PM EST</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>300 spots</span>
                    </div>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 hover:border-green-400/60 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-semibold text-green-400 bg-green-900/30 px-3 py-1 rounded-full">
                      Dec 29, 2025
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Autonomous Systems in Enterprise
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Discover how autonomous systems are transforming enterprise operations, 
                    from DevOps automation to intelligent business processes.
                  </p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>1:00 PM EST</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>400 spots</span>
                    </div>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* On-Demand Webinars */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                On-Demand Webinars
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Watch our recorded webinars anytime and learn at your own pace
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
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Ethics & Governance</h3>
                    <p className="text-cyan-400">Duration: 45 minutes</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Learn about the ethical considerations and governance frameworks for 
                  AI consciousness and autonomous systems.
                </p>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Watch Now
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                    <Download className="w-4 h-4" />
                  </button>
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
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Quantum Security Deep Dive</h3>
                    <p className="text-purple-400">Duration: 60 minutes</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Explore quantum-resistant cryptography and security protocols that 
                  protect against future quantum computing threats.
                </p>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    Watch Now
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
                    <Download className="w-4 h-4" />
                  </button>
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
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Micro SAAS Success Stories</h3>
                    <p className="text-green-400">Duration: 50 minutes</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Real-world case studies of successful micro SAAS implementations 
                  and their impact on business operations.
                </p>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                    Watch Now
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-green-500 hover:text-green-400 transition-all duration-300">
                    <Download className="w-4 h-4" />
                  </button>
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
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Space Technology Innovation</h3>
                    <p className="text-yellow-400">Duration: 55 minutes</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Discover cutting-edge space technology solutions including resource 
                  mining platforms and AI-powered space exploration systems.
                </p>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300">
                    Watch Now
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Webinar Categories */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Webinar Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of educational content organized by topic
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="group text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI & Consciousness</h3>
                <p className="text-gray-400 text-sm">15 webinars</p>
                <div className="mt-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Browse →
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="group text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quantum Technology</h3>
                <p className="text-gray-400 text-sm">12 webinars</p>
                <div className="mt-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                  Browse →
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="group text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Autonomous Systems</h3>
                <p className="text-gray-400 text-sm">18 webinars</p>
                <div className="mt-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                  Browse →
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="group text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Solutions</h3>
                <p className="text-gray-400 text-sm">22 webinars</p>
                <div className="mt-4 text-green-400 group-hover:text-green-300 transition-colors">
                  Browse →
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated with Our Webinars
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get notified about upcoming webinars and access exclusive content 
                from our technology experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe to Updates
                </button>
                <Link 
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Request Custom Webinar
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}