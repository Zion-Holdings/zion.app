import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { FileText, Calendar, User, ArrowRight, Rocket, Brain, Shield, Cpu } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of AI in Enterprise",
      excerpt: "Discover how artificial intelligence is transforming business operations and what's next for enterprise AI adoption.",
      author: "Zion Tech Team",
      date: "2025-01-15",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      href: "/blog/future-of-ai-enterprise",
      icon: Brain
    },
    {
      title: "Quantum Computing Breakthroughs",
      excerpt: "Explore the latest developments in quantum computing and their implications for solving complex problems.",
      author: "Quantum Research Team",
      date: "2025-01-12",
      category: "Quantum Computing",
      readTime: "7 min read",
      href: "/blog/quantum-computing-breakthroughs",
      icon: Cpu
    },
    {
      title: "Cybersecurity Trends for 2025",
      excerpt: "Stay ahead of emerging threats with our analysis of cybersecurity trends and best practices for the coming year.",
      author: "Security Experts",
      date: "2025-01-10",
      category: "Cybersecurity",
      readTime: "6 min read",
      href: "/blog/cybersecurity-trends-2025",
      icon: Shield
    },
    {
      title: "Cloud Migration Best Practices",
      excerpt: "Learn the essential strategies and considerations for successful cloud migration projects.",
      author: "Cloud Solutions Team",
      date: "2025-01-08",
      category: "Cloud Computing",
      readTime: "8 min read",
      href: "/blog/cloud-migration-best-practices",
      icon: Rocket
    },
    {
      title: "Data Analytics for Business Growth",
      excerpt: "How data-driven insights can drive business growth and competitive advantage in today's market.",
      author: "Data Science Team",
      date: "2025-01-05",
      category: "Data Analytics",
      readTime: "4 min read",
      href: "/blog/data-analytics-business-growth",
      icon: Brain
    },
    {
      title: "Automation in Modern Workplaces",
      excerpt: "The role of automation in creating more efficient and productive workplace environments.",
      author: "Automation Specialists",
      date: "2025-01-03",
      category: "Process Automation",
      readTime: "5 min read",
      href: "/blog/automation-modern-workplaces",
      icon: Rocket
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Quantum Computing",
    "Cybersecurity",
    "Cloud Computing",
    "Data Analytics",
    "Process Automation"
  ];

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
                Blog & Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest insights, trends, and innovations in technology. 
                Expert analysis and thought leadership from our team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                        <post.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-sm text-cyan-400 font-medium">{post.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{post.readTime}</span>
                      <a
                        href={post.href}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
                      >
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights and updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}