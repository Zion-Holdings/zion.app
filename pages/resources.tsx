import React from 'react';
import Head from 'next/head';

export default function ResourcesPage() {
  const resources = [
    {
      id: 'ai-automation-guide',
      title: 'Complete Guide to AI Automation',
      type: 'PDF Guide',
      size: '2.4 MB',
      description: 'Comprehensive guide covering AI automation strategies, implementation best practices, and ROI measurement.',
      category: 'Guides',
      featured: true
    },
    {
      id: 'cloud-automation-checklist',
      title: 'Cloud Automation Implementation Checklist',
      type: 'Checklist',
      size: '156 KB',
      description: 'Step-by-step checklist for implementing cloud automation in your organization.',
      category: 'Checklists'
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics Framework for Business',
      type: 'White Paper',
      size: '1.8 MB',
      description: 'Framework for implementing ethical AI practices in business operations.',
      category: 'White Papers'
    },
    {
      id: 'performance-metrics-template',
      title: 'Performance Metrics Dashboard Template',
      type: 'Template',
      size: '892 KB',
      description: 'Ready-to-use dashboard template for monitoring AI automation performance.',
      category: 'Templates'
    },
    {
      id: 'automation-roi-calculator',
      title: 'Automation ROI Calculator',
      type: 'Tool',
      size: 'Interactive',
      description: 'Interactive calculator to estimate ROI from automation investments.',
      category: 'Tools'
    },
    {
      id: 'case-study-template',
      title: 'Case Study Template',
      type: 'Template',
      size: '324 KB',
      description: 'Template for documenting and presenting automation success stories.',
      category: 'Templates'
    }
  ];

  const categories = ['All', 'Guides', 'Checklists', 'White Papers', 'Templates', 'Tools'];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI & Automation Resources</title>
        <meta name="description" content="Download free resources, guides, and tools to help you implement AI automation and technology solutions." />
        <meta property="og:title" content="Resources | Zion Tech Group" />
        <meta property="og:description" content="Free AI automation resources and guides." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Free resources, guides, and tools to help you implement AI automation and technology solutions
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            {/* Featured Resource */}
            {resources.filter(resource => resource.featured).map(resource => (
              <div key={resource.id} className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20 mb-16">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30">
                    {resource.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">{resource.title}</h2>
                <p className="text-lg text-white/80 mb-6 max-w-3xl">{resource.description}</p>
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-white/60">Type: {resource.type}</span>
                  <span className="text-white/60">Size: {resource.size}</span>
                </div>
                <button className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200">
                  Download Now
                </button>
              </div>
            ))}

            {/* Category Filter */}
            <div className="mb-12">
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
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {resources.filter(resource => !resource.featured).map(resource => (
                <div key={resource.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-xs rounded-full border border-fuchsia-400/30">
                      {resource.category}
                    </span>
                    <span className="text-white/60 text-xs">{resource.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">{resource.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs">Size: {resource.size}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                      Download →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20 mb-16">
              <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Stay Updated with New Resources</h2>
              <p className="text-white/80 mb-6 text-center max-w-2xl mx-auto">
                Get notified when we release new resources, guides, and tools to help you succeed with AI automation.
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
              <p className="text-white/60 text-sm text-center mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>

            {/* Related Pages */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-8 text-white">Explore More</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="/case-studies" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Case Studies</h3>
                  <p className="text-white/80 text-sm">Real-world success stories and implementations</p>
                </a>
                
                <a href="/services" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Our Services</h3>
                  <p className="text-white/80 text-sm">Comprehensive AI and automation solutions</p>
                </a>
                
                <a href="/contact" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Get in Touch</h3>
                  <p className="text-white/80 text-sm">Have questions? We'd love to help</p>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}