import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - Tools, Templates & Downloads</title>
        <meta name="description" content="Access free resources, templates, and tools to accelerate your AI and automation journey. Download guides, checklists, and implementation templates." />
        <meta property="og:title" content="Resources - Zion Tech Group" />
        <meta property="og:description" content="Free tools, templates, and resources for AI and automation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Free tools, templates, and resources to accelerate your AI and automation journey
            </p>
          </section>

          <section className="mx-auto max-w-7xl">
            {/* Featured Resource */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm text-cyan-400 mb-3">Featured Resource</div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    AI Implementation Roadmap
                  </h2>
                  <p className="text-white/80 mb-6">
                    A comprehensive 12-week roadmap to successfully implement AI solutions in your organization. Includes planning templates, risk assessments, and success metrics.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-6">
                    <span>📊 45 pages</span>
                    <span>•</span>
                    <span>PDF Format</span>
                    <span>•</span>
                    <span>Free Download</span>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Download Now
                  </button>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <div className="text-2xl font-bold text-cyan-400">AI Roadmap</div>
                  <div className="text-white/70">12-Week Plan</div>
                </div>
              </div>
            </div>

            {/* Resource Categories */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold mb-2">Templates</h3>
                <p className="text-white/70 text-sm">Ready-to-use project templates</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold mb-2">Guides</h3>
                <p className="text-white/70 text-sm">Step-by-step implementation guides</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-lg font-semibold mb-2">Tools</h3>
                <p className="text-white/70 text-sm">Free automation tools</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2">Checklists</h3>
                <p className="text-white/70 text-sm">Project success checklists</p>
              </div>
            </div>

            {/* Templates Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Project Templates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">🤖</div>
                  <h3 className="text-lg font-semibold mb-2">AI Project Charter</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Complete project charter template for AI initiatives with stakeholder alignment and success criteria.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-cyan-400">Word Doc</span>
                    <span className="text-xs text-white/50">15 pages</span>
                  </div>
                  <button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
                    Download Template
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="text-lg font-semibold mb-2">Automation Workflow</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Visual workflow template for mapping and documenting automation processes.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-fuchsia-400">Visio/PDF</span>
                    <span className="text-xs text-white/50">8 pages</span>
                  </div>
                  <button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
                    Download Template
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-lg font-semibold mb-2">ROI Calculator</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Excel-based ROI calculator for automation projects with customizable parameters.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-green-400">Excel</span>
                    <span className="text-xs text-white/50">3 sheets</span>
                  </div>
                  <button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
                    Download Template
                  </button>
                </div>
              </div>
            </div>

            {/* Guides Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Implementation Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">🔒</div>
                  <h3 className="text-lg font-semibold mb-2">AI Security Framework</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Comprehensive security framework for AI systems including risk assessment, compliance, and best practices.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-blue-400">PDF Guide</span>
                    <span className="text-xs text-white/50">32 pages</span>
                  </div>
                  <button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
                    Download Guide
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">☁️</div>
                  <h3 className="text-lg font-semibold mb-2">Cloud Migration Guide</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Step-by-step guide for migrating AI workloads to the cloud with cost optimization strategies.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-purple-400">PDF Guide</span>
                    <span className="text-xs text-white/50">28 pages</span>
                  </div>
                  <button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
                    Download Guide
                  </button>
                </div>
              </div>
            </div>

            {/* Tools Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Free Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">🔍</div>
                  <h3 className="text-lg font-semibold mb-2">AI Readiness Assessment</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Interactive assessment tool to evaluate your organization&apos;s readiness for AI implementation.
                  </p>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Take Assessment
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">📈</div>
                  <h3 className="text-lg font-semibold mb-2">Automation ROI Estimator</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Calculate potential ROI for automation projects with our interactive estimator tool.
                  </p>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Calculate ROI
                  </button>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">Get New Resources First</h2>
              <p className="text-white/80 mb-6">
                Subscribe to receive new templates, guides, and tools as they become available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}