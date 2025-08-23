import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 'autonomous-systems-deep-dive',
      title: 'Autonomous Systems Deep Dive: Architecture, Implementation & Best Practices',
      excerpt: 'A comprehensive technical guide to building production-ready autonomous systems that can operate independently, make intelligent decisions, and continuously improve their performance.',
      date: 'January 17, 2025',
      readTime: '15 min read',
      category: 'Technical Deep Dive',
      featured: true
    },
    {
      id: 'ai-ethics-responsible-development',
      title: 'AI Ethics & Responsible Development: A Comprehensive Guide',
      excerpt: 'Essential guide to AI ethics, responsible development practices, bias detection, transparency, and building trustworthy AI systems.',
      date: 'January 16, 2025',
      readTime: '12 min read',
      category: 'AI Ethics'
    },
    {
      id: 'ai-automation-trends-2025',
      title: 'AI Automation Trends 2025: The Future of Autonomous Systems',
      excerpt: 'Explore the cutting-edge trends shaping the future of AI automation and autonomous technology systems in 2025 and beyond.',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'AI & Automation'
    },
    {
      id: 'autonomous-content-generation',
      title: 'Revolutionizing Content Creation with Autonomous AI Systems',
      excerpt: 'How Zion Tech Group is transforming content generation through intelligent automation and machine learning.',
      date: 'January 14, 2025',
      readTime: '6 min read',
      category: 'Content & AI',
      featured: false,
      author: {
        name: 'Marcus Rodriguez',
        role: 'Content Strategy Lead',
        avatar: '👨‍💼'
      },
      tags: ['Content', 'AI', 'Automation', 'Marketing']
    },
    {
      id: 'cloud-native-automation',
      title: 'Building Cloud-Native Automation Infrastructure',
      excerpt: 'A deep dive into our cloud-native approach to building scalable, reliable automation systems.',
      date: 'January 13, 2025',
      readTime: '10 min read',
      category: 'Infrastructure',
      featured: false,
      author: {
        name: 'Alex Thompson',
        role: 'DevOps Engineer',
        avatar: '👨‍💻'
      },
      tags: ['Cloud', 'Infrastructure', 'DevOps', 'Automation']
    },
    {
      id: 'ai-ethics-automation',
      title: 'Ethical Considerations in Autonomous AI Systems',
      excerpt: 'Exploring the ethical implications and responsible development of autonomous technology.',
      date: 'January 12, 2025',
      readTime: '7 min read',
      category: 'AI Ethics',
      featured: false,
      author: {
        name: 'Dr. Emily Watson',
        role: 'AI Ethics Specialist',
        avatar: '👩‍⚖️'
      },
      tags: ['AI Ethics', 'Responsibility', 'Governance', 'Technology']
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization in Autonomous Systems',
      excerpt: 'Best practices for optimizing performance in large-scale autonomous technology deployments.',
      date: 'January 11, 2025',
      readTime: '9 min read',
      category: 'Performance',
      featured: false,
      author: {
        name: 'David Kim',
        role: 'Performance Engineer',
        avatar: '👨‍🔧'
      },
      tags: ['Performance', 'Optimization', 'AI', 'Systems']
    },
    {
      id: 'future-of-work',
      title: 'The Future of Work: Human-AI Collaboration',
      excerpt: 'How autonomous systems are reshaping the workplace and enhancing human capabilities.',
      date: 'January 10, 2025',
      readTime: '5 min read',
      category: 'Future of Work',
      featured: false,
      author: {
        name: 'Lisa Park',
        role: 'Workplace Innovation Lead',
        avatar: '👩‍💼'
      },
      tags: ['Future of Work', 'AI', 'Collaboration', 'Innovation']
    },
    {
      id: 'edge-ai-revolution',
      title: 'The Edge AI Revolution: Processing Intelligence Locally',
      excerpt: 'Discover how edge AI is transforming industries by bringing intelligence closer to data sources.',
      date: 'January 3, 2025',
      readTime: '11 min read',
      category: 'AI & Automation',
      featured: false,
      author: {
        name: 'Dr. Sarah Chen',
        role: 'AI Research Director',
        avatar: '👩‍🔬'
      },
      tags: ['Edge AI', 'IoT', 'Real-time', 'Processing']
    },
    {
      id: 'autonomous-security',
      title: 'Autonomous Security Systems: AI-Powered Threat Detection',
      excerpt: 'How autonomous AI systems are revolutionizing cybersecurity and threat prevention.',
      date: 'January 1, 2025',
      readTime: '8 min read',
      category: 'AI Ethics',
      featured: false,
      author: {
        name: 'Mike Johnson',
        role: 'Cybersecurity Expert',
        avatar: '👨‍🔒'
      },
      tags: ['Security', 'AI', 'Cybersecurity', 'Threat Detection']
    }
  ];

  const categories = ['All', 'Technical Deep Dive', 'AI & Automation', 'Content & AI', 'Infrastructure', 'AI Ethics', 'Performance', 'Future of Work'];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Automation Insights</title>
        <meta name="description" content="Explore insights, trends, and innovations in AI automation, autonomous systems, and cutting-edge technology from Zion Tech Group." />
        <meta property="og:title" content="Blog | Zion Tech Group - AI & Automation Insights" />
        <meta property="og:description" content="Explore insights, trends, and innovations in AI automation, autonomous systems, and cutting-edge technology from Zion Tech Group." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Zion Tech Group Blog
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Insights, trends, and innovations in AI automation and autonomous technology
              </p>
            </header>

            {/* Search and Filter Section */}
            <section className="mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Search Bar */}
                  <div>
                    <label htmlFor="search" className="block text-sm font-medium text-white/80 mb-2">
                      Search Articles
                    </label>
                    <div className="relative">
                      <input
                        id="search"
                        type="text"
                        placeholder="Search by title, content, or tags..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50">
                        🔍
                      </div>
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-white/80 mb-2">
                      Filter by Category
                    </label>
                    <select
                      id="category"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                    >
                      {categories.map(category => (
                        <option key={category} value={category} className="bg-slate-800 text-white">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Search Results Count */}
                <div className="mt-4 text-center">
                  <span className="text-white/60 text-sm">
                    Showing {filteredPosts.length} of {blogPosts.length} articles
                  </span>
                </div>
              </div>
            </section>
            
            {/* Featured Post */}
            {featuredPost && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-white">Featured Article</h2>
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                      {featuredPost.category}
                    </span>
                    <span className="text-white/60 text-sm">{featuredPost.date}</span>
                    <span className="text-white/60 text-sm">•</span>
                    <span className="text-white/60 text-sm">{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors">
                    <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h3>
                  
                  <p className="text-lg text-white/80 mb-6">{featuredPost.excerpt}</p>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-lg">
                      {featuredPost.author.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{featuredPost.author.name}</div>
                      <div className="text-white/60 text-sm">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full border border-white/20">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                  >
                    Read Full Article
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </section>
            )}
            
            {/* Blog Posts Grid */}
            {regularPosts.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-8 text-white">
                  {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map(post => (
                    <article key={post.id} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-2 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-xs rounded-full border border-fuchsia-400/30">
                          {post.category}
                        </span>
                        <span className="text-white/60 text-xs">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      
                      <p className="text-white/80 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      {/* Author Info */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                          {post.author.avatar}
                        </div>
                        <div className="text-xs">
                          <div className="text-white/80">{post.author.name}</div>
                          <div className="text-white/60">{post.author.role}</div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-white/5 text-white/50 text-xs rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-xs">{post.date}</span>
                        <Link 
                          href={`/blog/${post.id}`}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          Read More →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* No Results Message */}
            {filteredPosts.length === 0 && (
              <section className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold text-white mb-4">No Articles Found</h2>
                <p className="text-white/70 mb-6">
                  Try adjusting your search terms or category filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Clear Filters
                </button>
              </section>
            )}
            
            {/* Newsletter Signup */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Stay Updated</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Get the latest insights on AI automation, autonomous systems, and technology innovation 
                  delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                  />
                  <button className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/60 text-sm mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </section>
            
            {/* Related Resources */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-white">Explore More</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/about" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">About Us</h3>
                  <p className="text-white/80 text-sm">Learn about our mission and vision for autonomous technology</p>
                </Link>
                
                <Link href="/contact" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Get in Touch</h3>
                  <p className="text-white/80 text-sm">Have questions? We&apos;d love to hear from you</p>
                </Link>
                
                <Link href="/" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Platform Demo</h3>
                  <p className="text-white/80 text-sm">Experience our autonomous technology firsthand</p>
                </Link>
              </div>
            </section>
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
