import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and AI-powered solutions." />
        <meta property="og:title" content="About Zion Tech Group | Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and AI-powered solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems.
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-300">Our Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-lg p-8 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Autonomous Innovation</h3>
                  <p className="text-white/80 leading-relaxed">
                    We're building the world's first truly autonomous technology ecosystem where AI agents 
                    work independently to create, optimize, and maintain digital solutions without human intervention.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-8 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Intelligent Automation</h3>
                  <p className="text-white/80 leading-relaxed">
                    Our systems learn, adapt, and evolve continuously, delivering unprecedented efficiency 
                    and innovation across all aspects of digital technology.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-300">Core Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-lg p-6 border border-green-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-green-400">AI Agent Factory</h3>
                  <p className="text-white/80 text-sm">
                    Self-replicating AI agents that autonomously create and manage digital content, 
                    optimize performance, and drive continuous improvement.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Autonomous Orchestration</h3>
                  <p className="text-white/80 text-sm">
                    Intelligent systems that coordinate complex workflows, manage resources, and 
                    ensure optimal performance across all operations.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">Self-Healing Infrastructure</h3>
                  <p className="text-white/80 text-sm">
                    Advanced monitoring and recovery systems that automatically detect, diagnose, 
                    and resolve issues before they impact users.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-300">Our Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227</div>
                  <div className="text-white/70">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-white/70">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">2.1s</div>
                  <div className="text-white/70">Average Load Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">A+</div>
                  <div className="text-white/70">Performance Score</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-300">The Future Vision</h2>
              <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg p-8 border border-indigo-500/30">
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  We envision a world where technology works autonomously, continuously improving itself 
                  while humans focus on creativity, innovation, and strategic thinking. Our autonomous 
                  systems are the foundation of this future.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-cyan-300">Short Term (2025-2026)</h4>
                    <ul className="text-white/80 space-y-2">
                      <li>• Expand AI agent capabilities</li>
                      <li>• Launch autonomous content platforms</li>
                      <li>• Deploy self-optimizing infrastructure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-purple-300">Long Term (2027+)</h4>
                    <ul className="text-white/80 space-y-2">
                      <li>• Fully autonomous digital ecosystems</li>
                      <li>• AI-driven innovation networks</li>
                      <li>• Self-evolving technology platforms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Join the Revolution</h2>
              <p className="text-lg text-white/80 mb-8">
                Be part of the future where technology works autonomously and innovation never stops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                  Explore Our Platform
                </Link>
                <Link href="/contact" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                  Get in Touch
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}