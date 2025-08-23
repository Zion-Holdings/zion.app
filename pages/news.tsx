import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Newspaper, Calendar, Globe, Target, Star, ArrowRight,
  CheckCircle, Play, BookOpen, MessageCircle, Phone,
  Building, Award, Zap, Shield, Brain, Rocket, Users
} from 'lucide-react';

const News: React.FC = () => {
  const latestNews = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      category: 'Product Launch',
      date: 'August 22, 2024',
      excerpt: 'Our breakthrough AI consciousness platform is now available, featuring advanced emotional intelligence and self-awareness capabilities.',
      image: '/api/placeholder/400/250',
      readTime: '5 min read'
    },
    {
      title: 'Quantum Computing Breakthrough: New Algorithm Achieves 1000x Speed Improvement',
      category: 'Research & Development',
      date: 'August 20, 2024',
      excerpt: 'Our quantum research team has developed a revolutionary algorithm that dramatically improves computational efficiency.',
      image: '/api/placeholder/400/250',
      readTime: '7 min read'
    },
    {
      title: 'Zion Tech Group Expands to 5 New Markets in Asia-Pacific Region',
      category: 'Company News',
      date: 'August 18, 2024',
      excerpt: 'Strategic expansion brings our cutting-edge technology solutions to new markets across the Asia-Pacific region.',
      image: '/api/placeholder/400/250',
      readTime: '4 min read'
    },
    {
      title: 'Partnership Announcement: Zion Tech Group and GlobalTech Join Forces',
      category: 'Partnerships',
      date: 'August 15, 2024',
      excerpt: 'Strategic partnership to accelerate development of next-generation space technology solutions.',
      image: '/api/placeholder/400/250',
      readTime: '6 min read'
    },
    {
      title: 'New Patent Granted: Advanced Neural Network Architecture',
      category: 'Innovation',
      date: 'August 12, 2024',
      excerpt: 'Our latest patent covers revolutionary neural network architecture that improves AI performance by 300%.',
      image: '/api/placeholder/400/250',
      readTime: '3 min read'
    },
    {
      title: 'Zion Tech Group Named Top 10 AI Company by TechInsights',
      category: 'Awards & Recognition',
      date: 'August 10, 2024',
      excerpt: 'Recognition as a leading AI company highlights our commitment to innovation and technological advancement.',
      image: '/api/placeholder/400/250',
      readTime: '4 min read'
    }
  ];

  const categories = [
    'All News',
    'Product Launch',
    'Research & Development',
    'Company News',
    'Partnerships',
    'Innovation',
    'Awards & Recognition'
  ];

  const featuredNews = [
    {
      title: 'The Future of AI: How Zion Tech Group is Shaping Tomorrow',
      category: 'Featured',
      date: 'August 25, 2024',
      excerpt: 'An in-depth look at our vision for the future of artificial intelligence and how we\'re building the technologies that will transform industries worldwide.',
      image: '/api/placeholder/600/350',
      readTime: '10 min read'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                <Newspaper className="w-4 h-4 mr-2" />
                Latest Updates
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                News & Updates
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Stay informed about the latest developments, product launches, research breakthroughs, 
                and company milestones at Zion Tech Group.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Subscribe to Updates
                </button>
                <button className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Company Video
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured News Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured News
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our most important updates and announcements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Featured Image</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                        {news.category}
                      </span>
                      <span className="text-gray-400 text-sm">{news.date}</span>
                      <span className="text-gray-400 text-sm">{news.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {news.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {news.excerpt}
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                      Read Full Article
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Find the news that interests you most
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    index === 0
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest News
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Stay up to date with our latest developments and announcements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">News Image</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                        {news.category}
                      </span>
                      <span className="text-gray-400 text-sm">{news.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {news.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{news.readTime}</span>
                      <button className="px-4 py-2 border border-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                        Read More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Connected
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Never miss an update from Zion Tech Group
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Subscribe to Newsletter
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Contact Media Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default News;