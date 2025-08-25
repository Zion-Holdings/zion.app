import React from 'react';
import { Link } from 'react-router-dom';

export default function News() {
  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary Quantum AI Platform',
      excerpt: 'Our latest quantum computing platform combines AI and quantum mechanics to solve previously unsolvable problems.',
      category: 'Product Launch',
      date: '2024-08-25',
      readTime: '5 min read',
      image: '🚀',
      featured: true
    },
    {
      id: 2,
      title: 'Partnership with Microsoft Azure for Enhanced AI Services',
      excerpt: 'Strategic collaboration brings enterprise-grade AI solutions to our clients with enhanced security and scalability.',
      category: 'Partnership',
      date: '2024-08-20',
      readTime: '3 min read',
      image: '🤝',
      featured: true
    },
    {
      id: 3,
      title: 'New Cybersecurity Framework for Quantum Threats',
      excerpt: 'Introducing quantum-safe security protocols to protect against future quantum computing threats.',
      category: 'Security',
      date: '2024-08-15',
      readTime: '7 min read',
      image: '🔒',
      featured: true
    }
  ];

  const recentNews = [
    {
      id: 4,
      title: 'AI-Powered Business Intelligence Suite Update',
      excerpt: 'Enhanced analytics capabilities with real-time insights and predictive modeling.',
      category: 'Product Update',
      date: '2024-08-10',
      readTime: '4 min read',
      image: '📊'
    },
    {
      id: 5,
      title: 'Zion Tech Group Recognized as Top AI Company',
      excerpt: 'Industry recognition for our innovative AI solutions and commitment to ethical AI development.',
      category: 'Awards',
      date: '2024-08-05',
      readTime: '2 min read',
      image: '🏆'
    },
    {
      id: 6,
      title: 'New Office Opening in Silicon Valley',
      excerpt: 'Expanding our presence to better serve West Coast clients and tap into local tech talent.',
      category: 'Company',
      date: '2024-07-30',
      readTime: '3 min read',
      image: '🏢'
    },
    {
      id: 7,
      title: 'Cybersecurity Workshop Series Launch',
      excerpt: 'Free educational workshops to help businesses understand and implement cybersecurity best practices.',
      category: 'Events',
      date: '2024-07-25',
      readTime: '6 min read',
      image: '🎓'
    },
    {
      id: 8,
      title: 'AI Ethics Guidelines Publication',
      excerpt: 'Our comprehensive framework for responsible AI development and deployment.',
      category: 'Research',
      date: '2024-07-20',
      readTime: '8 min read',
      image: '📋'
    },
    {
      id: 9,
      title: 'Client Success Story: Manufacturing AI Implementation',
      excerpt: 'How we helped a major manufacturer increase efficiency by 40% using AI-powered automation.',
      category: 'Case Study',
      date: '2024-07-15',
      readTime: '5 min read',
      image: '🏭'
    }
  ];

  const categories = [
    'All News',
    'Product Launch',
    'Partnership',
    'Security',
    'Company',
    'Events',
    'Research',
    'Case Study',
    'Awards'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay informed about our latest innovations, partnerships, and industry insights. Discover how we're shaping the future of AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Subscribe to Newsletter
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300">
              RSS Feed
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured News */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most important announcements and breakthroughs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredNews.map((news) => (
              <div key={news.id} className="group">
                <div className="p-6 rounded-2xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="text-6xl mb-4">{news.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                      {news.category}
                    </span>
                    <span className="text-gray-400 text-sm">{news.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{news.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{news.date}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent News */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Recent updates and industry insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentNews.map((news) => (
              <div key={news.id} className="group">
                <div className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{news.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium">
                      {news.category}
                    </span>
                    <span className="text-gray-400 text-sm">{news.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3 text-sm">{news.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{news.date}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest news, insights, and updates delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Press Kit */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Press & Media
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Resources for journalists and media professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Press Releases',
                description: 'Official announcements and company news',
                icon: '📰',
                action: 'View Releases'
              },
              {
                title: 'Media Kit',
                description: 'Company logos, images, and brand guidelines',
                icon: '🎨',
                action: 'Download Kit'
              },
              {
                title: 'Contact Media',
                description: 'Get in touch with our PR team',
                icon: '📞',
                action: 'Contact Us'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}