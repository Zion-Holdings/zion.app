import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Tag,
  ArrowRight,
  Filter
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 15 },
    { id: 'ai', name: 'AI & Machine Learning', count: 6 },
    { id: 'tech', name: 'Technology Trends', count: 4 },
    { id: 'business', name: 'Business Insights', count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2025 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.",
      category: "ai",
      author: "Kleber Santos",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "🤖",
      tags: ["AI", "Business", "Trends", "2025"],
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Micro SAAS Applications: A Complete Guide",
      excerpt: "Learn the best practices for creating and launching successful micro SAAS applications that scale with your business.",
      category: "tech",
      author: "Zion Tech Team",
      date: "2025-01-12",
      readTime: "12 min read",
      image: "🚀",
      tags: ["SAAS", "Development", "Scalability", "Guide"]
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Essential security measures and strategies to protect your business from evolving cyber threats.",
      category: "cybersecurity",
      author: "Security Team",
      date: "2025-01-10",
      readTime: "10 min read",
      image: "🔒",
      tags: ["Security", "Enterprise", "Best Practices", "Cybersecurity"]
    },
    {
      id: 4,
      title: "Digital Transformation: How to Successfully Navigate Change",
      excerpt: "A comprehensive roadmap for businesses looking to embrace digital transformation and stay competitive.",
      category: "business",
      author: "Digital Strategy Team",
      date: "2025-01-08",
      readTime: "15 min read",
      image: "💼",
      tags: ["Digital Transformation", "Strategy", "Business", "Innovation"]
    },
    {
      id: 5,
      title: "Quantum Computing: The Next Frontier in Technology",
      excerpt: "Exploring the potential of quantum computing and its implications for various industries.",
      category: "tech",
      author: "Quantum Research Team",
      date: "2025-01-05",
      readTime: "14 min read",
      image: "⚛️",
      tags: ["Quantum Computing", "Technology", "Research", "Future"]
    },
    {
      id: 6,
      title: "AI Ethics and Responsible Technology Development",
      excerpt: "Understanding the importance of ethical considerations in AI development and deployment.",
      category: "ai",
      author: "AI Ethics Team",
      date: "2025-01-03",
      readTime: "11 min read",
      image: "⚖️",
      tags: ["AI Ethics", "Responsible AI", "Technology", "Ethics"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Tech <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Insights, trends, and expert analysis on AI, technology, and digital transformation.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg'
                    : 'bg-white/20 text-zion-slate-light hover:bg-white/30 border border-white/30'
                }`}
              >
                {category.name}
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Featured Article</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                      {categories.find(c => c.id === featuredPost.category)?.name}
                    </span>
                    <span className="text-zion-slate-light text-sm">Featured</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-8xl">{featuredPost.image}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Latest Articles</h2>
          
          {regularPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                    </div>
                    
                    <div className="text-4xl mb-4">{post.image}</div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4 text-xs text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-semibold text-sm transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-lg text-zion-slate-light mb-6">
              Get the latest insights on AI, technology trends, and business transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Let's discuss how our AI-powered solutions can drive your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/services" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
