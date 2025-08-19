import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
        <meta property="og:title" content="About Zion Tech Group | Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          
          <article className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems.
              </p>
            </header>

            <div className="prose prose-invert max-w-none">
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Mission</h2>
                <p className="text-lg text-white/90 mb-6">
                  At Zion Tech Group, we're driven by a singular vision: to create autonomous systems that operate seamlessly, 
                  intelligently, and continuously without human intervention. Our mission is to revolutionize how technology 
                  serves humanity by building self-sustaining, intelligent ecosystems that adapt, learn, and evolve.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-3">🤖</div>
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-2">Autonomous Innovation</h3>
                    <p className="text-white/80">Building systems that think, learn, and act independently</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-3">🚀</div>
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-2">Continuous Evolution</h3>
                    <p className="text-white/80">Systems that improve themselves over time</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-3">🌐</div>
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-2">Global Impact</h3>
                    <p className="text-white/80">Technology that serves humanity worldwide</p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Story</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-500/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3">The Beginning</h3>
                    <p className="text-white/90">
                      Founded in 2024, Zion Tech Group emerged from a vision to create technology that doesn't just assist humans, 
                      but operates autonomously to solve complex problems. We started with a simple question: "What if technology 
                      could run itself?"
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">The Breakthrough</h3>
                    <p className="text-white/90">
                      Our breakthrough came with the development of the Zion Autonomous Hub - a self-managing system that 
                      continuously monitors, optimizes, and improves its own performance. This became the foundation for 
                      everything we build.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-500/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Today & Tomorrow</h3>
                    <p className="text-white/90">
                      Today, we operate 227 autonomous systems across multiple domains. Tomorrow, we're working on quantum 
                      computing integration, advanced AI agents, and systems that can predict and prevent problems before they occur.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">Core Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Artificial Intelligence</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• Advanced machine learning models</li>
                      <li>• Natural language processing</li>
                      <li>• Computer vision systems</li>
                      <li>• Predictive analytics</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Automation & Orchestration</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• Workflow automation</li>
                      <li>• Infrastructure management</li>
                      <li>• Continuous deployment</li>
                      <li>• Self-healing systems</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Cloud & Infrastructure</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• Multi-cloud architecture</li>
                      <li>• Auto-scaling systems</li>
                      <li>• Edge computing</li>
                      <li>• Microservices</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Data & Analytics</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• Real-time processing</li>
                      <li>• Big data analytics</li>
                      <li>• Data visualization</li>
                      <li>• Business intelligence</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg p-6">
                    <div className="text-3xl font-bold text-cyan-300 mb-2">227</div>
                    <div className="text-white/80">Active Automations</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-lg p-6">
                    <div className="text-3xl font-bold text-purple-300 mb-2">2,960</div>
                    <div className="text-white/80">Generated Pages</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6">
                    <div className="text-3xl font-bold text-green-300 mb-2">99.7%</div>
                    <div className="text-white/80">System Uptime</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-6">
                    <div className="text-3xl font-bold text-orange-300 mb-2">24/7</div>
                    <div className="text-white/80">Operation</div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">Join Our Mission</h2>
                <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Ready to Experience the Future?</h3>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Discover how autonomous technology can transform your business and operations. 
                    Experience the power of systems that never sleep, never stop learning, and never stop improving.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                      Get Started
                    </Link>
                    <Link href="/automation" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                      Learn More
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}