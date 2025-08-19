import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous AI systems and cloud-native solutions." />
        <meta property="og:title" content="About Zion Tech Group | Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous AI systems and cloud-native solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="max-w-6xl mx-auto">
            <div className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </div>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of autonomous technology through AI-driven innovation and cloud-native solutions.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Mission</h2>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  To create a world where technology operates autonomously, continuously improving and innovating without human intervention, while maintaining the highest standards of security, reliability, and ethical AI development.
                </p>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Autonomous AI Systems</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Cloud-Native Architecture</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Continuous Innovation</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Vision</h2>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  To be the global leader in autonomous technology, creating systems that not only solve today's challenges but anticipate and address tomorrow's opportunities through intelligent automation and AI-driven insights.
                </p>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-3">🚀</span>
                    <span>Future-Ready Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-3">🌍</span>
                    <span>Global Impact</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-3">🤖</span>
                    <span>AI-First Approach</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">Our Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227</div>
                  <div className="text-white/80">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960</div>
                  <div className="text-white/80">Generated Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">99.8%</div>
                  <div className="text-white/80">Uptime</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">Core Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">🤖</div>
                  <h3 className="font-semibold text-green-400 mb-2">AI Agents</h3>
                  <p className="text-white/80 text-sm">Autonomous AI systems that learn and adapt</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">☁️</div>
                  <h3 className="font-semibold text-blue-400 mb-2">Cloud Native</h3>
                  <p className="text-white/80 text-sm">Scalable cloud infrastructure</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">🔄</div>
                  <h3 className="font-semibold text-purple-400 mb-2">Automation</h3>
                  <p className="text-white/80 text-sm">Continuous deployment & monitoring</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">🔒</div>
                  <h3 className="font-semibold text-yellow-400 mb-2">Security</h3>
                  <p className="text-white/80 text-sm">Advanced threat protection</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}