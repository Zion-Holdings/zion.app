import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContentHub() {
  const [contentStats, setContentStats] = useState({
    totalReports: 0,
    totalComponents: 0,
    lastUpdated: new Date().toISOString()
  });

  const contentCategories = [
    {
      name: 'AI & Machine Learning',
      icon: '🤖',
      reports: ['insights', 'whitepapers', 'tutorials'],
      count: 45
    },
    {
      name: 'Cloud Computing',
      icon: '☁️',
      reports: ['blueprints', 'playbooks', 'case-studies'],
      count: 38
    },
    {
      name: 'Digital Transformation',
      icon: '🚀',
      reports: ['dossiers', 'patterns', 'guides'],
      count: 32
    },
    {
      name: 'Technology Trends',
      icon: '📈',
      reports: ['updates', 'insights', 'whitepapers'],
      count: 28
    }
  ];

  const featuredContent = [
    {
      title: 'AI-Powered Content Generation',
      category: 'AI & Machine Learning',
      type: 'insight',
      date: '2025-08-15',
      excerpt: 'Exploring the future of autonomous content creation...'
    },
    {
      title: 'Cloud Architecture Best Practices',
      category: 'Cloud Computing',
      type: 'blueprint',
      date: '2025-08-14',
      excerpt: 'Comprehensive guide to building scalable cloud solutions...'
    },
    {
      title: 'Digital Transformation Roadmap',
      category: 'Digital Transformation',
      type: 'dossier',
      date: '2025-08-13',
      excerpt: 'Strategic framework for organizational digital evolution...'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Content Hub | Zion Tech Group</title>
        <meta name="description" content="Central hub for all our AI, cloud, and technology content." />
      
        <meta property="og:title" content="Content Hub" />
        <meta property="og:description" content="Content Hub — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Content Hub
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover, explore, and engage with our comprehensive content library
          </p>
        </div>

        {/* Content Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold text-cyan-400">{contentStats.totalReports}</div>
            <div className="text-white/70">Total Reports</div>
          </div>
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🧩</div>
            <div className="text-2xl font-bold text-fuchsia-400">{contentStats.totalComponents}</div>
            <div className="text-white/70">UI Components</div>
          </div>
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🔄</div>
            <div className="text-2xl font-bold text-emerald-400">Auto-Generated</div>
            <div className="text-white/70">Content Updates</div>
          </div>
        </div>

        {/* Content Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Content Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentCategories.map((category) => (
              <Link 
                key={category.name}
                href={`/reports/${category.reports[0]}`}
                className="group bg-slate-900/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-white/70 mb-3">{category.count} pieces of content</p>
                <div className="text-cyan-400 text-sm">Explore →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Content */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredContent.map((content) => (
              <div key={content.title} className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {content.type}
                  </span>
                  <span className="text-white/60 text-sm">{content.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{content.title}</h3>
                <p className="text-white/70 mb-4">{content.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">{content.date}</span>
                  <Link 
                    href={`/reports/${content.type}s`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Quick Actions</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/components"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Explore Components
            </Link>
            <Link 
              href="/reports"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Browse Reports
            </Link>
            <Link 
              href="/automation"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Automation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}