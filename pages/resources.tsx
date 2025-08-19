import React from 'react';
import Head from 'next/head';

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI & Technology Resources</title>
        <meta name="description" content="Access valuable resources, tools, and insights on AI, automation, and technology innovation from Zion Tech Group." />
        <meta property="og:title" content="Resources - Zion Tech Group" />
        <meta property="og:description" content="Valuable resources, tools, and insights on AI, automation, and technology innovation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Resources & Tools
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Access our curated collection of AI tools, automation guides, and technology insights
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                About
              </a>
              <a href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Services
              </a>
              <a href="/automation" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Automation
              </a>
              <a href="/blog" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Blog
              </a>
              <a href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Contact
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">AI Development Guides</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Comprehensive guides for building and deploying AI systems, from beginner to advanced levels.
                </p>
                <a href="#" className="text-cyan-300 hover:text-cyan-200 text-sm font-medium">
                  Explore Guides →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Automation Tools</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Open-source tools and frameworks for building autonomous systems and automation workflows.
                </p>
                <a href="#" className="text-fuchsia-300 hover:text-fuchsia-200 text-sm font-medium">
                  View Tools →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Performance Metrics</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Real-time dashboards and analytics tools for monitoring system performance and automation health.
                </p>
                <a href="#" className="text-green-300 hover:text-green-200 text-sm font-medium">
                  View Metrics →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Video Tutorials</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Step-by-step video tutorials covering AI development, automation setup, and best practices.
                </p>
                <a href="#" className="text-blue-300 hover:text-blue-200 text-sm font-medium">
                  Watch Videos →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Case Studies</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Real-world examples of how our autonomous systems have transformed businesses and operations.
                </p>
                <a href="#" className="text-purple-300 hover:text-purple-200 text-sm font-medium">
                  Read Cases →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Research Papers</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Academic research and technical papers on autonomous systems, AI ethics, and automation.
                </p>
                <a href="#" className="text-yellow-300 hover:text-yellow-200 text-sm font-medium">
                  Read Papers →
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">Free Tools & Templates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Automation Templates</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• CI/CD Pipeline Templates</li>
                    <li>• Infrastructure as Code</li>
                    <li>• Monitoring Dashboards</li>
                    <li>• Testing Frameworks</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">AI Development Kits</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Model Training Scripts</li>
                    <li>• Data Preprocessing Tools</li>
                    <li>• Evaluation Metrics</li>
                    <li>• Deployment Scripts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Stay Connected</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Join our community of AI and automation enthusiasts to access exclusive resources and stay updated on the latest developments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Join Community
                </a>
                <a href="/blog" className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all">
                  Read Blog
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}