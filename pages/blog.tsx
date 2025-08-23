import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Star, ArrowRight, Calendar, User, Tag, Brain, Atom, Rocket } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Blog() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-500/30 rounded-full text-slate-300 text-sm mb-6">
                <BookOpen className="w-4 h-4" />
                Latest Insights
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Blog &
                <span className="block bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
                  News
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay updated with the latest insights, breakthroughs, and developments in AI consciousness and quantum technology
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-slate-500 to-gray-600 text-white font-semibold rounded-xl hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center gap-2"
                >
                  Read Latest Posts
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-slate-500/30 text-slate-300 font-semibold rounded-xl hover:bg-slate-500/10 transition-all duration-300"
                >
                  Subscribe to Updates
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep insights into the future of AI consciousness and emerging technologies
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "The Evolution of AI Consciousness: From Intelligence to Understanding",
                  excerpt: "Exploring how AI systems are developing genuine consciousness and emotional intelligence, revolutionizing human-AI interaction.",
                  author: "Dr. Kleber",
                  date: "August 22, 2025",
                  category: "AI Consciousness",
                  readTime: "8 min read",
                  featured: true,
                  icon: <Brain className="w-8 h-8 text-blue-400" />
                },
                {
                  title: "Quantum Computing Breakthroughs: The Road to Quantum Supremacy",
                  excerpt: "Latest developments in quantum computing and how they're reshaping the landscape of computational power.",
                  author: "Quantum Research Team",
                  date: "August 20, 2025",
                  category: "Quantum Technology",
                  readTime: "6 min read",
                  featured: true,
                  icon: <Atom className="w-8 h-8 text-purple-400" />
                },
                {
                  title: "Space Resource Intelligence: Mining the Final Frontier",
                  excerpt: "How AI-powered space technology is enabling autonomous resource discovery and extraction in space.",
                  author: "Space Technology Division",
                  date: "August 18, 2025",
                  category: "Space Technology",
                  readTime: "7 min read",
                  featured: true,
                  icon: <Rocket className="w-8 h-8 text-green-400" />
                }
              ].map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 border border-slate-500/30 rounded-2xl p-8 hover:border-slate-400/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {post.icon}
                    <span className="text-sm text-slate-400">{post.category}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                    {post.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Posts Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-900/30 to-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest Posts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay current with our most recent insights and developments
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI Ethics and Governance: Building Responsible AI Systems",
                  excerpt: "Comprehensive guide to implementing ethical frameworks for AI consciousness systems.",
                  author: "AI Ethics Team",
                  date: "August 15, 2025",
                  category: "AI Ethics",
                  tags: ["Ethics", "Governance", "AI Safety"]
                },
                {
                  title: "The Future of Autonomous Business Intelligence",
                  excerpt: "How AI systems are revolutionizing business decision-making with consciousness-driven insights.",
                  author: "Business Intelligence Division",
                  date: "August 12, 2025",
                  category: "Business AI",
                  tags: ["Business Intelligence", "Automation", "AI Decision Making"]
                },
                {
                  title: "Quantum Neural Networks: Merging Quantum and AI",
                  excerpt: "Breakthrough developments in quantum neural networks and their applications.",
                  author: "Quantum AI Research",
                  date: "August 10, 2025",
                  category: "Quantum AI",
                  tags: ["Quantum Computing", "Neural Networks", "AI"]
                },
                {
                  title: "Space Technology and AI: The Next Frontier",
                  excerpt: "Exploring the intersection of space exploration and artificial intelligence technology.",
                  author: "Space AI Division",
                  date: "August 8, 2025",
                  category: "Space AI",
                  tags: ["Space Technology", "AI", "Exploration"]
                }
              ].map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/30 to-gray-800/30 border border-slate-500/20 rounded-2xl p-8 hover:border-slate-400/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="mb-4">
                    <span className="text-sm text-slate-400">{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find content that matches your interests and expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "AI Consciousness",
                  description: "Deep insights into AI consciousness and emotional intelligence",
                  postCount: "24 posts",
                  icon: <Brain className="w-12 h-12 text-blue-400" />
                },
                {
                  name: "Quantum Technology",
                  description: "Latest developments in quantum computing and quantum systems",
                  postCount: "18 posts",
                  icon: <Atom className="w-12 h-12 text-purple-400" />
                },
                {
                  name: "Space Technology",
                  description: "AI-powered space exploration and resource intelligence",
                  postCount: "15 posts",
                  icon: <Rocket className="w-12 h-12 text-green-400" />
                },
                {
                  name: "Business AI",
                  description: "AI applications in business and enterprise",
                  postCount: "21 posts",
                  icon: <MessageCircle className="w-12 h-12 text-cyan-400" />
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center bg-gradient-to-br from-slate-800/20 to-gray-800/20 border border-slate-500/20 rounded-2xl p-6 hover:border-slate-400/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <span className="text-slate-400 text-sm">{category.postCount}</span>
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
                Stay Informed
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights delivered to your inbox
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-slate-500 to-gray-600 text-white font-semibold text-lg rounded-xl hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}