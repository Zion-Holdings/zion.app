import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'ai-automation-best-practices-2025',
      title: 'AI Automation Best Practices for 2025: A Comprehensive Guide',
      excerpt: 'Discover the essential AI automation best practices that will drive success in 2025. Learn about implementation strategies, common pitfalls, and success factors.',
      date: 'January 17, 2025',
      readTime: '8 min read',
      category: 'AI & Automation',
      featured: true
    },
    {
      id: 'ai-automation-trends-2025',
      title: 'AI Automation Trends 2025: The Future of Autonomous Systems',
      excerpt: 'Explore the cutting-edge trends shaping the future of AI automation and autonomous technology systems.',
      date: 'January 16, 2025',
      readTime: '8 min read',
      category: 'AI & Automation',
      featured: false
    },
    {
      id: 'autonomous-content-generation',
      title: 'Revolutionizing Content Creation with Autonomous AI Systems',
      excerpt: 'How Zion Tech Group is transforming content generation through intelligent automation and machine learning.',
      date: 'January 15, 2025',
      readTime: '6 min read',
      category: 'Content & AI'
    },
    {
      id: 'cloud-native-automation',
      title: 'Building Cloud-Native Automation Infrastructure',
      excerpt: 'A deep dive into our cloud-native approach to building scalable, reliable automation systems.',
      date: 'January 12, 2025',
      readTime: '10 min read',
      category: 'Infrastructure'
    },
    {
      id: 'ai-ethics-automation',
      title: 'Ethical Considerations in Autonomous AI Systems',
      excerpt: 'Exploring the ethical implications and responsible development of autonomous technology.',
      date: 'January 10, 2025',
      readTime: '7 min read',
      category: 'AI Ethics'
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization in Autonomous Systems',
      excerpt: 'Best practices for optimizing performance in large-scale autonomous technology deployments.',
      date: 'January 8, 2025',
      readTime: '9 min read',
      category: 'Performance'
    },
    {
      id: 'future-of-work',
      title: 'The Future of Work: Human-AI Collaboration',
      excerpt: 'How autonomous systems are reshaping the workplace and enhancing human capabilities.',
      date: 'January 5, 2025',
      readTime: '5 min read',
      category: 'Future of Work'
    }
  ];

  const categories = ['All', 'AI & Automation', 'Content & AI', 'Infrastructure', 'AI Ethics', 'Performance', 'Future of Work'];

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
            
            {/* Featured Post */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-white">Featured Article</h2>
              {blogPosts.filter(post => post.featured).map(post => (
                <div key={post.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                      {post.category}
                    </span>
                    <span className="text-white/60 text-sm">{post.date}</span>
                    <span className="text-white/60 text-sm">•</span>
                    <span className="text-white/60 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-lg text-white/80 mb-6">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                  >
                    Read Full Article
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              ))}
            </section>
            
            {/* Category Filter */}
            <section className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map(category => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-lg border border-white/20 text-white/80 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>
            
            {/* Blog Posts Grid */}
            <section>
              <h2 className="text-2xl font-bold mb-8 text-white">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => !post.featured).map(post => (
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
                
                <Link href="/contact" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Get in Touch</h3>
                  <p className="text-white/80 text-sm">Have questions? We&apos;d love to hear from you</p>
                </Link>
                
                <Link href="/" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Platform Demo</h3>
                  <p className="text-white/80 text-sm">Experience our autonomous technology firsthand</p>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}