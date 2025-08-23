import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Atom, Shield, Rocket, Target,
  Star, Users, Award, CheckCircle, Globe,
  Zap, Infinity, Eye, Heart, Code, Palette,
  Calendar, Clock, ArrowRight, Search, Filter,
  TrendingUp, Lightbulb, BookOpen, FileText
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'AI Consciousness Evolution: The Next Frontier in 2040',
      excerpt: 'Exploring how AI systems are developing genuine consciousness and what this means for the future of human-AI collaboration.',
      category: 'AI & Consciousness',
      author: 'Dr. Kleber Santos',
      date: '2025-01-15',
      readTime: '8 min read',
      image: '/api/og-image?title=AI Consciousness Evolution',
      featured: true,
      slug: '/blog/ai-consciousness-evolution-2040'
    },
    {
      id: 2,
      title: 'Quantum Neural Ecosystems: Revolutionizing AI Architecture',
      excerpt: 'How quantum computing is transforming neural network design and enabling previously impossible AI capabilities.',
      category: 'Quantum Technology',
      author: 'Dr. Sarah Chen',
      date: '2025-01-12',
      readTime: '6 min read',
      image: '/api/og-image?title=Quantum Neural Ecosystems',
      featured: true,
      slug: '/blog/quantum-neural-ecosystems-2040'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence: Mining the Final Frontier',
      excerpt: 'The future of space exploration and resource utilization through AI-powered autonomous systems.',
      category: 'Space Technology',
      author: 'Marcus Rodriguez',
      date: '2025-01-10',
      readTime: '7 min read',
      image: '/api/og-image?title=Space Resource Intelligence',
      featured: true,
      slug: '/blog/space-resource-intelligence-2040'
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Autonomous Business Intelligence: The Future of Decision Making',
      excerpt: 'How AI systems are revolutionizing business intelligence with autonomous analysis and predictive insights.',
      category: 'Enterprise AI',
      author: 'AI Research Team',
      date: '2025-01-08',
      readTime: '5 min read',
      image: '/api/og-image?title=Autonomous Business Intelligence',
      slug: '/blog/autonomous-business-intelligence-2040'
    },
    {
      id: 5,
      title: 'Quantum Cybersecurity: Protecting the Future',
      excerpt: 'Next-generation security solutions leveraging quantum computing to stay ahead of evolving threats.',
      category: 'Cybersecurity',
      author: 'Security Team',
      date: '2025-01-05',
      readTime: '6 min read',
      image: '/api/og-image?title=Quantum Cybersecurity',
      slug: '/blog/quantum-cybersecurity-future-2040'
    },
    {
      id: 6,
      title: 'Brain-Computer Interfaces: Merging Mind and Machine',
      excerpt: 'The latest developments in BCI technology and its applications in healthcare and human augmentation.',
      category: 'Emerging Tech',
      author: 'BCI Research Team',
      date: '2025-01-03',
      readTime: '7 min read',
      image: '/api/og-image?title=Brain-Computer Interfaces',
      slug: '/blog/brain-computer-interface-2040'
    },
    {
      id: 7,
      title: 'AI Ethics and Governance: Building Responsible AI',
      excerpt: 'Essential frameworks for ensuring AI development remains ethical and beneficial to humanity.',
      category: 'AI Ethics',
      author: 'Ethics Committee',
      date: '2024-12-30',
      readTime: '8 min read',
      image: '/api/og-image?title=AI Ethics and Governance',
      slug: '/blog/ai-ethics-governance-2041'
    },
    {
      id: 8,
      title: 'The Future of Work: AI-Augmented Human Intelligence',
      excerpt: 'How AI is transforming the workplace and enhancing human capabilities rather than replacing them.',
      category: 'Future of Work',
      author: 'Workplace Innovation Team',
      date: '2024-12-28',
      readTime: '6 min read',
      image: '/api/og-image?title=Future of Work',
      slug: '/blog/future-of-work'
    },
    {
      id: 9,
      title: 'Cloud-Native Automation: The DevOps Revolution',
      excerpt: 'Automating cloud infrastructure and deployment with AI-powered DevOps solutions.',
      category: 'DevOps',
      author: 'DevOps Team',
      date: '2024-12-25',
      readTime: '5 min read',
      image: '/api/og-image?title=Cloud-Native Automation',
      slug: '/blog/cloud-native-automation'
    }
  ];

  const categories = [
    { name: 'AI & Consciousness', count: 15, icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Technology', count: 12, icon: <Atom className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Space Technology', count: 8, icon: <Rocket className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
    { name: 'Cybersecurity', count: 10, icon: <Shield className="w-5 h-5" />, color: 'from-red-500 to-orange-500' },
    { name: 'Enterprise AI', count: 18, icon: <Target className="w-5 h-5" />, color: 'from-emerald-500 to-teal-500' },
    { name: 'Emerging Tech', count: 14, icon: <Zap className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' }
  ];

  const tags = [
    'AI Consciousness', 'Quantum Computing', 'Neural Networks', 'Space Mining', 
    'Cybersecurity', 'Autonomous Systems', 'Brain-Computer Interface', 'Ethics',
    'Future of Work', 'DevOps', 'Cloud Computing', 'Machine Learning'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Zion Tech Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Insights, breakthroughs, and thought leadership on AI consciousness, 
                quantum computing, and the future of technology.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-300">
                Our most important insights and breakthrough discoveries
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={post.slug}>
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full">
                            Featured
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories and Recent Posts */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Categories */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Categories
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                            {category.icon}
                          </div>
                          <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm">{category.count}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Popular Tags */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-3 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-lg hover:bg-cyan-500/30 transition-all duration-300"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/20"
                >
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Stay Updated</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Get the latest insights on AI consciousness and quantum technology delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
                    />
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Recent Posts */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Recent Articles
                  </h3>
                </motion.div>
                
                <div className="space-y-6">
                  {recentPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <Link href={post.slug}>
                        <div className="flex gap-6 p-6 bg-black/40 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                          <div className="w-32 h-24 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl flex-shrink-0 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                            <div className="absolute bottom-2 right-2">
                              <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full">
                                {post.readTime}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                                {post.category}
                              </span>
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {post.title}
                            </h4>
                            <p className="text-gray-400 mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <span>{post.author}</span>
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>

                {/* Load More Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-center mt-12"
                >
                  <button className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                    Load More Articles
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center p-12 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/20"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Share Your Insights
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Have groundbreaking ideas about AI consciousness, quantum computing, or emerging technologies? 
                We're always looking for thought leaders to contribute to our blog.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Submit an Article
                </a>
                <a href="/contact" className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Become a Contributor
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;