import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  ExternalLink,
  TrendingUp,
  Award,
  Rocket,
  Globe,
  Brain,
  Atom,
  Zap
} from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary Quantum Neural Interface Platform',
      excerpt: 'Our latest breakthrough in brain-computer interface technology combines quantum computing with neural networks for unprecedented human-AI interaction capabilities.',
      date: '2024-01-15',
      author: 'Dr. Sarah Chen',
      category: 'Product Launch',
      tags: ['Quantum Computing', 'AI', 'Neural Interface', 'Innovation'],
      image: '/api/placeholder/600/400',
      featured: true,
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: 'Zion Tech Group Named Top 10 AI Companies of 2024 by TechCrunch',
      excerpt: 'Recognition for our groundbreaking work in artificial intelligence and machine learning solutions that are transforming industries worldwide.',
      date: '2024-01-10',
      author: 'Marketing Team',
      category: 'Awards',
      tags: ['Awards', 'AI', 'Recognition', 'Industry Leadership'],
      image: '/api/placeholder/600/400',
      featured: false,
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'New Partnership with NASA for Autonomous Space Mining Technology',
      excerpt: 'Collaborating with NASA to develop cutting-edge autonomous systems for space exploration and resource extraction.',
      date: '2024-01-08',
      author: 'Dr. Michael Rodriguez',
      category: 'Partnerships',
      tags: ['NASA', 'Space Technology', 'Autonomous Systems', 'Partnerships'],
      image: '/api/placeholder/600/400',
      featured: false,
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: 'Zion Tech Group Expands Global Operations to 50+ Countries',
      excerpt: 'Strategic expansion brings our revolutionary technology solutions to emerging markets and underserved regions worldwide.',
      date: '2024-01-05',
      author: 'Global Operations Team',
      category: 'Company News',
      tags: ['Global Expansion', 'Market Growth', 'International', 'Strategy'],
      image: '/api/placeholder/600/400',
      featured: false,
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Breakthrough in Quantum Bio-Computing Research',
      excerpt: 'Our research team achieves significant milestone in quantum biological computing, opening new possibilities for medical applications.',
      date: '2024-01-03',
      author: 'Dr. Emily Watson',
      category: 'Research',
      tags: ['Quantum Computing', 'Biology', 'Medical Technology', 'Research'],
      image: '/api/placeholder/600/400',
      featured: false,
      icon: <Atom className="w-8 h-8" />
    },
    {
      title: 'AI Climate Prediction System Successfully Predicts Extreme Weather Events',
      excerpt: 'Our advanced AI system demonstrates 95% accuracy in predicting extreme weather patterns, helping communities prepare for climate challenges.',
      date: '2024-01-01',
      author: 'Climate AI Team',
      category: 'Technology',
      tags: ['AI', 'Climate Change', 'Weather Prediction', 'Environmental'],
      image: '/api/placeholder/600/400',
      featured: false,
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const categories = [
    { name: 'All News', count: newsArticles.length, active: true },
    { name: 'Product Launch', count: 1, active: false },
    { name: 'Awards', count: 1, active: false },
    { name: 'Partnerships', count: 1, active: false },
    { name: 'Company News', count: 1, active: false },
    { name: 'Research', count: 1, active: false },
    { name: 'Technology', count: 1, active: false }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <UltraFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title>
          <meta name="description" content="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies." />
        </Head>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              News & Updates
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay informed about our latest breakthroughs, partnerships, and industry insights that are shaping the future of technology.
            </motion.p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Story
              </h2>
            </motion.div>

            {newsArticles.filter(article => article.featured).map((article, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12 hover:border-cyan-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                    {article.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.date)}</span>
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{article.title}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed">{article.excerpt}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center space-x-2"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest Updates
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our latest news and insights across different categories
              </p>
            </motion.div>

            {/* Category Pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                    {article.icon}
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.date)}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-3">{article.title}</h3>
                  <p className="text-gray-300 mb-6 line-clamp-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </span>
                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 inline-flex items-center space-x-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest news, insights, and technology updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-black/40 border border-cyan-400/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default NewsPage;