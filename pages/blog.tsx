import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Calendar, User, Tag, ArrowRight,
  Search, Filter, TrendingUp, Lightbulb, Zap,
  Brain, Rocket, Shield, Globe, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const BlogPage: React.FC = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI: From Machine Learning to Machine Consciousness',
      excerpt: 'Exploring the evolution of artificial intelligence and the path toward true machine consciousness in 2025 and beyond.',
      author: 'Dr. Kleber Santos',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Machine Learning', 'Consciousness', 'Future Tech'],
      image: '🧠',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: What\'s Next for Enterprise',
      excerpt: 'Discover the latest quantum computing advancements and how they\'re revolutionizing business applications.',
      author: 'Quantum Research Team',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Enterprise', 'Innovation', 'Technology'],
      image: '⚛️',
      featured: true
    },
    {
      id: 3,
      title: 'Space Technology Revolution: Mining Resources Beyond Earth',
      excerpt: 'How space technology is enabling resource extraction and exploration in the final frontier.',
      author: 'Space Tech Division',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'Space Technology',
      tags: ['Space Tech', 'Resource Mining', 'Exploration', 'Innovation'],
      image: '🚀',
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding emerging cybersecurity challenges and AI-powered defense mechanisms.',
      author: 'Security Team',
      date: '2025-01-12',
      readTime: '5 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'AI', 'Threats', 'Defense'],
      image: '🛡️'
    },
    {
      id: 5,
      title: 'Enterprise AI Transformation: A Comprehensive Guide',
      excerpt: 'Step-by-step guide to implementing AI solutions in enterprise environments.',
      author: 'AI Solutions Team',
      date: '2025-01-08',
      readTime: '10 min read',
      category: 'Enterprise AI',
      tags: ['Enterprise', 'AI', 'Transformation', 'Guide'],
      image: '🏢'
    },
    {
      id: 6,
      title: 'The Rise of Micro SAAS: Building Scalable Business Solutions',
      excerpt: 'How micro SAAS platforms are changing the business software landscape.',
      author: 'Product Team',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Micro SAAS',
      tags: ['SAAS', 'Business', 'Software', 'Innovation'],
      image: '💼'
    },
    {
      id: 7,
      title: 'DevOps Automation: Streamlining Development Workflows',
      excerpt: 'Best practices for automating development and deployment processes.',
      author: 'DevOps Team',
      date: '2024-12-28',
      readTime: '7 min read',
      category: 'DevOps',
      tags: ['DevOps', 'Automation', 'Development', 'Workflow'],
      image: '⚙️'
    },
    {
      id: 8,
      title: 'Cloud Infrastructure Trends: What\'s Next in 2025',
      excerpt: 'Emerging trends in cloud computing and infrastructure management.',
      author: 'Cloud Team',
      date: '2024-12-25',
      readTime: '5 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Infrastructure', 'Trends', '2025'],
      image: '☁️'
    },
    {
      id: 9,
      title: 'The Impact of AI on Healthcare: Revolutionizing Patient Care',
      excerpt: 'How artificial intelligence is transforming healthcare delivery and patient outcomes.',
      author: 'Healthcare Solutions Team',
      date: '2024-12-20',
      readTime: '8 min read',
      category: 'Healthcare',
      tags: ['Healthcare', 'AI', 'Patient Care', 'Innovation'],
      image: '🏥'
    }
  ];

  const categories = [
    { name: 'AI & Machine Learning', count: 15, icon: <Brain className="w-5 h-5" /> },
    { name: 'Quantum Computing', count: 8, icon: <Zap className="w-5 h-5" /> },
    { name: 'Space Technology', count: 12, icon: <Rocket className="w-5 h-5" /> },
    { name: 'Cybersecurity', count: 10, icon: <Shield className="w-5 h-5" /> },
    { name: 'Enterprise IT', count: 18, icon: <Globe className="w-5 h-5" /> },
    { name: 'Micro SAAS', count: 6, icon: <Lightbulb className="w-5 h-5" /> }
  ];

  const tags = [
    'AI', 'Machine Learning', 'Quantum Computing', 'Space Tech', 'Cybersecurity',
    'Enterprise', 'Innovation', 'Technology', 'Research', 'Development',
    'Cloud Computing', 'DevOps', 'Healthcare', 'Finance', 'Manufacturing'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-full">
                  <BookOpen className="w-16 h-16 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Insights & <span className="text-blue-400">Innovation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay ahead of the curve with expert insights on AI, quantum computing, 
                space technology, and the future of enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full sm:w-80"
                  />
                </div>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Featured Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep insights into the latest technology trends and innovations
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-colors"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{post.image}</div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2 inline" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {/* Categories */}
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <Link
                          key={category.name}
                          href={`/blog?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center justify-between text-gray-300 hover:text-white transition-colors"
                        >
                          <div className="flex items-center">
                            <span className="text-blue-400 mr-2">{category.icon}</span>
                            {category.name}
                          </div>
                          <span className="text-sm text-gray-500">({category.count})</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.slice(0, 15).map((tag, index) => (
                        <Link
                          key={tag}
                          href={`/blog?tag=${tag.toLowerCase()}`}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-blue-600/20 rounded-lg p-6 border border-blue-500/30">
                    <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Get the latest insights delivered to your inbox
                    </p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 mb-3"
                    />
                    <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors">
                      Subscribe
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Recent Posts */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-white mb-6">Recent Articles</h2>
                </motion.div>
                
                <div className="space-y-6">
                  {recentPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors"
                    >
                      <div className="flex gap-6">
                        <div className="text-4xl flex-shrink-0">{post.image}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                              {post.category}
                            </span>
                            <span className="text-gray-400 text-sm">{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">
                            {post.title}
                          </h3>
                          <p className="text-gray-300 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center text-sm text-gray-400">
                              <User className="w-4 h-4 mr-2" />
                              {post.author}
                            </div>
                            <div className="text-sm text-gray-400">
                              <Calendar className="w-4 h-4 mr-2 inline" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span key={tagIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <Link 
                              href={`/blog/${post.id}`}
                              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                            >
                              Read More
                              <ChevronRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Load More */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mt-12"
                >
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                    Load More Articles
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Want to Contribute?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Share your expertise and insights with our community of technology professionals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Submit Article
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;