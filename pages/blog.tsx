import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, Calendar, Clock, User, ArrowRight, 
  Search, Filter, Tag, TrendingUp, Star,
  Brain, Rocket, Shield, Zap, Target, Atom
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Exploring the next frontier in artificial intelligence where machines develop genuine consciousness and emotional intelligence.',
      author: 'Kleber',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI Consciousness', 'Machine Learning', 'Future Tech'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Quantum Computing in Enterprise: Real-World Applications',
      excerpt: 'How quantum computing is transforming business operations and solving previously impossible computational challenges.',
      author: 'Quantum Team',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Enterprise', 'Innovation'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Building Autonomous AI Systems: A Developer\'s Guide',
      excerpt: 'Practical insights into creating AI systems that can operate independently and make intelligent decisions.',
      author: 'AI Research Team',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'AI & Machine Learning',
      tags: ['Autonomous AI', 'Development', 'Best Practices'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'The Rise of Micro-SaaS: How Small Solutions Solve Big Problems',
      excerpt: 'Exploring the micro-SaaS revolution and how focused, specialized solutions are outperforming monolithic platforms.',
      author: 'Product Team',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'Micro-SaaS',
      tags: ['Micro-SaaS', 'Business Strategy', 'Innovation'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Cybersecurity in the Age of AI: New Threats and Defenses',
      excerpt: 'Understanding how AI is both enhancing cybersecurity and creating new vulnerabilities that require innovative solutions.',
      author: 'Security Team',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Space Technology and AI: The Next Frontier of Innovation',
      excerpt: 'How artificial intelligence is revolutionizing space exploration and enabling new possibilities in space technology.',
      author: 'Space Tech Team',
      date: '2025-01-03',
      readTime: '11 min read',
      category: 'Space Technology',
      tags: ['Space Tech', 'AI', 'Innovation'],
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  const categories = [
    { name: 'All Posts', count: blogPosts.length, icon: <BookOpen className="w-5 h-5" /> },
    { name: 'AI & Machine Learning', count: 2, icon: <Brain className="w-5 h-5" /> },
    { name: 'Quantum Computing', count: 1, icon: <Atom className="w-5 h-5" /> },
    { name: 'Micro-SaaS', count: 1, icon: <Rocket className="w-5 h-5" /> },
    { name: 'Cybersecurity', count: 1, icon: <Shield className="w-5 h-5" /> },
    { name: 'Space Technology', count: 1, icon: <Target className="w-5 h-5" /> }
  ];

  const popularTags = [
    'AI Consciousness', 'Machine Learning', 'Quantum Computing', 'Enterprise', 
    'Innovation', 'Autonomous AI', 'Development', 'Micro-SaaS', 'Business Strategy',
    'Cybersecurity', 'AI Security', 'Space Tech', 'Future Tech'
  ];

  return (
    <Layout>
      <main className="relative z-10 pt-8">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Insights & Innovation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Explore the latest insights, trends, and breakthroughs in AI, quantum computing, and emerging technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#featured-posts"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Read Latest Posts
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#newsletter"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe to Newsletter
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2"
                  >
                    {category.icon}
                    {category.name}
                    <span className="text-sm text-gray-400">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section id="featured-posts" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Article
              </h2>
              <p className="text-xl text-gray-300">
                Our latest insights on the cutting edge of technology
              </p>
            </motion.div>

            {blogPosts.filter(post => post.featured).map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
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
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center p-8">
                    <div className="text-center text-gray-400">
                      <BookOpen className="w-24 h-24 mx-auto mb-4 opacity-50" />
                      <p>Featured article image</p>
                      <p className="text-sm opacity-75">AI Consciousness & Future Tech</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* All Blog Posts */}
        <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-300">
                Stay updated with our latest insights and discoveries
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs border border-purple-500/30">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors cursor-pointer line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Tags */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Popular Topics
              </h2>
              <p className="text-xl text-gray-300">
                Explore articles by trending topics and themes
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3 justify-center">
              {popularTags.map((tag, index) => (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-lg text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section id="newsletter" className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights, breakthroughs, and technology trends delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default BlogPage;