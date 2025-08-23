import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Brain, Atom, Rocket, Shield, Cloud, Target, 
  ArrowRight, Star, Check, Mail, Phone, MapPin, Zap, Calendar, Clock
} from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Consciousness Platform',
      excerpt: 'Our latest breakthrough in AI consciousness technology is now available, marking a new era in human-AI collaboration.',
      category: 'AI Technology',
      date: '2025-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      href: '/news/ai-consciousness-platform-launch',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Quantum Computing Breakthrough: Solving Previously Impossible Problems',
      excerpt: 'We\'ve achieved a major milestone in quantum computing that opens new possibilities for scientific research and business applications.',
      category: 'Quantum Technology',
      date: '2025-01-10',
      readTime: '7 min read',
      image: '/api/placeholder/600/400',
      href: '/news/quantum-computing-breakthrough',
      icon: Atom,
      color: 'from-purple-500 to-blue-600'
    },
    {
      title: 'Space Resource Intelligence: Expanding Humanity\'s Reach',
      excerpt: 'Our space technology division has developed new systems for resource discovery and mining in space.',
      category: 'Space Technology',
      date: '2025-01-05',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      href: '/news/space-resource-intelligence',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Cybersecurity Innovation: Unbreakable Quantum Encryption',
      excerpt: 'We\'ve developed quantum-resistant encryption systems that will protect the digital future of humanity.',
      category: 'Cybersecurity',
      date: '2024-12-28',
      readTime: '4 min read',
      image: '/api/placeholder/600/400',
      href: '/news/quantum-encryption-breakthrough',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Business Transformation: AI-Powered Solutions for Enterprise',
      excerpt: 'New AI-driven business intelligence platforms are helping organizations achieve unprecedented efficiency and insights.',
      category: 'Business Solutions',
      date: '2024-12-20',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      href: '/news/ai-business-intelligence',
      icon: Target,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Infrastructure Evolution: Quantum Cloud Computing',
      excerpt: 'Our quantum-powered cloud infrastructure is revolutionizing how businesses scale and operate in the digital age.',
      category: 'IT Infrastructure',
      date: '2024-12-15',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      href: '/news/quantum-cloud-infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-sky-600'
    }
  ];

  const categories = [
    { name: 'All News', count: newsArticles.length, active: true },
    { name: 'AI Technology', count: 1, active: false },
    { name: 'Quantum Technology', count: 1, active: false },
    { name: 'Space Technology', count: 1, active: false },
    { name: 'Cybersecurity', count: 1, active: false },
    { name: 'Business Solutions', count: 1, active: false },
    { name: 'IT Infrastructure', count: 1, active: false }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, breakthroughs, and announcements from Zion Tech Group. Discover our revolutionary innovations in AI, quantum computing, and space technology." />
        <meta name="keywords" content="news, updates, announcements, AI technology, quantum computing, space technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>

        {/* Header Section */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Latest News & Updates</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stay Updated
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover the latest breakthroughs, innovations, and announcements from Zion Tech Group. 
                Stay informed about the future of technology and our mission to revolutionize humanity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#latest-news"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  <span>Read Latest News</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                News Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore news by category to find the information most relevant to your interests
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`px-6 py-3 rounded-xl border transition-all duration-300 ${
                    category.active
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-900/50 border-cyan-500/20 text-gray-300 hover:border-cyan-500/40 hover:bg-gray-900/70'
                  }`}
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="ml-2 text-sm opacity-70">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Latest News Section */}
        <div id="latest-news" className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Latest News & Updates
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most recent breakthroughs and announcements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <Link href={article.href} className="block">
                    <div className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
                      {/* Article Image */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                        <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-20`}></div>
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center space-x-2 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/20">
                            <article.icon className="w-4 h-4" />
                            <span>{article.category}</span>
                          </span>
                        </div>
                      </div>
                      
                      {/* Article Content */}
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(article.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="font-medium">Read More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-12"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Stay in the Loop
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest updates, breakthroughs, and insights
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team for more information about our latest innovations
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;