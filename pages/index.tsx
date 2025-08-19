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
              <a href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Blog
              </a>
              <a href="/events" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Events
              </a>
              <a href="/news" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                News
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
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
                    <span>Adaptive Workflows</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-2xl p-8 border border-fuchsia-400/30 hover:border-fuchsia-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">Cybersecurity Excellence</h3>
                <p className="text-white/70 mb-4">
                  Advanced security systems with autonomous threat detection and response capabilities.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-400">✓</span>
                    <span>Real-time Monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-400">✓</span>
                    <span>Automated Response</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-400">✓</span>
                    <span>Behavioral Analysis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">Cloud Infrastructure</h3>
                <p className="text-white/70 mb-4">
                  Self-managing cloud solutions that automatically scale and optimize for peak performance.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Auto-scaling Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Performance Monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Cost Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Our Impact in Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                  <div className="text-white/70">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">99.9%</div>
                  <div className="text-white/70">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">1.2M+</div>
                  <div className="text-white/70">Pages Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-white/70">Monitoring</div>
                </div>
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

          {/* Contact Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-8 border border-cyan-400/30">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-cyan-300 mb-4">Ready to Experience the Future?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Join us in revolutionizing technology through autonomous innovation and intelligent automation.
                  Let's discuss how we can transform your business.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200">
                    Get Started Today
                  </a>
                  <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-all duration-200">
                    Explore Our Services
                  </a>
                </div>
              </div>
            </div>
          </section>

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
        </main>
      </div>
    </>
  );
}
