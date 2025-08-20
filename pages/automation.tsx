import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group</title>
        <meta name="description" content="Explore Zion's redundancy, AI automation, and build orchestration systems." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Automation Systems</h1>
            <p className="text-white/80 max-w-3xl mx-auto">Discover our redundancy stacks, AI content systems, and build/deploy automation.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">Redundancy Systems</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>Ultimate Redundancy V2</li>
                <li>Comprehensive Redundancy</li>
                <li>PM2 Process Management</li>
                <li>GitHub Actions Redundancy</li>
                <li>Netlify Functions Redundancy</li>
              </ul>
              <a href="https://github.com/Zion-Holdings/zion.app#readme" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">View Docs →</a>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-fuchsia-400 mb-3">AI Automation</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>AI Trends Research</li>
                <li>Content Generation</li>
                <li>Intelligent Orchestration</li>
                <li>Autonomous Agents</li>
                <li>Innovation Systems</li>
              </ul>
              <Link href="/resources" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">Explore Resources →</Link>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-green-400 mb-3">Build Orchestration</h2>
              <ul className="text-white/80 text-sm space-y-2 mb-4">
                <li>Smart Dependency Management</li>
                <li>Automated Testing</li>
                <li>Performance Optimization</li>
                <li>Error Recovery</li>
                <li>Deployment Automation</li>
              </ul>
              <a href="https://github.com/Zion-Holdings/zion.app/blob/main/DEPLOYMENT.md" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-semibold">Deployment Guide →</a>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/" className="text-white/80 hover:text-white">← Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  );
}

