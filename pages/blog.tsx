import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Filter, BookOpen, TrendingUp, Lightbulb, Rocket } from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPosts = [
    {
      title: 'The Future of AI: Trends to Watch in 2025',
      excerpt: 'Discover the cutting-edge AI technologies and trends that will shape the future of business and technology.',
      author: 'Zion Tech Team',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '🧠',
      featured: true
    },
    {
      title: 'Quantum Computing: Breaking Down the Hype',
      excerpt: 'Separate fact from fiction in the world of quantum computing and understand what it means for your business.',
      author: 'Dr. Sarah Chen',
      date: 'January 12, 2025',
      readTime: '7 min read',
      category: 'Quantum Technology',
      image: '⚛️',
      featured: true
    },
    {
      title: 'Space Technology: The Next Frontier for Innovation',
      excerpt: 'Explore how space technology is driving innovation on Earth and creating new business opportunities.',
      author: 'Mark Johnson',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'Space Technology',
      image: '🚀',
      featured: true
    }
  ];

  const recentPosts = [
    {
      title: 'Building Secure AI Systems: Best Practices',
      excerpt: 'Learn the essential security practices for implementing AI systems in enterprise environments.',
      author: 'Security Team',
      date: 'January 8, 2025',
      readTime: '4 min read',
      category: 'Security',
      image: '🔒'
    },
    {
      title: 'Microservices Architecture: Lessons Learned',
      excerpt: 'Real-world insights from implementing microservices at scale in enterprise environments.',
      author: 'DevOps Team',
      date: 'January 5, 2025',
      readTime: '8 min read',
      category: 'Architecture',
      image: '🏗️'
    },
    {
      title: 'The Rise of Edge Computing in IoT',
      excerpt: 'How edge computing is revolutionizing IoT deployments and enabling real-time decision making.',
      author: 'IoT Team',
      date: 'January 3, 2025',
      readTime: '6 min read',
      category: 'IoT',
      image: '🌐'
    },
    {
      title: 'Sustainable Technology: Green Computing Solutions',
      excerpt: 'Exploring eco-friendly technology solutions that reduce environmental impact while improving performance.',
      author: 'Sustainability Team',
      date: 'December 30, 2024',
      readTime: '5 min read',
      category: 'Sustainability',
      image: '🌱'
    },
    {
      title: 'Digital Transformation: A Complete Guide',
      excerpt: 'Comprehensive guide to digital transformation strategies for modern enterprises.',
      author: 'Strategy Team',
      date: 'December 28, 2024',
      readTime: '10 min read',
      category: 'Strategy',
      image: '💡'
    },
    {
      title: 'Cloud-Native Security: New Challenges, New Solutions',
      excerpt: 'Addressing security challenges in cloud-native environments with modern security approaches.',
      author: 'Cloud Security Team',
      date: 'December 25, 2024',
      readTime: '7 min read',
      category: 'Cloud Security',
      image: '☁️'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Quantum Technology',
    'Space Technology',
    'Security',
    'Cloud Computing',
    'IoT',
    'DevOps',
    'Architecture',
    'Strategy'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Latest Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead with cutting-edge insights on AI, quantum computing, space technology, and emerging tech trends
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative max-w-md mx-auto sm:mx-0">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/20"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-cyan-500 text-black'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our most popular and insightful articles on emerging technology trends
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                >
                  <div className="text-6xl mb-4">{post.image}</div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Recent Articles
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Stay updated with our latest insights and technical deep-dives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                >
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{post.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12"
            >
              <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Stay Informed
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest insights delivered to your inbox. No spam, just valuable content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/20"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;