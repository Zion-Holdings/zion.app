import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SitemapPage() {
  const mainPages = [
    { path: '/', title: 'Home', description: 'Main landing page' },
    { path: '/about', title: 'About Us', description: 'Company information and mission' },
    { path: '/services', title: 'Services', description: 'Our service offerings' },
    { path: '/ai-solutions', title: 'AI Solutions', description: 'AI capabilities and solutions' },
    { path: '/automation-insights', title: 'Automation Insights', description: 'Automation expertise and trends' },
    { path: '/technology-insights', title: 'Technology Insights', description: 'Research and innovation insights' },
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and examples' },
    { path: '/resources', title: 'Resources', description: 'Tools, whitepapers, and resources' },
    { path: '/blog', title: 'Blog', description: 'Latest insights and articles' },
    { path: '/contact', title: 'Contact', description: 'Get in touch with us' },
    { path: '/privacy', title: 'Privacy Policy', description: 'Privacy and data protection' }
  ];

  const blogPosts = [
    { path: '/blog/ai-automation-trends-2025', title: 'AI Automation Trends 2025', category: 'AI & Automation' },
    { path: '/blog/autonomous-content-generation', title: 'Autonomous Content Generation', category: 'Content & AI' }
  ];

  const reportUpdates = [
    { path: '/reports/updates/update-2025-08-15-0111', title: 'Update 2025-08-15-0111', date: '2025-08-15' },
    { path: '/reports/updates/update-2025-08-15-0402', title: 'Update 2025-08-15-0402', date: '2025-08-15' },
    { path: '/reports/updates/update-2025-08-15-0403', title: 'Update 2025-08-15-0403', date: '2025-08-15' },
    { path: '/reports/updates/update-2025-08-15-0404', title: 'Update 2025-08-15-0404', date: '2025-08-15' },
    { path: '/reports/updates/update-2025-08-15-0405', title: 'Update 2025-08-15-0405', date: '2025-08-15' },
    { path: '/reports/updates/update-2025-08-15-0406', title: 'Update 2025-08-15-0406', date: '2025-08-15' }
  ];

  return (
    <>
      <Head>
        <title>Sitemap | Zion Tech Group - Site Navigation</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website with all pages and navigation links." />
        <meta property="og:title" content="Sitemap | Zion Tech Group" />
        <meta property="og:description" content="Complete site navigation and structure." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Complete navigation guide to all pages and content on the Zion Tech Group website
            </p>
          </section>

          <section className="mx-auto max-w-7xl">
            {/* Main Pages */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Main Pages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainPages.map((page, index) => (
                  <Link 
                    key={index}
                    href={page.path}
                    className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-3">{page.description}</p>
                    <div className="text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors">
                      Visit Page →
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Blog Posts */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">Blog Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Link 
                    key={index}
                    href={post.path}
                    className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-fuchsia-400 transition-colors">
                      {post.title}
                    </h3>
                    <div className="text-fuchsia-400 text-sm group-hover:text-fuchsia-300 transition-colors">
                      Read Article →
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Report Updates */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Latest Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reportUpdates.map((update, index) => (
                  <Link 
                    key={index}
                    href={update.path}
                    className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full">Update</span>
                      <span className="text-white/60 text-sm">{update.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-green-400 transition-colors">
                      {update.title}
                    </h3>
                    <div className="text-green-400 text-sm group-hover:text-green-300 transition-colors">
                      View Update →
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Quick Navigation</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200"
                >
                  Back to Home
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/resources"
                  className="px-6 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  Resources
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}