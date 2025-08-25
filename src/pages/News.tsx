import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Calendar, 
  Tag, 
  ArrowRight, 
  Clock, 
  User,
  TrendingUp,
  Lightbulb,
  Globe,
  Zap,
  Award,
  Users
} from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Autonomous Business Platform",
      excerpt: "Our latest AI platform transforms how businesses operate with autonomous decision-making and process optimization.",
      category: "Product Launch",
      date: "2024-01-15",
      author: "Zion Tech Team",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: New Algorithm Achieves 100x Speed Improvement",
      excerpt: "Our quantum research team has developed a groundbreaking algorithm that significantly outperforms classical computing methods.",
      category: "Research & Development",
      date: "2024-01-10",
      author: "Dr. Sarah Chen",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Cybersecurity in the AI Era: New Threats and Solutions",
      excerpt: "As AI becomes more prevalent, we explore the evolving cybersecurity landscape and our innovative defense strategies.",
      category: "Cybersecurity",
      date: "2024-01-08",
      author: "Michael Rodriguez",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "The Future of Work: How AI is Reshaping Industries",
      excerpt: "Discover how artificial intelligence is transforming traditional industries and creating new opportunities for growth.",
      category: "Industry Insights",
      date: "2024-01-05",
      author: "Jennifer Kim",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Zion Tech Group Named Top AI Company by Tech Innovators Association",
      excerpt: "We're honored to be recognized for our contributions to AI innovation and technological advancement.",
      category: "Company News",
      date: "2024-01-03",
      author: "Zion Tech Team",
      readTime: "3 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Micro SAAS Revolution: Democratizing Technology for Small Businesses",
      excerpt: "Learn how our micro SAAS solutions are making enterprise-grade technology accessible to businesses of all sizes.",
      category: "Product Updates",
      date: "2024-01-01",
      author: "David Thompson",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    "All News",
    "Product Launch",
    "Research & Development",
    "Cybersecurity",
    "Industry Insights",
    "Company News",
    "Product Updates"
  ];

  const featuredArticle = newsArticles.find(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                News & Updates
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Stay informed about the latest developments in AI, technology, and our company's innovations
            </p>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-400/30">
                      {featuredArticle.category}
                    </span>
                    <span className="text-gray-400 text-sm">{featuredArticle.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredArticle.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredArticle.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-green-400" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105">
                      Read Full Article
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl border border-green-400/30 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-green-500/20 hover:text-green-400 border border-gray-700/50 hover:border-green-400/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest insights, product launches, and industry developments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-400/30">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-green-400" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <button className="p-2 text-green-400 hover:text-green-300 transition-colors duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-teal-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest news, insights, and updates delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore More</h3>
            <p className="text-gray-300">Discover our services, team, and company information</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">Our Services</h4>
                    <p className="text-gray-300 text-sm">Explore our AI and technology solutions</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/about" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">About Us</h4>
                    <p className="text-gray-300 text-sm">Learn about our company and mission</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/contact" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">Contact Us</h4>
                    <p className="text-gray-300 text-sm">Get in touch with our team</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;