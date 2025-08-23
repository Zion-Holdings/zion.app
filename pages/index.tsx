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
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
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
              <Link href="/insights" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-orange-400/50">
                Insights
              </Link>
              <Link href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Case Studies
              </Link>
              <Link href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Blog
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact
              </Link>
            </div>
          </section>

          {/* Hero Statistics Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">227</div>
                <div className="text-sm text-white/70">Active Automations</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-fuchsia-400 mb-2">2,960</div>
                <div className="text-sm text-white/70">Pages Generated</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
                <div className="text-sm text-white/70">Core Components</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-sm text-white/70">Uptime</div>
              </div>
            </div>
          </section>

          {/* Features Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Revolutionary Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Autonomous AI Agents</h3>
                <p className="text-white/70 leading-relaxed">
                  Self-running AI systems that continuously monitor, optimize, and improve your digital infrastructure without human intervention.
                </p>
                <div className="mt-4 flex items-center text-cyan-300 text-sm">
                  <span>Learn more</span>
                  <span className="ml-2">→</span>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-4">Real-time Monitoring</h3>
                <p className="text-white/70 leading-relaxed">
                  Advanced monitoring systems that provide instant alerts, performance metrics, and predictive analytics for proactive issue resolution.
                </p>
                <div className="mt-4 flex items-center text-fuchsia-300 text-sm">
                  <span>Learn more</span>
                  <span className="ml-2">→</span>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Auto-healing Systems</h3>
                <p className="text-white/70 leading-relaxed">
                  Intelligent systems that automatically detect and resolve issues, deploy fixes, and maintain optimal performance around the clock.
                </p>
                <div className="mt-4 flex items-center text-blue-300 text-sm">
                  <span>Learn more</span>
                  <span className="ml-2">→</span>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Advanced Analytics</h3>
                <p className="text-white/70 leading-relaxed">
                  Comprehensive data insights and reporting that help you understand performance trends and make data-driven decisions.
                </p>
                <div className="mt-4 flex items-center text-yellow-300 text-sm">
                  <span>Learn more</span>
                  <span className="ml-2">→</span>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">Security First</h3>
                <p className="text-white/70 leading-relaxed">
                  Enterprise-grade security with continuous threat detection, automated vulnerability scanning, and compliance monitoring.
                </p>
                <div className="mt-4 flex items-center text-green-300 text-sm">
                  <span>Learn more</span>
                  <span className="ml-2">→</span>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Scalable Infrastructure</h3>
                <p className="text-white/70 leading-relaxed">
                  Cloud-native architecture that automatically scales with your needs, ensuring optimal performance and cost efficiency.
                </p>
                <div className="mt-4 flex items-center text-purple-300 text-sm">
                  <span>Learn more</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </section>

          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0403</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0402</h3>
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
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join the future of autonomous technology. Our AI-powered systems will revolutionize how you manage, monitor, and optimize your digital infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </Link>
                <Link href="/case-studies" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  View Case Studies
                </Link>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mx-auto max-w-4xl px-6 pb-14">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-white/70 mb-6">
                Get the latest insights on autonomous technology, AI innovations, and industry trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;
