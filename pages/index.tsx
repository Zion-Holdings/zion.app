import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Services
              </a>
              <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Case Studies
              </a>
              <a href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Blog
              </a>
              <a href="/team" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Our Team
              </a>
              <a href="/events" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Events
              </a>
              <a href="/news" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-indigo-400/50">
                News
              </a>
              <a href="/reports" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-pink-400/50">
                Reports & Analytics
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-orange-400/50">
                Contact
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">AI-Powered Automation</h3>
                <p className="text-white/70 mb-4">
                  Our intelligent systems learn from your processes and continuously optimize workflows for maximum efficiency.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Machine Learning Models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Predictive Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Intelligent Workflows</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-2xl p-8 border border-fuchsia-400/30 hover:border-fuchsia-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">Lightning Fast Performance</h3>
                <p className="text-white/70 mb-4">
                  Experience blazing-fast response times with our optimized infrastructure and cutting-edge technology stack.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-400">✓</span>
                    <span>99.9% Uptime</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-400">✓</span>
                    <span>Sub-second Response</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-400">✓</span>
                    <span>Global CDN</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">Enterprise Security</h3>
                <p className="text-white/70 mb-4">
                  Bank-grade security with end-to-end encryption, compliance certifications, and 24/7 monitoring.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>End-to-End Encryption</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>SOC 2 Type II</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>24/7 Monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0111</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0403</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
              <a href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0402</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </a>
            </div>
          </section>
          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}

          {/* Featured Blog Posts */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Featured Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/blog/ai-automation-trends-2025" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                    AI & Automation
                  </span>
                  <span className="text-white/60 text-sm">8 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  AI Automation Trends 2025: The Future of Autonomous Systems
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Explore the cutting-edge trends shaping the future of AI automation and autonomous technology systems.
                </p>
                <div className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Read More →
                </div>
              </a>

              <a href="/blog/autonomous-content-generation" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30">
                    Content & AI
                  </span>
                  <span className="text-white/60 text-sm">6 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-fuchsia-400 transition-colors">
                  Revolutionizing Content Creation with Autonomous AI Systems
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  How Zion Tech Group is transforming content generation through intelligent automation and machine learning.
                </p>
                <div className="text-fuchsia-400 text-sm font-medium group-hover:text-fuchsia-300 transition-colors">
                  Read More →
                </div>
              </a>

              <a href="/blog/cloud-native-automation" className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                    Infrastructure
                  </span>
                  <span className="text-white/60 text-sm">10 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  Building Cloud-Native Automation Infrastructure
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  A deep dive into our cloud-native approach to building scalable, reliable automation systems.
                </p>
                <div className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                  Read More →
                </div>
              </a>
            </div>
          </section>

          {/* Key Statistics */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-center text-3xl font-bold text-white mb-12">Our Impact in Numbers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">227</div>
                  <div className="text-white/80">Active Automations</div>
                  <div className="text-sm text-white/60 mt-1">Running 24/7</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                  <div className="text-white/80">Pages Generated</div>
                  <div className="text-sm text-white/60 mt-1">AI-powered content</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-white/80">Uptime</div>
                  <div className="text-sm text-white/60 mt-1">Reliable performance</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-2">1.2s</div>
                  <div className="text-white/80">Response Time</div>
                  <div className="text-sm text-white/60 mt-1">Lightning fast</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">AI Development</h3>
                <p className="text-white/70 text-sm mb-4">
                  Custom AI solutions including machine learning models, natural language processing, and computer vision systems.
                </p>
                <a href="/services" className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors">
                  Learn More →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Automation Systems</h3>
                <p className="text-white/70 text-sm mb-4">
                  End-to-end automation solutions that streamline operations and improve efficiency across your organization.
                </p>
                <a href="/services" className="text-fuchsia-400 text-sm font-medium hover:text-fuchsia-300 transition-colors">
                  Learn More →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Cloud Infrastructure</h3>
                <p className="text-white/70 text-sm mb-4">
                  Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.
                </p>
                <a href="/services" className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors">
                  Learn More →
                </a>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mx-auto max-w-4xl px-6 pb-14">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl p-12 border border-cyan-500/30 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join the autonomous revolution and discover how AI-powered automation can drive innovation, 
                efficiency, and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a 
                  href="/about" 
                  className="px-8 py-4 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10 mt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-cyan-400">Company</h3>
                <ul className="space-y-2 text-white/70">
                  <li><a href="/about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                  <li><a href="/news" className="hover:text-cyan-400 transition-colors">News</a></li>
                  <li><a href="/events" className="hover:text-cyan-400 transition-colors">Events</a></li>
                  <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-fuchsia-400">Services</h3>
                <ul className="space-y-2 text-white/70">
                  <li><a href="/services" className="hover:text-fuchsia-400 transition-colors">AI Development</a></li>
                  <li><a href="/services" className="hover:text-fuchsia-400 transition-colors">Automation</a></li>
                  <li><a href="/services" className="hover:text-fuchsia-400 transition-colors">Cloud Infrastructure</a></li>
                  <li><a href="/services" className="hover:text-fuchsia-400 transition-colors">Consulting</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-green-400">Resources</h3>
                <ul className="space-y-2 text-white/70">
                  <li><a href="/blog" className="hover:text-green-400 transition-colors">Blog</a></li>
                  <li><a href="/reports" className="hover:text-green-400 transition-colors">Reports</a></li>
                  <li><a href="/api-documentation" className="hover:text-green-400 transition-colors">API Docs</a></li>
                  <li><a href="/component-library" className="hover:text-green-400 transition-colors">Components</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-blue-400">Legal</h3>
                <ul className="space-y-2 text-white/70">
                  <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                  <li><a href="/security" className="hover:text-blue-400 transition-colors">Security</a></li>
                  <li><a href="/accessibility" className="hover:text-blue-400 transition-colors">Accessibility</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
              <p>&copy; 2025 Zion Tech Group. All rights reserved. | Autonomous Innovation Hub</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
