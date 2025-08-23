import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Brain, Rocket, Shield, Zap } from 'lucide-react';
import { Layout } from '../../components/layout/Layout';

const blogPosts = [
  {
    id: 'performance-optimization',
    title: 'Performance Optimization Strategies for Modern Web Applications',
    excerpt: 'Discover advanced techniques for optimizing web application performance, from code splitting to server-side rendering.',
    category: 'Performance',
    readTime: '8 min read',
    date: '2025-01-15',
    icon: <Zap className="w-6 h-6" />,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400/20'
  },
  {
    id: 'cloud-native-automation',
    title: 'Cloud-Native Automation: Building Self-Healing Infrastructure',
    excerpt: 'Learn how to implement autonomous infrastructure that automatically detects and resolves issues without human intervention.',
    category: 'Cloud',
    readTime: '12 min read',
    date: '2025-01-10',
    icon: <Rocket className="w-6 h-6" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20'
  },
  {
    id: 'ai-automation-trends-2025',
    title: 'AI Automation Trends 2025: The Future of Autonomous Systems',
    excerpt: 'Explore the latest trends in AI automation and how they\'re reshaping industries across the globe.',
    category: 'AI',
    readTime: '10 min read',
    date: '2025-01-05',
    icon: <Brain className="w-6 h-6" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/20'
  },
  {
    id: 'future-of-work',
    title: 'The Future of Work: AI-Augmented Human Intelligence',
    excerpt: 'How artificial intelligence is transforming the workplace and creating new opportunities for human-AI collaboration.',
    category: 'Future',
    readTime: '15 min read',
    date: '2024-12-28',
    icon: <Brain className="w-6 h-6" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20'
  },
  {
    id: 'ai-ethics-automation',
    title: 'AI Ethics in Automation: Balancing Innovation with Responsibility',
    excerpt: 'Critical considerations for implementing ethical AI systems in automated decision-making processes.',
    category: 'Ethics',
    readTime: '11 min read',
    date: '2024-12-20',
    icon: <Shield className="w-6 h-6" />,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/20'
  },
  {
    id: 'autonomous-content-generation',
    title: 'Autonomous Content Generation: AI Writing the Future',
    excerpt: 'How AI systems are revolutionizing content creation while maintaining human creativity and authenticity.',
    category: 'Content',
    readTime: '9 min read',
    date: '2024-12-15',
    icon: <Brain className="w-6 h-6" />,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
    borderColor: 'border-pink-400/20'
  }
];

const categories = [
  { name: 'All', count: blogPosts.length, active: true },
  { name: 'AI', count: blogPosts.filter(post => post.category === 'AI').length },
  { name: 'Performance', count: blogPosts.filter(post => post.category === 'Performance').length },
  { name: 'Cloud', count: blogPosts.filter(post => post.category === 'Cloud').length },
  { name: 'Future', count: blogPosts.filter(post => post.category === 'Future').length },
  { name: 'Ethics', count: blogPosts.filter(post => post.category === 'Ethics').length },
  { name: 'Content', count: blogPosts.filter(post => post.category === 'Content').length }
];

export default function BlogIndex() {
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
                Zion Tech Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Insights, trends, and breakthroughs in AI consciousness, quantum computing, and autonomous systems.
                Stay ahead of the technological curve with our expert analysis.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className={`p-6 rounded-2xl border ${post.borderColor} bg-black/40 hover:bg-black/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10`}>
                      {/* Category Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${post.bgColor} ${post.color} ${post.borderColor} border mb-4`}>
                        {post.icon}
                        {post.category}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights on AI consciousness, quantum computing, and autonomous systems delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/25"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Resources</h2>
              <p className="text-xl text-gray-300">Explore our comprehensive guides and tools</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI Services Guide',
                  description: 'Comprehensive overview of our AI consciousness and automation services.',
                  href: '/services',
                  icon: <Brain className="w-8 h-8" />,
                  color: 'text-cyan-400'
                },
                {
                  title: 'Case Studies',
                  description: 'Real-world examples of our revolutionary technology in action.',
                  href: '/case-studies',
                  icon: <Rocket className="w-8 h-8" />,
                  color: 'text-blue-400'
                },
                {
                  title: 'Training & Events',
                  description: 'Join our workshops and events to learn from industry experts.',
                  href: '/training',
                  icon: <Zap className="w-8 h-8" />,
                  color: 'text-purple-400'
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`${resource.color} mb-4`}>{resource.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{resource.description}</p>
                  <Link
                    href={resource.href}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

