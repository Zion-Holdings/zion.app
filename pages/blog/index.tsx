import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogIndex() {
  const blogPosts = [
    {
      title: "The Future of AI Automation",
      description: "How autonomous systems are revolutionizing industries and reshaping the future of work",
      slug: "ai-automation-future",
      readTime: "8 min read",
      category: "AI & Automation",
      date: "January 17, 2025"
    },
    {
      title: "Complete Guide to Autonomous Systems",
      description: "Everything you need to know about building, deploying, and managing intelligent autonomous systems",
      slug: "autonomous-systems-guide",
      readTime: "12 min read",
      category: "Technical Guide",
      date: "January 17, 2025"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Automation Insights</title>
        <meta name="description" content="Explore insights, guides, and thought leadership content about AI automation, autonomous systems, and the future of technology from Zion Tech Group." />
        <meta property="og:title" content="Blog | Zion Tech Group" />
        <meta property="og:description" content="Explore insights about AI automation and autonomous systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, guides, and thought leadership on AI automation, autonomous systems, and the future of technology
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-200">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="mt-4">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                    >
                      Read More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Stay Updated</h2>
                <p className="text-white/80 mb-6">
                  Get the latest insights on AI automation and autonomous systems delivered to your inbox
                </p>
                <div className="max-w-md mx-auto">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    />
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Explore More</h2>
                <p className="text-white/80 mb-6">
                  Discover our comprehensive services and learn how we can help transform your business with autonomous technology
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/services" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Our Services
                  </Link>
                  <Link href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                    About Us
                  </Link>
                  <Link href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                    Case Studies
                  </Link>
                  <Link href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}