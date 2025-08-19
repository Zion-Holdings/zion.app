import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 'ai-automation-trends-2025',
      title: 'AI Automation Trends for 2025',
      excerpt: 'Discover the latest developments in AI-powered automation and how they\'re reshaping cloud infrastructure.',
      date: '2025-01-17',
      category: 'AI & Automation',
      readTime: '5 min read'
    },
    {
      id: 'cloud-native-redundancy',
      title: 'Building Cloud-Native Redundancy Systems',
      excerpt: 'Learn how to implement robust redundancy systems that ensure 99.99% uptime in cloud environments.',
      date: '2025-01-16',
      category: 'Cloud Architecture',
      readTime: '8 min read'
    },
    {
      id: 'github-actions-automation',
      title: 'Advanced GitHub Actions Automation',
      excerpt: 'Master the art of creating sophisticated CI/CD pipelines with GitHub Actions for autonomous operations.',
      date: '2025-01-15',
      category: 'DevOps',
      readTime: '6 min read'
    },
    {
      id: 'self-healing-systems',
      title: 'Self-Healing Systems in Production',
      excerpt: 'Explore how autonomous systems can detect and fix issues without human intervention.',
      date: '2025-01-14',
      category: 'System Design',
      readTime: '7 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Blog - Zion App</title>
        <meta name="description" content="Insights, tutorials, and updates from the Zion App team" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Zion App Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Insights, tutorials, and updates on cloud automation, AI, and autonomous systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights delivered to your inbox
              </p>
              <div className="flex max-w-md mx-auto gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}