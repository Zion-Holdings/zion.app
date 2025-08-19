import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      id: 'ai-automation-guide',
      title: 'Complete Guide to AI Automation Implementation',
      description: 'A comprehensive 50-page guide covering everything from planning to deployment of AI automation solutions.',
      type: 'Guide',
      format: 'PDF',
      size: '2.4 MB',
      downloads: 1247,
      featured: true,
      category: 'Implementation'
    },
    {
      id: 'automation-roi-calculator',
      title: 'Automation ROI Calculator & Templates',
      description: 'Excel templates and calculators to help you estimate the return on investment for automation projects.',
      type: 'Tool',
      format: 'Excel',
      size: '1.8 MB',
      downloads: 892,
      featured: true,
      category: 'Planning'
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics Framework for Business',
      description: 'A practical framework for implementing ethical AI practices in your organization.',
      type: 'Framework',
      format: 'PDF',
      size: '3.1 MB',
      downloads: 567,
      featured: false,
      category: 'Governance'
    },
    {
      id: 'automation-checklist',
      title: 'Pre-Implementation Automation Checklist',
      description: 'Essential checklist to ensure your automation project is ready for success.',
      type: 'Checklist',
      format: 'PDF',
      size: '0.8 MB',
      downloads: 1345,
      featured: false,
      category: 'Planning'
    },
    {
      id: 'case-study-templates',
      title: 'Case Study Templates & Examples',
      description: 'Professional templates for documenting and presenting your automation success stories.',
      type: 'Template',
      format: 'Word',
      size: '1.2 MB',
      downloads: 678,
      featured: false,
      category: 'Documentation'
    },
    {
      id: 'automation-metrics-dashboard',
      title: 'Automation Metrics Dashboard Template',
      description: 'Ready-to-use dashboard templates for tracking automation performance and KPIs.',
      type: 'Template',
      format: 'PowerBI',
      size: '4.2 MB',
      downloads: 445,
      featured: false,
      category: 'Monitoring'
    }
  ];

  const categories = ['All', 'Implementation', 'Planning', 'Governance', 'Documentation', 'Monitoring'];
  const types = ['All', 'Guide', 'Tool', 'Framework', 'Checklist', 'Template'];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI Automation Tools & Guides</title>
        <meta name="description" content="Download free resources, guides, and tools to help you implement AI automation in your business." />
        <meta property="og:title" content="Resources - Zion Tech Group" />
        <meta property="og:description" content="Free AI automation resources, guides, and tools for businesses." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Free tools, guides, and resources to help you implement AI automation and transform your business
            </p>
          </section>

          {/* Featured Resources */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center text-white/90">Featured Resources</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resources.filter(resource => resource.featured).map(resource => (
                <div key={resource.id} className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                      {resource.type}
                    </span>
                    <span className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-300 text-sm rounded-full border border-fuchsia-500/30">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{resource.title}</h3>
                  <p className="text-white/80 mb-6">{resource.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-white/60">
                    <span>Format: {resource.format}</span>
                    <span>Size: {resource.size}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
                    <span>Download Free</span>
                    <span aria-hidden>↓</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Filters */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Category</label>
                <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Type</label>
                <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* All Resources Grid */}
          <section className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold mb-8 text-center text-white/90">All Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.filter(resource => !resource.featured).map(resource => (
                <article key={resource.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                      {resource.type}
                    </span>
                    <span className="px-2 py-1 bg-fuchsia-500/20 text-fuchsia-300 text-xs rounded-full border border-fuchsia-500/30">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{resource.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{resource.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-xs text-white/60">
                    <span>{resource.format}</span>
                    <span>{resource.size}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-lg transition-colors">
                    Download Free
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-20 text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-2xl font-bold mb-4 text-white">Get New Resources First</h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to access new guides, tools, and resources as they're published.
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

          {/* Additional Resources */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-8 text-center text-white/90">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">Webinars & Events</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Join our live webinars and events to learn from industry experts and get your questions answered.
                </p>
                <Link href="/events" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                  View Upcoming Events →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Community Forum</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Connect with other professionals implementing AI automation and share best practices.
                </p>
                <Link href="/community" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium">
                  Join the Community →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-green-400">Consultation</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Need personalized guidance? Schedule a free consultation with our automation experts.
                </p>
                <Link href="/contact" className="text-green-400 hover:text-green-300 text-sm font-medium">
                  Book Consultation →
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}