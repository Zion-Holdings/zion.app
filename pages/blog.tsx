import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Video, Users, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Globe,
  Calendar, Tag, User, ArrowUpRight
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPosts = [
    {
      title: "The Future of AI Consciousness in Enterprise",
      excerpt: "Explore how AI consciousness is revolutionizing business operations and decision-making processes across industries.",
      author: "Dr. Sarah Chen",
      authorTitle: "Chief AI Scientist",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Consciousness",
      tags: ["AI", "Consciousness", "Enterprise", "Future Tech"],
      image: "/api/placeholder/600/400",
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Computing: Breaking the Encryption Barrier",
      excerpt: "Discover how quantum computing is reshaping cybersecurity and what it means for the future of data protection.",
      author: "Prof. Michael Rodriguez",
      authorTitle: "Quantum Research Director",
      publishDate: "2024-01-12",
      readTime: "12 min read",
      category: "Quantum Computing",
      tags: ["Quantum", "Security", "Cryptography", "Cybersecurity"],
      image: "/api/placeholder/600/400",
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Space Technology: The Next Frontier for Resource Intelligence",
      excerpt: "How satellite technology and space data are transforming resource management and environmental monitoring.",
      author: "Dr. Emily Watson",
      authorTitle: "Space Technology Lead",
      publishDate: "2024-01-10",
      readTime: "10 min read",
      category: "Space Technology",
      tags: ["Space Tech", "Resources", "Environmental", "Satellite"],
      image: "/api/placeholder/600/400",
      featured: true,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const recentPosts = [
    {
      title: "Digital Transformation: A Complete Guide for 2024",
      excerpt: "Comprehensive guide to modernizing your organization with cutting-edge technology and processes.",
      author: "James Thompson",
      authorTitle: "Digital Transformation Expert",
      publishDate: "2024-01-08",
      readTime: "15 min read",
      category: "Digital Transformation",
      tags: ["Digital", "Transformation", "Enterprise", "Strategy"]
    },
    {
      title: "AI Ethics Framework: Implementing Responsible AI",
      excerpt: "Practical framework for implementing ethical AI practices in your organization.",
      author: "Dr. Lisa Park",
      authorTitle: "AI Ethics Researcher",
      publishDate: "2024-01-05",
      readTime: "11 min read",
      category: "AI Ethics",
      tags: ["AI Ethics", "Responsible AI", "Framework", "Implementation"]
    },
    {
      title: "Cloud-Native Architecture: Building for Scale",
      excerpt: "Modern cloud architecture patterns for scalable and resilient applications.",
      author: "Alex Chen",
      authorTitle: "Cloud Architect",
      publishDate: "2024-01-03",
      readTime: "13 min read",
      category: "Cloud Architecture",
      tags: ["Cloud", "Architecture", "Microservices", "Scalability"]
    },
    {
      title: "Cybersecurity Threats 2024: What You Need to Know",
      excerpt: "Comprehensive analysis of emerging cybersecurity threats and mitigation strategies.",
      author: "Sarah Johnson",
      authorTitle: "Security Analyst",
      publishDate: "2024-01-01",
      readTime: "9 min read",
      category: "Cybersecurity",
      tags: ["Cybersecurity", "Threats", "Security", "2024"]
    }
  ];

  const categories = [
    { name: "AI & Consciousness", count: 42, color: "from-blue-500 to-cyan-500" },
    { name: "Quantum Computing", count: 28, color: "from-purple-500 to-pink-500" },
    { name: "Space Technology", count: 19, color: "from-emerald-500 to-teal-500" },
    { name: "Enterprise IT", count: 35, color: "from-indigo-500 to-purple-500" },
    { name: "Cybersecurity", count: 22, color: "from-red-500 to-pink-500" },
    { name: "Cloud & DevOps", count: 31, color: "from-orange-500 to-red-500" }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Insights & Innovation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay ahead of the curve with insights from our experts on AI consciousness, 
                quantum computing, space technology, and the future of enterprise solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep insights and expert analysis on the latest technology trends
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:scale-105">
                    {/* Image Placeholder */}
                    <div className={`h-48 bg-gradient-to-br ${post.color} bg-opacity-20 flex items-center justify-center`}>
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {/* Category & Tags */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.color} bg-opacity-20 text-cyan-400`}>
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      
                      {/* Author & Date */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">{post.author}</p>
                            <p className="text-gray-400 text-xs">{post.authorTitle}</p>
                          </div>
                        </div>
                        <span className="text-gray-400 text-xs">{formatDate(post.publishDate)}</span>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Read More */}
                      <a
                        href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:translate-x-1 transition-transform duration-300"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Dive deep into specific technology areas and industry insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <a
                    href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block p-6 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {category.count} articles available
                    </p>
                    <div className="flex items-center text-cyan-400 group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our most recent insights and analysis
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800/50 text-cyan-400">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{post.author}</p>
                          <p className="text-gray-400 text-xs">{post.authorTitle}</p>
                        </div>
                      </div>
                      <span className="text-gray-400 text-xs">{formatDate(post.publishDate)}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:translate-x-1 transition-transform duration-300"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get notified about new articles, exclusive insights, and the latest 
                technology trends from our experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Contribute?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Have insights to share? We're always looking for thought leaders 
                and industry experts to contribute to our blog.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Submit Article <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Become a Contributor <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;