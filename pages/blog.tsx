import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  BookOpen,
  TrendingUp,
  Brain,
  Atom,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-4 h-4" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" /> },
    { id: 'enterprise', name: 'Enterprise IT', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI Consciousness: Beyond Machine Learning",
      excerpt: "Exploring how AI systems are evolving from simple pattern recognition to true consciousness and emotional intelligence.",
      category: "ai",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      views: "2.4k",
      featured: true,
      image: "/api/placeholder/600/400",
      tags: ["AI Consciousness", "Machine Learning", "Ethics"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: What's Next?",
      excerpt: "Latest developments in quantum computing and how they're reshaping the landscape of computational power.",
      category: "quantum",
      author: "Marcus Rodriguez",
      date: "2025-01-12",
      readTime: "6 min read",
      views: "1.8k",
      featured: false,
      image: "/api/placeholder/600/400",
      tags: ["Quantum Computing", "Innovation", "Technology"]
    },
    {
      id: 3,
      title: "Space Resource Mining: The Next Frontier",
      excerpt: "How space technology is revolutionizing resource extraction and opening new economic opportunities.",
      category: "space",
      author: "Dr. Elena Petrova",
      date: "2025-01-10",
      readTime: "10 min read",
      views: "1.2k",
      featured: false,
      image: "/api/placeholder/600/400",
      tags: ["Space Technology", "Mining", "Innovation"]
    },
    {
      id: 4,
      title: "Enterprise AI: Transforming Business Operations",
      excerpt: "Real-world applications of AI in enterprise environments and the ROI companies are seeing.",
      category: "enterprise",
      author: "Alex Thompson",
      date: "2025-01-08",
      readTime: "7 min read",
      views: "1.6k",
      featured: false,
      image: "/api/placeholder/600/400",
      tags: ["Enterprise AI", "Business", "Automation"]
    },
    {
      id: 5,
      title: "AI Ethics and Governance: Building Trust in AI Systems",
      excerpt: "The importance of ethical AI development and how to implement governance frameworks.",
      category: "ai",
      author: "Dr. Sarah Chen",
      date: "2025-01-05",
      readTime: "9 min read",
      views: "1.9k",
      featured: false,
      image: "/api/placeholder/600/400",
      tags: ["AI Ethics", "Governance", "Trust"]
    },
    {
      id: 6,
      title: "Quantum Security: Protecting Data in the Quantum Age",
      excerpt: "How quantum computing is changing cybersecurity and what organizations need to prepare for.",
      category: "quantum",
      author: "Marcus Rodriguez",
      date: "2025-01-03",
      readTime: "8 min read",
      views: "1.4k",
      featured: false,
      image: "/api/placeholder/600/400",
      tags: ["Quantum Security", "Cybersecurity", "Data Protection"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"
          >
            Zion Tech Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Insights, innovations, and thought leadership from the forefront of AI, quantum computing, and space technology.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
              <p className="text-gray-300">Our most popular and insightful content</p>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                      Featured
                    </span>
                    <span className="text-gray-400 text-sm">{featuredPost.category.toUpperCase()}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {featuredPost.views}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-gray-300">Featured Content</p>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Latest Articles</h2>
            <p className="text-xl text-gray-300">
              Stay updated with the latest insights and innovations
            </p>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                        {post.category.toUpperCase()}
                      </span>
                      {post.featured && (
                        <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-sm rounded-full border border-yellow-600/30">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or category filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified about new articles, industry trends, and technological breakthroughs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;