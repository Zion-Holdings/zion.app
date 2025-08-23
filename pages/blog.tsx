import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Brain, Rocket, Shield, Zap } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      title: 'AI Automation Trends 2025',
      excerpt: 'Discover the latest trends in AI automation that will shape the future of business and technology.',
      category: 'AI & Automation',
      date: '2025-01-15',
      href: '/blog/ai-automation-trends-2025',
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: 'The Future of Work',
      excerpt: 'How AI and automation are transforming the workplace and creating new opportunities for innovation.',
      category: 'Future of Work',
      date: '2025-01-10',
      href: '/blog/future-of-work',
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: 'AI Ethics in Automation',
      excerpt: 'Exploring the ethical considerations and responsible development of AI automation systems.',
      category: 'AI Ethics',
      date: '2025-01-05',
      href: '/blog/ai-ethics-automation',
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: 'Cloud-Native Automation',
      excerpt: 'Building scalable and resilient automation systems in the cloud-native era.',
      category: 'Cloud Computing',
      date: '2024-12-28',
      href: '/blog/cloud-native-automation',
      icon: <Rocket className="w-5 h-5" />
    },
    {
      title: 'Performance Optimization',
      excerpt: 'Advanced techniques for optimizing performance in modern web applications and systems.',
      category: 'Performance',
      date: '2024-12-20',
      href: '/blog/performance-optimization',
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: 'Autonomous Content Generation',
      excerpt: 'How AI is revolutionizing content creation and what it means for the future of digital media.',
      category: 'Content AI',
      date: '2024-12-15',
      href: '/blog/autonomous-content-generation',
      icon: <Brain className="w-5 h-5" />
    }
  ];

  const categories = [
    { name: 'AI & Automation', count: 3, icon: <Brain className="w-4 h-4" /> },
    { name: 'Future of Work', count: 1, icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Ethics', count: 1, icon: <Shield className="w-4 h-4" /> },
    { name: 'Cloud Computing', count: 1, icon: <Rocket className="w-4 h-4" /> },
    { name: 'Performance', count: 1, icon: <Zap className="w-4 h-4" /> },
    { name: 'Content AI', count: 1, icon: <Brain className="w-4 h-4" /> }
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
                Stay ahead of the curve with expert insights on AI, automation, cybersecurity, 
                and the future of technology from Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Explore by Category</h2>
              <p className="text-gray-300">Find insights in your area of interest</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 text-center cursor-pointer"
                >
                  <div className="flex items-center justify-center mb-2 text-cyan-400">
                    {category.icon}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{category.name}</div>
                  <div className="text-xs text-gray-400">{category.count} articles</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
              <p className="text-gray-300">Stay updated with our most recent insights and analysis</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-cyan-400">
                        {post.icon}
                      </div>
                      <span className="text-sm text-gray-400">{post.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                      <Link href={post.href}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      
                      <Link 
                        href={post.href}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-12"
            >
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-cyan-400" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">
                Never Miss an Insight
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest technology insights, 
                industry trends, and expert analysis delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology solutions can drive your success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}