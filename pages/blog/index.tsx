import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Zap, Target, Users, Award, Clock, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BlogIndexPage: React.FC = () => {
  const featuredPosts = [
    {
      title: 'The Future of AI Consciousness: 2045 and Beyond',
      excerpt: 'Explore how AI consciousness is evolving and what it means for the future of technology and humanity.',
      author: 'Zion Tech Group',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Consciousness',
      href: '/blog/ai-consciousness-evolution-2045',
      image: '/blog/ai-consciousness.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing Revolution: Breaking the Limits',
      excerpt: 'Discover how quantum computing is transforming industries and solving previously impossible problems.',
      author: 'Zion Tech Group',
      date: '2025-01-10',
      readTime: '12 min read',
      category: 'Quantum Technology',
      href: '/blog/quantum-computing-revolution',
      image: '/blog/quantum-computing.jpg',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Learn about the evolving cybersecurity landscape and how AI is both a threat and a solution.',
      author: 'Zion Tech Group',
      date: '2025-01-05',
      readTime: '10 min read',
      category: 'Cybersecurity',
      href: '/blog/cybersecurity-ai-age',
      image: '/blog/cybersecurity.jpg',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const recentPosts = [
    {
      title: 'Space Technology: The Next Frontier of Innovation',
      excerpt: 'Exploring the latest developments in space technology and their impact on Earth.',
      author: 'Zion Tech Group',
      date: '2025-01-01',
      readTime: '6 min read',
      category: 'Space Technology',
      href: '/blog/space-technology-frontier',
      color: 'from-pink-500 to-red-500'
    },
    {
      title: 'Business Intelligence: AI-Powered Decision Making',
      excerpt: 'How artificial intelligence is revolutionizing business intelligence and decision-making processes.',
      author: 'Zion Tech Group',
      date: '2024-12-28',
      readTime: '7 min read',
      category: 'Business Solutions',
      href: '/blog/business-intelligence-ai',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'The Evolution of Cloud Infrastructure',
      excerpt: 'From traditional cloud to quantum cloud: the future of infrastructure technology.',
      author: 'Zion Tech Group',
      date: '2024-12-25',
      readTime: '9 min read',
      category: 'IT Infrastructure',
      href: '/blog/cloud-infrastructure-evolution',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Healthcare Technology: AI and the Future of Medicine',
      excerpt: 'Revolutionary healthcare technologies powered by AI consciousness and quantum computing.',
      author: 'Zion Tech Group',
      date: '2024-12-20',
      readTime: '11 min read',
      category: 'Healthcare',
      href: '/blog/healthcare-technology-future',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Financial Technology: The Digital Revolution',
      excerpt: 'How fintech is transforming the financial industry with AI and quantum technologies.',
      author: 'Zion Tech Group',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Financial Services',
      href: '/blog/fintech-digital-revolution',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Manufacturing 4.0: The Smart Factory Revolution',
      excerpt: 'The future of manufacturing with AI, IoT, and autonomous systems.',
      author: 'Zion Tech Group',
      date: '2024-12-10',
      readTime: '10 min read',
      category: 'Manufacturing',
      href: '/blog/manufacturing-4-0-revolution',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const categories = [
    { name: 'AI & Consciousness', count: 15, color: 'from-purple-500 to-pink-500', href: '/blog/category/ai-consciousness' },
    { name: 'Quantum Technology', count: 12, color: 'from-cyan-500 to-blue-500', href: '/blog/category/quantum-technology' },
    { name: 'Cybersecurity', count: 18, color: 'from-red-500 to-orange-500', href: '/blog/category/cybersecurity' },
    { name: 'Space Technology', count: 10, color: 'from-pink-500 to-red-500', href: '/blog/category/space-technology' },
    { name: 'Business Solutions', count: 14, color: 'from-emerald-500 to-teal-500', href: '/blog/category/business-solutions' },
    { name: 'IT Infrastructure', count: 16, color: 'from-yellow-500 to-orange-500', href: '/blog/category/it-infrastructure' }
  ];

  return (
    <Layout 
      title="Blog - Zion Tech Group"
      description="Explore insights, trends, and innovations in AI consciousness, quantum computing, cybersecurity, and space technology. Stay ahead with our expert analysis."
      keywords="blog, articles, AI consciousness, quantum computing, cybersecurity, space technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Insights & Innovation
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Explore the latest trends, breakthroughs, and insights in AI consciousness, quantum computing, 
                cybersecurity, and space technology. Stay ahead of the curve with expert analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#featured"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Read Latest Posts
                  <BookOpen className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Subscribe to Updates
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore by Category
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover insights across all areas of technology innovation and transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={category.href}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-400 mb-4">{category.count} articles</p>
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        <span className="font-semibold">Explore</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section id="featured" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Posts
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Dive into our most popular and insightful articles on the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={post.href}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className={`h-48 bg-gradient-to-r ${post.color} flex items-center justify-center`}>
                        <BookOpen className="w-16 h-16 text-white opacity-80" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 bg-gradient-to-r ${post.color} text-white text-xs rounded-full`}>
                            {post.category}
                          </span>
                          <span className="text-gray-400 text-sm">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Recent Posts
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our latest insights and analysis on emerging technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={post.href}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${post.color} text-white text-xs rounded-full`}>
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Ahead of the Curve
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Get the latest insights on AI consciousness, quantum computing, and emerging technologies 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe to Updates
                  <BookOpen className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogIndexPage;

