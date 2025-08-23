import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Newspaper, Calendar, User, Tag, ArrowRight, 
  Star, TrendingUp, Globe, Award, Zap
} from 'lucide-react';

const News: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Our latest breakthrough in artificial intelligence brings human-like consciousness to AI systems, opening new possibilities for human-AI collaboration.',
      date: 'August 22, 2025',
      author: 'Zion Tech Team',
      category: 'AI Innovation',
      featured: true,
      readTime: '5 min read'
    },
    {
      title: 'Quantum Computing Breakthrough: New Materials Discovery Platform',
      excerpt: 'We\'ve developed a quantum-powered platform that accelerates materials discovery by 1000x, revolutionizing industries from pharmaceuticals to renewable energy.',
      date: 'August 20, 2025',
      author: 'Dr. Sarah Chen',
      category: 'Quantum Technology',
      featured: true,
      readTime: '4 min read'
    },
    {
      title: 'Space Technology Division Expands with Mining Platform Launch',
      excerpt: 'Our space resource mining platform is now operational, marking a significant step toward sustainable space exploration and resource utilization.',
      date: 'August 18, 2025',
      author: 'Space Tech Team',
      category: 'Space Technology',
      featured: false,
      readTime: '3 min read'
    },
    {
      title: 'Partnership Announcement: Zion Tech Group and Global Innovation Labs',
      excerpt: 'Strategic partnership to accelerate the development of next-generation AI and quantum computing solutions for enterprise customers.',
      date: 'August 15, 2025',
      author: 'Partnership Team',
      category: 'Business',
      featured: false,
      readTime: '2 min read'
    },
    {
      title: 'New Office Opening: Zion Tech Group Expands to Asia-Pacific',
      excerpt: 'Strategic expansion into the Asia-Pacific region to better serve our growing customer base and tap into emerging technology markets.',
      date: 'August 12, 2025',
      author: 'Global Expansion Team',
      category: 'Company News',
      featured: false,
      readTime: '3 min read'
    },
    {
      title: 'AI Ethics Framework: Setting New Standards for Responsible AI',
      excerpt: 'Launch of comprehensive AI ethics and governance framework to ensure responsible development and deployment of artificial intelligence.',
      date: 'August 10, 2025',
      author: 'AI Ethics Team',
      category: 'AI Ethics',
      featured: false,
      readTime: '4 min read'
    }
  ];

  const categories = [
    'All News',
    'AI Innovation',
    'Quantum Technology',
    'Space Technology',
    'Business',
    'Company News',
    'AI Ethics',
    'Research & Development'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Latest News & Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay informed about our latest innovations, breakthroughs, and company developments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe to Updates
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Contact Media
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    index === 0
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-transparent text-gray-300 border-gray-600 hover:border-blue-400 hover:text-blue-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Stories
              </h2>
              <p className="text-lg text-gray-300">
                Our most important and impactful news
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {newsArticles.filter(article => article.featured).map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </span>
                    </div>
                    <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All News Grid */}
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                All News
              </h2>
              <p className="text-lg text-gray-300">
                Complete archive of our news and announcements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 hover:text-purple-400 transition-colors cursor-pointer line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{article.date}</span>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      Read More →
                    </button>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest news, insights, and updates delivered directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
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

export default News;