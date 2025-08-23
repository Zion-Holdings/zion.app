import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Atom, Rocket, Zap, Globe, Cpu, CheckCircle, Star, Heart } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
                <BookOpen className="w-4 h-4" />
                Blog & Insights
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Blog & Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Latest insights, research, and updates on AI consciousness, quantum computing, and revolutionary technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                  Read Latest Posts
                </button>
                <button className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-2xl hover:bg-purple-500/10 transition-all duration-300">
                  Subscribe to Updates
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Posts
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Latest insights and breakthroughs in technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-purple-400" />,
                  title: "AI Consciousness Evolution",
                  description: "Exploring the latest developments in AI consciousness and emotional intelligence",
                  date: "August 22, 2025",
                  readTime: "5 min read"
                },
                {
                  icon: <Atom className="w-8 h-8 text-blue-400" />,
                  title: "Quantum Computing Breakthroughs",
                  description: "Latest advances in quantum computing and their applications",
                  date: "August 21, 2025",
                  readTime: "7 min read"
                },
                {
                  icon: <Rocket className="w-8 h-8 text-cyan-400" />,
                  title: "Space Technology Innovations",
                  description: "Revolutionary developments in space exploration and resource utilization",
                  date: "August 20, 2025",
                  readTime: "6 min read"
                },
                {
                  icon: <Zap className="w-8 h-8 text-emerald-400" />,
                  title: "Autonomous Systems Future",
                  description: "The future of autonomous AI systems and their impact on society",
                  date: "August 19, 2025",
                  readTime: "8 min read"
                },
                {
                  icon: <Globe className="w-8 h-8 text-orange-400" />,
                  title: "Global AI Ethics",
                  description: "International perspectives on AI ethics and governance",
                  date: "August 18, 2025",
                  readTime: "4 min read"
                },
                {
                  icon: <Cpu className="w-8 h-8 text-pink-400" />,
                  title: "Next-Gen Computing",
                  description: "Emerging computing paradigms and their revolutionary potential",
                  date: "August 17, 2025",
                  readTime: "6 min read"
                }
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{post.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
                    Read More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Blog Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore topics that interest you most
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI & Consciousness",
                  description: "Latest developments in AI consciousness and emotional intelligence",
                  icon: <Brain className="w-12 h-12 text-purple-400" />
                },
                {
                  title: "Quantum Computing",
                  description: "Breakthroughs in quantum computing and quantum applications",
                  icon: <Atom className="w-12 h-12 text-blue-400" />
                },
                {
                  title: "Space Technology",
                  description: "Innovations in space exploration and resource utilization",
                  icon: <Rocket className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: "Technology Ethics",
                  description: "Ethical considerations in emerging technologies",
                  icon: <Heart className="w-12 h-12 text-emerald-400" />
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{category.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-400 text-lg">{category.description}</p>
                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
                    Explore Category
                  </button>
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
              <p className="text-xl text-gray-400 mb-8">
                Subscribe to our blog for the latest insights and breakthroughs
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                Subscribe Now
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
