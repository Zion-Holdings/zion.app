import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Globe, Star, Zap, TrendingUp } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: "Zion Tech Group Launches Revolutionary AI Consciousness Platform",
      excerpt: "Our latest AI consciousness platform represents a breakthrough in artificial intelligence, bringing human-like understanding and emotional intelligence to enterprise applications.",
      date: "2025-01-15",
      author: "Zion Tech Group",
      category: "AI Innovation",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "Quantum Computing Breakthrough: New Algorithm Achieves 1000x Speed Improvement",
      excerpt: "Our quantum computing team has developed a revolutionary algorithm that dramatically improves computational efficiency across multiple industries.",
      date: "2025-01-10",
      author: "Dr. Sarah Chen",
      category: "Quantum Computing",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Zion Tech Group Expands Global Operations to 250+ Countries",
      excerpt: "We're excited to announce our expansion into new markets, bringing our revolutionary technology solutions to organizations worldwide.",
      date: "2025-01-05",
      author: "Global Operations Team",
      category: "Company News",
      readTime: "3 min read",
      featured: false
    },
    {
      title: "New Partnership with Leading Healthcare Organizations",
      excerpt: "We're partnering with top healthcare institutions to deploy AI-powered diagnostic tools and patient care optimization systems.",
      date: "2024-12-28",
      author: "Partnership Team",
      category: "Partnerships",
      readTime: "4 min read",
      featured: false
    },
    {
      title: "Autonomous Business Intelligence Platform Achieves 99.99% Uptime",
      excerpt: "Our autonomous business intelligence platform has maintained exceptional performance, demonstrating the reliability of our AI-driven solutions.",
      date: "2024-12-20",
      author: "Engineering Team",
      category: "Platform Updates",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Zion Tech Group Named Top Technology Innovator of 2024",
      excerpt: "We're honored to be recognized as the leading technology innovator, a testament to our commitment to pushing the boundaries of what's possible.",
      date: "2024-12-15",
      author: "Awards Team",
      category: "Awards",
      readTime: "3 min read",
      featured: false
    }
  ];

  const categories = [
    { name: "All News", count: newsArticles.length, active: true },
    { name: "AI Innovation", count: newsArticles.filter(article => article.category === "AI Innovation").length, active: false },
    { name: "Quantum Computing", count: newsArticles.filter(article => article.category === "Quantum Computing").length, active: false },
    { name: "Company News", count: newsArticles.filter(article => article.category === "Company News").length, active: false },
    { name: "Partnerships", count: newsArticles.filter(article => article.category === "Partnerships").length, active: false },
    { name: "Platform Updates", count: newsArticles.filter(article => article.category === "Platform Updates").length, active: false }
  ];

  return (
    <Layout 
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, innovations, and developments from Zion Tech Group. Read about our breakthroughs in AI, quantum computing, and technology solutions."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                News & Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay informed about our latest innovations, breakthroughs, and developments in AI consciousness, 
                quantum computing, and revolutionary technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Featured Article</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our latest breakthrough in AI consciousness technology
              </p>
            </motion.div>

            {newsArticles.filter(article => article.featured).map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">Featured</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{article.title}</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Filter news by topic to find the information most relevant to you
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Latest News</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our most recent developments and announcements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-400 mb-8">
                Subscribe to our newsletter for the latest news, insights, and technology updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
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

export default NewsPage;