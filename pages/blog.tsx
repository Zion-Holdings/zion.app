import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  Filter,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Zap,
  Globe,
  Shield,
  Brain,
  Cloud,
  Atom,
  Rocket
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI Automation in 2025",
      excerpt: "Discover how artificial intelligence is revolutionizing business processes and what to expect in the coming year.",
      author: "AI Team",
      date: "2025-01-15",
      category: "AI & Automation",
      readTime: "8 min read",
      image: "/api/placeholder/600/400",
      slug: "ai-automation-trends-2025"
    },
    {
      id: 2,
      title: "Cloud-Native Automation: Best Practices",
      excerpt: "Learn the essential strategies for implementing cloud-native automation in your infrastructure.",
      author: "Cloud Team",
      date: "2025-01-12",
      category: "Cloud & DevOps",
      readTime: "12 min read",
      image: "/api/placeholder/600/400",
      slug: "cloud-native-automation"
    },
    {
      id: 3,
      title: "AI Ethics in Autonomous Systems",
      excerpt: "Exploring the ethical considerations and responsible development of AI-powered autonomous solutions.",
      author: "AI Ethics Team",
      date: "2025-01-10",
      category: "AI Ethics",
      readTime: "10 min read",
      image: "/api/placeholder/600/400",
      slug: "ai-ethics-automation"
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", icon: Brain, count: 45, color: "from-blue-500 to-cyan-500" },
    { name: "Cloud & DevOps", icon: Cloud, count: 32, color: "from-purple-500 to-pink-500" },
    { name: "Quantum Technology", icon: Atom, count: 28, color: "from-emerald-500 to-teal-500" },
    { name: "Space Technology", icon: Rocket, count: 22, color: "from-orange-500 to-red-500" },
    { name: "Cybersecurity", icon: Shield, count: 38, color: "from-indigo-500 to-purple-500" },
    { name: "Business Automation", icon: Zap, count: 41, color: "from-yellow-500 to-orange-500" }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Performance Optimization Strategies for Modern Web Apps",
      excerpt: "Essential techniques to boost your web application performance and user experience.",
      author: "Performance Team",
      date: "2025-01-08",
      category: "Performance",
      readTime: "6 min read",
      slug: "performance-optimization"
    },
    {
      id: 5,
      title: "The Future of Work: AI-Powered Collaboration",
      excerpt: "How AI is transforming workplace collaboration and productivity in the digital age.",
      author: "Future of Work Team",
      date: "2025-01-05",
      category: "Future of Work",
      readTime: "9 min read",
      slug: "future-of-work"
    },
    {
      id: 6,
      title: "Autonomous Content Generation: What's Next?",
      excerpt: "Exploring the latest developments in AI-powered content creation and automation.",
      author: "Content AI Team",
      date: "2025-01-03",
      category: "Content AI",
      readTime: "7 min read",
      slug: "autonomous-content-generation"
    }
  ];

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
                <BookOpen className="w-4 h-4 mr-2" />
                Zion Tech Group Blog
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Insights & Innovation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay ahead of the curve with expert insights on AI, quantum computing, 
                space technology, and the future of business automation.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
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
                Dive deep into specific technology domains and stay updated with the latest trends.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-400 mb-4">{category.count} articles</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
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
                Our most popular and insightful articles that are shaping the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70">
                      <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <div className="text-gray-400 text-sm">Featured Image</div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center">
                            <Tag className="w-4 h-4 mr-1" />
                            {post.category}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-400">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            <span className="text-sm font-medium">Read More</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

        {/* Recent Posts Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Recent Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest insights and discoveries in technology.
              </p>
            </motion.div>

            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center">
                            <Tag className="w-4 h-4 mr-1" />
                            {post.category}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-lg">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="text-sm font-medium">Read Article</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
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
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights delivered directly to your inbox. Never miss a breakthrough.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;