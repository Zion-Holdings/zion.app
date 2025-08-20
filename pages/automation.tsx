import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationOverviewPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous systems: redundancy, AI content, smart build orchestration, monitoring, and more." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Home</Link>
          </nav>

          <header className="text-center mb-14">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">Automation Systems</h1>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">A tour of our autonomous platform capabilities spanning redundancy, AI, build orchestration, and proactive monitoring.</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">🔄 Redundancy Systems</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>• Ultimate Redundancy V2</li>
                <li>• Comprehensive Redundancy</li>
                <li>• PM2 Process Resilience</li>
                <li>• Netlify/GitHub failover</li>
                <li>• Real-time health checks</li>
              </ul>
              <div className="text-white/70 text-sm">Designed for 99.99% uptime and zero-downtime releases.</div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-fuchsia-400 mb-3">🧠 AI Automation</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>• 200+ autonomous agents</li>
                <li>• Content generation factory</li>
                <li>• Intelligent orchestration</li>
                <li>• Predictive maintenance</li>
                <li>• Continuous learning</li>
              </ul>
              <div className="text-white/70 text-sm">Autonomous agents that build, test, optimize, and publish.</div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-green-400 mb-3">⚡ Build Orchestration</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>• Smart dependency management</li>
                <li>• Self-healing build flows</li>
                <li>• Performance optimizations</li>
                <li>• Automated QA gates</li>
                <li>• Safe deploy & rollback</li>
              </ul>
              <div className="text-white/70 text-sm">From code to production with resilience and speed.</div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Related Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/case-studies" className="group bg-white/10 rounded-xl p-5 border border-white/20 hover:border-cyan-400/30 transition-all">
                <div className="text-cyan-300 font-semibold mb-1">Case Studies</div>
                <div className="text-white/70 text-sm">See autonomous systems in action.</div>
              </Link>
              <Link href="/services" className="group bg-white/10 rounded-xl p-5 border border-white/20 hover:border-fuchsia-400/30 transition-all">
                <div className="text-fuchsia-300 font-semibold mb-1">AI Services</div>
                <div className="text-white/70 text-sm">Engage our platform capabilities.</div>
              </Link>
              <Link href="/resources" className="group bg-white/10 rounded-xl p-5 border border-white/20 hover:border-green-400/30 transition-all">
                <div className="text-green-300 font-semibold mb-1">Resources</div>
                <div className="text-white/70 text-sm">Guides, tools, and documentation.</div>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

