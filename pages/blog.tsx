import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2025 Trends and Predictions',
      excerpt: 'Explore the cutting-edge AI technologies that will transform business operations in 2025 and beyond.',
      author: 'Dr. Sarah Chen',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/600/400',
      slug: 'future-of-ai-enterprise-2025'
    },
    {
      id: 2,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How artificial intelligence is both creating new security challenges and providing innovative defense mechanisms.',
      author: 'Dr. James Kim',
      date: '2024-12-10',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400',
      slug: 'cybersecurity-ai-age'
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies for Digital Transformation',
      excerpt: 'Best practices and proven strategies for successful cloud migration and digital transformation initiatives.',
      author: 'Marcus Rodriguez',
      date: '2024-12-05',
      readTime: '10 min read',
      category: 'Cloud & Infrastructure',
      image: '/api/placeholder/600/400',
      slug: 'cloud-migration-digital-transformation'
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Building Scalable Machine Learning Pipelines',
      excerpt: 'A comprehensive guide to designing and implementing ML pipelines that scale with your business needs.',
      author: 'Dr. Sarah Chen',
      date: '2024-11-30',
      readTime: '12 min read',
      category: 'AI & Machine Learning',
      slug: 'scalable-ml-pipelines'
    },
    {
      id: 5,
      title: 'DevOps Best Practices for AI Teams',
      excerpt: 'How to implement DevOps principles in AI development teams for faster, more reliable deployments.',
      author: 'Marcus Rodriguez',
      date: '2024-11-25',
      readTime: '7 min read',
      category: 'DevOps',
      slug: 'devops-ai-teams'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing in AI Applications',
      excerpt: 'Exploring how edge computing is revolutionizing AI deployment and enabling real-time intelligence.',
      author: 'Lisa Thompson',
      date: '2024-11-20',
      readTime: '9 min read',
      category: 'Edge Computing',
      slug: 'edge-computing-ai-applications'
    },
    {
      id: 7,
      title: 'Data Privacy and AI: Balancing Innovation with Compliance',
      excerpt: 'Navigating the complex landscape of data privacy regulations while developing AI solutions.',
      author: 'Dr. James Kim',
      date: '2024-11-15',
      readTime: '11 min read',
      category: 'AI Ethics',
      slug: 'data-privacy-ai-compliance'
    },
    {
      id: 8,
      title: 'Natural Language Processing: From Theory to Production',
      excerpt: 'Practical insights on deploying NLP solutions in production environments.',
      author: 'Dr. Sarah Chen',
      date: '2024-11-10',
      readTime: '14 min read',
      category: 'AI & Machine Learning',
      slug: 'nlp-theory-production'
    },
    {
      id: 9,
      title: 'Building Resilient Cloud Infrastructure',
      excerpt: 'Strategies for creating cloud infrastructure that can withstand failures and scale automatically.',
      author: 'Marcus Rodriguez',
      date: '2024-11-05',
      readTime: '8 min read',
      category: 'Cloud & Infrastructure',
      slug: 'resilient-cloud-infrastructure'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud & Infrastructure',
    'DevOps',
    'Edge Computing',
    'AI Ethics',
    'Case Studies'
  ];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts." />
        <meta property="og:title" content="Blog | Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI, cybersecurity, and technology trends from industry experts." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative container mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group Blog
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Insights, trends, and expert perspectives on AI, cybersecurity, cloud computing, and the future of technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Featured Articles</h2>
              <p className="text-xl text-white/70 max-w-2xl">
                Our most popular and insightful articles on cutting-edge technology topics
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📚</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-white/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Browse by Category</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Find articles on specific topics that interest you most
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 border border-white/20 hover:border-cyan-400/50"
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Recent Articles</h2>
              <p className="text-xl text-white/70 max-w-2xl">
                Stay current with our latest insights and analysis
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mb-4 line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    Read More <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Stay Updated</h2>
              <p className="text-xl text-white/70 mb-8">
                Get the latest insights, trends, and expert perspectives delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-white/50 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
