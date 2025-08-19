import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Autonomous AI Systems",
      excerpt: "Exploring how autonomous AI systems are reshaping industries and what this means for the future of technology.",
      author: "Zion AI Team",
      date: "2025-01-17",
      readTime: "5 min read",
      category: "AI & Automation",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Building Resilient Cloud Infrastructure",
      excerpt: "Learn about our approach to creating cloud infrastructure that can withstand any challenge and maintain 99.9% uptime.",
      author: "Infrastructure Team",
      date: "2025-01-15",
      readTime: "7 min read",
      category: "Infrastructure",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "The Evolution of Content Generation",
      excerpt: "How AI-powered content generation is transforming the way we create and distribute information across digital platforms.",
      author: "Content Team",
      date: "2025-01-13",
      readTime: "6 min read",
      category: "Content & SEO",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Security in the Age of Autonomous Systems",
      excerpt: "Understanding the security challenges and solutions for autonomous technology systems in today's digital landscape.",
      author: "Security Team",
      date: "2025-01-11",
      readTime: "8 min read",
      category: "Security",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Performance Optimization Strategies",
      excerpt: "Discover the techniques and tools we use to optimize performance across our entire technology stack.",
      author: "Performance Team",
      date: "2025-01-09",
      readTime: "4 min read",
      category: "Performance",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "The Impact of Automation on Development",
      excerpt: "How automation is changing the software development landscape and what developers need to know.",
      author: "Development Team",
      date: "2025-01-07",
      readTime: "9 min read",
      category: "Development",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "AI & Automation", "Infrastructure", "Content & SEO", "Security", "Performance", "Development"];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - Insights & Innovation</title>
        <meta name="description" content="Explore insights, innovations, and thought leadership articles from Zion Tech Group on autonomous technology, AI, and the future of digital innovation." />
        <meta property="og:title" content="Blog | Zion Tech Group - Insights & Innovation" />
        <meta property="og:description" content="Explore insights, innovations, and thought leadership articles from Zion Tech Group on autonomous technology, AI, and the future of digital innovation." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <nav className="mb-6 text-left">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ← Back to Home
                </a>
              </nav>
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Zion Tech Group Blog
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Insights, innovations, and thought leadership on autonomous technology and the future of digital innovation.
              </p>
            </header>

            <section className="mb-12">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      category === "All"
                        ? "bg-cyan-500 text-white"
                        : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Featured Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-white/60 text-xs">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <span className="text-white/80 text-sm">{post.author}</span>
                      </div>
                      
                      <span className="text-white/60 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <a 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4 text-cyan-300">Stay Updated</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Get the latest insights on autonomous technology, AI innovation, and digital transformation 
                  delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}