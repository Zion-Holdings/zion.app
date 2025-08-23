import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  TrendingUp,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Star,
  Eye,
  Heart,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: Eye, color: 'from-cyan-400 to-purple-600' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-400 to-pink-600' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-blue-400 to-cyan-600' },
    { id: 'space-tech', name: 'Space Technology', icon: Rocket, color: 'from-indigo-400 to-purple-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-400 to-orange-600' },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, color: 'from-emerald-400 to-teal-600' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-yellow-400 to-orange-600' }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI Consciousness: Beyond Traditional Machine Learning",
      excerpt: "Explore how AI consciousness is evolving beyond traditional machine learning paradigms, creating systems that can think, feel, and reason like humans.",
      category: "ai-ml",
      author: "Kleber Santos",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "/api/placeholder/600/400",
      tags: ["AI Consciousness", "Machine Learning", "Future Tech"],
      featured: true,
      views: 15420,
      likes: 892,
      comments: 156
    },
    {
      id: 2,
      title: "Quantum Computing Revolution: Breaking the Classical Barrier",
      excerpt: "Discover how quantum computing is revolutionizing industries and solving problems that were previously impossible for classical computers.",
      category: "quantum",
      author: "Quantum Research Team",
      date: "2025-01-12",
      readTime: "12 min read",
      image: "/api/placeholder/600/400",
      tags: ["Quantum Computing", "Technology", "Innovation"],
      featured: true,
      views: 12850,
      likes: 756,
      comments: 134
    },
    {
      id: 3,
      title: "Space Resource Intelligence: The Next Frontier of Exploration",
      excerpt: "Learn about our cutting-edge space technology platforms that are enabling the next generation of space exploration and resource discovery.",
      category: "space-tech",
      author: "Space Technology Division",
      date: "2025-01-10",
      readTime: "10 min read",
      image: "/api/placeholder/600/400",
      tags: ["Space Technology", "Resource Intelligence", "Exploration"],
      featured: true,
      views: 9870,
      likes: 634,
      comments: 98
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Autonomous Business Intelligence: The Future of Decision Making",
      excerpt: "How autonomous AI systems are transforming business intelligence and decision-making processes across industries.",
      category: "business",
      author: "AI Business Team",
      date: "2025-01-08",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["Business Intelligence", "AI", "Automation"],
      views: 6540,
      likes: 423,
      comments: 67
    },
    {
      id: 5,
      title: "Quantum Cybersecurity: Protecting Against Future Threats",
      excerpt: "Understanding quantum-resistant cryptography and how it's preparing us for the post-quantum era of cybersecurity.",
      category: "cybersecurity",
      author: "Security Research Team",
      date: "2025-01-06",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      tags: ["Cybersecurity", "Quantum", "Encryption"],
      views: 5430,
      likes: 387,
      comments: 89
    },
    {
      id: 6,
      title: "Edge Computing Orchestration: The Future of Distributed Systems",
      excerpt: "How edge computing orchestration is enabling real-time processing and decision-making at the network edge.",
      category: "cloud",
      author: "Cloud Infrastructure Team",
      date: "2025-01-04",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      tags: ["Edge Computing", "Cloud", "Orchestration"],
      views: 4320,
      likes: 298,
      comments: 45
    },
    {
      id: 7,
      title: "AI Ethics and Governance: Building Responsible AI Systems",
      excerpt: "The importance of ethical AI development and governance frameworks in creating responsible artificial intelligence.",
      category: "ai-ml",
      author: "AI Ethics Team",
      date: "2025-01-02",
      readTime: "11 min read",
      image: "/api/placeholder/400/250",
      tags: ["AI Ethics", "Governance", "Responsible AI"],
      views: 3980,
      likes: 267,
      comments: 78
    },
    {
      id: 8,
      title: "Quantum Neural Networks: Merging Quantum and AI",
      excerpt: "Exploring the intersection of quantum computing and neural networks for unprecedented AI capabilities.",
      category: "quantum",
      author: "Quantum AI Team",
      date: "2024-12-30",
      readTime: "13 min read",
      image: "/api/placeholder/400/250",
      tags: ["Quantum AI", "Neural Networks", "AI"],
      views: 3650,
      likes: 234,
      comments: 56
    },
    {
      id: 9,
      title: "Space Mining Automation: The Future of Resource Extraction",
      excerpt: "How autonomous systems are revolutionizing space mining and resource extraction operations.",
      category: "space-tech",
      author: "Space Mining Team",
      date: "2024-12-28",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      tags: ["Space Mining", "Automation", "Resources"],
      views: 3120,
      likes: 198,
      comments: 34
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Eye;
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-cyan-400 to-purple-600';
  };

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Blog
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Insights, innovations, and expert perspectives on AI consciousness, 
                quantum computing, space technology, and the future of business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                        : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-cyan-400/50'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Deep insights into the latest developments in AI consciousness, 
                quantum computing, and space technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                      {/* Image */}
                      <div className="relative h-48 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="absolute top-4 left-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(post.category)} text-white`}>
                            <Tag className="w-3 h-3 mr-1" />
                            {categories.find(cat => cat.id === post.category)?.name}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm text-gray-400">{post.author}</span>
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Stay updated with our latest insights and discoveries in cutting-edge technology.
              </p>
            </motion.div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                        {/* Image */}
                        <div className="relative h-48 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 group-hover:scale-110 transition-transform duration-500"></div>
                          <div className="absolute top-4 left-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(post.category)} text-white`}>
                              <Tag className="w-3 h-3 mr-1" />
                              {categories.find(cat => cat.id === post.category)?.name}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-gray-300 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                                <User className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm text-gray-400">{post.author}</span>
                            </div>

                            <div className="flex items-center space-x-3 text-sm text-gray-400">
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{post.views.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Heart className="w-4 h-4" />
                                <span>{post.likes.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-3xl border border-cyan-400/20"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI consciousness, quantum computing, and space technology 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default BlogPage;