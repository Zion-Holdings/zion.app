import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, ArrowRight, Search, 
  Filter, Tag, TrendingUp, BookOpen, Lightbulb,
  Brain, Atom, Rocket, Microscope, Cpu
} from 'lucide-react';
import UltraFuturisticNavigation2030 from '../components/layout/UltraFuturisticNavigation2030';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';
import UltraFuturisticBackground2030 from '../components/backgrounds/UltraFuturisticBackground2030';

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: Beyond Traditional Machine Learning',
      excerpt: 'Explore how Zion Tech Group is pioneering the next generation of artificial intelligence that goes beyond pattern recognition to achieve true consciousness and emotional intelligence.',
      author: 'Dr. Sarah Chen',
      date: '2029-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-consciousness.jpg',
      tags: ['AI Consciousness', 'Machine Learning', 'Future Tech'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Revolution: Breaking the Classical Barrier',
      excerpt: 'Discover how quantum computing is transforming industries from finance to cybersecurity, and how Zion Tech Group is leading this revolution.',
      author: 'Marcus Rodriguez',
      date: '2029-01-10',
      readTime: '12 min read',
      category: 'Quantum Computing',
      image: '/blog/quantum-computing.jpg',
      tags: ['Quantum Computing', 'Cybersecurity', 'Financial Modeling'],
      featured: true
    },
    {
      id: 3,
      title: 'Space Mining Automation: The Next Frontier of Resource Extraction',
      excerpt: 'Learn about our autonomous space mining systems and how they\'re revolutionizing resource extraction beyond Earth.',
      author: 'Dr. Elena Petrova',
      date: '2029-01-05',
      readTime: '10 min read',
      category: 'Space Technology',
      image: '/blog/space-mining.jpg',
      tags: ['Space Mining', 'Automation', 'Resource Extraction'],
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'DNA Computing: The Biological Revolution in Information Processing',
      excerpt: 'How biological molecules are becoming the next generation of computing technology.',
      author: 'Dr. Elena Petrova',
      date: '2028-12-28',
      readTime: '6 min read',
      category: 'Biotechnology',
      image: '/blog/dna-computing.jpg',
      tags: ['DNA Computing', 'Biotechnology', 'Computing']
    },
    {
      id: 5,
      title: 'Autonomous DevOps: The Future of Software Development',
      excerpt: 'How AI is transforming the way we build, deploy, and maintain software systems.',
      author: 'Kleber Santos',
      date: '2028-12-20',
      readTime: '7 min read',
      category: 'Enterprise IT',
      image: '/blog/autonomous-devops.jpg',
      tags: ['DevOps', 'Automation', 'AI']
    },
    {
      id: 6,
      title: 'Metaverse Platforms: Building the Digital Universe',
      excerpt: 'Exploring the technology behind immersive virtual worlds and digital experiences.',
      author: 'Marcus Rodriguez',
      date: '2028-12-15',
      readTime: '9 min read',
      category: 'Space Technology',
      image: '/blog/metaverse.jpg',
      tags: ['Metaverse', 'Virtual Reality', 'Digital Experience']
    },
    {
      id: 7,
      title: 'Predictive Health Analytics: AI in Healthcare',
      excerpt: 'How machine learning is revolutionizing disease prevention and personalized medicine.',
      author: 'Dr. Sarah Chen',
      date: '2028-12-10',
      readTime: '11 min read',
      category: 'Biotechnology',
      image: '/blog/health-analytics.jpg',
      tags: ['Healthcare', 'AI', 'Predictive Analytics']
    },
    {
      id: 8,
      title: 'Quantum Security: The Unbreakable Encryption',
      excerpt: 'Understanding quantum cryptography and its implications for cybersecurity.',
      author: 'Dr. Elena Petrova',
      date: '2028-12-05',
      readTime: '8 min read',
      category: 'Quantum Computing',
      image: '/blog/quantum-security.jpg',
      tags: ['Quantum Security', 'Cryptography', 'Cybersecurity']
    },
    {
      id: 9,
      title: 'AI Creativity Orchestrator: The Future of Content Creation',
      excerpt: 'How AI is becoming a creative partner in art, music, and content generation.',
      author: 'Marcus Rodriguez',
      date: '2028-11-30',
      readTime: '10 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-creativity.jpg',
      tags: ['AI Creativity', 'Content Creation', 'Art']
    }
  ];

  const categories = [
    { name: 'AI & Machine Learning', icon: Brain, count: 15, color: 'from-violet-500 to-purple-500' },
    { name: 'Quantum Computing', icon: Atom, count: 12, color: 'from-indigo-500 to-blue-500' },
    { name: 'Space Technology', icon: Rocket, count: 8, color: 'from-teal-500 to-emerald-500' },
    { name: 'Biotechnology', icon: Microscope, count: 10, color: 'from-green-500 to-emerald-500' },
    { name: 'Enterprise IT', icon: Cpu, count: 14, color: 'from-blue-500 to-cyan-500' }
  ];

  const popularTags = [
    'AI Consciousness', 'Quantum Computing', 'Space Mining', 'DNA Computing',
    'Machine Learning', 'Cybersecurity', 'Automation', 'Innovation',
    'Future Tech', 'Research', 'Development', 'Technology'
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <UltraFuturisticBackground2030>
      <Head>
        <title>Zion Tech Group Blog - Latest Insights on AI, Quantum Computing & Future Technology</title>
        <meta name="description" content="Stay updated with the latest insights on AI consciousness, quantum computing, space technology, and biotechnology from Zion Tech Group's expert team." />
        <meta name="keywords" content="Zion Tech Group blog, AI technology blog, quantum computing blog, space technology blog, biotechnology blog, technology insights" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group Blog - Latest Technology Insights" />
        <meta property="og:description" content="Stay updated with the latest insights on AI consciousness, quantum computing, and future technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group Blog - Latest Technology Insights" />
        <meta name="twitter:description" content="Stay updated with the latest insights on future technology." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      <UltraFuturisticNavigation2030 />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              Insights, innovations, and thought leadership from the forefront of revolutionary technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Articles
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep insights into the technologies that are shaping our future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-full h-48 bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Recent Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="sticky top-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors">
                        <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {category.name}
                          </div>
                          <div className="text-sm text-gray-400">{category.count} articles</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Popular Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer transition-colors"
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-white mb-6">Recent Articles</h3>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm">
                      <div className="w-full h-40 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <Lightbulb className="w-12 h-12 text-white" />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-400">
                            {formatDate(post.date)}
                          </div>
                          
                          <div className="flex items-center space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            <span className="text-sm font-medium">Read More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stay Updated
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights on revolutionary technology delivered to your inbox.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="flex-1 px-6 py-4 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2030 />
    </UltraFuturisticBackground2030>
  );
}
