import React, { useState } from 'react';
import Head from 'next/head';
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
import Link from 'next/link';

const Blog: React.FC = () => {
  const featuredPosts = [
    {
      title: 'The Future of AI Consciousness: What to Expect in 2045',
      excerpt: 'Explore the revolutionary developments in AI consciousness and how they will transform our understanding of intelligence.',
      author: 'AI Research Team',
      date: '2025-01-15',
      category: 'AI & Consciousness',
      readTime: '8 min read',
      image: '/blog/ai-consciousness-2045.jpg',
      tags: ['AI', 'Consciousness', 'Future Tech', '2045'],
      icon: <Brain className="w-6 h-6" />
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
    },
    {
      title: 'Quantum Computing Breakthroughs: Solving Previously Impossible Problems',
      excerpt: 'Discover how quantum computing is revolutionizing industries and solving complex computational challenges.',
      author: 'Quantum Team',
      date: '2025-01-10',
      category: 'Quantum Computing',
      readTime: '12 min read',
      image: '/blog/quantum-breakthroughs.jpg',
      tags: ['Quantum Computing', 'Innovation', 'Technology'],
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: 'Cybersecurity in the Age of AI: New Threats, New Defenses',
      excerpt: 'Learn about the evolving cybersecurity landscape and how AI is both a threat and a solution.',
      author: 'Security Team',
      date: '2025-01-08',
      category: 'Cybersecurity',
      readTime: '10 min read',
      image: '/blog/cybersecurity-ai.jpg',
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection'],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const categories = [
    { name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, count: 15 },
    { name: 'Quantum Computing', icon: <Atom className="w-5 h-5" />, count: 12 },
    { name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 18 },
    { name: 'Space Technology', icon: <Rocket className="w-5 h-5" />, count: 8 },
    { name: 'Edge Computing', icon: <Cloud className="w-5 h-5" />, count: 10 },
    { name: 'Innovation', icon: <Zap className="w-5 h-5" />, count: 22 }
  ];

  const trendingTopics = [
    "AI Consciousness Evolution",
    "Quantum Supremacy",
    "Zero-Trust Security",
    "Autonomous Systems",
    "Ethical AI",
    "Space Mining",
    "Neural Networks",
    "Blockchain Security"
  ];

  const blogCategories = [
    { name: "All", count: 45, active: true },
    { name: "AI & Consciousness", count: 18, active: false },
    { name: "Quantum Computing", count: 12, active: false },
    { name: "Cybersecurity", count: 8, active: false },
    { name: "Space Technology", count: 7, active: false }
  ];

  const recentArticles = [
    {
      title: 'Edge Computing Orchestration: The Future of Distributed Systems',
      excerpt: 'How edge computing is transforming the way we process and analyze data.',
      author: 'Edge Computing Team',
      date: '2025-01-12',
      category: 'Edge Computing',
      readTime: '6 min read'
    },
    {
      title: 'The Rise of Autonomous AI Systems in Enterprise',
      excerpt: 'Exploring how autonomous AI is reshaping business operations and decision-making.',
      author: 'AI Research Team',
      date: '2025-01-10',
      category: 'AI & Consciousness',
      readTime: '7 min read'
    },
    {
      title: 'Quantum Cybersecurity: Protecting Data in the Quantum Era',
      excerpt: 'Understanding the security challenges and solutions in quantum computing.',
      author: 'Quantum Team',
      date: '2025-01-08',
      category: 'Quantum Computing',
      readTime: '9 min read'
    },
    {
      title: 'Cloud Platform Evolution: From Infrastructure to Intelligence',
      excerpt: 'How cloud platforms are becoming intelligent and autonomous.',
      author: 'Cloud Team',
      date: '2025-01-05',
      category: 'Edge Computing',
      readTime: '5 min read'
    }
  ];

  return (
    <Layout 
      title="Blog - Zion Tech Group"
      description="Insights, research, and thought leadership on AI consciousness, quantum computing, cybersecurity, and the future of technology."
      keywords="blog, AI consciousness, quantum computing, cybersecurity, space technology, business intelligence, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Blog & Insights
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Thought leadership in AI consciousness and quantum computing
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights, breakthrough research, 
                and industry analysis from Zion Tech Group's leading researchers and engineers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Categories */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-400" />
                <select className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Featured Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep insights and analysis on the latest developments in revolutionary technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-purple-400 text-6xl">
                      {post.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{post.views} views</span>
                        <span>{post.comments} comments</span>
                      </div>
                      
                      <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Explore by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find articles and insights in your areas of interest.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-all duration-300 border border-white/20">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-xs">{category.count} articles</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* Recent Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Recent Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest insights and analysis.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                      {post.category}
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{post.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Topics */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Trending Topics
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                What's hot in the world of AI consciousness and quantum computing
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {trendingTopics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 hover:from-purple-500/30 hover:to-blue-500/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <span className="font-medium">{topic}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Tags Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Explore by Topic</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover articles by your areas of interest
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {popularTags.map((tag, index) => (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-400 mb-8">
                Get the latest insights, research updates, and technological breakthroughs 
                delivered directly to your inbox.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {newsletterStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.metric}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-4xl font-bold mb-6">Contribute to Our Blog</h2>
              <p className="text-xl text-gray-400 mb-8">
                Are you a researcher, technologist, or thought leader? We welcome contributions 
                from experts in AI, quantum computing, cybersecurity, and space technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Submit an Article
                </a>
                <a
                  href="mailto:blog@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Contact Editorial Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
    </Layout>
  );
};

export default BlogPage;
