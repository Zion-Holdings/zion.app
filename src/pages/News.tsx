import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Clock,
  Search,
  Filter
} from 'lucide-react';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform",
      excerpt: "Our new AI-driven cybersecurity solution provides real-time threat detection and automated response capabilities, setting new industry standards for enterprise security.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Product Launch",
      readTime: "5 min read",
      image: "AI Security"
    },
    {
      id: 2,
      title: "Partnership with Microsoft Azure Expands Cloud AI Capabilities",
      excerpt: "Strategic partnership announcement brings enhanced cloud AI services and improved scalability for our enterprise clients.",
      author: "Michael Chen",
      date: "2024-01-10",
      category: "Partnerships",
      readTime: "3 min read",
      image: "Microsoft Partnership"
    },
    {
      id: 3,
      title: "Zion Tech Group Recognized as Top AI Company in Delaware",
      excerpt: "Local business award recognizes our contributions to AI innovation and economic growth in the region.",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      category: "Awards",
      readTime: "2 min read",
      image: "Award Recognition"
    },
    {
      id: 4,
      title: "New Quantum Computing Research Initiative Announced",
      excerpt: "Launch of groundbreaking quantum computing research program in collaboration with leading universities.",
      author: "Dr. James Wilson",
      date: "2023-12-28",
      category: "Research",
      readTime: "7 min read",
      image: "Quantum Research"
    },
    {
      id: 5,
      title: "Healthcare AI Solutions Show 40% Improvement in Patient Outcomes",
      excerpt: "Case study results demonstrate significant improvements in healthcare delivery through our AI-powered solutions.",
      author: "Dr. Lisa Thompson",
      date: "2023-12-20",
      category: "Case Studies",
      readTime: "6 min read",
      image: "Healthcare AI"
    },
    {
      id: 6,
      title: "Zion Tech Group Expands to New Office in Middletown",
      excerpt: "Company growth leads to expansion of headquarters to accommodate growing team and new technology initiatives.",
      author: "David Park",
      date: "2023-12-15",
      category: "Company News",
      readTime: "4 min read",
      image: "Office Expansion"
    }
  ];

  const categories = [
    "All News",
    "Product Launch",
    "Partnerships", 
    "Awards",
    "Research",
    "Case Studies",
    "Company News"
  ];

  const featuredArticle = newsArticles[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay updated with the latest news, product launches, partnerships, and innovations from Zion Tech Group
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Article
            </h2>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredArticle.readTime}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(featuredArticle.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                    Read Full Article
                  </button>
                </div>
              </div>
              
              <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
                <span className="text-cyan-400 text-lg font-medium">{featuredArticle.image}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with our latest updates and announcements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <div
                key={article.id}
                className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-full h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30 mb-4">
                  <span className="text-cyan-400 text-sm font-medium">{article.image}</span>
                </div>
                
                <div className="flex items-center space-x-4 mb-3">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                    {article.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest news, insights, and technology updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}