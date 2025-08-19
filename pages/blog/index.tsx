import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'ai-automation-trends-2025',
      title: 'AI Automation Trends for 2025',
      excerpt: 'Discover the latest trends in autonomous technology and how they\'re reshaping the future of business operations.',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'AI & Automation',
      featured: true
    },
    {
      id: 'autonomous-security-systems',
      title: 'The Future of Autonomous Security Systems',
      excerpt: 'How AI-powered security automation is revolutionizing threat detection and response in modern organizations.',
      date: 'January 12, 2025',
      readTime: '7 min read',
      category: 'Security',
      featured: false
    },
    {
      id: 'self-healing-infrastructure',
      title: 'Building Self-Healing Infrastructure',
      excerpt: 'Learn how autonomous systems can detect, diagnose, and resolve infrastructure issues without human intervention.',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'Infrastructure',
      featured: false
    },
    {
      id: 'performance-optimization-automation',
      title: 'Automated Performance Optimization',
      excerpt: 'How continuous monitoring and automated optimization can dramatically improve system performance.',
      date: 'January 8, 2025',
      readTime: '4 min read',
      category: 'Performance',
      featured: false
    },
    {
      id: 'content-generation-ai',
      title: 'AI-Powered Content Generation',
      excerpt: 'Exploring the capabilities and benefits of autonomous content creation systems.',
      date: 'January 5, 2025',
      readTime: '8 min read',
      category: 'Content',
      featured: false
    },
    {
      id: 'automation-roi-analysis',
      title: 'Measuring ROI of Automation Investments',
      excerpt: 'A comprehensive guide to calculating and maximizing returns on automation technology investments.',
      date: 'January 3, 2025',
      readTime: '9 min read',
      category: 'Business',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Automation', 'Security', 'Infrastructure', 'Performance', 'Content', 'Business'];

  return (
    <>
      <Head>
        <title>Blog — Zion Tech Group</title>
        <meta name="description" content="Insights, trends, and analysis on autonomous technology and automation from Zion Tech Group." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Blog & Insights
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Stay ahead of the curve with expert insights on autonomous technology, 
                automation trends, and the future of intelligent systems.
              </p>
            </section>

            {/* Featured Post */}
            {blogPosts.filter(post => post.featured).map(post => (
              <section key={post.id} className="mb-16">
                <div className="bg-white/10 rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 text-cyan-400">
                    <Link href={`/blog/${post.id}`} className="hover:text-cyan-300 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-lg text-white/80 mb-6 max-w-3xl">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-white/60">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </section>
            ))}

            {/* Category Filter */}
            <section className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map(category => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-lg border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition-all"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            {/* Blog Posts Grid */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => !post.featured).map(post => (
                  <article key={post.id} className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 bg-white/10 text-white/70 rounded text-xs">
                        {post.category}
                      </span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">
                      <Link href={`/blog/${post.id}`} className="hover:text-cyan-400 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-white/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">{post.date}</span>
                      
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="mt-20 text-center">
              <div className="bg-white/10 rounded-3xl p-12 border border-white/20 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-fuchsia-400">
                  Stay Updated
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Get the latest insights on autonomous technology and automation 
                  delivered directly to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                    Subscribe
                  </button>
                </div>
                
                <p className="text-sm text-white/60 mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}