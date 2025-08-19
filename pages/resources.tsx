import React from 'react';
import Head from 'next/head';

export default function ResourcesPage() {
  const resources = [
    {
      id: 'ai-automation-guide',
      title: 'Complete Guide to AI Automation',
      type: 'Guide',
      description: 'Comprehensive guide covering everything from basic automation concepts to advanced AI implementation strategies.',
      downloadUrl: '#',
      fileSize: '2.4 MB',
      category: 'Guides',
      featured: true
    },
    {
      id: 'autonomous-systems-whitepaper',
      title: 'Autonomous Systems: The Future of Business',
      type: 'Whitepaper',
      description: 'In-depth analysis of how autonomous systems are transforming industries and creating new business opportunities.',
      downloadUrl: '#',
      fileSize: '1.8 MB',
      category: 'Whitepapers',
      featured: true
    },
    {
      id: 'performance-optimization-toolkit',
      title: 'Performance Optimization Toolkit',
      type: 'Toolkit',
      description: 'Collection of tools, templates, and checklists for optimizing autonomous system performance.',
      downloadUrl: '#',
      fileSize: '5.2 MB',
      category: 'Toolkits',
      featured: true
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics Framework',
      type: 'Framework',
      description: 'Comprehensive framework for developing and deploying ethical AI systems.',
      downloadUrl: '#',
      fileSize: '3.1 MB',
      category: 'Frameworks',
      featured: false
    },
    {
      id: 'cloud-native-checklist',
      title: 'Cloud-Native Implementation Checklist',
      type: 'Checklist',
      description: 'Step-by-step checklist for implementing cloud-native automation infrastructure.',
      downloadUrl: '#',
      fileSize: '0.8 MB',
      category: 'Checklists',
      featured: false
    },
    {
      id: 'automation-roi-calculator',
      title: 'Automation ROI Calculator',
      type: 'Calculator',
      description: 'Interactive tool to calculate the return on investment for automation projects.',
      downloadUrl: '#',
      fileSize: '1.2 MB',
      category: 'Tools',
      featured: false
    }
  ];

  const categories = ['All', 'Guides', 'Whitepapers', 'Toolkits', 'Frameworks', 'Checklists', 'Tools'];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI & Automation Tools</title>
        <meta name="description" content="Access valuable resources including guides, whitepapers, toolkits, and tools for AI automation and autonomous systems." />
        <meta property="og:title" content="Resources | Zion Tech Group" />
        <meta property="og:description" content="Access valuable resources for AI automation and autonomous systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Resources & Tools
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Access our comprehensive collection of guides, whitepapers, toolkits, and tools designed 
                to help you succeed with AI automation and autonomous systems
              </p>
            </header>
            
            {/* Featured Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Resources</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {resources.filter(resource => resource.featured).map(resource => (
                  <div key={resource.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        {resource.category}
                      </span>
                      <span className="text-white/60 text-sm">{resource.type}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white">{resource.title}</h3>
                    <p className="text-white/80 mb-6">{resource.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-white/60 text-sm">{resource.fileSize}</span>
                      <span className="text-cyan-400 text-sm font-medium">Free Download</span>
                    </div>
                    
                    <a 
                      href={resource.downloadUrl}
                      className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 text-center block"
                    >
                      Download Now
                    </a>
                  </div>
                ))}
              </div>
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
            
            {/* All Resources Grid */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">All Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map(resource => (
                  <article key={resource.id} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-xs rounded-full border border-fuchsia-400/30">
                        {resource.category}
                      </span>
                      <span className="text-white/60 text-xs">{resource.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-white/80 text-sm mb-4 line-clamp-3">{resource.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-xs">{resource.fileSize}</span>
                      <a 
                        href={resource.downloadUrl}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        Download →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            
            {/* Newsletter Signup */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Stay Updated with New Resources</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Get notified when we release new guides, whitepapers, and tools to help you succeed 
                  with AI automation and autonomous systems.
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
            
            {/* Related Pages */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-white">Explore More</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="/case-studies" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Case Studies</h3>
                  <p className="text-white/80 text-sm">See real-world results from our autonomous systems</p>
                </a>
                
                <a href="/blog" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Blog</h3>
                  <p className="text-white/80 text-sm">Read insights and trends in AI automation</p>
                </a>
                
                <a href="/services" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Services</h3>
                  <p className="text-white/80 text-sm">Explore our comprehensive AI automation services</p>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}