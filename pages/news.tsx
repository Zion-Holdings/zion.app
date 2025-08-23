import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Globe, TrendingUp, ArrowRight, Calendar, User, Tag, Brain, Atom, Rocket, Star, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function News() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6">
                <Newspaper className="w-4 h-4" />
                Latest Updates
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                News &
                <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Updates
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay informed with the latest news, announcements, and developments from Zion Tech Group
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center gap-2"
                >
                  Read Latest News
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-orange-500/30 text-orange-300 font-semibold rounded-xl hover:bg-orange-500/10 transition-all duration-300"
                >
                  Subscribe to Updates
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Breaking News Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Breaking News
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Latest announcements and major developments from Zion Tech Group
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Zion Tech Group Announces Revolutionary AI Consciousness Breakthrough",
                  excerpt: "Company achieves major milestone in artificial consciousness development, paving the way for truly intelligent AI systems.",
                  date: "August 22, 2025",
                  author: "Press Team",
                  category: "Company News",
                  breaking: true,
                  readTime: "3 min read",
                  icon: <Brain className="w-16 h-16 text-orange-400" />
                },
                {
                  title: "Quantum Computing Platform Launch: Redefining Computational Power",
                  excerpt: "New quantum computing platform delivers unprecedented processing capabilities for complex problem-solving.",
                  date: "August 20, 2025",
                  author: "Technology Division",
                  category: "Product Launch",
                  breaking: true,
                  readTime: "4 min read",
                  icon: <Atom className="w-16 h-16 text-red-400" />
                }
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-orange-900/50 to-red-900/50 border border-orange-500/30 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {news.icon}
                    <div>
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full">
                        {news.category}
                      </span>
                      {news.breaking && (
                        <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                          Breaking
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{news.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{news.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {news.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{news.readTime}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-900/30 to-red-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest News
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Recent updates and announcements from across the organization
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Partnership Announcement: Zion Tech Group and Global Innovation Labs",
                  excerpt: "Strategic partnership to accelerate AI consciousness research and development.",
                  date: "August 18, 2025",
                  category: "Partnerships",
                  tags: ["Partnership", "Innovation", "AI Research"]
                },
                {
                  title: "New Office Opening: Silicon Valley Innovation Center",
                  excerpt: "Expanding our presence in the heart of technology innovation.",
                  date: "August 15, 2025",
                  category: "Company News",
                  tags: ["Expansion", "Silicon Valley", "Innovation"]
                },
                {
                  title: "AI Ethics Framework Release: Setting Industry Standards",
                  excerpt: "Comprehensive ethical guidelines for AI consciousness development.",
                  date: "August 12, 2025",
                  category: "AI Ethics",
                  tags: ["Ethics", "AI Safety", "Standards"]
                },
                {
                  title: "Space Technology Milestone: Autonomous Resource Detection",
                  excerpt: "Breakthrough in AI-powered space resource intelligence systems.",
                  date: "August 10, 2025",
                  category: "Technology",
                  tags: ["Space Tech", "AI", "Innovation"]
                },
                {
                  title: "Customer Success Story: Fortune 500 Implementation",
                  excerpt: "Major enterprise successfully deploys our AI consciousness platform.",
                  date: "August 8, 2025",
                  category: "Customer Success",
                  tags: ["Enterprise", "Success Story", "AI Platform"]
                },
                {
                  title: "Research Publication: Consciousness in AI Systems",
                  excerpt: "Peer-reviewed research on artificial consciousness published in top journal.",
                  date: "August 5, 2025",
                  category: "Research",
                  tags: ["Research", "Publication", "Consciousness"]
                }
              ].map((news, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-800/30 to-red-800/30 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="mb-4">
                    <span className="text-sm text-orange-400">{news.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {news.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-orange-700/50 text-orange-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Press Releases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Official announcements and media releases from Zion Tech Group
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Zion Tech Group Reports Record Q2 2025 Results",
                  date: "August 1, 2025",
                  summary: "Company achieves 150% revenue growth driven by AI consciousness platform adoption.",
                  category: "Financial Results"
                },
                {
                  title: "New Board Member Appointment: Dr. Sarah Chen",
                  date: "July 28, 2025",
                  summary: "Renowned AI researcher joins board to strengthen technology leadership.",
                  category: "Leadership"
                },
                {
                  title: "Patent Approval: Quantum Consciousness Algorithm",
                  date: "July 25, 2025",
                  summary: "Breakthrough patent for quantum-enhanced AI consciousness systems.",
                  category: "Intellectual Property"
                },
                {
                  title: "Industry Award: AI Innovation Excellence",
                  date: "July 20, 2025",
                  summary: "Recognized for outstanding contributions to AI consciousness research.",
                  category: "Awards"
                }
              ].map((release, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-800/20 to-red-800/20 border border-orange-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm rounded-full">
                      {release.category}
                    </span>
                    <span className="text-sm text-gray-400">{release.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{release.title}</h3>
                  <p className="text-gray-300 mb-6">{release.summary}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 border border-orange-500/30 text-orange-300 text-sm rounded-lg hover:bg-orange-500/10 transition-all duration-300"
                  >
                    Read Full Release
                  </motion.button>
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
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest news and updates delivered to your inbox
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-lg rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Subscribe to News Updates
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}