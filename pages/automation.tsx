import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group</title>
        <meta name="description" content="Explore our redundancy, AI automation, and build orchestration systems with self-healing, monitoring, and zero-downtime capabilities." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300">← Back to Home</Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Automation Systems
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A unified view of our redundancy, AI automation, and build orchestration capabilities.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Redundancy Systems</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-6">
                <li>• Ultimate Redundancy V2</li>
                <li>• Comprehensive Redundancy</li>
                <li>• PM2 Process Management</li>
                <li>• GitHub Actions Redundancy</li>
                <li>• Netlify Functions Redundancy</li>
              </ul>
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm">See Results →</Link>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">AI Automation</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-6">
                <li>• AI Trends Research</li>
                <li>• Content Generation</li>
                <li>• Intelligent Orchestration</li>
                <li>• Autonomous Agents</li>
                <li>• Innovation Systems</li>
              </ul>
              <Link href="/blog" className="text-fuchsia-400 hover:text-fuchsia-300 font-semibold text-sm">Learn More →</Link>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-green-400 mb-4">Build & Deploy</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-6">
                <li>• Smart Build Orchestration</li>
                <li>• Continuous Monitoring</li>
                <li>• Self-Healing Systems</li>
                <li>• Performance Optimization</li>
                <li>• Quality Assurance</li>
              </ul>
              <Link href="/services" className="text-green-400 hover:text-green-300 font-semibold text-sm">Our Services →</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

