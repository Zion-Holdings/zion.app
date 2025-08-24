import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Search,
  Filter,
  Eye
} from 'lucide-react';

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI Consciousness: What 2025 Holds',
      excerpt: 'Explore the cutting-edge developments in AI consciousness research and how they\'re reshaping the technology landscape.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      category: 'AI Research',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Consciousness', 'Research', '2025']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs in Business Applications',
      excerpt: 'Discover how quantum computing is revolutionizing business processes and creating new opportunities for innovation.',
      author: 'Marcus Rodriguez',
      date: '2025-01-12',
      category: 'Quantum Computing',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      tags: ['Quantum', 'Business', 'Innovation', 'Technology']
    },
    {
      id: 3,
      title: 'Building Autonomous Systems: A Developer\'s Guide',
      excerpt: 'Learn the fundamentals of creating self-improving systems that can operate independently and evolve over time.',
      author: 'Alex Thompson',
      date: '2025-01-10',
      category: 'Autonomous Systems',
      readTime: '10 min read',
      image: '/api/placeholder/600/400',
      tags: ['Autonomous', 'Development', 'Systems', 'Guide']
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'The Impact of AI on Modern Business Operations',
      excerpt: 'How artificial intelligence is transforming traditional business models and creating new competitive advantages.',
      author: 'Jennifer Kim',
      date: '2025-01-08',
      category: 'Business AI',
      readTime: '5 min read',
      tags: ['AI', 'Business', 'Operations', 'Transformation']
    },
    {
      id: 5,
      title: 'Cybersecurity in the Age of Autonomous Systems',
      excerpt: 'Understanding the security challenges and solutions for next-generation autonomous technology.',
      author: 'David Park',
      date: '2025-01-05',
      category: 'Cybersecurity',
      readTime: '7 min read',
      tags: ['Security', 'Autonomous', 'Cybersecurity', 'Technology']
    },
    {
      id: 6,
      title: 'Sustainable Technology: Green Solutions for the Future',
      excerpt: 'Exploring eco-friendly technology approaches that benefit both business and the environment.',
      author: 'Emma Wilson',
      date: '2025-01-03',
      category: 'Sustainability',
      readTime: '6 min read',
      tags: ['Sustainability', 'Green Tech', 'Environment', 'Innovation']
    },
    {
      id: 7,
      title: 'The Evolution of Cloud Computing: What\'s Next?',
      excerpt: 'From traditional cloud services to edge computing and beyond: the future of cloud infrastructure.',
      author: 'Michael Chang',
      date: '2025-01-01',
      category: 'Cloud Computing',
      readTime: '8 min read',
      tags: ['Cloud', 'Infrastructure', 'Edge Computing', 'Future']
    }
  ];

  const categories = [
    'All Posts',
    'AI Research',
    'Quantum Computing',
    'Autonomous Systems',
    'Business AI',
    'Cybersecurity',
    'Sustainability',
    'Cloud Computing'
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Innovation</title>
        <meta name="description" content="Stay updated with the latest insights in AI consciousness, quantum computing, and autonomous systems. Expert analysis and thought leadership from Zion Tech Group." />
        <meta name="keywords" content="Zion Tech Group blog, AI insights, quantum computing news, technology blog, autonomous systems, innovation blog" />
        <meta property="og:title" content="Blog - Zion Tech Group | Technology Insights & Innovation" />
        <meta property="og:description" content="Stay updated with the latest insights in AI consciousness, quantum computing, and autonomous systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Technology Insights
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-200 max-w-3xl mx-auto mb-8"
            >
              Stay ahead of the curve with expert insights on AI consciousness, quantum computing, 
              autonomous systems, and the future of technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    category === 'All Posts'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-blue-200 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-white text-center mb-12"
            >
              Featured Posts
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Eye className="w-16 h-16 text-blue-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-blue-200 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/10 text-blue-200 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-white text-center mb-12"
            >
              Recent Posts
            </motion.h2>
            <div className="grid gap-6">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/4">
                      <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <Eye className="w-12 h-12 text-blue-400" />
                      </div>
                    </div>
                    <div className="lg:flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {post.title}
                      </h3>
                      <p className="text-blue-200 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-white/10 text-blue-200 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Stay Updated
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-200 mb-8"
            >
              Get the latest insights and updates delivered directly to your inbox.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
