import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI: Autonomous Systems in 2025',
      excerpt: 'Explore how autonomous AI systems are revolutionizing industries and transforming business operations in the coming year.',
      category: 'AI & Automation',
      author: 'Marcus Rodriguez',
      date: '2025-01-15',
      readTime: '5 min read',
      image: '🤖',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Trends: Protecting Your Digital Assets',
      excerpt: 'Discover the latest cybersecurity threats and learn how to protect your organization with advanced security solutions.',
      category: 'Cybersecurity',
      author: 'Lisa Park',
      date: '2025-01-12',
      readTime: '4 min read',
      image: '🔒'
    },
    {
      id: 3,
      title: '5G Enterprise Solutions: Transforming Business Connectivity',
      excerpt: 'Learn how 5G technology is enabling new business models and revolutionizing enterprise connectivity.',
      category: 'Infrastructure',
      author: 'Alex Thompson',
      date: '2025-01-10',
      readTime: '6 min read',
      image: '📡'
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Comprehensive Guide',
      excerpt: 'Navigate the complexities of cloud migration with our step-by-step guide to successful digital transformation.',
      category: 'Infrastructure',
      author: 'Sarah Chen',
      date: '2025-01-08',
      readTime: '8 min read',
      image: '☁️'
    },
    {
      id: 5,
      title: 'Machine Learning in Healthcare: Revolutionizing Patient Care',
      excerpt: 'Explore how AI and machine learning are transforming healthcare delivery and improving patient outcomes.',
      category: 'AI & Automation',
      author: 'Dr. Emily Watson',
      date: '2025-01-05',
      readTime: '7 min read',
      image: '🏥'
    },
    {
      id: 6,
      title: 'Building Scalable IT Infrastructure for Growth',
      excerpt: 'Learn the key principles for designing and implementing scalable IT infrastructure that grows with your business.',
      category: 'Infrastructure',
      author: 'Alex Thompson',
      date: '2025-01-03',
      readTime: '6 min read',
      image: '🏗️'
    }
  ];

  const categories = [
    { name: 'All Posts', count: blogPosts.length, active: true },
    { name: 'AI & Automation', count: 2, active: false },
    { name: 'Cybersecurity', count: 1, active: false },
    { name: 'Infrastructure', count: 3, active: false },
    { name: 'Industry Insights', count: 0, active: false }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and innovations in AI, cybersecurity, and technology from Zion Tech Group experts." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, industry trends, and cutting-edge technology updates from our team of specialists.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          {blogPosts.filter(post => post.featured).map(post => (
            <div key={post.id} className="p-8 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                      {post.category}
                    </span>
                    <span className="text-white/60 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{post.title}</h2>
                  <p className="text-white/80 text-lg mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-white/70">By {post.author}</span>
                    <span className="text-white/50">•</span>
                    <span className="text-white/70">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">{post.image}</div>
                  <div className="text-white/60 text-sm">Featured Article</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-cyan-500 text-white'
                    : 'bg-black/40 text-white/70 hover:bg-black/60 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map(post => (
              <article key={post.id} className="p-6 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{post.image}</div>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-white/50 text-xs">•</span>
                    <span className="text-white/50 text-xs">{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                  <span>By {post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-16">
          <div className="text-center p-8 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get the latest insights and updates delivered directly to your inbox. Never miss an important article or industry trend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50"
              />
              <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/60 text-sm mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-white/70 text-sm mb-4">
                Latest developments in artificial intelligence and machine learning technologies.
              </p>
              <Link 
                href="/blog?category=ai-automation"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                Explore Articles →
              </Link>
            </div>

            <div className="text-center p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
              <p className="text-white/70 text-sm mb-4">
                Security best practices, threat intelligence, and protection strategies.
              </p>
              <Link 
                href="/blog?category=cybersecurity"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                Explore Articles →
              </Link>
            </div>

            <div className="text-center p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Infrastructure</h3>
              <p className="text-white/70 text-sm mb-4">
                Cloud solutions, network architecture, and infrastructure optimization.
              </p>
              <Link 
                href="/blog?category=infrastructure"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                Explore Articles →
              </Link>
            </div>

            <div className="text-center p-6 rounded-xl bg-black/40 border border-cyan-500/20">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-white/70 text-sm mb-4">
                Emerging technologies and innovative solutions for modern businesses.
              </p>
              <Link 
                href="/blog?category=innovation"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                Explore Articles →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Story to Share?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            We're always looking for guest contributors and industry experts to share their insights and experiences with our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
            >
              Submit an Article
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
            >
              Become a Contributor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
