import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'ai-automation-trends-2025',
      title: 'AI Automation Trends 2025: The Future of Autonomous Technology',
      excerpt: 'Explore the cutting-edge trends shaping the future of AI automation and autonomous systems.',
      category: 'AI & Automation',
      date: '2025-01-17',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 'cloud-automation-breakthroughs',
      title: 'Cloud Automation Breakthroughs: Revolutionizing Infrastructure Management',
      excerpt: 'Discover how autonomous cloud systems are transforming the way we manage and scale infrastructure.',
      category: 'Cloud Computing',
      date: '2025-01-16',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 'autonomous-agent-factories',
      title: 'Building Autonomous Agent Factories: Scaling AI Innovation',
      excerpt: 'Learn about our approach to creating scalable autonomous agent systems that drive continuous innovation.',
      category: 'Innovation',
      date: '2025-01-15',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 'future-of-work-automation',
      title: 'The Future of Work: How Automation is Reshaping Industries',
      excerpt: 'Explore the transformative impact of automation on various industries and the future of human work.',
      category: 'Future of Work',
      date: '2025-01-14',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 'ai-ethics-and-governance',
      title: 'AI Ethics and Governance: Building Responsible Autonomous Systems',
      excerpt: 'Understanding the importance of ethical considerations in autonomous AI development and deployment.',
      category: 'AI Ethics',
      date: '2025-01-13',
      readTime: '9 min read',
      featured: false
    },
    {
      id: 'quantum-computing-automation',
      title: 'Quantum Computing and Automation: The Next Frontier',
      excerpt: 'Exploring the intersection of quantum computing and autonomous automation systems.',
      category: 'Quantum Computing',
      date: '2025-01-12',
      readTime: '11 min read',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Automation', 'Cloud Computing', 'Innovation', 'Future of Work', 'AI Ethics', 'Quantum Computing'];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Automation Insights</title>
        <meta name="description" content="Explore insights, trends, and breakthroughs in AI automation, autonomous systems, and the future of technology from Zion Tech Group." />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="AI automation insights and technology trends." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, trends, and breakthroughs in autonomous technology, AI automation, and the future of innovation
            </p>
          </section>

          {/* Featured Post */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-white/90">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map(post => (
              <div key={post.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                    {post.category}
                  </span>
                  <span className="text-white/60 text-sm">{post.date}</span>
                  <span className="text-white/60 text-sm">•</span>
                  <span className="text-white/60 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {post.title}
                </h3>
                <p className="text-lg text-white/80 mb-6">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200 transform hover:scale-105">
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
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50"
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map(post => (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.id}`}>
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:bg-white/15 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-2 py-1 bg-white/20 text-white/80 text-xs rounded-full">
                          {post.category}
                        </span>
                        <span className="text-white/60 text-xs">{post.date}</span>
                        <span className="text-white/60 text-xs">•</span>
                        <span className="text-white/60 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1 text-xs text-cyan-300/90">
                        Read More <span aria-hidden>→</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-20 text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Stay Updated with AI Innovation
              </h3>
              <p className="text-white/70 mb-6">
                Get the latest insights on autonomous technology, AI breakthroughs, and automation trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}