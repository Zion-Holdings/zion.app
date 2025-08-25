import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, Globe, Rocket, Brain, Shield } from 'lucide-react';

export default function News() {
  const newsCategories = [
    { name: 'All News', icon: Globe, active: true },
    { name: 'AI & Technology', icon: Brain, active: false },
    { name: 'Company Updates', icon: Rocket, active: false },
    { name: 'Industry Insights', icon: Globe, active: false },
    { name: 'Security & Compliance', icon: Shield, active: false }
  ];

  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI Autonomous Business Platform',
      excerpt: 'Our latest AI platform revolutionizes business operations with autonomous decision-making and predictive analytics.',
      category: 'AI & Technology',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '🚀',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: New Partnership with IBM',
      excerpt: 'Strategic collaboration to advance quantum computing research and develop quantum-safe cybersecurity solutions.',
      category: 'Company Updates',
      author: 'Dr. Sarah Chen',
      date: '2024-01-10',
      readTime: '4 min read',
      image: '🔬',
      featured: true
    }
  ];

  const latestNews = [
    {
      id: 3,
      title: 'AI-Powered Cybersecurity: Protecting Against Next-Gen Threats',
      excerpt: 'How our AI systems are detecting and preventing sophisticated cyber attacks in real-time.',
      category: 'Security & Compliance',
      author: 'Michael Rodriguez',
      date: '2024-01-08',
      readTime: '6 min read',
      image: '🛡️'
    },
    {
      id: 4,
      title: 'The Future of Work: AI and Human Collaboration',
      excerpt: 'Exploring how AI enhances human productivity and creates new opportunities in the workplace.',
      category: 'Industry Insights',
      author: 'Dr. Emily Watson',
      date: '2024-01-05',
      readTime: '7 min read',
      image: '🤝'
    },
    {
      id: 5,
      title: 'Micro-SaaS Revolution: Democratizing Enterprise Software',
      excerpt: 'How our micro-SaaS solutions are making enterprise-grade software accessible to small businesses.',
      category: 'AI & Technology',
      author: 'Alex Thompson',
      date: '2024-01-03',
      readTime: '5 min read',
      image: '💻'
    },
    {
      id: 6,
      title: 'Sustainable AI: Reducing Carbon Footprint in Technology',
      excerpt: 'Our commitment to developing energy-efficient AI solutions for a greener future.',
      category: 'Industry Insights',
      author: 'Lisa Park',
      date: '2024-01-01',
      readTime: '4 min read',
      image: '🌱'
    },
    {
      id: 7,
      title: 'Customer Success Story: Manufacturing AI Transformation',
      excerpt: 'How a leading manufacturer increased efficiency by 300% using our AI solutions.',
      category: 'Company Updates',
      author: 'Zion Tech Team',
      date: '2023-12-28',
      readTime: '6 min read',
      image: '🏭'
    },
    {
      id: 8,
      title: 'Emerging Tech Trends for 2024: What to Watch',
      excerpt: 'Our predictions for the most impactful technology trends in the coming year.',
      category: 'Industry Insights',
      author: 'Dr. James Wilson',
      date: '2023-12-25',
      readTime: '8 min read',
      image: '🔮'
    }
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed about the latest developments in AI, emerging technologies, and company updates from Zion Tech Group.
          </p>
        </div>

        {/* News Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {newsCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                    category.active
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured News */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((article) => (
              <div key={article.id} className="group">
                <div className="p-8 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <div className="text-6xl mb-4">{article.image}</div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(article.date)}
                      </div>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <Link
                    to={`/news/${article.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform transition-transform"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest News Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <div key={article.id} className="group">
                <div className="p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{article.image}</div>
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(article.date)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                    <Link
                      to={`/news/${article.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm group-hover:translate-x-1 transform transition-transform"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest news, insights, and updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}