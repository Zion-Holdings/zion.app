import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Tag, ArrowRight, Search,
  Filter, TrendingUp, Lightbulb, Rocket, Brain, Shield,
  Globe, Zap, BookOpen, MessageCircle, Share2
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Explore how our AI Consciousness Platform is revolutionizing the way machines think, learn, and interact with humans.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief AI Scientist',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI Consciousness', 'Machine Learning', 'Future Tech'],
      image: '/api/placeholder/600/400',
      featured: true,
      views: '12.5K',
      comments: 45
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Solving Previously Impossible Problems',
      excerpt: 'Discover how our quantum computing platform is tackling computational challenges that were once considered unsolvable.',
      author: 'Dr. Michael Rodriguez',
      authorRole: 'Quantum Research Lead',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Research', 'Innovation'],
      image: '/api/placeholder/600/400',
      featured: true,
      views: '8.9K',
      comments: 32
    },
    {
      id: 3,
      title: 'Space Technology Revolution: Real-time Satellite Data Processing',
      excerpt: 'Learn about our cutting-edge space data analytics platform and its applications in climate monitoring and resource management.',
      author: 'Dr. James Wilson',
      authorRole: 'Space Technology Director',
      publishDate: '2024-01-10',
      readTime: '7 min read',
      category: 'Space Technology',
      tags: ['Space Tech', 'Satellite Data', 'Climate Monitoring'],
      image: '/api/placeholder/600/400',
      featured: true,
      views: '6.7K',
      comments: 28
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Blockchain Governance: Building Trust in Decentralized Systems',
      excerpt: 'How our blockchain governance platform ensures transparency and trust in decentralized applications.',
      author: 'Alex Thompson',
      authorRole: 'Blockchain Architect',
      publishDate: '2024-01-08',
      readTime: '5 min read',
      category: 'Blockchain',
      tags: ['Blockchain', 'Governance', 'Web3'],
      image: '/api/placeholder/400/250',
      views: '4.2K',
      comments: 18
    },
    {
      id: 5,
      title: 'Edge Computing: Bringing AI to the Edge of the Network',
      excerpt: 'Explore the benefits of edge computing and how it\'s transforming real-time AI applications.',
      author: 'Lisa Park',
      authorRole: 'Edge Computing Specialist',
      publishDate: '2024-01-05',
      readTime: '6 min read',
      category: 'Edge Computing',
      tags: ['Edge Computing', 'AI', 'Real-time Processing'],
      image: '/api/placeholder/400/250',
      views: '3.8K',
      comments: 15
    },
    {
      id: 6,
      title: 'Cybersecurity in the Age of Quantum Threats',
      excerpt: 'Understanding the new security challenges and our quantum-resistant cybersecurity solutions.',
      author: 'David Kim',
      authorRole: 'Security Expert',
      publishDate: '2024-01-03',
      readTime: '7 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'Quantum Threats', 'Security'],
      image: '/api/placeholder/400/250',
      views: '5.1K',
      comments: 22
    },
    {
      id: 7,
      title: 'Metaverse Development: Building the Digital Future',
      excerpt: 'Insights into our metaverse development studio and the future of digital experiences.',
      author: 'Emma Davis',
      authorRole: 'Metaverse Developer',
      publishDate: '2024-01-01',
      readTime: '5 min read',
      category: 'Metaverse',
      tags: ['Metaverse', 'Digital Experiences', 'VR/AR'],
      image: '/api/placeholder/400/250',
      views: '3.5K',
      comments: 12
    }
  ];

  const categories = [
    { name: 'AI & Machine Learning', count: 24, icon: <Brain className="w-5 h-5" /> },
    { name: 'Quantum Computing', count: 18, icon: <Rocket className="w-5 h-5" /> },
    { name: 'Space Technology', count: 15, icon: <Globe className="w-5 h-5" /> },
    { name: 'Blockchain & Web3', count: 22, icon: <Shield className="w-5 h-5" /> },
    { name: 'Edge Computing', count: 16, icon: <Zap className="w-5 h-5" /> },
    { name: 'Cybersecurity', count: 20, icon: <Shield className="w-5 h-5" /> },
    { name: 'Metaverse', count: 12, icon: <Lightbulb className="w-5 h-5" /> },
    { name: 'Company News', count: 8, icon: <BookOpen className="w-5 h-5" /> }
  ];

  const popularTags = [
    'AI Consciousness', 'Quantum Computing', 'Space Tech', 'Blockchain',
    'Edge Computing', 'Cybersecurity', 'Machine Learning', 'Innovation',
    'Research', 'Technology', 'Future Tech', 'Digital Transformation'
  ];

  const newsletterSignup = {
    title: 'Stay Updated with Tech Insights',
    description: 'Get the latest articles, research updates, and technology insights delivered to your inbox.',
    placeholder: 'Enter your email address',
    buttonText: 'Subscribe'
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Technology Blog
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tech Insights & Updates
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Stay informed about the latest developments in AI consciousness, quantum computing, 
                space technology, and other cutting-edge innovations from Zion Tech Group.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="relative max-w-md mx-auto sm:mx-0">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                  Search
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Browse All Articles
                </button>
                <button className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200">
                  Subscribe to Newsletter
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our most popular and insightful articles on cutting-edge technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <span className="text-cyan-400 text-sm">Featured Article</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">
                            {post.author}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {post.authorRole}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right text-xs text-gray-400">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                        Read More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories and Recent Posts Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 bg-gray-900/50 border border-cyan-400/20 rounded-lg hover:border-cyan-400/40 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                            {category.icon}
                          </div>
                          <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm bg-gray-800/50 px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Popular Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full hover:bg-cyan-400/20 transition-all duration-300 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Recent Posts */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Recent Articles</h3>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
                    >
                      <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-cyan-400" />
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full">
                            {post.category}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">
                          {post.title}
                        </h4>
                        
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                          <span>{post.author}</span>
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              {post.comments}
                            </span>
                            <span className="flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              {post.views}
                            </span>
                          </div>
                          
                          <button className="px-3 py-1 border border-cyan-400/20 text-cyan-400 rounded text-xs hover:bg-cyan-400/10 transition-all duration-200">
                            Read
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-xl p-8 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {newsletterSignup.title}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {newsletterSignup.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={newsletterSignup.placeholder}
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                  {newsletterSignup.buttonText}
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Explore More?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover our comprehensive technology solutions and start your transformation journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Explore Solutions
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Get in Touch
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
