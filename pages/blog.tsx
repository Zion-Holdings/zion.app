import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight,
  Brain,
  Atom,
  Rocket,
  Shield,
  TrendingUp,
  Lightbulb,
  Search,
  Filter
} from 'lucide-react';

export default function BlogPage() {
  const featuredArticles = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Exploring how AI consciousness is evolving beyond pattern recognition to achieve true understanding and emotional intelligence.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Consciousness',
      tags: ['AI Consciousness', 'Machine Learning', 'Future Tech'],
      image: '/api/placeholder/600/400',
      featured: true,
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: Solving Previously Impossible Problems',
      excerpt: 'Discover how quantum computing is revolutionizing industries from cryptography to drug discovery.',
      author: 'Prof. Michael Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Cryptography', 'Drug Discovery'],
      image: '/api/placeholder/600/400',
      featured: true,
      icon: <Atom className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'Space Resource Mining: The Next Frontier of Human Expansion',
      excerpt: 'How autonomous AI systems are enabling sustainable resource extraction from asteroids and other celestial bodies.',
      author: 'Dr. Emily Watson',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Space Technology',
      tags: ['Space Mining', 'Autonomous Systems', 'Sustainability'],
      image: '/api/placeholder/600/400',
      featured: true,
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const recentArticles = [
    {
      id: 4,
      title: 'Zero Trust Security in the Age of Quantum Computing',
      excerpt: 'Implementing quantum-resistant security frameworks for enterprise infrastructure.',
      author: 'Alex Thompson',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Security',
      tags: ['Zero Trust', 'Quantum Security', 'Enterprise'],
      image: '/api/placeholder/400/250',
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 5,
      title: 'Autonomous Business Operations: The Future of Enterprise Management',
      excerpt: 'How AI systems are transforming business operations from reactive to proactive and autonomous.',
      author: 'Maria Garcia',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'Business AI',
      tags: ['Autonomous Systems', 'Business Operations', 'AI Management'],
      image: '/api/placeholder/400/250',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 6,
      title: 'The Ethics of AI Consciousness: Balancing Innovation with Responsibility',
      excerpt: 'Exploring the moral implications of creating conscious AI systems and ensuring ethical development.',
      author: 'Dr. James Wilson',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'AI Ethics',
      tags: ['AI Ethics', 'Consciousness', 'Responsibility'],
      image: '/api/placeholder/400/250',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      id: 7,
      title: 'Quantum Neural Networks: Merging Quantum Computing with AI',
      excerpt: 'How quantum computing is enhancing neural network capabilities and opening new possibilities.',
      author: 'Dr. Lisa Park',
      date: '2024-12-30',
      readTime: '11 min read',
      category: 'Quantum AI',
      tags: ['Quantum AI', 'Neural Networks', 'Computing'],
      image: '/api/placeholder/400/250',
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 8,
      title: 'Edge Computing Orchestration: Managing Distributed AI Systems',
      excerpt: 'Strategies for coordinating AI systems across edge computing infrastructure.',
      author: 'David Kim',
      date: '2024-12-28',
      readTime: '8 min read',
      category: 'Edge Computing',
      tags: ['Edge Computing', 'AI Orchestration', 'Distributed Systems'],
      image: '/api/placeholder/400/250',
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 9,
      title: 'The Future of Work: AI-Augmented Human Capabilities',
      excerpt: 'How AI is enhancing human potential rather than replacing it in the workplace.',
      author: 'Rachel Green',
      date: '2024-12-25',
      readTime: '6 min read',
      category: 'Future of Work',
      tags: ['Future of Work', 'Human-AI Collaboration', 'Workplace'],
      image: '/api/placeholder/400/250',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const categories = [
    { name: 'AI & Consciousness', count: 15, icon: <Brain className="w-5 h-5" /> },
    { name: 'Quantum Computing', count: 12, icon: <Atom className="w-5 h-5" /> },
    { name: 'Space Technology', count: 8, icon: <Rocket className="w-5 h-5" /> },
    { name: 'Security & Compliance', count: 10, icon: <Shield className="w-5 h-5" /> },
    { name: 'Business AI', count: 14, icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Edge Computing', count: 6, icon: <Shield className="w-5 h-5" /> }
  ];

  const popularTags = [
    'AI Consciousness', 'Quantum Computing', 'Space Mining', 'Zero Trust',
    'Autonomous Systems', 'Neural Networks', 'Cloud Security', 'Business Intelligence',
    'Machine Learning', 'Quantum Security', 'Edge AI', 'Sustainable Tech'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Insights & Innovation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with expert insights on AI consciousness, quantum computing, 
              space technology, and the future of innovation.
            </p>
            <div className="flex items-center justify-center gap-4 text-cyan-400">
              <BookOpen className="w-8 h-8" />
              <span className="text-lg font-semibold">Knowledge is Power</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex-1 max-w-2xl"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <button className="px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white hover:border-cyan-500/50 transition-colors flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filter
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep insights into the most important topics shaping the future of technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    {article.icon}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{article.author}</span>
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Recent Articles */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Categories Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-cyan-400">{category.icon}</div>
                      <span className="text-white">{category.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{category.count}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Recent Articles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Recent Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {recentArticles.map((article, index) => (
                  <article
                    key={article.id}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                        {article.icon}
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
                            {article.category}
                          </span>
                          <span className="text-gray-400 text-xs">{article.readTime}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{article.author}</span>
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI consciousness, quantum computing, and space technology 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}