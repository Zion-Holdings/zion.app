import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Autonomous Content Generation",
      excerpt: "Discover how AI-powered systems are revolutionizing content creation and distribution across digital platforms.",
      category: "AI & Automation",
      date: "2025-01-17",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      slug: "future-autonomous-content-generation"
    },
    {
      id: 2,
      title: "Building Self-Healing Automation Systems",
      excerpt: "Learn the principles behind creating automation workflows that can detect and fix issues without human intervention.",
      category: "Technology",
      date: "2025-01-16",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      slug: "building-self-healing-automation"
    },
    {
      id: 3,
      title: "Performance Optimization in the Age of AI",
      excerpt: "Explore how artificial intelligence is transforming performance monitoring and optimization strategies.",
      category: "Performance",
      date: "2025-01-15",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      slug: "performance-optimization-ai-age"
    },
    {
      id: 4,
      title: "The Rise of Autonomous Business Operations",
      excerpt: "How companies are leveraging autonomous systems to achieve unprecedented efficiency and growth.",
      category: "Business",
      date: "2025-01-14",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      slug: "rise-autonomous-business-operations"
    },
    {
      id: 5,
      title: "Security in Autonomous Systems",
      excerpt: "Understanding the unique security challenges and solutions for autonomous technology platforms.",
      category: "Security",
      date: "2025-01-13",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      slug: "security-autonomous-systems"
    },
    {
      id: 6,
      title: "Scaling Automation: From Startup to Enterprise",
      excerpt: "A comprehensive guide to scaling automation solutions as your business grows.",
      category: "Growth",
      date: "2025-01-12",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      slug: "scaling-automation-startup-enterprise"
    }
  ];

  const categories = ["All", "AI & Automation", "Technology", "Performance", "Business", "Security", "Growth"];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - Insights on Autonomous Innovation</title>
        <meta name="description" content="Explore insights, tutorials, and thought leadership articles on autonomous technology, AI automation, and the future of intelligent systems from Zion Tech Group." />
        <meta property="og:title" content="Blog | Zion Tech Group - Insights on Autonomous Innovation" />
        <meta property="og:description" content="Explore insights, tutorials, and thought leadership articles on autonomous technology, AI automation, and the future of intelligent systems from Zion Tech Group." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
                Blog & Insights
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover the latest trends, insights, and innovations in autonomous technology, 
                AI automation, and the future of intelligent systems.
              </p>
            </header>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full border transition-all duration-200 ${
                    category === "All"
                      ? "bg-cyan-500 border-cyan-500 text-white"
                      : "border-white/20 text-white/80 hover:border-cyan-400 hover:text-cyan-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Featured Post */}
            <div className="mb-16">
              <div className="bg-white/10 rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        Featured
                      </span>
                      <span className="text-white/60 text-sm">AI & Automation</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      The Future of Autonomous Content Generation
                    </h2>
                    <p className="text-lg text-white/80 mb-6">
                      Discover how AI-powered systems are revolutionizing content creation and distribution 
                      across digital platforms, enabling businesses to scale their content operations 
                      without limits.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-white/60 text-sm">January 17, 2025</span>
                      <span className="text-white/60 text-sm">•</span>
                      <span className="text-white/60 text-sm">5 min read</span>
                    </div>
                    <a
                      href={`/blog/${blogPosts[0].slug}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                    >
                      Read Full Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-white/60 text-sm">Featured Article</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-white/10 rounded-xl overflow-hidden border border-white/20 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-200 group"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-white/60 text-xs">Article</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20">
                        {post.category}
                      </span>
                      <span className="text-white/60 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-xs">{post.date}</span>
                      <a
                        href={`/blog/${post.slug}`}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Stay Updated with Autonomous Innovation
                </h2>
                <p className="text-white/80 mb-6">
                  Get the latest insights, tutorials, and updates on autonomous technology 
                  delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}