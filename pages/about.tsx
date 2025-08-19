import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to advance autonomous AI technologies and create the future of intelligent automation." />
        <meta property="og:title" content="About Zion Tech Group | Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to advance autonomous AI technologies and create the future of intelligent automation." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <nav className="mb-6 text-left">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ← Back to Home
                </a>
              </nav>
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of autonomous AI and intelligent automation systems
              </p>
            </header>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-lg text-white/80 mb-6">
                  Zion Tech Group is dedicated to advancing the frontiers of artificial intelligence 
                  and autonomous systems. We believe in creating technology that works for humanity, 
                  not against it.
                </p>
                <p className="text-lg text-white/80">
                  Our autonomous AI systems are designed to learn, adapt, and evolve, creating 
                  a future where technology enhances human potential rather than replacing it.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Core Values</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Innovation through autonomous learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Ethical AI development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Human-AI collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Global accessibility
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Autonomous AI</h3>
                  <p className="text-white/80">
                    Self-learning systems that continuously improve and adapt to new challenges
                  </p>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Cloud-Native</h3>
                  <p className="text-white/80">
                    Scalable, resilient infrastructure built for the modern digital economy
                  </p>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Blockchain Integration</h3>
                  <p className="text-white/80">
                    Decentralized systems for trust, transparency, and autonomous governance
                  </p>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Edge Computing</h3>
                  <p className="text-white/80">
                    Distributed intelligence for real-time processing and decision-making
                  </p>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Quantum-Ready</h3>
                  <p className="text-white/80">
                    Future-proof architecture designed for quantum computing integration
                  </p>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Federated Learning</h3>
                  <p className="text-white/80">
                    Collaborative AI training while preserving privacy and data sovereignty
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-6 rounded-xl border border-cyan-400/30">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">227+</div>
                  <div className="text-white/80">Automations</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-6 rounded-xl border border-cyan-400/30">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2,960+</div>
                  <div className="text-white/80">Pages Generated</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-6 rounded-xl border border-cyan-400/30">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">12</div>
                  <div className="text-white/80">Components</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-6 rounded-xl border border-cyan-400/30">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-white/80">Autonomous Operation</div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Join the Future</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Be part of the revolution in autonomous AI technology. Whether you're a developer, 
                researcher, or business leader, there's a place for you in the Zion ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all"
                >
                  Get in Touch
                </a>
                <a 
                  href="/automation" 
                  className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all"
                >
                  Explore Our Systems
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}