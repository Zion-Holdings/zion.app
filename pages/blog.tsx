import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  Filter,
  Tag,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Rocket,
  Brain
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPost = {
    title: "The Future of AI Consciousness: Bridging Human and Machine Intelligence",
    excerpt: "Explore how Zion Tech Group is pioneering the development of AI systems that not only process information but truly understand and evolve alongside human consciousness.",
    author: "Dr. Kleber Santos",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "AI & Consciousness",
    image: "/api/placeholder/800/400",
    featured: true
  };

  const blogPosts = [
    {
      title: "Quantum Computing Breakthroughs: What's Next in 2025",
      excerpt: "Discover the latest developments in quantum computing and how they're reshaping the landscape of computational power.",
      author: "Dr. Sarah Chen",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Quantum Computing",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Space Technology Revolution: Mining Asteroids for Rare Earth Elements",
      excerpt: "Learn about our innovative approach to space resource intelligence and the future of sustainable resource extraction.",
      author: "Marcus Rodriguez",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Space Technology",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Cybersecurity in the Age of Quantum Threats",
      excerpt: "Understanding the new security challenges posed by quantum computing and how to prepare for them.",
      author: "Dr. Kleber Santos",
      date: "January 8, 2025",
      readTime: "5 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Building Autonomous AI Ecosystems: Lessons from Nature",
      excerpt: "How biological systems inspire the development of self-organizing AI networks that can adapt and evolve.",
      author: "Dr. Sarah Chen",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "AI & Consciousness",
      image: "/api/placeholder/400/250"
    },
    {
      title: "The Rise of Edge Computing: Bringing AI Closer to Users",
      excerpt: "Exploring the benefits and challenges of deploying AI systems at the network edge for faster, more responsive applications.",
      author: "Marcus Rodriguez",
      date: "January 3, 2025",
      readTime: "6 min read",
      category: "Cloud Infrastructure",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Ethical AI Development: Balancing Innovation with Responsibility",
      excerpt: "Our framework for developing AI systems that are not only powerful but also ethical and beneficial to humanity.",
      author: "Dr. Kleber Santos",
      date: "December 30, 2024",
      readTime: "8 min read",
      category: "AI Ethics",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    { name: "All", count: blogPosts.length + 1, active: true },
    { name: "AI & Consciousness", count: 2, active: false },
    { name: "Quantum Computing", count: 1, active: false },
    { name: "Space Technology", count: 1, active: false },
    { name: "Cybersecurity", count: 1, active: false },
    { name: "Cloud Infrastructure", count: 1, active: false },
    { name: "AI Ethics", count: 1, active: false }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Zion Tech <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Insights, updates, and thought leadership on the cutting edge of technology, 
                AI consciousness, and quantum computing innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      category.active
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Featured Article
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <a
                    href={`/blog/${featuredPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
                
                <div className="relative">
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <p className="text-cyan-400 font-medium">AI Consciousness</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Stay updated with the latest insights and breakthroughs in technology
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-700 text-cyan-400 text-xs font-medium">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    
                    <a
                      href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
            
            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-12"
            >
              <button className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <TrendingUp className="w-5 h-5 mr-2" />
                Load More Articles
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/30"
            >
              <Lightbulb className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Stay Updated with the Latest Insights
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Get notified about new articles, technology breakthroughs, and industry insights 
                delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;