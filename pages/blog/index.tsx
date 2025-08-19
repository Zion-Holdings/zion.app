import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogIndexPage() {
  const blogPosts = [
    {
      id: 'ai-automation-trends-2025',
      title: 'AI Automation Trends That Will Dominate 2025',
      excerpt: 'Discover the cutting-edge AI automation technologies that are reshaping industries and transforming how we work.',
      category: 'AI & Automation',
      readTime: '8 min read',
      date: '2025-01-17',
      featured: true
    },
    {
      id: 'autonomous-systems-future',
      title: 'The Future of Autonomous Systems in Enterprise',
      excerpt: 'How self-managing systems are revolutionizing business operations and creating new opportunities for innovation.',
      category: 'Technology',
      readTime: '6 min read',
      date: '2025-01-16'
    },
    {
      id: 'cloud-native-automation',
      title: 'Building Cloud-Native Automation at Scale',
      excerpt: 'Best practices for creating robust, scalable automation systems that thrive in cloud environments.',
      category: 'Cloud Computing',
      readTime: '10 min read',
      date: '2025-01-15'
    },
    {
      id: 'ai-ethics-automation',
      title: 'Ethical Considerations in AI-Driven Automation',
      excerpt: 'Exploring the moral implications and responsible development of autonomous AI systems.',
      category: 'AI Ethics',
      readTime: '7 min read',
      date: '2025-01-14'
    },
    {
      id: 'devops-automation-revolution',
      title: 'The DevOps Automation Revolution',
      excerpt: 'How automated DevOps practices are accelerating software delivery and improving quality.',
      category: 'DevOps',
      readTime: '9 min read',
      date: '2025-01-13'
    },
    {
      id: 'machine-learning-production',
      title: 'Taking Machine Learning from Research to Production',
      excerpt: 'Practical strategies for deploying ML models in real-world business environments.',
      category: 'Machine Learning',
      readTime: '12 min read',
      date: '2025-01-12'
    }
  ];

  const categories = ['All', 'AI & Automation', 'Technology', 'Cloud Computing', 'AI Ethics', 'DevOps', 'Machine Learning'];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Technology Insights</title>
        <meta name="description" content="Explore the latest insights on AI automation, autonomous systems, and cutting-edge technology trends from Zion Tech Group." />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI automation and technology trends." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Technology Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, trends, and deep dives into the world of AI automation, autonomous systems, and cutting-edge technology
            </p>
          </section>

          {/* Featured Post */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-white/90">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map(post => (
              <div key={post.id} className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                    {post.category}
                  </span>
                  <span className="text-white/60 text-sm">{post.readTime}</span>
                  <span className="text-white/60 text-sm">{post.date}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  <Link href={`/blog/${post.id}`} className="hover:text-cyan-400 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-lg text-white/80 mb-6">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Read Full Article
                  <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
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
                <article key={post.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-1 bg-fuchsia-500/20 text-fuchsia-300 text-xs rounded-full border border-fuchsia-500/30">
                      {post.category}
                    </span>
                    <span className="text-white/60 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    <Link href={`/blog/${post.id}`} className="hover:text-cyan-400 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-white/70 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">{post.date}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
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
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-2xl font-bold mb-4 text-white">Stay Updated</h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Get the latest insights on AI automation, autonomous systems, and technology trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
                />
                <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
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