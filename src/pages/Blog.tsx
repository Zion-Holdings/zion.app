
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, Search, Filter } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6 },
    { id: 'quantum', name: 'Quantum Technology', count: 4 },
    { id: 'business', name: 'Business Insights', count: 6 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Business', 'Trends', '2024'],
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'A comprehensive look at quantum computing capabilities and their practical applications in today\'s world.',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Technology', 'Innovation'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How AI is both creating new security challenges and providing innovative solutions to protect businesses.',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'AI', 'Security', 'Threats'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Building AI-Powered Customer Service: A Complete Guide',
      excerpt: 'Step-by-step guide to implementing intelligent customer service solutions that improve satisfaction and efficiency.',
      author: 'Lisa Wang',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'ai',
      tags: ['AI', 'Customer Service', 'Automation', 'Guide'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'The Rise of Autonomous Systems in Manufacturing',
      excerpt: 'Exploring how autonomous systems are revolutionizing manufacturing processes and improving productivity.',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '11 min read',
      category: 'business',
      tags: ['Manufacturing', 'Autonomous Systems', 'Industry 4.0'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Data Privacy in the AI Era: Balancing Innovation and Protection',
      excerpt: 'Understanding the critical balance between AI innovation and maintaining robust data privacy standards.',
      author: 'Emma Johnson',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'cybersecurity',
      tags: ['Data Privacy', 'AI', 'Compliance', 'Innovation'],
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Technology Blog & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay updated with the latest trends in AI, cybersecurity, quantum computing, and emerging technologies. 
            Expert insights, practical guides, and industry analysis from our team of specialists.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
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

      {/* Featured Post */}
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-cyan-400">Featured Article</h2>
            {filteredPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="bg-cyan-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold leading-tight">{post.title}</h3>
                    <p className="text-lg text-gray-300">{post.excerpt}</p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">{post.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-700/50 text-cyan-400 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Read Full Article
                    </Link>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-64 lg:h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30 flex items-center justify-center">
                      <span className="text-cyan-400 text-lg">Featured Image</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-cyan-400">
            Latest Articles {selectedCategory !== 'all' && `- ${categories.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-b border-gray-700 flex items-center justify-center">
                    <span className="text-cyan-400">Article Image</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300 text-sm">{post.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-700/50 text-cyan-400 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
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
              Stay Updated with Tech Trends
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights on AI, cybersecurity, and emerging technologies delivered to your inbox.
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

export default Blog;

