import React from 'react';
import Homepage2037 from '../components/Homepage2037';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
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
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems that evolve independently.
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
              We're building the future where AI systems think, learn, and innovate without human intervention, 
              creating a world of endless technological possibilities.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:from-cyan-500 hover:to-fuchsia-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25">
                Explore Our Services
              </Link>
              <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-cyan-400/50 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
                View Case Studies
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </Link>
              <Link href="/features" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Features
              </Link>
              <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Our Services
              </Link>
              <Link href="/ai-insights" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-indigo-400/50">
                AI Insights
              </Link>
              <Link href="/ai-implementation-guide" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-orange-400/50">
                Implementation Guide
              </Link>
              <Link href="/faq" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-red-400/50">
                FAQ
              </Link>
              <Link href="/ai-glossary" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-pink-400/50">
                Glossary
              </Link>
              <Link href="/resources" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Resources
              </Link>
              <Link href="/ai-trends-insights" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-indigo-400/50">
                Trends & Insights
              </Link>
              <Link href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Case Studies
              </Link>
              <Link href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Blog
              </Link>
              <Link href="/faq" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-orange-400/50">
                FAQ
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact
              </Link>
            </div>
          </section>

          {/* Statistics Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-16 mb-20">
            <div className="bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/20">
              <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Our Autonomous Achievements</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="text-5xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">227</div>
                  <div className="text-white/80 font-medium">Active Automations</div>
                  <div className="text-white/60 text-sm mt-1">Running 24/7</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-bold text-fuchsia-400 mb-2 group-hover:scale-110 transition-transform duration-300">2,960+</div>
                  <div className="text-white/80 font-medium">Pages Generated</div>
                  <div className="text-white/60 text-sm mt-1">AI-Created Content</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                  <div className="text-white/80 font-medium">Uptime</div>
                  <div className="text-white/60 text-sm mt-1">Reliable Performance</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">12</div>
                  <div className="text-white/80 font-medium">AI Components</div>
                  <div className="text-white/60 text-sm mt-1">Intelligent Systems</div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Technologies */}
          <section className="mx-auto max-w-7xl px-6 pb-16 mb-20">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Cutting-Edge Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Autonomous AI Systems</h3>
                <p className="text-white/80 mb-6">
                  Self-learning AI that continuously improves and evolves without human intervention, 
                  making intelligent decisions in real-time.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 rounded-2xl p-8 border border-fuchsia-500/20 hover:border-fuchsia-400/40 transition-all duration-300 group">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">Intelligent Automation</h3>
                <p className="text-white/80 mb-6">
                  End-to-end automation systems that streamline operations, optimize workflows, 
                  and deliver measurable business value.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Self-Healing Systems</li>
                  <li>• Performance Monitoring</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Cloud-Native Infrastructure</h3>
                <p className="text-white/80 mb-6">
                  Scalable, resilient cloud infrastructure with automated deployment, 
                  monitoring, and optimization capabilities.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li>• Auto-scaling</li>
                  <li>• Load Balancing</li>
                  <li>• Cost Optimization</li>
                  <li>• Security Hardening</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">AI-Powered Automation</h3>
                <p className="text-white/70 leading-relaxed">
                  Our autonomous systems work 24/7 to optimize your business processes, 
                  generate content, and maintain infrastructure with zero human intervention.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4">Lightning Fast Performance</h3>
                <p className="text-white/70 leading-relaxed">
                  Experience sub-second response times with our optimized cloud infrastructure 
                  and intelligent caching systems that adapt to your traffic patterns.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Self-Healing Systems</h3>
                <p className="text-white/70 leading-relaxed">
                  Our infrastructure automatically detects and resolves issues before they impact 
                  your users, ensuring 99.9% uptime and seamless operation.
                </p>
              </div>
            </div>
          </section>

          {/* Technology Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Cutting-Edge Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center group hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold text-cyan-400">Next.js 14</h3>
                <p className="text-xs text-white/60 mt-2">React Framework</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center group hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="font-semibold text-fuchsia-400">AI Agents</h3>
                <p className="text-xs text-white/60 mt-2">Autonomous Systems</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center group hover:border-blue-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="font-semibold text-blue-400">Cloud Native</h3>
                <p className="text-xs text-white/60 mt-2">Scalable Infrastructure</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center group hover:border-green-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold text-green-400">Zero Trust</h3>
                <p className="text-xs text-white/60 mt-2">Security First</p>
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">J</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">John Chen</h4>
                    <p className="text-sm text-white/60">CTO, TechFlow Inc.</p>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Zion Tech Group's autonomous systems have transformed our operations. 
                  We've seen a 300% increase in efficiency with zero downtime."
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fuchsia-400">Sarah Martinez</h4>
                    <p className="text-sm text-white/60">VP Engineering, DataSphere</p>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "The AI-powered content generation and optimization tools have revolutionized 
                  our marketing efforts. ROI increased by 450% in just 3 months."
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400">Mike Thompson</h4>
                    <p className="text-sm text-white/60">CEO, AutoScale Solutions</p>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Their self-healing infrastructure is incredible. We haven't had a single 
                  manual intervention in 6 months. It's like having a perfect team that never sleeps."
                </p>
              </div>
            </div>
          </section>

          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-01-17-1200" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 01: 17: 1200</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0111</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span></span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0403</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>
          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}
          
          {/* Testimonials Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JD
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">John Doe</div>
                    <div className="text-sm text-white/60">CTO, TechCorp</div>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Zion Tech Group's autonomous systems have revolutionized our infrastructure. We've seen a 40% reduction in downtime and our team can focus on innovation instead of maintenance."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SJ
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">Sarah Johnson</div>
                    <div className="text-sm text-white/60">VP Engineering, StartupXYZ</div>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "The AI-powered monitoring and auto-healing capabilities have been game-changing. Our deployment process is now completely automated and reliable."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    MW
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">Mike Wilson</div>
                    <div className="text-sm text-white/60">DevOps Lead, EnterpriseInc</div>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "We've been using Zion Tech Group for over a year now. The autonomous redundancy systems have eliminated our manual failover procedures completely."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Powered by Cutting-Edge Technology</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Next.js', icon: '⚛️', color: 'from-blue-400 to-indigo-500' },
                { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
                { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-indigo-600' },
                { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500' },
                { name: 'PM2', icon: '🚀', color: 'from-purple-400 to-pink-500' },
                { name: 'GitHub Actions', icon: '🐙', color: 'from-gray-400 to-slate-500' },
                { name: 'Netlify', icon: '🌐', color: 'from-cyan-400 to-blue-500' },
                { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-teal-500' },
                { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-indigo-500' },
                { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-500 to-indigo-600' },
                { name: 'Redis', icon: '🔴', color: 'from-red-400 to-pink-500' },
                { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-500' }
              ].map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <div className="text-sm text-white/70 font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Content Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Explore Our Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">About Us</h3>
                <p className="text-sm text-white/70">Discover our mission and vision</p>
              </Link>
              
              <Link href="/features" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Features</h3>
                <p className="text-white/70 text-sm">Explore our AI capabilities</p>
              </Link>
              
              <Link href="/pricing" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Pricing</h3>
                <p className="text-white/70 text-sm">View our plans and pricing</p>
              </Link>
              
              <Link href="/documentation" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Documentation</h3>
                <p className="text-white/70 text-sm">Read guides and tutorials</p>
              </Link>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <div className="bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join the autonomous revolution and discover how our AI-powered solutions can drive innovation, 
                efficiency, and growth for your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:from-cyan-500 hover:to-fuchsia-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </Link>
                <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-cyan-400/50 text-white font-bold rounded-xl transition-all duration-300">
                  View Success Stories
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;
