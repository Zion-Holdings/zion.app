import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FileText, Calendar, User, Clock, ArrowRight, Search, Filter, 
  Brain, Atom, Shield, Rocket, Cpu, Cloud, Database, Network,
  TrendingUp, Lightbulb, Zap, Star, Eye, Heart, MessageCircle
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categories = [
    { name: 'All Posts', count: 25, active: true },
    { name: 'AI & Machine Learning', count: 8, icon: Brain },
    { name: 'Quantum Computing', count: 6, icon: Atom },
    { name: 'Cybersecurity', count: 5, icon: Shield },
    { name: 'Space Technology', count: 4, icon: Rocket },
    { name: 'Cloud & DevOps', count: 7, icon: Cloud },
    { name: 'Data Analytics', count: 6, icon: Database },
    { name: 'Innovation', count: 9, icon: Lightbulb }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI Consciousness: What 2025 Holds",
      excerpt: "Exploring the next generation of AI systems that understand, learn, and evolve with human-like consciousness and emotional intelligence.",
      category: "AI & Machine Learning",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      views: "12.5K",
      likes: "2.1K",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: Solving Impossible Problems",
      excerpt: "How quantum computing is revolutionizing industries by solving computational challenges that were previously impossible with classical computers.",
      category: "Quantum Computing",
      author: "Prof. Michael Rodriguez",
      date: "2025-01-12",
      readTime: "10 min read",
      views: "9.8K",
      likes: "1.7K",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 3,
      title: "Space Resource Intelligence: The Next Frontier",
      excerpt: "Discovering how AI-powered space technology is enabling new frontiers in exploration, communication, and resource utilization.",
      category: "Space Technology",
      author: "Dr. Emily Watson",
      date: "2025-01-10",
      readTime: "12 min read",
      views: "8.2K",
      likes: "1.4K",
      image: "/api/placeholder/600/400",
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Zero-Trust Security Architecture: Building Impenetrable Defenses",
      excerpt: "Implementing zero-trust security principles to protect against evolving cyber threats and ensure data integrity.",
      category: "Cybersecurity",
      author: "Alex Thompson",
      date: "2025-01-08",
      readTime: "6 min read",
      views: "6.7K",
      likes: "1.2K",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Edge Computing Orchestration: The Future of Distributed Systems",
      excerpt: "How edge computing is transforming the way we process data and deliver services closer to end users.",
      category: "Cloud & DevOps",
      author: "Maria Garcia",
      date: "2025-01-06",
      readTime: "7 min read",
      views: "5.9K",
      likes: "980",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "AI-Powered Business Intelligence: Transforming Decision Making",
      excerpt: "Leveraging artificial intelligence to provide real-time insights and drive data-driven business decisions.",
      category: "Data Analytics",
      author: "David Kim",
      date: "2025-01-04",
      readTime: "9 min read",
      views: "7.3K",
      likes: "1.3K",
      image: "/api/placeholder/400/250"
    },
    {
      id: 7,
      title: "Sustainable Technology: Green Computing Solutions",
      excerpt: "Exploring eco-friendly technology practices that drive business growth while promoting environmental sustainability.",
      category: "Innovation",
      author: "Lisa Chen",
      date: "2025-01-02",
      readTime: "5 min read",
      views: "4.8K",
      likes: "850",
      image: "/api/placeholder/400/250"
    },
    {
      id: 8,
      title: "Autonomous DevOps: The Future of Software Development",
      excerpt: "How AI is automating software development processes and enabling teams to focus on innovation rather than maintenance.",
      category: "Cloud & DevOps",
      author: "James Wilson",
      date: "2024-12-30",
      readTime: "8 min read",
      views: "6.1K",
      likes: "1.1K",
      image: "/api/placeholder/400/250"
    },
    {
      id: 9,
      title: "Quantum AI Fusion: The Next Generation of Computing",
      excerpt: "Combining quantum computing with artificial intelligence to create unprecedented computational capabilities.",
      category: "Quantum Computing",
      author: "Dr. Robert Zhang",
      date: "2024-12-28",
      readTime: "11 min read",
      views: "8.9K",
      likes: "1.6K",
      image: "/api/placeholder/400/250"
    }
  ];

  const popularTags = [
    "AI", "Machine Learning", "Quantum Computing", "Cybersecurity", "Cloud Computing",
    "Data Science", "DevOps", "Innovation", "Technology Trends", "Digital Transformation",
    "Space Tech", "Edge Computing", "Blockchain", "IoT", "5G"
  ];

  return (
    <Layout 
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and technology innovation from Zion Tech Group."
      canonicalUrl="https://ziontechgroup.com/blog"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-6 py-3 mb-6"
                variants={fadeInUp}
              >
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Latest Insights</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
                variants={fadeInUp}
              >
                Zion Tech Group Blog
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                Stay ahead of the curve with expert insights on AI consciousness, quantum computing, 
                cybersecurity, and the future of technology innovation.
              </motion.p>
              
              {/* Search Bar */}
              <motion.div 
                className="max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-full pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    category.active
                      ? 'bg-cyan-500 border-cyan-500 text-white'
                      : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
                  }`}
                  variants={fadeInUp}
                >
                  {category.icon && <category.icon className="w-4 h-4" />}
                  <span>{category.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Articles</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Deep dives into the most important topics shaping the future of technology.
              </p>
            </motion.div>

            <motion.div 
              className="grid lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
                  variants={fadeInUp}
                >
                  <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 text-gray-400 text-sm">
                      <Eye className="w-4 h-4" />
                      {post.views}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {Math.floor(Math.random() * 50) + 10}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Recent Posts Grid */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Articles</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay updated with our most recent insights and analysis.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
                  variants={fadeInUp}
                >
                  <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 text-gray-400 text-sm">
                      <Eye className="w-4 h-4" />
                      {post.views}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-xs">{post.author}</span>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Popular Tags */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Popular Topics</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore trending topics and discover new areas of interest.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {popularTags.map((tag, index) => (
                <motion.button
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600 rounded-full text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
                  variants={fadeInUp}
                >
                  #{tag}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Stay Updated
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get the latest insights on AI, quantum computing, and technology innovation 
                  delivered directly to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-gray-900/50 border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                    Subscribe
                  </button>
                </div>
                
                <p className="text-gray-400 text-sm mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;