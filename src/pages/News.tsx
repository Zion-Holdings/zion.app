import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, Search, Filter, ExternalLink } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 15 },
    { id: 'company', name: 'Company News', count: 5 },
    { id: 'product', name: 'Product Updates', count: 4 },
    { id: 'industry', name: 'Industry Insights', count: 6 }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Launches New AI-Powered Cybersecurity Platform',
      excerpt: 'Our latest cybersecurity solution combines advanced AI algorithms with quantum-safe encryption to protect businesses from evolving threats.',
      author: 'Zion Tech Team',
      date: '2024-01-20',
      readTime: '5 min read',
      category: 'company',
      tags: ['Cybersecurity', 'AI', 'Product Launch'],
      image: '/api/placeholder/400/250',
      featured: true,
      external: false
    },
    {
      id: 2,
      title: 'Partnership Announcement: Zion Tech Group and Microsoft Azure',
      excerpt: 'Strategic partnership to deliver enterprise-grade AI solutions on Microsoft Azure cloud platform.',
      author: 'Business Development Team',
      date: '2024-01-18',
      readTime: '3 min read',
      category: 'company',
      tags: ['Partnership', 'Microsoft', 'Azure'],
      image: '/api/placeholder/400/250',
      featured: false,
      external: false
    },
    {
      id: 3,
      title: 'New Research: AI in Healthcare - 2024 Trends and Predictions',
      excerpt: 'Comprehensive analysis of how artificial intelligence is transforming healthcare delivery and patient outcomes.',
      author: 'Research Team',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'industry',
      tags: ['Healthcare', 'AI', 'Research', 'Trends'],
      image: '/api/placeholder/400/250',
      featured: false,
      external: false
    },
    {
      id: 4,
      title: 'Product Update: Enhanced AI Model Performance',
      excerpt: 'Latest updates to our AI platform deliver 40% improvement in processing speed and accuracy.',
      author: 'Engineering Team',
      date: '2024-01-12',
      readTime: '4 min read',
      category: 'product',
      tags: ['Product Update', 'AI', 'Performance'],
      image: '/api/placeholder/400/250',
      featured: false,
      external: false
    },
    {
      id: 5,
      title: 'Industry Report: Quantum Computing in Financial Services',
      excerpt: 'Analysis of quantum computing applications in financial services and risk management.',
      author: 'Industry Experts',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'industry',
      tags: ['Quantum Computing', 'Finance', 'Risk Management'],
      image: '/api/placeholder/400/250',
      featured: false,
      external: true,
      externalUrl: 'https://example.com/quantum-finance-report'
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay informed about the latest developments at Zion Tech Group, industry insights, 
            and technological breakthroughs that are shaping the future.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-black'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured News */}
      {filteredNews.filter(item => item.featured).length > 0 && (
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-cyan-400">Featured News</h2>
            {filteredNews.filter(item => item.featured).map((item) => (
              <div key={item.id} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="bg-cyan-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {item.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold leading-tight">{item.title}</h3>
                    <p className="text-lg text-gray-300">{item.excerpt}</p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">{item.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-700/50 text-cyan-400 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {item.external ? (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Read Full Article
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    ) : (
                      <Link
                        to={`/news/${item.id}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Read Full Article
                      </Link>
                    )}
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-64 lg:h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30 flex items-center justify-center">
                      <span className="text-cyan-400 text-lg">News Image</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* News Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-cyan-400">
            Latest News {selectedCategory !== 'all' && `- ${categories.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          
          {filteredNews.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No news found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.filter(item => !item.featured).map((item) => (
                <article key={item.id} className="bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-b border-gray-700 flex items-center justify-center">
                    <span className="text-cyan-400">News Image</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {item.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{item.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300 text-sm">{item.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-700/50 text-cyan-400 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {item.external ? (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        Read More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    ) : (
                      <Link
                        to={`/news/${item.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest news, product updates, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;