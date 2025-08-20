import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group - Autonomous AI Platform</title>
        <meta name="description" content="Explore Zion Tech Group's revolutionary automation systems featuring 227+ active automations, autonomous AI agents, and self-healing networks." />
        <meta property="og:title" content="Automation Systems - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary automation systems with 227+ active automations and autonomous AI agents." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Automation Systems
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience the future of autonomous technology with our revolutionary automation platform
            </p>
          </section>

          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Core Automation Capabilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Autonomous AI Agents</h3>
                <p className="text-white/70 mb-6">
                  Self-running intelligent agents that continuously monitor, analyze, and optimize your systems.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Content Generation</li>
                  <li>• Error Detection</li>
                  <li>• Performance Optimization</li>
                  <li>• Trend Analysis</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Self-Healing Networks</h3>
                <p className="text-white/70 mb-6">
                  Intelligent systems that automatically detect and resolve issues without human intervention.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Error Recovery</li>
                  <li>• System Restoration</li>
                  <li>• Performance Tuning</li>
                  <li>• Health Monitoring</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Intelligent Orchestration</h3>
                <p className="text-white/70 mb-6">
                  Advanced workflow management that coordinates multiple automation systems seamlessly.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Workflow Automation</li>
                  <li>• Resource Management</li>
                  <li>• Load Balancing</li>
                  <li>• Task Scheduling</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Automation Statistics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                <div className="text-white/70">Active Automations</div>
              </div>
              
              <div className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-400/30 text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">99.9%</div>
                <div className="text-white/70">Success Rate</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-8 border border-green-400/30 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-white/70">Operation</div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/30 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">0</div>
                <div className="text-white/70">Manual Intervention</div>
              </div>
            </div>
          </section>

          <section className="text-center mb-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Ready to Automate Everything?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Discover how our autonomous systems can transform your business operations and eliminate manual tasks.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border border-cyan-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  Get Started
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-fuchsia-400/50">
                  View Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}