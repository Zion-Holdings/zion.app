import React from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, Calendar, User, Tag, ArrowRight, ExternalLink,
  TrendingUp, Lightbulb, Rocket, Globe, Shield, Zap,
  Clock, BookOpen, Video, Podcast, FileText, Search
} from 'lucide-react';

export default function News() {
  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Quantum Computing Platform',
      excerpt: 'Our latest breakthrough combines artificial intelligence with quantum computing to solve previously unsolvable problems in cryptography, optimization, and scientific research.',
      category: 'Company News',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Quantum Computing', 'Innovation'],
      featured: true
    },
    {
      id: 2,
      title: 'Partnership with NASA: Advancing Space Technology for Mars Missions',
      excerpt: 'We\'re excited to announce our collaboration with NASA to develop autonomous navigation systems and AI-powered resource detection for future Mars exploration missions.',
      category: 'Partnerships',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '4 min read',
      image: '/api/placeholder/600/400',
      tags: ['Space Technology', 'NASA', 'Partnerships'],
      featured: true
    },
    {
      id: 3,
      title: 'New Office Opening in Silicon Valley: Expanding Our Innovation Hub',
      excerpt: 'Zion Tech Group is expanding to Silicon Valley to tap into the region\'s rich ecosystem of technology innovators and research institutions.',
      category: 'Company News',
      author: 'Jennifer Kim',
      date: '2024-01-08',
      readTime: '3 min read',
      image: '/api/placeholder/600/400',
      tags: ['Expansion', 'Silicon Valley', 'Innovation'],
      featured: true
    }
  ];

  const recentNews = [
    {
      id: 4,
      title: 'AI Ethics Framework: Our Commitment to Responsible Technology',
      excerpt: 'We\'re proud to announce our comprehensive AI ethics framework, ensuring all our artificial intelligence solutions prioritize human safety and ethical considerations.',
      category: 'AI & Ethics',
      author: 'Dr. Marcus Johnson',
      date: '2024-01-05',
      readTime: '6 min read',
      tags: ['AI Ethics', 'Responsible AI', 'Technology']
    },
    {
      id: 5,
      title: 'Quantum Internet Breakthrough: Secure Communication Networks',
      excerpt: 'Our research team has achieved a major milestone in quantum internet development, enabling ultra-secure communication networks resistant to cyber attacks.',
      category: 'Quantum Technology',
      author: 'Dr. Elena Petrov',
      date: '2024-01-03',
      readTime: '7 min read',
      tags: ['Quantum Internet', 'Cybersecurity', 'Research']
    },
    {
      id: 6,
      title: 'Micro SAAS Success: 1000+ Businesses Transformed',
      excerpt: 'Our micro SAAS solutions have now helped over 1000 businesses streamline operations and increase productivity through intelligent automation.',
      category: 'Micro SAAS',
      author: 'David Thompson',
      date: '2024-01-01',
      readTime: '4 min read',
      tags: ['Micro SAAS', 'Business Solutions', 'Success Stories']
    },
    {
      id: 7,
      title: 'Space Mining Technology: Extracting Resources from Asteroids',
      excerpt: 'We\'re developing cutting-edge space mining technology to extract valuable resources from near-Earth asteroids, opening new frontiers in resource acquisition.',
      category: 'Space Technology',
      author: 'Dr. Alex Chen',
      date: '2023-12-28',
      readTime: '8 min read',
      tags: ['Space Mining', 'Asteroids', 'Resource Extraction']
    },
    {
      id: 8,
      title: 'IT Services Expansion: Cloud Infrastructure Solutions',
      excerpt: 'Expanding our IT services portfolio with advanced cloud infrastructure solutions, helping enterprises scale their digital operations efficiently.',
      category: 'IT Services',
      author: 'Rachel Green',
      date: '2023-12-25',
      readTime: '5 min read',
      tags: ['Cloud Infrastructure', 'IT Services', 'Enterprise']
    },
    {
      id: 9,
      title: 'Metaverse Development: Building Virtual Worlds',
      excerpt: 'Entering the metaverse space with innovative virtual world development tools and platforms for businesses and creators.',
      category: 'Metaverse',
      author: 'Kevin Park',
      date: '2023-12-22',
      readTime: '6 min read',
      tags: ['Metaverse', 'Virtual Worlds', 'Development']
    }
  ];

  const industryInsights = [
    {
      title: 'The Future of AI: Trends to Watch in 2024',
      excerpt: 'Explore the key artificial intelligence trends that will shape technology and business in the coming year.',
      category: 'Industry Insights',
      readTime: '8 min read',
      tags: ['AI Trends', '2024', 'Technology']
    },
    {
      title: 'Quantum Computing: From Research to Reality',
      excerpt: 'How quantum computing is moving from theoretical research to practical applications in various industries.',
      category: 'Industry Insights',
      readTime: '10 min read',
      tags: ['Quantum Computing', 'Research', 'Applications']
    },
    {
      title: 'Space Technology: The New Frontier for Business',
      excerpt: 'Discover how space technology is creating new business opportunities and transforming industries on Earth.',
      category: 'Industry Insights',
      readTime: '7 min read',
      tags: ['Space Technology', 'Business', 'Innovation']
    }
  ];

  const categories = [
    'All News',
    'Company News',
    'Partnerships',
    'AI & Ethics',
    'Quantum Technology',
    'Space Technology',
    'Micro SAAS',
    'IT Services',
    'Metaverse',
    'Industry Insights'
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6"
          >
            Latest News & Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Stay updated with the latest developments in AI, quantum computing, space technology, and more from Zion Tech Group.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#featured" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Read Featured News</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#insights" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Industry Insights
            </a>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section id="featured" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Featured News
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most important announcements and breakthrough developments.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredNews.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <Newspaper className="w-16 h-16 text-purple-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={`/news/${article.id}`} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Recent News
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay current with our latest developments and industry updates.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {recentNews.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.date)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`/news/${article.id}`} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section id="insights" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Industry Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep analysis and thought leadership on emerging technologies and industry trends.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {industryInsights.map((insight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-xs text-gray-400">{insight.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {insight.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  <span>Read Insight</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Have questions about our news or want to learn more about our latest developments? Contact our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/about" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                About Zion Tech Group
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}