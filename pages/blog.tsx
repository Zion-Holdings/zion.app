import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  BookOpen, Brain, Rocket, Shield, Zap, Target, Atom, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Calendar
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogCategories = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Latest insights in artificial intelligence and machine learning',
      count: '25+ articles',
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Breakthroughs in quantum computing and quantum technologies',
      count: '18+ articles',
      icon: <Atom className="w-8 h-8" />
    },
    {
      id: 'space-technology',
      name: 'Space Technology',
      description: 'Innovations in space exploration and technology',
      count: '15+ articles',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Security trends and best practices',
      count: '22+ articles',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'cloud-computing',
      name: 'Cloud Computing',
      description: 'Cloud infrastructure and platform insights',
      count: '20+ articles',
      icon: <Cloud className="w-8 h-8" />
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technologies',
      description: 'Cutting-edge technologies and innovations',
      count: '30+ articles',
      icon: <Lightbulb className="w-8 h-8" />
    }
  ];

  const featuredPosts = [
    {
      id: 'ai-ethics-automation',
      title: 'AI Ethics and Automation: Building Responsible AI Systems',
      excerpt: 'Explore the critical importance of ethical considerations in AI automation and how to implement responsible AI practices.',
      category: 'AI & Machine Learning',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 'quantum-supremacy',
      title: 'Quantum Supremacy: What It Means for the Future of Computing',
      excerpt: 'Understanding the implications of quantum supremacy and its potential impact on cryptography, drug discovery, and optimization.',
      category: 'Quantum Computing',
      author: 'Prof. Michael Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 'space-mining-future',
      title: 'The Future of Space Resource Mining: Opportunities and Challenges',
      excerpt: 'An in-depth look at the emerging field of space resource mining and its potential to revolutionize resource acquisition.',
      category: 'Space Technology',
      author: 'Dr. Emily Watson',
      date: '2025-01-10',
      readTime: '10 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const recentPosts = [
    {
      id: 'cybersecurity-2025',
      title: 'Cybersecurity Trends to Watch in 2025',
      excerpt: 'Key cybersecurity challenges and solutions for the coming year.',
      category: 'Cybersecurity',
      date: '2025-01-08',
      readTime: '6 min read'
    },
    {
      id: 'cloud-native-automation',
      title: 'Cloud-Native Automation: Best Practices',
      excerpt: 'Implementing effective automation in cloud-native environments.',
      category: 'Cloud Computing',
      date: '2025-01-05',
      readTime: '7 min read'
    },
    {
      id: 'ai-automation-trends',
      title: 'AI Automation Trends: What\'s Next',
      excerpt: 'Emerging trends in AI automation and their business impact.',
      category: 'AI & Machine Learning',
      date: '2025-01-03',
      readTime: '9 min read'
    },
    {
      id: 'quantum-cryptography',
      title: 'Quantum Cryptography: Securing the Future',
      excerpt: 'How quantum cryptography will revolutionize digital security.',
      category: 'Quantum Computing',
      date: '2024-12-30',
      readTime: '11 min read'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Blog & Insights - Zion Tech Group"
        description="Stay updated with the latest insights in AI, quantum computing, space technology, and emerging technologies."
        keywords="blog, AI insights, quantum computing, space technology, cybersecurity, cloud computing, emerging technologies"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Blog & Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights in AI, quantum computing, space technology, and emerging technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#featured" 
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read Articles
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Blog Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore insights across different technology domains
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-pink-500/20 rounded-full mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-300 mb-4">{category.description}</p>
                    <div className="text-pink-400 font-semibold">{category.count}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section id="featured" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Featured Posts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and insightful articles
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-pink-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-pink-400 font-semibold">{post.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <a 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Recent Posts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Latest insights and updates from our team
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-pink-400 font-semibold">{post.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <a 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.article>
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights and updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe Now
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default BlogPage;